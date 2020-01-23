import { Injectable } from '@angular/core';
import { QuestionBase } from '../Classes/QuestionBase';
import { InputQuestion } from '../Classes/question-input';
import { DropdownQuestion } from '../Classes/question-dropdown';

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

/*     new DropdownQuestion({
      key: 'heroClass',
      label: 'Hero class:',
    }) */
  ];

  return questions.sort((a, b) => a.order - b.order);
}

}
