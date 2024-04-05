import styled from 'styled-components';

type GNBTitleProps = {
  fontSize?: string;
  fontWeight?: string;
  isHeader?: boolean;
  color?: 'black' | 'white';
};

export const GNBTitle = styled.p<GNBTitleProps>`
  font-size: ${(props) => (props.isHeader ? '1rem' : '1.25rem')};
  font-weight: ${(props) => (props.isHeader ? '700' : '500')};
  color: ${(props) => (props.color === 'white' ? '#ffffff' : '#333')};
  line-height: normal;
  font-style: normal;
  text-decoration: none;

  a {
    text-decoration: none;
    color: inherit;
  }
`;

type GNBContainerProps = {
  justifyContent: 'start' | 'end';
};

export const GNBContainer = styled.ul<GNBContainerProps>`
  display: flex;
  gap: 3.4375rem;
  white-space: nowrap;
  justify-content: ${(props) => props.justifyContent};
`;
