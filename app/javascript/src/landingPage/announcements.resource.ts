import { Injectable }      from '@angular/core';
import { Http, Response }  from '@angular/http';
import { Observable }      from 'rxjs/Observable';
import { of }              from 'rxjs/observable/of';
import { map, catchError } from 'rxjs/operators';

import * as moment from 'moment';
import 'moment/locale/fr';

@Injectable()
export default class AnnouncementsResource {

  constructor(private http: Http) { }

  private ANNOUNCEMENT_BASE_PATH = 'api/announcement';

  public current() {
    return this.getCurrentAnnouncement();
  }

  // ******************************** PRIVATE ******************************* //

  private getCurrentAnnouncement(): Observable<IAnnouncement | {}> {

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

    return this.http.get(this.ANNOUNCEMENT_BASE_PATH)
      .pipe(
        map((res: Response): IAnnouncement => handleReturn(res.json())),
        catchError((e: Error) => { console.error(e); return of(e); }),
      );
  }
}
