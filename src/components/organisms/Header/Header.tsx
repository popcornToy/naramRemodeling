import LogoLink from '@/components/atoms/LogoLink/LogoLink';
import NaviBar from '@/components/moleclues/naviButton/NaviBar';
import { HeaderContainer, HeaderFlexContainer } from '@/styles/components/Header/Header';
import DropdownMenuNav from '../Dropdown/DropdownMenuNav';
import useBackground from './useBackground';

type HeaderProps = {
  isMain: boolean;
  isLogin: boolean;
};

export default function Header({ isLogin, isMain }: HeaderProps) {
  const { changeColor, isClick } = useBackground(isMain);

  return (
    <>
      <HeaderContainer backgroundColor={changeColor}>
        <HeaderFlexContainer>
          <LogoLink />
          <NaviBar isLogin={isLogin} isMain={isMain} />
        </HeaderFlexContainer>
        <DropdownMenuNav isClicked={isClick} />
      </HeaderContainer>
    </>
  );
}
