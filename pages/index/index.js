//Page Object
// 导入工具函数
let tool = require('../../utils/util');
Page({
  data: {
    // tab栏索引
    index: 0,
    // 轮播图数据
    banners: [],
    // 推荐歌单 
    songList: []
  },
  // 切换tab
  changeTab(event) {
    // console.log(event);
    this.setData({
      index: event.target.dataset.index
    })
  },
  // 跳转到搜索页
  toSearch(){
    // 代码的方式跳转 编程式导航
    wx.navigateTo({
      url: '/pages/search/search',
      success: (result)=>{
        
      },
      fail: ()=>{},
      complete: ()=>{}
    });
  },
  //options(Object)
  onLoad: function (options) {
    // 获取 轮播图数据
    tool.myPro({
      url: '/banner'
    }).then(result => {
      // console.log(result);
      this.setData({
        banners: result.data.banners
      })
    })

    // 获取每日推荐歌单
    tool.myPro({
      url: '/personalized'
    }).then(result => {

      // 修正数据
      result.data.result.forEach(v => {
        // 向上取整
        v.playCount = Math.ceil(v.playCount)
        // 计算是否破万 超过1w 就显示w 1w一下显示原本的数字
        if (v.playCount >= 10000) {
          v.playCount = Math.ceil(v.playCount / 10000) + '万'
        }
      })

      // console.log(result);
      this.setData({
        songList: result.data.result
      })

    })

  },
  onReady: function () {

  },
  onShow: function () {

  },
  onHide: function () {

  },
  onUnload: function () {

  },
  onPullDownRefresh: function () {

  },
  onReachBottom: function () {

  },
  onShareAppMessage: function () {

  },
  onPageScroll: function () {

  },
  //item(index,pagePath,text)
  onTabItemTap: function (item) {

  }
});