ActiveAdmin.register Edition do

  permit_params :image_url, :title, :short_desc, :issue_number, :latest_issue

  index do
    selectable_column
    column :issue_number
    column :title
    column :short_desc
    column :latest_issue
    column :image_url
    column :created_at
    actions
  end

  show do
    attributes_table do
      row :issue_number
      row :title
      row :short_desc
      row :latest_issue
      row :image_url
      row :created_at
    end
    active_admin_comments
  end

  form title: 'User edition' do |f|
    inputs do
      input :issue_number, label: 'Issue number'
      input :title, label: 'Title'
      input :short_desc, label: 'Short description'
      input :latest_issue, label: 'Latest issue'
      input :image_url, label: 'Image url'
    end
    actions
  end

end
