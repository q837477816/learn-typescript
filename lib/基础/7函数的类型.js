//  函数声明
function sum1(x, y) {
    return x + y;
}
sum1(1, 2); // 输入多余或少于要求的参数是不被允许的 sum1(1, 2, 3) or sum1(1)
// 函数表达式
var mySum = function (x, y) {
    return x + y;
};
var mySearch;
mySearch = function (source, subString) {
    return source.search(subString) !== -1;
};
// 可选参数(注意，可选参数必须接在必需参数后面)
function buildName(firstName, lastName) {
    if (lastName) {
        return firstName + ' ' + lastName;
    }
    else {
        return firstName;
    }
}
var yuyu1 = buildName('yu', 'yu');
var yu1 = buildName('yu');
// 参数默认值(注意，添加了默认值的参数会被自动识别为可选参数)
function buildName2(firstName, lastName) {
    if (lastName === void 0) { lastName = 'cat'; }
    return firstName + ' ' + lastName;
}
var tomcat = buildName2('tom', 'cat');
var cat = buildName2('tom');
// 注意，此时不受【可选参数必须接在必需参数后面】的限制
function buildName3(firstName, lastName) {
    if (firstName === void 0) { firstName = 'tom'; }
    return firstName + ' ' + lastName;
}
var tomcat2 = buildName3('tom', 'cat');
var cat2 = buildName3(undefined, 'cat');
// 剩余参数
function push(array) {
    var items = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        items[_i - 1] = arguments[_i];
    }
    items.forEach(function (item) {
        array.push(item);
    });
}
var a = [];
push(a, 1, 2, 3);
function reverse(x) {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    }
    else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}
reverse(123);
reverse('hello');
