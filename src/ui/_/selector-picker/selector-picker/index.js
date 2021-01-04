/* eslint-disable no-console */
/* eslint-disable camelcase */

Component({
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
      console.log('selector-picker selector_show')
      if (this.properties.disabled) {
        return
      }
      const select = [this.properties.value]
      this.setData({select, show: true})
    },
    selector_cancle(e) {
      console.log('selector-picker selector_cancle')
      this.setData({show: false})
      this.triggerEvent('Cancle', e.detail)
    },
    selector_confirm() {
      console.log('selector-picker selector_confirm')
      this.setData({show: false})
      this.triggerEvent('Change', {value: this.data.value})
    },
    selector_change(e) {
      console.log('selector-picker selector_change')
      this.data.value = e.detail.value[0]
    }
  },
})
