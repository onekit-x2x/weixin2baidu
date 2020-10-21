/* eslint-disable no-console */
Component({
  mixins: [],
  data: {

  },
  observers: {
    enableSatellite() {
      console.warn('[onekit-map]暂不支持enable-satellite')
    },
    enableTraffic() {
      console.warn('[onekit-map]暂不支持enable-traffic')
    },
    subkey() {
      console.warn('[onekit-map]暂不支持subkey')
    },
    skew() {
      console.warn('[onekit-map]暂不支持skew')
    },
    layerStyle() {
      console.warn('[onekit-map]暂不支持layerStyle')
    },
    showScale() {
      console.warn('[onekit-map]暂不支持showScale')
    },

  },
  properties: {
    onekitId: {type: String, value: ''},
    enableSatellite: {type: Boolean},
    enableTraffic: {type: Boolean},
    subkey: {type: String},
    skew: {type: Number},
    layerStyle: {type: String},
    showScale: {type: Boolean},
  },
  onReady() {
    this.mapCtx = swan.createMapContext('eMap')
  },
  didUpdate() { },
  didUnmount() { },
  methods: {
    onMarkertap(e) {
      console.log('onMarkertap', e)
      this.triggerEvent('bindmarkertap', e)
    },
    onCallouttap(e) {
      console.log('onCallouttap', e)
      this.triggerEvent('onCallouttap', e)
    },
    onControltap(e) {
      console.log('onControltap', e)
      this.triggerEvent('onControltap', e)
    },
    onRegionchange(e) {
      console.log('onRegionchange', e)
      this.triggerEvent('onRegionchange', e)
    },
    onTap(e) {
      console.log('onTap', e)
      this.triggerEvent('onTap', e)
    },
    onUpdated(e) {
      console.log('onUpdated', e)
      this.triggerEvent('onUpdated', e)
    },
    onPoitap(e) {
      console.log('onPoitap', e)
      this.triggerEvent('onPoitap', e)
    },
    onLabeltap(e) {
      console.warn('暂不支持!')
      this.triggerEvent('onPoitap', e)
    },
    xxxxxx() {

    }

  },
})
