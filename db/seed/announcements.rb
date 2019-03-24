module AnnouncementSeed
  @values = [
    {
      :title      => "Soirée de lancement de L'Intérêt général #3",
      :date       => DateTime.new(2018,5,31,19,0,0,'+2'),
      :location   => 'Le Lieu Dit',
      :address    => '6 rue Sorbier, 75020 PARIS',
      :event_link => 'https://www.facebook.com/events/1663258210425411/',
      :map_link   => 'http://www.openstreetmap.org/node/1930249941',
      :current    => false
    },
    {
      :title      => "Soirée de lancement de L'Intérêt général #3 dans la Creuse!",
      :date       => DateTime.new(2018,6, 16,18,0,0,'+2'),
      :location   => 'Salle des fêtes',
      :address    => 'Faux-la-Montagne',
      :event_link => 'https://www.facebook.com/events/2125444431054215/',
      :map_link   => 'https://goo.gl/maps/64Z9BrtSJjt',
      :current    => false
    }
  ]

  def self.values
    @values
  end
end
