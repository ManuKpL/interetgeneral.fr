class Article < ApplicationRecord
  belongs_to :author
  belongs_to :edition

  enum article_type: [:ARTICLE, :INFOGRAPHIC, :INTERVIEW]

  def to_json_issue_format
    {
      :id     => id,
      :type   => article_type,
      :title  => title,
      :author => author.to_json_simple_format,
    }
  end

  def to_json_simple_format
    {
      :id => id,
      :type => article_type,
      :title => title,
      :lead => lead,
      :author => author.to_json_simple_format
    }
  end

  def to_json_details_format
    {
      :id      => id,
      :type    => article_type,
      :title   => title,
      :lead    => lead,
      :content => content,
      :author  => author.to_json_simple_format
    }
  end
end
