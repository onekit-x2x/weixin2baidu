/* eslint-disable no-console */
import wx from '../../wx'

/* eslint-disable no-console */
/* eslint-disable camelcase */
import onekit_behavior from '../../behavior/onekit_behavior'
import wxs_behavior from '../../behavior/wxs_behavior'
import weixin_behavior from '../../behavior/weixin_behavior'

Component({
  behaviors: [onekit_behavior, wxs_behavior, weixin_behavior],
  options: {
    addGlobalClass: true,
  },
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
