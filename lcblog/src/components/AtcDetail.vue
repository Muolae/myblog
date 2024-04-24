<template>
  <div class="box1">
    <h2>博客标题</h2>
    <div class="line"></div>
    <div class="ctar">
      博客内容符合飞机好机会
    </div>
    
    <div class="comments">
      <span class="toptip">comments | 1290条评论</span>
      <div class="user">
        <div class="userinfo">
        <img src="../../public/images/avatar.png" class="headimg">
        <span class="userid">userid1234</span>
        </div>
        <span class="acmp">打个脚先</span>
      </div>   

      <div class="user">
        <div class="userinfo">
        <img src="../../public/images/src2.jpg" class="headimg">
        <span class="userid">userid1235</span>
        </div>
        <span class="acmp">原神怎么你了</span>
      </div>

      <div class="sendinfo">
       
       <textarea class="input" cols="30" rows="10" ></textarea>
        <button class="send">发表评论</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {

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
.line{
  width: 90%;
  height: 4px;
  border: 1px solid rgb(166, 166, 166);
  margin-top: 20px;
}
.ctar{
  width: 80%;
  align-items: flex-start;
  margin-top: 20px;
  min-height: 400px;
}
.comments{
  display: flex;
  width: 90%;
  margin-top: 40px;
  flex-direction: column;
}
.toptip{
  width: 200px;
  font-family: "Sofia";
  font-size: large;
}
.userinfo{
  width: 100%;
  display: flex;
  height: 80px;
  justify-content:baseline;
  align-items: center;
  margin-left: 8px;
 
}
.headimg{
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid orange;
  object-fit: cover;
  
}
.userid{
  margin-left: 20px;
  color: orangered;
  font-size: 20px;
}
.user{
  width: 80%;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid gainsboro;
}
.acmp{
  margin-left: 20px;
  width: 80%;
  margin-bottom: 20px;
}
.input{
  width: 60%;
  height: 80px;
  border: 1px solid rgb(244, 157, 36);
  margin-top: 20px;
  border-radius: 8px;
  margin-bottom: 20px;
  text-align: start;
  justify-content:baseline;
  display: inline-block;
  outline: none;
    padding: 0;
    
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background-image: none;
    background-color: transparent;
    font-size: inherit;
    
}
.input:focus{
  border: 1px solid rgb(36, 244, 244);
}
.send{
  height: 80px;
  background-color: skyblue;
  color: white;
  display: inline-block;
  margin-top: 20px;
}
.sendinfo{
  display: flex;
  justify-content: center;
 width: 80%;
 
}
</style>