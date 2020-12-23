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
/******/ 	return __webpack_require__(__webpack_require__.s = 25);
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
  props: {
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
module.exports = {
  props: {},
  methods: {
    ui_tap: function ui_tap() {
      if (this.props.ontap) {
        this.props.ontap();
      }
    },
    ui_touchstart: function ui_touchstart() {
      if (this.props.ontouchstart) {
        this.props.ontouchstart();
      }
    },
    ui_touchmove: function ui_touchmove() {
      if (this.props.ontouchmove) {
        this.props.ontouchmove();
      }
    },
    ui_touchcancel: function ui_touchcancel() {
      if (this.props.ontouchcancel) {
        this.props.ontouchcancel();
      }
    },
    ui_touchend: function ui_touchend() {
      if (this.props.ontouchend) {
        this.props.ontouchend();
      }
    },
    ui_longpress: function ui_longpress() {
      if (this.props.onlongpress) {
        this.props.onlongpress();
      }
    },
    ui_longtap: function ui_longtap() {
      if (this.props.onlongtap) {
        this.props.onlongtap();
      }
    },
    ui_transitionend: function ui_transitionend() {
      if (this.props.ontransitionend) {
        this.props.ontransitionend();
      }
    },
    ui_animationstart: function ui_animationstart() {
      if (this.props.onanimationstart) {
        this.props.onanimationstart();
      }
    },
    ui_animationiteration: function ui_animationiteration() {
      if (this.props.onanimationiteration) {
        this.props.onanimationiteration();
      }
    },
    ui_animationend: function ui_animationend() {
      if (this.props.onanimationend) {
        this.props.onanimationend();
      }
    },
    ui_touchforcechange: function ui_touchforcechange() {
      if (this.props.ontouchforcechange) {
        this.props.ontouchforcechange();
      }
    }
  }
};

/***/ }),

/***/ 25:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _onekit_behavior = __webpack_require__(1);

var _onekit_behavior2 = _interopRequireDefault(_onekit_behavior);

var _wxs_behavior = __webpack_require__(0);

var _wxs_behavior2 = _interopRequireDefault(_wxs_behavior);

var _weixin_behavior = __webpack_require__(2);

var _weixin_behavior2 = _interopRequireDefault(_weixin_behavior);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Component({
  behaviors: [_onekit_behavior2.default, _wxs_behavior2.default, _weixin_behavior2.default],
  options: {
    addGlobalClass: true
  },
  properties: {
    target: {
      type: String,
      value: 'self'
    },
    url: {
      type: String
    },
    // 跳转方式
    openType: {
      type: String,
      value: 'navigate'
    },
    delta: {
      type: Number,
      value: 1
    },
    appId: {
      type: String
    },
    path: {
      type: String
    },
    extraData: {
      type: Object
    },
    version: {
      type: String,
      value: 'release'
    },
    hoverClass: {
      type: String,
      value: 'navigator-hover'
    },
    hoverStartTime: {
      type: Number,
      value: 50
    },
    hoverStayTime: {
      type: Number,
      value: 600
    },
    hoverStopPropagation: {
      type: Boolean,
      value: false
    },
    bindsuccess: {
      type: String
    },
    bindfail: {
      type: String
    },
    bindcomplete: {
      type: String
    },
    headerText: {
      type: String,
      value: '默认值'
    }
  },
  data: {
    defaultStates: {}
  },
  methods: {
    view_tap: function view_tap() {
      console.log('dddddd', this.properties.openType);
      var app_id = this.properties.appId;
      var version = this.properties.version;

      console.log('appid:', app_id);
      console.log('version:', version);
      switch (this.properties.target) {
        case 'self':
          this._target_self();
          break;

        case 'miniProgram':
          console.log('aaa');
          this._target_miniProgram();
          break;

        default:
      }
    },
    _target_self: function _target_self() {
      var url = this.properties.url;
      switch (this.properties.openType) {
        case 'redirectTo':
          swan.redirectTo({
            url: url
          });
          break;
        case 'navigateBack':
          swan.navigateBack();
          break;
        case 'navigate':
          if (this.properties.redirect) {
            console.log('sss');
            swan.redirectTo({
              url: url

            });
          } else {
            swan.navigateTo({
              url: url
            });
          }

          break;
        default:
          break;
      }
    },
    _target_miniProgram: function _target_miniProgram() {
      var appId = this.properties.appId;
      console.log('xxxxx:', appId);
      //  "tta6cdd07039e72db5"
      swan.navigateToMiniProgram({
        appId: '17866567',
        success: function success(e) {
          console.log('ddddd', e);
        },
        fail: function fail(e) {
          console.log(e);
        }
      });
    }
  }

}); /* eslint-disable camelcase */
/* eslint-disable no-console */
// import wx from '../../../wx'

/* eslint-disable no-console */
/* eslint-disable camelcase */

/***/ })

/******/ });