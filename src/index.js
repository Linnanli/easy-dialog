/*
 * @Author: linnanli 
 * @Date: 2018-02-19 00:28:39 
 * @Last Modified by:   linnanli 
 * @Last Modified time: 2018-02-19 00:28:39 
 * @Dscription: dialog 入口文件 
*/
require('./styles/index.scss');
var confirm = require('component/confirm');

var dialog = {
    confirm: confirm
};

document.getElementById('confirm-but').addEventListener('click',function(){
    dialog.confirm({
        title: '消息',
        message: '确定删除网关562555:云南省昆明市盘龙区(龙欣路)吗?',
        confirm: function () {
            dialog.confirm({
                title:'警告',
                message:'删除网关可能会失去历史记录'
            });
        },
        cancel:function(){
            console.log(this);
        }
    });
});

module.exports = dialog;