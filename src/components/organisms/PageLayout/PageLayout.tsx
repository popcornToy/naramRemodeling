import PageMainImage from '@/components/atoms/PageMainImage/PageMainImage';
import PageTitle from '@/components/atoms/PageTitle/PageTitle';
import MainMenuButton from '@/components/moleclues/MainMenuButton/MainMenuButton';
import PageSubTitleLayout from '@/components/moleclues/PageSubTitleLayout/PageSubTitleLayout';
import NaviBar from '@/components/moleclues/naviButton/NaviBar';
import { StyledFlexCenter, Wrapper } from '@/styles/components/IntroductionPage/Introduction';
import { StyledPageMainImageWrapper } from '@/styles/components/PageMainImageWrapper/PageMainImageWrapper';
import { ReactNode } from 'react';

type PageLayoutProps = {
  EngTitle: string;
  KorTitle: string;
  isNaviBar: boolean;
  isMainMenu: boolean;
  alt: string;
  children: ReactNode;
  mainImage: string;

  firstTitle: string;
  firstSubTitle?: string;
  secondTitle: string;
  thirdTitle: string;
  thirdSubTitle?: string;
};

function PageLayout({
  EngTitle,
  KorTitle,
  isNaviBar,
  isMainMenu,
  alt,
  children,
  mainImage,
  firstTitle,
  firstSubTitle,
  secondTitle,
  thirdTitle,
  thirdSubTitle,
}: PageLayoutProps) {
  return (
    <>
      <NaviBar isHeader={isNaviBar} />
      <PageTitle EngTitle={EngTitle} KorTitle={KorTitle} />
      <Wrapper>
        <div className="mainMenuPosition">
          <MainMenuButton isHeader={isMainMenu} />
        </div>
        <StyledPageMainImageWrapper>
          <PageMainImage image={mainImage} alt={alt}></PageMainImage>
          <PageSubTitleLayout
            firstTitle={firstTitle}
            firstSubTitle={firstSubTitle}
            secondTitle={secondTitle}
            thirdTitle={thirdTitle}
            thirdSubTitle={thirdSubTitle}
          >
            {children}
          </PageSubTitleLayout>
        </StyledPageMainImageWrapper>
      </Wrapper>
    </>
  );
}

export default PageLayout;
