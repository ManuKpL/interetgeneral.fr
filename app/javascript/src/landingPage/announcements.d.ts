declare interface IAnnouncement {
  title: string;
  day: string;
  date: string;
  hour: string;
  location: string;
  address: string;
  eventLink: string;
  mapLink: string;
}

declare interface IAnnouncementApiData {
  title: string;
  date: Date;
  location :string;
  address: string;
  event_link: string;
  map_link: string;
}
