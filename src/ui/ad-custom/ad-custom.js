Component({
  options: {
    addGlobalClass: true,
  },
  properties: {
    onekitId: {type: String, value: ''},
    onekitClass: {type: String, value: ''},
    onekitStyle: {type: String, value: ''},
    unitId: {type: String, value: ''},
    adIntervals: {type: String, value: ''},
    adType: {
      type: String,
      value: 'banner',
    },
  },

  data: {}, // 私有数据，可用于模版渲染

  // 生命周期函数，可以为函数，或一个在methods段中定义的方法名
  attached() {},

  detached() {},

  methods: {

  }
})
