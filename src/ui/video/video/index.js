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
    src: {
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
    enableDanmu: {
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
    objectFit: {
      type: String,
      value: 'contain',
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
    //
    playBtnPosition: {
      type: String,
      value: 'bottom',
    },
    enablePlayGesture: {
      type: Boolean,
      value: false,
    },
    //
    autoPauseIfNavigate: {
      type: Boolean,
      value: true,
    },
    //
    autoPauseIfOpenNative: {
      type: Boolean,
      value: true,
    },
    vslideGesture: {
      type: Boolean,
      value: false,
    },
    vslideGestureInFullscreen: {
      type: Boolean,
      value: true,
    },
    //
    adUnitId: {},
    posterForCrawler: {},
    showCastingButton: {},
    pictureInPictureMode: {},
    pictureInPictureShowProgress: {},
    enableAutoRotation: {},
    showScreenLockButton: {},
    showSnapshotButton: {},
  },
  attached() {
    const playBtnPosition = this.properties.playBtnPosition
    if (playBtnPosition === 'bottom') {
      this.properties.showPlayBtn = true
    } else if (playBtnPosition === 'center') {
      this.properties.showCenterPlayBtn = true
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
    //
    trigger_progress(e) {
      this.triggerEvent('Progress', e.detail)
    },
    video_loadedmetadata() {
      this.triggerEvent('loadedmetadata')
    },
    //
    trigger_controlstoggle(e) {
      this.triggerEvent('Controlstoggle', e.detail)
    },
    trigger_enterpictureinpicture(e) {
      this.triggerEvent('Enterpictureinpicture', e.detail)
    },
    trigger_leavepictureinpicture(e) {
      this.triggerEvent('Leavepictureinpicture', e.detail)
    },
    trigger_seekcomplete(e) {
      this.triggerEvent('Seekcomplete', e.detail)
    },
  }
})
