import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-quiz-score',
  templateUrl: './quiz-score.component.html',
  styleUrls: ['./quiz-score.component.css']
})
export class QuizScoreComponent implements OnInit {

  @Input() totalQuestions: number;
  @Input() totalScore: number;
  @Output() newQuiz = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  newGame() {
    this.newQuiz.emit();
  }

}
