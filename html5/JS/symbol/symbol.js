// var s1=Symbol('foo');
// var s2=Symbol('bar');
// console.log(s1);
// var sym=Symbol('My symbol');
// console.log(sym);//Symbol(My symbol)
// console.log(typeof sym);//symbol
// console.log(typeof String(sym));//string

// console.log(s1==s2);
// var str="123";
// var str2=new String("123");
// console.log(str);//string
// var str2=new String("123");//object
// console.log(typeof(String(str2)));//string

var mySymbol=Symbol();
var a={
    "delay":1000,
    "delay":2000,
    "delay4":4000,
    
    [mySymbol]:'Hello!'
}
var sym=Symbol();//只要能遍历出来不唯一，懒得单独设置key值
a[sym]={value:'您好'};

const objectSymbols=Object.getOwnPropertySymbols(a);//使用Object.getOwnPropertySymbols(obj)这个方法进行获取，可以返回obj对象中的Symbol信息，输出 [ Symbol(), Symbol() ]

// console.log(objectSymbols);
Object.defineProperties(a,{
    num:{
        value:'值',configurable: false,enumerable: false
    }
})
// console.log(a)
for(key in a){
    console.log(key,a[key]);
    }
    console.log(a.num);
    