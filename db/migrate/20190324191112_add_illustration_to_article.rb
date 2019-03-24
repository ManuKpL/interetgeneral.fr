class AddIllustrationToArticle < ActiveRecord::Migration[5.1]
  def change
    add_reference :articles, :illustration, foreign_key: true
  end
end
