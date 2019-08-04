// 接口（Interface）可以用于对【对象的形状】进行描述，也可以对类的一部分行为进行抽象

// 类实现接口
// 实现（implements）是面向对象中的一个重要概念。一般来说，一个类只能继承自另一个类，有时候不同类之间可以有一些共同的特性，这时候就可以把特性提取成接口（Interface），用implements关键字来实现。

interface Alarm {
    alert();
}

class Door {

}

class SecurityDoor extends Door implements Alarm { // 防盗门有报警器功能
    alert() {
        console.log('SecurityDoor alert');
    }
}

class Car implements Alarm { // 车也有报警器功能
    alert() {
        console.log('Car alert');
    }
}

// 一个类可以实现多个接口
interface Light {
    lightOn();
    lightOff();
}

class Car2 implements Alarm, Light { // Car2实现了Alarm和Light接口，既能报警，也能开关车灯
    alert() {
        console.log('Car alert');
    }
    lightOn() {
        console.log('Car light on');
    }
    lightOff() {
        console.log('Car light off');
    }
}

// 接口继承接口
interface Alarm1 {
    alert();
}
interface LightabledAlarm extends Alarm1 {
    lightOn();
    lightOff();
}
class Car3 implements LightabledAlarm {
    lightOn() {}
    lightOff() {}
    alert() {}
}

// 接口继承类
class Point {
    x: number;
    y: number;
}

interface Point3d extends Point {
    z: number;
}

let point3d: Point3d = {x: 1, y: 2, z:3};

// 混合类型
// 可以使用接口的方式类定义一个函数需要复合的形状
interface SearchFunc1 {
    (source: string, subString: string): boolean;
}

let mySearch1: SearchFunc1;
mySearch1 = function(source: string, subString: string) {
    return source.search(subString) !== 1;
}

// 有时候，一个函数还可以有自己的属性和方法
interface Counter {
    (start: number): string;
    interval: number;
    reset(): void;
}

function getCounter(): Counter {
    let counter = <Counter>function (start: number) {};
    counter.interval = 123;
    counter.reset = function () {};
    return counter;
}

let cc: Counter;
cc = getCounter();
cc(10);
cc.reset();
cc.interval = 5.0;

