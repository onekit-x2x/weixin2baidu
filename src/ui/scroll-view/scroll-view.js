/* eslint-disable max-len */
/* eslint-disable no-console */
let touch; let moved; let startY; let diff
let pagePull = true
let refresher
Component({
  options: {
    addGlobalClass: true,
  },
  properties: {
    onekitId: {type: String, value: ''},
    onekitClass: {type: String, value: ''},
    onekitStyle: {type: String, value: ''},
    scrollY: {
      type: Boolean,
      value: false,
    },
    scrollX: {
      type: Boolean,
      value: false,
    },
    upperThreshold: {
      type: Number,
      value: 50,
    },
    lowerThreshold: {
      type: Number,
      value: 50,
    },
    scrollIntoView: {
      type: String,
      value: '',
    },
    scrollTop: {
      type: Number,
      value: '',
    },
    scrollLeft: {
      type: Number,
      value: '',
    },
    scrollWithAnimation: {
      type: Boolean,
      value: false,
    },
    enableBackToTop: {
      type: Boolean,
      value: false,
    },
    refresherEnabled: {
      type: Boolean,
      value: false,
    },
    refresherThreshold: {
      type: Number,
      value: 45,
    },
    refresherDefaultStyle: {
      type: String,
      value: 'black',
    },
    refresherBackground: {
      type: String,
      value: '#fff'
    }

  },
  data: {
    refresher_height: 0
  },
  methods: {
    css() {
      // var transition = "all " + t + "ms";
      // this.setData({transition});
    },
    on_Touchstart(e) {
      if (!this.properties.refresherEnabled) {
        return
      }
      /*  if (scrollView.scrollTop > 0) {
             //当页面已经有滚动或者不是置顶的时候，不需要进行下拉刷新，是页面正常的滑动
             touch = false;
             return;
           } */
      touch = true // 触摸开始
      moved = false // 还没有进行下拉刷新的滑动
      startY = e.touches[0].clientY
      this.triggerEvent('refresherpulling', {})
    },
    on_Touchmove(e) {
      // console.log('on_Touchmove:', e);
      if (!this.properties.refresherEnabled) {
        return
      }
      if (!touch || !pagePull) {
        return
      }
      const touchesDiff = e.touches[0].clientY - startY // 计算的移动位移
      if (touchesDiff < 0) {
        // 说明页面是向上滑的，不做任何操作
        moved = false
        return
      }
      moved = true
      diff = touchesDiff
      let distance = 0
      if (diff <= this.properties.refresherThreshold) {
        // moveDiff至少要等于loading的高度
        // 当滑动小于规定的临界值时
        distance = diff
        this.setData({text: 'zzzzzzz'})
      } else {
        //  '释放可刷新';
        // 弹性
        // eslint-disable-next-line no-lonely-if
        if (touchesDiff <= (2 * this.properties.refresherThreshold)) {
          distance = this.properties.refresherThreshold + 0.5 * (touchesDiff - this.properties.refresherThreshold)
        } else {
          distance = this.properties.refresherThreshold + 0.1 * (touchesDiff - this.properties.refresherThreshold) + 0.05 * (touchesDiff - 2 * this.properties.refresherThreshold)
        }
      }
      if (distance > 0) {
        if (this.properties.onRefresherpulling) {
          this.triggerEvent('refresherpulling', {})
        }
        //  e.preventDefault();
        // 滑动的距离
        this.css(refresher, 0)
        this.setData({refresher_height: distance})
      }
    },
    on_Touchend() {
      if (!this.properties.refresherEnabled) {
        return
      }
      if (!touch || !moved) {
        this.setData({refresher_height: 0})
        return
      }
      this.css(refresher, 300)
      pagePull = false
      if (diff > this.properties.refresherThreshold) {
        //  '刷新中';

        this.setData({refresher_height: this.properties.refresherThreshold})
        setTimeout(() => {
          this.css(refresher, 300)
          this.setData({refresher_height: 0})
          setTimeout(() => {
            pagePull = true // 控制在刷新期间，重复向下拉动，不做任何操作
          }, 300)
        }, 500)
      } else {
        pagePull = true
        this.setData({refresher_height: 0})
      }
    },
    on_Touchcancel(e) {
      console.log('on_Touchcancel:', e)
      this.triggerEvent('refresherabort', {})
    },
    // ////////////////////////////////
    scrollToupper(e) {
      console.log('scrollToupper', e)
      this.triggerEvent('scrolltoupper', e.details)
    },
    scrollTolower(e) {
      console.log('scrollTolower', e)
      this.triggerEvent('scrolltolower', e.details)
    },
    scrollScroll(e) {
      console.log('scrollScroll', e)
      this.triggerEvent('scroll', e.details)
    },
  },
})
