// es6 set去做数组去重
set
const arr=[1,2,3,4,1,4,5,3]
function unique(arr){
    if(!Array.isArray(arr)){
        console.log('type error');
        return;
    }
    // 类数组 from of
    return Array.from(new Set(arr));
}
console.log(unique(arr))

// let set = new Set();
//  set.add(1).add(2).add(3).add(4).add(5);
//  let array = Array.from(set);
//  console.log(array);
//  let array1 = Array.from(new Set([1, 1, 1, 2, 3, 2, 4]));
// console.log(array1);