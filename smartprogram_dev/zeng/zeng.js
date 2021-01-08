import {OnekitPage} from '../weixin2baidu/index';
import {wx} from '../weixin2baidu/index'
// import {STRING} from 'oneutil'

global = {};
OnekitPage({
  data: {},
  onLoad() {
    wx.chooseMedia({
        mediaType: 'image',
        success:res=>{
          console.log(res)
        }
      })
  }
});