/* eslint-disable camelcase */
import onekit_behavior from '../../../../behavior/onekit_behavior'
import wxs_behavior from '../../../../behavior/wxs_behavior'
import weixin_behavior from '../../../../behavior/weixin_behavior'

Component({
  behaviors: [onekit_behavior, wxs_behavior, weixin_behavior],
  options: {
    addGlobalClass: true,
  },
  methods: {
    view_tap(e) {
      this.triggerEvent('Tap', e.detail)
    }
  },
})
