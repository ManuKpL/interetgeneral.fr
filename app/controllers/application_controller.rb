class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  before_action :authenticate_user!

  rescue_from ActiveRecord::RecordNotFound, :with => :resource_not_found

  def resource_not_found(exception)
    render status: :not_found,
      json:   {
        :code    => 404,
        :message => exception
      }
  end

  def render_no_content
    render status: :no_content,
      json: nil
  end
end
