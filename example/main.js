require('./styles/index.scss');
var dialog = require('component/dialog');

document.getElementById('confirm-but').addEventListener('click',function(){
    dialog.confirm({
        title: '消息',
        mask: 'white',
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

document.getElementById('prompt-but').addEventListener('click',function(){
    // debugger    
    dialog.prompt({
        title:'prompt',
        message:'请输入你的名字',
        placeholder:'如:林楠力'
    });
});