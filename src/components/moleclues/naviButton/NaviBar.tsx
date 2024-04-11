import NaviButton from '@/components/atoms/naviButton/NaviButton';
import { GNBContainer, GNBLi } from '@/styles/components/naviButton/naviButton';

type NaviBarProps = {
  isLogin: boolean;
  isMain: boolean;
};

export default function NaviBar({ isLogin, isMain }: NaviBarProps) {
  return (
    <GNBContainer>
      <li>
        <NaviButton text="회사소개" isMain={isMain} />
      </li>
      <li>
        <NaviButton text="정보센터" isMain={isMain} />
      </li>
      <li>
        <NaviButton text="제품정보" isMain={isMain} />
      </li>
      <li>
        <NaviButton text="인재채용" isMain={isMain} />
      </li>
      <li>
        <NaviButton text="고객센터" isMain={isMain} />
      </li>
      {isLogin ? (
        <GNBLi>
          <NaviButton text="로그아웃" route="/Login" isMain={isMain} isLogoutButton />
          <NaviButton text="/ 마이페이지" route="/MyPage" isMain={isMain} />
        </GNBLi>
      ) : (
        <li>
          <NaviButton text="로그인" route="/Login" isMain={isMain} isLoginButton />
        </li>
      )}
    </GNBContainer>
  );
}
