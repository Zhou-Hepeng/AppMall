<template>
  <div class="container">
    <div class="title" v-if="titleShow">
      <div class="back">
        <image class="back-icon" src="https://s.kcimg.cn/wap/images/detail/productApp/back.png"></image>
        <text class="back-text">关闭</text>
      </div>
      <div class="title-wrapper">
        <text class="title-text">{{title}}</text>
      </div>
      <div class="share">
        <image class="share-icon" src="https://s.kcimg.cn/wap/images/detail/productApp/share.png"></image>
        <text class="share-text">分享</text>
      </div>
    </div>
    <list class="wrapper">
      <cell>
        <div class="banner">
          <image class="banner-image" :src="banner"></image>
        </div>
        <div class="ad">
          <div class="ad-wrapper">
            <image class="ad-image" :src="adData.src"></image>
            <div class="ad-title">
              <text class="ad-title-text">{{adData.name}}</text>
              <text class="ad-title-text yellow"></text>
            </div>
            <div class='ad-bubtitle'>
              <text class="ad-subtitle-text">{{adData.subTitle}}</text>
            </div>
          </div>
        </div>
      </cell>
      <header class="header">
        <div class="nav">
          <div class="nav-info" v-for="item in nav">
            <image v-if="!item.more" class="nav-car-icon" :src="item.icon"></image>
            <text class="nav-info-text nav-info-visible">{{item.name}}</text>
            <image v-if="item.more" class="nav-more-icon" :src="item.icon"></image>
          </div>
        </div>
      </header>
      <!-- 厂商推荐 -->
      <cell>
        <div class="activity-title">
          <div class="activity-title-wrapper">
            <image class="activity-image" src="http://designsvn.360che.com/design_web/LJL/10.18_BusinessPromotion/assets/gold_bg.png"></image>
            <text class="activity-text">{{recommendData.title}}</text>
          </div>
          <div class="rule">
            <image style="width:22px;height:22px;" src="http://designsvn.360che.com/design_web/LJL/10.18_BusinessPromotion/assets/rules.svg"></image>
            <text class="rule-text">查看规则</text>
          </div>
        </div>
        <div class="recommend-content">
          <div class="recommend-title">
            <div class="recommend-title-wrapper">
              <image style="width:688px;height:144px" :src="recommendData.subTitle.src"></image>
              <text class="recommend-title-text">{{recommendData.subTitle.name}}</text>
            </div>
          </div>
          <div class="recommend-list">
            <div v-for="item in recommendData.list" class="recomment-list-info">
              <image class="recomment-list-image" :src="item"></image>
            </div>
          </div>
        </div>
      </cell>
      <!-- 优惠买车 -->
      <cell>
          <div class="activity-title">
            <div class="activity-title-wrapper">
              <image class="activity-image" src="http://designsvn.360che.com/design_web/LJL/10.18_BusinessPromotion/assets/gold_bg.png"></image>
              <text class="activity-text">{{discountData.title}}</text>
            </div>
            <div class="rule">
              <image style="width:22px;height:22px;" src="http://designsvn.360che.com/design_web/LJL/10.18_BusinessPromotion/assets/rules.svg"></image>
              <text class="rule-text">查看规则</text>
            </div>
          </div>
          <div class="discount">
            <div class="discount-list" v-for="item in discountData.list">
              <div class="discount-img">
                <image class="discount-image" :src="item.src"></image>
                <div class="tag">
                  <text class="tag-text">{{item.tag}}</text>
                </div>
                <div class="describe">
                  <text class="describe-text">{{item.srcText}}</text>
                </div>
              </div>
              <div class="discount-content">
                <text class="discount-title-text">{{item.title}}</text>
                <div class="discount-price">
                  <text class="discount-price-text">优惠价￥</text>
                  <text class="discount-price-number">{{item.peice}}</text>
                  <text class="discount-price-text">元</text>
                </div>
                <div class="guiding-price">
                  <text class="guiding-price-text">厂商指导价</text>
                  <text class="guiding-price-text guiding-number">￥{{item.guidingPrice}}万</text>
                </div>
                <div class="buying-button">
                  <div :class="[index == 0 && item.buttons.length > 1 ? 'reduce-button' : 'panic-buying']" v-for="(ele,index) in item.buttons">
                    <text :class="[index == 0 && item.buttons.length > 1 ? 'reduce-button-text' : 'panic-buying-text']">{{ele.text}}</text>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </cell>
      <!-- 整点秒杀 -->
      <cell>
        <div class="activity-title">
          <div class="activity-title-wrapper">
            <image class="activity-image" src="http://designsvn.360che.com/design_web/LJL/10.18_BusinessPromotion/assets/gold_bg.png"></image>
            <text class="activity-text">{{seckillData.title}}</text>
          </div>
          <div class="rule">
            <image style="width:22px;height:22px;" src="http://designsvn.360che.com/design_web/LJL/10.18_BusinessPromotion/assets/rules.svg"></image>
            <text class="rule-text">查看规则</text>
          </div>
        </div>
        <div class="oclock-nav">
          <div :class="['oclock-list' , item.status == '抢购中' ? 'buying' : '']" v-for="item in seckillData.navList">
            <text class="oclock-number">{{item.oclock}}</text>
            <text class="oclock-status">{{item.status}}</text>
            <div v-if="item.status == '抢购中'" class="oclock-buying">
              <div class="oclock-buying-icon"></div>
            </div>
          </div>
        </div>
        <div class="goods">
          <div class="goods-list" v-for="item in seckillData.goodsList">
            <image class="goods-image" :src="item.src"></image>
            <div class="goods-info">
              <text class="goods-title">{{item.name}}</text>
              <div class="goods-price">
                <text class="goods-price-text">￥</text>
                <text class="goods-price-number">{{item.price}}</text>
                <text class="goods-price-text">万</text>
                <text class="goods-guiding-price">厂商指导价</text>
                <text class="goods-guiding-number">￥{{item.guidingPrice}}万</text>
              </div>
              <div class="goods-status">
                <div class="goods-number">
                  <div :style="{'width':210 - item.surplus*(210/item.Total) + 'px'}" class="goods-fill"></div>
                  <text class="goods-number-text">仅剩{{item.surplus}}台</text>
                </div>
                <div :class="['goods-button',item.surplus <= 0 ? 'goods-button-disabled' : '']">
                  <text class="goods-button-text">{{item.surplus > 0 ? '马上抢' : '已抢完'}}</text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </cell>
    </list>
  </div>
</template>

<style>

  .container{position:absolute;left:0;top:0;right:0;bottom:0;}
  /*标题栏*/
  .wrapper {position:relative;flex:1;background-color:#CB1E1A;}
  .title {height:90px;flex-direction: row;background-color:#fff;}
  .back{height:90px;width:160px;padding-left:40px;flex-direction:row;justify-content: center;align-items: center;}
  .close{flex-direction:row;}
  .back-icon{width:17px;height:32px;}
  .back-text{margin-left:30px;font-size:32px;}
  .title-wrapper{flex:1;padding-left:30px;padding-right:30px;flex-direction:row;justify-content: center;align-items: center;}
  .title-text{font-size:36px;color: #2E3033;font-weight:bold;}
  .share{justify-content: center;align-items: center;flex-direction: row;}
  .share-icon{width:28px;height:28px;margin-right:8px;}
  .share{width:124px;padding-right:24px;height:90px;justify-content: center;align-content: center;}
  .share-text{color:#f60;font-size:32px;}
  /*banner*/
  .banner{flex-direction:row;justify-content: center;align-items: center;}
  .banner-image{width:720px;height:714px;}
  /*抢购*/
  .ad{flex-direction:row;justify-content: center;align-content: center;}
  .ad-wrapper{position:relative;}
  .ad-image{width:714px;height:240px;}
  .ad-title{position:absolute;left:84px;top:28px;flex-direction: row}
  .ad-title-text{font-size:64px;color:#fff;}
  .yellow{color:yellow;}
  .ad-bubtitle{position:absolute;left:112px;bottom:76px;}
  .ad-subtitle-text{font-size:36px;color:#F44336;}

    /*nav*/
  .header{width:720px;}
  .nav{flex-direction: row;height:88px;background-color:rgba(150,40,31,.6);padding-left:24px;}
  .nav-info{flex:1;justify-content:center;align-items: center;flex-direction: row}
  .nav-info-text{font-size:28px;color:#fff;}
  .nav-info-visible{font-weight: bold;}
  .nav-car-icon{width:40px;height:28px;margin-right: 8px;}
  .nav-more-icon{width:24px;height:12px;}

  /*活动区块标题*/
  .activity-title{position:relative;height:100px;margin-top:32px;margin-bottom:16px;justify-content: center;flex-direction: row}
  .activity-title-wrapper{position:relative;width:326px;height:96px;justify-content: center;align-items: center;flex-direction: row}
  .activity-image{position:absolute;top:0;left:0;width:326px;height:96px;}
  .activity-text{font-size: 40px;color: #FFFFFF;}
  .rule{position:absolute;right:16px;bottom:12px;height:24px;flex-direction: row;align-items: center;}
  .rule-text{margin-left:8px;font-size: 24px;color: rgba(255,255,255,.8);}

  /*厂商推荐*/
  .recommend-title{position: relative;justify-content: center;align-content: center;flex-direction: row}
  .recommend-title-text{position:absolute;top:10px;right:32px;font-size: 36px;color: #F44336;}
  .recommend-list{flex-direction: row;margin-top:10px;padding-left:12px;padding-right:12px;}
  .recomment-list-info{flex:1;margin-left:4px;margin-right:4px;}
  .recomment-list-image{width:224px;height:160px;}

    /*优惠买车*/
  .discount{padding-left:8px;padding-right:8px;flex-direction:row;justify-content:flex-start;align-items:center;flex-wrap: wrap;}
  .discount-list{width:336px;height:444px;margin-left:7px;margin-right:7px;background-color:#fff;}
  .discount-img{position:relative;width:336px;height:224px;}
  .discount-image{width:336px;height:224px;}
  .tag{position:absolute;top:12px;left:0;width:112px;height:40px;justify-content:center;align-items: center;border-top-right-radius: 20px;border-bottom-right-radius: 20px;background-color:rgba(255,102,0,.8);}
  .tag-text{font-size: 24px;color: #FFF;}
  .describe{position:absolute;left:0;right:0;bottom:0;height:40px;padding-left:16px;justify-content: center;background-color:rgba(0,0,0,.6);}
  .describe-text{font-size: 24px;color: #FFF;}
  .discount-content{padding-left:16px;padding-right:16px;padding-bottom:16px;}
  /*.discount-title{margin-top:8px;padding-bottom:8px;}*/
  .discount-title-text{flex: 1;margin-top:16px;font-size: 28px;color: #17181A;-webkit-box-orient: vertical;text-overflow: ellipsis;display: -webkit-box;-webkit-line-clamp: 1;overflow: hidden;lines: 1;}
  .discount-price{height:36px;margin-top:4px;flex-direction: row;align-items: flex-end;}
  .discount-price-text{height:24px;color:#f60;font-size:24px;}
  .discount-price-number{color:#f60;font-size:36px;height:36px;}
  .guiding-price{flex-direction: row;margin-top:16px;align-items: flex-end;}
  .guiding-price-text{height:20px;font-size: 20px;color: #B0B7C0;}
  .guiding-number{text-decoration:line-through;}
  .buying-button{flex-direction: row;height:64px;margin-top:16px;}
  .panic-buying{flex:1;height:64px;justify-content: center;align-items: center;border-top-right-radius: 4px;border-top-right-radius: 4px;border-bottom-left-radius: 4px;border-bottom-right-radius: 4px;background-image:linear-gradient(to right,#FF9F00,#FF6600);}
  .panic-buying-text{font-size: 28px;color: #FFF;}
  .reduce-button{width:144px;height:64px;margin-right:16px;justify-content: center;align-items: center;border-top-width:2px;border-top-style: dashed;border-top-color: #ffa000;border-left-width:2px;border-left-style: dashed;border-left-color: #ffa000;border-bottom-width:2px;border-bottom-style: dashed;border-bottom-color: #ffa000;border-right-width:2px;border-right-style: dashed;border-right-color: #ffa000}
  .reduce-button-text{font-size: 28px;color: #FFA000;}

  /*整点秒杀*/
  .oclock-nav{flex-direction: row;height:104px;padding-left:16px;padding-right:16px;background-color:rgba(0,0,0,.12);}
  .oclock-list{position:relative;flex:1;justify-content: center;align-items: center;}
  .buying{background-color:#FFA000;}
  .oclock-number{color:#fff;font-size:36px;font-weight: bold;}
  .oclock-status{color:#fff;font-size:28px;}
  .oclock-buying{position:absolute;top:104px;left:0;right:0;align-items: center;}
  .oclock-buying-icon{width:16px;height:8px;background-color:#FFA000;}
  .goods{padding-left:16px;padding-right:16px;}
  .goods-list{border-top-left-radius: 12px;margin-top:16px;border-top-right-radius: 12px;border-bottom-left-radius: 12px;border-bottom-right-radius: 12px;background-color:#fff;flex-direction: row}
  .goods-image{width:270px;height:180px;border-top-left-radius: 12px;border-bottom-left-radius: 12px;}
  .goods-info{flex:1;padding-top:16px;padding-left:16px;padding-right:16px;}
  .goods-title{font-size: 32px;color: #17181A;}
  .goods-price{flex-direction: row;align-items: flex-end;}
  .goods-price-text{height:24px;font-size: 24px;color: #FF6600;}
  .goods-price-number{height:36px;font-size: 36px;color: #FF6600;}
  .goods-guiding-price{height:20px;margin-left:12px;color:20px;font-size: 20px;color: #B0B7C0;}
  .goods-guiding-number{height:26px;font-size: 24px;color: #A1A9B3;text-decoration:line-through;}
  .goods-status{flex-direction: row;margin-top: 16px;justify-content: space-between;align-items: center;}
  .goods-number{position:relative;width:214px;height:40px;justify-content: center;align-items: center;overflow:hidden;
    border-top-width:2px;border-top-style: solid;border-top-color: #f44336;
    border-left-width:2px;border-left-style: solid;border-left-color: #f44336;
    border-bottom-width:2px;border-bottom-style: solid;border-bottom-color: #f44336;
    border-right-width:2px;border-right-style: solid;border-right-color: #f44336;
    border-top-left-radius: 20px;border-top-right-radius: 20px;border-bottom-left-radius: 20px;border-bottom-right-radius: 20px;}
    .goods-fill{position:absolute;top:0;left:0;height:36px;background-color:#FFA000;border-top-left-radius: 18px;border-top-right-radius: 18px;border-bottom-left-radius: 18px;border-bottom-right-radius: 18px;}
    .goods-number-text{font-size: 28px;color: #F44336;}
    .goods-button{width:128px;height:56px;justify-content: center;align-items: center;border-top-left-radius: 8px;border-top-right-radius: 8px;border-bottom-left-radius: 8px;border-bottom-right-radius: 8px;background-color:#f44336;}
    .goods-button-disabled{background-color:#A1A9B3;}
    .goods-button-text{color:#fff;font-size:28px;}
</style>

<script type="text/babel">
  const meta = weex.requireModule('meta')
  const modal = weex.requireModule('modal')
  export default {
    data: {
      //标题
      title:'标题标题标题',
      //是否显示标题栏
      titleShow:true,
      //banner图片地址
      banner:'http://frontendsvn.360che.com/icon-project/wap/m/product-library/M/images/banner.png',
      //广告位
      adData:{
        name:'主标题主标题',
        subTitle:'副标题说明说明说明',
        src:'http://designsvn.360che.com/design_web/LJL/10.18_BusinessPromotion/assets/%E5%BC%BA%E8%B0%83%E6%B4%BB%E5%8A%A8.png'
      },
      //nav导航
      nav:[
        {
          name:'厂商介绍',
          icon:'http://designsvn.360che.com/design_web/LJL/10.18_BusinessPromotion/assets/%E8%BD%A6%E5%9E%8B%E8%AE%BA%E5%9D%9B.svg',
        },
        {
          name:'优惠买车',
          icon:'',
        },
        {
          name:'整点秒杀',
          icon:'',
        },
        {
          name:'一口价优惠',
          icon:'https://s.kcimg.cn/wap/images/detail/productApp/more.png',
          more:true,
        }
      ],
      //厂商推荐
      recommendData:{
        title:'厂商推荐',
        subTitle:{
          name:'推广标题厂商推广标题',
          src:'http://placeholder.qiniudn.com/688x144'
        },
        list:[
          'http://placeholder.qiniudn.com/224x80',
          'http://placeholder.qiniudn.com/224x80',
          'http://placeholder.qiniudn.com/224x80'
        ],
      },
      //优惠买车
      discountData:{
        title:'优惠买车',
        list:[
          {
            tag:'标签表',
            src:'http://placeholder.qiniudn.com/336x224',
            srcText:'图上文字图上文字',
            title:'车型标题车型标题车型...',
            peice:'29.2',
            guidingPrice:'33.3',
            buttons:[
              {
                text:'立即抢购'
              }
            ]
          },
          {
            tag:'标签表',
            src:'http://placeholder.qiniudn.com/336x224',
            srcText:'图上文字图上文字',
            title:'车型标题车型标题车型...',
            peice:'29.2',
            guidingPrice:'33.3',
            buttons:[
              {
                text:'立即抢购'
              }
            ]
          },
          {
            tag:'标签表',
            src:'http://placeholder.qiniudn.com/336x224',
            srcText:'图上文字图上文字',
            title:'车型标题车型标题车型...',
            peice:'29.2',
            guidingPrice:'33.3',
            buttons:[
              {
                text:'立减2000'
              },
              {
                text:'立即抢购'
              }
            ]
          },
          {
            tag:'标签表',
            src:'http://placeholder.qiniudn.com/336x224',
            srcText:'图上文字图上文字',
            title:'车型标题车型标题车型...',
            peice:'29.2',
            guidingPrice:'33.3',
            buttons:[
              {
                text:'立减2000'
              },
              {
                text:'立即抢购'
              }
            ]
          }
        ],
      },
      //整点秒杀
      seckillData:{
        title:'整点秒杀',
        navList:[
          {
            oclock:'12:00',
            status:'已开抢'
          },
          {
            oclock:'15:00',
            status:'已开抢'
          },
          {
            oclock:'18:00',
            status:'抢购中'
          },
          {
            oclock:'21:00',
            status:'即将抢购'
          },
          {
            oclock:'24:00',
            status:'即将抢购'
          },
        ],
        goodsList:[
          {
            src:'http://placeholder.qiniudn.com/270x180',
            name:'一汽解放 J6P 540马力',
            price:'29.2',
            guidingPrice:'33.3',
            surplus:5,
            Total:20
          },
          {
            src:'http://placeholder.qiniudn.com/270x180',
            name:'一汽解放 J6P 540马力',
            price:'29.2',
            guidingPrice:'33.3',
            surplus:0,
          },
          {
            src:'http://placeholder.qiniudn.com/270x180',
            name:'一汽解放 J6P 540马力',
            price:'29.2',
            guidingPrice:'33.3',
            surplus:17,
            Total:18
          }
        ]
      }
    },
    methods: {
    },
    created(){
      // 配置 viewport 的宽度为 720px
      meta && meta.setViewport({
        width: 720
      })
      //判断是否是Web页面打开 && 隐藏APP标题栏
      // if(weex.config.env.platform == 'Web'){
      //   this.titleShow = false;
      // }
    }
  }
</script>