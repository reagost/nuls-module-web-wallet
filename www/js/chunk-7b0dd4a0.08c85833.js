(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7b0dd4a0"],{"0a49":function(e,t,r){var s=r("9b43"),n=r("626a"),a=r("4bf8"),i=r("9def"),o=r("cd1c");e.exports=function(e,t){var r=1==e,u=2==e,c=3==e,d=4==e,l=6==e,f=5==e||l,p=t||o;return function(t,o,h){for(var w,b,m=a(t),v=n(m),g=s(o,h,3),y=i(v.length),A=0,k=r?p(t,y):u?p(t,0):void 0;y>A;A++)if((f||A in v)&&(w=v[A],b=g(w,A,m),e))if(r)k[A]=b;else if(b)switch(e){case 3:return!0;case 5:return w;case 6:return A;case 2:k.push(w)}else if(d)return!1;return l?-1:c||d?d:k}}},"188a":function(e,t,r){},1959:function(e,t,r){"use strict";r.d(t,"i",function(){return o}),r.d(t,"d",function(){return u}),r.d(t,"c",function(){return c}),r.d(t,"h",function(){return l}),r.d(t,"f",function(){return p}),r.d(t,"k",function(){return w}),r.d(t,"b",function(){return m}),r.d(t,"j",function(){return g}),r.d(t,"a",function(){return A}),r.d(t,"e",function(){return _}),r.d(t,"g",function(){return j});r("7514"),r("c5f6"),r("6b54"),r("96cf");var s=r("3b8d"),n=r("9f30"),a=r("6ace"),i=r("db49");function o(e){return e===i["e"].chainId}function u(e,t){var r=e.txSerialize().length;return r+=110*t,1e5*Math.ceil(r/1024)}function c(e,t){return d.apply(this,arguments)}function d(){return d=Object(s["a"])(regeneratorRuntime.mark(function e(t,r){var s;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return s=0,e.next=3,Object(n["a"])("/","getByzantineCount",[t.txSerialize().toString("hex")]).then(function(e){if(e.hasOwnProperty("result")){var n=t.txSerialize().length;n+=110*(r+e.result.value),s=1e6*Math.ceil(n/1024)}else s=-100}).catch(function(e){console.log(e),s=-100});case 3:return e.abrupt("return",s);case 4:case"end":return e.stop()}},e)})),d.apply(this,arguments)}function l(e,t,r){return f.apply(this,arguments)}function f(){return f=Object(s["a"])(regeneratorRuntime.mark(function e(t,r,s){var n,i,o,u,c,d,l,f,h;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(n=Number(Object(a["b"])(t.amount,t.fee)),i=0,o=r.nonce,u=t.amount,c=0,4===s?c=-1:5===s?c=-1:6===s?(n=t.amount,i=-1,o=t.depositHash.substring(t.depositHash.length-16),u=t.amount-t.fee):9===s&&(n=t.amount,i=-1,o=t.depositHash.substring(t.depositHash.length-16),u=t.amount-t.fee,d=(new Date).valueOf()+2592e5,c=Number(d.toString().substr(0,d.toString().length-3))),l=[{address:t.fromAddress,assetsChainId:t.assetsChainId,assetsId:t.assetsId,amount:n,locked:i,nonce:o}],2!==s||t.assetsChainId===Object(a["f"])()){e.next=16;break}return l[0].amount=t.amount,e.next=11,p(Object(a["f"])(),t.assetsId,t.fromAddress);case 11:if(f=e.sent,!(f.data.balance<1e5)){e.next=15;break}return console.log("余额小于手续费"),e.abrupt("return");case 15:l.push({address:t.fromAddress,assetsChainId:Object(a["f"])(),assetsId:t.assetsId,amount:1e5,locked:i,nonce:f.data.nonce});case 16:if(h=[],15!==s&&17!==s){e.next=19;break}return e.abrupt("return",{success:!0,data:{inputs:l,outputs:h}});case 19:if(16!==s){e.next=22;break}return t.toAddress&&t.value&&(l[0].amount=t.amount,h=[{address:t.toAddress,assetsChainId:t.assetsChainId,assetsId:t.assetsId,amount:t.value,lockTime:c}]),e.abrupt("return",{success:!0,data:{inputs:l,outputs:h}});case 22:return h=[{address:t.toAddress?t.toAddress:t.fromAddress,assetsChainId:t.assetsChainId,assetsId:t.assetsId,amount:u,lockTime:c}],e.abrupt("return",{success:!0,data:{inputs:l,outputs:h}});case 24:case"end":return e.stop()}},e)})),f.apply(this,arguments)}function p(){return h.apply(this,arguments)}function h(){return h=Object(s["a"])(regeneratorRuntime.mark(function e(){var t,r,s,a=arguments;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:2,r=a.length>1&&void 0!==a[1]?a[1]:1,s=a.length>2?a[2]:void 0,e.next=5,Object(n["a"])("/","getAccountBalance",[t,r,s]).then(function(e){return e.hasOwnProperty("result")?{success:!0,data:{balance:e.result.balance,nonce:e.result.nonce}}:{success:!1,data:e}}).catch(function(e){return{success:!1,data:e}});case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}},e)})),h.apply(this,arguments)}function w(e){return b.apply(this,arguments)}function b(){return b=Object(s["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(n["a"])("/","validateTx",[t]).then(function(e){return e.hasOwnProperty("result")?{success:!0,data:e.result}:{success:!1,data:e.error}}).catch(function(e){return{success:!1,data:e}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)})),b.apply(this,arguments)}function m(e){return v.apply(this,arguments)}function v(){return v=Object(s["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(n["a"])("/","broadcastTx",[t]).then(function(e){return e.hasOwnProperty("result")?{success:!0,data:e.result}:{success:!1,data:e.error}}).catch(function(e){return{success:!1,data:e}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)})),v.apply(this,arguments)}function g(e){return y.apply(this,arguments)}function y(){return y=Object(s["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(n["a"])("/","validateTx",[t]).then(function(e){if(e.hasOwnProperty("result")){var r=e.result.value;return Object(n["a"])("/","broadcastTx",[t]).then(function(e){return e.hasOwnProperty("result")?{success:!0,hash:r}:{success:!1,data:e.error}}).catch(function(e){return{success:!1,data:e}})}return{success:!1,data:e.error}}).catch(function(e){return{success:!1,data:e}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)})),y.apply(this,arguments)}function A(e){return k.apply(this,arguments)}function k(){return k=Object(s["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(n["a"])("/","getConsensusDeposit",[1,300,t]).then(function(e){return e.result}).catch(function(e){return{success:!1,data:e}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)})),k.apply(this,arguments)}function _(e){return x.apply(this,arguments)}function x(){return x=Object(s["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(n["a"])("/","getContractConstructor",[t]).then(function(e){return e.hasOwnProperty("result")?{success:!0,data:e.result.constructor}:{success:!1,data:e.error}}).catch(function(e){return{success:!1,data:e}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)})),x.apply(this,arguments)}function O(){return I.apply(this,arguments)}function I(){return I=Object(s["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=[{chainId:1,addressPrefix:"NULS"},{chainId:2,addressPrefix:"tNULS"}],e.next=3,Object(n["a"])("/","getAllAddressPrefix",[]).then(function(e){e.hasOwnProperty("result")?(sessionStorage.hasOwnProperty("prefixData")&&sessionStorage.removeItem("prefixData"),sessionStorage.setItem("prefixData",JSON.stringify(e.result))):sessionStorage.setItem("prefixData",JSON.stringify(t))}).catch(function(e){console.log(e),sessionStorage.setItem("prefixData",JSON.stringify(t))});case 3:case"end":return e.stop()}},e)})),I.apply(this,arguments)}function j(e){return S.apply(this,arguments)}function S(){return S=Object(s["a"])(regeneratorRuntime.mark(function e(t){var r,s;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,O();case 2:if(r=JSON.parse(sessionStorage.getItem("prefixData")),!r){e.next=8;break}return s=r.find(function(e){return e.chainId===t}),e.abrupt("return",s.addressPrefix);case 8:return e.abrupt("return","");case 9:case"end":return e.stop()}},e)})),S.apply(this,arguments)}},"2e64":function(e,t,r){"use strict";var s=r("ff03"),n=r.n(s);n.a},"3e8f":function(e,t){},7514:function(e,t,r){"use strict";var s=r("5ca1"),n=r("0a49")(5),a="find",i=!0;a in[]&&Array(1)[a](function(){i=!1}),s(s.P+s.F*i,"Array",{find:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}}),r("9c6c")(a)},7672:function(e,t,r){"use strict";var s=r("188a"),n=r.n(s);n.a},b301:function(e,t,r){"use strict";var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"back",attrs:{backUrl:e.backUrl}},[r("span",{staticClass:"back-box",on:{click:e.back}},[r("i",{staticClass:"el-icon-arrow-left"}),r("span",[e._v(e._s(e.backTitle))])])])},n=[],a={props:{backTitle:{type:String,default:""},backUrl:{type:String,default:"1"},backParams:{type:String,default:""}},methods:{back:function(){"1"===this.backUrl?this.$router.go(-1):this.$router.push({name:this.backUrl})}}},i=a,o=(r("2e64"),r("2877")),u=Object(o["a"])(i,s,n,!1,null,null,null);t["a"]=u.exports},b69a:function(e,t,r){(function(e){function r(e,t){for(var r=0,s=e.length-1;s>=0;s--){var n=e[s];"."===n?e.splice(s,1):".."===n?(e.splice(s,1),r++):r&&(e.splice(s,1),r--)}if(t)for(;r--;r)e.unshift("..");return e}var s=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,n=function(e){return s.exec(e).slice(1)};function a(e,t){if(e.filter)return e.filter(t);for(var r=[],s=0;s<e.length;s++)t(e[s],s,e)&&r.push(e[s]);return r}t.resolve=function(){for(var t="",s=!1,n=arguments.length-1;n>=-1&&!s;n--){var i=n>=0?arguments[n]:e.cwd();if("string"!==typeof i)throw new TypeError("Arguments to path.resolve must be strings");i&&(t=i+"/"+t,s="/"===i.charAt(0))}return t=r(a(t.split("/"),function(e){return!!e}),!s).join("/"),(s?"/":"")+t||"."},t.normalize=function(e){var s=t.isAbsolute(e),n="/"===i(e,-1);return e=r(a(e.split("/"),function(e){return!!e}),!s).join("/"),e||s||(e="."),e&&n&&(e+="/"),(s?"/":"")+e},t.isAbsolute=function(e){return"/"===e.charAt(0)},t.join=function(){var e=Array.prototype.slice.call(arguments,0);return t.normalize(a(e,function(e,t){if("string"!==typeof e)throw new TypeError("Arguments to path.join must be strings");return e}).join("/"))},t.relative=function(e,r){function s(e){for(var t=0;t<e.length;t++)if(""!==e[t])break;for(var r=e.length-1;r>=0;r--)if(""!==e[r])break;return t>r?[]:e.slice(t,r-t+1)}e=t.resolve(e).substr(1),r=t.resolve(r).substr(1);for(var n=s(e.split("/")),a=s(r.split("/")),i=Math.min(n.length,a.length),o=i,u=0;u<i;u++)if(n[u]!==a[u]){o=u;break}var c=[];for(u=o;u<n.length;u++)c.push("..");return c=c.concat(a.slice(o)),c.join("/")},t.sep="/",t.delimiter=":",t.dirname=function(e){var t=n(e),r=t[0],s=t[1];return r||s?(s&&(s=s.substr(0,s.length-1)),r+s):"."},t.basename=function(e,t){var r=n(e)[2];return t&&r.substr(-1*t.length)===t&&(r=r.substr(0,r.length-t.length)),r},t.extname=function(e){return n(e)[3]};var i="b"==="ab".substr(-1)?function(e,t,r){return e.substr(t,r)}:function(e,t,r){return t<0&&(t=e.length+t),e.substr(t,r)}}).call(this,r("f28c"))},bdb9:function(e,t,r){(function(t){var s=r("3e8f"),n=r("b69a"),a=n.join(t,"path.txt");function i(){if(s.existsSync(a)){var e=s.readFileSync(a,"utf-8");return Object({NODE_ENV:"production",VUE_APP_I18N_LOCALE:"en",VUE_APP_I18N_FALLBACK_LOCALE:"en",BASE_URL:"/dist/"}).ELECTRON_OVERRIDE_DIST_PATH?n.join(Object({NODE_ENV:"production",VUE_APP_I18N_LOCALE:"en",VUE_APP_I18N_FALLBACK_LOCALE:"en",BASE_URL:"/dist/"}).ELECTRON_OVERRIDE_DIST_PATH,e):n.join(t,"dist",e)}throw new Error("Electron failed to install correctly, please delete node_modules/electron and try installing again")}e.exports=i()}).call(this,"/")},c26c:function(e,t,r){},c742:function(e,t,r){"use strict";var s=r("c26c"),n=r.n(s);n.a},cd1c:function(e,t,r){var s=r("e853");e.exports=function(e,t){return new(s(e))(t)}},d1f0:function(e,t,r){"use strict";var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-dialog",{staticClass:"password-dialog",attrs:{title:e.$t("password.password1"),visible:e.passwordVisible,top:"30vh",width:"30rem","close-on-click-modal":!1,"close-on-press-escape":!1},on:{"update:visible":function(t){e.passwordVisible=t},open:e.passwordShow,close:e.passwordClose}},[r("el-form",{ref:"passwordForm",attrs:{model:e.passwordForm,rules:e.passwordRules},nativeOn:{submit:function(e){e.preventDefault()}}},[r("div",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}]},[e._v(e._s(e.$t("password.password1")))]),r("el-form-item",{attrs:{prop:"password"}},[r("el-input",{ref:"inpus",attrs:{type:"password",maxlength:22},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.enterSubmit("passwordForm")}},model:{value:e.passwordForm.password,callback:function(t){e.$set(e.passwordForm,"password",t)},expression:"passwordForm.password"}})],1)],1),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:e.passwordClose}},[e._v(e._s(e.$t("password.password2")))]),r("el-button",{attrs:{type:"success",id:"passwordInfo"},on:{click:function(t){return e.dialogSubmit("passwordForm")}}},[e._v(e._s(e.$t("password.password3"))+"\n    ")])],1)],1)},n=[],a={props:{},data:function(){var e=this,t=function(t,r,s){""===r?s(new Error(e.$t("password.password1"))):s()};return{passwordVisible:!1,passwordForm:{password:""},passwordRules:{password:[{validator:t,trigger:["blur","change"]}]}}},created:function(){},mounted:function(){},watch:{passwordVisible:function(e){var t=this;e&&setTimeout(function(){t.$refs["inpus"].focus()},200)}},methods:{enterSubmit:function(e){this.passwordForm.password&&this.dialogSubmit(e)},passwordShow:function(){},passwordClose:function(){this.$refs["passwordForm"].resetFields(),this.passwordVisible=!1},showPassword:function(e){this.passwordVisible=e},dialogSubmit:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return!1;t.$emit("passwordSubmit",t.passwordForm.password),t.passwordVisible=!1})}}},i=a,o=(r("7672"),r("2877")),u=Object(o["a"])(i,s,n,!1,null,null,null);t["a"]=u.exports},e853:function(e,t,r){var s=r("d3f4"),n=r("1169"),a=r("2b4c")("species");e.exports=function(e){var t;return n(e)&&(t=e.constructor,"function"!=typeof t||t!==Array&&!n(t.prototype)||(t=void 0),s(t)&&(t=t[a],null===t&&(t=void 0))),void 0===t?Array:t}},ec22:function(e,t,r){"use strict";r.r(t);var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"new_address bg-gray"},[r("div",{staticClass:"bg-white"},[r("div",{staticClass:"w1200"},[r("BackBar",{attrs:{backTitle:e.$t("address.address0")}}),r("h3",{staticClass:"title"},[r("font",[e._v(e._s(e.$t("newAddress.newAddress1"))+" ")]),r("font",[e._v(":"+e._s(e.newAddressInfo.address)+"\n          "),r("i",{staticClass:"iconfont iconfuzhi clicks",on:{click:function(t){return e.copy(e.newAddressInfo.address)}}})])],1)],1)]),r("div",{staticClass:"new w1200 mt_20 bg-white"},[r("div",{staticClass:"step_tow w630"},[r("div",{staticClass:"tip bg-gray"},[e.RUN_PATTERN?r("p",[e._v(e._s(e.$t("newAddress.newAddress13")))]):r("p",[e._v(e._s(e.$t("newAddress.newAddress131")))])]),r("div",{staticClass:"btn mb_20"},[e.RUN_PATTERN?r("el-button",{attrs:{type:"success"},on:{click:e.backKeystore}},[e._v(e._s(e.$t("newAddress.newAddress16"))+"\n        ")]):e._e(),r("el-button",{attrs:{type:"success"},on:{click:e.backKey}},[e._v(e._s(e.$t("newAddress.newAddress17")))]),r("el-button",{on:{click:function(t){return e.toUrl("home")}}},[e._v(e._s(e.$t("tab.tab24")))])],1)])]),r("Password",{ref:"password",on:{passwordSubmit:e.passSubmit}}),r("el-dialog",{attrs:{title:e.$t("newAddress.newAddress19"),width:"40%",visible:e.keyDialog,"close-on-click-modal":!1,"close-on-press-escape":!1},on:{"update:visible":function(t){e.keyDialog=t}}},[r("span",[e._v(e._s(e.$t("newAddress.newAddress20")))]),r("p",{staticClass:"bg-white"},[e._v("\n      "+e._s(e.newAddressInfo.pri)+"\n    ")]),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{attrs:{type:"success"},on:{click:function(t){return e.copy(e.newAddressInfo.pri)}}},[e._v(e._s(e.$t("newAddress.newAddress21")))])],1)])],1)},n=[],a=r("0ad0"),i=r.n(a),o=r("d1f0"),u=r("b301"),c=r("6ace"),d=r("db49"),l=r("1959"),f={data:function(){return{prefix:"",newAddressInfo:{},keyDialog:!1,backType:0,RUN_PATTERN:d["g"]}},created:function(){var e=this;Object(l["g"])(Object(c["f"])()).then(function(t){e.prefix=t}).catch(function(t){console.log(t),e.prefix=""}),this.newAddressInfo=this.$route.query.backAddressInfo},mounted:function(){},components:{Password:o["a"],BackBar:u["a"]},methods:{backKeystore:function(){this.backType=0,this.$refs.password.showPassword(!0)},backKey:function(){this.backType=1,this.$refs.password.showPassword(!0)},passSubmit:function(e){var t=this,s=i.a.decrypteOfAES(this.newAddressInfo.aesPri,e),n=i.a.importByKey(Object(c["f"])(),s,e,this.prefix);if(n.address===this.newAddressInfo.address)if(0===this.backType){var a=r("bdb9").remote.dialog;a.showOpenDialog({title:t.$t("newAddress.newAddress28"),properties:["openFile","openDirectory"]},function(e){if(e){var s=e+"/"+n.address+".keystore",a={address:n.address,encryptedPrivateKey:n.aesPri,pubKey:t.newAddressInfo.pub,priKey:null};if(d["g"]){var i=r("3e8f");i.writeFile(s,JSON.stringify(a),"utf8",function(r){if(r)return t.$message({message:t.$t("newAddress.newAddress26")+r,type:"error",duration:1e3}),!1;t.$message({message:t.$t("newAddress.newAddress27")+e,type:"success",duration:3e3})})}}})}else this.newAddressInfo.pri=s,this.keyDialog=!0;else this.$message({message:this.$t("address.address13"),type:"error",duration:1e3})},copy:function(e){Object(c["i"])(e),this.$message({message:this.$t("public.copySuccess"),type:"success",duration:1e3}),this.keyDialog=!1},toUrl:function(e){this.$router.push({name:e})}}},p=f,h=(r("c742"),r("2877")),w=Object(h["a"])(p,s,n,!1,null,null,null);t["default"]=w.exports},ff03:function(e,t,r){}}]);
//# sourceMappingURL=chunk-7b0dd4a0.08c85833.js.map