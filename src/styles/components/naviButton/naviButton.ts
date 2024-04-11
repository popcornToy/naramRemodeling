import { Link } from 'react-router-dom';
import styled from 'styled-components';

type GNBTitleProps = {
  color: string;
};

export const GNBTitle = styled.p<GNBTitleProps>`
  font-size: 1.125rem;
  font-weight: 700;
  color: ${(prpos) => prpos.color};
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
  /* padding: 1.5625rem 0; */
  justify-content: end;
  align-items: center;
`;

export const GNBLi = styled.li`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
`;

export const NaviImageLink = styled(Link)`
  display: flex;
  gap: 0.375rem;
  align-items: center;
`;

type ImageContainerProps = {
  color: string;
};

export const ImageContainer = styled.div<ImageContainerProps>`
  color: ${(props) => props.color};
`;
