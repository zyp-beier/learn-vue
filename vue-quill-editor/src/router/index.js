import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('../views/About.vue'),
    },
    {
        path: '/element-form',
        name: 'elementForm',
        component: () => import('../views/ElementForm')
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;

let promise = new Promise((res,rej) => {
    let num = Math.floor(Math.random()*10);
    if(num<5) {
        res(num)
    }else{
        rej(num)
    }
});
promise.then(res => {
    console.log(res);
}).catch(err => {
    console.log(err);
})
