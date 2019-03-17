class ArticlesController < ApplicationController
  skip_before_action :authenticate_user!,  only: [:index, :sample]
  before_action      :get_articles,        only: :index
  before_action      :get_articles_sample, only: :sample

  def index
    if @articles.empty?
      render status: :no_content, json: nil
    else
      render status: :ok, json: @articles
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
