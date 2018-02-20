class InfographicsController < ApplicationController
  skip_before_action :authenticate_user!, only: :index
  before_action :get_infographics, only: :index

  def index
    render json: @infographics
  end

  private

  def get_infographics
    @infographics = Infographic.all
  end
end
