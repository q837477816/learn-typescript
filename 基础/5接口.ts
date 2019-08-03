// 对象的类型--接口
// 在 typescript 中使用接口 Interfaces 来定义对象的类型

interface Person {
    name: string;
    age: number;
}

let yuyu: Person = {
    name: 'yuyu',
    age: 24
}

// 可选属性
interface Person2 {
    name: string;
    age?: number;
}

let yuyu2: Person2 = {
    name: 'yuyu',
}

// 任意属性(一旦定义了任意属性，那么确定属性和可选属性的类型都必须是它的类型的子集)
interface Person3 {
    name: string;
    age?: number;
    [propName: string]: any;
}

let yuyu3: Person3 = {
    name: 'yuyu',
    age: 1,
    gender: 'male'
}

// 只读属性(注意，只读的约束存在于第一次给对象赋值的时候，而不是第一次给只读属性赋值的时候)
interface Person4 {
    readonly id: number;
    name: string;
    age?: number;
    [propName: string]: any;
}

let yuyu4: Person4 = {
    id: 110,
    name: 'yuyu',
    gender: 'male'
}
// yuyu4.id = 100; // error