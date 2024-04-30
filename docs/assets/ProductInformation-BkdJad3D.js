import{u as o,j as r}from"./index-BQNV57zS.js";import{L as i,b as d}from"./reactRouter-C8XkI_Et.js";import"./react-Cu9bd8lq.js";import"./reactDom-CkgO_r3j.js";const u=o(i)`
  font-size: 1.3333333333333333rem;
`,l=o.ul`
  display: flex;
  flex-direction: column;
`,e=o.li`
  ${({productType:t})=>{switch(t){case"pork":return`
      color: #333;
      font-weight: 700;
      line-height: normal;
      background: #EDF3FB;
    `;case"chicken":return`
      color: #333;
      font-weight: 700;
      line-height: normal;
      background: #EDF3FB;
    `;case"duck":return`
      color: #333;
      font-weight: 700;
      line-height: normal;
      background: #EDF3FB;
    `;default:return`
      color: #666;
      font-weight: 400;
      line-height: normal;
      background: transparent;
    `}}};
  padding: 0.8125rem 11.5625rem 0.8125rem 2.4375rem;
  border-bottom: 1px solid #d1d1d1;
`,s=o.div`
  font-size: 30px;
  font-weight: 700;
  background: #3974cc;
  border-radius: 0px 20px 0px 0px;
  border-bottom: 3px solid #333333;
  color: #ffffff;
  padding: 39px 151px 39px 18px;
`;function p(){return r.jsx(s,{children:"제품정보"})}function n({title:t,route:c}){return r.jsx(u,{to:c,children:t})}function a(){const{productType:t}=d();return r.jsx("nav",{children:r.jsxs(l,{children:[r.jsx(e,{productType:t==="pork"?"pork":void 0,children:r.jsx(n,{title:"양돈",route:"/Product/pork"})}),r.jsx(e,{productType:t==="chicken"?"chicken":void 0,children:r.jsx(n,{title:"계육",route:"/Product/chicken"})}),r.jsx(e,{productType:t==="duck"?"duck":void 0,children:r.jsx(n,{title:"오리",route:"/Product/duck"})})]})})}function x(){return r.jsxs(r.Fragment,{children:[r.jsx(p,{}),r.jsx(a,{})]})}function g(){return r.jsx(x,{})}export{g as default};
