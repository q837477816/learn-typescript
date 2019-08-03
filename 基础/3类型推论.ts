// let myFavoriteNumber7 = 'seven';
// myFavoriteNumber7 = 7;
// 以上代码虽然没有指定类型，但在编译时会报错，等价以下代码
// let myFavoriteNumber7: string = 'seven';
// myFavoriteNumber7 = 7;

// 如果定义的时候没有赋值，不管以后有没有赋值，都会被推断成 any 类型而完全不被类型检查
let myFavoriteNumber7; 
myFavoriteNumber7= 'seven';
myFavoriteNumber7 = 7;
