class Illustration < ApplicationRecord
  has_many :article

  def to_article_json_format
    {
      :id         => id,
      :name       => name,
      :imgSrc     => image_url,
      :previewUrl => preview_url,
      :artistName => artist_name,
    }
  end
end
