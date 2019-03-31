class ArticlesController < ApplicationController
  skip_before_action :authenticate_user!,  only: [:index, :show]

  before_action      :get_articles,        only: [:index, :show]
  before_action      :get_article,         only: [:show]

  def index
    if @articles.empty?
      render_no_content
    else
      render status: :ok,
        json: @articles.map(&:to_json_simple_format)
    end
  end

  def show
    if @article
      render status: :ok, json: @article.to_json_details_format
    else
      render_no_content
    end
  end

  private

  def get_articles
    @articles = Edition
      .find(articles_params[:edition_id])
      .articles
      .where(:is_published => true)
      .order(:created_at => :desc)
  end

  def get_article
    @article = @articles.find(articles_params[:article_id])
  end

  def articles_params
    params.permit(:edition_id, :article_id)
  end

end
