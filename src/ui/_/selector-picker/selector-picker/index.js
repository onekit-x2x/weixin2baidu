/* eslint-disable no-console */
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
    },
    range: {
      type: Array || Object,
      value: []
    },
    'range-key': {
      type: String,
      value: ''
    },
    value: {
      type: Number,
      value: 0
    },
    disabled: {
      type: Boolean,
      value: false
    }
  },
  methods: {
    selector_show() {
      if (this.properties.disabled) {
        return
      }
      const select = [this.properties.value]
      this.setData({select, show: true})
    },
    selector_cancle(e) {
      this.setData({show: false})
      this.triggerEvent('Cancle', e.detail)
    },
    selector_confirm() {
      this.setData({show: false})
      this.triggerEvent('Change', {value: this.data.value})
    },
    selector_change(e) {
      this.data.value = e.detail.value[0]
    }
  },
})
