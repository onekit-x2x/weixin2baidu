/* eslint-disable camelcase */
import onekit_behavior from '../../../../behavior/onekit_behavior'
import wxs_behavior from '../../../../behavior/wxs_behavior'
import weixin_behavior from '../../../../behavior/weixin_behavior'

Component({
  behaviors: [onekit_behavior, wxs_behavior, weixin_behavior],
  options: {
    addGlobalClass: true,
  },
  properties: {
    headerText: {
      type: String,
      value: ''
    }
  },
  methods: {
    cancle_tap(e) {
      this.triggerEvent('Cancle', e.detail)
    },
    confirm_tap(e) {
      this.triggerEvent('Confirm', e.detail)
    },
  },
})
