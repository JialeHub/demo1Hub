//入口文件
import Vue from 'vue';

//按需导入UI组件
import 'mint-ui/lib/style.css';
import './lib/mui/css/mui.css';
import 'mint-ui/';
import { Header } from 'mint-ui';
Vue.component(Header.name, Header);


//导入App组件
import app from './App.vue';

var vm=new Vue({
    el:'#app',
    render:c=>c(app)
});