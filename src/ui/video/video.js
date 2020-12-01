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
    src: {
      type: String,
      value: '',
    },
    video: {
      type: String,
      value: '',
    },
    duration: {
      type: Number,
      value: '',
    },
    controls: {
      type: Boolean,
      value: false,
    },
    danmuList: {
      type: Array,
      value: '',
    },

    danmuBtn: {
      type: Boolean,
      value: false,
    },
    enableBanmu: {
      type: Boolean,
      value: false,
    },
    autoplay: {
      type: Boolean,
      value: false,
    },
    loop: {
      type: Boolean,
      value: false,
    },
    muted: {
      type: Boolean,
      value: false,
    },
    initialTime: {
      type: Number,
      value: '0',
    },
    pageGesture: {
      type: Boolean,
      value: false,
    },
    direction: {
      type: Number,
      value: '',
    },
    showProgress: {
      type: Boolean,
      value: true,
    },
    showFullscreenBtn: {
      type: Boolean,
      value: true,
    },

    showPlayBtn: {
      type: Boolean,
      value: true,
    },
    showCenterPlayBtn: {
      type: Boolean,
      value: true,
    },
    enableProgressGesture: {
      type: Boolean,
      value: true,
    },
    poster: {
      type: String,
      value: '',
    },
    showMuteBtn: {
      type: Boolean,
      value: false,
    },
    title: {
      type: String,
      value: '',
    },
    enablePlayGesture: {
      type: Boolean,
      value: false,
    },
    vslideGestureInFullscreen: {
      type: Boolean,
      value: true,
    },
    enableDanmu: {
      type: Boolean,
      value: false,
    }

  },
  methods: {
    video_play() {
      this.triggerEvent('play')
    },
    video_pause() {
      this.triggerEvent('pause')
    },
    video_ended() {
      this.triggerEvent('ended')
    },
    video_timeupdate() {
      this.triggerEvent('timeupdate')
    },
    video_fullscreenchang() {
      this.triggerEvent('fullscreenchang')
    },
    video_waiting() {
      this.triggerEvent('waiting')
    },
    video_error() {
      this.triggerEvent('error')
    },
    video_loadedmetadata() {
      this.triggerEvent('loadedmetadata')
    },
  }
})
