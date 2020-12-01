/* eslint-disable camelcase */
/* eslint-disable no-console */
// import wx from '../../wx'

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
    onekitId: {type: String, value: ''},
    onekitClass: {type: String, value: ''},
    onekitStyle: {type: String, value: ''},
    target: {
      type: String,
      value: 'self'
    },
    url: {
      type: String,
    },
    // 跳转方式
    openType: {
      type: String,
      value: 'navigate',
    },
    delta: {
      type: Number,
      value: 1,
    },
    appId: {
      type: String,
    },
    path: {
      type: String,
    },
    extraData: {
      type: Object,
    },
    version: {
      type: String,
      value: 'release',
    },
    hoverClass: {
      type: String,
      value: 'navigator-hover',
    },
    hoverStartTime: {
      type: Number,
      value: 50,
    },
    hoverStayTime: {
      type: Number,
      value: 600,
    },
    hoverStopPropagation: {
      type: Boolean,
      value: false,
    },
    bindsuccess: {
      type: String
    },
    bindfail: {
      type: String
    },
    bindcomplete: {
      type: String
    },
    headerText: {
      type: String,
      value: '默认值',
    },
  },
  data: {
    defaultStates: {}
  },
  methods: {
    view_tap() {
      console.log('dddddd', this.properties.openType)
      const app_id = this.properties.appId
      const version = this.properties.version

      console.log('appid:', app_id)
      console.log('version:', version)
      switch (this.properties.target) {
        case 'self':
          this._target_self()
          break

        case 'miniProgram':
          console.log('aaa')
          this._target_miniProgram()
          break

        default:
      }
    },
    _target_self() {
      const url = this.properties.url
      switch (this.properties.openType) {
        case 'redirectTo':
          swan.redirectTo({
            url
          })
          break
        case 'navigateBack':
          swan.navigateBack()
          break
        case 'navigate':
          if (this.properties.redirect) {
            console.log('sss')
            swan.redirectTo({
              url,

            })
          } else {
            swan.navigateTo({
              url
            })
          }

          break
        default:
          break
      }
    },
    _target_miniProgram() {
      const appId = this.properties.appId
      console.log('xxxxx:', appId)
      //  "tta6cdd07039e72db5"
      swan.navigateToMiniProgram({
        appId: '17866567',
        success(e) {
          console.log('ddddd', e)
        },
        fail(e) {
          console.log(e)
        }
      })
    }

  }


})
