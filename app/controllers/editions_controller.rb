class EditionsController < ApplicationController
  skip_before_action :authenticate_user!, only: [:index, :get]
  before_action      :get_editions,       only: [:index]
  before_action      :get_edition,        only: [:get]

  def index
    if @editions.empty?
      render_no_content
    else
      render status: :ok, json: @editions.map(&:to_json_cover_format)
    end
  end

  def get
    if @edition
      render status: :ok, json: @edition.to_json_issue_format
    else
      render status: :not_found, json: nil
    end
  end

  private

  def get_editions
    if editions_list_params.has_key?(:limit)
      @editions = Edition
        .where(:is_published => true)
        .order(:issue_number => :desc)
        .limit(editions_list_params[:limit])
    else
      @editions = Edition
        .order(issue_number: :desc)
    end
  end

  def get_edition
    edition = Edition.find(edition_params[:edition_id])

    if is_valid_edition(edition)
      @edition = edition
    else
      @edition = nil
    end
  end

  def is_valid_edition edition
    return false if edition.nil?
    return false if !edition.is_published
    return false if edition.articles.select(&:is_published).empty?

    return true
  end

  def editions_list_params
    params.permit(:limit)
  end

  def edition_params
    params.permit(:edition_id)
  end

end
