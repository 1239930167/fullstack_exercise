//index.js
//index.js
//获取应用实例
import goods from '../../api/goods.js'

const app = getApp()

Page({
  data: {
    num: 1,
    show: false,
    totalNum: 0,
    scaleCart: false,
    goods: null,
    select:null
  },
  onLoad (options) {
    console.log(options)
    const id = options.id || 2;
    // const id = options.id ;
    
    let curGoods;
    for(let i = 0; i< goods.length; i++) {
      if (goods[i].id === id) {
        curGoods = goods[i];
        break;
      }
    }
    setTimeout(() => {
      this.setData({
        goods: curGoods
      });
    }, 1000)
  },
  switchTab () {

  },
  addCount() {
    let num = ++this.data.num;
    // num++
    this.setData({
      num
    })
  },
  addToCart() {
    const num = this.data.num;
    const total = this.data.totalNum;
    this.setData({
      show: true
    });
    setTimeout(() => {
      this.setData({
        show: false,
        scaleCart: true
      });
      setTimeout(() => {
        this.setData({
          scaleCart: false,
          hasCarts: true,
          totalNum: num + total
        })
      },200)
    }, 300)
  }, 
    showDetail(e){
      this.setData({
        select:e.currentTarget.dataset.index?e.currentTarget.dataset.index:0
      })
    }
  
})

//获取应用实例
/*import goods from '../../api/goods.js'
const app = getApp()

Page({
  data: {
   num:1,
   show:false,
   totalNum:0,
   scaleCart:false,
   hasCart:true,
   goods:{
     id:1,
     image:'/image/goods1.png',
     title:'新鲜梨花带雨',
     price:1,
     stock:'有货',
    detail:'这里是梨花带雨详情',
    service:'不支持退货',
    parameter:'125g/个'
   }
  },
 addCount(){
   let num=++this.data.num;
   this.setData({
     num
   })
 },
 addToCart(){
   const total=this.data.totalNum;
  const num=this.data.num;
  this.setData({
    show:true,
    // total
  });
  setTimeout(()=>{
    this.setData({
      show:false,
      scaleCart:true,
      // total
    });
    setTimeout(()=>{
      this.setData({
        scaleCart:false,
        hasCart:true,
        totalNum:num+total,
        // total
      })
    },300)
  },500)
 },
 onLoad(options){
   const id=options.id||2;
   let curGoods;
   for(let i=0;i<goods.length;i++){
    if(goods[i].id===id){
      curGoods=goods[i];
      break;
    }
   }
   setTimeout(()=>{
this.setData({
  goods:curGoods
  
});
   },1000)
   this.setData({
     goods:curGoods
   });
 }
})
*/