import {
  MainBannerContainer,
  MainContentsBox,
  MainContentsFlexBox,
  MainKakaoMapContainer,
  MainPathContainer,
  MainPathSpan,
} from '@/styles/components/MainPage/MainPage';
import mainBanner from '/mainBanner.png';
import Header from '@/components/organisms/Header/Header';
import MainBoardBox from '@/components/moleclues/MainBoard/MainBoardBox';
import MainBox from '@/components/moleclues/MainMenuBox/MainBox';
import KakaoMap from '@/components/atoms/KakaoMap/KakaoMap';

export default function Main() {
  return (
    <>
      <Header isLogin={true} isMain />
      <MainBannerContainer>
        <img src={mainBanner} alt="메인 이미지" />
      </MainBannerContainer>
      <MainContentsBox>
        <MainContentsFlexBox>
          <MainBoardBox title="공지사항" path="/Information/notice" isNotice />
          <MainBox alt="고객센터" img="/cs.png" path="/CS" />
          <MainBox alt="제품정보" img="/product.png" path="/product" />
        </MainContentsFlexBox>
        <MainContentsFlexBox>
          <MainBox alt="오시는길" img="/path.png" path="/path" />
          <MainBox alt="인재채용" img="/recruit.png" path="/recruit" />
          <MainBoardBox title="나람 홍보 게시물" path="/ad" isNotice={true} />
        </MainContentsFlexBox>
      </MainContentsBox>
      <MainPathContainer>
        <img src="/mainPath.png" alt="" />
        <MainPathSpan>오시는 길</MainPathSpan>
        <MainKakaoMapContainer>
          <KakaoMap firstContent="(주) 나람사료" />
        </MainKakaoMapContainer>
      </MainPathContainer>
    </>
  );
}
