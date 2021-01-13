module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 24);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
exports.default = {
  methods: {
    selectComponent: function selectComponent(selector) {},
    selectAllComponents: function selectAllComponents(selctor) {},
    setStyle: function setStyle(styleDict) {
      var onekit_styles = '';
      for (var _iterator = Object.keys(styleDict), _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
        var _ref;

        if (_isArray) {
          if (_i >= _iterator.length) break;
          _ref = _iterator[_i++];
        } else {
          _i = _iterator.next();
          if (_i.done) break;
          _ref = _i.value;
        }

        var cssName = _ref;

        onekit_styles += cssName + ':' + styleDict[cssName] + ';';
      }
      this.setData({ onekit_styles: onekit_styles });
    },
    addClass: function addClass(className) {},
    removeClass: function removeClass(className) {},
    hasClass: function hasClass(className) {},
    getDataset: function getDataset() {},
    callMethod: function callMethod(funcName, args) {},
    requestAnimationFrame: function requestAnimationFrame(callback) {},
    getState: function getState() {},
    getComputedStyle: function getComputedStyle(cssNames) {}
  }
};

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = {
  properties: {
    onekitClass: '',
    onekitStyle: '',
    onekitId: ''
  }
};

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint-disable no-console */
/* eslint-disable camelcase */
module.exports = Behavior({

  properties: {
    animation: { type: Object }
  },
  methods: {
    ui_tap: function ui_tap() {
      this.triggerEvent('Tap');
    },
    ui_touchstart: function ui_touchstart() {
      this.triggerEvent('Touchstart');
    },
    ui_touchmove: function ui_touchmove() {
      this.triggerEvent('Touchmove');
    },
    ui_touchcancel: function ui_touchcancel() {
      this.triggerEvent('Touchcancel');
    },
    ui_touchend: function ui_touchend() {
      this.triggerEvent('Touchend');
    },
    ui_longpress: function ui_longpress() {
      this.triggerEvent('Longpress');
    },
    ui_longtap: function ui_longtap() {
      this.triggerEvent('Longtap');
    },
    ui_transitionend: function ui_transitionend() {
      this.triggerEvent('Transitionend');
    },
    ui_animationstart: function ui_animationstart() {
      this.triggerEvent('Animationstart');
    },
    ui_animationiteration: function ui_animationiteration() {
      this.triggerEvent('Animationiteration');
    },
    ui_animationend: function ui_animationend() {
      this.triggerEvent('Animationend');
    },
    ui_touchforcechange: function ui_touchforcechange() {
      this.triggerEvent('Touchforcechange');
    }
  }
});

/***/ }),

/***/ 24:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _onekit_behavior = __webpack_require__(1);

var _onekit_behavior2 = _interopRequireDefault(_onekit_behavior);

var _wxs_behavior = __webpack_require__(0);

var _wxs_behavior2 = _interopRequireDefault(_wxs_behavior);

var _weixin_behavior = __webpack_require__(2);

var _weixin_behavior2 = _interopRequireDefault(_weixin_behavior);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var touch = void 0; /* eslint-disable max-len */
/* eslint-disable no-console */
/* eslint-disable camelcase */
var moved = void 0;var startY = void 0;var diff = void 0;
var pagePull = true;
var refresher = void 0;

Component({
  behaviors: [_onekit_behavior2.default, _wxs_behavior2.default, _weixin_behavior2.default],
  options: {
    addGlobalClass: true
  },
  properties: {
    scrollX: {
      type: Boolean,
      value: false
    },
    scrollY: {
      type: Boolean,
      value: false
    },
    upperThreshold: {
      type: Number,
      value: 50
    },
    lowerThreshold: {
      type: Number,
      value: 50
    },
    scrollTop: {
      type: Number,
      value: ''
    },
    scrollLeft: {
      type: Number,
      value: ''
    },
    scrollIntoView: {
      type: String,
      value: ''
    },
    scrollWithAnimation: {
      type: Boolean,
      value: false
    },
    enableBackToTop: {
      type: Boolean,
      value: false
    },
    //
    enableFlex: {
      type: Boolean,
      value: false
    },
    scrollAnchoring: {
      type: Boolean,
      value: false
    },
    refresherEnabled: {
      type: Boolean,
      value: false
    },
    refresherThreshold: {
      type: Number,
      value: 45
    },
    refresherDefaultStyle: {
      type: String,
      value: 'black'
    },
    refresherBackground: {
      type: String,
      value: '#fff'
    },
    refresherTriggered: {
      type: Boolean,
      value: false
    },
    enhanced: {
      type: Boolean,
      value: false
    },
    bounces: {
      type: Boolean,
      value: true
    },
    showScrollbar: {
      type: Boolean,
      value: true
    },
    pagingEnabled: {
      type: Boolean,
      value: false
    },
    fastDeceleration: {
      type: Boolean,
      value: false
    }
  },
  data: {
    refresher_height: 0
  },
  methods: {
    css: function css() {
      // var transition = "all " + t + "ms";
      // this.setData({transition});
    },
    on_Touchstart: function on_Touchstart(e) {
      if (!this.properties.refresherEnabled) {
        return;
      }
      /*  if (scrollView.scrollTop > 0) {
             //当页面已经有滚动或者不是置顶的时候，不需要进行下拉刷新，是页面正常的滑动
             touch = false;
             return;
           } */
      touch = true; // 触摸开始
      moved = false; // 还没有进行下拉刷新的滑动
      startY = e.touches[0].clientY;
      this.triggerEvent('refresherpulling', {});
    },
    on_Touchmove: function on_Touchmove(e) {
      // console.log('on_Touchmove:', e);
      if (!this.properties.refresherEnabled) {
        return;
      }
      if (!touch || !pagePull) {
        return;
      }
      var touchesDiff = e.touches[0].clientY - startY; // 计算的移动位移
      if (touchesDiff < 0) {
        // 说明页面是向上滑的，不做任何操作
        moved = false;
        return;
      }
      moved = true;
      diff = touchesDiff;
      var distance = 0;
      if (diff <= this.properties.refresherThreshold) {
        // moveDiff至少要等于loading的高度
        // 当滑动小于规定的临界值时
        distance = diff;
        this.setData({ text: 'zzzzzzz' });
      } else {
        //  '释放可刷新';
        // 弹性
        // eslint-disable-next-line no-lonely-if
        if (touchesDiff <= 2 * this.properties.refresherThreshold) {
          distance = this.properties.refresherThreshold + 0.5 * (touchesDiff - this.properties.refresherThreshold);
        } else {
          distance = this.properties.refresherThreshold + 0.1 * (touchesDiff - this.properties.refresherThreshold) + 0.05 * (touchesDiff - 2 * this.properties.refresherThreshold);
        }
      }
      if (distance > 0) {
        if (this.properties.onRefresherpulling) {
          this.triggerEvent('refresherpulling', {});
        }
        //  e.preventDefault();
        // 滑动的距离
        this.css(refresher, 0);
        this.setData({ refresher_height: distance });
      }
    },
    on_Touchend: function on_Touchend() {
      var _this = this;

      if (!this.properties.refresherEnabled) {
        return;
      }
      if (!touch || !moved) {
        this.setData({ refresher_height: 0 });
        return;
      }
      this.css(refresher, 300);
      pagePull = false;
      if (diff > this.properties.refresherThreshold) {
        //  '刷新中';

        this.setData({ refresher_height: this.properties.refresherThreshold });
        setTimeout(function () {
          _this.css(refresher, 300);
          _this.setData({ refresher_height: 0 });
          setTimeout(function () {
            pagePull = true; // 控制在刷新期间，重复向下拉动，不做任何操作
          }, 300);
        }, 500);
      } else {
        pagePull = true;
        this.setData({ refresher_height: 0 });
      }
    },
    on_Touchcancel: function on_Touchcancel(e) {
      console.log('on_Touchcancel:', e);
      this.triggerEvent('refresherabort', {});
    },

    // ////////////////////////////////
    scrollToupper: function scrollToupper(e) {
      console.log('scrollToupper', e);
      this.triggerEvent('scrolltoupper', e.details);
    },
    scrollTolower: function scrollTolower(e) {
      console.log('scrollTolower', e);
      this.triggerEvent('scrolltolower', e.details);
    },
    scrollScroll: function scrollScroll(e) {
      console.log('scrollScroll', e);
      this.triggerEvent('scroll', e.details);
    }
  }
});

/***/ })

/******/ });