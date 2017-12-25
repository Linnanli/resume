<template>
  <div class="arraw-down" @click="touch()">
      <span class="iconfont icon-arrow-down"></span>
    </div>
</template>
<script>
export default {
    name:'arrow',
    props:{
        touch:Function
    },
    data(){
        return {}
    }
}
</script>
<style scoped>
.arraw-down{
  width: 16px;
  height: 18px;
  display: inline-block;
  transform: translateY(0);
  animation: arrow 1s ease infinite;
  animation-direction:alternate;
  /* animation-delay: 2s; */
}
@keyframes arrow{
  from {transform: translateY(24px);}
  to {transform: translateY(0)}
}
</style>
