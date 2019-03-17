class InfographicsController < ApplicationController
  skip_before_action :authenticate_user!, only: :index
  before_action :get_infographics, only: :index

  def index
    if @infographics.empty?
      render_no_content
    else
      render status: :ok, json: @infographics.map(&:to_home_json_format)
    end
  end

  private

  def get_infographics
    if (infographics_params.has_key?(:limit))
      @infographics = Infographic
        .order(created_at: :desc)
        .limit(infographics_params[:limit])
    else
      @infographics = Infographic
        .order(created_at: :desc)
    end
  end

  def infographics_params
    params.permit(:limit)
  end
end
