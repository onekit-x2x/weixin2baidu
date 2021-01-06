export default class MapContext {
  constructor(wxMapContext) {
    this.wxMapContext = wxMapContext
  }

  includePoints(object) {
    return this.wxMapContext.includePoints(object)
  }

  getCenterLocation(object) {
    return this.wxMapContext.getCenterLocation(object)
  }

  translateMarker(object) {
    return this.wxMapContext.translateMarker(object)
  }

  moveToLocation(object) {
    return this.wxMapContext.moveToLocation(object)
  }

  getRegion(object) {
    return this.wxMapContext.getRegion(object)
  }

  getScale(object) {
    return this.wxMapContext.getScale(object)
  }

  // // eslint-disable-next-line class-methods-use-this
  // on() {
  //   // eslint-disable-next-line no-console
  //   return console.warn('swan is not support')
  // }
}
