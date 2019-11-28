var path = require('path');

var htmlWebpackPlugin = require('html-webpack-plugin');

// Vue遇到的问题
const VueLoaderPlugin = require('vue-loader/lib/plugin')
module.exports = {
    entry: path.join(__dirname, './src/main.js'),
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js'
    },
    resolve :{
        alias : {
            
            'vue$': 'vue/dist/vue.esm.js',
            '@': path.resolve(__dirname,'src'),
        }
    },
    plugins: [
        new VueLoaderPlugin(),
        new htmlWebpackPlugin({
            template: path.join(__dirname, 'src/index.html'), //模板路径
            filename: 'index.html' //自动生成的HTML文件的名称
        })
    ],
    module: { //配置第三方模块
        rules: [ // 第三方模块的匹配规则
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }, //处理css文件的规则
            // {
            //     test: /\.less$/,
            //     use: ['style-loader', 'css-loader', 'less-loader']
            // },
            //   { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
            {
                test: /\.(png|jpg|gif)$/,
                use: 'url-loader?limit=43&name=[hash:8]-[name].[ext]'
            },
            {
                test: /\.(ttf|eot|svg|woff|woff2)$/,
                use: 'url-loader'
            },
            // {
            //     test: /\.(png|jpg|gif)$/,
            //     use: ['style-loader', 'css-loader',  'url-loader?limit=43&name=[hash:8]-[name].[ext] ']
            // },
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.vue$/,
                use: 'vue-loader'
            },
        ]
    }
}