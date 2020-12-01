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
  data: {

  },
  properties: {
    onekitId: {type: String, value: ''},
    onekitClass: {type: String, value: ''},
    onekitStyle: {type: String, value: ''},
    title: {
      type: String
    },
    loading: {
      type: Boolean,
      value: false
    },
    frontColor: {
      type: String
    },
    backgroundColor: {
      type: String
    },
    colorAnimationDuration: {
      type: Number,
      value: 0
    },
    colorAnimationTimingFunc: {
      type: Number,
      value: 'linear'
    },

  },
  methods: {

  }
})
