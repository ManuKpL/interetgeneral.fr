class Article < ApplicationRecord
  belongs_to :author
  belongs_to :edition

  enum article_type: [:ARTICLE, :INFOGRAPHIC, :INTERVIEW]

  def json_issue_format
    {
      id: id,
      title: title,
      author: author.json_issue_format,
      lead: lead,
      content: content,
      type: article_type,
    }
  end
end
