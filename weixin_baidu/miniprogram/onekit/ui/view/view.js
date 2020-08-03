Component({
    options: {
        addGlobalClass: true,
    },
    properties: {
        Id: { type: String, value: "" },
        Class: { type: String, value: "" },
        Style: { type: String, value: "" },
    },

    methods: {
        view_tap: function (e) {
        console.log("xxxxxxxxx")
            this.triggerEvent('tap', e)
        }
    }
});