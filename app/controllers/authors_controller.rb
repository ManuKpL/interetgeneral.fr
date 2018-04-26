class AuthorsController < ApplicationController
  skip_before_action :authenticate_user!, only: [:index, :sample]
  before_action :get_authors, only: :index
  before_action :get_authors_sample, only: :sample

  def index
    render json: @authors
  end

  private

  def get_authors
    @authors = Edition.find(edition_params[:edition_id]).authors.order(name: :asc)
  end

  def edition_params
    params.permit(:edition_id)
  end

end
