import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'

import '@/styles/style.css'

createApp(App).use(router).mount('#app')