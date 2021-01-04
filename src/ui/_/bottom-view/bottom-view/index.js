/* eslint-disable no-console */

Component({
  options: {
    addGlobalClass: true,
  },
  properties: {
    headerText: {
      type: String,
      value: ''
    }
  },
  methods: {
    cancle_tap(e) {
      console.log('bottom-view cancle')
      this.triggerEvent('Cancle', e.detail)
    },
    confirm_tap(e) {
      console.log('bottom-view confirm')
      this.triggerEvent('Confirm', e.detail)
    },
  },
})
