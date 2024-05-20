import { useState } from 'react';
import { FieldValues } from './types/fields';
import { FormState, UseFormProps } from './types/form';
import { createFormControl } from './logic/createFormControl';

export const useForm = <TFieldValues extends FieldValues>({
  defaultValues = {} as TFieldValues,
  schema,
}: UseFormProps<TFieldValues>) => {
  const [formState, setFormState] = useState<FormState<TFieldValues>>({
    values: defaultValues,
  });
  const formControl = createFormControl<TFieldValues>(formState, setFormState, schema);

  return formControl;
};
