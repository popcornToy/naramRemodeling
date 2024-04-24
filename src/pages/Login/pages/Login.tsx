import axios from 'axios';
import LoginForm from '../components/LoginForm';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FieldValues, SubmitHandler } from 'react-hook-form';

export type Login = {
  isError?: boolean;
};

function Login({ isError }: Login) {
  const [, setError] = useState<string>('');
  // error 상태 추가
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const { email, password } = data;

      console.log('email', email);
      console.log('password', password);
      // 로그인 요청
      await axios.post('https://ip:10000/user/login', { email, password });
      navigate('/');
    } catch (error) {
      console.error('Error logging in:', error);
      setError('아이디 또는 비밀번호를 확인해주세요.');
    }
  };
  return (
    <>
      <LoginForm onSubmit={onSubmit} isError={isError} />
    </>
  );
}

export default Login;
