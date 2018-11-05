import { Component, OnInit } from '@angular/core';
import AnnouncementsResource from '../announcements.resource';
import { PartialObserver } from 'rxjs/Observer';

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
    const observer: PartialObserver<IAnnouncement> = {
      next: (model: IAnnouncement) => {
        this.announcement = model;
      },
    };

    this.announcementsResource
      .current()
      .subscribe(observer);
  }
}
