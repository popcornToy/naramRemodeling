import { useState } from 'react';
// import { Form, Input } from '@/components/atoms/Form/Form';

// import Logo from 'public/logo_mark.svg';
import { useNavigate } from 'react-router-dom';
import LoginForm from '../components/LoginForm';
import Header from '@/components/organisms/Header/Header';
import Footer from '@/components/atoms/Footer/Footer';

export type Login = {
  isError?: boolean;
};

function Login({ isError }: Login) {
  // const [error, setError] = useState<string>(''); // error 상태 추가
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const email = data.email;
      const password = data.password;

      console.log('email', email);
      console.log('password', password);
      // 로그인 요청

      navigate('/Mypage');
    } catch (error) {
      console.error('Error logging in:', error);
      // setError('아이디 또는 비밀번호를 확인해주세요.');
    }
  };

  return (
    <>
      <Header isLogin={true} isMain={false} />
      <LoginForm onSubmit={onSubmit} isError={isError} />
      <Footer />
    </>
  );
}

export default Login;
