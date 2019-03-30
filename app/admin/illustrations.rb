ActiveAdmin.register Illustration do

  permit_params :name,
                :position,
                :image_url,
                :preview_url,
                :artist_name

  index do
    selectable_column
    column :id
    column :name
    column :position
    column :image_url
    column :preview_url
    column :artist_name
    column :created_at
    actions
  end

  show do
    attributes_table do
      row :id
      row :name
      row :position
      row :image_url
      row :image_url do |i| image_tag i.image_url end
      row :preview_url
      row :preview_url do |i| image_tag i.preview_url end
      row :artist_name
      row :created_at
      row :updated_at
    end
    active_admin_comments
  end

  form title: 'Illustration edition' do |f|
    inputs do
      input :name, label: 'Title'
      input :position, {
        :as             => :select,
        :collection     => Illustration.positions.keys,
        :default        => 0,
        :include_blank  => false,
        :include_hidden => false,
      }
      input :image_url, label: 'Url'
      input :preview_url
      input :artist_name
    end
    actions
  end
end
