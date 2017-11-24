; (function (factory) {
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = factory(void 0);
    } else {
        window.dialog = factory(void 0);
    }

    console[console.info ? 'info' : 'log'](
        "project:'simple-dialog',\n" +
        "author:'林楠楠的脚趾有点咸',\n" +
        "email:845058952@qq.com"
    );
})(function (undefined) {

    'use strict';

    var DIALOG_MASK_BLACK = 'ui-dislog-mask black',
        DIALOG_MASK = 'ui-dislog-mask',
        DIALOG_SHOW = 'ui-dislog-show',
        ALERT_BOX = 'ui-alert',
        ALERT_HEAD = 'ui-alert-head',
        ALERT_BODY = 'ui-alert-body',
        ALERT_FOOT = 'ui-alert-foot',
        ALERT_CANCEL_BUT = 'ui-alert-but ui-alert-cancel',
        ALERT_CONFIRM_BUT = 'ui-alert-but ui-alert-confirm',
        PROMPT_CONTAIN = 'ui-prompt-contain',
        PROMPT_INPUT = 'ui-prompt-input',
        PROMPT_MESSAGE = 'ui-prompt-message',
        TOAST_BOX = 'ui-toast';
        

    //dialog 对象
    var dialog = {
        version: '1.0.0'
    };

    //confirm对话框
    var confirm = {
        id: 'dialog-confirm',
        $element: null,
        $init: function (params) {
            if (this.$element === null)
                this.$build();
            if (!params.message || !params.title) return;
            //设置title和message
            this.$setMessageText(params.message)
                .$setTitleText(params.title)
                //确定按钮绑定事件
                .$confirmBindEvent(params.confirm)
                //取消按钮绑定事件
                .$cancelBindEvent(params.cancel);

            //显示弹框
            util._addClass(this.$element, DIALOG_SHOW);
        },
        $build: function () {
            var _this = this;
            //创建遮罩
            this.$element = util._createElement('div', DIALOG_MASK_BLACK);
            this.$element.id = this.id;
            //弹框盒子
            this.$confirmBox = util._createElement('div', ALERT_BOX);
            this.$element.appendChild(this.$confirmBox);
            //弹框头部
            this.$confirmHead = util._createElement('div', ALERT_HEAD);
            this.$confirmBox.appendChild(this.$confirmHead);
            //弹框主体
            this.$confirmBody = util._createElement('div', ALERT_BODY);
            this.$confirmBox.appendChild(this.$confirmBody);
            //弹框尾部
            this.$confirmFoot = util._createElement('div', ALERT_FOOT);
            this.$confirmBox.appendChild(this.$confirmFoot);
            //弹框尾部cancel按钮
            this.$confirmCancel = util._createElement('button', ALERT_CANCEL_BUT, '取消');
            this.$confirmFoot.appendChild(this.$confirmCancel);
            //弹框尾部comfirm按钮
            this.$confirmConfirm = util._createElement('button', ALERT_CONFIRM_BUT, '确定');
            this.$confirmFoot.appendChild(this.$confirmConfirm);

            //绑定隐藏事件,阻止冒泡
            this.$element.addEventListener('dblclick',function(e){
                _this.$hidden();
                e.stopPropagation();
            });
            //阻止点击子级冒泡触发父级隐藏事件
            this.$confirmBox.addEventListener('dblclick',function(e){
                e.stopPropagation();
            });
            //阻止document click事件
            this.$element.addEventListener('click',function(e){
                e.stopPropagation();
            });

            document.body.appendChild(this.$element);
        },
        $hidden:function(){
            //隐藏弹框
            util._removeClass(this.$element, DIALOG_SHOW);
        },
        //设置对话框提示信息
        $setMessageText: function (text) {
            this.$confirmBody.innerText = text;
            return this;
        },
        //设置对话框标题
        $setTitleText: function (text) {
            this.$confirmHead.innerText = text;
            return this;
        },
        //confirm按钮绑定事件
        $confirmBindEvent: function (callback) {
            var _this = this;
            this.$confirmConfirm.onclick = function () {
                if (typeof callback === 'function') {
                    if (callback.call(dialog) === false) return;
                }
                _this.$hidden();
            }
            return this;
        },
        //cancel按钮绑定事件
        $cancelBindEvent: function (callback) {
            var _this = this;
            this.$confirmCancel.onclick = function () {
                if (typeof callback === 'function') {
                    if (callback.call(dialog) === false) return;
                }
                _this.$hidden();
            }
            return this;
        }
    };

    //prompt 输入框
    var prompt = {
        id: 'dialog-prompt',
        $element: null,
        $init: function (params) {
            if (this.$element === null)
                this.$build();
            if (!params.message || !params.title) return;
            //设置title和message
            this.$setMessageText(params.message)
                .$setPlaceholder(params.placeholder)
                .$setTitleText(params.title)
                //确定按钮绑定事件
                .$confirmBindEvent(params.confirm)
                //取消按钮绑定事件
                .$cancelBindEvent(params.cancel);
            //初始化input的值
            this.$promptInput.value = '';
            //显示弹框
            util._addClass(this.$element, DIALOG_SHOW);
            //设置input获得焦点
            this.$promptInput.focus();
        },
        $build: function () {
            var _this = this;
            //创建遮罩
            this.$element = util._createElement('div', DIALOG_MASK_BLACK);
            this.$element.id = this.id;
            //弹框盒子
            this.$promptBox = util._createElement('div', ALERT_BOX);
            this.$element.appendChild(this.$promptBox);
            //弹框头部
            this.$promptHead = util._createElement('div', ALERT_HEAD);
            this.$promptBox.appendChild(this.$promptHead);
            //弹框主体
            this.$promptBody = util._createElement('div', ALERT_BODY);
            this.$promptBox.appendChild(this.$promptBody);
            //创建prompt 消息输入
            this.$promptMessage = util._createElement('div', PROMPT_MESSAGE);
            this.$promptInput = util._createElement('input', PROMPT_INPUT);
            var promptContain = util._createElement('div', PROMPT_CONTAIN)
            promptContain.appendChild(this.$promptMessage);
            promptContain.appendChild(this.$promptInput);
            this.$promptBody.appendChild(promptContain);
            //弹框尾部
            this.$promptFoot = util._createElement('div', ALERT_FOOT);
            this.$promptBox.appendChild(this.$promptFoot);
            //弹框尾部cancel按钮
            this.$promptCancel = util._createElement('button', ALERT_CANCEL_BUT, '取消');
            this.$promptFoot.appendChild(this.$promptCancel);
            //弹框尾部comfirm按钮
            this.$promptConfirm = util._createElement('button', ALERT_CONFIRM_BUT, '确定');
            this.$promptFoot.appendChild(this.$promptConfirm);

            //绑定隐藏事件,阻止冒泡
            this.$element.addEventListener('dblclick',function(e){
                _this.$hidden();
                e.stopPropagation();
            });
            //阻止点击子级冒泡触发父级隐藏事件
            this.$promptBox.addEventListener('dblclick',function(e){
                e.stopPropagation();
            });
            //阻止document click事件
            this.$element.addEventListener('click',function(e){
                e.stopPropagation();
            });

            document.body.appendChild(this.$element);
        },
        $hidden:function(){
            //隐藏弹框
            util._removeClass(this.$element, DIALOG_SHOW);
        },
        //设置输入框提示信息
        $setMessageText: function (text) {
            this.$promptMessage.innerText = text;
            return this;
        },
        //设置input placeholder
        $setPlaceholder: function (str) {
            this.$promptInput.setAttribute('placeholder', str || '');
            return this;
        },
        //设置输入框标题
        $setTitleText: function (text) {
            this.$promptHead.innerText = text;
            return this;
        },
        //confirm按钮绑定事件
        $confirmBindEvent: function (callback) {
            var _this = this;
            this.$promptConfirm.onclick = function () {
                if (typeof callback === 'function') {
                    if (callback.call(dialog, _this.$promptInput.value) === false) return;
                }
                _this.$hidden();
            }
            return this;
        },
        //cancel按钮绑定事件
        $cancelBindEvent: function (callback) {
            var _this = this;
            this.$promptCancel.onclick = function (event) {
                if (typeof callback === 'function') {
                    if (callback.call(dialog, _this.$promptInput.value) === false) return;
                }
                _this.$hidden();
            }
            return this;
        }
    };
    //toast
    var toast = {
        id: 'dialog-toast',
        $element: null,
        timeout:1500,
        $build: function () {
            //创建遮罩
            this.$element = util._createElement('div', DIALOG_MASK);
            this.$element.id = this.id;
            //创建盒子
            this.$toastBox = util._createElement('div', TOAST_BOX);
            this.$element.appendChild(this.$toastBox);
            document.body.appendChild(this.$element);
        },
        $init: function (params) {
            if (this.$element === null)
                this.$build();
            if (!params.message) return;
            var _this = this;
            this.$toastBox.innerText = params.message;
            //显示toast
            util._addClass(this.$element, DIALOG_SHOW);
            this.$init._time = setTimeout(function(){
                //隐藏toast
                util._removeClass(_this.$element, DIALOG_SHOW);
                clearTimeout(_this.$init._time);
            },this.timeout>(params.timeout || 0)?this.timeout:params.timeout);
        }
    };

    var util = {
        //创建元素
        _createElement: function (name, clas, text) {
            var ele = document.createElement(name);
            if (ele) this._addClass(ele, clas);
            if (text) ele.innerText = text;

            return ele
        },
        //添加class
        _addClass: function (ele, clas) {
            if (ele.className) {
                ele.className = ele.className === clas ? clas : ele.className + ' ' + clas;
            } else {
                ele.className = clas;
            }
            return ele;
        },
        //删除class
        _removeClass: function (ele, clas) {
            var className = ele.className.replace(/\s+/g, ' '),
                classArr = className.split(' '),
                index = classArr.indexOf(clas);

            if (index !== -1) {
                classArr.splice(index, 1)
                ele.className = classArr.join(' ');
            }


            return this;
        },
        _onload:function(callback){
            if(document.readyState === 'complete'){
                callback();
            }else{
                window.addEventListener('load',function(){
                    callback();
                });
            }
        }
    };

    //绑定alert到dialog对象上
    dialog.confirm = function (params) {
        util._onload(function(){
            confirm.$init(params);
        });
    }
    //绑定alert到dialog对象上
    dialog.prompt = function (params) {
        util._onload(function(){
            prompt.$init(params);
        });
    }
    //绑定alert到dialog对象上
    dialog.toast = function (params) {
        util._onload(function(){
            toast.$init(params);
        });
    }
    return dialog;
});