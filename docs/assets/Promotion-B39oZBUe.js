import{u as i,j as t}from"./index-BQNV57zS.js";import{P as p}from"./PageLayout-CtQmfkAY.js";import{S as x,B as u,m as P}from"./BasicButton-CiAr7K53.js";import{a as h}from"./PageSubTitle-IPrvix8E.js";import{P as f,S as j}from"./Pagination-B2_YwykI.js";import{r as b}from"./react-Cu9bd8lq.js";import{L as v}from"./reactRouter-C8XkI_Et.js";import"./reactDom-CkgO_r3j.js";import"./PageMainImageWrapper-Bwc1q1mW.js";const y=i.li`
  width: 420px;
  height: 350px;
  border-bottom: 1px solid #d1d1d1;
  margin-bottom: 60px;
`,S=i.div`
  font-family: 'Noto Sans';
  color: #999;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: start;
`,L=i.p`
  font-family: 'Noto Sans';
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-align: start;
  padding-top: 5px;
`,w=i.dd`
  width: 420px;
  padding-top: 10px;
`,C=i.dt`
  width: 420px;
  height: 235px;
`,T=i.ul`
  width: 1280px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 10px;
  border-bottom: 2px solid black;
`;function k({data:o}){return t.jsx(y,{children:t.jsx(v,{to:"/",children:t.jsxs("dl",{children:[t.jsx(C,{children:t.jsx("img",{src:o.img,alt:"홍보 이미지"})}),t.jsxs(w,{children:[t.jsx(S,{children:o.date}),t.jsx(L,{children:o.title})]})]})})})}const r=[{id:1,img:"../../../../public/Promotion.svg",date:"2023.12.11",title:"나람사료 귀하의 성공 파트너 입니다!"},{id:2,img:"../../../../public/Promotion.svg",date:"2023.12.12",title:"또 다른 프로모션입니다!"},{id:3,img:"../../../../public/Promotion.svg",date:"2023.12.13",title:"또 다른 프로모션입니다람쥐!"},{id:4,img:"../../../../public/Promotion.svg",date:"2023.12.14",title:"또 다른 프로모션입니다슬기!!"},{id:5,img:"../../../../public/Promotion.svg",date:"2023.12.15",title:"또 다른 프로모션일까요 아닐까요?"},{id:6,img:"../../../../public/Promotion.svg",date:"2023.12.16",title:"또 다른 프로모션은 언제 나오는걸까요???"},{id:7,img:"../../../../public/Promotion.svg",date:"2023.12.16",title:"또 다른 프로모션은 언제 나오는걸까요???"},{id:8,img:"../../../../public/Promotion.svg",date:"2023.12.16",title:"또 다른 프로모션은 언제 나오는걸까요???"},{id:9,img:"../../../../public/Promotion.svg",date:"2023.12.16",title:"또 다른 프로모션은 언제 나오는걸까요???"},{id:10,img:"../../../../public/Promotion.svg",date:"2023.12.16",title:"또 다른 프로모션은 언제 나오는걸까요???"},{id:11,img:"../../../../public/Promotion.svg",date:"2023.12.16",title:"또 다른 프로모션은 언제 나오는걸까요???"},{id:12,img:"../../../../public/Promotion.svg",date:"2023.12.16",title:"또 다른 프로모션은 언제 나오는걸까요???"},{id:13,img:"../../../../public/Promotion.svg",date:"2023.12.16",title:"또 다른 프로모션은 언제 나오는걸까요???"},{id:14,img:"../../../../public/Promotion.svg",date:"2023.12.16",title:"또 다른 프로모션은 언제 나오는걸까요???"}];function B({to:o}){const[l,m]=b.useState(0),e=6,a=Math.ceil(r.length/e),d=({selected:n})=>{m(n)},c=()=>{const n=l*e,g=Math.min(n+e,r.length);return r.slice(n,g).map(s=>t.jsx(k,{data:s},s.id))};return t.jsxs(t.Fragment,{children:[t.jsx(T,{children:c()}),t.jsxs(x,{children:[t.jsx(f,{handlePageClick:d,pageCount:a}),t.jsx(u,{text:"글쓰기",to:o})]})]})}function I(){return t.jsxs(h,{children:[t.jsx(j,{}),t.jsx(B,{to:"/PromotionWrite"})]})}function A(){return t.jsx("div",{children:t.jsx(p,{alt:"홍보게시판 페이지",mainImage:P,firstTitle:"Promotion",secondTitle:"나람 홍보 게시물",thirdTitle:"고객을 위해 항상 노력하는 나람이 되겠습니다.",children:t.jsx(I,{})})})}export{A as default};
