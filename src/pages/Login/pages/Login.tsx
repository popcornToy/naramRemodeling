import { useNavigate } from 'react-router-dom';
import LoginForm from '../components/LoginForm';

export type Login = {
  isError?: boolean;
};

function Login({ isError }: Login) {
  // const [error, setError] = useState<string>(''); // error 상태 추가
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const id = data.id;
      const password = data.password;

      console.log('id', id);
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
      <LoginForm onSubmit={onSubmit} isError={isError} />
    </>
  );
}

export default Login;
