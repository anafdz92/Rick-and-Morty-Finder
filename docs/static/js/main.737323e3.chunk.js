(this["webpackJsonpmy-react-app"]=this["webpackJsonpmy-react-app"]||[]).push([[0],{17:function(e,t,a){e.exports=a.p+"static/media/morty.75509f2e.png"},18:function(e,t,a){e.exports=a.p+"static/media/space.a077b29f.jpg"},19:function(e,t,a){e.exports=a(30)},29:function(e,t,a){},30:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(15),l=a.n(r),c=a(7),m=a(9),s=a(1),o=function(){return fetch("https://rickandmortyapi.com/api/character/").then((function(e){return e.json()})).then((function(e){return e.results.map((function(e){return{image:e.image,name:e.name,species:e.species,status:e.status,location:e.location.name,episode:e.episode,id:e.id}}))}))},u=a(3),p=a.n(u);p.a.shape({image:p.a.string.isRequired,name:p.a.string.isRequired,species:p.a.string.isRequired});var E=function(e){return console.log(e),i.a.createElement(i.a.Fragment,null,i.a.createElement("li",{className:"item"},i.a.createElement(c.b,{to:"/item/".concat(e.item.id)},i.a.createElement("div",{className:"imgContainer"},i.a.createElement("img",{className:"itemImg",src:e.item.image,alt:e.item.name,title:e.item.name})),i.a.createElement("h4",{className:"itemName"},e.item.name),i.a.createElement("p",{className:"itemSpecie"},e.item.species))))},d=function(e){var t=e.items.sort((function(e,t){return e.name.localeCompare(t.name)})).map((function(e){return i.a.createElement(E,{key:e.id,item:e})}));return 0===e.items.length?i.a.createElement("div",{className:"noCharacter"},i.a.createElement("p",null,"No hay ning\xfan personaje que coincida con la palabra:"),i.a.createElement("span",null,e.filterContent)):i.a.createElement("ul",{className:"itemsList"},t)},f=function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement("form",{onSubmit:function(e){e.preventDefault()},className:"formFilter"},i.a.createElement("label",{htmlFor:"character"}," ENCUENTRA A A TU PERSONAJE FAVORITO "),i.a.createElement("input",{className:"inputFilter",type:"text",name:"character",id:"character",onChange:function(t){e.handleFilter(t.target.value)},handleFilter:e.handleFilter,placeholder:"Busca aqu\xed",value:e.filterContent})))};p.a.shape({image:p.a.string.isRequired,name:p.a.string.isRequired,species:p.a.string.isRequired,location:p.a.string.isRequired,episode:p.a.string.isRequired});var g=function(e){if(void 0===e.item)return i.a.createElement(i.a.Fragment,null,i.a.createElement("section",{className:"bodyDetailII"},i.a.createElement(c.b,{to:"/item/:id"},i.a.createElement("div",{className:"detail"},i.a.createElement(c.b,{to:"/"},i.a.createElement("p",{className:"closeAlert"},"Volver")),i.a.createElement("p",null,"El personaje que buscas no existe ")))));var t="",a="";return"Dead"===e.item.status&&(t="fas fa-skull-crossbones"),"Human"===e.item.species?a="far fa-user-circle":"Alien"===e.item.species&&(a="fab fa-reddit-alien"),i.a.createElement(i.a.Fragment,null,i.a.createElement("section",{className:"bodyDetail"},i.a.createElement(c.b,{to:"/item/:id",className:"linkDetail"},i.a.createElement("div",{className:"detail"},i.a.createElement("div",{className:"imgDetail"},i.a.createElement("img",{className:"imgDetailExact",src:e.item.image,alt:e.item.name,title:e.item.name})),i.a.createElement("ul",{className:"textDetail"},i.a.createElement("li",null,"Nombre: ",e.item.name),i.a.createElement("li",null,"Especie: ",e.item.species,i.a.createElement("i",{className:a})),i.a.createElement("li",null,"Planeta: ",e.item.location),i.a.createElement("li",null,"Vivo o muerto?: ",e.item.status,i.a.createElement("i",{className:t})),i.a.createElement("li",null,"N\xfamero de Episodios en los que aparece:"," ",e.item.episode.length)),i.a.createElement(c.b,{to:"/"},i.a.createElement("p",{className:"Close"}," Volver"))))))},N=a(17),h=a.n(N),b=a(18),v=a.n(b),y=function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement("button",{type:"button",onClick:function(t){e.reset(t)},className:"resetButton"},"Reset"))},C=function(){var e=Object(n.useState)([].sort()),t=Object(m.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)(JSON.parse(localStorage.getItem("myValueLocalStorage"))||""),c=Object(m.a)(l,2),u=c[0],p=c[1],E=Object(n.useState)(!1),N=Object(m.a)(E,2),b=N[0],C=N[1];Object(n.useEffect)((function(){C(!0),o().then((function(e){r(e)})),C(!1)}),[]),Object(n.useEffect)((function(){localStorage.setItem("myValueLocalStorage",JSON.stringify(u))}));var R=a.filter((function(e){return e.name.toUpperCase().includes(u.toUpperCase())}));return i.a.createElement("div",{className:"main"},i.a.createElement(s.c,null,i.a.createElement(s.a,{exact:!0,path:"/"},i.a.createElement("div",{className:"title"},i.a.createElement("img",{src:h.a,alt:"Rick and Morty",title:"Rick and Morty",className:"titleImg"}),i.a.createElement("img",{src:v.a,alt:"morty",title:"morty",className:"titleImgII"})),i.a.createElement("div",{className:"filterContainer"},i.a.createElement(f,{handleFilter:function(e){p(e)},filterContent:u}),!0===b?"Cargando...":"",i.a.createElement(y,{reset:function(){p("")}})),i.a.createElement(d,{items:R,filterContent:u})),i.a.createElement(s.a,{path:"/item/:id",render:function(e){var t=parseInt(e.match.params.id),n=a.find((function(e){return e.id===t}));return i.a.createElement(g,{item:n})}})))};a(29);l.a.render(i.a.createElement(c.a,null,i.a.createElement(C,null)),document.querySelector("#root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.737323e3.chunk.js.map