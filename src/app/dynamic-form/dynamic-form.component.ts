import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { QuestionBase } from '../Classes/question-base';
import { FormGroup } from '@angular/forms';
import { QuestionControlService } from '../Services/question-control.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css'],
  providers: [ QuestionControlService ]
})
export class DynamicFormComponent implements OnInit {

  @Output() onsubmit = new EventEmitter<{key: string, value: any}[]>();
  @Input() questions: QuestionBase<any>[]= [];
  form: FormGroup;
  
  constructor(private questionControlService: QuestionControlService) { }

  ngOnInit() {
    this.form = this.questionControlService.toFormGroup(this.questions);
  }

  OnSubmit() {
    this.onsubmit.emit(this.getFormValues());
  }

  private getFormValues() : {key: string, value: any}[] {
    let result: {key: string, value: any}[] = [];
  
    for (let formControl in this.form.controls) {
      result.push({ key: formControl, value: this.form.controls[formControl].value});
    }
  
    return result;
  }
}
