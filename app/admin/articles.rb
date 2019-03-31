ActiveAdmin.register Article do

  permit_params :article_type,
                :title,
                :author_id,
                :illustration_id,
                :lead,
                :content,
                :is_published

  index do
    selectable_column
    column :id
    column :is_published
    column :edition
    column :article_type
    column :title
    column :author do |a| a.author.full_name end
    column :illustration
    column :created_at
    actions
  end

  show do
    attributes_table do
      row :id
      row :is_published
      row :edition
      row :article_type
      row :title
      row :author do |a| a.author.full_name end
      row :illustration
      row :lead do |a| raw(a.lead) end
      row :content do |a| raw(a.content) end
      row :created_at
      row :updated_at
    end
    active_admin_comments
  end

  form title: 'Article edition' do |f|
    inputs do
      input :is_published
      input :edition
      input :article_type, {
        :as             => :select,
        :collection     => Article.article_types.keys,
        :default        => 0,
        :include_blank  => false,
        :include_hidden => false,
        :required       => true,
      }
      input :title, required: true
      input :author
      input :illustration
      input :lead, {
        :required   => true,
        :as         => :quill_editor,
        :input_html => {
          :data => {
            :options => {
              :modules => {
                :toolbar => [
                  [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
                  ['bold', 'italic', 'underline', 'strike'],
                  [{ 'color': [] }, { 'background': [] }],
                  [{ 'align': [] }],
                  ['clean']
                ],
              },
              :placeholder => 'Type something...',
              :theme       => 'snow',
            },
          },
        },
      }
      input :content, {
        :required   => true,
        :as         => :quill_editor,
        :input_html => {
          :data => {
            :options => {
              :modules => {
                :toolbar => [
                  [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
                  ['bold', 'italic', 'underline', 'strike'],
                  [{ 'color': [] }, { 'background': [] }],
                  [{ 'align': [] }],
                  ['clean']
                ],
              },
              :placeholder => 'Type something...',
              :theme       => 'snow',
            },
          },
        },
      }
    end
    actions
  end
end
