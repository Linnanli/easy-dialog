require('./index.scss');
var Alert = require('../common/alert.js');
var tpl = require('./index.html');

function Prompt(){
    //继承父类Alert的方法和属性
    this.__proto__.__proto__ = new Alert();
    this.name = 'ui-prompt';
    this.$el = null;
}

/**
 * @name $bindEvent
 * @private 
 * @description 绑定DOM事件，私有方法
 */
function $bindEvent(){
    this.head = this.$el.querySelector('.ui-alert-head');
    this.body = this.$el.querySelector('.ui-alert-body');
}

Prompt.prototype = {
    constructor: Prompt,
    $init:function(options){
        if (typeof options !== 'object') options = {};
        
        if(this.$el === null){
            var div = document.createElement('div');
            div.innerHTML = tpl;
            this.$el = div.children[0];
            this.$el.id = this.name;
            document.body.appendChild(this.$el);
            //绑定事件
            $bindEvent.call(this);
        }

        this.setTitle(options.title)
            .setMessage(options.message);
    }
};

module.exports = Prompt;