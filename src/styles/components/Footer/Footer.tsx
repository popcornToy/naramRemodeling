import styled from 'styled-components';

export const StyledContainer = styled.div`
  border-top: 1px solid #d1d1d1;
  padding: 2.36rem 5rem;
  display: flex;
  justify-content: space-between;
  align-items: end;
  background-color: white;
  width: 100%;
  /* position: absolute;
  bottom: 0; */

  & .address {
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 0.5rem;
  }

  & .address_sub {
    display: flex;
    white-space: nowrap;
    gap: 1rem;
  }

  & .divider {
    border-left: 1px solid #333;
  }
`;
