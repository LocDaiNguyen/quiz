import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-quiz-progress',
  templateUrl: './quiz-progress.component.html',
  styleUrls: ['./quiz-progress.component.css']
})
export class QuizProgressComponent implements OnInit {

  @Input() progress: number;

  constructor() { }

  ngOnInit() {
  }

}
