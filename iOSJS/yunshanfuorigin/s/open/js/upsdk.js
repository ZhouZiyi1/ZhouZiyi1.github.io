!
function() {
    function n() {}
    function r(e) {
        return "[object Function]" === Object.prototype.toString.call(e)
    }
    function i(e) {
        return e instanceof Array
    }
    function l(e) {
        return n = e,
        "[object Object]" === Object.prototype.toString.call(n) && !(null != (t = e) && t == t.window) && e.__proto__ == Object.prototype;
        var t, n
    }
    function c(e, t, n) {
        return [].indexOf.call(t, e, n)
    }
    function s(e, t) {
        var n, o;
        if ("number" == typeof e.length) {
            for (n = 0; n < e.length; n++) if (!1 === t.call(e[n], n, e[n])) return e
        } else for (o in e) if (!1 === t.call(e[o], o, e[o])) return e;
        return e
    }
    function e(t) {
        var n, e = [].slice.call(arguments, 1);
        return "boolean" == typeof t && (n = t, t = e.shift()),
        e.forEach(function(e) { !
            function e(t, n, o) {
                for (var a in n) o && (l(n[a]) || i(n[a])) ? (l(n[a]) && !l(t[a]) && (t[a] = {}), i(n[a]) && !i(t[a]) && (t[a] = []), e(t[a], n[a], o)) : void 0 !== n[a] && (t[a] = n[a])
            } (t, e, n)
        }),
        t
    }
    var o, u, g, a, p, d, f = navigator.userAgent.toLowerCase(),
    h = new RegExp(/(com.unionpay.chsp)/).test(f) || new RegExp(/(com.unionpay.mobilepay)/).test(f),
    P = new RegExp(/iphone|ipad|ipod/).test(f),
    t = [],
    v = !1,
    C = !1,
    U = !1,
    S = [],
    B = {},
    m = !1,
    L = /\(clientversion\s(\d+)\)/g.exec(f),
    b = i(L) && 2 <= L.length && L[1],
    A = /\(version\s(\d+)\)/g.exec(f),
    E = i(A) && 2 <= A.length && A[1],
    y = /\(com.unionpay.upcardcollector\)/.test(f),
    N = {
        ESDK_BAD_PARAMS: {
            errcode: "c00",
            errmsg: "参数错误"
        },
        ESDK_CONFIG_FAILED: {
            errcode: "c01",
            errmsg: "签名未通过, 不能访问插件"
        },
        ESDK_PLUGIN_ILLEGAL_ACCESS: {
            errcode: "c02",
            errmsg: "ILLEGAL_ACCESS_EXCEPTION: 无权限访问此插件！"
        },
        ESDK_PLUGIN_INVALID_ACTION: {
            errcode: "c03",
            errmsg: "INVALID_ACTION_EXCEPTION: 插件里面没有此方法！"
        },
        ESDK_PLUGIN_CLASS_NOT_FOUND: {
            errcode: "c04",
            errmsg: "CLASS_NOT_FOUND_EXCEPTION: 此插件没有实现！"
        },
        ESDK_NEED_CONFIG_DONE: {
            errcode: "c05",
            errmsg: "config执行成功以后才能调用插件方法"
        },
        ESDK_NOT_IN_WALLET: {
            errcode: "c101",
            errmsg: "upsdk.js必须被云闪付加载"
        },
        ESDK_NEED_NEW_VERSION: {
            errcode: "c102",
            errmsg: "您手机上云闪付版本太低,请安装新版本!"
        }
    };
    window.upsdk = window.upsdk || {},
    window.upsdk.isInsideWallet = h,
    window.upsdk.checkSdkSupport = !!E && 422 <= E;
    window.upsdk = window.upsdk || {},
    s(["pay", "addBankCard", "setNavigationBarTitle", "setNavigationBarRightButton", "closeWebApp", "showFlashInfo", "scanQRCode", "chooseImage", "getLocationCity", "getLocationGps", "verifyPayPwd", "showSharePopup", "chooseFileFromAlbum", "readAlbumData", "startAudioRecording", "stopAudioRecording", "readAudioRecordingData", "startVideoRecording", "readVideoRecordingData", "readFaceVideoData", "readFaceImageData", "noteInfoChange", "openRNPage", "navi", "setScreenBrightness", "getScreenBrightness", "changeScreenShot", "monitorScreenShot", "removeScreenShot", "addCommonApp", "logEvent", "appletLogEvent", "openBluetoothAdapter", "closeBluetoothAdapter", "getBluetoothAdapterState", "startBluetoothDevicesDiscovery", "stopBluetoothDevicesDiscovery", "getBluetoothDevices", "getConnectedBluetoothDevices", "connectBLEDevice", "disconnectBLEDevice", "writeBLECharacteristicValue", "readBLECharacteristicValue", "notifyBLECharacteristicValueChange", "getBLEDeviceServices", "getBLEDeviceCharacteristics", "registerBluetoothDeviceFound", "cancelBluetoothDeviceFound", "registerBLEConnectionStateChange", "cancelBLEConnectionStateChange", "registerBLECharacteristicValueChange", "cancelBLECharacteristicValueChange", "registerBluetoothAdapterStateChange", "cancelBluetoothAdapterStateChange", "openBluetoothSetting", "makeBluetoothPair", "isBluetoothDevicePaired", "setBLEMTU", "getBLEMTU", "onBLEMTUChange", "offBLEMTUChange", "getBLEDeviceRSSI", "onMtuChanged", "getHCEState", "startHCE", "stopHCE", "sendHCEMessage", "onHCEMessage", "openNFCSetting", "scanQRCodeNew", "qrCodePay", "setTitleStyle", "prepareApplet", "openApplet", "createWebView", "saveData", "queryData", "deleteData", "getAllKeys", "deleteAllKeys", "addBankCardWithSn", "showShareMorePanel", "shareSinglePlugin", "addConsole", "recentlyUsedAppletList", "deleteRecentlyUsedApplet", "collectApplet", "cancelCollectApplet", "getAppletCollectionList", "getScreenParams", "qrPay", "uPlanQrPay", "collectCurrentApplet", "setSharedData", "getSharedData", "navigateTo", "navigateBack", "redirectTo", "reLaunch", "switchTab", "registerLifecycle", "getUserLogoutDate", "appletSharePopup", "hideShareMenu", "setAppletShareInfo", "setAppletShareBaseInfo", "bioDetect", "getBluetoothStatus", "registerBLEPeripheralConnectionStateChangedNotification", "cancelBLEPeripheralConnectionStateChangedNotification", "createBLEPeripheralServer", "closeBLEPeripheralServer", "addService", "removeService", "startAdvertising", "stopAdvertising", "writeCharacteristicValue", "registerCharacteristicReadNotification", "cancelCharacteristicReadNotification", "registerCharacteristicWriteNotification", "cancelCharacteristicWriteNotification", "registerCharacteristicSubscribedNotification", "cancelCharacteristicSubscribedNotification", "registerCharacteristicUnsubscribedNotification", "cancelCharacteristicUnsubscribedNotification", "uniqueIdentifier", "getNFCStatus", "configApplePay", "openBluetooth", "vibrate", "idCardRecognition", "getVersionInfo", "openCodeInPage", "getSystemInfo", "getMenuButtonBundingClientRect", "followSelfApplet", "cancelFollowSelfApplet", "getSelfAppletFollowStatus", "collectSelfAppletToHome", "cancelCollectSelfAppletToHome", "reenterSelfApplet", "goSelfAppletAppDetail", "setMenuBarStyle", "autoGoBack", "addSelfAppletToLauncher", "openCityPage", "readHeadImage", "getUserStatus", "login", "getUserLocation", "getFontSizeLevel", "getBankIsSupportShare", "openAppInfoByIdExt", "openBankShareView", "openPageVerifyFree", "checkIsShaking", "stopCheckIsShaking", "startAccelerometer", "stopAccelerometer", "onAccelerometerChange", "offAccelerometerChange", "startGyroscope", "stopGyroscope", "onGyroscopeChange", "offAccelerometerChange", "startCompass", "stopCompass", "onCompassChange", "offCompassChange", "getZheLiBanPublicKey", "configZheLiBanAuthorizeInfo", "openZheLiBanPage", "getContactsData", "downloadApp", "saveImage", "openVoiceBroadcast", "getVoiceBroadcastState", "getNotificationState", "getBatteryInfo", "getMuteState", "getNFCAdapter", "openAppSetting", "openLocation", "getCurrentLocationCity", "getLocation", "chooseLocation", "getBeacons", "startBeaconDiscovery", "stopBeaconDiscovery", "onBeaconUpdate", "offBeaconUpdate", "onBeaconServiceChange", "offBeaconServiceChange", "checkStepPermissions", "uploadStepData", "sendRequest", "openWXApplet"],
    function(e, t) {
        window.upsdk[t] = n
    });
    var D = function() {
        var e = document.currentScript && document.currentScript.src || "",
        t = "";
        if (e) {
            var n = e.indexOf("/js/upsdk.js"); - 1 < n && (t = e.substring(0, n))
        } else for (var o = document.getElementsByTagName("script"), a = 0; a < o.length;) {
            var i = o[a],
            c = i.src.indexOf("/js/upsdk.js");
            if ( - 1 < c) {
                t = i.src.substring(0, c);
                break
            }
            a++
        }
        return /\/app$/.test(t) && (t = t.replace(/\/app$/, "/")),
        t
    } ();
    if (h) {
        var W, w = document.createElement("script"),
        I = P ? "ios": "android",
        k = (/\(updebug\s(\d+)\)/g.exec(f)[1], /\(cordova\s([\d\.]+)\)/g.exec(f)),
        T = k && 1 < k.length && k[1],
        F = k && T,
        M = /\(securitywebcache\s([\d\.]+)\)/g.exec(f),
        _ = M && 1 < M.length && M[1],
        O = M && _;
        if (d = D + "/common/upconsole.min.js", F) W = D + "/common/cordova/" + I + "." + T + "/cordova.js";
        else {
            if (!O) return;
            W = D + "/common/jsbridge/" + I + "." + _ + "/WebViewJavascriptBridge.js"
        } (!window.cordova && F || O) && (w.setAttribute("type", "text/javascript"), w.setAttribute("src", W), document.getElementsByTagName("head")[0].appendChild(w)),
        F ? document.addEventListener("deviceready", Y) : O && (w.onload = Y)
    } else v = !0,
    e(window.upsdk, {
        addBankCardWithSn: function(e) {
            if ((e = e || {}).Sn = e.Sn || e.sn || e.SN, y) window.location.href = D.replace("/s/open", "/upcardcollector/collect?bankSn=" + e.Sn);
            else {
                var t = D + "/outBindCard/html/bindCard.html?bankSn=" + e.Sn;
                e.upEnv && (t += "&upEnv=" + e.upEnv),
                window.location.href = t
            }
        },
        closeWebApp: function() {
            var e = D + "/html/closeWebview.html";
            window.location.href = e
        }
    });
    window.upsdk.jsApiList = [];
    var R = null,
    V = null,
    H = null,
    x = null,
    G = null,
    j = null,
    K = null,
    J = null,
    q = null,
    X = null,
    Z = null;
    callbackForonNfcTagDiscovered = null,
    callbackForonNdefResultMsg = null,
    callbackForlistenonBLEMTUChange = null,
    callbackForlistenBeaconUpdate = null,
    callbackForlistenBeaconServiceChange = null;
    var Q = {},
    z = {};
    function Y() {
        function c(e, t, n, o, a) {
            C ? C ? ie(e,
            function(e) {
                ee(t, e)
            },
            n, o, a) : U ? ee(t, N.ESDK_CONFIG_FAILED) : window.upsdk.ready(function() {
                c(e, t, n, o, a)
            }) : ee(t, N.ESDK_NEED_CONFIG_DONE)
        }
        function a(n, e, t, o, a) {
            var i = {};
            l(n = n || {}) && s(n,
            function(e, t) {
                r(t) || (i[e] = t)
            }),
            c(function(e) {
                var t = n.success;
                r(t) && (r(o) && (e = o(e)), t(e))
            },
            function(e) {
                var t = n.fail || n.cancel;
                t && (r(a) && (e = a(e)), t(e))
            },
            e, t, [i])
        }
        v = !0,
        void 0 !== o && (window.upsdk.config(o), o = void 0),
        void 0 !== u && (window.upsdk.appletConfig(u), u = void 0),
        void 0 !== g && (window.upsdk.appletAuth(g), g = void 0),
        e(window.upsdk, {
            pay: function(e) {
                var t = ne("pay", e, ["tn"]);
                if (t) ee(e.fail || e.cancel, t);
                else {
                    delete e.merchantId;
                    var n = /\(updebug\s(\d+)\)/g.exec(f);
                    i(n) && 2 <= n.length && "2" === n[1] ? e.mode = "02": e.mode = "00",
                    a(e, "UPWebPay", "pay", null,
                    function(e) {
                        var t = "";
                        if (e && "string" == typeof e) {
                            var n = JSON.parse(e);
                            n && "object" == typeof n && (e = n)
                        }
                        return "object" == typeof e ? t = e.desc || e.msg || e.errmsg: "string" == typeof e && (t = e),
                        t || (t = "支付插件调用失败"),
                        {
                            msg: t
                        }
                    })
                }
            },
            qrPay: function(e) {
                a(e, "UPWebPay", "qrPay")
            },
            uPlanQrPay: function(e) {
                a(e, "UPWebPay", "qrCodePay")
            },
            addBankCard: function(e) { (e = e || {}).scene = e.scene || "10007",
                a(e, "UPWebBankCard", "addBankCard")
            },
            addBankCardWithSn: function(e) { (e = e || {}).Sn = e.Sn || e.sn || e.SN,
                a(e, "UPWebBankCard", "addBankCardWithSn")
            },
            setNavigationBarTitle: function(e) {
                c(null, null, "UPWebBars", "setNavigationBarTitle", ["string" == typeof e ? e: e && e.title])
            },
            setNavigationBarRightButton: function(e) {
                a(e, "UPWebBars", "setNavigationBarRightButton");
                var t = e && e.handler;
                r(t) && (document.removeEventListener("rightbtnclick", R), R = t, document.addEventListener("rightbtnclick", R))
            },
            setTitleStyle: function(e) {
                a(e, "UPWebBars", "setTitleStyle")
            },
            getMenuButtonBundingClientRect: function(e) {
                a(e, "UPWebBars", "getMenuButtonBundingClientRect")
            },
            setMenuBarStyle: function(e) {
                a(e, "UPWebBars", "setMenuBarStyle")
            },
            closeWebApp: function(e) {
                a(e, "UPWebClosePage", "closeWebApp")
            },
            showFlashInfo: function(e) {
                var t; (t = "string" == typeof e ? e: e && e.msg) && c(null, null, "UPWebUI", "showFlashInfo", [t])
            },
            scanQRCode: function(e) {
                a(e, "UPWebUI", "scanQRCode",
                function(e) {
                    return l(e) && e.value && (e = e.value),
                    e
                })
            },
            chooseImage: function(e) {
                e.maxWidth && e.maxHeight || (e.maxWidth = 500, e.maxHeight = 1e3),
                e.sourceType = e.sourceType || "3",
                a(e, "UPWebUI", "chooseImage",
                function(e) {
                    "string" == typeof e && (e = JSON.parse(e));
                    var t = e.url,
                    n = "";
                    if (t) {
                        var o = t.lastIndexOf(".");
                        n = t.substr(o + 1).trim()
                    } else n = "jpg";
                    return {
                        base64: e.base64,
                        type: n
                    }
                })
            },
            saveImage: function(e) {
                a(e, "UPWebUI", "saveImage",
                function(e) {
                    return e
                })
            },
            scanQRCodeNew: function(e) {
                a(e, "UPWebUI", "scanQRCodeNew")
            },
            qrCodePay: function(e) {
                a(e, "UPWebUI", "qrCodePay")
            },
            openCodeInPage: function(e) {
                a(e, "UPWebUI", "openCodeInPage")
            },
            autoGoBack: function(e) {
                a(e, "UPWebUI", "autoGoBack")
            },
            readHeadImage: function(e) {
                a(e, "UPWebUserInfo", "readHeadImage")
            },
            getUserStatus: function(e) {
                a(e, "UPWebUserDetail", "getUserStatus")
            },
            login: function(e) {
                a(e, "UPWebUserLogin", "login")
            },
            showSharePopup: function(n) {
                function o(e) {
                    var t = {
                        title: n.title,
                        content: n.desc,
                        desc: n.desc,
                        picUrl: n.picUrl,
                        imgUrl: n.picUrl,
                        shareUrl: n.shareUrl + (n.shareUrl.indexOf("?") < 0 ? "?channel=" + e: "&channel=" + e),
                        channel: e
                    };
                    switch (e) {
                    case 0:
                        P && (t.content = n.content + " " + n.shareUrl);
                        break;
                    case 1:
                        t.content = n.content + " " + n.shareUrl;
                        break;
                    case 3:
                    case 4:
                    case 5:
                    case 6:
                        break;
                    case 7:
                        P || (t.shareUrl = n.title + " " + n.shareUrl)
                    }
                    return t
                }
                n.title || (n.title = ""),
                n.desc || (n.desc = ""),
                n.content = n.desc,
                n.picUrl || ( - 1 < D.indexOf("cup.com.cn") ? n.picUrl = "https://base.cup.com.cn/s/wl/web/402/images/common/logo.png": n.picUrl = "https://base.95516.com/s/wl/web/402/images/common/logo.png"),
                n.imgUrl = n.picUrl,
                n.shareUrl || (n.shareUrl = location.href),
                window.unionpayWalletShareContent_iOS = function(e) {
                    var t = o(e);
                    return "function" == typeof shareCallback && (t = shareCallback(e, t)),
                    JSON.stringify(t)
                },
                window.unionpayWalletShareContent_Android = function(e) {
                    var t = o(e);
                    "function" == typeof shareCallback && (t = shareCallback(e, t)),
                    share_utils && "function" == typeof share_utils.setCommonTemplate && share_utils.setCommonTemplate(JSON.stringify(t))
                },
                ie(null, null, "UPWebBars", "prefetchImage", [n]),
                ie(null, null, "UPWalletPlugin", "showSharePopup", [n])
            },
            getLocationCity: function(e) { (e = e || {}).type = "0",
                a(e, "UPWalletPlugin", "fetchNativeData",
                function(e) {
                    return "string" == typeof e && (e = JSON.parse(e)),
                    e.cityCd
                })
            },
            getLocationGps: function(e) { (e = e || {}).type = "1",
                a(e, "UPWalletPlugin", "fetchNativeData")
            },
            openLocation: function(e) { (e = e || {}).scale = e.scale || "15",
                e.data = [{
                    amaplongitude: e.longitude,
                    amaplatitude: e.latitude,
                    mchntNm: e.name,
                    mchntAddr: e.address
                }],
                a(e, "UPWalletPlugin", "lookMap")
            },
            getCurrentLocationCity: function(e) {
                a(e, "UPMapPlugin", "getCurrentLocationCity")
            },
            getLocation: function(e) { (e = e || {}).cacheTimeout = e.cacheTimeout || "30",
                e.type = e.type || "0",
                a(e, "UPMapPlugin", "getLocation")
            },
            chooseLocation: function(e) {
                a(e, "UPMapPlugin", "getSelectLocation",
                function(e) {
                    var t = {
                        name: e.addr,
                        address: e.snippet,
                        latitude: e.merLat,
                        longitude: e.merLng,
                        provinceName: e.provName
                    };
                    return e.cityName && (t.cityName = e.cityName),
                    t
                })
            },
            verifyPayPwd: function(e) {
                a(e, "UPWebAccount", "verifyPayPwd")
            },
            getUserLogoutDate: function(e) {
                a(e, "UPWebAccount", "getUserLogoutDate")
            },
            chooseFileFromAlbum: function(e) {
                a(e, "UPWebNativeInfo", "chooseFileFromAlbum")
            },
            readAlbumData: function(e) {
                a(e, "UPWebNativeInfo", "readAlbumData")
            },
            startAudioRecording: function(e) {
                a(e, "UPWebNativeInfo", "startAudioRecording")
            },
            stopAudioRecording: function(e) {
                a(e, "UPWebNativeInfo", "stopAudioRecording")
            },
            readAudioRecordingData: function(e) {
                a(e, "UPWebNativeInfo", "readAudioRecordingData")
            },
            startVideoRecording: function(e) {
                a(e, "UPWebNativeInfo", "startVideoRecording")
            },
            readVideoRecordingData: function(e) {
                a(e, "UPWebNativeInfo", "readVideoRecordingData")
            },
            readFaceVideoData: function(e) {
                a(e, "UPWebNativeInfo", "readFaceVideoData")
            },
            readFaceImageData: function(e) {
                a(e, "UPWebNativeInfo", "readFaceImageData")
            },
            uniqueIdentifier: function(e) {
                a(e, "UPWebNativeInfo", "uniqueIdentifier")
            },
            getSystemInfo: function(e) {
                a(e, "UPWebNativeInfo", "getSystemInfo")
            },
            getVersionInfo: function(e) {
                a(e, "UPWebNativeInfo", "getVersionInfo")
            },
            openCityPage: function(e) {
                a(e, "UPWebNativeInfo", "openCityPage")
            },
            getUserLocation: function(e) {
                a(e, "UPWebNativeInfo", "getUserLocation")
            },
            getFontSizeLevel: function(e) {
                a(e, "UPWebNativeInfo", "getFontSizeLevel")
            },
            getBankIsSupportShare: function(e) {
                var t = e || {},
                n = t.fail || t.cancel,
                o = t.success;
                b < (P ? 360 : 460) ? ee(n, N.ESDK_PLUGIN_INVALID_ACTION) : (e.success = function(e) {
                    void 0 === e.isSupportShare && (e.isSupportShare = "0"),
                    r(o) && o(e)
                },
                a(e, "UPWebNativeInfo", "getOrgInfo",
                function(e) {
                    return "string" == typeof e && (e = JSON.parse(e)),
                    {
                        isSupportShare: e.orgInfo && e.orgInfo.isSupportShare
                    }
                }))
            },
            noteInfoChange: function(e) {
                a(e, "UPNotesInfoPlugin", "noteInfoChange")
            },
            openRNPage: function(e) {
                a(e, "UPWebNewPage", "openRNPage")
            },
            prepareApplet: function(e) {
                a(e, "UPWebNewPage", "prepareApplet")
            },
            openApplet: function(e) {
                a(e, "UPWebNewPage", "openApplet")
            },
            createWebView: function(e) {
                c(null, null, "UPWebNewPage", "createWebPage", [JSON.stringify({
                    title: e.title,
                    url: e.url,
                    loading: "yes",
                    toolbar: "no",
                    isFinish: e.isFinish || "0"
                })])
            },
            openAppInfoByIdExt: function(e) {
                a(e, "UPWebNewPage", "openAppInfoByIdExt")
            },
            openBankShareView: function(e) {
                a(e, "UPWebNewPage", "openBankShareView")
            },
            openPageVerifyFree: function(e) {
                a(e, "UPWebSdk", "openAppInfo")
            },
            navi: function(e) {
                a(e, "UPCarCodePlugin", "navi")
            },
            setScreenBrightness: function(e) {
                a(e, "UPCarCodePlugin", "setScreenBrightness")
            },
            getScreenBrightness: function(e) {
                a(e, "UPCarCodePlugin", "getScreenBrightness")
            },
            changeScreenShot: function(e) {
                a(e, "UPWebUI", "changeScreenShot")
            },
            monitorScreenShot: function(e) {
                a(e, "UPCarCodePlugin", "monitorScreenShot");
                var t = e && e.success;
                r(t) && (document.removeEventListener("screenShotAction", V), V = t, document.addEventListener("screenShotAction", V))
            },
            removeScreenShot: function(e) {
                a(e, "UPCarCodePlugin", "removeScreenShot"),
                document.removeEventListener("screenShotAction", V)
            },
            addCommonApp: function(e) {
                a(e, "UPAddCommonAppPlugin", "addCommonApp")
            },
            logEvent: function(e) {
                a(e, "UPWebAnalysis", "logEvent")
            },
            appletLogEvent: function(e) {
                a(e, "UPWebAnalysis", "appletLogEvent")
            },
            openBluetoothAdapter: function(e) {
                a(e, "UPWPluginBluetooth", "openBluetoothAdapter")
            },
            closeBluetoothAdapter: function(e) {
                a(e, "UPWPluginBluetooth", "closeBluetoothAdapter")
            },
            getBluetoothAdapterState: function(e) {
                a(e, "UPWPluginBluetooth", "getBluetoothAdapterState")
            },
            startBluetoothDevicesDiscovery: function(e) {
                a(e, "UPWPluginBluetooth", "startBluetoothDevicesDiscovery")
            },
            stopBluetoothDevicesDiscovery: function(e) {
                a(e, "UPWPluginBluetooth", "stopBluetoothDevicesDiscovery")
            },
            getBluetoothDevices: function(e) {
                a(e, "UPWPluginBluetooth", "getBluetoothDevices")
            },
            getConnectedBluetoothDevices: function(e) {
                a(e, "UPWPluginBluetooth", "getConnectedBluetoothDevices")
            },
            connectBLEDevice: function(e) {
                a(e, "UPWPluginBluetooth", "connectBLEDevice")
            },
            disconnectBLEDevice: function(e) {
                a(e, "UPWPluginBluetooth", "disconnectBLEDevice")
            },
            writeBLECharacteristicValue: function(e) {
                a(e, "UPWPluginBluetooth", "writeBLECharacteristicValue")
            },
            readBLECharacteristicValue: function(e) {
                a(e, "UPWPluginBluetooth", "readBLECharacteristicValue")
            },
            notifyBLECharacteristicValueChange: function(e) {
                a(e, "UPWPluginBluetooth", "notifyBLECharacteristicValueChange")
            },
            getBLEDeviceServices: function(e) {
                a(e, "UPWPluginBluetooth", "getBLEDeviceServices")
            },
            getBLEDeviceCharacteristics: function(e) {
                a(e, "UPWPluginBluetooth", "getBLEDeviceCharacteristics")
            },
            registerBluetoothDeviceFound: function(e) {
                a(e, "UPWPluginBluetooth", "registerBluetoothDeviceFound");
                var t = e && e.callback;
                r(t) && (document.removeEventListener("BluetoothDeviceFound", H), H = t, document.addEventListener("BluetoothDeviceFound", H))
            },
            cancelBluetoothDeviceFound: function(e) {
                a(e, "UPWPluginBluetooth", "cancelBluetoothDeviceFound")
            },
            registerBLEConnectionStateChange: function(e) {
                a(e, "UPWPluginBluetooth", "registerBLEConnectionStateChange");
                var t = e && e.callback;
                r(t) && (document.removeEventListener("BLEConnectionStateChange", x), x = t, document.addEventListener("BLEConnectionStateChange", x))
            },
            cancelBLEConnectionStateChange: function(e) {
                a(e, "UPWPluginBluetooth", "cancelBLEConnectionStateChange")
            },
            registerBLECharacteristicValueChange: function(e) {
                a(e, "UPWPluginBluetooth", "registerBLECharacteristicValueChange");
                var t = e && e.callback;
                r(t) && (document.removeEventListener("BLECharacteristicValueChange", G), G = t, document.addEventListener("BLECharacteristicValueChange", G))
            },
            cancelBLECharacteristicValueChange: function(e) {
                a(e, "UPWPluginBluetooth", "cancelBLECharacteristicValueChange")
            },
            registerBluetoothAdapterStateChange: function(e) {
                a(e, "UPWPluginBluetooth", "registerBluetoothAdapterStateChange");
                var t = e && e.callback;
                r(t) && (document.removeEventListener("BluetoothAdapterStateChange", j), j = t, document.addEventListener("BluetoothAdapterStateChange", j))
            },
            cancelBluetoothAdapterStateChange: function(e) {
                a(e, "UPWPluginBluetooth", "cancelBluetoothAdapterStateChange")
            },
            openBluetoothSetting: function(e) {
                a(e, "UPWPluginBluetooth", "openBluetoothSetting")
            },
            makeBluetoothPair: function(e) {
                a(e, "UPWPluginBluetooth", "makeBluetoothPair")
            },
            isBluetoothDevicePaired: function(e) {
                a(e, "UPWPluginBluetooth", "isBluetoothDevicePaired")
            },
            setBLEMTU: function(e) {
                a(e, "UPWPluginBluetooth", "setBLEMTU")
            },
            getBLEMTU: function(e) {
                a(e, "UPWPluginBluetooth", "getBLEMTU")
            },
            onBLEMTUChange: function(e) {
                a(e, "UPWPluginBluetooth", "onBLEMTUChange");
                var t = e && e.callback;
                r(t) && (document.removeEventListener("BLEMtuChanged", callbackForlistenonBLEMTUChange), callbackForlistenonBLEMTUChange = t, document.addEventListener("BLEMtuChanged", callbackForlistenonBLEMTUChange))
            },
            offBLEMTUChange: function(e) {
                document.removeEventListener("BLEMtuChanged", callbackForlistenonBLEMTUChange),
                a(e, "UPWPluginBluetooth", "offBLEMTUChange")
            },
            getBLEDeviceRSSI: function(e) {
                a(e, "UPWPluginBluetooth", "getBLEDeviceRSSI")
            },
            onMtuChanged: function(e) {
                a(e, "UPWPluginBluetooth", "onMtuChanged")
            },
            getBluetoothStatus: function(e) {
                a(e, "UPWBluetoothPeripheral", "getBluetoothStatus")
            },
            registerBLEPeripheralConnectionStateChangedNotification: function(e) {
                a(e, "UPWBluetoothPeripheral", "registerBLEPeripheralConnectionStateChangedNotification");
                var t = e && e.callback;
                r(t) && (document.removeEventListener("BLEPeripheralConnectionStateChanged", K), K = t, document.addEventListener("BLEPeripheralConnectionStateChanged", K))
            },
            cancelBLEPeripheralConnectionStateChangedNotification: function(e) {
                a(e, "UPWBluetoothPeripheral", "cancelBLEPeripheralConnectionStateChangedNotification")
            },
            createBLEPeripheralServer: function(e) {
                a(e, "UPWBluetoothPeripheral", "createBLEPeripheralServer")
            },
            writeCharacteristicValue: function(e) {
                a(e, "UPWBluetoothPeripheral", "writeCharacteristicValue")
            },
            addService: function(e) {
                a(e, "UPWBluetoothPeripheral", "addService")
            },
            removeService: function(e) {
                a(e, "UPWBluetoothPeripheral", "removeService")
            },
            startAdvertising: function(e) {
                a(e, "UPWBluetoothPeripheral", "startAdvertising")
            },
            stopAdvertising: function(e) {
                a(e, "UPWBluetoothPeripheral", "stopAdvertising")
            },
            closeBLEPeripheralServer: function(e) {
                a(e, "UPWBluetoothPeripheral", "closeBLEPeripheralServer")
            },
            registerCharacteristicReadNotification: function(e) {
                a(e, "UPWBluetoothPeripheral", "registerCharacteristicReadNotification");
                var t = e && e.callback;
                r(t) && (document.removeEventListener("BLEPeripheralCharacteristicRead", J), J = t, document.addEventListener("BLEPeripheralCharacteristicRead", J))
            },
            cancelCharacteristicReadNotification: function(e) {
                a(e, "UPWBluetoothPeripheral", "cancelCharacteristicReadNotification")
            },
            registerCharacteristicWriteNotification: function(e) {
                a(e, "UPWBluetoothPeripheral", "registerCharacteristicWriteNotification");
                var t = e && e.callback;
                r(t) && (document.removeEventListener("BLEPeripheralCharacteristicWrite", q), q = t, document.addEventListener("BLEPeripheralCharacteristicWrite", q))
            },
            cancelCharacteristicWriteNotification: function(e) {
                a(e, "UPWBluetoothPeripheral", "cancelCharacteristicWriteNotification")
            },
            registerCharacteristicSubscribedNotification: function(e) {
                a(e, "UPWBluetoothPeripheral", "registerCharacteristicSubscribedNotification");
                var t = e && e.callback;
                r(t) && (document.removeEventListener("BLEPeripheralCharacteristicSubscribed", X), X = t, document.addEventListener("BLEPeripheralCharacteristicSubscribed", X))
            },
            cancelCharacteristicSubscribedNotification: function(e) {
                a(e, "UPWBluetoothPeripheral", "cancelCharacteristicSubscribedNotification")
            },
            registerCharacteristicUnsubscribedNotification: function(e) {
                a(e, "UPWBluetoothPeripheral", "registerCharacteristicUnsubscribedNotification");
                var t = e && e.callback;
                r(t) && (document.removeEventListener("BLEPeripheralCharacteristicUnSubscribed", Z), Z = t, document.addEventListener("BLEPeripheralCharacteristicUnSubscribed", Z))
            },
            cancelCharacteristicUnsubscribedNotification: function(e) {
                a(e, "UPWBluetoothPeripheral", "cancelCharacteristicUnsubscribedNotification")
            },
            openBluetooth: function(e) {
                a(e, "UPWBluetoothPeripheral", "openBluetooth")
            },
            configApplePay: function(e) {
                a(e, "UPWNFCManager", "configApplePay")
            },
            getNFCStatus: function(e) {
                a(e, "UPHceManagerPlugin", "getNFCStatus")
            },
            getHCEState: function(e) {
                a(e, "UPHceManagerPlugin", "getHCEState")
            },
            startHCE: function(e) {
                a(e, "UPHceManagerPlugin", "startHCE")
            },
            stopHCE: function(e) {
                a(e, "UPHceManagerPlugin", "stopHCE")
            },
            sendHCEMessage: function(e) {
                a(e, "UPHceManagerPlugin", "sendHCEMessage")
            },
            onHCEMessage: function(e) {
                a(e, "UPHceManagerPlugin", "onHCEMessage")
            },
            openNFCSetting: function(e) {
                a(e, "UPHceManagerPlugin", "openNFCSetting")
            },
            saveData: function(e) {
                a(e, "UPXAppletDataPlugin", "saveData")
            },
            queryData: function(e) {
                a(e, "UPXAppletDataPlugin", "queryData")
            },
            deleteData: function(e) {
                a(e, "UPXAppletDataPlugin", "deleteData")
            },
            getAllKeys: function(e) {
                a(e, "UPXAppletDataPlugin", "getAllKeys")
            },
            deleteAllKeys: function(e) {
                a(e, "UPXAppletDataPlugin", "deleteAllKeys")
            },
            showShareMorePanel: function(n) {
                function o(e) {
                    n.shareUrl += n.shareUrl.indexOf("?") < 0 ? "?channel=" + e: "&channel=" + e;
                    var t = {
                        title: n.title,
                        content: n.desc,
                        desc: n.desc,
                        picUrl: n.picUrl,
                        imgUrl: n.picUrl,
                        shareUrl: n.shareUrl,
                        channel: e
                    };
                    switch (e) {
                    case 0:
                        P && (t.content = n.content + " " + n.shareUrl);
                        break;
                    case 1:
                        t.content = n.content + " " + n.shareUrl;
                        break;
                    case 3:
                    case 4:
                    case 5:
                    case 6:
                        break;
                    case 7:
                        P || (t.shareUrl = n.title + " " + n.shareUrl)
                    }
                    return t
                }
                n.title || (n.title = ""),
                n.desc || (n.desc = ""),
                n.content = n.desc,
                n.picUrl || ( - 1 < D.indexOf("cup.com.cn") ? n.picUrl = "https://base.cup.com.cn/s/wl/web/402/images/common/logo.png": n.picUrl = "https://base.95516.com/s/wl/web/402/images/common/logo.png"),
                n.imgUrl = n.picUrl,
                n.shareUrl || (n.shareUrl = location.href),
                n.shareList || (n.shareList = [{
                    shareId: "0",
                    shareType: "1",
                    shareData: {}
                },
                {
                    shareId: "1",
                    shareType: "1",
                    shareData: {}
                },
                {
                    shareId: "3",
                    shareType: "1",
                    shareData: {}
                },
                {
                    shareId: "4",
                    shareType: "1",
                    shareData: {}
                },
                {
                    shareId: "5",
                    shareType: "1",
                    shareData: {}
                },
                {
                    shareId: "6",
                    shareType: "1",
                    shareData: {}
                },
                {
                    shareId: "7",
                    shareType: "1",
                    shareData: {}
                }]),
                window.unionpayWalletShareContent_iOS = function(e) {
                    var t = o(e);
                    return "function" == typeof n.shareCallback && (t = n.shareCallback(e, t)),
                    JSON.stringify(t)
                },
                window.unionpayWalletShareContent_Android = function(e) {
                    var t = o(e);
                    "function" == typeof n.shareCallback && (t = n.shareCallback(e, t)),
                    share_utils && "function" == typeof share_utils.setCommonTemplate && share_utils.setCommonTemplate(JSON.stringify(t))
                };
                var e = {};
                e.shareList = n.shareList,
                ie(null, null, "UPWebBars", "prefetchImage", [n]),
                ie(n.success, n.fail, "UPSharePlugin", "showSharePopupNew", [e])
            },
            shareSinglePlugin: function(n) {
                function o(e) {
                    n.shareUrl += n.shareUrl.indexOf("?") < 0 ? "?channel=" + e: "&channel=" + e;
                    var t = {
                        title: n.title,
                        content: n.desc,
                        desc: n.desc,
                        picUrl: n.picUrl,
                        imgUrl: n.picUrl,
                        shareUrl: n.shareUrl,
                        channel: e
                    };
                    switch (e) {
                    case 0:
                        P && (t.content = n.content + " " + n.shareUrl);
                        break;
                    case 1:
                        t.content = n.content + " " + n.shareUrl;
                        break;
                    case 3:
                    case 4:
                    case 5:
                    case 6:
                        break;
                    case 7:
                        P || (t.shareUrl = n.title + " " + n.shareUrl)
                    }
                    return t
                }
                n.title || (n.title = ""),
                n.desc || (n.desc = ""),
                n.content = n.desc,
                n.picUrl || ( - 1 < D.indexOf("cup.com.cn") ? n.picUrl = "https://base.cup.com.cn/s/wl/web/402/images/common/logo.png": n.picUrl = "https://base.95516.com/s/wl/web/402/images/common/logo.png"),
                n.imgUrl = n.picUrl,
                n.shareUrl || (n.shareUrl = location.href),
                n.shareId || $.extend(n, {
                    shareId: "3",
                    shareType: "1",
                    shareData: {}
                }),
                window.unionpayWalletShareContent_iOS = function(e) {
                    var t = o(e);
                    return "function" == typeof n.shareCallback && (t = n.shareCallback(e, t)),
                    JSON.stringify(t)
                },
                window.unionpayWalletShareContent_Android = function(e) {
                    var t = o(e);
                    "function" == typeof n.shareCallback && (t = n.shareCallback(e, t)),
                    share_utils && "function" == typeof share_utils.setCommonTemplate && share_utils.setCommonTemplate(JSON.stringify(t))
                };
                var e = {};
                e.shareId = n.shareId,
                e.shareType = n.shareType,
                e.shareData = n.shareData,
                ie(null, null, "UPWebBars", "prefetchImage", [n]),
                ie(n.success, n.fail, "UPSharePlugin", "shareContent", [e])
            },
            appletSharePopup: function(e) {
                a(e, "UPSharePlugin", "appletSharePopup")
            },
            hideShareMenu: function(e) {
                a(e, "UPSharePlugin", "hideShareMenu")
            },
            setAppletShareInfo: function(e) {
                a(e, "UPSharePlugin", "setAppletShareInfo")
            },
            setAppletShareBaseInfo: function(e) {
                a(e, "UPSharePlugin", "setAppletShareBaseInfo")
            },
            openWXApplet: function(e) {
                a(e, "UPSharePlugin", "openWXApplet")
            },
            bioDetect: function(e) {
                a(e, "UPFacePlugin", "bioDetect")
            },
            addConsole: function(e) {
                a(e, "UPWLogPlugin", "addConsole")
            },
            recentlyUsedAppletList: function(e) {
                a(e, "UPWAppletCapacityPlugin", "recentlyUsedAppletList")
            },
            deleteRecentlyUsedApplet: function(e) {
                a(e, "UPWAppletCapacityPlugin", "deleteRecentlyUsedApplet")
            },
            collectApplet: function(e) {
                a(e, "UPWAppletCapacityPlugin", "collectApplet")
            },
            cancelCollectApplet: function(e) {
                a(e, "UPWAppletCapacityPlugin", "cancelCollectApplet")
            },
            getAppletCollectionList: function(e) {
                a(e, "UPWAppletCapacityPlugin", "getAppletCollectionList")
            },
            collectCurrentApplet: function(e) {
                a(e, "UPWAppletCapacityPlugin", "collectCurrentApplet")
            },
            getScreenParams: function(e) {
                a(e, "UPScreenParamsPlugin", "getScreenParams")
            },
            setSharedData: function(e) {
                a(e, "UPWPluginLiteApp", "setSharedData")
            },
            getSharedData: function(e) {
                a(e, "UPWPluginLiteApp", "getSharedData")
            },
            navigateTo: function(e) {
                a(e, "UPWPluginLiteApp", "navigateTo")
            },
            navigateBack: function(e) {
                a(e, "UPWPluginLiteApp", "navigateBack")
            },
            redirectTo: function(e) {
                a(e, "UPWPluginLiteApp", "redirectTo")
            },
            reLaunch: function(e) {
                a(e, "UPWPluginLiteApp", "reLaunch")
            },
            switchTab: function(e) {
                a(e, "UPWPluginLiteApp", "switchTab")
            },
            registerLifecycle: function(e) {
                var t = ["rerender", "onAppLoad", "onAppShow", "onAppHide", "onPageShow", "onPageHide", "onPageLoad"];
                for (var n in e) e.hasOwnProperty(n) && -1 < t.indexOf(n) && r(e[n]) && ce(n, e[n]);
                a(e, "UPWPluginLiteApp", "ready")
            },
            vibrate: function(e) {
                a(e, "UPWDeviceModule", "vibrate")
            },
            openVoiceBroadcast: function(e) {
                a(e, "UPWDeviceModule", "openVoiceBroadcast")
            },
            getVoiceBroadcastState: function(e) {
                a(e, "UPWDeviceModule", "getVoiceBroadcastState")
            },
            getNotificationState: function(e) {
                a(e, "UPWDeviceModule", "getNotificationState")
            },
            getBatteryInfo: function(e) {
                a(e, "UPWDeviceModule", "getBatteryInfo")
            },
            getMuteState: function(e) {
                a(e, "UPWDeviceModule", "getMuteState")
            },
            idCardRecognition: function(e) {
                a(e, "UPAIPlugin", "idCardRecognition")
            },
            followSelfApplet: function(e) {
                a(e, "UPAppletMorePlugin", "follow")
            },
            cancelFollowSelfApplet: function(e) {
                a(e, "UPAppletMorePlugin", "cancelFollow")
            },
            getSelfAppletFollowStatus: function(e) {
                a(e, "UPAppletMorePlugin", "getFollowStatus")
            },
            collectSelfAppletToHome: function(e) {
                a(e, "UPAppletMorePlugin", "collectToHome")
            },
            cancelCollectSelfAppletToHome: function(e) {
                a(e, "UPAppletMorePlugin", "cancelCollectToHome")
            },
            getSelfAppletCollectStatus: function(e) {
                a(e, "UPAppletMorePlugin", "getCollectStatus")
            },
            reenterSelfApplet: function(e) {
                a(e, "UPAppletMorePlugin", "reenterApplet")
            },
            goSelfAppletAppDetail: function(e) {
                a(e, "UPAppletMorePlugin", "appDetail")
            },
            addSelfAppletToLauncher: function(e) {
                a(e, "UPAppletMorePlugin", "addToLauncher")
            },
            checkIsShaking: function(e) {
                a(e, "UPWDeviceSensorPlugin", "checkIsShaking")
            },
            stopCheckIsShaking: function(e) {
                a(e, "UPWDeviceSensorPlugin", "stopCheckIsShaking")
            },
            startAccelerometer: function(e) {
                a(e, "UPWDeviceSensorPlugin", "startAccelerometer")
            },
            stopAccelerometer: function(e) {
                a(e, "UPWDeviceSensorPlugin", "stopAccelerometer")
            },
            onAccelerometerChange: function(e) {
                a(e, "UPWDeviceSensorPlugin", "onAccelerometerChange");
                var t = e && e.callback;
                r(t) && (document.removeEventListener("accelerometerChange", z.accelerometerChange), z.accelerometerChange = t, document.addEventListener("accelerometerChange", z.accelerometerChange))
            },
            offAccelerometerChange: function(e) {
                a(e, "UPWDeviceSensorPlugin", "offAccelerometerChange")
            },
            startGyroscope: function(e) {
                a(e, "UPWDeviceSensorPlugin", "startGyroscope")
            },
            stopGyroscope: function(e) {
                a(e, "UPWDeviceSensorPlugin", "stopGyroscope")
            },
            onGyroscopeChange: function(e) {
                a(e, "UPWDeviceSensorPlugin", "onGyroscopeChange");
                var t = e && e.callback;
                r(t) && (document.removeEventListener("gyroscopeChange", z.gyroscopeChange), z.gyroscopeChange = t, document.addEventListener("gyroscopeChange", z.gyroscopeChange))
            },
            offGyroscopeChange: function(e) {
                a(e, "UPWDeviceSensorPlugin", "offGyroscopeChange")
            },
            startCompass: function(e) {
                a(e, "UPWDeviceSensorPlugin", "startCompass")
            },
            stopCompass: function(e) {
                a(e, "UPWDeviceSensorPlugin", "stopCompass")
            },
            onCompassChange: function(e) {
                a(e, "UPWDeviceSensorPlugin", "onCompassChange");
                var t = e && e.callback;
                r(t) && (document.removeEventListener("compassChange", z.compassChange), z.compassChange = t, document.addEventListener("compassChange", z.compassChange))
            },
            offCompassChange: function(e) {
                a(e, "UPWDeviceSensorPlugin", "offCompassChange")
            },
            getZheLiBanPublicKey: function(e) {
                a(e, "UPZheLiBanPlugin", "getZheLiBanPublicKey")
            },
            configZheLiBanAuthorizeInfo: function(e) {
                a(e, "UPZheLiBanPlugin", "configZheLiBanAuthorizeInfo")
            },
            openZheLiBanPage: function(e) {
                a(e, "UPZheLiBanPlugin", "openZheLiBanPage")
            },
            getContactsData: function(e) {
                a(e, "UPWAddressBook", "getContactsData")
            },
            downloadApp: function(e) {
                a(e, "UPDownloadPlugin", "downloadApp")
            },
            getNFCAdapter: function() {
                return {
                    getUPNFC: function() {
                        return {
                            isSupport: function(e) {
                                a(e, "UPNFCPlugin", "isSupport")
                            },
                            openNfcSetting: function(e) {
                                a(e, "UPNFCPlugin", "openNfcSetting")
                            },
                            startDiscovery: function(e) {
                                a(e, "UPNFCPlugin", "startDiscovery");
                                var t = e && e.callback;
                                r(t) && (document.removeEventListener("onNfcTagDiscovered", callbackForonNfcTagDiscovered), callbackForonNfcTagDiscovered = t, document.addEventListener("onNfcTagDiscovered", callbackForonNfcTagDiscovered))
                            },
                            stopDiscovery: function(e) {
                                a(e, "UPNFCPlugin", "stopDiscovery")
                            },
                            setAlertMessage: function(e) {
                                a(e, "UPNFCPlugin", "setAlertMessage")
                            },
                            restartPolling: function(e) {
                                a(e, "UPNFCPlugin", "restartPolling")
                            },
                            offDiscovered: function(e) {
                                document.removeEventListener("onNfcTagDiscovered", callbackForonNfcTagDiscovered)
                            }
                        }
                    },
                    isSupport: function(e) {
                        a(e, "UPNFCPlugin", "isSupport")
                    },
                    openNfcSetting: function(e) {
                        a(e, "UPNFCPlugin", "openNfcSetting")
                    },
                    startDiscovery: function(e) {
                        a(e, "UPNFCPlugin", "startDiscovery");
                        var t = e && e.callback;
                        r(t) && (document.removeEventListener("onNfcTagDiscovered", callbackForonNfcTagDiscovered), callbackForonNfcTagDiscovered = t, document.addEventListener("onNfcTagDiscovered", callbackForonNfcTagDiscovered))
                    },
                    stopDiscovery: function(e) {
                        a(e, "UPNFCPlugin", "stopDiscovery")
                    },
                    setAlertMessage: function(e) {
                        a(e, "UPNFCPlugin", "setAlertMessage")
                    },
                    restartPolling: function(e) {
                        a(e, "UPNFCPlugin", "restartPolling")
                    },
                    offDiscovered: function(e) {
                        document.removeEventListener("onNfcTagDiscovered", callbackForonNfcTagDiscovered)
                    },
                    getUPIsoDep: function() {
                        return {
                            connect: function(e) {
                                a(e, "UPIsoDepPlugin", "connect")
                            },
                            isConnected: function(e) {
                                a(e, "UPIsoDepPlugin", "isConnected")
                            },
                            close: function(e) {
                                a(e, "UPIsoDepPlugin", "close")
                            },
                            setTimeout: function(e) {
                                a(e, "UPIsoDepPlugin", "setTimeout")
                            },
                            getHistoricalBytes: function(e) {
                                a(e, "UPIsoDepPlugin", "getHistoricalBytes")
                            },
                            getMaxTransceiveLength: function(e) {
                                a(e, "UPIsoDepPlugin", "getMaxTransceiveLength")
                            },
                            transceive: function(e) {
                                a(e, "UPIsoDepPlugin", "transceive")
                            }
                        }
                    },
                    getUPNdef: function() {
                        return {
                            connect: function(e) {
                                a(e, "UPNdefPlugin", "connect")
                            },
                            isConnected: function(e) {
                                a(e, "UPNdefPlugin", "isConnected")
                            },
                            writeNdefMessage: function(e) {
                                a(e, "UPNdefPlugin", "writeNdefMessage")
                            },
                            close: function(e) {
                                a(e, "UPNdefPlugin", "close")
                            },
                            queryNdefStatus: function(e) {
                                a(e, "UPNdefPlugin", "queryNdefStatus")
                            },
                            readNdefMessage: function(e) {
                                a(e, "UPNdefPlugin", "readNdefMessage")
                            }
                        }
                    },
                    getUPIso7816: function() {
                        return {
                            connect: function(e) {
                                a(e, "UPIso7816Plugin", "connect")
                            },
                            isConnected: function(e) {
                                a(e, "UPIso7816Plugin", "isConnected")
                            },
                            transceive: function(e) {
                                a(e, "UPIso7816Plugin", "transceive")
                            },
                            getTagInfo: function(e) {
                                a(e, "UPIso7816Plugin", "getTagInfo")
                            }
                        }
                    },
                    getUPNfcF: function() {
                        return {
                            connect: function(e) {
                                a(e, "UPNfcFPlugin", "connect")
                            },
                            isConnected: function(e) {
                                a(e, "UPNfcFPlugin", "isConnected")
                            },
                            transceive: function(e) {
                                a(e, "UPNfcFPlugin", "transceive")
                            },
                            getTagInfo: function(e) {
                                a(e, "UPNfcFPlugin", "getTagInfo")
                            },
                            close: function(e) {
                                a(e, "UPNfcFPlugin", "close")
                            },
                            setTimeout: function(e) {
                                a(e, "UPNfcFPlugin", "setTimeout")
                            },
                            getMaxTransceiveLength: function(e) {
                                a(e, "UPNfcFPlugin", "getMaxTransceiveLength")
                            }
                        }
                    }
                }
            },
            openAppSetting: function(e) {
                a(e, "UPXMicroStorePlugin", "showNotificationSetingAlert")
            },
            getBeacons: function(e) {
                a(e, "UPWBeacon", "getBeacons")
            },
            startBeaconDiscovery: function(e) {
                a(e, "UPWBeacon", "startBeaconDiscovery")
            },
            stopBeaconDiscovery: function(e) {
                a(e, "UPWBeacon", "stopBeaconDiscovery")
            },
            onBeaconUpdate: function(e) {
                a(e, "UPWBeacon", "listenBeaconUpdate");
                var t = e && e.callback;
                r(t) && (document.removeEventListener("BeaconFound", callbackForlistenBeaconUpdate), callbackForlistenBeaconUpdate = t, document.addEventListener("BeaconFound", callbackForlistenBeaconUpdate))
            },
            offBeaconUpdate: function(e) {
                a(e, "UPWBeacon", "cancelListenBeaconUpdate"),
                document.removeEventListener("BeaconFound", callbackForlistenBeaconUpdate)
            },
            onBeaconServiceChange: function(e) {
                a(e, "UPWBeacon", "listenBeaconServiceChange");
                var t = e && e.callback;
                r(t) && (document.removeEventListener("BeaconServiceChange", callbackForlistenBeaconServiceChange), callbackForlistenBeaconServiceChange = t, document.addEventListener("BeaconServiceChange", callbackForlistenBeaconServiceChange))
            },
            offBeaconServiceChange: function(e) {
                a(e, "UPWBeacon", "cancelListenBeaconServiceChange"),
                document.removeEventListener("BeaconServiceChange", callbackForlistenBeaconServiceChange)
            },
            checkStepPermissions: function(e) {
                a(e, "UPStepPlugin", "checkStepPermissions")
            },
            uploadStepData: function(e) {
                a(e, "UPStepPlugin", "uploadStepData")
            },
            sendRequest: function(c) {
                a(c, "UPWebNetwork", "sendRequest",
                function(e) {
                    var t = e && e.message;
                    if (t) {
                        if (c && "arraybuffer" == c.dataType) {
                            for (var n = window.atob(t), o = n.length, a = new Uint8Array(o), i = 0; i < o; i++) a[i] = n.charCodeAt(i);
                            t = a.buffer
                        }
                        c && "json" == c.dataType && "string" == typeof e && (t = JSON.parse(t)),
                        e.message = t
                    }
                    return e
                })
            }
        }),
        t.length && (C = !0, s(t,
        function(e, t) {
            r(t) && t()
        }))
    }
    function ee(e, t) {
        var n;
        if (t && "string" == typeof t && (t = {
            msg: t
        }), window.cordova) switch (window.cordova.errorRetStatus) {
        case window.cordova.callbackStatus.INVALID_ACTION:
            n = N.ESDK_PLUGIN_INVALID_ACTION;
            break;
        case window.cordova.callbackStatus.CLASS_NOT_FOUND_EXCEPTION:
            n = N.ESDK_PLUGIN_CLASS_NOT_FOUND;
            break;
        case window.cordova.callbackStatus.ILLEGAL_ACCESS_EXCEPTION:
            n = N.ESDK_PLUGIN_ILLEGAL_ACCESS
        }
        if (n && (t = n), r(e)) e(t);
        else if (t) {
            var o = t.errmsg || t.msg || t.desc,
            a = t.errcode || t.code;
            a && (o += " [" + a + "]"),
            te(o)
        }
        window.cordova && (window.cordova.errorRetStatus = window.cordova.callbackStatus.OK)
    }
    function te(e) {
        m && e && (C && c("showFlashInfo", window.upsdk.jsApiList) ? ie(null, null, "UPWebUI", "showFlashInfo", [e]) : alert(e))
    }
    function ne(e, t, n) {
        for (var o, a = 0; a < n.length; ++a) if (!t[n[a]]) {
            o = n[a];
            break
        }
        return o ? e + "调用方法缺少参数" + o: ""
    }
    function oe(e) {
        r(a) && ("string" == typeof e && (e = {
            msg: e
        }), a(e))
    }
    function ae(e) {
        return e ? e.resultString ? e.resultString: e.resultParams ? e.resultParams: void 0 : e
    }
    function ie(t, n, e, o, a) {
        F && window.cordova ? window.cordova.exec(t, n, e, o, a) : O && window.WebViewJavascriptBridge && window.WebViewJavascriptBridge.callHandler(e, o, a,
        function(e) {
            r(t) && t(ae(e))
        },
        function(e) {
            r(n) && n(ae(e))
        })
    }
    function ce(e, t) {
        P && window.WebViewJavascriptBridge && window.WebViewJavascriptBridge.registerHandler ? window.WebViewJavascriptBridge.registerHandler(e, t) : (document.removeEventListener(e, Q[e]), Q[e] = t, document.addEventListener(e, Q[e]))
    }
    e(window.upsdk, {
        config: function(e) {
            if (!h) return U = !(C = !0),
            void(S.length && s(S,
            function(e, t) {
                r(t) && t()
            }));
            if (l(e)) {
                e.debug && (m = !0,
                function() {
                    window.upConsoleShow = !0;
                    var e = document.createElement("script");
                    e.type = "text/javascript",
                    e.src = d,
                    document.getElementsByTagName("head")[0].appendChild(e)
                } (), delete e.debug);
                var t = ne("config", e, ["appId", "nonceStr", "timestamp", "signature"]);
                if (!t && e.url) {
                    var n = window.location.href.split("#")[0];
                    e.url !== n && (t = "签名因子url取值不正确, 正确的应该是" + n)
                }
                if (t) return ee(null, t),
                void oe(t);
                t = "",
                h || (t = N.ESDK_NOT_IN_WALLET),
                t ? oe(t) : v ? ie(function(e) {
                    var t, n;
                    U = !(C = !0),
                    "string" == typeof e && (e = JSON.parse(e)),
                    e.params && (e = e.params),
                    B = e && e.jsApiList && (t = e.jsApiList, n = {},
                    i(t) && s(t,
                    function(e, t) {
                        l(t) && (n[t.plugin] = t.actions)
                    }), n) || {};
                    var o = [];
                    s(B,
                    function(e, t) {
                        i(t) && (o = o.concat(t))
                    });
                    var a = c("fetchNativeData", o);
                    0 <= a && o.splice(a, 1, "getLocationCity", "getLocationGps"),
                    window.upsdk.jsApiList = o,
                    m && window.uplog && window.uplog("you can use plugins:" + window.upsdk.jsApiList),
                    S.length && s(S,
                    function(e, t) {
                        r(t) && t()
                    }),
                    te("config ok")
                },
                function(e) {
                    C = !(U = !0),
                    p = e,
                    r(a) && a(e),
                    te("config error: " + e)
                },
                "UPWebSdk", "config", [e]) : o = e
            } else ee(null, N.ESDK_BAD_PARAMS)
        },
        openTicketDetails: function(e) {
            ie(null, null, "UPWebOpenOther", "openTicketDetails", [e])
        },
        ready: function(e) {
            r(e) && (C ? e() : S.push(e))
        },
        error: function(e) {
            e = r(e) && e || n,
            U ? e(p) : a = e
        },
        appletConfig: function(e) {
            if (v) {
                var t = null,
                n = null;
                r(e.success) && (t = e.success, delete e.success),
                r(e.fail) && (n = e.fail, delete e.fail),
                ie(function(e) {
                    C = !0,
                    t(e)
                },
                function(e) {
                    ee(n, e)
                },
                "UPWebSdk", "appletConfig", [e])
            } else u = e
        },
        appletAuth: function(e) {
            if (v) {
                var t = null,
                n = null;
                r(e.success) && (t = e.success, delete e.success),
                r(e.fail) && (n = e.fail, delete e.fail),
                ie(t,
                function(e) {
                    ee(n, e)
                },
                "UPWebSdk", "appletAuth", [e])
            } else g = e
        },
        pluginReady: function(e) {
            r(e) && (v ? (C = !0, e()) : t.push(e))
        }
    }),
    "undefined" != typeof define && define(function() {
        return window.upsdk
    }),
    window.backBtnClick_iOS = n
} ();