Rails.application.routes.draw do
  scope '/api' do
    get '/infographic', to: 'infographics#index', as: 'api_infographics'
    scope '/edition' do
      get '/', to: 'editions#index', as: 'api_edition'
      get '/:edition_id/article', to: 'articles#index', as: 'api_edition_articles'
      get '/:edition_id/author', to: 'authors#index', as: 'api_edition_authors'
    end
  end

  ActiveAdmin.routes(self)
  devise_for :users
  root 'pages#home'

  match '*any', to: redirect('/'), via: :all
end
