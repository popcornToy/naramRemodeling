import { StyledFlexCenter, Wrapper } from '@/styles/components/IntroductionPage/Introduction';
import IntroductionContent from './components/IntroductionContent';
import PageLayout from '@/components/organisms/PageLayout/PageLayout';
import mainImage from '/introduction_main.svg';
import { StyledPageMainImageWrapper } from '@/styles/components/PageMainImageWrapper/PageMainImageWrapper';
import MainMenuButton from '@/components/moleclues/MainMenuButton/MainMenuButton';
import PageMainImage from '@/components/atoms/PageMainImage/PageMainImage';

function Introduction() {
  return (
    <Wrapper>
      <div className="mainMenuPosition">
        <MainMenuButton isHeader={false} />
      </div>
      <StyledPageMainImageWrapper>
        {/* <img className="mainImage" src={mainImage} alt="회사소개 페이지" /> */}
        <PageMainImage image={mainImage} alt="회사소개 페이지"></PageMainImage>
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
    </Wrapper>
  );
}

export default Introduction;
