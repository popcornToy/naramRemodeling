import{u as r,j as t}from"./index-BQNV57zS.js";import{r as o}from"./react-Cu9bd8lq.js";import{S as f}from"./PageSubTitle-IPrvix8E.js";import"./reactDom-CkgO_r3j.js";import"./reactRouter-C8XkI_Et.js";const h=r.input`
  padding: 15px 10px;
  background: ${e=>e.theme.colors.Gray100};
  border: none;
  ${e=>e.theme.fontStyles.textInput};
  color: ${e=>e.theme.colors.TextBlack};
`;function a({id:e,type:s,isRequired:n=!1,...l}){return t.jsx(h,{id:e,type:s,required:n,...l})}const j=r.button`
  border: none;
  background: ${e=>e.theme.colors.GrayFill};
  ${e=>e.theme.fontStyles.textBase};
  padding: 14px 20px;
`;function c({children:e="버튼"}){return t.jsx(j,{type:"button",children:e})}const y=r.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  gap: 5px;
  & .value {
    color: ${e=>e.theme.colors.TextBlack};
    ${e=>e.theme.fontStyles.textBase};
    display: flex;
    justify-content: space-between;
    align-items: end;
  }
  & .warning {
    ${e=>e.theme.fontStyles.mobileBase};
    color: ${e=>e.theme.colors.Red};
  }
  & .inner {
    display: flex;
    gap: 10px;
  }
  & input {
    flex-grow: 1;
  }
`;function i({title:e="test",type:s="email",button:n=!1,valid:l=!1,validText:p="id",isRequired:u=!1}){const m={id:"아이디는 6자 이상의 소문자 알파벳으로 작성해주세요",password:"비밀번호 항목은 4 ~ 20자 이내로 입력해 주세요",pwConfirm:"비밀번호와 동일한 값을 입력해 주세요",number:"생년월일은 6자리로 입력해주세요",valid:"사용가능"},d=o.useId();return t.jsxs(y,{children:[t.jsxs("label",{className:"value",htmlFor:d,children:[e,l?t.jsx("span",{className:"warning",children:m[p]}):""]}),t.jsxs("div",{className:"inner",children:[t.jsx(a,{id:d,type:s,isRequired:u}),n?t.jsx(c,{children:"검사하기"}):""]})]})}const g=r.div`
  & h2 {
    ${e=>e.theme.fontStyles.headingMedium};
    color: ${e=>e.theme.colors.TextBlack};
  }
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 50px;
`;function x({children:e,isRequired:s=!1}){return t.jsxs(g,{children:[t.jsx("h2",{children:e}),t.jsx(f,{}),s?t.jsx("p",{className:"description",children:"필수 입력란입니다"}):""]})}const v=r.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  gap: 5px;
  & .value {
    color: ${e=>e.theme.colors.TextBlack};
    ${e=>e.theme.fontStyles.textBase};
    display: flex;
    justify-content: space-between;
    align-items: end;
  }
  & .inner {
    display: flex;
    gap: 10px;
  }
  & input {
    flex-grow: 1;
  }
`;function b({type:e="email",button:s=!1,isRequired:n=!1}){const l=o.useId();return t.jsxs(v,{children:[t.jsx("label",{className:"value",htmlFor:l,children:"주소"}),t.jsxs("div",{className:"inner",children:[t.jsx(a,{id:l,type:e,isRequired:n}),s?t.jsx(c,{children:"검색하기"}):""]}),t.jsx("label",{className:"value sr-only",htmlFor:l,children:"상세주소"}),t.jsx("div",{className:"inner",children:t.jsx(a,{id:l,type:e,isRequired:n})})]})}const w=r.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  gap: 5px;
  & .value {
    color: ${e=>e.theme.colors.TextBlack};
    ${e=>e.theme.fontStyles.textBase};
    display: flex;
    justify-content: space-between;
    align-items: end;
  }
  & .inner {
    display: flex;
    gap: 10px;
    align-items: center;
  }
  & input {
    flex-grow: 1;
  }
`;function S({type:e="email",isRequired:s=!1}){const n=o.useId();return t.jsxs(w,{children:[t.jsx("label",{className:"value",htmlFor:n,children:"핸드폰"}),t.jsxs("div",{className:"inner",children:[t.jsx(a,{id:n,type:e,isRequired:s,maxLength:"4"}),"-",t.jsx(a,{id:n,type:e,isRequired:s,maxLength:"4"}),"-",t.jsx(a,{id:n,type:e,isRequired:s,maxLength:"4"})]})]})}const $=r.div`
  &.wrapper {
    padding: 176px 60px;
    text-align: left;
    & > .inner {
      padding-inline-start: 3.125rem;
      display: flex;
      flex-direction: column;
      gap: 2.1875rem;
      margin-bottom: 6.25rem;
    }
  }
`;function k(){return t.jsxs($,{className:"wrapper",children:[t.jsx(x,{isRequired:!0,children:"필수정보 입력란"}),t.jsxs("div",{className:"inner",children:[t.jsx(i,{isRequired:!0,title:"아이디",type:"text",button:!0,valid:!0,validText:"id"}),t.jsx(i,{isRequired:!0,title:"비밀번호",type:"password",valid:!0,validText:"password"}),t.jsx(i,{isRequired:!0,title:"비밀번호 확인",type:"password",valid:!0,validText:"pwConfirm"}),t.jsx(i,{isRequired:!0,title:"이름",type:"text"}),t.jsx(i,{isRequired:!0,title:"이메일",type:"이메일"}),t.jsx(i,{isRequired:!0,title:"생년월일",type:"number",valid:!0,validText:"pwConfirm"})]}),t.jsx(x,{children:"추가정보 입력"}),t.jsxs("div",{className:"inner",children:[t.jsx(b,{type:"address",button:!0}),t.jsx(S,{type:"number"}),t.jsx(i,{title:"별명",type:"text"})]})]})}export{k as default};
