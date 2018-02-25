require('./index.scss');
var Alert = require('../alert');
var tpl = require('./index.html');
var util = require('util');

var type = util.type;

//定义一个构造函数 Prompt
var Prompt = util.constructor(function () {
    Alert.call(this);
    this.name = 'ui-prompt';
    this.$el = null;
});
// Prompt继承自Alert
Prompt.extend(Alert);

/**
 * @name $bindEvent
 * @private 
 * @description 绑定DOM事件，私有方法
 */
function $findEle(){
    this.head = this.$el.querySelector('.ui-alert-head');
    this.body = this.$el.querySelector('.ui-alert-body');
    this.message = this.$el.querySelector('.ui-prompt-text');
    this.inputEle = this.$el.querySelector('.ui-prompt-input');
    this.confirmBut = this.$el.querySelector('.ui-alert-confirm');
    this.cancelBut = this.$el.querySelector('.ui-alert-cancel');
}

/**
 * @name $bindEvent
 * @private
 * @description 绑定事件
 */
function $bindEvent(options){
    var _this = this;
    
    this.confirmBut.onclick = function(){
        // debugger
        if (type.isFunction(options.confirm)){
            if (options.confirm.call(_this, _this.inputEle.value) === false) return;
        }
        _this.hidden();
    }

    this.cancelBut.onclick = function(){
        if(type.isFunction(options.cancel)){
            if (options.cancel.call(_this, _this.inputEle.value) === false) return;
        }
        _this.hidden();
    }
}

Prompt.prototype.$init = function(options) {
    if (!type.isObject(options)) options = {};

    if (this.$el === null) {
        var div = document.createElement('div');
        div.innerHTML = tpl;
        this.$el = div.children[0];
        this.$el.id = this.name;
        this.hidden();
        //查找DOM
        $findEle.call(this);
        document.body.appendChild(this.$el);
    }
    if (!type.isString(options.message) || options.message === '') return;

    this.setTitle(options.title)
        .setMessage(options.message)
        .setPlaceholder(options.placeholder);
    //清空输入框的值
    this.inputEle.value = '';
    //绑定事件
    $bindEvent.call(this, options);
    this.show();
    this.inputEle.focus();
}

Prompt.prototype.setMessage = function (message) {
    this.message.innerHTML = message;
    return this;
}

Prompt.prototype.setPlaceholder = function(text) {
    if (typeof text === 'string')
        this.inputEle.setAttribute('placeholder', text);

    return this;
}

/**
 * @name Prompt.getSingle
 * @description 获取构造函数的单例对象
 */
var instances = null;
Prompt.getSingle = function(){
    if (instances === null){
        return instances = new Prompt();
    }else{
        return instances;
    }
}

module.exports = Prompt;