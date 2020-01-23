import { InputQuestion } from './question-input';

export class NumberInputQuestion extends InputQuestion<number> {
    min: number;
    max: number;

    constructor(options: {} = {}) {
        super(options);
        super.type = 'number';
        this.min = options['min'] || 0;
        this.max = options['max'] || Number.MAX_SAFE_INTEGER;
      }
}
