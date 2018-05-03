var xiaoming={
    name:'小明',
    age:'21',
    hasGirlFriend:false,
    job:null,
    city:undefined,
    sendFlower:function(target){
    var flower=new Flower('薰衣草');
    if(typeof target.receiveFlower =='function')
    target.receiveFlower(flower,this.name);
    else
    console.log('你是好人~')
    }

}
// 空的对象字面量
var xueba={
    re:function(){
    console.log('你是好人')}
}
// 最具有详述性，最容易创造的对象
var xiaomei={
    name:'小美',
    room:'9栋221',
    hometown:'九江',
    receiveFlower:function(flower,name){
        console.log(name)
        console.log('收到'+name+'送的f'+flower.type)
    }

}
var xiaoxue={
    name:'小雪',
    receiveFlower:function(flower,name){
        xiaomei.receiveFlower(flower,name)
        // 实现同样收花方法，雪、梅都实现了同样方法，实现了相同interface
        // 实现相同接口，就能互换对象。
    }
}
var Flower=function(type){
    this.type=type||'玫瑰';
}
xiaoming.sendFlower(xueba);