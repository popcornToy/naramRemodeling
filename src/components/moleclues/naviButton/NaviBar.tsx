import NaviButton from '@/components/atoms/naviButton/NaviButton';
import { GNBContainer, GNBLi } from '@/styles/components/naviButton/naviButton';

type NaviBarProps = {
  isLogin: boolean;
  isMain: boolean;
  isScrolled: boolean;
};

export default function NaviBar({ isLogin, isMain, isScrolled }: NaviBarProps) {
  return (
    <GNBContainer>
      <li>
        <NaviButton text="회사소개" route="/Introduction" isMain={isMain} isScrolled={isScrolled} />
      </li>
      <li>
        <NaviButton text="정보센터" route="/InformationCenter" isMain={isMain} isScrolled={isScrolled} />
      </li>
      <li>
        <NaviButton text="제품정보" route="/ProductInformation" isMain={isMain} isScrolled={isScrolled} />
      </li>
      <li>
        <NaviButton text="인재채용" route="/Recruitment" isMain={isMain} isScrolled={isScrolled} />
      </li>
      <li>
        <NaviButton text="고객센터" route="/CustomerService" isMain={isMain} isScrolled={isScrolled} />
      </li>
      {isLogin ? (
        <GNBLi>
          <NaviButton text="로그아웃" route="/Login" isMain={isMain} isLogoutButton isScrolled={isScrolled} />
          <NaviButton text="/ 마이페이지" route="/MyPage" isMain={isMain} isScrolled={isScrolled} />
        </GNBLi>
      ) : (
        <li>
          <NaviButton text="로그인" route="/Login" isMain={isMain} isLoginButton isScrolled={isScrolled} />
        </li>
      )}
    </GNBContainer>
  );
}
