# chrome 使用 translate(50%); 会出现 边框和字体模糊的BUG

解决办法: 将元素的宽和高设置为偶数可以解决这个BUG

# IE下敲击回车键盘会触发页面第一个按钮的事件

解决办法:  自定义一个没有事件的隐藏按钮,插入到页面第一个的位置

# IE10以上 input输入框会有 X 按钮，怎么清除？

使用 ::ms-clear { display:none;}