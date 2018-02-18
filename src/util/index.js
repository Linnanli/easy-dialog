/*
 * @Author: linnanli 
 * @Date: 2018-02-18 19:53:37 
 * @Last Modified by: linnanli
 * @Last Modified time: 2018-02-18 21:16:18
 * @Dscription: 工具类 
*/

// 等待加载完成触发回调函数
function onload(callback){
    if (document.readyState === 'complete'){
            callback && callback();
    }else{
        window.addEventListener('load',function(){
            callback && callback();
        });
    }
}

module.exports = {
    onload: onload
};