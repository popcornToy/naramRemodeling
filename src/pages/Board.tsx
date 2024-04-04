import { StyledPageHeading } from '@/styles/components/Board';
import { PageEngTitle, PageH2Title } from '@/components/atoms/PageTitle/PageTitle';
import { DropDown } from '@/components/atoms/Board/DropDown';

function Board() {
  return (
    <>
      <StyledPageHeading>
        <PageEngTitle text="NOTICE" />
        <PageH2Title text="공지사항" />
      </StyledPageHeading>
      <DropDown options={['제목', '내용']} />
    </>
  );
}

export default Board;
