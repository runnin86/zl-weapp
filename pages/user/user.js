//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    userInfo: {},
    userListInfo: [{
      icon: 'icon-yzg-gerenxinxi',
      text: '收货地址',
      unreadNum: 2
    }, {
      icon: 'icon-yzg-liulanjilu',
      text: '浏览记录'
    }, {
      icon: 'icon-yzg-shoucang1',
      text: '我的收藏',
      unreadNum: 1
    }, {
    //   icon: 'icon-yzg-youhuiquan',
    //   text: '我的优惠券',
    //   unreadNum: 1
    // }, {
    //   icon: 'icon-yzg-aaa',
    //   text: '我的团购',
    //   unreadNum: 2
    // }, {
      icon: 'icon-yzg-icon052',
      text: '售后服务'
    // }, {
    //   icon: 'icon-yzg-womendetuandui',
    //   text: '关于我们'
    }]
  }, 
  onLoad: function () {
    // 调用应用实例的方法获取全局数据
    this.setData({
      userInfo: app.globalData.userInfo
    })
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onReady() {
    var title = '个人中心';
    wx.setNavigationBarTitle({ title: title })
  },
  goOrder: function (e) {
    console.log('进入点击事件', e.currentTarget.dataset.id);
    wx.navigateTo({
      url: `../order/order?id=${e.currentTarget.dataset.id}`
    })
  }
})
