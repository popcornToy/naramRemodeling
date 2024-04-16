import { Link } from 'react-router-dom';
import styled from 'styled-components';

type ProductTitleProps = {
  productType?: string;
};

export const ProductTitleA = styled(Link)<ProductTitleProps>`
  font-size: 1.3333333333333333rem;
  padding: 0.8125rem 11.5625rem 0.8125rem 2.4375rem;
  border-bottom: 1px solid #d1d1d1;
  ${(productType) => {
    switch (productType) {
      case 'pork':
        return `
        color: #333;
        font-weight: 700;
        line-height: normal;
        background: #EDF3FB;
      `;
      case 'chicken':
        return `
        color: #333;
        font-weight: 700;
        line-height: normal;
        background: #EDF3FB;
      `;
      case 'duck':
        return `
        color: #333;
        font-weight: 700;
        line-height: normal;
        background: #EDF3FB;
      `;
      default:
        return `
        color: #666;
        font-weight: 400;
        line-height: normal;
        background: transparent;
      `;
    }
  }};
`;

// molcules/ProductCollection.tsx
export const ProductTitleUl = styled.ul`
  display: flex;
  flex-direction: column;
`;

export const ProductTitleLi = styled.li``;
