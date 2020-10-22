/* eslint-disable no-console */
import wx from '../../wx'

Component({
  mixins: [],
  data: {
    hideContact: true
  },
  attached() {},
  properties: {onekitId: {type: String, value: ''}},
  methods: {

    bindgetuserinfo(info) {
      console.log('[UI]', info)
      wx.getUserInfo({
        success(res) {
          this.triggerEvent('getuserinfo', res)
        }
      })
    },
    button_onTap(info) {
      console.log(info)
      console.log(this.properties)

    //    wx.getUserInfo({
    //            success(res){
    //         console.log("[API]",res);
    //         }
    //     });
    }
  }
})