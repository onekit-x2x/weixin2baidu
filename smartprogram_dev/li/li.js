import {OnekitPage,wx} from '../weixin2baidu/index';
global = {};

//progress
// const app = getApp()
// OnekitPage({
//     data:{},
//     activeend(e){
//         console.log(e)
//     },
//     onLoad:function(){
//         console.log('代码片段是一种迷你、可分享的小程序或小游戏项目，可用于分享小程序和小游戏的开发经验、展示组件和 API 的使用、复现开发问题和 Bug 等。可点击以下链接查看代码片段的详细文档：')
//         console.log('https://mp.weixin.qq.com/debug/wxadoc/dev/devtools/devtools.html')
//     }
// })


//button
// const types = [
//     'default',
//     'primary',
//     'warn'
// ];
// const pageObject = {
//     data:{
//         defaultSize:'default',
//         primarySize:'default',
//         warnSize:'default',
//         disabled:false,
//         plain:false,
//         loading:false
//     },
//     onShareAppMessage:function(){
//         return {
//         title:'button',
//         path:'page/component/pages/button/button'
//     };
//     },
//     setDisabled:function(){
//         this.setData({
//         disabled:!this.data.disabled
//     });
//     },
//     setPlain:function(){
//         this.setData({
//         plain:!this.data.plain
//     });
//     },
//     setLoading:function(){
//         this.setData({
//         loading:!this.data.loading
//     });
//     },
//     handleContact:function(e){
//         console.log(e.detail);
//     },
//     handleGetPhoneNumber:function(e){
//         console.log(e.detail);
//     },
//     handleGetUserInfo:function(e){
//         console.log(e.detail);
//     },
//     handleOpenSetting:function(e){
//         console.log(e.detail.authSetting);
//     },
//     handleGetUserInfo:function(e){
//         console.log(e.detail.userInfo);
//     }
// };
// for(var i = 0;(i < types.length);++i){
//     (function(type){
//         pageObject[type] = function(){
//         const key = (type + 'Size');
//         const changedData = {};
//         changedData[key] = (this.data[key] === 'default')?'mini':'default';
//         this.setData(changedData);
//     };
//     })(types[i]);
// };
// OnekitPage(pageObject);


//input
OnekitPage({
    data:{
        focus:false,
        inputValue:''
    },
    bindKeyInput:function(e){
        this.setData({
            inputValue:e.detail.value
        })
    },
    bindReplaceInput:function(e){
        var value = e.detail.value
        var pos = e.detail.cursor
        var left
        if((pos !== -1)){
        left = e.detail.value.slice(0,pos);
        pos = left.replace(/11/,'2').length;
    }
        return {
        value:value.replace(/11/,'2'),
        cursor:pos
    }
    },
    bindHideKeyboard:function(e){
        if((e.detail.value === '123')){
        wx.hideKeyboard();
    }
    }
})
