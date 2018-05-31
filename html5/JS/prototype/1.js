var obj={a:1};
// console.log("a" in obj);
// console.log("" in obj);
// console.log("toString" in obj);
// 原型链对象上是否具有某属性
// obj 对象
// name 属性名
// obj,a false
// obj b false
// obj toString true
function hasPrototypeProperty(o,name){
    return name in o && !o.hasOwnProperty(name)
    // 属性只属于原型链对象
}
console.log(hasPrototypeProperty(obj,"toString"));
console.log(hasPrototypeProperty(obj,"a"));

// 函数是对象 Object
// Person 可以是程序员、作者等原型链对象，没有父子关系
// prototype 入口？js所有对象是由function构造
// prototype 函数都有的属性

// 实例instance p1 p2 都有自身属性name
// 由Person 构建函数 this.name=
// Person constructor
// Person.prototype.sayName
// 新的对象构建
// 不是类与对象（父子）的关系，原型关系
// constructor 属性设置，车头
// constructor->prototype 方法，车身，一个车头可以加多个车身，可以顺着prototype查找方法

const p1=new Person('王小虎');
console.log(p1)
function Person(name){
    this.name=name;
    // this指向未来可能生成的实例本身
}
// 函数 js 几乎所有的函数都有一个prototype属性，
// 指针一样，指向一个对象 ，属性或方法的集合
Person.prototype.getName=function(){
    return this.name;
}
Person.prototype={
    getName:function(){
        return this.name;
    }
}
// js原型式继承
// constructor Person name+books 属性
// prototype Person方法链+方法链（自身方法）
// 一 让子对象拥有父类的所有属性
function Author(name,books){
    // 新的构造函数
    
    // this声明作用域（调用对象），将Person所需实参传给他
    Person.call(this,name);
    this.books=books;
}
// 得到Person的prototype
extend(Author,Person);
Author.prototype.getBooks=function(){
    return this.books;
}
// 构造函数 Author prototype->
// super
// function 
function extend(subClass,superClass){
    // 第三者 干净

    var F=function(){};//空的构造函数
    F.prototype=superClass.prototype;
    subClass.prototype=new F();
    // subClass.prototype内自动生成的constructor被F()里的覆盖
    subClass.prototype.constructor()=subClass;
    // 重新把subClass找回来
}
const author=new Author('雨果',['悲惨世界']);
// java对象拥有新的方法和属性的一份拷贝
// ？author 函数的prototype 指向 Author的prototype
// this 实例对象 this指向作用域内可以找到的属性
// 方法？prototype 去查找Author对象的prototype

author.log(author.getBooks());