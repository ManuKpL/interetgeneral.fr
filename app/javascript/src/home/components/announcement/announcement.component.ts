import { Component, Input } from '@angular/core';

@Component({
  selector: 'ig-landing-announcement',
  templateUrl: './announcement.template.html',
  styleUrls: ['./announcement.styles.scss'],
})
export default class AnnouncementComponent {
  @Input() public announcement: IAnnouncement;
}
