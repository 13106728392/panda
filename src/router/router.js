import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import pandaComponent from '../components/panda/panda.vue'

import loginComponent from '../components/login/login.vue'
import registerComponent from '../components/register/register.vue'
import ownerComponent from '../components/panda/owner/owner.vue'
//订单组件
import orderComponent from '../components/order/order.vue'
import allComponent from '../components/order/all/all.vue'
import toEvaluateComponent from '../components/order/toEvaluate/toEvaluate.vue'
import toPayComponent from '../components/order/toPay/toPay.vue'
import toSendComponent from '../components/order/toSend/toSend.vue'
import toReceiveComponent from '../components/order/toReceive/toReceive.vue'
//分类组件
import speciesComponent from '../components/panda/species/species.vue'
import speciesTab from '../components/panda/species/tab/tab.vue'
//购物车组件
import carComponent from '../components/panda/car/car.vue'


import homeComponent from '../components/panda/home/home.vue'
import recommendComponent from '../components/panda/home/recommend/recommend.vue'
import womenComponent from '../components/panda/home/women/women.vue'
import BeautySkinCareComponent from '../components/panda/home/BeautySkinCare/BeautySkinCare.vue'
import menComponent from '../components/panda/home/men/men.vue'

const router = new VueRouter({
    routes: [
        {path:'/login', component: loginComponent, name: 'login' },
        {path:'/register', component: registerComponent, name: 'register' },
        //订单
        {path:'/order', component: orderComponent, name: 'order',children:[
            {path:'all', component: allComponent, name: 'all'},
            {path:'/toEvaluate', component: toEvaluateComponent, name: 'toEvaluate'},
            {path:'/toPay', component: toPayComponent, name: 'toPay'},
            {path:'/toSend', component: toSendComponent, name: 'toSend'},
            {path:'/toReceive', component: toReceiveComponent, name: 'toReceive'}
        ]},
<<<<<<< HEAD
        //主组件路由
         {path:'/', component: pandaComponent, name: 'panda',children:[
=======
        {path:'/', component: pandaComponent, name: 'panda',children:[
>>>>>>> d82210bf589a499cf8877d99e0381fbb72314805
            {path:'owner', component: ownerComponent, name: 'owner'},
            {path:'/', component: homeComponent, name: 'home', children:[
                {path:'/', component: recommendComponent, name: 'recommend'},
                {path:'women', component: womenComponent, name: 'women'},
                {path:'BeautySkinCare', component: BeautySkinCareComponent, name: 'BeautySkinCare'},
                {path:'men', component: menComponent, name: 'men'},
            ]},
            {path:'species',component:speciesComponent,name:'species',children:[
<<<<<<< HEAD
            	{path:'/tab/:tabnum',component:speciesTab,name:'speciesTab'},
            ]},
             {path:'car', component: carComponent, name: 'car'},
            
            
            
        ] }
=======
                {path:'tab1',component:speciesTab1,name:'speciesTab1'},
                {path:'tab2',component:speciesTab2,name:'speciesTab2'},
                {path:'tab3',component:speciesTab3,name:'speciesTab3'},
                {path:'tab4',component:speciesTab4,name:'speciesTab4'},
            ]}
         ]}
      ]
>>>>>>> d82210bf589a499cf8877d99e0381fbb72314805

})

export default router;

