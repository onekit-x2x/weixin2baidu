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
/******/ 	return __webpack_require__(__webpack_require__.s = 26);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
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
/* 1 */
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
/* 2 */
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
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _CanvasContext = __webpack_require__(4);

var _CanvasContext2 = _interopRequireDefault(_CanvasContext);

var _VideoContext = __webpack_require__(5);

var _VideoContext2 = _interopRequireDefault(_VideoContext);

var _CameraContext = __webpack_require__(6);

var _CameraContext2 = _interopRequireDefault(_CameraContext);

var _InnerAudioContext = __webpack_require__(7);

var _InnerAudioContext2 = _interopRequireDefault(_InnerAudioContext);

var _LivePlayerContext = __webpack_require__(8);

var _LivePlayerContext2 = _interopRequireDefault(_LivePlayerContext);

var _WORKER = __webpack_require__(9);

var _WORKER2 = _interopRequireDefault(_WORKER);

var _PROMISE = __webpack_require__(10);

var _PROMISE2 = _interopRequireDefault(_PROMISE);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /* eslint-disable no-console */
/* eslint-disable camelcase */

// import onekit from 'oneutil'


// import wx_cloud from './wx.cloud'

var wx = function () {
  function wx() {
    _classCallCheck(this, wx);
  }

  // ///////////////// animation //////////////////////////
  wx.createAnimation = function createAnimation(object) {
    return swan.createAnimation(object);
  };

  // /////////////// basic ////////////////////////////////


  wx.canIUse = function canIUse(schema) {
    return swan.canIUse(schema);
  };

  wx.base64ToArrayBuffer = function base64ToArrayBuffer(base64) {
    base64 = base64.replace(/\s/g, '+');
    var commonContent = Buffer.from(base64, 'base64');
    return commonContent;
  };

  wx.arrayBufferToBase64 = function arrayBufferToBase64(arrayBuffer) {
    var base64Content = Buffer.from(arrayBuffer).toString('base64');
    return base64Content;
  };

  wx.getSystemInfo = function getSystemInfo(object) {
    return swan.getSystemInfo(object);
  };

  wx.getSystemInfoSync = function getSystemInfoSync() {
    return swan.getSystemInfoSync();
  };

  wx.getUpdateManager = function getUpdateManager() {
    return swan.getUpdateManager();
  };

  wx.updateWeChatApp = function updateWeChatApp(wx_object) {
    var wx_success = wx_object.success;
    var wx_fail = wx_object.fail;
    var wx_complete = wx_object.complete;
    // onekit.PROMISE((SUCCESS) => {
    //   const errMsg = 'private_openUrl:ok'
    //   SUCCESS(errMsg)
    // }, wx_success, wx_complete, wx_fail)
    // return true

    try {
      var errMsg = 'private_openUrl:ok';
      if (wx_success) {
        wx_success(errMsg);
      }
      if (wx_complete) {
        wx_complete(errMsg);
      }
    } catch (e) {
      if (wx_fail) {
        wx_fail(e);
      }
      if (wx_complete) {
        wx_complete();
      }
    }
  };

  wx.getLaunchOptionsSync = function getLaunchOptionsSync() {
    var res = {
      path: 'index/index',
      query: {},
      referrerInfo: {},
      scence: 1001,
      shareTicket: ''
    };
    return res;
  };

  wx.getEnterOptionsSync = function getEnterOptionsSync() {
    var res = {
      path: 'index/index',
      query: {},
      referrerInfo: {},
      scence: 1001,
      shareTicket: ''
    };
    return res;
  };

  wx.onUnhandledRejection = function onUnhandledRejection() {
    console.warn('BaiDu is not support !');
  };

  wx.onThemeChange = function onThemeChange() {
    var res = {
      theme: 'light' || false
    };
    return res;
  };

  wx.onPageNotFound = function onPageNotFound() {
    return swan.onPageNotFound();
  };

  wx.onError = function onError() {
    return swan.onError();
  };

  wx.offError = function offError(object) {
    return swan.offError(object);
  };

  wx.offPageNotFound = function offPageNotFound(object) {
    return swan.offPageNotFound(object);
  };

  wx.onAudioInterruptionBegin = function onAudioInterruptionBegin() {
    return console.warn('onAudioInterruptionBegin is not support');
  };

  wx.onAudioInterruptionEnd = function onAudioInterruptionEnd() {
    return console.warn('onAudioInterruptionEnd is not support');
  };

  wx.offAppShow = function offAppShow(object) {
    return swan.offAppShow(object);
  };

  wx.onAppShow = function onAppShow(object) {
    return swan.onAppShow(object);
  };

  wx.offAppHide = function offAppHide(object) {
    return swan.offAppHide(object);
  };

  wx.onAppHide = function onAppHide(object) {
    return swan.onAppHide(object);
  };

  wx.setEnableDebug = function setEnableDebug(object) {
    return swan.setEnableDebug(object);
  };

  wx.getRealtimeLogManager = function getRealtimeLogManager() {
    return console.warn('getRealtimeLogManager is not support');
  };

  wx.getLogManager = function getLogManager() {
    return console.warn('getLogManager is not support');
  };

  wx.offUnhandledRejection = function offUnhandledRejection() {
    return console.warn('offUnhandledRejection is not support');
  };

  wx.offThemeChange = function offThemeChange() {
    return console.warn('offUnhandledRejection is not support');
  };

  wx.offAudioInterruptionBegin = function offAudioInterruptionBegin() {
    return console.warn('offAudioInterruptionBegin is not support');
  };

  wx.offAudioInterruptionEnd = function offAudioInterruptionEnd() {
    return console.warn('offAudioInterruptionEnd is not support');
  };

  // ///////////////// Canvas ///////////////////
  // static drawCanvas(object) {
  //   const canvasId = object.canvasId
  //   const actions = object.actions
  //   const canvasContext = swan.createCanvasContext(canvasId)
  //   for (const action of actions) {
  //     const data = action.data
  //     switch (action.method) {
  //       case 'save':
  //         canvasContext.save()
  //         break
  //       case 'restore':
  //         canvasContext.restore()
  //         break
  //       case 'setFillStyle':
  //         canvasContext.setFillStyle(onekit.color.array2str(data[1]))
  //         break
  //       case 'setStrokeStyle':
  //         canvasContext.setStrokeStyle(onekit.color.array2str(data[1]))
  //         break
  //       case 'setFontSize':
  //         canvasContext.setFontSize(data[0])
  //         break
  //       case 'setGlobalAlpha':
  //         canvasContext.setGlobalAlpha(data[0])
  //         break
  //       case 'setShadow':
  //         canvasContext.setShadow(data[0], data[1], data[2], onekit.color.array2str(data[3]))
  //         break
  //       case 'drawImage':
  //         // eslint-disable-next-line prefer-spread
  //         canvasContext.drawImage.apply(canvasContext, data)
  //         break
  //       case 'fillText':
  //         // eslint-disable-next-line prefer-spread
  //         canvasContext.fillText.apply(canvasContext, data)
  //         break
  //       case 'setLineCap':
  //         canvasContext.setLineCap(data[0])
  //         break
  //       case 'setLineJoin':
  //         canvasContext.setLineJoin(data[0])
  //         break
  //       case 'setLineWidth':
  //         canvasContext.setLineWidth(data[0])
  //         break
  //       case 'setMiterLimit':
  //         canvasContext.setMiterLimit(data[0])
  //         break
  //       case 'rotate':
  //         canvasContext.rotate(data[0])
  //         break
  //       case 'scale':
  //         canvasContext.scale(data[0], data[1])
  //         break
  //       case 'translate':
  //         canvasContext.translate(data[0], data[1])
  //         break
  //       case 'strokePath':
  //         canvasContext.beginPath()
  //         for (const dat of data) {
  //           const dt = dat.data
  //           switch (dat.method) {
  //             case 'rect':
  //               canvasContext.strokeRect(dt[0], dt[1], dt[2], dt[3])
  //               break
  //             case 'moveTo':
  //               canvasContext.moveTo(dt[0], dt[1])
  //               break
  //             case 'lineTo':
  //               canvasContext.lineTo(dt[0], dt[1])
  //               break
  //             case 'closePath':
  //               canvasContext.closePath()
  //               break
  //               // eslint-disable-next-line prefer-spread
  //             case 'arc':
  //               // canvasContext.arc.apply(canvasContext, dt)
  //               break
  //             case 'quadraticCurveTo':
  //               // canvasContext.quadraticCurveTo.apply(canvasContext, dt)
  //               break
  //             case 'bezierCurveTo':
  //               // canvasContext.bezierCurveTo.apply(canvasContext, dt)
  //               break

  //             default:
  //               console.warn('[drawCanvas-strokePath]', dat.method)
  //               break
  //           }
  //         }
  //         canvasContext.stroke()
  //         break
  //       case 'fillPath':
  //         for (const dat of data) {
  //           const dt = dat.data
  //           switch (dat.method) {
  //             case 'rect':
  //               canvasContext.fillRect(dt[0], dt[1], dt[2], dt[3])
  //               break
  //             case 'arc':
  //               // canvasContext.arc.apply(canvasContext, dt)
  //               break
  //             default:
  //               console.warn('[drawCanvas-fillPath]', dat.method)
  //               break
  //           }
  //         }
  //         canvasContext.fill()
  //         break
  //       case 'clearRect':
  //         canvasContext.clearRect(data[0], data[1], data[2], data[3])
  //         break
  //       default:
  //         console.warn('[drawCanvas]', action.method)
  //         break
  //     }
  //   }
  //   canvasContext.draw()
  // }

  // ///////////////////////////////////////////


  wx.setBackgroundFetchToken = function setBackgroundFetchToken(swan_object) {
    var wx_token = swan_object.token;
    var wx_success = swan_object.success;
    // const wx_fail = swan_object.fail
    var wx_complete = swan_object.complete;
    // ///////////////
    swan.setStorage({
      key: 'wx_token',
      data: {
        wx_token: wx_token
      }
    });
    swan_object.success = function () {
      var wx_res = {
        errMsg: 'setBackgroundFetchToken:ok'
      };
      if (wx_success) {
        wx_success(wx_res);
      }
      if (wx_success) {
        wx_complete(wx_res);
      }
    };
  };

  wx.getBackgroundFetchToken = function getBackgroundFetchToken(swan_object) {
    var wx_success = swan_object.success;
    // const wx_fail = swan_object.fail
    var wx_complete = swan_object.complete;
    console.log(wx_success);
    swan.getStorage({
      key: 'wx_token',
      success: function success(res) {
        console.log(res.data);
      }
    });
    swan_object.success = function () {
      var wx_res = {
        errMsg: 'getBackgroundFetchToken:ok'
      };
      console.log('', wx_res);

      if (wx_success) {
        wx_success(wx_res);
      }
      if (wx_success) {
        wx_complete(wx_res);
      }
    };
  };

  wx.onBackgroundFetchData = function onBackgroundFetchData() {
    return console.warn('onBackgroundFetchData is not support');
  };

  wx.getBackgroundFetchData = function getBackgroundFetchData() {
    return console.warn('getBackgroundFetchData is not support');
  };

  // static createContext() { return new CanvasContext(); }


  wx.createCanvasContext = function createCanvasContext(canvasId) {
    return new _CanvasContext2.default(swan.createCanvasContext(canvasId));
  };

  wx.createVideoContext = function createVideoContext(videoId) {
    return new _VideoContext2.default(swan.createVideoContext(videoId));
  };

  wx.createInnerAudioContext = function createInnerAudioContext(audioId) {
    return new _InnerAudioContext2.default(swan.createInnerAudioContext(audioId));
  };

  wx.createLivePlayerContext = function createLivePlayerContext(livePlayerId) {
    return new _LivePlayerContext2.default(swan.createLivePlayerContext(livePlayerId));
  };

  wx.createCameraContext = function createCameraContext() {
    return new _CameraContext2.default(swan.createCameraContext());
  };

  wx.createOffscreenCanvas = function createOffscreenCanvas() {
    return console.warn('createOffscreenCanvas is not support');
  };

  wx.canvasToTempFilePath = function canvasToTempFilePath(object) {
    return swan.canvasToTempFilePath(object);
  };

  wx.canvasPutImageData = function canvasPutImageData(object) {
    return swan.canvasPutImageData(object);
  };

  wx.canvasGetImageData = function canvasGetImageData(object) {
    return swan.canvasGetImageData(object);
  };

  // //////////// Device //////////////////


  wx.onBeaconServiceChange = function onBeaconServiceChange() {
    return console.warn('onBeaconServiceChange is not support');
  };

  wx.onBeaconUpdate = function onBeaconUpdate() {
    return console.warn('onBeaconUpdate is not support');
  };

  wx.getBeacons = function getBeacons() {
    return console.warn('getBeacons is not support');
  };

  wx.stopBeaconDiscovery = function stopBeaconDiscovery() {
    return console.warn('stopBeaconDiscovery is not support');
  };

  wx.startBeaconDiscovery = function startBeaconDiscovery() {
    return console.warn('startBeaconDiscovery is not support');
  };

  wx.offBeaconUpdate = function offBeaconUpdate() {
    return console.warn('offBeaconUpdate is not support');
  };

  wx.offBeaconServiceChange = function offBeaconServiceChange() {
    return console.warn('offBeaconServiceChange is not support');
  };

  wx.stopWifi = function stopWifi() {
    return console.warn('stopWifi is not support');
  };

  wx.startWifi = function startWifi() {
    return console.warn('startWifi is not support');
  };

  wx.setWifiList = function setWifiList() {
    return console.warn('setWifiList is not support');
  };

  wx.onWifiConnected = function onWifiConnected() {
    return console.warn('onWifiConnected is not support');
  };

  wx.onGetWifiList = function onGetWifiList() {
    return console.warn('onGetWifiList is not support');
  };

  wx.offWifiConnected = function offWifiConnected() {
    return console.warn('offWifiConnected is not support');
  };

  wx.offGetWifiList = function offGetWifiList() {
    return console.warn('offGetWifiList is not support');
  };

  wx.getWifiList = function getWifiList() {
    return console.warn('getWifiList is not support');
  };

  wx.getConnectedWifi = function getConnectedWifi() {
    return console.warn('getConnectedWifi is not support');
  };

  wx.connectWifi = function connectWifi() {
    return console.warn('connectWifi is not support');
  };

  //


  wx.onAccelerometerChange = function onAccelerometerChange(callback) {
    return swan.onAccelerometerChange(callback);
  };

  wx.offAccelerometerChange = function offAccelerometerChange() {
    return console.warn('offAccelerometerChange is not support');
  };

  wx.stopAccelerometer = function stopAccelerometer(object) {
    return swan.stopAccelerometer(object);
  };

  wx.startAccelerometer = function startAccelerometer(object) {
    return swan.startAccelerometer(object);
  };

  wx.getBatteryInfoSync = function getBatteryInfoSync(object) {
    return swan.getBatteryInfoSync(object);
  };

  wx.getBatteryInfo = function getBatteryInfo(object) {
    return swan.getBatteryInfo(object);
  };

  //


  wx.getClipboardData = function getClipboardData(object) {
    return swan.getClipboardData(object);
  };

  wx.setClipboardData = function setClipboardData(object) {
    return swan.setClipboardData(object);
  };

  wx.onCompassChange = function onCompassChange(callback) {
    this._CompassChange = callback;
  };

  wx.offCompassChange = function offCompassChange() {
    this._CompassChange = null;
  };

  wx.stopCompass = function stopCompass(object) {
    return swan.stopCompass(object);
  };

  wx.startCompass = function startCompass(wx_object) {
    var wx_success = wx_object.success;
    var wx_fail = wx_object.fail;
    var wx_complete = wx_object.complete;
    wx_object = null;
    (0, _PROMISE2.default)(function (SUCCESS, FAIL) {
      swan.startCompass({
        success: function success(res) {
          swan.onCompassChange(function (res) {
            console.log(res);
            if (getApp().onekit_CompassChange) {
              getApp().onekit_CompassChange(res);
            }
          });
          SUCCESS(res);
        },
        fail: function fail(err) {
          FAIL(err);
        }
      });
    }, wx_success, wx_fail, wx_complete);
  };

  wx.addPhoneContact = function addPhoneContact(object) {
    return swan.addPhoneContact(object);
  };

  wx.checkIsOpenAccessibility = function checkIsOpenAccessibility() {
    return console.warn('checkIsOpenAccessibility is not support');
  };

  wx.onGyroscopeChange = function onGyroscopeChange(callback) {
    return swan.onGyroscopeChange(callback);
  };

  wx.stopGyroscope = function stopGyroscope(object) {
    return swan.stopGyroscope(object);
  };

  wx.startGyroscope = function startGyroscope(object) {
    return swan.startGyroscope(object);
  };

  //


  wx.onDeviceMotionChange = function onDeviceMotionChange(callback) {
    getApp().onekit_DeviceMotionChange = callback;
  };

  wx.offDeviceMotionChange = function offDeviceMotionChange() {
    getApp().onekit_DeviceMotionChange = null;
  };

  wx.stopDeviceMotionListening = function stopDeviceMotionListening(object) {
    return swan.stopDeviceMotionListening(object);
  };

  wx.startDeviceMotionListening = function startDeviceMotionListening(wx_object) {
    var wx_success = wx_object.success;
    var wx_fail = wx_object.fail;
    var wx_complete = wx_object.complete;
    wx_object = null;
    (0, _PROMISE2.default)(function (SUCCESS, FAIL) {
      swan.startDeviceMotionListening({
        success: function success(res) {
          swan.onDeviceMotionChange(function (res) {
            if (getApp().onekit_DeviceMotionChange) {
              getApp().onekit_DeviceMotionChange(res);
            }
          });
          SUCCESS(res);
        },
        fail: function fail(err) {
          FAIL(err);
        }
      });
    }, wx_success, wx_fail, wx_complete);
  };

  //


  wx.getNetworkType = function getNetworkType(object) {
    return swan.getNetworkType(object);
  };

  wx.offNetworkStatusChange = function offNetworkStatusChange() {
    return console.log('offNetworkStatusChange is not support');
  };

  wx.onNetworkStatusChange = function onNetworkStatusChange(callback) {
    return swan.onNetworkStatusChange(callback);
  };

  //


  wx.makePhoneCall = function makePhoneCall(object) {
    return swan.makePhoneCall(object);
  };

  wx.scanCode = function scanCode(object) {
    return swan.scanCode(object);
  };

  //


  wx.vibrateLong = function vibrateLong(object) {
    return swan.vibrateLong(object);
  };

  wx.vibrateShort = function vibrateShort(object) {
    return swan.vibrateShort(object);
  };

  //


  wx.onMemoryWarning = function onMemoryWarning(object) {
    return swan.onMemoryWarning(object);
  };

  //


  wx.writeBLECharacteristicValue = function writeBLECharacteristicValue() {
    return console.warn('writeBLECharacteristicValue is not support');
  };

  wx.setBLEMTU = function setBLEMTU() {
    return console.warn('setBLEMTU is not support');
  };

  wx.readBLECharacteristicValue = function readBLECharacteristicValue() {
    return console.warn('setBLEMTU is not support');
  };

  wx.onBLEConnectionStateChange = function onBLEConnectionStateChange() {
    return console.warn('onBLEConnectionStateChange is not support');
  };

  wx.onBLECharacteristicValueChange = function onBLECharacteristicValueChange() {
    return console.warn('onBLECharacteristicValueChange is not support');
  };

  wx.offBLEConnectionStateChange = function offBLEConnectionStateChange() {
    return console.warn('offBLEConnectionStateChange is not support');
  };

  wx.offBLECharacteristicValueChange = function offBLECharacteristicValueChange() {
    return console.warn('offBLECharacteristicValueChange is not support');
  };

  wx.notifyBLECharacteristicValueChange = function notifyBLECharacteristicValueChange() {
    return console.warn('notifyBLECharacteristicValueChange is not support');
  };

  wx.makeBluetoothPair = function makeBluetoothPair() {
    return console.warn('makeBluetoothPair is not support');
  };

  wx.getBLEDeviceServices = function getBLEDeviceServices() {
    return console.warn('getBLEDeviceServices is not support');
  };

  wx.getBLEDeviceRSSI = function getBLEDeviceRSSI() {
    return console.warn('getBLEDeviceRSSI is not support');
  };

  wx.getBLEDeviceCharacteristics = function getBLEDeviceCharacteristics() {
    return console.warn('getBLEDeviceCharacteristics is not support');
  };

  wx.createBLEConnection = function createBLEConnection() {
    return console.warn('createBLEConnection is not support');
  };

  wx.closeBLEConnection = function closeBLEConnection() {
    return console.warn('closeBLEConnection is not support');
  };

  //


  wx.stopBluetoothDevicesDiscovery = function stopBluetoothDevicesDiscovery() {
    return console.warn('stopBluetoothDevicesDiscovery is not support');
  };

  wx.startBluetoothDevicesDiscovery = function startBluetoothDevicesDiscovery() {
    return console.warn('startBluetoothDevicesDiscovery is not support');
  };

  wx.openBluetoothAdapter = function openBluetoothAdapter() {
    return console.warn('openBluetoothAdapter is not support');
  };

  wx.onBluetoothDeviceFound = function onBluetoothDeviceFound() {
    return console.warn('onBluetoothDeviceFound is not support');
  };

  wx.onBluetoothAdapterStateChange = function onBluetoothAdapterStateChange() {
    return console.warn('onBluetoothAdapterStateChange is not support');
  };

  wx.offBluetoothDeviceFound = function offBluetoothDeviceFound() {
    return console.warn('offBluetoothDeviceFound is not support');
  };

  wx.offBluetoothAdapterStateChange = function offBluetoothAdapterStateChange() {
    return console.warn('offBluetoothAdapterStateChange is not support');
  };

  wx.getConnectedBluetoothDevices = function getConnectedBluetoothDevices() {
    return console.warn('getConnectedBluetoothDevices is not support');
  };

  wx.getBluetoothDevices = function getBluetoothDevices() {
    return console.warn('getBluetoothDevices is not support');
  };

  wx.getBluetoothAdapterState = function getBluetoothAdapterState() {
    return console.warn('getBluetoothAdapterState is not support');
  };

  wx.closeBluetoothAdapter = function closeBluetoothAdapter() {
    return console.warn('closeBluetoothAdapter is not support');
  };

  //


  wx.stopHCE = function stopHCE() {
    return console.warn('stopHCE is not support');
  };

  wx.startHCE = function startHCE() {
    return console.warn('startHCE is not support');
  };

  wx.sendHCEMessage = function sendHCEMessage() {
    return console.warn('sendHCEMessage is not support');
  };

  wx.onHCEMessage = function onHCEMessage() {
    return console.warn('onHCEMessage is not support');
  };

  wx.offHCEMessage = function offHCEMessage() {
    return console.warn('offHCEMessage is not support');
  };

  wx.getNFCAdapter = function getNFCAdapter() {
    return console.warn('getNFCAdapter is not support');
  };

  wx.getHCEState = function getHCEState() {
    return console.warn('getHCEState is not support');
  };

  //


  wx.setScreenBrightness = function setScreenBrightness(object) {
    return swan.setScreenBrightness(object);
  };

  wx.setKeepScreenOn = function setKeepScreenOn(object) {
    return swan.setKeepScreenOn(object);
  };

  wx.onUserCaptureScreen = function onUserCaptureScreen(callback) {
    return swan.onUserCaptureScreen(callback);
  };

  wx.offUserCaptureScreen = function offUserCaptureScreen() {
    return console.warn('offUserCaptureScreen is not support');
  };

  wx.getScreenBrightness = function getScreenBrightness(object) {
    return swan.getScreenBrightness(object);
  };

  // ///////////////// Ext //////////////


  wx.getExtConfigSync = function getExtConfigSync(object) {
    return swan.getExtConfigSync(object);
  };

  wx.getExtConfig = function getExtConfig(object) {
    return swan.getExtConfig(object);
  };

  // ////////////////// File //////////


  wx.saveFileToDisk = function saveFileToDisk() {
    return console.warn('saveFileToDisk is not support');
  };

  wx.getFileSystemManager = function getFileSystemManager(object) {
    return swan.getFileSystemManager(object);
  };

  wx.getFileInfo = function getFileInfo(object) {
    return swan.getFileInfo(object);
  };

  wx.removeSavedFile = function removeSavedFile(object) {
    return swan.removeSavedFile(object);
  };

  wx.getSavedFileInfo = function getSavedFileInfo(object) {
    return swan.getSavedFileInfo(object);
  };

  wx.getSavedFileList = function getSavedFileList(object) {
    return swan.getSavedFileList(object);
  };

  wx.openDocument = function openDocument(object) {
    return swan.openDocument(object);
  };

  wx.saveFile = function saveFile(object) {
    return swan.saveFile(object);
  };

  // ////////// Location ///////////////


  wx.stopLocationUpdate = function stopLocationUpdate(object) {
    return swan.stopLocationUpdate(object);
  };

  wx.startLocationUpdateBackground = function startLocationUpdateBackground() {
    return console.warn('startLocationUpdateBackground is not support');
  };

  wx.startLocationUpdate = function startLocationUpdate(object) {
    return swan.startLocationUpdate(object);
  };

  wx.openLocation = function openLocation(object) {
    return swan.openLocation(object);
  };

  wx.onLocationChange = function onLocationChange(callback) {
    return swan.onLocationChange(callback);
  };

  wx.offLocationChange = function offLocationChange(callback) {
    return swan.offLocationChange(callback);
  };

  wx.getLocation = function getLocation(object) {
    return swan.getLocation(object);
  };

  wx.chooseLocation = function chooseLocation(object) {
    return swan.chooseLocation(object);
  };

  // //////// Media ////////////////////


  wx.createMapContext = function createMapContext(object) {
    return swan.createMapContext(object);
  };

  wx.compressImage = function compressImage(object) {
    return swan.compressImage(object);
  };

  wx.saveImageToPhotosAlbum = function saveImageToPhotosAlbum(object) {
    return swan.saveImageToPhotosAlbum(object);
  };

  wx.getImageInfo = function getImageInfo(object) {
    return swan.getImageInfo(object);
  };

  wx.previewImage = function previewImage(object) {
    return swan.previewImage(object);
  };

  wx.chooseImage = function chooseImage(object) {
    return swan.chooseImage(object);
  };

  wx.chooseMessageFile = function chooseMessageFile() {
    return console.warn('chooseMessageFile is not support');
  };

  wx.previewMedia = function previewMedia() {
    return console.warn('previewMedia is not support');
  };

  // //////////////////////////////////////////////////////////////

  wx.saveVideoToPhotosAlbum = function saveVideoToPhotosAlbum(object) {
    return swan.saveVideoToPhotosAlbum(object);
  };

  wx.chooseVideo = function chooseVideo(object) {
    return swan.chooseVideo(object);
  };

  wx.chooseMedia = function chooseMedia() {
    return console.warn('chooseMedia is not support');
  };

  wx.openVideoEditor = function openVideoEditor() {
    return console.warn('openVideoEditor is not support');
  };

  wx.getVideoInfo = function getVideoInfo() {
    return console.warn('getVideoInfo is not support');
  };

  wx.compressVideo = function compressVideo() {
    return console.warn('compressVideo is not support');
  };

  wx.stopVoice = function stopVoice() {
    return console.warn('stopVoice is not support');
  };

  wx.pauseVoice = function pauseVoice() {
    return console.warn('pauseVoice is not support');
  };

  wx.playVoice = function playVoice() {
    return console.warn('playVoice is not support');
  };

  wx.setInnerAudioOption = function setInnerAudioOption(object) {
    return swan.setInnerAudioOption(object);
  };

  wx.getAvailableAudioSources = function getAvailableAudioSources(object) {
    return swan.getAvailableAudioSources(object);
  };

  wx.createMediaAudioPlayer = function createMediaAudioPlayer() {
    return console.warn('createMediaAudioPlayer is not support');
  };

  wx.createAudioContext = function createAudioContext() {
    return console.warn('createAudioContext is not support');
  };

  wx.onBackgroundAudioStop = function onBackgroundAudioStop() {
    return console.warn('onBackgroundAudioStop is not support');
  };

  wx.onBackgroundAudioPause = function onBackgroundAudioPause() {
    return console.warn('onBackgroundAudioPause is not support');
  };

  wx.onBackgroundAudioPlay = function onBackgroundAudioPlay() {
    return console.warn('onBackgroundAudioPlay is not support');
  };

  wx.stopBackgroundAudio = function stopBackgroundAudio() {
    return console.warn('stopBackgroundAudio is not support');
  };

  wx.seekBackgroundAudio = function seekBackgroundAudio() {
    return console.warn('seekBackgroundAudio is not support');
  };

  wx.pauseBackgroundAudio = function pauseBackgroundAudio() {
    return console.warn('pauseBackgroundAudio is not support');
  };

  wx.playBackgroundAudio = function playBackgroundAudio() {
    return console.warn('playBackgroundAudio is not support');
  };

  wx.getBackgroundAudioPlayerState = function getBackgroundAudioPlayerState() {
    return console.warn('getBackgroundAudioPlayerState is not support');
  };

  wx.getBackgroundAudioManager = function getBackgroundAudioManager(object) {
    return swan.getBackgroundAudioManager(object);
  };

  wx.createLivePusherContext = function createLivePusherContext() {
    return console.warn('createLivePusherContext is not support');
  };

  wx.startRecord = function startRecord(object) {
    var recorderManager = swan.getRecorderManager(object);
    recorderManager.onStart(function () {
      var res = 'stopRecord才会返回tempFilePath!!';
      if (object.success) {
        object.success(res);
      }
      if (object.complete) {
        object.complete(res);
      }
    });
    var result = recorderManager.start();
    return result;
  };

  wx.stopRecord = function stopRecord(object) {
    var recorderManager = swan.getRecorderManager(object);
    recorderManager.onStop(function (res) {
      if (object.success) {
        object.success(res);
      }
      if (object.complete) {
        object.complete(res);
      }
    });
    var result = recorderManager.stop();
    return result;
  };

  wx.getRecorderManager = function getRecorderManager(object) {
    return swan.getRecorderManager(object);
  };

  wx.createMediaContainer = function createMediaContainer() {
    return console.warn('createMediaContainer is not support');
  };

  wx.updateVoIPChatMuteConfig = function updateVoIPChatMuteConfig() {
    return console.warn('updateVoIPChatMuteConfig is not support');
  };

  wx.subscribeVoIPVideoMembers = function subscribeVoIPVideoMembers() {
    return console.warn('subscribeVoIPVideoMembers is not support');
  };

  wx.onVoIPVideoMembersChanged = function onVoIPVideoMembersChanged() {
    return console.warn('onVoIPVideoMembersChanged is not support');
  };

  wx.onVoIPChatSpeakersChanged = function onVoIPChatSpeakersChanged() {
    return console.warn('onVoIPChatSpeakersChanged is not support');
  };

  wx.onVoIPChatMembersChanged = function onVoIPChatMembersChanged() {
    return console.warn('onVoIPChatMembersChanged is not support');
  };

  wx.onVoIPChatInterrupted = function onVoIPChatInterrupted() {
    return console.warn('onVoIPChatInterrupted is not support');
  };

  wx.offVoIPVideoMembersChanged = function offVoIPVideoMembersChanged() {
    return console.warn('offVoIPVideoMembersChanged is not support');
  };

  wx.offVoIPChatMembersChanged = function offVoIPChatMembersChanged() {
    return console.warn('offVoIPChatMembersChanged is not support');
  };

  wx.offVoIPChatInterrupted = function offVoIPChatInterrupted() {
    return console.warn('offVoIPChatInterrupted is not support');
  };

  wx.joinVoIPChat = function joinVoIPChat() {
    return console.warn('joinVoIPChat is not support');
  };

  wx.exitVoIPChat = function exitVoIPChat() {
    return console.warn('exitVoIPChat is not support');
  };

  wx.createMediaRecorder = function createMediaRecorder() {
    return console.warn('createMediaRecorder is not support');
  };

  wx.createVideoDecoder = function createVideoDecoder() {
    return console.warn('createVideoDecoder is not support');
  };

  // ////////////// Network ///////////////


  wx.request = function request(object) {
    return swan.request(object);
  };

  wx.downloadFile = function downloadFile(object) {
    return swan.downloadFile(object);
  };

  wx.uploadFile = function uploadFile(object) {
    return swan.uploadFile(object);
  };

  //


  wx.connectSocket = function connectSocket(object) {
    return swan.connectSocket(object);
  };

  wx.onSocketError = function onSocketError(callback) {
    return swan.onSocketError(callback);
  };

  wx.onSocketMessage = function onSocketMessage(callback) {
    return swan.onSocketMessage(callback);
  };

  wx.onSocketClose = function onSocketClose(callback) {
    return swan.onSocketClose(callback);
  };

  wx.onSocketOpen = function onSocketOpen(object) {
    return swan.connectSocket(object);
  };

  wx.sendSocketMessage = function sendSocketMessage(object) {
    return swan.sendSocketMessage(object);
  };

  wx.closeSocket = function closeSocket(object) {
    return swan.closeSocket(object);
  };

  wx.offLocalServiceResolveFail = function offLocalServiceResolveFail() {
    return console.warn('offLocalServiceResolveFail is not support');
  };

  wx.onLocalServiceResolveFail = function onLocalServiceResolveFail() {
    return console.warn('onLocalServiceResolveFail is not support');
  };

  wx.offLocalServiceDiscoveryStop = function offLocalServiceDiscoveryStop() {
    return console.warn('offLocalServiceDiscoveryStop is not support');
  };

  wx.onLocalServiceDiscoveryStop = function onLocalServiceDiscoveryStop() {
    return console.warn('onLocalServiceDiscoveryStop is not support');
  };

  wx.offLocalServiceLost = function offLocalServiceLost() {
    return console.warn('offLocalServiceLost is not support');
  };

  wx.onLocalServiceLost = function onLocalServiceLost() {
    return console.warn('onLocalServiceLost is not support');
  };

  wx.offLocalServiceFound = function offLocalServiceFound() {
    return console.warn('offLocalServiceFound is not support');
  };

  wx.onLocalServiceFound = function onLocalServiceFound() {
    return console.warn('onLocalServiceFound is not support');
  };

  wx.stopLocalServiceDiscovery = function stopLocalServiceDiscovery() {
    return console.warn('stopLocalServiceDiscovery is not support');
  };

  wx.startLocalServiceDiscovery = function startLocalServiceDiscovery() {
    return console.warn('startLocalServiceDiscovery is not support');
  };

  wx.createUDPSocket = function createUDPSocket() {
    return console.warn('createUDPSocket is not support');
  };

  //

  // /////// Open Interface //////////


  wx.checkSession = function checkSession(object) {
    return swan.checkSession(object);
  };

  wx.login = function login(object) {
    return swan.login(object);
  };

  wx.getUserInfo = function getUserInfo() {
    return swan.getUserInfo({
      success: function success(res) {
        swan.request({
          url: getApp().onejit.server + 'userinfo', // 仅为示例，并非真实的接口地址
          method: 'POST',
          responseType: 'text',
          data: {
            jscode: getApp().onejit.jscode,
            data: res.toString()
          },
          success: function success(res) {
            console.log(res.data);
          },
          fail: function fail(err) {
            console.log('错误码：' + err.errCode);
            console.log('错误信息：' + err.errMsg);
          }
        });
      }
    });
  };

  wx.getOpenData = function getOpenData(object) {
    return swan.getOpenData(object);
  };

  wx.getPhoneNumber = function getPhoneNumber(object) {
    return swan.getPhoneNumber(object);
  };

  wx.navigateToMiniProgram = function navigateToMiniProgram(object) {
    return swan.navigateToMiniProgram(object);
  };

  wx.navigateBackMiniProgram = function navigateBackMiniProgram(object) {
    return swan.navigateBackMiniProgram(object);
  };

  wx.getAccountInfoSync = function getAccountInfoSync() {
    return console.warn('getAccountInfoSync is not support');
  };

  wx.reportAnalytics = function reportAnalytics(object, eventName) {
    return swan.reportAnalytics(object, eventName);
  };

  wx.requestPayment = function requestPayment(object) {
    return swan.requestPayment(object);
  };

  wx.authorize = function authorize(object) {
    return swan.authorize(object);
  };

  wx.openSetting = function openSetting(object) {
    return swan.openSetting(object);
  };

  wx.getSetting = function getSetting(object) {
    return swan.getSetting(object);
  };

  wx.chooseAddress = function chooseAddress(object) {
    return swan.chooseAddress(object);
  };

  wx.openCard = function openCard() {
    return console.warn('openCard is not support');
  };

  wx.addCard = function addCard() {
    return console.warn('addCard is not support');
  };

  wx.chooseInvoiceTitle = function chooseInvoiceTitle(object) {
    return swan.chooseInvoiceTitle(object);
  };

  wx.chooseInvoice = function chooseInvoice() {
    return console.warn('chooseInvoice is not support');
  };

  wx.startSoterAuthentication = function startSoterAuthentication() {
    return console.warn('startSoterAuthentication is not support');
  };

  wx.checkIsSupportSoterAuthentication = function checkIsSupportSoterAuthentication() {
    return console.warn('checkIsSupportSoterAuthentication is not support');
  };

  wx.checkIsSoterEnrolledInDevice = function checkIsSoterEnrolledInDevice() {
    return console.warn('checkIsSoterEnrolledInDevice is not support');
  };

  wx.getWeRunData = function getWeRunData() {
    return console.warn('getWeRunData is not support');
  };

  wx.reportPerformance = function reportPerformance() {
    return console.warn('reportPerformance is not support');
  };

  wx.getPerformance = function getPerformance() {
    return console.warn('getPerformance is not support');
  };

  wx.requestSubscribeMessage = function requestSubscribeMessage() {
    return console.warn('requestSubscribeMessage is not support');
  };

  wx.showRedPackage = function showRedPackage() {
    return console.warn('showRedPackage is not support');
  };

  wx.getGroupEnterInfo = function getGroupEnterInfo() {
    return console.warn('getGroupEnterInfo is not support');
  };

  wx.onBLEPeripheralConnectionStateChanged = function onBLEPeripheralConnectionStateChanged() {
    return console.warn('onBLEPeripheralConnectionStateChanged is not support');
  };

  wx.offBLEPeripheralConnectionStateChanged = function offBLEPeripheralConnectionStateChanged() {
    return console.warn('offBLEPeripheralConnectionStateChanged is not support');
  };

  wx.createBLEPeripheralServer = function createBLEPeripheralServer() {
    return console.warn('createBLEPeripheralServer is not support');
  };

  wx.reportMonitor = function reportMonitor() {
    /*
      const js_code = getApp().onejit.jscode
      swan.httpRequest({
        url: 'http://192.168.0.106:8080/onekit-adapter/reportMonitor',
        header: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        method: 'POST',
        data: {
          js_code,
          name,
          number: value
        },
        success: (res) => {
          console.log('success')
          console.log(res.data)
        },
        fail(res) {
          console.log(res)
        },
        complete(res) {
          console.log(res)
        }
      }) */
    return console.warn('reportMonitor is not support');
  };

  // //////// Router //////////////


  wx.navigateBack = function navigateBack(object) {
    return swan.navigateBack(object);
  };

  wx.switchTab = function switchTab(object) {
    return swan.switchTab(object);
  };

  wx.navigateTo = function navigateTo(object) {
    return swan.navigateTo(object);
  };

  wx.reLaunch = function reLaunch(object) {
    return swan.reLaunch(object);
  };

  wx.redirectTo = function redirectTo(object) {
    return swan.redirectTo(object);
  };

  // /////////// Share /////////////


  wx.updateShareMenu = function updateShareMenu() {
    return console.warn('updateShareMenu is not support');
  };

  wx.showShareMenu = function showShareMenu() {
    return console.warn('showShareMenu is not support');
  };

  wx.hideShareMenu = function hideShareMenu() {
    return console.warn('hideShareMenu is not support');
  };

  wx.getShareInfo = function getShareInfo() {
    return console.warn('getShareInfo is not support');
  };

  wx.authPrivateMessage = function authPrivateMessage() {
    return console.warn('authPrivateMessage is not support');
  };

  // ///////////// Storage //////////////


  wx.getStorageInfoSync = function getStorageInfoSync(object) {
    return swan.getStorageInfoSync(object);
  };

  wx.getStorageInfo = function getStorageInfo(object) {
    return swan.getStorageInfo(object);
  };

  wx.clearStorageSync = function clearStorageSync() {
    return swan.clearStorageSync();
  };

  wx.clearStorage = function clearStorage(object) {
    return swan.clearStorage(object);
  };

  wx.removeStorageSync = function removeStorageSync(object) {
    return swan.removeStorageSync(object);
  };

  wx.removeStorage = function removeStorage(object) {
    return swan.removeStorage(object);
  };

  wx.setStorageSync = function setStorageSync(key, value) {
    return swan.setStorageSync(key, value);
  };

  wx.setStorage = function setStorage(object) {
    return swan.setStorage(object);
  };

  wx.getStorageSync = function getStorageSync(key) {
    return swan.getStorageSync(key);
  };

  wx.getStorage = function getStorage(object) {
    return swan.getStorage(object);
  };

  // //////////// UI ////////////////


  wx.showActionSheet = function showActionSheet(object) {
    return swan.showActionSheet(object);
  };

  // static redirectTo(object) { return swan.redirectTo(object) }
  // static redirectTo(object) { return swan.redirectTo(object) }


  wx.hideLoading = function hideLoading(object) {
    return swan.hideLoading(object);
  };

  wx.showLoading = function showLoading(object) {
    return swan.showLoading(object);
  };

  wx.hideToast = function hideToast(object) {
    return swan.hideToast(object);
  };

  wx.showToast = function showToast(object) {
    return swan.showToast(object);
  };

  wx.showModal = function showModal(object) {
    return swan.showModal(object);
  };

  wx.enableAlertBeforeUnload = function enableAlertBeforeUnload() {
    return console.warn('enableAlertBeforeUnload is not support');
  };

  wx.disableAlertBeforeUnload = function disableAlertBeforeUnload() {
    return console.warn('disableAlertBeforeUnload is not support');
  };

  wx.setNavigationBarColor = function setNavigationBarColor(object) {
    return swan.setNavigationBarColor(object);
  };

  wx.hideNavigationBarLoading = function hideNavigationBarLoading(object) {
    return swan.hideNavigationBarLoading(object);
  };

  wx.showNavigationBarLoading = function showNavigationBarLoading(object) {
    return swan.showNavigationBarLoading(object);
  };

  wx.setNavigationBarTitle = function setNavigationBarTitle(object) {
    return swan.setNavigationBarTitle(object);
  };

  wx.hideHomeButton = function hideHomeButton() {
    return console.warn('hideHomeButton is not support');
  };

  wx.setBackgroundTextStyle = function setBackgroundTextStyle(object) {
    return swan.setBackgroundTextStyle(object);
  };

  wx.setBackgroundColor = function setBackgroundColor(object) {
    return swan.setBackgroundColor(object);
  };

  wx.setTabBarItem = function setTabBarItem(object) {
    return swan.setTabBarItem(object);
  };

  wx.setTabBarStyle = function setTabBarStyle(object) {
    return swan.setTabBarStyle(object);
  };

  wx.hideTabBar = function hideTabBar(object) {
    return swan.hideTabBar(object);
  };

  wx.showTabBar = function showTabBar(object) {
    return swan.showTabBar(object);
  };

  wx.hideTabBarRedDot = function hideTabBarRedDot(object) {
    return swan.hideTabBarRedDot(object);
  };

  wx.showTabBarRedDot = function showTabBarRedDot(object) {
    return swan.showTabBarRedDot(object);
  };

  wx.removeTabBarBadge = function removeTabBarBadge(object) {
    return swan.removeTabBarBadge(object);
  };

  wx.setTabBarBadge = function setTabBarBadge(object) {
    return swan.setTabBarBadge(object);
  };

  wx.loadFontFace = function loadFontFace() {
    return console.warn('hideHomeButton is not support');
  };

  wx.stopPullDownRefresh = function stopPullDownRefresh(object) {
    return swan.stopPullDownRefresh(object);
  };

  wx.startPullDownRefresh = function startPullDownRefresh(object) {
    return swan.startPullDownRefresh(object);
  };

  wx.pageScrollTo = function pageScrollTo(object) {
    return swan.pageScrollTo(object);
  };

  wx.setTopBarText = function setTopBarText() {
    return console.warn('setTopBarText is not support');
  };

  wx.nextTick = function nextTick(callback) {
    return swan.nextTick(callback);
  };

  wx.getMenuButtonBoundingClientRect = function getMenuButtonBoundingClientRect(object) {
    return swan.getMenuButtonBoundingClientRect(object);
  };

  wx.setWindowSize = function setWindowSize() {
    return console.warn('setWindowSize is not support');
  };

  wx.onWindowResize = function onWindowResize() {
    return console.warn('onWindowResize is not support');
  };

  wx.offWindowResize = function offWindowResize() {
    return console.warn('offWindowResize is not support');
  };

  wx.onKeyboardHeightChange = function onKeyboardHeightChange(callback) {
    return swan.onKeyboardHeightChange(callback);
  };

  wx.offKeyboardHeightChange = function offKeyboardHeightChange(callback) {
    return swan.offKeyboardHeightChange(callback);
  };

  wx.hideKeyboard = function hideKeyboard() {
    return console.warn('hideKeyboard is not support');
  };

  wx.getSelectedTextRange = function getSelectedTextRange() {
    return console.warn('getSelectedTextRange is not support');
  };

  // //////////// Worker ///////////////


  wx.createWorker = function createWorker(path) {
    return new _WORKER2.default(path);
  };

  // //////////// WXML ///////////////


  wx.createSelectorQuery = function createSelectorQuery(object) {
    return swan.createSelectorQuery(object);
  };

  wx.createIntersectionObserver = function createIntersectionObserver(object) {
    return swan.createIntersectionObserver(object);
  };

  return wx;
}();

exports.default = wx;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* eslint-disable max-len */
var CanvasContext = function () {
  function CanvasContext(baiduCanvasContext) {
    _classCallCheck(this, CanvasContext);

    this.baiduCanvasContext = baiduCanvasContext;
  }

  CanvasContext.prototype.beginPath = function beginPath(a) {
    return this.baiduCanvasContext.beginPath(a);
  };

  CanvasContext.prototype.save = function save() {
    return this.baiduCanvasContext.save();
  };

  CanvasContext.prototype.restore = function restore() {
    return this.baiduCanvasContext.restore();
  };

  //


  CanvasContext.prototype.setGlobalAlpha = function setGlobalAlpha(alpha) {
    return this.baiduCanvasContext.setGlobalAlpha(alpha);
  };

  CanvasContext.prototype.setFillStyle = function setFillStyle(color) {
    return this.baiduCanvasContext.setFillStyle(color);
  };

  CanvasContext.prototype.setStrokeStyle = function setStrokeStyle(color) {
    return this.baiduCanvasContext.setStrokeStyle(color);
  };

  CanvasContext.prototype.setShadow = function setShadow(offsetX, offsetY, blur, color) {
    return this.baiduCanvasContext.setShadow(offsetX, offsetY, blur, color);
  };

  CanvasContext.prototype.setLineCap = function setLineCap(lineCap) {
    return this.baiduCanvasContext.setLineCap(lineCap);
  };

  CanvasContext.prototype.setLineJoin = function setLineJoin(lineJoin) {
    return this.baiduCanvasContext.setLineJoin(lineJoin);
  };

  CanvasContext.prototype.setLineWidth = function setLineWidth(lineWidth) {
    return this.baiduCanvasContext.setLineWidth(lineWidth);
  };

  CanvasContext.prototype.setMiterLimit = function setMiterLimit(miterLimit) {
    return this.baiduCanvasContext.setMiterLimit(miterLimit);
  };

  CanvasContext.prototype.setFontSize = function setFontSize(fontSize) {
    return this.baiduCanvasContext.setFontSize(fontSize);
  };

  CanvasContext.prototype.rotate = function rotate(_rotate) {
    return this.baiduCanvasContext.rotate(_rotate);
  };

  CanvasContext.prototype.scale = function scale(scaleWidth, scaleHeight) {
    return this.baiduCanvasContext.scale(scaleWidth, scaleHeight);
  };

  CanvasContext.prototype.translate = function translate(x, y) {
    return this.baiduCanvasContext.translate(x, y);
  };

  CanvasContext.prototype.moveTo = function moveTo(x, y) {
    return this.baiduCanvasContext.moveTo(x, y);
  };

  CanvasContext.prototype.lineTo = function lineTo(x, y) {
    return this.baiduCanvasContext.lineTo(x, y);
  };

  CanvasContext.prototype.closePath = function closePath() {
    return this.baiduCanvasContext.closePath();
  };

  CanvasContext.prototype.fillText = function fillText(text, x, y, maxWidth) {
    return this.baiduCanvasContext.fillText(text, x, y, maxWidth);
  };

  CanvasContext.prototype.drawImage = function drawImage(imageResource, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight) {
    return this.baiduCanvasContext.drawImage(imageResource, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
  };

  CanvasContext.prototype.arc = function arc(x, y, r, sAngle, eAngle, counterclockwise) {
    return this.baiduCanvasContext.arc(x, y, r, sAngle, eAngle, counterclockwise);
  };

  CanvasContext.prototype.quadraticCurveTo = function quadraticCurveTo(cpx, cpy, x, y) {
    return this.baiduCanvasContext.quadraticCurveTo(cpx, cpy, x, y);
  };

  CanvasContext.prototype.bezierCurveTo = function bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y) {
    return this.baiduCanvasContext.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y);
  };

  //


  CanvasContext.prototype.rect = function rect(x, y, width, height) {
    return this.baiduCanvasContext.rect(x, y, width, height);
  };

  //


  CanvasContext.prototype.clearRect = function clearRect(x, y, width, height) {
    return this.baiduCanvasContext.clearRect(x, y, width, height);
  };

  CanvasContext.prototype.stroke = function stroke() {
    return this.baiduCanvasContext.stroke();
  };

  CanvasContext.prototype.fill = function fill() {
    return this.baiduCanvasContext.fill();
  };

  CanvasContext.prototype.draw = function draw(reserve, callback) {
    return this.baiduCanvasContext.draw(reserve, callback);
  };

  CanvasContext.prototype.fillRect = function fillRect(x, y, width, height) {
    return this.baiduCanvasContext.fillRect(x, y, width, height);
  };

  CanvasContext.prototype.getActions = function getActions() {
    return this.baiduCanvasContext.getActions();
  };

  return CanvasContext;
}();

exports.default = CanvasContext;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var VideoContext = function () {
  function VideoContext(swanVideoContext) {
    _classCallCheck(this, VideoContext);

    this.swanVideoContext = swanVideoContext;
  }

  VideoContext.prototype.play = function play() {
    return this.swanVideoContext.play();
  };

  VideoContext.prototype.pause = function pause() {
    return this.swanVideoContext.pause();
  };

  VideoContext.prototype.stop = function stop() {
    return this.swanVideoContext.stop();
  };

  VideoContext.prototype.seek = function seek(position) {
    return this.swanVideoContext.seek(position);
  };

  VideoContext.prototype.sendDanmu = function sendDanmu(data) {
    return this.swanVideoContext.playbackRate(data);
  };

  VideoContext.prototype.playbackRate = function playbackRate(rate) {
    return this.swanVideoContext.playbackRate(rate);
  };

  VideoContext.prototype.requestFullScreen = function requestFullScreen(direction) {
    return this.swanVideoContext.requestFullScreen(direction);
  };

  VideoContext.prototype.exitFullScreen = function exitFullScreen() {
    return this.swanVideoContext.exitFullScreen();
  };

  VideoContext.prototype.showStatusBar = function showStatusBar() {
    return this.swanVideoContext.showStatusBar();
  };

  VideoContext.prototype.hideStatusBar = function hideStatusBar() {
    return this.swanVideoContext.hideStatusBar();
  };

  return VideoContext;
}();

exports.default = VideoContext;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var VideoContext = function () {
  function VideoContext(swanCameraContext) {
    _classCallCheck(this, VideoContext);

    this.swanCameraContext = swanCameraContext;
  }

  VideoContext.prototype.takePhoto = function takePhoto() {
    return this.swanCameraContext.takePhoto();
  };

  VideoContext.prototype.setZoom = function setZoom() {
    return this.swanCameraContext.setZoom();
  };

  VideoContext.prototype.startRecord = function startRecord() {
    return this.swanCameraContext.startRecord();
  };

  VideoContext.prototype.stopRecord = function stopRecord(position) {
    return this.swanCameraContext.stopRecord(position);
  };

  return VideoContext;
}();

exports.default = VideoContext;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var InnerAudioContext = function () {
  function InnerAudioContext(swanInnerAudioContext) {
    _classCallCheck(this, InnerAudioContext);

    this.swanInnerAudioContext = swanInnerAudioContext;
  }

  InnerAudioContext.prototype.play = function play() {
    return this.swanInnerAudioContext.play();
  };

  InnerAudioContext.prototype.pause = function pause() {
    return this.swanInnerAudioContext.pause();
  };

  InnerAudioContext.prototype.stop = function stop() {
    return this.swanInnerAudioContext.stop();
  };

  InnerAudioContext.prototype.seek = function seek(position) {
    return this.swanInnerAudioContext.seek(position);
  };

  InnerAudioContext.prototype.onCanplay = function onCanplay(callback) {
    return this.swanInnerAudioContext.onCanplay(callback);
  };

  InnerAudioContext.prototype.offCanplay = function offCanplay(callback) {
    return this.swanInnerAudioContext.offCanplay(callback);
  };

  InnerAudioContext.prototype.onPlay = function onPlay(callback) {
    return this.swanInnerAudioContext.onPlay(callback);
  };

  InnerAudioContext.prototype.offPlay = function offPlay(callback) {
    return this.swanInnerAudioContext.offPlay(callback);
  };

  InnerAudioContext.prototype.onPause = function onPause(callback) {
    return this.swanInnerAudioContext.onPause(callback);
  };

  InnerAudioContext.prototype.offPause = function offPause(callback) {
    return this.swanInnerAudioContext.offPause(callback);
  };

  InnerAudioContext.prototype.onStop = function onStop(callback) {
    return this.swanInnerAudioContext.onStop(callback);
  };

  InnerAudioContext.prototype.offStop = function offStop(callback) {
    return this.swanInnerAudioContext.offStop(callback);
  };

  InnerAudioContext.prototype.onEnded = function onEnded(callback) {
    return this.swanInnerAudioContext.onEnded(callback);
  };

  InnerAudioContext.prototype.offEnded = function offEnded(callback) {
    return this.swanInnerAudioContext.offEnded(callback);
  };

  InnerAudioContext.prototype.onTimeUpdate = function onTimeUpdate(callback) {
    return this.swanInnerAudioContext.onTimeUpdate(callback);
  };

  InnerAudioContext.prototype.offTimeUpdate = function offTimeUpdate(callback) {
    return this.swanInnerAudioContext.offTimeUpdate(callback);
  };

  InnerAudioContext.prototype.onError = function onError(callback) {
    return this.swanInnerAudioContext.onError(callback);
  };

  InnerAudioContext.prototype.offError = function offError(callback) {
    return this.swanInnerAudioContext.offError(callback);
  };

  InnerAudioContext.prototype.onWaiting = function onWaiting(callback) {
    return this.swanInnerAudioContext.onWaiting(callback);
  };

  InnerAudioContext.prototype.offWaiting = function offWaiting(callback) {
    return this.swanInnerAudioContext.offWaiting(callback);
  };

  InnerAudioContext.prototype.onSeeking = function onSeeking(callback) {
    return this.swanInnerAudioContext.onSeeking(callback);
  };

  InnerAudioContext.prototype.offSeeking = function offSeeking(callback) {
    return this.swanInnerAudioContext.offSeeking(callback);
  };

  InnerAudioContext.prototype.onSeeked = function onSeeked(callback) {
    return this.swanInnerAudioContext.onSeeked(callback);
  };

  InnerAudioContext.prototype.offSeeked = function offSeeked(callback) {
    return this.swanInnerAudioContext.offSeeked(callback);
  };

  return InnerAudioContext;
}();

exports.default = InnerAudioContext;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LivePlayerContext = function () {
  function LivePlayerContext(swanLivePlayerContext) {
    _classCallCheck(this, LivePlayerContext);

    this.swanLivePlayerContext = swanLivePlayerContext;
  }

  LivePlayerContext.prototype.play = function play() {
    return this.swanLivePlayerContext.play();
  };

  LivePlayerContext.prototype.pause = function pause() {
    return this.swanLivePlayerContext.pause();
  };

  LivePlayerContext.prototype.stop = function stop() {
    return this.swanLivePlayerContext.stop();
  };

  LivePlayerContext.prototype.mute = function mute() {
    return this.swanLivePlayerContext.mute();
  };

  LivePlayerContext.prototype.resume = function resume(data) {
    return this.swanLivePlayerContext.resume(data);
  };

  LivePlayerContext.prototype.requestFullScreen = function requestFullScreen(direction) {
    return this.swanLivePlayerContext.requestFullScreen(direction);
  };

  LivePlayerContext.prototype.exitFullScreen = function exitFullScreen() {
    return this.swanLivePlayerContext.exitFullScreen();
  };

  return LivePlayerContext;
}();

exports.default = LivePlayerContext;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var WORKER = function WORKER() {
  _classCallCheck(this, WORKER);
};

exports.default = WORKER;

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* eslint-disable camelcase */
/* harmony default export */ __webpack_exports__["default"] = (function (body, success, fail, complete) {
  try {
    return body(res => {
      if (success) {
        success(res)
      }
      if (complete) {
        complete(res)
      }
    }, res => {
      if (fail) {
        fail(res)
      }
      if (complete) {
        complete(res)
      }
    },)
  } catch (e) {
    const res = {
      errMsg: e.message
    }
    if (fail) {
      fail(res)
    }
    if (complete) {
      complete(res)
    }
    return null
  }
});


/***/ }),
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _wx = __webpack_require__(3);

var _wx2 = _interopRequireDefault(_wx);

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
  data: {},
  properties: {},

  attached: function attached() {
    var that = this;
    _wx2.default.getOpenData({
      success: function success(opendata) {
        switch (that.props.type) {
          case 'userNickName':
            that.setData({ userNickName: opendata.nickName });
            break;
          case 'userAvatarUrl':
            that.setData({ userAvatarUrl: opendata.avatarUrl });
            break;
          case 'userGender':
            that.setData({ userGender: opendata.gender });
            break;
          case 'userCity':
            that.setData({ userCity: opendata.city });
            break;
          case 'userProvince':
            that.setData({ userProvince: opendata.province });
            break;
          case 'userCountry':
            that.setData({ userCountry: opendata.country });
            break;
          case 'userLanguage':
            that.setData({ userLanguage: opendata.language });
            break;
          default:
            break;
        }
      }
    });
  },
  didUpdate: function didUpdate() {},
  didUnmount: function didUnmount() {},

  methods: {}
});

/* eslint-disable no-console */
/* eslint-disable camelcase */

/***/ })
/******/ ]);