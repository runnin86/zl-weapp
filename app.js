//app.js
const jsonApi = require('utils/jsonapi-datastore/dist/jsonapi-datastore.js')
const md5Util = require('utils/md5.js')

App({
  onLaunch: function () {
    let that = this
    this.store = new (jsonApi.JsonApiDataStore)
    wx.login({
      success: function (res) {
        console.log("授权code:", res.code);
        that.request({
          url: `${that.globalData.API_URL}/wx_login.php`,
          data: {code: res.code},
          success: function (res) {
            console.log(1, res);
          },
          fail: function (res) {
            console.error(2, res)
          }
        })
      }
    })
    // //调用API从本地缓存中获取数据
    // var logs = wx.getStorageSync('logs') || []
    // logs.unshift(Date.now())
    // wx.setStorageSync('logs', logs)
    wx.checkSession({
      success: function () {
        //session 未过期，并且在本生命周期一直有效
        // 获取用户信息
        wx.getUserInfo({
          success: function (res) {
            console.log('授权用户:', res);
            that.globalData.userInfo = res.userInfo
            typeof cb == "function" && cb(that.globalData.userInfo)
          },
          fail: function () {
            // 显示提示弹窗
            wx.showModal({
              title: '警告',
              content: '若不授权微信登录，则无法使用购物功能；点击重新授权，则可重新使用购物功能',
              success: function (res) {
                if (res.confirm) {
                  wx.openSetting({
                    success: function (res) {
                      if (res.authSetting["scope.userInfo"] == true) {
                        wx.getUserInfo({
                          // withCredentials: false,
                          success: function (res) {
                            console.info("3成功获取用户返回数据");
                            that.globalData.userInfo = res.userInfo
                          },
                          fail: function () {
                            console.info("3授权失败返回数据");
                          }
                        });
                      }
                    },
                    fail: function () {
                      console.info("设置失败返回数据");
                    }
                  });
                } else if (res.cancel) {
                  console.log('用户点击取消')
                }
              }
            });
          }
        })
      },
      fail: function () {
        //登录态过期,重新登录
        wx.login({
          success: function (res) {
            console.log("授权code:", res.code);
            // // 获取openid和session_key
            // var sessionUrl = 'https://api.weixin.qq.com/sns/jscode2session?'
            // sessionUrl += 'appid=wxe1d6e322d43f4608'
            // sessionUrl += '&secret=ca18dc3b3495cea9e906d5a88011ed84'
            // sessionUrl += '&js_code=' + res.code
            // sessionUrl += '&grant_type=authorization_code'
            // wx.request({
            //   url: sessionUrl,
            //   data: {},
            //   header: {
            //     'content-type': 'application/json'
            //   },
            //   success: function (res) {
            //     console.log('获取openid和session_key:', res)
            //   }
            // })
          }
        })
      }
    })
  },
  request: function (obj) {
    var header = obj.header || {}
    if (!header['Content-Type']) {
      header['Content-Type'] = 'application/json'
    }
    if (!header['Authorization']) {
      header['Authorization'] = this.globalData.token
    }

    let uid = 0
    let timestamp = Date.parse(new Date()) / 1000
    let md5Str = md5Util.hexMD5(uid + '' + timestamp + 'YzG$ApI')
    let param = {
      uid: uid,
      timestamp: timestamp,
      sign: md5Str
    }
    Object.assign(param, obj.data || {})

    // This must be wx.request !
    wx.request({
      url: obj.url,
      data: param,
      method: obj.method || 'GET',
      header: header,
      success: function (res) {
        typeof obj.success == "function" && obj.success(res)
      },
      fail: obj.fail || function () { },
      complete: obj.complete || function () { }
    })
  },
  globalData: {
    userInfo: null,
    API_URL: 'http://api.xf66.com'
    // API_URL: 'https://rapi-staging.bayekeji.com'
  }
})

// {
//   "pagePath": "pages/stroll/stroll",
//     "iconPath": "assets/images/iconfont-gg.png",
//       "selectedIconPath": "assets/images/iconfont-gg-active.png",
//         "text": "逛逛"
// },