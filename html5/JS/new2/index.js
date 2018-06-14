function Otaku(name,age){
    this.name=name;
    this.age=age;
    this.habit='Games';
}
Otaku.prototype.strength=60;
Otaku.prototype.sayYouName=function(name){
    // console.log('I am'+this.name);
    this.name=name;
    console.log(`I am ${this.name}`);
    
}
// const person=new Otaku('曾凯',18);
// person.sayYouName();

// 1 要返回一个新的对象
// 2 访问到otaku 构造函数里有属性
// 3 访问到Otaku.prototype中的属性或方法

// 参数1是类，后几个参数。。。
// js 的函数参数异常灵活，数量可以不定，形象可以不给
// 还有...reset运算符整合起来，都会跟arguments结合起来
function objectFactory()
{
    var Constructor=[].shift.call(arguments);//arguments是伪函数没有shift（），所以call借用
    // console.log(Constructor,arguments);
    var obj=new Object();
    // 1.obj __proto__
    // 2.构造函数上的this属性，参数要传进去赋值，this要指向当前对象
    obj.__proto__=Constructor.prototype;
    // 在apply内部手动制定函数指定执行时的this

    Constructor.apply(obj,arguments);//apply与call的区别，call的参数需要一个个传，而apply可以融为一个数组
    obj.sayYouName('周宇');
    
    // console.log(obj);
    // console.log(arguments);
    // 肢解工作？第一项
    // [].shift数组第一个元素弹出
    var constructor=arguments[1];
    // console.log(constructor)
    // var args=
}
var person=objectFactory(Otaku,'鸠摩智',50);

objectFactory();
