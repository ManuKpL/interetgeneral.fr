class Announcement < ApplicationRecord

  after_save { |instance| keep_only_one_current_record(instance) }

  def to_home_json_format
    {
      :id         => id,
      :title      => title,
      :date       => date,
      :weekDay    => I18n.l(date, format: '%A'),
      :dayOfMonth => I18n.l(date, format: '%d %b'),
      :time       => I18n.l(date, format: '%H:%M'),
      :location   => location,
      :address    => address,
      :eventLink  => event_link,
      :mapLink    => map_link,
      :current    => current,
    }
  end

  private

  def keep_only_one_current_record instance
    if instance.current
      previous_instances = Announcement.where({ :current => true }).where.not({ :id => instance.id }).map(&:id)

      Announcement.update(previous_instances, Array.new(previous_instances.length, { :current => false }))
    end
  end
end
