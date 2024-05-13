import styled from 'styled-components';

export const StyledPageMainImage = styled.div`
  inline-size: 100%;
  height: 500px;
  background-size: cover;
  background-image: url(${(props) => props.bgURL});
`;
