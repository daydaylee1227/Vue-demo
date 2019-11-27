<template>
  <div>
    <mt-swipe :auto="1000">
      
      <mt-swipe-item v-for="item in lunbotuList" :key="item.id">
          <img :src="item.url" alt="">
      </mt-swipe-item>
    </mt-swipe>
    <h3>Home</h3>
  </div>
</template>

<script>
import { Toast } from 'mint-ui'
export default {
    data() {
        return {
            lunbotuList : [
                { id : 1, name : 'gouwu', url : "../../images/Home/1.jpg",},
                { id : 2, name : 'gouwu', url : "../../images/Home/4.jpg",},
                { id : 3, name : 'gouwu', url : "../../images/Home/5.jpg",},
            ],  //保存轮播图的数据
        }
    },
    created(){
        this.getLunbotu();
    },
    methods :{
        
        getLunbotu(){
            // console.log(this.$http);
            // this.$http.get("http://vue.studyit.io/api/getlunbo").then( result => {
            //     console.log(result.body);
            //     if(result.body.status === 0){
            //         this.lunbotuList = result.body.message;
            //     }else{
            //         Toast("加载轮播图失败！");
            //         console.log("加载失败!");   
            //     }
            // }, fail => {
            //     console.log("失败了!");
            // })
            // 假装完成数据的模拟
        }
    }
};
</script>


<style  scoped>
.mint-swipe {
  height: 200px;
  /* background: require("../../images/Home/1.jpg"); */
}
.mint-swipe-item img{
    width: 100%;
    height: 100%;
}
</style>