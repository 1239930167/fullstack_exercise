class mPromise{
    constructor(exec){
        this.status='dengdai';
        this.val=undefined;
        this.resn=undefined;
        let resolve=(val)=>{
            if(this.status==='dengdai'){
                this.status='jiejue';
                this.val=val;
            }
        }
        let reject=(val)=>{
            if(this.status==='dengdai'){
                this.status='jujue';
                this.resn=resn;
            }
        }
        executor(resolve,reject);
    }
    then(onfill,onrej){
        if(this.status==='jiejue'){
            onfill(this.val);
        }
    }
}