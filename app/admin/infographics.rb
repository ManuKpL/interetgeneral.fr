ActiveAdmin.register Infographic do

  permit_params :image_url, :title, :edition

  index do
    selectable_column
    column :title
    column :edition
    column :image_url
    column :created_at
    actions
  end

  show do
    attributes_table do
      row :title
      row :edition
      row :created_at
      row :image_url
      row :image_url do |infographic|
        image_tag infographic.image_url
      end
    end
    active_admin_comments
  end

  form title: 'User edition' do |f|
    inputs do
      input :title, label: 'Title'
      input :edition, label: 'Edition'
      input :image_url, label: 'Image url'
    end
    actions
  end


end
