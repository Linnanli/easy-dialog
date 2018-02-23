require('./common/index.scss');
var util = require('util');
var Confirm = require('./confirm');
var Prompt = require('./prompt');

var dialog = {
    confirm: function (options){
        util.onload(function (){
            //使用代理获取Confirm的单例对象
            var confirm = util.getSingle(Confirm);
            confirm.$init(options);
        });
    },
    prompt: function (options){
        util.onload(function(){
            var prompt = util.getSingle(Prompt);
            prompt.$init(options);
        });
    }
};

module.exports = dialog;