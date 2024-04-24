<template>
  <div class="box1">
    
    <!-- 这是{{$route.query.type}}区域{{name}}
    
    <el-button type="info">Info</el-button> -->
    <div class="infobox2" @click="todetail()">
        <!-- <img src="../../public/images/src1.jpg" class="pic1"> -->
        <span class="title">title</span>
        <div class="ainfo">
            <span>state</span>
            <img src="../../public/images/date.png" class="tagpic">
            <span>2024-3-25</span>
            <img src="../../public/images/tag.png" class="tagpic">
            <span>tag</span>
        </div>
        
    </div>

    <div class="infobox2" >
        <!-- <img src="../../public/images/src2.jpg" class="pic1"> -->
        <span class="title">title</span>
        <div class="ainfo">
            <span>state</span>
            <img src="../../public/images/date.png" class="tagpic">
            <span>2024-3-25</span>
            <img src="../../public/images/tag.png" class="tagpic">
            <span>tag</span>
        </div>
        
    </div>
   
</div>

</template>

<script>
import {ref} from 'vue'
import {useRouter} from 'vue-router'
export default {    
    name:"ContentArea",
    data(){
        return{
            content:"文章",
            name:''
        }
    },
    mounted(){
        
    },
    setup(){
        const route=useRouter()
        function todetail(){
            route.push({
                path:'/detail',
                query:{
                    id:"001"
                }
            })
        }
        return {
            todetail
        }

    },
    mounted(){
        //console.log(this.$route,this.content)
        this.name=this.$route.query.type
    },
    updated(){
        this.name=this.$route.query.type
    }
}
</script>

<style>
.box1{
    /*border: 2px solid rgba(0, 0, 0, 0.598);*/
    margin: 5px 5px 5px 5px;
   border-radius: 5px;
    width: 100%;
    height: 5%;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.tagpic{
    width: 12px;
    height: 12px;
    margin-left: 20px;
}
.pic1{
    height: 70px;
    width: 140px;
    position: absolute;
    right: 2%;
    object-fit: cover;
}
.infobox2{
    width: 96%;
    height: 360px;
    /*border: 1px solid gainsboro;   */
    box-shadow: 0 0 1px 1px #9999997c;
    display: flex;
    flex-direction: column; 
    padding-left: 10px;   
    margin-top: 8px;
    border-radius: 6px;
    box-sizing: border-box;

    
}
.infobox:hover{
    background-color: aliceblue;
}
.title{
    font-size: 26px;
    margin-top: 6px;
}
.ainfo{
    margin-top: 4px;
    margin-bottom: 10px;

}
span{
    margin-left: 5px;
}
</style>