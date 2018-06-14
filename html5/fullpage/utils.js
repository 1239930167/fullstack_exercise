// 节流throttle在规定时间执行一次，先执行。
// ，debounce防抖在规定时间执行一次，后执行。
// 都为解决高频事件scroll mousewheel mousemover mousemove touchmove onresize 
// 在规定时间执行一次后
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
    },
    debounce(method,context,event,delay){
        // window,resize 不要急，等一下再执行
        clearTimeout(context.tId);
        // 定时器保持它的名字？
        // js 动态语言，随时添加属性和方法，
        context.tId=setTimeout(()=>{
            method.call(context,event);
        },delay)
    },
    getWheelDelta (event) {
        // console.log(event);
        if (event.wheelDelta) {
          this.getWheelDelta = event => event.wheelDelta;
          return event.wheelDelta;
        }
      }
    }