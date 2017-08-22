Page({
  data: {
    goodsImg: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    goodsNum: 1,
    isCollect: false
  },
  numChange: function(event){
    var dataType = event.target.dataset.type
    var nowNum
    if(dataType === 'add') {
      nowNum = this.data.goodsNum - (-1)
      this.setData({
        goodsNum: nowNum
      })
    } else {
      if (this.data.goodsNum === 1) {
        wx.toast('受不了了，不能再少了')
      } else {
        nowNum = this.data.goodsNum - 1
        this.setData({
          goodsNum: nowNum
        })
      }
    }
  },
  collect: function(event) {
    this.setData({
      isCollent: true
    })
  },
  toOrderfill: function(event) {
    wx.navigateTo({
      url: '../orderfill/orderfill'
    })
  }
})