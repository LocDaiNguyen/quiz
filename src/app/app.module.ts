import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import 'materialize-css';
import { MaterializeModule } from 'angular2-materialize';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { MockDbData } from '../server/mock.data';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { QuizOptionsComponent } from './quiz-options/quiz-options.component';

import { QuestionsService } from './shared/questions.service';
import { QuizGuard } from './quiz/quiz-can-deactivate.guard';
import { OptionsService } from './shared/options.service';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    QuizOptionsComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    MaterializeModule,
    InMemoryWebApiModule.forRoot(MockDbData),
    AppRoutingModule
  ],
  providers: [
    QuestionsService,
    OptionsService,
    QuizGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
