// TypeScript 可以使用三种访问修饰符，风别是 public、private和protected
// public 修饰的属性或方法是公有的，可以在任何地方被访问到，默认所有的属性和方法都是public的
// private 修饰的属性或方法是私有的，不能在声明它的类的外部访问
// protected 修饰的属性或方法是受保护的，它和private类似，区别是它在子类中也允许被访问
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    return Animal;
}());
var animal = new Animal('Jack');
console.log(animal.name);
animal.name = 'Tom';
console.log(animal.name);
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(name) {
        var _this = _super.call(this, name) || this;
        console.log(_this.name);
        return _this;
    }
    return Cat;
}(Animal));
// 抽象类（不允许被实例话）
var Animal1 = /** @class */ (function () {
    function Animal1(name) {
        this.name = name;
    }
    return Animal1;
}());
// let animal1 = new Animal1('Jack'); // Error 不允许实例化抽象类
var Cat2 = /** @class */ (function (_super) {
    __extends(Cat2, _super);
    function Cat2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cat2.prototype.sayHi = function () {
        console.log("Yu, My name is " + this.name);
    };
    return Cat2;
}(Animal1));
var c = new Cat2('Tom');
// 类的类型
var Animal2 = /** @class */ (function () {
    function Animal2(name) {
        this.name = name;
    }
    Animal2.prototype.sayHi = function () {
        return "My name is " + this.name;
    };
    return Animal2;
}());
var animal2 = new Animal2('Jack');
console.log(animal2.sayHi());
