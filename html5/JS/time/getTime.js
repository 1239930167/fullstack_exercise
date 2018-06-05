// ajax 带上时间戳去请求服务器，保证安全
// 时间戳+uid md5 值
// 201806051450

// function checkTime(i){  
//     if (i<10) {  
//         i="0" + i;  
//     }  
//     return i;  
// }  
// function generateTime(){  
//     var now=new Date();  
//     var year=now.getFullYear();  
//     var month=now.getMonth()+1;  
//     var day=now.getDate();  
//     var h=now.getHours();  
//     var m=now.getMinutes();  
//     var s=now.getSeconds();  
//     m=checkTime(m);  
//     s=checkTime(s); 
//     console.log(now)

//    var shuchu=[year+"年"+month+"月"+day+"日 "+h+":"+m+":"+s];
//     console.log(shuchu);
// }
// generateTime();

function myTime(){
    var time=new Date;
    var s=time.getSeconds;
    var min=time.getMinutes+1;
    var h=time.getHours;
    var d=time.getDate;
    var m=time.getMinutes;
    var y=time.getFullYear;
    check(min);
    check(s);
    // console.log(time);
    var show=["现在是"+y+"年"+m+"月"+d+"日"+h+"时"+min+"分"+s+"秒"];
    console.log(show);
}
function check(i){
    if(i<10){
        i='0'+i;
    }
    return i;
}
myTime();