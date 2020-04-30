Component({
  mixins: [],
  data: {},
  properties: {
    readOnly: false,
    placeholder: "",
    showImgSize: false,
    showImgToolbar: false,
    showImgResize: false,
  },
   attached() {
  var guid = getApp().onejit.context.guid;
  var properties = {};
  for(var name in this.properties){
      var value = this.properties[name];
        if(value!=null){
            properties[name] = value;
        }
  }
  //console.log(properties); 
 // console.log(encodeURIComponent(JSON.stringify(properties)));
  var properties = encodeURIComponent(JSON.stringify(properties))
  var url = `http://localhost:8082/index.html?guid=${guid}&properties=${properties}`;
  console.log(url);
  this.setData({
     url
      });

  },
  didMount() {
    this.webView = swan.createWebViewContext('webView');
   // this.triggerEvent.onReady();
  },
  didUpdate() { },
  didUnmount() { },

  methods: {
    webView_message(e) {
      var data = e.detail.data;
      console.log("ssssss", data);
      switch (data.type) {
        case "event":
          switch (data.name) {
            case "ready":
                this.triggerEvent("bindready",{});
              break;
            case "focus":
                this.triggerEvent.onFocus("");
              break;
              case "blur":
                this.triggerEvent.onBlur();
              break;
               case "input":
                this.triggerEvent.onInput();
              break;
               case "statuschange":
                this.triggerEvent.onStatuschange();
              break;
            default: break;
          }
          break;
        default: break;
      }

    },

    format(name, value) {

    },

    insertDivider() {

    },


    insertImage(object) {
      this.webView.postMessage({ 'insertImage': object.text });
    },

    insertText(object) {
      this.webView.postMessage({ 'insertText': object.text });
    },

    setContents(object) {

    },

    getContents() {

    },

    clear() {

    },

    removeFormat() {

    },

    undo() {

    },

    redo() {

    },

    blur() {

    },

    scrollIntoView() {

    },
  }
});
