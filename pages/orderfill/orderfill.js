Page({
  data: {
    editState: 'noEdit',
    addList: [
      {consignee: '胡洋洋', mobile: '15811088017', idCard: '150425199410174222', province: '安徽省-芜湖市-三山区', address: '碧桂园', id: '1', checked: 'true'},
      { consignee: '胡洋洋22', mobile: '15811088016', idCard: '150425199410174223', province: '河北省-邯郸市-大名县', address: '龙王庙', id: '2'}
    ]
  },
  editOn: function(e){
    this.setData({
      editState: 'edit'
    })
  },
  saveAddById: function(e) {
    this.setData({
      editState: 'noEdit'
    })
  },
  toSubmit: function(e) {
    wx.navigateTo({
      url: '../orderSubmit/orderSubmit'
    })
  }
})