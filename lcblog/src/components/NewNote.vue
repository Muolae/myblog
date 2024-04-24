<template>
    
    <div class="app-container">
    <div class="toptitle">
        <input placeholder="文章标题" class="input-item"/>
        <button class="savebtn" @click="savenote">保存</button>
    </div>
      <mavon-editor v-model="article.content" class="editor" />
    </div>
</template>
  
  <script>
  export default {
    data() {
      return {
        
      };
    },
    methods: {},
    setup(){
      var article= {
          content: "",
      }
      function savenote(){
        console.log(article.content);
      }
      return{
        savenote,
        article
      }
    }
  };
  </script>
  
<style>
  .editor {
    height: 650px;
  }
  .app-container{
    flex-direction: column;
  }
  .toptitle{
    width: 100%;
    display: flex;
    font-size: large;
    font-weight: bolder;
    height: 60px;
    display: flex;
    align-items: center;
  }
  .input-item {
    display: block;
    width: 80%;
    margin-bottom: 20px;
    border: 0;
    padding: 10px;
    border-bottom: 1px solid rgb(128, 125, 125);
    font-size: 15px;
    outline: none;
}
.input-item:placeholder {
    text-transform: uppercase;
}
.savebtn{
    margin-right: 20px;
    margin-left: auto;
    width: 80px;
    background-color: orange;
    color: white;
    border: 1px solid black;
    height: 30px;
    border-radius: 10px;
}
</style>
  