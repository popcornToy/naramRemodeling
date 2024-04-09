import { MainBannerContainer } from '@/styles/components/MainPage/MainPage';
import mainBanner from '/mainBanner.png';

import Header from '@/components/organisms/Header/Header';

export default function Main() {
  return (
    <>
      <Header isLogin={true} isMain />
      <MainBannerContainer>
        <img src={mainBanner} alt="메인 이미지" />
      </MainBannerContainer>

      <div>
        <h1>메인 페이지</h1>
      </div>
    </>
  );
}
