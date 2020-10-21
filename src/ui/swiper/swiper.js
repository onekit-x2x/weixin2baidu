/* eslint-disable no-console */

Component({
  options: {
    addGlobalClass: true,
  },
  properties: {
    onekitId: {type: String, value: ''},
    onekitClass: {type: String, value: ''},
    onekitStyle: {type: String, value: ''},
    indicatorDots: {
      type: Boolean,
      value: false,
    },
    indicatorColor: {
      type: String,
      value: '',
    },
    indicatorActiveColor: {
      type: String,
      value: '',
    },
    autoplay: {
      type: Boolean,
      value: false,
    },
    current: {
      type: Number,
      value: 0,
    },
    interval: {
      type: Number,
      value: 5000,
    },
    duration: {
      type: Number,
      value: 500,
    },
    circular: {
      type: Boolean,
      value: false,
    },
    vertical: {
      type: Boolean,
      value: false,
    },
    previousMargin: {
      type: String,
      value: '0px',
    },
    nextMargin: {
      type: String,
      value: '0px',
    },
    multipleItems: {
      type: Number,
      value: 1,
    },

  },
  methods: {
    swiper_Change(e) {
      console.log('swiper_Change', e)
      this.triggerEvent('change', e.details)
    },
    swiper_AnimationEnd(e) {
      console.log('swiper_AnimationEnd', e)
      this.triggerEvent('AnimationEnd', e.details)
    },
  }
})
