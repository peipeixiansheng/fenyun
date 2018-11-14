//app.js
App({
  onLaunch: function () {
    // 判断网络状态
    wx.getNetworkType({
      success: res => {
        // console.log(res);
        if(res.networkType=='none'){
          wx.showToast({
            title: '哥们,你没网哦',
            icon: 'none',
            duration: 1500,
            mask: false,
          });
        }else if(res.networkType!='wifi'){
          wx.showToast({
            title: '哥们,你确定要用自己的流量',
            icon: 'none',
            duration: 1500,
            mask: false,
          });
        }
      }
    });
    // 注册网络改变时间
    wx.onNetworkStatusChange(res => {
      // console.log(res);
      wx.showToast({
        title: '你当前的网络为:'+res.networkType,
        icon: 'none',
        duration: 1500,
        mask: false,
      });
    });
  },
  globalData: {
    songName: '么么哒'
  }
})