// cate_products.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    show_list: false,
    checked: '1',
    tab_arrow: true,
    checknum: '1',
    integrativeList: [
      { list: '综合排序', id: '1' },
      { list: '新品优先', id: '2' }
    ],
    classifyList: [
      { listName: '综合', id: '1' },
      { listName: '销量', id: '2' },
      { listName: '价格', id: '3' }
    ],
    arrow: '',
    goodsList: [
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
    sortsList: [
      { name: '护理保健', id: '1' },
      { name: '深海少女', id: '2' }
    ],
    smallSortChecked: '0'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },
  /**
   * 类别选择
   */
  classifyCheck: function (event) {
    let id = event.currentTarget.id;
    if (id === '1') {
      if (this.data.checked === '1') {
        this.showList()
      }
      this.setData({
        checked: '1',
        arrow: ''
      })
    } else if (id === '2') {
      this.setData({
        checked: '2',
        show_list: false,
        tab_arrow: true,
        arrow: ''
      })
    } else if (id === '3') {
      if (this.data.checked === '3') {
        this.swichArrow()
      }
      this.setData({
        checked: '3',
        show_list: false,
        tab_arrow: true
      })
    }
  },
  /**
   * 小分类选择
   */
  smallSortChoose: function (event) {
    let id = event.currentTarget.id;
    if (id === '1') {
      this.setData({
        smallSortChecked: '1'
      })
    } else if (id === '2') {
      this.setData({
        smallSortChecked: '2'
      })
    } else {
      this.setData({
        smallSortChecked: '0'
      })
    }
  },
  /**
   * 展示综合列表
   */
  showList: function () {
    if (this.data.checked === '1' && !this.data.show_list) {
      this.setData({
        show_list: true,
        tab_arrow: false
      }) 
    } else if (this.data.checked === '1' && this.data.show_list) {
      this.setData({
        show_list: false,
        tab_arrow: true
      })
    } else {
      console.log('wrong')
    }
  },
  /**
   * 综合列表选择
   */
  listCheck: function (event) {
    let id = event.currentTarget.id;
    if (id === '2') {
      this.setData({
        checknum: '2',
        show_list: false,
        tab_arrow: true,
        classifyList: [
          { listName: '新品', id: '1' },
          { listName: '销量', id: '2' },
          { listName: '价格', id: '3' }
        ]
      })
    } else if (id === '1') {
      this.setData({
        checknum: '1',
        show_list: false,
        tab_arrow: true,
        classifyList: [
          { listName: '综合', id: '1' },
          { listName: '销量', id: '2' },
          { listName: '价格', id: '3' }
        ]
      })
    }
  },
  /**
   * 价格箭头切换
   */
  swichArrow: function () {
    if (this.data.arrow) {
      this.setData({
        arrow: ''
      })
    } else {
      this.setData({
        arrow: 'arrow'
      })
    }
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
  
  }
})