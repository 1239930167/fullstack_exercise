//index.js
//获取应用实例
import testDrive from '../../modules/test-drive'
// console.log(testDrive);
// 在Page里得到app
const app = getApp()

Page({
  data: {
   slides:[
     /*{
     id:5,
     header:'全新一代发现',
     sub_header:'Discovery',
    description:'全尺寸七座SUV,现已接受预定',
    image:'https://resources.ninghao.net/landrover/discover-1.jpg'
   },
  {
    id:3,
     header:'全新揽胜星脉',
     sub_header:'Range Rover',
    description:'标新立异的前卫揽胜',
    image:'https://resources.ninghao.net/landrover/velar-1.jpg'
  }*/]
  },
  onLoad(){
    this.setData({
      slides:app.globalData.slides
    })
  },

  testDrive,
  readMore(event){
    // id?
    const id=event.target.dataset.id;
    console.log(id)
    wx.navigateTo({
      url:`/pages/vehicies/show?id=${id}`
    })
  }
    
})
