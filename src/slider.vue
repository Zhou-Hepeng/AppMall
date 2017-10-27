<template>
  <div class="photo-info">
<!--     <div class="options" v-if="tagName.length">
        <div v-for="(ele,index) in tagName" class="option" @click="switchTab(ele)" >
            <text class="option-text">{{ele.name}}</text>
        </div>
    </div> -->

    <slider  class="slider" @change="slider">
      <div class="frame" index="10" v-for="img in imageList">
        <image class="image" resize="cover" :src="img.url"></image>
      </div>
    </slider>
<!--     <div class="indicator">
          <text class="current" style="color:#fff;">{{imgIndex + 1}}</text>
          <text class='between'> / </text>
          <text class="total">{{imgTotal}}</text>
      </div> -->
  </div>
</template>
<style>
    .photo-info{
      background-color:#111;
    }
  /*头部标题*/
  .options{
      flex-direction: row;
      height:80px;
      justify-content: center;
      align-items: center;
      background-color: #222;
  }
  .option{
      height:80px;
      /*align-items: center;*/
      justify-content: center;
      padding-left:32px;
      padding-right:32px;
  }
  .option-text{
      font-size:28px;
      color:rgba(255,255,255,.5);
  }

  .image {
    width: 750px;
    height: 500px;
  }
  .slider {
    margin-top: 25px;
    margin-left: 25px;
    width: 700px;
    height: 700px;
    border-width: 2px;
    border-style: solid;
    border-color: #41B883;
  }
  .frame {
    width: 700px;
    height: 700px;
    position: relative;
  }
  /*图片索引*/
    .indicator{
        flex-direction: row;
        margin-top:80px;
        justify-content: center;
        align-items: flex-end;
    }
    .current{
        color:#fff;
        font-size:32px;
        margin-bottom: -4px;
    }
    .between{
        color:#fff;
        font-size:24px;
        margin-left:10px;
        margin-right:10px;
    }
    .total{
        color:#fff;
        font-size:24px;
    }
</style>
<script>
let storage = weex.requireModule('storage')
  export default {
    components:{},
    data () {
      return {
        //头部标题
        tagName:[],
        //图片列表
        imageList: [],
        //图片索引
        imgIndex:0,
        //图片总数量
        imgTotal:2384
      }
    },
    created(){
      // storage.getItem('PhotoTabName',(ele) => {
      //   console.log(JSON.parse(ele.data))
      //   this.tagName = JSON.parse(ele.data) || [];
      // })
      console.log(this.alert)
      // this.alert('1')
      this.getData('/index.php?r=api/getweekpicturedetail&imageId=519300&typeId=31&page=1',(ele) => {
        if(ele.ok && ele.data.info == 'ok'){
          this.imageList = ele.data.data
        }
      })
    },
    methods:{
      //点击头部标题
      switchTab(){

      },
      slider(event){
        this.imgIndex = event.index
        // if(event.index == 2){
        //   this.imageList.push({ src: 'https://gd2.alicdn.com/bao/uploaded/i2/T14H1LFwBcXXXXXXXX_!!0-item_pic.jpg'})
        // }

          console.log(event.index)
      }
    },
  }
</script>