import { Directive } from '@angular/core';
import { ValidationErrors, ValidatorFn, FormGroup } from '@angular/forms';

@Directive({
  selector: '[appDividedNames]'
})
export class DividedNamesDirective {

  constructor() { }

}

export const dividedNamesValidator: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
  const name = control.get('name');
  const alterEgo = control.get('alterEgo');

  return name && alterEgo && name.value === alterEgo.value ? { 'dividedNames': true } : null;
};