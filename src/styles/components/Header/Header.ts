import styled from 'styled-components';

type HeaderContainerProps = {
  isMain: boolean;
  isScrolled: boolean;
};

export const HeaderContainer = styled.header<HeaderContainerProps>`
  display: flex;
  align-items: center;
  padding: 0 4.0625rem;
  width: 100%;
  justify-content: space-between;
  position: fixed;
  top: 0;
  z-index: 10;
  background-color: ${(props) => (props.isScrolled ? '#ffffff' : 'transparent')};
`;
