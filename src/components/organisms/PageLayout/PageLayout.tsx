import PageMainImage from '@/components/atoms/PageMainImage/PageMainImage';
import PageSubTitleLayout from '@/components/moleclues/PageSubTitleLayout/PageSubTitleLayout';
import { Wrapper } from '@/styles/components/IntroductionPage/Introduction';
import { StyledPageMainImageWrapper } from '@/styles/components/PageMainImageWrapper/PageMainImageWrapper';
import { ReactNode } from 'react';
import Header from '../Header/Header';
import Footer from '@/components/atoms/Footer/Footer';

type PageLayoutProps = {
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
      {/* <Header isLogin={true} isMain={false} /> */}
      <Wrapper>
        <StyledPageMainImageWrapper>
          <PageMainImage image={mainImage} alt={alt} />
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
      {/* <Footer /> */}
    </>
  );
}

export default PageLayout;
