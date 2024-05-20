import { LoginForm } from '@/types/login';

export const loginSchema = (loginForm: LoginForm) => {
  const errors: Partial<LoginForm> = {};
  const emailRegx = /^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

  if (!loginForm.email.trim()) {
    errors.email = '필수 입력 값 입니다.';
  } else if (!emailRegx.test(loginForm.email)) {
    errors.email = '유효하지 않은 이메일 주소입니다.';
  }

  if (!loginForm.password.trim()) {
    errors.password = '필수 입력 값 입니다.';
  }

  return errors;
};
