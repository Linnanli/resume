<template>
  <div class="component-project">
    <h1 class="title">项目经历</h1>
    <div class="project-body" ref="proBody">
      <div class="slider-box" ref="sliderBox">
        <div class="slider-item" v-for="(val,$index) in projectData" :key="$index">
          <div class="project-img">
            <img :src="val.images">
          </div>
          <div class="project-des">{{val.description}}</div>
          <a class="project-path iconfont icon-lianjie" v-if="val.link" :href="val.link" target="_blank"></a>
        </div>
      </div>
    </div>
    <div class="project-footer">
      <a class="left-but iconfont icon-next-copy" @click="prev()"></a>
      <a class="right-but iconfont icon-jiantou" @click="next()"></a>
    </div>
  </div>
</template>
<script>
export default {
  name:'project',
  data(){
      return {
        proBodyW:0,
        index:0,
        dataLen:0,
        title:"",
        projectData:[]
      }
  },
  created(){
      var params = this.$root.INIT_CONFIG.project;
      this.title = params.title;
      this.projectData = params.projectData;
  },
  mounted(){
    var _this = this,
        timer;

    this.dataLen = this.projectData.length;
    this.proBodyW = this.$refs.proBody.offsetWidth;

    $(this.$refs.sliderBox).css('width',this.dataLen*100+'%');

    //解决屏幕大小变化时切换位置不正确的BUG
    window.addEventListener('resize',()=>{
      _this.proBodyW = _this.$refs.proBody.offsetWidth;
      clearTimeout(timer);
      timer = setTimeout(()=>{
        _this.index = 0;
        _this.slider();
      },100);
    });

  },
  methods:{
    load(){},
    leave(){},
    prev(){
      if(this.index!==0){
        this.index--;
        this.slider();
      }

    },
    next(){
      if(this.index<this.dataLen-1){
        this.index++;
        this.slider();
      }
    },
    slider(){
      $(this.$refs.sliderBox).css('transform','translateX('+((-this.proBodyW*this.index)+'px')+')');
    }
  }
}
</script>
<style scoped>
.component-project{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 10px;
  box-sizing: border-box;
  background: linear-gradient(270deg,rgb(133, 147, 152),#81888a);
  overflow: hidden;
  /* background:rgb(133, 147, 152); */
}
.title{
    font-size: 28px;
    margin: 16px 0;
    color:hsla(0,0%,100%,.9);
}
/******************项目列表*********************/
.project-body{
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
}
.slider-box{
  width: 300%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  transition: transform 1s ease;
    /* transform: translateX(300px); */
}
.slider-item{
  width: 280px;
  height: 100%;
  border-radius: 6px;
  background-color: #fff;
  padding: 10px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
}
.project-img{
  overflow: hidden;
}
.project-img img{
  height: 144px;
}
.project-des{
  flex-grow: 1;
  line-height: 26px;
  text-align: left;
  text-indent: 28px;
  font-size: 14px;
  color: #222;
  padding-bottom: 10px;
}
.project-path{
  width: 100%;
  height: 36px;
  font-size: 20px;
  line-height: 36px;
  color: #2c3e50;
  display: block;
  border-radius: 4px;
  text-align: center;
  border: 1px solid #859398;
  opacity: .6;
  transition: opacity 1s ease;
  background-color: #fff;
}
.project-path:active{
  opacity: 1;
  background-color: #859398;
}
/*****************页尾********************/
.project-footer{
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.left-but,.right-but{
  display: block;
  width: 50px;
  font-size: 50px;
  opacity: 0.5;
  transition: opacity 0.25s ease-out;
}
/*左边按钮*/
.left-but{
  margin-left: 10px;
}
.left-but:active{
  opacity: 1;
}
/*右边按钮*/
.right-but{
  margin-right: 10px;
}
.right-but:active{
  opacity: 1;
}
</style>
