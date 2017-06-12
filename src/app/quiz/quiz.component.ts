import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { MaterializeAction } from 'angular2-materialize';
import * as _ from 'lodash';

import { Question } from '../shared/question.model';
import { QuestionsService } from '../shared/questions.service';
import { Option } from '../shared/option.model';
import { OptionsService } from '../shared/options.service';
import { ComponentCanDeactivate } from './quiz-can-deactivate.guard';
import { QuizGuardComponent } from './quiz-guard/quiz-guard.component';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit, ComponentCanDeactivate {

  options: Option;
  questions: Question[];
  totalQuestions = 0;
  totalQuestionsAnswered = 0;
  progress = 0;
  currentQuestionId: number;
  currentQuestionIndex = 0;
  isOver = false;
  totalScore = 0;

  constructor(
    private questionsService: QuestionsService,
    private optionsService: OptionsService
  ) { }

  ngOnInit() {
    this.getAllOptions();
  }

  getAllOptions() {
    this.optionsService.getAllOptions()
      .subscribe(options => {
        this.options = options[0];
        this.getAllQuestions(this.options);
      });
  }

  getAllQuestions(options: Option) {
    this.questionsService.getAllQuestions()
      .subscribe(questions => {

        let filteredQuestions;
        let shuffledQuestions;
        let numberOfQuestions;
        let firstQuestion;
        let finalSetOfQuestions;

        if (options.type !== 'all') {
          filteredQuestions = questions.filter(question => question.type === options.type);
        } else {
          filteredQuestions = questions;
        }

        if (options.randomize) {
          shuffledQuestions = _.shuffle(filteredQuestions);
        } else {
          shuffledQuestions = filteredQuestions;
        }

        numberOfQuestions = shuffledQuestions.slice(0, options.number);
        finalSetOfQuestions = numberOfQuestions;

        firstQuestion = _.first(finalSetOfQuestions);

        this.questions = finalSetOfQuestions;
        this.totalQuestions = finalSetOfQuestions.length;
        this.currentQuestionId = firstQuestion.id;
    });
  }

  setCurrentQuestionId(questionIndex: number) {
    if (this.totalQuestionsAnswered !== (this.totalQuestions - 1)) {
      this.currentQuestionId = this.questions[questionIndex].id;
    }
    this.currentQuestionIndex = questionIndex;
  }

  addScore(score: number) {
    this.totalScore = this.totalScore + score;
  }

  addQuestionsAnswered(questionAnswerCount: number) {
    this.totalQuestionsAnswered = this.totalQuestionsAnswered + questionAnswerCount;
    this.progress = (this.totalQuestionsAnswered / this.totalQuestions) * 100;
    this.isQuizOver();
  }

  isQuizOver() {
    if (this.totalQuestionsAnswered === this.totalQuestions) {
      this.isOver = true;
    }
  }

  newQuiz() {
    this.questions = [];
    this.totalQuestions = 0;
    this.totalQuestionsAnswered = 0;
    this.progress = 0;
    this.currentQuestionId = 0;
    this.currentQuestionIndex = 0;
    this.isOver = false;
    this.totalScore = 0;

    this.getAllOptions();
  }

  canDeactivate(): Observable<boolean> | boolean {
    if (!this.isOver) {
      return confirm('Do you want to leave and lose your progress.');
    }
    return true;
  }

}
