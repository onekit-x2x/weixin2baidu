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
  },
  attached() {
    // this.data.appid
  },

  methods: {
    adCustom_load() {
      this.triggerEvent('Load')
    },
    adCustom_error(e) {
      this.triggerEvent('Error', e.detail)
    },
  }
})
