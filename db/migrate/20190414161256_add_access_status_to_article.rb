class AddAccessStatusToArticle < ActiveRecord::Migration[5.2]
  def change
    add_column :articles, :access_status, :integer, { :default => 0 }
  end
end
