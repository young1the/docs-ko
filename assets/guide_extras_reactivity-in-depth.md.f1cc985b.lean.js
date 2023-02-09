import{M as s,_ as n,r as a,o as l,c as p,u as o,t as e,e as c,F as t,n as r,j as y,A as F,B as D,d as A,a as C}from"./app.4e3aa610.js";const i=s(Array.from(Array(3).keys()).map((s=>Array.from(Array(3).keys()).map((s=>"")))));function d(s){if(!s.startsWith("="))return s;s=s.slice(1).replace(/\b([A-Z])(\d{1,2})\b/g,((s,n,a)=>`get(${n.charCodeAt(0)-65},${a})`));try{return new Function("get",`return ${s}`)(u)}catch(n){return`#ERROR ${n}`}}function u(s,n){const a=d(i[s][n]),l=Number(a);return Number.isFinite(l)?l:a}i[0][0]="1",i[0][1]="2",i[0][2]="= A0 + A1";const g=["title"],h=["value"],b={key:1},v=n({__name:"SpreadSheetCell",props:{c:Number,r:Number},setup(s){const n=s,c=a(!1);function t(s){c.value=!1,i[n.c][n.r]=s.target.value.trim()}return(n,a)=>(l(),p("div",{class:"cell",title:o(i)[s.c][s.r],onClick:a[1]||(a[1]=s=>c.value=!0)},[c.value?(l(),p("input",{key:0,value:o(i)[s.c][s.r],onChange:t,onBlur:t,onVnodeMounted:a[0]||(a[0]=({el:s})=>s.focus())},null,40,h)):(l(),p("span",b,e(o(d)(o(i)[s.c][s.r])),1))],8,g))}},[["__scopeId","data-v-3efd69a9"]]),m=(s=>(F("data-v-dffbe810"),s=s(),D(),s))((()=>c("th",null,null,-1))),f=n({__name:"SpreadSheet",setup(s){const n=i.map(((s,n)=>String.fromCharCode(65+n)));return(s,a)=>(l(),p("table",null,[c("thead",null,[c("tr",null,[m,(l(!0),p(t,null,r(o(n),(s=>(l(),p("th",null,e(s),1)))),256))])]),c("tbody",null,[(l(!0),p(t,null,r(o(i)[0].length,(s=>(l(),p("tr",null,[c("th",null,e(s-1),1),(l(!0),p(t,null,r(o(n),((n,a)=>(l(),p("td",null,[y(v,{r:s-1,c:a},null,8,["r","c"])])))),256))])))),256))])]))}},[["__scopeId","data-v-dffbe810"]]),I=c("h1",{id:"reactivity-in-depth",tabindex:"-1"},[A("반응형 심화 "),c("a",{class:"header-anchor",href:"#reactivity-in-depth","aria-hidden":"true"},"#")],-1),k=c("p",null,"Vue의 가장 독특한 기능 중 하나는 눈에 거슬리지 않는 반응성 시스템입니다. 컴포넌트 상태는 반응형 자바스크립트 객체로 구성됩니다. 이를 수정하면 뷰가 업데이트됩니다. 상태 관리를 간단하고 직관적으로 만들지만 몇 가지 일반적인 문제를 피하려면 작동 방식을 이해하는 것도 중요합니다. 이 섹션에서는 Vue의 반응성 시스템에 대한 몇 가지 하위 수준의 세부 사항을 살펴보겠습니다.",-1),Z=c("h2",{id:"what-is-reactivity",tabindex:"-1"},[A("반응형이란? "),c("a",{class:"header-anchor",href:"#what-is-reactivity","aria-hidden":"true"},"#")],-1),V=c("p",null,"요즘 프로그래밍에서 이 용어가 자주 등장하는데, 사람들이 이 말을 할 때 무슨 뜻일까요? 반응성은 선언적인 방식으로 변화에 적응할 수 있는 프로그래밍 패러다임입니다. 반응형 프로그래밍이 훌륭하기 때문에 사람들이 일반적으로 보여주는 대표적인 예는 Excel 스프레드시트입니다:",-1),G=C("",79),E=JSON.parse('{"title":"반응형 심화","description":"","frontmatter":{"outline":"deep"},"headers":[{"level":2,"title":"반응형이란?","slug":"what-is-reactivity","link":"#what-is-reactivity","children":[]},{"level":2,"title":"Vue에서 반응형 작동 방식","slug":"how-reactivity-works-in-vue","link":"#how-reactivity-works-in-vue","children":[]},{"level":2,"title":"런타임 (실행 시) vs. 컴파일 타임 (컴파일 시) 반응형","slug":"runtime-vs-compile-time-reactivity","link":"#runtime-vs-compile-time-reactivity","children":[]},{"level":2,"title":"반응형 디버깅","slug":"reactivity-debugging","link":"#reactivity-debugging","children":[{"level":3,"title":"컴포넌트 디버깅 훅","slug":"component-debugging-hooks","link":"#component-debugging-hooks","children":[]},{"level":3,"title":"계산된 속성 디버깅","slug":"computed-debugging","link":"#computed-debugging","children":[]},{"level":3,"title":"감시자 디버깅","slug":"watcher-debugging","link":"#watcher-debugging","children":[]}]},{"level":2,"title":"외부 상태 시스템과의 통합","slug":"integration-with-external-state-systems","link":"#integration-with-external-state-systems","children":[{"level":3,"title":"불변 데이터","slug":"immutable-data","link":"#immutable-data","children":[]},{"level":3,"title":"상태 머신 (State Machine)","slug":"state-machines","link":"#state-machines","children":[]},{"level":3,"title":"RxJS","slug":"rxjs","link":"#rxjs","children":[]}]}],"relativePath":"guide/extras/reactivity-in-depth.md"}'),x=Object.assign({name:"guide/extras/reactivity-in-depth.md"},{setup:s=>(s,n)=>(l(),p("div",null,[I,k,Z,V,y(f),G]))});export{E as __pageData,x as default};
