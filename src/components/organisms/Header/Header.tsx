import LogoLink from '@/components/atoms/LogoLink/LogoLink';
import NaviBar from '@/components/moleclues/naviButton/NaviBar';
import { HeaderContainer, HeaderFlexContainer } from '@/styles/components/Header/Header';
import DropdownMenuNav from '../Dropdown/DropdownMenuNav';
import useBackground from '../../../hook/useBackground';
import { useAtom } from 'jotai';
import { isClicked } from '@/store/store';
import { useEffect, useRef } from 'react';

type HeaderProps = {
  isMain: boolean;
  isLogin: boolean;
};

export default function Header({ isLogin, isMain }: HeaderProps) {
  const headerRef = useRef<HTMLElement>(null);
  const [, setIsClick] = useAtom(isClicked);
  const { changeColor, isClick } = useBackground(isMain);

  useEffect(() => {
    const handleOutsideClick = () => {
      setIsClick(false);
    };

    const headerEl = headerRef.current;
    if (headerEl) {
      headerEl.addEventListener('mouseleave', handleOutsideClick);
    }

    return () => {
      if (headerEl) {
        headerEl.removeEventListener('mouseleave', handleOutsideClick);
      }
    };
  }, [setIsClick]);

  return (
    <>
      <HeaderContainer backgroundColor={changeColor} ref={headerRef}>
        <HeaderFlexContainer>
          <LogoLink />
          <NaviBar isLogin={isLogin} isMain={isMain} />
        </HeaderFlexContainer>
        <DropdownMenuNav isClicked={isClick} />
      </HeaderContainer>
    </>
  );
}
