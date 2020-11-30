import {OnekitPage,wx} from '../weixin2baidu/index';

global = {};
OnekitPage({
  data: {},
  onLoad: () => {
    const base64 = 'CxYh'
    const arrayBuffer = wx.base64ToArrayBuffer(base64)
    console.log(arrayBuffer)
  }
});