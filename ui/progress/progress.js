Component({
   options: {
        addGlobalClass: true,
    },
     properties: {    
      onekitId:{type:String,value:""},
    onekitClass:{type:String,value:""},
    onekitStyle:{type:String,value:""},
        percent: { 
            type: Number, 
            value: "", 
        }, 
        showInfo: { 
            type: Boolean, 
            value: false, 
        },
        strokeWidth: { 
            type: String, 
            value: "2", 
        },
        activeColor: { 
            type: String, 
            value: "#09BB07", 
        },
        backgroundColor: { 
            type: String, 
            value: "#EBEBEB", 
        },
        active: { 
            type: Boolean, 
            value: false, 
        },
        borderRadius: { 
            type: String, 
            value: "0", 
        },
        fontSize: { 
            type: Number, 
            value: 16, 
        },
        strokeWidth: { 
            type: Number, 
            value: 6, 
        },
        color: { 
            type: String, 
            value: "#09BB07", 
        },
        activeMode: { 
            type: String, 
            value: "#09BB07", 
        },
        duration: { 
            type: String, 
            value: "#EBEBEB", 
        },
 
    },
});
