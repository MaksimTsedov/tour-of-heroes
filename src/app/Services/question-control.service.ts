import { Injectable }   from '@angular/core';
import { FormControl, FormGroup, ValidatorFn } from '@angular/forms';
import { QuestionBase } from '../Classes/question-base';
import { dividedNamesValidator } from '../Validators/divided-names.directive';

@Injectable()
export class QuestionControlService {
  constructor() { }

  toFormGroup(questions: QuestionBase<any>[] ) {
    let group: any = {};

    questions.forEach(question => {
      group[question.key] = question.validators ? new FormControl(question.value || '', question.validators)
                                              : new FormControl(question.value || '');
    });
    return new FormGroup(group, dividedNamesValidator);
  }
}