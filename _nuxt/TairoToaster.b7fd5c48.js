import{d as x,av as y,aw as h,c as a,o as s,t as C,w as v,h as c,n as t,b as r,ax as B,a as n,i as d,F as o,E as i,ay as N,m as T,p as j}from"./entry.9b260285.js";const z={class:"absolute inset-x-0 bottom-0 h-1"},S={key:0,class:"absolute end-2 top-2"},V={class:"text-md min-w-[220px] max-w-xl py-4 pe-12 ps-8"},$={key:0,class:"text-semibold font-heading maw-w-lg block truncate"},E={key:1,class:"text-muted-600 dark:text-muted-400 whitespace-pre-wrap"},q=x({__name:"TairoToaster",props:{title:{default:void 0},message:{default:void 0},color:{default:"muted"},icon:{default:void 0},closable:{type:Boolean}},setup(u){const e=u,l=y(),{percent:g,closeIn:I,endAt:A}=h(),m=a(()=>{switch(e.color){case"primary":return"dark:border-primary-800 border-primary-200";case"success":return"dark:border-success-800 border-success-200";case"danger":return"dark:border-danger-800 border-danger-200";case"warning":return"dark:border-warning-800 border-warning-200";case"info":return"dark:border-info-800 border-info-200";case"muted":default:return"dark:border-muted-800 border-muted-200"}}),b=a(()=>{switch(e.color){case"primary":return"bg-primary-200 dark:bg-primary-900";case"success":return"bg-success-200 dark:bg-success-900";case"danger":return"bg-danger-200 dark:bg-danger-900";case"warning":return"bg-warning-200 dark:bg-warning-900";case"info":return"bg-info-200 dark:bg-info-900";case"muted":default:return"bg-muted-200 dark:bg-muted-900"}}),p=a(()=>{switch(e.color){case"primary":return"bg-primary-50 dark:bg-primary-700";case"success":return"bg-success-50 dark:bg-success-700";case"danger":return"bg-danger-50 dark:bg-danger-700";case"warning":return"bg-warning-50 dark:bg-warning-700";case"info":return"bg-info-50 dark:bg-info-700";case"muted":default:return"bg-muted-50 dark:bg-muted-700"}}),k=a(()=>{switch(e.color){case"primary":return"text-primary-400 dark:text-primary-50";case"success":return"text-success-400 dark:text-success-50";case"danger":return"text-danger-400 dark:text-danger-50";case"warning":return"text-warning-400 dark:text-warning-50";case"info":return"text-info-400 dark:text-info-50";case"muted":default:return"text-muted-400 dark:text-muted-50"}});return(D,F)=>{const f=N,w=T,_=j;return s(),C(_,{class:t(["dark:bg-muted-900 pointer-events-auto relative z-[200] flex border bg-white shadow-md",r(m)])},{default:v(()=>[c("div",z,[c("div",{class:t(["h-1 rounded-es-lg",r(b)]),style:B({width:`${r(g)*100}%`})},null,6)]),e.closable?(s(),n("div",S,[d(f,{onClick:r(l).close},null,8,["onClick"])])):o("",!0),e.icon?(s(),n("div",{key:1,class:t(["flex w-16 items-center justify-center rounded-s-lg",r(p)])},[d(w,{name:e.icon,class:t(["h-6 w-6",r(k)])},null,8,["name","class"])],2)):o("",!0),c("div",V,[e.title?(s(),n("strong",$,i(e.title),1)):o("",!0),e.message?(s(),n("p",E,i(e.message),1)):o("",!0)])]),_:1},8,["class"])}}});export{q as default};
