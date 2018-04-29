class EditionsController < ApplicationController
  skip_before_action :authenticate_user!, only: :index
  before_action :get_editions, only: :index

  def index
    render json: @editions
  end

  private

  def get_editions
    if editions_params.has_key?(:limit)
      @editions = Edition.order(issue_number: :desc).limit(editions_params[:limit])
    else
      @editions = Edition.order(issue_number: :desc)
    end
  end

  def editions_params
    params.permit(:limit)
  end

end
