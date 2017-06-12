import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';

import * as _ from 'lodash';

import { Question } from '../../shared/question.model';

@Component({
  selector: 'app-quiz-card',
  templateUrl: './quiz-card.component.html',
  styleUrls: ['./quiz-card.component.css']
})
export class QuizCardComponent implements OnInit {

  markedAnswer: number = -1;
  isCorrect: boolean;
  isAnswered: boolean;
  correctAnswer: string;
  selectedAnswer: string;

  @Input() index: number;
  @Input() question: Question;
  @Input() totalQuestions: number;
  @Input() currentQuestionId: number;
  @Input() currentQuestionIndex: number;
  @Input() isOver: boolean;
  @Output() nextQuestionId = new EventEmitter();
  @Output() addScore = new EventEmitter();
  @Output() addQuestionsAnswered = new EventEmitter();

  constructor(
  ) { }

  ngOnInit() {
    const correctAnswerArr = this.question.answers.filter(answer => answer.correct);
    this.correctAnswer = correctAnswerArr[0].answer;
    const shuffleAnswers = _.shuffle(this.question.answers);
    this.question.answers = shuffleAnswers;
  }

  answerClicked(index, checked, answer) {
    if (this.isAnswered) {
      return;
    }
    if (!checked) {
      this.markedAnswer = -1;
      return;
    }

    this.isCorrect = answer.correct;
    this.selectedAnswer = answer.answer;
    this.markedAnswer = index;
  }

  answerQuestionClicked() {
    this.isAnswered = true;
    this.isAnswerCorrect();
  }

  nextQuestionClicked() {
    if (!this.hasMarkedAnswer) {
      return;
    }
    this.nextQuestionId.emit(this.currentQuestionIndex + 1);
    this.addQuestionsAnswered.emit(1);
  }

  isAnswerCorrect() {
    if (!this.hasMarkedAnswer) {
      return;
    }
    if (this.isCorrect) {
      return this.addScore.emit(1);
    } else {
      return this.addScore.emit(0);
    }
  }

  get hasMarkedAnswer() {
    return this.markedAnswer > -1;
  }

}
