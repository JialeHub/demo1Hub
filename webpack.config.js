//这个配置文件，其实就是个JS文件，通过Node中的模块操作，向外暴露了一个配置对象
const path = require('path');
const webpack= require('webpack');//启动热更新第二步
const htmlWebpackPlugin = require('html-webpack-plugin');//只要是插件，一定要放到plugins节点中去
const VueLoaderPlugin = require('vue-loader/lib/plugin');//
module.exports = {
    devtool: "sourcemap",
    mode: 'development',//配置development模式
    devServer: {//webpack-dev-server配置 --port 3000 --contentBase src --open --hot
        open: true,//
        host:'192.168.2.166',
        port:3000,
        inline:true,
        hot:true,//启动热更新（第一步）
    },
    plugins: [//配置插件节点，是个数组
        new webpack.HotModuleReplacementPlugin(),//new一个热更新模块对象，启动热更新第三步
        new htmlWebpackPlugin({//创建一个在内存中生成HTML页面插件
            template: path.join(__dirname,'./src/index.html'),//指定模板页面，将来会根据指定的页面路径，去生成内存中的页面
            filename: "index.html"//指定生成的页面名称
        }),
        new VueLoaderPlugin(),
    ],
    module: {//这个节点用于配置所有第三方模块加载器
        rules: [//所有第三方模块的匹配规则
            {test:/\.css$/,use:['style-loader','css-loader']},//配置处理.css文件的第三方loader规则
            {test:/\.less$/,use:['style-loader','css-loader','less-loader']},
            {test:/\.scss$/,use:['style-loader','css-loader','sass-loader']},
            {test:/\.(gif|png|jpg|bmp|jpeg)$/,use:'url-loader?limit=25000&name=[hash:32]-[name].[ext]'},
            //url-loader参数：
            //limit给定的值，是图片大小，单位是byte，如果我们引用的图片>=给定值，则不会转为base64格式字符串，若小于才会转化
            //name=[hash:32]-[name].[ext] (截取32位hash值，最多32)可指定文件名称
            {test:/\.(ttf|eot|svg|woff|woff2)$/,use:'url-loader'},//处理字体文件的loader
            {test: /\.js$/ , use : 'babel-loader' ,exclude: /node_modules/ }, //(必须排除node_modules)
            {test: /\.vue$/, use : 'vue-loader'}
        ]
    },
    resolve:{
      alias:{//修改Vue被导入的包路径
          /*"vue$":"vue/dist/vue.js",*/
      }
    },
    entry:path.join(__dirname, './src/main.js'),//入口，表示要使用webpack打包那个文件
    output: {//输出文件相关配置
        path: path.join(__dirname, './dist'),//指定打包好的文件，输出到那个目录中去
        filename: "bundle.js"//输出文件名称
    }
};
