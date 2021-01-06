export default class CameraContext {
  constructor(swanCameraContext) {
    this.swanCameraContext = swanCameraContext
  }

  takePhoto() {
    return this.swanCameraContext.takePhoto()
  }

  setZoom() {
    return this.swanCameraContext.setZoom()
  }

  startRecord() {
    return this.swanCameraContext.startRecord()
  }

  stopRecord(position) {
    return this.swanCameraContext.stopRecord(position)
  }
}
