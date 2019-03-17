class ArticlesController < ApplicationController
  skip_before_action :authenticate_user!,  only: [:index, :sample]
  before_action      :get_articles,        only: :index

  def index
    if @articles.empty?
      render_no_content
    else
      render status: :ok, json: @articles
    end
  end

  def show
    if @article
      render status: :ok, json: @article
    else
      render_no_content
    end
  end

  private

  def get_articles
    @articles = Edition
      .find(editions_params[:edition_id])
      .articles
      .order(created_at: :desc)
  end

  def editions_params
    params.permit(:edition_id)
  end

end
