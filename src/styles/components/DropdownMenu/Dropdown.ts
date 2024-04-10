import styled from 'styled-components';

type DropdownMenuNavContainerProps = {
  isClicked: () => boolean;
};

export const DropdownMenuNavContainer = styled.div<DropdownMenuNavContainerProps>`
  role: group;
  display: ${(props) => (props.isClicked() ? 'flex' : 'none')};
  gap: 9.375rem;
  flexwrap: nowrap;
  whitespace: nowrap;
  background: linear-gradient(270deg, #f6f6f6 7.99%, rgba(255, 255, 255, 0.86) 96.23%);
  width: 100%;
`;
