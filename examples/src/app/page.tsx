'use client';

import { SubmitHandler, useForm } from '../../../index';

type LoginForm = {
  email: string;
  password: string;
};

const MainPage = () => {
  const { handleSubmit, register } = useForm<LoginForm>({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit: SubmitHandler<LoginForm> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('email')} />
      <input {...register('password')} />
    </form>
  );
};

export default MainPage;
