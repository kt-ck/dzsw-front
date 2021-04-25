<template>
<!-- eslint-disable -->
    <div class="whole">
      <div class="back">
          <v-icon name="arrow-left" style="color:#FD807B; width:5vw;height:5vw"/>
      </div>
      <img class="img1" src="../../static/2.png" alt="图片"/>
      <div class="alpha">
          <div class="font1">下午好. HANNIE</div>
          <div class="font1" style="margin-top:7vh;">想和我分享哪天的故事呢？</div>
          <div class="font2" style="margin-top:10vh;">今天是&nbsp&nbsp&nbsp<div class="alphaspan">4月3号</div></div>
          <div class="font2" style="margin-top:0vh;">不知道你那里的天气如何?</div>
      </div>
      <div class="img">
          <div class="imgline">
            <div class="imgblock" style="margin-left:0vw">
                <v-icon name="sun" class="icon"></v-icon>
            </div>
            <div class="imgblock">
                 <v-icon name="cloud" class="icon"></v-icon>
            </div>
            <div class="imgblock">
                 <v-icon name="cloud-sun" class="icon"></v-icon>
            </div>
          </div>
          <div class="imgline" style="margin-top:5vh"> 
            <div class="imgblock" style="margin-left:0vw">
                 <v-icon name="cloud-showers-heavy" class="icon"></v-icon>
            </div>
            <div class="imgblock">
                 <v-icon name="snowflake" class="icon"></v-icon>
            </div>
            <div class="imgblock">
                 <v-icon name="cloud-sun-rain" class="icon"></v-icon>
            </div>
          </div>
      </div>
      <div class="button">
           <button v-on:click="gotoEditDairy"><span class="buttonspan">我想写这天的事</span></button>
      </div>
    </div>
</template>

<script>
/* eslint-disable */ 
export default {
  name: "Diary2",
  methods:{
      gotoEditDairy:function(event){
          this.$router.push({name: 'Diary3'})
      }
  },
}
</script>

<style scoped>
.back{
    background-color: white;
    padding-top:15vw;
    padding-left: 5vw;
}

.alpha{
    margin-top:8.9vh;
    padding-left:5vw;
    width:100vw;
}

.font1{
    width: 100vw;
    height: 10vw;
    font-family: MFBoHei_Noncommercial-Regular;
    font-size: 8vw;
    color: #000000;
    letter-spacing: 2vh;
    font-weight: 400;
}
.font2{
    margin-top: 3vh;
    width: 100vw;
    height: 10vw;
    font-family: PingFangSC-Medium;
    font-size: 3vw;
    color: #000000;
    letter-spacing: 2vh;
    line-height: 10vw;
    font-weight: 500;
}
.img{
    margin-top:3.6vh;
    width:100vw;
}
.alphaspan{
    display: inline-block;
    width:30vw;
    height:5vh;
    border-bottom: 3px solid #F98079;
    font-weight: 600;
    font-size:3vw;
}
.imgline{
    height: 14vh;
    width:100%;
    padding-left: 8vw;

}
.imgblock{
    display: inline-block;
    width: 27vw;
    height: 27vw;
    background: rgba(255,223,222,0.53);
    box-shadow: 0px 1px 20px -4px rgba(251,128,122,1);
    border-radius: 10px;
    margin-left:3vw;
    text-align: center;
}
.button{
    margin-top: 15.2vh;
    width:100vw;
}
button{
    margin-left:23vw;
    width:55.2vw;
    background: rgba(251,128,122,1);
    border-radius: 4.7vw;
    border: 0;
    padding-top: 1.9vh;
    padding-bottom:1.9vh;
}
.buttonspan{
    width: 36.1vw;
    height: 2.8vh;
    font-family: PingFangSC-Medium;
    font-size: 5.15vw;
    color: #FFFFFF;
    letter-spacing: 1.6px;
    text-align: center;
    font-weight: 500;
}
.img1{
    position:absolute;
    width:23vw;
    height:23vw;
    right:0vw;
    top: 5vh;
}
.icon{
    display: inline-block;
    width:14.6vw;
    height:14.6vw;
    margin-top: 6.3vw;
    color:#F98079;
}
.whole{
    height: 150vh;
}
</style>
