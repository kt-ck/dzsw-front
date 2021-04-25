<template>
<!-- eslint-disable -->
    <div class="panel">
        <div class="head">
           <div class="back">
                <v-icon name="arrow-left" @click="gohome" style="color:#FD807B; width:10vw;height:10vw"/>
            </div>
            <span class="header">新建日记</span>    
        </div>
        <div class="container">
            <div class="line1">
                <span class="alpha1">03</span>
                <span class="alpha2">2021年4月</span>
            </div>
            <input class="line2" v-model="header"/><br/>
            <div class="line3">
                 <textarea  rows="4" cols="42" v-model="context" style="width:100%"></textarea>
            </div>
            <label for="img" >添加图片</label>
            <div class="addimg">
                <v-icon :name="icon" style="position:absolute;color:white; width:10vw;height:10vw; top:12vw;left:12vw;z-index:1;"/>
                <input style="position:absolute;width:10vw;height:10vw; top:12vw;left:12vw;opacity:0;z-index:2;" type="file" id="file" accept="image/*" @change="changeIcon"/>
            </div>
        </div>
        <div class="button">
            <button @click="postData">写好啦</button>
        </div>

    </div>
</template>

<script>
/* eslint-disable */
export default {
    name: "Diary3",
    data () {
        return{
            header: '给这篇日记起个标题吧',
            context: '告诉我你今天过的怎么样吧.....',
            file: '',
            icon: 'calendar-plus',
        }
    },
    methods:{  
        changeIcon:function(e){
            this.icon = 'check'
        },
        dateFormat:function(date){
            let whole = date.split('/')
            let year = whole[0].toString()
            let month = whole[1] < 10 ? '0' + whole[1].toString(): whole[1].toString()
            let day = whole[2] < 10 ? '0' + whole[2].toString(): whole[2].toString()
            return year+'-'+ month + '-' + day
        },
        postData: function(e){

            let diary = {"id": -1,"head":'', 'date':'', 'context':'','emotion':{},'keyword':[]}
            diary['head'] = this.header
            diary['date'] =  this.dateFormat(new Date().toLocaleDateString())
            diary['context'] = this.context

            this.$axios.post('/api/getKeyWord/', {
              diary:this.context
            }).then((response)=>{
              diary['keyword'] = response.data['key']
              console.log(diary['keyword'])
            }).catch((error)=>{
                console.log(error)
            })
            this.$axios.post('/api/getTextEmotionScore/', {
              diary:this.context
            }).then((response)=>{
              diary['emotion'] = response.data
              console.log(diary['emotion'])
              this.$store.commit('adddairy', diary)
              this.$store.commit('setIsReload', false)
              this.$router.push({name: 'Diary4'})
            }).catch((error)=>{
                console.log(error)
            })
        },
        gohome () {
            this.$router.push({name: "Diary4"})
        }
    }
}
</script>

<style scoped>
.panel{
    background-color: #F9F9F8 ;
    height:130vh;
}
.head{
    height:5vh;
    background-color: white;
    padding-top: 9.5vh;
}
.back{
    position: absolute;
    top: 3vh;
    left: 7vw;
}
.header{
    position: absolute;
    top: 4vh;
    left: 35vw;
    width: 30vw;
    height: 5vh;
    font-family: PingFangSC-Medium;
    font-size: 2.4vh;
    color: #FB807A;
    text-align: center;
    font-weight: 500;
}
.container{
    margin-top: 7.5vh;
    margin-left: 6vw;
    width: 86vw;
    height: 73vh;
    background-color: #FFDFDE ;
    border-radius: 5.2vw;
}

.line1{
    padding-top:2vh;
    padding-left:5.2vw;
}

.alpha1{
    width: 20.6vw;
    height: 5vh;
    font-family: PangMenZhengDao;
    font-size: 15vw;
    color: #FB807A;
    letter-spacing: 4px;
    font-weight: 400;
}
.alpha2{
    width: 30.4vw;
    height: 1.3vh;
    font-family: PangMenZhengDao;
    font-size: 4vw;
    color: #666666;
    letter-spacing: 1.05px;
    font-weight: 600;
}

.line2{
    margin-top: 4.3vh;
    background-color: #FFDFDE ;
}

input{
    border: 0;
    height: 6vh;
    font-family: PangMenZhengDao;
    font-size: 5vw;
    color: #4F4F4F;
    text-align: center;
    font-weight: 600;
}

textarea{
    border: 0;
    padding-left:1vw;
    font-family: PingFangSC-Medium;
    font-size: 3.1vw;
    font-weight: 400;
    background-color: #FFDFDE ;
    color: #FB807A;
}
.line3{
    margin-top: 3vh;
    padding-left:5.2vw;
}

label{
    margin-top:6.6vh;
    margin-left: 5.2vw;
    font-family: PingFangSC-Semibold;
    font-size: 3vw;
    color: #4F4F4F;
    font-weight: 600;
}

.addimg{
    width: 34vw;
    height: 34vw;
    background: #FFCCCB;
    border-radius: 3.2vw;
    margin-left: 5.2vw;
    margin-top: 1vh;
    position:relative;
}

.button{
    margin-top:10.9vh;
    margin-left:59vw;
}

button{
    width: 34vw;
    height: 12vw;
    border: 0;
    border-radius: 6vw;
    background-color: #FF807C;
    color:white;
    font-family: PingFangSC-Medium;
    font-size: 5vw;
    letter-spacing: 1.6px;
    text-align: center;
    font-weight: 500;
}
</style>