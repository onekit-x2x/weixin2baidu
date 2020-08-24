// onekit/ui/navigation-bar/navigation-bar.js
Component({
options: {
        addGlobalClass: true,
    },
  data: {

  },
  properties: {     
   onekitId:{type:String,value:""},
    onekitClass:{type:String,value:""},
    onekitStyle:{type:String,value:""},
    title:{
      type:String
    },
    loading:{
      type:Boolean,
      value:false
    },
    frontColor:{
      type:String
    },
    backgroundColor:{
      type:String
    },
    colorAnimationDuration:{
      type:Number,
      value:0
    },
    colorAnimationTimingFunc:{
      type:Number,
      value:"linear"
    },

  },
  methods: {

  }
})