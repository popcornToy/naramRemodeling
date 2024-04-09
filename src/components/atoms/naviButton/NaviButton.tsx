import { Link } from 'react-router-dom';
import { GNBTitle, ImageContainer, NaviImage } from '@/styles/components/naviButton/naviButton';
import Login from '@/../public/user.svg?react';
import Logout from '@/../public/logout.svg?react';

type NaviButtonProps = {
  route: string;
  text: string;
  isMain: boolean;
  isLoginButton?: boolean;
  isLogoutButton?: boolean;
  isScrolled: boolean;
};

export default function NaviButton({
  route,
  text,
  isMain,
  isLoginButton,
  isLogoutButton,
  isScrolled,
}: NaviButtonProps) {
  return (
    <GNBTitle isMain={isMain} isScrolled={isScrolled}>
      <Link to={route}>
        <NaviImage>
          {isLoginButton && (
            <ImageContainer isScrolled={isScrolled} isMain={isMain}>
              <Login />
            </ImageContainer>
          )}
          {isLogoutButton && (
            <ImageContainer isScrolled={isScrolled} isMain={isMain}>
              <Logout />
            </ImageContainer>
          )}
          {text}
        </NaviImage>
      </Link>
    </GNBTitle>
  );
}
