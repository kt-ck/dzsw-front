<template>
 <div>
   <!--  eslint-disable -->
   <div class="head">
     <v-icon name="align-justify" style="position: absolute;
    left: 8.2vw;;color:#FD807B; width:5vw;height:5vw;"/>
     <div class="header">
        <span class="head_font">2021年4月</span>
        <v-icon name="caret-down" style="color:#FD807B; width:20px;height:20px"/>
     </div>
  </div>
  <div class="container">
    <div class="pink_box">
     <div class="line1">
       <span class="alpha1">03</span>
       <span class="alpha2">2021年4月</span>
     </div>
     <div class="line2">
       <span class="alpha3">开学的烦恼，你有吗</span>
     </div>
     <div class="line3">
       <img src="../../static/1.png" alt="图片"/>
     </div>
     <div class="line4">
        <button v-on:click="navigate">记录我的今天</button>
     </div>
   </div>
  </div>
   
 </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'Diary1',
  data () {
    return {
      
    }
  },
  methods: {
    navigate: function(event){
       this.$router.push({name: 'Diary2'})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.head{
  top:0px;
  width:100%;
  height:8vh;
  background: white;
  padding-top:5vw;
}

.pink_box{
  margin-top: 5vh;
  margin-left: 2vw;
  width: 90vw;
  height: 70vh;
  background: rgba(255,223,222,0.53);
  box-shadow: 0px 1px 20px -4px #FB807A ;
  border-radius: 5.2vw;
}

.line1{
  padding-top: 2vh;
  padding-left: 5.2vw;
}

.alpha1{
  width: 20vw;
  height: 13vw;
  font-family: PangMenZhengDao;
  font-size: 13vw;
  color: #FB807A;
  letter-spacing: 4px;
  font-weight: 800;
}

.alpha2{
  width: 30vw;
  height: 5vw;
  font-family: PangMenZhengDao;
  font-size: 4vw;
  color: #666666;
  letter-spacing: 1.05px;
  font-weight: 400;
}

.line2{
  padding-top: 4.8vh;
  padding-left: 6.5vw;
}
.alpha3{
  width: 60px;
  height: 15px;
  font-family: PingFangSC-Medium;
  font-size: 7px;
  color: #000000;
  letter-spacing: 1.05px;
  font-weight: 600;
}
.line3{
  margin-top: 5.5vh;
  text-align: center;
}

.line4{
  margin-top: 7vh;
  text-align: center;
}
button{
  width: 50%;
  height:30px;
  background-color: #FB807A ;
  color: white;
  border: 0;
  border-radius: 5px;
}
.container{
  background-color: #F9F9F8;
  padding-top:5vh;
}

.triangle {
    /* 内部大小 */
    width: 0px;
    height: 0px;
    /* 边框大小 只设置三条边*/
    border-top: #4285f4 solid;
    border-right: transparent solid;
    border-left: transparent solid;
    border-width: 5px; 
    /* 其他设置 可有可无*/
    margin: 50px;
}

.head_font{
  font-family: PingFangSC-Medium;
  font-size: 16px;
  color: #000000;
  letter-spacing: 1.6px;
  font-weight: 500;
}

.header{
   position: absolute;
   left: 35vw;
   width: 40vw;
   height: 5vh;
}

img{
  width: 60vw;
  height: 50vw;
}
</style>
