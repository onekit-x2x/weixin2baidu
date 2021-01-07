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
    longitude: {
      type: Number,
      value: null
    },
    latitude: {
      type: Number,
      value: null
    },
    scale: {
      type: Number,
      value: 16
    },
    minScale: {
      type: Number,
      value: 3
    },
    maxScale: {
      type: Number,
      value: 20
    },
    markers: {
      type: Array,
      value: [],
      observer(markers) {
        return this._getMarker(markers)
      }
    },
    covers: {
      type: Array,
      value: null
    },
    polyline: {
      type: Array,
      value: []
    },
    circles: {
      type: Array,
      value: []
    },
    controls: {
      type: Array,
      value: [],
      observer(controls) {
        return this._getControl(controls)
      }
    },
    includePoints: {
      type: Array,
      value: []
    },
    showLocation: {
      type: Boolean,
      value: false
    },
    polygons: {
      type: Array,
      value: []
    },
    //
    subkey: {
      type: String,
      value: ''
    },
    //
    layerStyle: {
      type: Number,
      value: 1
    },
    //
    rotate: {
      type: Number,
      value: 0
    },
    //
    skew: {
      type: Boolean,
      value: false
    },
    enable3D: {
      type: Boolean,
      value: false
    },
    showCompass: {
      type: Boolean,
      value: false
    },
    //
    showScale: {
      type: Boolean,
      value: false
    },
    enableOverLooking: {
      type: Boolean,
      value: false
    },
    enableZoom: {
      type: Boolean,
      value: true
    },
    enableScroll: {
      type: Boolean,
      value: true
    },
    enableRotate: {
      type: Boolean,
      value: false
    },
    //
    enableSatellite: {
      type: Boolean,
      value: false
    },
    //
    enableTraffic: {
      type: Boolean,
      value: false
    },
    //
    enablePoi: {
      type: Boolean,
      value: false
    },
    //
    enableBuilding: {
      type: Boolean,
      value: false
    },
    //
    setting: {
      type: Boolean,
      value: false
    },
  },
  observers: {
  },
  attached() {
    const minScale = 3
    const maxScale = 20
    const scale = this.properties.scale
    this.properties.minScale = Math.min(minScale, scale)
    this.properties.maxScale = Math.max(scale, maxScale)
    //
    this._getMarker(this.properties.markers)
    this._getControl(this.properties.controls)
  },
  methods: {
    map_tap(e) {
      this.triggerEvent('Tap', e.detail)
    },
    map_markertap(e) {
      this.triggerEvent('Tap', e.detail)
    },
    //
    trigger_labeltap(e) {
      // console.warn('暂不支持!')
      this.triggerEvent('Labeltap', e.detail)
    },
    map_controltap(e) {
      this.triggerEvent('Controltap', e.detail)
    },
    map_callouttap(e) {
      this.triggerEvent('Callouttap', e.detail)
    },
    map_updated(e) {
      this.triggerEvent('Updated', e.detail)
    },
    map_regionchange(e) {
      this.triggerEvent('Regionchange', e.detail)
    },
    map_poitap(e) {
      this.triggerEvent('Poitap', e.detail)
    },
    //
    trigger_anchorpointtap(e) {
      // console.warn('暂不支持!')
      this.triggerEvent('Anchorpointtap', e.detail)
    },
    _getMarker(markers) {
      if (!Array.isArray(markers)) {
        markers = Object.values(markers[0])
      }
      // markers.map(marker => {
      //   marker.controlId = marker.id
      //   delete Object.marker.id
      //   return marker
      // })
      this.setData({
        markers
      })
    },
    _getControl(controls) {
      if (!Array.isArray(controls)) {
        controls = Object.values(controls[0])
      }
      // this.setData({
      //   controls: arr.map(control => {
      //     control.controlId = control.id
      //     delete Object.control.id
      //     return control
      //   })
      // })
      this.setData({
        controls
      })
    }
  },
})
