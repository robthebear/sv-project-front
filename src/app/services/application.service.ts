import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Suivi} from '../models/suivi';
import {Observable} from 'rxjs';
import {Application} from '../models/application';
import {Webservice} from '../models/webservice';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {
  private url = 'http://localhost:8080/';

  constructor(
    private http: HttpClient) {
  }

  getSuivi(): Observable<Suivi[]> {
    return this.http.get<Suivi[]>(this.url + 'svsuivi');
  }

  getApplication(): Observable<Application[]> {
    return this.http.get<Application[]>(this.url + 'application');
  }
  getWebService(): Observable<Webservice[]> {
    return this.http.get<Webservice[]>(this.url + 'webservice');
  }
}
