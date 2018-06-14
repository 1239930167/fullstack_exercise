const arr=[1,2,3];
const func=function(){};
const obj={};

// Object 来自 function(){} 构造函数有prototype属性， 对象 __proto__
// toString 转为字符串并返回结果
// console.log(Object.prototype.toString.call(arr));
// console.log(Object.prototype.toString.call(func));
// console.log(Object.prototype.toString.call(obj));

const zk={
    name:'曾凯',
    toString:function(){
        return `${this.name}好棒`
    }
}
// 序列化 "{name:'曾凯',habit:'交友'}"
var arr1={name:'曾凯',habit:'交友'};
// stringify()将对象和字符串互转
// Array.isArray() 返回参数是否为数组的Boolean值，但不是全面支持
console.log(JSON.stringify(zk.toString()));
const zidingyi={
    toString:function(){
        return `不再实现底层的toString()功能只实现自定义功能`
    }}
console.log(zidingyi.toString());