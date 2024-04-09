import LogoLink from '@/components/atoms/LogoLink/LogoLink';
import NaviBar from '@/components/moleclues/naviButton/NaviBar';
import { HeaderContainer } from '@/styles/components/Header/Header';
import { useEffect, useState } from 'react';

type HeaderProps = {
  isMain: boolean;
  isLogin: boolean;
};

export default function Header({ isLogin, isMain }: HeaderProps) {
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
  }, []);

  return (
    <HeaderContainer isScrolled={isScroll} isMain={isMain}>
      <LogoLink />
      <NaviBar isLogin={isLogin} isMain={isMain} isScrolled={isScroll} />
    </HeaderContainer>
  );
}
