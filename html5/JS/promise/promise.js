// 模块化 一个文件只写一个类
class Promise {
    constructor(executor) {
        //成功的值
        // promise 状态有几种？
        // pending 等待
        // resolve 成功
        // reject 失败
        this.status='pending';
        this.value=undefined;
        this.reason=undefined;
        let resolve = (value) => {
            if(this.status==='pending'){
                this.status='resolved';
            
            this.value=value;
            }
        }
        let reject=(value)=>{
            if(this.status==='pending'){
                this.status='rejected';
                this.reason=reason
            }
        }
        executor(reject,resolve); //执行一下
    }
    then(onFullfilled,onRejected) {
        if(this.status==='resolved'){
        onFullfilled(this.value)
            
        }
        if(this.status==='rejected'){
            onRejected(this.reason);
        }
    }
}

module.exports = Promise