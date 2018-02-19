Rails.application.routes.draw do
  scope '/api' do
    get '/editions', to: 'editions#index', as: 'api_editions'
  end

  ActiveAdmin.routes(self)
  devise_for :users
  root 'pages#home'

  match '*any', to: redirect('/'), via: :all
end
