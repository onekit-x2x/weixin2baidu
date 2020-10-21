/* eslint-disable max-len */
export default class CanvasContext {
  constructor(baiduCanvasContext) {
    this.baiduCanvasContext = baiduCanvasContext
  }

  beginPath(a) {
    return this.baiduCanvasContext.beginPath(a)
  }

  save() {
    return this.baiduCanvasContext.save()
  }

  restore() {
    return this.baiduCanvasContext.restore()
  }

  //
  setGlobalAlpha(alpha) {
    return this.baiduCanvasContext.setGlobalAlpha(alpha)
  }

  setFillStyle(color) {
    return this.baiduCanvasContext.setFillStyle(color)
  }

  setStrokeStyle(color) {
    return this.baiduCanvasContext.setStrokeStyle(color)
  }

  setShadow(offsetX, offsetY, blur, color) {
    return this.baiduCanvasContext.setShadow(offsetX, offsetY, blur, color)
  }

  setLineCap(lineCap) {
    return this.baiduCanvasContext.setLineCap(lineCap)
  }

  setLineJoin(lineJoin) {
    return this.baiduCanvasContext.setLineJoin(lineJoin)
  }

  setLineWidth(lineWidth) {
    return this.baiduCanvasContext.setLineWidth(lineWidth)
  }

  setMiterLimit(miterLimit) {
    return this.baiduCanvasContext.setMiterLimit(miterLimit)
  }

  setFontSize(fontSize) {
    return this.baiduCanvasContext.setFontSize(fontSize)
  }

  rotate(rotate) {
    return this.baiduCanvasContext.rotate(rotate)
  }

  scale(scaleWidth, scaleHeight) {
    return this.baiduCanvasContext.scale(scaleWidth, scaleHeight)
  }

  translate(x, y) {
    return this.baiduCanvasContext.translate(x, y)
  }

  moveTo(x, y) {
    return this.baiduCanvasContext.moveTo(x, y)
  }

  lineTo(x, y) {
    return this.baiduCanvasContext.lineTo(x, y)
  }

  closePath() {
    return this.baiduCanvasContext.closePath()
  }

  fillText(text, x, y, maxWidth) {
    return this.baiduCanvasContext.fillText(text, x, y, maxWidth)
  }

  drawImage(imageResource, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight) {
    return this.baiduCanvasContext.drawImage(imageResource, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
  }

  arc(x, y, r, sAngle, eAngle, counterclockwise) {
    return this.baiduCanvasContext.arc(x, y, r, sAngle, eAngle, counterclockwise)
  }

  quadraticCurveTo(cpx, cpy, x, y) {
    return this.baiduCanvasContext.quadraticCurveTo(cpx, cpy, x, y)
  }

  bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y) {
    return this.baiduCanvasContext.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y)
  }

  //
  rect(x, y, width, height) {
    return this.baiduCanvasContext.rect(x, y, width, height)
  }

  //
  clearRect(x, y, width, height) {
    return this.baiduCanvasContext.clearRect(x, y, width, height)
  }

  stroke() {
    return this.baiduCanvasContext.stroke()
  }

  fill() {
    return this.baiduCanvasContext.fill()
  }

  draw(reserve, callback) {
    return this.baiduCanvasContext.draw(reserve, callback)
  }

  fillRect(x, y, width, height) {
    return this.baiduCanvasContext.fillRect(x, y, width, height)
  }

  getActions() {
    return this.baiduCanvasContext.getActions()
  }
}
