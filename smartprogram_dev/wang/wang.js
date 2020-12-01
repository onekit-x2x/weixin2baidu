import {OnekitPage} from '../weixin2baidu/index';
import {wx} from '../weixin2baidu/index'

global = {};
OnekitPage({
  data: {},
  onLoad() {
    const opt = wx.getEnterOptionsSync()
    console.log(opt)
  }
});