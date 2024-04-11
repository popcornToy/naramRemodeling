import { GNBTitle, ImageContainer, NaviImageLink } from '@/styles/components/naviButton/naviButton';
import Login from '@/../public/user.svg?react';
import Logout from '@/../public/logout.svg?react';
import { useAtom } from 'jotai';
import { animate, isClicked } from '@/store/store';
import useBackground from '@/components/organisms/Header/useBackground';

type NaviButtonProps = {
  route?: string;
  text: string;
  isMain: boolean;
  isLoginButton?: boolean;
  isLogoutButton?: boolean;
};

export default function NaviButton({ route, text, isMain, isLoginButton, isLogoutButton }: NaviButtonProps) {
  const [isClick, setIsClick] = useAtom(isClicked);
  const [, setIsAnimated] = useAtom(animate);
  const { textColor, iconColor } = useBackground(isMain);

  const renderButtonContent = () => {
    return (
      <ImageContainer color={iconColor}>
        {isLoginButton && <Login />}
        {isLogoutButton && <Logout />}
      </ImageContainer>
    );
  };

  const handleClick = () => {
    setIsClick(!isClick);
    setIsAnimated(true);
  };

  return (
    <GNBTitle color={textColor}>
      {route ? (
        <NaviImageLink to={route}>
          {renderButtonContent()}
          {text}
        </NaviImageLink>
      ) : (
        <button onClick={handleClick}>{text}</button>
      )}
    </GNBTitle>
  );
}
