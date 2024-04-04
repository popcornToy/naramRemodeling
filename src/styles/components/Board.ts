import styled from 'styled-components';

// styled-component
export const StyledPageEngTitle = styled.p`
  width: 100%;
  color: #999;
  text-align: center;
  font-family: 'Noto Sans';
  font-size: 26px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 18.2px;
  margin: 0;
`;

export const StyledPageH2Title = styled.h2`
  color: #000;
  text-align: center;
  font-family: 'Noto Sans';
  font-size: 60px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: 0;
`;

export const StyledTotalBoard = styled.p`
  color: #000;
  font-family: 'Noto Sans';
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 250%;
`;

export const StyledPageHeading = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyledDropDown = styled.button<{ $width?: string }>`
  width: ${(props) => props.$width || '118px'};
  position: relative &img;
  border-bottom: 1px solid #d1d1d1;
  border-radius: 0%;
  background: rgba(217, 217, 217, 0);

  &img {
  }
`;
