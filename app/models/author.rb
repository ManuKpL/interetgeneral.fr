class Author < ApplicationRecord
  has_many :articles

  def to_json_issue_format
    {
      :id          => id,
      :firstName   => first_name,
      :lastName    => name,
      :fullName    => full_name,
      :description => description,
    }
  end

  private

  def full_name
    "#{first_name} #{name}"
  end
end
