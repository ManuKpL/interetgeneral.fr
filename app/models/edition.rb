class Edition < ApplicationRecord
  has_many :infographics
  has_many :articles
  has_many :authors, through: :articles

  def json_format
    {
      id: id,
      editionId: build_edition_id,
      number: issue_number,
      date: date,
      title: title,
      shortDesc: short_desc,
      imgSrc: image_url,
      previewSrc: preview_url,
      shopPath: shop_path,
      latest: latest_issue,
    }
  end

  private

  def build_edition_id
    hyphenized_title = title
      .unicode_normalize(:nfd)
      .gsub(/[\s\u0300-\u036f]/){ |m| m == ' ' ? "-" : "" }
      .downcase
    "#{id}-#{hyphenized_title}"
  end
end
