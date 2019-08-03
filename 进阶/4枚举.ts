// 枚举（Enum）类型用于取值被限定在一定范围内的场景，比如一周只能有七天，颜色限定为红绿蓝

enum Days {Sun, Mon, Tue, Wed, Thu, Fri, Sat};
// 枚举成员会被赋值为从0开始递增的数字，同时也会对枚举值到枚举名进行反向映射

console.log(Days["Sun"] === 0);
console.log(Days["Mon"] === 1);
console.log(Days["Tue"] === 2);
console.log(Days["Sat"] === 6);

console.log(Days[0] === "Sun");
console.log(Days[1] === "Mon");
console.log(Days[2] === "Tue");
console.log(Days[6] === "Sat");

// 手动赋值（未手动赋值的枚举项会接着上一个枚举项递增）
enum Days2 {Sun = 7, Mon = 1, Tue, Wed, Thu, Fri, Sat};
console.log(Days2["Sun"] === 7);
console.log(Days2["Mon"] === 1);
console.log(Days2["Tue"] === 2);
console.log(Days2["Sat"] === 6);

// 常数枚举(常数枚举与普通枚举的区别是，它会在编译阶段被删除，并且不能包含计算成员)
const enum Directions {Up, Down, Left, right}
let directions = [Directions.Up, Directions.Down, Directions.Left, Directions.right];