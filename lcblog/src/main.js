import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'
//import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
// use mavonEditor

const app=createApp(App)
app.use(router)
//app.use(ElementPlusIconsVue)
app.use(mavonEditor)
app.use(ElementPlus, { size: 'small', zIndex: 3000 })
app.mount('#app')

