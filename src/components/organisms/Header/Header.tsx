import LogoLink from '@/components/atoms/LogoLink/LogoLink';
import NaviBar from '@/components/moleclues/naviButton/NaviBar';
import { HeaderContainer, HeaderFlexContainer } from '@/styles/components/Header/Header';
import DropdownMenuNav from '../Dropdown/DropdownMenuNav';
import useBackground from './useBackground';
import { useAtom } from 'jotai';
import { isClicked } from '@/store/store';
import { useEffect } from 'react';

type HeaderProps = {
  isMain: boolean;
  isLogin: boolean;
};

export default function Header({ isLogin, isMain }: HeaderProps) {
  const [, setIsClick] = useAtom(isClicked);
  const { changeColor, isClick } = useBackground(isMain);

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (!e.target.closest('.click-container')) {
        setIsClick(false);
      }
    };

    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [setIsClick]);

  return (
    <>
      <HeaderContainer backgroundColor={changeColor} className="click-container">
        <HeaderFlexContainer>
          <LogoLink />
          <NaviBar isLogin={isLogin} isMain={isMain} />
        </HeaderFlexContainer>
        <DropdownMenuNav isClicked={isClick} />
      </HeaderContainer>
    </>
  );
}
