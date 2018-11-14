//Page Object
// 导入 工具函数
let tool = require('../../utils/util');
Page({
  data: {
    // 歌曲列表
    searchList: [],
    // 歌名
    songName: '',
    // 获取 歌手名
    singer: '',
    // 获取专辑的封面
    cover: '',
    // 定义歌曲的播放状态
    playState: false
  },
  // 搜索歌曲
  search(event) {
    // 获取输入的内容
    // console.log(event.detail.value);
    // 查询歌曲
    tool.myPro({
      url: `/search?keywords=${event.detail.value}`
    }).then(result => {
      // console.log(result);
      this.setData({
        searchList: result.data.result.songs
      })
    })
  },
  // 播放歌曲
  play(event) {
    // console.log(event);
    // 获取歌曲id
    let id = event.currentTarget.dataset.id;
    // console.log(id);
    // 根据id获取歌曲的url
    // tool.myPro({
    //   url:`/song/url?id=${id}`
    // }).then(result=>{
    //   // console.log(result);
    //   // 播放歌曲 
    //   // 获取 唯一的 音乐播放器
    //   var backAudioManager = wx.getBackgroundAudioManager();
    //   // 设置src 进行播放
    //   backAudioManager.src = result.data.data[0].url;
    // })
    let p1 = tool.myPro({
      url: `/song/url?id=${id}`
    })
    let p2 = tool.myPro({
      url: `/song/detail?ids=${id}`
    })

    // 获取 歌曲详情
    Promise.all([p1, p2]).then(resultList => {
      // console.log(resultList);
      // 播放歌曲
      var backAudioManager = wx.getBackgroundAudioManager();
      // 设置src 进行播放
      backAudioManager.src = resultList[0].data.data[0].url;
      // 切换播放状态为 true
      this.setData({
        playState: true
      })

      // 获取 歌名
      let songName = resultList[1].data.songs[0].name;
      // 获取 歌手名
      let singer = resultList[1].data.songs[0].ar[0].name
      // 获取专辑的封面
      let cover = resultList[1].data.songs[0].al.picUrl

      // 数据绑定
      this.setData({
        songName,
        // 获取 歌手名
        singer,
        // 获取专辑的封面
        cover
      })

      // 设置给 播放器的各项属性
      backAudioManager.title = songName;
      backAudioManager.singer = singer;
      backAudioManager.coverImgUrl = cover;
    })
  },
  // 切换播放状态
  togglePlay() {
    // 控制歌曲播放
    // 播放器对象
    var backAudioManager = wx.getBackgroundAudioManager();
    // 切换播放状态
    // console.log(backAudioManager.paused);
    this.setData({
      playState: backAudioManager.paused
    })
    if (backAudioManager.paused == true) {
      // 正在暂停
      // 播放
      backAudioManager.play();


    } else {
      backAudioManager.pause();
    }

  },
  //options(Object)
  onLoad: function (options) {

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