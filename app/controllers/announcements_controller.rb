class AnnouncementsController < ApplicationController
  skip_before_action :authenticate_user!, only: [:current]
  before_action      :get_announcement,   only: :current

  def current
    if @announcement
      render status: :ok, json: @announcement
    else
      render_no_content
    end
  end

  private

  def get_announcement
    @announcement = Announcement.order(created_at: :desc).find_by(current: true)
  end
end
