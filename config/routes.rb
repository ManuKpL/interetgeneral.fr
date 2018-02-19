Rails.application.routes.draw do
  get '/list-editions', to: 'editions#index', as: 'editions'

  ActiveAdmin.routes(self)
  devise_for :users
  root 'pages#home'

  match '*any', to: redirect('/'), via: :all
end
