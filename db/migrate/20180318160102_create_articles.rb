class CreateArticles < ActiveRecord::Migration[5.1]
  def change
    create_table :articles do |t|
      t.string :title
      t.references :author, foreign_key: true
      t.text :lead
      t.text :content
      t.references :edition, foreign_key: true
      t.string :media

      t.timestamps
    end
  end
end
