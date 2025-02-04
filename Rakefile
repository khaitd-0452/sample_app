# Add your own tasks in files placed in lib/tasks ending in .rake,
# for example lib/tasks/capistrano.rake, and they will automatically be available to Rake.

require_relative "config/application"

namespace :i18n do
  desc "Export translations to JSON"
  task export: :environment do
    require "i18n-js"
    I18nJS.call(config_file: "config/i18n.yml")
    puts "Translations exported successfully!"
  end
end

Rails.application.load_tasks
