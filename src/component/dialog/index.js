require('./alert/index.scss');
var util = require('util');
var Confirm = require('./confirm');
var Prompt = require('./prompt');
var Toast = require('./toast');

var onload = util.onload;

//兼容IE中按回车键,会触发页面第一个按钮的BUG
onload(function(){
    if( navigator.appVersion.toUpperCase().indexOf('MSIE') === -1) return;
    var box = document.createElement('div'),
        but = document.createElement('button');
    but.innerText = 'compatible';
    box.style.overflow = 'hidden';
    box.style.height = '0px';
    box.appendChild(but);
    document.body.insertBefore(box,document.body.childNodes[0]);
});

var dialog = {
    confirm: function (options){
        onload(function (){
            //使用代理获取Confirm的单例对象
            var confirm = Confirm.getSingle();
            confirm.$init(options);
        });
    },
    prompt: function (options){
        onload(function(){
            var prompt = Prompt.getSingle();
            prompt.$init(options);
        });
    },
    toast:function(options){
        onload(function(){
            var toast = Toast.getSingle();
            toast.$init(options);
        });
    }
};

module.exports = dialog;