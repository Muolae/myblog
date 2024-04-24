<template>
  <div class="page">
    <left-nav class="leftnav"></left-nav>
    <router-view class="ca"></router-view>
    
  </div>
  
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import ContentArea from './components/ContentArea.vue'
import LeftNav from './components/LeftNav.vue'
export default {
  name: 'App',
  components: {
    //HelloWorld,
    ContentArea,
    LeftNav
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color: aqua;
  height: 100%;
  
}
.page{
  display: flex;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
}
.leftnav{
  width: 240px;
  min-width: 200px;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.ca{
  width: 100%;
  height: 97%;
  
}
</style>
