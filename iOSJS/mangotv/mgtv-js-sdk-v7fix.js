/* update_time: 2021-11-17 16:46:53 */
var andriodCallbackList = {},
Api = {
    ua: window.navigator.userAgent.toLowerCase(),
    isGlobal: /src/.test(window.navigator.userAgent.toLowerCase()),
    isIphone: /iphone/.test(window.navigator.userAgent.toLowerCase()),
    isIpad: /ipad/.test(window.navigator.userAgent.toLowerCase()) || /macintosh/.test(window.navigator.userAgent.toLowerCase()),
    isAphone: /android/.test(window.navigator.userAgent.toLowerCase()),
    isMPWebview: -1 < location.href.indexOf("MPWebviewKind"),
    isWeixin: /MicroMessenger/i.test(window.navigator.userAgent),
    isWXMPWebview: /MPWebviewKind=wxapp/.test(location.href),
    isTTMPWebview: /MPWebviewKind=toutiao/.test(location.href),
    isALMPWebview: /MPWebviewKind=alipay/.test(location.href),
    judgeVer: function(e, i) {
        var t = this.ua.lastIndexOf("/"),
        s = this.ua.substring(t + 1, this.ua.length).split("."),
        t = s[0] + s[1] + s[2];
        return 7 != s[0] || s[1] || s[2] || !this.isIphone || (t = 700),
        ">=" == e ? parseInt(t) >= parseInt(i) : "<" == e ? parseInt(t) < parseInt(i) : void 0
    },
    __functionIndexMap: {},
    calliOSFunction: function(e, i, t, s) {
        var n, o = "js2ios://",
        r = {};
        r.functionname = e,
        t && ("function" == typeof t ? (n = this.createCallbackFunction(e + "_successCallback", t), r.success = n) : r.success = t),
        s && ("function" == typeof s ? (n = this.createCallbackFunction(e + "_errorCallback", s), r.error = n) : r.error = s),
        i && (r.args = i),
        o += JSON.stringify(r),
        !this.isIpad && this.judgeVer("<", 499) ? (r = this.createIFrame(o)).parentNode.removeChild(r) : location.href = "imgotv://jsParams?" + o.split("js2ios://")[1]
    },
    createCallbackFunction: function(e, i) {
        if (i && null != i.name && 0 < i.name.length) return i.name;
        if ("function" != typeof window[e + 0]) return window[e + 0] = i,
        e + (this.__functionIndexMap[e] = 0);
        for (var t = this.__functionIndexMap[e], s = i.toString(), n = 0; n <= t; n++) {
            var o = e + n;
            if (window[o].toString() == s) return o
        }
        var r = ++this.__functionIndexMap[e];
        return window[e + r] = i,
        e + r
    },
    createIFrame: function(e) {
        var i = document.documentElement,
        t = document.createElement("IFRAME");
        return t.setAttribute("src", e),
        i.appendChild(t),
        t
    },
    invokerUse: function(e, i) {
        var t = this.ua;
        if (/imgotv/.test(t)) if (/android/.test(t)) try {
            this.invokerUseAndroid(e, i)
        } catch(e) {} else try {
            this.invokerUseIOS(e, i)
        } catch(e) {}
    },
    invokerUseIOS: function(e, i) {
        var t = this.ua,
        s = null,
        n = null;
        if ("object" == typeof i && (s = "object" == typeof i.param ? i.param: null, n = "function" == typeof i.onsuccess ? i.onsuccess: null), s && "object" == typeof s) if (/ipad/.test(t)) var o = JSON.stringify(s);
        else if (this.judgeVer("<", 499)) {
            o = [];
            if ("showShareMenus" === e || "feedback" === e || "sendToClipboard" === e || "getSMSCode" === e || "getSMSNumber" === e || "previewChannel" === e || "setParams" === e) for (var r in s) o.push(encodeURIComponent(s[r]));
            else o.push(JSON.stringify(s))
        } else o = JSON.stringify(s);
        this.calliOSFunction(e, o, n)
    },
    andriodReqTimer: null,
    invokerUseAndroid: function(e, i) {
        var t = this,
        s = null,
        n = null;
        if ("object" == typeof i && (s = "object" == typeof i.param ? i.param: null, n = "function" == typeof i.onsuccess ? i.onsuccess: null), s && "object" == typeof s) if (this.judgeVer("<", 500)) {
            var o = [];
            if ("showShareMenus" === e || "feedback" === e || "sendToClipboard" === e || "getSMSCode" === e || "getSMSNumber" === e || "previewChannel" === e || "setParams" === e) for (var r in s) o.push(encodeURIComponent(s[r]));
            else o.push(JSON.stringify(s))
        } else o = JSON.stringify(s);
        t.andriodReqTimer && "jumpPage" === e || (o && 0 !== o.length ? window.client[e](o) : n ? (i = e + "_" + Math.ceil(1e3 * Math.random()), andriodCallbackList[i] = function(e) {
            n(e)
        },
        "finish" == e ? window.client[e]() : window.client[e]("andriodCallbackList." + i)) : window.client[e](), "jumpPage" === e && (t.andriodReqTimer = setTimeout(function() {
            clearTimeout(t.andriodReqTimer),
            t.andriodReqTimer = null
        },
        1e3)))
    },
    setupWebViewJavascriptBridge: function(i) {
        if (/imgotv/.test(this.ua)) {
            if (window.WebViewJavascriptBridge) return i(WebViewJavascriptBridge);
            if (/android/.test(this.ua)) try {
                document.addEventListener("WebViewJavascriptBridgeReady",
                function() {
                    var e = window.WebViewJavascriptBridge;
                    e.init(function(e, i) {}),
                    i(e)
                },
                !1)
            } catch(e) {} else try {
                if (window.WVJBCallbacks) return window.WVJBCallbacks.push(i);
                window.WVJBCallbacks = [i];
                var e = document.createElement("iframe");
                e.style.display = "none",
                e.src = "wvjbscheme://__BRIDGE_LOADED__",
                document.documentElement.appendChild(e),
                setTimeout(function() {
                    document.documentElement.removeChild(e)
                },
                0)
            } catch(e) {}
        }
    },
    previewChannel: function(i, t) {
        "undefined" == i.pre && (i.pre = 1),
        this.isIphone && this.isGlobal ? this.setupWebViewJavascriptBridge(function(e) {
            e.callHandler("previewChannel", i,
            function(e) {
                "function" == typeof t && t(e)
            })
        }) : this.isIphone && this.judgeVer("<", 540) || this.isIpad && this.judgeVer("<", 521) || this.isAphone && this.judgeVer("<", 554) ? this.invokerUse("previewChannel", {
            param: i
        }) : (this.isIphone && this.judgeVer(">=", 540) || this.isAphone && this.judgeVer(">=", 554) || this.isIpad && this.judgeVer(">=", 521)) && this.setupWebViewJavascriptBridge(function(e) {
            e.callHandler("previewChannel", i,
            function(e) {
                "function" == typeof t && t(e)
            })
        })
    },
    setWebviewTitle: function(i, t) {
        this.isIphone && this.isGlobal ? this.setupWebViewJavascriptBridge(function(e) {
            e.callHandler("setWebviewTitle", i,
            function(e) {
                "function" == typeof t && t(e)
            })
        }) : this.isIphone && this.judgeVer("<", 540) || this.isIpad && this.judgeVer("<", 521) || this.isAphone && this.judgeVer("<", 554) ? this.invokerUse("setWebviewTitle", {
            param: i
        }) : (this.isIphone && this.judgeVer(">=", 540) || this.isAphone && this.judgeVer(">=", 554) || this.isIpad && this.judgeVer(">=", 521)) && this.setupWebViewJavascriptBridge(function(e) {
            e.callHandler("setWebviewTitle", i,
            function(e) {
                "function" == typeof t && t(e)
            })
        })
    },
    checkReviewUser: function(i) {
        this.isIphone && this.isGlobal ? this.setupWebViewJavascriptBridge(function(e) {
            e.callHandler("checkReviewUser", {},
            function(e) {
                "function" == typeof i && i(e)
            })
        }) : this.isIphone && this.judgeVer("<", 540) || this.isIpad && this.judgeVer("<", 521) || this.isAphone && this.judgeVer("<", 554) ? this.invokerUse("checkReviewUser", {
            onsuccess: i
        }) : (this.isIphone && this.judgeVer(">=", 540) || this.isAphone && this.judgeVer(">=", 554) || this.isIpad && this.judgeVer(">=", 521)) && this.setupWebViewJavascriptBridge(function(e) {
            e.callHandler("checkReviewUser", {},
            function(e) {
                "function" == typeof i && i(e)
            })
        })
    },
    login: function(t) {
        var e, s = this;
        if (this.isIphone && this.isGlobal) this.setupWebViewJavascriptBridge(function(e) {
            e.callHandler("login", {},
            function(e) {
                t(e.data)
            })
        });
        else if (this.isMPWebview && this.isWXMPWebview) try {
            wx && wx.miniProgram && wx.miniProgram.navigateTo && (e = this.remove_param("ticket", this.remove_param("openid", window.location.href)), wx.miniProgram.redirectTo({
                url: "/pages/login/index?from=" + encodeURIComponent(e)
            }))
        } catch(e) {
            console.log('<script src="https://res.wx.qq.com/open/js/jweixin-1.4.0.js"><\/script>'),
            console.log("小程序webview环境需要引入微信sdk比如以上js,具体报错如下"),
            console.log(e)
        } else this.isIphone && this.judgeVer("<", 540) || this.isIpad && this.judgeVer("<", 521) || this.isAphone && this.judgeVer("<", 554) ? this.invokerUse("login", {
            onsuccess: t
        }) : (this.isIphone && this.judgeVer(">=", 540) || this.isAphone && this.judgeVer(">=", 554) || this.isIpad && this.judgeVer(">=", 521)) && this.setupWebViewJavascriptBridge(function(e) {
            e.callHandler("login", {},
            function(e) {
                var i;
                s.isAphone ? s.judgeVer(">=", 556) ? ("string" == typeof e ? i = JSON.parse(e) : "object" == typeof e && (i = e), t(i.data)) : s.judgeVer(">=", 554) && t(e) : t(e.data)
            })
        })
    },
    remove_param: function(e, i) {
        i = i || window.location.href;
        for (var t = new RegExp("([&\\?])" + e + "=[^&#]*&?", "g"); t.test(i);) i = i.replace(t, "$1");
        return console.log(i),
        i
    },
    getNetworkType: function(i) {
        this.isIphone && this.isGlobal ? this.setupWebViewJavascriptBridge(function(e) {
            e.callHandler("getNetworkType", {},
            function(e) {
                "function" == typeof i && i(e)
            })
        }) : this.isIphone && this.judgeVer("<", 540) || this.isIpad && this.judgeVer("<", 521) || this.isAphone && this.judgeVer("<", 554) ? this.invokerUse("getNetworkType", {
            onsuccess: i
        }) : (this.isIphone && this.judgeVer(">=", 540) || this.isAphone && this.judgeVer(">=", 554) || this.isIpad && this.judgeVer(">=", 521)) && this.setupWebViewJavascriptBridge(function(e) {
            e.callHandler("getNetworkType", {},
            function(e) {
                "function" == typeof i && i(e)
            })
        })
    },
    confirmLogin: function(i) {
        this.isIphone && this.isGlobal ? this.setupWebViewJavascriptBridge(function(e) {
            e.callHandler("confirmLogin", {},
            function(e) {
                "function" == typeof i && i(e)
            })
        }) : this.isIphone && this.judgeVer("<", 540) || this.isIpad && this.judgeVer("<", 521) || this.isAphone && this.judgeVer("<", 554) ? this.invokerUse("confirmLogin", {
            onsuccess: i
        }) : (this.isIphone && this.judgeVer(">=", 540) || this.isAphone && this.judgeVer(">=", 554) || this.isIpad && this.judgeVer(">=", 521)) && this.setupWebViewJavascriptBridge(function(e) {
            e.callHandler("confirmLogin", {},
            function(e) {
                "function" == typeof i && i(e)
            })
        })
    },
    getUserInfo: function(t) {
        if (this.isIphone && this.isGlobal) this.setupWebViewJavascriptBridge(function(e) {
            e.callHandler("getUserInfo", {},
            function(e) {
                var i;
                "string" == typeof e ? i = JSON.parse(e) : "object" == typeof e && (i = e),
                200 == i.code ? t(i.data) : t("")
            })
        });
        else if (this.isMPWebview) {
            for (var e = {},
            i = location.href.substr(location.href.indexOf("?") + 1).split("&"), s = 0; s < i.length; s++) e[i[s].split("=")[0]] = unescape(i[s].split("=")[1]);
            t({
                uuid: e.uuid,
                ticket: e.ticket
            })
        } else this.isIphone && this.judgeVer("<", 540) || this.isIpad && this.judgeVer("<", 521) || this.isAphone && this.judgeVer("<", 554) ? this.invokerUse("getUserInfo", {
            onsuccess: t
        }) : (this.isIphone && this.judgeVer(">=", 540) || this.isAphone && this.judgeVer(">=", 554) || this.isIpad && this.judgeVer(">=", 521)) && (console.log("inner"), this.setupWebViewJavascriptBridge(function(e) {
            e.callHandler("getUserInfo", {},
            function(e) {
                var i;
                "string" == typeof e ? i = JSON.parse(e) : "object" == typeof e && (i = e),
                200 == i.code ? t(i.data) : t("")
            })
        }))
    },
    VIPAuth: function(i, t) {
        i.userId && (i.userId = parseInt(i.userId)),
        this.isIphone && this.isGlobal ? this.setupWebViewJavascriptBridge(function(e) {
            e.callHandler("VIPAuth", i,
            function(e) {
                "function" == typeof t && t(e)
            })
        }) : this.isIphone && this.judgeVer("<", 540) || this.isIpad && this.judgeVer("<", 521) || this.isAphone && this.judgeVer("<", 554) ? this.invokerUse("VIPAuth", {
            param: i
        }) : (this.isIphone && this.judgeVer(">=", 540) || this.isAphone && this.judgeVer(">=", 554) || this.isIpad && this.judgeVer(">=", 521)) && this.setupWebViewJavascriptBridge(function(e) {
            e.callHandler("VIPAuth", i,
            function(e) {
                "function" == typeof t && t(e)
            })
        })
    },
    showShareMenus: function(e, t) {
        var i;
        e.customInfo ? (i = {
            title: e.title || document.title,
            desc: e.desc || "",
            shareDesc: e.desc || "",
            shareUrl: e.shareUrl || window.location.href,
            shareIcon: e.shareIcon || "",
            customInfo: {}
        },
        e.customInfo.qq && (i.customInfo.QQ = {
            title: e.customInfo.qq.title || "",
            desc: e.customInfo.qq.desc || "",
            url: e.customInfo.qq.url || "",
            img: e.customInfo.qq.img || ""
        }), e.customInfo.qzone && (i.customInfo["QQ空间"] = {
            title: e.customInfo.qzone.title || "",
            desc: e.customInfo.qzone.desc || "",
            url: e.customInfo.qzone.url || "",
            img: e.customInfo.qzone.img || ""
        }), e.customInfo.wechat && (i.customInfo["微信"] = {
            title: e.customInfo.wechat.title || "",
            desc: e.customInfo.wechat.desc || "",
            url: e.customInfo.wechat.url || "",
            img: e.customInfo.wechat.img || ""
        }), e.customInfo.moments && (i.customInfo["朋友圈"] = {
            title: e.customInfo.moments.title || "",
            desc: e.customInfo.moments.desc || "",
            url: e.customInfo.moments.url || "",
            img: e.customInfo.moments.img || ""
        }), e.customInfo.weibo && (i.customInfo["新浪"] = {
            title: e.customInfo.weibo.title || "",
            desc: e.customInfo.weibo.desc || "",
            url: e.customInfo.weibo.url || "",
            img: e.customInfo.weibo.img || ""
        }), e.customInfo.twitter && (i.customInfo.Twitter = {
            title: e.customInfo.twitter.title || "",
            desc: e.customInfo.twitter.desc || "",
            url: e.customInfo.twitter.url || "",
            img: e.customInfo.twitter.img || ""
        }), e.customInfo.facebook && (i.customInfo.Facebook = {
            title: e.customInfo.facebook.title || "",
            desc: e.customInfo.facebook.desc || "",
            url: e.customInfo.facebook.url || "",
            img: e.customInfo.facebook.img || ""
        }), e.customInfo.face2face && (i.customInfo["面对面"] = {
            title: e.customInfo.face2face.title || "",
            desc: e.customInfo.face2face.desc || "",
            url: e.customInfo.face2face.url || "",
            img: e.customInfo.face2face.img || ""
        }), e.customInfo.fantuan && (i.customInfo["饭团"] = {
            title: e.customInfo.fantuan.title || "",
            desc: e.customInfo.fantuan.desc || "",
            url: e.customInfo.fantuan.url || "",
            img: e.customInfo.fantuan.img || ""
        }), e.customInfo.sms && (i.customInfo["短信"] = {
            title: e.customInfo.sms.title || "",
            desc: e.customInfo.sms.desc || "",
            url: e.customInfo.sms.url || "",
            img: e.customInfo.sms.img || ""
        })) : i = this.isAphone && this.judgeVer(">=", 615) || this.isIphone && this.judgeVer(">=", 621) ? {
            title: e.title || document.title,
            desc: e.desc || "",
            shareDesc: e.desc || "",
            shareUrl: e.shareUrl || window.location.href,
            shareIcon: e.shareIcon || "",
            customInfo: {
                "饭团": {
                    title: e.title || document.title,
                    desc: e.desc || "",
                    url: e.shareUrl || window.location.href,
                    img: e.shareIcon || ""
                },
                QQ: {
                    title: e.title || document.title,
                    desc: e.desc || "",
                    url: e.shareUrl || window.location.href,
                    img: e.shareIcon || ""
                },
                "QQ空间": {
                    title: e.title || document.title,
                    desc: e.desc || "",
                    url: e.shareUrl || window.location.href,
                    img: e.shareIcon || ""
                },
                "微信": {
                    title: e.title || document.title,
                    desc: e.desc || "",
                    url: e.shareUrl || window.location.href,
                    img: e.shareIcon || ""
                },
                "朋友圈": {
                    title: e.title || document.title,
                    desc: e.desc || "",
                    url: e.shareUrl || window.location.href,
                    img: e.shareIcon || ""
                },
                "新浪": {
                    title: e.title || document.title,
                    desc: e.desc || "",
                    url: e.shareUrl || window.location.href,
                    img: e.shareIcon || ""
                }
            }
        }: {
            title: e.title || document.title,
            desc: e.desc || "",
            shareDesc: e.desc || "",
            shareUrl: e.shareUrl || window.location.href,
            shareIcon: e.shareIcon || ""
        },
        this.isIphone && this.isGlobal ? this.setupWebViewJavascriptBridge(function(e) {
            e.callHandler("showShareMenus", i,
            function(e) {}),
            e.registerHandler("showShareMenusCallback",
            function(e) {
                var i;
                "string" == typeof e ? i = JSON.parse(e) : "object" == typeof e && (i = e),
                "function" == typeof t && t(i)
            })
        }) : this.isIphone && this.judgeVer("<", 540) || this.isIpad && this.judgeVer("<", 521) || this.isAphone && this.judgeVer("<", 554) ? this.invokerUse("showShareMenus", {
            param: i
        }) : (this.isIphone && this.judgeVer(">=", 540) || this.isAphone && this.judgeVer(">=", 554) || this.isIpad && this.judgeVer(">=", 521)) && this.setupWebViewJavascriptBridge(function(e) {
            e.callHandler("showShareMenus", i,
            function(e) {}),
            e.registerHandler("showShareMenusCallback",
            function(e) {
                var i;
                "string" == typeof e ? i = JSON.parse(e) : "object" == typeof e && (i = e),
                "function" == typeof t && t(i)
            })
        })
    },
    getDeviceInfo: function(t) {
        this.isIphone && this.isGlobal ? this.setupWebViewJavascriptBridge(function(e) {
            e.callHandler("getDeviceInfo", {},
            function(e) {
                var i;
                "string" == typeof e ? i = JSON.parse(e) : "object" == typeof e && (i = e),
                200 == i.code ? t(i.data) : t("")
            })
        }) : this.isIphone && this.judgeVer("<", 540) || this.isIpad && this.judgeVer("<", 521) || this.isAphone && this.judgeVer("<", 554) ? this.invokerUse("getDeviceInfo", {
            onsuccess: t
        }) : (this.isIphone && this.judgeVer(">=", 540) || this.isAphone && this.judgeVer(">=", 554) || this.isIpad && this.judgeVer(">=", 521)) && this.setupWebViewJavascriptBridge(function(e) {
            e.callHandler("getDeviceInfo", {},
            function(e) {
                var i;
                "string" == typeof e ? i = JSON.parse(e) : "object" == typeof e && (i = e),
                200 == i.code ? t(i.data) : t("")
            })
        })
    },
    closeWebView: function(i) {
        this.isIphone && this.isGlobal ? this.setupWebViewJavascriptBridge(function(e) {
            e.callHandler("closeWebView", {},
            function(e) {
                i && i(e)
            })
        }) : this.isIphone && this.judgeVer("<", 540) || this.isIpad && this.judgeVer("<", 521) || this.isAphone && this.judgeVer("<", 554) ? this.invokerUse("finish", {
            onsuccess: i
        }) : (this.isIphone && this.judgeVer(">=", 540) || this.isAphone && this.judgeVer(">=", 554) || this.isIpad && this.judgeVer(">=", 521)) && this.setupWebViewJavascriptBridge(function(e) {
            e.callHandler("closeWebView", {},
            function(e) {
                i && i(e)
            })
        })
    },
    jumpOtherApp: function(i, t) {
        if (this.isIphone && this.isGlobal) return i.jumpurl && (i.destinationUrl = i.jumpurl),
        i.downloadurl && (i.downloadUrl = i.downloadurl),
        void this.setupWebViewJavascriptBridge(function(e) {
            e.callHandler("jumpOtherApp", i,
            function(e) {
                "function" == typeof t && t(e)
            })
        });
        this.isIphone && this.judgeVer("<", 540) || this.isIpad && this.judgeVer("<", 521) || this.isAphone && this.judgeVer("<", 554) ? this.invokerUse("jumpOtherApp", {
            param: i
        }) : (this.isIphone && this.judgeVer(">=", 540) || this.isAphone && this.judgeVer(">=", 554) || this.isIpad && this.judgeVer(">=", 521)) && (i.jumpurl && (i.destinationUrl = i.jumpurl), i.downloadurl && (i.downloadUrl = i.downloadurl), this.setupWebViewJavascriptBridge(function(e) {
            e.callHandler("jumpOtherApp", i,
            function(e) {
                "function" == typeof t && t(e)
            })
        }))
    },
    userCheckSucc: function(i, t) {
        this.isIphone && this.isGlobal ? this.setupWebViewJavascriptBridge(function(e) {
            e.callHandler("userCheckSucc", i,
            function(e) {
                "function" == typeof t && t(e)
            })
        }) : this.isIphone && this.judgeVer("<", 540) || this.isIpad && this.judgeVer("<", 521) || this.isAphone && this.judgeVer("<", 554) ? this.invokerUse("userCheckSucc", {
            param: i
        }) : (this.isIphone && this.judgeVer(">=", 540) || this.isAphone && this.judgeVer(">=", 554) || this.isIpad && this.judgeVer(">=", 521)) && this.setupWebViewJavascriptBridge(function(e) {
            e.callHandler("userCheckSucc", i,
            function(e) {
                "function" == typeof t && t(e)
            })
        })
    },
    sendToClipboard: function(i, t) {
        this.isIphone && this.isGlobal ? this.setupWebViewJavascriptBridge(function(e) {
            e.callHandler("sendToClipboard", i,
            function(e) {
                "function" == typeof t && t(e)
            })
        }) : this.isIphone && this.judgeVer("<", 540) || this.isIpad && this.judgeVer("<", 521) || this.isAphone && this.judgeVer("<", 554) ? this.invokerUse("sendToClipboard", {
            param: i
        }) : (this.isIphone && this.judgeVer(">=", 540) || this.isAphone && this.judgeVer(">=", 554) || this.isIpad && this.judgeVer(">=", 521)) && this.setupWebViewJavascriptBridge(function(e) {
            e.callHandler("sendToClipboard", i,
            function(e) {
                "function" == typeof t && t(e)
            })
        })
    },
    feedback: function(i, t) {
        this.isIphone && this.isGlobal ? this.setupWebViewJavascriptBridge(function(e) {
            e.callHandler("feedback", i,
            function(e) {
                "function" == typeof t && t(e)
            })
        }) : this.isIphone && this.judgeVer("<", 540) || this.isIpad && this.judgeVer("<", 521) || this.isAphone && this.judgeVer("<", 554) ? this.invokerUse("feedback", {
            param: i
        }) : (this.isIphone && this.judgeVer(">=", 540) || this.isAphone && this.judgeVer(">=", 554) || this.isIpad && this.judgeVer(">=", 521)) && this.setupWebViewJavascriptBridge(function(e) {
            e.callHandler("feedback", i,
            function(e) {
                "function" == typeof t && t(e)
            })
        })
    },
    setParams: function(i) {
        this.isIphone && this.isGlobal ? this.setupWebViewJavascriptBridge(function(e) {
            e.callHandler("setParams", i,
            function(e) {})
        }) : this.isIphone && this.judgeVer("<", 540) || this.isIpad && this.judgeVer("<", 521) || this.isAphone && this.judgeVer("<", 554) ? this.invokerUse("setParams", {
            param: i
        }) : (this.isIphone && this.judgeVer(">=", 540) || this.isAphone && this.judgeVer(">=", 554) || this.isIpad && this.judgeVer(">=", 521)) && this.setupWebViewJavascriptBridge(function(e) {
            e.callHandler("setParams", i,
            function(e) {})
        })
    },
    getSMSNumber: function(i) {
        this.isIphone && this.judgeVer("<", 540) || this.isIpad && this.judgeVer("<", 521) || this.isAphone && this.judgeVer("<", 554) ? this.invokerUse("getSMSNumber", {
            param: i
        }) : (this.isIphone && this.judgeVer(">=", 540) || this.isAphone && this.judgeVer(">=", 554) || this.isIpad && this.judgeVer(">=", 521)) && this.setupWebViewJavascriptBridge(function(e) {
            e.callHandler("getSMSNumber", i,
            function(e) {})
        })
    },
    getSMSCode: function(i) {
        this.isIphone && this.judgeVer("<", 540) || this.isIpad && this.judgeVer("<", 521) || this.isAphone && this.judgeVer("<", 554) ? this.invokerUse("getSMSCode", {
            param: i
        }) : (this.isIphone && this.judgeVer(">=", 540) || this.isAphone && this.judgeVer(">=", 554) || this.isIpad && this.judgeVer(">=", 521)) && this.setupWebViewJavascriptBridge(function(e) {
            e.callHandler("getSMSCode", i,
            function(e) {})
        })
    },
    isUnicomFreeOrdered: function(i) {
        this.isIphone && this.judgeVer("<", 540) || this.isIpad && this.judgeVer("<", 521) || this.isAphone && this.judgeVer("<", 554) ? this.invokerUse("isUnicomFreeOrdered", {
            onsuccess: i
        }) : (this.isIphone && this.judgeVer(">=", 540) || this.isAphone && this.judgeVer(">=", 554) || this.isIpad && this.judgeVer(">=", 521)) && this.setupWebViewJavascriptBridge(function(e) {
            e.callHandler("isUnicomFreeOrdered", {},
            function(e) {
                "function" == typeof i && i(e)
            })
        })
    },
    changeVideo: function(i, t) {
        "" != i.sid && "undefined" != i.sid || (i.sid = 0),
        "" != i.videoId && "undefined" != i.videoId || (i.videoId = 0),
        "" != i.cameraId && "undefined" != i.cameraId || (i.cameraId = 0),
        "" != i.cameraid && "undefined" != i.cameraid || (i.cameraid = 0),
        "" != i.type && "undefined" != i.type || (i.type = 1),
        "" != i.category && "undefined" != i.category || (i.category = "liveshow"),
        this.isIphone && this.isGlobal ? this.setupWebViewJavascriptBridge(function(e) {
            e.callHandler("changeVideo", i,
            function(e) {
                "function" == typeof t && t(e)
            })
        }) : this.isIphone && this.judgeVer("<", 540) || this.isIpad && this.judgeVer("<", 521) || this.isAphone && this.judgeVer("<", 554) ? this.invokerUse("changeVideo", {
            param: i
        }) : (this.isIphone && this.judgeVer(">=", 540) || this.isAphone && this.judgeVer(">=", 554) || this.isIpad && this.judgeVer(">=", 521)) && this.setupWebViewJavascriptBridge(function(e) {
            e.callHandler("changeVideo", i,
            function(e) {
                "function" == typeof t && t(e)
            })
        })
    },
    jumpPage: function(i, t) {
        if (this.isIphone && this.isGlobal) return i.url && (i.destinationUrl = i.url),
        i.title && (i.pageTitle = i.title),
        i.type && (i.openType = i.type),
        void this.setupWebViewJavascriptBridge(function(e) {
            e.callHandler("jumpPage", i,
            function(e) {
                "function" == typeof t && t(e)
            })
        });
        if (this.isMPWebview) try { - 1 < i.url.indexOf("pages/") && -1 == i.url.indexOf("http") ? wx.miniProgram.navigateTo({
                url: i.url
            }) : location.href = i.url
        } catch(e) {
            console.log('<script src="https://res.wx.qq.com/open/js/jweixin-1.4.0.js"><\/script>'),
            console.log("小程序webview环境需要引入微信sdk比如以上js,具体报错如下"),
            console.log(e)
        } else this.isIphone && this.judgeVer("<", 540) || this.isIpad && this.judgeVer("<", 521) || this.isAphone && this.judgeVer("<", 554) ? this.invokerUse("jumpPage", {
            param: i
        }) : (this.isIphone && this.judgeVer(">=", 540) || this.isAphone && this.judgeVer(">=", 554) || this.isIpad && this.judgeVer(">=", 521)) && (i.url && (i.destinationUrl = i.url), i.title && (i.pageTitle = i.title), i.type && (i.openType = i.type), this.setupWebViewJavascriptBridge(function(e) {
            e.callHandler("jumpPage", i,
            function(e) {
                "function" == typeof t && t(e)
            })
        }))
    },
    openBrowser: function(i, t) {
        if (this.isIphone && this.isGlobal) return i.url && (i.destinationUrl = i.url),
        void this.setupWebViewJavascriptBridge(function(e) {
            e.callHandler("openBrowser", i,
            function(e) {
                "function" == typeof t && t(e)
            })
        }); (this.isIphone && this.judgeVer(">=", 540) || this.isAphone && this.judgeVer(">=", 554) || this.isIpad && this.judgeVer(">=", 521)) && (i.url && (i.destinationUrl = i.url), this.setupWebViewJavascriptBridge(function(e) {
            e.callHandler("openBrowser", i,
            function(e) {
                "function" == typeof t && t(e)
            })
        }))
    },
    setSession: function(i, t) {
        this.isIphone && this.isGlobal ? this.setupWebViewJavascriptBridge(function(e) {
            e.callHandler("setSession", i,
            function(e) {
                "function" == typeof t && t(e)
            })
        }) : this.isIphone && this.judgeVer("<", 540) || this.isIpad && this.judgeVer("<", 521) || this.isAphone && this.judgeVer("<", 554) ? this.invokerUse("setSession", {
            param: i
        }) : (this.isIphone && this.judgeVer(">=", 540) || this.isAphone && this.judgeVer(">=", 554) || this.isIpad && this.judgeVer(">=", 521)) && this.setupWebViewJavascriptBridge(function(e) {
            e.callHandler("setSession", i,
            function(e) {
                "function" == typeof t && t(e)
            })
        })
    },
    getSession: function(i) {
        this.isIphone && this.isGlobal ? this.setupWebViewJavascriptBridge(function(e) {
            e.callHandler("getSession", {},
            function(e) {
                "function" == typeof i && i(e)
            })
        }) : this.isIphone && this.judgeVer("<", 540) || this.isIpad && this.judgeVer("<", 521) || this.isAphone && this.judgeVer("<", 554) ? this.invokerUse("getSession", {
            onsuccess: i
        }) : (this.isIphone && this.judgeVer(">=", 540) || this.isAphone && this.judgeVer(">=", 554) || this.isIpad && this.judgeVer(">=", 521)) && this.setupWebViewJavascriptBridge(function(e) {
            e.callHandler("getSession", {},
            function(e) {
                "function" == typeof i && i(e)
            })
        })
    },
    getIap: function(i, t) {
        if (this.isIphone && this.isGlobal) return "" != i.videoId && "undefined" != i.videoId || (i.videoId = 1),
        "" != i.iapType && "undefined" != i.iapType || (i.iapType = "VIPOnly"),
        "undefined" == i.sourceType && (i.sourceType = ""),
        i.pageUrl = i.url || "",
        void this.setupWebViewJavascriptBridge(function(e) {
            e.callHandler("getIap", i,
            function(e) {
                "function" == typeof t && t(e)
            })
        });
        var e;
        this.isIphone && this.judgeVer("<", 540) || this.isIpad && this.judgeVer("<", 521) ? ("" != i.videoId && "undefined" != i.videoId || (i.videoId = 1), "" != i.iapType && "undefined" != i.iapType || (i.iapType = "VIPOnly"), i.payUrl = i.url || "", this.invokerUse("getIap", {
            param: i
        })) : this.isIphone && this.judgeVer(">=", 540) || this.isIpad && this.judgeVer(">=", 521) ? ("" != i.videoId && "undefined" != i.videoId || (i.videoId = 1), "" != i.iapType && "undefined" != i.iapType || (i.iapType = "VIPOnly"), "undefined" == i.sourceType && (i.sourceType = ""), i.pageUrl = i.url || "", this.setupWebViewJavascriptBridge(function(e) {
            e.callHandler("getIap", i,
            function(e) {
                "function" == typeof t && t(e)
            })
        })) : this.isAphone && this.judgeVer(">=", 554) ? (i.url && (i.payUrl = i.url), this.setupWebViewJavascriptBridge(function(e) {
            e.callHandler("getIap", i,
            function(e) {
                "function" == typeof t && t(e)
            })
        })) : this.isAphone && this.judgeVer("<", 554) && (i.url && (i.payUrl = i.url), e = JSON.stringify(i), window.client.getIap(this.judgeVer("<", 500) ? [e] : e))
    },
    openCashier: function(e) {
        var i;
        if (e && e.url ? i = e.url: (this.isAphone && (i = "https://app.hitv.com/pay/aphone/index.html"), this.isIphone && (i = "https://app.hitv.com/pay/iphone/index.html"), this.isIpad && (i = "https://app.hitv.com/pay/ipad/index.html")), "object" == typeof e) {
            var t, s = [];
            for (t in e)"url" != t && s.push(t + "=" + e[t]);
            i = i + "?" + s.join("&")
        }
        this.getIap({
            url: i,
            videoId: 1,
            iapType: "VIPOnly"
        })
    },
    updateUserInfo: function() {
        if (this.isAphone && this.judgeVer(">=", 554)) this.setupWebViewJavascriptBridge(function(e) {
            e.callHandler("updateUserInfo", {},
            function(e) {})
        });
        else if (this.isAphone && this.judgeVer("<", 554)) try {
            window.client.updateUserInfo()
        } catch(e) {}
    },
    getMobileOrderStatus: function(i) {
        if (this.isAphone && this.judgeVer(">=", 554)) this.setupWebViewJavascriptBridge(function(e) {
            e.callHandler("getMobileOrderStatus", i,
            function(e) {})
        });
        else if (this.isAphone && this.judgeVer("<", 554)) try {
            window.client.getMobileOrderStatus([JSON.stringify(i)])
        } catch(e) {}
    },
    payWithWeChat: function(i, t) {
        this.isIphone && this.isGlobal ? this.setupWebViewJavascriptBridge(function(e) {
            e.callHandler("payWithWeChat", i,
            function(e) {
                "function" == typeof t && t(e)
            })
        }) : this.isIpad && this.judgeVer("<", 521) ? this.invokerUse("getIap", {
            param: i
        }) : this.isIphone && this.judgeVer(">=", 553) || this.isIpad && this.judgeVer(">=", 521) ? this.setupWebViewJavascriptBridge(function(e) {
            e.callHandler("payWithWeChat", i,
            function(e) {
                "function" == typeof t && t(e)
            })
        }) : "function" == typeof t && t("")
    },
    payResultCallBack: function(i) {
        this.isIphone && this.isGlobal ? this.setupWebViewJavascriptBridge(function(e) {
            e.registerHandler("payResultCallBack",
            function(e) {
                "function" == typeof i && i(e)
            })
        }) : this.isIpad && this.judgeVer("<", 521) ? this.invokerUse("payResultCallBack", {
            onsuccess: i
        }) : this.isIphone && this.judgeVer(">=", 553) || this.isIpad && this.judgeVer(">=", 521) ? this.setupWebViewJavascriptBridge(function(e) {
            e.registerHandler("payResultCallBack",
            function(e) {
                "function" == typeof i && i(e)
            })
        }) : "function" == typeof i && i("")
    },
    getPromotionProductPrice: function(i) {
        this.isIphone && this.isGlobal ? this.setupWebViewJavascriptBridge(function(e) {
            e.callHandler("getPromotionProductPrice",
            function(e) {
                "function" == typeof i && i(e.data || "")
            })
        }) : this.isIphone && this.judgeVer(">=", 570) || this.isIpad && this.judgeVer(">=", 534) ? this.setupWebViewJavascriptBridge(function(e) {
            e.callHandler("getPromotionProductPrice",
            function(e) {
                "function" == typeof i && i(e.data || "")
            })
        }) : "function" == typeof i && i("")
    },
    backDoor: function() {
        this.setupWebViewJavascriptBridge(function(e) {
            e.callHandler("backDoor",
            function(e) {})
        })
    },
    jumpController: function(i, t) {
        this.setupWebViewJavascriptBridge(function(e) {
            e.callHandler("jumpController", i,
            function(e) {
                "function" == typeof t && t(e)
            })
        })
    },
    IAPAuth: function(i, t) {
        this.setupWebViewJavascriptBridge(function(e) {
            e.callHandler("IAPAuth", i,
            function(e) {
                "function" == typeof t && t(e)
            }),
            e.registerHandler("IAPResult",
            function(e) {
                "function" == typeof t && t(e)
            })
        })
    },
    checkReceipt: function(i, t) {
        this.setupWebViewJavascriptBridge(function(e) {
            e.callHandler("checkReceipt", i,
            function(e) {
                "function" == typeof t && t(e)
            })
        })
    },
    showShare: function(i) {
        this.setupWebViewJavascriptBridge(function(e) {
            e.callHandler("showShare", {},
            function(e) {
                "function" == typeof i && i(e)
            })
        })
    },
    shareTo: function(i, t) {
        this.setupWebViewJavascriptBridge(function(e) {
            e.callHandler("shareTo", i,
            function(e) {}),
            e.registerHandler("showShareMenusCallback",
            function(e) {
                var i;
                "string" == typeof e ? i = JSON.parse(e) : "object" == typeof e && (i = e),
                "function" == typeof t && t(i)
            })
        })
    },
    refreshPage: function(e, i) {
        this.callhandler("refreshPage", e, i)
    },
    openSettingPage: function(e) {
        this.callhandler("openSettingPage", {},
        e)
    },
    onUserCaptureScreen: function(i) {
        this.setupWebViewJavascriptBridge(function(e) {
            e.callHandler("onUserCaptureScreen", i,
            function(e) {})
        })
    },
    isInstallCMBAPP: function(t) {
        this.setupWebViewJavascriptBridge(function(e) {
            e.callHandler("isInstallCMBAPP", {},
            function(e) {
                var i;
                "string" == typeof e ? i = JSON.parse(e) : "object" == typeof e && (i = e),
                "function" == typeof t && t(i)
            })
        })
    },
    reportLoadTime: function(e, i) {
        this.callhandler("reportLoadTime", e, i)
    },
    openWXApplet: function(e, i) {
        this.callhandler("openWXApplet", e, i)
    },
    postBigData: function(e, i) {
        this.callhandler("postBigData", e, i)
    },
    jumpMPPay: function(e) {
        var i;
        this.isWeixin && (i = wx);
        e = this.objToQueryStr(e);
        i.miniProgram.navigateTo({
            url: "/pages/paycommon/index?" + e
        })
    },
    jumpMPContinuePay: function(e) {
        var i;
        this.isWeixin && (i = wx);
        e = this.objToQueryStr(e);
        i.miniProgram.navigateTo({
            url: "/pages/sign/index?" + e
        })
    },
    objToQueryStr: function(e) {
        var i, t = "";
        for (i in e) {
            var s = void 0 !== e[i] ? e[i] : "";
            t += "&" + i + "=" + encodeURIComponent(s)
        }
        return t = t ? t.substring(1) : "",
        console.log("objToQueryStr", t),
        t
    },
    callhandler: function(i, t, s) {
        this.setupWebViewJavascriptBridge(function(e) {
            e.callHandler(i, t, s)
        })
    },
    registerhandler: function(i, e, t) {
        this.setupWebViewJavascriptBridge(function(e) {
            e.registerHandler(i,
            function(e) {
                t(e)
            })
        })
    },
    callmethod: function(i, t, s) {
        this.setupWebViewJavascriptBridge(function(e) {
            e.callHandler(i, t,
            function(e) {
                var i;
                console.log("response", e),
                "string" == typeof e ? i = JSON.parse(e) : "object" == typeof e && (i = e),
                s(i)
            })
        })
    }
};
"undefined" != typeof module && module.exports ? module.exports = Api: "function" == typeof define && define.amd ? define(function() {
    return Api
}) : window.MgtvApi = window.ImgotvApi = Api;