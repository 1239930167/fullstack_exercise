
// var arr=new Array(100);
const source_arr=[35,99,18,18,76,12];

function sort(){
    const arr=[];
    // 利用数组的下标，数字大小在下标范围之内；
    // 下标是天然有顺序的,桶排序
    const a=[];
    for(let i=0;i<100;i++){
        // 桶子做好了
        a[i]=0;

    }
    for (let i=0;i<source_arr.length;i++){
        const item=source_arr[i];/**将源数组下标和临时数组下标关联 */
        a[item]+=1/** 若源数组有相同与小标相同的数出现，临时数组对应元素+1*/
    }
    for(let i=0;i<a.length;i++){
        if(a[i]>=0){
            for(let j=0;j<a[i];j++){/**用另一个临时组arr查找a组是否有不为0的数，有的加入临时组arr */
            arr.push(i);
            }
        }
    }
    return arr;

}
const sorted_arr=sort();
console.log(sorted_arr)
// 输出数组arr