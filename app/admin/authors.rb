ActiveAdmin.register Author do

  permit_params :name, :first_name, :description

  index do
    selectable_column
    column :id
    column :name
    column :first_name
    column :description do |a| raw(a.description) end
    actions
  end

  show do
    attributes_table do
      row :id
      row :name
      row :first_name
      row :description do |a| raw(a.description) end
    end
    active_admin_comments
  end

  form title: 'Author edition' do |f|
    inputs do
      input :name,        { :required => true }
      input :first_name,  { :required => true }
      input :description, { :required => true }
    end
    actions
  end
end
