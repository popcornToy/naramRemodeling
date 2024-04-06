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
      const Module = await import('@/pages/Introduction/Introduction');
      return { Component: Module.default };
    },
  },
  {
    id: 'Notice',
    path: '/Notice',
    text: '공지사항 페이지',
    lazy: async () => {
      const Module = await import('@/pages/Notice/Notice');
      return { Component: Module.default };
    },
  },
  {
    id: 'CustomerService',
    path: '/CustomerService',
    text: '고객센터 페이지',
    lazy: async () => {
      const Module = await import('@/pages/CustomerService/CustomerService');
      return { Component: Module.default };
    },
  },
  {
    id: 'QnA',
    path: '/QnA',
    text: '질의응답 페이지',
    lazy: async () => {
      const Module = await import('@/pages/QnA/QnA');
      return { Component: Module.default };
    },
  },
];
