class AddArticleTypeToArticle < ActiveRecord::Migration[5.1]
  def change
    add_column :articles, :article_type, :integer
  end
end
