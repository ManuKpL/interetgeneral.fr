module IdHelper extend ActiveSupport::Concern

  def build_id id, title
    hyphenized_title = hyphenize_title(title)
    "#{id}-#{hyphenized_title}"
  end

  private

  def hyphenize_title title
    title
      .unicode_normalize(:nfd)
      .scan(/[a-z]+/i)
      .join('-')
      .downcase
  end
end
