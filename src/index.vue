<template>
  <div class="container">
    <div class="title">
      <div class="back">
        <image class="back-icon" src="https://s.kcimg.cn/wap/images/detail/productApp/back.png"></image>
        <text class="back-text">关闭</text>
      </div>
      <div class="title-wrapper">
        <text class="title-text">标题标题标题</text>
      </div>
      <div class="share">
        <image class="share-icon" src="https://s.kcimg.cn/wap/images/detail/productApp/share.png"></image>
        <text class="share-text">分享</text>
      </div>
    </div>
    <list class="wrapper">
<!--       <cell>
        <div class="banner">
          <image class="banner-image" :src="banner"></image>
        </div>
        <div class="rob">
          <div class="rob-wrapper">
            <image class="rob-image" src="http://designsvn.360che.com/design_web/LJL/10.18_BusinessPromotion/assets/%E5%BC%BA%E8%B0%83%E6%B4%BB%E5%8A%A8.png"></image>
            <div class="rob-title">
              <text class="rob-title-text">主标题</text>
              <text class="rob-title-text yellow">主标题</text>
            </div>
            <div class='rob-bubtitle'>
              <text class="rob-subtitle-text">副标题说明说明说明</text>
            </div>
          </div>
        </div>
      </cell> -->
<!--       <header>
        <div class="nav">
          <div class="nav-info">
            <image class="nav-car-icon" src="http://designsvn.360che.com/design_web/LJL/10.18_BusinessPromotion/assets/%E8%BD%A6%E5%9E%8B%E8%AE%BA%E5%9D%9B.svg"></image>
            <text class="nav-info-text nav-info-visible">厂商介绍</text>
          </div>
          <div class="nav-info">
            <text class="nav-info-text">优惠买车</text>
          </div>
          <div class="nav-info">
            <text class="nav-info-text">整点秒杀</text>
          </div>
          <div class="nav-info">
            <text class="nav-info-text">一口价优惠</text>
            <image class="nav-more-icon" src="https://s.kcimg.cn/wap/images/detail/productApp/more.png"></image>
          </div>
        </div>
      </header> -->
      <!-- 厂商推荐 -->
<!--       <cell>
        <div class="activity-title">
          <div class="activity-title-wrapper">
            <image class="activity-image" src="http://designsvn.360che.com/design_web/LJL/10.18_BusinessPromotion/assets/gold_bg.png"></image>
            <text class="activity-text">厂商推荐</text>
          </div>
          <div class="rule">
            <image style="width:22px;height:22px;" src="http://designsvn.360che.com/design_web/LJL/10.18_BusinessPromotion/assets/rules.svg"></image>
            <text class="rule-text">查看规则</text>
          </div>
        </div>
        <div class="recommend-content">
          <div class="recommend-title">
            <div class="recommend-title-wrapper">
              <image style="width:688px;height:144px" src="http://placeholder.qiniudn.com/688x144"></image>
              <text class="recommend-title-text">推广标题厂商推广标题</text>
            </div>
          </div>
          <div class="recommend-list">
            <div class="recomment-list-info">
              <image class="recomment-list-image" src="http://placeholder.qiniudn.com/224x80"></image>
            </div>
            <div class="recomment-list-info">
              <image class="recomment-list-image" src="http://placeholder.qiniudn.com/224x80"></image>
            </div>
            <div class="recomment-list-info">
              <image class="recomment-list-image" src="http://placeholder.qiniudn.com/224x80"></image>
            </div>
          </div>
        </div>
      </cell> -->
      <!-- 优惠买车 -->
      <cell>
          <div class="activity-title">
            <div class="activity-title-wrapper">
              <image class="activity-image" src="http://designsvn.360che.com/design_web/LJL/10.18_BusinessPromotion/assets/gold_bg.png"></image>
              <text class="activity-text">厂商推荐</text>
            </div>
            <div class="rule">
              <image style="width:22px;height:22px;" src="http://designsvn.360che.com/design_web/LJL/10.18_BusinessPromotion/assets/rules.svg"></image>
              <text class="rule-text">查看规则</text>
            </div>
          </div>
          <div class="discount">
            <div class="discount-list">
              <div class="discount-img">
                <image class="discount-image" src="http://placeholder.qiniudn.com/336x224"></image>
                <div class="tag">
                  <text class="tag-text">标签表</text>
                </div>
                <div class="describe">
                  <text class="describe-text">图上文字图上文字</text>
                </div>
              </div>
              <div class="discount-content">
                <!-- <div class="discount-title"> -->
                  <text class="discount-title-text">车型标题车型标题车型...</text>
                <!-- </div> -->
                <div class="discount-price">
                  <text class="discount-price-text">优惠价￥</text>
                  <text class="discount-price-number">29.2</text>
                  <text class="discount-price-text">元</text>
                </div>
                <div class="guiding-price">
                  <text class="guiding-price-text">厂商指导价</text>
                  <text class="guiding-price-text guiding-delect">￥33.3万</text>
                </div>
                <div class="buying-button">
                  <div class="panic-buying" style="background-image:linear-gradient(to right,#FF9F00,#FF6600);">
                    <text class="panic-buying-text">立即抢购</text>
                  </div>
                </div>
              </div>
            </div>
            <div class="discount-list">
              <div class="discount-img">
                <image class="discount-image" src="http://placeholder.qiniudn.com/336x224"></image>
                <div class="tag">
                  <text class="tag-text">标签表</text>
                </div>
                <div class="describe">
                  <text class="describe-text">图上文字图上文字</text>
                </div>
              </div>
              <div class="discount-content">
                <!-- <div class="discount-title"> -->
                  <text class="discount-title-text">车型标题车型标题车型...</text>
                <!-- </div> -->
                <div class="discount-price">
                  <text class="discount-price-text">优惠价￥</text>
                  <text class="discount-price-number">29.2</text>
                  <text class="discount-price-text">元</text>
                </div>
                <div class="guiding-price">
                  <text class="guiding-price-text">厂商指导价</text>
                  <text class="guiding-price-text guiding-delect">￥33.3万</text>
                </div>
                <div class="buying-button">
                  <div class="panic-buying" style="background-image:linear-gradient(to right,#FF9F00,#FF6600);">
                    <text class="panic-buying-text">立即抢购</text>
                  </div>
                </div>
              </div>
            </div>
            <div class="discount-list">
              <div class="discount-img">
                <image class="discount-image" src="http://placeholder.qiniudn.com/336x224"></image>
                <div class="tag">
                  <text class="tag-text">标签表</text>
                </div>
                <div class="describe">
                  <text class="describe-text">图上文字图上文字</text>
                </div>
              </div>
              <div class="discount-content">
                <!-- <div class="discount-title"> -->
                  <text class="discount-title-text">车型标题车型标题车型...</text>
                <!-- </div> -->
                <div class="discount-price">
                  <text class="discount-price-text">优惠价￥</text>
                  <text class="discount-price-number">29.2</text>
                  <text class="discount-price-text">元</text>
                </div>
                <div class="guiding-price">
                  <text class="guiding-price-text">厂商指导价</text>
                  <text class="guiding-price-text guiding-delect">￥33.3万</text>
                </div>
                <div class="buying-button">
                  <div class="reduce-button">
                    <text class="reduce-button-text">立减2000</text>
                  </div>
                  <div class="panic-buying" style="background-image:linear-gradient(to right,#FF9F00,#FF6600);">
                    <text class="panic-buying-text">定金299元</text>
                  </div>
                </div>
              </div>
            </div>
            <div class="discount-list">
              <div class="discount-img">
                <image class="discount-image" src="http://placeholder.qiniudn.com/336x224"></image>
                <div class="tag">
                  <text class="tag-text">标签表</text>
                </div>
                <div class="describe">
                  <text class="describe-text">图上文字图上文字</text>
                </div>
              </div>
              <div class="discount-content">
                <!-- <div class="discount-title"> -->
                  <text class="discount-title-text">车型标题车型标题车型...</text>
                <!-- </div> -->
                <div class="discount-price">
                  <text class="discount-price-text">优惠价￥</text>
                  <text class="discount-price-number">29.2</text>
                  <text class="discount-price-text">元</text>
                </div>
                <div class="guiding-price">
                  <text class="guiding-price-text">厂商指导价</text>
                  <text class="guiding-price-text guiding-delect">￥33.3万</text>
                </div>
                <div class="buying-button">
                  <div class="reduce-button">
                    <text class="reduce-button-text">立减2000</text>
                  </div>
                  <div class="panic-buying" style="background-image:linear-gradient(to right,#FF9F00,#FF6600);">
                    <text class="panic-buying-text">定金299元</text>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </cell>
      <!-- 整点秒杀 -->
      <cell>
        <div class="oclock">
          
        </div>
      </cell>
    </list>
  </div>
</template>

<style>
  /*整点秒杀*/
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
  .guiding-delect{text-decoration:line-through;}
  .buying-button{flex-direction: row;height:64px;margin-top:16px;}
  .panic-buying{flex:1;height:64px;justify-content: center;align-items: center;border-top-right-radius: 4px;border-top-right-radius: 4px;border-bottom-left-radius: 4px;border-bottom-right-radius: 4px}
  .panic-buying-text{font-size: 28px;color: #FFF;}
  .reduce-button{width:144px;height:64px;margin-right:16px;justify-content: center;align-items: center;border-top-width:2px;border-top-style: dashed;border-top-color: #ffa000;border-left-width:2px;border-left-style: dashed;border-left-color: #ffa000;border-bottom-width:2px;border-bottom-style: dashed;border-bottom-color: #ffa000;border-right-width:2px;border-right-style: dashed;border-right-color: #ffa000}
  .reduce-button-text{font-size: 28px;color: #FFA000;}
  /*厂商推荐*/
  .recommend-title{position: relative;justify-content: center;align-content: center;flex-direction: row}
  .recommend-title-text{position:absolute;top:10px;right:32px;}
  .recommend-title-text{ont-size: 36px;color: #F44336;}
  .recommend-list{flex-direction: row;margin-top:10px;padding-left:12px;padding-right:12px;}
  .recomment-list-info{flex:1;margin-left:4px;margin-right:4px;}
  .recomment-list-image{width:224px;height:160px;}
  /*活动区块标题*/
  .activity-title{position:relative;height:100px;margin-top:32px;margin-bottom:16px;justify-content: center;flex-direction: row}
  .activity-title-wrapper{position:relative;width:326px;height:96px;justify-content: center;align-items: center;flex-direction: row}
  .activity-image{position:absolute;top:0;left:0;width:326px;height:96px;}
  .activity-text{font-size: 40px;color: #FFFFFF;}
  .rule{position:absolute;right:16px;top:0;bottom:12px;flex-direction: row;justify-content: flex-end;align-items: flex-end;}
  .rule-text{opacity: 0.8;font-size: 24px;color: #FFFFFF;}
  /*nav*/
  .nav{flex-direction: row;height:88px;background-color:rgba(0,0,0,.2);padding-left:24px;}
  .nav-info{flex:1;justify-content:center;align-items: center;flex-direction: row}
  .nav-info-text{font-size:28px;color:#fff;}
  .nav-info-visible{font-weight: bold;}
  .nav-car-icon{width:40px;height:28px;margin-right: 8px;}
  .nav-more-icon{width:24px;height:12px;}


  .container{position:absolute;left:0;top:0;right:0;bottom:0;}
  /*标题栏*/
  .wrapper {flex:1;background-color:#CB1E1A;}
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
  .rob{flex-direction:row;justify-content: center;align-content: center;}
  .rob-wrapper{position:relative;}
  .rob-image{width:714px;height:240px;}
  .rob-title{position:absolute;left:84px;top:28px;flex-direction: row}
  .rob-title-text{font-size:64px;color:#fff;}
  .yellow{color:yellow;}
  .rob-bubtitle{position:absolute;left:112px;bottom:76px;}
  .rob-subtitle-text{font-size:36px;color:#F44336;}
</style>

<script type="text/babel">
  const meta = weex.requireModule('meta')
  // 配置 viewport 的宽度为 640px
  meta && meta.setViewport({
    width: 720
  })
  export default {
    data: {
      banner:'http://frontendsvn.360che.com/icon-project/wap/m/product-library/M/images/banner.png'
    },
    methods: {
    }
  }
</script>