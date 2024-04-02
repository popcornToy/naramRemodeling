import { RouteObject, createBrowserRouter } from 'react-router-dom';
import { navigationItems } from './navigation';
import RootLayout from '@/components/layouts/RootLayout';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <RootLayout />,
    children: navigationItems,
    errorElement: '에러입니다', //error 페이지 나중에 추가
  },
];

export const router = createBrowserRouter(routes);
