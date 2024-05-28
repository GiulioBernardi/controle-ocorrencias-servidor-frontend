import {createRouter, createWebHashHistory} from 'vue-router'
import BanimentoView from "@/views/BanimentoView.vue";
import CadastroBanimentoView from "@/views/cadastros/CadastroBanimentoView.vue";
import HomeView from "@/views/HomeView.vue";


const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/banimentos',
        name: 'banimentoView',
        component: BanimentoView
    },
    {
        path: '/adicionar-banimento',
        name: 'cadastro banimento',
        component: CadastroBanimentoView
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
