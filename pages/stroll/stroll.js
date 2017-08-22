var util = require('../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    logs: [],
    all: 'top-hoverd-btn',
    video: '',
    image: '',
    name: 'all'
  },
  toAll: function () {
    console.log('all');
    this.updateBtnStatus('all');
  },
  toVideo: function () {
    console.log('video');
    this.updateBtnStatus('video');
  },
  toImage: function () {
    console.log('image');
    this.updateBtnStatus('image');
  },
  updateBtnStatus: function (k) {
    this.setData({
      all: this.getHoverd('all', k),
      video: this.getHoverd('video', k),
      image: this.getHoverd('image', k),
      name: k
    });
  },
  getHoverd: function (src, dest) {
    return (src === dest ? 'top-hoverd-btn' : '');
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(function (log) {
        return util.formatTime(new Date(log))
      })
    });
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

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  }
})