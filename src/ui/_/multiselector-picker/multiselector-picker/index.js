/* eslint-disable no-console */
/* eslint-disable camelcase */

Component({
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
      console.log('multiselector-picker selector_show')
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
      console.log('multiselector-picker selector_cancle')
      this.setData({show: false})
      this.triggerEvent('Cancle', e.detail)
    },
    selector_confirm(e) {
      console.log('multiselector-picker selector_confirm')
      this.setData({show: false})
      this.triggerEvent('Change', e.detail)
    },
    selector_change(e) {
      console.log('multiselector-picker selector_change')
      const value = e.detail.value[0]
      const column = e.currentTarget.dataset.index
      this.data.value[column] = value
      this.triggerEvent('Columnchange', e.detail)
    }
  },
})
