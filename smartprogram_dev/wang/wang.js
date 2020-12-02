import {OnekitPage} from '../weixin2baidu/index';
import {wx} from '../weixin2baidu/index'
import {STRING} from 'oneutil'

global = {};
OnekitPage({
  data: {},
  onLoad() {
    const base64 = 'CxYh'
    const arrayBuffer = wx.base64ToArrayBuffer(base64)
    // const arr2 = STRING.string2arraybuffer(base64)

    const bs4 = wx.arrayBufferToBase64(arrayBuffer)
    console.log(arrayBuffer)
    console.log(bs4)

  }
});