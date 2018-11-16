class Article < ApplicationRecord
  belongs_to :author
  belongs_to :edition

  enum article_type: [:ARTICLE, :INFOGRAPHIC, :INTERVIEW]

  def json_issue_format
    {
      id: id,
      type: article_type,
      title: title,
      # content: content,
      lead: lead,
      author: author.json_issue_format,
    }
  end
end
