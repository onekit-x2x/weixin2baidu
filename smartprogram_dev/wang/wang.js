import {OnekitPage,wx} from '../weixin2baidu/index';

global = {};
OnekitPage({
  data: {},
  onLoad() {
    const opt = wx.getLaunchOptionsSync()
    console.log(opt)
  }
});