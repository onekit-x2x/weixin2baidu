import {OnekitPage,wx} from '../weixin2baidu/index';

global = {};
OnekitPage({
  data: {},
  onLoad: () => {
    const arrayBuffer = new Uint8Array([11, 22, 33])
    const base64 = wx.arrayBufferToBase64(arrayBuffer)
    console.log(arrayBuffer)
    console.log(base64)
  }
});