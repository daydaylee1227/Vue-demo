// 入口


import Vue from 'vue/dist/vue.js'
import VueRouter from 'vue-router';

Vue.use(VueRouter); //安装路由
// 导入mui样式表
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'
// 按需导入header
import { Header, Swipe, SwipeItem } from 'mint-ui';
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

// 导入vue-resource
import VueResource from '../node_modules/vue-resource/dist/vue-resource'
Vue.use(VueResource)

import app from './App.vue'

import router from './router.js'

var vm = new Vue({
    el : '#app',
    data : {
        
    },
    render : h => h(app),
    router,
})
