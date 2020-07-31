Component({
   options: {
        addGlobalClass: true,
    }, 
      properties: {    
     Id:{type:String,value:""},
    Class:{type:String,value:""},
    Style:{type:String,value:""},
        selectable: { 
            type: Boolean, 
            value: false, 
        }, 
        space: { 
            type: String, 
            value: "", 
        },
    },
});
