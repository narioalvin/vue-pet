(function(t){function e(e){for(var n,i,r=e[0],c=e[1],l=e[2],d=0,p=[];d<r.length;d++)i=r[d],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&p.push(s[i][0]),s[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(p.length)p.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],n=!0,r=1;r<a.length;r++){var c=a[r];0!==s[c]&&(n=!1)}n&&(o.splice(e--,1),t=i(i.s=a[0]))}return t}var n={},s={app:0},o=[];function i(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=n,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/vue-personal-expense-tracker/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var u=c;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0630":function(t,e,a){t.exports=a.p+"img/012-boy.975ac46f.svg"},"168f":function(t,e,a){t.exports=a.p+"img/014-bell-boy.a5067243.svg"},"3ca8":function(t,e,a){t.exports=a.p+"img/013-girl.c5a87f5f.svg"},4678:function(t,e,a){var n={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf755","./tlh.js":"cf755","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function s(t){var e=o(t);return a(e)}function o(t){if(!a.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}s.keys=function(){return Object.keys(n)},s.resolve=o,t.exports=s,s.id="4678"},4705:function(t,e,a){t.exports=a.p+"img/011-girl.b4faa08b.svg"},"4c6d":function(t,e,a){t.exports=a.p+"img/003-delivery-man.4948508c.svg"},"502e":function(t,e,a){t.exports=a.p+"img/016-punk.81af0177.svg"},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},o=[],i=(a("f9e3"),a("2dd8"),{name:"App"}),r=i,c=(a("5c0b"),a("2877")),l=Object(c["a"])(r,s,o,!1,null,null,null),u=l.exports,d=a("8c4f"),p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"sign-in-up"},[a("div",{staticClass:"content"},[t._m(0),a("div",{staticClass:"mb-4 sign-in-up-header"},[a("h1",[t._v("Sign In")]),a("button",{staticClass:"btn-link",on:{click:t.directToSignUp}},[t._v(" Create Account ")])]),a("div",{staticClass:"input-form"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.user.name,expression:"user.name"}],staticClass:"custom-input mb-4",attrs:{type:"text",placeholder:"Enter your name"},domProps:{value:t.user.name},on:{input:function(e){e.target.composing||t.$set(t.user,"name",e.target.value)}}}),a("font-awesome-icon",{staticClass:"sign-in-up-icon",attrs:{icon:["fas","user"]}})],1),a("div",{staticClass:"input-form"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.user.passcode,expression:"user.passcode"}],staticClass:"custom-input mb-4",attrs:{type:"password",maxlength:"4",placeholder:"Enter 4 digit passcode"},domProps:{value:t.user.passcode},on:{keydown:function(e){return t.preventInvalidChars(e)},input:function(e){e.target.composing||t.$set(t.user,"passcode",e.target.value)}}}),a("font-awesome-icon",{staticClass:"sign-in-up-icon",attrs:{icon:["fas","key"]}})],1),""!==t.errorMessage?a("p",{staticClass:"error"},[t._v(t._s(t.errorMessage))]):t._e(),a("button",{staticClass:"proceed-btn",on:{click:t.signIn}},[t._v(" SIGN IN "),t.loading?a("b-spinner",{staticClass:"action-spinner"}):t._e()],1)])])},f=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"logo"},[n("img",{attrs:{src:a("7530"),width:"80",alt:""}}),n("h5",[t._v("Personal Expense Tracker")])])}],m=a("5530"),v=a("d4ec"),b=a("bee2"),g=a("bc3a"),h=a.n(g),y="https://p-expense-tracker.herokuapp.com/api/user/",j=function(){function t(){Object(v["a"])(this,t)}return Object(b["a"])(t,null,[{key:"signup",value:function(t){return h.a.post("".concat(y,"signup"),Object(m["a"])({},t))}},{key:"signin",value:function(t){return h.a.post("".concat(y,"signin"),Object(m["a"])({},t))}},{key:"update",value:function(t){return h.a.patch("".concat(y).concat(t))}}]),t}(),w=j,C=a("c1df"),_=a.n(C),k=a("bc3a"),x={name:"SignIn",props:["userFromSignUp"],data:function(){return{ipDataKey:"9e8b416c07db1ba880742778045aebe3cce014a7958ba921aab8f10a",user:{name:"",passcode:""},errorMessage:"",loading:!1}},created:function(){void 0!==this.userFromSignUp&&(this.user=this.userFromSignUp)},mounted:function(){var t=document.querySelector(".content");t.style["-webkit-animation"]="animLeft .5s"},methods:{signIn:function(){var t=this;this.loading=!0,this.errorMessage="",k.get("https://api.ipdata.co?api-key=".concat(this.ipDataKey)).then((function(e){var a=e.data;w.signin(t.user).then((function(e){var n=e.data;n["$$symbol"]=a.currency.symbol,n.modificationDate=_()().calendar(),localStorage.setItem("user",JSON.stringify(n)),t.$router.push({name:"Overview",params:{user:n}}),t.loading=!1}),(function(e){t.errorMessage=e.response.data,t.loading=!1}))})).catch((function(t){return console.log(t)}))},directToSignUp:function(){var t=this,e=document.querySelector(".content");e.style["-webkit-animation"]="animRight .5s forwards",setTimeout((function(){t.$router.push({name:"SignUp"})}),90)},preventInvalidChars:function(t){(8!=t.which&&0!=t.which&&t.which<48||t.which>57)&&t.preventDefault()}}},O=x,S=(a("986a"),Object(c["a"])(O,p,f,!1,null,"40ddbaf7",null)),$=S.exports,T=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sign-in-up"},[n("div",{staticClass:"content"},[n("div",{staticClass:"avatar"},[n("div",{staticClass:"circle",attrs:{id:"popover-avatar"}},[""!==t.selectedAvatar?n("img",{staticClass:"selected-avatar",attrs:{src:a("f4ba")("./"+t.selectedAvatar+".svg"),width:"40",alt:""}}):t._e(),""===t.selectedAvatar?n("font-awesome-icon",{attrs:{icon:["fas","plus"]},on:{click:function(e){t.showPopover=!t.showPopover}}}):t._e(),n("b-popover",{staticClass:"popover-avatars",attrs:{target:"popover-avatar",placement:"bottom",show:t.showPopover},on:{"update:show":function(e){t.showPopover=e}}},t._l(t.avatars,(function(e,s){return n("div",{key:s,staticClass:"avatar-selection"},[n("img",{attrs:{src:a("f4ba")("./"+e+".svg"),width:"55",alt:""},on:{click:function(a){t.selectAvatar(e),t.showPopover=!t.showPopover}}})])})),0)],1),n("h5",[t._v("Choose your avatar")])]),n("div",{staticClass:"mb-4 sign-in-up-header"},[n("h1",[t._v("Register")]),n("button",{staticClass:"btn-link",on:{click:t.directToSignIn}},[t._v(" Already a member ")])]),n("div",{staticClass:"input-form"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.user.name,expression:"user.name"}],staticClass:"custom-input mb-4",attrs:{type:"text",placeholder:"Please type your name"},domProps:{value:t.user.name},on:{input:function(e){e.target.composing||t.$set(t.user,"name",e.target.value)}}}),n("font-awesome-icon",{staticClass:"sign-in-up-icon",attrs:{icon:["fas","user"]}})],1),n("div",{staticClass:"input-form"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.user.passcode,expression:"user.passcode"}],staticClass:"custom-input mb-4",attrs:{type:"password",maxlength:"4",placeholder:"4 digit passcode"},domProps:{value:t.user.passcode},on:{keydown:function(e){return t.preventInvalidChars(e)},input:function(e){e.target.composing||t.$set(t.user,"passcode",e.target.value)}}}),n("font-awesome-icon",{staticClass:"sign-in-up-icon",attrs:{icon:["fas","key"]}})],1),""!==t.errorMessage?n("p",{staticClass:"error"},[t._v(t._s(t.errorMessage))]):t._e(),n("button",{staticClass:"proceed-btn",on:{click:t.signUp}},[t._v(" REGISTER "),t.loading?n("b-spinner",{staticClass:"action-spinner"}):t._e()],1)])])},D=[],E=(a("b0c0"),{name:"SignUp",data:function(){return{user:{name:"",passcode:"",avatar:""},errorMessage:"",loading:!1,avatars:["001-man","002-woman","003-delivery-man","004-man","005-woman","006-nurse","007-woman","008-man","009-girl","010-man","011-girl","012-boy","013-girl","014-bell-boy","015-girl","016-punk"],showPopover:!1,selectedAvatar:""}},created:function(){},mounted:function(){var t=document.querySelector(".content");t.style["-webkit-animation"]="animLeft .5s"},methods:{signUp:function(){var t=this;this.loading=!0,this.errorMessage="",w.signup(this.user).then((function(){t.$router.push({name:"SignIn",params:{userFromSignUp:{name:t.user.name,passcode:t.user.passcode}}}),t.loading=!1}),(function(e){t.errorMessage=e.response.data,t.loading=!1}))},selectAvatar:function(t){this.user.avatar=t,this.selectedAvatar=t},directToSignIn:function(){this.$router.push({name:"SignIn"})},preventInvalidChars:function(t){(8!=t.which&&0!=t.which&&t.which<48||t.which>57)&&t.preventDefault()}}}),U=E,M=(a("c326"),Object(c["a"])(U,T,D,!1,null,"5b8667fc",null)),I=M.exports,P=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main"},[n("b-modal",{ref:"add-modal",staticClass:"transaction-modal",attrs:{id:"add-transaction",title:"Add Transaction","hide-footer":""}},[n("form",{ref:"form"},[n("b-form-group",{attrs:{label:"Type"}},[n("div",{staticClass:"radio-btns"},[n("b-form-radio",{attrs:{value:"income"},on:{change:function(e){t.options=t.incomeOptions,t.selectedCategory=null}},model:{value:t.transaction.type,callback:function(e){t.$set(t.transaction,"type",e)},expression:"transaction.type"}},[t._v("Income")]),n("b-form-radio",{attrs:{value:"expense",disabled:0===t.balance},on:{change:function(e){t.options=t.expenseOptions,t.selectedCategory=null}},model:{value:t.transaction.type,callback:function(e){t.$set(t.transaction,"type",e)},expression:"transaction.type"}},[t._v("Expense")])],1),0===t.balance?n("p",{staticClass:"reminder"},[t._v(" Your current balance is "+t._s(t.currentUser.$$symbol)+"0 ")]):t._e()]),n("b-form-group",[n("label",[t._v("Category "),n("b-button",{staticClass:"tooltip-btn",attrs:{id:"tooltip-target-1"}},[n("font-awesome-icon",{staticClass:"pencil",attrs:{icon:["fas",t.customCategory?"sync-alt":"pencil-alt"]},on:{click:function(e){t.customCategory=!t.customCategory,t.transaction.category=""}}})],1),n("b-tooltip",{attrs:{target:"tooltip-target-1",triggers:"hover"}},[t.customCategory?n("span",[t._v("Choose category")]):n("span",[t._v("Type custom category")])])],1),t.customCategory?n("b-form-input",{attrs:{placeholder:"Enter custom category name",autocomplete:"off"},model:{value:t.transaction.category,callback:function(e){t.$set(t.transaction,"category",e)},expression:"transaction.category"}}):n("b-dropdown",{ref:"category-ddown",staticClass:"category-ddown",attrs:{text:""===t.transaction.category?"Select Category":t.transaction.category,block:"","menu-class":"w-100"},scopedSlots:t._u([{key:"button-content",fn:function(){return[null===t.selectedCategory?n("span",[t._v("Select Category")]):n("span",[n("font-awesome-icon",{staticClass:"mr-1",attrs:{icon:["fas",t.selectedCategory.icon]}}),t._v(" "+t._s(t.selectedCategory.value))],1)]},proxy:!0}],null,!1,3222828139)},[n("b-dropdown-form",t._l(t.options,(function(e,a){return n("div",{key:a,on:{click:function(a){return t.selectCategory(e)}}},[n("div",{staticClass:"dd-icons",class:e.icon},[n("font-awesome-icon",{attrs:{icon:["fas",e.icon]}})],1),t._v(" "+t._s(e.value)+" ")])})),0)],1)],1),n("b-form-group",{staticClass:"mb-5",attrs:{label:"Amount","label-for":"amount"}},[n("b-form-input",{attrs:{type:"number",id:"amount",placeholder:"Enter amount",autocomplete:"off"},on:{keydown:function(e){return t.preventInvalidChars(e)}},model:{value:t.transaction.amount,callback:function(e){t.$set(t.transaction,"amount",e)},expression:"transaction.amount"}})],1),"expense"===t.transaction.type&&t.transaction.amount&&+t.transaction.amount>t.balance?n("p",{staticClass:"error"},[t._v(" The amount is greater than your balance. ")]):t._e(),n("div",{staticClass:"submit-btns"},[n("b-button",{staticClass:"cancel",attrs:{variant:"light"},on:{click:function(e){return t.hideModal("add-modal")}}},[t._v("Cancel")]),n("b-button",{staticClass:"submit",attrs:{disabled:""===t.transaction.category||""===t.transaction.amount||t.transaction.amount<=0||"expense"===t.transaction.type&&t.transaction.amount&&+t.transaction.amount>t.balance},on:{click:t.handleSubmit}},[t._v("Add"),t.actionLoading?n("b-spinner",{staticClass:"modal-spinner"}):t._e()],1)],1)],1)]),n("div",{staticClass:"content"},[n("header",[n("div",{staticClass:"welcome"},[n("div",{staticClass:"name"},[n("h1",[t._v(t._s(t.currentUser.name))]),n("p",[t._v("Last modified: "+t._s(t.currentUser.modificationDate)+".")])])]),n("div",{staticClass:"avatar"},[n("img",{staticClass:"selected-avatar",attrs:{src:a("f4ba")("./"+t.currentUser.avatar+".svg"),width:"40",alt:"",id:"popover-dropdown"}}),n("font-awesome-icon",{attrs:{icon:["fas","caret-down"]}}),n("b-popover",{ref:"user-ddown",attrs:{target:"popover-dropdown",placement:"bottom",triggers:"hover click","custom-class":"pop-dropdown"}},[n("ul",[n("li",[n("button",{staticClass:"btn-link",on:{click:function(e){return t.hidePopover("user-ddown")}}},[n("font-awesome-icon",{attrs:{icon:["fas","sync-alt"]}}),n("span",[t._v("RESET DATA")])],1)]),n("li",[n("button",{staticClass:"btn-link",on:{click:function(e){return t.signOut()}}},[n("font-awesome-icon",{attrs:{icon:["fas","power-off"]}}),n("span",[t._v("SIGN OUT")])],1)])])])],1)]),n("body",[n("section",{staticClass:"left"},[n("h2",[t._v("Summary")]),n("div",{staticClass:"left-content"},[n("div",{staticClass:"balance"},[n("h4",[t._v("BALANCE")]),n("span",[t._v(t._s(t.currentUser.$$symbol)+" "+t._s(t.balance.toLocaleString()))])]),n("div",{staticClass:"summary"},[n("div",{staticClass:"income"},[n("h4",[t._v(" TOTAL INCOME ")]),n("span",[t._v(t._s(t.currentUser.$$symbol)+" "+t._s(t.income.toLocaleString()))])]),n("div",{staticClass:"divider"}),n("div",{staticClass:"expense"},[n("h4",[t._v("EXPENSE")]),n("span",[t._v(t._s(t.currentUser.$$symbol)+" "+t._s(t.expense.toLocaleString()))])])])])]),n("section",{staticClass:"right"},[n("div",{staticClass:"right-header"},[n("h2",[t._v("Transactions")]),n("button",{directives:[{name:"b-modal",rawName:"v-b-modal.add-transaction",modifiers:{"add-transaction":!0}}]},[n("font-awesome-icon",{staticClass:"icon",attrs:{icon:["fas","plus"]}})],1)]),t.transactions.length<1&&!t.transactionLoading?n("div",[n("center",[n("h4",[t._v("No Transactions Yet")])])],1):t._e(),t.transactionLoading?n("div",[n("center",[n("b-spinner")],1)],1):t._e(),t._l(t.transactions,(function(e,a){return n("div",{key:a,staticClass:"transaction",class:[e.type],attrs:{id:"popover-1-"+a}},[n("div",{staticClass:"transaction-name"},[n("div",{staticClass:"transaction-icon",class:[e.icon]},[n("font-awesome-icon",{staticClass:"icon",attrs:{icon:["fas",e.icon]}})],1),n("p",[t._v(" "+t._s(e.category)+" "),n("span",[t._v(t._s(e.creationDate))])])]),n("p",[t._v(" "+t._s(t.currentUser.$$symbol)+t._s(e.amount.toLocaleString())+" ")]),e.amount<t.balance||0===t.expense?n("b-popover",{attrs:{target:"popover-1-"+a,placement:t.isTabOrMobile?"top":"right",triggers:"hover focus"}},[n("font-awesome-icon",{directives:[{name:"b-modal",rawName:"v-b-modal.delete-transaction",modifiers:{"delete-transaction":!0}}],staticClass:"trash",attrs:{icon:["fas","trash-alt"]},on:{click:function(a){return t.openDeleteModal(e)}}})],1):t._e()],1)}))],2)]),t._m(0)]),n("b-modal",{ref:"delete-transaction",attrs:{id:"delete-transaction",title:"Delete Transaction","hide-footer":""}},[n("h4",{staticClass:"mb-5 mt-3"},[t._v("Are you sure you want to delete this?")]),n("div",{staticClass:"submit-btns"},[n("b-button",{staticClass:"cancel",attrs:{variant:"light"},on:{click:function(e){return t.hideModal("delete-transaction")}}},[t._v("Cancel")]),n("b-button",{staticClass:"submit",on:{click:t.handleDelete}},[t._v("Delete"),t.actionLoading?n("b-spinner",{staticClass:"modal-spinner"}):t._e()],1)],1)]),n("b-modal",{ref:"reset-data",attrs:{title:"Reset Data",id:"reset-data","hide-footer":""}},[n("h4",{staticClass:"my-4 mb-5"},[t._v("Are you sure you want reset your data?")]),n("div",{staticClass:"submit-btns"},[n("b-button",{staticClass:"cancel",attrs:{variant:"light"},on:{click:function(e){return t.hideModal("reset-modal")}}},[t._v("Cancel")]),n("b-button",{staticClass:"submit",on:{click:t.resetData}},[t._v("Reset"),t.actionLoading?n("b-spinner",{staticClass:"modal-spinner"}):t._e()],1)],1)])],1)},z=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",[a("h5",[t._v("Personal Expense Tracker")])])}],L=(a("7db0"),a("4160"),a("d81d"),a("159b"),"https://p-expense-tracker.herokuapp.com/api/transaction/"),A=function(){function t(){Object(v["a"])(this,t)}return Object(b["a"])(t,null,[{key:"create",value:function(t){return h.a.post("".concat(L,"create"),Object(m["a"])({},t))}},{key:"getAll",value:function(t){return h.a.get("".concat(L,"all/").concat(t))}},{key:"delete",value:function(t){return h.a.delete("".concat(L).concat(t))}},{key:"reset",value:function(t){return h.a.delete("".concat(L,"reset/").concat(t))}}]),t}(),N=A,R={name:"Overview",props:["user"],data:function(){return{ipDataKey:"9e8b416c07db1ba880742778045aebe3cce014a7958ba921aab8f10a",customCategory:!1,currentUser:JSON.parse(localStorage.getItem("user"))||{},transaction:{userId:"",type:"income",category:"",amount:"",icon:""},transactions:[],income:0,expense:0,balance:0,options:[],incomeOptions:[{value:"salary",icon:"wallet"},{value:"sales",icon:"tags"},{value:"rewards",icon:"hand-holding-usd"},{value:"lottery",icon:"dice-four"},{value:"allowance",icon:"money-bill-alt"},{value:"coupons",icon:"receipt"},{value:"others",icon:"random"}],expenseOptions:[{value:"payment",icon:"money-check"},{value:"car",icon:"car"},{value:"food",icon:"pizza-slice"},{value:"house",icon:"home"},{value:"pets",icon:"dog"},{value:"grocery",icon:"shopping-cart"},{value:"coffee",icon:"mug-hot"},{value:"travel",icon:"plane"},{value:"investment",icon:"chart-line"},{value:"alcohol",icon:"beer"},{value:"personal",icon:"user-tag"},{value:"shopping",icon:"shopping-bag"},{value:"clothing",icon:"tshirt"},{value:"medical",icon:"briefcase-medical"},{value:"gifts",icon:"gift"},{value:"insurance",icon:"chart-bar"},{value:"gadgets",icon:"mobile-alt"},{value:"loans",icon:"credit-card"},{value:"education",icon:"graduation-cap"},{value:"others",icon:"random"}],transactionLoading:!0,actionLoading:!1,itemToDelete:null,isTabOrMobile:!1,selectedCategory:null}},beforeRouteEnter:function(t,e,a){var n=JSON.parse(localStorage.getItem("user"));null===n?a({name:"SignIn"}):a()},created:function(){this.options=this.incomeOptions,this.isTabOrMobile=window.innerWidth<768,this.getTransactions()},methods:{getTransactions:function(){var t=this;N.getAll(this.currentUser.id).then((function(e){var a=0,n=0;e.data.length>0?e.data.forEach((function(e){var s=+e.amount;"income"===e.type?a+=s:n+=s,t.income=a,t.balance=a-n,t.expense=n})):t.income=t.expense=t.balance=0;var s=e.data.sort((function(t,e){return _()(e.creationDate)-_()(t.creationDate)}));t.transactions=s.map((function(t){return t.amount=+t.amount,t.creationDate=_()(t.creationDate).fromNow(),t})),t.transactionLoading=!1,t.options=t.incomeOptions,t.updateUserModificationDate(),t.resetModals()}))},selectCategory:function(t){this.transaction.category=t.value,this.selectedCategory=t,this.$refs["category-ddown"].hide()},resetModals:function(){this.$refs["delete-transaction"].hide(),this.$refs["add-modal"].hide(),this.$refs["reset-data"].hide(),this.transaction={type:"income",category:"",amount:"",icon:""},this.selectedCategory=null,this.customCategory=!1,this.actionLoading=!1},handleSubmit:function(){var t=this;this.actionLoading=!0;var e="income"===this.transaction.type&&this.customCategory?{icon:"coins"}:"expense"===this.transaction.type&&this.customCategory?{icon:"money-bill"}:this.options.find((function(e){return e.value===t.transaction.category}));this.transaction.icon=e.icon,this.transaction.userId=this.currentUser.id,N.create(this.transaction).then((function(){t.getTransactions()}),(function(t){return console.log(t)}))},openDeleteModal:function(t){this.itemToDelete=t},handleDelete:function(){var t=this;this.actionLoading=!0,N.delete(this.itemToDelete._id).then((function(){t.getTransactions()}),(function(t){return console.log(t)}))},updateUserModificationDate:function(){w.update(this.currentUser.id).then((function(){return function(t){return console.log(t)}}))},preventInvalidChars:function(t){(8!=t.which&&0!=t.which&&t.which<48||t.which>57)&&t.preventDefault()},signOut:function(){localStorage.clear(),this.$router.push({name:"SignIn"})},resetData:function(){var t=this;this.actionLoading=!0,N.reset(this.currentUser.id).then((function(){t.getTransactions()}),(function(t){return console.log(t)}))},hideModal:function(t){this.$refs[t].hide()},hidePopover:function(t){this.$refs[t].$emit("close"),this.$refs["reset-data"].show()}}},F=R,q=(a("8a88"),Object(c["a"])(F,P,z,!1,null,"4e65ec49",null)),J=q.exports;n["a"].use(d["a"]);var G=[{path:"/",redirect:"/signin"},{path:"/signin",name:"SignIn",component:$,props:!0,meta:{title:"Sign In - Personal Expense Tracker"}},{path:"/signup",name:"SignUp",component:I,meta:{title:"Sign Up - Personal Expense Tracker"}},{path:"/overview",name:"Overview",component:J,props:!0,meta:{title:"Overview - Personal Expense Tracker"}}],K=new d["a"]({routes:G});K.beforeEach((function(t,e,a){document.title=t.meta.title,a()}));var Y=d["a"].prototype.push;d["a"].prototype.push=function(t){return Y.call(this,t).catch((function(t){return t}))};var B=K,W=a("ecee"),X=a("c074"),H=a("ad3d"),Q=a("6aac"),V=a("e6c7"),Z=a("8226"),tt=a("4797"),et=a("8361"),at=a("1947"),nt=a("b4ae"),st=a("9e14"),ot=a("3828"),it=a("01e3"),rt=a("dd9a"),ct=a("9eaa"),lt=a("5680");W["c"].add(X["a"]),n["a"].component("font-awesome-icon",H["a"]),n["a"].component("b-modal",Q["a"]),n["a"].directive("b-modal",V["a"]),n["a"].component("b-form-group",Z["a"]),n["a"].component("b-form-input",tt["a"]),n["a"].component("b-form-select",et["a"]),n["a"].component("b-button",at["a"]),n["a"].component("b-tooltip",nt["a"]),n["a"].component("b-form-radio",st["a"]),n["a"].component("b-popover",ot["a"]),n["a"].component("b-spinner",it["a"]),n["a"].component("b-dropdown",rt["a"]),n["a"].component("b-dropdown-item",ct["a"]),n["a"].component("b-dropdown-form",lt["a"]),n["a"].config.productionTip=!1,new n["a"]({router:B,render:function(t){return t(u)}}).$mount("#app")},5770:function(t,e,a){},"5c0b":function(t,e,a){"use strict";var n=a("9c0c"),s=a.n(n);s.a},"63be":function(t,e,a){t.exports=a.p+"img/006-nurse.a2039d91.svg"},"69d6":function(t,e,a){t.exports=a.p+"img/015-girl.352de8ef.svg"},"6d7b":function(t,e,a){},7530:function(t,e,a){t.exports=a.p+"img/money.f9792628.svg"},8679:function(t,e,a){t.exports=a.p+"img/004-man.77d9312a.svg"},"8a88":function(t,e,a){"use strict";var n=a("5770"),s=a.n(n);s.a},"934c":function(t,e,a){t.exports=a.p+"img/002-woman.ce32b167.svg"},"986a":function(t,e,a){"use strict";var n=a("6d7b"),s=a.n(n);s.a},"9c0c":function(t,e,a){},"9cc3":function(t,e,a){t.exports=a.p+"img/007-woman.27c8b601.svg"},a761:function(t,e,a){t.exports=a.p+"img/001-man.b935d5cc.svg"},a8cf:function(t,e,a){t.exports=a.p+"img/009-girl.3d560f2a.svg"},b9a1:function(t,e,a){},c326:function(t,e,a){"use strict";var n=a("b9a1"),s=a.n(n);s.a},e673:function(t,e,a){t.exports=a.p+"img/008-man.2f5efde6.svg"},f447:function(t,e,a){t.exports=a.p+"img/010-man.88159beb.svg"},f4ba:function(t,e,a){var n={"./001-man.svg":"a761","./002-woman.svg":"934c","./003-delivery-man.svg":"4c6d","./004-man.svg":"8679","./005-woman.svg":"f65a","./006-nurse.svg":"63be","./007-woman.svg":"9cc3","./008-man.svg":"e673","./009-girl.svg":"a8cf","./010-man.svg":"f447","./011-girl.svg":"4705","./012-boy.svg":"0630","./013-girl.svg":"3ca8","./014-bell-boy.svg":"168f","./015-girl.svg":"69d6","./016-punk.svg":"502e"};function s(t){var e=o(t);return a(e)}function o(t){if(!a.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}s.keys=function(){return Object.keys(n)},s.resolve=o,t.exports=s,s.id="f4ba"},f65a:function(t,e,a){t.exports=a.p+"img/005-woman.169046d1.svg"}});
//# sourceMappingURL=app.ee804e79.js.map