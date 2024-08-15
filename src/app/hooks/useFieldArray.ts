import { FormArray, FormBuilder } from '@angular/forms';

export function useFieldArray(initialValues: any[]) {
  const fb = new FormBuilder();
  const formArray = fb.array(initialValues.map(value => fb.group(value)));

  function addItem(value: any) {
    formArray.push(fb.group(value));
  }

  function removeItem(index: number) {
    formArray.removeAt(index);
  }

  return { formArray, addItem, removeItem };
}
