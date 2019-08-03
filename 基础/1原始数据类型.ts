// 布尔值
let isDone: boolean = false;
let createdByNewBoolean: boolean = Boolean(1);

// 数值
let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
let binaryLiteral: number = 0b1010;
let octalLiteral: number = 0o744;
let notANumber: number = NaN;
let infinityNumber: number = Infinity;

// 字符串
let myName: string = 'yuyu';
let myAge: number = 24;
let sentence: string = `Hello, my name is ${myName}.
I'll be ${myAge + 1} years old next month.`;

// 空值(只能将undefined 和 null赋值给空值)
function alertName(): void {
    alert('My name is yuyu');
}
let unusable: void = null;

// Null 和 Undefined
// 与 void 的区别是，undefined 和 null 是所有类型的子类型
let u: undefined = undefined;
let n: null = null;

