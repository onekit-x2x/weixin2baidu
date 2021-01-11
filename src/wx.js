/* eslint-disable no-console */
/* eslint-disable camelcase */


// import onekit from 'oneutil'
import CanvasContext from './api/CanvasContext'
import VideoContext from './api/VideoContext'
// import CameraContext from './api/CameraContext'
import InnerAudioContext from './api/InnerAudioContext'
import LivePlayerContext from './api/LivePlayerContext'
// import WORKER from './api/WORKER'
import PROMISE from '../node_modules/oneutil/PROMISE'

import Logmanager from './api/Logmanager'
import RealtimeLogManager from './api/RealtimeLogManager'
import MapContext from './api/MapContext'
// import TASK from '../node_modules/oneutil/TASK'
// import wx_cloud from './wx.cloud'

export default class wx {
  // /////////////// basic ////////////////////////////////
  static canIUse(schema) {
    return swan.canIUse(schema)
  }

  static base64ToArrayBuffer(base64) {
    base64 = base64.replace(/\s/g, '+')
    const commonContent = Buffer.from(base64, 'base64')
    return commonContent
  }

  static arrayBufferToBase64(arrayBuffer) {
    const base64Content = Buffer.from(arrayBuffer).toString('base64')
    return base64Content
  }

  static getSystemInfo(object) {
    return swan.getSystemInfo(object)
  }

  static getSystemInfoSync() {
    return swan.getSystemInfoSync()
  }

  static getSystemInfoAsync() {
    return swan.getSystemInfoSync()
  }

  static getUpdateManager() {
    return swan.getUpdateManager()
  }

  static updateWeChatApp(wx_object) {
    const wx_success = wx_object.success
    const wx_fail = wx_object.fail
    const wx_complete = wx_object.complete
    wx_object = null
    PROMISE((SUCCESS) => {
      const wx_res = {
        errMsg: 'private_openUrl:ok'
      }
      SUCCESS(wx_res)
    }, wx_success, wx_fail, wx_complete)
  }

  static getLaunchOptionsSync() {
    const wx_res = {
      path: 'index/index',
      query: {},
      referrerInfo: {},
      scence: 1001,
      shareTicket: ''
    }
    return wx_res
  }

  static getEnterOptionsSync() {
    const res = {
      path: 'index/index',
      query: {},
      referrerInfo: {},
      scence: 1001,
      shareTicket: ''
    }
    return res
  }

  static onUnhandledRejection() {
    return console.warn('onUnhandledRejection is not support')
  }

  static onThemeChange() {
    return console.warn('onThemeChange is not support')
  }

  static onPageNotFound(callback) {
    return swan.onPageNotFound(callback)
  }

  static onError(callback) {
    return swan.onError(callback)
  }

  static offError(callback) {
    return swan.offError(callback)
  }

  static offPageNotFound(callback) {
    return swan.offPageNotFound(callback)
  }

  static onAudioInterruptionBegin() {
    return console.warn('onAudioInterruptionBegin is not support')
  }

  static onAudioInterruptionEnd() {
    return console.warn('onAudioInterruptionEnd is not support')
  }

  static offAppShow(callback) {
    return swan.offAppShow(callback)
  }

  static onAppShow(callback) {
    return swan.onAppShow(callback)
  }

  static offAppHide(callback) {
    return swan.offAppHide(callback)
  }

  static onAppHide(callback) {
    return swan.onAppHide(callback)
  }

  static setEnableDebug(object) {
    return swan.setEnableDebug(object)
  }

  static offUnhandledRejection() {
    return console.warn('offUnhandledRejection is not support')
  }

  static offThemeChange() {
    return console.warn('offUnhandledRejection is not support')
  }

  static offAudioInterruptionBegin() {
    return console.warn('offAudioInterruptionBegin is not support')
  }

  static offAudioInterruptionEnd() {
    return console.warn('offAudioInterruptionEnd is not support')
  }


  static getRealtimeLogManager() {
    return new RealtimeLogManager()
  }

  static getLogManager() {
    return new Logmanager()
  }

  // ///////// 环境变量 ///////
  static env() {
    const wx_res = {
      USER_DATA_PATH: 'https://usr'
    }
    return wx_res
  }

  // //////// Router //////////////
  static navigateBack(object) {
    return swan.navigateBack(object)
  }

  static switchTab(object) {
    return swan.switchTab(object)
  }

  static navigateTo(object) {
    return swan.navigateTo(object)
  }

  static reLaunch(object) {
    return swan.reLaunch(object)
  }

  static redirectTo(object) {
    return swan.redirectTo(object)
  }

  // //////////// UI ////////////////
  static showActionSheet(object) {
    return swan.showActionSheet(object)
  }

  static hideLoading(object) {
    return swan.hideLoading(object)
  }

  static showLoading(object) {
    return swan.showLoading(object)
  }

  static hideToast(object) {
    return swan.hideToast(object)
  }

  static showToast(object) {
    return swan.showToast(object)
  }

  static showModal(object) {
    return swan.showModal(object)
  }

  static enableAlertBeforeUnload() {
    // return console.warn('enableAlertBeforeUnload is not support')
    const wx_res = {
      errMsg: 'enableAlertBeforeUnload:ok'
    }
    return wx_res
  }

  static disableAlertBeforeUnload() {
    // return console.warn('disableAlertBeforeUnload is not support')
    const wx_res = {
      errMsg: 'disableAlertBeforeUnload:ok'
    }
    return wx_res
  }

  // //////////// NavigationBar ////////////////

  static setNavigationBarColor(object) {
    return swan.setNavigationBarColor(object)
  }

  static hideNavigationBarLoading(object) {
    return swan.hideNavigationBarLoading(object)
  }

  static showNavigationBarLoading(object) {
    return swan.showNavigationBarLoading(object)
  }

  static setNavigationBarTitle(object) {
    return swan.setNavigationBarTitle(object)
  }

  static hideHomeButton() {
    // return console.warn('hideHomeButton is not support')
    const wx_res = {
      errMsg: 'hideHomeButton:ok'
    }
    return wx_res
  }

  // //////////// Background ////////////////

  static setBackgroundTextStyle(object) {
    return swan.setBackgroundTextStyle(object)
  }

  static setBackgroundColor(object) {
    return swan.setBackgroundColor(object)
  }

  // //////////// Tab Bar ////////////////

  static setTabBarItem(object) {
    return swan.setTabBarItem(object)
  }

  static setTabBarStyle(object) {
    return swan.setTabBarStyle(object)
  }

  static hideTabBar(object) {
    return swan.hideTabBar(object)
  }

  static showTabBar(object) {
    return swan.showTabBar(object)
  }

  static hideTabBarRedDot(object) {
    return swan.hideTabBarRedDot(object)
  }

  static showTabBarRedDot(object) {
    return swan.showTabBarRedDot(object)
  }

  static removeTabBarBadge(object) {
    return swan.removeTabBarBadge(object)
  }

  static setTabBarBadge(object) {
    return swan.setTabBarBadge(object)
  }

  // //////////// Font ////////////////

  static loadFontFace() {
    // return console.warn('loadFontFace is not support')
    const wx_res = {
      errMsg: 'loadFontFace:ok',
      status: 'loaded'
    }
    return wx_res
  }

  // //////////// Refresh ////////////////

  static stopPullDownRefresh(object) {
    return swan.stopPullDownRefresh(object)
  }

  static startPullDownRefresh(object) {
    return swan.startPullDownRefresh(object)
  }

  // //////////// Scroll ////////////////

  static pageScrollTo(object) {
    return swan.pageScrollTo(object)
  }

  // ///////////////// animation //////////////////////////
  static createAnimation(object) {
    return swan.createAnimation(object)
  }

  // //////////// TopBar ////////////////
  static setTopBarText() {
    return console.warn('setTopBarText is not support')
  }

  static nextTick(callback) {
    return swan.nextTick(callback)
  }

  // //////////// Menu ////////////////

  static getMenuButtonBoundingClientRect(object) {
    return swan.getMenuButtonBoundingClientRect(object)
  }

  // //////////// windows ////////////////

  static setWindowSize() {
    return console.warn('setWindowSize is not support')
  }

  static onWindowResize() {
    return console.warn('onWindowResize is not support')
  }

  static offWindowResize() {
    return console.warn('offWindowResize is not support')
  }

  // //////////// Keyboard ////////////////

  static onKeyboardHeightChange() {
    // return swan.onKeyboardHeightChange(callback)
    return console.warn('onKeyboardHeightChange is not support')
  }

  static offKeyboardHeightChange() {
    // return swan.offKeyboardHeightChange(callback)
    return console.warn('offKeyboardHeightChange is not support')
  }

  static hideKeyboard() {
    return console.warn('hideKeyboard is not support')
  }

  static getSelectedTextRange() {
    return console.warn('getSelectedTextRange is not support')
  }

  // ////////////// Network ///////////////
  static request(object) {
    return swan.request(object)
  }

  static downloadFile(object) {
    return swan.downloadFile(object)
  }

  static uploadFile(object) {
    return swan.uploadFile(object)
  }

  static connectSocket(object) {
    return swan.connectSocket(object)
  }

  static onSocketError(callback) {
    return swan.onSocketError(callback)
  }

  static onSocketMessage(callback) {
    return swan.onSocketMessage(callback)
  }

  static onSocketClose(callback) {
    return swan.onSocketClose(callback)
  }

  static onSocketOpen(object) {
    return swan.connectSocket(object)
  }

  static sendSocketMessage(object) {
    return swan.sendSocketMessage(object)
  }

  static closeSocket(object) {
    return swan.closeSocket(object)
  }

  static offLocalServiceResolveFail() {
    return console.warn('offLocalServiceResolveFail is not support')
  }

  static onLocalServiceResolveFail() {
    return console.warn('onLocalServiceResolveFail is not support')
  }

  static offLocalServiceDiscoveryStop() {
    return console.warn('offLocalServiceDiscoveryStop is not support')
  }

  static onLocalServiceDiscoveryStop() {
    return console.warn('onLocalServiceDiscoveryStop is not support')
  }

  static offLocalServiceLost() {
    return console.warn('offLocalServiceLost is not support')
  }

  static onLocalServiceLost() {
    return console.warn('onLocalServiceLost is not support')
  }

  static offLocalServiceFound() {
    return console.warn('offLocalServiceFound is not support')
  }

  static onLocalServiceFound() {
    return console.warn('onLocalServiceFound is not support')
  }

  static stopLocalServiceDiscovery() {
    return console.warn('stopLocalServiceDiscovery is not support')
  }

  static startLocalServiceDiscovery() {
    return console.warn('startLocalServiceDiscovery is not support')
  }

  static createUDPSocket() {
    return console.warn('createUDPSocket is not support')
  }

  // ///////////// Storage //////////////
  static getStorageInfoSync(object) {
    return swan.getStorageInfoSync(object)
  }

  static getStorageInfo(object) {
    return swan.getStorageInfo(object)
  }

  static clearStorageSync() {
    return swan.clearStorageSync()
  }

  static clearStorage(object) {
    return swan.clearStorage(object)
  }

  static removeStorageSync(object) {
    return swan.removeStorageSync(object)
  }

  static removeStorage(object) {
    return swan.removeStorage(object)
  }

  static setStorageSync(key, value) {
    return swan.setStorageSync(key, value)
  }

  static setStorage(object) {
    return swan.setStorage(object)
  }

  static getStorageSync(key) {
    return swan.getStorageSync(key)
  }

  static getStorage(object) {
    return swan.getStorage(object)
  }

  // ///////////////////////////////////////////
  static setBackgroundFetchToken(wx_object) {
    const wx_token = wx_object.token
    const wx_success = wx_object.success
    const wx_fail = wx_object.fail
    const wx_complete = wx_object.complete
    wx_object = null
    // ///////////////
    PROMISE((SUCCESS) => {
      swan.setStorage({
        key: 'wx_token',
        data: wx_token,
        success: () => {
          const wx_res = {
            errMsg: 'setBackgroundFetchToken:ok'
          }
          SUCCESS(wx_res)
        }
      })
    }, wx_success, wx_fail, wx_complete)
  }

  static getBackgroundFetchToken(wx_object) {
    const wx_success = wx_object.success
    const wx_fail = wx_object.fail
    const wx_complete = wx_object.complete
    wx_object = null
    PROMISE((SUCCESS) => {
      swan.getStorage({
        key: 'wx_token',
        success: (swan_res) => {
          const wx_res = {
            errMsg: 'getBackgroundFetchToken:ok',
            token: swan_res.data
          }
          SUCCESS(wx_res)
        }
      })
    }, wx_success, wx_fail, wx_complete)
  }

  static onBackgroundFetchData(callback) {
    swan.getStorage({
      key: 'wx_token',
      success: (swan_res) => {
        if (swan_res) {
          const res = {
            fetchType: 'periodic',
            fetchedData: swan_res.data,
            timeStamp: new Date().getTime()
          }
          callback(res)
        }
      }
    })
  }

  static getBackgroundFetchData(wx_object) {
    const wx_success = wx_object.success
    const wx_fail = wx_object.fail
    const wx_complete = wx_object.complete
    wx_object = null
    PROMISE((SUCCESS) => {
      swan.getStorage({
        key: 'wx_token',
        success: (swan_res) => {
          const wx_res = {
            errMsg: 'getBackgroundFetchData:ok',
            token: swan_res.data
          }
          SUCCESS(wx_res)
        }
      })
    }, wx_success, wx_fail, wx_complete)
  }

  // //////// Media ////////////////////
  static createMapContext(mapId) {
    return new MapContext(swan.createMapContext(mapId))
  }

  static compressImage(object) {
    return swan.compressImage(object)
  }

  static saveImageToPhotosAlbum(object) {
    return swan.saveImageToPhotosAlbum(object)
  }

  static getImageInfo(object) {
    return swan.getImageInfo(object)
  }

  static previewImage(object) {
    return swan.previewImage(object)
  }

  static chooseImage(object) {
    return swan.chooseImage(object)
  }

  static chooseMessageFile(wx_object) {
    const wx_count = wx_object.count
    const wx_type = wx_object.type || 'image'
    const wx_success = wx_object.success
    const wx_fail = wx_object.fail
    const wx_complete = wx_object.complete
    wx_object = null
    PROMISE((SUCCESS) => {
      if (wx_type === 'image') {
        swan.chooseImage({
          wx_count,
          success: swan_res => {
            const ali_tempFiles = swan_res.tempFiles.map(file => ({
              path: file.path,
              size: file.size,
              name: '.png',
              type: 'image',
              time: new Date().getTime()
            }))
            const wx_res = {
              errMsg: 'chooseMessageFile: ok',
              tempFiles: ali_tempFiles
            }
            SUCCESS(wx_res)
          }
        })
      } else {
        console.warn('only support image')
      }
    }, wx_success, wx_fail, wx_complete)
  }

  static previewMedia(wx_object) {
    const wx_sources = wx_object.sources
    const wx_success = wx_object.success
    const wx_fail = wx_object.fail
    const wx_complete = wx_object.complete
    wx_object = null
    const swan_urls = wx_sources.map(res => res.url)
    PROMISE((SUCCESS) => {
      swan.previewImage({
        urls: swan_urls,
        success: () => {
          const wx_res = {
            errMsg: 'previewMedia:  ok'
          }
          SUCCESS(wx_res)
        }
      })
    }, wx_success, wx_fail, wx_complete)
  }

  // //////////////////////////////////////////////////////////////

  static saveVideoToPhotosAlbum(object) {
    return swan.saveVideoToPhotosAlbum(object)
  }

  static chooseVideo(object) {
    return swan.chooseVideo(object)
  }

  static chooseMedia(wx_object) {
    const wx_mediaType = wx_object.mediaType || ['image', 'video']
    const wx_success = wx_object.success
    const wx_fail = wx_object.fail
    const wx_complete = wx_object.complete
    wx_object = null
    PROMISE((SUCCESS) => {
      if (wx_mediaType.indexOf('image') > -1 && wx_mediaType.indexOf('video') > -1) {
        console.warn('mediaType only one support')
      } else if (wx_mediaType.indexOf('video') > -1) {
        swan.chooseVideo({
          success: swan_res => {
            const ali_tempFiles = {
              tempFilePath: swan_res.tempFilePath,
              size: swan_res.size,
              duration: swan_res.duration,
              height: swan_res.height,
              width: swan_res.width
            }
            const wx_res = {
              errMsg: 'chooseMedia: ok',
              type: 'video',
              tempFiles: ali_tempFiles
            }
            SUCCESS(wx_res)
          }
        })
      } else if (wx_mediaType.indexOf('image') > -1) {
        swan.chooseImage({
          success: swan_res => {
            const ali_tempFiles = swan_res.tempFiles.map(file => ({
              tempFilePath: file.path,
              size: file.size
            }))
            const wx_res = {
              errMsg: 'chooseMedia: ok',
              type: 'image',
              tempFiles: ali_tempFiles
            }
            SUCCESS(wx_res)
          }
        })
      }
    }, wx_success, wx_fail, wx_complete)
  }

  static openVideoEditor() {
    return console.warn('openVideoEditor is not support')
  }

  static getVideoInfo() {
    return console.warn('getVideoInfo is not support')
  }

  static compressVideo() {
    return console.warn('compressVideo is not support')
  }

  static stopVoice() {
    const InnerAudioContext = swan.createInnerAudioContext()
    return InnerAudioContext.stop()
  }

  static pauseVoice() {
    const InnerAudioContext = swan.createInnerAudioContext()
    return InnerAudioContext.pause()
  }

  static playVoice(wx_object) {
    const wx_filePath = wx_object.filePath
    const InnerAudioContext = swan.createInnerAudioContext()
    InnerAudioContext.src = wx_filePath
    InnerAudioContext.autoplay = false
    return InnerAudioContext.play()
  }

  static setInnerAudioOption(object) {
    return swan.setInnerAudioOption(object)
  }

  static getAvailableAudioSources(object) {
    return swan.getAvailableAudioSources(object)
  }

  static createMediaAudioPlayer() {
    return console.warn('createMediaAudioPlayer is not support')
  }

  static createAudioContext() {
    return console.warn('createAudioContext is not support')
  }

  static onBackgroundAudioStop(callback) {
    const BackgroundAudioManager = swan.getBackgroundAudioManager()
    return BackgroundAudioManager.onStop(callback)
  }

  static onBackgroundAudioPause(callback) {
    const BackgroundAudioManager = swan.getBackgroundAudioManager()
    return BackgroundAudioManager.onPause(callback)
  }

  static onBackgroundAudioPlay(callback) {
    const BackgroundAudioManager = swan.getBackgroundAudioManager()
    return BackgroundAudioManager.onPlay(callback)
  }

  static stopBackgroundAudio() {
    const BackgroundAudioManager = swan.getBackgroundAudioManager()
    return BackgroundAudioManager.stop()
  }

  static seekBackgroundAudio(wx_object) {
    const wx_position = wx_object.position
    const BackgroundAudioManager = swan.getBackgroundAudioManager()
    return BackgroundAudioManager.seek(wx_position)
  }

  static pauseBackgroundAudio() {
    const BackgroundAudioManager = swan.getBackgroundAudioManager()
    return BackgroundAudioManager.pause()
  }

  static playBackgroundAudio(wx_object) {
    const wx_dataUrl = wx_object.dataUrl
    const BackgroundAudioManager = swan.getBackgroundAudioManager()
    BackgroundAudioManager.src = wx_dataUrl
    return BackgroundAudioManager.play()
  }

  static getBackgroundAudioPlayerState() {
    return console.warn('getBackgroundAudioPlayerState is not support')
  }

  static getBackgroundAudioManager(object) {
    return swan.getBackgroundAudioManager(object)
  }

  static createLivePusherContext() {
    return console.warn('createLivePusherContext is not support')
  }

  static startRecord(object) {
    const recorderManager = swan.getRecorderManager(object)
    recorderManager.onStart((res) => {
      if (object.success) {
        object.success(res)
      }
      if (object.complete) {
        object.complete(res)
      }
    })
    return recorderManager.start()
  }

  static stopRecord(object) {
    const recorderManager = swan.getRecorderManager(object)
    recorderManager.onStop((res) => {
      if (object.success) {
        object.success(res)
      }
      if (object.complete) {
        object.complete(res)
      }
    })
    return recorderManager.stop()
  }

  static getRecorderManager(object) {
    return swan.getRecorderManager(object)
  }

  static createMediaContainer() {
    return console.warn('createMediaContainer is not support')
  }

  static updateVoIPChatMuteConfig() {
    return console.warn('updateVoIPChatMuteConfig is not support')
  }

  static subscribeVoIPVideoMembers() {
    return console.warn('subscribeVoIPVideoMembers is not support')
  }

  static onVoIPVideoMembersChanged() {
    return console.warn('onVoIPVideoMembersChanged is not support')
  }

  static onVoIPChatSpeakersChanged() {
    return console.warn('onVoIPChatSpeakersChanged is not support')
  }

  static onVoIPChatMembersChanged() {
    return console.warn('onVoIPChatMembersChanged is not support')
  }

  static onVoIPChatInterrupted() {
    return console.warn('onVoIPChatInterrupted is not support')
  }

  static offVoIPVideoMembersChanged() {
    return console.warn('offVoIPVideoMembersChanged is not support')
  }

  static offVoIPChatMembersChanged() {
    return console.warn('offVoIPChatMembersChanged is not support')
  }

  static offVoIPChatInterrupted() {
    return console.warn('offVoIPChatInterrupted is not support')
  }

  static joinVoIPChat() {
    return console.warn('joinVoIPChat is not support')
  }

  static exitVoIPChat() {
    return console.warn('exitVoIPChat is not support')
  }

  static createMediaRecorder() {
    return console.warn('createMediaRecorder is not support')
  }

  static createVideoDecoder() {
    return console.warn('createVideoDecoder is not support')
  }

  static createCanvasContext(canvasId) {
    return new CanvasContext(swan.createCanvasContext(canvasId))
  }

  static createVideoContext(videoId) {
    return new VideoContext(swan.createVideoContext(videoId))
  }

  static createInnerAudioContext(audioId) {
    return new InnerAudioContext(swan.createInnerAudioContext(audioId))
  }

  static createLivePlayerContext(livePlayerId) {
    return new LivePlayerContext(swan.createLivePlayerContext(livePlayerId))
  }

  static createCameraContext() {
    return swan.createCameraContext()
  }

  // ////////// Location ///////////////
  static stopLocationUpdate(object) {
    return swan.stopLocationUpdate(object)
  }

  static startLocationUpdateBackground() {
    return console.warn('startLocationUpdateBackground is not support')
  }

  static startLocationUpdate(object) {
    return swan.startLocationUpdate(object)
  }

  static openLocation(object) {
    return swan.openLocation(object)
  }

  static onLocationChange(callback) {
    return swan.onLocationChange(callback)
  }

  static offLocationChange(callback) {
    return swan.offLocationChange(callback)
  }

  static getLocation(object) {
    return swan.getLocation(object)
  }

  static chooseLocation(object) {
    return swan.chooseLocation(object)
  }

  // /////////// Share /////////////
  static updateShareMenu() {
    return console.warn('updateShareMenu is not support')
  }

  static showShareMenu() {
    return console.warn('showShareMenu is not support')
  }

  static hideShareMenu() {
    return console.warn('hideShareMenu is not support')
  }

  static getShareInfo() {
    return console.warn('getShareInfo is not support')
  }

  static authPrivateMessage() {
    return console.warn('authPrivateMessage is not support')
  }

  // /////// Canvas /////////////

  static createOffscreenCanvas() {
    return console.warn('createOffscreenCanvas is not support')
  }

  static canvasToTempFilePath(object) {
    return swan.canvasToTempFilePath(object)
  }

  static canvasPutImageData(object) {
    return swan.canvasPutImageData(object)
  }

  static canvasGetImageData(object) {
    return swan.canvasGetImageData(object)
  }

  // ////////////////// File //////////
  static saveFileToDisk(wx_object) {
    const wx_filePath = wx_object.filePath
    const wx_success = wx_object.success
    const wx_fail = wx_object.fail
    const wx_complete = wx_object.complete
    wx_object = null
    PROMISE((SUCCESS) => {
      const tempFilePath = wx_filePath
      swan.saveFile({
        tempFilePath,
        success: () => {
          const wx_res = {
            errMsg: 'saveFileToDisk: ok'
          }
          SUCCESS(wx_res)
        }
      })
    }, wx_success, wx_fail, wx_complete)
  }

  static getFileSystemManager(object) {
    return swan.getFileSystemManager(object)
  }

  static getFileInfo(object) {
    return swan.getFileInfo(object)
  }

  static removeSavedFile(object) {
    return swan.removeSavedFile(object)
  }

  static getSavedFileInfo(object) {
    return swan.getSavedFileInfo(object)
  }

  static getSavedFileList(object) {
    return swan.getSavedFileList(object)
  }

  static openDocument(object) {
    return swan.openDocument(object)
  }

  static saveFile(object) {
    return swan.saveFile(object)
  }

  // /////// Open Interface //////////
  static checkSession(object) {
    return swan.checkSession(object)
  }

  static login(object) {
    return swan.login(object)
  }

  static getUserInfo() {
    return swan.getUserInfo({
      success(res) {
        swan.request({
          url: getApp().onejit.server + 'userinfo', // 仅为示例，并非真实的接口地址
          method: 'POST',
          responseType: 'text',
          data: {
            jscode: getApp().onejit.jscode,
            data: res.toString()
          },
          success: res => {
            console.log(res.data)
          },
          fail: err => {
            console.log('错误码：' + err.errCode)
            console.log('错误信息：' + err.errMsg)
          }
        })
      }

    })
  }

  static reportMonitor() {
    const wx_res = {
      errMsg: 'reportMonitor: ok'
    }
    return wx_res
  }

  static getOpenData(object) {
    return swan.getOpenData(object)
  }

  static getPhoneNumber(object) {
    return swan.getPhoneNumber(object)
  }

  static navigateToMiniProgram(object) {
    return swan.navigateToMiniProgram(object)
  }

  static navigateBackMiniProgram(object) {
    return swan.navigateBackMiniProgram(object)
  }

  static getAccountInfoSync() {
    const wx_res = {
      miniProgram: {
        appid: 'wxecb5d25a4a5c222f',
        envVersion: 'develop',
        version: ''
      },
      plugin: {
        appid: '',
        version: ''
      }
    }
    return wx_res
    // return console.warn('geAccountInfoSync is not support')
  }

  static reportAnalytics(object, eventName) {
    return swan.reportAnalytics(object, eventName)
  }

  static requestPayment(object) {
    return swan.requestPayment(object)
  }

  static authorize(object) {
    return swan.authorize(object)
  }

  static openSetting(object) {
    return swan.openSetting(object)
  }

  static getSetting(object) {
    return swan.getSetting(object)
  }

  static chooseAddress(object) {
    return swan.chooseAddress(object)
  }

  static openCard() {
    return console.warn('openCard is not support')
  }

  static addCard() {
    return console.warn('addCard is not support')
  }

  static chooseInvoiceTitle(object) {
    return swan.chooseInvoiceTitle(object)
  }

  static chooseInvoice() {
    return console.warn('chooseInvoice is not support')
  }

  static startSoterAuthentication() {
    return console.warn('startSoterAuthentication is not support')
  }

  static checkIsSupportSoterAuthentication() {
    return console.warn('checkIsSupportSoterAuthentication is not support')
  }

  static checkIsSoterEnrolledInDevice() {
    return console.warn('checkIsSoterEnrolledInDevice is not support')
  }

  static getWeRunData() {
    return console.warn('getWeRunData is not support')
  }

  static reportPerformance() {
    return console.warn('reportPerformance is not support')
  }

  static getPerformance() {
    return console.warn('getPerformance is not support')
  }

  static requestSubscribeMessage() {
    // const wx_tmplIds = wx_object.tmplIds
    // const wx_success = wx_object.success
    // const wx_fail = wx_object.fail
    // const wx_complete = wx_object.complete
    // wx_object = null
    // PROMISE((SUCCESS) => {
    //   TASK(wx_tmplIds, (wx_tmplId, callback) => {
    //     const swan_templateId = wx_tmplId
    //     swan.subscribeService({
    //       templateId: swan_templateId,
    //       subscribeId: '',
    //       success: (swan_res) => {
    //         const TEMPLATE_ID = swan_res.form_id
    //         callback(TEMPLATE_ID)
    //       }
    //     })
    //   }, (TEMPLATE_IDS) => {
    //     const wx_res = {
    //       errMsg: 'subscribeService: ok',
    //       TEMPLATE_ID: TEMPLATE_IDS
    //     }
    //     SUCCESS(wx_res)
    //   })
    // }, wx_success, wx_fail, wx_complete)
    return console.warn('requestSubscribeMessage is not support')
  }

  static showRedPackage() {
    return console.warn('showRedPackage is not support')
  }

  static getGroupEnterInfo() {
    return console.warn('getGroupEnterInfo is not support')
  }

  static onBLEPeripheralConnectionStateChanged() {
    return console.warn('onBLEPeripheralConnectionStateChanged is not support')
  }

  static offBLEPeripheralConnectionStateChanged() {
    return console.warn('offBLEPeripheralConnectionStateChanged is not support')
  }

  static createBLEPeripheralServer() {
    return console.warn('createBLEPeripheralServer is not support')
  }

  // //////////// Device //////////////////
  static onBeaconServiceChange() {
    return console.warn('onBeaconServiceChange is not support')
  }

  static onBeaconUpdate() {
    return console.warn('onBeaconUpdate is not support')
  }

  static getBeacons() {
    return console.warn('getBeacons is not support')
  }

  static stopBeaconDiscovery() {
    return console.warn('stopBeaconDiscovery is not support')
  }

  static startBeaconDiscovery() {
    return console.warn('startBeaconDiscovery is not support')
  }

  static offBeaconUpdate() {
    return console.warn('offBeaconUpdate is not support')
  }

  static offBeaconServiceChange() {
    return console.warn('offBeaconServiceChange is not support')
  }

  //
  static stopHCE() {
    return console.warn('stopHCE is not support')
  }

  static startHCE() {
    return console.warn('startHCE is not support')
  }

  static sendHCEMessage() {
    return console.warn('sendHCEMessage is not support')
  }

  static onHCEMessage() {
    return console.warn('onHCEMessage is not support')
  }

  static offHCEMessage() {
    return console.warn('offHCEMessage is not support')
  }

  static getNFCAdapter() {
    return console.warn('getNFCAdapter is not support')
  }

  static getHCEState() {
    return console.warn('getHCEState is not support')
  }

  static stopWifi() {
    return console.warn('stopWifi is not support')
  }

  static startWifi() {
    return console.warn('startWifi is not support')
  }

  static setWifiList() {
    return console.warn('setWifiList is not support')
  }

  static onWifiConnected() {
    return console.warn('onWifiConnected is not support')
  }

  static onGetWifiList() {
    return console.warn('onGetWifiList is not support')
  }

  static offWifiConnected() {
    return console.warn('offWifiConnected is not support')
  }

  static offGetWifiList() {
    return console.warn('offGetWifiList is not support')
  }

  static getWifiList() {
    return console.warn('getWifiList is not support')
  }

  static getConnectedWifi() {
    return console.warn('getConnectedWifi is not support')
  }

  static connectWifi() {
    return console.warn('connectWifi is not support')
  }

  static addPhoneContact(object) {
    return swan.addPhoneContact(object)
  }

  static checkIsOpenAccessibility() {
    return console.warn('checkIsOpenAccessibility is not support')
  }

  //
  static writeBLECharacteristicValue() {
    return console.warn('writeBLECharacteristicValue is not support')
  }

  static setBLEMTU() {
    return console.warn('setBLEMTU is not support')
  }

  static readBLECharacteristicValue() {
    return console.warn('setBLEMTU is not support')
  }

  static onBLEConnectionStateChange() {
    return console.warn('onBLEConnectionStateChange is not support')
  }

  static onBLECharacteristicValueChange() {
    return console.warn('onBLECharacteristicValueChange is not support')
  }

  static offBLEConnectionStateChange() {
    return console.warn('offBLEConnectionStateChange is not support')
  }

  static offBLECharacteristicValueChange() {
    return console.warn('offBLECharacteristicValueChange is not support')
  }

  static notifyBLECharacteristicValueChange() {
    return console.warn('notifyBLECharacteristicValueChange is not support')
  }

  static makeBluetoothPair() {
    return console.warn('makeBluetoothPair is not support')
  }

  static getBLEDeviceServices() {
    return console.warn('getBLEDeviceServices is not support')
  }

  static getBLEDeviceRSSI() {
    return console.warn('getBLEDeviceRSSI is not support')
  }

  static getBLEDeviceCharacteristics() {
    return console.warn('getBLEDeviceCharacteristics is not support')
  }

  static createBLEConnection() {
    return console.warn('createBLEConnection is not support')
  }

  static closeBLEConnection() {
    return console.warn('closeBLEConnection is not support')
  }

  //
  static stopBluetoothDevicesDiscovery() {
    return console.warn('stopBluetoothDevicesDiscovery is not support')
  }

  static startBluetoothDevicesDiscovery() {
    return console.warn('startBluetoothDevicesDiscovery is not support')
  }

  static openBluetoothAdapter() {
    return console.warn('openBluetoothAdapter is not support')
  }

  static onBluetoothDeviceFound() {
    return console.warn('onBluetoothDeviceFound is not support')
  }

  static onBluetoothAdapterStateChange() {
    return console.warn('onBluetoothAdapterStateChange is not support')
  }

  static offBluetoothDeviceFound() {
    return console.warn('offBluetoothDeviceFound is not support')
  }

  static offBluetoothAdapterStateChange() {
    return console.warn('offBluetoothAdapterStateChange is not support')
  }

  static getConnectedBluetoothDevices() {
    return console.warn('getConnectedBluetoothDevices is not support')
  }

  static getBluetoothDevices() {
    return console.warn('getBluetoothDevices is not support')
  }

  static getBluetoothAdapterState() {
    return console.warn('getBluetoothAdapterState is not support')
  }

  static closeBluetoothAdapter() {
    return console.warn('closeBluetoothAdapter is not support')
  }

  static getBatteryInfoSync(object) {
    return swan.getBatteryInfoSync(object)
  }

  static getBatteryInfo(object) {
    return swan.getBatteryInfo(object)
  }

  //
  static getNetworkType(object) {
    return swan.getNetworkType(object)
  }

  static offNetworkStatusChange() {
    this._NetworkStatusChange = null
  }

  static onNetworkStatusChange(callback) {
    swan.onNetworkStatusChange((res) => {
      if (getApp().onekit_NetworkStatusChange) {
        getApp().onekit_NetworkStatusChange(res)
      }
    })
    this._NetworkStatusChange = callback
  }

  //
  static getClipboardData(object) {
    return swan.getClipboardData(object)
  }

  static setClipboardData(object) {
    return swan.setClipboardData(object)
  }

  //
  static setScreenBrightness(object) {
    return swan.setScreenBrightness(object)
  }

  static setKeepScreenOn(object) {
    return swan.setKeepScreenOn(object)
  }

  static onUserCaptureScreen(callback) {
    swan.onUserCaptureScreen((res) => {
      if (getApp().onekit_UserCaptureScreen) {
        getApp().onekit_UserCaptureScreen(res)
      }
    })
    getApp().onekit_UserCaptureScreen = callback
  }

  static offUserCaptureScreen() {
    getApp().onekit_UserCaptureScreen = null
  }

  static getScreenBrightness(object) {
    return swan.getScreenBrightness(object)
  }

  //
  static makePhoneCall(object) {
    return swan.makePhoneCall(object)
  }

  //
  static onAccelerometerChange(callback) {
    swan.onAccelerometerChange(res => {
      if (getApp().onekit_AccelerometerChange) {
        getApp().onekit_AccelerometerChange(res)
      }
    })
    getApp().onekit_AccelerometerChange = callback
  }

  static offAccelerometerChange() {
    getApp().onekit_AccelerometerChange = null
  }

  static stopAccelerometer(object) {
    return swan.stopAccelerometer(object)
  }

  static startAccelerometer(object) {
    return swan.startAccelerometer(object)
  }

  static onCompassChange(callback) {
    swan.onCompassChange((res) => {
      if (getApp().onekit_CompassChange) {
        getApp().onekit_CompassChange(res)
      }
    })
    getApp().onekit_CompassChange = callback
  }

  static offCompassChange() {
    getApp().onekit_CompassChange = null
  }

  static stopCompass(object) {
    return swan.stopCompass(object)
  }

  static startCompass(object) {
    return swan.startCompass(object)
  }

  //
  static onDeviceMotionChange(callback) {
    swan.onDeviceMotionChange((res) => {
      if (getApp().onekit_DeviceMotionChange) {
        getApp().onekit_DeviceMotionChange(res)
      }
    })
    getApp().onekit_DeviceMotionChange = callback
  }

  static offDeviceMotionChange() {
    getApp().onekit_DeviceMotionChange = null
  }

  static stopDeviceMotionListening(object) {
    return swan.stopDeviceMotionListening(object)
  }

  static startDeviceMotionListening(object) {
    return swan.startDeviceMotionListening(object)
  }

  static onGyroscopeChange() {
    return console.warn('onGyroscopeChange is not support')
  }

  static offGyroscopeChange() {
    return console.warn('offGyroscopeChange is not support')
  }

  static stopGyroscope() {
    return console.warn('stopGyroscope is not support')
  }

  static startGyroscope() {
    return console.warn('startGyroscope is not support')
  }

  //
  static onMemoryWarning(callback) {
    swan.onMemoryWarning((res) => {
      if (getApp().onekit_MemoryWarning) {
        getApp().onekit_MemoryWarning(res)
      }
    })
    getApp().onekit_MemoryWarning = callback
  }

  static offMemoryWarning() {
    getApp().onekit_MemoryWarning = null
  }

  static scanCode(object) {
    return swan.scanCode(object)
  }

  //
  static vibrateLong(object) {
    return swan.vibrateLong(object)
  }

  static vibrateShort(object) {
    return swan.vibrateShort(object)
  }

  // //////////// Worker ///////////////
  static createWorker() {
    return console.warn('createWorker is not support')
  }

  // ///////////////// Ext //////////////
  static getExtConfigSync() {
    return swan.getExtConfigSync()
  }

  static getExtConfig(object) {
    return swan.getExtConfig(object)
  }

  // //////////// WXML ///////////////
  static createSelectorQuery() {
    return swan.createSelectorQuery()
  }

  static createIntersectionObserver(wx_object) {
    const wx_thresholds = wx_object.thresholds || [0]
    const wx_initialRatio = wx_object.initialRatio || 0
    const wx_observeAll = wx_object.observeAll || false
    wx_object = null
    const swan_object = {
      thresholds: wx_thresholds,
      initialRatio: wx_initialRatio,
      selectAll: wx_observeAll
    }
    return swan.createIntersectionObserver(swan_object)
  }

  // //////////// ad ///////////////
  static createRewardedVideoAd(wx_object) {
    const wx_adUnitId = wx_object.adUnitId
    wx_object = null
    const swan_object = {
      adUnitId: wx_adUnitId,
      appSid: ''
    }
    return swan.createIntersectionObserver(swan_object)
  }

  static createInterstitialAd(wx_object) {
    const wx_adUnitId = wx_object.adUnitId
    wx_object = null
    const swan_object = {
      adUnitId: wx_adUnitId,
      appSid: ''
    }
    return swan.createIntersectionObserver(swan_object)
  }
}
