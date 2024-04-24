import styled from 'styled-components';
import JoinInputWrap from '@/components/moleclues/JoinInputWrap/JoinInputWrap';

const StyledJoin = styled.div`
  &.wrapper {
    padding: 76px 0;
    display: flex;
    flex-direction: column;
    gap: 2.1875rem;
  }
`;

function Join() {
  return (
    <StyledJoin className="wrapper">
      <JoinInputWrap title="아이디" type="text" button={true} valid={true} validText="id" />
      <JoinInputWrap title="비밀번호" type="password" valid={true} validText="password" />
      <JoinInputWrap title="비밀번호 확인" type="password" valid={true} validText="pwConfirm" />
      <JoinInputWrap title="이름" type="text" />
      <JoinInputWrap title="이메일" type="이메일" />
      <JoinInputWrap title="생년월일" type="number" valid={true} validText="pwConfirm" />
    </StyledJoin>
  );
}

export default Join;
