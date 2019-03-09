class EditionsController < ApplicationController
  skip_before_action :authenticate_user!, only: [:index, :get]
  before_action :get_editions, only: :index
  before_action :get_edition, only: :get

  def index
    if @editions.empty?
      render status: :no_content
    else
      render status: :ok, json: @editions.map(&:to_json_cover_format)
    end
  end

  def get
    if @edition
      render status: :ok, json: @edition.to_json_issue_format
    else
      render status: :no_content
    end
  end

  private

  def get_editions
    if editions_list_params.has_key?(:limit)
      @editions = Edition
        .order(issue_number: :desc)
        .limit(editions_list_params[:limit])
    else
      @editions = Edition
        .order(issue_number: :desc)
    end
  end

  def get_edition
    @edition = Edition
      .find(edition_params[:edition_id])
  end

  def editions_list_params
    params.permit(:limit)
  end

  def edition_params
    params.permit(:edition_id)
  end

end
