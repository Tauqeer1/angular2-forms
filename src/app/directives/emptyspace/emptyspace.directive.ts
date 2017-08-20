import {Directive} from '@angular/core';
import {NG_VALIDATORS, AbstractControl, ValidatorFn, Validator, FormControl} from '@angular/forms';

//validation function
function validateEmptySpace(): ValidatorFn {

  return (c: AbstractControl) => {
    if (c.value === ' ') {
      return {
        emptySpace: {
          valid: false
        }
      };
    } else {
      return null;
    }
  }

}
@Directive({
  selector: '[emptySpace]',
  providers: [
    {provide: NG_VALIDATORS, useExisting: EmptySpaceValidator, multi: true}
  ]
})
export class EmptySpaceValidator implements Validator {

  validator: ValidatorFn;

  constructor() {
    this.validator = validateEmptySpace();
  }

  validate(c: FormControl) {
    return this.validator(c);
  }
}
