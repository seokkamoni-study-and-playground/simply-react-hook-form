import { BaseSyntheticEvent, Dispatch, SetStateAction } from 'react';
import { ChangeHandler } from '../types/controller';
import { RegisterOptions } from '../types/form';

export const createFormControl = <TFieldValues>(
  formValues: TFieldValues,
  setFormValues: Dispatch<SetStateAction<TFieldValues>>
) => {
  const handleSubmit =
    (onSubmit: (formValues: TFieldValues) => void) => (e: BaseSyntheticEvent) => {
      e.preventDefault();
      e.persist();

      onSubmit(formValues);
    };

  const register = (name: keyof TFieldValues, options?: RegisterOptions) => {
    const onChange: ChangeHandler = (e) => {
      const { value } = e.target;

      setFormValues((prev) => {
        if (prev) {
          return { ...prev, [name]: value } as TFieldValues;
        }
        return { [name]: value } as TFieldValues;
      });
    };

    return { onChange, name, value: formValues[name], ...options };
  };

  const watch = (name?: keyof TFieldValues) => {
    if (!name) {
      return formValues;
    }
    return formValues[name];
  };

  return { values: formValues, handleSubmit, register, watch };
};
