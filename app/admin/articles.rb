ActiveAdmin.register Article do

  permit_params :article_type,
                :title,
                :author_id,
                :edition_id,
                :illustration_id,
                :lead,
                :content,
                :is_published,
                :access_status

  index do
    selectable_column
    column :id
    column :is_published
    column :edition
    column :title
    column :article_type
    column :access_status
    column :created_at
    actions
  end

  show do
    attributes_table do
      row :id
      row :is_published
      row :edition
      row :title
      row :article_type
      row :access_status
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
      input :title, required: true
      input :article_type, {
        :as             => :select,
        :collection     => Article.article_types.keys,
        :default        => 0,
        :include_blank  => false,
        :include_hidden => false,
        :required       => true,
      }
      input :access_status, {
        :as             => :select,
        :collection     => Article.access_statuses.keys,
        :default        => 0,
        :include_blank  => false,
        :include_hidden => false,
        :required       => true,
      }
      input :author
      input :illustration, {
        :required => false,
      }
      input :lead, {
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
