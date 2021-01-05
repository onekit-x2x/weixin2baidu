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
    min: {
      type: Number,
      value: 0,
    },
    max: {
      type: Number,
      value: 100,
    },
    step: {
      type: Number,
      value: 1,
    },
    disabled: {
      type: Boolean,
      value: false,
    },
    value: {
      type: Number,
      value: 0,
    },
    color: {
      type: String,
    },
    selectedColor: {
      type: String,
    },
    activeColor: {
      type: String,
      value: '#1aad19',
    },
    backgroundColor: {
      type: String,
      value: '#e9e9e9',
    },
    blockSize: {
      type: Number,
      value: 28,
    },
    blockColor: {
      type: String,
      value: '#ffffff',
    },
    showValue: {
      type: Boolean,
      value: false,
    },
  },
  methods: {
    slider_change(e) {
      this.triggerEvent('Change', e.detail)
    },
    slider_changing(e) {
      this.triggerEvent('Changing', e.detail)
    },
  }
})
