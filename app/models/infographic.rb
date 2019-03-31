class Infographic < ApplicationRecord
  belongs_to :edition

  def to_home_json_format
    {
      :id     => id,
      :imgSrc => image_url,
      :title  => title,
      :type   => 'infographic',
    }
  end
end
