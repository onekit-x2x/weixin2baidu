import wx from "../../../../onekit/wx"
Page({
    onReady() {
    this.InnerAudioContext = swan.createInnerAudioContext('myAudio')
  },
  onShareAppMessage() {
    return {
      title: 'audio',
      path: 'page/component/pages/audio/audio'
    }
  },

  data: {
    current: {
      poster: 'http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000',
      name: '此时此刻',
      author: '许巍',
      src: 'https://www.onekitwx.com/quick/demo.mp3',
    },
    audioAction: {
      method: 'pause'
    },
    bind_play(e){
    console.log("xxxxxxxxxxxxxxxxxxxxx",e)
    }
  }
})
