# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_04_14_161256) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "active_admin_comments", force: :cascade do |t|
    t.string "namespace"
    t.text "body"
    t.string "resource_type"
    t.bigint "resource_id"
    t.string "author_type"
    t.bigint "author_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["author_type", "author_id"], name: "index_active_admin_comments_on_author_type_and_author_id"
    t.index ["namespace"], name: "index_active_admin_comments_on_namespace"
    t.index ["resource_type", "resource_id"], name: "index_active_admin_comments_on_resource_type_and_resource_id"
  end

  create_table "announcements", force: :cascade do |t|
    t.string "title"
    t.datetime "date"
    t.string "location"
    t.string "address"
    t.string "event_link"
    t.string "map_link"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.boolean "current"
  end

  create_table "articles", force: :cascade do |t|
    t.string "title"
    t.bigint "author_id"
    t.text "lead"
    t.text "content"
    t.bigint "edition_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "article_type"
    t.bigint "illustration_id"
    t.boolean "is_published", default: false
    t.integer "access_status", default: 0
    t.index ["author_id"], name: "index_articles_on_author_id"
    t.index ["edition_id"], name: "index_articles_on_edition_id"
    t.index ["illustration_id"], name: "index_articles_on_illustration_id"
  end

  create_table "authors", force: :cascade do |t|
    t.string "name"
    t.string "first_name"
    t.string "description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "editions", force: :cascade do |t|
    t.string "image_url"
    t.string "title"
    t.string "short_desc"
    t.integer "issue_number"
    t.boolean "latest_issue"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.date "date"
    t.string "shop_path"
    t.string "preview_url"
    t.string "color"
    t.boolean "is_published", default: false
  end

  create_table "illustrations", force: :cascade do |t|
    t.string "name"
    t.integer "position", default: 0
    t.string "image_url"
    t.string "preview_url"
    t.string "artist_name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "infographics", force: :cascade do |t|
    t.string "image_url"
    t.string "title"
    t.bigint "edition_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["edition_id"], name: "index_infographics_on_edition_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer "sign_in_count", default: 0, null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string "current_sign_in_ip"
    t.string "last_sign_in_ip"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.boolean "is_admin"
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

  add_foreign_key "articles", "authors"
  add_foreign_key "articles", "editions"
  add_foreign_key "articles", "illustrations"
  add_foreign_key "infographics", "editions"
end
