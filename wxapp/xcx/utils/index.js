// opt没有传该传的
import * as Mock from './mock'
Mock["list"]
const DEFAULT_REQUEST_OPTIONS={
    url:'',
    data:{},
    header:{
        'Content-Type':'application/json'
    },
    method:'GET',
    dataType:'json'
}
let util={
    request(opt){
        
        // 生成对象 assign()
        let options=Object.assign({},DEFAULT_REQUEST_OPTIONS,opt);
        console.log(options);
        let{url,data,header,method,dataType,mock=false}=options;
        // 将options 的数据一一解构设为变量，之后可以直接调用变量而不用options.url的方式调用，mock设了默认值false

        // console.log(url,data,header,method,dataType,mock);
        return new Promise((resolve,reject)=>{
            if(mock){
                let res={
                    statusCode:200,
                    data:Mock[url]
                }
                resolve(res.data);
                return 
            }
            // resolve('OK');
            wx.request({
                url,
                data,
                header,method,
                dataType,
                success(res){
                    resolve(res.data)
                },
                fail(err){
                    reject(err)
                }
            })
        })
    }
}
export default util