import React from 'react';

import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import Logo from 'public/logo_mark.svg';
import Button from '@/components/atoms/Login/Button';
import Input from '@/components/atoms/Input/Input';
import Form from '@/components/atoms/Form/Form';
import { Link } from 'react-router-dom';
import { StyledLoginForm } from '@/styles/components/Login/LoginForm';

export type LoginFormProps = {
  onSubmit: SubmitHandler<FieldValues>;
  isError?: boolean;
};

function LoginForm({ onSubmit, isError }: LoginFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
  });

  return (
    <StyledLoginForm>
      <div className="titleForm">
        <img className="logo" src={Logo} alt="로고페이지" />
        <h2>로그인</h2>
        <p>언제나 고객님의 만족을 추구합니다.</p>
      </div>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          // label="이메일"
          id="email"
          type="email"
          placeholder="이메일"
          error={errors.email ? errors.email.message : ''}
          register={register('email', {
            required: '이메일을 필수 입력입니다.',
            pattern: {
              value: /^[a-zA-Z]+[!#$%&'*+-/=?^_`(){|}~]*[a-zA-Z0-9]*@[\w]+\.[a-zA-Z0-9-]+[.]*[a-zA-Z0-9]+$/,
              message: '이메일 형식이 아닙니다.',
            },
          })}
        />
        <Input
          // label="비밀번호"
          id="password"
          type="password"
          placeholder="비밀번호"
          error={errors.password ? errors.password.message : ''}
          register={register('password', {
            required: '비밀번호는 필수 입력입니다.',
            pattern: {
              value: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
              message: '비밀번호는 8자 이상이어야 하며, 숫자/대문자/소문자/특수문자를 모두 포함해야 합니다.',
            },
          })}
        />

        <Button type="submit" styledType={'login'}>
          {'로그인'}
        </Button>
        {isError && <p className="text-red-500">{'아이디 또는 비밀번호를 확인해주세요.'}</p>}
      </Form>
      <Link to={'/login/FindId'}>아이디 찾기</Link>
      <Link to={'/login/FindPassword'}>비밀번호 찾기</Link>
    </StyledLoginForm>
  );
}

export default LoginForm;
