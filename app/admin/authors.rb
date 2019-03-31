ActiveAdmin.register Author do

  permit_params :name, :first_name, :description

  index do
    selectable_column
    column :id
    column :name
    column :first_name
    column :description
    actions
  end

  show do
    attributes_table do
      row :id
      row :name
      row :first_name
      row :description
    end
    active_admin_comments
  end

  form title: 'Author edition' do |f|
    inputs do
      input :name
      input :first_name
      input :description
    end
    actions
  end
end
