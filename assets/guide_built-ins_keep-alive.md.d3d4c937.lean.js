import{r as s,o as a,c as n,e as l,t as p,F as e,D as o,E as c,I as t,J as i,d as r,i as D,K as F,L as d,j as y,a as C}from"./app.4e3aa610.js";const u=l("p",null,"Current component: A",-1),A={style:{"margin-right":"20px"}},b={__name:"CompA",setup(o){let c=s(0);return(s,o)=>(a(),n(e,null,[u,l("span",A,"count: "+p(c.value),1),l("button",{onClick:o[0]||(o[0]=s=>c.value++)},"+")],64))}},g=l("p",null,"Current component: B",-1),v={style:{"margin-right":"20px"}},I={__name:"CompB",setup(t){let i=s("");return(s,t)=>(a(),n(e,null,[g,l("span",v,"Message is: "+p(i.value),1),o(l("input",{"onUpdate:modelValue":t[0]||(t[0]=s=>i.value=s)},null,512),[[c,i.value]])],64))}},m={class:"demo"},X={__name:"SwitchComponent",props:{useKeepAlive:Boolean},setup(s){let p=t(b);return(e,c)=>(a(),n("div",m,[l("label",null,[o(l("input",{type:"radio","onUpdate:modelValue":c[0]||(c[0]=s=>p.value=s),value:b},null,512),[[i,p.value]]),r(" A")]),l("label",null,[o(l("input",{type:"radio","onUpdate:modelValue":c[1]||(c[1]=s=>p.value=s),value:I},null,512),[[i,p.value]]),r(" B")]),s.useKeepAlive?(a(),D(d,{key:0},[(a(),D(F(p.value)))],1024)):(a(),D(F(p.value),{key:1}))]))}},B=C("",7),h=C("",4),G=C("",20),Z=JSON.parse('{"title":"KeepAlive","description":"","frontmatter":{},"headers":[{"level":2,"title":"기본 사용법","slug":"basic-usage","link":"#basic-usage","children":[]},{"level":2,"title":"Include / Exclude","slug":"include-exclude","link":"#include-exclude","children":[]},{"level":2,"title":"최대 캐시 인스턴스","slug":"max-cached-instances","link":"#max-cached-instances","children":[]},{"level":2,"title":"캐시된 인스턴스의 생명주기","slug":"lifecycle-of-cached-instance","link":"#lifecycle-of-cached-instance","children":[]}],"relativePath":"guide/built-ins/keep-alive.md"}'),w=Object.assign({name:"guide/built-ins/keep-alive.md"},{setup:s=>(s,l)=>(a(),n("div",null,[B,y(X),h,y(X,{"use-KeepAlive":""}),G]))});export{Z as __pageData,w as default};
