import LogoLink from '@/components/atoms/LogoLink/LogoLink';
import NaviBar from '@/components/moleclues/naviButton/NaviBar';
import { HeaderContainer, HeaderFlexContainer } from '@/styles/components/Header/Header';
import { useEffect, useState } from 'react';
import DropdownMenuNav from '../Dropdown/DropdownMenuNav';

type HeaderProps = {
  isMain: boolean;
  isLogin: boolean;
};

export default function Header({ isLogin, isMain }: HeaderProps) {
  const [isScroll, setIsScroll] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <HeaderContainer isScrolled={isScroll} isMain={isMain}>
        <HeaderFlexContainer>
          <LogoLink />
          <NaviBar isLogin={isLogin} isMain={isMain} isScrolled={isScroll} />
        </HeaderFlexContainer>
        {/* <DropdownMenuNav isClicked={handleClick} /> */}
      </HeaderContainer>
    </>
  );
}
