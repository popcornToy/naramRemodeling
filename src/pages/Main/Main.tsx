import NaviBar from '@/components/moleclues/naviButton/NaviBar';
import mainBanner from '/mainBanner.png';
import { MainBannerContainer } from '@/styles';

export default function Main() {
  return (
    <>
      <header>
        <NaviBar isHeader color="black" justifyContent="end" />
        <MainBannerContainer>
          <img src={mainBanner} alt="메인 이미지" />
        </MainBannerContainer>
      </header>

      <div>
        <h1>메인 페이지</h1>
      </div>
    </>
  );
}
