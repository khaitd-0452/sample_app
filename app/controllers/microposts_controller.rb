class MicropostsController < ApplicationController
  before_action :logged_in_user, only: %i(create destroy)
  before_action :correct_user, only: :destroy

  def create
    @micropost = current_user.microposts.build micropost_params
    @micropost.image.attach params.dig(:micropost, :image)
    if @micropost.save
      flash[:success] = t "views.microposts.success_create_message"
      redirect_to root_url
    else
      load_feed_items
      render "static_pages/home", status: :unprocessable_entity
    end
  end

  def destroy
    if @micropost.destroy
      flash[:success] = t "views.microposts.success_delete_message"
    else
      flash[:danger] = t "views.microposts.fail_delete_message"
    end
    redirect_to request.referer || root_url
  end

  private
  def micropost_params
    params.require(:micropost).permit Micropost::PERMITTED_PARAMS
  end

  def correct_user
    @micropost = current_user.microposts.find_by id: params[:id]
    return if @micropost

    flash[:danger] = t "views.microposts.invalid"
    redirect_to root_url
  end

  def load_feed_items
    @pagy, @feed_items = pagy(current_user.feed,
                              limit: Settings.default.page_10)
  end
end
