/* eslint-disable max-len */
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
  data: {
    textStyle: 'dark',
  },
  properties: {
    backgroundTextStyle: {
      type: String,
      value: ''
    },
    backgroundColor: {
      type: String,
      value: ''
    },
    backgroundColortop: {
      type: String,
      value: ''
    },
    backgroundColorBottom: {
      type: String,
      value: ''
    },
    // 做不了
    rootBackgroundColor: {
      type: String,
      value: ''
    },
    scrollTop: {
      type: String,
      value: ''
    },
    //
    scrollDuration: {
      type: String,
      value: ''
    },
    // 做不了
    pageStyle: {
      type: String,
      value: ''
    },
    // 做不了
    bodyFontSize: {
      type: String,
      value: ''
    },
    // 做不了
    rootFontSize: {
      type: String,
      value: ''
    },
    // 做不了
    pageOrientation: {
      type: String,
      value: ''
    }
  },
  attached() {
    if (this.properties.backgroundTextStyle) {
      swan.startPullDownRefresh({
        success: res => {
          console.log('startPullDownRefresh success', res)
          const textStyle = this.data.textStyle
          swan.setBackgroundTextStyle({
            textStyle,
            success: () => {
              console.log('setBackgroundTextStyle success')
              if (textStyle === 'dark') {
                this.setData('textStyle', 'light')
              } else {
                this.setData('textStyle', 'dark')
              }
            },
            fail: err => {
              console.log('setBackgroundTextStyle fail', err)
            }
          })
        },
        fail: err => {
          console.log('startPullDownRefresh fail', err)
        }
      })
    }
    //
    if (this.properties.backgroundColor && this.properties.backgroundColortop && this.properties.backgroundColorBottom) {
      swan.setBackgroundColor({
        backgroundColor: this.properties.backgroundColor,
        backgroundColorTop: this.properties.backgroundColortop,
        backgroundColorBottom: this.properties.backgroundColorBottom
      })
    }
  },

  detached() {},

  methods: {
    matchMedia_scroll(e) {
      this.triggerEvent('Scroll', e.detail.scrollTop)
    },
    trigger_scrolldone() {
      this.triggerEvent('Scrolldone')
    }
  }
})
