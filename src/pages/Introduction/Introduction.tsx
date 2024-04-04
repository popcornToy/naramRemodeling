import { StyledFlexCenter } from '@/styles/components/Introduction';
import IntroductionContent from './components/IntroductionContent';
import PageLayout from '@/components/organisms/PageLayout/PageLayout';
import PageMainImageType01 from '../../components/atoms/PageMainImageType01/PageMainImageType01';

function Introduction() {
  return (
    <div>
      <div>
        <PageMainImageType01 />
      </div>
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
    </div>
  );
}

export default Introduction;
