Component({
options: {
        addGlobalClass: true,
    },
    properties: {     Id:{type:String,value:""},
        Class:{type:String,value:""},
    Style:{type:String,value:""},
        src: {
            type: String, 
            value: "",
        },
        loop: {
            type: Boolean, 
            value: false,
        },
        controls: {
            type: Boolean, 
            value: false,
        },
        poster: {
            type: String, 
            value: "",
        },
        name: {
            type: String, 
            value: "未知音频",
        },
        author: {
            type: String, 
            value: "未知作者",
        },
    },

    methods: {
       audio_play(e){
        console.log("play audio success",e)
        this.triggerEvent('play',e.details)
       },
       audio_pause(e){
        console.log("pause audio success",e)
        this.triggerEvent("pause",e.details)
       },
       audio_timeupdate(e){
        console.log("audio_timeupdate",e)
        this.triggerEvent("timeupdate",e.details)
       },
       audio_ended(e){
        console.log("audio ended",e)
        this.triggerEvent("ended",e.details)
       },
       audio_error(e){
        console.log("audio  error! ",e)
        this.triggerEvent("error",e.details)
       },
    }
});