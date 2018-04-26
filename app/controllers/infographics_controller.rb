class InfographicsController < ApplicationController
  skip_before_action :authenticate_user!, only: [:index, :sample]
  before_action :get_infographics, only: :index
  before_action :get_infographics_sample, only: :sample

  def index
    render json: @infographics
  end

  def sample
    render json: @infographics_sample
  end

  private

  def get_infographics
    @infographics = Infographic.order(created_at: :desc)
  end

  def get_infographics_sample
    @infographics_sample = Infographic.order(created_at: :desc).limit(params[:limit])
  end
end
