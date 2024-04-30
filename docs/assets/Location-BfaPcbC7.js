import{u as i,j as e}from"./index-BQNV57zS.js";import{P as h}from"./PageLayout-CtQmfkAY.js";import{K as u}from"./KakaoMap-DRH46z8c.js";import"./react-Cu9bd8lq.js";import"./reactDom-CkgO_r3j.js";import"./reactRouter-C8XkI_Et.js";import"./PageMainImageWrapper-Bwc1q1mW.js";import"./PageSubTitle-IPrvix8E.js";const N="/ContactUs_Image.svg",y=i.div`
  display: flex;
  flex-direction: ${s=>s.direction?s.direction:"flex"};
  font-size: ${s=>parseInt(s.fontSize||"16")/16}rem;
  align-items: center;
  text-align: start;
  gap: 1rem;
  white-space: nowrap;

  & .content {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
  }
`,S=i.div`
  padding: 3.12rem 1.25rem;

  & .desktop {
    display: flex;
    flex-direction: 'flex';

    gap: 120px;
  }

  & .mobile {
    display: flex;
    flex-direction: column;
    gap: 1.31rem;
  }

  & .Wrapper {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  & .divider {
    border-left: 1px solid #d1d1d1;
    height: 100%;
  }
`;function t({first_content:s,second_content:g,image_src:f,image_alt:_,fontSize:j,direction:v}){return e.jsxs(y,{fontSize:j,direction:v,children:[e.jsx("img",{src:f,alt:_}),e.jsxs("div",{className:"content",children:[e.jsx("p",{className:"first_content",children:s}),e.jsx("p",{className:"second_content",children:g})]})]})}const n="/address_icon.svg",r="/phonNumber_icon.svg",a="/fex_icon.svg",c="/email_icon.svg",o="충북 음성군 대소면 소석로 154",d="(소석리 51-2)",l="043-881-5401",m="043-883-4600",x="evcompany@evcompany.co.kr",p="desktop",E="mobile";function A({type:s}){return e.jsx(S,{children:s===p?e.jsxs("div",{className:p,children:[e.jsx(t,{first_content:o,second_content:d,image_src:n,image_alt:"주소 아이콘"}),e.jsxs("div",{className:"Wrapper",children:[e.jsx("div",{className:"divider"}),e.jsx(t,{first_content:l,image_src:r,image_alt:"핸드폰번호 아이콘"})]}),e.jsxs("div",{className:"Wrapper",children:[e.jsx("div",{className:"divider"}),e.jsx(t,{first_content:m,image_src:a,image_alt:"팩스번호 아이콘"})]}),e.jsxs("div",{className:"Wrapper",children:[e.jsx("div",{className:"divider"}),e.jsx(t,{first_content:x,image_src:c,image_alt:"이메일 아이콘"})]})]}):e.jsxs("div",{className:E,children:[e.jsx(t,{first_content:o,second_content:d,image_src:n,image_alt:"주소 아이콘"}),e.jsx(t,{first_content:l,image_src:r,image_alt:"핸드폰번호 아이콘"}),e.jsx(t,{first_content:m,image_src:a,image_alt:"팩스번호 아이콘"}),e.jsx(t,{first_content:x,image_src:c,image_alt:"이메일 아이콘"})]})})}const T=i.div`
  padding: 2.15rem 0;
`;function C(){return e.jsxs(T,{children:[e.jsx(u,{firstContent:"(주) 나람사료"}),e.jsx(A,{type:"desktop"})]})}function B(){return e.jsx(e.Fragment,{children:e.jsx(h,{alt:"찾아오시는 길 페이지",mainImage:N,firstTitle:"CONTACT",firstSubTitle:"US",secondTitle:"찾아오시는 길",thirdTitle:"주식회사 나람에 찾아오시는 길입니다 ",children:e.jsx(C,{})})})}export{B as default};
