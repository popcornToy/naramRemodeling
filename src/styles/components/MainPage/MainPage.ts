import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const MainBannerContainer = styled.div`
  & img {
    width: 100%;
    height: 60rem;
    object-fit: cover;
  }
`;

export const HeaderContainer = styled.header`
  position: relative;
  z-index: 1;
`;

export const MainBoxContainer = styled.main`
  position: relative;
`;

type MainBoxTitleProps = {
  color: string;
  isBox: boolean;
};

export const MainBoxTitleContainer = styled.span.withConfig({
  shouldForwardProp: (prop) => !['isBox'].includes(prop),
})<MainBoxTitleProps>`
  font-size: 1.875rem;
  color: ${(props) => props.color};
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.00375rem;

  white-space: nowrap;
  ${(props) =>
    props.isBox &&
    `
    position: absolute;
    bottom: 2.5rem;
    left: 3.3125rem;
  `}
`;

export const MainBoxImgContainer = styled.div`
  width: 23.5625rem;
  height: 18.75rem;
  background-color: #7b7b7b;
  border-radius: 1rem;
  & img {
    mix-blend-mode: multiply;
    object-fit: cover;
  }
`;

export const MainBoxLinkContainer = styled(Link).withConfig({
  shouldForwardProp: (prop) => !['isBox'].includes(prop),
})<MainBoxTitleProps>`
  font-size: 1.25rem;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.00375rem;

  color: ${(props) => props.color};
  white-space: nowrap;
  ${(props) =>
    props.isBox &&
    `
  position: absolute; 
  top: 2.75rem; 
  right: 2.4375rem;
  
  `}
`;

export const MainBoxLinkTextContainer = styled(Link)`
  color: #666666;
  font-size: 1.5rem;
  font-weight: 400;
  letter-spacing: -0.003rem;
  line-height: normal;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 29.25rem;
`;

export const MainBoxTextContainer = styled.p`
  color: #666666;
  font-size: 1.5rem;
  font-weight: 400;
  letter-spacing: -0.003rem;
  line-height: normal;
`;

// MainBoard

export const MainBoardContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  background-color: #ededed;
  padding: 2.4375rem 2.9375rem;
  max-width: 55.5rem;
  width: 100%;
  gap: 1.875rem;
  border-radius: 1rem;
`;

export const MainBoardTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 0.625rem;
`;

export const MainBoardTextContainer = styled.div`
  display: flex;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  min-width: 0;
  justify-content: space-between;
`;

export const MainBoxHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

// MainPage
export const MainContentsBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.5rem;
  background: linear-gradient(180deg, #fff 0%, rgba(255, 255, 255, 0) 80.83%);
  padding: 8rem 3.6875rem;
`;

export const MainContentsFlexBox = styled.div`
  display: flex;
  justify-content: space-around;
`;

// 오시는 길

export const MainPathContainer = styled.div`
  background-color: rgba(9, 9, 9, 0.5);
  height: 60rem;
  position: relative;
  & img {
    mix-blend-mode: multiply;
    width: 100%;
    object-fit: cover;
    height: 60rem;
  }
`;

export const MainKakaoMapContainer = styled.div`
  width: 80%;
  position: absolute;
  bottom: 6.375rem;
  left: 50%;
  transform: translateX(-50%);
`;

export const MainPathSpan = styled.span`
  font-size: 2.5rem;
  color: #fff;
  font-weight: 700;
  line-height: normal;
  transform: translateX(-50%);
  letter-spacing: -0.005rem;

  position: absolute;
  top: 9.125rem;
  left: 50%;
`;
