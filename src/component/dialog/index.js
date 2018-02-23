require('./alert/index.scss');
var util = require('util');
var Confirm = require('./confirm');
var Prompt = require('./prompt');

var dialog = {
    confirm: function (options){
        util.onload(function (){
            //使用代理获取Confirm的单例对象
            var confirm = Confirm.getSingle();
            confirm.$init(options);
        });
    },
    prompt: function (options){
        util.onload(function(){
            var prompt = Prompt.getSingle();
            prompt.$init(options);
        });
    }
};

module.exports = dialog;