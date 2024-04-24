import {
  MainBannerContainer,
  MainBoxFlexBox,
  MainContentsBox,
  MainContentsOneFlexBox,
  MainContentsTwoFlexBox,
  MainKakaoMapContainer,
  MainPathContainer,
  MainPathSpan,
} from '@/styles/components/MainPage/MainPage';
import mainBanner from '/mainBanner.png';
import mobileBanner from '/mobileMain.png';
import Header from '@/components/organisms/Header/Header';
import MainBoardBox from '@/components/moleclues/MainBoard/MainBoardBox';
import MainBox from '@/components/moleclues/MainMenuBox/MainBox';
import KakaoMap from '@/components/atoms/KakaoMap/KakaoMap';
import MobileMenu from '@/components/organisms/MobileMenu/MobileMenu';
import useClick from '@/components/organisms/MobileMenu/useClick';
import useBackgroundImage from './useBackgroundImage';
import MainMap from '@/components/atoms/MainMap/MainMap';

export default function Main() {
  const { isClick } = useClick();
  const width = useBackgroundImage();

  const Banner = width >= 768 ? `${mainBanner}` : `${mobileBanner}`;

  return (
    <>
      <Header isLogin={true} isMain />
      <MainBannerContainer>
        <img src={Banner} alt="메인 이미지" />
        <div>
          <span className="dot">나</span>
          <span>와 다른 사</span>
          <span className="dot">람</span>
          <p>내가 소중하듯이</p>
          <p>다른 사람도 소중합니다</p>
        </div>
      </MainBannerContainer>
      <MainContentsBox>
        <MainContentsOneFlexBox>
          <MainBoardBox title="공지사항" path="/Information/notice" isNotice />
          <MainBoxFlexBox>
            <MainBox alt="고객센터" img="/cs.png" path="/CS" />
            <MainBox alt="제품정보" img="/product.png" path="/product" />
          </MainBoxFlexBox>
        </MainContentsOneFlexBox>
        <MainContentsTwoFlexBox>
          <MainBoxFlexBox>
            <MainBox alt="오시는길" img="/path.png" path="/Introduction/Location" />
            <MainBox alt="인재채용" img="/recruit.png" path="/recruit" />
          </MainBoxFlexBox>
          <MainBoardBox title="나람 홍보 게시물" path="/ad" isNotice={true} />
        </MainContentsTwoFlexBox>
      </MainContentsBox>
      <MainPathContainer>
        <img src="/mainPath.png" alt="" />
        <MainPathSpan>오시는 길</MainPathSpan>
        <MainKakaoMapContainer>
          <KakaoMap firstContent="(주) 나람사료" />
        </MainKakaoMapContainer>
        <MainMap />
      </MainPathContainer>
      <MobileMenu isClicked={isClick} />
    </>
  );
}
