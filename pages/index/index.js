const productUtil = require('../../utils/product.js')
var app = getApp()

Page({
  data: {
    items: [],
    slides: [],
    popularity_products: [],
    new_products: [],
    hot_products: [
      { 
        imgSrc: '/assets/images/floorBanner/food.jpg', 
        discount: '7折', 
        brief: '的说法都是减肥', 
        detail: '描述商品信息商品名称',
        promotePrice: '￥400', 
        originPrice: '￥600', 
        hotId: 0 
      }
    ],
    floorGoods: [
      { 
        imgSrc: '/assets/images/testGoods/test1.jpg', 
        title: '斯柯达收款方的看法', 
        brief: '静态链接', 
        goods_url: '/pages/goods/goods', 
        originPrice: '￥40.00', 
        promotePrice: '￥30.00', 
        gid: '1' 
      },
      { 
        imgSrc: '/assets/images/testGoods/test2.jpg', 
        title: '斯柯达收款的说法是否是否收到的方法是大大大说的方的看法', 
        brief: '读书卡圣诞节疯狂啦贷款', 
        goods_url: '/pages/goods/goods', 
        originPrice: '￥8000.00', 
        promotePrice: '￥1000.00', 
        gid: '2' 
      }
    ],
    promotions: [],
    navs_slide: [
      { nav: "首页", navId: 0 },
      { nav: "美妆", navId: 1 },
      { nav: "食品", navId: 2 },
      { nav: "家居", navId: 3 },
      { nav: "保健", navId: 4 },
      { nav: "旅行", navId: 5 }
    ]
  },

  onShareAppMessage: function () {
    return {
      title: "巴爷供销社",
      desc: "商城首页",
      path: `pages/index/index`
    }
  },

  bindShowProduct: function (e) {
    wx.navigateTo({
      url: `../show_product/show_product?id=${e.currentTarget.dataset.id}`
    })
  },

  catchTapCategory: function (e) {
    var data = e.currentTarget.dataset
    app.globalData.currentCateType = { typeName: data.type, typeId: data.typeid }
    wx.navigateTo({
      url: `../category/category`
    })
  },

  onPullDownRefresh: function () {
    // this.getSlidesFromServer()
    // this.getProductsFromServer()
    wx.stopPullDownRefresh()
  },

  onLoad: function () {
    var that = this

    wx.getStorage({
      key: 'products',
      success: function (res) {
        var data = res.data
        // that.setData({
        //   items: data,
        //   popularity_products: data.filter(product => (product.flag === '最热' && product['promotion-url'])),
        //   new_products: data.filter(product => (product.flag === '新品' && product['promotion-url'])),
        //   hot_products: data.filter(product => (product.flag === '火爆' && product['promotion-url'])),
        // })
      },
      fail: function () { },
      complete: function () { }
    })

    wx.getStorage({
      key: 'indexSlides',
      success: function (res) {
        that.setData({ 'slides': res.data })
      },
      fail: function () { },
      complete: function () { }
    })
  },

  onReady: function () {
    // this.getProductsFromServer()
    // this.getSlidesFromServer()
    this.getCategory()
    // this.getStoreIndex()
  },

  getCategory: function () {
    let that = this
    app.request({
      url: `${app.globalData.API_URL}/get_category.php`,
      success: ({data: {errcode, data, msg}}) => {
        // console.log(data)
        if (errcode === 0) {
          console.log(data)
          that.setData({
            navs_slide: data.parent_cat
          })
        } else {
          console.error(msg)
        }
      },
      fail: function () {
        console.log('failed')
      }
    })
  },

  getStoreIndex: function () {
    app.request({
      url: `${app.globalData.API_URL}/store_index.php`,
      success: ({data: {errcode, data, msg}}) => {
        console.log(data)
        if (errcode === 0) {
          console.log(data)
        } else {
          console.error(msg)
        }
      },
      fail: function () { 
        console.log('failed')
      }
    })
  }

  // getSlidesFromServer: function () {
  //   var that = this
  //   productUtil.getSlides(function (result) {
  //     var data = app.store.sync(result.data)
  //     that.setData({ 'slides': data })
  //     wx.setStorage({
  //       key: 'indexSlides',
  //       data: data
  //     })
  //   })
  // }

  // getProductsFromServer: function () {
  //   var that = this
  //   productUtil.getProducts(function (result) {
  //     var data = app.store.sync(result.data)
  //     that.setData({
  //       items: data,
  //       popularity_products: data.filter(product => (product.flag === '最热' && product['promotion-url'])),
  //       new_products: data.filter(product => (product.flag === '新品' && product['promotion-url'])),
  //       hot_products: data.filter(product => (product.flag === '火爆' && product['promotion-url'])),
  //     })
  //     wx.setStorage({
  //       key: 'products',
  //       data: data
  //     })
  //   })
  // }
})
