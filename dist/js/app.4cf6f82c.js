(function(e){function t(t){for(var r,o,c=t[0],i=t[1],s=t[2],l=0,d=[];l<c.length;l++)o=c[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);f&&f(t);while(d.length)d.shift()();return u.push.apply(u,s||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,o=1;o<n.length;o++){var c=n[o];0!==a[c]&&(r=!1)}r&&(u.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},a={app:0},u=[];function c(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-79034008":"d0e83e65","chunk-ffed3b20":"6fb71bb8"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-79034008":1,"chunk-ffed3b20":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-79034008":"931ab5d0","chunk-ffed3b20":"15fe71e0"}[e]+".css",a=i.p+r,u=document.getElementsByTagName("link"),c=0;c<u.length;c++){var s=u[c],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===a))return t()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){s=d[c],l=s.getAttribute("data-href");if(l===r||l===a)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||a,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete o[e],f.parentNode.removeChild(f),n(u)},f.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var u=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=u);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=c(e);var d=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",d.name="ChunkLoadError",d.type=r,d.request=o,n[1](d)}a[e]=void 0}};var f=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var f=l;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"2ddf":function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n("7fc3"),o=n.n(r),a=(n("081a"),o.a.initializeApp({apiKey:"AIzaSyCO7bN7m6O5j6wu7Za4z399yL-n_ircPeM",authDomain:"crud-vue-e79ea.firebaseapp.com",databaseURL:"https://crud-vue-e79ea.firebaseio.com",projectId:"crud-vue-e79ea",storageBucket:"crud-vue-e79ea.appspot.com",messagingSenderId:"370138843956",appId:"1:370138843956:web:7d79fcdf451cebb27af361"}).firestore()),u=a.collection("posts")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v(" | "),n("router-link",{attrs:{to:"/create"}},[e._v("Add shoe")])],1),n("router-view")],1)},a=[],u=(n("034f"),n("2877")),c={},i=Object(u["a"])(c,o,a,!1,null,null,null),s=i.exports,l=(n("d3b7"),n("8c4f")),d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("h1",[e._v("Shoe collection")]),n("post-lists")],1)},f=[],p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"grid-container"},e._l(e.posts,(function(t){return n("article",{key:t.id},[n("div",[n("img",{attrs:{src:t.img,alt:""}}),n("p",[e._v(e._s(t.description))])]),n("div",[n("router-link",{attrs:{to:{name:"Update",params:{post:t}}}},[n("button",[e._v("Update")])]),n("button",{attrs:{type:"button"},on:{click:function(n){return e.sletPost(t.id)}}},[e._v("Delete")])],1)])})),0)},h=[],m=n("2ddf"),v={data:function(){return{posts:[]}},methods:{sletPost:function(e){m["a"].doc(e).delete()}},firestore:{posts:m["a"]}},b=v,g=Object(u["a"])(b,p,h,!1,null,"fb0c1b2a",null),y=g.exports,_={name:"Home",components:{PostLists:y}},k=_,w=(n("cccb"),Object(u["a"])(k,d,f,!1,null,null,null)),O=w.exports;r["a"].use(l["a"]);var j=[{path:"/",name:"Home",component:O},{path:"/create",name:"Create",component:function(){return n.e("chunk-ffed3b20").then(n.bind(null,"d879"))}},{path:"/update",name:"Update",component:function(){return n.e("chunk-79034008").then(n.bind(null,"2e8c"))},props:!0}],P=new l["a"]({mode:"history",base:"/",routes:j}),E=P,S=n("d848");r["a"].use(S["a"]),r["a"].config.productionTip=!1,new r["a"]({router:E,render:function(e){return e(s)}}).$mount("#app")},"5ced":function(e,t,n){},"85ec":function(e,t,n){},cccb:function(e,t,n){"use strict";n("5ced")}});
//# sourceMappingURL=app.4cf6f82c.js.map