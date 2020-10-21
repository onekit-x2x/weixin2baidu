Component({
  options: {
    addGlobalClass: true,
  },
  properties: {
    onekitId: {type: String, value: ''},
    onekitClass: {type: String, value: ''},
    onekitStyle: {type: String, value: ''},
    selectable: {
      type: Boolean,
      value: false,
    },
    space: {
      type: String,
      value: '',
    },
  },
})
