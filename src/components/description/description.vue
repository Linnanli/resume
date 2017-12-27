<template>
  <div class="component-description">
      <div class="description-box">
        <h1 class="title">{{params.title}}</h1>
        <div class="des-wrap" :class="isLoad?'load':'leave'">
            <p v-for="val in params.des">{{val}}</p>
        </div>
        <div class="self-info" :class="isLoad?'load':'leave'">
            <p>
                <i class="iconfont icon-touxiang2"></i>
                <span class="info-text">{{params.info.name}}</span>
            </p>
            <p>
                <i class="iconfont icon-nianling"></i>
                <span class="info-text">{{params.info.age}}</span>
            </p>
            <p>
                <i class="iconfont icon-xuexiao1"></i>
                <span class="info-text">{{params.info.school}}</span>
            </p>
            <p>
                <i class="iconfont icon-dianhua2"></i>
                <span class="info-text">{{params.info.phone}} 
                    <!-- <a :href="'tel:'+params.info.phone">[call]</a>
                    <a :href="'sms:'+params.info.phone">[sms]</a> -->
                    </span>
            </p>
            <p>
                <i class="iconfont icon-youxiang1"></i>
                <span class="info-text">{{params.info.email}}</span>
            </p>
        </div>
      </div>
      <div class="arrow">
          <arrow-down :touch="next"></arrow-down>
      </div>
  </div>
</template>
<script>
import arrowDown from '../arrow/arrow';
export default {
  name: "description",
  data() {
    return {
        isLoad:false,
        params:{
            des:{},
            info:{}
        }
    }
  },
  created(){
      this.params = this.$root.INIT_CONFIG.description;
  },
  methods:{
      leave(index){
          this.isLoad = false;
      },
      load(index){
          this.isLoad = true;
      },
      callme(phone){
          window.location.href('tel:'+phone);
      },
      next(){
          window.appRoot.moveDown()
      }
  },
  components:{
    arrowDown
  }
};
</script>
<style scoped>
.component-description {
  height: 100%;
  background: #516395;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  position: relative;
  box-sizing: border-box;
  /* overflow: hidden; */
}
.title{
    font-size: 28px;
    margin: 16px 0;
    color:hsla(0,0%,100%,.9);
}
.description-box {
  width: 100%;
  max-width: 990px;
  /* height: 100%; */
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
}
/***************** 描述 ***********************/
.des-wrap {
    width: 100%;
  padding: 10px;
  box-sizing:border-box;
  border-radius: 4px;
  background-color: #fff;
  box-shadow: 0 5px 5px rgba(0,0,0,.1);
  transition: transform 1s ease;
  transform-origin: left top;
  transform: translateX(-100%);
  opacity: 0;
}
.des-wrap.load{
    opacity: 1;
    /* transform: rotateZ(0deg); */
    transform: translateX(0);
    /* animation:desLoadRotate 1s ease;
    animation-fill-mode: forwards; */
}
.des-wrap.leave{
    opacity: 0;
    /* transform: rotateZ(-50deg); */
    transform: translateX(-100%);
}
.des-wrap p{
   color: #444;
   text-indent: 28px;
   text-align: left;
   font-size: 14px;
   line-height: 1.4;
}

/**************** 个人信息 ***************/
.self-info{
    width: 100%;
    box-sizing: border-box;
    border-radius: 4px;
    margin-top: 10px;
    padding: 10px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    box-shadow: 0 5px 5px rgba(0,0,0,.1);
    transition: transform 1s ease;
    opacity: 0;
    transform-origin: right top;
    /* transform:rotateZ(-50deg); */
    transform: translateX(100%);
}
.self-info.load{
    opacity: 1;
    /* transform:rotateZ(0); */
    transform: translateX(0px);
}
.self-info.leave{
    opacity: 0;
    /* transform: rotateZ(-50deg); */
    transform: translateX(100%);
}
.self-info p{
    display: flex;
    flex-direction: row;
    align-items: center;
    line-height: 30px;
    margin: 0;
}
.self-info p+p{
    margin: 10px 0 0 0;
}
.self-info .iconfont{
    font-size: 20px;
    margin-right: 6px;
}
.self-info .info-text{
    font-size: 14px;
    color: #444;
}
.arrow{
    /*firefox:当flex元素触碰到absolute元素时,会将absolute元素挤偏移*/
    width: 100%;
    height: 20px;
    /* position: absolute; */
    /* bottom: 24px; */
    text-align: center;
    /* z-index: 999; */
}
</style>

