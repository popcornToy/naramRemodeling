export const navigationItems = [
  {
    id: 'Main',
    path: '/',
    text: '메인 페이지',
    lazy: async () => {
      const Module = await import('@/pages/Main');
      return { Component: Module.default };
    },
  },
  {
    id: 'Login',
    path: '/Login',
    text: '로그인 페이지',
    lazy: async () => {
      const Module = await import('@/pages/Login');
      return { Component: Module.default };
    },
  },
  {
    id: 'Introduction',
    path: '/Introduction',
    text: '회사소개 페이지',
    lazy: async () => {
      const Module = await import('@/pages/Introduction');
      return { Component: Module.default };
    },
  },
  {
    id: 'Board',
    path: '/Board',
    text: '공지사항 페이지',
    lazy: async () => {
      const Module = await import('@/pages/Board');
      return { Component: Module.default };
    },
  },
];
