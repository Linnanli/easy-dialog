/*
 * @Author: linnanli 
 * @Date: 2018-02-18 19:53:37 
 * @Last Modified by: linnanli
 * @Last Modified time: 2018-02-23 17:11:50
 * @Dscription: 工具类 
*/

/**
 * @name getFncName
 * @description 获取函数的字符串名称
 * @param {Function} func 
 */
function getFncName(func){
    return func.toString().match(/function\s*([^(]*)\(/)[1];
}

/**
 * @name onload
 * @description 等待加载完成触发回调函数
 * @param {Function} callback
 */
function onload(callback){
    if (document.readyState === 'complete'){
            callback && callback();
    }else{
        window.addEventListener('load',function(){
            callback && callback();
        });
    }
}

/**
 * @name getSingle
 * @description  创建单例对象的代理方法 ,使创建对象和单例管理职责被区分到两个不同的方法中
 */
var getSingle = (function(){
    var instances = {};

    return function (constructor){
        var name = getFncName(constructor);

        if (instances[name] !== undefined){
            return instances[name];
        }else{
            return instances[name] = new constructor();
        }
            
    };
})();

/**
 * @name addClass
 * @description 给指定DOM添加class名称
 * @param {DOM} ele 需要添加class的DOM元素
 * @param {String} className class的字符串名称
 */
function addClass(ele,className) {
    var clas = ele.className.replace(/\s+/g,' '),
        clasArr = clas.split(' ');

    if (clasArr.indexOf(className) === -1){
        clasArr.push(className);
        clas = clasArr.join(' ');
    }

    ele.className = clas;
}

/**
 * @name hasClass
 * @description 判断是否有相应class
 * @param {DOM} ele 需要添加class的DOM元素
 * @param {String} className class的字符串名称
 */
function hasClass(ele,className) {
    var clas = ele.className.replace(/\s+/g,' ');
        clasArr = clas.split(' ');
    
    return clasArr.indexOf(className) === -1?false:true;
}

module.exports = {
    onload: onload,
    getSingle: getSingle,
    getFncName: getFncName,
    addClass: addClass
};