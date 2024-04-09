import Search from '@/components/moleclues/Search/Search';
import BoardTable from '@/components/moleclues/BoardTable/BoardTable';
import PaginationBar from '@/components/moleclues/PaginationBar/PaginationBar';
import { StyledBoardLayout } from '@/styles/components/Board/Board';

function BoardLayout() {
  return (
    <StyledBoardLayout>
      <Search />
      <BoardTable />
      <PaginationBar />
    </StyledBoardLayout>
  );
}

export default BoardLayout;
