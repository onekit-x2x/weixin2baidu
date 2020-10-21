/* eslint-disable no-console */
Component({
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
    autoplay: {
      type: Boolean,
      value: false,
    },
    muted: {
      type: Boolean,
      value: false,
    },
    orientation: {
      type: String,
      value: 'vertical',
    },
    objectFit: {
      type: String,
      value: 'contain',
    },
    backgroundMute: {
      type: Boolean,
      value: false,
    },
    minCache: {
      type: Number,
      value: '3',
    },
    maxCache: {
      type: Number,
      value: '1',
    },


  },
  methods: {
    livePlayer_statechangge(e) {
      console.log('livePlayer_statechangge', e)
      this.triggerEvent('statechangge', e.details)
    },
  }
})
