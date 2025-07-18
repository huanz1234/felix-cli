import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './service/module/home' // 测试
import './service/module/singleUser' // 测试

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
