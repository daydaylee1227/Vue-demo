// 入口


import Vue from 'vue'

// 导入mui样式表
import './lib/mui/css/mui.min.css'

// 按需导入header
import { Header } from 'mint-ui';
Vue.component(Header.name, Header);

import app from './App.vue'



var vm = new Vue({
    el : '#app',
    data : {
        
    },
    render : h => h(app),
    
})
