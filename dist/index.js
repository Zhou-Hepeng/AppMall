// { "framework": "Vue"} 

!function(t){function e(s){if(i[s])return i[s].exports;var a=i[s]={i:s,l:!1,exports:{}};return t[s].call(a.exports,a,a.exports,e),a.l=!0,a.exports}var i={};e.m=t,e.c=i,e.i=function(t){return t},e.d=function(t,i,s){e.o(t,i)||Object.defineProperty(t,i,{configurable:!1,enumerable:!0,get:s})},e.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(i,"a",i),i},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=3)}([function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=weex.requireModule("meta");s&&s.setViewport({width:720}),e.default={data:{banner:"http://frontendsvn.360che.com/icon-project/wap/m/product-library/M/images/banner.png"},methods:{}}},function(t,e){t.exports={discount:{paddingLeft:8,paddingRight:8,flexDirection:"row",justifyContent:"flex-start",alignItems:"center",flexWrap:"wrap"},"discount-list":{width:336,height:444,marginLeft:7,marginRight:7,backgroundColor:"#ffffff"},"discount-img":{position:"relative",width:336,height:224},"discount-image":{width:336,height:224},tag:{position:"absolute",top:12,left:0,width:112,height:40,justifyContent:"center",alignItems:"center",borderTopRightRadius:20,borderBottomRightRadius:20,backgroundColor:"rgba(255,102,0,0.8)"},"tag-text":{fontSize:24,color:"#FFFFFF"},describe:{position:"absolute",left:0,right:0,bottom:0,height:40,paddingLeft:16,justifyContent:"center",backgroundColor:"rgba(0,0,0,0.6)"},"describe-text":{fontSize:24,color:"#FFFFFF"},"discount-content":{paddingLeft:16,paddingRight:16,paddingBottom:16},"discount-title-text":{flex:1,marginTop:16,fontSize:28,color:"#17181A",WebkitBoxOrient:"vertical",textOverflow:"ellipsis",display:"-webkit-box",WebkitLineClamp:1,overflow:"hidden",lines:1},"discount-price":{height:36,marginTop:4,flexDirection:"row",alignItems:"flex-end"},"discount-price-text":{height:24,color:"#ff6600",fontSize:24},"discount-price-number":{color:"#ff6600",fontSize:36,height:36},"guiding-price":{flexDirection:"row",marginTop:16,alignItems:"flex-end"},"guiding-price-text":{height:20,fontSize:20,color:"#B0B7C0"},"guiding-delect":{textDecoration:"line-through"},"buying-button":{flexDirection:"row",height:64,marginTop:16},"panic-buying":{flex:1,height:64,justifyContent:"center",alignItems:"center",borderTopRightRadius:4,borderBottomLeftRadius:4,borderBottomRightRadius:4},"panic-buying-text":{fontSize:28,color:"#FFFFFF"},"reduce-button":{width:144,height:64,marginRight:16,justifyContent:"center",alignItems:"center",borderTopWidth:2,borderTopStyle:"dashed",borderTopColor:"#ffa000",borderLeftWidth:2,borderLeftStyle:"dashed",borderLeftColor:"#ffa000",borderBottomWidth:2,borderBottomStyle:"dashed",borderBottomColor:"#ffa000",borderRightWidth:2,borderRightStyle:"dashed",borderRightColor:"#ffa000"},"reduce-button-text":{fontSize:28,color:"#FFA000"},"recommend-title":{position:"relative",justifyContent:"center",alignContent:"center",flexDirection:"row"},"recommend-title-text":{position:"absolute",top:10,right:32,ontSize:36,color:"#F44336"},"recommend-list":{flexDirection:"row",marginTop:10,paddingLeft:12,paddingRight:12},"recomment-list-info":{flex:1,marginLeft:4,marginRight:4},"recomment-list-image":{width:224,height:160},"activity-title":{position:"relative",height:100,marginTop:32,marginBottom:16,justifyContent:"center",flexDirection:"row"},"activity-title-wrapper":{position:"relative",width:326,height:96,justifyContent:"center",alignItems:"center",flexDirection:"row"},"activity-image":{position:"absolute",top:0,left:0,width:326,height:96},"activity-text":{fontSize:40,color:"#FFFFFF"},rule:{position:"absolute",right:16,top:0,bottom:12,flexDirection:"row",justifyContent:"flex-end",alignItems:"flex-end"},"rule-text":{opacity:.8,fontSize:24,color:"#FFFFFF"},nav:{flexDirection:"row",height:88,backgroundColor:"rgba(0,0,0,0.2)",paddingLeft:24},"nav-info":{flex:1,justifyContent:"center",alignItems:"center",flexDirection:"row"},"nav-info-text":{fontSize:28,color:"#ffffff"},"nav-info-visible":{fontWeight:"bold"},"nav-car-icon":{width:40,height:28,marginRight:8},"nav-more-icon":{width:24,height:12},container:{position:"absolute",left:0,top:0,right:0,bottom:0},wrapper:{flex:1,backgroundColor:"#CB1E1A"},title:{height:90,flexDirection:"row",backgroundColor:"#ffffff"},back:{height:90,width:160,paddingLeft:40,flexDirection:"row",justifyContent:"center",alignItems:"center"},close:{flexDirection:"row"},"back-icon":{width:17,height:32},"back-text":{marginLeft:30,fontSize:32},"title-wrapper":{flex:1,paddingLeft:30,paddingRight:30,flexDirection:"row",justifyContent:"center",alignItems:"center"},"title-text":{fontSize:36,color:"#2E3033",fontWeight:"bold"},share:{justifyContent:"center",alignItems:"center",flexDirection:"row",width:124,paddingRight:24,height:90,alignContent:"center"},"share-icon":{width:28,height:28,marginRight:8},"share-text":{color:"#ff6600",fontSize:32},banner:{flexDirection:"row",justifyContent:"center",alignItems:"center"},"banner-image":{width:720,height:714},rob:{flexDirection:"row",justifyContent:"center",alignContent:"center"},"rob-wrapper":{position:"relative"},"rob-image":{width:714,height:240},"rob-title":{position:"absolute",left:84,top:28,flexDirection:"row"},"rob-title-text":{fontSize:64,color:"#ffffff"},yellow:{color:"#FFFF00"},"rob-bubtitle":{position:"absolute",left:112,bottom:76},"rob-subtitle-text":{fontSize:36,color:"#F44336"}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:["container"]},[i("div",{staticClass:["title"]},[i("div",{staticClass:["back"]},[i("image",{staticClass:["back-icon"],attrs:{src:"https://s.kcimg.cn/wap/images/detail/productApp/back.png"}}),i("text",{staticClass:["back-text"]},[t._v("关闭")])]),i("div",{staticClass:["title-wrapper"]},[i("text",{staticClass:["title-text"]},[t._v("标题标题标题")])]),i("div",{staticClass:["share"]},[i("image",{staticClass:["share-icon"],attrs:{src:"https://s.kcimg.cn/wap/images/detail/productApp/share.png"}}),i("text",{staticClass:["share-text"]},[t._v("分享")])])]),i("list",{staticClass:["wrapper"]},[i("cell",{appendAsTree:!0,attrs:{append:"tree"}},[i("div",{staticClass:["activity-title"]},[i("div",{staticClass:["activity-title-wrapper"]},[i("image",{staticClass:["activity-image"],attrs:{src:"http://designsvn.360che.com/design_web/LJL/10.18_BusinessPromotion/assets/gold_bg.png"}}),i("text",{staticClass:["activity-text"]},[t._v("厂商推荐")])]),i("div",{staticClass:["rule"]},[i("image",{staticStyle:{width:"22px",height:"22px"},attrs:{src:"http://designsvn.360che.com/design_web/LJL/10.18_BusinessPromotion/assets/rules.svg"}}),i("text",{staticClass:["rule-text"]},[t._v("查看规则")])])]),i("div",{staticClass:["discount"]},[i("div",{staticClass:["discount-list"]},[i("div",{staticClass:["discount-img"]},[i("image",{staticClass:["discount-image"],attrs:{src:"http://placeholder.qiniudn.com/336x224"}}),i("div",{staticClass:["tag"]},[i("text",{staticClass:["tag-text"]},[t._v("标签表")])]),i("div",{staticClass:["describe"]},[i("text",{staticClass:["describe-text"]},[t._v("图上文字图上文字")])])]),i("div",{staticClass:["discount-content"]},[i("text",{staticClass:["discount-title-text"]},[t._v("车型标题车型标题车型...")]),i("div",{staticClass:["discount-price"]},[i("text",{staticClass:["discount-price-text"]},[t._v("优惠价￥")]),i("text",{staticClass:["discount-price-number"]},[t._v("29.2")]),i("text",{staticClass:["discount-price-text"]},[t._v("元")])]),i("div",{staticClass:["guiding-price"]},[i("text",{staticClass:["guiding-price-text"]},[t._v("厂商指导价")]),i("text",{staticClass:["guiding-price-text","guiding-delect"]},[t._v("￥33.3万")])]),i("div",{staticClass:["buying-button"]},[i("div",{staticClass:["panic-buying"],staticStyle:{backgroundImage:"linear-gradient(to right,#FF9F00,#FF6600)"}},[i("text",{staticClass:["panic-buying-text"]},[t._v("立即抢购")])])])])]),i("div",{staticClass:["discount-list"]},[i("div",{staticClass:["discount-img"]},[i("image",{staticClass:["discount-image"],attrs:{src:"http://placeholder.qiniudn.com/336x224"}}),i("div",{staticClass:["tag"]},[i("text",{staticClass:["tag-text"]},[t._v("标签表")])]),i("div",{staticClass:["describe"]},[i("text",{staticClass:["describe-text"]},[t._v("图上文字图上文字")])])]),i("div",{staticClass:["discount-content"]},[i("text",{staticClass:["discount-title-text"]},[t._v("车型标题车型标题车型...")]),i("div",{staticClass:["discount-price"]},[i("text",{staticClass:["discount-price-text"]},[t._v("优惠价￥")]),i("text",{staticClass:["discount-price-number"]},[t._v("29.2")]),i("text",{staticClass:["discount-price-text"]},[t._v("元")])]),i("div",{staticClass:["guiding-price"]},[i("text",{staticClass:["guiding-price-text"]},[t._v("厂商指导价")]),i("text",{staticClass:["guiding-price-text","guiding-delect"]},[t._v("￥33.3万")])]),i("div",{staticClass:["buying-button"]},[i("div",{staticClass:["panic-buying"],staticStyle:{backgroundImage:"linear-gradient(to right,#FF9F00,#FF6600)"}},[i("text",{staticClass:["panic-buying-text"]},[t._v("立即抢购")])])])])]),i("div",{staticClass:["discount-list"]},[i("div",{staticClass:["discount-img"]},[i("image",{staticClass:["discount-image"],attrs:{src:"http://placeholder.qiniudn.com/336x224"}}),i("div",{staticClass:["tag"]},[i("text",{staticClass:["tag-text"]},[t._v("标签表")])]),i("div",{staticClass:["describe"]},[i("text",{staticClass:["describe-text"]},[t._v("图上文字图上文字")])])]),i("div",{staticClass:["discount-content"]},[i("text",{staticClass:["discount-title-text"]},[t._v("车型标题车型标题车型...")]),i("div",{staticClass:["discount-price"]},[i("text",{staticClass:["discount-price-text"]},[t._v("优惠价￥")]),i("text",{staticClass:["discount-price-number"]},[t._v("29.2")]),i("text",{staticClass:["discount-price-text"]},[t._v("元")])]),i("div",{staticClass:["guiding-price"]},[i("text",{staticClass:["guiding-price-text"]},[t._v("厂商指导价")]),i("text",{staticClass:["guiding-price-text","guiding-delect"]},[t._v("￥33.3万")])]),i("div",{staticClass:["buying-button"]},[i("div",{staticClass:["reduce-button"]},[i("text",{staticClass:["reduce-button-text"]},[t._v("立减2000")])]),i("div",{staticClass:["panic-buying"],staticStyle:{backgroundImage:"linear-gradient(to right,#FF9F00,#FF6600)"}},[i("text",{staticClass:["panic-buying-text"]},[t._v("定金299元")])])])])]),i("div",{staticClass:["discount-list"]},[i("div",{staticClass:["discount-img"]},[i("image",{staticClass:["discount-image"],attrs:{src:"http://placeholder.qiniudn.com/336x224"}}),i("div",{staticClass:["tag"]},[i("text",{staticClass:["tag-text"]},[t._v("标签表")])]),i("div",{staticClass:["describe"]},[i("text",{staticClass:["describe-text"]},[t._v("图上文字图上文字")])])]),i("div",{staticClass:["discount-content"]},[i("text",{staticClass:["discount-title-text"]},[t._v("车型标题车型标题车型...")]),i("div",{staticClass:["discount-price"]},[i("text",{staticClass:["discount-price-text"]},[t._v("优惠价￥")]),i("text",{staticClass:["discount-price-number"]},[t._v("29.2")]),i("text",{staticClass:["discount-price-text"]},[t._v("元")])]),i("div",{staticClass:["guiding-price"]},[i("text",{staticClass:["guiding-price-text"]},[t._v("厂商指导价")]),i("text",{staticClass:["guiding-price-text","guiding-delect"]},[t._v("￥33.3万")])]),i("div",{staticClass:["buying-button"]},[i("div",{staticClass:["reduce-button"]},[i("text",{staticClass:["reduce-button-text"]},[t._v("立减2000")])]),i("div",{staticClass:["panic-buying"],staticStyle:{backgroundImage:"linear-gradient(to right,#FF9F00,#FF6600)"}},[i("text",{staticClass:["panic-buying-text"]},[t._v("定金299元")])])])])])])]),i("cell",{appendAsTree:!0,attrs:{append:"tree"}},[i("div",{staticClass:["oclock"]})])])])}]},t.exports.render._withStripped=!0},function(t,e,i){var s,a,n=[];n.push(i(1)),s=i(0);var o=i(2);a=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(Object.keys(s).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),a=s=s.default),"function"==typeof a&&(a=a.options),a.__file="/Users/zhouhepeng/Hot/Weex/AppMall/src/index.vue",a.render=o.render,a.staticRenderFns=o.staticRenderFns,a._scopeId="data-v-bc95102e",a.style=a.style||{},n.forEach(function(t){for(var e in t)a.style[e]=t[e]}),"function"==typeof __register_static_styles__&&__register_static_styles__(a._scopeId,n),t.exports=s,t.exports.el="true",new Vue(t.exports)}]);