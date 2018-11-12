class RemoveMediaFromArticle < ActiveRecord::Migration[5.1]
  def change
    remove_column :articles, :media, :string
  end
end
