/*
 * @Author: linnanli 
 * @Description: alert 类,作为confirm和prompt的父类 
 * @Date: 2018-02-23 18:00:53 
 * @Last Modified by: linnanli
 * @Last Modified time: 2018-02-25 18:34:12
 */

 function Alert(){
     this.name = 'ui-alert';
     this.$el = null;
     this.$showNum = 0;
 }

Alert.prototype = {
    constructor:Alert,
    $init:function(){},
    setTitle: function (title){
        this.head.innerText = title || '';
        return this;
    },
    setMessage: function (message){
        this.body.innerText = message || '';
        return this;
    },
    show: function () {
        this.$showNum++;
        this.$el.style.display = 'block';
    },
    hidden: function () {
        if(this.$showNum>0)
            this.$showNum--;
        if (this.$showNum === 0)
            this.$el.style.display = 'none';
    }
};

module.exports = Alert;
