class AddShopPathToEdition < ActiveRecord::Migration[5.1]
  def change
    add_column :editions, :shop_path, :string
  end
end
