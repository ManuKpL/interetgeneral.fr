class EditionsController < ApplicationController
  skip_before_action :authenticate_user!, only: [:index, :get]
  before_action :get_editions, only: :index
  before_action :get_edition, only: :get

  def index
    render json: @editions
  end

  def get
    render json: @edition, include: { articles: { include: :author } }
  end

  private

  def get_editions
    if editions_params.has_key?(:limit)
      editions = Edition.order(issue_number: :desc).limit(editions_params[:limit])
    else
      editions = Edition.order(issue_number: :desc)
    end
    @editions = editions.map {|edition| edition.attributes.merge(edition_id: build_edition_id(edition)) }
  end

  def get_edition
    @edition = Edition.find(edition_params[:edition_id])
  end

  def editions_params
    params.permit(:limit)
  end

  def edition_params
    params.permit(:edition_id)
  end

  def build_edition_id edition
    hyphenized_title = edition.title.unicode_normalize(:nfd).gsub(/[\s\u0300-\u036f]/){ |m| m == ' ' ? "-" : "" }.downcase
    "#{edition.id}-#{hyphenized_title}"
  end

end
