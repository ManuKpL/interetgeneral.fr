class CreateIllustrations < ActiveRecord::Migration[5.1]
  def change
    create_table :illustrations do |t|
      t.string :name
      t.string :position
      t.string :image_url
      t.string :preview_url
      t.string :artist_name

      t.timestamps
    end
  end
end
