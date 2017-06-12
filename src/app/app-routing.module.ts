import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { QuizOptionsComponent } from './quiz-options/quiz-options.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {
    path: 'quiz',
    loadChildren: './quiz/quiz.module#QuizModule'
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: '',
    component: QuizOptionsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
