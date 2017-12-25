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

