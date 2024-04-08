import { Link } from 'react-router-dom';
import { GNBTitle, NaviImage } from '@/styles/components/naviButton/naviButton';
import user from '/user.svg';
import logout from '/logout.svg';

type NaviButtonProps = {
  route: string;
  text: string;
  color: 'black' | 'white';
  isLoginButton?: boolean;
  isLogoutButton?: boolean;
};

export default function NaviButton({ route, text, color, isLoginButton, isLogoutButton }: NaviButtonProps) {
  return (
    <GNBTitle color={color}>
      <Link to={route}>
        <NaviImage>
          {isLoginButton && <img src={user} alt="로그인" />}
          {isLogoutButton && <img src={logout} alt="로그아웃" />}
          {text}
        </NaviImage>
      </Link>
    </GNBTitle>
  );
}
