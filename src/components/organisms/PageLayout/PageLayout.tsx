import PageSubTitle from '@/components/atoms/PageTitle/PageSubTitle';
import { StyledFlexCenter } from '@/styles/components/IntroductionPage/Introduction';
import { ReactNode } from 'react';

type PageLayout = {
  firstTitle: string;
  firstSubTitle?: string;
  secondTitle: string;
  thirdTitle: string;
  thirdSubTitle?: string;
  children: ReactNode;
};

function PageLayout({ firstTitle, firstSubTitle, secondTitle, thirdTitle, thirdSubTitle, children }: PageLayout) {
  return (
    <div>
      <StyledFlexCenter>
        <PageSubTitle
          firstTitle={firstTitle}
          firstSubTitle={firstSubTitle}
          secondTitle={secondTitle}
          thirdTitle={thirdTitle}
          thirdSubTitle={thirdSubTitle}
        ></PageSubTitle>
        {children}
      </StyledFlexCenter>
    </div>
  );
}

export default PageLayout;
