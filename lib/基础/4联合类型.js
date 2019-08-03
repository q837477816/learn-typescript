// 联合类型 Union Types 表示取值可以为多种类型中的一种
var myFavoriteNumber8;
myFavoriteNumber8 = 'eight';
myFavoriteNumber8 = 8;
// 访问联合类型的属性和方法时，只能访问所有类型里共有的属性或方法
function getString(something) {
    return something.toString();
}
// 联合类型的变量在被赋值的时候，会根据类型推论的规则推断出一个类型
var myFavoriteNumber9;
myFavoriteNumber9 = 'nine';
console.log(myFavoriteNumber9.length);
