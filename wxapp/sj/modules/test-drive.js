// es6 模块化语法 module
// js变量或常量，它的类型由值决定
// var a=1;
// a="str"
// let b=123;
// b="str" 
// var c=typeof(b)
//     // !var let 都会改变类型输出字符
// console.log(a,b,c)
const testDrive=()=>{
    // 用内置的来自微信的api
    // 原生的api（nativeview，静态语言，可提前编译，运行快开发慢）大部分的小程序是html5 webview（微信所用的，效率更快） 
    // 性能上比原生慢些
    wx.showToast({
        title:'暂不支持'
    })
}

export default testDrive