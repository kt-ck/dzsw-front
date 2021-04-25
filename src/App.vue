<template>
  <div id="app">
    <router-view/>
    <div class="foot">
      <div class="part">
        <v-icon name="home" style="color:#A9AAB1; width:8vw;height:8vw"/><br/>
        <span class="footalpha">首页</span>
      </div>
      <div class="part">
        <v-icon name="th-large" style="color:#A9AAB1; width:8vw;height:8vw"/><br/>
        <span class="footalpha">社区</span>
      </div>
      <div class="part">
        <v-icon name="book" style="color:#FF807C; width:8vw;height:8vw"/><br/>
        <span class="footalpha">日记</span>
      </div>
      <div class="part">
        <v-icon name="user" style="color:#A9AAB1; width:8vw;height:8vw"/><br/>
        <span class="footalpha">个人</span>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */ 
export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.foot{
  position:fixed;
  height: 15vw;
  bottom:0px;
  width:100vw;
  padding-top: 1vw;
  border-top: 1px solid #A9AAB1;
  background-color: white;
}
.part{
  display: inline-block;
  height: 13vw;
  width: 24vw;
  text-align: center;
}
.footalpha{
  font-family: PingFangSC-Regular;
  font-size: 4vw;
  color: #A9AAB1;
  font-weight: 400;
}
</style>
