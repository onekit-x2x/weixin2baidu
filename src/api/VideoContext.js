export default class VideoContext {
  constructor(swanVideoContext) {
    this.swanVideoContext = swanVideoContext
  }

  play() {
    return this.swanVideoContext.play()
  }

  pause() {
    return this.swanVideoContext.pause()
  }

  stop() {
    return this.swanVideoContext.stop()
  }

  seek(position) {
    return this.swanVideoContext.seek(position)
  }

  sendDanmu(data) {
    return this.swanVideoContext.playbackRate(data)
  }

  playbackRate(rate) {
    return this.swanVideoContext.playbackRate(rate)
  }

  requestFullScreen(direction) {
    return this.swanVideoContext.requestFullScreen(direction)
  }

  exitFullScreen() {
    return this.swanVideoContext.exitFullScreen()
  }

  showStatusBar() {
    return this.swanVideoContext.showStatusBar()
  }

  hideStatusBar() {
    return this.swanVideoContext.hideStatusBar()
  }
}
