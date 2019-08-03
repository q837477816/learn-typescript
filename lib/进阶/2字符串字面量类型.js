// 字符串字面量类型用来约束取值只能是某几个字符串中一个
function handleEvent(ele, event) {
    // do something
}
handleEvent(document.getElementById('hello'), 'scroll');
// handleEvent(document.getElementById('hello'), 'dbclick'); // Error
