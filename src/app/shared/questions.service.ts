import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Question } from './question.model';


@Injectable()
export class QuestionsService {

  private questionsUrl = 'app/questions';
  private headers = {headers: new Headers({'Content-Type': 'application/json'})};


  constructor(
    private http: Http
  ) {}


  getAllQuestions(): Observable<Question[]> {
    return this.http.get(this.questionsUrl)
      .map(res => res.json().data);
  }
}
