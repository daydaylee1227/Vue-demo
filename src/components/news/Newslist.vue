<template>
    <div>
        <ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for="item in newslist" :key="item.id">
					<a href="javascript:;">
						<img class="mui-media-object mui-pull-left" :src="item.url">
						<div class="mui-media-body">
							<h1>{{ item.title}}</h1>
							<p class='mui-ellipsis'>
                                <span>发表时间:{{ item.add_time}}</span>
                                <span>点击次数：{{item.click}}次</span>
                            </p>
						</div>
					</a>
				</li>
				
			</ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            newslist : [],
        }
    },
    created(){
        this.getNewslist();
    },
    methods : {
        getNewslist(){
            // this.$http.get('').then(result => {
            //     if(result.body.status === 0){
            //         this.newslist = result.body;
            //     }else{

            //     }
            // })
            this.newslist = [
                { id : 1, title : '三次阅兵', url : '../../images/Home/news/new1.jpg', add_time : '2019-12-13 16:23:33', 'click' : 3} ,
                { id : 1, title : '回家看看', url : '../../images/Home/news/new2.jpg', add_time : '2019-11-13 16:23:33', 'click' : 4} ,
                { id : 1, title : '今天加班', url : '../../images/Home/news/new3.jpg', add_time : '2019-10-13 16:23:33', 'click' : 5} ,
                { id : 1, title : '每天加班', url : '../../images/Home/news/new4.jpg', add_time : '2019-12-03 16:23:33', 'click' : 8} ,
                { id : 1, title : '后天加班', url : '../../images/Home/news/new5.jpg', add_time : '2019-09-13 16:23:33', 'click' : 9} ,
                { id : 1, title : '我爱祖国', url : '../../images/Home/news/new5.jpg', add_time : '2019-12-13 16:23:33', 'click' : 22} ,
                { id : 1, title : '我爱代码', url : '../../images/Home/news/new4.jpg', add_time : '2019-12-13 16:23:33', 'click' : 33} ,
                { id : 1, title : '我爱公司', url : '../../images/Home/news/new3.jpg', add_time : '2019-12-13 16:23:33', 'click' : 355575} ,
                { id : 1, title : '我爱公司', url : '../../images/Home/news/new2.jpg', add_time : '2019-12-13 16:23:33', 'click' : 355575} ,
                { id : 1, title : '我爱公司', url : '../../images/Home/news/new1.jpg', add_time : '2019-12-13 16:23:33', 'click' : 355575} ,
                { id : 1, title : '三次阅兵', url : '../../images/Home/news/new1.jpg', add_time : '2019-12-13 16:23:33', 'click' : 3} ,
                { id : 1, title : '回家看看', url : '../../images/Home/news/new2.jpg', add_time : '2019-11-13 16:23:33', 'click' : 4} ,
                { id : 1, title : '今天加班', url : '../../images/Home/news/new3.jpg', add_time : '2019-10-13 16:23:33', 'click' : 5} ,
                { id : 1, title : '每天加班', url : '../../images/Home/news/new4.jpg', add_time : '2019-12-03 16:23:33', 'click' : 8} ,
                { id : 1, title : '后天加班', url : '../../images/Home/news/new5.jpg', add_time : '2019-09-13 16:23:33', 'click' : 9} ,
                { id : 1, title : '我爱祖国', url : '../../images/Home/news/new5.jpg', add_time : '2019-12-13 16:23:33', 'click' : 22} ,
                { id : 1, title : '我爱代码', url : '../../images/Home/news/new4.jpg', add_time : '2019-12-13 16:23:33', 'click' : 33} ,
                { id : 1, title : '我爱公司', url : '../../images/Home/news/new3.jpg', add_time : '2019-12-13 16:23:33', 'click' : 355575} ,
                { id : 1, title : '我爱公司', url : '../../images/Home/news/new2.jpg', add_time : '2019-12-13 16:23:33', 'click' : 355575} ,
                { id : 1, title : '我爱公司', url : '../../images/Home/news/new1.jpg', add_time : '2019-12-13 16:23:33', 'click' : 355575} ,
                { id : 1, title : '三次阅兵', url : '../../images/Home/news/new1.jpg', add_time : '2019-12-13 16:23:33', 'click' : 3} ,
                { id : 1, title : '回家看看', url : '../../images/Home/news/new2.jpg', add_time : '2019-11-13 16:23:33', 'click' : 4} ,
                { id : 1, title : '今天加班', url : '../../images/Home/news/new3.jpg', add_time : '2019-10-13 16:23:33', 'click' : 5} ,
                { id : 1, title : '每天加班', url : '../../images/Home/news/new4.jpg', add_time : '2019-12-03 16:23:33', 'click' : 8} ,
                { id : 1, title : '后天加班', url : '../../images/Home/news/new5.jpg', add_time : '2019-09-13 16:23:33', 'click' : 9} ,
                { id : 1, title : '我爱祖国', url : '../../images/Home/news/new5.jpg', add_time : '2019-12-13 16:23:33', 'click' : 22} ,
                { id : 1, title : '我爱代码', url : '../../images/Home/news/new4.jpg', add_time : '2019-12-13 16:23:33', 'click' : 33} ,
                { id : 1, title : '我爱公司', url : '../../images/Home/news/new3.jpg', add_time : '2019-12-13 16:23:33', 'click' : 355575} ,
                { id : 1, title : '我爱公司', url : '../../images/Home/news/new2.jpg', add_time : '2019-12-13 16:23:33', 'click' : 355575} ,
                { id : 1, title : '我爱公司', url : '../../images/Home/news/new1.jpg', add_time : '2019-12-13 16:23:33', 'click' : 355575} ,
            ]
        }
    }
}
</script>

<style  scoped >
.mui-table-view li h1{
    font-size : 14px;
}    
.mui-ellipsis{
    font-size : 12px;
    columns: #226aff;;
    display: flex;
    justify-content: space-between;
}
</style>