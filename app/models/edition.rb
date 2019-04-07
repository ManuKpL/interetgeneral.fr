class Edition < ApplicationRecord
  include IdHelper

  has_many :infographics
  has_many :articles
  has_many :authors, through: :articles

  after_save { |instance| keep_only_one_current_record(instance) }

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
      :articles   => articles.filter(&:is_published).map(&:to_json_issue_format),
    }
  end

  private

  def keep_only_one_current_record instance
    if instance.latest_issue
      previous_instances = Edition.where({ :latest_issue => true }).where.not({ :id => instance.id }).map(&:id)

      Edition.update(previous_instances, Array.new(previous_instances.length, { :latest_issue => false }))
    end
  end
end
