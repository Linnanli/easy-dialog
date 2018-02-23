/*
 * @Author: linnanli 
 * @Date: 2018-02-18 19:53:37 
 * @Last Modified by: linnanli
 * @Last Modified time: 2018-02-24 00:10:41
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

/**
 * @name inherit
 * @description 继承父类的原型对象和属性
 * @param {any} SubClass 子类的构造函数
 * @param {any} SuperClass 父类的构造函数
 */
function inherit(SubClass, SuperClass){
    SubClass.prototype = new SuperClass();
    SubClass.prototype.constructor = SubClass;
    return SubClass;
}

module.exports = {
    onload: onload,
    getSingle: getSingle,
    getFncName: getFncName,
    addClass: addClass,
    inherit: inherit
};