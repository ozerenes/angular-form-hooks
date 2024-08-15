import { useForm } from './useForm';
import { useField } from './useField';

describe('useField', () => {
  it('should get the form field', () => {
    const initialValues = { name: '' };
    const { form } = useForm(initialValues);
    const { field } = useField(form, 'name');

    expect(field).toBeTruthy();
  });

  it('should set the value of the field', () => {
    const initialValues = { name: '' };
    const { form } = useForm(initialValues);
    const { field, setValue } = useField(form, 'name');

    setValue('John Doe');
    expect(field.value).toBe('John Doe');
  });

  it('should reset the field value', () => {
    const initialValues = { name: 'John' };
    const { form } = useForm(initialValues);
    const { field, resetField } = useField(form, 'name');

    resetField('Jane Doe');
    expect(field.value).toBe('Jane Doe');
  });
});
