class AddColorToEdition < ActiveRecord::Migration[5.1]
  def change
    add_column :editions, :color, :string
  end
end
