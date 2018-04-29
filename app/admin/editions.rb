ActiveAdmin.register Edition do

  permit_params :image_url, :title, :short_desc, :issue_number, :latest_issue, :shop_path, :date

  index do
    selectable_column
    column :issue_number
    column :title
    column :short_desc
    column :latest_issue
    column :date
    column :image_url
    column :shop_path
    column :created_at
    actions
  end

  show do
    attributes_table do
      row :issue_number
      row :title
      row :short_desc
      row :latest_issue
      row :date
      row :image_url
      row :shop_path
      row :created_at
      panel 'Infographics' do
        table_for edition.infographics do
          column :title
          column :image_url
        end
      end
    end
    active_admin_comments
  end

  form title: 'User edition' do |f|
    inputs do
      input :issue_number, label: 'Issue number'
      input :title, label: 'Title'
      input :short_desc, label: 'Short description'
      input :latest_issue, label: 'Latest issue'
      input :date, label: 'Date de parution'
      input :image_url, label: 'Image url'
      input :shop_path, label: 'Shop path'
    end
    actions
  end

end
