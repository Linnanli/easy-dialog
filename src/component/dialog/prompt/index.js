require('./index.scss');
var Alert = require('../alert');
var tpl = require('./index.html');
var util = require('util');


var Prompt = util.constructor(function () {
    Alert.call(this);
    this.name = 'ui-prompt';
    this.$el = null;
});

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

}

/**
 * @name $bindEvent
 * @private
 * @description 绑定事件
 */
function $bindEvent(){

}

Prompt.prototype.$init = function(options) {
    if (typeof options !== 'object') options = {};

    if (this.$el === null) {
        var div = document.createElement('div');
        div.innerHTML = tpl;
        this.$el = div.children[0];
        this.$el.id = this.name;
        document.body.appendChild(this.$el);
        //查找DOM
        $findEle.call(this);
    }

    this.setTitle(options.title)
        .setMessage(options.message)
        .setPlaceholder(options.placeholder);

    this.inputEle.focus();
}

Prompt.prototype.setMessage = function (message) {
    this.message.innerHTML = message || '';
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