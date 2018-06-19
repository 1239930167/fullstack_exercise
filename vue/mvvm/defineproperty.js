(function(){
    //启用严格模式
    'use strict';
    // console.log(this)
    var o={};
Object.defineProperty(o,'a',{
    value:1,
    enumerable:true,
});

Object.defineProperty(o,'b',{
    value:2,
    enumerable:false,
});

Object.defineProperty(o,'c',{
    value:3
});
o.d=4;
console.log(Object.keys(o));//！！！应输出所有key=>a,b,c；但此处输出undefined

for(let key in o){
    console.log(key,o[key])
}
console.log(o.b);
console.log(o.c);
console.log(o.propertyIsEnumerable('b'));


// console.log(o.a);
// o.a=7
// console.log(o.a)
})()

// 'use strict'
// var o={};
// Object.defineProperty(o,'a',{
//     configurable:false,//对象属性是否看被删除
//     get:function(){
//         return 1;
//     }
// })
// // console.log(o.a);
// // delete o.a; //这条会因严格模式报错，因configurable为false，若不是严格，不报错但不删

// function Archiver(){
//     var temperature=null;
//     var archive=[];
//     Object.defineProperty(this,'temperature',{
//         get:function(){
//             console.log('get');
//             return temperature;
//         },
//         set:function(value){
//             temperature=value;
//         }
//     })

//     var data={
//         age:170,
//         name:'张二二'
//     }
//     for(let key in data)
//     {
//         Object.defineProperty(data,key,{
//             get:function(){
//                 console.log('get!')
//             },
//             set:function(newVal){
//                 console.log('set!');
//                 data[key]=newVal
//             }
//         })
        
//     }
//     // data.age=20;
// }
// var arc=new Archiver();
// arc.temperature=35;
// console.log(arc.temperature)