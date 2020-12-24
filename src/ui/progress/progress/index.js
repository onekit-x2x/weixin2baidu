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
    percent: {
      type: Number,
      value: null,
    },
    showInfo: {
      type: Boolean,
      value: false,
    },
    borderRadius: {
      type: Number || String,
      value: '0',
    },
    fontSize: {
      type: Number || String,
      value: '16',
    },
    strokeWidth: {
      type: Number || String,
      value: '6',
    },
    color: {
      type: String,
      value: '',
    },
    activeColor: {
      type: String,
      value: '#09BB07',
    },
    backgroundColor: {
      type: String,
      value: '#EBEBEB',
    },
    active: {
      type: Boolean,
      value: false,
    },
    activeMode: {
      type: String,
      value: '#backwards',
    },
    duration: {
      type: Number,
      value: 30,
    },
  },
  attached() {
    let activeColor
    const curPercent = this.properties.percent
    const timestamp = this.properties.duration * this.properties.percent
    //
    if (this.properties.color) {
      activeColor = this.properties.color
    } else if (this.properties.activeColor) {
      activeColor = this.properties.activeColor
    } else {
      activeColor = '09BB07'
    }

    if (curPercent) {
      setTimeout(() => {
        this.trigger_Activeend(parseInt(curPercent, 10))
      }, timestamp)
    }
    this.setData({activeColor})
  },
  methods: {
    trigger_Activeend(curPercent) {
      this.triggerEvent('activeend', {curPercent})
    }
  }
})
