class ArticlesController < ApplicationController

  skip_before_action :authenticate_user!,  @@only_show
  before_action      :get_article,         @@only_show

  def show
    puts @article
    if @article
      render status: :ok, json: @article.to_json_details_format
    else
      resource_not_found('No published article with these ids')
    end
  end

  private

  def get_article
    article = Article.find(articles_params[:article_id])

    if is_valid_element(article) && is_valid_element(article.edition)
      @article = article unless article.edition.id != articles_params[:edition_id].to_i
    else
      @article = nil
    end
  end

  def articles_params
    params.permit(:edition_id, :article_id)
  end

  def is_valid_element element
    !element.nil? && element.is_published
  end
end
