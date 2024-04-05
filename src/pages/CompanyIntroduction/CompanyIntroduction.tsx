import MainMenuButton from '@/components/moleclues/MainMenuButton/MainMenuButton';
import PageTitle from '@/components/atoms/PageTitle/PageTitle';
import NaviBar from '@/components/moleclues/naviButton/NaviBar';
import { Outlet } from 'react-router-dom';
import { Wrapper } from '@/styles/components/IntroductionPage/Introduction';
import { StyledPageMainImageWrapper } from '@/styles/components/PageMainImageWrapper/PageMainImageWrapper';
import PageMainImage from '@/components/atoms/PageMainImage/PageMainImage';
import mainImage from '/introduction_main.svg';

//회사소개 페이지
function CompanyIntroduction() {
  return (
    <>
      <NaviBar isHeader={false} color="black" />
      <PageTitle EngTitle={'COMPANY'} KorTitle={'회사소개'} />
      <Wrapper>
        <div className="mainMenuPosition">
          <MainMenuButton isHeader={false} />
        </div>
        <StyledPageMainImageWrapper>
          <PageMainImage image={mainImage} alt="회사소개 페이지" />
          <Outlet />
        </StyledPageMainImageWrapper>
      </Wrapper>
    </>
  );
}

export default CompanyIntroduction;
