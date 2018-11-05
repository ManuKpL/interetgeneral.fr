class AnnouncementsController < ApplicationController
  skip_before_action :authenticate_user!, only: [:current]
  before_action :get_announcement, only: :current

  def current
    render json: @announcement.json_format
  end

  private

  def get_announcement
    @announcement = Announcement.order(created_at: :desc).find_by(current: true)
  end
end
