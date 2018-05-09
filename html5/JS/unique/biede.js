const arr = [1, 2, 3, 4, 1, 4, 5, 3];
function unique(arr) {
    // 遍历arr，把元素分别放入tmp数组(不存在才放)  
    const tmp = new Array();
    for (const i in arr) {
        //该元素在tmp内部不存在才允许追加  

        // indexOf() 方法可返回某个指定的字符串值在字符串中首次出现的位置。
        if (tmp.indexOf(arr[i]) == -1) {
            tmp.push(arr[i]);
        }
    }
    return tmp;
}
console.log(unique(arr));
