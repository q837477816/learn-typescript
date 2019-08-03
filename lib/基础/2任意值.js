// 任意值 Any 用来表示允许赋值为任意类型
var myFavoriteNumber = 'seven';
myFavoriteNumber = 7;
// 任意值的属性和方法
var anyThing = 'hello';
// 在任意值上访问任何属性都是允许的
console.log(anyThing.myName);
console.log(anyThing.myName.firstName);
// 也允许调用任何方法
anyThing.setName('yuyu');
anyThing.setName('yuyu').sayHello();
anyThing.myName.setFirstName('xxx');
// 变量如果在声明的时候，未指定其类型，那么它就会被识别为任意值类型
var something;
something = 'seven';
something = 7;
something.setName('yuyu');
