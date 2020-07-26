Component({
options: {
        addGlobalClass: true,
    },
    properties: {
        src: {
            type: String, 
            value: "", 
        },
        autoplay: {
            type: Boolean, 
            value: false, 
        },
        muted: { 
            type: Boolean, 
            value: false, 
        },
        orientation: {
            type: String, 
            value: 'vertical', 
        },
        objectFit: {
            type: String, 
            value: 'contain', 
        },
        backgroundMute: {
            type: Boolean, 
            value: false,  
        },
        minCache: {
            type: Number, 
            value:'1', 
        },
        maxCache: {
            type: Number, 
            value:'3', 
        },
    },

    methods: {
        live_player_statechange(e){
        console.log("live_player_statechange", e);
        this.triggerEvent('statechange',e.details)
       },
       live_player_netstatus(e){
        console.log("live_player_netstatus", e);
        this.triggerEvent('netstatus',e.details)
       },
       live_player_fullscreenchange(e){
        console.log("live_player_fullscreenchange", e);
        this.triggerEvent('fullscreenchange',e.details)
       },
    }
});