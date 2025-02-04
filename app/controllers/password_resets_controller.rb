class PasswordResetsController < ApplicationController
  before_action :load_user,
                :validate_user,
                :check_expiration,
                only: %i(edit update)

  def new; end

  def create
    @user = User.find_by(email: params.dig(:password_reset, :email)&.downcase)
    if @user
      @user.create_reset_digest
      @user.send_password_reset_email
      flash[:info] = t "alert.users.password_reset.email_sent"
      redirect_to root_url
    else
      flash.now[:danger] = t "alert.users.password_reset.email_not_found"
      render :new
    end
  end

  def edit; end

  def update
    if params[:user][:password].blank?
      @user.errors.add(:password, t("activerecord.errors.messages.blank"))
      render :edit
    elsif @user.update(user_params)
      reset_password_and_redirect
    else
      render :edit
    end
  end

  private

  def load_user
    @user = User.find_by(email: params[:email])
    return if @user

    flash[:danger] = t "alert.users.password_reset.user_not_found"
    redirect_to root_url
  end

  def validate_user
    return if @user.activated? && @user.authenticated?(:reset, params[:id])

    flash[:danger] = t "alert.users.password_reset.user_not_activated"
    redirect_to root_url
  end

  def check_expiration
    return unless @user.password_reset_expired?

    flash[:danger] = t "alert.users.password_reset.expired_link"
    redirect_to new_password_reset_url
  end

  def user_params
    params.require(:user).permit(User::USER_PARAMS)
  end

  def reset_password_and_redirect
    log_in @user
    @user.update_column(:reset_digest, nil)
    flash[:success] = t "alert.users.password_reset.password_reset"
    redirect_to @user
  end
end
