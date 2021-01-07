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
  data: {},
  properties: {
    readOnly: {
      type: Boolean,
      value: false
    },
    placeholder: {
      type: String,
      value: ''
    },
    showImgSize: {
      type: Boolean,
      value: false
    },
    showImgToolbar: {
      type: Boolean,
      value: false
    },
    showImgResize: {
      type: Boolean,
      value: false
    },
  },
  attached() {
    const guid = getApp().onejit.context.guid
    const properties = {}
    for (const name in this.properties) {
      if ({}.hasOwnProperty.call(this.properties, name)) {
        const value = this.properties[name]
        if (value != null) {
          properties[name] = value
        }
      }
    }
    // console.log(properties);
    // console.log(encodeURIComponent(JSON.stringify(properties)));
    const propertiesString = encodeURIComponent(JSON.stringify(properties))
    const url = `http://localhost:8082/index.html?guid=${guid}&properties=${propertiesString}`
    console.log(url)
    this.setData({
      url
    })

    this.webView = swan.createWebViewContext('webView')
    // this.triggerEvent.onReady();
  },

  methods: {
    webView_message(e) {
      const data = e.detail.data
      console.log('ssssss', data)
      switch (data.type) {
        case 'event':
          switch (data.name) {
            case 'ready':
              this.triggerEvent('Ready')
              break
            case 'focus':
              this.triggerEvent('Focus', {})
              break
            case 'blur':
              this.triggerEvent('Blur')
              break
            case 'input':
              this.triggerEvent('input')
              break
            case 'statuschange':
              this.triggerEvent('Statuschange')
              break
            default: break
          }
          break
        default: break
      }
    },

    format() {

    },

    insertDivider() {

    },


    insertImage(object) {
      this.webView.postMessage({insertImage: object.text})
    },

    insertText(object) {
      this.webView.postMessage({insertText: object.text})
    },

    setContents() {

    },

    getContents() {

    },

    clear() {

    },

    removeFormat() {

    },

    undo() {

    },

    redo() {

    },

    blur() {

    },

    scrollIntoView() {

    },
  }
})
