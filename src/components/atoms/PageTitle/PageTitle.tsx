import { StyledPageTitle } from '@/styles/components/Board/Board';

type PageTitle = {
  EngTitle: string;
  KorTitle: string;
};

function PageTitle({ EngTitle, KorTitle }: PageTitle) {
  return (
    <StyledPageTitle>
      <p className="EngTitle">{EngTitle}</p>
      <h2 className="KorTitle">{KorTitle}</h2>
    </StyledPageTitle>
  );
}

export default PageTitle;
