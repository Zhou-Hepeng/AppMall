// { "framework": "Vue"} 

!function(t){function e(i){if(n[i])return n[i].exports;var s=n[i]={i:i,l:!1,exports:{}};return t[i].call(s.exports,s,s.exports,e),s.l=!0,s.exports}var n={};e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,i){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:i})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=9)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=weex.requireModule("modal"),s=weex.requireModule("stream");e.default={methods:{alert:function(t){i.alert({message:t})},ajaxUrl:function(){return"https://product.360che.com"},getData:function(t,e){return s.fetch({method:"GET",type:"json",url:this.ajaxUrl()+t},e)}},created:function(){}}},function(t,e){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var n=this[e];n[2]?t.push("@media "+n[2]+"{"+n[1]+"}"):t.push(n[1])}return t.join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var i={},s=0;s<this.length;s++){var o=this[s][0];"number"==typeof o&&(i[o]=!0)}for(s=0;s<e.length;s++){var r=e[s];"number"==typeof r[0]&&i[r[0]]||(n&&!r[2]?r[2]=n:n&&(r[2]="("+r[2]+") and ("+n+")"),t.push(r))}},t}},function(t,e){t.exports=function(t,e,n,i){var s,o=t=t||{},r=typeof t.default;"object"!==r&&"function"!==r||(s=t,o=t.default);var a="function"==typeof o?o.options:o;if(e&&(a.render=e.render,a.staticRenderFns=e.staticRenderFns),n&&(a._scopeId=n),i){var c=a.computed||(a.computed={});Object.keys(i).forEach(function(t){var e=i[t];c[t]=function(){return e}})}return{esModule:s,exports:o,options:a}}},function(t,e,n){function i(t){for(var e=0;e<t.length;e++){var n=t[e],i=d[n.id];if(i){i.refs++;for(var s=0;s<i.parts.length;s++)i.parts[s](n.parts[s]);for(;s<n.parts.length;s++)i.parts.push(o(n.parts[s]));i.parts.length>n.parts.length&&(i.parts.length=n.parts.length)}else{for(var r=[],s=0;s<n.parts.length;s++)r.push(o(n.parts[s]));d[n.id]={id:n.id,refs:1,parts:r}}}}function s(){var t=document.createElement("style");return t.type="text/css",p.appendChild(t),t}function o(t){var e,n,i=document.querySelector('style[data-vue-ssr-id~="'+t.id+'"]');if(i){if(x)return f;i.parentNode.removeChild(i)}if(h){var o=g++;i=u||(u=s()),e=r.bind(null,i,o,!1),n=r.bind(null,i,o,!0)}else i=s(),e=a.bind(null,i),n=function(){i.parentNode.removeChild(i)};return e(t),function(i){if(i){if(i.css===t.css&&i.media===t.media&&i.sourceMap===t.sourceMap)return;e(t=i)}else n()}}function r(t,e,n,i){var s=n?"":i.css;if(t.styleSheet)t.styleSheet.cssText=v(e,s);else{var o=document.createTextNode(s),r=t.childNodes;r[e]&&t.removeChild(r[e]),r.length?t.insertBefore(o,r[e]):t.appendChild(o)}}function a(t,e){var n=e.css,i=e.media,s=e.sourceMap;if(i&&t.setAttribute("media",i),s&&(n+="\n/*# sourceURL="+s.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */"),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}var c="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!c)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var l=n(4),d={},p=c&&(document.head||document.getElementsByTagName("head")[0]),u=null,g=0,x=!1,f=function(){},h="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());t.exports=function(t,e,n){x=n;var s=l(t,e);return i(s),function(e){for(var n=[],o=0;o<s.length;o++){var r=s[o],a=d[r.id];a.refs--,n.push(a)}e?(s=l(t,e),i(s)):s=[];for(var o=0;o<n.length;o++){var a=n[o];if(0===a.refs){for(var c=0;c<a.parts.length;c++)a.parts[c]();delete d[a.id]}}}};var v=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},function(t,e){t.exports=function(t,e){for(var n=[],i={},s=0;s<e.length;s++){var o=e[s],r=o[0],a=o[1],c=o[2],l=o[3],d={id:t+":"+s,css:a,media:c,sourceMap:l};i[r]?i[r].parts.push(d):n.push(i[r]={id:r,parts:[d]})}return n}},function(t,e,n){n(16);var i=n(2)(n(7),n(14),null,null);i.options.__file="/Users/zhouhepeng/Hot/Weex/AppMall/src/index.vue",i.esModule&&Object.keys(i.esModule).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),i.options.functional&&console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions."),t.exports=i.exports},,function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=weex.requireModule("meta"),s=(weex.requireModule("modal"),weex.requireModule("animation"));e.default={data:{userInfo:{luckDrawNumber:5},luckDrawing:!0,lamp:!0,number:2130,title:"标题标题标题",titleShow:!0,banner:"http://frontendsvn.360che.com/icon-project/wap/m/product-library/M/images/banner.png",adData:{name:"主标题主标题",subTitle:"副标题说明说明说明",src:"http://designsvn.360che.com/design_web/LJL/10.18_BusinessPromotion/assets/%E5%BC%BA%E8%B0%83%E6%B4%BB%E5%8A%A8.png"},nav:[{name:"厂商介绍",icon:"http://designsvn.360che.com/design_web/LJL/10.18_BusinessPromotion/assets/%E8%BD%A6%E5%9E%8B%E8%AE%BA%E5%9D%9B.svg"},{name:"优惠买车",icon:""},{name:"整点秒杀",icon:""},{name:"一口价优惠",icon:"https://s.kcimg.cn/wap/images/detail/productApp/more.png",more:!0}],recommendData:{title:"厂商推荐",subTitle:{name:"推广标题厂商推广标题",src:"http://placeholder.qiniudn.com/688x144"},list:["http://placeholder.qiniudn.com/224x80","http://placeholder.qiniudn.com/224x80","http://placeholder.qiniudn.com/224x80"]},discountData:{title:"优惠买车",list:[{tag:"标签表",src:"http://placeholder.qiniudn.com/336x224",srcText:"图上文字图上文字",title:"车型标题车型标题车型...",peice:"29.2",guidingPrice:"33.3",buttons:[{text:"立即抢购"}]},{tag:"标签表",src:"http://placeholder.qiniudn.com/336x224",srcText:"图上文字图上文字",title:"车型标题车型标题车型...",peice:"29.2",guidingPrice:"33.3",buttons:[{text:"立即抢购"}]},{tag:"标签表",src:"http://placeholder.qiniudn.com/336x224",srcText:"图上文字图上文字",title:"车型标题车型标题车型...",peice:"29.2",guidingPrice:"33.3",buttons:[{text:"立减2000"},{text:"立即抢购"}]},{tag:"标签表",src:"http://placeholder.qiniudn.com/336x224",srcText:"图上文字图上文字",title:"车型标题车型标题车型...",peice:"29.2",guidingPrice:"33.3",buttons:[{text:"立减2000"},{text:"立即抢购"}]}]},seckillData:{title:"整点秒杀",navList:[{oclock:"12:00",status:"已开抢"},{oclock:"15:00",status:"已开抢"},{oclock:"18:00",status:"抢购中"},{oclock:"21:00",status:"即将抢购"},{oclock:"24:00",status:"即将抢购"}],goodsList:[{src:"http://placeholder.qiniudn.com/270x180",name:"一汽解放 J6P 540马力",price:"29.2",guidingPrice:"33.3",surplus:5,Total:20},{src:"http://placeholder.qiniudn.com/270x180",name:"一汽解放 J6P 540马力",price:"29.2",guidingPrice:"33.3",surplus:0},{src:"http://placeholder.qiniudn.com/270x180",name:"一汽解放 J6P 540马力",price:"29.2",guidingPrice:"33.3",surplus:17,Total:18}]},footerData:[{name:"首页",src:"http://placeholder.qiniudn.com/48x48",select:!0},{name:"其他",src:"http://placeholder.qiniudn.com/48x48"},{name:"其他",src:"http://placeholder.qiniudn.com/48x48"},{name:"其他",src:"http://placeholder.qiniudn.com/48x48"},{name:"其他",src:"http://placeholder.qiniudn.com/48x48"}]},created:function(){i&&i.setViewport({width:720})},methods:{luckDraw:function(){var t=this;if(this.userInfo.luckDrawNumber>0){if(this.luckDrawing){this.luckDrawing=!1;var e=this.$refs.awardDisc;s.transition(e,{styles:{transform:"rotate("+this.number+"deg)"},duration:5e3,timingFunction:"cubic-bezier(.05,.56,.58,.98)",delay:0},function(){t.number+=2100,t.userInfo.luckDrawNumber--,t.luckDrawing=!0,t.alert("恭喜,二等奖")})}}else this.alert("您还没有抽奖次数哟~")}},watch:{}}},,function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}var s=n(5),o=i(s),r=n(0),a=i(r);Vue.mixin(a.default),o.default.el="#root",new Vue(o.default)},,,function(t,e,n){e=t.exports=n(1)(),e.push([t.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/*footer栏*/\n.footer{height:100px;background-color: #fff;flex-direction: row\n}\n.footer-list{flex:1;padding-top:4px;padding-bottom:4px;justify-content: flex-end;align-items: center;\n}\n.footer-nav-text{font-size:20px;color:#5C6066;margin-top: 12px;\n}\n.footer-nav-visible{color:#f60;\n}\n.container{position:absolute;left:0;top:0;right:0;bottom:0;position:absolute;\n}\n/*标题栏*/\n.wrapper {position:relative;flex:1;background-color:#CB1E1A;\n}\n.title {height:90px;flex-direction: row;background-color:#fff;\n}\n.back{height:90px;width:160px;padding-left:40px;flex-direction:row;justify-content: center;align-items: center;\n}\n.close{flex-direction:row;\n}\n.back-icon{width:17px;height:32px;\n}\n.back-text{margin-left:30px;font-size:32px;\n}\n.title-wrapper{flex:1;padding-left:30px;padding-right:30px;flex-direction:row;justify-content: center;align-items: center;\n}\n.title-text{font-size:36px;color: #2E3033;font-weight:bold;\n}\n.share{justify-content: center;align-items: center;flex-direction: row;\n}\n.share-icon{width:28px;height:28px;margin-right:8px;\n}\n.share{width:124px;padding-right:24px;height:90px;justify-content: center;align-content: center;\n}\n.share-text{color:#f60;font-size:32px;\n}\n/*banner*/\n.banner{flex-direction:row;justify-content: center;align-items: center;\n}\n.banner-image{width:720px;height:714px;\n}\n/*抢购*/\n.ad{flex-direction:row;justify-content: center;align-content: center;\n}\n.ad-wrapper{position:relative;\n}\n.ad-image{width:714px;height:240px;\n}\n.ad-title{position:absolute;left:84px;top:28px;flex-direction: row\n}\n.ad-title-text{font-size:64px;color:#fff;\n}\n.yellow{color:yellow;\n}\n.ad-bubtitle{position:absolute;left:112px;bottom:76px;\n}\n.ad-subtitle-text{font-size:36px;color:#F44336;\n}\n\n  /*nav*/\n.header{width:720px;\n}\n.nav{flex-direction: row;height:88px;background-color:rgba(150,40,31,.6);padding-left:24px;\n}\n.nav-info{flex:1;justify-content:center;align-items: center;flex-direction: row\n}\n.nav-info-text{font-size:28px;color:#fff;\n}\n.nav-info-visible{font-weight: bold;\n}\n.nav-car-icon{width:40px;height:28px;margin-right: 8px;\n}\n.nav-more-icon{width:24px;height:12px;\n}\n\n/*活动区块标题*/\n.activity-title{position:relative;height:100px;margin-top:32px;margin-bottom:16px;justify-content: center;flex-direction: row\n}\n.activity-title-wrapper{position:relative;width:326px;height:96px;justify-content: center;align-items: center;flex-direction: row\n}\n.activity-image{position:absolute;top:0;left:0;width:326px;height:96px;\n}\n.activity-text{font-size: 40px;color: #FFFFFF;\n}\n.rule{position:absolute;right:16px;bottom:12px;height:24px;flex-direction: row;align-items: center;\n}\n.rule-text{margin-left:8px;font-size: 24px;color: rgba(255,255,255,.8);\n}\n\n/*厂商推荐*/\n.recommend-title{position: relative;justify-content: center;align-content: center;flex-direction: row\n}\n.recommend-title-text{position:absolute;top:10px;right:32px;font-size: 36px;color: #F44336;\n}\n.recommend-list{flex-direction: row;margin-top:10px;padding-left:12px;padding-right:12px;\n}\n.recomment-list-info{flex:1;margin-left:4px;margin-right:4px;\n}\n.recomment-list-image{width:224px;height:160px;\n}\n\n  /*优惠买车*/\n.discount{padding-left:8px;padding-right:8px;flex-direction:row;justify-content:flex-start;align-items:center;flex-wrap: wrap;\n}\n.discount-list{width:336px;height:444px;margin-left:7px;margin-right:7px;background-color:#fff;\n}\n.discount-img{position:relative;width:336px;height:224px;\n}\n.discount-image{width:336px;height:224px;\n}\n.tag{position:absolute;top:12px;left:0;width:112px;height:40px;justify-content:center;align-items: center;border-top-right-radius: 20px;border-bottom-right-radius: 20px;background-color:rgba(255,102,0,.8);\n}\n.tag-text{font-size: 24px;color: #FFF;\n}\n.describe{position:absolute;left:0;right:0;bottom:0;height:40px;padding-left:16px;justify-content: center;background-color:rgba(0,0,0,.6);\n}\n.describe-text{font-size: 24px;color: #FFF;\n}\n.discount-content{padding-left:16px;padding-right:16px;padding-bottom:16px;\n}\n/*.discount-title{margin-top:8px;padding-bottom:8px;}*/\n.discount-title-text{flex: 1;margin-top:16px;font-size: 28px;color: #17181A;-webkit-box-orient: vertical;text-overflow: ellipsis;display: -webkit-box;-webkit-line-clamp: 1;overflow: hidden;lines: 1;\n}\n.discount-price{height:36px;margin-top:4px;flex-direction: row;align-items: flex-end;\n}\n.discount-price-text{height:24px;color:#f60;font-size:24px;\n}\n.discount-price-number{color:#f60;font-size:36px;height:36px;\n}\n.guiding-price{flex-direction: row;margin-top:16px;align-items: flex-end;\n}\n.guiding-price-text{height:20px;font-size: 20px;color: #B0B7C0;\n}\n.guiding-number{text-decoration:line-through;\n}\n.buying-button{flex-direction: row;height:64px;margin-top:16px;\n}\n.panic-buying{flex:1;height:64px;justify-content: center;align-items: center;border-top-right-radius: 4px;border-top-right-radius: 4px;border-bottom-left-radius: 4px;border-bottom-right-radius: 4px;background-image:linear-gradient(to right,#FF9F00,#FF6600);\n}\n.panic-buying-text{font-size: 28px;color: #FFF;\n}\n.reduce-button{width:144px;height:64px;margin-right:16px;justify-content: center;align-items: center;border-top-width:2px;border-top-style: dashed;border-top-color: #ffa000;border-left-width:2px;border-left-style: dashed;border-left-color: #ffa000;border-bottom-width:2px;border-bottom-style: dashed;border-bottom-color: #ffa000;border-right-width:2px;border-right-style: dashed;border-right-color: #ffa000\n}\n.reduce-button-text{font-size: 28px;color: #FFA000;\n}\n\n/*整点秒杀*/\n.oclock-nav{flex-direction: row;height:104px;padding-left:16px;padding-right:16px;background-color:rgba(0,0,0,.12);\n}\n.oclock-list{position:relative;flex:1;justify-content: center;align-items: center;\n}\n.buying{background-color:#FFA000;\n}\n.oclock-number{color:#fff;font-size:36px;font-weight: bold;\n}\n.oclock-status{color:#fff;font-size:28px;\n}\n.oclock-buying{position:absolute;top:104px;left:0;right:0;align-items: center;\n}\n.oclock-buying-icon{width:16px;height:8px;background-color:#FFA000;\n}\n.goods{padding-left:16px;padding-right:16px;\n}\n.goods-list{border-top-left-radius: 12px;margin-top:16px;border-top-right-radius: 12px;border-bottom-left-radius: 12px;border-bottom-right-radius: 12px;background-color:#fff;flex-direction: row\n}\n.goods-image{width:270px;height:180px;border-top-left-radius: 12px;border-bottom-left-radius: 12px;\n}\n.goods-info{flex:1;padding-top:16px;padding-left:16px;padding-right:16px;\n}\n.goods-title{font-size: 32px;color: #17181A;\n}\n.goods-price{flex-direction: row;align-items: flex-end;\n}\n.goods-price-text{height:24px;font-size: 24px;color: #FF6600;\n}\n.goods-price-number{height:36px;font-size: 36px;color: #FF6600;\n}\n.goods-guiding-price{height:20px;margin-left:12px;color:20px;font-size: 20px;color: #B0B7C0;\n}\n.goods-guiding-number{height:26px;font-size: 24px;color: #A1A9B3;text-decoration:line-through;\n}\n.goods-status{flex-direction: row;margin-top: 16px;justify-content: space-between;align-items: center;\n}\n.goods-number{position:relative;width:214px;height:40px;justify-content: center;align-items: center;overflow:hidden;\n  border-top-width:2px;border-top-style: solid;border-top-color: #f44336;\n  border-left-width:2px;border-left-style: solid;border-left-color: #f44336;\n  border-bottom-width:2px;border-bottom-style: solid;border-bottom-color: #f44336;\n  border-right-width:2px;border-right-style: solid;border-right-color: #f44336;\n  border-top-left-radius: 20px;border-top-right-radius: 20px;border-bottom-left-radius: 20px;border-bottom-right-radius: 20px;\n}\n.goods-fill{position:absolute;top:0;left:0;height:36px;background-color:#FFA000;border-top-left-radius: 18px;border-top-right-radius: 18px;border-bottom-left-radius: 18px;border-bottom-right-radius: 18px;\n}\n.goods-number-text{font-size: 28px;color: #F44336;\n}\n.goods-button{width:128px;height:56px;justify-content: center;align-items: center;border-top-left-radius: 8px;border-top-right-radius: 8px;border-bottom-left-radius: 8px;border-bottom-right-radius: 8px;background-color:#f44336;\n}\n.goods-button-disabled{background-color:#A1A9B3;\n}\n.goods-button-text{color:#fff;font-size:28px;\n}\n\n/*大转盘抽奖*/\n.lamp{width:688px;height:688px;\n}\n.luck-draw{justify-content: center;align-items: center;\n}\n.luck-draw-model{position:relative;width:688px;height:688px;\n}\n.small-body{position:absolute;top:58px;left:58px;\n}\n.pointer{position:absolute;left:242px;top:184px;width:202px;height:260px;\n}\n.pointer-wrapper{position:absolute;left:268px;top:268px;width:152px;\n  padding-left:30px;\n  padding-right:30px;\n  height:152px;\n  justify-content: center;\n  align-items: center;\n  border-top-left-radius: 76px;\n  border-top-right-radius: 76px;\n  border-bottom-left-radius: 76px;\n  border-bottom-right-radius: 76px;\n  background-image:linear-gradient(to bottom,#FF6600,rgba(217,58,44,1));\n}\n.luck-draw-text{font-size: 40px;color: #FBFF00;font-weight: bold;-webkit-box-orient: vertical;text-overflow: ellipsis;display: -webkit-box;-webkit-line-clamp: 2;overflow: hidden;lines: 2;\n}\n.prize-wrapper{position:absolute;left:246px;top:38px;width:84px;height:98px;\n}\n.prize-info{position:absolute;left:0;right:0;\n}\n.options{font-size: 28px;color: #F44336;\n}\n.prize-number{font-size: 40px;color: #F44336;font-weight: bold;\n}\n.prize-info0{transform: rotate(30deg);transform-origin:40px 250px;\n}\n.prize-info1{transform: rotate(90deg);transform-origin:40px 250px;\n}\n.prize-info2{transform: rotate(150deg);transform-origin:40px 250px;\n}\n.prize-info3{transform: rotate(210deg);transform-origin:40px 250px;\n}\n.prize-info4{transform: rotate(270deg);transform-origin:40px 250px;\n}\n.prize-info5{transform: rotate(330deg);transform-origin:40px 250px;\n}\n",""])},,function(t,e,n){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[t.titleShow?n("div",{staticClass:"title"},[n("div",{staticClass:"back"},[n("image",{staticClass:"back-icon",attrs:{src:"https://s.kcimg.cn/wap/images/detail/productApp/back.png"}}),t._v(" "),n("text",{staticClass:"back-text"},[t._v("关闭")])]),t._v(" "),n("div",{staticClass:"title-wrapper"},[n("text",{staticClass:"title-text"},[t._v(t._s(t.title))])]),t._v(" "),n("div",{staticClass:"share"},[n("image",{staticClass:"share-icon",attrs:{src:"https://s.kcimg.cn/wap/images/detail/productApp/share.png"}}),t._v(" "),n("text",{staticClass:"share-text"},[t._v("分享")])])]):t._e(),t._v(" "),n("list",{staticClass:"wrapper"},[n("cell",[n("div",{staticClass:"banner"},[n("image",{staticClass:"banner-image",attrs:{src:t.banner}})]),t._v(" "),n("div",{staticClass:"ad"},[n("div",{staticClass:"ad-wrapper"},[n("image",{staticClass:"ad-image",attrs:{src:t.adData.src}}),t._v(" "),n("div",{staticClass:"ad-title"},[n("text",{staticClass:"ad-title-text"},[t._v(t._s(t.adData.name))]),t._v(" "),n("text",{staticClass:"ad-title-text yellow"})]),t._v(" "),n("div",{staticClass:"ad-bubtitle"},[n("text",{staticClass:"ad-subtitle-text"},[t._v(t._s(t.adData.subTitle))])])])])]),t._v(" "),n("header",{staticClass:"header"},[n("div",{staticClass:"nav"},t._l(t.nav,function(e){return n("div",{staticClass:"nav-info"},[e.more?t._e():n("image",{staticClass:"nav-car-icon",attrs:{src:e.icon}}),t._v(" "),n("text",{staticClass:"nav-info-text nav-info-visible"},[t._v(t._s(e.name))]),t._v(" "),e.more?n("image",{staticClass:"nav-more-icon",attrs:{src:e.icon}}):t._e()])}))]),t._v(" "),n("cell",[n("div",{staticClass:"activity-title"},[n("div",{staticClass:"activity-title-wrapper"},[n("image",{staticClass:"activity-image",attrs:{src:"http://designsvn.360che.com/design_web/LJL/10.18_BusinessPromotion/assets/gold_bg.png"}}),t._v(" "),n("text",{staticClass:"activity-text"},[t._v(t._s(t.recommendData.title))])]),t._v(" "),n("div",{staticClass:"rule"},[n("image",{staticStyle:{width:"22px",height:"22px"},attrs:{src:"http://designsvn.360che.com/design_web/LJL/10.18_BusinessPromotion/assets/rules.svg"}}),t._v(" "),n("text",{staticClass:"rule-text"},[t._v("查看规则")])])]),t._v(" "),n("div",{staticClass:"recommend-content"},[n("div",{staticClass:"recommend-title"},[n("div",{staticClass:"recommend-title-wrapper"},[n("image",{staticStyle:{width:"688px",height:"144px"},attrs:{src:t.recommendData.subTitle.src}}),t._v(" "),n("text",{staticClass:"recommend-title-text"},[t._v(t._s(t.recommendData.subTitle.name))])])]),t._v(" "),n("div",{staticClass:"recommend-list"},t._l(t.recommendData.list,function(t){return n("div",{staticClass:"recomment-list-info"},[n("image",{staticClass:"recomment-list-image",attrs:{src:t}})])}))])]),t._v(" "),n("cell",[n("div",{staticClass:"activity-title"},[n("div",{staticClass:"activity-title-wrapper"},[n("image",{staticClass:"activity-image",attrs:{src:"http://designsvn.360che.com/design_web/LJL/10.18_BusinessPromotion/assets/gold_bg.png"}}),t._v(" "),n("text",{staticClass:"activity-text"},[t._v(t._s(t.discountData.title))])]),t._v(" "),n("div",{staticClass:"rule"},[n("image",{staticStyle:{width:"22px",height:"22px"},attrs:{src:"http://designsvn.360che.com/design_web/LJL/10.18_BusinessPromotion/assets/rules.svg"}}),t._v(" "),n("text",{staticClass:"rule-text"},[t._v("查看规则")])])]),t._v(" "),n("div",{staticClass:"discount"},t._l(t.discountData.list,function(e){return n("div",{staticClass:"discount-list"},[n("div",{staticClass:"discount-img"},[n("image",{staticClass:"discount-image",attrs:{src:e.src}}),t._v(" "),n("div",{staticClass:"tag"},[n("text",{staticClass:"tag-text"},[t._v(t._s(e.tag))])]),t._v(" "),n("div",{staticClass:"describe"},[n("text",{staticClass:"describe-text"},[t._v(t._s(e.srcText))])])]),t._v(" "),n("div",{staticClass:"discount-content"},[n("text",{staticClass:"discount-title-text"},[t._v(t._s(e.title))]),t._v(" "),n("div",{staticClass:"discount-price"},[n("text",{staticClass:"discount-price-text"},[t._v("优惠价￥")]),t._v(" "),n("text",{staticClass:"discount-price-number"},[t._v(t._s(e.peice))]),t._v(" "),n("text",{staticClass:"discount-price-text"},[t._v("元")])]),t._v(" "),n("div",{staticClass:"guiding-price"},[n("text",{staticClass:"guiding-price-text"},[t._v("厂商指导价")]),t._v(" "),n("text",{staticClass:"guiding-price-text guiding-number"},[t._v("￥"+t._s(e.guidingPrice)+"万")])]),t._v(" "),n("div",{staticClass:"buying-button"},t._l(e.buttons,function(i,s){return n("div",{class:[0==s&&e.buttons.length>1?"reduce-button":"panic-buying"]},[n("text",{class:[0==s&&e.buttons.length>1?"reduce-button-text":"panic-buying-text"]},[t._v(t._s(i.text))])])}))])])}))]),t._v(" "),n("cell",[n("div",{staticClass:"activity-title"},[n("div",{staticClass:"activity-title-wrapper"},[n("image",{staticClass:"activity-image",attrs:{src:"http://designsvn.360che.com/design_web/LJL/10.18_BusinessPromotion/assets/gold_bg.png"}}),t._v(" "),n("text",{staticClass:"activity-text"},[t._v(t._s(t.seckillData.title))])]),t._v(" "),n("div",{staticClass:"rule"},[n("image",{staticStyle:{width:"22px",height:"22px"},attrs:{src:"http://designsvn.360che.com/design_web/LJL/10.18_BusinessPromotion/assets/rules.svg"}}),t._v(" "),n("text",{staticClass:"rule-text"},[t._v("查看规则")])])]),t._v(" "),n("div",{staticClass:"oclock-nav"},t._l(t.seckillData.navList,function(e){return n("div",{class:["oclock-list","抢购中"==e.status?"buying":""]},[n("text",{staticClass:"oclock-number"},[t._v(t._s(e.oclock))]),t._v(" "),n("text",{staticClass:"oclock-status"},[t._v(t._s(e.status))]),t._v(" "),"抢购中"==e.status?n("div",{staticClass:"oclock-buying"},[n("div",{staticClass:"oclock-buying-icon"})]):t._e()])})),t._v(" "),n("div",{staticClass:"goods"},t._l(t.seckillData.goodsList,function(e){return n("div",{staticClass:"goods-list"},[n("image",{staticClass:"goods-image",attrs:{src:e.src}}),t._v(" "),n("div",{staticClass:"goods-info"},[n("text",{staticClass:"goods-title"},[t._v(t._s(e.name))]),t._v(" "),n("div",{staticClass:"goods-price"},[n("text",{staticClass:"goods-price-text"},[t._v("￥")]),t._v(" "),n("text",{staticClass:"goods-price-number"},[t._v(t._s(e.price))]),t._v(" "),n("text",{staticClass:"goods-price-text"},[t._v("万")]),t._v(" "),n("text",{staticClass:"goods-guiding-price"},[t._v("厂商指导价")]),t._v(" "),n("text",{staticClass:"goods-guiding-number"},[t._v("￥"+t._s(e.guidingPrice)+"万")])]),t._v(" "),n("div",{staticClass:"goods-status"},[n("div",{staticClass:"goods-number"},[n("div",{staticClass:"goods-fill",style:{width:210-e.surplus*(210/e.Total)+"px"}}),t._v(" "),n("text",{staticClass:"goods-number-text"},[t._v("仅剩"+t._s(e.surplus)+"台")])]),t._v(" "),n("div",{class:["goods-button",e.surplus<=0?"goods-button-disabled":""]},[n("text",{staticClass:"goods-button-text"},[t._v(t._s(e.surplus>0?"马上抢":"已抢完"))])])])])])}))]),t._v(" "),n("cell",[n("div",{staticClass:"activity-title"},[n("div",{staticClass:"activity-title-wrapper"},[n("image",{staticClass:"activity-image",attrs:{src:"http://designsvn.360che.com/design_web/LJL/10.18_BusinessPromotion/assets/gold_bg.png"}}),t._v(" "),n("text",{staticClass:"activity-text"},[t._v("大转盘抽奖")])]),t._v(" "),n("div",{staticClass:"rule"},[n("image",{staticStyle:{width:"22px",height:"22px"},attrs:{src:"http://designsvn.360che.com/design_web/LJL/10.18_BusinessPromotion/assets/rules.svg"}}),t._v(" "),n("text",{staticClass:"rule-text"},[t._v("查看规则")])])]),t._v(" "),n("div",{staticClass:"luck-draw"},[n("div",{staticClass:"luck-draw-model"},[t.lamp?n("image",{staticClass:"lamp",attrs:{src:"http://designsvn.360che.com/design_web/LJL/10.18_BusinessPromotion/assets/%E7%9B%98%E4%BD%93.png"}}):t._e(),t._v(" "),t.lamp?t._e():n("image",{staticClass:"lamp",staticStyle:{transform:"rotate(-15deg)"},attrs:{src:"http://designsvn.360che.com/design_web/LJL/10.18_BusinessPromotion/assets/%E7%9B%98%E4%BD%93.png"}}),t._v(" "),n("div",{ref:"awardDisc",staticClass:"small-body"},[n("image",{staticStyle:{width:"572px",height:"572px"},attrs:{src:"http://designsvn.360che.com/design_web/LJL/10.18_BusinessPromotion/assets/%E7%9B%98%E8%BA%AB.png"}}),t._v(" "),n("div",{staticClass:"prize-wrapper"},[n("div",{staticClass:"prize-info prize-info0"},[n("text",{staticClass:"options"},[t._v("选项一")]),t._v(" "),n("text",{staticClass:"prize-number"},[t._v("数量")])]),t._v(" "),n("div",{staticClass:"prize-info prize-info1"},[n("text",{staticClass:"options"},[t._v("选项二")]),t._v(" "),n("text",{staticClass:"prize-number"},[t._v("数量")])]),t._v(" "),n("div",{staticClass:"prize-info prize-info2"},[n("text",{staticClass:"options"},[t._v("选项三")]),t._v(" "),n("text",{staticClass:"prize-number"},[t._v("数量")])]),t._v(" "),n("div",{staticClass:"prize-info prize-info3"},[n("text",{staticClass:"options"},[t._v("选项四")]),t._v(" "),n("text",{staticClass:"prize-number"},[t._v("数量")])]),t._v(" "),n("div",{staticClass:"prize-info prize-info4"},[n("text",{staticClass:"options"},[t._v("选项五")]),t._v(" "),n("text",{staticClass:"prize-number"},[t._v("数量")])]),t._v(" "),n("div",{staticClass:"prize-info prize-info5"},[n("text",{staticClass:"options"},[t._v("选项六")]),t._v(" "),n("text",{staticClass:"prize-number"},[t._v("数量")])])])]),t._v(" "),n("image",{staticClass:"pointer",staticStyle:{width:"202px",height:"260px"},attrs:{src:"http://designsvn.360che.com/design_web/LJL/10.18_BusinessPromotion/assets/%E6%8C%87%E9%92%88.png"}}),t._v(" "),n("div",{staticClass:"pointer-wrapper",on:{click:t.luckDraw}},[n("text",{staticClass:"luck-draw-text"},[t._v("立即抽奖")])])])])])],1),t._v(" "),n("div",{staticClass:"footer"},t._l(t.footerData,function(e){return n("div",{staticClass:"footer-list"},[n("image",{staticStyle:{width:"48px",height:"48px"},attrs:{src:e.src}}),t._v(" "),n("text",{class:["footer-nav-text",e.select?"footer-nav-visible":""]},[t._v(t._s(e.name))])])}))],1)},staticRenderFns:[]},t.exports.render._withStripped=!0},,function(t,e,n){var i=n(12);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n(3)("4ddee5b1",i,!1)}]);