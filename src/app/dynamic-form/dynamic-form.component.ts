import { Component, OnInit, Input } from '@angular/core';
import { QuestionBase } from '../Classes/QuestionBase';
import { FormGroup } from '@angular/forms';
import { QuestionControlService } from '../Services/question-control.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css'],
  providers: [ QuestionControlService ]
})
export class DynamicFormComponent implements OnInit {

  @Input() questions: QuestionBase<any>[]= [];
  form: FormGroup;
  payload = '';
  
  constructor(private questionControlService: QuestionControlService) { }

  ngOnInit() {
    this.form = this.questionControlService.toFormGroup(this.questions);
  }

  OnSubmit() {
    this.payload = JSON.stringify(this.form.value);
  }

}
