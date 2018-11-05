class Infographic < ApplicationRecord
  belongs_to :edition

  def json_format
    {
      id:     id,
      imgSrc: image_url,
      title:  title,
    }
  end
end
