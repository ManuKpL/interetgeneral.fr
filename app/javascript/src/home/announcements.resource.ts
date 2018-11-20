import { Injectable }      from '@angular/core';
import { Http, Response }  from '@angular/http';
import { Observable }      from 'rxjs/Observable';
import { of }              from 'rxjs/observable/of';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export default class AnnouncementsResource {

  constructor(private http: Http) { }

  private ANNOUNCEMENT_BASE_PATH = 'api/announcement';

  public current() {
    return this.getCurrentAnnouncement();
  }

  // ******************************** PRIVATE ******************************* //

  private getCurrentAnnouncement(): Observable<IAnnouncement | {}> {
    return this.http.get(this.ANNOUNCEMENT_BASE_PATH)
      .pipe(
        map((res: Response): IAnnouncement => res.json() as IAnnouncement),
        catchError((e: Error) => { console.error(e); return of(e); }),
      );
  }
}
