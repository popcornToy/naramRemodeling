import PageTitle from '@/components/atoms/PageTitle/PageTitle';
import Search from '@/components/moleclues/Search/Search';
import BoardTable from '@/components/atoms/Board/BoardTableTitle';

function BoardLayout() {
  return (
    <>
      <PageTitle EngTitle="NOTICE" KorTitle="공지사항" />
      <Search />
      <BoardTable titles={['번호', '제목', '작성일', '작성자', '조회수']} />
    </>
  );
}

export default BoardLayout;
