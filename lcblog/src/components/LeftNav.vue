<template>
    <div class="nav">
        <img src="../../public/images/avatar.png" class="headpic">
        <h2 class="th3">liuchao</h2>
        <!-- 导航按钮 -->
        <div :class="state==0? 'onclose':'navbtn'" @click="changestate(0)">
            <img src="../../public/images/atcon.png" class="iconpic" v-if="state==0">
            <img src="../../public/images/atc.png" class="iconpic" v-else>
            <span class="items">博客首页</span>
            <!-- <span class="num">31</span> -->
        </div>

        <div :class="state==1? 'onclose':'navbtn'" @click="changestate(1)">
            <img src="../../public/images/menuon.png" class="iconpic" v-if="state==1">
            <img src="../../public/images/menu.png" class="iconpic" v-else>
            <span class="items">我的博客</span>
            <!-- <span class="num">4</span> -->
        </div>

        <div :class="state==2? 'onclose':'navbtn'" @click="changestate(2)">
            <img src="../../public/images/useron.png" class="iconpic" v-if="state==2">
            <img src="../../public/images/user.png" class="iconpic" v-else>
            <span class="items">个人中心</span>
            <!-- <span class="num">21</span> -->
        </div>
       <!-- 新建页面 -->
       <div class="newnote" @click="newnote">新建博客</div>
        <div class="link">
            <img src="../../public/images/Github.png" class="linkpic" @click="toaddr('https://github.com/Muolae')">
            <img src="../../public/images/csdn.png" class="linkpic" style=" width: 25px;height: 25px;">
        </div>
    </div>
  
</template>

<script>
import {ref} from 'vue'
import {useRouter} from 'vue-router'
export default {
    setup(){
        let state=ref(0)
        const router=useRouter()
        function changestate(value){
            state.value=value
            if(value==0){
                 router.replace({
                path:'/content',
                query:{
                    type:'cont'
                }
                })
            }
            if(value==1){
                 router.replace({
                path:'/project',
                query:{
                    type:'pro'
                }
                })
            }
            if(value==2){
                 router.replace({
                path:'/maker',
                query:{
                    type:'cont'
                }
                })
            }
           
            // console.log(state.value)
        }
        function toaddr(url){
            window.location.href =url
        }
        function newnote(){
            router.push({
                path:'/newnote',

            })
        }
        return {
            state,
            changestate,
            toaddr,
            newnote
        }

    }
}
</script>

<style>
.nav{
    background-color: rgb(247, 246, 246);
    display: flex;
    flex-direction: column;
    align-items: center;
}
.headpic{
    margin-top: 20px;
    height: 60px;
    width: 60px;
}
.items{
    width: 70px;
}
.navbtn{
    width: 80%;
    height: 40px;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
}
.navbtn:hover{
    background-color: white;
}
.newnote{
    width: 150px;
    background-color: rgb(199, 129, 24);
    height: 30px;
    border-radius: 30px;
    
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 200px;
    color: white;
}
.onclose{
    width: 80%;
    height: 40px;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    margin-top: 10px;
    color: rgb(142, 142, 26);
}
.iconpic{
    width: 20px;
    height: 20px;
    margin-right: 20px;
}
.num{
   margin-left: 20px;
    margin-top: 2px;
    width: 30px;
}
.th3{
    font-family: "Sofia";
}
.link{
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 20px;
}
.linkpic{
    width: 30px;
    height: 30px;
    margin-left: 20px;
    opacity: 0.7;
}
.linkpic:hover{
    opacity: 1.0;
}
span{
    width: 40px;
    word-wrap: normal;
}
</style>