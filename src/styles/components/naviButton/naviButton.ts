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

export const GNBContainer = styled.ul`
  display: flex;
  gap: 3rem;
  white-space: nowrap;
  padding: 1.5625rem 0;
  justify-content: end;
  align-items: center;
`;

export const GNBLi = styled.li`
  display: flex;
  gap: 0.375rem;
`;

export const NaviImage = styled.div`
  display: flex;
  gap: 0.375rem;
  align-items: center;
`;
