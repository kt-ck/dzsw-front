<template>
    <div>
        <div class="back">
             <div class="white"></div>
             <v-icon name="arrow-left" @click="goback" style="position:absolute;top:7vh; left:6vw;color:#FD807B; width:5vw;height:5vw;opacity:0;"/>
        </div>
        <img style="width:100vw" src="../../static/visible.png" alt="图片">
    </div>
</template>

<script>
/* eslint-disable */
export default {
    name: 'visible',
    methods:{
        goback(){
            this.$router.push({name: 'Diary4'})
        }
    }
}
</script>

<style scoped>
.white{
    background-color: white;
    position:absolute;
    width:100vw;
    height: 5vh;
    top:0;
    left:0;
}
</style>