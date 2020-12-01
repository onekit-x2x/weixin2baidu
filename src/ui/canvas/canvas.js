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

  },
  properties: {

    canvasonekitId: {
      type: String,
      value: '',
    },
    disableScroll: {
      type: Boolean,
      value: false,
    },
  },
  methods: {
    canvas_start(e) {
      console.log('canvas_start', e)
      this.triggerEvent('touchstart', e.details)
    },
    canvas_move(e) {
      console.log('canvas_move', e)
      this.triggerEvent('touchmove', e.details)
    },
    canvas_end(e) {
      console.log('canvas_end', e)
      this.triggerEvent('touchend', e.details)
    },
    canvas_cancel(e) {
      console.log('canvas_cancel', e)
      this.triggerEvent('touchcancel', e.details)
    },
    canvas_tap(e) {
      console.log('canvas_tap', e)
      this.triggerEvent('longtap', e.details)
    },
    canvas_error(e) {
      console.log('canvas_error', e)
      this.triggerEvent('error', e.details)
    },
  }
})
