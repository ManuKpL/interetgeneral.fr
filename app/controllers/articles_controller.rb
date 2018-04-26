class ArticlesController < ApplicationController
  skip_before_action :authenticate_user!, only: [:index, :sample]
  before_action :get_articles, only: :index
  before_action :get_articles_sample, only: :sample

  def index
    render json: @articles
  end

  private

  def get_articles
    @articles = Edition.find(edition_params[:edition_id]).articles.order(created_at: :desc)
  end

  def edition_params
    params.permit(:edition_id)
  end

end
