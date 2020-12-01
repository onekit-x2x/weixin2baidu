/* eslint-disable guard-for-in */
/* eslint-disable no-console */
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
  data: {},
  properties: {
    readOnly: false,
    placeholder: '',
    showImgSize: false,
    showImgToolbar: false,
    showImgResize: false,
  },
  attached() {
    const guid = getApp().onejit.context.guid
    const properties = {}
    for (const name in this.properties) {
      const value = this.properties[name]
      if (value != null) {
        properties[name] = value
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
  },
  didMount() {
    this.webView = swan.createWebViewContext('webView')
    // this.triggerEvent.onReady();
  },
  didUpdate() { },
  didUnmount() { },

  methods: {
    webView_message(e) {
      const data = e.detail.data
      console.log('ssssss', data)
      switch (data.type) {
        case 'event':
          switch (data.name) {
            case 'ready':
              this.triggerEvent('bindready', {})
              break
            case 'focus':
              this.triggerEvent.onFocus('')
              break
            case 'blur':
              this.triggerEvent.onBlur()
              break
            case 'input':
              this.triggerEvent.onInput()
              break
            case 'statuschange':
              this.triggerEvent.onStatuschange()
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
