import { Component, OnInit, OnChanges, DoCheck } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import * as _ from 'lodash';

import { Option } from '../shared/option.model';
import { OptionsService } from '../shared/options.service';
import { Question } from '../shared/question.model';
import { QuestionsService } from '../shared/questions.service';

@Component({
  selector: 'app-quiz-options',
  templateUrl: './quiz-options.component.html',
  styleUrls: ['./quiz-options.component.css']
})
export class QuizOptionsComponent implements OnInit, DoCheck {

  quizOptionForm: FormGroup;
  quizTypes: string[];
  quizType: string;
  questionsLength: number;

  constructor(
    private optionsService: OptionsService,
    private questionsService: QuestionsService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.setForm();
    this.getAllOptions();
    this.getUniqueQuizType();
    this.getQuizType();
  }

  ngDoCheck() {
    this.getQuizType();
    this.getQuestionsLength(this.quizOptionForm.get('quizType').value);
  }

  setForm() {
    this.quizOptionForm = this.formBuilder.group({
      'quizType': [null, Validators.required],
      'number': [10, Validators.required],
      'randomize': [null, Validators.required]
    });
  }

  getAllOptions() {
    this.optionsService.getAllOptions()
      .subscribe(options => this.patchForm(options[0]));
  }

  patchForm(options: Option) {
    this.quizOptionForm.patchValue({
      quizType: options.type,
      number: options.number,
      randomize: options.randomize
    });
  }

  getUniqueQuizType() {
    this.questionsService.getAllQuestions()
      .subscribe(questions => {
        this.quizTypes = _.uniqBy(questions, 'type').map(question => question.type);
      });
  }

  getQuizType() {
    this.quizType = this.quizOptionForm.get('quizType').value;
  }

  getQuestionsLength(quizType: string) {
    if (!quizType || quizType === 'all') {
      return this.questionsService.getAllQuestions()
        .subscribe(questions => this.questionsLength = questions.length);
    }
    this.questionsService.getAllQuestions()
      .subscribe(questions => {
        const filteredQuestions = questions.filter(question => question.type === quizType);
        this.questionsLength = filteredQuestions.length;
        if (this.quizOptionForm.get('number').value > this.questionsLength) {
          this.quizOptionForm.patchValue({number: this.questionsLength});
        }
      });
  }

  save() {
    if (this.quizOptionForm.valid) {
      const newQuizOptions: Option = {
        id: 1,
        type: this.quizOptionForm.value.quizType,
        number: this.quizOptionForm.value.number,
        randomize: this.quizOptionForm.value.randomize,
      };
      this.optionsService.update(newQuizOptions)
        .subscribe(() => this.goToQuiz());
    }
  }

  goToQuiz() {
    this.router.navigate(['/quiz']);
  }

}
