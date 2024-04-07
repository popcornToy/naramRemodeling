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
      const Module = await import('@/pages/Login/Login');
      return { Component: Module.default };
    },
  },
  {
    id: 'SearchId',
    path: '/SearchId',
    text: '아이디찾기 페이지',
    lazy: async () => {
      const Module = await import('@/pages/SearchId/SearchId');
      return { Component: Module.default };
    },
  },
  {
    id: 'SearchPassword',
    path: '/SearchPassword',
    text: '비밀번호찾기 페이지',
    lazy: async () => {
      const Module = await import('@/pages/SearchPassword/SearchPassword');
      return { Component: Module.default };
    },
  },
  {
    id: 'Join',
    path: '/Join',
    text: '회원가입 페이지',
    lazy: async () => {
      const Module = await import('@/pages/Join/Join');
      return { Component: Module.default };
    },
  },
  {
    id: 'Introduction',
    path: '/Introduction',
    text: '회사소개 페이지',
    lazy: async () => {
      const Module = await import('@/pages/Introduction/CompanyIntroduction');
      return { Component: Module.default };
    },
    children: [
      {
        index: true,
        text: '회사소개 CEO소개, 연혁 등등',
        lazy: async () => {
          const Module = await import('@/pages/Introduction/pages/Introduction');
          return { Component: Module.default };
        },
      },
      {
        text: '찾아오시는 길',
        path: 'Location',
        lazy: async () => {
          const Module = await import('@/pages/Introduction/pages/Location');
          return { Component: Module.default };
        },
      },
    ],
  },

  {
    id: 'InformationCenter',
    path: '/InformationCenter',
    text: '정보센터 페이지',
    lazy: async () => {
      const Module = await import('@/pages/InformationCenter/InformationCenter');
      return { Component: Module.default };
    },
  },
  {
    id: 'ProductInformation',
    path: '/ProductInformation',
    text: '제품정보 페이지',
    lazy: async () => {
      const Module = await import('@/pages/ProductInformation/ProductInformation');
      return { Component: Module.default };
    },
  },
  {
    id: 'Recruitment',
    path: '/Recruitment',
    text: '인재채용 페이지',
    lazy: async () => {
      const Module = await import('@/pages/Recruitment/Recruitment');
      return { Component: Module.default };
    },
  },
  {
    id: 'Board',
    path: '/Board',
    text: '고객센터 페이지',
    lazy: async () => {
      const Module = await import('@/pages/Board');
      return { Component: Module.default };
    },
  },
];
