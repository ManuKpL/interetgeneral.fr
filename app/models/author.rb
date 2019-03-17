class Author < ApplicationRecord
  has_many :articles

  def to_json_issue_format
    {
      :id          => id,
      :fullName    => full_name,
      :description => description,
    }
  end

  private

  def full_name
    "#{first_name} #{name}"
  end
end
