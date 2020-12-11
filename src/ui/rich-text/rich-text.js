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
    nodes: {
      type: Array || String,
      value: '',
    },
    space: {
      type: String,
      value: '',
    },
    value: {
      type: String,
      value: '',
      observer(newVal) {
        const value = this.properties.space ? this._space(newVal) : newVal
        this.setData({value})
      }
    }
  },
  attached() {

  },

  detached() {},

  methods: {
    _space() {
      let space = this.properties.space
      if (!space) return ''
      space = space.replace(/&ensp;/g, ' ')
      space = space.replace(/&emsp;/g, '  ')
      space = space.replace(/&nbsp;/g, ' ')
      return space
    }
  }
})
