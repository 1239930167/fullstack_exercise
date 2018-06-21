const Promise = require('./promise.js');

// 将要执行的耗时任务封在executor，实例化就开始执行

// resolve 
// reject 
// 上述两个都是形参 他们的类型是函数 是promise的构造函数给的两个
const p = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         resolve('hello');
//     })
// },1000);
reject('没见到人');
})
p.then((data)=>{
    console.log(data);
},(err)=>{
    console.log(err);
})