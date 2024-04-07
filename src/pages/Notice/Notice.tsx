import PageTitle from '@/components/atoms/PageTitle/PageTitle';
import Search from '@/components/moleclues/Search/Search';
import BoardTable from '@/components/moleclues/BoardTable/BoardTable';
import BasicButton from '@/components/atoms/Board/BasicButton';

function Notice() {
  return (
    <>
      <PageTitle EngTitle="NOTICE" KorTitle="공지사항" />
      <Search />
      <BoardTable />
      <BasicButton text="글쓰기" />
    </>
  );
}

export default Notice;
