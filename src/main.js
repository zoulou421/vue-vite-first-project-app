import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import {createRouter} from 'vue-router'

const router=createRouter({
    history:createWebHistory(),
    routes:[
        {path:'/',name='Home',component:Home}
    ]
})

createApp(App)
    .use(router)
    .mount('#app')


