webpackJsonp([28,46],{101:function(r,e,a){a(659);var t=a(0)(a(537),a(751),"data-v-5082a065",null);r.exports=t.exports},537:function(r,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var t=a(11),n=a(712),i=a.n(n);e.default={components:{Tooltip:t.a,Slider:i.a},data:function(){return{value:23}},computed:{per:function(){return this.value+"%"}},methods:{update:function(r){this.value=Number(r)}}}},566:function(r,e,a){"use strict";function t(r,e,a){return e in r?Object.defineProperty(r,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):r[e]=a,r}Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{min:{type:Number,default:0},max:{type:Number,default:1},step:{type:Number,default:.01},value:Number,type:String,name:String,size:String,isFullwidth:Boolean,disabled:Boolean,vertical:Boolean},data:function(){return{realValue:this.value}},mounted:function(){this.$el.style.setProperty("--low",this.low),this.$el.style.setProperty("--high",this.high)},watch:{realValue:function(r){this.$el.style.setProperty("--high",this.high),this.$emit("change",r)},value:function(r){this.realValue=r}},computed:{low:function(){return"0%"},high:function(){return this.realValue/this.max*100+"%"},classObject:function(){var r,e=this.type,a=this.size,n=this.isFullwidth;return r={slider:!0},t(r,"is-"+e,e),t(r,"is-"+a,a),t(r,"is-fullwidth",n),r}}}},614:function(r,e,a){e=r.exports=a(70)(),e.push([r.i,".button[data-v-5082a065]{margin:5px 0 0}p[data-v-5082a065]{margin-bottom:20px}.tooltip-value[data-v-5082a065]{width:100%}","",{version:3,sources:["/./client/views/components/Slider.vue"],names:[],mappings:"AACA,yBAAyB,cAAc,CACtC,AACD,mBAAmB,kBAAkB,CACpC,AACD,gCAAgC,UAAU,CACzC",file:"Slider.vue",sourcesContent:["\n.button[data-v-5082a065]{margin:5px 0 0\n}\np[data-v-5082a065]{margin-bottom:20px\n}\n.tooltip-value[data-v-5082a065]{width:100%\n}\n"],sourceRoot:"webpack://"}])},630:function(r,e,a){e=r.exports=a(70)(),e.push([r.i,'input[type=range].slider{--height:8px;border:none;border-radius:290486px;display:block;height:var(--height);padding:0;margin:0;cursor:pointer;outline:none;background:#dbdbdb;-webkit-tap-highlight-color:transparent}input[type=range].slider.is-small{--height:4px}input[type=range].slider.is-medium{--height:12px}input[type=range].slider.is-large{--height:16px}input[type=range].slider.is-fullwidth{width:100%}input[type=range].slider:focus{outline:none}input[type=range].slider::-moz-focus-outer{border:none}input[type=range].slider,input[type=range].slider::-webkit-slider-runnable-track,input[type=range].slider::-webkit-slider-thumb{-webkit-appearance:none;appearance:none}input[type=range].slider::-webkit-slider-thumb{border-radius:50%;height:calc(var(--height) * 2.33);width:calc(var(--height) * 2.33);background-color:#fff;border:calc(var(--height) / 2) solid #4a4a4a;box-shadow:0 2px 3px hsla(0,0%,7%,.1);transform:translateZ(0);transition:.1165s ease-in-out;box-sizing:border-box}input[type=range].slider::-webkit-slider-thumb:hover{transform:scale(1.25)}input[type=range].slider::-webkit-slider-thumb:active{cursor:-webkit-grabbing;cursor:grabbing}input[type=range].slider::-webkit-slider-runnable-track{display:flex;align-items:center;height:var(--height);border-radius:290486px;--track-background:linear-gradient(90deg,transparent var(--low),#4a4a4a 0%,#4a4a4a var(--high),transparent 0%) no-repeat 0 100%;background:var(--track-background);transform:translateZ(0);transition:.1165s}input[type=range].slider::-moz-range-thumb{border-radius:50%;height:calc(var(--height) * 2.33);width:calc(var(--height) * 2.33);background-color:#fff;border:calc(var(--height) / 2) solid #4a4a4a;box-shadow:0 2px 3px hsla(0,0%,7%,.1);transform:translateZ(0);transition:.1165s ease-in-out;box-sizing:border-box}input[type=range].slider::-moz-range-thumb:hover{transform:scale(1.25)}input[type=range].slider::-moz-range-thumb:active{cursor:grabbing}input[type=range].slider::-moz-range-progress:focus{outline:0;border:0}input[type=range].slider::-moz-range-track{background:transparent}input[type=range].slider::-moz-range-progress{display:flex;align-items:center;width:100%;height:var(--height);border-radius:290486px;background-color:#4a4a4a}input[type=range].slider::-ms-thumb{border-radius:50%;height:calc(var(--height) * 2.33);width:calc(var(--height) * 2.33);background-color:#fff;border:calc(var(--height) / 2) solid #4a4a4a;box-shadow:0 2px 3px hsla(0,0%,7%,.1);transform:translateZ(0);transition:.1165s ease-in-out;box-sizing:border-box}input[type=range].slider::-ms-thumb:hover{-ms-transform:scale(1.25);transform:scale(1.25)}input[type=range].slider::-ms-thumb:active{cursor:grabbing}input[type=range].slider::-ms-tooltip{display:none}input[type=range].slider.is-#fff::-webkit-slider-thumb{border-color:#fff}input[type=range].slider.is-#fff::-webkit-slider-runnable-track{--track-background:linear-gradient(90deg,transparent var(--low),#fff 0%,#fff var(--high),transparent 0%) no-repeat 0 100%;background:var(--track-background)}input[type=range].slider.is-#fff::-moz-range-thumb{border-color:#fff}input[type=range].slider.is-#fff::-moz-range-progress{background-color:#fff}input[type=range].slider.is-#fff::-ms-thumb{border-color:#fff}input[type=range].slider.is-#fff::-ms-fill-lower{background-color:#fff}input[type=range].slider.is-#000::-webkit-slider-thumb{border-color:#0a0a0a}input[type=range].slider.is-#000::-webkit-slider-runnable-track{--track-background:linear-gradient(90deg,transparent var(--low),#0a0a0a 0%,#0a0a0a var(--high),transparent 0%) no-repeat 0 100%;background:var(--track-background)}input[type=range].slider.is-#000::-moz-range-thumb{border-color:#0a0a0a}input[type=range].slider.is-#000::-moz-range-progress{background-color:#0a0a0a}input[type=range].slider.is-#000::-ms-thumb{border-color:#0a0a0a}input[type=range].slider.is-#000::-ms-fill-lower{background-color:#0a0a0a}input[type=range].slider.is-light::-webkit-slider-thumb{border-color:#f5f5f5}input[type=range].slider.is-light::-webkit-slider-runnable-track{--track-background:linear-gradient(90deg,transparent var(--low),#f5f5f5 0%,#f5f5f5 var(--high),transparent 0%) no-repeat 0 100%;background:var(--track-background)}input[type=range].slider.is-light::-moz-range-thumb{border-color:#f5f5f5}input[type=range].slider.is-light::-moz-range-progress{background-color:#f5f5f5}input[type=range].slider.is-light::-ms-thumb{border-color:#f5f5f5}input[type=range].slider.is-light::-ms-fill-lower{background-color:#f5f5f5}input[type=range].slider.is-dark::-webkit-slider-thumb{border-color:#363636}input[type=range].slider.is-dark::-webkit-slider-runnable-track{--track-background:linear-gradient(90deg,transparent var(--low),#363636 0%,#363636 var(--high),transparent 0%) no-repeat 0 100%;background:var(--track-background)}input[type=range].slider.is-dark::-moz-range-thumb{border-color:#363636}input[type=range].slider.is-dark::-moz-range-progress{background-color:#363636}input[type=range].slider.is-dark::-ms-thumb{border-color:#363636}input[type=range].slider.is-dark::-ms-fill-lower{background-color:#363636}input[type=range].slider.is-primary::-webkit-slider-thumb{border-color:#00d1b2}input[type=range].slider.is-primary::-webkit-slider-runnable-track{--track-background:linear-gradient(90deg,transparent var(--low),#00d1b2 0%,#00d1b2 var(--high),transparent 0%) no-repeat 0 100%;background:var(--track-background)}input[type=range].slider.is-primary::-moz-range-thumb{border-color:#00d1b2}input[type=range].slider.is-primary::-moz-range-progress{background-color:#00d1b2}input[type=range].slider.is-primary::-ms-thumb{border-color:#00d1b2}input[type=range].slider.is-primary::-ms-fill-lower{background-color:#00d1b2}input[type=range].slider.is-info::-webkit-slider-thumb{border-color:#3273dc}input[type=range].slider.is-info::-webkit-slider-runnable-track{--track-background:linear-gradient(90deg,transparent var(--low),#3273dc 0%,#3273dc var(--high),transparent 0%) no-repeat 0 100%;background:var(--track-background)}input[type=range].slider.is-info::-moz-range-thumb{border-color:#3273dc}input[type=range].slider.is-info::-moz-range-progress{background-color:#3273dc}input[type=range].slider.is-info::-ms-thumb{border-color:#3273dc}input[type=range].slider.is-info::-ms-fill-lower{background-color:#3273dc}input[type=range].slider.is-success::-webkit-slider-thumb{border-color:#23d160}input[type=range].slider.is-success::-webkit-slider-runnable-track{--track-background:linear-gradient(90deg,transparent var(--low),#23d160 0%,#23d160 var(--high),transparent 0%) no-repeat 0 100%;background:var(--track-background)}input[type=range].slider.is-success::-moz-range-thumb{border-color:#23d160}input[type=range].slider.is-success::-moz-range-progress{background-color:#23d160}input[type=range].slider.is-success::-ms-thumb{border-color:#23d160}input[type=range].slider.is-success::-ms-fill-lower{background-color:#23d160}input[type=range].slider.is-warning::-webkit-slider-thumb{border-color:#ffdd57}input[type=range].slider.is-warning::-webkit-slider-runnable-track{--track-background:linear-gradient(90deg,transparent var(--low),#ffdd57 0%,#ffdd57 var(--high),transparent 0%) no-repeat 0 100%;background:var(--track-background)}input[type=range].slider.is-warning::-moz-range-thumb{border-color:#ffdd57}input[type=range].slider.is-warning::-moz-range-progress{background-color:#ffdd57}input[type=range].slider.is-warning::-ms-thumb{border-color:#ffdd57}input[type=range].slider.is-warning::-ms-fill-lower{background-color:#ffdd57}input[type=range].slider.is-danger::-webkit-slider-thumb{border-color:#ff3860}input[type=range].slider.is-danger::-webkit-slider-runnable-track{--track-background:linear-gradient(90deg,transparent var(--low),#ff3860 0%,#ff3860 var(--high),transparent 0%) no-repeat 0 100%;background:var(--track-background)}input[type=range].slider.is-danger::-moz-range-thumb{border-color:#ff3860}input[type=range].slider.is-danger::-moz-range-progress{background-color:#ff3860}input[type=range].slider.is-danger::-ms-thumb{border-color:#ff3860}input[type=range].slider.is-danger::-ms-fill-lower{background-color:#ff3860}input[type=range].slider[orient=vertical]{-webkit-writing-mode:bt-lr;-ms-writing-mode:bt-lr;writing-mode:bt-lr;-webkit-appearance:slider-vertical;height:200px;width:var(--height);-webkit-transform-origin:0 0;position:relative;top:0;left:0}input[type=range].slider[orient=vertical].is-#fff::-webkit-slider-thumb:after{width:50px;height:50px;background-color:red;border:2px solid #fff;content:"";position:absolute;z-index:233}input[type=range].slider[orient=vertical].is-#fff::-webkit-slider-runnable-track{display:block;--track-background:linear-gradient(0deg,transparent var(--low),#fff 0,#fff var(--high),transparent 0) no-repeat 0 100%;background:var(--track-background)}input[type=range].slider[orient=vertical].is-#000::-webkit-slider-thumb:after{width:50px;height:50px;background-color:red;border:2px solid #0a0a0a;content:"";position:absolute;z-index:233}input[type=range].slider[orient=vertical].is-#000::-webkit-slider-runnable-track{display:block;--track-background:linear-gradient(0deg,transparent var(--low),#0a0a0a 0,#0a0a0a var(--high),transparent 0) no-repeat 0 100%;background:var(--track-background)}input[type=range].slider[orient=vertical].is-light::-webkit-slider-thumb:after{width:50px;height:50px;background-color:red;border:2px solid #f5f5f5;content:"";position:absolute;z-index:233}input[type=range].slider[orient=vertical].is-light::-webkit-slider-runnable-track{display:block;--track-background:linear-gradient(0deg,transparent var(--low),#f5f5f5 0,#f5f5f5 var(--high),transparent 0) no-repeat 0 100%;background:var(--track-background)}input[type=range].slider[orient=vertical].is-dark::-webkit-slider-thumb:after{width:50px;height:50px;background-color:red;border:2px solid #363636;content:"";position:absolute;z-index:233}input[type=range].slider[orient=vertical].is-dark::-webkit-slider-runnable-track{display:block;--track-background:linear-gradient(0deg,transparent var(--low),#363636 0,#363636 var(--high),transparent 0) no-repeat 0 100%;background:var(--track-background)}input[type=range].slider[orient=vertical].is-primary::-webkit-slider-thumb:after{width:50px;height:50px;background-color:red;border:2px solid #00d1b2;content:"";position:absolute;z-index:233}input[type=range].slider[orient=vertical].is-primary::-webkit-slider-runnable-track{display:block;--track-background:linear-gradient(0deg,transparent var(--low),#00d1b2 0,#00d1b2 var(--high),transparent 0) no-repeat 0 100%;background:var(--track-background)}input[type=range].slider[orient=vertical].is-info::-webkit-slider-thumb:after{width:50px;height:50px;background-color:red;border:2px solid #3273dc;content:"";position:absolute;z-index:233}input[type=range].slider[orient=vertical].is-info::-webkit-slider-runnable-track{display:block;--track-background:linear-gradient(0deg,transparent var(--low),#3273dc 0,#3273dc var(--high),transparent 0) no-repeat 0 100%;background:var(--track-background)}input[type=range].slider[orient=vertical].is-success::-webkit-slider-thumb:after{width:50px;height:50px;background-color:red;border:2px solid #23d160;content:"";position:absolute;z-index:233}input[type=range].slider[orient=vertical].is-success::-webkit-slider-runnable-track{display:block;--track-background:linear-gradient(0deg,transparent var(--low),#23d160 0,#23d160 var(--high),transparent 0) no-repeat 0 100%;background:var(--track-background)}input[type=range].slider[orient=vertical].is-warning::-webkit-slider-thumb:after{width:50px;height:50px;background-color:red;border:2px solid #ffdd57;content:"";position:absolute;z-index:233}input[type=range].slider[orient=vertical].is-warning::-webkit-slider-runnable-track{display:block;--track-background:linear-gradient(0deg,transparent var(--low),#ffdd57 0,#ffdd57 var(--high),transparent 0) no-repeat 0 100%;background:var(--track-background)}input[type=range].slider[orient=vertical].is-danger::-webkit-slider-thumb:after{width:50px;height:50px;background-color:red;border:2px solid #ff3860;content:"";position:absolute;z-index:233}input[type=range].slider[orient=vertical].is-danger::-webkit-slider-runnable-track{display:block;--track-background:linear-gradient(0deg,transparent var(--low),#ff3860 0,#ff3860 var(--high),transparent 0) no-repeat 0 100%;background:var(--track-background)}',"",{version:3,sources:["/./node_modules/vue-bulma-slider/src/Slider.vue"],names:[],mappings:"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",file:"Slider.vue",sourcesContent:["\ninput[type=range].slider{--height:8px;border:none;border-radius:290486px;display:block;height:var(--height);padding:0;margin:0;cursor:pointer;outline:none;background:#dbdbdb;-webkit-tap-highlight-color:transparent\n}\ninput[type=range].slider.is-small{--height:4px\n}\ninput[type=range].slider.is-medium{--height:12px\n}\ninput[type=range].slider.is-large{--height:16px\n}\ninput[type=range].slider.is-fullwidth{width:100%\n}\ninput[type=range].slider:focus{outline:none\n}\ninput[type=range].slider::-moz-focus-outer{border:none\n}\ninput[type=range].slider::-webkit-slider-runnable-track,input[type=range].slider::-webkit-slider-thumb,input[type=range].slider{-webkit-appearance:none;appearance:none\n}\ninput[type=range].slider::-webkit-slider-thumb{border-radius:50%;height:calc(var(--height) * 2.33);width:calc(var(--height) * 2.33);background-color:#FFF;border:calc(var(--height) / 2) solid #4a4a4a;box-shadow:0 2px 3px rgba(17,17,17,0.1);transform:translateZ(0);transition:0.1165s ease-in-out;box-sizing:border-box\n}\ninput[type=range].slider::-webkit-slider-thumb:hover{transform:scale(1.25)\n}\ninput[type=range].slider::-webkit-slider-thumb:active{cursor:-webkit-grabbing;cursor:grabbing\n}\ninput[type=range].slider::-webkit-slider-runnable-track{display:flex;align-items:center;height:var(--height);border-radius:290486px;--track-background:linear-gradient(to right, transparent var(--low), #4a4a4a calc(0%), #4a4a4a var(--high), transparent calc(0%)) no-repeat 0 100%;background:var(--track-background);transform:translateZ(0);transition:0.1165s\n}\ninput[type=range].slider::-moz-range-thumb{border-radius:50%;height:calc(var(--height) * 2.33);width:calc(var(--height) * 2.33);background-color:#FFF;border:calc(var(--height) / 2) solid #4a4a4a;box-shadow:0 2px 3px rgba(17,17,17,0.1);transform:translateZ(0);transition:0.1165s ease-in-out;box-sizing:border-box\n}\ninput[type=range].slider::-moz-range-thumb:hover{transform:scale(1.25)\n}\ninput[type=range].slider::-moz-range-thumb:active{cursor:grabbing\n}\ninput[type=range].slider::-moz-range-progress:focus{outline:0;border:0\n}\ninput[type=range].slider::-moz-range-track{background:transparent\n}\ninput[type=range].slider::-moz-range-progress{display:flex;align-items:center;width:100%;height:var(--height);border-radius:290486px;background-color:#4a4a4a\n}\ninput[type=range].slider::-ms-thumb{border-radius:50%;height:calc(var(--height) * 2.33);width:calc(var(--height) * 2.33);background-color:#FFF;border:calc(var(--height) / 2) solid #4a4a4a;box-shadow:0 2px 3px rgba(17,17,17,0.1);transform:translateZ(0);transition:0.1165s ease-in-out;box-sizing:border-box\n}\ninput[type=range].slider::-ms-thumb:hover{-ms-transform:scale(1.25);transform:scale(1.25)\n}\ninput[type=range].slider::-ms-thumb:active{cursor:grabbing\n}\ninput[type=range].slider::-ms-tooltip{display:none\n}\ninput[type=range].slider.is-#fff::-webkit-slider-thumb{border-color:#fff\n}\ninput[type=range].slider.is-#fff::-webkit-slider-runnable-track{--track-background:linear-gradient(to right, transparent var(--low), #fff calc(0%), #fff var(--high), transparent calc(0%)) no-repeat 0 100%;background:var(--track-background)\n}\ninput[type=range].slider.is-#fff::-moz-range-thumb{border-color:#fff\n}\ninput[type=range].slider.is-#fff::-moz-range-progress{background-color:#fff\n}\ninput[type=range].slider.is-#fff::-ms-thumb{border-color:#fff\n}\ninput[type=range].slider.is-#fff::-ms-fill-lower{background-color:#fff\n}\ninput[type=range].slider.is-#000::-webkit-slider-thumb{border-color:#0a0a0a\n}\ninput[type=range].slider.is-#000::-webkit-slider-runnable-track{--track-background:linear-gradient(to right, transparent var(--low), #0a0a0a calc(0%), #0a0a0a var(--high), transparent calc(0%)) no-repeat 0 100%;background:var(--track-background)\n}\ninput[type=range].slider.is-#000::-moz-range-thumb{border-color:#0a0a0a\n}\ninput[type=range].slider.is-#000::-moz-range-progress{background-color:#0a0a0a\n}\ninput[type=range].slider.is-#000::-ms-thumb{border-color:#0a0a0a\n}\ninput[type=range].slider.is-#000::-ms-fill-lower{background-color:#0a0a0a\n}\ninput[type=range].slider.is-light::-webkit-slider-thumb{border-color:#f5f5f5\n}\ninput[type=range].slider.is-light::-webkit-slider-runnable-track{--track-background:linear-gradient(to right, transparent var(--low), #f5f5f5 calc(0%), #f5f5f5 var(--high), transparent calc(0%)) no-repeat 0 100%;background:var(--track-background)\n}\ninput[type=range].slider.is-light::-moz-range-thumb{border-color:#f5f5f5\n}\ninput[type=range].slider.is-light::-moz-range-progress{background-color:#f5f5f5\n}\ninput[type=range].slider.is-light::-ms-thumb{border-color:#f5f5f5\n}\ninput[type=range].slider.is-light::-ms-fill-lower{background-color:#f5f5f5\n}\ninput[type=range].slider.is-dark::-webkit-slider-thumb{border-color:#363636\n}\ninput[type=range].slider.is-dark::-webkit-slider-runnable-track{--track-background:linear-gradient(to right, transparent var(--low), #363636 calc(0%), #363636 var(--high), transparent calc(0%)) no-repeat 0 100%;background:var(--track-background)\n}\ninput[type=range].slider.is-dark::-moz-range-thumb{border-color:#363636\n}\ninput[type=range].slider.is-dark::-moz-range-progress{background-color:#363636\n}\ninput[type=range].slider.is-dark::-ms-thumb{border-color:#363636\n}\ninput[type=range].slider.is-dark::-ms-fill-lower{background-color:#363636\n}\ninput[type=range].slider.is-primary::-webkit-slider-thumb{border-color:#00d1b2\n}\ninput[type=range].slider.is-primary::-webkit-slider-runnable-track{--track-background:linear-gradient(to right, transparent var(--low), #00d1b2 calc(0%), #00d1b2 var(--high), transparent calc(0%)) no-repeat 0 100%;background:var(--track-background)\n}\ninput[type=range].slider.is-primary::-moz-range-thumb{border-color:#00d1b2\n}\ninput[type=range].slider.is-primary::-moz-range-progress{background-color:#00d1b2\n}\ninput[type=range].slider.is-primary::-ms-thumb{border-color:#00d1b2\n}\ninput[type=range].slider.is-primary::-ms-fill-lower{background-color:#00d1b2\n}\ninput[type=range].slider.is-info::-webkit-slider-thumb{border-color:#3273dc\n}\ninput[type=range].slider.is-info::-webkit-slider-runnable-track{--track-background:linear-gradient(to right, transparent var(--low), #3273dc calc(0%), #3273dc var(--high), transparent calc(0%)) no-repeat 0 100%;background:var(--track-background)\n}\ninput[type=range].slider.is-info::-moz-range-thumb{border-color:#3273dc\n}\ninput[type=range].slider.is-info::-moz-range-progress{background-color:#3273dc\n}\ninput[type=range].slider.is-info::-ms-thumb{border-color:#3273dc\n}\ninput[type=range].slider.is-info::-ms-fill-lower{background-color:#3273dc\n}\ninput[type=range].slider.is-success::-webkit-slider-thumb{border-color:#23d160\n}\ninput[type=range].slider.is-success::-webkit-slider-runnable-track{--track-background:linear-gradient(to right, transparent var(--low), #23d160 calc(0%), #23d160 var(--high), transparent calc(0%)) no-repeat 0 100%;background:var(--track-background)\n}\ninput[type=range].slider.is-success::-moz-range-thumb{border-color:#23d160\n}\ninput[type=range].slider.is-success::-moz-range-progress{background-color:#23d160\n}\ninput[type=range].slider.is-success::-ms-thumb{border-color:#23d160\n}\ninput[type=range].slider.is-success::-ms-fill-lower{background-color:#23d160\n}\ninput[type=range].slider.is-warning::-webkit-slider-thumb{border-color:#ffdd57\n}\ninput[type=range].slider.is-warning::-webkit-slider-runnable-track{--track-background:linear-gradient(to right, transparent var(--low), #ffdd57 calc(0%), #ffdd57 var(--high), transparent calc(0%)) no-repeat 0 100%;background:var(--track-background)\n}\ninput[type=range].slider.is-warning::-moz-range-thumb{border-color:#ffdd57\n}\ninput[type=range].slider.is-warning::-moz-range-progress{background-color:#ffdd57\n}\ninput[type=range].slider.is-warning::-ms-thumb{border-color:#ffdd57\n}\ninput[type=range].slider.is-warning::-ms-fill-lower{background-color:#ffdd57\n}\ninput[type=range].slider.is-danger::-webkit-slider-thumb{border-color:#ff3860\n}\ninput[type=range].slider.is-danger::-webkit-slider-runnable-track{--track-background:linear-gradient(to right, transparent var(--low), #ff3860 calc(0%), #ff3860 var(--high), transparent calc(0%)) no-repeat 0 100%;background:var(--track-background)\n}\ninput[type=range].slider.is-danger::-moz-range-thumb{border-color:#ff3860\n}\ninput[type=range].slider.is-danger::-moz-range-progress{background-color:#ff3860\n}\ninput[type=range].slider.is-danger::-ms-thumb{border-color:#ff3860\n}\ninput[type=range].slider.is-danger::-ms-fill-lower{background-color:#ff3860\n}\ninput[type=range].slider[orient=vertical]{-webkit-writing-mode:bt-lr;-ms-writing-mode:bt-lr;writing-mode:bt-lr;-webkit-appearance:slider-vertical;height:200px;width:var(--height);-webkit-transform-origin:0 0;position:relative;top:0;left:0\n}\ninput[type=range].slider[orient=vertical].is-#fff::-webkit-slider-thumb:after{width:50px;height:50px;background-color:red;border:2px solid #fff;content:'';position:absolute;z-index:233\n}\ninput[type=range].slider[orient=vertical].is-#fff::-webkit-slider-runnable-track{display:block;--track-background:linear-gradient(to top, transparent var(--low), #fff 0, #fff var(--high), transparent 0) no-repeat 0 100%;background:var(--track-background)\n}\ninput[type=range].slider[orient=vertical].is-#000::-webkit-slider-thumb:after{width:50px;height:50px;background-color:red;border:2px solid #0a0a0a;content:'';position:absolute;z-index:233\n}\ninput[type=range].slider[orient=vertical].is-#000::-webkit-slider-runnable-track{display:block;--track-background:linear-gradient(to top, transparent var(--low), #0a0a0a 0, #0a0a0a var(--high), transparent 0) no-repeat 0 100%;background:var(--track-background)\n}\ninput[type=range].slider[orient=vertical].is-light::-webkit-slider-thumb:after{width:50px;height:50px;background-color:red;border:2px solid #f5f5f5;content:'';position:absolute;z-index:233\n}\ninput[type=range].slider[orient=vertical].is-light::-webkit-slider-runnable-track{display:block;--track-background:linear-gradient(to top, transparent var(--low), #f5f5f5 0, #f5f5f5 var(--high), transparent 0) no-repeat 0 100%;background:var(--track-background)\n}\ninput[type=range].slider[orient=vertical].is-dark::-webkit-slider-thumb:after{width:50px;height:50px;background-color:red;border:2px solid #363636;content:'';position:absolute;z-index:233\n}\ninput[type=range].slider[orient=vertical].is-dark::-webkit-slider-runnable-track{display:block;--track-background:linear-gradient(to top, transparent var(--low), #363636 0, #363636 var(--high), transparent 0) no-repeat 0 100%;background:var(--track-background)\n}\ninput[type=range].slider[orient=vertical].is-primary::-webkit-slider-thumb:after{width:50px;height:50px;background-color:red;border:2px solid #00d1b2;content:'';position:absolute;z-index:233\n}\ninput[type=range].slider[orient=vertical].is-primary::-webkit-slider-runnable-track{display:block;--track-background:linear-gradient(to top, transparent var(--low), #00d1b2 0, #00d1b2 var(--high), transparent 0) no-repeat 0 100%;background:var(--track-background)\n}\ninput[type=range].slider[orient=vertical].is-info::-webkit-slider-thumb:after{width:50px;height:50px;background-color:red;border:2px solid #3273dc;content:'';position:absolute;z-index:233\n}\ninput[type=range].slider[orient=vertical].is-info::-webkit-slider-runnable-track{display:block;--track-background:linear-gradient(to top, transparent var(--low), #3273dc 0, #3273dc var(--high), transparent 0) no-repeat 0 100%;background:var(--track-background)\n}\ninput[type=range].slider[orient=vertical].is-success::-webkit-slider-thumb:after{width:50px;height:50px;background-color:red;border:2px solid #23d160;content:'';position:absolute;z-index:233\n}\ninput[type=range].slider[orient=vertical].is-success::-webkit-slider-runnable-track{display:block;--track-background:linear-gradient(to top, transparent var(--low), #23d160 0, #23d160 var(--high), transparent 0) no-repeat 0 100%;background:var(--track-background)\n}\ninput[type=range].slider[orient=vertical].is-warning::-webkit-slider-thumb:after{width:50px;height:50px;background-color:red;border:2px solid #ffdd57;content:'';position:absolute;z-index:233\n}\ninput[type=range].slider[orient=vertical].is-warning::-webkit-slider-runnable-track{display:block;--track-background:linear-gradient(to top, transparent var(--low), #ffdd57 0, #ffdd57 var(--high), transparent 0) no-repeat 0 100%;background:var(--track-background)\n}\ninput[type=range].slider[orient=vertical].is-danger::-webkit-slider-thumb:after{width:50px;height:50px;background-color:red;border:2px solid #ff3860;content:'';position:absolute;z-index:233\n}\ninput[type=range].slider[orient=vertical].is-danger::-webkit-slider-runnable-track{display:block;--track-background:linear-gradient(to top, transparent var(--low), #ff3860 0, #ff3860 var(--high), transparent 0) no-repeat 0 100%;background:var(--track-background)\n}\n"],sourceRoot:"webpack://"}])},659:function(r,e,a){var t=a(614);"string"==typeof t&&(t=[[r.i,t,""]]);a(71)(t,{});t.locals&&(r.exports=t.locals)},675:function(r,e,a){var t=a(630);"string"==typeof t&&(t=[[r.i,t,""]]);a(71)(t,{});t.locals&&(r.exports=t.locals)},712:function(r,e,a){a(675);var t=a(0)(a(566),a(779),null,null);r.exports=t.exports},751:function(r,e){r.exports={render:function(){var r=this,e=r.$createElement,a=r._self._c||e;return a("div",[a("div",{staticClass:"tile is-ancestor"},[a("div",{staticClass:"tile is-parent is-4"},[a("article",{staticClass:"tile is-child box"},[a("h1",{staticClass:"title"},[r._v("Styles")]),r._v(" "),a("div",{staticClass:"block styles-box"},[a("p",[a("slider",{attrs:{value:15,max:100,step:1,"is-fullwidth":""}})],1),r._v(" "),a("p",[a("slider",{attrs:{type:"primary",value:30,max:100,step:10,"is-fullwidth":""}})],1),r._v(" "),a("p",[a("slider",{attrs:{type:"info",value:45,max:100,step:5,"is-fullwidth":""}})],1),r._v(" "),a("p",[a("slider",{attrs:{type:"success",value:60,max:100,step:20,"is-fullwidth":""}})],1),r._v(" "),a("p",[a("slider",{attrs:{type:"warning",value:75,max:100,step:25,"is-fullwidth":""}})],1),r._v(" "),a("p",[a("slider",{attrs:{type:"danger",value:90,max:100,step:10,"is-fullwidth":""}})],1)])])]),r._v(" "),a("div",{staticClass:"tile is-parent is-4"},[a("article",{staticClass:"tile is-child box"
},[a("h1",{staticClass:"title"},[r._v("Sizes")]),r._v(" "),a("div",{staticClass:"block"},[a("p",[a("slider",{attrs:{size:"small",value:15,max:100,"is-fullwidth":""}})],1),r._v(" "),a("p",[a("slider",{attrs:{size:"",value:30,max:100,"is-fullwidth":""}})],1),r._v(" "),a("p",[a("slider",{attrs:{size:"medium",value:45,max:100,"is-fullwidth":""}})],1),r._v(" "),a("p",[a("slider",{attrs:{size:"large",value:60,max:100,"is-fullwidth":""}})],1)])])]),r._v(" "),a("div",{staticClass:"tile is-parent is-4"},[a("article",{staticClass:"tile is-child box"},[a("h1",{staticClass:"title"},[r._v("Dynamics")]),r._v(" "),a("div",{staticClass:"block"},[a("p",[a("tooltip",{attrs:{type:"success",label:r.per,placement:"top",always:""}},[a("span",{staticClass:"tooltip-value"})]),r._v(" "),a("slider",{attrs:{type:"success",size:"large",value:r.value,max:100,step:1,"is-fullwidth":""},on:{change:r.update}})],1),r._v(" "),a("p",[a("input",{directives:[{name:"model",rawName:"v-model",value:r.value,expression:"value"}],staticClass:"input",attrs:{type:"number",min:"0",max:"100",number:""},domProps:{value:r._s(r.value)},on:{input:function(e){e.target.composing||(r.value=r._n(e.target.value))},blur:function(e){r.$forceUpdate()}}})])])])])])])},staticRenderFns:[]}},779:function(r,e){r.exports={render:function(){var r=this,e=r.$createElement,a=r._self._c||e;return a("input",{directives:[{name:"model",rawName:"v-model",value:r.realValue,expression:"realValue"}],class:r.classObject,attrs:{type:"range",min:r.min,max:r.max,step:r.step,name:r.name,orient:r.vertical&&"vertical",disabled:r.disabled,number:""},domProps:{value:r._s(r.realValue)},on:{input:function(e){r.realValue=e.target.value}}})},staticRenderFns:[]}}});
//# sourceMappingURL=28.c2efbcc4c413e1e3ee6d.js.map