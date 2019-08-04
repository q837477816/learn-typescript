// TypeScript 可以使用三种访问修饰符，风别是 public、private和protected
// public 修饰的属性或方法是公有的，可以在任何地方被访问到，默认所有的属性和方法都是public的
// private 修饰的属性或方法是私有的，不能在声明它的类的外部访问
// protected 修饰的属性或方法是受保护的，它和private类似，区别是它在子类中也允许被访问

class Animal {
    public name;
    public constructor(name) {
        this.name = name;
    }
}
let animal = new Animal('Jack');
console.log(animal.name);
animal.name = 'Tom';
console.log(animal.name);

class Cat extends Animal {
    constructor(name) {
        super(name);
        console.log(this.name);
    }
}

// 抽象类（不允许被实例话）

abstract class Animal1 {
    public name;
    public constructor(name) {
        this.name = name;
    }
    public abstract sayHi(); // 定义一个抽象方法，必须在子类中实现
}
// let animal1 = new Animal1('Jack'); // Error 不允许实例化抽象类
class Cat2 extends Animal1 {
    public sayHi() {
        console.log(`Yu, My name is ${this.name}`);
    }
}
let c = new Cat2('Tom');

// 类的类型
class Animal2 {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    sayHi(): string {
        return `My name is ${this.name}`;
    }
}
let animal2: Animal2 = new Animal2('Jack');
console.log(animal2.sayHi());
