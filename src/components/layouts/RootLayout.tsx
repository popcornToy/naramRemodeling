import { Outlet } from 'react-router-dom';
import Header from '../organisms/Header/Header';
import Footer from '../atoms/Footer/Footer';

function RootLayout() {
  return (
    <div>
      <Header isLogin={true} isMain={false}>
        <Outlet />
      </Header>
      <Footer />
    </div>
  );
}

export default RootLayout;
