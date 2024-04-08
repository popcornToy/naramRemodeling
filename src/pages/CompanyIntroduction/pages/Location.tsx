import PageLayout from '@/components/organisms/PageLayout/PageLayout';
import contactUs from '/ContactUs_Image.svg';
import LocationContent from '../components/LocationContent';
import KakaoMap from '@/components/atoms/KakaoMap/KakaoMap';

function Location() {
  return (
    <>
      <PageLayout
        isMainMenu={false}
        EngTitle="CONTACT US"
        KorTitle="찾아오시는 길"
        alt="찾아오시는 길 페이지"
        mainImage={contactUs}
        firstTitle="CONTACT"
        firstSubTitle="US"
        secondTitle="찾아오시는 길"
        thirdTitle="주식회사 나람에 찾아오시는 길입니다 "
      >
        <LocationContent />
        <KakaoMap />
      </PageLayout>
    </>
  );
}

export default Location;
