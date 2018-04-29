class Edition < ApplicationRecord
  has_many :infographics
  has_many :articles
  has_many :authors, through: :articles
end
