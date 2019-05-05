class Author < ApplicationRecord
  has_many :articles

  def to_json_simple_format
    {
      :id          => id,
      :fullName    => full_name,
      :description => description,
      :initials    => "#{first_name[0]} #{name[0]}",
    }
  end

  def to_article_json_format
    to_json_simple_format
  end

  def full_name
    "#{first_name} #{name}"
  end
end
