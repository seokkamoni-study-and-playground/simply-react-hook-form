'use client';

import { LoginForm } from '@/types/login';
import { SubmitHandler, useForm } from '../../../index';
import { loginSchema } from '@/schemas/login';


const LoginPage = () => {
  const { errors, handleSubmit, register } = useForm<LoginForm>({
    defaultValues: {
      email: '',
      password: '',
    },
    schema: loginSchema
  });

  const onSubmit: SubmitHandler<LoginForm> = (data) => {
    console.log(data);
    console.log(errors)
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ display: "flex", flexDirection: "column" }}>
      <input {...register('email')} />
      <input {...register('password')} />
      <button>로그인</button>
    </form>
  );
};

export default LoginPage;
