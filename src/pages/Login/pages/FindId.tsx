import { FieldValues, SubmitHandler } from 'react-hook-form';
import FindIdPage from '../components/FindIdPage';
import axios from 'axios';
import { useState } from 'react';

function FindId() {
  // 아이디 찾기 결과를 저장할 상태
  const [userId, setUserId] = useState<string>('');

  // 아이디 찾기 요청
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const { name, email } = data;

      console.log('name', name);
      console.log('email', email);

      // 아이디 찾기 요청
      const response = await axios.post('https://ip:10000/user/findId', { name, email });

      setUserId(response.data.userId);
    } catch (error) {
      console.error('Error finding id:', error);
    }
  };
  return (
    <>
      <FindIdPage onSubmit={onSubmit} />
      {userId && <p>찾은 아이디 : {userId}</p>}
    </>
  );
}

export default FindId;
