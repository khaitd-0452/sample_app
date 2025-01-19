class User < ApplicationRecord
  USER_PARAMS = [:name, :email, :password, :password_confirmation].freeze

  before_save :downcase_email

  validates :name,
            presence: true,
            length: {maximum: Settings.default.validate.name.maxLength}

  validates :email,
            presence: true,
            length: {maximum: Settings.default.validate.email.maxLength},
            format: {
              with: Regexp.new(
                Settings.default.validate.email.format,
                Regexp::IGNORECASE
              )
            },
            uniqueness: {case_sensitive: false}

  validates :password,
            presence: true,
            length: {minimum: Settings.default.validate.password.minLength}

  has_secure_password

  private

  def downcase_email
    email.downcase!
  end
end
