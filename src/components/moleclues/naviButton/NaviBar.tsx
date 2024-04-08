import NaviButton from '@/components/atoms/naviButton/NaviButton';
import { GNBContainer, GNBLi } from '@/styles/components/naviButton/naviButton';

type NaviBarProps = {
  color: 'black' | 'white';
  isLogin: boolean;
};

export default function NaviBar({ color, isLogin }: NaviBarProps) {
  return (
    <GNBContainer>
      <li>
        <NaviButton text="회사소개" route="/Introduction" color={color} />
      </li>
      <li>
        <NaviButton text="정보센터" route="/InformationCenter" color={color} />
      </li>
      <li>
        <NaviButton text="제품정보" route="/ProductInformation" color={color} />
      </li>
      <li>
        <NaviButton text="인재채용" route="/Recruitment" color={color} />
      </li>
      <li>
        <NaviButton text="고객센터" route="/CustomerService" color={color} />
      </li>
      {isLogin ? (
        <GNBLi>
          <NaviButton text="로그아웃" route="/Login" color={color} isLogoutButton />
          <NaviButton text="/ 마이페이지" route="/MyPage" color={color} />
        </GNBLi>
      ) : (
        <li>
          <NaviButton text="로그인" route="/Login" color={color} isLoginButton />
        </li>
      )}
    </GNBContainer>
  );
}
