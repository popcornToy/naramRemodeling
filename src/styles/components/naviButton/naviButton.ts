import styled from 'styled-components';

type GNBTitleProps = {
  fontSize?: string;
  fontWeight?: string;
  isHeader?: boolean;
  color?: 'black' | 'gray' | 'white';
};

export const GNBTitle = styled.p<GNBTitleProps>`
  font-size: ${(props) => (props.isHeader ? '1rem' : '1.25rem')};
  font-weight: ${(props) => (props.isHeader ? '700' : '500')};
  color: ${(props) => {
    switch (props.color) {
      case 'gray':
        return '#999999';
      case 'white':
        return '#FFFFFF';
      case 'black':
      default:
        return '#333';
    }
  }};
  border-right: ${(props) => (props.isHeader ? 'none' : '1px solid #D1D1D1')};
  padding: ${(props) => (props.isHeader ? '0 3.4375rem' : '0.96rem 3.9375rem')};
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
  white-space: nowrap;
  justify-content: ${(props) => props.justifyContent};
`;
