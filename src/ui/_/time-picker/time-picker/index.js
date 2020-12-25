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
  data: {},
  properties: {
    headerText: {
      type: String,
      value: ''
    },
    disabled: {
      type: Boolean,
      value: false
    },
    range: {
      type: Array,
      value: []
    },
    value: {
      type: String,
      value: '00:00'
    },
    start: {
      type: String,
      value: ''
    },
    end: {
      type: String,
      value: ''
    },
  },
  attached() {
    const hours = []
    for (let h = 0; h < 24; h++) {
      const hour = h >= 10 ? h : ('0' + h)
      hours.push(hour)
    }
    const minutes = []
    for (let m = 0; m < 60; m++) {
      const minute = m >= 10 ? m : ('0' + m)
      minutes.push(minute)
    }
    this.setData({hours, minutes})
  },
  methods: {
    time_show() {
      if (this.properties.disabled) {
        return
      }
      let time = this.properties.value.split(':')
      time = [parseInt(time[0], 10), parseInt(time[1], 10)]
      this.setData({time, show: true})
    },
    time_cancle(e) {
      this.setData({show: false})
      this.triggerEvent('Cancle', e.detail)
    },
    time_confirm(e) {
      this.setData({show: false})
      this.triggerEvent('Change', e.detail)
    },
    time_change(e) {
      const current = e.detail.value
      let h = current[0]; h = h >= 10 ? h : ('0' + h)
      let m = current[1]; m = m >= 10 ? m : ('0' + m)
      const value = `${h}:${m}`
      if (this.properties.start) {
        if (value < this.properties.start) {
          let time = this.properties.start.split(':')
          time = [parseInt(time[0], 10), parseInt(time[1], 10)]
          this.setData({value: this.properties.start, time})
          return
        }
      }
      if (this.properties.end) {
        if (value > this.properties.end) {
          let time = this.properties.end.split(':')
          time = [parseInt(time[0], 10), parseInt(time[1], 10)]
          this.setData({value: this.properties.end, time})
          return
        }
      }
      this.data.value = value
    }
  },
})
