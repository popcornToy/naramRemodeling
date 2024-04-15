import Search from '@/components/moleclues/Search/Search';
import BoardTable from '@/components/moleclues/BoardTable/BoardTable';

import { StyledContent } from '@/styles/components/PageSubTitle/PageSubTitle';

function BoardLayout() {
  return (
    <StyledContent>
      <Search />
      <BoardTable />
    </StyledContent>
  );
}

export default BoardLayout;
