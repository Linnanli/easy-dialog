require('./index.scss');
var tpl = require('./index.html');

var confirm = {
    name:'ui-confirm',
    $el:null
};

module.exports = function(option){
    var el = document.createElement('div');
    el.innerHTML = tpl;
    confirm.$el = el.children[0];
    confirm.$el.id = confirm.name;
    
    return confirm;
}