class EditionsController < ApplicationController
  skip_before_action :authenticate_user!, only: :index
  before_action :get_editions, only: :index

  def index
    render json: @editions
  end

  private

  def get_editions
    @editions = Edition.order(issue_number: :desc)
  end
end
