import axios from 'axios';
import LoginForm from '../components/LoginForm';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FieldValues, SubmitHandler } from 'react-hook-form';

function Login() {
  const [isError, setIsError] = useState(false);
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
      setIsError(true);
    }
  };
  return (
    <>
      <LoginForm onSubmit={onSubmit} isError={isError} />
    </>
  );
}

export default Login;
