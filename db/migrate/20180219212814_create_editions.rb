class CreateEditions < ActiveRecord::Migration[5.1]
  def change
    create_table :editions do |t|
      t.string :image_url
      t.string :title
      t.string :short_desc
      t.integer :issue_number
      t.boolean :latest_issue

      t.timestamps
    end
  end
end
