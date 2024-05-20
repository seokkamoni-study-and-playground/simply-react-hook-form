import { BaseSyntheticEvent, Dispatch, SetStateAction } from 'react';
import { ChangeHandler } from '../types/controller';
import { FormState, RegisterOptions, Schema } from '../types/form';
import { FieldValues } from '../types/fields';

export const createFormControl = <TFieldValues extends FieldValues>(
  formState: FormState<TFieldValues>,
  setFormState: Dispatch<SetStateAction<FormState<TFieldValues>>>,
  schema?: Schema<TFieldValues>
) => {
  const handleSubmit =
    (onSubmit: (values: TFieldValues) => void) => (e: BaseSyntheticEvent) => {
      e.preventDefault();
      e.persist();
      onSubmit(formState.values);
      if (schema) {
        setFormState((prev) => ({ ...prev, errors: schema(formState.values) }));
      }
    };

  const register = (name: keyof TFieldValues, options?: RegisterOptions) => {
    const onChange: ChangeHandler = (e) => {
      const { value } = e.target;

      setFormState((prev) => ({ ...prev, values: { ...prev.values, [name]: value } }));
    };

    return { onChange, name, value: formState.values[name], ...options };
  };

  const watch = (name?: keyof TFieldValues) => {
    if (!name) {
      return formState.values;
    }
    return formState.values[name];
  };

  return {
    values: formState.values,
    errors: formState.errors,
    handleSubmit,
    register,
    watch,
  };
};
