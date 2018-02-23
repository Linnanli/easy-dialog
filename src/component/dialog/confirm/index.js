/*
 * @Author: linnanli 
 * @Date: 2018-02-19 00:29:19 
 * @Last Modified by: linnanli
 * @Last Modified time: 2018-02-23 18:48:44
 * @Dscription: Confirm js文件 
*/
require('./index.scss');
var tpl = require('./index.html');
var util = require('util');
var Alert = require('../common/alert.js');

// 常量定义
var CONFIRM_TEXT = '确定';
var CANCLE_TEXT = '取消';

/**
 * @class Confirm
 * @param {string} template 
 * @description 构造函数
 */
function Confirm(){
    //继承父类Alert方法
    this.__proto__.__proto__ = new Alert();
    this.name = 'ui-confirm';
    this.$showNum = 0;
    this.$el = null;
}

/**
 * @private
 * @param {object} params 
 * @description 定义的私有变量,用来查找各个DOM节点并设置DOM的初始化属性
 */
function $findEle(params) {
    //查找各个DOM元素
    this.head = this.$el.querySelector('.ui-alert-head');
    this.body = this.$el.querySelector('.ui-alert-body');
    this.cancelBut = this.$el.querySelector('.ui-alert-cancel');
    this.confirmBut = this.$el.querySelector('.ui-alert-confirm');
    //设置各个DOM初始化属性
    this.cancelBut.innerText = CANCLE_TEXT;
    this.confirmBut.innerText = CONFIRM_TEXT;
}

/**
 * @private
 * @param {object} params
 * @description 为DOM绑定新的事件,清除上一次留存的事件
 */
function $bindEven(params){
    var _this = this;
    //绑定各个DOM元素的事件
    this.confirmBut.onclick = function () {
        if (typeof params.confirm === 'function')
            params.confirm.call(_this);

        _this.hidden();
    }
    this.cancelBut.onclick = function () {
        if (typeof params.cancel === 'function')
            params.cancel.call(_this);

        _this.hidden();
    }
}

/**
 * @class Confirm
 * @public
 * @description class Confirm的原型对象
 */
Confirm.prototype = {
    constructor: Confirm,
    $init:function (params) {
        if (typeof params !== 'object') params = {};

        if(this.$el === null){
            var div = document.createElement('div');
            div.innerHTML = tpl;
            this.$el = div.children[0];
            this.$el.id = this.name;
            document.body.appendChild(this.$el);
            //绑定DOM事件
            $findEle.call(this,params);
        }
        //设置title和message
        this.setTitle(params.title)
            .setMessage(params.message);
        //绑定事件
        $bindEven.call(this,params);

        this.show();
    }
};

module.exports = Confirm;
