import{u as e,j as n}from"./index-BQNV57zS.js";const i=e.div`
  & .mainImage {
    max-width: 1920px;
  }
`;function l({image:t,alt:o}){return n.jsx(i,{children:n.jsx("img",{className:"mainImage",src:t,alt:o})})}e.div`
  width: 100%;
`;const f=e.div`
  width: auto;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: flex-start;
  padding-top: 4.99rem;
  background-color: white;
  /* border: 1px solid black; */
`,r=e.div`
  display: flex;
  justify-content: space-between;
  gap: ${t=>parseInt(t.gap||"20")/16}rem;
  padding-bottom: ${t=>parseInt(t.paddingBottom||"16")/16}rem;

  & .flexColumn {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: ${t=>parseInt(t.gap||"16")/16}rem;
    padding-top: 4.81rem;
  }

  & .flexColumn02 {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 3.37rem;
  }
`;e.p`
  color: ${t=>t.fontColor?t.fontColor:"black"};
  font-family: 'Noto Sans';
  font-size: ${t=>parseInt(t.fontSize||"16")/16}rem;
  font-style: normal;
  font-weight: ${t=>t.fontWeight?t.fontWeight:"700"};
  line-height: ${t=>parseInt(t.fontSize||"16")/16}rem;
  margin: 0;
  padding: 0;
`;const s=e.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
  text-align: ${t=>t.textPosition?t.textPosition:"left"};

  & .mainText {
    color: ${t=>t.fontColor?t.fontColor:"#333"};
    font-family: 'Noto Sans';
    font-size: ${t=>parseInt(t.fontSize||"30")/16}rem;
    font-style: normal;
    font-weight: 700;
    line-height: 40px;
    margin: 0;
    padding: 0;
    letter-spacing: -0.15px;
  }

  & .ceoName {
    color: #333;
    text-align: right;
    font-family: 'Noto Sans';
    font-size: 30px;
    font-style: normal;
    font-weight: 600;
    line-height: 40px;
  }

  & .firstText {
    color: ${t=>t.fontColor?t.fontColor:"#333"};
    font-family: 'Noto Sans';
    font-size: ${t=>parseInt(t.fontSize||"18")/16}rem;
    font-style: normal;
    font-weight: 400;
    line-height: 40px;
    margin: 0;
    padding: 0;
  }

  & .secondText {
    color: ${t=>t.fontColor?t.fontColor:"#666"};
    font-family: 'Noto Sans';
    font-size: ${t=>parseInt(t.fontSize||"18")/16}rem;
    font-style: normal;
    font-weight: 400;
    line-height: 30px;
    letter-spacing: -0.09px;
    margin: 0;
    padding: 0;
  }
`;e.p`
  color: ${t=>t.fontColor?t.fontColor:"black"};
  font-family: 'Noto Sans';
  font-size: ${t=>parseInt(t.fontSize||"16")/16}rem;
  font-style: normal;
  font-weight: ${t=>t.fontWeight?t.fontWeight:"700"};
  line-height: 40px;
  margin: 0;
  padding: 0;
`;e.span`
  color: ${t=>t.fontColor?t.fontColor:"#3974CC"};
  font-family: 'Noto Sans';
  font-size: ${t=>parseInt(t.fontSize||"16")/16}rem;
  font-style: normal;
  font-weight: ${t=>t.fontWeight?t.fontWeight:"600"};
  line-height: ${t=>parseInt(t.lineHeight||"16")/16}rem;
  margin: 0;
  padding: 0;
`;e.div`
  width: 79px;
  flex-shrink: 0;

  border: 1px solid ${t=>t.color?"black":"white"};
`;e.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
  text-align: ${t=>t.textPosition?t.textPosition:"left"};
`;const g=e.div`
  position: relative;
  padding-top: 76px;
  & .mainMenuPosition {
    display: flex;
    justify-content: center;
    padding-bottom: 4.5rem;
  }
`,m=e.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  justify-content: center;
`;export{l as P,r as S,g as W,s as a,m as b,f as c};
