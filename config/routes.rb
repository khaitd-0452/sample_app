Rails.application.routes.draw do
  scope "(:locale)", locale: /en|vi/ do
    root   "static_pages#home"
    get    "/help",    to: "static_pages#help"
    get    "/about",   to: "static_pages#about"
    get    "/contact", to: "static_pages#contact"
    get    "/signup",  to: "users#new"
    post   "/signup",  to: "users#create"
    get    "/login",   to: "sessions#new"
    post   "/login",   to: "sessions#create"
    delete "/logout",  to: "sessions#destroy"
    resources :users
    resources :account_activations, only: :edit
    resources :password_resets, only: %i(new create edit update)
    resources :microposts, only: %i(create destroy)
    get '/microposts', to: 'static_pages#home'
    resources :users do
      member do
        get :following, :followers
      end
    end
    resources :relationships, only: %i(create destroy)
  end
end
