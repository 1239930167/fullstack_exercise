// symbol js的基础数据类型之一
// 为js 带来唯一值，不会重复
var s=Symbol();
// console.log(typeof s);
var s1=Symbol();
console.log(s==s1);
console.log(new Symbol())