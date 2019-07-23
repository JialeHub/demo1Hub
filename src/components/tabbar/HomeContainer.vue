<template>
    <div>
        <!--轮播图区域-->
        <mt-swipe :auto="3000"><!--轮播图获取数据：vue-resource-->
            <mt-swipe-item v-for="item in lunbotuList" :key="item.index">
                <img :src="item.url" alt="">
            </mt-swipe-item>
        </mt-swipe>
        <!--九宫格区域-->
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../../images/logo.png" alt="">
                <div class="mui-media-body">新闻资讯</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../../images/logo.png" alt=""><!--<span class="mui-badge">5</span>-->
                <div class="mui-media-body">图片分享</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../../images/logo.png" alt="">
                <div class="mui-media-body">商品购买</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../../images/logo.png" alt="">
                <div class="mui-media-body">留言反馈</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../../images/logo.png" alt="">
                <div class="mui-media-body">视频专区</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../../images/logo.png" alt="">
                <div class="mui-media-body">联系我们</div></a></li>
        </ul>
    </div>
</template>

<script>
    import { Toast } from 'mint-ui';
    export default {
        data(){
            return {
                lunbotuList:[],
            }
        },
        created(){
          this.getLunbotu();
        },
        methods:{
            getLunbotu(){//获取轮播图的方法
                this.$http.get('https://myinterface.xuanzai.top/getPicture?type=%E5%A4%B4%E5%83%8F').then(result=>{
                    if(result.status===200){
                        console.log(result);
                        this.lunbotuList=[//假数据
                            {index:0,url:result.url},
                            {index:1,url:result.url},
                            {index:2,url:result.url},
                            ];
                    }else{
                        Toast({
                            message: '加载轮播图失败',
                            position: 'center',
                            duration: 1000,
                        });
                    }
                })
            }
        },
    }
</script>

<style scoped lang="scss">
    .mint-swipe{
        height: 200px;
        /*.mint-swipe-item:nth-child(1){
            background-color: #007aff;
        }
        .mint-swipe-item:nth-child(2){
            background-color: green;
        }
        .mint-swipe-item:nth-child(3){
            background-color: yellow;
        }*/
        /*SCSS写法：*/
        .mint-swipe-item{
            &:nth-child(1){
                background-color: #007aff;
            };
            &:nth-child(2){
                background-color: green;
            };
            &:nth-child(3){
                background-color: yellow;
            };
            img{
                width: 100%;
                height: 100%;
            }
        }
    }
    .mui-grid-view.mui-grid-9{
        background-color: #ffffff;
        border: none;
        img{
            width: 60px;
            height: 60px;
        }
    }
    .mui-grid-view.mui-grid-9 .mui-table-view-cell{
        border: none;
    }
    .mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-body{
        font-size: 13px;
    }
</style>