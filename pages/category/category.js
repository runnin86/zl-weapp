const product = require('../../utils/product.js')
var app = getApp()

Page({
  data: {
    // items: null,
    // accountType: '',
    // categoryType: null,
    // categoryTypeId: null,
    // hot: 'top-hoverd-btn',
    // film: '',
    // book: '',
    // telv: '',
    // active: '',
    // music: '',
    // other: '',
    // other1: '',
    bigCate: [
      { bigItem: '彩妆', id: '1' },
      { bigItem: '装扮', id: '2' }
    ],
    cateItems: [
      { 
        item: '面膜', 
        id: '1', 
        parentId: '1', 
        src: '/assets/images/testGoods/test1.jpg'
      },
      { 
        item: '静态链接',
        id: '2', 
        parentId: '1',
        url: '/pages/cate_products/cate_products', 
        src: '/assets/images/testGoods/test2.jpg'
      },
      { 
        item: '测试2',
        id: '1',
        parentId: '2', 
        src: '/assets/images/testGoods/test1.jpg' 
      },
      { 
        item: '测试2', 
        id: '2', 
        parentId: '2', 
        src: '/assets/images/testGoods/test2.jpg' 
      }
    ]
  },

  onLoad: function () {
  },

  // onShow() {
  //   var that = this
  //   var cateType = app.globalData.currentCateType
  //   this.setData({ categoryType: cateType.typeName, categoryTypeId: cateType.typeId })
  //   if (app.globalData.currentCustomer) {
  //     var accountType = app.globalData.currentCustomer.account_type
  //     that.setData({ accountType: accountType })
  //   }

  //   product.getCategories(that.data.categoryTypeId, function (result) {
  //     var data = getApp().store.sync(result.data)
  //     that.setData({ items: data })
  //     wx.setStorage({
  //       key: `cate_${that.data.categoryType}`,
  //       data: data
  //     })
  //   }, function (fail) {
  //     var key = `cate_${that.data.categoryType}`
  //     var data = wx.getStorage(key)
  //     wx.setData({ items: data })
  //   })
  // },

  // bindTapProduct: function (e) {
  //   var that = this

  //   wx.navigateTo({
  //     url: `../show_product/show_product?id=${e.currentTarget.dataset.id}&type=${this.data.categoryType}`
  //   })
  // },
  // toHot: function () {
  //   console.log('hot');
  //   this.updateBtnStatus('hot');
  // },
  // toFilm: function () {
  //   console.log('film');
  //   this.updateBtnStatus('film');
  // },
  // toReadBook: function () {
  //   console.log('readbook');
  //   this.updateBtnStatus('book');
  // },
  // toTelv: function () {
  //   console.log('telv');
  //   this.updateBtnStatus('telv');
  // },
  // toActive: function () {
  //   console.log('active');
  //   this.updateBtnStatus('active');
  // },
  // toMusic: function () {
  //   console.log('music');
  //   this.updateBtnStatus('music');
  // },
  // toOther: function () {
  //   console.log('other');
  //   this.updateBtnStatus('other');
  // },
  // toOther1: function () {
  //   console.log('other1');
  //   this.updateBtnStatus('other1');
  // },
  // updateBtnStatus: function (k) {
  //   this.setData({
  //     hot: this.getHoverd('hot', k),
  //     film: this.getHoverd('film', k),
  //     book: this.getHoverd('book', k),
  //     telv: this.getHoverd('telv', k),
  //     active: this.getHoverd('active', k),
  //     music: this.getHoverd('music', k),
  //     other: this.getHoverd('other', k),
  //     other1: this.getHoverd('other1', k)
  //   });
  // },
  // getHoverd: function (src, dest) {
  //   return (src === dest ? 'top-hoverd-btn' : '');
  // }
})
