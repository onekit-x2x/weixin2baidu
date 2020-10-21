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

  },
  methods: {
    cover_image_load(e) {
      console.log('cover_image_load', e)
      this.triggerEvent('load', e.details)
    },
    cover_image_error(e) {
      console.log('cover_image_error', e)
      this.triggerEvent('error', e.details)
    },
  }
})
