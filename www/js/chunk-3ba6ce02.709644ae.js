(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3ba6ce02"],{"3b8c":function(e,s,r){"use strict";var t=r("8515"),o=r.n(t);o.a},"6b02":function(e,s,r){"use strict";r.r(s);var t=function(){var e=this,s=e.$createElement,r=e._self._c||s;return r("div",{staticClass:"import_address bg-gray"},[r("div",{staticClass:"bg-white"},[r("div",{staticClass:"w1200"},[r("BackBar",{attrs:{backTitle:this.$route.query.address?e.$t("address.address6"):e.$t("importAddress.importAddress0")}}),this.$route.query.address?r("h3",{staticClass:"title"},[e._v(e._s(this.$route.query.address))]):r("h3",{staticClass:"title"},[e._v(e._s(e.$t("importAddress.importAddress1")))])],1)]),r("div",{staticClass:"w1200 mt_20 bg-white"},[r("div",{directives:[{name:"show",rawName:"v-show",value:!this.$route.query.address,expression:"!this.$route.query.address"}],staticClass:"radio"},[r("el-radio",{directives:[{name:"show",rawName:"v-show",value:e.RUN_PATTERN,expression:"RUN_PATTERN"}],attrs:{label:"importKeystore"},model:{value:e.importRadio,callback:function(s){e.importRadio=s},expression:"importRadio"}},[e._v("\n        "+e._s(e.$t("importAddress.importAddress2"))+"\n      ")]),r("el-radio",{directives:[{name:"show",rawName:"v-show",value:e.RUN_PATTERN,expression:"RUN_PATTERN"}],attrs:{label:"importKey"},model:{value:e.importRadio,callback:function(s){e.importRadio=s},expression:"importRadio"}},[e._v("\n        "+e._s(e.$t("importAddress.importAddress3"))+"\n      ")])],1),r("div",{directives:[{name:"show",rawName:"v-show",value:"importKeystore"===e.importRadio,expression:"importRadio==='importKeystore'"}],staticClass:"btn mb_100"},[r("el-button",{attrs:{type:"success"},on:{click:e.importKeystore}},[e._v(e._s(e.$t("importAddress.importAddress4")))])],1),r("div",{directives:[{name:"show",rawName:"v-show",value:"importKey"===e.importRadio,expression:"importRadio==='importKey'"}],staticClass:"w630",class:this.$route.query.address?"mzt_20":""},[r("el-form",{ref:"importKeyForm",staticClass:"mb_100",attrs:{model:e.importKeyForm,"status-icon":"",rules:e.importKeyRules}},[r("el-form-item",{attrs:{label:e.$t("importAddress.importAddress5"),prop:"key"}},[r("el-input",{attrs:{type:"textarea"},model:{value:e.importKeyForm.key,callback:function(s){e.$set(e.importKeyForm,"key","string"===typeof s?s.trim():s)},expression:"importKeyForm.key"}})],1),r("el-form-item",{attrs:{label:e.$t("importAddress.importAddress6"),prop:"pass"}},[r("el-input",{attrs:{type:"password",autocomplete:"off"},model:{value:e.importKeyForm.pass,callback:function(s){e.$set(e.importKeyForm,"pass",s)},expression:"importKeyForm.pass"}})],1),r("el-form-item",{attrs:{label:e.$t("importAddress.importAddress7"),prop:"checkPass"}},[r("el-input",{attrs:{type:"password",autocomplete:"off"},model:{value:e.importKeyForm.checkPass,callback:function(s){e.$set(e.importKeyForm,"checkPass",s)},expression:"importKeyForm.checkPass"}})],1),r("el-form-item",{staticClass:"form-next"},[r("el-button",{attrs:{type:"success"},on:{click:function(s){return e.submitForm("importKeyForm")}}},[e._v(e._s(this.$route.query.address?"重置密码":e.$t("importAddress.importAddress8"))+"\n          ")])],1)],1)],1)]),r("Password",{ref:"password",on:{passwordSubmit:e.passSubmit}})],1)},o=[],i=(r("6b54"),r("0ad0")),a=r.n(i),d=r("b301"),m=r("d1f0"),p=r("6ace"),n=r("db49"),c=r("1959"),l={data:function(){var e=this,s=function(s,r,t){""===r?t(new Error(e.$t("importAddress.importAddress9"))):t()},r=function(s,r,t){var o=/^(?![\d]+$)(?![a-zA-Z]+$)(?![^\da-zA-Z]+$).{8,20}$/;""===r?t(new Error(e.$t("importAddress.importAddress10"))):o.exec(r)?(""!==e.importKeyForm.checkPass&&e.$refs.importKeyForm.validateField("checkPass"),t()):t(new Error(e.$t("importAddress.importAddress11")))},t=function(s,r,t){""===r?t(new Error(e.$t("importAddress.importAddress12"))):r!==e.importKeyForm.pass?t(new Error(e.$t("importAddress.importAddress13"))):t()};return{prefix:"",importRadio:this.$route.query.address?"importKey":"importKeystore",keystoreInfo:{},importKeyForm:{key:"",pass:"",checkPass:""},importKeyRules:{pass:[{validator:r,trigger:["blur","change"]}],checkPass:[{validator:t,trigger:["blur","change"]}],key:[{validator:s,trigger:["blur","change"]}]},RUN_PATTERN:n["e"]}},created:function(){var e=this;Object(c["g"])(Object(p["f"])()).then(function(s){e.prefix=s}).catch(function(s){console.log(s),e.prefix=""}),n["e"]||(this.importRadio="importKey")},components:{BackBar:d["a"],Password:m["a"]},methods:{importKeystore:function(){var e=this,s=r("bdb9").remote.dialog;s.showOpenDialog({title:e.$t("importAddress.importAddress14"),properties:["openFile","multiSelections","showHiddenFiles"]},function(s){if(1===s.length){var t=s[0].lastIndexOf("."),o=s[0].length,i=s[0].substring(t+1,o);if("keystore"===i&&n["e"]){var a=r("3e8f");a.readFile(s[0],function(s,r){if(s)return e.$message({message:e.$t("importAddress.importAddress15")+s,type:"error",duration:1e3}),console.error(s);e.keystoreInfo=JSON.parse(r.toString()),e.$refs.password.showPassword(!0)})}else e.$message({message:e.$t("importAddress.importAddress16"),type:"error",duration:1e3})}else e.$message({message:e.$t("importAddress.importAddress17"),type:"error",duration:1e3})})},passSubmit:function(e){var s=a.a.decrypteOfAES(this.keystoreInfo.encryptedPrivateKey,e),r=a.a.importByKey(Object(p["f"])(),s,e,this.prefix);if(this.keystoreInfo.address===r.address||a.a.addressEquals(this.keystoreInfo.address,r.address)){var t=p["j"];t.address=r.address,t.aesPri=r.aesPri,t.pub=r.pub,Object(p["m"])(t),this.toUrl("address")}else this.$message({message:this.$t("address.address13"),type:"error",duration:1e3})},submitForm:function(e){var s=this;this.$refs[e].validate(function(e){if(!e)return!1;s.importWallet()})},importWallet:function(){var e=a.a.importByKey(Object(p["f"])(),this.importKeyForm.key,this.importKeyForm.pass,this.prefix),s=p["j"];s.address=e.address,s.aesPri=e.aesPri,s.pub=e.pub,Object(p["m"])(s),this.toUrl("address")},toUrl:function(e){this.$router.push({name:e})}}},u=l,y=(r("3b8c"),r("2877")),f=Object(y["a"])(u,t,o,!1,null,null,null);s["default"]=f.exports},8515:function(e,s,r){}}]);
//# sourceMappingURL=chunk-3ba6ce02.709644ae.js.map