class CreateInfographics < ActiveRecord::Migration[5.1]
  def change
    create_table :infographics do |t|
      t.string :image_url
      t.string :title
      t.references :edition, foreign_key: true

      t.timestamps
    end
  end
end
