Component({
   options: {
        addGlobalClass: true,
    },
     properties: {     Id:{type:String,value:""},
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
