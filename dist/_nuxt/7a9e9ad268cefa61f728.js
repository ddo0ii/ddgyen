(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{272:function(t,e,n){var content=n(273);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(12).default)("01907af4",content,!0,{sourceMap:!1})},273:function(t,e,n){(e=n(11)(!1)).push([t.i,".theme--light.v-btn-toggle:not(.v-btn-toggle--group){background:#fff;color:rgba(0,0,0,.87)}.theme--light.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn{border-color:rgba(0,0,0,.12)!important}.theme--light.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn:focus:not(:active){border-color:rgba(0,0,0,.26)}.theme--light.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn .v-icon{color:#000}.theme--dark.v-btn-toggle:not(.v-btn-toggle--group){background:#424242;color:#fff}.theme--dark.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn{border-color:hsla(0,0%,100%,.12)!important}.theme--dark.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn:focus:not(:active){border-color:hsla(0,0%,100%,.3)}.theme--dark.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn .v-icon{color:#fff}.v-btn-toggle{border-radius:4px;display:-webkit-inline-box;display:inline-flex;max-width:100%}.v-btn-toggle>.v-btn.v-btn{border-radius:0;border-style:solid;border-width:thin;box-shadow:none;opacity:.8;padding:0 12px}.v-btn-toggle>.v-btn.v-btn:first-child{border-top-left-radius:inherit;border-bottom-left-radius:inherit}.v-btn-toggle>.v-btn.v-btn:last-child{border-top-right-radius:inherit;border-bottom-right-radius:inherit}.v-btn-toggle>.v-btn.v-btn--active{color:inherit;opacity:1}.v-btn-toggle>.v-btn.v-btn:after{display:none}.v-btn-toggle>.v-btn.v-btn:not(:first-child){border-left-width:0}.v-btn-toggle:not(.v-btn-toggle--dense) .v-btn.v-btn.v-size--default{height:48px;min-height:0;min-width:48px}.v-btn-toggle--borderless>.v-btn.v-btn{border-width:0}.v-btn-toggle--dense>.v-btn.v-btn{padding:0 8px}.v-btn-toggle--group{border-radius:0}.v-btn-toggle--group>.v-btn.v-btn{background-color:transparent!important;border-color:transparent;margin:4px;min-width:auto}.v-btn-toggle--rounded{border-radius:24px}.v-btn-toggle--shaped{border-radius:24px 4px}.v-btn-toggle--tile{border-radius:0}",""]),t.exports=e},283:function(t,e,n){"use strict";n(10),n(8),n(5),n(4),n(7);var o=n(2),r=(n(272),n(74)),l=r.a.extend({name:"button-group",provide:function(){return{btnToggle:this}},computed:{classes:function(){return r.a.options.computed.classes.call(this)}},methods:{genData:r.a.options.methods.genData}}),c=n(16),v=n(9);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(v.a)(l,c.a).extend({name:"v-btn-toggle",props:{backgroundColor:String,borderless:Boolean,dense:Boolean,group:Boolean,rounded:Boolean,shaped:Boolean,tile:Boolean},computed:{classes:function(){return h({},l.options.computed.classes.call(this),{"v-btn-toggle":!0,"v-btn-toggle--borderless":this.borderless,"v-btn-toggle--dense":this.dense,"v-btn-toggle--group":this.group,"v-btn-toggle--rounded":this.rounded,"v-btn-toggle--shaped":this.shaped,"v-btn-toggle--tile":this.tile},this.themeClasses)}},methods:{genData:function(){var data=this.setTextColor(this.color,h({},l.options.methods.genData.call(this)));return this.group?data:this.setBackgroundColor(this.backgroundColor,data)}}})},298:function(t,e,n){var content=n(335);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(12).default)("9634d84a",content,!0,{sourceMap:!1})},334:function(t,e,n){"use strict";var o=n(298);n.n(o).a},335:function(t,e,n){(e=n(11)(!1)).push([t.i,".btn[data-v-9cf315c8]{border:#dce2e9}.being[data-v-9cf315c8]{display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center}",""]),t.exports=e},374:function(t,e,n){"use strict";n.r(e);var o={name:"chwideug",data:function(){return{text1:"a1",text2:"b1",text3:"c1"}}},r=(n(334),n(50)),l=n(72),c=n.n(l),v=n(127),d=n(283),h=n(294),m=n(270),x=n(282),w=n(366),f=n(314),_=n(315),y=n(69),k=n(41),C=n(285),O=n(266),S=n(290),V=n(369),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-layout",{attrs:{column:"column",row:"row"}},[n("v-flex",{attrs:{wrap:"wrap"}},[n("v-list-item",[n("v-list-item-content",[n("v-list-item-title",{staticClass:"font-weight-black"},[t._v("대상물 구분")]),t._v(" "),n("v-btn-toggle",{staticStyle:{"flex-wrap":"wrap","min-width":"100%","max-width":"100%"},attrs:{tile:"tile",color:"green"},model:{value:t.text1,callback:function(e){t.text1=e},expression:"text1"}},[n("v-btn",{staticClass:"btn; caption",staticStyle:{"min-width":"50%","max-width":"50%"},attrs:{height:"40px",value:"a1",color:"white"}},[t._v("배우자")]),t._v(" "),n("v-btn",{staticClass:"btn; caption",staticStyle:{"min-width":"50%","max-width":"50%"},attrs:{height:"40px",value:"a2",color:"white"}},[t._v("직계존속")]),t._v(" "),n("v-btn",{staticClass:"btn; caption",staticStyle:{"min-width":"33%","max-width":"33%"},attrs:{height:"40px",value:"a3",color:"white"}},[t._v("직계비속")]),t._v(" "),n("v-btn",{staticClass:"btn; caption",staticStyle:{"min-width":"33%","max-width":"33%"},attrs:{height:"40px",value:"a4",color:"white"}},[t._v("기타친족")]),t._v(" "),n("v-btn",{staticClass:"btn; caption",staticStyle:{"min-width":"34%","max-width":"34%"},attrs:{height:"40px",value:"a5",color:"white"}},[t._v("타인")])],1)],1)],1),t._v(" "),n("v-col",{attrs:{cols:"11"}},[n("v-row",{attrs:{justify:"end"}},[n("v-dialog",{attrs:{width:"600px"},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("v-btn",t._g({staticClass:"caption",attrs:{color:"black",dark:"dark"}},o),[t._v("용어정리")])]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[t._v(" "),n("v-card",[n("v-card-title",[n("span",{staticClass:"headline"},[t._v("용어정리")])]),t._v(" "),n("v-card-text",[t._v("\n                            ※ 세대 생략"),n("br"),t._v('\n                                의미 - 증여자가 수증자의 "부모가 아닌 직계 존속"이면 할증함. 단 수증자의 최근인인 직계존속이 사망하여 그 사망자의 친근칙인 직계존속이\n                                증여하는 경우는 제외'),n("br"),t._v("\n                                    예시- 손자의 부모가 살아있는 상태에서 할아버지가 손자에게 증여하는 경우"),n("br"),t._v(" "),n("br"),t._v("\n\n                                            ※ 관계명칭"),n("br"),t._v("\n                                                * 배우자"),n("br"),t._v("\n                                                    의미 - 혼인(신고)을 통해 결합된 남녀관계에서 상대방을 의미"),n("br"),t._v("\n                                                        예시 – 처, 남편"),n("br"),t._v(" "),n("br"),t._v("\n\n                                                                * 직계존손"),n("br"),t._v("\n                                                                    의미 - 조상으로부터 직선으로 계속하여 자기에 이르기까지의 혈족"),n("br"),t._v("\n                                                                        예시 - 조,모,양부,양모,조부,조모,증조부,증조모,고조부,고조모,외조부,외조모,계부,계모,외증조부,외증조모,외고조부,외고조모"),n("br"),t._v(" "),n("br"),t._v("\n\n                                                                                * 기타친족"),n("br"),t._v("\n                                                                                    의미 - 6촌이내의 혈족 및 4촌이내의 인척"),n("br"),t._v("\n                                                                                        예시 -\n                                                                                        형,제,매,누이,오빠,언지,자부,사위,시부,시모,장인,장모,백부,백모,숙부,숙모,형수,제수,시숙,올케,종형,종형수,종제,종제수,형부,매부,시누이,종매,종매부,제부,조카,동서,손부,손서,증손부\n\n                                                                                    ")]),t._v(" "),n("v-card-actions",[n("v-spacer"),t._v(" "),n("v-btn",{attrs:{color:"green darken-1",text:"text"},on:{click:function(e){t.dialog=!1}}},[t._v("OK")])],1)],1)],1)],1)],1),t._v(" "),"a2"==t.text1?n("div",[n("v-list-item",[n("v-list-item-content",[n("v-list-item-title",{staticClass:"font-weight-black"},[t._v("수증자 연령 구분")]),t._v(" "),n("v-btn-toggle",{staticStyle:{"flex-wrap":"wrap","min-width":"100%","max-width":"100%"},attrs:{tile:"tile",color:"green"},model:{value:t.text2,callback:function(e){t.text2=e},expression:"text2"}},[n("v-btn",{staticClass:"btn; caption",staticStyle:{"min-width":"50%","max-width":"50%"},attrs:{height:"40px",value:"b1",color:"white"}},[t._v("성년")]),t._v(" "),n("v-btn",{staticClass:"btn; caption",staticStyle:{"min-width":"50%","max-width":"50%"},attrs:{height:"40px",value:"b2",color:"white"}},[t._v("미성년")])],1)],1)],1),t._v(" "),n("v-list-item",[n("v-list-item-content",[n("v-list-item-title",{staticClass:"font-weight-black"},[t._v("수증자 - 증여자 관계 구분")]),t._v(" "),n("v-btn-toggle",{staticStyle:{"flex-wrap":"wrap","min-width":"100%","max-width":"100%"},attrs:{tile:"tile",color:"green"},model:{value:t.text3,callback:function(e){t.text3=e},expression:"text3"}},[n("v-btn",{staticClass:"btn; caption",staticStyle:{"min-width":"50%","max-width":"50%"},attrs:{height:"40px",value:"c1",color:"white"}},[t._v("세대 생략인 경우")]),t._v(" "),n("v-btn",{staticClass:"btn; caption",staticStyle:{"min-width":"50%","max-width":"50%"},attrs:{height:"40px",value:"c2",color:"white"}},[t._v("세대 생략이 아닌 경우")])],1)],1)],1)],1):t._e(),t._v(" "),n("v-list-item",[n("v-list-item-content",[n("v-row",[n("v-col",{attrs:{cols:"4"}},[n("v-subheader",{staticClass:"caption",attrs:{color:"green darken-4"}},[t._v("증여금액")])],1),t._v(" "),n("v-col",{attrs:{cols:"7"}},[n("v-text-field",{staticClass:"caption",attrs:{placeholder:"증여금액 입력",suffix:"만원"}})],1)],1)],1)],1),t._v(" "),n("div",{staticClass:"being"},[n("v-btn",{attrs:{"max-width":"80%","min-width":"80%",color:"#2D9527",dark:"dark"}},[t._v("계산하기")])],1)],1)],1)}),[],!1,null,"9cf315c8",null);e.default=component.exports;c()(component,{VBtn:v.a,VBtnToggle:d.a,VCard:h.a,VCardActions:m.a,VCardText:m.b,VCardTitle:m.c,VCol:x.a,VDialog:w.a,VFlex:f.a,VLayout:_.a,VListItem:y.a,VListItemContent:k.a,VListItemTitle:k.b,VRow:C.a,VSpacer:O.a,VSubheader:S.a,VTextField:V.a})}}]);