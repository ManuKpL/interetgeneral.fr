module EditionsSeed
  @values = [
    {
      image_url: '/packs/media/covers/1-medias-bde5f4ac.png',
      preview_url: '/packs/media/preview/1-medias-c49bc1a0.png',
      title: 'Les médias',
      short_desc: 'Ce numéro est consacré à un sujet important',
      issue_number: 1,
      latest_issue: false,
      shop_path: 'https://croquant.atheles.org/linteretgeneral/linteretgeneral',
      color: '#FA002E',
      is_published: true,
    },
    {
      image_url: '/packs/media/covers/2-travail-be91992d.png',
      preview_url: '/packs/media/preview/2-travail-a32e8c78.png',
      title: 'Le travail',
      short_desc: 'Ce numéro est consacré à un sujet important',
      issue_number: 2,
      latest_issue: false,
      shop_path: 'http://www.editions-croquant.org/component/mijoshop/product/407-l-interet-general-n-2',
      color: '#3C1DA2',
      is_published: true,
    },
    {
      image_url: '/packs/media/covers/3-campagnes-7d928ea0.png',
      preview_url: '/packs/media/preview/3-campagnes-0dd10b8d.png',
      title: 'Les campagnes',
      short_desc: 'Ce numéro est consacré à un sujet important',
      issue_number: 3,
      latest_issue: true,
      shop_path: 'http://www.editions-croquant.org/component/mijoshop/product/462-revue-l-interet-general-n-3',
      color: '#EBA93F',
      is_published: true,
    },
  ]

  def self.values
    @values
  end
end
