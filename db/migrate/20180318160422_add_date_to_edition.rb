class AddDateToEdition < ActiveRecord::Migration[5.1]
  def change
    add_column :editions, :date, :date
  end
end
