(function(t){function s(s){for(var e,n,r=s[0],c=s[1],o=s[2],u=0,v=[];u<r.length;u++)n=r[u],Object.prototype.hasOwnProperty.call(i,n)&&i[n]&&v.push(i[n][0]),i[n]=0;for(e in c)Object.prototype.hasOwnProperty.call(c,e)&&(t[e]=c[e]);d&&d(s);while(v.length)v.shift()();return l.push.apply(l,o||[]),a()}function a(){for(var t,s=0;s<l.length;s++){for(var a=l[s],e=!0,n=1;n<a.length;n++){var c=a[n];0!==i[c]&&(e=!1)}e&&(l.splice(s--,1),t=r(r.s=a[0]))}return t}var e={},i={app:0},l=[];function n(t){return r.p+"js/"+({about:"about"}[t]||t)+"."+{about:"c1266353"}[t]+".js"}function r(s){if(e[s])return e[s].exports;var a=e[s]={i:s,l:!1,exports:{}};return t[s].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.e=function(t){var s=[],a=i[t];if(0!==a)if(a)s.push(a[2]);else{var e=new Promise((function(s,e){a=i[t]=[s,e]}));s.push(a[2]=e);var l,c=document.createElement("script");c.charset="utf-8",c.timeout=120,r.nc&&c.setAttribute("nonce",r.nc),c.src=n(t);var o=new Error;l=function(s){c.onerror=c.onload=null,clearTimeout(u);var a=i[t];if(0!==a){if(a){var e=s&&("load"===s.type?"missing":s.type),l=s&&s.target&&s.target.src;o.message="Loading chunk "+t+" failed.\n("+e+": "+l+")",o.name="ChunkLoadError",o.type=e,o.request=l,a[1](o)}i[t]=void 0}};var u=setTimeout((function(){l({type:"timeout",target:c})}),12e4);c.onerror=c.onload=l,document.head.appendChild(c)}return Promise.all(s)},r.m=t,r.c=e,r.d=function(t,s,a){r.o(t,s)||Object.defineProperty(t,s,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,s){if(1&s&&(t=r(t)),8&s)return t;if(4&s&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&s&&"string"!=typeof t)for(var e in t)r.d(a,e,function(s){return t[s]}.bind(null,e));return a},r.n=function(t){var s=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(s,"a",s),s},r.o=function(t,s){return Object.prototype.hasOwnProperty.call(t,s)},r.p="/",r.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=s,c=c.slice();for(var u=0;u<c.length;u++)s(c[u]);var d=o;l.push([0,"chunk-vendors"]),a()})({0:function(t,s,a){t.exports=a("56d7")},"56d7":function(t,s,a){"use strict";a.r(s);a("e260"),a("e6cf"),a("cca6"),a("a79d");var e,i,l=a("2b0e"),n=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{attrs:{id:"app"}},[a("MyNav"),a("div",{staticClass:"container"},[a("router-view")],1),a("MyFooter")],1)},r=[],c=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("nav",{staticClass:"navbar is-light",attrs:{role:"navigation","aria-label":"main navigation"}},[a("div",{staticClass:"navbar-brand"},[a("router-link",{staticClass:"navbar-item has-text-weight-bold is-size-3",attrs:{to:"/"}},[t._v(" FinnFit ")]),t._m(0)],1),a("div",{staticClass:"navbar-menu",attrs:{id:"navbarBasicExample"}},[a("div",{staticClass:"navbar-start"},[a("router-link",{staticClass:"navbar-item",attrs:{to:"/explore"}},[t._v("Explore")]),a("div",{staticClass:"navbar-item has-dropdown is-hoverable"},[a("a",{staticClass:"navbar-link"},[t._v(" More ")]),a("div",{staticClass:"navbar-dropdown"},[a("router-link",{staticClass:"navbar-item",attrs:{to:"/about"}},[t._v(" About ")]),a("a",{staticClass:"navbar-item"},[t._v(" Jobs ")]),a("a",{staticClass:"navbar-item"},[t._v(" Contact ")]),a("hr",{staticClass:"navbar-divider"}),a("a",{staticClass:"navbar-item"},[t._v(" Report an issue ")])],1)])],1),a("div",{staticClass:"navbar-end"},[a("div",{staticClass:"navbar-item"},[a("div",{staticClass:"buttons"},[a("router-link",{staticClass:"button is-info",attrs:{to:"/signup"}},[t._v(" Sign Up ")]),a("router-link",{staticClass:"button is-light",attrs:{to:"/login"}},[t._v(" Login ")])],1)])])])])},o=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("a",{staticClass:"navbar-burger",attrs:{role:"button","aria-label":"menu","aria-expanded":"false","data-target":"navbarBasicExample"}},[a("span",{attrs:{"aria-hidden":"true"}}),a("span",{attrs:{"aria-hidden":"true"}}),a("span",{attrs:{"aria-hidden":"true"}})])}],u={},d=u,v=a("2877"),p=Object(v["a"])(d,c,o,!1,null,null,null),m=p.exports,f=function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},C=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("footer",{staticClass:"footer"},[a("div",{staticClass:"content-footer has-text-centered"},[a("p",[a("strong",[t._v("FinnFit")]),t._v(" by "),a("a",{attrs:{href:"https://www.linkedin.com/in/jaredfinn"}},[t._v("Jared Finn")]),t._v(". The source code is licensed "),a("a",{attrs:{href:"https://www.newpaltz.edu/"}},[t._v("SUNY New Paltz")]),t._v(". The website content is licensed "),a("a",{attrs:{href:"http://creativecommons.org/licenses/by-nc-sa/4.0/"}},[t._v("CC BY NC SA 4.0")]),t._v(". ")])])])])}],h={},b=h,_=Object(v["a"])(b,f,C,!1,null,null,null),g=_.exports,y={components:{MyNav:m,MyFooter:g}},x=y,w=Object(v["a"])(x,n,r,!1,null,null,null),E=w.exports,k=(a("d3b7"),a("8c4f")),j=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"home"},[a("section",{staticClass:"hero is-info is-fullwidth"},[a("div",{staticClass:"hero-body"},[a("div",{staticClass:"container"},[a("p",{staticClass:"title has-text-centered"},[t._v(" Fit some Fitness in today. ")]),a("p",{staticClass:"subtitle has-text-centered"},[t._v(" Record and share your exercises! ")]),a("div",{staticClass:"columns is-inline-flex"},[a("div",{staticClass:"column"},[a("content-card")],1),a("div",{staticClass:"column"},[a("content-card")],1),a("div",{staticClass:"column"},[a("content-card")],1),a("div",{staticClass:"column"},[a("content-card")],1)])])]),a("NavFooter"),a("router-view")],1),a("TabContent")],1)},O=[],T=function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},$=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"card"},[a("div",{staticClass:"card-image"},[a("figure",{staticClass:"image is-4by3"},[a("img",{attrs:{src:"https://bulma.io/images/placeholders/1280x960.png",alt:"Placeholder image"}})])]),a("div",{staticClass:"card-content"},[a("div",{staticClass:"media"},[a("div",{staticClass:"media-left"},[a("figure",{staticClass:"image is-48x48"},[a("img",{staticClass:"is-rounded",attrs:{src:"https://bulma.io/images/placeholders/96x96.png",alt:"Placeholder image"}})])]),a("div",{staticClass:"media-content"},[a("p",{staticClass:"title is-4"},[t._v("John Smith")]),a("p",{staticClass:"subtitle is-6"},[t._v("@johnsmith")])])]),a("div",{staticClass:"content"},[t._v(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris. "),a("a",[t._v("@bulmaio")]),t._v(". "),a("a",{attrs:{href:"#"}},[t._v("#css")]),t._v(" "),a("a",{attrs:{href:"#"}},[t._v("#responsive")]),a("br"),a("time",{attrs:{datetime:"2016-1-1"}},[t._v("11:09 PM - 1 Jan 2016")])])])])}],S={},P=S,F=Object(v["a"])(P,T,$,!1,null,null,null),L=F.exports,J=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"hero-foot"},[a("nav",{staticClass:"tabs is-boxed is-fullwidth"},[a("div",{staticClass:"container"},[a("ul",t._l(t.tabs,(function(s){return a("li",{key:s.title,class:{"is-active":t.selectedTab===s.title},on:{click:function(a){return t.selectTab(s.title)}}},[a("a",{staticClass:"has-text-light",class:{"has-text-grey-dark":t.selectedTab===s.title}},[t._v(t._s(s.title))])])})),0)])])])},M=[],A={data:function(){return{tabs:[{title:"Feed"},{title:"DailyActivity"},{title:"Record"}],selectedTab:"Feed"}},methods:{selectTab:function(t){this.selectedTab=t}}},R=A,N=Object(v["a"])(R,J,M,!1,null,null,null),U=N.exports,H=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("tabs",[a("tab",[a("Feed"),a("Activity"),a("Record")],1)],1)],1)},z=[],D=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{attrs:{id:"user-content"}},[a("ol",{attrs:{id:"list"}},t._l(t.users,(function(s){return a("li",{key:s},[a("div",{staticClass:"box"},[a("article",{staticClass:"media has-background-light"},[t._m(0,!0),a("div",{staticClass:"media-content"},[a("div",{staticClass:"content"},[a("p",[a("strong",[t._v(t._s(s.name))]),t._v(" "),a("small",[t._v(t._s(s.account))]),t._v(" "),a("small",[t._v(t._s(s.lastTime))]),a("br"),t._v(" "+t._s(s.status)+" ")]),t._m(1,!0)]),t._m(2,!0)])])])])})),0)])},B=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"media-left"},[a("figure",{staticClass:"image is-64x64"},[a("i",{staticClass:"fas fa-user-astronaut fa-3x"})])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("figure",{staticClass:"image is-128x128"},[a("img",{attrs:{src:"https://bulma.io/images/placeholders/128x128.png"}})])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("nav",{staticClass:"level is-mobile"},[a("div",{staticClass:"level-left"},[a("a",{staticClass:"level-item",attrs:{"aria-label":"reply"}},[a("span",{staticClass:"icon is-small"},[a("i",{staticClass:"fas fa-heart",attrs:{"aria-hidden":"true"}})])]),a("a",{staticClass:"level-item",attrs:{"aria-label":"retweet"}},[a("span",{staticClass:"icon is-small"},[a("i",{staticClass:"fas fa-retweet",attrs:{"aria-hidden":"true"}})])]),a("a",{staticClass:"level-item",attrs:{"aria-label":"like"}},[a("span",{staticClass:"icon is-small"},[a("i",{staticClass:"fas fa-comment",attrs:{"aria-hidden":"true"}})])])])])}],G={data:function(){return{users:[{name:"Jared",account:"@jfinn1800",status:"Just ran 20 miles!! Whoe else??",lastTime:"30min"},{name:"Isabella",account:"@bella1234",status:"Good hike up lemon squeeze this morning",lastTime:"20min"},{name:"Leo",account:"@Leo5678",status:"@jfinn1800 one upped you with 25!",lastTime:"40min"},{name:"Luke",account:"@Luke0000",status:"Did nothing today, lazy day.",lastTime:"1hr"}]}}},W=G,q=(a("630b"),Object(v["a"])(W,D,B,!1,null,null,null)),Y=q.exports,I={},K=Object(v["a"])(I,e,i,!1,null,null,null),Q=K.exports,V=function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},X=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"feed"},[a("div",{staticClass:"progress-box"},[a("p",{staticClass:"progress-percent"},[t._v("60%")]),a("progress",{staticClass:"progress is-success",attrs:{value:"60",max:"100"}},[t._v("60%")])]),a("article",{staticClass:"panel is-primary"},[a("p",{staticClass:"panel-heading"},[t._v(" Primary ")]),a("p",{staticClass:"panel-tabs"},[a("a",{staticClass:"is-active"},[t._v("Run/Walk")]),a("a",[t._v("Swim")]),a("a",[t._v("Bike")]),a("a",[t._v("Gym")]),a("a",[t._v("Ski/Snowboard")])]),a("div",{staticClass:"field"},[a("label",{staticClass:"label-title"},[t._v("Title")]),a("div",{staticClass:"control"},[a("input",{staticClass:"input",attrs:{type:"text",placeholder:"Give your workout a name!"}})])]),a("div",{staticClass:"columns"},[a("div",{staticClass:"column is half"},[a("div",{staticClass:"field"},[a("label",{staticClass:"label"},[t._v("Distance")]),a("div",{staticClass:"control has-icons-left has-icons-right"},[a("input",{staticClass:"input",attrs:{type:"text",placeholder:"E.g. 4 miles"}}),a("span",{staticClass:"icon is-small is-left"},[a("i",{staticClass:"fas fa-user"})]),a("span",{staticClass:"icon is-small is-right"},[a("i",{staticClass:"fas fa-check"})])])])]),a("div",{staticClass:"column is half"},[a("div",{staticClass:"field"},[a("label",{staticClass:"label"},[t._v("Time")]),a("div",{staticClass:"control has-icons-left has-icons-right"},[a("input",{staticClass:"input",attrs:{type:"text",placeholder:"How long did it take?"}}),a("span",{staticClass:"icon is-small is-left"},[a("i",{staticClass:"fas fa-stopwatch"})])])])])]),a("div",{staticClass:"field"},[a("label",{staticClass:"label"},[t._v("Anyone Join?")]),a("div",{staticClass:"control has-icons-left has-icons-right"},[a("input",{staticClass:"input",attrs:{type:"text",placeholder:"Tag those that joined you!"}}),a("span",{staticClass:"icon is-small is-left"},[a("i",{staticClass:"fas fa-user"})]),a("span",{staticClass:"icon is-small is-right"},[a("i",{staticClass:"fas fa-check"})])])]),a("div",{staticClass:"field"},[a("label",{staticClass:"label"},[t._v("Difficulty")]),a("div",{staticClass:"control"},[a("div",{staticClass:"select"},[a("select",[a("option",[t._v("Select Option")]),a("option",[t._v("Too Easy")]),a("option",[t._v("Easy")]),a("option",[t._v("Just Right")]),a("option",[t._v("Hard")]),a("option",[t._v("Too Hard")]),a("option",[t._v("Recovery")])])])])]),a("div",{staticClass:"field"},[a("label",{staticClass:"label"},[t._v("Comment")]),a("div",{staticClass:"control"},[a("textarea",{staticClass:"textarea",attrs:{placeholder:"Share your experience!"}})])]),a("div",{staticClass:"field is-grouped"},[a("div",{staticClass:"control"},[a("button",{staticClass:"button is-link"},[t._v("Submit")])]),a("div",{staticClass:"control"},[a("button",{staticClass:"button is-link is-light"},[t._v("Cancel")])])])])])}],Z={},tt=Z,st=(a("ef72"),Object(v["a"])(tt,V,X,!1,null,null,null)),at=st.exports,et={components:{Feed:Y,Activity:Q,Record:at},data:function(){return{tabs:["Feed","Activity","Record"]}}},it=et,lt=Object(v["a"])(it,H,z,!1,null,null,null),nt=lt.exports,rt={name:"Home",components:{NavFooter:U,TabContent:nt,ContentCard:L}},ct=rt,ot=(a("cccb"),Object(v["a"])(ct,j,O,!1,null,null,null)),ut=ot.exports,dt=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("section",{staticClass:"hero is-small is-link"},[a("div",{staticClass:"hero-body"},[a("h1",{attrs:{id:"Login-name"}},[t._v("Login")]),a("form",{staticClass:"box"},[t._m(0),t._m(1),a("button",{staticClass:"button is-primary"},[t._v("Sign in")]),a("h3",{attrs:{id:"no-account"}},[t._v("Dont have an account? Sign Up here.")]),a("router-link",{staticClass:"button is-primary",attrs:{to:"/signup"}},[t._v(" Sign Up ")])],1)])])},vt=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"field"},[a("label",{staticClass:"label"},[t._v("Email")]),a("div",{staticClass:"control"},[a("input",{staticClass:"input",attrs:{type:"email",placeholder:"e.g. alex@example.com"}})])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"field"},[a("label",{staticClass:"label"},[t._v("Password")]),a("div",{staticClass:"control"},[a("input",{staticClass:"input",attrs:{type:"password",placeholder:"********"}})])])}],pt={},mt=pt,ft=Object(v["a"])(mt,dt,vt,!1,null,null,null),Ct=ft.exports,ht=function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},bt=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("section",{staticClass:"hero is-small is-link"},[a("div",{staticClass:"hero-body"},[a("h1",{attrs:{id:"Login-name"}},[t._v("Sign Up")]),a("form",{staticClass:"box"},[a("div",{staticClass:"field"},[a("label",{staticClass:"label"},[t._v("Email")]),a("div",{staticClass:"control"},[a("input",{staticClass:"input",attrs:{type:"email",placeholder:"e.g. alex@example.com"}})])]),a("div",{staticClass:"field"},[a("label",{staticClass:"label"},[t._v("Password")]),a("div",{staticClass:"control"},[a("input",{staticClass:"input",attrs:{type:"password",placeholder:"********"}})])]),a("div",{staticClass:"field"},[a("label",{staticClass:"label"},[t._v("Confirm Password")]),a("div",{staticClass:"control"},[a("input",{staticClass:"input",attrs:{type:"password",placeholder:"********"}})])]),a("div",{staticClass:"field"},[a("div",{staticClass:"columns"},[a("div",{staticClass:"column"},[a("label",{staticClass:"label"},[t._v("Height")]),a("div",{staticClass:"control"},[a("input",{staticClass:"input",attrs:{type:"height",placeholder:"Eg. 5'8\""}})])]),a("div",{staticClass:"column"},[a("label",{staticClass:"label"},[t._v("Weight")]),a("div",{staticClass:"control"},[a("input",{staticClass:"input",attrs:{type:"weight",placeholder:"Eg. 175"}})])])])]),a("button",{staticClass:"button is-primary"},[t._v("Sign Up")])])])])}],_t={},gt=_t,yt=Object(v["a"])(gt,ht,bt,!1,null,null,null),xt=yt.exports,wt=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div")},Et=[],kt={},jt=kt,Ot=Object(v["a"])(jt,wt,Et,!1,null,null,null),Tt=Ot.exports;l["a"].use(k["a"]);var $t=[{path:"/",name:"Home",component:ut},{path:"/login",name:"Login",component:Ct},{path:"/signup",name:"SignUp",component:xt},{path:"/explore",name:"Explore",component:Tt},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}}],St=new k["a"]({mode:"history",base:"/",routes:$t}),Pt=St;a("6597"),a("5abe"),a("15f5"),a("dc44");l["a"].config.productionTip=!1,new l["a"]({router:Pt,render:function(t){return t(E)}}).$mount("#app")},"59e0":function(t,s,a){},"5ced":function(t,s,a){},"630b":function(t,s,a){"use strict";a("59e0")},cccb:function(t,s,a){"use strict";a("5ced")},dc44:function(t,s,a){},ef72:function(t,s,a){"use strict";a("fefe")},fefe:function(t,s,a){}});
//# sourceMappingURL=app.b1e51c3b.js.map