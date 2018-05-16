const app = getApp()

Page({
  data: {
    entities:[],
    isLoading:true
  },
  onPullDownRefresh(){
    setTimeout(()=>{
      wx.stopPullDownRefresh();
    },2000)
  },
  onLoad () {
    setTimeout(()=>{
      this.setData({
        isLoading:false
      })
    },2000);
  }
})
