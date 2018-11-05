class Announcement < ApplicationRecord
  def json_format
    {
      id:         id,
      title:      title,
      date:       date,
      weekDay:    I18n.l(date, format: '%A'),
      dayOfMonth: I18n.l(date, format: '%d %b'),
      time:       I18n.l(date, format: '%H:%M'),
      location:   location,
      address:    address,
      eventLink:  event_link,
      mapLink:    map_link,
      current:    current,
    }
  end
end
