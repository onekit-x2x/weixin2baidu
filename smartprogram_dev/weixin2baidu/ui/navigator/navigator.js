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

/***/ 24:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint-disable camelcase */
/* eslint-disable no-console */
// import wx from '../../wx'

Component({
  options: {
    addGlobalClass: true
  },
  properties: {
    onekitId: { type: String, value: '' },
    onekitClass: { type: String, value: '' },
    onekitStyle: { type: String, value: '' },
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

});

/***/ })

/******/ });