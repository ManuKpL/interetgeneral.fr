editions = [
  {
    image_url: '/packs/_/assets/images/covers/1-medias-bde5f4ac038a93ee42923ff5774fbf48.png',
    title: 'Les médias',
    short_desc: 'Ce numéro est consacré à un sujet important',
    issue_number: 1,
    latest_issue: false
  },
  {
    image_url: '/packs/_/assets/images/covers/2-travail-be91992de9656cd9910a4f2cb2daf2cb.png',
    title: 'Le travail',
    short_desc: 'Ce numéro est consacré à un sujet important',
    issue_number: 2,
    latest_issue: false
  },
  {
    image_url: '/packs/_/assets/images/covers/3-placeholder-3b9b89c73f97be9ac0596ee1e660d51d.png',
    title: 'Les campagnes',
    short_desc: 'Ce numéro est consacré à un sujet important',
    issue_number: 3,
    latest_issue: true
  },
]

Edition.create(editions)

infographics = [
  {
    image_url: '/packs/_/assets/images/infographies/IG-2-hommesFemmes-c0bb2baac89f76fbb44281037b5ef325.png',
    title: 'IG-2-hommesFemmes',
    edition_id: Edition.find_by(issue_number: 2).id
  },
  {
    image_url: '/packs/_/assets/images/infographies/IG-2-ouvriersRisques-d7628fcf1ee587f0dc46e8314507c811.png',
    title: 'IG-2-ouvriersRisques',
    edition_id: Edition.find_by(issue_number: 2).id
  },
  {
    image_url: '/packs/_/assets/images/infographies/IG-2-travailPrecarite-dd551d94a1fdc2c97ba91c19c8b9b38e.png',
    title: 'IG-2-travailPrecarite',
    edition_id: Edition.find_by(issue_number: 2).id
  }
]

Infographic.create(infographics)

annoucenments = [
  {
    title: "Soirée de lancement de L'Intérêt général #3",
    date: DateTime.new(2018,5,31,19,0,0,'+2'),
    location: 'Le Lieu Dit',
    address: '6 rue Sorbier, 75020 PARIS',
    event_link: 'https://www.facebook.com/events/1663258210425411/',
    map_link: 'http://www.openstreetmap.org/node/1930249941',
    current: true
  },
  {
    title: "Soirée de lancement de L'Intérêt général #3 dans la Creuse!",
    date: DateTime.new(2018,6, 16,18,0,0,'+2'),
    location: 'Salle des fêtes',
    address: 'Faux-la-Montagne',
    event_link: 'https://www.facebook.com/events/2125444431054215/',
    map_link: 'https://goo.gl/maps/64Z9BrtSJjt',
    current: true
  }
]

Announcement.create(annoucenments)
