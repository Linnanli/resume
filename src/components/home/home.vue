<template>
  <div class="component-home" :class="isLoad?'load':'leave'">
    <div class="avatar">
      <img :src="params.avatar">
    </div>
    <div class="name">{{params.name}}</div>
    <div class="description">{{params.description}}</div>
    <div class="personal-link">
      <a class="iconfont icon-github github-link" :href="params.GitHubLink" target="_blank"></a>
    </div>
    <div class="arrow">
      <arrow-down :touch="next"></arrow-down>
    </div>
  </div>
</template>
<script>
import arrowDown from '../arrow/arrow';

export default {
  name: "home",
  data() {
    return {
      isLoad: false,
      params:{}
    };
  },
  created(){
    this.params = this.$root.INIT_CONFIG.home;
  },
  methods: {
    leave(index) {
      this.isLoad = false;
    },
    load(index) {
      this.isLoad = true;
    },
    next(){
      window.appRoot.moveDown();
    }
  },
  components:{
    arrowDown
  }
};
</script>
<style scoped>
.component-home {
  width: 100%;
  height: 100%;
  background: radial-gradient(ellipse farthest-corner, #fff, #eee);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: opacity 1s;
  opacity: 0;
}
.component-home.load {
  opacity: 1;
}
.component-home.leave {
  opacity: 0;
}
.avatar {
  width: 150px;
  height: 150px;
  margin-top: -60px;
  border-radius: 50%;
  /* background-color: #fff; */
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  border: 5px solid #fff;
  /* background-image: url("./logo.png"); */
  /* background-size: contain; */
  overflow: hidden;
}
.avatar img{
  width: 100%;
  height: 100%;
}
.name {
  color: #444;
  font-size: 32px;
  line-height: 60px;
  margin-top: 20px;
}
.description {
  color: #777;
  line-height: 60px;
}
.personal-link{
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.personal-link a{
  width: 70px;
  height: 70px;
  line-height: 70px;
  color: #444;
  animation:all 1s ease;
}
a.github-link{
  font-size: 30px;
}
a.blog-link{
  font-size: 44px;
}
.arrow{
    width: 100%;
    height: 20px;
    position: absolute;
    bottom: 24px;
    text-align: center;
    z-index: 99;
}
</style>


