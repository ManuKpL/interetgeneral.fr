class AddCurrentToAnnouncement < ActiveRecord::Migration[5.1]
  def change
    add_column :announcements, :current, :boolean
  end
end
