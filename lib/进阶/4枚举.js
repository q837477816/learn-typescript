// 枚举（Enum）类型用于取值被限定在一定范围内的场景，比如一周只能有七天，颜色限定为红绿蓝
var Days;
(function (Days) {
    Days[Days["Sun"] = 0] = "Sun";
    Days[Days["Mon"] = 1] = "Mon";
    Days[Days["Tue"] = 2] = "Tue";
    Days[Days["Wed"] = 3] = "Wed";
    Days[Days["Thu"] = 4] = "Thu";
    Days[Days["Fri"] = 5] = "Fri";
    Days[Days["Sat"] = 6] = "Sat";
})(Days || (Days = {}));
;
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
var Days2;
(function (Days2) {
    Days2[Days2["Sun"] = 7] = "Sun";
    Days2[Days2["Mon"] = 1] = "Mon";
    Days2[Days2["Tue"] = 2] = "Tue";
    Days2[Days2["Wed"] = 3] = "Wed";
    Days2[Days2["Thu"] = 4] = "Thu";
    Days2[Days2["Fri"] = 5] = "Fri";
    Days2[Days2["Sat"] = 6] = "Sat";
})(Days2 || (Days2 = {}));
;
console.log(Days2["Sun"] === 7);
console.log(Days2["Mon"] === 1);
console.log(Days2["Tue"] === 2);
console.log(Days2["Sat"] === 6);
var directions = [0 /* Up */, 1 /* Down */, 2 /* Left */, 3 /* right */];
