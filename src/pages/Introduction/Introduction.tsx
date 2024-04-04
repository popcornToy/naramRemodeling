import { StyledFlexCenter } from '@/styles/components/IntroductionPage/Introduction';
import IntroductionContent from './components/IntroductionContent';
import PageLayout from '@/components/organisms/PageLayout/PageLayout';
import mainImage from '/introduction_main.svg';
import { StyledPageMainImageWrapper } from '@/styles/components/PageMainImageWrapper/PageMainImageWrapper';

function Introduction() {
  return (
    <StyledPageMainImageWrapper>
      <img src={mainImage} alt="회사소개 페이지" />

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
    </StyledPageMainImageWrapper>
  );
}

export default Introduction;
