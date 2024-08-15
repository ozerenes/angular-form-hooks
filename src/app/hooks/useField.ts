import { AbstractControl, FormGroup } from '@angular/forms';

export function useField(form: FormGroup, fieldName: string) {
  const field = form.get(fieldName)!;

  function setValue(value: any) {
    field.setValue(value);
  }

  function setValidators(validators: any) {
    field.setValidators(validators);
    field.updateValueAndValidity();
  }

  function resetField(value: any = null) {
    field.reset(value);
  }

  return { field, setValue, setValidators, resetField };
}
