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
    mode: {
      type: String,
      value: 'normal'
    },
    // 做不了
    resolution: {
      type: String,
      value: 'medium'
    },
    devicePosition: {
      type: String,
      value: 'back',
    },
    flash: {
      type: String,
      value: 'auto',
    },
    // 做不了
    frameSize: {
      type: String,
      value: 'medium'
    },
  },
  attached() {
    const mode = this.properties.mode
    if (mode === 'scanCode') {
      swan.scanCode({
        success: res => {
          console.log('scanCode success', res)
          this.trigger_scancode()
        },
        fail: err => {
          console.log('scanCode fail', err)
        }
      })
    }
  },

  methods: {
    camera_stop() {
      this.triggerEvent('stop')
    },
    camera_error() {
      this.triggerEvent('error')
    },
    // 做不了
    trigger_initdone(e) {
      this.triggerEvent('Initdone', e.detail)
    },
    trigger_scancode() {
      this.triggerEvent('Scancode')
    }
  }
})
