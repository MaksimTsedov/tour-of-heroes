import { Injectable } from '@angular/core';
import { QuestionBase } from '../Classes/QuestionBase';
import { InputQuestion } from '../Classes/question-input';
import { DropdownQuestion } from '../Classes/question-dropdown';
import { HeroClass } from '../Classes/HeroClass.enum';
import { CheckboxQuestion } from '../Classes/question-checkbox';

@Injectable()
export class HeroFormDataService {

constructor() { }

getHeroData() {
  let questions: QuestionBase<any>[] = [

    new InputQuestion<string>({
      key: 'name',
      label: 'Name:',
      required: true,
      order: 1,
      placeholder: 'Name'
    }),

    new InputQuestion<string>({
      key: 'alterEgo',
      label: 'Alter ego:',
      order: 2,
      placeholder: 'Alter ego'
    }),

     new DropdownQuestion({
      key: 'heroClass',
      label: 'Hero class:',
      options: this.getHeroClasses(),
      required: true,
      order: 3
    }),

      new CheckboxQuestion({
        key: 'isEvil',
        label: 'Is hero evil',
        value: Boolean.prototype,
        required: true,
        order: 4
      })
  ];

  return questions.sort((a, b) => a.order - b.order);
}

private getHeroClasses() : {key: string, value: string}[] {
  let enumValues: {key: string, value: string}[] = [];

  for (let value in HeroClass) {
    enumValues.push({ key: HeroClass[value], value: value});
  }

  return enumValues;
}
}
