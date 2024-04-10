import { Link } from 'react-router-dom';
import { GNBTitle, ImageContainer, NaviImage } from '@/styles/components/naviButton/naviButton';
import Login from '@/../public/user.svg?react';
import Logout from '@/../public/logout.svg?react';

type NaviButtonProps = {
  route?: string;
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
  const renderButtonContent = () => {
    return (
      <ImageContainer isScrolled={isScrolled} isMain={isMain}>
        {isLoginButton && <Login />}
        {isLogoutButton && <Logout />}
      </ImageContainer>
    );
  };

  return (
    <GNBTitle isMain={isMain} isScrolled={isScrolled}>
      {route ? (
        <NaviImage>
          <Link to={route}>
            {renderButtonContent()}
            {text}
          </Link>
        </NaviImage>
      ) : (
        <button>{text}</button>
      )}
    </GNBTitle>
  );
}
