const MENU_WIDTH_SCALE = 0.82;
const FAST_SPEED_SECOND = 300;
const FAST_SPEED_DISTANCE = 5;
const FAST_SPEED_EFF_Y = 50;

Page({
  data: {
    ui: {
      menuWidth: 0,
      windowWidth: 0,
      offsetLeft: 0,
      tStart: true
    }
  },
  onLoad: function (options) {
    try {
      // sync 同步， 阻塞， async, 异步
      let res = wx.getSystemInfoSync();
      this.windowWidth = res.windowWidth
      this.data.ui.menuWidth = this.windowWidth * MENU_WIDTH_SCALE;
      this.data.ui.windowWidth = this.windowWidth;
      this.data.ui.offsetLeft = 0;
      this.setData({
        ui: this.data.ui
      })
    } catch(e) {

    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
  handlerAvatarTap(e){
    let {ui}=this.data;
    // 抽屉式菜单没出来的时间
    if(ui.offsetLeft==0){
      ui.offsetLeft=ui.menuWidth;
      this.setData({
        ui:ui
      });
    }
  },
  handlerStart(e)
{
// 开始的点
let{clientX,clientY}=e.touch[0];
this.tapStartX=clientX;
this.tapStartY=clientY;
this.tapStartTime=e.timeStamp;
this.startX=clientX;
this.data.ui.tStart=true;
this.setData({
  ui:this.data.ui
})
},
handlerMove(e){
  let {clientX}=e.touch[0];
  let {ui}=this.data;
  let offsetX=this.startX-clientX;
  this.startX=clientX;
  ui.offsetLeft-=offsetX;
  if(ui.offsetLeft<=0){
    ui.offsetLeft=0;

  }
  else if(ui.offsetLeft>=ui.menuWidth){
    ui.offsetLeft=ui.menuWidth;
  }
},
handlerCancel(e){

},
handlerEnd(e){
// 结束的点
}
})