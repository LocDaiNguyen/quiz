import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Option } from './option.model';


@Injectable()
export class OptionsService {

  private optionsUrl = 'app/options';
  private headers = {headers: new Headers({'Content-Type': 'application/json'})};


  constructor(
    private http: Http
  ) {}


  getAllOptions(): Observable<Option[]> {
    return this.http.get(this.optionsUrl)
      .map(res => res.json().data);
  }

  save(newQuizOptions: Option): Observable<Option> {
    return this.http.post(this.optionsUrl, JSON.stringify(newQuizOptions), this.headers)
      .map(res => res.json().data);
  }

  update(newQuizOptions: Option): Observable<Option> {
    const optionUrl = `${this.optionsUrl}/${newQuizOptions.id}`;
    return this.http.put(optionUrl, JSON.stringify(newQuizOptions), this.headers)
      .map(res => res.json());
  }
}
