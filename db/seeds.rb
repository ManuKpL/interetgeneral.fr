# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

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
