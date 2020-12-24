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
    value: {
      type: String,
      value: '',
    },
    type: {
      type: String,
      value: 'text'
    },
    password: {
      type: Boolean,
      value: false
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
    cursorSpacing: {
      type: Boolean,
      value: false
    },
    autoFocus: {
      type: Boolean,
      value: null,
    },
    focus: {
      type: Boolean,
      value: false,
    },
    confirmType: {
      type: String,
      value: 'done',
    },
    //
    alwaysEmbed: {
      type: Boolean,
      value: false,
    },
    confirmHold: {
      type: Boolean,
      value: false
    },
    cursor: {
      type: Number,
      value: null
    },
    selectionStart: {
      type: Number,
      value: -1
    },
    selectionEnd: {
      type: Number,
      value: -1
    },
    adjustPosition: {
      type: Boolean,
      value: true
    },
    //
    holdKeyboard: {
      type: Boolean,
      value: false
    }
  },
  attached() {},

  detached() {},

  methods: {
    input_input(e) {
      this.triggerEvent('Input', e.detail)
    },
    input_focus(e) {
      this.triggerEvent('Focus', e)
    },
    input_blur(e) {
      this.triggerEvent('Blur', e)
    },
    input_confirm(e) {
      this.triggerEvent('Confirm', e)
    },
    //
    trigger_boardheightchange(e) {
      this.triggerEvent('Boardheightchange', e)
    },
  }
})
