class AddIsPublishedToEdition < ActiveRecord::Migration[5.2]
  def change
    add_column :editions, :is_published, :boolean, { :default => false }
  end
end
