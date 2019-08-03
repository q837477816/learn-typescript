// 数组合并了相同类型的对象，2⃣️元组（Tuple）合并了不同类型的对象

// 定义一堆值分别为 string 和 number 的元组
let yy1: [string, number] = ['yuyu', 24];
// 注意，直接对元组类型的变量进行初始化或者赋值的时候，需要提供所有元组类型中指定的项



let yy2: [string, number];
yy2[0] = 'yuyu'; // 可以对元组中一个已知索引的元素进行访问或赋值
yy2[1] = 24;
yy2[0].slice(1);
yy2[1].toFixed(2);

// 越界的元素（当添加越界的元素时，它的类型会被限制为元组中每个类型的联合类型）
let yy3: [string, number];
yy3 = ['yuyu', 24];
yy3.push(1);
yy3.push('aaa');
yy3.push(null);
yy3.push(undefined);