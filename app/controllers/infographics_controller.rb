class InfographicsController < ApplicationController
  skip_before_action :authenticate_user!,   @@only_index
  before_action :get_infographics,          @@only_index
  before_action :get_articles_infographics, @@only_index

  def index
    if @infographics.empty? && @articles.empty?
      render_no_content
      return
    end

    infographics = @infographics + @articles

    if infographics_params.has_key?(:limit)
      infographics = infographics.slice(0, 3)
    end

    render status: :ok, json: infographics.map(&:to_home_json_format)
  end

  private

  def get_infographics
    @infographics = Infographic.order(created_at: :desc)
  end

  def get_articles_infographics
    @articles = Article.where(:article_type => Article.article_types[:INFOGRAPHIC])
      .order(:created_at => :desc)
  end

  def infographics_params
    params.permit(:limit)
  end
end
