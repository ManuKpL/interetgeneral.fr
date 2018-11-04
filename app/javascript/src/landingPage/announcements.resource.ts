import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';

import * as moment from 'moment';
import 'moment/locale/fr';
import 'rxjs/add/operator/map';
import { Subscription } from 'rxjs/Subscription';
import { Observer, PartialObserver } from 'rxjs/Observer';

@Injectable()
export default class AnnouncementsResource {

  constructor(private http: Http) { }

  private ANNOUNCEMENT_BASE_PATH = 'api/announcement';

  public current(next: (model: IAnnouncement) => void) {
    return this.getCurrentAnnouncement(next);
  }

  // ******************************** PRIVATE ******************************* //

  private getCurrentAnnouncement(next: (model: IAnnouncement) => void): Subscription {

    const handleReturn = (model: IAnnouncementApiData): IAnnouncement => {
      const dateToMoment: moment.Moment = moment(model.date).locale('fr');

      if (!model) { return; }

      return {
        title: model.title,
        day: dateToMoment.format('dddd'),
        date: dateToMoment.format('DD MMM'),
        hour: dateToMoment.format('LT'),
        location: model.location,
        address: model.address,
        eventLink: model.event_link,
        mapLink: model.map_link,
      };
    };

    const observer: PartialObserver<IAnnouncement> = {
      next,
      error: (e: Error) => console.error(e),
      complete: () => console.info('%c> Got the current announcement', 'color:forestgreen'),
    };

    return this.http.get(this.ANNOUNCEMENT_BASE_PATH)
      .map((res: Response): IAnnouncement => handleReturn(res.json()))
      .subscribe(observer);
  }
}
