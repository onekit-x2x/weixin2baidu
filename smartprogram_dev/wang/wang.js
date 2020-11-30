import {OnekitPage,wx} from '../weixin2baidu/index';

global = {};
OnekitPage({
  data: {},
  onLoad: () => {
    wx.updateWeChatApp({
      success: res => {
        console.log(res)
      }
    })
  }
});