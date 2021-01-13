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
    headerText: {
      type: String,
      value: ''
    },
    mode: {
      type: String,
      value: 'selector'
    },
    disabled: {
      type: Boolean,
      value: false
    },
    range: {
      type: Array || Object,
      value: []
    },
    rangeKey: {
      type: String,
      value: ''
    },
    value: {
      type: Number || Array || String,
      value: null
    },
    start: {
      type: String,
      value: ''
    },
    end: {
      type: String,
      value: ''
    },
    fields: {
      type: String,
      value: 'day'
    },
    customItem: {
      type: String,
      value: ''
    },
  },
  attached() {
    if (this.properties.mode === 'selector') {
      this.properties.value = 0
    } else if (this.properties.mode === 'multiSelector') {
      this.properties.value = []
    } else if (this.properties.mode === 'time') {
      this.properties.value = ''
    } else if (this.properties.mode === 'date') {
      this.properties.value = '当天'
    } else if (this.properties.mode === 'region') {
      this.properties.value = []
    }
  },

  methods: {
    picker_cancel(e) {
      this.triggerEvent('Cancel', e.detail)
    },
    picker_change(e) {
      this.triggerEvent('Change', e.detail)
    },
    picker_columnchange(e) {
      this.triggerEvent('Columnchange', e.detail)
    },
  }
})
