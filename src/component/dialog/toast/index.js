/*
 * @Author: linnanli 
 * @Description: Toast js文件 
 * @Date: 2018-02-25 16:55:26 
 * @Last Modified by: linnanli
 * @Last Modified time: 2018-02-25 18:37:53
 */

require('./index.scss');
var tpl = require('./index.html');
var util = require('util');
var type = util.type;

// 常量
var DEFAULT_TIMES = 1500;

function Toast() {
    this.name = 'ui-toast';
    this.$el = null;
}

/**
 * @name $findEle
 * @private
 * @description 查找DOM节点方法
 */
function $findEle(){
    this.messageEle = this.$el.querySelector('.ui-toast');
}

/**
 * @name $timeoutHide
 * @private
 * @description toast 定时关闭
 */
function $timeoutHide(timeout){
    var _this = this;

    var timer = setTimeout(function(){
        _this.hidden();
        clearTimeout(timer);
    }, timeout || DEFAULT_TIMES);
}

Toast.prototype = {
    constructor: Toast,
    $init: function (options) {
        if (!type.isObject(options)) return;

        if(this.$el === null){
            var div = document.createElement('div');
            div.innerHTML = tpl;
            this.$el = div.childNodes[0];
            this.$el.id = this.name;
            this.hidden();
            $findEle.call(this);
            document.body.appendChild(this.$el);
        }
        if (!type.isString(options.message) || options.message === '') return;
        
        this.setMessage(options.message);
        //超时关闭toast
        $timeoutHide.call(this,options.timeout);
        this.show();
    },
    setMessage:function(text){
        this.messageEle.innerText = text || '';
        return this;
    },
    show:function(){
        this.$el.style.display = 'block';
        return this;
    },
    hidden:function(){
        this.$el.style.display = 'none';
        return this;
    }
};

/**
 * @name Toast.getSingle
 * @description 获取构造函数的单例对象
 */
var instancs = null;
Toast.getSingle = function(){
    return instancs === null ? instancs = new Toast() : instancs;
}

module.exports = Toast;