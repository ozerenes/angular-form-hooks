import { ValidatorFn, FormControl } from '@angular/forms';

export function useValidation(control: FormControl, validators: ValidatorFn[]) {
  control.setValidators(validators);
  control.updateValueAndValidity();
}
