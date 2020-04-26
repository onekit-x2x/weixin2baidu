import CanvasContext from "./api/CanvasContext"
import WORKER from "./api/WORKER"
import wx_cloud from "./wx.cloud"
import onekit from "./onekit"
export default class wx {
    /////////////////// animation //////////////////////////
    static createAnimation(object) { return swan.createAnimation(object); }
    ///////////////// basic ////////////////////////////////
    static canIUse(object) { return true; }
    static getSystemInfo(object) { return swan.getSystemInfo(object); }
    static getSystemInfoSync() { return swan.getSystemInfoSync(); }
    static base64ToArrayBuffer(base64) { return swan.base64ToArrayBuffer(object); }
    static arrayBufferToBase64(arrayBuffer) { return swan.arrayBufferToBase64(object); }
    static getUpdateManager(object) { return swan.getUpdateManager(object); }
    static getLaunchOptionsSync(object) { return swan.getLaunchOptionsSync(object); }
    static offPageNotFound(object) { return swan.offPageNotFound(object); }
    static onPageNotFound(object) { return swan.onPageNotFound(object); }
    static offError(object) { return swan.offError(object); }
    static onError(object) { return swan.onError(object); }
    static offAppShow(object) { return swan.offAppShow(object); }
    static onAppShow(object) { return swan.onAppShow(object); }
    static offAppHide(object) { return swan.offAppHide(object); }
    static onAppHide(object) { return swan.onAppHide(object); }
    static setEnableDebug(object) { return swan.setEnableDebug(object); }
    static getLogManager(object) { return swan.getLogManager(object); }
    /////////////////// Canvas ///////////////////
    static drawCanvas(object) {
        var canvasId = object.canvasId;
        var actions = object.actions;
        var canvasContext = swan.createCanvasContext(canvasId);
        for (var action of actions) {
            var data = action.data;
            switch (action.method) {
                case "save":
                    canvasContext.save();
                    break;
                case "restore":
                    canvasContext.restore();
                    break;
                case "setFillStyle":
                    canvasContext.setFillStyle(onekit.color.array2str(data[1]));
                    break;
                case "setStrokeStyle":
                    canvasContext.setStrokeStyle(onekit.color.array2str(data[1]));
                    break;
                case "setFontSize":
                    canvasContext.setFontSize(data[0]);
                    break;
                case "setGlobalAlpha":
                    canvasContext.setGlobalAlpha(data[0]);
                    break;
                case "setShadow":
                    var dat = data[3];
                    canvasContext.setShadow(data[0], data[1], data[2], onekit.color.array2str(data[3]));
                    break;
                case "drawImage":
                    canvasContext.drawImage.apply(canvasContext, data)
                    break;
                case "fillText":
                    canvasContext.fillText.apply(canvasContext, data)
                    break;
                case "setLineCap": canvasContext.setLineCap(data[0]); break;
                case "setLineJoin": canvasContext.setLineJoin(data[0]); break;
                case "setLineWidth": canvasContext.setLineWidth(data[0]); break;
                case "setMiterLimit": canvasContext.setMiterLimit(data[0]); break;
                case "rotate": canvasContext.rotate(data[0]); break;
                case "scale": canvasContext.scale(data[0], data[1]); break;
                case "translate": canvasContext.translate(data[0], data[1]); break;
                case "strokePath":
                    canvasContext.beginPath()
                    for (var dat of data) {
                        var dt = dat.data;
                        switch (dat.method) {
                            case "rect": canvasContext.strokeRect(dt[0], dt[1], dt[2], dt[3]); break;
                            case "moveTo": canvasContext.moveTo(dt[0], dt[1]); break;
                            case "lineTo": canvasContext.lineTo(dt[0], dt[1]); break;
                            case "closePath": canvasContext.closePath(); break;
                            case "arc": canvasContext.arc.apply(canvasContext, dt); break;
                            case "quadraticCurveTo": canvasContext.quadraticCurveTo.apply(canvasContext, dt); break;
                            case "bezierCurveTo": canvasContext.bezierCurveTo.apply(canvasContext, dt); break;

                            default:
                                console.log("[drawCanvas-strokePath]", dat.method);
                                break;
                        }
                    }
                    canvasContext.stroke()
                    break
                case "fillPath":
                    for (var dat of data) {
                        var dt = dat.data;
                        switch (dat.method) {
                            case "rect": canvasContext.fillRect(dt[0], dt[1], dt[2], dt[3]); break;
                            case "arc": canvasContext.arc.apply(canvasContext, dt); break;
                            default:
                                console.log("[drawCanvas-fillPath]", dat.method);
                                break;
                        }
                    }
                    canvasContext.fill()
                    break;
                case "clearRect": canvasContext.clearRect(data[0], data[1], data[2], data[3]); break;
                default:
                    console.log("[drawCanvas]", action.method);
                    break;
            }
        }
        canvasContext.draw();


    }
    static createContext() { return new CanvasContext(); }
    static createCanvasContext(object) { return swan.createCanvasContext(object); }
    static canvasToTempFilePath(object) { return swan.canvasToTempFilePath(object); }
    static canvasPutImageData(object) { return swan.canvasPutImageData(object) };
    static canvasGetImageData(object) { return swan.canvasGetImageData(object) };
    ////////////// Device //////////////////
    static onBeaconServiceChange(object) { return swan.onBeaconServiceChange(object); }
    static onBeaconUpdate(object) { return swan.onBeaconUpdate(object); }
    static getBeacons(object) { return swan.getBeacons(object); }
    static stopBeaconDiscovery(object) { return swan.stopBeaconDiscovery(object); }
    static startBeaconDiscovery(object) { return swan.startBeaconDiscovery(object); }
    static stopWifi(object) { return swan.stopWifi(object); }
    static startWifi(object) { return swan.startWifi(object); }
    static setWifiList(object) { return swan.setWifiList(object); }
    static onWifiConnected(object) { return swan.onWifiConnected(object); }
    static onGetWifiList(object) { return swan.onGetWifiList(object); }
    static getWifiList(object) { return swan.getWifiList(object); }
    static getConnectedWifi(object) { return swan.getConnectedWifi(object); }
    static connectWifi(object) { return swan.connectWifi(object); }
    //
    static onAccelerometerChange(callback) { return swan.onAccelerometerChange(callback); }
    static stopAccelerometer(object) { return swan.stopAccelerometer(object); }
    static startAccelerometer(object) { return swan.startAccelerometer(object); }
    static getBatteryInfoSync(object) { return swan.getBatteryInfoSync(object); }
    static _getBatteryInfo(result) { return swan._getBatteryInfo(object); }
    static getBatteryInfo(object) { return swan.getBatteryInfo(object); }
    //
    static getClipboardData(object) { return swan.getClipboardData(object); }
    static setClipboardData(object) { return swan.setClipboardData(object); }
    static onCompassChange(callback) { return swan.onCompassChange(callback); }
    static stopCompass(object) { return swan.stopCompass(object); }
    static startCompass(object) { return swan.startCompass(object); }
    static addPhoneContact(object) { return swan.addPhoneContact(object); }
    static onGyroscopeChange(callback) { return swan.onGyroscopeChange(object); }
    static stopGyroscope(object) { return swan.stopGyroscope(object); }
    static startGyroscope(object) { return swan.startGyroscope(object); }
    //
    static onDeviceMotionChange(object) { return swan.onDeviceMotionChange(object); }
    static stopDeviceMotionListening(object) { return swan.stopDeviceMotionListening(object); }
    static startDeviceMotionListening(object) { return swan.startDeviceMotionListening(object); }
    static startDeviceMotionListening(object) { return swan.startDeviceMotionListening(object); }
    //
    static getNetworkType = function (object) { return swan.getNetworkType(object); }
    static _network = function (res) { return swan._network(object); }
    static onNetworkStatusChange(object) { return swan.onNetworkStatusChange(object); }
    //
    static makePhoneCall = function (object) { return swan.makePhoneCall(object); }

    static scanCode = function (object) { return swan.scanCode(object); }
    //
    static vibrateLong(object) { return swan.vibrateLong(object); }
    static vibrateShort(object) { return swan.vibrateShort(object); }
    //
    static onMemoryWarning(object) { return swan.onMemoryWarning(object); }
    //
    static writeBLECharacteristicValue(object) { return swan.writeBLECharacteristicValue(object); }
    static readBLECharacteristicValue(object) { return swan.readBLECharacteristicValue(object); }
    static onBLEConnectionStateChange(object) { return swan.onBLEConnectionStateChange(object); }
    static onBLECharacteristicValueChange(object) { return swan.onBLECharacteristicValueChange(object); }
    static notifyBLECharacteristicValueChange(object) { return swan.notifyBLECharacteristicValueChange(object); }
    static getBLEDeviceServices(object) { return swan.getBLEDeviceServices(object); }
    static getBLEDeviceCharacteristics(object) { return swan.getBLEDeviceCharacteristics(object); }
    static createBLEConnection(object) { return swan.createBLEConnection(object); }
    static closeBLEConnection(object) { return swan.closeBLEConnection(object); }
    //
    static stopBluetoothDevicesDiscovery(object) {/* return swan.stopBluetoothDevicesDiscovery(object);*/ }
    static startBluetoothDevicesDiscovery(object) { return swan.startBluetoothDevicesDiscovery(object); }
    static openBluetoothAdapter(object) {/* return swan.openBluetoothAdapter(object); */ }
    static onBluetoothDeviceFound(object) { return swan.onBluetoothDeviceFound(object); }
    static onBluetoothAdapterStateChange(object) { return swan.onBluetoothAdapterStateChange(object); }
    static getConnectedBluetoothDevices(object) { return swan.getConnectedBluetoothDevices(object); }
    static getBluetoothDevices(object) { return swan.getBluetoothDevices(object); }
    static getBluetoothAdapterState(object) { return swan.getBluetoothAdapterState(object); }
    static closeBluetoothAdapter(object) { return swan.closeBluetoothAdapter(object); }
    //
    static stopHCE(object) { return swan.stopHCE(object); }
    static startHCE(object) { return swan.startHCE(object); }
    static sendHCEMessage(object) { return swan.sendHCEMessage(object); }
    static onHCEMessage(object) { return swan.onHCEMessage(object); }
    static getHCEState(object) { return swan.getHCEState(object); }
    //
    static setScreenBrightness(object) { return swan.setScreenBrightness(object); }
    static setKeepScreenOn(object) { return swan.setKeepScreenOn(object); }
    static onUserCaptureScreen(object) { return swan.onUserCaptureScreen(object); }

    static getScreenBrightness(object) { return swan.getScreenBrightness(object); }
    /////////////////// Ext //////////////
    static getExtConfigSync(object) { return swan.getExtConfigSync(object) }
    static getExtConfig(object) { return swan.getExtConfig(object) }
    //////////////////// File //////////
    static getFileSystemManager(object) { return swan.getFileSystemManager(object) }
    static getFileInfo(object) { return swan.getFileInfo(object) }
    static removeSavedFile(object) { return swan.removeSavedFile(object) }
    static getSavedFileInfo(object) { return swan.getSavedFileInfo(object) }
    static getSavedFileList(object) { return swan.getSavedFileList(object) }
    static openDocument(object) { return swan.openDocument(object) }
    static saveFile(object) { return swan.saveFile(object); }
    //////////// Location ///////////////
    static openLocation(object) { return swan.openLocation(object) }
    static getLocation(object) { return swan.getLocation(object) }
    static chooseLocation(object) { return swan.chooseLocation(object) }
    ////////// Media ////////////////////
    static createMapContext(object) { return swan.createMapContext(object) }
    static compressImage(object) { return swan.compressImage(object) }
    static saveImageToPhotosAlbum(object) { return swan.saveImageToPhotosAlbum(object) }
    static getImageInfo(object) { return swan.getImageInfo(object) }
    static previewImage(object) { return swan.previewImage(object) }
    static chooseImage(object) { return swan.chooseImage(object); }
    static chooseMessageFile(object) { return console.log("暂不支持！") }//swan.chooseMessageFile(object)
    ////////////////////////////////////////////////////////////////

    static saveVideoToPhotosAlbum(object) { return swan.saveVideoToPhotosAlbum(object) }
    static chooseVideo(object) { return swan.chooseVideo(object) }
    static chooseMedia(object) {return console.log("暂不支持！")}
    static createVideoContext(object) { return swan.createVideoContext(object) }
    static stopVoice(object) { 
    object.success = function(){
    console.log("VVV    ")
    }
    
    return swan.stopVoice(object) }
    static pauseVoice(object) { return swan.pauseVoice(object) }
    static playVoice(object) { return swan.playVoice(object) }
    static setInnerAudioOption(object) { 
        var obeyMuteSwitch = true;
        return swan.setInnerAudioOption(object) }
    static getAvailableAudioSources(object) { return swan.getAvailableAudioSources(object) }
    static createInnerAudioContext(object) { return swan.createInnerAudioContext(object) }
    static createAudioContext(object) { return swan.createAudioContext(object) }
    static onBackgroundAudioStop(object) { return swan.onBackgroundAudioStop(object) }
    static onBackgroundAudioPause(object) { return swan.onBackgroundAudioPause(object) }
    static onBackgroundAudioPlay(object) { return swan.onBackgroundAudioPlay(object) }
    static stopBackgroundAudio(object) { return swan.stopBackgroundAudio(object) }
    static seekBackgroundAudio(object) { return swan.seekBackgroundAudio(object) }
    static pauseBackgroundAudio(object) { return swan.pauseBackgroundAudio(object) }
    static playBackgroundAudio(object) { return swan.playBackgroundAudio(object) }
    static getBackgroundAudioPlayerState(object) { return swan.getBackgroundAudioPlayerState(object) }
    static getBackgroundAudioManager(object) { return swan.getBackgroundAudioManager(object) }
    static createLivePusherContext(object) { return swan.createLivePusherContext(object) }
    static startRecord(object) {
        var recorderManager = swan.getRecorderManager(object);
        recorderManager.onStart(() => {
            var res = "stopRecord才会返回tempFilePath!!";
            if (object.success) {
                object.success(res);
            }
            if (object.complete) {
                object.complete(res);
            }
        });
        var result = recorderManager.start();
        return result;
    }
    static stopRecord(object) {
        var recorderManager = swan.getRecorderManager(object);
        recorderManager.onStop((res) => {
            if (object.success) {
                object.success(res);
            }
            if (object.complete) {
                object.complete(res);
            }
        });
        var result = recorderManager.stop();
        return result;
    }
    static getRecorderManager(object) { return swan.getRecorderManager(object) }
    //////////////// Network ///////////////
    static request(object) { return swan.request(object); }
    static downloadFile(object) { return swan.downloadFile(object) }
    static uploadFile(object) { return swan.uploadFile(object) }
    //
    static connectSocket(object) { return swan.connectSocket(object) }
    static onSocketError(object) { return swan.onSocketError(object) }
    static onSocketMessage(object) { return swan.onSocketMessage(object) }
    static onSocketClose(object) { return swan.onSocketClose(object) }
    static onSocketOpen(object) { return swan.connectSocket(object) }
    static sendSocketMessage(object) { return swan.sendSocketMessage(object) }
    static closeSocket(object) { return swan.closeSocket(object) }
    static offLocalServiceResolveFail(object) { return swan.offLocalServiceResolveFail(object) }
    static onLocalServiceResolveFail(object) { return swan.onLocalServiceResolveFail(object) }
    static offLocalServiceDiscoveryStop(object) { return swan.offLocalServiceDiscoveryStop(object) }
    static onLocalServiceDiscoveryStop(object) { return swan.onLocalServiceDiscoveryStop(object) }
    static offLocalServiceLost(object) { return swan.offLocalServiceLost(object) }
    static onLocalServiceLost(object) { return swan.onLocalServiceLost(object) }
    static offLocalServiceFound(object) { return swan.offLocalServiceFound(object) }
    static onLocalServiceFound(object) { return swan.onLocalServiceFound(object) }
    static stopLocalServiceDiscovery(object) { return swan.stopLocalServiceDiscovery(object) }
    static startLocalServiceDiscovery(object) { return swan.startLocalServiceDiscovery(object) }
    //
    static stopLocalServiceDiscovery(object) { return swan.stopLocalServiceDiscovery(object); }
    static startLocalServiceDiscovery(object) { return swan.startLocalServiceDiscovery(object); }
    static onLocalServiceResolveFail(callback) { return swan.onLocalServiceResolveFail(callback); }
    static onLocalServiceLost(callback) { return swan.onLocalServiceLost(callback); }
    static onLocalServiceFound(callback) { return swan.onLocalServiceFound(callback); }
    static onLocalServiceDiscoveryStop(callback) { return swan.onLocalServiceDiscoveryStop(callback); }
    static offLocalServiceResolveFail(callback) { return swan.offLocalServiceResolveFail(callback); }
    static offLocalServiceLost(callback) { return swan.offLocalServiceLost(callback); }
    static offLocalServiceFound(callback) { return swan.offLocalServiceFound(callback); }
    static offLocalServiceDiscoveryStop(callback) { return swan.offLocalServiceDiscoveryStop(callback); }
    ///////// Open Interface //////////
    static checkSession(object) { return swan.checkSession(object); }

    static login = function (object) {
        var that = this;
        if (!object) {
            return swan.login(object);
        }
        var object2 = {
            //   scopes: "auth_user"
        };
        object2.success = function (res) {
            swan._sessoion = new Date().getTime();
            getApp().onekitwx.jscode = res.authCode;
            var result = { code: res.authCode };
            if (object.success) {
                object.success(result);
            }
            if (object.complete) {
                object.complete(complete);
            }
        }
        object2.fail = function (res) {
            if (object.fail) {
                object.fail(res);
            }
            if (object.complete) {
                object.complete(res);
            }
        }
        return swan.login(object2);
    };

    static getUserInfo() {
        return swan.getUserInfo({
            success(res) {
                swan.request({
                    url: getApp().onekitwx.server + "userinfo",// 仅为示例，并非真实的接口地址
                    method: 'POST',
                    responseType: 'text',
                    data: {
                        jscode: getApp().onekitwx.jscode,
                        data: res.toString()
                    },
                    success: res => {
                        console.log(res.data);
                    },
                    fail: err => {
                        console.log('错误码：' + err.errCode);
                        console.log('错误信息：' + err.errMsg);
                    }
                });

            }

        });
    }
    static getOpenData = function (object) { return swan.getOpenData(object); }
    static getPhoneNumber = function (object) { return swan.getPhoneNumber(object); }
    static navigateToMiniProgram(object) { return swan.navigateToMiniProgram(object) }
    static navigateBackMiniProgram(object) { return swan.navigateBackMiniProgram(object) }
    static getAccountInfoSync(object) { return swan.getAccountInfoSync(object) }

    static reportMonitor(object) { return swan.reportMonitor(object) }
    static reportAnalytics(object, eventName) { return swan.reportAnalytics(object, eventName) }
    static requestPayment(object) { return swan.requestPayment(object); }
    static authorize(object) { return swan.authorize(object) }
    static openSetting(object) { return swan.openSetting(object) }
    static getSetting(object) { return swan.getSetting(object) }
    static chooseAddress(object) { return swan.chooseAddress(object) }
    static openCard(object) { return swan.openCard(object); }
    static addCard = function (object) { return swan.addCard(object); }
    static chooseInvoiceTitle(object) { return swan.chooseInvoiceTitle(object) }
    static chooseInvoice(object) { return swan.chooseInvoice(object) }
    static startSoterAuthentication(object) { return swan.startSoterAuthentication(object) }
    static checkIsSupportSoterAuthentication(object) { return swan.checkIsSupportSoterAuthentication(object) }
    static checkIsSoterEnrolledInDevice(object) { return swan.checkIsSoterEnrolledInDevice(object) }
    static getWeRunData(object) { return swan.getWeRunData(object) }
    static reportMonitor(name, value) {
        var js_code = getApp().onekitwx.jscode;
        swan.httpRequest({
            url: "http://192.168.0.106:8080/onekitwx_adapter/reportMonitor",
            header: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            method: "POST",
            data: {
                js_code: js_code,
                name: name,
                number: value
            },
            success: (res) => {
                console.log("success")
                console.log(res.data);
            },
            fail: function (res) {
                console.log(res);
            },
            complete: function (res) {
                console.log(res)
            }
        });
    };
    ////////// Router //////////////
    static navigateBack(object) { return swan.navigateBack(object); }
    static switchTab(object) { return swan.switchTab(object); }
    static navigateTo(object) { return swan.navigateTo(object); }
    static reLaunch(object) { return swan.reLaunch(object); }
    static redirectTo(object) { return swan.redirectTo(object); }
    ///////////// Share /////////////
    static updateShareMenu(object) { return swan.updateShareMenu(object) }
    static showShareMenu(object) { return swan.showShareMenu(object); }
    static hideShareMenu(object) { return swan.hideShareMenu(object) }
    static getShareInfo(object) { return swan.getShareInfo(object) }
    /////////////// Storage //////////////
    static getStorageInfoSync(object) { return swan.getStorageInfoSync(object) }
    static getStorageInfo(object) { return swan.getStorageInfo(object) }
    static clearStorageSync(object) { return swan.clearStorageSync(object) }
    static clearStorage(object) { return swan.clearStorage(object) }
    static removeStorageSync(object) { return swan.removeStorageSync(object) }
    static removeStorage(object) { return swan.removeStorage(object) }
    static setStorageSync(key, value) { return swan.setStorageSync(key, value) }
    static setStorage(object) { return swan.setStorage(object) }
    static getStorageSync(key) { return swan.getStorageSync(key); }
    static getStorage(object) { return swan.getStorage(object) }
    ////////////// UI ////////////////
    static showActionSheet(object) { return swan.showActionSheet(object); }
    // static redirectTo(object) { return swan.redirectTo(object) }
    // static redirectTo(object) { return swan.redirectTo(object) }
    static hideLoading(object) { return swan.hideLoading(object) }
    static showLoading(object) { return swan.showLoading(object); }
    static hideToast(object) { return swan.hideToast(object); }
    static showToast(object) { return swan.showToast(object); }
    static showModal(object) { return swan.showModal(object); }
    static setNavigationBarColor(object) { return swan.setNavigationBarColor(object) }
    static hideNavigationBarLoading(object) { return swan.hideNavigationBarLoading(object) }
    static showNavigationBarLoading(object) { return swan.showNavigationBarLoading(object) }
    static setNavigationBarTitle = function (object) { return swan.setNavigationBarTitle(object); };
    static setBackgroundTextStyle(object) { return swan.setBackgroundTextStyle(object) }

    static setBackgroundColor(object) { return swan.setBackgroundColor(object) }
    static setTabBarItem(object) { return swan.setTabBarItem(object) }
    static setTabBarStyle(object) { return swan.setTabBarStyle(object) }
    static hideTabBar(object) { return swan.hideTabBar(object) }
    static showTabBar(object) { return swan.showTabBar(object) }
    static hideTabBarRedDot(object) { return swan.hideTabBarRedDot(object) }
    static showTabBarRedDot(object) { return swan.showTabBarRedDot(object) }
    static removeTabBarBadge(object) { return swan.removeTabBarBadge(object) }
    static setTabBarBadge(object) { return swan.setTabBarBadge(object) }

    static loadFontFace(object) { return console.log("注释了") }// swan.loadFontFace(object) 

    static stopPullDownRefresh(object) { return swan.stopPullDownRefresh(object); }
    static startPullDownRefresh(object) { return swan.startPullDownRefresh(object); }
    static pageScrollTo(object) { return swan.pageScrollTo(object) }
    static setTopBarText(object) { return swan.setTopBarText(object) }
    static nextTick(object) { return swan.nextTick(object) }
    static getMenuButtonBoundingClientRect(object) { return swan.getMenuButtonBoundingClientRect(object) }
    static offWindowResize(object) { return swan.offWindowResize(object) }
    static onWindowResize(object) { return swan.onWindowResize(object) }
    ////////////// Worker ///////////////
    static createWorker(path) { return new WORKER(path); }
    ////////////// WXML ///////////////
    static createSelectorQuery(object) { return swan.createSelectorQuery(object) }
    static createIntersectionObserver(object) { return swan.createIntersectionObserver(object) }
    /////////////////////////////////////
    static hideKeyboard(object) { return swan.hideKeyboard(object) }
    ///////////// cloud ////////////////
    static get cloud() {
        return new wx_cloud();
    }
}