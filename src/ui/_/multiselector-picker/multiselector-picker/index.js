/* eslint-disable camelcase */
import onekit_behavior from '../../../../behavior/onekit_behavior'
import wxs_behavior from '../../../../behavior/wxs_behavior'
import weixin_behavior from '../../../../behavior/weixin_behavior'

Component({
  behaviors: [onekit_behavior, wxs_behavior, weixin_behavior],
  options: {
    addGlobalClass: true,
  },
  data: {
    value: []
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
      type: Array,
      value: []
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
      const select = []
      for (const v of this.properties.value) {
        select.push([v])
      }
      this.setData({select, show: true})
    },
    selector_cancle(e) {
      this.setData({show: false})
      this.triggerEvent('Cancle', e.detail)
    },
    selector_confirm(e) {
      this.setData({show: false})
      this.triggerEvent('Change', e.detail)
    },
    selector_change(e) {
      const value = e.detail.value[0]
      const column = e.currentTarget.dataset.index
      this.data.value[column] = value
      this.triggerEvent('Columnchange', e.detail)
    }
  },
})
