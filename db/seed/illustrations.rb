module IllustrationSeed
  @values = [
    {
      # :id => 1
      :name        => 'TestIllustration',
      :image_url   => '/packs/media/illustrations/meute-editocrates-3c89ecd3.png',
      :preview_url => '/packs/media/preview/meute-editocrates-16104bb6.png',
      :artist_name => 'Clément Quintard',
    }
  ]

  def self.values
    @values
  end
end
