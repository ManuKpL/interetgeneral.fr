class AddPreviewUrlToEditions < ActiveRecord::Migration[5.1]
  def change
    add_column :editions, :preview_url, :string
  end
end
