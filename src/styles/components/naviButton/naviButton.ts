import styled from 'styled-components';

type GNBTitleProps = {
  color?: 'black' | 'white';
};

export const GNBTitle = styled.p<GNBTitleProps>`
  font-size: '1.125rem';
  font-weight: '700';
  color: ${(props) => (props.color === 'white' ? '#FFFFFF' : '#333333')};
  padding: '0 1.71875rem'
  line-height: normal;
  font-style: normal;
  text-decoration: none;

  a {
    text-decoration: none;
    color: inherit;
  }
`;

type GNBContainerProps = {
  isMain?: boolean;
};

export const GNBContainer = styled.ul<GNBContainerProps>`
  display: flex;
  gap: 3rem;
  white-space: nowrap;
  padding: 1.5625rem 0;
  justify-content: end;

  ${(props) =>
    props.isMain &&
    `
  top: 0;
  right: 0;
  z-index: 10;
  position: absolute;
  `}
`;
