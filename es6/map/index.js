const dogs=new Map();
dogs.set('snickers',3);
dogs.set('sunny',2);
dogs.set('hugo',10);
dogs.forEach((zhi,index,third,forth)=>console.log(zhi+"&",index+"&",third+"&"));
// forEach（）第一个参数是所有值，第二个是下标也就是map.set的第一个值

// 可以迭代的都可使用for of
for(const [key,val] of dogs){
    // console.log(key,val)
    // console.log(key) ?位置
    console.log(key)
    // 解构，第一项借给key，第二项借给值，按顺序解构
}
let a=1;
let b=2;
let c=0;
// c=a
// a=b
// b=c
// console.log(a,b);

[b,a]=[a,b]
// console.log(a,b,c)
// console.log(a,b)
