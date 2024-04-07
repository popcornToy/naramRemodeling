import PageLayout from '@/components/organisms/PageLayout/PageLayout';
import mainImage from '/introduction_main.svg';
import LocationContent from '../components/LocationContent';

function Location() {
  return (
    <>
      <PageLayout
        isMainMenu={false}
        EngTitle="COMPANY"
        KorTitle="찾아오시는 길"
        alt="찾아오시는 길 페이지"
        mainImage={mainImage}
        firstTitle="CONTACT"
        firstSubTitle="US"
        secondTitle="찾아오시는 길"
        thirdTitle="주식회사 나람에 찾아오시는 길입니다 "
      >
        <LocationContent />
      </PageLayout>
    </>
  );
}

export default Location;
