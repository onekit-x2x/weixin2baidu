Component({
 options: {
        addGlobalClass: true,
    },
    properties: {
        src: { 
            type: String, 
            value: "", 
        },
       
    },
    methods: {
       cover_image_load(e){
       console.log("cover_image_load", e);
        this.triggerEvent('load',e.details)
       },
       cover_image_error(e){
       console.log("cover_image_error", e);
        this.triggerEvent('error',e.details)
       },
    }
});