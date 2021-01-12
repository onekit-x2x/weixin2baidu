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
    height: ''
  },
  properties: {
    value: {
      type: String,
      value: '',
    },
    placeholder: {
      type: String,
      value: ''
    },
    placeholderStyle: {
      type: String,
      value: ''
    },
    placeholderClass: {
      type: String,
      value: 'input-placeholder',
    },
    disabled: {
      type: Boolean,
      value: false
    },
    maxlength: {
      type: Number,
      value: 140,
    },
    autoFocus: {
      type: Boolean,
      value: null,
    },
    focus: {
      type: Boolean,
      value: false,
    },
    autoHeight: {
      type: Boolean,
      value: false,
    },
    fixed: {
      type: Boolean,
      value: false,
    },
    cursorSpacing: {
      type: Number,
      value: 0,
    },
    cursor: {
      type: Number,
      value: -1,
    },
    showConfirmBar: {
      type: Boolean,
      value: true,
    },
    selectionStart: {
      type: Number,
      value: -1,
    },
    selectionEnd: {
      type: Number,
      value: -1,
    },
    adjustPosition: {
      type: Boolean,
      value: true
    },
    // 基础库 3.260.6 开始支持
    holdKeyboard: {
      type: Boolean,
      value: false
    },
    //
    disableDefaultPadding: {
      type: Boolean,
      value: false,
    },
    confirmType: {
      type: String,
      value: 'done',
    },
  },
  attached() {
    // 基础库 3.260.6 开始支持
    // if (this.properties.holdKeyboard && (this.properties.autoFocus || this.properties.focus)) {
    //   swan.onKeyboardHeightChange(res => {
    //     this.setData({
    //       height: res.height
    //     })
    //   })
    // }

    //
    if (this.properties.disableDefaultPadding) {
      this.setData({
        padding: 0
      })
    }
  },
  methods: {
    textarea_focus(e) {
      this.triggerEvent('Focus', e.detail)
    },
    textarea_blur(e) {
      this.triggerEvent('Blur', e.detail)
    },
    textarea_linechange(e) {
      this.triggerEvent('Linechange', e.detail)
    },
    textarea_input(e) {
      this.triggerEvent('Input', e.detail)
    },
    textarea_confirm(e) {
      this.triggerEvent('Confirm', e.detail)
    },
    // 做不了
    trigger_keyboardheightchange(e) {
      this.triggerEvent('Keyboardheightchange', e.detail)
    },
  }
})
