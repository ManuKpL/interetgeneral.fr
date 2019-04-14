MAX_CHAR_NUMBER_PARTIAL_ACCESS = 800

class Article < ApplicationRecord
  include IdHelper

  belongs_to :author
  belongs_to :edition
  belongs_to :illustration

  enum article_type: {
    :ARTICLE     => 0,
    :INFOGRAPHIC => 1,
    :INTERVIEW   => 2,
    :EDITO       => 3,
  }

  enum access_status: {
    :COMPLETE => 0,
    :PARTIAL  => 1,
  }

  def to_json_issue_format
    {
      :id           => id,
      :articleId    => build_id(id, title),
      :type         => article_type,
      :title        => title,
      :lead         => lead,
      :author       => get_json(author),
      :illustration => get_json(illustration),
    }
  end

  def to_json_simple_format
    {
      :id     => id,
      :type   => article_type,
      :title  => title,
      :lead   => lead,
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
      :content      => get_content_according_to_access(content, access_status),
      :author       => get_json(author),
      :illustration => get_json(illustration),
      :accessStatus => access_status,
      :edition      => get_json(edition),
    }
  end

  def to_home_json_format
    {
      :id     => id,
      :imgSrc => illustration.image_url,
      :title  => title,
      :type   => 'article',
    }
  end

  private

  def get_json data
    if data
      return data.to_article_json_format
    end

    data
  end

  def get_content_according_to_access(article_content, access_status_value)
    if 'COMPLETE' == access_status_value
      return article_content
    end

    article_content.slice(0, MAX_CHAR_NUMBER_PARTIAL_ACCESS).strip + '...'
  end

end
