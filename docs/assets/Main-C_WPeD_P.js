import{u as i,j as e,H as M}from"./index-BQNV57zS.js";import{L as w}from"./reactRouter-C8XkI_Et.js";import{a as B}from"./axios-Cm0UX6qg.js";import{r as l}from"./react-Cu9bd8lq.js";import{K as y}from"./KakaoMap-DRH46z8c.js";import"./reactDom-CkgO_r3j.js";const z=i.div`
  position: relative;
  & img {
    width: 100%;
    height: 60rem;
    object-fit: cover;
  }

  & > div {
    position: absolute;
    top: 33%;
    left: 9%;
    text-align: center;
    white-space: nowrap;
    text-shadow: 2px 2px 6px #000000;
  }

  & > div :nth-child(1),
  & > div :nth-child(3) {
    color: #fff;
    font-size: 5rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.16px;
    margin-bottom: 0.875rem;
    position: relative;
  }

  & > div .dot::after {
    content: '•';
    position: absolute;
    top: 0;
    left: 40%;
    transform: translate(-50%, -65%);
  }

  & > div :nth-child(2) {
    color: #fff;
    font-size: 3.75rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.12px;
  }

  & > div :nth-child(4),
  & > div :nth-child(5) {
    color: #fff;
    font-size: 2.5rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.08px;
    text-align: left;
  }

  @media (max-width: 768px) {
    background-color: #898989;

    & img {
      mix-blend-mode: multiply;
    }

    & > div {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
      white-space: nowrap;
    }

    & > div :nth-child(1),
    & > div :nth-child(2),
    & > div :nth-child(3) {
      color: #fff;
      font-size: 1.875rem;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      letter-spacing: -0.06px;
      margin-bottom: 0.4375rem;
    }

    & > div .dot::after {
      display: none;
    }

    & > div :nth-child(4),
    & > div :nth-child(5) {
      color: #fff;
      font-size: 1.125rem;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      letter-spacing: -0.036px;
      text-align: center;
    }
  }
`;i.header`
  position: relative;
  z-index: 1;
`;const C=i.main`
  position: relative;
`,m=i.div`
  display: flex;
  justify-content: space-around;
  gap: 20px;

  @media (max-width: 1200px) {
    width: 100%;
    justify-content: space-between;
  }
`,k=i.span.withConfig({shouldForwardProp:t=>!["isBox"].includes(t)})`
  font-size: 1.875rem;
  color: ${t=>t.color};
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.00375rem;
  white-space: nowrap;

  ${t=>t.isBox&&`
    position: absolute;
    bottom: 10%;
    left: 13%;
  `}

  @media (max-width: 500px) {
    font-size: 1.125rem;

    ${t=>t.isBox&&`
    position: absolute;
    bottom: 10%;
    left: 13%;
    font-size: 1.125rem;
  `}
  }
`,L=i.div`
  width: 23.5625rem;
  height: 18.75rem;
  background-color: #7b7b7b;
  border-radius: 1rem;
  & img {
    mix-blend-mode: multiply;
    object-fit: cover;
    border-radius: 1rem;
  }

  @media (max-width: 1200px) {
    width: calc(23.5625rem * 0.9);
    height: calc(18.75rem * 0.9);
  }

  @media (max-width: 768px) {
    width: calc(23.5625rem * 0.5);
    height: calc(18.75rem * 0.5);
  }

  @media (max-width: 500px) {
    width: calc(23.5625rem * 0.4);
    height: calc(18.75rem * 0.4);
  }
`,T=i(w).withConfig({shouldForwardProp:t=>!["isBox"].includes(t)})`
  font-size: 1.25rem;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.00375rem;

  color: ${t=>t.color};
  white-space: nowrap;
  ${t=>t.isBox&&`
  position: absolute; 
  top: 10%; 
  right: 13%;
  
  `}

  @media (max-width: 500px) {
    font-size: 0.75rem;

    ${t=>t.isBox&&`
    position: absolute;
    top: 10%
    right: 13%;
    font-size: 1rem;
  `}
  }
`,P=i(w)`
  color: #666666;
  font-size: 1.5rem;
  font-weight: 400;
  letter-spacing: -0.003rem;
  line-height: normal;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 29.25rem;

  @media (max-width: 768px) {
    font-size: 0.875rem;
  }
`,F=i.p`
  color: #666666;
  font-size: 1.5rem;
  font-weight: 400;
  letter-spacing: -0.003rem;
  line-height: normal;

  @media (max-width: 768px) {
    font-size: 0.875rem;
  }
`,$=i.div`
  display: flex;
  position: relative;
  flex-direction: column;
  background-color: #ededed;
  padding: 2.4375rem 2.9375rem;
  width: 100%;
  gap: 1.875rem;
  border-radius: 1rem;
  min-width: 23.125rem;

  @media (max-width: 768px) {
    padding: 1.25rem;
    min-width: 18.75rem;
  }
`,E=i.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 0.625rem;
`,I=i.div`
  display: flex;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  min-width: 0;
  justify-content: space-between;
`,N=i.div`
  display: flex;
  justify-content: space-between;
`,S=i.div`
  display: flex;
  flex-direction: column;
  gap: 3.5rem;
  background: linear-gradient(180deg, #fff 0%, rgba(255, 255, 255, 0) 80.83%);
  padding: 8rem 3.6875rem;

  @media (max-width: 500px) {
    padding: 4rem 1.5rem;
  }
`,W=i.div`
  display: flex;
  justify-content: space-around;
  gap: 20px;

  @media (max-width: 1200px) {
    flex-direction: column-reverse;
    gap: 3.5rem;
    align-items: center;
  }
`,H=i.div`
  display: flex;
  justify-content: space-around;
  gap: 20px;

  @media (max-width: 1200px) {
    flex-direction: column;
    gap: 3.5rem;
    align-items: center;
  }
`,K=i.div`
  background-color: rgba(9, 9, 9, 0.5);
  height: 60rem;
  position: relative;
  width: 100%;
  & > img {
    mix-blend-mode: multiply;
    width: 100%;
    object-fit: cover;
    height: 60rem;
  }

  @media (max-width: 768px) {
    height: auto;
  }
`,X=i.div`
  width: 80%;
  position: absolute;
  bottom: 6.375rem;
  left: 50%;
  transform: translateX(-50%);

  @media (max-width: 768px) {
    width: 90%;
    top: 15%;
  }
`,q=i.span`
  font-size: 2.5rem;
  color: #fff;
  font-weight: 700;
  line-height: normal;
  transform: translateX(-50%);
  letter-spacing: -0.005rem;
  position: absolute;
  top: 15%;
  left: 50%;

  @media (max-width: 768px) {
    top: 5%;
    left: 15%;
    transform: translateX(0);
  }
`,O=i.div`
  background: rgba(21, 21, 21, 0.9);
  color: #fff;
  padding: 4.3125rem 2.75rem;
  height: 31.25rem;
  position: absolute;
  bottom: 15%;
  left: 15%;
  text-align: left;

  @media (max-width: 768px) {
    position: static;
    display: block;
    height: auto;
  }
`,R=i.span`
  font-size: 2.5rem;
  font-weight: 600;
`,D=i.div`
  width: 100%;
  border-bottom: 2px solid #fff;
  line-height: 0.1rem;
  margin: 2.0625rem 0;
`,h=i.div`
  display: flex;
  gap: 0.875rem;
  align-items: flex-start;
  min-width: 6.875rem;

  > img {
    width: 1.5rem;
    height: 1.5rem;
  }

  @media (max-width: 768px) {
    min-width: 5rem;
  }
`,x=i.div`
  display: flex;
  margin-bottom: 1rem;
  gap: 1rem;
`,a=i.p`
  font-size: 1.5rem;
  font-weight: 600;
  white-space: nowrap;

  @media (max-width: 768px) {
    font-size: 1.25rem;
    white-space: normal;
  }
`,_="/mainBanner.png",A="/mobileMain.png";function p({text:t,route:n}){return e.jsx(e.Fragment,{children:n?e.jsx(P,{to:n,children:t}):e.jsxs(F,{children:[" ",t," "]})})}function u({path:t,color:n,isBox:o}){return e.jsx(T,{to:t,color:n,isBox:o,children:"더보기 +"})}function j({title:t,color:n,isBox:o}){return e.jsx(k,{color:n,isBox:o,children:t})}function f({title:t,path:n,isNotice:o}){const[v,b]=l.useState([]);return l.useEffect(()=>{(async()=>{let d;o?d="https://my-json-server.typicode.com/asdfqaz74/fake-api/posts?_limit=4":d="https://my-json-server.typicode.com/asdfqaz74/fake-api/posts";try{const c=await B.get(d);b(c.data)}catch(c){console.error(c)}})()},[o]),e.jsxs($,{children:[e.jsxs(N,{children:[e.jsx(j,{title:t,color:"#004B87",isBox:!1}),e.jsx(u,{color:"#333333",path:n,isBox:!1})]}),e.jsx(E,{children:v.map(r=>e.jsxs(I,{children:[e.jsx(p,{text:r.title,route:"/"}),e.jsx(p,{text:r.date})]},r.id))})]})}function G({img:t,alt:n}){return e.jsx(L,{children:e.jsx("img",{src:t,alt:n})})}function s({img:t,alt:n,path:o}){return e.jsxs(C,{children:[e.jsx(G,{img:t,alt:n}),e.jsx(j,{title:n,color:"#ffffff",isBox:!0}),e.jsx(u,{path:o,color:"#ffffff",isBox:!0})]})}function J(){const[t,n]=l.useState(window.innerWidth);return l.useEffect(()=>{const o=()=>n(window.innerWidth);return window.addEventListener("resize",o),()=>window.removeEventListener("resize",o)},[]),t}const g="/mapPin.svg";function Q(){return e.jsxs(O,{children:[e.jsx(R,{children:"주식회사 나람"}),e.jsx(D,{}),e.jsxs(x,{children:[e.jsxs(h,{children:[e.jsx("img",{src:g,alt:""}),e.jsx(a,{children:"주소"})]}),e.jsxs(a,{children:["충북 음성군 대소면 소석로 154",e.jsx("br",{})," (소석리 51-2)"]})]}),e.jsxs(x,{children:[e.jsxs(h,{children:[e.jsx("img",{src:g,alt:""}),e.jsx(a,{children:"연락처"})]}),e.jsx(a,{children:"043-881-5401"})]})]})}function ie(){const n=J()>=768?`${_}`:`${A}`;return e.jsx(e.Fragment,{children:e.jsxs(M,{isLogin:!0,isMain:!0,children:[e.jsxs(z,{children:[e.jsx("img",{src:n,alt:"메인 이미지"}),e.jsxs("div",{children:[e.jsx("span",{className:"dot",children:"나"}),e.jsx("span",{children:"와 다른 사"}),e.jsx("span",{className:"dot",children:"람"}),e.jsx("p",{children:"내가 소중하듯이"}),e.jsx("p",{children:"다른 사람도 소중합니다"})]})]}),e.jsxs(S,{children:[e.jsxs(W,{children:[e.jsx(f,{title:"공지사항",path:"/Information/notice",isNotice:!0}),e.jsxs(m,{children:[e.jsx(s,{alt:"고객센터",img:"/cs.png",path:"/CS"}),e.jsx(s,{alt:"제품정보",img:"/product.png",path:"/product"})]})]}),e.jsxs(H,{children:[e.jsxs(m,{children:[e.jsx(s,{alt:"오시는길",img:"/path.png",path:"/Introduction/Location"}),e.jsx(s,{alt:"인재채용",img:"/recruit.png",path:"/recruit"})]}),e.jsx(f,{title:"나람 홍보 게시물",path:"/ad",isNotice:!0})]})]}),e.jsxs(K,{children:[e.jsx("img",{src:"/mainPath.png",alt:""}),e.jsx(q,{children:"오시는 길"}),e.jsx(X,{children:e.jsx(y,{firstContent:"(주) 나람사료"})}),e.jsx(Q,{})]})]})})}export{ie as default};
