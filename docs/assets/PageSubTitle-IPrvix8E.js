import{u as o}from"./index-BQNV57zS.js";const e=o.div`
  width: 81.25rem;
  height: auto;
  display: flex;
  padding-left: 1.25rem;

  flex-direction: column;
  gap: ${t=>parseInt(t.gap||"16")/16}rem;
  background-color: ${t=>t.color};
  position: relative;

  & .firstTitle {
    color: ${t=>t.fontColor?t.fontColor:"black"};
    font-family: 'Noto Sans';
    font-size: ${t=>parseInt(t.fontSize||"80")/16}rem;
    font-style: normal;
    text-align: left;
    font-weight: ${t=>t.fontWeight?t.fontWeight:"700"};
    line-height: 80px;
    margin: 0;
    padding: 0;
  }

  & .secondTitle {
    color: ${t=>t.fontColor?t.fontColor:"black"};
    font-family: 'Noto Sans';
    font-size: ${t=>parseInt(t.fontSize||"40")/16}rem;
    font-style: normal;
    font-weight: ${t=>t.fontWeight?t.fontWeight:"700"};
    line-height: 50px;
    margin: 0;
    padding: 0;
  }
  & .thirdTitle {
    color: ${t=>t.fontColor?t.fontColor:"black"};
    font-family: 'Noto Sans';
    font-size: ${t=>parseInt(t.fontSize||"20")/16}rem;
    font-style: normal;
    font-weight: ${t=>t.fontWeight?t.fontWeight:"500"};
    line-height: 30px;
    margin: 0;
    padding: 0;
  }

  & span {
    color: ${t=>t.fontColor?t.fontColor:"#3974CC"};
    font-family: 'Noto Sans';
    font-size: ${t=>parseInt(t.fontSize||"20")/16}rem;
    font-style: normal;
    font-weight: ${t=>t.fontWeight?t.fontWeight:"500"};
    line-height: ${t=>parseInt(t.lineHeight||"30")/16}rem;
    margin: 0;
    padding: 0;
  }

  & .flex-column {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: ${t=>parseInt(t.gap||"16")/16}rem;
    padding-top: ${t=>parseInt(t.paddingTop||"16")/16}rem;
  }
`,i=o.div`
  width: 79px;
  flex-shrink: 0;

  border: 1px solid ${t=>t.color?t.color:"black"};
`;export{i as S,e as a};
