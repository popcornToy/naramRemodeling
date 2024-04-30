import{j as s}from"./index-BQNV57zS.js";import{a as j}from"./axios-Cm0UX6qg.js";import{u as w,F as f}from"./Form-DzOMZKS8.js";import{S as v,a as y,D as F,B as p}from"./danger-circle-B4kTbffn.js";import{r as m}from"./react-Cu9bd8lq.js";import{L as c,u as N}from"./reactRouter-C8XkI_Et.js";import"./reactDom-CkgO_r3j.js";const S="/hide.svg",b="/nothide.svg";function u({label:e,id:a,type:n,placeholder:t,error:r,register:i}){const[l,o]=m.useState(!1),[x,g]=m.useState(!1),h=()=>{o(d=>!d),g(d=>!d)};return s.jsxs(v,{children:[s.jsx("label",{htmlFor:a,className:"sr-only",children:e}),s.jsxs("div",{className:"input-container",children:[s.jsx("input",{type:n==="password"&&l?"text":n,id:a,placeholder:t,...i,"aria-invalid":r?"true":"false"}),n==="password"&&s.jsx("button",{type:"button",className:"HideIcon",onClick:h,children:s.jsx("img",{src:x?b:S,alt:"비밀번호 숨기기 보이기 아이콘"})})]}),s.jsxs("span",{className:"error",children:[" ",r&&I(r)]})]})}function I(e){return typeof e=="string"?s.jsx("p",{children:e}):e&&e.message?s.jsx("p",{children:e.message}):null}const L="/find_user.svg",E="/find_password.svg";function P({onSubmit:e,isError:a}){const{register:n,handleSubmit:t,formState:{errors:r}}=w({mode:"onChange"});return s.jsxs(y,{children:[s.jsxs("div",{className:"titleForm",children:[s.jsx("h2",{children:"로그인"}),s.jsx("p",{children:"언제나 고객님의 만족을 추구합니다."})]}),s.jsxs("div",{className:"dangerText",children:[s.jsx("img",{src:F,alt:"경고 아이콘"}),s.jsxs("p",{children:["가입 시 입력한 ",s.jsx("span",{children:"이메일 "})," 정보로 회원 아이디를 조회할 수 있습니다."," "]})]}),s.jsxs(f,{onSubmit:t(e),children:[s.jsx(u,{label:"아이디",id:"username",type:"text",placeholder:"아이디",error:r.username?r.username.message:"",register:n("username",{required:"아이디는 필수 입력입니다.",minLength:{value:2,message:"아이디는 최소 2글자 이상이어야 합니다."}})}),s.jsx(u,{label:"비밀번호",id:"password",type:"password",placeholder:"비밀번호",error:r.password?r.password.message:"",register:n("password",{required:"비밀번호는 필수 입력입니다.",pattern:{value:/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,message:"비밀번호는 8자 이상이어야 하며, 숫자/대문자/소문자/특수문자를 모두 포함해야 합니다."}})}),s.jsxs("div",{className:"ButtonGap",children:[s.jsx(p,{styledType:"login",type:"submit",children:"로그인"}),a&&s.jsx("p",{className:"text-red-500",children:"아이디 또는 비밀번호를 확인해주세요."}),s.jsx("div",{className:"divider"}),s.jsx(c,{to:"/Join",children:s.jsx(p,{styledType:"signUp",type:"button",children:"회원가입"})})]})]}),s.jsxs("div",{className:"Find",children:[s.jsxs(c,{to:"/login/FindId",className:"link",children:[s.jsx("img",{src:L,alt:"아이디 찾기 아이콘"}),"아이디 찾기"]}),s.jsxs(c,{to:"/login/FindPassword",className:"link",children:[s.jsx("img",{src:E,alt:"비밀번호 찾기 아이콘"}),"비밀번호 찾기"]})]})]})}function H(){const[e,a]=m.useState(!1),n=N(),t=async r=>{try{const{username:i,password:l}=r,o=new FormData;o.append("username",i),o.append("password",l),await j.post("https://34.47.88.186:10000/login",o),n("/")}catch(i){console.error("Error logging in:",i),a(!0)}};return s.jsx(s.Fragment,{children:s.jsx(P,{onSubmit:t,isError:e})})}export{H as default};