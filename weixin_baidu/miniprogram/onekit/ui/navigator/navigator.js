import wx from "../../wx"
Component({
options: {
        addGlobalClass: true,
    },
  properties: {     Id:{type:String,value:""},
    target: {
      type: String,
      value: "self"
    },
    url: {
      type: String,
    },
    // 跳转方式
    openType: {
      type: String,
      value: "navigate",
    },
    delta: {
      type: Number,
      value: 1,
    },
    appId: {
      type: String,
    },
    path: {
      type: String,
    },
    extraData: {
      type: Object,
    },
    version: {
      type: String,
      value: "release",
    },
    hoverClass: {
      type: String,
      value: "navigator-hover",
    },
    hoverStartTime: {
      type: Number,
      value: 50,
    },
    hoverStayTime: {
      type: Number,
      value: 600,
    },
    hoverStopPropagation: {
      type: Boolean,
      value: false,
    },
    bindsuccess: {
      type: String
    },
    bindfail: {
      type: String
    },
    bindcomplete: {
      type: String
    },
    headerText: {
      type: String,
      value: "默认值",
    },
  },
  data: {
    defaultStates: {}
  },
  methods: {
    view_tap: function () {
      console.log("dddddd",this.properties["openType"]);
      var app_id = this.properties["appId"];
      var version = this.properties["version"];
      
      console.log("appid:",app_id);
      console.log("version:",version);
      switch(this.properties["target"]){
        case "self":
        this._target_self();
        break;
        
        case "miniProgram":
        console.log("aaa");
         this._target_miniProgram();
        break;
      }
      
    },
    _target_self(){
      var url = this.properties["url"];
      switch (this.properties["openType"]){
             case "redirectTo":
           swan.redirectTo({
               url: url
               });
           break;
        case "navigateBack":
           swan.navigateBack();
          break;
          case "navigate":
           if(this.properties["redirect"]){
              console.log("sss");
              swan.redirectTo({
              url: url,

               });
           }else{
              swan.navigateTo({
               url: url
               });
           }
          
          break;
        default:
        break;
      }
    },
    _target_miniProgram(){
      var appId = this.properties.appId;
      console.log("xxxxx:",appId);
      //  "tta6cdd07039e72db5"
       swan.navigateToMiniProgram({
           appId : "17866567",
           success(e){
             console.log("ddddd",e);
           },
           fail(e){
             console.log(e);
           }
        });
    }

  }



})
