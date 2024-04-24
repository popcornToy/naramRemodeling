import styled from 'styled-components';
import { Link } from 'react-router-dom';

// 게시글 상세페이지 레이아웃

export const StyledBoardDetailLayout = styled.div`
  width: 1300px;
  margin-top: 80px;
  border-top: 2px solid black;
  border-bottom: 2px solid black;
`;

export const StyledDetailTitleContainer = styled.div`
  width: 100%;
`;

export const StyledDetailTitleWrapper = styled.div`
  width: 100%;
  height: 100px;
  padding: 25px 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  text-align: left;
`;

export const StyledDetailTitleText = styled.div`
  color: #000;
  font-family: 'Noto Sans';
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 83.333% */
`;

export const StyledDetailSubTitle = styled.div`
  display: flex;
  flex-direction: row;
  color: var(--text-darkgray, #666);
  font-family: 'Noto Sans';
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 125% */
`;
export const StyledFileWrapper = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  gap: 15px;
  padding: 15px 20px;
  background-color: #f6f6f6;
  border-top: 1px solid #d1d1d1;
  border-bottom: 1px solid #d1d1d1;
`;

export const StyledDetailContent = styled.div`
  min-height: 500px;
  padding: 20px 25px;
  text-align: left;
  font-size: 18px;
`;

// 이전글, 다음글 컴포넌트
export const StyledMoveToPageWrapper = styled.div`
  display: flex;
  width: 1300px;
  padding: 15px 20px;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid var(--line-gray, #d1d1d1);
  border-bottom: 1px solid var(--line-gray, #d1d1d1);
  background: var(--white, #fff);
  color: var(--text-black, #333);
  font-family: 'Noto Sans';
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const StyledMoveTopageIcon = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  height: 30px;
  line-height: 30px;

  & img {
    width: 30px;
    height: 30px;
  }
`;

export const StyledTest = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  height: 30px;
  line-height: 30px;

  & img {
    width: 30px;
    height: 30px;
  }
`;

export const StyledTestWrapper = styled(Link)`
  display: flex;
  width: 1300px;
  padding: 15px 20px;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid var(--line-gray, #d1d1d1);
  border-bottom: 1px solid var(--line-gray, #d1d1d1);
  background: var(--white, #fff);
  color: var(--text-black, #333);
  font-family: 'Noto Sans';
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
