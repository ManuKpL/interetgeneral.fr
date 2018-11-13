Rails.application.routes.draw do

  root 'pages#home'

  scope '/' do
    get 'editions',     to: 'pages#home'
    get 'editions/:id', to: 'pages#home'
    get 'infographies', to: 'pages#home'
  end

  scope '/api' do
    get '/announcement', to: 'announcements#current', as: 'api_announcement'
    get '/infographics', to: 'infographics#index', as: 'api_infographics'
    scope '/editions' do
      get '/',                    to: 'editions#index', as: 'api_editions'
      get '/:edition_id',         to: 'editions#get',   as: 'api_edition'
      # get '/:edition_id/article', to: 'articles#index', as: 'api_edition_articles'
      # get '/:edition_id/author',  to: 'authors#index',  as: 'api_edition_authors'
    end
  end

  ActiveAdmin.routes(self)
  devise_for :users

  match '*any', to: redirect('/'), via: :all
end
