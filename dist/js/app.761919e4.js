(function(e){function t(t){for(var n,o,l=t[0],u=t[1],s=t[2],p=0,f=[];p<l.length;p++)o=l[p],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&f.push(r[o][0]),r[o]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);c&&c(t);while(f.length)f.shift()();return i.push.apply(i,s||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],n=!0,l=1;l<a.length;l++){var u=a[l];0!==r[u]&&(n=!1)}n&&(i.splice(t--,1),e=o(o.s=a[0]))}return e}var n={},r={app:0},i=[];function o(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=n,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(a,n,function(t){return e[t]}.bind(null,n));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var s=0;s<l.length;s++)t(l[s]);var c=u;i.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},4648:function(e,t,a){},"4e08":function(e,t,a){"use strict";a("4648")},"557e":function(e,t,a){"use strict";a("8aa7")},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("Header",{on:{search:this.searchMovies}}),a("Main",{attrs:{results:e.results}})],1)},i=[],o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"header d-flex p-2 justify-content-between align-items-center"},[e._m(0),a("div",{staticClass:"search-bar flex-grow-1 d-flex justify-content-end"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.inputText,expression:"inputText"}],staticClass:"p-1",attrs:{type:"search",name:"title",id:"title",placeholder:"Write title"},domProps:{value:e.inputText},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.$emit("search",e.inputText)},input:function(t){t.target.composing||(e.inputText=t.target.value)}}}),a("button",{on:{click:function(t){return e.$emit("search",e.inputText)}}},[a("i",{staticClass:"fas fa-search"})])])])},l=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"logo-container"},[n("img",{attrs:{src:a("f6b9"),alt:"Netflix Logo"}})])}],u={name:"Header",data:function(){return{inputText:""}}},s=u,c=(a("557e"),a("2877")),p=Object(c["a"])(s,o,l,!1,null,"513ef2ec",null),f=p.exports,d=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container-fluid pt-5 pb-5 d-flex flex-column main"},[e._v(" ORIGINALI NETFLIX "),a("div",{staticClass:"row pt-5 g-2 flex-wrap align-items-center justify-content-around"},e._l(e.results,(function(e,t){return a("Movie",{key:t,attrs:{result:e}})})),1)])},g=[],v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"movie col-3"},[n("img",{staticClass:"poster",attrs:{src:a("90ab"),alt:"Placeholder"}}),n("div",{staticClass:"movie-info"},[e._v(" Titolo: "+e._s(e.title)+" "),n("br"),e._v(" Titolo originale: "+e._s(e.ogTitle)+" "),n("br"),e._v(" Lingua originale: "),n("div",{staticClass:"flag-container"},[n("flag",{attrs:{iso:e.getFlag(),squared:!1}})],1),n("br"),e._v(" Voto: "+e._s(e.rating)+" ")])])},h=[],m={name:"Movie",props:{result:Object},data:function(){return{flag:"https://www.countryflagicons.com/FLAT/24/".concat(this.result.original_language.toUpperCase(),".png")}},computed:{title:function(){return this.result.title},ogTitle:function(){return this.result.original_title},ogLanguage:function(){return this.result.original_language},rating:function(){return this.result.vote_average}},methods:{getFlag:function(){switch(this.ogLanguage){case"en":return"us";case"uk":return"gb";case"ja":return"jp";case"ko":return"sd";default:return this.ogLanguage}}}},_=m,b=(a("9a25"),Object(c["a"])(_,v,h,!1,null,"09df6076",null)),y=b.exports,x={name:"Main",components:{Movie:y},props:{results:Array},computed:{title:function(){return this.title},ogTitle:function(){return this.original_title},ogLanguage:function(){return this.original_language},rating:function(){return this.vote_average}}},j=x,w=(a("4e08"),Object(c["a"])(j,d,g,!1,null,"6bd8d86c",null)),M=w.exports,k=a("bc3a"),I=a.n(k),T={name:"App",components:{Header:f,Main:M},data:function(){return{results:[{adult:!1,backdrop_path:"/3lbTiIN8cVonMUQwaeh5nvn61lr.jpg",genre_ids:[12,35,878,10751],id:105,original_language:"en",original_title:"Back to the Future",overview:"Marty McFly è stato catapultato per errore nel 1955, grazie alla macchina del tempo ideata dal suo amico scienziato Doc. Non avendo più \"carburante\" per poter tornare nel futuro si rivolge alla versione più giovane di Doc, che nonostante l'incredulità iniziale si farà in quattro per aiutarlo. Ma nel 1955 non è solo Doc ad essere più giovane, Marty infatti si imbatte casualmente nei suoi genitori, all'epoca teenager, ma l'incontro aggiungerà altri problemi.",popularity:55.567,poster_path:"/6NfLuSGpJiwjdYC7j5AxbAcV6Qf.jpg",release_date:"1985-07-03",title:"Ritorno al futuro",video:!1,vote_average:8.3,vote_count:15239},{adult:!1,backdrop_path:"/a4qvbI9x3nqu3hKQyDRVVBpMklx.jpg",genre_ids:[12,35,10751,878],id:165,original_language:"en",original_title:"Back to the Future Part II",overview:"Il film comincia dove terminava il primo capitolo, ovvero con Marty e Jennifer che partono insieme allo scienziato Doc, inventore della macchina del tempo, per il 2015 allo scopo di evitare che il futuro dei loro figli possa essere in pericolo. Ma la situazione precipita e ad essere in pericolo non è più il futuro, ma il passato. Marty dovrà tornare nuovamente nel 1955 e...",popularity:25.706,poster_path:"/pqWQIGt8MXcaikTjy9Zm5zwdAiW.jpg",release_date:"1989-11-22",title:"Ritorno al futuro - Parte II",video:!1,vote_average:7.7,vote_count:9755},{adult:!1,backdrop_path:"/igaRMweCynEGoS6w4Rsim7JPnKu.jpg",genre_ids:[12,35,878],id:196,original_language:"en",original_title:"Back to the Future Part III",overview:"Per questa terza, conclusiva, puntata della trilogia, Marty McFly è costretto a tornare indietro nel tempo fino al 1885 per salvare Doc, che vi era stato catapultato al termine del secondo capitolo. Questa volta tornare nel futuro sarà ancora più difficile.",popularity:23.183,poster_path:"/hk6pClhh6zgjWSZHXSr2NkKLamQ.jpg",release_date:"1990-05-25",title:"Ritorno al futuro - Parte III",video:!1,vote_average:7.4,vote_count:7876}]}},methods:{searchMovies:function(e){var t=this;I.a.get("https://api.themoviedb.org/3/search/movie?api_key=b17e169f5966a7d3788729bd757a6a93&query="+e.toLowerCase()).then((function(e){t.results=e.data.results}))}}},O=T,C=(a("5c0b"),Object(c["a"])(O,r,i,!1,null,null,null)),P=C.exports,L=(a("7b17"),a("ab8b"),a("15f5"),a("7051"),a("d61f"));I.a.get("/user?ID=12345"),n["a"].use(L["a"]),n["a"].config.productionTip=!1,new n["a"]({render:function(e){return e(P)}}).$mount("#app")},"5c0b":function(e,t,a){"use strict";a("9c0c")},"8aa7":function(e,t,a){},"90ab":function(e,t,a){e.exports=a.p+"img/placeholder.a04a0209.jpg"},"9a25":function(e,t,a){"use strict";a("a2a3")},"9c0c":function(e,t,a){},a2a3:function(e,t,a){},f6b9:function(e,t,a){e.exports=a.p+"img/Netflix_Logo_RGB.8562b656.png"}});
//# sourceMappingURL=app.761919e4.js.map