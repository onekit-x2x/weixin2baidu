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
/******/ 	return __webpack_require__(__webpack_require__.s = 21);
/******/ })
/************************************************************************/
/******/ ({

/***/ 21:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint-disable no-console */
Component({
  mixins: [],
  data: {},
  observers: {
    enableSatellite: function enableSatellite() {
      console.warn('[onekit-map]暂不支持enable-satellite');
    },
    enableTraffic: function enableTraffic() {
      console.warn('[onekit-map]暂不支持enable-traffic');
    },
    subkey: function subkey() {
      console.warn('[onekit-map]暂不支持subkey');
    },
    skew: function skew() {
      console.warn('[onekit-map]暂不支持skew');
    },
    layerStyle: function layerStyle() {
      console.warn('[onekit-map]暂不支持layerStyle');
    },
    showScale: function showScale() {
      console.warn('[onekit-map]暂不支持showScale');
    }
  },
  properties: {
    onekitId: { type: String, value: '' },
    enableSatellite: { type: Boolean },
    enableTraffic: { type: Boolean },
    subkey: { type: String },
    skew: { type: Number },
    layerStyle: { type: String },
    showScale: { type: Boolean }
  },
  onReady: function onReady() {
    this.mapCtx = swan.createMapContext('eMap');
  },
  didUpdate: function didUpdate() {},
  didUnmount: function didUnmount() {},

  methods: {
    onMarkertap: function onMarkertap(e) {
      console.log('onMarkertap', e);
      this.triggerEvent('bindmarkertap', e);
    },
    onCallouttap: function onCallouttap(e) {
      console.log('onCallouttap', e);
      this.triggerEvent('onCallouttap', e);
    },
    onControltap: function onControltap(e) {
      console.log('onControltap', e);
      this.triggerEvent('onControltap', e);
    },
    onRegionchange: function onRegionchange(e) {
      console.log('onRegionchange', e);
      this.triggerEvent('onRegionchange', e);
    },
    onTap: function onTap(e) {
      console.log('onTap', e);
      this.triggerEvent('onTap', e);
    },
    onUpdated: function onUpdated(e) {
      console.log('onUpdated', e);
      this.triggerEvent('onUpdated', e);
    },
    onPoitap: function onPoitap(e) {
      console.log('onPoitap', e);
      this.triggerEvent('onPoitap', e);
    },
    onLabeltap: function onLabeltap(e) {
      console.warn('暂不支持!');
      this.triggerEvent('onPoitap', e);
    },
    xxxxxx: function xxxxxx() {}
  }
});

/***/ })

/******/ });