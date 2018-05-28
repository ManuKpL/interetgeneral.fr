class CreateAnnouncements < ActiveRecord::Migration[5.1]
  def change
    create_table :announcements do |t|
      t.string :title
      t.datetime :date
      t.string :location
      t.string :address
      t.string :event_link
      t.string :map_link

      t.timestamps
    end
  end
end
