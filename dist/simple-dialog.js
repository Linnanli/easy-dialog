(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["simple-dialog"] = factory();
	else
		root["simple-dialog"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var confirm = __webpack_require__(1);

var dialog = {
    confirm: confirm
};

module.exports = dialog;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

/*
 * @Author: linnanli 
 * @Date: 2018-02-19 00:29:19 
 * @Last Modified by: linnanli
 * @Last Modified time: 2018-02-19 00:29:44
 * @Dscription: Confirm js文件 
*/
__webpack_require__(2);
var tpl = __webpack_require__(3);
var util = __webpack_require__(4);

// 常量定义
var CONFIRM_TEXT = '确定';
var CANCLE_TEXT = '取消';

/**
 * @class Confirm
 * @param {string} template 
 * @description 构造函数
 */
function Confirm(template){
    this.name = 'ui-confirm';
    this.$showNum = 0;
    this.$el = null;
}

/**
 * @private
 * @param {object} params 
 * @description 定义的私有变量,用来查找各个DOM节点并设置DOM的初始化属性
 */
function $findEle(params) {
    //查找各个DOM元素
    this.head = this.$el.querySelector('.ui-alert-head');
    this.body = this.$el.querySelector('.ui-alert-body');
    this.cancelBut = this.$el.querySelector('.ui-alert-cancel');
    this.confirmBut = this.$el.querySelector('.ui-alert-confirm');
    //设置各个DOM初始化属性
    this.cancelBut.innerText = CANCLE_TEXT;
    this.confirmBut.innerText = CONFIRM_TEXT;
}

/**
 * @private
 * @param {object} params
 * @description 为DOM绑定新的事件,清除上一次留存的事件
 */
function $bindEven(params){
    var _this = this;
    //绑定各个DOM元素的事件
    this.confirmBut.onclick = function () {
        if (typeof params.confirm === 'function')
            params.confirm.call(_this);

        _this.hidden();
    }
    this.cancelBut.onclick = function () {
        if (typeof params.cancel === 'function')
            params.cancel.call(_this);

        _this.hidden();
    }
}

/**
 * @class Confirm
 * @public
 * @description class Confirm的原型对象
 */
Confirm.prototype = {
    constructor: Confirm,
    $init:function (params) {
        if (typeof params !== 'object') params = {};

        if(this.$el === null){
            var div = document.createElement('div');
            div.innerHTML = tpl;
            this.$el = div.children[0];
            this.$el.id = this.name;
            document.body.appendChild(this.$el);
            //绑定DOM事件
            $findEle.call(this,params);
        }
        //设置title和message
        this.setTitle(params.title)
            .setMessage(params.message);
        //绑定事件
        $bindEven.call(this,params);

        this.show();
    },
    setTitle:function (title) {
        this.head.innerText = title || '';
        return this;
    },
    setMessage: function (message) {
        this.body.innerText = message || '';
        return this;
    },
    show:function () {
        this.$showNum++;
        this.$el.style.display = 'block';
    },
    hidden:function () {
        this.$showNum--;
        if (this.$showNum === 0)
            this.$el.style.display = 'none';
    }
};

//实例化对象
var confirm = new Confirm(tpl);

module.exports = function (params){
    util.onload(function(){
        confirm.$init(params);
    });
};

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-alert-mask\">\r\n    <div class=\"ui-alert\">\r\n        <div class=\"ui-alert-head\"></div>\r\n        <div class=\"ui-alert-body\"></div>\r\n        <div class=\"ui-alert-footer\">\r\n            <button class=\"ui-alert-but ui-alert-cancel\">取消</button>\r\n            <button class=\"ui-alert-but ui-alert-confirm\">确认</button>\r\n        </div>\r\n    </div>\r\n</div>";

/***/ }),
/* 4 */
/***/ (function(module, exports) {

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

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

/*
 * @Author: linnanli 
 * @Date: 2018-02-19 00:28:39 
 * @Last Modified by: linnanli
 * @Last Modified time: 2018-02-19 17:50:20
 * @Dscription: dialog 入口文件 
*/
// require('./styles/index.scss');
__webpack_require__(0);


/***/ })
/******/ ]);
});