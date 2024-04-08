import LogoLink from '@/components/atoms/LogoLink/LogoLink';
import NaviBar from '@/components/moleclues/naviButton/NaviBar';
import { HeaderContainer } from '@/styles/components/Header/Header';

type HeaderProps = {
  isLogin: boolean;
  color: 'black' | 'white';
};

export default function Header({ isLogin, color }: HeaderProps) {
  return (
    <HeaderContainer>
      <LogoLink />
      <NaviBar isLogin={isLogin} color={color} />
    </HeaderContainer>
  );
}
