import styled from 'styled-components';

// 제목
export const StyledPageTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 160px 0 100px 0;

  & .EngTitle {
    color: #999;
    margin-left: 18.2px;
    font-family: 'Noto Sans';
    font-size: 26px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 18.2px;
  }

  & .KorTitle {
    color: #000;

    font-family: 'Noto Sans';
    font-size: 60px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin: 0;
  }
`;

// 총?건
export const StyledTotalBoard = styled.p`
  color: #000;
  font-family: 'Noto Sans';
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 250%;
`;

// 드롭다운
interface DropDownProps {
  $width?: string;
  $height?: string;
}

export const StyledDropDown = styled.div<DropDownProps>`
  width: ${(props) => props.$width || '118px'};
  height: ${(props) => props.$height || '40px'};

  & .DropDownButton {
    width: ${(props) => props.$width || '118px'};
    height: ${(props) => props.$height || '40px'};
    position: relative;
    border-bottom: 1px solid #d1d1d1;
    border-radius: 0%;
    background: rgba(217, 217, 217, 0);
  }
  & .DropDownSvg {
    position: relative;
    left: 100px;
  }
  & .DropDownList {
    position: relative;
    width: ${(props) => props.$width || '40px'};
    top: -31px;
  }
  & .DropDownOption {
    width: 40px;
    height: 40px;
    color: #999;
    text-align: center;
    line-height: 20px;
  }
`;

// 서치바
export const StyledSearchBar = styled.label`
  width: 240px;
  height: 40px;
  display: flex;
  flex-direction: row;

  & .SearchInput {
    width: 240px;
    height: 40px;
    border: 0px;
    border-bottom: 1px solid #d1d1d1;
    background: rgba(217, 217, 217, 0);
  }

  .SaerchInput::focus {
    outline: none;
  }

  .SearchInput::-webkit-search-cancel-button {
    display: none;
  }

  & .SearchImg {
    width: 18px;
    height: 20px;
    position: relative;
    left: -25px;
    top: 10px;
  }
`;

export const StyledSearch = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;
