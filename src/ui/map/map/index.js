/* eslint-disable no-console */
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
      value: []
    },
    covers: {
      type: Array,
      value: []
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
      value: []
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
  // observers: {
  //   enableSatellite() {
  //     console.warn('[onekit-map]暂不支持enable-satellite')
  //   },
  //   enableTraffic() {
  //     console.warn('[onekit-map]暂不支持enable-traffic')
  //   },
  //   subkey() {
  //     console.warn('[onekit-map]暂不支持subkey')
  //   },
  //   skew() {
  //     console.warn('[onekit-map]暂不支持skew')
  //   },
  //   layerStyle() {
  //     console.warn('[onekit-map]暂不支持layerStyle')
  //   },
  //   showScale() {
  //     console.warn('[onekit-map]暂不支持showScale')
  //   },

  // },
  // onReady() {
  //   this.mapCtx = swan.createMapContext('eMap')
  // },
  attached() {
    const minScale = 3
    const maxScale = 20
    const scale = this.properties.scale
    this.properties.minScale = Math.min(minScale, scale)
    this.properties.maxScale = Math.max(scale, maxScale)
    //
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
    _getMarker() {
      const markers = this.properties.markers
      const marker = {
        markerId: markers[0].id,
        latitude: markers[0].latitude,
        longitude: markers[0].longitude,
      }
    }
  },
})
