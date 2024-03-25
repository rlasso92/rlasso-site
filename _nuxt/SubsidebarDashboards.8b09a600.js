import{d as h,a3 as $,o as t,a as s,b as d,E as v,F as b,h as i,i as m,m as L,W as M,a4 as B,w as k,q as N,g as C,a5 as P,c as R,a6 as W,n as w,a7 as A,U as y,V as D,t as x,C as S,r as T}from"./entry.9b260285.js";const F={class:"flex h-16 w-full items-center px-6"},H={key:0,class:"font-heading text-muted-700 text-lg font-light capitalize dark:text-white"},I=h({__name:"TairoSubsidebarHeader",setup(o){const{current:e,isOpen:n}=$();return(r,a)=>{const c=L;return t(),s("div",F,[d(e)?(t(),s("div",H,v(d(e).title),1)):b("",!0),i("button",{type:"button",class:"text-muted-400 hover:bg-muted-100 hover:text-muted-600 ms-auto flex h-10 w-10 items-center justify-center rounded-full transition-colors duration-300 xl:hidden",onClick:a[0]||(a[0]=_=>n.value=!1)},[m(c,{name:"feather:chevron-left",class:"h-6 w-6"})])])}}}),j={},q={class:"border-muted-200 dark:border-muted-700 my-3 h-px w-full border-t"};function O(o,e){return t(),s("li",q)}const U=M(j,[["render",O]]),G={class:"mb-1 flex min-h-[2rem] items-center"},J={class:"font-sans text-sm"},K=h({__name:"TairoSubsidebarMenuLink",props:{name:{},to:{}},setup(o){const e=o,{toggle:n}=$(),{xl:r}=B();function a(){console.log("onClick",e.name,r.value),!r.value&&n()}return(c,_)=>{const l=N;return t(),s("li",G,[m(l,{to:e.to,class:"nui-focus text-muted-400 hover:text-primary-500 flex w-full items-center transition-colors duration-300",onClickPassive:a},{default:k(()=>[i("span",J,v(e.name),1)]),_:1},8,["to"])])}}}),Q={class:"group mb-1 min-h-[2rem]"},X={class:"text-muted-400 group-hover:text-primary-500 relative inline-flex items-center gap-2 font-sans text-sm transition-colors duration-300"},Y={key:0,class:"bg-primary-500 absolute -start-3 top-2 h-1 w-1 rounded-full"},Z={key:0,class:"py-2"},ee={class:"font-sans text-xs"},te=h({__name:"TairoSubsidebarMenuCollapseLinks",props:{name:{},children:{}},setup(o){const e=o,n=C(!1),r=P(),a=C(),c=R(()=>e.children.some(u=>u.exact===!0?r.path===u.to:r.path.startsWith(u.to)));W(()=>{c.value&&(n.value=!0)});function _(){n.value=!n.value,n.value||a.value?.blur()}function l(u){return u.exact&&r.path===u.to||!u.exact&&r.path.startsWith(u.to)}const{toggle:p}=$(),{xl:V}=B();function z(){V.value||p()}return(u,ue)=>{const g=L,E=N;return t(),s("li",Q,[i("a",{ref_key:"buttonRef",ref:a,href:"#",class:"nui-focus relative top-0.5 flex items-center",onClick:A(_,["stop","prevent"])},[i("span",X,[d(c)?(t(),s("span",Y)):b("",!0),i("span",null,v(e.name),1)]),m(g,{name:"feather:chevron-down",class:w(["text-muted-400 ms-auto block h-4 w-4 transition-transform duration-300",{"group-focus-within:rotate-180":!d(n),"rotate-180":d(n)}])},null,8,["class"])],512),i("div",{class:w(["transition-all duration-150",{"max-h-0 overflow-hidden opacity-0 group-focus-within:max-h-max group-focus-within:overflow-visible group-focus-within:opacity-100":!d(n),"max-h-max opacity-100":d(n)}])},[e?.children?(t(),s("ul",Z,[(t(!0),s(y,null,D(e.children,f=>(t(),s("li",{key:f.to,class:"flex h-8 w-full items-center"},[m(E,{to:f.to,class:w([{"text-primary-500":l(f)},"nui-focus text-muted-400 hover:text-primary-500 focus:text-primary-500 flex w-full items-center ps-3 transition-colors duration-300"]),onClickPassive:z},{default:k(()=>[m(g,{name:f.icon,class:"me-2 h-5 w-5"},null,8,["name"]),i("span",ee,v(f.name),1)]),_:2},1032,["to","class"])]))),128))])):b("",!0)],2)])}}}),ne=h({__name:"TairoSubsidebarMenu",props:{navigation:{}},setup(o){const e=o;return(n,r)=>{const a=U,c=K,_=te;return t(),s("ul",null,[(t(!0),s(y,null,D(e.navigation,(l,p)=>(t(),s(y,null,["divider"in l?(t(),x(a,{key:`${p}-divider`})):"to"in l?(t(),x(c,S({key:1},l,{key:`${p}-link`}),null,16)):"children"in l?(t(),x(_,S({key:2},l,{key:`${p}-collapse`}),null,16)):b("",!0)],64))),256))])}}}),se={},oe={class:"flex h-screen flex-col"},ae={class:"nui-slimscroll relative h-full w-full overflow-y-auto"},re={class:"px-6 pb-8"},ie=i("div",{class:"dark:from-muted-800 pointer-events-none fixed bottom-0 z-10 h-10 w-[212px] bg-gradient-to-t from-white to-transparent"},null,-1);function ce(o,e){return t(),s("div",oe,[T(o.$slots,"header"),i("div",ae,[i("div",re,[T(o.$slots,"default")]),ie])])}const le=M(se,[["render",ce]]),de=h({__name:"SubsidebarDashboards",setup(o){const e=[];return(n,r)=>{const a=I,c=ne,_=le;return t(),x(_,null,{header:k(()=>[m(a)]),default:k(()=>[m(c,{navigation:e})]),_:1})}}});export{de as default};