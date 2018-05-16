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
 /* //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },*/
  testDrive,
  readMore(event){
    // id?
    const id=event.target.dataset.id;
    // console.log(event)
    wx.navigateTo({
      url:`/pages/vehicies/show?id=${id}`
    })
  }
    
})
