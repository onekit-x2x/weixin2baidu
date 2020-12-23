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
    indicatorDots: {
      type: Boolean,
      value: false,
    },
    indicatorColor: {
      type: String,
      value: 'rgba(0, 0, 0, .3)',
    },
    indicatorActiveColor: {
      type: String,
      value: '#000000',
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
    //
    snapToEdge: {
      type: Boolean,
      value: false,
    },
    multipleItems: {
      type: Number,
      value: 1,
    },

    //
    easingFunction: {
      type: String,
      value: 'default',
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

    trigger_Transition(e) {
      console.log('trigger_Transition', e)
      this.triggerEvent('Transition', e.details)
    }
  }
})
