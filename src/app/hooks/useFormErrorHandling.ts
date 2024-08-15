import { FormGroup } from '@angular/forms';

export function useFormErrorHandling(form: FormGroup) {
  function getError(fieldName: string, errorType: string) {
    const field = form.get(fieldName);
    if (field && field.hasError(errorType)) {
      return field.getError(errorType);
    }
    return null;
  }

  return { getError };
}
