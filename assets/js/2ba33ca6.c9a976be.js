"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[547],{876:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(2784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),c=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),d=a,g=u["".concat(o,".").concat(d)]||u[d]||m[d]||l;return n?r.createElement(g,i(i({ref:t},p),{},{components:n})):r.createElement(g,i({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=d;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<l;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6937:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>c,toc:()=>u});var r=n(7896),a=n(1461),l=(n(2784),n(876)),i=["components"],s={sidebar_position:4},o=void 0,c={unversionedId:"code-style-guide/angular/Templates",id:"code-style-guide/angular/Templates",title:"Templates",description:"Observables et souscriptions",source:"@site/docs/code-style-guide/angular/Templates.md",sourceDirName:"code-style-guide/angular",slug:"/code-style-guide/angular/Templates",permalink:"/veone-frontend-libs/docs/code-style-guide/angular/Templates",draft:!1,editUrl:"https://github.com/curedas-c/docs/code-style-guide/angular/Templates.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Architecture In depth",permalink:"/veone-frontend-libs/docs/code-style-guide/angular/Architecture In depth"},next:{title:"State-management",permalink:"/veone-frontend-libs/docs/code-style-guide/angular/State-management"}},p={},u=[{value:"Observables et souscriptions",id:"observables-et-souscriptions",level:2},{value:"S\xe9mantique et lisibilit\xe9",id:"s\xe9mantique-et-lisibilit\xe9",level:2},{value:"Code partag\xe9",id:"code-partag\xe9",level:2}],m={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"observables-et-souscriptions"},"Observables et souscriptions"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Les souscriptions doivent en prorit\xe9 \xeatre faites via le pipe ",(0,l.kt)("inlineCode",{parentName:"li"},"async"),", au travers d'un objet ",(0,l.kt)("inlineCode",{parentName:"li"},"state"),".")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="terminals-wrapper.component.ts"',title:'"terminals-wrapper.component.ts"'},'\n<section *ngIf="{\n    violations: violations$ | async,\n    terminals: terminals$ | async\n  } as State" class="terminals-wrapper">\n  \n</section>\n')),(0,l.kt)("h2",{id:"s\xe9mantique-et-lisibilit\xe9"},"S\xe9mantique et lisibilit\xe9"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Le code CSS doit respecter les sp\xe9cifications ",(0,l.kt)("a",{parentName:"li",href:"https://getbem.com/naming/"},"BEM"),", peux importe le framework CSS utilis\xe9."),(0,l.kt)("li",{parentName:"ul"},"Le code CSS des composants doit toujours \xeatre encapsul\xe9 dans un s\xe9lecteur ",(0,l.kt)("inlineCode",{parentName:"li"},":host"),", en veillant \xe0 utiliser des s\xe9lecteurs SASS.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scss",metastring:'title="terminals-wrapper.component.scss"',title:'"terminals-wrapper.component.scss"'},":host {\n  .terminals-wrapper {\n    &__list {\n      @apply grid grid-cols-3 gap-4;\n\n      &__item {\n        @apply p-2 rounded;\n      }\n    }\n  }\n}\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Le contenu des composants doit toujours \xeatre ",(0,l.kt)("strong",{parentName:"li"},"encapsul\xe9"),", c-a-d avoir un \xe9l\xe9ment qui englobe tout son contenu.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="terminals-wrapper.component.html"',title:'"terminals-wrapper.component.html"'},'<section class="terminals-wrapper">\n  \x3c!-- CONTENU ICI --\x3e\n</section>\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Le Html doit \xeatre s\xe9mantique, et doit \xe9viter les chevauchements pour maximiser la lisibbilit\xe9:")),(0,l.kt)("p",null,"Exemple de mauvais code:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<div class="row">\n  <div class="item">\n  </div>\n</div>\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<article class="magazine">\n  <article class="magazine__header">\n  </article>\n\n  <article class="magazine__body">\n  </article>\n</article>\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Ce qu'on pr\xe9f\xe8re:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<section class="row">\n  <div class="item">\n  </div>\n</section>\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<article class="magazine">\n  <header class="magazine__header">\n  </header>\n\n  <section class="magazine__body">\n  </section>\n</article>\n')),(0,l.kt)("h2",{id:"code-partag\xe9"},"Code partag\xe9"),(0,l.kt)("p",null,"Lorsque plusieurs composants partagent un m\xeame style, le code CSS doit \xeatre factoris\xe9, et figurer dans le fichier de styles partag\xe9s,\ng\xe9n\xe9ralement sous ",(0,l.kt)("inlineCode",{parentName:"p"},"themes/modules/_shared.scss"),";"))}d.isMDXComponent=!0}}]);