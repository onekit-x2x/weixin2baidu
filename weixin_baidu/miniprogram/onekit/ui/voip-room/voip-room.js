Component({
options: {
        addGlobalClass: true,
    },
    properties: {     
        Id:{type:String,value:""},
        onekitClass:{type:String,value:""},
        onekitStyle:{type:String,value:""},
        
    },

    data: {}, // 私有数据，可用于模版渲染

    // 生命周期函数，可以为函数，或一个在methods段中定义的方法名
    attached: function () {},

    detached: function () {},

    methods: {
        onTap: function () {
            this.setData({
                // 更新属性和数据的方法与更新页面数据的方法类似
            });
        }
    }
});