Component({
 options: {
        addGlobalClass: true,
    },
   properties: {     Id:{type:String,value:""},
        scrollY: { 
            type: Boolean, 
            value: false, 
        },
        scrollX: { 
            type: Boolean, 
            value: false, 
        },
        upperThreshold: { 
            type: Number, 
            value: 50, 
        },
        lowerThreshold: { 
            type: Number, 
            value: 50, 
        },
        scrollIntoView: { 
            type: String, 
            value:"", 
        },
        scrollTop: { 
            type: Number, 
            value:"", 
        },
        scrollLeft: { 
            type: Number, 
            value:"", 
        },
        scrollWithAnimation: { 
            type: Boolean, 
            value: false, 
        },
        enableBackToTop: { 
            type: Boolean, 
            value: false, 
        },
       
       
    },
  methods: {
   scrollToupper(e){
       console.log("scrollToupper", e);
        this.triggerEvent('scrolltoupper',e.details)
       },
    scrollTolower(e){
       console.log("scrollTolower", e);
        this.triggerEvent('scrolltolower',e.details)
       },
    scrollScroll(e){
       console.log("scrollScroll", e);
        this.triggerEvent('scroll',e.details)
       },
  },
});
