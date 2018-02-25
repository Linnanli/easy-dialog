require('./styles/index.scss');
var dialog = require('component/dialog');

var root = document.getElementById('app-root');
var confirmBut = document.createElement('button');
var promptBut = document.createElement('button');
var toastBut = document.createElement('button');

confirmBut.innerHTML = '弹出confirm';
promptBut.innerHTML = '弹出prompt';
toastBut.innerHTML = '弹出toast';

root.appendChild(confirmBut);
root.appendChild(promptBut);
root.appendChild(toastBut);

confirmBut.addEventListener('click',function(){
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

promptBut.addEventListener('click',function(){
    // debugger    
    dialog.prompt({
        title:'prompt',
        message:'请输入你的名字',
        placeholder:'如:林楠力',
        confirm:function (value) {
            console.log(value);
            if (value !== ''){
                dialog.toast({
                    message: value,
                    timeout: 3000
                });
            }
        }
    });
});

toastBut.addEventListener('click',function(){
    dialog.toast({
        message:"删除成功！"
    });
});