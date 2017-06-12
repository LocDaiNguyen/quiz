import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';

import 'materialize-css';
import { MaterializeModule } from 'angular2-materialize';

import { QuizComponent } from './quiz.component';
import { QuizCardComponent } from './quiz-card/quiz-card.component';
import { QuizProgressComponent } from './quiz-progress/quiz-progress.component';
import { QuizScoreComponent } from './quiz-score/quiz-score.component';
import { QuizGuardComponent } from './quiz-guard/quiz-guard.component';

import { QuizRoutingModule } from './quiz-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    MaterializeModule,
    QuizRoutingModule
  ],
  declarations: [
    QuizComponent,
    QuizCardComponent,
    QuizProgressComponent,
    QuizScoreComponent,
    QuizGuardComponent,
  ],
  entryComponents: [
    QuizGuardComponent
  ]
})
export class QuizModule { }
