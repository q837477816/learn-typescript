// 接口（Interface）可以用于对【对象的形状】进行描述，也可以对类的一部分行为进行抽象
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
var Door = /** @class */ (function () {
    function Door() {
    }
    return Door;
}());
var SecurityDoor = /** @class */ (function (_super) {
    __extends(SecurityDoor, _super);
    function SecurityDoor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SecurityDoor.prototype.alert = function () {
        console.log('SecurityDoor alert');
    };
    return SecurityDoor;
}(Door));
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.alert = function () {
        console.log('Car alert');
    };
    return Car;
}());
var Car2 = /** @class */ (function () {
    function Car2() {
    }
    Car2.prototype.alert = function () {
        console.log('Car alert');
    };
    Car2.prototype.lightOn = function () {
        console.log('Car light on');
    };
    Car2.prototype.lightOff = function () {
        console.log('Car light off');
    };
    return Car2;
}());
var Car3 = /** @class */ (function () {
    function Car3() {
    }
    Car3.prototype.lightOn = function () { };
    Car3.prototype.lightOff = function () { };
    Car3.prototype.alert = function () { };
    return Car3;
}());
// 接口继承类
var Point = /** @class */ (function () {
    function Point() {
    }
    return Point;
}());
var point3d = { x: 1, y: 2, z: 3 };
var mySearch1;
mySearch1 = function (source, subString) {
    return source.search(subString) !== 1;
};
function getCounter() {
    var counter = function (start) { };
    counter.interval = 123;
    counter.reset = function () { };
    return counter;
}
var cc;
cc = getCounter();
cc(10);
cc.reset();
cc.interval = 5.0;
