//app.js
App({
  onLaunch: function () {
    wx.getStorage({
      key: 'user-Info',
      success: (res) => {
        // console.log(res.data);
        // (this.globalData.userInfo)
        this.globalData.userInfo = res.data
      }
    })

  },
  globalData: {
    userInfo: null
  }
})