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
    // const timestamp = this.properties.duration * this.properties.percent
    //
    if (this.properties.color) {
      activeColor = this.properties.color
    } else if (this.properties.activeColor) {
      activeColor = this.properties.activeColor
    } else {
      activeColor = '09BB07'
    }

    // swan.createSelectorQuery().select('.onekit-progress').boundingClientRect(rect => {
    //   if (this.properties.active) {
    //     const activeend = {
    //       currentTarget: {
    //         dataset: {},
    //         id: '',
    //         offsetLeft: rect.left,
    //         offsetTop: rect.right,
    //       },
    //       detail: {
    //         curPercent: this.properties.percent
    //       },
    //       mark: {},
    //       mut: false,
    //       target: {
    //         dataset: {},
    //         id: '',
    //         offsetLeft: rect.left,
    //         offsetTop: rect.right,
    //       },
    //       timeStamp: timestamp,
    //       type: 'activeend',
    //       _userTap: false
    //     }
    //     if (activeend) {
    //       setTimeout(() => {
    //         this.trigger_Activeend('activeend', activeend)
    //       }, timestamp)
    //     }
    //   }
    // }).exec()
    this.setData({activeColor})
  },
  methods: {
    trigger_Activeend(e) {
      console.log('trigger_Activeend', e)
      this.triggerEvent('Activeend', e.details)
    }
  }
})
