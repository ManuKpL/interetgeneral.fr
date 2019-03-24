class Article < ApplicationRecord
  include IdHelper

  belongs_to :author
  belongs_to :edition
  belongs_to :illustration

  enum article_type: [:ARTICLE, :INFOGRAPHIC, :INTERVIEW]

  def to_json_issue_format
    {
      :id        => id,
      :articleId => build_id(id, title),
      :type      => article_type,
      :title     => title,
      :author    => get_json(author),
    }
  end

  def to_json_simple_format
    {
      :id => id,
      :type => article_type,
      :title => title,
      :lead => lead,
      :author => get_json(author),
    }
  end

  def to_json_details_format
    {
      :id           => id,
      :articleId    => build_id(id, title),
      :type         => article_type,
      :title        => title,
      :lead         => lead,
      :content      => content,
      :author       => get_json(author),
      :illustration => get_json(illustration),
    }
  end

  private

  def get_json data
    if data
      return data.to_article_json_format
    end

    data
  end
end
