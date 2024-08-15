import { FormGroup, FormBuilder, Validators } from '@angular/forms';

export function useForm(initialValues: any) {
  const fb = new FormBuilder();
  const form = fb.group(initialValues);

  return form;
}
