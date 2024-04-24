import Editor from '@/components/moleclues/Editor/Editor';
import { StyledContent } from '@/styles/components/PageSubTitle/PageSubTitle';
import WritePageLayout from '@/components/organisms/PageLayout/WritePageLayout';
import mainImage from '/Notice_main.svg';
import NoticeCheckBox from '@/components/moleclues/QnACheckBox/QnACheckBox';

function PromotionWritePage() {
  return (
    <WritePageLayout alt={'홍보게시물 작성 페이지'} children={undefined} mainImage={mainImage}>
      <StyledContent>
        <Editor
          title="홍보게시물 작성하기"
          formText="작성하기"
          text="돌아가기"
          to="/Information/Promotion"
          padding="20px 107px"
          fontSize="18px"
          fontWeight="700"
        />
      </StyledContent>
    </WritePageLayout>
  );
}

export default PromotionWritePage;
