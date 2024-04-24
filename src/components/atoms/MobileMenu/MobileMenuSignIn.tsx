import Login from '@/../public/mobileLogin.svg?react';
import useClick from '@/components/organisms/MobileMenu/useClick';
import { MobileMenuSignInContainer } from '@/styles/components/MobileMenu/MobileMenu';

export default function MobileMenuSignIn({ isLogin }: { isLogin: boolean }) {
  const { handleToggle } = useClick();
  return (
    <MobileMenuSignInContainer isLogin={isLogin} to="/Login" onClick={handleToggle}>
      <span style={{ color: '#333333', fontSize: '1rem', fontWeight: '600' }}>{isLogin ? '로그아웃' : '로그인'}</span>
      <Login />
    </MobileMenuSignInContainer>
  );
}
