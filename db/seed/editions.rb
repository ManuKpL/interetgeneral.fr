module EditionsSeed
  @values = [
    {
      image_url: '/packs/_/assets/images/covers/1-medias-bde5f4ac038a93ee42923ff5774fbf48.png',
      preview_url: '/packs/_/assets/images/covers/preview/1-medias-c49bc1a0e4903c5953ba7eee038fd55b.png',
      title: 'Les médias',
      short_desc: 'Ce numéro est consacré à un sujet important',
      issue_number: 1,
      latest_issue: false,
      shop_path: 'https://croquant.atheles.org/linteretgeneral/linteretgeneral'
    },
    {
      image_url: '/packs/_/assets/images/covers/2-travail-be91992de9656cd9910a4f2cb2daf2cb.png',
      preview_url: '/packs/_/assets/images/covers/preview/2-travail-a32e8c7860e884cf0da2e2f7af2d58ec.png',
      title: 'Le travail',
      short_desc: 'Ce numéro est consacré à un sujet important',
      issue_number: 2,
      latest_issue: false,
      shop_path: 'http://www.editions-croquant.org/component/mijoshop/product/407-l-interet-general-n-2'
    },
    {
      image_url: '/packs/_/assets/images/covers/3-campagnes-7d928ea0795c7fed3b53c70f885c05a6.png',
      preview_url: '/packs/_/assets/images/covers/preview/3-campagnes-0dd10b8db201a383bf1a357646844849.png',
      title: 'Les campagnes',
      short_desc: 'Ce numéro est consacré à un sujet important',
      issue_number: 3,
      latest_issue: true,
      shop_path: 'http://www.editions-croquant.org/component/mijoshop/product/462-revue-l-interet-general-n-3'
    },
  ]

  def self.values
    @values
  end
end