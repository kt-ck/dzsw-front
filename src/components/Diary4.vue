<template>
<!-- eslint-disable -->
    <div class="whole">
        <div class="back">
            <div class="icon1">
                 <v-icon @click="godiary3" name="book" style="color:#FD807B; width:3vh;height:3vh"/>
            </div>
            <div class="head">我的日记</div>
            <div class="icon2">
                 <v-icon @click="goVisible" name="adjust" style="color:#FD807B; width:3vh;height:3vh"/>
            </div>
        </div>
        <b-tabs content-class="mt-3">
            <b-tab title="日历" active>
                 <b-calendar class="calendar" v-model="value"  @context="onContext" locale="zh" width="100vw" hide-header></b-calendar>
            </b-tab>
            <b-tab title="本周统计" style="text-align:center">
                 <img src="../../static/static.png" alt="">
            </b-tab>
           
        </b-tabs>  
        <div class="context">
            <div>
                <b-card v-for="item in show_diary" :key="item.id" class="article">
                    <template v-slot:header>
                        <h4 class="mb-0">{{item.head}}</h4>
                        <b-badge pill variant="primary" v-for="(keyword, index) in getRealKeyword(item.keyword)" :key="index">{{keyword}}</b-badge>
                        <b-progress :value="item.emotion.score" :max="1" height="1vh" :variant="getEmotionColor(item.emotion.score)" animated ></b-progress>
                    </template>
                <b-card-text>{{item.context}}</b-card-text>
                </b-card>        
            </div>
        </div>
    </div>
    
</template>

<script>
/* eslint-disable */
export default {
    name: 'Diary4',
    data () {
      return{
        value: '',
        context: null,
        diary: [],
        show_diary:[],
        cnt: 1
      }
    },
    methods: {
      onContext(ctx) {
        this.context = ctx
      },
      dateFormat:function(date){
            let whole = date.split('/')
            let year = whole[0].toString()
            let month = whole[1] < 10 ? '0' + whole[1].toString(): whole[1].toString()
            let day = whole[2] < 10 ? '0' + whole[2].toString(): whole[2].toString()
            return year+'-'+ month + '-' + day
      },
      getRealKeyword(msg){
          let result = []
          for(let i= 0; i < msg.length; ++i){
            //   console.log(msg[i]['score'])
              if(parseFloat(msg[i]['score']) >= 0.5){
                  result.push(msg[i]['word'])
              }
          }
        //   console.log(result)
          return result
      },
      getEmotionColor(data){
          if(data < 0.15){
              return 'danger'
          }else if(data < 0.4){
              return 'warning'
          }else if (data < 0.75){
              return 'info'
          }else{
              return 'success'
          }
      },
      updateShowDiaryList(){
        for(let i = 0; i < this.diary.length; i++){
            if(this.diary[i]['date'] === this.value){
                this.show_diary.push(this.diary[i])
            }
        }
      },
      goVisible (){
          this.$router.push({name : 'visible'})
      },
      godiary3 () {
          this.$router.push({name: 'Diary3'})
      }
    },
    created:function(){       
        this.value = this.dateFormat(new Date().toLocaleDateString())
        this.diary = this.$store.state.diary_list
        this.updateShowDiaryList()
        // for(let i = 0; i < this.diary.length; i++){
        //     if(this.diary[i]['date'] === this.value){
        //         this.show_diary.push(this.diary[i])
        //     }
        // }
        // console.log(this.show_diary)
    }
}
</script>

<style scoped>
.whole{
    height: 130vh;
}
.icon1{
    display: inline-block;
    position: absolute;
    left: 3vw;
    top: 2vh;
}
.icon2{
    display: inline-block;
    position: absolute;
    right: 3vw;
    top: 2vh;
}
.back{
    height: 8vh;
    text-align: center;
    padding-top:3vh;
}
.calendar{
  width: 100vw;
}
.head{
    font-family: PingFangSC-Medium;
    font-size: 2vh;
    color: #000000;
    font-weight: 600;
    display:inline-block;
}

.context{
    margin-top: 5vh;
}

.artcle{
    margin-top:3vh;
}
</style>