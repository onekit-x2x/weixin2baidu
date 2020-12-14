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
    size: {
      type: String,
      value: 'default',
    },
    type: {
      type: String,
      value: 'default'
    },
    plain: {
      type: Boolean,
      value: false
    },
    disabled: {
      type: Boolean,
      value: false
    },
    loading: {
      type: Boolean,
      value: false
    },
    formType: {
      type: String,
      value: '',
    },
    openType: {
      type: String,
      value: ''
    },
    hoverClass: {
      type: String,
      value: '',
    },
    hoverStopPropagation: {
      type: String,
      value: ''
    },
    hoverStartTime: {
      type: String,
      value: '',
    },
    hoverStayTime: {
      type: String,
      value: ''
    },
    //
    lang: {
      type: String,
      value: 'en'
    },
    sessionFrom: {
      type: String,
      value: '当前标题',
    },
    sendMessageTitle: {
      type: String,
      value: '当前分享路径'
    },
    sendMessageImg: {
      type: String,
      value: '截图'
    },
    appParameter: {
      type: String,
      value: ''
    },
    showMessageCard: {
      type: Boolean,
      value: false
    },
  },
  attached() {},
  methods: {
    button_getuserinfo(e) {
      this.triggerEvent('getuserinfo', e)
    },
    button_contact(e) {
      this.triggerEvent('contact', e)
    },
    button_getphonenumber(e) {
      this.triggerEvent('getphonenumber', e)
    },
    trigger_error(e) { // 做不了
      this.triggerEvent('error', e)
    },
    button_opensetting(e) {
      this.triggerEvent('opensetting', e)
    },
    trigger_launchapp(e) {
      this.triggerEvent('launchapp', e)
    }
  }
})
