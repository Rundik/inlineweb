(function(e){function t(t){for(var n,a,i=t[0],c=t[1],u=t[2],l=0,d=[];l<i.length;l++)a=i[l],o[a]&&d.push(o[a][0]),o[a]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);p&&p(t);while(d.length)d.shift()();return s.push.apply(s,u||[]),r()}function r(){for(var e,t=0;t<s.length;t++){for(var r=s[t],n=!0,a=1;a<r.length;a++){var i=r[a];0!==o[i]&&(n=!1)}n&&(s.splice(t--,1),e=c(c.s=r[0]))}return e}var n={},a={app:0},o={app:0},s=[];function i(e){return c.p+"js/"+({editor:"editor"}[e]||e)+"."+{editor:"146f50d0"}[e]+".js"}function c(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.e=function(e){var t=[],r={editor:1};a[e]?t.push(a[e]):0!==a[e]&&r[e]&&t.push(a[e]=new Promise(function(t,r){for(var n="css/"+({editor:"editor"}[e]||e)+"."+{editor:"bb836a9a"}[e]+".css",o=c.p+n,s=document.getElementsByTagName("link"),i=0;i<s.length;i++){var u=s[i],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===n||l===o))return t()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){u=d[i],l=u.getAttribute("data-href");if(l===n||l===o)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var n=t&&t.target&&t.target.src||o,s=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");s.request=n,delete a[e],p.parentNode.removeChild(p),r(s)},p.href=o;var m=document.getElementsByTagName("head")[0];m.appendChild(p)}).then(function(){a[e]=0}));var n=o[e];if(0!==n)if(n)t.push(n[2]);else{var s=new Promise(function(t,r){n=o[e]=[t,r]});t.push(n[2]=s);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=i(e),u=function(t){l.onerror=l.onload=null,clearTimeout(d);var r=o[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src,s=new Error("Loading chunk "+e+" failed.\n("+n+": "+a+")");s.type=n,s.request=a,r[1](s)}o[e]=void 0}};var d=setTimeout(function(){u({type:"timeout",target:l})},12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=n,c.d=function(e,t,r){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(r,n,function(t){return e[t]}.bind(null,n));return r},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var p=l;s.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"0a83":function(e,t,r){"use strict";var n=r("fedb"),a=r.n(n);a.a},"2ade":function(e,t,r){"use strict";r("96cf");var n=r("1da1"),a=(r("cadf"),r("551c"),r("097d"),r("c0d6")),o="http://localhost:8000/";t["a"]=function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(t){var r,n,s=arguments;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=s.length>1&&void 0!==s[1]?s[1]:"GET",n=s.length>2?s[2]:void 0,e.next=4,fetch(o+t,{method:r,body:JSON.stringify(n),headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(a["a"].state.token)}});case 4:return e.next=6,e.sent.json();case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},"3b8b":function(e,t,r){},"41cb":function(e,t,r){"use strict";r("cadf"),r("551c"),r("097d");var n=r("2b0e"),a=r("8c4f"),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[r("section",{staticClass:"home"},[r("projects")],1)])},s=[],i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"wrapper"},[r("div",{staticClass:"projects"},e._l(e.projects.data,function(t,n){return r("project",{key:n,attrs:{title:t.title,img:"https://via.placeholder.com/390x250?text="+t.title,date:e._f("eurodate")(t.created_at),author:t.user.name,uuid:t.uuid}})}),1),r("paginate",{attrs:{"page-count":e.projects.last_page||0,"click-handler":e.getProjects,"page-range":4,"prev-text":"Prev","next-text":"Next","container-class":"paginate"}})],1)},c=[],u=(r("96cf"),r("1da1")),l=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("router-link",{staticClass:"project",style:e.projectBg,attrs:{tag:"a",to:e.projectUrl}},[r("div",{staticClass:"text"},[r("div",{staticClass:"top"},[e._v(e._s(e._f("truncate")(e.title,34)))]),r("div",{staticClass:"bottom"},[e._v(e._s(e.author)+" • "),r("span",{staticClass:"date"},[e._v(e._s(e.date))])])])])},d=[],p={name:"project",props:["img","title","date","author","uuid"],computed:{projectBg:function(){return{backgroundImage:"url('".concat(this.img,"')")}},projectUrl:function(){return"/editor/".concat(this.uuid)}}},m=p,f=(r("c3b4"),r("2877")),v=Object(f["a"])(m,l,d,!1,null,"df040eec",null);v.options.__file="ProjectPreview.vue";var h=v.exports,g=r("2ade"),b={name:"projects",props:["user_id"],data:function(){return{projects:[]}},components:{project:h},methods:{getProjects:function(){var e=Object(u["a"])(regeneratorRuntime.mark(function e(t){var r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(g["a"])("api/projects/?page="+t);case 2:r=e.sent,this.projects=r;case 4:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}()},mounted:function(){this.getProjects(1)}},_=b,w=(r("a29c"),Object(f["a"])(_,i,c,!1,null,"68e641c6",null));w.options.__file="Projects.vue";var j=w.exports,x={name:"home",components:{Projects:j}},y=x,k=(r("a5bd"),Object(f["a"])(y,o,s,!1,null,"a2df584c",null));k.options.__file="Home.vue";var C=k.exports,O=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[r("custom-form",{attrs:{inputs:e.inputs,button:"Log In",link:e.link},on:{submit:e.formSubmit}})],1)},E=[],P=(r("7f7f"),r("ac6a"),function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[r("form",{on:{submit:function(t){return t.preventDefault(),e.formSubmit(t)}}},[r("div",{staticClass:"form-item"},[e.formError?r("div",{staticClass:"error"},[e._v(e._s(e.formError))]):e._e()]),e._l(e.inputs,function(t){return r("div",{key:t.name,staticClass:"form-item"},[r("label",{class:{warning:e.errors.has(t.name)},attrs:{for:t.name}},[e._v("\n        "+e._s(e._f("capitalize")(t.placeholder||t.name))+"\n      ")]),"checkbox"===t.type?r("input",{directives:[{name:"model",rawName:"v-model",value:t.model,expression:"input.model"},{name:"validate",rawName:"v-validate",value:t.validation,expression:"input.validation"}],ref:t.name,refInFor:!0,class:{warning:e.errors.has(t.name)},attrs:{name:t.name,placeholder:e._f("capitalize")(t.placeholder||t.name),"data-vv-as":t.vvas,type:"checkbox"},domProps:{checked:Array.isArray(t.model)?e._i(t.model,null)>-1:t.model},on:{change:function(r){var n=t.model,a=r.target,o=!!a.checked;if(Array.isArray(n)){var s=null,i=e._i(n,s);a.checked?i<0&&e.$set(t,"model",n.concat([s])):i>-1&&e.$set(t,"model",n.slice(0,i).concat(n.slice(i+1)))}else e.$set(t,"model",o)}}}):"radio"===t.type?r("input",{directives:[{name:"model",rawName:"v-model",value:t.model,expression:"input.model"},{name:"validate",rawName:"v-validate",value:t.validation,expression:"input.validation"}],ref:t.name,refInFor:!0,class:{warning:e.errors.has(t.name)},attrs:{name:t.name,placeholder:e._f("capitalize")(t.placeholder||t.name),"data-vv-as":t.vvas,type:"radio"},domProps:{checked:e._q(t.model,null)},on:{change:function(r){e.$set(t,"model",null)}}}):r("input",{directives:[{name:"model",rawName:"v-model",value:t.model,expression:"input.model"},{name:"validate",rawName:"v-validate",value:t.validation,expression:"input.validation"}],ref:t.name,refInFor:!0,class:{warning:e.errors.has(t.name)},attrs:{name:t.name,placeholder:e._f("capitalize")(t.placeholder||t.name),"data-vv-as":t.vvas,type:t.type},domProps:{value:t.model},on:{input:function(r){r.target.composing||e.$set(t,"model",r.target.value)}}}),r("div",{staticClass:"error"},[e._v(e._s(e.errors.first(t.name)))])])}),r("div",{staticClass:"form-item with-margin"},[r("button",{attrs:{type:"submit",disabled:e.errors.all().length>0}},[e._v("\n        "+e._s(e.button)+"\n      ")]),e.link?r("a",{attrs:{href:"#"}},[e._v(e._s(e.link.text))]):e._e()])],2)])}),S=[],T=r("81f6"),R={name:"register",props:{inputs:Array,button:String,link:Object},data:function(){return{formError:""}},methods:{formSubmit:function(){var e=this;this.formError="",this.$validator.validateAll().then(function(t){t&&(console.log(t),e.$emit("submit",e.inputs))})}},created:function(){var e=this;T["a"].$on("form-error",function(t){e.formError=t})}},U=R,A=(r("44bb"),Object(f["a"])(U,P,S,!1,null,"a4c55daa",null));A.options.__file="Form.vue";var N=A.exports,I={name:"login",components:{"custom-form":N},data:function(){return{inputs:[{name:"email",type:"text",validation:"required|email|min:3|max:15",model:""},{name:"password",type:"password",validation:"required|min:6|max:25",model:""}],link:{text:"Forgot password?"},error:"test"}},methods:{formSubmit:function(){var e=Object(u["a"])(regeneratorRuntime.mark(function e(t){var r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:r={},t.forEach(function(e){r[e.name]=e.model,e.model=""}),this.$store.dispatch("login",{email:r.email,password:r.password});case 3:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}()}},q=I,z=Object(f["a"])(q,O,E,!1,null,null,null);z.options.__file="Login.vue";var L=z.exports,B=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[r("custom-form",{attrs:{inputs:e.inputs,button:"Register"},on:{submit:e.formSubmit}})],1)},H=[],M={name:"register",components:{"custom-form":N},data:function(){return{inputs:[{name:"email",type:"email",validation:"required|email",model:""},{name:"login",type:"text",validation:"required|alpha_dash|min:3|max:15",model:""},{name:"password",type:"password",validation:"required|min:6|max:25",model:""},{name:"password2",placeholder:"Confirm password",type:"password",validation:"required|confirmed:password",vvas:"password",model:""}]}},methods:{formSubmit:function(e){var t={};e.forEach(function(e){t[e.name]=e.model,e.model=""}),this.$store.dispatch("register",{email:t.email,name:t.login,password:t.password})}}},F=M,J=Object(f["a"])(F,B,H,!1,null,null,null);J.options.__file="Register.vue";var D=J.exports,G=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[e.user?r("div",{staticClass:"user"},[r("div",{staticClass:"avatar",domProps:{innerHTML:e._s(e.avatar)}}),r("div",{staticClass:"text"},[r("div",{staticClass:"username"},[e._v("\n        "+e._s(e.user.name)+"\n      ")]),r("div",{staticClass:"created"},[e._v("\n        Registration date: "+e._s(e._f("eurodate")(this.user.created_at))+"\n      ")]),r("div",{staticClass:"projects"},[e._v("This user has 1 project")])]),e.userId?e._e():r("a",{staticClass:"logout",on:{click:e.logout}},[e._v("Logout")])]):e._e(),r("projects")],1)},K=[],Q=r("5934"),V=r.n(Q),W={name:"user",components:{Projects:j},computed:{user:function(){return this.$store.state.user},userId:function(){return this.$route.params.id},avatar:function(){return V.a.toSvg(this.user.name,200)}},mounted:function(){this.user||this.userId||this.route.push("/")},methods:{logout:function(){this.$store.dispatch("logout")}}},X=W,Y=(r("0a83"),Object(f["a"])(X,G,K,!1,null,"8e35d2bc",null));Y.options.__file="User.vue";var Z=Y.exports,$=r("c0d6");n["a"].use(a["a"]);var ee=function(e,t,r){$["a"].state.user?r("/"):r()};t["a"]=new a["a"]({mode:"history",routes:[{path:"/",name:"home",component:C},{path:"/login",name:"login",component:L,beforeEnter:ee},{path:"/register",name:"register",component:D,beforeEnter:ee},{path:"/user/:id?",name:"user",component:Z},{path:"/editor/:id?",name:"editor",component:function(){return r.e("editor").then(r.bind(null,"49d7"))}}]})},"44bb":function(e,t,r){"use strict";var n=r("3b8b"),a=r.n(n);a.a},"56d7":function(e,t,r){"use strict";r.r(t);r("28a5"),r("6b54"),r("cadf"),r("551c"),r("097d");var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("Header"),r("router-view"),r("Error")],1)},o=[],s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("header",{attrs:{id:"header"}},[r("div",{staticClass:"left"},[r("router-link",{staticClass:"logo",attrs:{to:"/"}},[e._v("logo")])],1),r("div",{staticClass:"right"},[e.user?r("div",{staticClass:"authorized"},[r("router-link",{staticClass:"profile",attrs:{to:"/user"}},[r("span",{staticClass:"avatar",domProps:{innerHTML:e._s(e.avatar)}}),r("div",{staticClass:"text"},[e._v(e._s(e.user.name))])])],1):r("div",{staticClass:"unauthorized"},[r("router-link",{staticClass:"btn",attrs:{to:"login"}},[e._v("Log In")]),r("router-link",{staticClass:"btn focus",attrs:{to:"register"}},[e._v("Register")])],1)])])},i=[],c=(r("7f7f"),r("5934")),u=r.n(c),l={computed:{user:function(){return this.$store.state.user},avatar:function(){return u.a.toSvg(this.user.name,35)}}},d=l,p=(r("a592"),r("2877")),m=Object(p["a"])(d,s,i,!1,null,"34d9850f",null);m.options.__file="Header.vue";var f=m.exports,v=function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.visible?r("div",{staticClass:"error-msg"},[r("span",{staticClass:"brief"},[e._v(e._s(e.brief)+": ")]),r("span",{staticClass:"message"},[e._v(e._s(e.message))]),r("div",{staticClass:"close",on:{click:function(t){e.visible=!1}}})]):e._e()},h=[],g=r("81f6"),b={name:"error",data:function(){return{visible:!1,brief:"",message:""}},created:function(){var e=this;g["a"].$on("error",function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Error",r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Undefined error occurred";e.brief=t,e.message=r,e.visible=!0;var n=e;setTimeout(function(){n.visible=!1},7e3)})}},_=b,w=(r("dc94"),Object(p["a"])(_,v,h,!1,null,"88930782",null));w.options.__file="Error.vue";var j=w.exports;r("b5bf");var x={components:{Header:f,Error:j},created:function(){this.$store.state.token&&this.$store.dispatch("getUser")}},y=x,k=(r("5c0b"),Object(p["a"])(y,a,o,!1,null,null,null));k.options.__file="App.vue";var C=k.exports,O=r("41cb"),E=r("c0d6"),P=r("ce04"),S=r.n(P),T=r("8832"),R=r.n(T),U=r("7bb1");n["a"].use(S.a),n["a"].component("paginate",R.a),n["a"].use(U["a"]),n["a"].filter("capitalize",function(e){return e?(e=e.toString(),e.charAt(0).toUpperCase()+e.slice(1)):""}),n["a"].filter("eurodate",function(e){return e?(e=e.toString(),e.split(" ")[0].split("-").reverse().join(".")):""}),n["a"].config.productionTip=!1,new n["a"]({router:O["a"],store:E["a"],render:function(e){return e(C)}}).$mount("#app")},"5c0b":function(e,t,r){"use strict";var n=r("5e27"),a=r.n(n);a.a},"5e27":function(e,t,r){},"81f6":function(e,t,r){"use strict";r.d(t,"a",function(){return a});var n=r("2b0e"),a=new n["a"]},8517:function(e,t,r){},"86fc":function(e,t,r){},"8e2f":function(e,t,r){},a29c:function(e,t,r){"use strict";var n=r("86fc"),a=r.n(n);a.a},a592:function(e,t,r){"use strict";var n=r("8e2f"),a=r.n(n);a.a},a5bd:function(e,t,r){"use strict";var n=r("fef5"),a=r.n(n);a.a},c0d6:function(e,t,r){"use strict";r("ac6a"),r("8615"),r("7f7f"),r("96cf");var n=r("1da1"),a=r("2b0e"),o=r("2f62"),s=r("a768"),i=r.n(s),c=r("81f6"),u=r("41cb"),l=r("2ade");a["a"].use(o["a"]),t["a"]=new o["a"].Store({plugins:[i()({namespace:"v0.0.1",initialState:{token:""},expires:6048e5})],state:{},mutations:{setToken:function(e,t){e.token=t},setUser:function(e,t){e.user=t},removeUserData:function(e){e.token=null,e.user=null,u["a"].push("/")}},actions:{login:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(t,r){var n,a,o,s,i;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,a=t.dispatch,o=r.email,s=r.password,e.next=4,Object(l["a"])("api/auth/login","POST",{email:o,password:s});case 4:i=e.sent.access_token,i?(n("setToken",i),a("getUser"),u["a"].push("/")):c["a"].$emit("form-error","Incorrect username or password.");case 6:case"end":return e.stop()}},e,this)}));function t(t,r){return e.apply(this,arguments)}return t}(),register:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(t,r){var n,a,o,s,i,d;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,a=t.dispatch,o=r.email,s=r.name,i=r.password,e.next=4,Object(l["a"])("api/auth/register","POST",{email:o,name:s,password:i});case 4:d=e.sent,d.token?(n("setToken",d.token),a("getUser"),u["a"].push("/")):c["a"].$emit("form-error",Object.values(d).join(" "));case 6:case"end":return e.stop()}},e,this)}));function t(t,r){return e.apply(this,arguments)}return t}(),getUser:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(t){var r,n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,e.next=3,Object(l["a"])("api/auth/me","POST");case 3:n=e.sent,"Unauthenticated."!==n.message?r("setUser",n):r("removeUserData");case 5:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}(),logout:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(t){var r,n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,e.next=3,Object(l["a"])("api/auth/logout","POST");case 3:if(n=e.sent,"Successfully logged out"!==n.message){e.next=7;break}return e.next=7,r("removeUserData");case 7:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}()}})},c3b4:function(e,t,r){"use strict";var n=r("c9c7"),a=r.n(n);a.a},c9c7:function(e,t,r){},dc94:function(e,t,r){"use strict";var n=r("8517"),a=r.n(n);a.a},fedb:function(e,t,r){},fef5:function(e,t,r){}});
//# sourceMappingURL=app.9e642323.js.map