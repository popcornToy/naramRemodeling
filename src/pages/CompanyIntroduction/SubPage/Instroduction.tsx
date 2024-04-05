import { StyledFlexCenter, Wrapper } from '@/styles/components/IntroductionPage/Introduction';
import IntroductionContent from './components/IntroductionContent';
import PageLayout from '@/components/organisms/PageLayout/PageLayout';

//회사소개 첫 페이지 - CEO, 연혁 등등
function Introduction() {
  return (
    <>
      <StyledFlexCenter>
        <PageLayout
          firstTitle="COMPANY"
          secondTitle="회사소개"
          thirdTitle="고객의 만족은 우리의 기쁨"
          thirdSubTitle="나람사료"
        >
          <IntroductionContent />
        </PageLayout>
      </StyledFlexCenter>
    </>
  );
}

export default Introduction;
