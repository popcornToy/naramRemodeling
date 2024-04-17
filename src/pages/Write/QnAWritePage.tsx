import Editor from '@/components/moleclues/Editor/Editor';
import { StyledContent } from '@/styles/components/PageSubTitle/PageSubTitle';
import WritePageLayout from '@/components/organisms/PageLayout/WritePageLayout';
import mainImage from '/Notice_main.svg';

function QnAWritePage() {
  return (
    <WritePageLayout alt={'게시글 작성 페이지'} children={undefined} mainImage={mainImage}>
      <p>QnAWritePage</p>
      <StyledContent>
        <Editor />
      </StyledContent>
    </WritePageLayout>
  );
}

export default QnAWritePage;
