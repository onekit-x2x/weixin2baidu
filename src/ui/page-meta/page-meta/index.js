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
  onPullDownRefresh() {
    if (this.properties.backgroundTextStyle) {
      swan.startPullDownRefresh({
        success: () => {
          const textStyle = this.data.textStyle
          swan.setBackgroundTextStyle({
            textStyle,
            success: () => {
              if (textStyle === 'dark') {
                this.setData('textStyle', 'light')
              } else {
                this.setData('textStyle', 'dark')
              }
            }
          })
        }
      })
    }
  },
  attached() {
    //
    if (this.properties.backgroundColor && this.properties.backgroundColortop && this.properties.backgroundColorBottom) {
      swan.setBackgroundColor({
        backgroundColor: this.properties.backgroundColor,
        backgroundColorTop: this.properties.backgroundColortop,
        backgroundColorBottom: this.properties.backgroundColorBottom
      })
    }
    //
    if (this.properties.scrollTop && this.properties.scrollDuration) {
      swan.pageScrollTo({
        scrollTop: this.properties.scrollTop,
        duration: this.properties.scrollDuration
      })
    }
    //
    let windowWidth
    let windowHeight
    swan.getSystemInfo({
      success(res) {
        windowWidth = res.windowWidth
        windowHeight = res.windowHeight
      }
    })
    this._trigger_resize({
      windowWidth,
      windowHeight
    })
  },

  detached() {},

  methods: {
    _trigger_resize(e) {
      this.triggerEvent('Resize', e.detail)
    },
    matchMedia_scroll(e) {
      this.triggerEvent('Scroll', e.detail.scrollTop)
    },
    _trigger_scrolldone() {
      this.triggerEvent('Scrolldone')
    },
  }
})
