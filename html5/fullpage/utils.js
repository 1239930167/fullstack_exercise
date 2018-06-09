const utils = {
    // 帮忙method执行的次数在规定的时间内只有一次,
    // method执行时，函数内的this 指向pureFullpage
    // this.container
    throttle(method, context, delay) {
        // args是啥？
        // 返回的函数就是等下事件执行的真正函数体
        // 闭包
        let wait = false;
        return function (...args) {
            
            // ...args会收束浏览器传来的参数
            // method() this 会指向window
            // args? event对象
            // 执行时，上下文环境和以前一样
            if (!wait) {
                method.apply(context, args)
                wait=true;
            setTimeout(() => {
                wait=false
            }, delay);
            console.log(args)
            console.log(delay)
            }
            
        }
    }
}