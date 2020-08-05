import {OnekitApp,OnekitPage,OnekitComponent} from '../../../../onekit/onekit.js';
import wx from '../../../../onekit/wx.js';
const defaultTabBarStyle = {
    color:'#7A7E83',
    selectedColor:'#3cc51f',
    backgroundColor:'#ffffff'
};
const defaultItemName = '接口';
OnekitComponent({
    data:{
        hasSetTabBarBadge:false,
        hasShownTabBarRedDot:false,
        hasCustomedStyle:false,
        hasCustomedItem:false,
        hasHiddenTabBar:false
    },
    attached:    function(){
        wx.pageScrollTo({
        scrollTop:0,
        duration:0
    });
    }
,
    detached:    function(){
        this.removeTabBarBadge();
        this.hideTabBarRedDot();
        this.showTabBar();
        this.removeCustomStyle();
        this.removeCustomItem();
    }
,
    methods:{
        navigateBack:        function(){
            this.triggerEvent('unmount');
        }
,
        setTabBarBadge:        function(){
            if(this.data.hasSetTabBarBadge){
            this.removeTabBarBadge();
            return;
        }
            this.setData({
            hasSetTabBarBadge:true
        });
            wx.setTabBarBadge({
            index:1,
            text:'1'
        });
        }
,
        removeTabBarBadge:        function(){
            this.setData({
            hasSetTabBarBadge:false
        });
            wx.removeTabBarBadge({
            index:1
        });
        }
,
        showTabBarRedDot:        function(){
            if(this.data.hasShownTabBarRedDot){
            this.hideTabBarRedDot();
            return;
        }
            this.setData({
            hasShownTabBarRedDot:true
        });
            wx.showTabBarRedDot({
            index:1
        });
        }
,
        hideTabBarRedDot:        function(){
            this.setData({
            hasShownTabBarRedDot:false
        });
            wx.hideTabBarRedDot({
            index:1
        });
        }
,
        showTabBar:        function(){
            this.setData({
            hasHiddenTabBar:false
        });
            wx.showTabBar();
        }
,
        hideTabBar:        function(){
            if(this.data.hasHiddenTabBar){
            this.showTabBar();
            return;
        }
            this.setData({
            hasHiddenTabBar:true
        });
            wx.hideTabBar();
        }
,
        customStyle:        function(){
            if(this.data.hasCustomedStyle){
            this.removeCustomStyle();
            return;
        }
            this.setData({
            hasCustomedStyle:true
        });
            wx.setTabBarStyle({
            color:'#FFF',
            selectedColor:'#1AAD19',
            backgroundColor:'#000000'
        });
        }
,
        removeCustomStyle:        function(){
            this.setData({
            hasCustomedStyle:false
        });
            wx.setTabBarStyle(defaultTabBarStyle);
        }
,
        customItem:        function(){
            if(this.data.hasCustomedItem){
            this.removeCustomItem();
            return;
        }
            this.setData({
            hasCustomedItem:true
        });
            wx.setTabBarItem({
            index:1,
            text:'API'
        });
        }
,
        removeCustomItem:        function(){
            this.setData({
            hasCustomedItem:false
        });
            wx.setTabBarItem({
            index:1,
            text:defaultItemName
        });
        }

    }
});
