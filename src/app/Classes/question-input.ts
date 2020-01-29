import { QuestionBase } from './question-base';

export class InputQuestion<T> extends QuestionBase<T> {
  controlType = 'input';
  type: string;
  placeholder?: T;

  constructor(options: {} = {}) {
    super(options);
    this.type = options['type'] || 'text';
    this.placeholder = options['placeholder'] || '';
  }
}