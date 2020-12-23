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
  properties: {
    devicePosition: {
      type: String,
      value: 'back',
    },
    flash: {
      type: String,
      value: 'auto',
    },
  },


  methods: {
    camera_stop() {
      this.triggerEvent('stop')
    },
    camera_error() {
      this.triggerEvent('error')
    },
  }
})
