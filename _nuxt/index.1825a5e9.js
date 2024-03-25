import{_ as z}from"./BaseAvatar.vue.11bc9aba.js";import{d as k,u as B,c as b,o as w,a as v,r as T,n as A,b as S,e as _,f as g,g as x,h as e,i as t,w as s,j as $,_ as C,k as R,l as Z,m as V,p as j,q as E}from"./entry.9b260285.js";const F=k({__name:"BaseIconBox",props:{shape:{default:void 0},size:{default:"xs"},color:{default:void 0},flavor:{default:"pastel"},bordered:{type:Boolean,default:!1},mask:{default:void 0}},setup(f){const l=f,h=B(),m=b(()=>l.shape??h.nui.defaultShapes?.iconBox),c={straight:"",rounded:"nui-box-rounded",curved:"nui-box-curved",full:"nui-box-full"},u={xs:"nui-box-xs",sm:"nui-box-sm",md:"nui-box-md",lg:"nui-box-lg",xl:"nui-box-xl","2xl":"nui-box-2xl"},n={solid:"nui-box-solid",pastel:"nui-box-pastel",outline:"nui-box-outline"},a={default:"nui-box-default",invert:"nui-box-invert",primary:"nui-box-primary",info:"nui-box-info",success:"nui-box-success",warning:"nui-box-warning",danger:"nui-box-danger"},d={hex:"nui-mask nui-mask-hex",hexed:"nui-mask nui-mask-hexed",deca:"nui-mask nui-mask-deca",blob:"nui-mask nui-mask-blob",diamond:"nui-mask nui-mask-diamond"},i=b(()=>["nui-icon-box",l.bordered&&"nui-box-bordered",m.value&&c[m.value],u[l.size],n[l.flavor],l.color&&a[l.color],l.mask&&d[l.mask]]);return(o,r)=>(w(),v("div",{class:A(S(i))},[T(o.$slots,"default")],2))}}),H={class:"mb-8 flex flex-col justify-between md:flex-row md:items-center"},L={class:"ltablet:max-w-full flex max-w-[425px] flex-col items-center gap-4 text-center md:flex-row md:text-left lg:max-w-full"},N=e("span",null,"Welcome back, Bruno Henderson",-1),I=e("span",{class:"text-muted-500"}," Happy to see you again on your dashboard. ",-1),P={class:"mt-4 flex items-center justify-center gap-2 md:mt-0 md:justify-start"},W=e("span",null,"View Affiliate Reports",-1),Y=e("span",null,"View Trading Accounts",-1),M=e("br",null,null,-1),D={class:"grid grid-cols-12 gap-6"},J={class:"ltablet:col-span-6 col-span-12 lg:col-span-6"},O={class:"mb-6"},q=e("span",null,"Your Affiliate Stats",-1),U={class:"grid gap-4 md:grid-cols-2"},G={class:"bg-muted-100/80 dark:bg-muted-700 flex items-center gap-2 rounded-md px-5 py-10"},K=e("span",null,"$2,870",-1),Q=e("span",{class:"text-muted-500 dark:text-muted-400"}," in Sales this month ",-1),X={class:"bg-muted-100/80 dark:bg-muted-700 flex items-center gap-2 rounded-md px-5 py-10"},ee=e("span",null,"159",-1),te=e("span",{class:"text-muted-500 dark:text-muted-400"}," Users Registered ",-1),se={class:"bg-muted-100/80 dark:bg-muted-700 flex items-center gap-2 rounded-md px-5 py-10"},ae=e("span",null,"$429.18",-1),de=e("span",{class:"text-muted-500 dark:text-muted-400"}," Earned today ",-1),oe={class:"bg-muted-100/80 dark:bg-muted-700 flex items-center gap-2 rounded-md px-5 py-10"},le=e("span",null,"$6816.32",-1),ie=e("span",{class:"text-muted-500 dark:text-muted-400"}," Total balance ",-1),ne={class:"ltablet:col-span-6 col-span-12 lg:col-span-6"},re={class:"mb-8 flex items-center justify-between"},ce=e("span",null,"Recent Affiliate Purchases",-1),ue={class:"ltablet:col-span-6 col-span-12 lg:col-span-6"},me={class:"mb-11"},pe=e("span",null,"Your Trading Stats",-1),he={class:"grid gap-4 md:grid-cols-2"},_e={class:"bg-muted-100/80 dark:bg-muted-700 flex items-center gap-2 rounded-md px-5 py-10"},ge=e("span",null,"$10,304",-1),xe=e("span",{class:"text-muted-500 dark:text-muted-400"}," in trading withdrawals this month ",-1),fe={class:"bg-muted-100/80 dark:bg-muted-700 flex items-center gap-2 rounded-md px-5 py-10"},be=e("span",null,"2",-1),ke=e("span",{class:"text-muted-500 dark:text-muted-400"}," Active Funded Accounts ",-1),we={class:"bg-muted-100/80 dark:bg-muted-700 flex items-center gap-2 rounded-md px-5 py-10"},ve=e("span",null,"$429.18",-1),ye=e("span",{class:"text-muted-500 dark:text-muted-400"}," Pending Approval Withdrawals ",-1),ze={class:"bg-muted-100/80 dark:bg-muted-700 flex items-center gap-2 rounded-md px-5 py-10"},Be=e("span",null,"$6816.32",-1),Te=e("span",{class:"text-muted-500 dark:text-muted-400"}," Total Trading Withdrawals ",-1),Ae={class:"ltablet:col-span-6 col-span-12 lg:col-span-6"},Se={class:"mb-6"},$e=e("span",null,"Customers",-1),Ze=k({__name:"index",setup(f){_(l()),_(h()),_(m());function l(){const{primary:c,info:u,success:n}=g(),a="area",d=258,i={chart:{toolbar:{show:!1}},colors:[c.value,u.value,n.value],title:{show:!1,text:void 0,align:"left"},legend:{show:!0,position:"top"},dataLabels:{enabled:!1},stroke:{width:[2,2,2],curve:"smooth"},xaxis:{type:"datetime",categories:["2020-09-19T00:00:00.000Z","2020-09-20T01:30:00.000Z","2020-09-21T02:30:00.000Z","2020-09-22T03:30:00.000Z","2020-09-23T04:30:00.000Z","2020-09-24T05:30:00.000Z","2020-09-25T06:30:00.000Z"]},tooltip:{x:{format:"dd/MM/yy HH:mm"}}},o=x([{name:"Returning",data:[31,40,28,51,42,109,100]},{name:"Newcomers",data:[11,32,45,32,34,52,41]},{name:"Abandonned",data:[78,53,36,10,14,5,2]}]);return{type:a,height:d,options:i,series:o}}function h(){const{primary:c}=g(),u="radialBar",n=455,a={title:{text:void 0},chart:{sparkline:{enabled:!0},toolbar:{show:!1}},colors:[c.value],plotOptions:{radialBar:{startAngle:-90,endAngle:90,track:{background:"#e7e7e7",strokeWidth:"97%",margin:5,dropShadow:{enabled:!1,top:2,left:0,color:"#999",opacity:1,blur:2}},hollow:{margin:0,size:"40%"},dataLabels:{name:{show:!1},value:{offsetY:-2,fontSize:"22px"}}}},grid:{padding:{top:80}},fill:{type:"gradient",gradient:{shade:"light",shadeIntensity:.1,inverseColors:!1,opacityFrom:1,opacityTo:1,stops:[0,50,53,91]}},labels:["Average Results"]},d=x([76]);return{type:u,height:n,options:a,series:d}}function m(){const{primary:c}=g(),u="bar",n=255,a={chart:{toolbar:{show:!1}},plotOptions:{bar:{dataLabels:{position:"top"}}},dataLabels:{enabled:!0,formatter:function(i){return i+"%"},offsetY:-20,style:{fontSize:"12px",colors:["#304758"]}},xaxis:{categories:["May","Jun","Jul","Aug","Sep"],position:"top",axisBorder:{show:!1},axisTicks:{show:!1},crosshairs:{fill:{type:"gradient",gradient:{colorFrom:"#D8E3F0",colorTo:"#BED1E6",stops:[0,100],opacityFrom:.4,opacityTo:.5}}},tooltip:{enabled:!0}},yaxis:{axisBorder:{show:!1},axisTicks:{show:!1},labels:{show:!1,formatter:function(i){return i+"%"}}},colors:[c.value],title:{text:void 0,align:"left"}},d=x([{name:"Ratio",data:[2.3,3.1,4,10.1,4]}]);return{type:u,height:n,options:a,series:d}}return(c,u)=>{const n=z,a=C,d=R,i=Z,o=V,r=F,p=j,y=E;return w(),v("div",null,[e("div",H,[e("div",L,[t(n,{src:"",size:"lg"}),e("div",null,[t(a,{as:"h2",size:"xl",weight:"light",lead:"tight",class:"text-muted-800 dark:text-white"},{default:s(()=>[N]),_:1}),t(d,null,{default:s(()=>[I]),_:1})])]),e("div",P,[t(i,null,{default:s(()=>[W]),_:1}),t(i,{color:"primary"},{default:s(()=>[Y]),_:1})])]),M,e("div",D,[e("div",J,[t(p,{class:"p-6"},{default:s(()=>[e("div",O,[t(a,{as:"h3",size:"md",weight:"semibold",lead:"tight",class:"text-muted-800 dark:text-white"},{default:s(()=>[q]),_:1})]),e("div",U,[e("div",G,[t(r,{size:"md",class:"bg-primary-100 text-primary-500 dark:bg-primary-500/20 dark:text-primary-400 dark:border-primary-500 dark:border-2",shape:"full"},{default:s(()=>[t(o,{name:"bi:diagram-2-fill",class:"h-5 w-5"})]),_:1}),e("div",null,[t(a,{as:"h2",size:"md",weight:"semibold",lead:"tight",class:"text-muted-800 dark:text-white"},{default:s(()=>[K]),_:1}),t(d,{size:"sm"},{default:s(()=>[Q]),_:1})])]),e("div",X,[t(r,{size:"md",class:"bg-amber-100 text-amber-500 dark:border-2 dark:border-amber-500 dark:bg-amber-500/20 dark:text-amber-400",shape:"full"},{default:s(()=>[t(o,{name:"bi:currency-dollar",class:"h-5 w-5"})]),_:1}),e("div",null,[t(a,{as:"h2",size:"md",weight:"semibold",lead:"tight",class:"text-muted-800 dark:text-white"},{default:s(()=>[ee]),_:1}),t(d,{size:"sm"},{default:s(()=>[te]),_:1})])]),e("div",se,[t(r,{size:"md",class:"bg-green-100 text-green-500 dark:border-2 dark:border-green-500 dark:bg-green-500/20 dark:text-green-400",shape:"full"},{default:s(()=>[t(o,{name:"bi:lightbulb-fill",class:"h-5 w-5"})]),_:1}),e("div",null,[t(a,{as:"h2",size:"md",weight:"semibold",lead:"tight",class:"text-muted-800 dark:text-white"},{default:s(()=>[ae]),_:1}),t(d,{size:"sm"},{default:s(()=>[de]),_:1})])]),e("div",oe,[t(r,{size:"md",class:"bg-indigo-100 text-indigo-500 dark:border-2 dark:border-indigo-500 dark:bg-indigo-500/20 dark:text-indigo-400",shape:"full"},{default:s(()=>[t(o,{name:"ph:bank-duotone",class:"h-5 w-5"})]),_:1}),e("div",null,[t(a,{as:"h2",size:"md",weight:"semibold",lead:"tight",class:"text-muted-800 dark:text-white"},{default:s(()=>[le]),_:1}),t(d,{size:"sm"},{default:s(()=>[ie]),_:1})])])])]),_:1})]),e("div",ne,[t(p,{shape:"curved",class:"p-4"},{default:s(()=>[e("div",re,[t(a,{as:"h3",size:"md",weight:"semibold",lead:"tight",class:"text-muted-800 dark:text-white"},{default:s(()=>[ce]),_:1}),t(y,{to:"#",class:"bg-muted-100 hover:bg-muted-200 dark:bg-muted-700 dark:hover:bg-muted-900 text-primary-500 rounded-lg px-4 py-2 font-sans text-sm font-medium underline-offset-4 transition-colors duration-300 hover:underline"},{default:s(()=>[$(" View All ")]),_:1})])]),_:1})]),e("div",ue,[t(p,{class:"p-6"},{default:s(()=>[e("div",me,[t(a,{as:"h3",size:"md",weight:"semibold",lead:"tight",class:"text-muted-800 dark:text-white"},{default:s(()=>[pe]),_:1})]),e("div",he,[e("div",_e,[t(r,{size:"md",class:"bg-primary-100 text-primary-500 dark:bg-primary-500/20 dark:text-primary-400 dark:border-primary-500 dark:border-2",shape:"full"},{default:s(()=>[t(o,{name:"ph:nut-duotone",class:"h-5 w-5"})]),_:1}),e("div",null,[t(a,{as:"h2",size:"md",weight:"semibold",lead:"tight",class:"text-muted-800 dark:text-white"},{default:s(()=>[ge]),_:1}),t(d,{size:"sm"},{default:s(()=>[xe]),_:1})])]),e("div",fe,[t(r,{size:"md",class:"bg-amber-100 text-amber-500 dark:border-2 dark:border-amber-500 dark:bg-amber-500/20 dark:text-amber-400",shape:"full"},{default:s(()=>[t(o,{name:"ph:handshake-duotone",class:"h-5 w-5"})]),_:1}),e("div",null,[t(a,{as:"h2",size:"md",weight:"semibold",lead:"tight",class:"text-muted-800 dark:text-white"},{default:s(()=>[be]),_:1}),t(d,{size:"sm"},{default:s(()=>[ke]),_:1})])]),e("div",we,[t(r,{size:"md",class:"bg-green-100 text-green-500 dark:border-2 dark:border-green-500 dark:bg-green-500/20 dark:text-green-400",shape:"full"},{default:s(()=>[t(o,{name:"ph:sketch-logo-duotone",class:"h-5 w-5"})]),_:1}),e("div",null,[t(a,{as:"h2",size:"md",weight:"semibold",lead:"tight",class:"text-muted-800 dark:text-white"},{default:s(()=>[ve]),_:1}),t(d,{size:"sm"},{default:s(()=>[ye]),_:1})])]),e("div",ze,[t(r,{size:"md",class:"bg-indigo-100 text-indigo-500 dark:border-2 dark:border-indigo-500 dark:bg-indigo-500/20 dark:text-indigo-400",shape:"full"},{default:s(()=>[t(o,{name:"svg-spinners:wind-toy",class:"h-5 w-5"})]),_:1}),e("div",null,[t(a,{as:"h2",size:"md",weight:"semibold",lead:"tight",class:"text-muted-800 dark:text-white"},{default:s(()=>[Be]),_:1}),t(d,{size:"sm"},{default:s(()=>[Te]),_:1})])])])]),_:1})]),e("div",Ae,[t(p,{class:"p-6"},{default:s(()=>[e("div",Se,[t(a,{as:"h3",size:"md",weight:"semibold",lead:"tight",class:"text-muted-800 dark:text-white"},{default:s(()=>[$e]),_:1})])]),_:1})])])])}}});export{Ze as default};
