webpackJsonp([24,46],{111:function(t,e,i){i(636);var n=i(0)(i(545),i(722),"data-v-035d02ca",null);t.exports=n.exports},131:function(t,e,i){"use strict";function n(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}Object.defineProperty(e,"__esModule",{value:!0});var s=i(2),a=i.n(s);e.default={props:{type:String,title:String,message:String,direction:{type:String,default:"Right"},duration:{type:Number,default:4500},container:{type:String,default:".notifications"}},data:function(){return{$_parent_:null,show:!0}},created:function(){var t=this,e=this.$parent;if(!e){var i=document.querySelector(this.container);i?e=i.__vue__:!function(){var i=t.container.replace(".",""),s=a.a.extend({name:"Notifications",render:function(t){return t("div",{class:n({},""+i,!0)})}});e=(new s).$mount(),document.body.appendChild(e.$el)}(),this.$_parent_=e}},mounted:function(){var t=this;this.$_parent_&&(this.$_parent_.$el.appendChild(this.$el),this.$parent=this.$_parent_,delete this.$_parent_),this.duration>0&&(this.timer=setTimeout(function(){return t.close()},this.duration))},destroyed:function(){this.$el.remove()},computed:{transition:function(){return"bounce-"+this.direction},enterClass:function(){return"bounceIn"+this.direction},leaveClass:function(){return"bounceOut"+this.direction}},methods:{close:function(){clearTimeout(this.timer),this.show=!1},afterLeave:function(){this.$destroy()}}}},132:function(t,e,i){e=t.exports=i(70)(),e.push([t.i,"@keyframes spinAround{0%{transform:rotate(0deg)}to{transform:rotate(359deg)}}.notifications{position:fixed;top:50px;right:0;z-index:1257;pointer-events:none}@media screen and (min-width:769px){.notifications{max-width:320px}}.notifications .notification{margin:20px}.notification{position:relative;min-width:240px;-webkit-backface-visibility:hidden;backface-visibility:hidden;transform:translateZ(0);pointer-events:all}","",{version:3,sources:["/./node_modules/vue-bulma-notification/src/Notification.vue"],names:[],mappings:"AACA,sBACA,GAAK,sBAAsB,CAC1B,AACD,GAAG,wBAAwB,CAC1B,CACA,AACD,eAAe,eAAe,SAAS,QAAQ,aAAa,mBAAmB,CAC9E,AACD,oCACA,eAAe,eAAe,CAC7B,CACA,AACD,6BAA6B,WAAW,CACvC,AACD,cAAc,kBAAkB,gBAAgB,mCAAmC,2BAA2B,wBAA+B,kBAAkB,CAC9J",file:"Notification.vue",sourcesContent:["\n@keyframes spinAround{\nfrom{transform:rotate(0deg)\n}\nto{transform:rotate(359deg)\n}\n}\n.notifications{position:fixed;top:50px;right:0;z-index:1257;pointer-events:none\n}\n@media screen and (min-width: 769px){\n.notifications{max-width:320px\n}\n}\n.notifications .notification{margin:20px\n}\n.notification{position:relative;min-width:240px;-webkit-backface-visibility:hidden;backface-visibility:hidden;transform:translate3d(0, 0, 0);pointer-events:all\n}\n"],sourceRoot:"webpack://"}])},133:function(t,e,i){var n=i(132);"string"==typeof n&&(n=[[t.i,n,""]]);i(71)(n,{});n.locals&&(t.exports=n.locals)},134:function(t,e,i){i(133);var n=i(0)(i(131),i(135),null,null);t.exports=n.exports},135:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("transition",{attrs:{name:t.transition,mode:"in-out",appear:"","appear-active-class":t.enterClass,"enter-active-class":t.enterClass,"leave-active-class":t.leaveClass},on:{"after-leave":t.afterLeave}},[t.show?i("div",{class:["notification","animated",t.type?"is-"+t.type:""]},[i("button",{staticClass:"delete touchable",on:{click:function(e){t.close()}}}),t._v(" "),t.title?i("div",{staticClass:"title is-5"},[t._v(t._s(t.title))]):t._e(),t._v("\n    "+t._s(t.message)+"\n  ")]):t._e()])},staticRenderFns:[]}},545:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(11),s=i(2),a=i.n(s),r=i(134),o=i.n(r),c=a.a.extend(o.a),l=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{title:"",message:"",type:"",direction:"",duration:4500,container:".notifications"};return new c({el:document.createElement("div"),propsData:t})};e.default={components:{Tooltip:n.a},data:function(){return{csrf:"",plaintext:"",cipher:""}},computed:{},filters:{},mounted:function(){this.$http.get("/api/transit").then(function(t){this.csrf=t.headers.get("x-csrf-token")},function(t){l({title:"Error",message:t.body.error,type:"danger"}),console.log(t.body.error)})},methods:{encryptText:function(){var t={Str:this.plaintext},e={headers:{"X-CSRF-Token":this.csrf}};this.$http.post("/api/transit/encrypt",t,e).then(function(t){this.cipher=t.data.result,this.plaintext="",l({title:"Success",message:"Encryption successful",type:"success"})},function(t){l({title:"Error",message:t.body.error,type:"danger"}),console.log(t.body.error)})},decryptText:function(){var t={Str:this.cipher},e={headers:{"X-CSRF-Token":this.csrf}};this.$http.post("/api/transit/decrypt",t,e).then(function(t){this.plaintext=t.data.result,this.cipher="",l({title:"Success",message:"Decryption successful",type:"success"})},function(t){l({title:"Error",message:t.body.error,type:"danger"}),console.log(t.body.error)})},clearPlaintext:function(){this.plaintext=""},clearCipher:function(){this.cipher=""}}}},591:function(t,e,i){e=t.exports=i(70)(),e.push([t.i,".button[data-v-035d02ca]{margin:5px 0 0}.control .button[data-v-035d02ca]{margin:inherit}.fa-trash-o[data-v-035d02ca]{color:red}.fa-info[data-v-035d02ca]{color:#87cefa}","",{version:3,sources:["/./client/views/tools/Transit.vue"],names:[],mappings:"AACA,yBACE,cAAgB,CACjB,AACD,kCACE,cAAgB,CACjB,AACD,6BACE,SAAW,CACZ,AACD,0BACE,aAAoB,CACrB",file:"Transit.vue",sourcesContent:["\n.button[data-v-035d02ca] {\n  margin: 5px 0 0;\n}\n.control .button[data-v-035d02ca] {\n  margin: inherit;\n}\n.fa-trash-o[data-v-035d02ca] {\n  color: red;\n}\n.fa-info[data-v-035d02ca] {\n  color: lightskyblue;\n}\n"],sourceRoot:"webpack://"}])},636:function(t,e,i){var n=i(591);"string"==typeof n&&(n=[[t.i,n,""]]);i(71)(n,{});n.locals&&(t.exports=n.locals)},722:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"tile is-ancestor is-vertical"},[i("div",{staticClass:"tile is-parent"},[i("div",{staticClass:"tile is-parent is-vertical is-6"},[i("article",{staticClass:"tile is-child box"},[i("h4",{staticClass:"title is-4"},[t._v("Encrypt")]),t._v(" "),i("p",{staticClass:"control"},[i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.plaintext,expression:"plaintext"}],staticClass:"textarea",attrs:{placeholder:"Paste something here"},domProps:{value:t._s(t.plaintext)},on:{input:function(e){e.target.composing||(t.plaintext=e.target.value)}}})]),t._v(" "),i("p",{staticClass:"control has-addons has-addons-right"},[i("a",{staticClass:"button is-primary is-outlined",on:{click:t.encryptText}},[t._v("\n              Encrypt\n              "),t._m(0)]),t._v(" "),i("a",{staticClass:"button is-danger is-outlined",on:{click:t.clearPlaintext}},[t._v("\n              Clear\n              "),t._m(1)])])])]),t._v(" "),i("div",{staticClass:"tile is-parent is-vertical is-6"},[i("article",{staticClass:"tile is-child box"},[i("h4",{staticClass:"title is-4"},[t._v("Decrypt")]),t._v(" "),i("p",{staticClass:"control"},[i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.cipher,expression:"cipher"}],staticClass:"textarea",attrs:{placeholder:"Paste something here"},domProps:{value:t._s(t.cipher)},on:{input:function(e){e.target.composing||(t.cipher=e.target.value)}}})]),t._v(" "),i("p",{staticClass:"control has-addons has-addons-right"},[i("a",{staticClass:"button is-primary is-outlined",on:{click:t.decryptText}},[t._v("\n              Decrypt\n              "),t._m(2)]),t._v(" "),i("a",{staticClass:"button is-danger is-outlined",on:{click:t.clearCipher}},[t._v("\n              Clear\n              "),t._m(3)])])])])]),t._v(" "),t._m(4)])])},staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("span",{staticClass:"icon is-small"},[i("i",{staticClass:"fa fa-check"})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("span",{staticClass:"icon is-small"},[i("i",{staticClass:"fa fa-times"})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("span",{staticClass:"icon is-small"},[i("i",{staticClass:"fa fa-check"})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("span",{staticClass:"icon is-small"},[i("i",{staticClass:"fa fa-times"})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"tile is-parent"},[i("div",{staticClass:"tile is-parent is-child"},[i("article",{staticClass:"tile is-child box"},[i("h4",{staticClass:"title is-4"},[t._v("This tool uses the transit backend to encrypt and decrypt arbitrary strings")])])])])}]}}});
//# sourceMappingURL=24.6f8f1e2fd918f8b3c4ca.js.map