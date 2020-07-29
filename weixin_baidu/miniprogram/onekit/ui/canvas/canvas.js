// onekit/ui/canvas/canvas.js
Component({
options: {
        addGlobalClass: true,
    },
  data: {

  },
  properties: {     Id:{type:String,value:""},
   
    canvasId: {
      type:String,
      value:"",
    },
    disableScroll: {
      type:Boolean,
      value:false,
    },
  },
  methods: {
    canvas_start(e){
        console.log("canvas_start", e);
        this.triggerEvent('touchstart',e.details)
       },
    canvas_move(e){
        console.log("canvas_move", e);
        this.triggerEvent('touchmove',e.details)
       },
    canvas_end(e){
        console.log("canvas_end", e);
        this.triggerEvent('touchend',e.details)
       },
    canvas_cancel(e){
        console.log("canvas_cancel", e);
        this.triggerEvent('touchcancel',e.details)
       },
    canvas_tap(e){
        console.log("canvas_tap", e);
        this.triggerEvent('longtap',e.details)
       },
    canvas_error(e){
        console.log("canvas_error", e);
        this.triggerEvent('error',e.details)
       },
  }
})