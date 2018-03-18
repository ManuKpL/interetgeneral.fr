Rails.application.routes.draw do
  scope '/api' do
    get '/editions', to: 'editions#index', as: 'api_editions'
    get '/editions-sample', to: 'editions#sample', as: 'api_editions_sample'
    get '/infographics', to: 'infographics#index', as: 'api_infographics'
    get '/infographics-sample', to: 'infographics#sample', as: 'api_infographics_sample'
  end

  ActiveAdmin.routes(self)
  devise_for :users
  root 'pages#home'

  match '*any', to: redirect('/'), via: :all
end
