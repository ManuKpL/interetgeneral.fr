module InfographicsSeed
  @values = [
    {
      image_url: '/packs/media/infographies/IG-2-hommesFemmes-c0bb2baa.png',
      title: 'IG-2-hommesFemmes',
      edition_id: 2
    },
    {
      image_url: '/packs/media/infographies/IG-2-ouvriersRisques-d7628fcf.png',
      title: 'IG-2-ouvriersRisques',
      edition_id: 2
    },
    {
      image_url: '/packs/media/infographies/IG-2-travailPrecarite-dd551d94.png',
      title: 'IG-2-travailPrecarite',
      edition_id: 2
    }
  ]

  def self.values
    @values
  end
end
