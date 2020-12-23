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
    nodes: {
      type: Array || String,
      value: '',
    },
    // 做不了
    space: {
      type: String,
      value: '',
    },
  },
  attached() {
    const space = this.properties.space
    let nodes = this.properties.nodes
    if (!space) {
      nodes = null
    }
    switch (space) {
      case 'ensp':
        nodes = ' '
        break
      case 'emsp':
        nodes = '  '
        break
      case 'nbsp':
        nodes = '  '
        break
      default:
        break
    }
    console.log(nodes)
    this.setData({
      nodes
    })
  },

  detached() {},

  methods: {
  }
})
