import { FieldValues } from './fields';

export type UseFormProps<TFieldValues extends FieldValues = FieldValues> = Partial<{
  defaultValues: TFieldValues;
}>;

export type RegisterOptions = {
  min?: string | number;
  max?: string | number;
  maxLength?: number;
  minLength?: number;
  pattern?: string;
  required?: boolean;
  disabled?: boolean;
};

export type SubmitHandler<TFieldValues extends FieldValues> = (
  data: TFieldValues
) => void;
