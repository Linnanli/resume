## 如何在 webpack 中引入未模块化的库，如 Zepto


[使用 webpack 引用 zepto]https://segmentfault.com/a/1190000012438982


# webpack 怎么引入没有模块规范的库,如zepto

引入exports-loader和script-loader

```javascript

{
    test: require.resolve('zepto'),
    use: ['exports-loader?window.Zepto','script-loader']
}


```

并且注册全局变量,使其能够在window对象下访问到

``` javascript

plugins:[
    new webpack.ProvidePlugin({
      $: 'zepto',
      Zepto: 'zepto'
    })
]

```

## zpeto $.ajax 方法中没有 onprogress 回调函数怎么办

```javascript

var xhr = $.ajax({
    /*省略参数*/
});
//在$.ajax中返回的XMLHttpRequest对象 onprogress 属性下添加 方法
xhr.onprogress = function(e){
    if(e.lengthComputable){
        console.log(e.loaded/e.total*100+'%');
    }else{
        console.log('loading');
    }
}

``` 

## npm5 package-lock.json

```
npm install xxx

```

* 安装模块后会自动生成 package-lock.json

  * package-lock.json 记录了整个node_module文件夹的树状结构,和模块地址,重新安装的时候只需要直接下载文件即可,所以npm5 安装重新安装模块会很快.

* 发布的模块不会包含 package-lock.json 文件

* 如果手动修改package.json文件中已有的模块的版本,直接执行 npm install 不会安装指定新的版本,只能通过 npm install xxx@yy更新

## 项目图片采用外链形式

* 可以将图片存放到百度网盘中,然后将图片地址复制到配置中

  * https://pan.baidu.com/s/1pLP0iVL#list/path=%2F6.images%2Fresume&parentPath=%2F6.images 

## pullpage插件 实现

* http://www.gbtags.com/gb/gbliblist/84.htm

## vs code git 使用 测试