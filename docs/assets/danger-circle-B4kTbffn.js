import{u as r,j as i}from"./index-BQNV57zS.js";import{L as l}from"./reactRouter-C8XkI_Et.js";const s=r.div`
  font-weight: 700;
  line-height: 30px;
  letter-spacing: -0.12px;
  width: 100%;
  border-radius: 30px;
  font-size: 1.5rem;

  & .login {
    border-radius: 1.87rem;
    background-color: #6091ff;
    color: white;
    width: 100%;
    height: 5.5rem;
  }

  & .signUp {
    border-radius: 1.87rem;
    background-color: white;
    color: #5b86e5;
    border: 2px solid #5b86e5;
    width: 100%;
    height: 5.5rem;
  }

  @media (max-width: 768px) {
    & .login {
      height: 4.5rem;
    }

    & .signUp {
      height: 4.5rem;
    }
  }
`,g=r.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.6875rem;

  & .find {
    color: #666;
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 1.875rem; /* 125% */
    letter-spacing: -0.0075rem;
    padding: 1rem 10rem;
    white-space: nowrap;
    border-radius: 30px;
    border: 1px solid #d1d1d1;
    background: var(--white, #fff);
  }
`;function c({onClick:o,children:n,type:e,ariaLabel:a,styledType:t,...d}){return i.jsxs(s,{children:[t==="login"&&i.jsx("button",{className:"login",onClick:o,type:e,"aria-label":a,...d,children:n})," ",t==="signUp"&&i.jsx("button",{className:"signUp",onClick:o,type:e,"aria-label":a,...d,children:n}),t==="find"&&i.jsxs(g,{children:[i.jsx(l,{to:"/login/FindId",className:"find",type:e,"aria-label":"아이디 찾기",children:"아이디 찾기"}),i.jsx(l,{to:"/login/FindPassword",className:"find",type:e,"aria-label":"비밀번호 찾기",children:"비밀번호 찾기"})]})]})}const x=r.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 747px;
  /* gap: 5.43rem; */
  margin: 7.75rem auto;

  & .pGroup {
    color: #000;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 500;
    line-height: 3.125rem; /* 208.333% */
    letter-spacing: -0.0075rem;
    margin-top: 2.8125rem;
  }

  & .titleForm {
    text-align: center;
    margin-bottom: 87px;

    & p {
      margin-top: 10px;
      color: #999999;
    }
  }
  & .logo {
    height: 0%;
    display: block;
    margin: 0 auto; /* 이미지를 가운데로 정렬합니다. */
  }

  & .Find {
    margin-left: auto;
    display: flex;
    gap: 15px;
    white-space: nowrap;
    align-items: center;

    & .link {
      display: flex;
      align-items: center;
    }
  }

  & .ButtonGap {
    display: flex;
    flex-direction: column;
    gap: 3.37rem;
    margin: 20px 0;
  }

  & .divider {
    width: 100%;
    border: 1px solid black;
    opacity: 0.5;
  }

  & .dangerText {
    display: flex;
    gap: 18px;
    margin-right: auto;
    & p span {
      color: red;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 0 1.25rem;

    & .Find {
      margin-right: auto;
      gap: 3rem;
    }
  }
`,h=r.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-bottom: 1.56rem;
  text-align: left;

  & input {
    color: black;
    border-radius: 4px;
    border: 1px solid var(--gray-300, #d1d1d1);
    width: 100%;
    background: var(--white, #fff);
    padding: 20px;
  }

  & .error {
    color: red;
    gap: 0rem;
  }

  & .input-container {
    position: relative;
  }

  & .HideIcon {
    position: absolute;
    right: 10px;
    bottom: 15px;
    cursor: pointer;
  }
`,f="/danger-circle.svg";export{c as B,f as D,h as S,x as a};
