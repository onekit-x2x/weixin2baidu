/* eslint-disable no-console */

Component({
  options: {
    addGlobalClass: true,
  },
  methods: {
    view_tap(e) {
      console.log('mask-view close')
      this.triggerEvent('Close', e.detail)
    }
  },
})
