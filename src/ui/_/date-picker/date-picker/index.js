/* eslint-disable camelcase */
import DATE from 'oneutil/DATE'

import onekit_behavior from '../../../../behavior/onekit_behavior'
import wxs_behavior from '../../../../behavior/wxs_behavior'
import weixin_behavior from '../../../../behavior/weixin_behavior'

const YEAR_START = 1900
const YEAR_END = 2100
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
    disabled: {
      type: Boolean,
      value: false
    },
    range: {
      type: Array || Object,
      value: [],
    },
    value: {
      type: String,
      value: new Date().toDateString()
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
    const years = []
    for (let y = YEAR_START; y <= YEAR_END; y++) {
      const year = y
      years.push(`${year}年`)
    }
    const months = []
    for (let m = 1; m <= 12; m++) {
      const month = m >= 10 ? m : ('0' + m)
      months.push(`${month}月`)
    }
    this.setData({years, months})
  },
  methods: {
    updateDays() {
      const value = (this.data.value || this.properties.value).split('-')
      const days = []
      const dayCount = DATE.monthDays(value[0], value[1])
      for (let d = 1; d <= dayCount; d++) {
        const day = d >= 10 ? d : ('0' + d)
        days.push(`${day}日`)
      }
      this.setData({days})
    },
    date_show() {
      if (this.properties.disabled) {
        return
      }
      let date = this.properties.value.split('-')
      date = [date[0] - YEAR_START, date[1] - 1, date[2] - 1]
      this.setData({date, show: true})
      this.updateDays()
    },
    date_cancle(e) {
      this.setData({show: false})
      this.triggerEvent('Cancle', e.detail)
    },
    date_confirm(e) {
      this.setData({show: false})
      this.triggerEvent('Change', e.detail)
    },
    date_change(e) {
      const current = e.detail.value
      const y = current[0] + YEAR_START
      let m = current[1] + 1; m = m >= 10 ? m : ('0' + m)
      let d = current[2] + 1; d = d >= 10 ? d : ('0' + d)
      const value = `${y}-${m}-${d}`
      if (this.properties.start) {
        if (value < this.properties.start) {
          let date = this.properties.start.split('-')
          date = [date[0] - YEAR_START, date[1] - 1, date[2] - 1]
          this.setData({value: this.properties.start, date})
          return
        }
      }
      if (this.properties.end) {
        if (value > this.properties.end) {
          let date = this.properties.end.split('-')
          date = [date[0] - YEAR_START, date[1] - 1, date[2] - 1]
          this.setData({value: this.properties.end, date})
          return
        }
      }
      this.data.value = value
      this.updateDays()
    }
  },
})
