class Edition < ApplicationRecord
  has_many :infographics
  has_many :articles
  has_many :authors, through: :articles

  def json_cover_format
    {
      id: id,
      editionId: build_edition_id(id),
      number: issue_number,
      date: date,
      title: title,
      shortDesc: short_desc,
      imgSrc: image_url,
      previewSrc: preview_url,
      shopPath: shop_path,
      latest: latest_issue,
      articlesCount: articles.count
    }
  end

  def json_issue_format
    {
      id: id,
      editionId: build_edition_id(issue_number),
      number: issue_number,
      date: date,
      title: title,
      shortDesc: short_desc,
      imgSrc: image_url,
      previewSrc: preview_url,
      shopPath: shop_path,
      articles: articles.map(&:json_issue_format),
    }
  end

  private

  def build_edition_id key
    hyphenized_title = title
      .unicode_normalize(:nfd)
      .gsub(/[\s\u0300-\u036f]/){ |m| m == ' ' ? "-" : "" }
      .downcase
    "#{key}-#{hyphenized_title}"
  end
end
