(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{302:function(t,e,l){var content=l(343);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(12).default)("20cd7b6f",content,!0,{sourceMap:!1})},342:function(t,e,l){"use strict";var n=l(302);l.n(n).a},343:function(t,e,l){(e=l(11)(!1)).push([t.i,".btn[data-v-24f60563]{border:#dce2e9}.being[data-v-24f60563]{display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center}",""]),t.exports=e},378:function(t,e,l){"use strict";l.r(e);var n={name:"yangdo",date:(new Date).toISOString().substr(0,10),data:function(){return{text1:"a1",text2:"b1",text3:"c1",menu:!1,modal:!1,menu2:!1,dialog:!1}}},o=(l(342),l(50)),c=l(72),r=l.n(c),v=l(127),d=l(283),x=l(294),m=l(270),f=l(282),h=l(367),w=l(366),_=l(314),k=l(315),y=l(69),C=l(41),V=l(379),S=l(285),O=l(266),T=l(290),D=l(369),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("v-layout",{attrs:{column:"column",row:"row"}},[l("v-flex",{attrs:{wrap:"wrap"}},[l("v-list-item",[l("v-list-item-content",[l("v-list-item-title",{staticClass:"font-weight-black"},[t._v("대상물의 등기 여부")]),t._v(" "),l("v-btn-toggle",{staticStyle:{"flex-wrap":"wrap","min-width":"100%","max-width":"100%"},attrs:{tile:"tile",color:"green"},model:{value:t.text1,callback:function(e){t.text1=e},expression:"text1"}},[l("v-btn",{staticClass:"caption",staticStyle:{"min-width":"50%","max-width":"50%"},attrs:{height:"40px",value:"a1",color:"white"}},[t._v("등기")]),t._v(" "),l("v-btn",{staticClass:"caption",staticStyle:{"min-width":"50%","max-width":"50%"},attrs:{height:"40px",value:"a2",color:"white"}},[t._v("미등기")])],1)],1)],1),t._v(" "),"a1"==t.text1?l("div",[l("v-list-item",[l("v-list-item-content",[l("v-list-item-title",{staticClass:"font-weight-black"},[t._v("대상물 구분")]),t._v(" "),l("v-btn-toggle",{staticStyle:{"flex-wrap":"wrap","min-width":"100%","max-width":"100%"},attrs:{tile:"tile",color:"green"},model:{value:t.text2,callback:function(e){t.text2=e},expression:"text2"}},[l("v-btn",{staticClass:"caption",staticStyle:{"min-width":"50%","max-width":"50%"},attrs:{height:"40px",value:"b1",color:"white"}},[t._v("주택")]),t._v(" "),l("v-btn",{staticClass:"caption",staticStyle:{"min-width":"50%","max-width":"50%"},attrs:{height:"40px",value:"b2",color:"white"}},[t._v("비사업용토지")]),t._v(" "),l("v-btn",{staticClass:"caption",staticStyle:{"min-width":"100%","max-width":"100%"},attrs:{height:"40px",value:"b3",color:"white"}},[t._v("기타 부동산(사업용 토지, 분양권 등)")])],1)],1)],1),t._v(" "),"b1"==t.text2?l("div",[l("v-list-item",[l("v-list-item-content",[l("v-col",{attrs:{cols:"8"}},[l("v-list-item-title",{staticClass:"font-weight-black"},[t._v("일시적 1가구 2주택 조건")])],1),t._v(" "),l("v-col",{attrs:{cols:"4"}},[l("v-row",{attrs:{justify:"center"}},[l("v-dialog",{attrs:{width:"600px"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[l("v-btn",t._g({attrs:{color:"black",dark:"dark"}},n),[t._v("보기")])]}}],null,!1,2830388243),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[t._v(" "),l("v-card",[l("v-card-title",[l("span",{staticClass:"headline"},[t._v("일시적 1가구 2주택 조건")])]),t._v(" "),l("v-card-text",[t._v("기존 주택을 새 주택 구입일로부터 3년 이내 (일부 특정 경우에는 5년 이내)에 팔아야 일시적 1가구 2주택 조건을 만족합니다.\n                                    ")]),t._v(" "),l("v-card-actions",[l("v-spacer"),t._v(" "),l("v-btn",{attrs:{color:"green darken-1",text:"text"},on:{click:function(e){t.dialog=!1}}},[t._v("OK")])],1)],1)],1)],1)],1),t._v(" "),l("v-btn-toggle",{staticStyle:{"flex-wrap":"wrap","min-width":"100%","max-width":"100%"},attrs:{tile:"tile",color:"green"},model:{value:t.text3,callback:function(e){t.text3=e},expression:"text3"}},[l("v-btn",{staticClass:"caption",staticStyle:{"min-width":"50%","max-width":"50%"},attrs:{height:"40px",value:"c1",color:"white"}},[t._v("1주택자(일시적2주택자)")]),t._v(" "),l("v-btn",{staticClass:"caption",staticStyle:{"min-width":"50%","max-width":"50%"},attrs:{height:"40px",value:"c2",color:"white"}},[t._v("2주택자이상")])],1)],1)],1)],1):t._e()],1):t._e(),t._v(" "),l("v-list-item",[l("v-list-item-content",[l("v-list-item-title",{staticClass:"font-weight-black"},[t._v("금액")]),t._v(" "),l("v-col",{attrs:{cols:"6"}},[l("v-menu",{ref:"menu",attrs:{"close-on-content-click":!1,"return-value":t.date,transition:"scale-transition","offset-y":"offset-y","min-width":"290px"},on:{"update:returnValue":function(e){t.date=e},"update:return-value":function(e){t.date=e}},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[l("v-text-field",t._g({staticClass:"caption",attrs:{label:"양도일선택",readonly:"readonly"},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}},n))]}}]),model:{value:t.menu,callback:function(e){t.menu=e},expression:"menu"}},[t._v(" "),l("v-date-picker",{attrs:{"no-title":"no-title",scrollable:"scrollable"},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}},[l("v-btn",{staticClass:"caption",attrs:{text:"text",color:"primary"},on:{click:function(e){t.menu=!1}}},[t._v("Cancel")]),t._v(" "),l("v-btn",{staticClass:"caption",attrs:{text:"text",color:"primary"},on:{click:function(e){return t.$refs.menu.save(t.date)}}},[t._v("OK")])],1)],1)],1),t._v(" "),l("v-col",{attrs:{cols:"6"}},[l("v-text-field",{staticClass:"caption;",attrs:{placeholder:"양도가액",suffix:"만원"}})],1),t._v(" "),l("v-col",{attrs:{cols:"6"}},[l("v-menu",{ref:"menu2",attrs:{"close-on-content-click":!1,"return-value":t.date,transition:"scale-transition","offset-y":"offset-y","min-width":"290px"},on:{"update:returnValue":function(e){t.date=e},"update:return-value":function(e){t.date=e}},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[l("v-text-field",t._g({staticClass:"caption",attrs:{label:"취득일선택",readonly:"readonly"},model:{value:t.date2,callback:function(e){t.date2=e},expression:"date2"}},n))]}}]),model:{value:t.menu2,callback:function(e){t.menu2=e},expression:"menu2"}},[t._v(" "),l("v-date-picker",{attrs:{"no-title":"no-title",scrollable:"scrollable"},model:{value:t.date2,callback:function(e){t.date2=e},expression:"date2"}},[l("v-btn",{staticClass:"caption",attrs:{text:"text",color:"primary"},on:{click:function(e){t.menu2=!1}}},[t._v("Cancel")]),t._v(" "),l("v-btn",{staticClass:"caption",attrs:{text:"text",color:"primary"},on:{click:function(e){return t.$refs.menu2.save(t.date)}}},[t._v("OK")])],1)],1)],1),t._v(" "),l("v-col",{attrs:{cols:"6"}},[l("v-text-field",{staticClass:"caption",attrs:{placeholder:"취득가액",suffix:"만원"}})],1),t._v(" "),l("v-row",[l("v-col",{attrs:{cols:"4"}},[l("v-subheader",{staticClass:"caption",attrs:{color:"green darken-4"}},[t._v("소요경비")])],1),t._v(" "),l("v-col",{attrs:{cols:"7"}},[l("v-text-field",{staticClass:"caption",attrs:{placeholder:"소요경비 입력",suffix:"만원"}})],1)],1)],1)],1),t._v(" "),l("div",{staticClass:"being"},[l("v-btn",{attrs:{"max-width":"80%","min-width":"80%",color:"#2D9527",dark:"dark"}},[t._v("계산하기")])],1)],1)],1)}),[],!1,null,"24f60563",null);e.default=component.exports;r()(component,{VBtn:v.a,VBtnToggle:d.a,VCard:x.a,VCardActions:m.a,VCardText:m.b,VCardTitle:m.c,VCol:f.a,VDatePicker:h.a,VDialog:w.a,VFlex:_.a,VLayout:k.a,VListItem:y.a,VListItemContent:C.a,VListItemTitle:C.b,VMenu:V.a,VRow:S.a,VSpacer:O.a,VSubheader:T.a,VTextField:D.a})}}]);