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

  },
  properties: {
    type: {
      type: String,
      value: '2d'
    },
    canvasId: {
      type: String,
      value: '',
    },
    disableScroll: {
      type: Boolean,
      value: false,
    },
  },
  methods: {
    canvas_touchstart() {
      this.triggerEvent('Touchstart')
    },
    canvas_touchmove() {
      this.triggerEvent('Touchmove')
    },
    canvas_touchend() {
      this.triggerEvent('Touchend')
    },
    canvas_touchcancel() {
      this.triggerEvent('Touchcancel')
    },
    canvas_longtap() {
      this.triggerEvent('Longtap')
    },
    canvas_error(e) {
      this.triggerEvent('Error', e.detail)
    },
  }
})
