class InfographicsController < ApplicationController
  skip_before_action :authenticate_user!, only: :index
  before_action :get_infographics, only: :index

  def index
    render json: @infographics
  end

  private

  def get_infographics
    if (infographics_params.has_key?(:limit))
      @infographics = Infographic.order(created_at: :desc).limit(infographics_params[:limit])
    else
      @infographics = Infographic.order(created_at: :desc)
    end
  end

  def infographics_params
    params.permit(:limit)
  end
end
