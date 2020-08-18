

Component({
    options: {
        addGlobalClass: true,
        virtualHost: true
    },

    properties: {
        Id: { type: String, value: "" },
        Class: { type: String, value: "" },
        Style: { type: String, value: "" },
        src: {
            type: String,
            value: "",
        },
        mode: {
            type: String,
            value: "scaleToFill",
        },
        webp: {
            type: Boolean,
            value: false,
        },
        lazyLoad: {
            type: Boolean,
            value: false,
        },
    },
    data: { new_size: "" },
    methods: {
        image_error(e) {
            this.triggerEvent('error', e)
        },
        image_load(e) {
            var that = this;
            const SIZE = e.detail;
            switch (this.properties.mode) {
                case "heightFix":
                    swan.createSelectorQuery()
                        .in(this)
                        .select('.onekit-image')
                        .boundingClientRect(res => {
                            const mode = "scaleToFill";
                            const baidu_height = res.height;
                            const baidu_width = SIZE.width * baidu_height / SIZE.height;
                            const new_size = `width:${baidu_width}px;height:${baidu_height}px;`;
                            that.setData({ mode, new_size });
                        }).exec();
                    break;
                default:
                    break;
            }
        },
    },
    lifetimes: {
    },
});



