import { AbstractControl } from '@angular/forms';

export function useField(form: FormGroup, fieldName: string): AbstractControl {
  return form.get(fieldName)!;
}
