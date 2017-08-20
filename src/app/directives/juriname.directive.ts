import { Directive } from '@angular/core';
import { NG_VALIDATORS, AbstractControl, ValidatorFn, Validator, FormControl } from '@angular/forms';

//validation function
function validateJuriNameFactory() : ValidatorFn {

  return (c: AbstractControl) => {
    let isValid = c.value === 'Juri';
    if(isValid) {
      return null;
    }
    else {
      return {
        appJuriname: {
          valid: false
        }
      };
    }
  }

}

@Directive({
  selector: '[appJuriname][ngModel]',
  providers: [
    {provide: NG_VALIDATORS, useExisting: JurinameDirective, multi: true}
  ]
})
export class JurinameDirective implements Validator {

  validator: ValidatorFn;

  constructor() {
    this.validator = validateJuriNameFactory();
  }
  validate(c: FormControl) {
    return this.validator(c);
  }

}
