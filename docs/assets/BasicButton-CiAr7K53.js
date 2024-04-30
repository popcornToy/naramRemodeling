import{u as e,j as o}from"./index-BQNV57zS.js";import{L as s}from"./reactRouter-C8XkI_Et.js";const h="/Notice_main.svg";e.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & .EngTitle {
    width: 100%;
    color: #999;
    text-align: center;
    font-family: 'Noto Sans';
    font-size: 26px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 18.2px;
    margin-left: 18.2px;
  }

  & .KorTitle {
    color: #000;
    text-align: center;
    font-family: 'Noto Sans';
    font-size: 60px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin: 0;
  }
`;const f=e.p`
  color: #999;
  font-family: 'Noto Sans';
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 50px;
`,m=e.div`
  width: ${t=>t.$width||"118px"};
  height: ${t=>t.$height||"40px"};

  & .DropDownButton {
    width: ${t=>t.$width||"118px"};
    height: ${t=>t.$height||"40px"};
    position: relative;
    border-bottom: 1px solid #d1d1d1;
    border-radius: 0%;
    background: rgba(217, 217, 217, 0);
  }
  & .DropDownSvg {
    position: relative;
    left: 100px;
  }
  & .DropDownList {
    position: relative;
    width: ${t=>t.$width||"40px"};
    top: -40px;
  }
  & .DropDownOption {
    width: 40px;
    height: 40px;
    color: #999;
    text-align: center;
    line-height: 20px;
  }
`,u=e.div`
  width: 240px;
  height: 40px;
  display: flex;
  flex-direction: row;

  & .SearchInput {
    width: 240px;
    height: 40px;
    border: 0px;
    border-bottom: 1px solid #d1d1d1;
    background: rgba(217, 217, 217, 0);
  }

  .SaerchInput::focus {
    outline: none;
  }

  .SearchInput::-webkit-search-cancel-button {
    display: none;
  }

  & .SearchImg {
    width: 18px;
    height: 20px;
    position: relative;
    bottom: 30px;
    left: 100px;
  }
`,b=e.div`
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-right: 2px;
  margin-top: 80px;
`,y=e.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`,w=e.table`
  width: 100%;
  padding: 0;
  border-spacing: 0;
  border-bottom: 2px solid #000;

  & .BoardTableTitle {
    height: 70px;
    background-color: #e7e7e7;
    display: flex;
    justify-content: space-around;
    /* display: grid; */
    line-height: 70px;
    text-align: center;
    /* grid-template-columns: ${({isQnAPage:t})=>t?"1fr 5fr 1fr 1fr 1fr 1fr":"1fr 6fr 1fr 1fr 1fr"}; */
    /* QnA 페이지에서는 그리드 칸을 하나 더 추가 */
  }

  & .BoardTableList {
    height: 70px;
    /* display: grid; */
    display: flex;

    justify-content: space-around;
    line-height: 70px;
    text-align: center;
    border-bottom: 1px solid #d1d1d1;
  }
`,c=e(s)`
  padding: ${t=>t.padding||"10px 15px"};
  font-size: ${t=>t.fontSize||"16px"};
  font-weight: ${t=>t.fontWeight||"normal"};
  background: ${t=>t.background||"#e7e7e7"};
  color: ${t=>t.color||"black"};
  border: 1px solid;
  border-color: ${t=>t.borderColor||"#e7e7e7"};
`,S=e.button`
  padding: ${t=>t.padding||"20px 107px"};
  font-size: ${t=>t.fontSize||"18px"};
  font-weight: ${t=>t.fontWeight||"700"};
  color: ${t=>t.color||"white"};
  background: #3974cc;
`,$=e.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-top: 50px;
`,B=e.div`
  display: grid;
  grid-template-columns: 15fr 1fr;
  /* margin-top: 20px; */
  padding: 20px 0px 40px 0px;
`;e.div`
  width: 81.25rem;
  position: absolute;
  top: 400px;
  left: 50%;
  transform: translate(-50%);
`;function v({text:t,to:i,padding:n,fontSize:r,fontWeight:a,background:d,color:p,borderColor:l}){return o.jsx(o.Fragment,{children:o.jsx(c,{to:i,padding:n,fontSize:r,fontWeight:a,background:d,color:p,borderColor:l,children:t})})}export{v as B,B as S,w as a,m as b,u as c,f as d,b as e,y as f,S as g,$ as h,h as m};
