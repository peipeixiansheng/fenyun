//Page Object
let tool = require('../../utils/util');
Page({
  data: {

  },
  //options(Object)
  onLoad: function (options) {
    // 创建音频播放器上下文
    // 这个播放音频的api 存在 切换页面继续播放
    // 无法在模拟器控制播放
    // 以及 播放状态跟接口返回属性不同的问题
    // let player =  wx.createInnerAudioContext()
    // player.src = 'http://m10.music.126.net/20181027153013/4279bca02304f8ba1915ec731ad2c5f9/ymusic/0fd6/4f65/43ed/a8772889f38dfcb91c04da915b301617.mp3';
    // player.autoplay = true;

    // 我们一般使用的是 一个 背景音乐播放
    let playBgc = wx.getBackgroundAudioManager();
    playBgc.src = 'http://m10.music.126.net/20181027153013/4279bca02304f8ba1915ec731ad2c5f9/ymusic/0fd6/4f65/43ed/a8772889f38dfcb91c04da915b301617.mp3';

    // 接口测试
    var reqTask = wx.request({
      url: 'http://is.snssdk.com/api/news/feed/v51/?category=news_hot&refer=1&count=20&min_behot_time=1491981025&last_refresh_sub_entrance_interval=1491981165&loc_mode=&loc_time=1491981000&latitude=&longitude=&city=&tt_from=pull&lac=&cid=&cp=&iid=0123456789&device_id=12345678952&ac=wifi&channel=&aid=&app_name=&version_code=&version_name=&device_platform=&ab_version=&ab_client=&ab_group=&ab_feature=&abflag=3&ssmix=a&device_type=&device_brand=&language=zh&os_api=&os_version=&openudid=1b8d5bf69dc4a561&manifest_version_code=&resolution=&dpi=&update_version_code=&_rticket=',
      data: {},
      header: {
        'content-type': 'application/json'
      },
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: (result) => {
        console.log(result);
      },
      fail: () => {},
      complete: () => {}
    });

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