Component({
 options: {
        addGlobalClass: true,
    },
    properties: {
        direction: { 
            type: String, 
            value: "none", 
        }, 
        inertia: { 
            type: Boolean, 
            value: false, 
        },
        outOfBounds: { 
            type: Boolean, 
            value: false, 
        },
        x: { 
            type: Number, 
            value: "", 
        },
        y: { 
            type: Number, 
            value: "", 
        },
        damping: { 
            type: Number, 
            value: 20, 
        },
        friction: { 
            type: Number, 
            value: 2, 
        },
        disabled: { 
            type: Boolean, 
            value: false, 
        },
        scale: { 
            type: Boolean, 
            value: false, 
        },
        scaleMin: { 
            type: Number, 
            value: 0.5, 
        },
        scaleMax: { 
            type: Number, 
            value: 10, 
        },
        scaleValue: { 
            type: Number, 
            value: 1, 
        },
        animation: { 
            type: Boolean, 
            value: true, 
        },
    },
    methods: {
        movable_Change(e){
        console.log("movable_Change", e);
        this.triggerEvent('change',e.details)
        },
        movable_scale(e){
        console.log("movable_scale", e);
        this.triggerEvent('scale',e.details)
        },
        movable_htouchmove(e){
       console.log("movable_htouchmove", e);
        this.triggerEvent('htouchmove',e.details)
       },
       movable_vtouchmove(e){
       console.log("movable_vtouchmove", e);
        this.triggerEvent('vtouchmove',e.details)
       },
  },
});