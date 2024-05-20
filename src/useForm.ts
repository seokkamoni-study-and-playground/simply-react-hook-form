import { useState } from 'react';
import { FieldValues } from './types/fields';
import { UseFormProps } from './types/form';
import { createFormControl } from './logic/createFormControl';

export const useForm = <TFieldValues extends FieldValues = FieldValues>({
  defaultValues = {} as TFieldValues,
}: UseFormProps<TFieldValues>) => {
  const [formValues, setFormValues] = useState<TFieldValues>(defaultValues);
  const formControl = createFormControl<TFieldValues>(formValues, setFormValues);

  return formControl;
};
