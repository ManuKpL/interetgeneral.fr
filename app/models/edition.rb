class Edition < ApplicationRecord
  include IdHelper

  has_many :infographics
  has_many :articles
  has_many :authors, through: :articles

  def to_json_cover_format
    {
      :id            => id,
      :editionId     => build_id(id, title),
      :number        => issue_number,
      :date          => date,
      :title         => title,
      :shortDesc     => short_desc,
      :imgSrc        => image_url,
      :previewSrc    => preview_url,
      :shopPath      => shop_path,
      :latest        => latest_issue,
      :articlesCount => articles.count
    }
  end

  def to_json_issue_format
    {
      :id         => id,
      :editionId  => build_id(issue_number, title),
      :number     => issue_number,
      :date       => date,
      :title      => title,
      :shortDesc  => short_desc,
      :imgSrc     => image_url,
      :previewSrc => preview_url,
      :shopPath   => shop_path,
      :color      => color,
      :articles   => articles.map(&:to_json_issue_format),
    }
  end
end
