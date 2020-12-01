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
    propName: { // 属性名
      type: String, // 类型（必填），目前接受的类型包括：String, Number, Boolean, Object, Array, null（表示任意类型）
      value: 'val', // 属性初始值（必填）
      // eslint-disable-next-line no-unused-vars
      observer(newVal, oldVal) {
        // 属性被改变时执行的函数（可选）
      }
    }
  },

  data: {}, // 私有数据，可用于模版渲染

  // 生命周期函数，可以为函数，或一个在methods段中定义的方法名
  attached() {},

  detached() {},

  methods: {
    onTap() {
      this.setData({
        // 更新属性和数据的方法与更新页面数据的方法类似
      })
    }
  }
})
