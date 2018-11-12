class Author < ApplicationRecord
  has_many :articles

  def json_issue_format
    {
      id: id,
      firstName: first_name,
      lastName: name,
      description: description,
    }
  end
end
