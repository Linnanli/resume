<template>
  <div class="component-bar">
      <h1 class="title">技能占比</h1>
      <div class="bar-box">
        <div class="bar-wrap">
            <div class="bar-item" v-for="val in barData" :class="isLoad?'load':'leave'">
                <div class="bar-name">{{val.name}}</div>
                <div class="bar-process"  :style="{'width':val.rate}">
                    <div class="process-bg" :style="{'background-color':val.bg}"></div>
                </div>
                <div class="bar-rate">{{val.rate}}</div>
            </div>
        </div>
      </div>
      <div class="arrow">
          <arrow-down :touch="next"></arrow-down>
      </div>
  </div>
</template>
<script>
import arrowDown from "../arrow/arrow";

export default {
  name: "bar",
  data() {
    return {
      isLoad: false,
      title:"",
      barData: []
    };
  },
  created(){
      var total = 0,
          params = this.$root.INIT_CONFIG.skill;

      this.title = params.title;
      this.barData = params.barData;

      this.barData.forEach((item, index) => {
        total+=item.number;
      });
      //计算柱状图长度
      this.barData.forEach((item, index) => {
        // item.rate = item.scale * 100 + "%";
        //Number((item.number/total).toFixed(2)) *1000/10 ,防止js计算小数后出现多位小数,先乘1000再除以10,最后取小数的100倍
        item.rate = Number((item.number/total).toFixed(2)) *1000/10 +'%';
      });
  },
  methods: {
    load() {
      this.isLoad = true;
    },
    leave() {
      this.isLoad = false;
    },
    next() {
      window.appRoot.moveTo(4);
    }
  },
  components: {
    arrowDown
  }
};
</script>
<style scoped>
.component-bar {
  width: 100%;
  height: 100%;
  background: linear-gradient(270deg, #283048, #859398);
  padding: 10px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.title {
  font-size: 28px;
  margin: 16px 0;
  color: hsla(0, 0%, 100%, 0.9);
}
/**************进度条*******************/
.bar-box {
  width: 100%;
  max-width: 990px;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
}
.bar-wrap {
  width: 100%;
  /* height: 100%; */
  min-height: 370px;
  max-width: 990px;
  background-color: #fff;
  border-radius: 4px;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.bar-item {
  height: 15px;
  display: flex;
  flex-direction: row;
}
.bar-item + .bar-item {
  margin-top: 16px;
}
.bar-name {
  width: 60px;
  color: #000;
  font-size: 12px;
  text-align: left;
}
.bar-process {
  width: 100%;
  height: 100%;
  margin-left: 6px;
}
.bar-process .process-bg {
  width: 0%;
  height: 100%;
  background-color: #ccc;
  transition: width 1s ease;
  border-radius: 3px;
}
.bar-item.load .bar-process .process-bg {
  width: 100%;
}
.bar-rate {
  margin-left: 6px;
  opacity: 0;
  font-size: 12px;
}
.bar-item.load .bar-rate {
  transition: opacity 2s ease 1s;
  opacity: 1;
}
/*********指示箭头***********/
.arrow {
  width: 100%;
  height: 20px;
  /* position: absolute; */
  /* bottom: 24px; */
  text-align: center;
  /* z-index: 999; */
}
</style>

