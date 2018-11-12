class EditionsController < ApplicationController
  skip_before_action :authenticate_user!, only: [:index, :get]
  before_action :get_editions, only: :index
  before_action :get_edition, only: :get

  def index
    render json: @editions.map(&:json_cover_format)
  end

  def get
    render json: @edition.json_issue_format
  end

  private

  def get_editions
    if editions_params.has_key?(:limit)
      @editions = Edition.order(issue_number: :desc).limit(editions_params[:limit])
    else
      @editions = Edition.order(issue_number: :desc)
    end
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

end
