import{a as l,j as h,k as p,l as m,o as n,b as r,m as i,e as o,r as u,p as f,u as _,q as g,s as v,h as x,c as y,w as S}from"./entry.129c2671.js";const d=e=>(g("data-v-305ff6f2"),e=e(),v(),e),H=["src"],k=["src"],w=d(()=>o("div",{class:"hero-dim"},null,-1)),B={class:"px-16 py-8 hero-content flex justify-center items-center"},I=d(()=>o("h1",null," Overlay ",-1)),b=l({__name:"SectionHero",props:{video:String,image:String},setup(e){const s=e,c=h({headerHeight:0});p(()=>{const t=document.getElementById("header");c.headerHeight=(t==null?void 0:t.clientHeight)??0,console.log(t,c.headerHeight)});const a=m(()=>({height:`calc(100vh - ${c.headerHeight}px)`}));return(t,j)=>(n(),r("div",{class:"hero",style:f(_(a))},[s.video?(n(),r("video",{key:0,loop:"",muted:"",autoplay:"",class:"hero-bg",src:s.video},null,8,H)):i("",!0),s.image?(n(),r("img",{key:1,class:"hero-bg",src:s.image},null,8,k)):i("",!0),w,o("div",B,[u(t.$slots,"default",{},()=>[I],!0)])],4))}});const $=x(b,[["__scopeId","data-v-305ff6f2"]]),C=""+new URL("hero_montage.91fca2cb.mp4",import.meta.url).href,V=o("div",{class:"flex flex-col items-center"},[o("h1",{class:"text-9xl tracking-widest font-normal -mr-16"},"PLAY"),o("p",null,"is at the ❤️ of our games")],-1),L=l({__name:"index",setup(e){return(s,c)=>{const a=$;return n(),y(a,{video:_(C)},{default:S(()=>[V]),_:1},8,["video"])}}});export{L as default};