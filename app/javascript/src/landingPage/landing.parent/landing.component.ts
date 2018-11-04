import { Component, OnInit } from '@angular/core';
import AnnouncementsResource from '../announcements.resource';

@Component({
  selector: 'ig-landing-page',
  templateUrl: './landing.template.html',
  styleUrls: ['./landing.styles.scss']
})
export default class LandingComponent implements OnInit {

  public announcement: IAnnouncement;

  constructor(private announcementsResource: AnnouncementsResource) {}

  ngOnInit(): void {
    this.getCurrentAnnouncement();
  }

  private getCurrentAnnouncement() {
    this.announcementsResource
      .current((model: IAnnouncement) => {
        this.announcement = model;
      });
  }
}
