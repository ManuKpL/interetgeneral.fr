Rails.application.routes.draw do

  root 'pages#home'

  scope '' do
    get '/editions',     to: 'pages#home'
    get '/editions/:edition_id', to: 'pages#home'
    get '/editions/:edition_id/articles/:article_id', to: 'pages#home'
    get '/infographies', to: 'pages#home'
  end

  scope '/api' do
    get '/announcement', to: 'announcements#current', as: 'api_announcement'
    get '/infographics', to: 'infographics#index', as: 'api_infographics'
    scope '/editions' do
      get '/',                                 to: 'editions#index', as: 'api_editions'
      get '/:edition_id',                      to: 'editions#get',   as: 'api_edition'
      get '/:edition_id/articles/:article_id', to: 'articles#show',  as: 'api_edition_article'
    end
  end

  ActiveAdmin.routes(self)
  devise_for :users

  match '*any', to: redirect('/'), via: :all
end
