// console.log('合唱团');
// talk is js
// 国王，招1000只鸭组成合唱团
var choir = [];
// 对数组进行描述 ,只要两脚站立会嘎嘎嘎的叫的都是鸭子
// duck 是鸭对象
//json Object
var duck = {
    // name:'鸭王',
    // actor:'任达华',
    duckSinging:function(){
        console.log('嘎嘎嘎');
    }
}


// console.log(choir);

//把chicken加进duck里去？new一下？——json对象 ，不需要new
//  json慢慢描述 也是数据交换的标准
var yy = {
    name:'袁赟',
    age:'21',
    birth:'10-22',
    idolAttributes:{
        sex:'female',
        isAlive:true
    }
}

// console.log(yy.idolAttributes.sex);//female
// yy.idolAttributes.sex = 'male';
// console.log(yy.idolAttributes.sex);//male
var chicken = {
    duckSinging:function(){
    console.log('嘎嘎嘎');
    }
}
// console.log(choir.length);

// for(var i=0;i<choir.length;i++){
//     var singer = choir[i];
//     if(!singer.duckSinging){
//         console.log('不是鸭子');
//         break;
//     }
// }
for(var i = 0; i < 999; i++){
    joinChoir(duck);
}
console.log(choir.length);
joinChoir(chicken);
console.log(choir.length);

function joinChoir(ani){
    if(ani && typeof ani.duckSinging == 'function'){
        choir.push(ani);
    }else{
        console.log('不合格');
    }
}

