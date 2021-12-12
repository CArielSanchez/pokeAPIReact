var re=Object.defineProperty,ne=Object.defineProperties;var ae=Object.getOwnPropertyDescriptors;var H=Object.getOwnPropertySymbols;var se=Object.prototype.hasOwnProperty,ie=Object.prototype.propertyIsEnumerable;var V=(e,r,t)=>r in e?re(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,R=(e,r)=>{for(var t in r||(r={}))se.call(r,t)&&V(e,t,r[t]);if(H)for(var t of H(r))ie.call(r,t)&&V(e,t,r[t]);return e},G=(e,r)=>ne(e,ae(r));import{a as F,c as le,r as c,j as i,G as S,b as o,F as U,T as A,I as ce,S as de,A as ue,B as L,d as _,e as $,D as K,f as Y,g as J,h as pe,i as Q,k as M,L as he,l as B,m as me,C as fe,n as ge,o as X,p as xe,q as be,s as ke,t as ye,u as Ce,R as ve,v as Se}from"./vendor.bcb6f536.js";const we=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const h of s.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&n(h)}).observe(document,{childList:!0,subtree:!0});function t(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerpolicy&&(s.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?s.credentials="include":a.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(a){if(a.ep)return;a.ep=!0;const s=t(a);fetch(a.href,s)}};we();async function Pe(e,r){try{const t=s=>F.get(s).then(h=>h),n=await F.get(`https://pokeapi.co/api/v2/pokemon?limit=${e}&offset=${r}`);let a=[];for(let s=0;s<e;s++){let h=n.data.results[s].url,m=await t(h);a.push(m.data)}return n.data.results=a,n.data}catch(t){console.error(t)}}async function Fe(e){return e=e.toLowerCase(),(await F.get(`https://pokeapi.co/api/v2/pokemon/${e}`)).data}async function Ee(e){const r=n=>F.get(n).then(a=>a);let t=[];for(let n=0;n<e.length;n++){let a=e[n],s=await r(a);t.push(s.data)}return t}async function Te(){try{const e=n=>F.get(n).then(a=>a),r=await F.get("https://pokeapi.co/api/v2/type");let t=[];for(let n=0;n<r.data.count;n++){let a=r.data.results[n].url,s=await e(a);t.push(s.data)}return r.data.results=t,r.data}catch(e){console.error(e)}}const g="#FF452B",Oe="#FEF1F0",I="#263238",Z="#212121",j="#6D6D6D",ee="rgba(0, 0, 0, 0.22)",Ae=le({palette:{primary:{main:g},secondary:{main:I},title:{main:Z},subtitle:{main:j},tagBackground:{main:"#ECEFF1"},tagTitle:{main:"#607D8"}}}),z=15,W=e=>e.charAt(0).toUpperCase()+e.slice(1),je=(e,r)=>(e=e.map(t=>t.type.name),e=e.map(t=>r[t]),q(e)),De=(e,r)=>(e=e.map(t=>{let n=r[t.stat.name];return n.stat=t,n}),q(e)),q=e=>e.map(t=>{let n=t.names.filter(a=>a.language.name=="es");return n.length==0&&(n=t.names.filter(a=>a.language.name=="en")),t.name=n[0].name,t}),Le=({types:e,pokemonSearched:r,setPokemonSearched:t,offsetSearch:n,setLoading:a,setOffsetSearch:s,setCounterSearch:h})=>{const[m,u]=c.exports.useState(""),[f,b]=c.exports.useState(null),[w,C]=c.exports.useState(!1),[v,k]=c.exports.useState([]),[E,P]=c.exports.useState([]);c.exports.useEffect(async()=>{a(!0);let d=await Ee(Object.values(v).slice(n,n+z)),l=r;h(Object.values(v).length),t(l.concat(d)),a(!1)},[n,v]);const D=d=>{let l=d.target.value;u(l)},x=async()=>{try{let d;m!=""?(d=await Fe(m),d=[d]):d=[],P([]),t(d),b()}catch(d){t([]),u(""),b(d.response.data)}},p=async(d,l)=>{P(l);let T=[];s(0),t([]),C(!1),l.length&&(T=y(l),T.length==0&&C(!0)),k(T)},y=d=>{let l={},T={};d[0].pokemon.forEach(O=>{l[O.pokemon.name]=O.pokemon.url});for(let O=1;O<d.length;O++){let oe=d[O];if(Object.keys(l).length==0)break;oe.pokemon.forEach(N=>{l[N.pokemon.name]&&(T[N.pokemon.name]=l[N.pokemon.name])}),l=T}return l};return i(S,{container:!0,sx:{boxShadow:"0 2px 4px 0 rgba(0,0,0,.2)",alignItems:"center",backgroundColor:Oe,marginTop:7,minHeight:75},children:[i(S,{item:!0,xs:12,md:4,children:[o(U,{variant:"outlined",sx:{padding:1,borderColor:g},children:o(A,{id:"outlined-adornment",size:"small",value:m,onChange:D,error:f,helperText:f,placeholder:"Pokemon o ID",inputProps:{"aria-label":"weight"}})}),o(ce,{sx:{color:g,borderRadius:6,borderWidth:.5,border:"solid"},onClick:x,children:o(de,{sx:{color:g}})})]}),o(S,{item:!0,xs:12,md:3,children:o(ue,{size:"small",multiple:!0,limitTags:2,id:"multiple-limit-tags",options:e,getOptionLabel:d=>{if(d!=null){let l=q([d])[0];return l==null?void 0:l.name}},value:E,onChange:p,renderInput:d=>o(A,G(R({},d),{error:w,helperText:w?"No hay coincidencias":"",label:"Tipos",placeholder:"Tipo de Pokemon"}))})})]})},$e=({onClick:e,title:r,style:t={}})=>i(L,{onClick:e,sx:{color:"white",backgroundColor:g,width:t==null?void 0:t.width,display:"flex",justifyContent:"space-around","&:hover":{backgroundColor:"white",color:g,borderColor:g,borderWidth:1,borderStyle:"solid"}},children:[" ",o(_,{sx:{color:g}})," ",o("div",{children:r})," ",o(_,{sx:{color:g}})," "]}),Be=({title:e,onClick:r})=>i(L,{onClick:r,sx:{color:"white",backgroundColor:g,display:"flex",justifyContent:"space-around","&:hover":{backgroundColor:"white",color:g,borderColor:g,borderWidth:1,borderStyle:"solid"}},children:[" ",o("div",{children:e})," "]});function Ie({name:e}){const[r,t]=c.exports.useState(!1),[n,a]=c.exports.useState({}),[s,h]=c.exports.useState(null),[m,u]=c.exports.useState(null),[f,b]=c.exports.useState(null),[w,C]=c.exports.useState(null),v=()=>{a({}),u(null),h(null),C(null),b(null)},k=p=>{let y=n,d=p.target.name,l=p.target.value;switch(d){case"nombre":h(l),delete y.nombre;break;case"edad":b(l),delete y.edad;break;case"email":u(l),delete y.email;break;case"info":C(l),delete y.info;break}a(y)},E=()=>{let p={};return s||(p.nombre="Escriba su nombre"),f||(p.edad="Edad Obligatoria"),m||(p.email="Escriba su email"),w||(p.info="Escriba su Motivacion"),a(p),!(Object.values(p).length>0)},P=async()=>{await E()&&x()},D=()=>{t(!0)},x=()=>{v(),t(!1)};return i($,{children:[o($e,{onClick:D,style:{width:"250px"},title:"Cuidame"}),i(K,{open:r,onClose:x,children:[o(Y,{children:`\xBFDesea Adoptar un ${e}?`}),i(J,{children:[o(pe,{children:o("div",{children:"Cada Pok\xE9mon es especial por lo que nuestro servicio de adopcion es diferente para cada uno."})}),i(U,{variant:"outlined",sx:{padding:1,display:"flex"},children:[o(A,{sx:{margin:1},name:"nombre",label:"Nombre Solicitante",onChange:k,value:s,error:n.nombre,helperText:n.nombre,inputProps:{"aria-label":"weight"}}),o(A,{sx:{margin:1},name:"edad",label:"Edad Solicitante",type:"number",onChange:k,value:f,error:n.edad,helperText:n.edad,inputProps:{"aria-label":"weight"}}),o(A,{sx:{margin:1},name:"email",label:"Email",onChange:k,value:m,error:n.email,helperText:n.email,inputProps:{"aria-label":"weight"}}),o(A,{name:"info",sx:{margin:1},error:n.info,helperText:n.info,onChange:k,placeholder:"Explique su motivaci\xF3n",multiline:!0,value:w,rows:2,rowsMax:4})]})]}),i(Q,{children:[o(L,{onClick:x,sx:{color:j},children:"Cerrar"}),o(L,{onClick:P,autoFocus:!0,children:"\xA1Adoptar!"})]})]})]})}function Ne(e){return i(M,{sx:{display:"flex",alignItems:"center"},children:[o(M,{sx:{width:"100%",mr:1},children:o(he,R({variant:"determinate"},e))}),o(M,{sx:{minWidth:35},children:o(B,{variant:"body2",color:"text.secondary",children:`${Math.round(e.value)}`})})]})}function Re({name:e,stats:r,open:t,setOpen:n}){const a=()=>{n(!1)};return o($,{children:i(K,{open:t,onClose:a,children:[i(Y,{children:[`${e} Stats`,o(me,{})]}),o(J,{sx:{width:"300px"},children:r.map(s=>i("div",{style:{margin:10},children:[o("span",{style:{color:I},children:s.name}),o(Ne,{value:s.stat.base_stat+s.stat.effort}),o("br",{})]}))}),o(Q,{children:o(L,{onClick:a,sx:{color:j},children:"Cerrar"})})]})})}const Me=({id:e,name:r,imagenes:t,height:n,weight:a,stats:s,types:h,allTypes:m,allStats:u})=>{const[f,b]=c.exports.useState([]),[w,C]=c.exports.useState([]),[v,k]=c.exports.useState(!1),E=`${ee} 0px 14px 28px, ${ee} 0px 10px 10px`;return c.exports.useEffect(()=>{Object.keys(m).length!=0&&b(je(h,m))},[m]),c.exports.useEffect(()=>{Object.keys(u).length!=0&&C(De(s,u))},[u]),i($,{children:[o(Re,{name:W(r),stats:w,open:v,setOpen:k}),i(fe,{sx:{maxWidth:"250px",margin:"50px",borderRadius:3,boxShadow:E},children:[i(ge,{sx:{borderRadius:3},onClick:()=>{k(!0)},children:[i(X,{children:[" ",o("img",{component:"img",height:"140",src:t.front_default,alt:"pokemon image"})]}),i(X,{children:[i(B,{gutterBottom:!0,variant:"h6",component:"div",sx:{display:"flex",justifyContent:"space-around"},children:[i("div",{style:{color:j,fontSize:"medium",verticalAlign:"text-bottom"},children:["#",e]}),o("div",{style:{color:Z},children:W(r)}),o("div",{})]}),o(S,{container:!0,sx:{display:"flex",justifyContent:"center"},children:f==null?void 0:f.map(P=>o(xe,{size:"small",sx:{margin:.3,color:I},label:P.name},P.name))}),i(B,{variant:"body2",component:"div",sx:{display:"flex",justifyContent:"space-around"},children:[i(S,{color:j,children:[o("div",{children:"Peso:"}),o("div",{children:"Altura:"})]}),i(S,{color:I,children:[i("div",{children:[a/10," kg"]}),i("div",{children:[n/10," m"]})]})]})]})]}),o(be,{children:o(Ie,{name:W(r)})})]})]})},te=({id:e,counter:r,pokemons:t,offsetPokemon:n,setOffsetPokemon:a,loading:s,types:h,stats:m})=>i(S,{container:!0,sx:{display:"flex",justifyContent:"center"},children:[t.map(u=>o(Me,{id:u.id,name:u.name,imagenes:u.sprites,stats:u.stats,height:u.height,weight:u.weight,types:u.types,allTypes:h,allStats:m},e+u.id)),o(S,{item:!0,xs:12,sx:{margin:"15px",bottom:0,display:"flex",justifyContent:"center"},children:s?o(ke,{variant:"indeterminate"}):r>t.length?o(Be,{onClick:()=>{let u=z+n;a(u)},title:"\u2022\u2022\u2022"}):`${r>t.length}`})]});async function ze(){try{const e=n=>F.get(n).then(a=>a),r=await F.get("https://pokeapi.co/api/v2/stat");let t=[];for(let n=0;n<r.data.count;n++){let a=r.data.results[n].url,s=await e(a);t.push(s.data)}return r.data.results=t,r.data}catch(e){console.error(e)}}const We=()=>{const[e,r]=c.exports.useState(0),[t,n]=c.exports.useState([]),[a,s]=c.exports.useState({}),[h,m]=c.exports.useState({}),[u,f]=c.exports.useState(!1),[b,w]=c.exports.useState([]),[C,v]=c.exports.useState(0),[k,E]=c.exports.useState(0),[P,D]=c.exports.useState(0);return c.exports.useEffect(async()=>{let x=await Te(),p=await ze(),y={},d={};x=x.results,x.forEach(l=>{y[l.name]=l}),p=p.results,p.forEach(l=>{d[l.name]=l}),s(y),m(d)},[]),c.exports.useEffect(async()=>{f(!0);let x=await Pe(z,e),p=t;p=p.concat(x.results),n(p),E(x.count),f(!1)},[e]),i($,{children:[o(Le,{types:Object.values(a),setLoading:f,offsetSearch:C,setOffsetSearch:v,pokemonSearched:b,setPokemonSearched:w,setCounterSearch:D}),b.length==0?o(te,{id:"n",pokemons:t,counter:k,loading:u,offsetPokemon:e,setOffsetPokemon:r,types:a,stats:h}):o(te,{id:"s",counter:P,pokemons:b,loading:u,offsetPokemon:C,setOffsetPokemon:v,types:a,stats:h})]})};var qe="/assets/charmanderFamily.41f4f3e1.png";const He=()=>o(ye,{sx:{boxShadow:"0 2px 4px 0 rgba(0,0,0,.2)",backgroundColor:"white",color:g,height:50,maxHeight:100},children:i(S,{sx:{display:"flex",justifyContent:"space-between",marginLeft:3,marginRight:3},children:[i(B,{variant:"h5",children:[o("img",{src:qe,width:40})," PokeHome"," ",i(S,{sx:{fontSize:14,color:j,display:{xs:"none",sm:"inline"}},children:[" ","\xA1Adoptalos Ya!"]})]}),o("div",{children:" "})]})});function Ve(){return o("div",{className:"App",children:i(Ce,{theme:Ae,children:[o(He,{}),o(We,{})]})})}ve.render(o(Se.StrictMode,{children:o(Ve,{})}),document.getElementById("root"));