import { ChangeEventHandler } from 'react';

export type ChangeHandler = ChangeEventHandler<
  HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
>;
