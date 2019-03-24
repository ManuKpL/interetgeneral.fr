Dir[File.join(__dir__, 'seed', '*.rb')].each { |file| require file }

Edition.create(EditionsSeed.values)
Infographic.create(InfographicsSeed.values)
Illustration.create(IllustrationSeed.values)
Announcement.create(AnnouncementSeed.values)
Author.create(AuthorSeed.values);
Article.create(ArticleSeed.values);
