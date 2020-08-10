(this["webpackJsonpmy-react-app"]=this["webpackJsonpmy-react-app"]||[]).push([[0],{17:function(e,t,a){e.exports=a.p+"static/media/morty.75509f2e.png"},18:function(e,t,a){e.exports=a.p+"static/media/space.a077b29f.jpg"},19:function(e,t,a){e.exports=a(30)},29:function(e,t,a){},30:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(15),r=a.n(c),m=a(6),i=a(9),s=a(1),o=function(){return fetch("https://rickandmortyapi.com/api/character/").then((function(e){return e.json()})).then((function(e){return e.results.map((function(e){return{image:e.image,name:e.name,species:e.species,status:e.status,location:e.location.name,episode:e.episode,id:e.id}}))}))},u=function(e){return console.log(e),l.a.createElement(l.a.Fragment,null,l.a.createElement("li",{className:"item"},l.a.createElement(m.b,{to:"/item/".concat(e.item.id)},l.a.createElement("div",{className:"imgContainer"},l.a.createElement("img",{className:"itemImg",src:e.item.image,alt:e.item.name,title:e.item.name})),l.a.createElement("h4",{className:"itemName"},e.item.name),l.a.createElement("p",{className:"itemSpecie"},e.item.species))))},E=function(e){var t=e.items.sort((function(e,t){return e.name.localeCompare(t.name)})).map((function(e){return l.a.createElement(u,{key:e.id,item:e})}));return 0===e.items.length?l.a.createElement("div",{className:"noCharacter"},l.a.createElement("p",null,"No hay ning\xfan personaje que coincida con la palabra:"),l.a.createElement("span",null,e.filterContent)):l.a.createElement("ul",{className:"itemsList"},t)},p=function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("form",{onSubmit:function(e){e.preventDefault()},className:"formFilter"},l.a.createElement("label",{htmlFor:"character"}," ENCUENTRA A A TU PERSONAJE FAVORITO "),l.a.createElement("input",{className:"inputFilter",type:"text",name:"character",id:"character",onChange:function(t){e.handleFilter(t.target.value)},handleFilter:e.handleFilter,placeholder:e.filterContent})))},f=function(e){return void 0===e.item?l.a.createElement(l.a.Fragment,null,l.a.createElement("section",{className:"bodyDetailII"},l.a.createElement(m.b,{to:"/item/:id"},l.a.createElement("div",{className:"detail"},l.a.createElement(m.b,{to:"/"},l.a.createElement("p",{className:"closeAlert"},"Volver")),l.a.createElement("p",null,"El personaje que buscas no existe "))))):l.a.createElement(l.a.Fragment,null,l.a.createElement("section",{className:"bodyDetail"},l.a.createElement(m.b,{to:"/item/:id",className:"linkDetail"},l.a.createElement("div",{className:"detail"},l.a.createElement("div",{className:"imgDetail"},l.a.createElement("img",{className:"imgDetailExact",src:e.item.image,alt:e.item.name,title:e.item.name})),l.a.createElement("ul",{className:"textDetail"},l.a.createElement("li",null,"Nombre: ",e.item.name),l.a.createElement("li",null,"Especie: ",e.item.species),l.a.createElement("li",null,"Planeta: ",e.item.location),l.a.createElement("li",null,"Vivo o muerto?: ",e.item.status,l.a.createElement("i",{className:"fas fa-skull-crossbones"})),l.a.createElement("li",null,"N\xfamero de Episodios en los que aparece:"," ",e.item.episode.length)),l.a.createElement(m.b,{to:"/"},l.a.createElement("p",{className:"Close"}," Volver"))))))},d=a(17),N=a.n(d),g=a(18),h=a.n(g),b=function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("button",{type:"button",onClick:function(t){e.reset(t)},className:"resetButton"},"Reset"))},v=function(){var e=Object(n.useState)([].sort()),t=Object(i.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(JSON.parse(localStorage.getItem("myValueLocalStorage"))||"Busca aqu\xed"),m=Object(i.a)(r,2),u=m[0],d=m[1],g=Object(n.useState)(!1),v=Object(i.a)(g,2),y=v[0],C=v[1];Object(n.useEffect)((function(){C(!0),o().then((function(e){c(e)})),C(!1)}),[]),Object(n.useEffect)((function(){localStorage.setItem("myValueLocalStorage",JSON.stringify(u))}));var F=a.filter((function(e){return e.name.toUpperCase().includes(u.toUpperCase())}));return l.a.createElement("div",{className:"main"},l.a.createElement(s.c,null,l.a.createElement(s.a,{exact:!0,path:"/"},l.a.createElement("div",{className:"title"},l.a.createElement("img",{src:N.a,alt:"Rick and Morty",title:"Rick and Morty",className:"titleImg"}),l.a.createElement("img",{src:h.a,alt:"morty",title:"morty",className:"titleImgII"})),l.a.createElement("div",{className:"filterContainer"},l.a.createElement(p,{handleFilter:function(e){d(e)},filterContent:u}),!0===y?"Cargando...":"",l.a.createElement(b,{reset:function(){d("Busca aqu\xed")}})),l.a.createElement(E,{items:F,filterContent:u})),l.a.createElement(s.a,{path:"/item/:id",render:function(e){var t=parseInt(e.match.params.id),n=a.find((function(e){return e.id===t}));return l.a.createElement(f,{item:n})}})))};a(29);r.a.render(l.a.createElement(m.a,null,l.a.createElement(v,null)),document.querySelector("#root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.94322974.chunk.js.map