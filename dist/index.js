// { "framework": "Vue"} 

!function(t){function e(s){if(i[s])return i[s].exports;var o=i[s]={i:s,l:!1,exports:{}};return t[s].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var i={};e.m=t,e.c=i,e.i=function(t){return t},e.d=function(t,i,s){e.o(t,i)||Object.defineProperty(t,i,{configurable:!1,enumerable:!0,get:s})},e.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(i,"a",i),i},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=3)}([function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i(4),o=function(t){return t&&t.__esModule?t:{default:t}}(s);Vue.mixin(o.default);var a=weex.requireModule("meta"),r=(weex.requireModule("modal"),weex.requireModule("animation"));e.default={data:{userInfo:{luckDrawNumber:5},luckDrawing:!0,lamp:!0,number:2130,title:"标题标题标题",titleShow:!0,banner:"http://frontendsvn.360che.com/icon-project/wap/m/product-library/M/images/banner.png",adData:{name:"主标题主标题",subTitle:"副标题说明说明说明",src:"http://designsvn.360che.com/design_web/LJL/10.18_BusinessPromotion/assets/%E5%BC%BA%E8%B0%83%E6%B4%BB%E5%8A%A8.png"},nav:[{name:"厂商介绍",icon:"http://designsvn.360che.com/design_web/LJL/10.18_BusinessPromotion/assets/%E8%BD%A6%E5%9E%8B%E8%AE%BA%E5%9D%9B.svg"},{name:"优惠买车",icon:""},{name:"整点秒杀",icon:""},{name:"一口价优惠",icon:"https://s.kcimg.cn/wap/images/detail/productApp/more.png",more:!0}],recommendData:{title:"厂商推荐",subTitle:{name:"推广标题厂商推广标题",src:"http://placeholder.qiniudn.com/688x144"},list:["http://placeholder.qiniudn.com/224x80","http://placeholder.qiniudn.com/224x80","http://placeholder.qiniudn.com/224x80"]},discountData:{title:"优惠买车",list:[{tag:"标签表",src:"http://placeholder.qiniudn.com/336x224",srcText:"图上文字图上文字",title:"车型标题车型标题车型...",peice:"29.2",guidingPrice:"33.3",buttons:[{text:"立即抢购"}]},{tag:"标签表",src:"http://placeholder.qiniudn.com/336x224",srcText:"图上文字图上文字",title:"车型标题车型标题车型...",peice:"29.2",guidingPrice:"33.3",buttons:[{text:"立即抢购"}]},{tag:"标签表",src:"http://placeholder.qiniudn.com/336x224",srcText:"图上文字图上文字",title:"车型标题车型标题车型...",peice:"29.2",guidingPrice:"33.3",buttons:[{text:"立减2000"},{text:"立即抢购"}]},{tag:"标签表",src:"http://placeholder.qiniudn.com/336x224",srcText:"图上文字图上文字",title:"车型标题车型标题车型...",peice:"29.2",guidingPrice:"33.3",buttons:[{text:"立减2000"},{text:"立即抢购"}]}]},seckillData:{title:"整点秒杀",navList:[{oclock:"12:00",status:"已开抢"},{oclock:"15:00",status:"已开抢"},{oclock:"18:00",status:"抢购中"},{oclock:"21:00",status:"即将抢购"},{oclock:"24:00",status:"即将抢购"}],goodsList:[{src:"http://placeholder.qiniudn.com/270x180",name:"一汽解放 J6P 540马力",price:"29.2",guidingPrice:"33.3",surplus:5,Total:20},{src:"http://placeholder.qiniudn.com/270x180",name:"一汽解放 J6P 540马力",price:"29.2",guidingPrice:"33.3",surplus:0},{src:"http://placeholder.qiniudn.com/270x180",name:"一汽解放 J6P 540马力",price:"29.2",guidingPrice:"33.3",surplus:17,Total:18}]},footerData:[{name:"首页",src:"http://placeholder.qiniudn.com/48x48",select:!0},{name:"其他",src:"http://placeholder.qiniudn.com/48x48"},{name:"其他",src:"http://placeholder.qiniudn.com/48x48"},{name:"其他",src:"http://placeholder.qiniudn.com/48x48"},{name:"其他",src:"http://placeholder.qiniudn.com/48x48"}]},created:function(){a&&a.setViewport({width:720})},methods:{luckDraw:function(){var t=this;if(this.userInfo.luckDrawNumber>0){if(this.luckDrawing){this.luckDrawing=!1;var e=this.$refs.awardDisc;r.transition(e,{styles:{transform:"rotate("+this.number+"deg)"},duration:5e3,timingFunction:"cubic-bezier(.05,.56,.58,.98)",delay:0},function(){t.number+=2100,t.userInfo.luckDrawNumber--,t.luckDrawing=!0,t.alert("恭喜,二等奖")})}}else this.alert("您还没有抽奖次数哟~")}},watch:{}}},function(t,e){t.exports={footer:{height:100,backgroundColor:"#ffffff",flexDirection:"row"},"footer-list":{flex:1,paddingTop:4,paddingBottom:4,justifyContent:"flex-end",alignItems:"center"},"footer-nav-text":{fontSize:20,color:"#5C6066",marginTop:12},"footer-nav-visible":{color:"#ff6600"},container:{position:"absolute",left:0,top:0,right:0,bottom:0},wrapper:{position:"relative",flex:1,backgroundColor:"#CB1E1A"},title:{height:90,flexDirection:"row",backgroundColor:"#ffffff"},back:{height:90,width:160,paddingLeft:40,flexDirection:"row",justifyContent:"center",alignItems:"center"},close:{flexDirection:"row"},"back-icon":{width:17,height:32},"back-text":{marginLeft:30,fontSize:32},"title-wrapper":{flex:1,paddingLeft:30,paddingRight:30,flexDirection:"row",justifyContent:"center",alignItems:"center"},"title-text":{fontSize:36,color:"#2E3033",fontWeight:"bold"},share:{justifyContent:"center",alignItems:"center",flexDirection:"row",width:124,paddingRight:24,height:90,alignContent:"center"},"share-icon":{width:28,height:28,marginRight:8},"share-text":{color:"#ff6600",fontSize:32},banner:{flexDirection:"row",justifyContent:"center",alignItems:"center"},"banner-image":{width:720,height:714},ad:{flexDirection:"row",justifyContent:"center",alignContent:"center"},"ad-wrapper":{position:"relative"},"ad-image":{width:714,height:240},"ad-title":{position:"absolute",left:84,top:28,flexDirection:"row"},"ad-title-text":{fontSize:64,color:"#ffffff"},yellow:{color:"#FFFF00"},"ad-bubtitle":{position:"absolute",left:112,bottom:76},"ad-subtitle-text":{fontSize:36,color:"#F44336"},header:{width:720},nav:{flexDirection:"row",height:88,backgroundColor:"rgba(150,40,31,0.6)",paddingLeft:24},"nav-info":{flex:1,justifyContent:"center",alignItems:"center",flexDirection:"row"},"nav-info-text":{fontSize:28,color:"#ffffff"},"nav-info-visible":{fontWeight:"bold"},"nav-car-icon":{width:40,height:28,marginRight:8},"nav-more-icon":{width:24,height:12},"activity-title":{position:"relative",height:100,marginTop:32,marginBottom:16,justifyContent:"center",flexDirection:"row"},"activity-title-wrapper":{position:"relative",width:326,height:96,justifyContent:"center",alignItems:"center",flexDirection:"row"},"activity-image":{position:"absolute",top:0,left:0,width:326,height:96},"activity-text":{fontSize:40,color:"#FFFFFF"},rule:{position:"absolute",right:16,bottom:12,height:24,flexDirection:"row",alignItems:"center"},"rule-text":{marginLeft:8,fontSize:24,color:"rgba(255,255,255,0.8)"},"recommend-title":{position:"relative",justifyContent:"center",alignContent:"center",flexDirection:"row"},"recommend-title-text":{position:"absolute",top:10,right:32,fontSize:36,color:"#F44336"},"recommend-list":{flexDirection:"row",marginTop:10,paddingLeft:12,paddingRight:12},"recomment-list-info":{flex:1,marginLeft:4,marginRight:4},"recomment-list-image":{width:224,height:160},discount:{paddingLeft:8,paddingRight:8,flexDirection:"row",justifyContent:"flex-start",alignItems:"center",flexWrap:"wrap"},"discount-list":{width:336,height:444,marginLeft:7,marginRight:7,backgroundColor:"#ffffff"},"discount-img":{position:"relative",width:336,height:224},"discount-image":{width:336,height:224},tag:{position:"absolute",top:12,left:0,width:112,height:40,justifyContent:"center",alignItems:"center",borderTopRightRadius:20,borderBottomRightRadius:20,backgroundColor:"rgba(255,102,0,0.8)"},"tag-text":{fontSize:24,color:"#FFFFFF"},describe:{position:"absolute",left:0,right:0,bottom:0,height:40,paddingLeft:16,justifyContent:"center",backgroundColor:"rgba(0,0,0,0.6)"},"describe-text":{fontSize:24,color:"#FFFFFF"},"discount-content":{paddingLeft:16,paddingRight:16,paddingBottom:16},"discount-title-text":{flex:1,marginTop:16,fontSize:28,color:"#17181A",WebkitBoxOrient:"vertical",textOverflow:"ellipsis",display:"-webkit-box",WebkitLineClamp:1,overflow:"hidden",lines:1},"discount-price":{height:36,marginTop:4,flexDirection:"row",alignItems:"flex-end"},"discount-price-text":{height:24,color:"#ff6600",fontSize:24},"discount-price-number":{color:"#ff6600",fontSize:36,height:36},"guiding-price":{flexDirection:"row",marginTop:16,alignItems:"flex-end"},"guiding-price-text":{height:20,fontSize:20,color:"#B0B7C0"},"guiding-number":{textDecoration:"line-through"},"buying-button":{flexDirection:"row",height:64,marginTop:16},"panic-buying":{flex:1,height:64,justifyContent:"center",alignItems:"center",borderTopRightRadius:4,borderBottomLeftRadius:4,borderBottomRightRadius:4,backgroundImage:"linear-gradient(to right,#FF9F00,#FF6600)"},"panic-buying-text":{fontSize:28,color:"#FFFFFF"},"reduce-button":{width:144,height:64,marginRight:16,justifyContent:"center",alignItems:"center",borderTopWidth:2,borderTopStyle:"dashed",borderTopColor:"#ffa000",borderLeftWidth:2,borderLeftStyle:"dashed",borderLeftColor:"#ffa000",borderBottomWidth:2,borderBottomStyle:"dashed",borderBottomColor:"#ffa000",borderRightWidth:2,borderRightStyle:"dashed",borderRightColor:"#ffa000"},"reduce-button-text":{fontSize:28,color:"#FFA000"},"oclock-nav":{flexDirection:"row",height:104,paddingLeft:16,paddingRight:16,backgroundColor:"rgba(0,0,0,0.12)"},"oclock-list":{position:"relative",flex:1,justifyContent:"center",alignItems:"center"},buying:{backgroundColor:"#FFA000"},"oclock-number":{color:"#ffffff",fontSize:36,fontWeight:"bold"},"oclock-status":{color:"#ffffff",fontSize:28},"oclock-buying":{position:"absolute",top:104,left:0,right:0,alignItems:"center"},"oclock-buying-icon":{width:16,height:8,backgroundColor:"#FFA000"},goods:{paddingLeft:16,paddingRight:16},"goods-list":{borderTopLeftRadius:12,marginTop:16,borderTopRightRadius:12,borderBottomLeftRadius:12,borderBottomRightRadius:12,backgroundColor:"#ffffff",flexDirection:"row"},"goods-image":{width:270,height:180,borderTopLeftRadius:12,borderBottomLeftRadius:12},"goods-info":{flex:1,paddingTop:16,paddingLeft:16,paddingRight:16},"goods-title":{fontSize:32,color:"#17181A"},"goods-price":{flexDirection:"row",alignItems:"flex-end"},"goods-price-text":{height:24,fontSize:24,color:"#FF6600"},"goods-price-number":{height:36,fontSize:36,color:"#FF6600"},"goods-guiding-price":{height:20,marginLeft:12,fontSize:20,color:"#B0B7C0"},"goods-guiding-number":{height:26,fontSize:24,color:"#A1A9B3",textDecoration:"line-through"},"goods-status":{flexDirection:"row",marginTop:16,justifyContent:"space-between",alignItems:"center"},"goods-number":{position:"relative",width:214,height:40,justifyContent:"center",alignItems:"center",overflow:"hidden",borderTopWidth:2,borderTopStyle:"solid",borderTopColor:"#f44336",borderLeftWidth:2,borderLeftStyle:"solid",borderLeftColor:"#f44336",borderBottomWidth:2,borderBottomStyle:"solid",borderBottomColor:"#f44336",borderRightWidth:2,borderRightStyle:"solid",borderRightColor:"#f44336",borderTopLeftRadius:20,borderTopRightRadius:20,borderBottomLeftRadius:20,borderBottomRightRadius:20},"goods-fill":{position:"absolute",top:0,left:0,height:36,backgroundColor:"#FFA000",borderTopLeftRadius:18,borderTopRightRadius:18,borderBottomLeftRadius:18,borderBottomRightRadius:18},"goods-number-text":{fontSize:28,color:"#F44336"},"goods-button":{width:128,height:56,justifyContent:"center",alignItems:"center",borderTopLeftRadius:8,borderTopRightRadius:8,borderBottomLeftRadius:8,borderBottomRightRadius:8,backgroundColor:"#f44336"},"goods-button-disabled":{backgroundColor:"#A1A9B3"},"goods-button-text":{color:"#ffffff",fontSize:28},lamp:{width:688,height:688},"luck-draw":{justifyContent:"center",alignItems:"center"},"luck-draw-model":{position:"relative",width:688,height:688},"small-body":{position:"absolute",top:58,left:58},pointer:{position:"absolute",left:242,top:184,width:202,height:260},"pointer-wrapper":{position:"absolute",left:268,top:268,width:152,paddingLeft:30,paddingRight:30,height:152,justifyContent:"center",alignItems:"center",borderTopLeftRadius:76,borderTopRightRadius:76,borderBottomLeftRadius:76,borderBottomRightRadius:76,backgroundImage:"linear-gradient(to bottom,#FF6600,rgba(217,58,44,1))"},"luck-draw-text":{fontSize:40,color:"#FBFF00",fontWeight:"bold",WebkitBoxOrient:"vertical",textOverflow:"ellipsis",display:"-webkit-box",WebkitLineClamp:2,overflow:"hidden",lines:2},"prize-wrapper":{position:"absolute",left:246,top:38,width:84,height:98},"prize-info":{position:"absolute",left:0,right:0},options:{fontSize:28,color:"#F44336"},"prize-number":{fontSize:40,color:"#F44336",fontWeight:"bold"},"prize-info0":{transform:"rotate(30deg)",transformOrigin:"40px 250px"},"prize-info1":{transform:"rotate(90deg)",transformOrigin:"40px 250px"},"prize-info2":{transform:"rotate(150deg)",transformOrigin:"40px 250px"},"prize-info3":{transform:"rotate(210deg)",transformOrigin:"40px 250px"},"prize-info4":{transform:"rotate(270deg)",transformOrigin:"40px 250px"},"prize-info5":{transform:"rotate(330deg)",transformOrigin:"40px 250px"}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:["container"]},[t.titleShow?i("div",{staticClass:["title"]},[t._m(0),i("div",{staticClass:["title-wrapper"]},[i("text",{staticClass:["title-text"]},[t._v(t._s(t.title))])]),t._m(1)]):t._e(),i("list",{staticClass:["wrapper"]},[i("cell",{appendAsTree:!0,attrs:{append:"tree"}},[i("div",{staticClass:["banner"]},[i("image",{staticClass:["banner-image"],attrs:{src:t.banner}})]),i("div",{staticClass:["ad"]},[i("div",{staticClass:["ad-wrapper"]},[i("image",{staticClass:["ad-image"],attrs:{src:t.adData.src}}),i("div",{staticClass:["ad-title"]},[i("text",{staticClass:["ad-title-text"]},[t._v(t._s(t.adData.name))]),i("text",{staticClass:["ad-title-text","yellow"]})]),i("div",{staticClass:["ad-bubtitle"]},[i("text",{staticClass:["ad-subtitle-text"]},[t._v(t._s(t.adData.subTitle))])])])])]),i("header",{staticClass:["header"]},[i("div",{staticClass:["nav"]},t._l(t.nav,function(e){return i("div",{staticClass:["nav-info"]},[e.more?t._e():i("image",{staticClass:["nav-car-icon"],attrs:{src:e.icon}}),i("text",{staticClass:["nav-info-text","nav-info-visible"]},[t._v(t._s(e.name))]),e.more?i("image",{staticClass:["nav-more-icon"],attrs:{src:e.icon}}):t._e()])}))]),i("cell",{appendAsTree:!0,attrs:{append:"tree"}},[i("div",{staticClass:["activity-title"]},[i("div",{staticClass:["activity-title-wrapper"]},[i("image",{staticClass:["activity-image"],attrs:{src:"http://designsvn.360che.com/design_web/LJL/10.18_BusinessPromotion/assets/gold_bg.png"}}),i("text",{staticClass:["activity-text"]},[t._v(t._s(t.recommendData.title))])]),t._m(2)]),i("div",{staticClass:["recommend-content"]},[i("div",{staticClass:["recommend-title"]},[i("div",{staticClass:["recommend-title-wrapper"]},[i("image",{staticStyle:{width:"688px",height:"144px"},attrs:{src:t.recommendData.subTitle.src}}),i("text",{staticClass:["recommend-title-text"]},[t._v(t._s(t.recommendData.subTitle.name))])])]),i("div",{staticClass:["recommend-list"]},t._l(t.recommendData.list,function(t){return i("div",{staticClass:["recomment-list-info"]},[i("image",{staticClass:["recomment-list-image"],attrs:{src:t}})])}))])]),i("cell",{appendAsTree:!0,attrs:{append:"tree"}},[i("div",{staticClass:["activity-title"]},[i("div",{staticClass:["activity-title-wrapper"]},[i("image",{staticClass:["activity-image"],attrs:{src:"http://designsvn.360che.com/design_web/LJL/10.18_BusinessPromotion/assets/gold_bg.png"}}),i("text",{staticClass:["activity-text"]},[t._v(t._s(t.discountData.title))])]),t._m(3)]),i("div",{staticClass:["discount"]},t._l(t.discountData.list,function(e){return i("div",{staticClass:["discount-list"]},[i("div",{staticClass:["discount-img"]},[i("image",{staticClass:["discount-image"],attrs:{src:e.src}}),i("div",{staticClass:["tag"]},[i("text",{staticClass:["tag-text"]},[t._v(t._s(e.tag))])]),i("div",{staticClass:["describe"]},[i("text",{staticClass:["describe-text"]},[t._v(t._s(e.srcText))])])]),i("div",{staticClass:["discount-content"]},[i("text",{staticClass:["discount-title-text"]},[t._v(t._s(e.title))]),i("div",{staticClass:["discount-price"]},[i("text",{staticClass:["discount-price-text"]},[t._v("优惠价￥")]),i("text",{staticClass:["discount-price-number"]},[t._v(t._s(e.peice))]),i("text",{staticClass:["discount-price-text"]},[t._v("元")])]),i("div",{staticClass:["guiding-price"]},[i("text",{staticClass:["guiding-price-text"]},[t._v("厂商指导价")]),i("text",{staticClass:["guiding-price-text","guiding-number"]},[t._v("￥"+t._s(e.guidingPrice)+"万")])]),i("div",{staticClass:["buying-button"]},t._l(e.buttons,function(s,o){return i("div",{class:[0==o&&e.buttons.length>1?"reduce-button":"panic-buying"]},[i("text",{class:[0==o&&e.buttons.length>1?"reduce-button-text":"panic-buying-text"]},[t._v(t._s(s.text))])])}))])])}))]),i("cell",{appendAsTree:!0,attrs:{append:"tree"}},[i("div",{staticClass:["activity-title"]},[i("div",{staticClass:["activity-title-wrapper"]},[i("image",{staticClass:["activity-image"],attrs:{src:"http://designsvn.360che.com/design_web/LJL/10.18_BusinessPromotion/assets/gold_bg.png"}}),i("text",{staticClass:["activity-text"]},[t._v(t._s(t.seckillData.title))])]),t._m(4)]),i("div",{staticClass:["oclock-nav"]},t._l(t.seckillData.navList,function(e){return i("div",{class:["oclock-list","抢购中"==e.status?"buying":""]},[i("text",{staticClass:["oclock-number"]},[t._v(t._s(e.oclock))]),i("text",{staticClass:["oclock-status"]},[t._v(t._s(e.status))]),"抢购中"==e.status?i("div",{staticClass:["oclock-buying"]},[i("div",{staticClass:["oclock-buying-icon"]})]):t._e()])})),i("div",{staticClass:["goods"]},t._l(t.seckillData.goodsList,function(e){return i("div",{staticClass:["goods-list"]},[i("image",{staticClass:["goods-image"],attrs:{src:e.src}}),i("div",{staticClass:["goods-info"]},[i("text",{staticClass:["goods-title"]},[t._v(t._s(e.name))]),i("div",{staticClass:["goods-price"]},[i("text",{staticClass:["goods-price-text"]},[t._v("￥")]),i("text",{staticClass:["goods-price-number"]},[t._v(t._s(e.price))]),i("text",{staticClass:["goods-price-text"]},[t._v("万")]),i("text",{staticClass:["goods-guiding-price"]},[t._v("厂商指导价")]),i("text",{staticClass:["goods-guiding-number"]},[t._v("￥"+t._s(e.guidingPrice)+"万")])]),i("div",{staticClass:["goods-status"]},[i("div",{staticClass:["goods-number"]},[i("div",{staticClass:["goods-fill"],style:{width:210-e.surplus*(210/e.Total)+"px"}}),i("text",{staticClass:["goods-number-text"]},[t._v("仅剩"+t._s(e.surplus)+"台")])]),i("div",{class:["goods-button",e.surplus<=0?"goods-button-disabled":""]},[i("text",{staticClass:["goods-button-text"]},[t._v(t._s(e.surplus>0?"马上抢":"已抢完"))])])])])])}))]),i("cell",{appendAsTree:!0,attrs:{append:"tree"}},[t._m(5),i("div",{staticClass:["luck-draw"]},[i("div",{staticClass:["luck-draw-model"]},[t.lamp?i("image",{staticClass:["lamp"],attrs:{src:"http://designsvn.360che.com/design_web/LJL/10.18_BusinessPromotion/assets/%E7%9B%98%E4%BD%93.png"}}):t._e(),t.lamp?t._e():i("image",{staticClass:["lamp"],staticStyle:{transform:"rotate(-15deg)"},attrs:{src:"http://designsvn.360che.com/design_web/LJL/10.18_BusinessPromotion/assets/%E7%9B%98%E4%BD%93.png"}}),i("div",{ref:"awardDisc",staticClass:["small-body"]},[i("image",{staticStyle:{width:"572px",height:"572px"},attrs:{src:"http://designsvn.360che.com/design_web/LJL/10.18_BusinessPromotion/assets/%E7%9B%98%E8%BA%AB.png"}}),t._m(6)]),i("image",{staticClass:["pointer"],staticStyle:{width:"202px",height:"260px"},attrs:{src:"http://designsvn.360che.com/design_web/LJL/10.18_BusinessPromotion/assets/%E6%8C%87%E9%92%88.png"}}),i("div",{staticClass:["pointer-wrapper"],on:{click:t.luckDraw}},[i("text",{staticClass:["luck-draw-text"]},[t._v("立即抽奖")])])])])])],1),i("div",{staticClass:["footer"]},t._l(t.footerData,function(e){return i("div",{staticClass:["footer-list"]},[i("image",{staticStyle:{width:"48px",height:"48px"},attrs:{src:e.src}}),i("text",{class:["footer-nav-text",e.select?"footer-nav-visible":""]},[t._v(t._s(e.name))])])}))])},staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:["back"]},[i("image",{staticClass:["back-icon"],attrs:{src:"https://s.kcimg.cn/wap/images/detail/productApp/back.png"}}),i("text",{staticClass:["back-text"]},[t._v("关闭")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:["share"]},[i("image",{staticClass:["share-icon"],attrs:{src:"https://s.kcimg.cn/wap/images/detail/productApp/share.png"}}),i("text",{staticClass:["share-text"]},[t._v("分享")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:["rule"]},[i("image",{staticStyle:{width:"22px",height:"22px"},attrs:{src:"http://designsvn.360che.com/design_web/LJL/10.18_BusinessPromotion/assets/rules.svg"}}),i("text",{staticClass:["rule-text"]},[t._v("查看规则")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:["rule"]},[i("image",{staticStyle:{width:"22px",height:"22px"},attrs:{src:"http://designsvn.360che.com/design_web/LJL/10.18_BusinessPromotion/assets/rules.svg"}}),i("text",{staticClass:["rule-text"]},[t._v("查看规则")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:["rule"]},[i("image",{staticStyle:{width:"22px",height:"22px"},attrs:{src:"http://designsvn.360che.com/design_web/LJL/10.18_BusinessPromotion/assets/rules.svg"}}),i("text",{staticClass:["rule-text"]},[t._v("查看规则")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:["activity-title"]},[i("div",{staticClass:["activity-title-wrapper"]},[i("image",{staticClass:["activity-image"],attrs:{src:"http://designsvn.360che.com/design_web/LJL/10.18_BusinessPromotion/assets/gold_bg.png"}}),i("text",{staticClass:["activity-text"]},[t._v("大转盘抽奖")])]),i("div",{staticClass:["rule"]},[i("image",{staticStyle:{width:"22px",height:"22px"},attrs:{src:"http://designsvn.360che.com/design_web/LJL/10.18_BusinessPromotion/assets/rules.svg"}}),i("text",{staticClass:["rule-text"]},[t._v("查看规则")])])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:["prize-wrapper"]},[i("div",{staticClass:["prize-info","prize-info0"]},[i("text",{staticClass:["options"]},[t._v("选项一")]),i("text",{staticClass:["prize-number"]},[t._v("数量")])]),i("div",{staticClass:["prize-info","prize-info1"]},[i("text",{staticClass:["options"]},[t._v("选项二")]),i("text",{staticClass:["prize-number"]},[t._v("数量")])]),i("div",{staticClass:["prize-info","prize-info2"]},[i("text",{staticClass:["options"]},[t._v("选项三")]),i("text",{staticClass:["prize-number"]},[t._v("数量")])]),i("div",{staticClass:["prize-info","prize-info3"]},[i("text",{staticClass:["options"]},[t._v("选项四")]),i("text",{staticClass:["prize-number"]},[t._v("数量")])]),i("div",{staticClass:["prize-info","prize-info4"]},[i("text",{staticClass:["options"]},[t._v("选项五")]),i("text",{staticClass:["prize-number"]},[t._v("数量")])]),i("div",{staticClass:["prize-info","prize-info5"]},[i("text",{staticClass:["options"]},[t._v("选项六")]),i("text",{staticClass:["prize-number"]},[t._v("数量")])])])}]},t.exports.render._withStripped=!0},function(t,e,i){var s,o,a=[];a.push(i(1)),s=i(0);var r=i(2);o=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(Object.keys(s).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),o=s=s.default),"function"==typeof o&&(o=o.options),o.__file="/Users/zhouhepeng/Hot/Weex/AppMall/src/index.vue",o.render=r.render,o.staticRenderFns=r.staticRenderFns,o._scopeId="data-v-bc95102e",o.style=o.style||{},a.forEach(function(t){for(var e in t)o.style[e]=t[e]}),"function"==typeof __register_static_styles__&&__register_static_styles__(o._scopeId,a),t.exports=s,t.exports.el="true",new Vue(t.exports)},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=weex.requireModule("modal"),o=weex.requireModule("stream");e.default={methods:{alert:function(t){s.alert({message:t})},ajaxUrl:function(){return"https://product.360che.com"},getData:function(t,e){return o.fetch({method:"GET",type:"json",url:this.ajaxUrl()+t},e)}},created:function(){}}}]);