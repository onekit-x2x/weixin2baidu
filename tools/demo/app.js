import {OnekitApp} from './weixin2baidu/index';
import {wx} from './weixin2baidu/index';
OnekitApp({
    onLaunch:function(){
        console.log('App Launch');
    },
    onShow:function(){
        console.log('App Show');
    },
    onHide:function(){
        console.log('App Hide');
    }
});
