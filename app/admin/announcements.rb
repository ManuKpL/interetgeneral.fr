ActiveAdmin.register Announcement do

  permit_params :title,
                :date,
                :location,
                :address,
                :event_link,
                :map_link,
                :current

  index do
    selectable_column
    column :title
    column :date
    column :location
    column :address
    column :event_link
    column :map_link
    column :current
    column :created_at
    actions
  end

  show do
    attributes_table do
      row :title
      row :date
      row :location
      row :address
      row :event_link
      row :map_link
      row :current
      row :created_at
      row :updated_at
    end
    active_admin_comments
  end

  form title: 'Announcement edition' do |f|
    inputs do
      input :title,      label: 'Title'
      input :date,       label: 'Date'
      input :location,   label: 'Location'
      input :address,    label: 'Address'
      input :event_link, label: 'Event link'
      input :map_link,   label: 'Map link'
      input :current,    label: 'Current event'
    end
    actions
  end
end
