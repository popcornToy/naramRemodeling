import Login from '@/../public/mobileLogin.svg?react';
import { MobileMenuSignInContainer } from '@/styles/components/MobileMenu/MobileMenu';

export default function MobileMenuSignIn({ isLogin }: { isLogin: boolean }) {
  return (
    <MobileMenuSignInContainer isLogin={isLogin} to="/Login">
      <span style={{ color: '#333333', fontSize: '1rem', fontWeight: '600' }}>{isLogin ? '로그아웃' : '로그인'}</span>
      <Login />
    </MobileMenuSignInContainer>
  );
}
