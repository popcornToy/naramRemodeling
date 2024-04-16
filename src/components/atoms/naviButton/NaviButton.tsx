import { GNBTitle, ImageContainer, NaviImageLink } from '@/styles/components/naviButton/naviButton';
import Login from '@/../public/user.svg?react';
import Logout from '@/../public/logout.svg?react';
import { useAtom } from 'jotai';
import { animate, isClicked } from '@/store/store';
import useBackground from '@/components/organisms/Header/useBackground';
import { useEffect, useRef } from 'react';

type NaviButtonProps = {
  route?: string;
  text: string;
  isMain: boolean;
  isLoginButton?: boolean;
  isLogoutButton?: boolean;
};

export default function NaviButton({ route, text, isMain, isLoginButton, isLogoutButton }: NaviButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [, setIsClick] = useAtom(isClicked);
  const [, setIsAnimated] = useAtom(animate);
  const { textColor, iconColor } = useBackground(isMain);

  useEffect(() => {
    const handleInsideClick = () => {
      setIsClick(true);
      setIsAnimated(true);
    };

    const buttonEl = buttonRef.current;
    if (buttonEl) {
      buttonEl.addEventListener('mouseenter', handleInsideClick);
    }

    return () => {
      if (buttonEl) {
        buttonEl.removeEventListener('mouseenter', handleInsideClick);
      }
    };
  });

  const renderButtonContent = () => {
    return (
      <ImageContainer color={iconColor}>
        {isLoginButton && <Login />}
        {isLogoutButton && <Logout />}
      </ImageContainer>
    );
  };

  return (
    <GNBTitle color={textColor}>
      {route ? (
        <NaviImageLink to={route}>
          {renderButtonContent()}
          {text}
        </NaviImageLink>
      ) : (
        <button ref={buttonRef}>{text}</button>
      )}
    </GNBTitle>
  );
}
