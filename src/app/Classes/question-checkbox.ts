import { InputQuestion } from './question-input';

export class CheckboxQuestion extends InputQuestion<boolean> {
  constructor(options: {} = {}) {
    super(options);
    super.type = 'checkbox';
  }
}
