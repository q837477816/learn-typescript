//  函数声明
function sum1(x: number, y: number): number {
    return x + y;
}

sum1(1, 2) // 输入多余或少于要求的参数是不被允许的 sum1(1, 2, 3) or sum1(1)

// 函数表达式
let mySum = function (x: number, y: number): number {
    return x + y;
}

// 用接口定义函数的形状
interface SearchFunc {
    (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;
mySearch = function(source: string, subString: string) {
    return source.search(subString) !== -1;
}

// 可选参数(注意，可选参数必须接在必需参数后面)
function buildName(firstName: string, lastName?: string) {
    if (lastName) {
        return firstName + ' ' + lastName;
    } else {
        return firstName;
    }
}
let yuyu1 = buildName('yu', 'yu');
let yu1 = buildName('yu');

// 参数默认值(注意，添加了默认值的参数会被自动识别为可选参数)
function buildName2(firstName: string, lastName: string = 'cat') {
    return firstName + ' ' + lastName;
}
let tomcat = buildName2('tom', 'cat');
let cat = buildName2('tom');
// 注意，此时不受【可选参数必须接在必需参数后面】的限制
function buildName3(firstName: string = 'tom', lastName: string) {
    return firstName + ' ' + lastName;
}
let tomcat2 = buildName3('tom', 'cat');
let cat2 = buildName3(undefined, 'cat');

// 剩余参数
function push(array: any[], ...items: any[]) {
    items.forEach(item => {
        array.push(item);
    });
}
let a = [];
push(a, 1, 2, 3);

// 重载
function reverse(x: number): number;
function reverse(x: string): string;
function reverse(x: number | string): number | string {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    } else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}

reverse(123)
reverse('hello')

