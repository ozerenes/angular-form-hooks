import { FormGroup, FormBuilder, FormArray } from '@angular/forms';

export function useForm(initialValues: any, validators?: any) {
  const fb = new FormBuilder();
  const form = fb.group({});

  Object.keys(initialValues).forEach((key) => {
    const value = initialValues[key];
    form.addControl(key, fb.control(value, validators?.[key] || []));
  });

  function addField(fieldName: string, value: any, validator?: any) {
    form.addControl(fieldName, fb.control(value, validator || []));
  }

  function removeField(fieldName: string) {
    form.removeControl(fieldName);
  }

  function resetForm(newValues: any) {
    form.reset(newValues);
  }

  return { form, addField, removeField, resetForm };
}
