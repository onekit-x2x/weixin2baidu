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
    // onekitId: {type: String, value: ''},
    // onekitClass: {type: String, value: ''},
    // onekitStyle: {type: String, value: ''},
    percent: {
      type: Number,
      value: '',
    },
    showInfo: {
      type: Boolean,
      value: false,
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
    borderRadius: {
      type: String,
      value: '0',
    },
    fontSize: {
      type: Number,
      value: 16,
    },
    strokeWidth: {
      type: Number,
      value: 6,
    },
    color: {
      type: String,
      value: '#09BB07',
    },
    activeMode: {
      type: String,
      value: '#09BB07',
    },
    duration: {
      type: String,
      value: '#EBEBEB',
    },

  },
})
