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
    selectable: {
      type: Boolean,
      value: false,
    },
    userSelect: {// 没去壳做不了
      type: Boolean,
      value: false
    },
    space: {
      type: String,
      value: '',
    },
    decode: {
      type: Boolean,
      value: false,
    },
    value: {
      type: String,
      value: '',
      observer(newVal) {
        const value = this.properties.decode ? this._decode(newVal) : newVal
        this.setData({value})
      }
    }
  },
  attached() {
    // let userSelect = this.properties.userSelect
    // if (userSelect === false) { userSelect = null }
    // this.setData({
    //   userSelect: 'inline-block'
    // })
  },
  methods: {
    _decode(str) {
      if (!str) return ''
      str = str.replace(/&nbsp;/g, ' ')
      str = str.replace(/&lt;/g, '<')
      str = str.replace(/&gt;/g, '>')
      str = str.replace(/&apos;/g, "'")
      str = str.replace(/&ensp;/g, ' ')
      str = str.replace(/&emsp;/g, '  ')
      str = str.replace(/&amp;/g, '&')
      return str
    }
  }
})
