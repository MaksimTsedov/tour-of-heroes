import { Component, Input } from '@angular/core';
import { QuestionBase } from '../Classes/QuestionBase';
import { FormGroup } from '@angular/forms';
import { InputQuestion } from '../Classes/question-input';
import { NumberInputQuestion } from '../Classes/question-number-input';
import { DropdownQuestion } from '../Classes/question-dropdown';

@Component({
  selector: 'app-question',
  templateUrl: './dynamic-form-question.component.html',
  styleUrls: ['./dynamic-form-question.component.css']
})
export class DynamicFormQuestionComponent {
  @Input() question: QuestionBase<any>;
  @Input() form: FormGroup;

  get isValid() { return this.form.controls[this.question.key].valid || this.form.valid; }

  get questionInput() { 
    if (this.question instanceof InputQuestion) {
      return (this.question as InputQuestion<any>);
    }
  }

  get questionNumber() { 
    if (this.question instanceof NumberInputQuestion) {
      return (this.question as NumberInputQuestion);
    }
  }

  get questionDropdown() { 
    if (this.question instanceof DropdownQuestion) {
      return (this.question as DropdownQuestion);
    }
  }
}
