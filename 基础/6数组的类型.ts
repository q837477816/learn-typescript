// 类型 + 方括号 表示法
let fibonacci: number[] = [1, 1, 2, 3, 5];

// 数组泛型
let fibonacci2: Array<number | string> = [1, '2', 3, 4, 5]

// 用接口表示数组
interface NumberArray {
    [index: number]: number | string;
}
let fibonacci3: NumberArray = [1, '2', 3, 4, 5]

// any在数组中的应用
let list: any[] = ['xxx', 111, {}, null, undefined, true]

// 类数组
function sum() {
    let args: IArguments = arguments;
}