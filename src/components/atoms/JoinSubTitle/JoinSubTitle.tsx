import { StyledBar } from '@/styles/components/PageSubTitle/PageSubTitle';
import { ReactNode } from 'react';
import styled from 'styled-components';

//type
interface JoinSubTitleProps {
  children: string | ReactNode;
}

const StyledJoinSubTitle = styled.div``;

function JoinSubTitle({ children }: JoinSubTitleProps) {
  return (
    <StyledJoinSubTitle>
      <h2>{children}</h2>
      <StyledBar />
      {required ? <p>필수 입력란입니다</p>}
    </StyledJoinSubTitle>
  );
}

export default JoinSubTitle;
