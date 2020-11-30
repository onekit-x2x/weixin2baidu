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
/******/ 	return __webpack_require__(__webpack_require__.s = 33);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _oneutil = __webpack_require__(1);

var _oneutil2 = _interopRequireDefault(_oneutil);

var _CanvasContext = __webpack_require__(2);

var _CanvasContext2 = _interopRequireDefault(_CanvasContext);

var _VideoContext = __webpack_require__(3);

var _VideoContext2 = _interopRequireDefault(_VideoContext);

var _CameraContext = __webpack_require__(4);

var _CameraContext2 = _interopRequireDefault(_CameraContext);

var _InnerAudioContext = __webpack_require__(5);

var _InnerAudioContext2 = _interopRequireDefault(_InnerAudioContext);

var _LivePlayerContext = __webpack_require__(6);

var _LivePlayerContext2 = _interopRequireDefault(_LivePlayerContext);

var _WORKER = __webpack_require__(7);

var _WORKER2 = _interopRequireDefault(_WORKER);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /* eslint-disable max-len */
/* eslint-disable camelcase */
/* eslint-disable no-console */
/* eslint-disable prefer-spread */

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


  wx.canIUse = function canIUse() {
    return true;
  };

  wx.getSystemInfo = function getSystemInfo(object) {
    return swan.getSystemInfo(object);
  };

  wx.getSystemInfoSync = function getSystemInfoSync() {
    return swan.getSystemInfoSync();
  };

  wx.base64ToArrayBuffer = function base64ToArrayBuffer(base64) {
    return swan.base64ToArrayBuffer(base64);
  };

  wx.arrayBufferToBase64 = function arrayBufferToBase64(arrayBuffer) {
    return swan.arrayBufferToBase64(arrayBuffer);
  };

  wx.getUpdateManager = function getUpdateManager(object) {
    return swan.getUpdateManager(object);
  };

  wx.getLaunchOptionsSync = function getLaunchOptionsSync(object) {
    return swan.getLaunchOptionsSync(object);
  };

  wx.offPageNotFound = function offPageNotFound(object) {
    return swan.offPageNotFound(object);
  };

  wx.onPageNotFound = function onPageNotFound(object) {
    return swan.onPageNotFound(object);
  };

  wx.offError = function offError(object) {
    return swan.offError(object);
  };

  wx.onError = function onError(object) {
    return swan.onError(object);
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

  wx.getLogManager = function getLogManager(object) {
    return swan.getLogManager(object);
  };

  // ///////////////// Canvas ///////////////////
  // eslint-disable-next-line complexity


  wx.drawCanvas = function drawCanvas(object) {
    var canvasId = object.canvasId;
    var actions = object.actions;
    var canvasContext = swan.createCanvasContext(canvasId);
    for (var _iterator = actions, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
      var _ref;

      if (_isArray) {
        if (_i >= _iterator.length) break;
        _ref = _iterator[_i++];
      } else {
        _i = _iterator.next();
        if (_i.done) break;
        _ref = _i.value;
      }

      var action = _ref;

      var data = action.data;
      switch (action.method) {
        case 'save':
          canvasContext.save();
          break;
        case 'restore':
          canvasContext.restore();
          break;
        case 'setFillStyle':
          canvasContext.setFillStyle(_oneutil2.default.color.array2str(data[1]));
          break;
        case 'setStrokeStyle':
          canvasContext.setStrokeStyle(_oneutil2.default.color.array2str(data[1]));
          break;
        case 'setFontSize':
          canvasContext.setFontSize(data[0]);
          break;
        case 'setGlobalAlpha':
          canvasContext.setGlobalAlpha(data[0]);
          break;
        case 'setShadow':
          canvasContext.setShadow(data[0], data[1], data[2], _oneutil2.default.color.array2str(data[3]));
          break;
        case 'drawImage':
          // eslint-disable-next-line prefer-spread
          canvasContext.drawImage.apply(canvasContext, data);
          break;
        case 'fillText':
          // eslint-disable-next-line prefer-spread
          canvasContext.fillText.apply(canvasContext, data);
          break;
        case 'setLineCap':
          canvasContext.setLineCap(data[0]);break;
        case 'setLineJoin':
          canvasContext.setLineJoin(data[0]);break;
        case 'setLineWidth':
          canvasContext.setLineWidth(data[0]);break;
        case 'setMiterLimit':
          canvasContext.setMiterLimit(data[0]);break;
        case 'rotate':
          canvasContext.rotate(data[0]);break;
        case 'scale':
          canvasContext.scale(data[0], data[1]);break;
        case 'translate':
          canvasContext.translate(data[0], data[1]);break;
        case 'strokePath':
          canvasContext.beginPath();
          for (var _iterator2 = data, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
            var _ref2;

            if (_isArray2) {
              if (_i2 >= _iterator2.length) break;
              _ref2 = _iterator2[_i2++];
            } else {
              _i2 = _iterator2.next();
              if (_i2.done) break;
              _ref2 = _i2.value;
            }

            var dat = _ref2;

            var dt = dat.data;
            switch (dat.method) {
              case 'rect':
                canvasContext.strokeRect(dt[0], dt[1], dt[2], dt[3]);break;
              case 'moveTo':
                canvasContext.moveTo(dt[0], dt[1]);break;
              case 'lineTo':
                canvasContext.lineTo(dt[0], dt[1]);break;
              case 'closePath':
                canvasContext.closePath();break;
              // eslint-disable-next-line prefer-spread
              case 'arc':
                canvasContext.arc.apply(canvasContext, dt);break;
              case 'quadraticCurveTo':
                canvasContext.quadraticCurveTo.apply(canvasContext, dt);break;
              case 'bezierCurveTo':
                canvasContext.bezierCurveTo.apply(canvasContext, dt);break;

              default:
                console.log('[drawCanvas-strokePath]', dat.method);
                break;
            }
          }
          canvasContext.stroke();
          break;
        case 'fillPath':
          for (var _iterator3 = data, _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : _iterator3[Symbol.iterator]();;) {
            var _ref3;

            if (_isArray3) {
              if (_i3 >= _iterator3.length) break;
              _ref3 = _iterator3[_i3++];
            } else {
              _i3 = _iterator3.next();
              if (_i3.done) break;
              _ref3 = _i3.value;
            }

            var _dat = _ref3;

            var _dt = _dat.data;
            switch (_dat.method) {
              case 'rect':
                canvasContext.fillRect(_dt[0], _dt[1], _dt[2], _dt[3]);break;
              case 'arc':
                canvasContext.arc.apply(canvasContext, _dt);break;
              default:
                console.log('[drawCanvas-fillPath]', _dat.method);
                break;
            }
          }
          canvasContext.fill();
          break;
        case 'clearRect':
          canvasContext.clearRect(data[0], data[1], data[2], data[3]);break;
        default:
          console.log('[drawCanvas]', action.method);
          break;
      }
    }
    canvasContext.draw();
  };

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

  wx.onBackgroundFetchData = function onBackgroundFetchData() {};

  wx.getBackgroundFetchData = function getBackgroundFetchData() {};

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


  wx.onBeaconServiceChange = function onBeaconServiceChange(object) {
    return swan.onBeaconServiceChange(object);
  };

  wx.onBeaconUpdate = function onBeaconUpdate(object) {
    return swan.onBeaconUpdate(object);
  };

  wx.getBeacons = function getBeacons(object) {
    return swan.getBeacons(object);
  };

  wx.stopBeaconDiscovery = function stopBeaconDiscovery(object) {
    return swan.stopBeaconDiscovery(object);
  };

  wx.startBeaconDiscovery = function startBeaconDiscovery(object) {
    return swan.startBeaconDiscovery(object);
  };

  wx.stopWifi = function stopWifi(object) {
    return swan.stopWifi(object);
  };

  wx.startWifi = function startWifi(object) {
    return swan.startWifi(object);
  };

  wx.setWifiList = function setWifiList(object) {
    return swan.setWifiList(object);
  };

  wx.onWifiConnected = function onWifiConnected(object) {
    return swan.onWifiConnected(object);
  };

  wx.onGetWifiList = function onGetWifiList(object) {
    return swan.onGetWifiList(object);
  };

  wx.getWifiList = function getWifiList(object) {
    return swan.getWifiList(object);
  };

  wx.getConnectedWifi = function getConnectedWifi(object) {
    return swan.getConnectedWifi(object);
  };

  wx.connectWifi = function connectWifi(object) {
    return swan.connectWifi(object);
  };

  //


  wx.onAccelerometerChange = function onAccelerometerChange(callback) {
    return swan.onAccelerometerChange(callback);
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

  wx._getBatteryInfo = function _getBatteryInfo(object) {
    return swan._getBatteryInfo(object);
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
    return swan.onCompassChange(callback);
  };

  wx.stopCompass = function stopCompass(object) {
    return swan.stopCompass(object);
  };

  wx.startCompass = function startCompass(object) {
    return swan.startCompass(object);
  };

  wx.addPhoneContact = function addPhoneContact(object) {
    return swan.addPhoneContact(object);
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


  wx.onDeviceMotionChange = function onDeviceMotionChange(object) {
    return swan.onDeviceMotionChange(object);
  };

  wx.stopDeviceMotionListening = function stopDeviceMotionListening(object) {
    return swan.stopDeviceMotionListening(object);
  };

  wx.startDeviceMotionListening = function startDeviceMotionListening(object) {
    return swan.startDeviceMotionListening(object);
  };

  //


  wx.getNetworkType = function getNetworkType(object) {
    return swan.getNetworkType(object);
  };

  wx._network = function _network(res) {
    return swan._network(res);
  };

  wx.onNetworkStatusChange = function onNetworkStatusChange(object) {
    return swan.onNetworkStatusChange(object);
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


  wx.writeBLECharacteristicValue = function writeBLECharacteristicValue(object) {
    return swan.writeBLECharacteristicValue(object);
  };

  wx.readBLECharacteristicValue = function readBLECharacteristicValue(object) {
    return swan.readBLECharacteristicValue(object);
  };

  wx.onBLEConnectionStateChange = function onBLEConnectionStateChange(object) {
    return swan.onBLEConnectionStateChange(object);
  };

  wx.onBLECharacteristicValueChange = function onBLECharacteristicValueChange(object) {
    return swan.onBLECharacteristicValueChange(object);
  };

  wx.notifyBLECharacteristicValueChange = function notifyBLECharacteristicValueChange(object) {
    return swan.notifyBLECharacteristicValueChange(object);
  };

  wx.getBLEDeviceServices = function getBLEDeviceServices(object) {
    return swan.getBLEDeviceServices(object);
  };

  wx.getBLEDeviceCharacteristics = function getBLEDeviceCharacteristics(object) {
    return swan.getBLEDeviceCharacteristics(object);
  };

  wx.createBLEConnection = function createBLEConnection(object) {
    return swan.createBLEConnection(object);
  };

  wx.closeBLEConnection = function closeBLEConnection(object) {
    return swan.closeBLEConnection(object);
  };

  //


  wx.stopBluetoothDevicesDiscovery = function stopBluetoothDevicesDiscovery() {/* return swan.stopBluetoothDevicesDiscovery(object); */};

  wx.startBluetoothDevicesDiscovery = function startBluetoothDevicesDiscovery(object) {
    return swan.startBluetoothDevicesDiscovery(object);
  };

  wx.openBluetoothAdapter = function openBluetoothAdapter() {/* return swan.openBluetoothAdapter(object); */};

  wx.onBluetoothDeviceFound = function onBluetoothDeviceFound(object) {
    return swan.onBluetoothDeviceFound(object);
  };

  wx.onBluetoothAdapterStateChange = function onBluetoothAdapterStateChange(object) {
    return swan.onBluetoothAdapterStateChange(object);
  };

  wx.getConnectedBluetoothDevices = function getConnectedBluetoothDevices(object) {
    return swan.getConnectedBluetoothDevices(object);
  };

  wx.getBluetoothDevices = function getBluetoothDevices(object) {
    return swan.getBluetoothDevices(object);
  };

  wx.getBluetoothAdapterState = function getBluetoothAdapterState(object) {
    return swan.getBluetoothAdapterState(object);
  };

  wx.closeBluetoothAdapter = function closeBluetoothAdapter(object) {
    return swan.closeBluetoothAdapter(object);
  };

  //


  wx.stopHCE = function stopHCE(object) {
    return swan.stopHCE(object);
  };

  wx.startHCE = function startHCE(object) {
    return swan.startHCE(object);
  };

  wx.sendHCEMessage = function sendHCEMessage(object) {
    return swan.sendHCEMessage(object);
  };

  wx.onHCEMessage = function onHCEMessage(object) {
    return swan.onHCEMessage(object);
  };

  wx.getHCEState = function getHCEState(object) {
    return swan.getHCEState(object);
  };

  //


  wx.setScreenBrightness = function setScreenBrightness(object) {
    return swan.setScreenBrightness(object);
  };

  wx.setKeepScreenOn = function setKeepScreenOn(object) {
    return swan.setKeepScreenOn(object);
  };

  wx.onUserCaptureScreen = function onUserCaptureScreen(object) {
    return swan.onUserCaptureScreen(object);
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


  wx.openLocation = function openLocation(object) {
    return swan.openLocation(object);
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
    return console.log('暂不支持！');
  }; // swan.chooseMessageFile(object)
  // //////////////////////////////////////////////////////////////

  wx.saveVideoToPhotosAlbum = function saveVideoToPhotosAlbum(object) {
    return swan.saveVideoToPhotosAlbum(object);
  };

  wx.chooseVideo = function chooseVideo(object) {
    return swan.chooseVideo(object);
  };

  wx.chooseMedia = function chooseMedia() {
    return console.log('暂不支持！');
  };

  wx.stopVoice = function stopVoice(object) {
    object.success = function () {
      console.log('VVV    ');
    };

    return swan.stopVoice(object);
  };

  wx.pauseVoice = function pauseVoice(object) {
    return swan.pauseVoice(object);
  };

  wx.playVoice = function playVoice(object) {
    return swan.playVoice(object);
  };

  wx.setInnerAudioOption = function setInnerAudioOption(object) {
    // const obeyMuteSwitch = true
    return swan.setInnerAudioOption(object);
  };

  wx.getAvailableAudioSources = function getAvailableAudioSources(object) {
    return swan.getAvailableAudioSources(object);
  };

  wx.createAudioContext = function createAudioContext(object) {
    return swan.createAudioContext(object);
  };

  wx.onBackgroundAudioStop = function onBackgroundAudioStop(object) {
    return swan.onBackgroundAudioStop(object);
  };

  wx.onBackgroundAudioPause = function onBackgroundAudioPause(object) {
    return swan.onBackgroundAudioPause(object);
  };

  wx.onBackgroundAudioPlay = function onBackgroundAudioPlay(object) {
    return swan.onBackgroundAudioPlay(object);
  };

  wx.stopBackgroundAudio = function stopBackgroundAudio(object) {
    return swan.stopBackgroundAudio(object);
  };

  wx.seekBackgroundAudio = function seekBackgroundAudio(object) {
    return swan.seekBackgroundAudio(object);
  };

  wx.pauseBackgroundAudio = function pauseBackgroundAudio(object) {
    return swan.pauseBackgroundAudio(object);
  };

  wx.playBackgroundAudio = function playBackgroundAudio(object) {
    return swan.playBackgroundAudio(object);
  };

  wx.getBackgroundAudioPlayerState = function getBackgroundAudioPlayerState(object) {
    return swan.getBackgroundAudioPlayerState(object);
  };

  wx.getBackgroundAudioManager = function getBackgroundAudioManager(object) {
    return swan.getBackgroundAudioManager(object);
  };

  wx.createLivePusherContext = function createLivePusherContext(object) {
    return swan.createLivePusherContext(object);
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

  wx.onSocketError = function onSocketError(object) {
    return swan.onSocketError(object);
  };

  wx.onSocketMessage = function onSocketMessage(object) {
    return swan.onSocketMessage(object);
  };

  wx.onSocketClose = function onSocketClose(object) {
    return swan.onSocketClose(object);
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

  wx.offLocalServiceResolveFail = function offLocalServiceResolveFail(object) {
    return swan.offLocalServiceResolveFail(object);
  };

  wx.onLocalServiceResolveFail = function onLocalServiceResolveFail(object) {
    return swan.onLocalServiceResolveFail(object);
  };

  wx.offLocalServiceDiscoveryStop = function offLocalServiceDiscoveryStop(object) {
    return swan.offLocalServiceDiscoveryStop(object);
  };

  wx.onLocalServiceDiscoveryStop = function onLocalServiceDiscoveryStop(object) {
    return swan.onLocalServiceDiscoveryStop(object);
  };

  wx.offLocalServiceLost = function offLocalServiceLost(object) {
    return swan.offLocalServiceLost(object);
  };

  wx.onLocalServiceLost = function onLocalServiceLost(object) {
    return swan.onLocalServiceLost(object);
  };

  wx.offLocalServiceFound = function offLocalServiceFound(object) {
    return swan.offLocalServiceFound(object);
  };

  wx.onLocalServiceFound = function onLocalServiceFound(object) {
    return swan.onLocalServiceFound(object);
  };

  wx.stopLocalServiceDiscovery = function stopLocalServiceDiscovery(object) {
    return swan.stopLocalServiceDiscovery(object);
  };

  wx.startLocalServiceDiscovery = function startLocalServiceDiscovery(object) {
    return swan.startLocalServiceDiscovery(object);
  };

  //

  // /////// Open Interface //////////


  wx.checkSession = function checkSession(object) {
    return swan.checkSession(object);
  };

  wx.login = function login() {
    /*
      const that = this
      if (!object) {
        return swan.login(object)
      }
      const object2 = {
        //   scopes: "auth_user"
      }
      object2.success = function (res) {
        swan._sessoion = new Date().getTime()
        getApp().onejit.jscode = res.authCode
        const result = {code: res.authCode}
        if (object.success) {
          object.success(result)
        }
        if (object.complete) {
          object.complete(complete)
        }
      }
      object2.fail = function (res) {
        if (object.fail) {
          object.fail(res)
        }
        if (object.complete) {
          object.complete(res)
        }
      }
      return swan.login(object2) */
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

  wx.getAccountInfoSync = function getAccountInfoSync(object) {
    return swan.getAccountInfoSync(object);
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

  wx.openCard = function openCard(object) {
    return swan.openCard(object);
  };

  wx.addCard = function addCard(object) {
    return swan.addCard(object);
  };

  wx.chooseInvoiceTitle = function chooseInvoiceTitle(object) {
    return swan.chooseInvoiceTitle(object);
  };

  wx.chooseInvoice = function chooseInvoice(object) {
    return swan.chooseInvoice(object);
  };

  wx.startSoterAuthentication = function startSoterAuthentication(object) {
    return swan.startSoterAuthentication(object);
  };

  wx.checkIsSupportSoterAuthentication = function checkIsSupportSoterAuthentication(object) {
    return swan.checkIsSupportSoterAuthentication(object);
  };

  wx.checkIsSoterEnrolledInDevice = function checkIsSoterEnrolledInDevice(object) {
    return swan.checkIsSoterEnrolledInDevice(object);
  };

  wx.getWeRunData = function getWeRunData(object) {
    return swan.getWeRunData(object);
  };

  wx.reportMonitor = function reportMonitor() {}
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


  // //////// Router //////////////
  ;

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


  wx.updateShareMenu = function updateShareMenu(object) {
    return swan.updateShareMenu(object);
  };

  wx.showShareMenu = function showShareMenu(object) {
    return swan.showShareMenu(object);
  };

  wx.hideShareMenu = function hideShareMenu(object) {
    return swan.hideShareMenu(object);
  };

  wx.getShareInfo = function getShareInfo(object) {
    return swan.getShareInfo(object);
  };

  // ///////////// Storage //////////////


  wx.getStorageInfoSync = function getStorageInfoSync(object) {
    return swan.getStorageInfoSync(object);
  };

  wx.getStorageInfo = function getStorageInfo(object) {
    return swan.getStorageInfo(object);
  };

  wx.clearStorageSync = function clearStorageSync(object) {
    return swan.clearStorageSync(object);
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
    return console.log('注释了');
  }; // swan.loadFontFace(object)

  wx.stopPullDownRefresh = function stopPullDownRefresh(object) {
    return swan.stopPullDownRefresh(object);
  };

  wx.startPullDownRefresh = function startPullDownRefresh(object) {
    return swan.startPullDownRefresh(object);
  };

  wx.pageScrollTo = function pageScrollTo(object) {
    return swan.pageScrollTo(object);
  };

  wx.setTopBarText = function setTopBarText(object) {
    return swan.setTopBarText(object);
  };

  wx.nextTick = function nextTick(object) {
    return swan.nextTick(object);
  };

  wx.getMenuButtonBoundingClientRect = function getMenuButtonBoundingClientRect(object) {
    return swan.getMenuButtonBoundingClientRect(object);
  };

  wx.offWindowResize = function offWindowResize(object) {
    return swan.offWindowResize(object);
  };

  wx.onWindowResize = function onWindowResize(object) {
    return swan.onWindowResize(object);
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

  // ///////////////////////////////////


  wx.hideKeyboard = function hideKeyboard(object) {
    return swan.hideKeyboard(object);
  };

  return wx;
}();

exports.default = wx;

/***/ }),

/***/ 1:
/***/ (function(module, exports) {

module.exports = require("oneutil");

/***/ }),

/***/ 2:
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

/***/ 3:
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

/***/ 33:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _wx = __webpack_require__(0);

var _wx2 = _interopRequireDefault(_wx);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Component({
  mixins: [],
  data: {},
  props: {},

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

/***/ }),

/***/ 4:
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

/***/ 5:
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

/***/ 6:
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

/***/ 7:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var WORKER = function WORKER() {
  _classCallCheck(this, WORKER);
};

exports.default = WORKER;

/***/ })

/******/ });