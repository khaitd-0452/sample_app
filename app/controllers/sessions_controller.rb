class SessionsController < ApplicationController
  def new; end

  def create
    user = User.find_by email: params.dig(:session, :email)&.downcase
    if user&.authenticate params.dig(:session, :password)
      log_in_and_redirect user
    else
      flash.now[:danger] = t "views.login.error_message"
      render :new, status: :unprocessable_entity
    end
  end

  def destroy
    log_out
    redirect_to root_url, status: :see_other
  end

  private

  def log_in_and_redirect user
    reset_session
    log_in user
    params.dig(:session, :remember_me) == "1" ? remember(user) : forget(user)
    flash[:success] = t("views.login.success_message")
    redirect_to user, status: :see_other
  end
end
