ActiveAdmin.register Edition do

  permit_params :title,
                :color,
                :date,
                :image_url,
                :is_published,
                :issue_number,
                :latest_issue,
                :preview_url,
                :shop_path,
                :short_desc

  index do
    selectable_column
    column :issue_number
    column :is_published
    column :title
    column :short_desc
    column :latest_issue
    column :date
    column :created_at
    actions
  end

  show do
    attributes_table do
      row :issue_number
      row :is_published
      row :title
      row :short_desc
      row :color
      row :latest_issue
      row :date
      row :image_url
      row :preview_url
      row :shop_path
      row :created_at
      row :updated_at
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
      input :color
      input :latest_issue, label: 'Latest issue'
      input :date, label: 'Date de parution'
      input :image_url, label: 'Image url'
      input :preview_url, label: 'Preview (low quality) url'
      input :shop_path, label: 'Shop path'
      input :is_published
    end
    actions
  end

end
