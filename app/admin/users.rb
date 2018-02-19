ActiveAdmin.register User do

  permit_params :email, :is_admin

  index do
    selectable_column
    column :email
    column :is_admin
    column :created_at
    actions
  end

  show do
    attributes_table do
      row :email
      row :is_admin
      row :created_at
    end
    active_admin_comments
  end

  form title: 'User edition' do |f|
    inputs do
      input :email, label: 'Email'
      input :is_admin, label: 'Admin'
    end
    actions
  end

end
