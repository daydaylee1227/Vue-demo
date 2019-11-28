import VueRouter from 'vue-router';
import HomeContainer from './components/tabbar/HomeContainer.vue';
import MemberContainer from './components/tabbar/MemberContainer.vue';
import SearchContainer from './components/tabbar/SearchContainer.vue';
import ShopcarContainer from './components/tabbar/ShopcarContainer.vue';
import Newslist from './components/news/Newslist.vue'
import NewsInfo from './components/news/NewsInfo.vue'

var router = new VueRouter({
    routes : [
        { path : '/', rediret : '/home'},
        { path : '/home', component : HomeContainer},
        { path : '/member', component : MemberContainer},
        { path : '/search', component : SearchContainer},
        { path : '/shopcar', component : ShopcarContainer},
        { path : '/home/newlist', component : Newslist},
        { path : '/home/newsinfo/:id', component : NewsInfo},
        
    ],
    linkActiveClass : 'mui-active',   // 覆盖默认的路由高亮的类  默认的是 router-link-active
})

export default router