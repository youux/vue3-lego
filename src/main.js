import { createApp } from 'vue'
// 引入模板
import App from './App.vue'
// 引入路由
import router from './router'
// 引入vuex
import store from './store'
// 引入组件库
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
// 重置全局样式
import './assets/css/reset.css'

createApp(App)
  .use(store)
  .use(router)
  .use(ElementPlus)
  .mount('#app')
