# simple-dialog

一个简单的提示框集合类,支持IE9及以上,压缩后代码 7.26kb

## demo 地址

[demo](https://linnanli.github.io/simple-dialog/index.html)

### 如何使用

 * 引入脚本和样式

``` html
    <script src="../dist/js/dialog.js"></script>
    <link rel="stylesheet" href="../dist/style/dialog.css">
```

* 调用

```javascript
    //确认框
    dialog.confirm({/*参数*/});
    //信息框
    dialog.prompt({/*参数*/});
    //提示框
    dialog.toast({/*参数*/});
```

### dialog.confirm

* 参数 :

    *  {object} params

* 用法 :

```javascript

dialog.confirm({
    title:'消息',//必填
    message:'确认删除信息?',//必填
    confirm:function(){//确认按钮触发事件
        //this 指向 dialog对象
        console.log(this);
    },
    cancel:function(){}//取消按钮触发事件
});

```

### dialog.prompt

* 参数 :

    *  {object} params

* 用法 :

```javascript

dialog.prompt({
    title:'输入框',//必填
    message:'请输入你的名字:',//必填
    placeholder:'如:林楠力',//文本框提示文字,IE9以上支持
    confirm:function(val){//确认按钮触发事件
        //返回用户文本框输入的字符串
        console.log(val);
    },
    cancel:function(){}//取消按钮触发事件
});

```

### dialog.toast

* 参数 :

    *  {object} params

* 用法 :

```javascript

dialog.toast({
    message:'删除成功!',//必填
    timeout:100//超时关闭时间,最小间隔1500毫秒
});

```

##### 问题反馈

有BUG可以反馈给我,下面是我的邮箱.

* 邮箱 : 845058952@qq.com
    




      


