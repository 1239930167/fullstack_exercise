//index.js
//获取应用实例
//index.js
//获取应用实例
const app = getApp()

Page({
  // 数据绑定
  data: {
    latitude: 39.914769,
    longitude: 116.404556,
    scale: 15,
    controls:[]
  },
  onReady: function() {
    console.log('ready');
    // 小程序提供了获取经纬的方法 
    wx.getLocation({
      type: 'gcj02',      
      success: (res) => {
        console.log(res.latitude, res.longitude)
        // 重新设置data 里的数据
        this.setData({
          
          latitude: res.latitude,
          longitude: res.longitude,
          scale: 18
        })
      }
    })

        // data数据初始化，数据会随着生命周期，
        // 用户的请求发生改变，数据是会变的，
        // 绑定着数据的界面也要随之改变
        // 自动刷新页面 setdata 就是这样一个api
        // Page先显示地图，晚一点显示control
        this.setData({
          controls:[{
            id:1,
            iconPath:'/images/location.png',
            position:{
              left:20,
              top:200,
              width:50,
              height:50
            }
          }]
        
        })
  },
  // 生命周期函数
  onLoad:function(){
    console.log('load');
    
  }


  //事件处理函数
 /* bindViewTap: function() {
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
  }*/
})
