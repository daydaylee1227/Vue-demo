# 这是一个基于vue的购物商城系统app

## 制作首页App组件

1. 完成 Header 区域 使用的是Mint-UI的Header组件
2. 底部 Tabbar 区域  使用的是 MUI 的 Tabbar.html
    + 在制作购物车的小图标的时候 操作多一些
    + 先把扩展图标的 css 样式 和扩展字体库 ttf 文件 拷贝到 项目中
    + 为小购物车添加样式 "mui-icon mui-icon-extra mui-icon-extra-cart"
3. 中间的区域 可以用 router-view 来展示路由匹配到的组件
    + linkActiveClass :'mui-active',覆盖默认的路由高亮的类默认的是 router-link-active

## 改造 tabbar 为router-link

## 点击对应的 tabbar 展示对应的路由组件

## 完成首页的轮播图

### 加载轮播图中的数据

1. 获取数据 使用 vue-resourse
2. 下载对应的包  npm i vue-resourse -S
3. import VueResource from 'vue-resourc'
4. Vue.use(VueResource)
5. 遇到的问题就是 图片写入地址的时候 存在路径的问题,静态写法最后导包的时候会出问题,
最好的写法就是通过属性去绑定!

### 完成首页的九宫格

1. 找到mui中的grid 也就是栅格系统

## Tabbar组件切换的动画

1. 调整bug 设置 overflow-x position定位 解决问题

## 改造新闻资讯的路由链接

1. 增加一个新的路由连接
2. 展示新闻的列表   使用mui中的media-list
3. 渲染这个数据   假数据

### 点击每个新闻进去一个新的新闻详情

1. 就是设置路由 传入一个新的参数
2. 创建新的详情 NewsInfo.vue

### 获取并渲染数据
