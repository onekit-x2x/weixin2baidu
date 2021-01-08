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
/******/ 	return __webpack_require__(__webpack_require__.s = 23);
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

/***/ 23:
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
    longitude: {
      type: Number,
      value: null
    },
    latitude: {
      type: Number,
      value: null
    },
    scale: {
      type: Number,
      value: 16
    },
    minScale: {
      type: Number,
      value: 3
    },
    maxScale: {
      type: Number,
      value: 20
    },
    markers: {
      type: Array,
      value: [],
      observer: function observer(markers) {
        return this._getMarker(markers);
      }
    },
    covers: {
      type: Array,
      value: null
    },
    polyline: {
      type: Array,
      value: []
    },
    circles: {
      type: Array,
      value: []
    },
    controls: {
      type: Array,
      value: [],
      observer: function observer(controls) {
        return this._getControl(controls);
      }
    },
    includePoints: {
      type: Array,
      value: []
    },
    showLocation: {
      type: Boolean,
      value: false
    },
    polygons: {
      type: Array,
      value: []
    },
    //
    subkey: {
      type: String,
      value: ''
    },
    //
    layerStyle: {
      type: Number,
      value: 1
    },
    //
    rotate: {
      type: Number,
      value: 0
    },
    //
    skew: {
      type: Boolean,
      value: false
    },
    enable3D: {
      type: Boolean,
      value: false
    },
    showCompass: {
      type: Boolean,
      value: false
    },
    //
    showScale: {
      type: Boolean,
      value: false
    },
    enableOverLooking: {
      type: Boolean,
      value: false
    },
    enableZoom: {
      type: Boolean,
      value: true
    },
    enableScroll: {
      type: Boolean,
      value: true
    },
    enableRotate: {
      type: Boolean,
      value: false
    },
    //
    enableSatellite: {
      type: Boolean,
      value: false
    },
    //
    enableTraffic: {
      type: Boolean,
      value: false
    },
    //
    enablePoi: {
      type: Boolean,
      value: false
    },
    //
    enableBuilding: {
      type: Boolean,
      value: false
    },
    //
    setting: {
      type: Boolean,
      value: false
    }
  },
  observers: {},
  attached: function attached() {
    var minScale = 3;
    var maxScale = 20;
    var scale = this.properties.scale;
    this.properties.minScale = Math.min(minScale, scale);
    this.properties.maxScale = Math.max(scale, maxScale);
    //
    this._getMarker(this.properties.markers);
    this._getControl(this.properties.controls);
  },

  methods: {
    map_tap: function map_tap(e) {
      this.triggerEvent('Tap', e.detail);
    },
    map_markertap: function map_markertap(e) {
      this.triggerEvent('Tap', e.detail);
    },

    //
    trigger_labeltap: function trigger_labeltap(e) {
      // console.warn('暂不支持!')
      this.triggerEvent('Labeltap', e.detail);
    },
    map_controltap: function map_controltap(e) {
      this.triggerEvent('Controltap', e.detail);
    },
    map_callouttap: function map_callouttap(e) {
      this.triggerEvent('Callouttap', e.detail);
    },
    map_updated: function map_updated(e) {
      this.triggerEvent('Updated', e.detail);
    },
    map_regionchange: function map_regionchange(e) {
      this.triggerEvent('Regionchange', e.detail);
    },
    map_poitap: function map_poitap(e) {
      this.triggerEvent('Poitap', e.detail);
    },

    //
    trigger_anchorpointtap: function trigger_anchorpointtap(e) {
      // console.warn('暂不支持!')
      this.triggerEvent('Anchorpointtap', e.detail);
    },
    _getMarker: function _getMarker(markers) {
      if (!Array.isArray(markers)) {
        markers = Object.values(markers[0]);
      }
      // markers.map(marker => {
      //   marker.controlId = marker.id
      //   delete Object.marker.id
      //   return marker
      // })
      this.setData({
        markers: markers
      });
    },
    _getControl: function _getControl(controls) {
      if (!Array.isArray(controls)) {
        controls = Object.values(controls[0]);
      }
      // this.setData({
      //   controls: arr.map(control => {
      //     control.controlId = control.id
      //     delete Object.control.id
      //     return control
      //   })
      // })
      this.setData({
        controls: controls
      });
    }
  }
}); /* eslint-disable no-console */
/* eslint-disable camelcase */

/***/ })

/******/ });