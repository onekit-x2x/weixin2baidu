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
/******/ 	return __webpack_require__(__webpack_require__.s = 16);
/******/ })
/************************************************************************/
/******/ ({

/***/ 16:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint-disable guard-for-in */
/* eslint-disable no-console */
Component({
    mixins: [],
    data: {},
    properties: {
        onekitId: { type: String, value: '' },
        onekitClass: { type: String, value: '' },
        onekitStyle: { type: String, value: '' },
        readOnly: false,
        placeholder: '',
        showImgSize: false,
        showImgToolbar: false,
        showImgResize: false
    },
    attached: function attached() {
        var guid = getApp().onejit.context.guid;
        var properties = {};
        for (var name in this.properties) {
            var value = this.properties[name];
            if (value != null) {
                properties[name] = value;
            }
        }
        // console.log(properties);
        // console.log(encodeURIComponent(JSON.stringify(properties)));
        var propertiesString = encodeURIComponent(JSON.stringify(properties));
        var url = 'http://localhost:8082/index.html?guid=' + guid + '&properties=' + propertiesString;
        console.log(url);
        this.setData({
            url: url
        });
    },
    didMount: function didMount() {
        this.webView = swan.createWebViewContext('webView');
        // this.triggerEvent.onReady();
    },
    didUpdate: function didUpdate() {},
    didUnmount: function didUnmount() {},


    methods: {
        webView_message: function webView_message(e) {
            var data = e.detail.data;
            console.log('ssssss', data);
            switch (data.type) {
                case 'event':
                    switch (data.name) {
                        case 'ready':
                            this.triggerEvent('bindready', {});
                            break;
                        case 'focus':
                            this.triggerEvent.onFocus('');
                            break;
                        case 'blur':
                            this.triggerEvent.onBlur();
                            break;
                        case 'input':
                            this.triggerEvent.onInput();
                            break;
                        case 'statuschange':
                            this.triggerEvent.onStatuschange();
                            break;
                        default:
                            break;
                    }
                    break;
                default:
                    break;
            }
        },
        format: function format() {},
        insertDivider: function insertDivider() {},
        insertImage: function insertImage(object) {
            this.webView.postMessage({ insertImage: object.text });
        },
        insertText: function insertText(object) {
            this.webView.postMessage({ insertText: object.text });
        },
        setContents: function setContents() {},
        getContents: function getContents() {},
        clear: function clear() {},
        removeFormat: function removeFormat() {},
        undo: function undo() {},
        redo: function redo() {},
        blur: function blur() {},
        scrollIntoView: function scrollIntoView() {}
    }
});

/***/ })

/******/ });