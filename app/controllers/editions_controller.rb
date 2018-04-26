class EditionsController < ApplicationController
  skip_before_action :authenticate_user!, only: [:index, :sample]
  before_action :get_editions, only: :index
  before_action :get_editions_sample, only: :sample

  def index
    render json: @editions
  end

  def sample
    render json: @editions_sample
  end

  private

  def get_editions
    @editions = Edition.order(issue_number: :desc)
  end

  def get_editions_sample
    @editions_sample = Edition.order(issue_number: :desc).limit(edition_params[:limit])
  end

  def edition_params
    params.permit(:limit)
  end

end
