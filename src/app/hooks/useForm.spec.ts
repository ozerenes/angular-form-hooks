import { useForm } from './useForm';
import { FormGroup } from '@angular/forms';

describe('useForm', () => {
  it('should create a form with initial values', () => {
    const initialValues = { name: '', email: '' };
    const { form } = useForm(initialValues);

    expect(form instanceof FormGroup).toBe(true);
    expect(form.value).toEqual(initialValues);
  });

  it('should add a new field', () => {
    const initialValues = { name: '' };
    const { form, addField } = useForm(initialValues);

    addField('email', '');

    expect(form.contains('email')).toBe(true);
    let emailField = form.get('email');
    if (emailField) {
        expect(emailField.value).toBe('');
    } else {
      (form.controls as { [key: string]: any })['email'].setValue('default@email.com');
      console.error('Email field is undefined');
    }  
  });

  it('should remove a field', () => {
    const initialValues = { name: '', email: '' };
    const { form, removeField } = useForm(initialValues);

    removeField('email');

    expect(form.contains('email')).toBe(false);
  });

  it('should reset form values', () => {
    const initialValues = { name: 'John', email: 'john@example.com' };
    const { form, resetForm } = useForm(initialValues);

    resetForm({ name: 'Jane', email: 'jane@example.com' });

    expect(form.value).toEqual({ name: 'Jane', email: 'jane@example.com' });
  });
});
