// 类型断言 Type Assertion 可以用来手动指定一个值的类型
function getLength2(something) {
    if (something.length) {
        return something.length;
    }
    else {
        return something.toString().length;
    }
}
