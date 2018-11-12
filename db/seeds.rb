Dir[File.join(__dir__, 'seed', '*.rb')].each { |file| require file }

Edition.create(EditionsSeed.values)
Infographic.create(InfographicsSeed.values)
Announcement.create(AnnouncementSeed.values)
Author.create(AuthorSeed.values);