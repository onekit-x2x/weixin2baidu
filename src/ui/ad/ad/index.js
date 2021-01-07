/* eslint-disable no-console */
/* eslint-disable camelcase */
import onekit_behavior from '../../../behavior/onekit_behavior'
import wxs_behavior from '../../../behavior/wxs_behavior'
import weixin_behavior from '../../../behavior/weixin_behavior'

Component({
  behaviors: [onekit_behavior, wxs_behavior, weixin_behavior],
  options: {
    addGlobalClass: true,
  },
  data: {
    appid: ''
  },
  properties: {
    unitId: {
      type: String,
      value: ''
    },
    adIntervals: {
      type: String,
      value: ''
    },
    adType: {
      type: String,
      value: 'banner',
    },
    adTheme: {
      type: String,
      value: 'white',
    },
  },

  // 生命周期函数，可以为函数，或一个在methods段中定义的方法名
  attached() {
    // this.data.appid
  },

  detached() {},

  methods: {
    ad_load() {
      this.triggerEvent('Load')
    },
    ad_error(e) {
      this.triggerEvent('Error', e.detail)
    },
    ad_close() {
      this.triggerEvent('Close')
    }
  }
})
