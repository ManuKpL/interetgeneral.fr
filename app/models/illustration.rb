class Illustration < ApplicationRecord
  has_many :article

  enum position: [:CENTER, :TOP, :BOTTOM]

  def to_article_json_format
    {
      :id         => id,
      :name       => name,
      :imgSrc     => image_url,
      :previewSrc => preview_url,
      :position   => position,
      :artistName => artist_name,
    }
  end
end
