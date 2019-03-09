class AuthorsController < ApplicationController
  skip_before_action :authenticate_user!, only: [:index, :sample]
  before_action      :get_authors,        only: :index
  before_action      :get_authors_sample, only: :sample

  def index
    if @authors.empty?
      render status: :no_content
    else
      render status: :ok, json: @authors
    end
  end

  private

  def get_authors
    @authors = Edition
      .find(editions_params[:edition_id])
      .authors
      .order(name: :asc)
  end

  def editions_params
    params.permit(:edition_id)
  end

end
