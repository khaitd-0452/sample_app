class UsersController < ApplicationController
  before_action :logged_in_user, except: %i(new create show)
  before_action :find_user, except: %i(index new create)
  before_action :correct_user, only: %i(edit update)
  before_action :admin_user, only: :destroy

  def index
    @pagy, @users = pagy(User.all,
                         limit: Settings.default.users_pagination.per_page)
  end

  def show
    @pagy, @microposts = pagy(@user.microposts.newest,
                              limit: Settings.default.micropost_page)
  end

  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    if @user.save
      @user.send_activation_email
      flash[:info] = t "alert.mailer.check_email"
      redirect_to root_path
    else
      render "new", status: :unprocessable_entity
    end
  end

  def edit; end

  def update
    if @user.update user_params
      flash[:success] = t "alert.users.update.success_message"
      redirect_to @user
    else
      render :edit
    end
  end

  def destroy
    if @user.destroy
      flash[:success] = t "alert.users.destroy.success_message"
    else
      flash[:danger] = t "alert.users.destroy.fail_message"
    end
    redirect_to users_path
  end

  def following
    @title = t "views.home.following"
    @pagy, @users = pagy(@user.following, limit: Settings.default.page_10)
    render "show_follow"
  end

  def followers
    @title = t "views.home.followers"
    @pagy, @users = pagy(@user.followers, limit: Settings.default.page_10)
    render "show_follow"
  end

  private

  def user_params
    params.require(:user).permit(User::USER_PARAMS)
  end

  def find_user
    @user = User.find_by id: params[:id]
    return if @user

    flash[:warning] = t "alert.users.not_found"
    redirect_to root_path
  end

  def correct_user
    return if current_user?(@user)

    flash[:error] = t "alert.users.can_not_edit"
    redirect_to root_path
  end

  def admin_user
    redirect_to root_path unless current_user.admin?
  end
end
