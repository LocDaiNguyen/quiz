import { NgModule } from '@angular/core';
import { RouterModule, Routes, ROUTER_CONFIGURATION } from '@angular/router';

import { QuizComponent } from './quiz.component';
import { QuizCardComponent } from './quiz-card/quiz-card.component';
import { QuizGuard } from './quiz-can-deactivate.guard';

const routes: Routes = [
  {
    path: '',
    component: QuizComponent,
    canDeactivate: [QuizGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuizRoutingModule {}
