// 函数都有一个属性prototype
// __proto__ 对象具有私有属性

// function Foo(){
    
// }
// var Boo={name:'Boo'};
// Foo.prototype=Boo;

// var f=new Foo();
// // __proto__指向构造该对象构造函数的原型
// console.log(f.__proto__);
// console.log(Foo.prototype===Boo);
// console.log(f.__proto__===Foo.prototype);
// Object.getPrototypeOf(f)===f.__proto__;

function Person(name){
    this.name=name;
}
Person.prototype={
    constructor:Person,
    sayName:function(){
        // console.log('my name is'+this.name)
    }
}
var p1=new Person('ligang');
console.log(p1.__proto__===Person.prototype)
// console.log(Person.prototype.constructor)