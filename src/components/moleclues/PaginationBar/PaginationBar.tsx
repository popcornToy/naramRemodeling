import BasicButton from '@/components/atoms/Board/BasicButton';
import Pagination from '@/components/atoms/Board/Pagination';
import { StyledPaginationBar } from '@/styles/components/Board/Board';

function PaginationBar() {
  return (
    <StyledPaginationBar>
      <Pagination />
      <BasicButton text="글쓰기" />
    </StyledPaginationBar>
  );
}

export default PaginationBar;
