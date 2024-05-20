import { FieldValues } from './fields';

export type UseFormProps<TFieldValues extends FieldValues> = Partial<{
  defaultValues: TFieldValues;
  schema: Schema<TFieldValues>;
}>;

export type FormState<TFieldValues extends FieldValues> = {
  values: TFieldValues;
  errors?: Partial<TFieldValues>;
};

export type Schema<TFieldValues extends FieldValues> = (
  data: TFieldValues
) => Partial<TFieldValues>;

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
