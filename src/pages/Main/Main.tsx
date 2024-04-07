import NaviBar from '@/components/moleclues/naviButton/NaviBar';
import mainBanner from '/mainBanner.png';
import { HeaderContainer, MainBannerContainer } from '@/styles';

export default function Main() {
  return (
    <>
      <HeaderContainer>
        <NaviBar color="white" isHeader justifyContent="end" isMain />
      </HeaderContainer>
      <MainBannerContainer>
        <img src={mainBanner} alt="메인 이미지" />
      </MainBannerContainer>

      <div>
        <h1>메인 페이지</h1>
      </div>
    </>
  );
}
