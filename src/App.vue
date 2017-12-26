<template>
  <div id="app">
    <section class="page" v-for="val in components" v-if="isLoad">
      <div :is="val" :ref="val"></div>
    </section>
  </div>
</template>

<script>
import home from "./components/home/home";
import description from "./components/description/description";
import bar from "./components/bar/bar";
import project from "./components/project/project";
import "../node_modules/zepto/src/fx";
import "./assets/fonts/iconfont.css";
import "./assets/style/normalize.css";
import "../static/zepto-onepage-scroll/onepage-scroll.css";
import "../static/zepto-onepage-scroll/zepto.onepagescroll";

export default {
  name: "app",
  data() {
    return {
      isLoad: false,
      components: ["home", "description", "bar", "project"]
    };
  },
  components: {
    home,
    description,
    bar,
    project
  },
  mounted() {
    var _this = this;

    //模块初始化完成后延迟触发加载事件,以便显示动画
    var xhr = $.ajax({
      type: "GET",
      url: "./static/config/init.json",
      cache: true,
      success(data) {
        //初始化配置
        _this.$root.INIT_CONFIG = data;
        _this.isLoad = true;
        _this.init();
      },
      error() {
        alert("加载初始化文件错误,请联系管理员!");
      }
    });
    //监控请求进度
    xhr.onprogress = function(e){
        var loadingDOM = $('#loadingScale');
        //vue架设的dev service 不会返回 Content-Length,所以 progressEvent.lengthComputable会等于false,
        //loaded和total的属性都是0
        if(e.lengthComputable){
          loadingDOM.text((e.loaded/e.total*100)+'%');
        }else{
          loadingDOM.text('100%');
        }
    }

  },
  methods: {
    init() {
      var _this = this,
          prevInx = 0,
          index = 0,
          components = this.components;
          
      var timer = setTimeout(() => {
        //初始化插件
        window.appRoot = $("#app");
        window.appRoot.onePageScroll({
          sectionContainer: "section",
          updateURL: true,
          pagination: true,
          afterMove: function(indx) {
            index = indx - 1;
            _this.$refs[components[prevInx]][0].leave(prevInx);
            _this.$refs[components[index]][0].load(index);
            prevInx = index;
          }
        });
        //触发模块加载事件
        _this.$refs[components[index]][0].load(0);
        $("#appLoading").hide();
        clearTimeout(timer);
      });
    }
  }
};
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
}
li {
  list-style: none;
}
a{
  text-decoration: none;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #fff;
}
.icon {
  /* 通过设置 font-size 来改变图标大小 */
  width: 1em;
  height: 1em;
  /* 图标和文字相邻时，垂直对齐 */
  vertical-align: -0.15em;
  /* 通过设置 color 来改变 SVG 的颜色/fill */
  fill: currentColor;
  /* path 和 stroke 溢出 viewBox 部分在 IE 下会显示
             normalize.css 中也包含这行 */
  overflow: hidden;
}
</style>
