! function(e) {
    function t(r) {
        if (n[r]) return n[r].exports;
        var o = n[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(o.exports, o, o.exports, t), o.l = !0, o.exports
    }
    var n = {};
    t.m = e, t.c = n, t.d = function(e, n, r) {
        t.o(e, n) || Object.defineProperty(e, n, {
            configurable: !1,
            enumerable: !0,
            get: r
        })
    }, t.n = function(e) {
        var n = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return t.d(n, "a", n), n
    }, t.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, t.p = "", t(t.s = 3018)
}({
    10: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function(e) {
            return chrome.i18n.getMessage(e)
        }, e.exports = t.default
    },
    100: function(e, t, n) {
        var r = n(91),
            o = Math.min;
        e.exports = function(e) {
            return e > 0 ? o(r(e), 9007199254740991) : 0
        }
    },
    101: function(e, t, n) {
        var r = n(32),
            o = n(203),
            i = n(95),
            a = n(92)("IE_PROTO"),
            u = function() {},
            s = function() {
                var e, t = n(96)("iframe"),
                    r = i.length;
                for (t.style.display = "none", n(142).appendChild(t), t.src = "javascript:", e = t.contentWindow.document, e.open(), e.write("<script>document.F=Object<\/script>"), e.close(), s = e.F; r--;) delete s.prototype[i[r]];
                return s()
            };
        e.exports = Object.create || function(e, t) {
            var n;
            return null !== e ? (u.prototype = r(e), n = new u, u.prototype = null, n[a] = e) : n = s(), void 0 === t ? n : o(n, t)
        }
    },
    104: function(e, t) {
        e.exports = function(e) {
            if ("function" != typeof e) throw TypeError(e + " is not a function!");
            return e
        }
    },
    105: function(e, t) {
        t.f = Object.getOwnPropertySymbols
    },
    1173: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = "undefined" != typeof chrome ? chrome : void 0 !== r ? r : {};
        t.default = r, e.exports = t.default
    },
    1212: function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function o() {
            function e(e) {
                chrome.windows.get(e, {
                    populate: !1,
                    windowTypes: ["popup"]
                }, function(e) {
                    return !!e
                })
            }

            function t() {
                return new f.default(function(e, t) {
                    function n(n) {
                        n && n.length > 0 ? e(n[0]) : t(new Error("ERR_NO_ACTIVE_TAB"))
                    }
                    p.default.tabs.query({
                        active: !0,
                        lastFocusedWindow: !0
                    }, n)
                })
            }

            function n() {
                return new f.default(function(e, t) {
                    function n(n) {
                        n.length > 0 ? e(n[0].id) : t(new Error("ERR_NO_ACTIVE_TAB"))
                    }
                    p.default.tabs.query({
                        active: !0,
                        lastFocusedWindow: !0
                    }, n)
                })
            }

            function r(e) {
                return new f.default(function(t, n) {
                    p.default.runtime.onConnect.addListener(function(r) {
                        e === r.name ? t(r) : n("No port")
                    })
                })
            }

            function o(e, t) {
                return new f.default(function(t, n) {
                    try {
                        p.default.storage.local.set(e, function(e) {
                            t({
                                res: "ok",
                                err: null
                            })
                        })
                    } catch (e) {
                        n({
                            res: "ko",
                            err: e
                        })
                    }
                })
            }

            function i(e, t) {
                return new f.default(function(t, n) {
                    try {
                        p.default.storage.local.get(e, function(e) {
                            t({
                                res: e,
                                err: null
                            })
                        })
                    } catch (e) {
                        n({
                            res: "ko",
                            err: e
                        })
                    }
                })
            }

            function a(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 500,
                    n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                    r = void 0;
                return function() {
                    var o = this,
                        i = arguments,
                        a = function() {
                            r = null, n || e.apply(o, i)
                        },
                        u = n && !r;
                    clearTimeout(r), r = setTimeout(a, t), u && e.apply(o, i)
                }
            }

            function s(e) {
                if (void 0 === e) return 1;
                var t = 1;
                return t += e > 0 ? .1 * e : .2 * e
            }

            function l(e, t) {
                var n = new URL("https://tuwz0i1tl0.execute-api.us-east-1.amazonaws.com/prod/incr-tts"),
                    r = {
                        l: e,
                        c: t
                    };
                return n.search = new URLSearchParams(r), fetch(n, {
                    method: "GET",
                    mode: "cors",
                    cache: "no-cache",
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    }
                }).then(function(e) {
                    var t = e.headers.get("content-type");
                    return e.ok ? e.json().then(function(e) {
                        return e
                    }) : t && t.includes("application/json") ? e.json().then(function(e) {
                        throw e && e.errorCode && "ERR_CONVERT_LIMIT" === e.errorCode ? new Error("ERR_TTS_LIMIT") : e && e.errorCode && 1005 == e.errorCode ? new Error(e.errorCode) : new Error("ERR_UNKOWN")
                    }) : void 0
                }).catch(function(e) {
                    throw e
                })
            }

            function d(e) {
                return new f.default(function(t) {
                    p.default.runtime.sendMessage(e), t()
                })
            }

            function h(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "all";
                return e ? (msg = {
                    fn: "getTextsFromPage",
                    op: t,
                    chromeAsync: !0
                }, new f.default(function(t) {
                    function n(e) {
                        t(e)
                    }
                    chrome.tabs.sendMessage(e, msg, null, responseCallback = n)
                })) : f.default.reject(new Error("ERR_NO_TABID"))
            }

            function m(e) {
                var t = e.replace(/'/g, "\\'");
                return t = t.replace(/"/g, '\\"')
            }

            function g(e) {
                var t = e.trim();
                return t = t.replace(/(?:\r\n|\r)/g, "\\n"), t = t.replace(/(?:\n{2,})/g, "\\n"), t = t.replace(/(?<!([\\?\\}\\{\\.\\;\\,\\!\\,]))\n/g, ". "), t = t.replace(/(?:\n)/g, " ")
            }

            function v(e) {
                return E(e)
            }

            function y(e) {
                var t = v(e);
                return t = g(t), t = m(t)
            }

            function b(e) {
                return void 0 === e ? e = 0 : e++, e
            }

            function E(e) {
                var t = e.replace(/<br\s*\/?>/gi, ". ");
                return t = t.replace(/[\u200c|\u200b|\u200d|\ufeff]/gi, " "), t = t.replace(/[\u0000|\u001b|\u001c|\u001f|\ufe4f|\u005f|\uff3f]/g, ""), t = t.replace(/[\u2018|\u2019|\u2039|\u203A]/g, "'"), t = t.replace(/[\u201c|\u201d|\u00ab|\u00bb]/g, '"'), t = t.replace(/[\uff01]/g, "!"), t = t.replace(/[\uff1f]/g, "?"), t = t.replace(/[\uff0c]/g, ","), t = t.replace(/[\uff1a]/g, ":"), t = t.replace(/[\uff1b]/g, ";"), t = t.replace(/[\u2026]/g, "."), t = t.replace(/[\u2014|\u2015]/g, "-"), t = t.replace(/[\u005f|\uff3f]/g, " "), t = t.replace(/(^|\s*)(&c\.|&c|etc)(\s|\\u201d|\\u2019|\'|\"|\;|\,|\?|\!|$)/g, "$1etc.$3")
            }

            function w(e) {
                return e.map(function(e) {
                    return "<p>" + y(e) + "</p>"
                })
            }

            function T(e) {
                return w(e).join("")
            }

            function x() {
                var e = {
                    os: "non-mac"
                };
                return -1 !== window.navigator.platform.toUpperCase().indexOf("MAC") && (e.os = "mac"), e
            }

            function I(e) {
                var t = new URL("https://tuwz0i1tl0.execute-api.us-east-1.amazonaws.com/prod/use-ext"),
                    n = {
                        o: e.origin,
                        h: e.href
                    };
                return t.search = new URLSearchParams(n), fetch(t, {
                    method: "POST",
                    mode: "cors",
                    cache: "no-cache",
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    }
                }).then(function(e) {
                    return f.default.resolve()
                }).catch(function(e) {
                    return f.default.resolve()
                })
            }
            var S = function() {
                var e = (0, c.default)(u.default.mark(function e(t) {
                    return u.default.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", _.default.checkPDF().then(function(e) {
                                    return new f.default(function(e) {
                                        chrome.tabs.executeScript(t, {
                                            code: "if (!window.isDocTypeChecked) {let resp = null;if (location.hostname == 'docs.google.com') {if (document.getElementsByClassName('kix-appview-editor').length){resp = 'google doc';}else if (document.getElementsByClassName('.drive-viewer-paginated-scrollable').length){ resp = 'google drive doc';}else {resp = 'html';}} else if (location.hostname == 'drive.google.com') {if (document.getElementsByClassName('drive-viewer-paginated-scrollable').length){resp = 'google drive doc';}else{resp = 'google drive preview';}}else {resp = 'html';}window.isDocTypeChecked = true;window.docType = resp;resp;} else { window.docType; }"
                                        }, function(t) {
                                            chrome.runtime.lastError && e(null), e(t ? t[0] : null)
                                        })
                                    })
                                }).catch(function(e) {}));
                            case 1:
                            case "end":
                                return e.stop()
                        }
                    }, e, this)
                }));
                return function(t) {
                    return e.apply(this, arguments)
                }
            }();
            this.getActiveTab = t, this.getActiveTabId = n, this.listenForPortConnection = r, this.writeToLocalStorage = o, this.readFromLocalStorage = i, this.debounce = a, this.calculateRate = s, this.increaseTtsUsage = l, this.runtimeSendMessage = d, this.getTextsFromPage = h, this.replaceLineBreakWithPeriod = g, this.excapeQuotes = m, this.processText = v, this.processTextForConvert = y, this.addParagraphTagAndCleanUpText = w, this.combineTextForConvertIntoAString = T, this.getOS = x, this.recordExtUsage = I, this.isWindowValid = e, this.getDocType = S, this.setFunctionId = b
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = n(67),
            a = (r(i), n(21)),
            u = r(a),
            s = n(22),
            c = r(s),
            l = n(18),
            f = r(l),
            d = n(1173),
            p = r(d),
            h = n(1334),
            _ = r(h),
            m = new o;
        t.default = m, e.exports = t.default
    },
    123: function(e, t, n) {
        var r = n(61),
            o = n(23)("toStringTag"),
            i = "Arguments" == r(function() {
                return arguments
            }()),
            a = function(e, t) {
                try {
                    return e[t]
                } catch (e) {}
            };
        e.exports = function(e) {
            var t, n, u;
            return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof(n = a(t = Object(e), o)) ? n : i ? r(t) : "Object" == (u = r(t)) && "function" == typeof t.callee ? "Arguments" : u
        }
    },
    124: function(e, t, n) {
        var r = n(123),
            o = n(23)("iterator"),
            i = n(52);
        e.exports = n(15).getIteratorMethod = function(e) {
            if (void 0 != e) return e[o] || e["@@iterator"] || i[r(e)]
        }
    },
    126: function(e, t, n) {
        "use strict";
        t.__esModule = !0, t.default = function(e, t) {
            var n = {};
            for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
            return n
        }
    },
    127: function(e, t, n) {
        "use strict";
        var r = n(80),
            o = n(28),
            i = n(138),
            a = n(38),
            u = n(41),
            s = n(52),
            c = n(215),
            l = n(73),
            f = n(144),
            d = n(23)("iterator"),
            p = !([].keys && "next" in [].keys()),
            h = function() {
                return this
            };
        e.exports = function(e, t, n, _, m, g, v) {
            c(n, t, _);
            var y, b, E, w = function(e) {
                    if (!p && e in S) return S[e];
                    switch (e) {
                        case "keys":
                        case "values":
                            return function() {
                                return new n(this, e)
                            }
                    }
                    return function() {
                        return new n(this, e)
                    }
                },
                T = t + " Iterator",
                x = "values" == m,
                I = !1,
                S = e.prototype,
                O = S[d] || S["@@iterator"] || m && S[m],
                A = O || w(m),
                k = m ? x ? w("entries") : A : void 0,
                R = "Array" == t ? S.entries || O : O;
            if (R && (E = f(R.call(new e))) !== Object.prototype && (l(E, T, !0), r || u(E, d) || a(E, d, h)), x && O && "values" !== O.name && (I = !0, A = function() {
                    return O.call(this)
                }), r && !v || !p && !I && S[d] || a(S, d, A), s[t] = A, s[T] = h, m)
                if (y = {
                        values: x ? A : w("values"),
                        keys: g ? A : w("keys"),
                        entries: k
                    }, v)
                    for (b in y) b in S || i(S, b, y[b]);
                else o(o.P + o.F * (p || I), t, y);
            return y
        }
    },
    128: function(e, t, n) {
        e.exports = {
            default: n(329),
            __esModule: !0
        }
    },
    1306: function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function o() {
            function e(e) {
                var t = w.default.activeTabId ? w.default.activeTabId : q.beingReadTabId;
                chrome.tabs.sendMessage(t, {
                    type: "show_inject_pop",
                    event: {
                        editable: !1,
                        frameId: 0,
                        menuItemId: "popupEjoy",
                        pageUrl: e.event.pageUrl,
                        parentMenuItemId: "ejoy_context_menu",
                        selectionText: e.event.selectionText
                    }
                })
            }

            function t() {
                var e = w.default.activeTabId ? w.default.activeTabId : q.beingReadTabId;
                chrome.tabs.sendMessage(e, {
                    type: "close_popup_translate"
                })
            }

            function n(e) {
                var t = this;
                return new l.default(function() {
                    var n = (0, s.default)(a.default.mark(function n(r, o) {
                        var i;
                        return a.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if (!q.isFirstRead) {
                                        t.next = 9;
                                        break
                                    }
                                    if ("google drive preview warning" === e) {
                                        t.next = 6;
                                        break
                                    }
                                    return t.next = 4, h.default.getDocType(q.beingReadTabId);
                                case 4:
                                    i = t.sent, q.docType = i;
                                case 6:
                                    q.shouldCheckForPreviewMode && "google drive preview" === q.docType ? o(new Error("ERR_GOOGLE_DRIVE_PREVIEW")) : r(), t.next = 10;
                                    break;
                                case 9:
                                    r();
                                case 10:
                                case "end":
                                    return t.stop()
                            }
                        }, n, t)
                    }));
                    return function(e, t) {
                        return n.apply(this, arguments)
                    }
                }())
            }

            function r(e) {
                return new l.default(function(e) {
                    q.tts && q.tts.pause(!1), e()
                }).then(function() {
                    "custom" === m.default.voices[e][b.default.settings[b.default.settings.voiceType + "Voice"]].voice.voiceURI ? q.tts = O.onlineTts : q.tts = O.freeTts
                }).catch(function(e) {})
            }

            function o(e) {
                return !!q.asyncFunctions.includes(e)
            }

            function i() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                return new l.default(function(n, r) {
                    e && e.tab && "google drive preview warning" !== t ? q.isFirstRead ? (q.beingReadTabId = e.tab.id, n()) : e.tab.id !== q.beingReadTabId ? r(new Error("READ_NEW")) : n() : n()
                })
            }

            function u(e) {
                return new l.default(function(t) {
                    e && e.tab && e.tab.id === q.tabIdToReadAfterSelectionToPageEnd || "after-selection-to-page-end" === q.readOption && (q.readOption = "all"), q.tabIdToReadAfterSelectionToPageEnd = -1, t()
                }).catch(function(e) {})
            }

            function c() {
                return new l.default(function(e) {
                    null === q.tts ? (r(b.default.settings.voiceType), e()) : e()
                }).then(function() {
                    var e = m.default.voices[b.default.settings.voiceType][b.default.settings[b.default.settings.voiceType + "Voice"]],
                        t = e.language.split("-")[0],
                        n = S.default.previewTexts[t];
                    n || (n = S.default.previewTexts.en), q.tts.play(n, null, function() {}, e.language, e.keyWatson)
                }).catch(function(e) {})
            }

            function f(e, t, n) {
                "ERR_INVALID_PLAY_ID" === (e = e.message) || ("READ_NEW" === e ? (C(), z(null, t, null)) : "ERR_PDF" === e || ("ERR_NO_TEXT" === e ? N(n) : "ERR_NOT_READABLE" === e ? C() : "ERR_GOOGLE_DRIVE_PREVIEW" === e || (1005 == e ? R() : C())))
            }

            function p(e) {
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                return q.isFirstRead = !1, e === q.playId ? E() : l.default.reject(new Error("ERR_INVALID_PLAY_ID"))
            }

            function _() {
                return void 0 === q.playId ? q.playId = 0 : q.playId++, q.playId
            }

            function g(e) {
                "start" === e.type ? (q.isFirstRead = !1, y("reading"), D(), chrome.tabs.sendMessage(w.default.activeTabId, {
                    message: "readerOnPlay",
                    index: q.currReadIndex,
                    readProgress: q.readProgress,
                    beingReadTabId: q.beingReadTabId,
                    activeTabId: w.default.activeTabId,
                    texts: S.default.textsForTts
                })) : "end" === e.type ? (y("pause"), T()) : "pause" === e.type ? (y("pause"), chrome.tabs.sendMessage(w.default.activeTabId, {
                    message: "readerOnPause"
                })) : "loading" === e.type ? (y("loading"), chrome.tabs.sendMessage(w.default.activeTabId, {
                    message: "readerOnLoading"
                })) : "word" === e.type ? q.beingReadTabId > 0 && q.beingReadTabId === w.default.activeTabId && chrome.tabs.sendMessage(q.beingReadTabId, {
                    fn: "setWordForMainTextAndCC",
                    sentenceIndex: q.currReadIndex,
                    word: e.word,
                    wordIndex: e.wordIndex
                }, function(t) {
                    chrome.tabs.sendMessage(q.beingReadTabId, {
                        fn: "highlightWord",
                        sentenceIndex: q.currReadIndex,
                        wordIndex: e.wordIndex
                    })
                }) : "textChunk" === e.type ? chrome.tabs.sendMessage(w.default.activeTabId, {
                    fn: "setCCText",
                    text: e.text,
                    sentenceIndex: q.currReadIndex,
                    textChunkIndex: e.textChunkIndex
                }) : "error" === e.type && f({
                    message: e.err
                })
            }

            function y(e) {
                q.readerState = e, b.default.settings.readerState = e
            }

            function E() {
                var e = S.default.textsForTts[q.currReadIndex],
                    t = m.default.voices[b.default.settings.voiceType][b.default.settings[b.default.settings.voiceType + "Voice"]];
                return q.tts.play(e, q.currReadIndex, g, t.language, t.keyWatson)
            }

            function T() {
                if (q.currReadIndex + 1 < S.default.textsForTts.length) q.currReadIndex++, z();
                else if ("all" === q.readOption || "selection-to-page-end" === q.readOption || "after-selection-to-page-end" === q.readOption) "selection-to-page-end" !== q.readOption && "after-selection-to-page-end" !== q.readOption || (q.readOption = "all"), N("next", "playNext");
                else if ("selection" === q.readOption) {
                    var e = q.beingReadTabId;
                    C(), q.readOption = "after-selection-to-page-end", q.tabIdToReadAfterSelectionToPageEnd = e
                } else C()
            }

            function I() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "next";
                return new l.default(function(t) {
                    q.beingReadTabId > 0 ? chrome.tabs.sendMessage(q.beingReadTabId, {
                        fn: "scrollToAdjacentPage",
                        direction: e
                    }, function(e) {
                        t(e)
                    }) : t("ERR")
                })
            }

            function A(e) {
                return new l.default(function(t) {
                    q.beingReadTabId > 0 ? chrome.tabs.sendMessage(q.beingReadTabId, {
                        fn: "scrollToPage",
                        pageIndex: e
                    }, function(e) {
                        t(e)
                    }) : t("ERR")
                })
            }

            function k() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                q.isFirstRead = !0, y("pause"), q.currReadIndex = e, q.beingReadTabId = null, q.tabIdToReadAfterSelectionToPageEnd = -1, q.playId = void 0, q.readOption = "all", q.tts && q.tts.clearPreloads && q.tts.clearPreloads()
            }

            function R() {
                q.tts.pause()
            }

            function C() {
                chrome.tabs.sendMessage(w.default.activeTabId, {
                    message: "readerOnStop"
                }), q.beingReadTabId > 0 && chrome.tabs.sendMessage(q.beingReadTabId, {
                    message: "readerOnStop"
                }), q.tts && q.tts.stop(), k()
            }

            function j() {
                return new l.default(function(e) {
                    q.tts && "online" === q.tts.type && q.tts.clearPreloads && q.tts.clearPreloads(), e()
                }).then(function() {
                    "reading" !== q.readerState && "loading" !== q.readerState || (q.tts.pause(!1), z())
                }).catch(function(e) {})
            }

            function P() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = (arguments.length > 1 && void 0 !== arguments[1] && arguments[1], arguments.length > 2 && void 0 !== arguments[2] && arguments[2], e ? e.number : 1);
                q.currReadIndex + t < S.default.textsForTts.length ? (q.currReadIndex += t, z()) : "selection" === q.readOption || "selection-context-menu" === q.readOption ? (q.currReadIndex = S.default.textsForTts.length - 1, z()) : (q.readOption = "all", N("next", "forward", t))
            }

            function M() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = (arguments.length > 1 && void 0 !== arguments[1] && arguments[1], arguments.length > 2 && void 0 !== arguments[2] && arguments[2], e ? e.number : 1);
                q.currReadIndex - t >= 0 ? (q.currReadIndex -= t, z()) : "selection" === q.readOption || "selection-to-page-end" === q.readOption || "after-selection-to-page-end" === q.readOption || "selection-context-menu" === q.readOption ? (q.currReadIndex = 0, z()) : (q.readOption = "all", N("prev", "backward", t))
            }

            function N() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "next",
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
                return I(e).then(function(r) {
                    "ERR" !== r ? (S.default.textsForTts = [], z({
                        op: e,
                        caller: t,
                        skipSentenceNumber: n
                    })) : (q.isFirstRead && f({
                        message: "ERR_NOT_READABLE"
                    }), "playNext" === t && C())
                }).catch(function(e) {})
            }

            function F() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                return v.default.checkPDF().then(function(t) {
                    return L(e)
                }).then(function(e) {
                    if (e && 0 === e.length) throw S.default.textsForTts = [], new Error("ERR_NO_TEXT");
                    e = e.map(function(e) {
                        return S.default.processText(e)
                    }), S.default.textsForTts = e, chrome.tabs.sendMessage(w.default.activeTabId, {
                        message: "textsToReadOnChange",
                        texts: S.default.textsForTts
                    })
                })
            }

            function L() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                return x.default.executeScriptsForTextProcessor(q.beingReadTabId, q.docType).then(function() {
                    return new l.default(function(t, n) {
                        q.beingReadTabId || n(new Error("ERR_NO_TABID")), e ? (chrome.tabs.sendMessage(q.beingReadTabId, {
                            message: "removeNRTags"
                        }), t(e)) : chrome.tabs.sendMessage(q.beingReadTabId, {
                            fn: "getTextsFromPage",
                            op: q.readOption
                        }, function(e) {
                            t(e)
                        })
                    })
                })
            }

            function D() {
                q.readProgress = (q.currReadIndex + 1) / S.default.textsForTts.length * 100
            }

            function U(e, t, n) {
                n({
                    index: q.currReadIndex,
                    readProgress: q.readProgress,
                    readerState: q.readerState
                })
            }

            function W(e, t, n) {
                n(q.readOption)
            }

            function V(e) {
                q.shouldCheckForPreviewMode = e.val
            }

            function B(e) {
                q.readOption = e
            }

            function G(e, t, n) {
                var r = e && void 0 !== e.pageIndex ? e.pageIndex : null,
                    o = e && void 0 !== e.index ? e.index : null,
                    i = e && void 0 !== e.percentage ? e.percentage : 0;
                null !== o ? isNaN(o) || (o >= 0 && o < S.default.textsForTts.length ? (R(), q.currReadIndex = o, z()) : o >= 0 && o == S.default.textsForTts.length && (R(), q.currReadIndex = o - 1, z())) : null !== r && (isNaN(r) || (R(), q.readOption = "all", H(e.pageIndex, i)))
            }

            function H(e, t) {
                return A(e).then(function(e) {
                    "ERR" !== e ? (S.default.textsForTts = [], z({
                        op: "readPage",
                        percentage: t
                    })) : (q.isFirstRead && f({
                        message: "ERR_NOT_READABLE"
                    }), C())
                }).catch(function(e) {})
            }
            var z = function() {
                    var e = (0, s.default)(a.default.mark(function e() {
                        var t, o, s, c, d, h, _ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            m = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                        return a.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (t = _ ? _.op : null, o = _ ? _.caller : null, s = _ && void 0 !== _.skipSentenceNumber ? _.skipSentenceNumber : null, c = _ && void 0 !== _.percentage ? _.percentage : null, d = q.setPlayId(), h = _ && _.texts ? _.texts : null, null !== q.tts) {
                                        e.next = 9;
                                        break
                                    }
                                    return e.next = 9, r(b.default.settings.voiceType);
                                case 9:
                                    return e.abrupt("return", u(m).then(function() {
                                        return i(m, o)
                                    }).then(function() {
                                        return n(o)
                                    }).then(function() {
                                        if (q.isFirstRead || t) {
                                            var e = w.default.activeTabId ? w.default.activeTabId : q.beingReadTabId;
                                            return chrome.tabs.sendMessage(e, {
                                                message: "readerOnLoading"
                                            }), F(h)
                                        }
                                        return l.default.resolve()
                                    }).then(function() {
                                        "prev" === t && ("backward" === o && s ? S.default.textsForTts.length - 1 - s < 0 ? q.currReadIndex = 0 : q.currReadIndex = S.default.textsForTts.length - 1 - s : q.currReadIndex = S.default.textsForTts.length - 1), "next" === t && ("forward" === o && s ? s - 1 > S.default.textsForTts.length - 1 ? q.currReadIndex = S.default.textsForTts.length - 1 : q.currReadIndex = s - 1 : q.currReadIndex = 0), "readPage" === t && (q.currReadIndex = c ? Math.floor(S.default.textsForTts.length * c) : 0), q.readProgress = (q.currReadIndex + 1) / S.default.textsForTts.length * 100
                                    }).then(function() {
                                        return p(d, t)
                                    }).catch(function(e) {
                                        f(e, m, t)
                                    }));
                                case 10:
                                case "end":
                                    return e.stop()
                            }
                        }, e, this)
                    }));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }(),
                K = function() {
                    var e = (0, s.default)(a.default.mark(function e(t, n, r) {
                        var o, i;
                        return a.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return C(), e.next = 3, h.default.getDocType();
                                case 3:
                                    return o = e.sent, i = n && n.tab.id ? n.tab.id : w.default.activeTabId, e.abrupt("return", b.default.injectWidget(i, o, !0).then(function() {
                                        t && t.readSelectionOption ? q.readOption = t.readSelectionOption : q.readOption = b.default.settings.readSelectionOption, z(t, {
                                            tab: {
                                                id: i
                                            }
                                        }, r), chrome.tabs.sendMessage(i, {
                                            fn: "hideReadIcon"
                                        })
                                    }).catch(function(e) {}));
                                case 6:
                                case "end":
                                    return e.stop()
                            }
                        }, e, this)
                    }));
                    return function(t, n, r) {
                        return e.apply(this, arguments)
                    }
                }(),
                Y = function() {
                    var e = (0, s.default)(a.default.mark(function e() {
                        var t, n;
                        return a.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0, C(), e.next = 4, h.default.getDocType();
                                case 4:
                                    return t = e.sent, n = w.default.activeTabId, e.next = 8, b.default.injectWidget(n, t, !0);
                                case 8:
                                    q.readOption = b.default.settings.readSelectionOption, z({
                                        fn: "readSelection"
                                    }, {
                                        tab: {
                                            id: n
                                        }
                                    }), chrome.tabs.sendMessage(n, {
                                        fn: "hideReadIcon"
                                    }), e.next = 15;
                                    break;
                                case 13:
                                    e.prev = 13, e.t0 = e.catch(0);
                                case 15:
                                case "end":
                                    return e.stop()
                            }
                        }, e, this, [
                            [0, 13]
                        ])
                    }));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }(),
                q = this;
            q.setDocType = n, q.tts = null, q.setTts = r, q.readerState = "pause", q.currReadIndex = 0, q.readProgress = 0, q.isFirstRead = !0, q.playId = void 0, q.shouldCheckForPreviewMode = !0, q.readOption = "all", q.play = z, q.replay = j, q.stop = C, q.pause = R, q.playNext = T, q.forward = P, q.backward = M, q.readIndex = G, q.readSelection = K, q.readSelectionWithContextMenu = Y, q.setPlayId = _, q.beingReadTabId = null, q.getReaderInfo = U, q.setShouldCheckForPreviewMode = V, q.setReadOption = B, q.preview = c, q.getReadOption = W, q.asyncFunctions = ["getReaderInfo", "getReadOption"], q.tabIdToReadAfterSelectionToPageEnd = -1, q.closePopupWhenClickPlay = t, q.showInjectPop = e,
                function() {
                    d.default.webNavigation.onCommitted.addListener(function(e) {
                        e.tabId === q.beingReadTabId && "auto_subframe" !== e.transitionType && "manual_subframe" !== e.transitionType && C()
                    }), d.default.runtime.onMessage.addListener(function(e, t, n) {
                        if (q[e.fn] && (q[e.fn](e, t, n), o(e.fn))) return !0
                    })
                }()
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = n(21),
            a = r(i),
            u = n(22),
            s = r(u),
            c = n(18),
            l = r(c),
            f = n(1173),
            d = r(f),
            p = n(1212),
            h = r(p),
            _ = n(1335),
            m = r(_),
            g = n(1334),
            v = r(g),
            y = n(1307),
            b = r(y),
            E = n(1336),
            w = r(E),
            T = n(1544),
            x = r(T),
            I = n(1545),
            S = r(I),
            O = n(1665),
            A = new o;
        t.default = A, e.exports = t.default
    },
    1307: function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function o() {
            function e() {
                chrome.storage.local.get(null, function(e) {
                    chrome.runtime.lastError, h.settings.ccMode = e && e.ccMode ? e.ccMode : "max-cc-compact", h.settings.voiceType = e && e.voiceType ? e.voiceType : "free", h.settings.freeVoice = e && e.freeVoice ? e.freeVoice : s.default.defaultFreeVoice, h.settings.premVoice = e && e.premVoice ? e.premVoice : s.default.defaultPremVoice, h.settings.plusVoice = e && e.plusVoice ? e.plusVoice : s.default.defaultPlusVoice, h.settings.preset1Voice = e && e.preset1Voice ? e.preset1Voice : s.default.defaultPremVoice, h.settings.preset2Voice = e && e.preset2Voice ? e.preset2Voice : s.default.defaultPremVoice, h.settings.beHighlighted = e && e.beHighlighted ? e.beHighlighted : ["sentence", "word"], h.settings.highlightColour = e && e.highlightColour ? e.highlightColour : "light", h.settings.readIcon = !(!e || null == e.readIcon) && e.readIcon, h.settings.isAutoScroll = !(e && "isAutoScroll" in e) || e.isAutoScroll, h.settings.isDyslexic = !!(e && "isDyslexic" in e) && e.isDyslexic, h.settings.readSelectionOption = e && e.readSelectionOption ? e.readSelectionOption : "selection-to-page-end", h.settings.showReadSelectionToPageEndOption = !e || null == e.showReadSelectionToPageEndOption || e.showReadSelectionToPageEndOption, h.settings.LimitedReadSelectionOn = !e || null == e.LimitedReadSelectionOn || e.LimitedReadSelectionOn, h.settings.LimitedReadSelectionCharAmount = e && e.LimitedReadSelectionCharAmount ? e.LimitedReadSelectionCharAmount : 10, h.settings.speed = e && e.speed ? e.speed : 0, h.settings.speedDisplay = e && e.speedDisplay ? e.speedDisplay : 500, h.settings.userInfo = e && e.userInfo ? e.userInfo : {
                        licNum: 0,
                        licCode: "0",
                        license: "0",
                        pwLicCode: "0",
                        pwLicNum: "0",
                        email: "user@naturalreaders.com"
                    }, h.settings.loggedIn = e && "loggedIn" in e ? e.loggedIn : 0, h.settings.backwardStep = h.defaultSettings.backwardStep, h.settings.forwardStep = h.defaultSettings.forwardStep, h.settings.backwardSkipNumber = e && e.backwardSkipNumber ? e.backwardSkipNumber : h.defaultSettings.backwardSkipNumber, h.settings.forwardSkipNumber = e && e.forwardSkipNumber ? e.forwardSkipNumber : h.defaultSettings.forwardSkipNumber, h.settings.returnNormalSkipTime = e && e.returnNormalSkipTime ? e.returnNormalSkipTime : h.defaultSettings.returnNormalSkipTime
                })
            }

            function t(e) {
                return !!h.asyncFunctions.includes(e)
            }

            function n(e, t, n) {
                var o = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                return _.default.canExecuteScript().then(function() {
                    return !1
                }).then(function(u) {
                    return new a.default(function(a) {
                        u ? a() : (o && l.default.beingReadTabId > 0 && e !== l.default.beingReadTabId && l.default.stop(), chrome.tabs.sendMessage(e, {
                            fn: "getHasWidget"
                        }, function(o) {
                            chrome.runtime.lastError && chrome.tabs.executeScript(e, {
                                file: "injected/nr-ext-widget/nr-ext-widget.js"
                            }, function() {
                                chrome.runtime.lastError, chrome.tabs.sendMessage(e, {
                                    message: "injectWidget"
                                }, function(e) {
                                    chrome.runtime.lastError, a()
                                }), i(e, t), r(e, t)
                            }), o && (chrome.tabs.sendMessage(e, {
                                fn: "toggleWidget",
                                toShow: n
                            }), a())
                        }))
                    })
                }).catch(function(e) {})
            }

            function r(e, t) {
                chrome.tabs.sendMessage(e, {
                    fn: "getSpeedPopup"
                }, function(n) {
                    chrome.runtime.lastError ? o(e, t) : n || o(e, t)
                })
            }

            function o(e, t) {
                chrome.tabs.executeScript(e, {
                    file: "injected/ejoy-change-speed-popup/ejoy-change-speed-popup.js"
                }, function() {
                    chrome.runtime.lastError, chrome.tabs.sendMessage(e, {
                        message: "injectSpeedPoup",
                        value: {}
                    })
                })
            }

            function i(e, t) {
                chrome.tabs.sendMessage(e, {
                    fn: "getHasIcon"
                }, function(n) {
                    chrome.runtime.lastError ? u(e, t) : n || u(e, t)
                })
            }

            function u(e, t) {
                chrome.tabs.executeScript(e, {
                    file: "assetsReader/js/core/jquery.min.js"
                }, function() {
                    chrome.runtime.lastError, chrome.tabs.executeScript(e, {
                        file: "injected/nr-ext-dom/nr-ext-text-processor/nr-ext-text-processor.js"
                    }, function() {
                        chrome.runtime.lastError, "google doc" === t ? chrome.tabs.executeScript(e, {
                            file: "injected/nr-ext-dom/nr-ext-text-processor/google-doc-utils.js"
                        }, function() {
                            chrome.runtime.lastError, chrome.tabs.executeScript(e, {
                                file: "injected/nr-ext-dom/nr-ext-selection-detector.js"
                            }, function() {
                                chrome.runtime.lastError, chrome.tabs.sendMessage(e, {
                                    message: "injectSD",
                                    value: {
                                        iconState: h.settings.readIcon,
                                        LimitedReadSelectionOn: h.settings.LimitedReadSelectionOn,
                                        LimitedReadSelectionCharAmount: h.settings.LimitedReadSelectionCharAmount
                                    }
                                })
                            })
                        }) : chrome.tabs.executeScript(e, {
                            file: "injected/nr-ext-dom/nr-ext-selection-detector.js"
                        }, function() {
                            chrome.runtime.lastError, chrome.tabs.sendMessage(e, {
                                message: "injectSD",
                                value: {
                                    iconState: h.settings.readIcon,
                                    LimitedReadSelectionOn: h.settings.LimitedReadSelectionOn,
                                    LimitedReadSelectionCharAmount: h.settings.LimitedReadSelectionCharAmount
                                }
                            })
                        })
                    })
                })
            }

            function c(e) {
                e && chrome.tabs.sendMessage(e, {
                    fn: "getHasWidget"
                }, function(t) {
                    chrome.runtime.lastError, t && chrome.tabs.sendMessage(e, {
                        fn: "setWidgetUI"
                    })
                })
            }

            function f(e, t, n) {
                var r = l.default.beingReadTabId ? l.default.beingReadTabId : p.default.activeTabId;
                "voiceType" === e.key && e.value !== h.settings.voiceType ? (l.default.setTts(e.value), l.default.replay()) : e.key.includes("Voice") && !e.key.includes("preset") && e.value !== h.settings[e.key] ? (l.default.setTts(h.settings.voiceType), l.default.replay()) : "speed" === e.key && e.value !== h.settings.speed ? l.default.replay() : "beHighlighted" === e.key ? chrome.tabs.sendMessage(r, {
                    message: "beHighlightedOnChange",
                    beHighlighted: e.value,
                    highlightColour: h.settings.highlightColour
                }) : "highlightColour" === e.key ? chrome.tabs.sendMessage(r, {
                    message: "highlightColourOnChange",
                    highlightColour: e.value,
                    oldHighlightColour: h.settings.highlightColour,
                    beHighlighted: h.settings.beHighlighted,
                    readerState: h.settings.readerState
                }) : "isAutoScroll" === e.key ? chrome.tabs.sendMessage(r, {
                    message: "isAutoScrollOnChange",
                    isAutoScroll: e.value
                }) : "LimitedReadSelectionCharAmount" === e.key ? chrome.tabs.sendMessage(r, {
                    message: "setLimit",
                    value: e.value
                }) : "ccMode" === e.key ? chrome.tabs.sendMessage(r, {
                    message: "ccModeOnChange",
                    ccMode: e.value,
                    highlightColour: h.settings.highlightColour
                }) : "mode" === e.key ? chrome.tabs.sendMessage(r, {
                    message: "modeOnChange",
                    mode: e.value,
                    ccMode: h.settings.ccMode
                }) : "isVisible" === e.key ? chrome.tabs.sendMessage(r, {
                    message: "isVisibleOnChange",
                    isVisible: e.value,
                    mode: h.settings.mode,
                    ccMode: h.settings.ccMode
                }) : "speedDisplay" === e.key && chrome.tabs.sendMessage(r, {
                    fn: "updateSpeedDisplay",
                    value: e.value,
                    fromPopup: e.fromPopup
                }), h.settings[e.key] = e.value;
                var o = {};
                o[e.key] = e.value, g.default.set(o)
            }

            function d(e, t, n) {
                n(h.settings)
            }
            var h = this;
            h.injectWidget = n, h.injectSD = i, h.injectSpeedPopup = r, h.setWidgetUI = c, h.setWidgetSetting = f, h.defaultSettings = {
                    isVisible: !0,
                    mode: "min",
                    ccMode: "max-cc-compact",
                    readerState: "pause",
                    voiceType: "prem",
                    speed: 0,
                    speedDisplay: 500,
                    freeVoice: null,
                    readIcon: !1,
                    beHighlighted: [],
                    isAutoScroll: !0,
                    isDyslexic: !1,
                    showReadSelectionToPageEndOption: !0,
                    readSelectionOption: "selection-to-page-end",
                    highlightColour: "light",
                    userInfo: {
                        licNum: 0,
                        licCode: "0",
                        license: "0",
                        pwLicCode: "0",
                        pwLicNum: "0",
                        email: "user@naturalreaders.com"
                    },
                    loggedIn: 0,
                    LimitedReadSelectionOn: !1,
                    LimitedReadSelectionCharAmount: 10,
                    backwardStep: 0,
                    forwardStep: 0,
                    backwardSkipNumber: [1, 1],
                    forwardSkipNumber: [1, 1],
                    returnNormalSkipTime: 2e3
                }, h.settings = h.defaultSettings, h.isAsyncFunction = t, h.asyncFunctions = ["getWidgetSettings"], h.getWidgetSettings = d,
                function() {
                    chrome.runtime.onMessage.addListener(function(e, t, n) {
                        if (h[e.fn] && (h[e.fn](e, t, n), h.isAsyncFunction(e.fn))) return !0
                    }), e()
                }()
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = n(18),
            a = r(i),
            u = n(1335),
            s = r(u),
            c = n(1306),
            l = r(c),
            f = n(1334),
            d = (r(f), n(1336)),
            p = r(d),
            h = n(1544),
            _ = r(h),
            m = n(1663),
            g = r(m),
            v = new o;
        t.default = v, e.exports = t.default
    },
    131: function(e, t, n) {
        e.exports = {
            default: n(507),
            __esModule: !0
        }
    },
    1334: function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function o() {
            function e(e) {
                var t = {
                    origin: "no origin",
                    href: "no href"
                };
                if (e.url) {
                    var n = new URL(e.url);
                    t = {
                        origin: n.origin,
                        href: n.href
                    }
                }
                return t
            }

            function t() {
                return c.default.getActiveTab().then(function(t) {
                    var n = e(t);
                    return t && t.url && t.url.match(/\.pdf$/) ? t.url.match(/file(.)+.pdf$/) ? a.default.resolve({
                        pdf: !0,
                        type: "local",
                        tabId: t.id,
                        urlInfo: n
                    }) : a.default.resolve({
                        pdf: !0,
                        type: "online",
                        tabId: t.id,
                        urlInfo: n
                    }) : a.default.resolve({
                        pdf: !1,
                        urlInfo: n
                    })
                })
            }

            function n() {
                return t().then(function(e) {
                    return e.pdf ? a.default.resolve({
                        isPdf: !0,
                        tabId: e.tabId,
                        urlInfo: e.urlInfo
                    }) : a.default.resolve({
                        isPdf: !1,
                        tabId: e.tabId,
                        urlInfo: e.urlInfo
                    })
                })
            }

            function r() {
                return t().then(function(e) {
                    return e.pdf && "online" === e.type ? a.default.resolve(!0) : a.default.resolve(!1)
                }).catch(function(e) {})
            }

            function o(e, t, n) {}
            var i = this;
            i.checkPDF = n, i.isOnlinePdf = r, i.openOnlinePdfInPW = o, i.localInstructions = '<p>Warning: We noticed you want to read a pdf, to read pdf\'s please upload the file <a class="pdf-instr" target="_blank" href="https://www.naturalreaders.com/online/?action=upload">here</a> </p>',
                function() {
                    chrome.runtime.onMessage.addListener(function(e, t, n) {
                        i[e.fn] && i[e.fn](e, t, n)
                    })
                }()
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = n(18),
            a = r(i),
            u = n(1173),
            s = (r(u), n(1212)),
            c = r(s),
            l = new o;
        t.default = l, e.exports = t.default
    },
    1335: function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function o() {
            function e(e) {
                return S.asyncFunctions.includes(e)
            }

            function t() {
                (0, a.default)(S.voices.free).length > 0 && (S.defaultFreeVoice = (0, a.default)(S.voices.free)[0], (0, a.default)(S.voices.free).map(function(e) {
                    "Google UK English Male en-GB" === e && (S.defaultFreeVoice = e)
                }), v.default.settings.freeVoice || (v.default.settings.freeVoice = S.defaultFreeVoice)), S.defaultPremVoice = (0, a.default)(S.voices.free)[0], v.default.settings.premVoice || (v.default.settings.premVoice = (0, a.default)(S.voices.free)[0]), v.default.settings.preset1Voice || (v.default.settings.preset1Voice = (0, a.default)(S.voices.free)[1]), v.default.settings.preset2Voice || (v.default.settings.preset2Voice = (0, a.default)(S.voices.free)[0]), S.defaultPlusVoice = (0, a.default)(S.voices.free)[0], v.default.settings.plusVoice || (v.default.settings.plusVoice = S.defaultPlusVoice)
            }

            function n(e, t, n) {
                n(S.isSettingVoices)
            }

            function r(e, t) {
                return e + " " + t
            }

            function o() {
                return i().then(function(e) {
                    return new d.default(function(t) {
                        for (var n = [], o = 0; o < e.length; o++) {
                            var i = e[o],
                                a = _(i),
                                u = f(i.name || i.voiceName, a),
                                s = i.lang,
                                c = !1;
                            if ("" === (s = p(s, u))) s = i.lang, c = !0;
                            else if ("google" === a) {
                                var l = {
                                    key: r(u, s),
                                    name: u,
                                    language: s,
                                    source: a,
                                    voice: i,
                                    isOther: c,
                                    isPrem: !0,
                                    type: "free"
                                };
                                n.push(l)
                            }
                            var d = {
                                key: r(u, s),
                                name: u,
                                language: s,
                                source: a,
                                voice: i,
                                isOther: c,
                                type: "free"
                            };
                            0 === o && (S.defaultFreeVoice = u), n.push(d)
                        }
                        for (var h = (0, E.getWatsonVoices)(), m = h.length, g = 0; g < m; g++) {
                            var v = h[g],
                                y = v.name,
                                b = v.lang,
                                w = {
                                    key: r(y, b),
                                    keyWatson: v.key,
                                    name: y,
                                    language: b,
                                    source: "watson",
                                    voice: v,
                                    isOther: !1,
                                    type: "free"
                                };
                            n.push(w)
                        }
                        t(n)
                    })
                }).then(function(e) {
                    return u(e)
                }).then(function(e) {
                    for (var t = 0; t < e.length; t++) {
                        var n = "google" === e[t].source && e[t].isPrem ? c(e[t]) : e[t].name;
                        S.voices.free[r(n, e[t].language)] = e[t]
                    }
                }).catch(function(e) {})
            }

            function i() {
                return "mac" === h.default.getOS().os ? y() : g(m.default)
            }

            function u(e) {
                return new d.default(function(t, n) {
                    e.sort(function(e, t) {
                        function n(e) {
                            return e += "", e = e.toLowerCase(), "alex" == e ? 1 : "samantha" == e ? 2 : "tom" == e ? 3 : "daniel" == e ? 4 : "serena" == e ? 5 : 999
                        }

                        function r(e) {
                            return "en-US" == e ? 1 : "en-UK" == e ? 2 : "en-GB" == e ? 3 : "es-ES" == e || "es-MX" == e || "es-CA" == e ? 4 : "es-US" == e ? 5 : "fr-FR" == e || "fr-CA" == e ? 6 : "de-DE" == e ? 7 : "it-IT" == e ? 8 : "pt-PT" == e || "pt-BR" == e ? 9 : "sv-SE" == e ? 10 : "nl-NL" == e ? 11 : 999
                        }
                        var o = r(e.language),
                            i = r(t.language),
                            a = e.isOther ? 999 : 0,
                            u = t.isOther ? 999 : 0;
                        return a < u ? -1 : a > u ? 1 : o < i ? -1 : o > i ? 1 : n(e.name) < n(t.name) ? -1 : n(e.name) > n(t.name) ? 1 : 0
                    }), t(e)
                }).catch(function(e) {})
            }

            function c(e) {
                switch (e.language) {
                    case "en-US":
                        return "Gale";
                    case "en-GB":
                        if ("Google UK English Male" === e.name) return "Gabriel";
                        if ("Google UK English Female" === e.name) return "Grace";
                    case "es-ES":
                        return "Anna";
                    case "es-US":
                        return "Mariana";
                    case "it-IT":
                        return "Sofia";
                    case "nl-NL":
                        return "Margreet";
                    case "fr-FR":
                        return "Sophia";
                    case "pt-BR":
                        return "Carolina";
                    case "de-DE":
                        return "Mia";
                    default:
                        return e.name
                }
            }

            function f(e, t) {
                return "acapela" === t && (e = e.split(" ")[0]), "native" == e ? e = "Native" : (e = e.split("-")[0], e = e.replace("Microsoft", "")), "Aaron" == e && (e = "Mia"), "Marie" == e && (e = "Louis"), e
            }

            function p(e, t) {
                return "native" == t ? "en-US" : e.indexOf("en-US") >= 0 || e.indexOf("en_US") >= 0 ? "en-US" : e.indexOf("en-UK") >= 0 || e.indexOf("en_UK") >= 0 ? "en-UK" : e.indexOf("en-GB") >= 0 || e.indexOf("en_GB") >= 0 ? "en-GB" : e.indexOf("de-DE") >= 0 || e.indexOf("de_DE") >= 0 ? "de-DE" : e.indexOf("fr-FR") >= 0 || e.indexOf("fr_FR") >= 0 ? "fr-FR" : e.indexOf("it-IT") >= 0 || e.indexOf("it_IT") >= 0 ? "it-IT" : e.indexOf("sv-SE") >= 0 || e.indexOf("sv_SE") >= 0 ? "sv-SE" : e.indexOf("fr-CA") >= 0 || e.indexOf("fr_CA") >= 0 ? "fr-CA" : e.indexOf("es-ES") >= 0 || e.indexOf("es_ES") >= 0 ? "es-ES" : e.indexOf("es-MX") >= 0 || e.indexOf("es-MX") >= 0 ? "es-MX" : e.indexOf("es-CA") >= 0 || e.indexOf("es-CA") >= 0 ? "es-CA" : e.indexOf("pt-PT") >= 0 || e.indexOf("pt_PT") >= 0 ? "pt-PT" : e.indexOf("fr-CA") >= 0 || e.indexOf("fr_CA") >= 0 ? "fr-CA" : e.indexOf("es-US") >= 0 || e.indexOf("es_US") >= 0 ? "es-US" : e.indexOf("pt-BR") >= 0 || e.indexOf("pt_BR") >= 0 ? "pt-BR" : e.indexOf("nl-NL") >= 0 || e.indexOf("nl_NL") >= 0 ? "nl-NL" : ""
            }

            function _(e) {
                return (e.name || e.voiceName).toLowerCase().indexOf("google") >= 0 ? "google" : (e.name || e.voiceName).toLowerCase().indexOf("acapela") >= 0 ? "acapela" : (e.name || e.voiceName).toLowerCase().indexOf("att") >= 0 ? "att" : (e.name || e.voiceName).toLowerCase().indexOf("natural") >= 0 ? "natural" : e.voiceURI && e.voiceURI.toLowerCase().indexOf("com.apple") >= 0 ? (e.name || e.voiceName).toLowerCase().indexOf("samantha") >= 0 || (e.name || e.voiceName).toLowerCase().indexOf("daniel") >= 0 || (e.name || e.voiceName).toLowerCase().indexOf("monica") >= 0 || (e.name || e.voiceName).toLowerCase().indexOf("joana") >= 0 || (e.name || e.voiceName).toLowerCase().indexOf("luciana") >= 0 || (e.name || e.voiceName).toLowerCase().indexOf("alva") >= 0 || S.appleLangs.includes(e.lang) ? "apple" : (S.appleLangs.push(e.lang), "free") : "free"
            }

            function g(e) {
                return new d.default(function(t) {
                    e.tts.getVoices(function(e) {
                        t(e || [])
                    })
                }).catch(function(e) {})
            }

            function y() {
                return new d.default(function(e) {
                    var t = window.speechSynthesis,
                        n = void 0;
                    n = setInterval(function() {
                        var r = t.getVoices();
                        0 !== r.length && (e(r), clearInterval(n))
                    }, 10), setTimeout(function() {
                        clearInterval(n), e([])
                    }, 2e3)
                }).then(function(e) {
                    return e
                }).catch(function(e) {})
            }

            function T(e, t, n) {
                var r = e.type;
                n(S.voices[r])
            }

            function x(e, t, n) {
                var r = e.type,
                    o = "";
                switch (r) {
                    case "free":
                        o = S.defaultFreeVoice;
                        break;
                    case "prem":
                        o = S.defaultPremVoice;
                        break;
                    case "plus":
                        o = S.defaultPlusVoice
                }
                n(o)
            }

            function I(e, t, n) {
                n(S.voices[e.voiceType][e.voiceKey])
            }
            var S = this;
            S.voices = {
                    free: {},
                    all: {}
                }, S.defaultFreeVoice = "", S.defaultPremVoice = "", S.defaultPlusVoice = "", S.isSettingVoices = !0, S.getIsSettingVoices = n, S.getDefaultVoice = x, S.getVoices = T, S.getVoice = I, S.isAsyncFunction = e, S.asyncFunctions = ["getDefaultVoice", "getVoices", "getIsSettingVoices", "getVoice"],
                function() {
                    chrome.runtime.onMessage.addListener(function(e, t, n) {
                        if (e.fn in w && (w[e.fn](e, t, n), w.isAsyncFunction(e.fn))) return !0
                    }), o().then(function() {
                        return new d.default(function(e) {
                            var t = (0, l.default)({}, S.voices.free),
                                n = !0,
                                r = !1,
                                o = void 0;
                            try {
                                for (var i, u = (0, s.default)((0, a.default)(t)); !(n = (i = u.next()).done); n = !0) {
                                    var c = i.value;
                                    t[c].isPrem && delete t[c]
                                }
                            } catch (e) {
                                r = !0, o = e
                            } finally {
                                try {
                                    !n && u.return && u.return()
                                } finally {
                                    if (r) throw o
                                }
                            }
                            S.voices.all = (0, l.default)({}, t), e()
                        })
                    }).then(function() {
                        return new d.default(function(e) {
                            t(), e()
                        })
                    }).then(function() {
                        S.isSettingVoices = !1, chrome.tabs.sendMessage(b.default.activeTabId, {
                            fn: "voicesOnLoad"
                        })
                    }).catch(function(e) {})
                }()
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = n(67),
            a = r(i),
            u = n(128),
            s = r(u),
            c = n(54),
            l = r(c),
            f = n(18),
            d = r(f),
            p = n(1212),
            h = r(p),
            _ = n(1173),
            m = r(_),
            g = n(1307),
            v = r(g),
            y = n(1336),
            b = r(y),
            E = n(1664),
            w = new o;
        t.default = w, e.exports = t.default
    },
    1336: function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function o() {
            function e() {
                var e = this;
                h.default.getActiveTab().then(function() {
                    var t = (0, l.default)(s.default.mark(function t(n) {
                        var r;
                        return s.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, h.default.getDocType();
                                case 2:
                                    r = e.sent, v.default.injectWidget(n.id, r, null, !0);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }, t, e)
                    }));
                    return function(e) {
                        return t.apply(this, arguments)
                    }
                }()).catch(function(e) {})
            }

            function t(e, t, n) {
                chrome.commands.getAll(function(e) {
                    n(e)
                })
            }

            function n() {
                return new a.default(function(e) {
                    chrome.tabs.update(m.default.beingReadTabId, {
                        active: !0
                    }), e()
                }).catch(function(e) {})
            }

            function r(e) {
                return i.asyncFunctions.includes(e)
            }

            function o(e, t, n) {
                chrome.tabs.create({
                    url: "chrome://extensions/configureCommands"
                })
            }
            var i = this;
            i.activeTabId = null, i.relocate = n, i.editHotkeys = o, i.isAsyncFunction = r, i.asyncFunctions = ["getAllCommand"], i.playFromActionCommand = e, i.getAllCommand = t, i.presetIndex = 1,
                function() {
                    var e = this;
                    chrome.tabs.onRemoved.addListener(function(e, t) {
                        m.default && e === m.default.beingReadTabId && m.default.stop()
                    }), chrome.tabs.onActivated.addListener(function() {
                        var t = (0, l.default)(s.default.mark(function t(n) {
                            var r, o;
                            return s.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return r = i.activeTabId, i.activeTabId = n.tabId, e.next = 4, h.default.getDocType();
                                    case 4:
                                        o = e.sent, chrome.tabs.sendMessage(r, {
                                            message: "tabOnActivated",
                                            tabId: r,
                                            beingReadTabId: m.default.beingReadTabId,
                                            activeTabId: i.activeTabId
                                        }), chrome.tabs.sendMessage(i.activeTabId, {
                                            message: "tabOnActivated",
                                            tabId: i.activeTabId,
                                            beingReadTabId: m.default.beingReadTabId,
                                            activeTabId: i.activeTabId
                                        }), v.default.injectSD(i.activeTabId, o);
                                    case 8:
                                    case "end":
                                        return e.stop()
                                }
                            }, t, e)
                        }));
                        return function(e) {
                            return t.apply(this, arguments)
                        }
                    }()), chrome.windows.onFocusChanged.addListener(function(e) {
                        chrome.tabs.query({
                            active: !0,
                            lastFocusedWindow: !0
                        }, function(e) {
                            var t = e.length > 0 ? e[0].id : i.activeTabId,
                                n = i.activeTabId;
                            i.activeTabId = t, chrome.tabs.sendMessage(n, {
                                message: "tabOnActivated",
                                tabId: n,
                                beingReadTabId: m.default.beingReadTabId,
                                activeTabId: i.activeTabId
                            }), chrome.tabs.sendMessage(i.activeTabId, {
                                message: "tabOnActivated",
                                tabId: i.activeTabId,
                                beingReadTabId: m.default.beingReadTabId,
                                activeTabId: i.activeTabId
                            })
                        })
                    }), d.default.webNavigation.onCommitted.addListener(function() {
                        var t = (0, l.default)(s.default.mark(function t(n) {
                            var r;
                            return s.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if ("auto_subframe" === n.transitionType || "manual_subframe" === n.transitionType) {
                                            e.next = 5;
                                            break
                                        }
                                        return e.next = 3, h.default.getDocType();
                                    case 3:
                                        r = e.sent, v.default.injectSD(n.tabId, r);
                                    case 5:
                                    case "end":
                                        return e.stop()
                                }
                            }, t, e)
                        }));
                        return function(e) {
                            return t.apply(this, arguments)
                        }
                    }()), chrome.runtime.onMessage.addListener(function(e, t, n) {
                        if (e.fn in y && (y[e.fn](e, t, n), y.isAsyncFunction(e.fn))) return !0
                    }), chrome.commands.onCommand.addListener(function(e) {
                        if ("play" == e) "reading" === m.default.readerState ? m.default.pause() : chrome.tabs.sendMessage(i.activeTabId, {
                            message: "hasSelectionOnPage"
                        }, function(e) {
                            e ? m.default.readSelection(null, {
                                tab: {
                                    id: i.activeTabId
                                }
                            }) : m.default.play(null, {
                                tab: {
                                    id: i.activeTabId
                                }
                            })
                        });
                        else if ("stop" == e) m.default.stop();
                        else if ("forward" == e) m.default.forward({
                            number: 1
                        });
                        else if ("rewind" == e) m.default.backward({
                            number: 1
                        });
                        else if ("toggleShowReadIcon" == e) {
                            var t = !v.default.settings.readIcon;
                            v.default.setWidgetSetting({
                                key: "readIcon",
                                value: t
                            }), chrome.tabs.sendMessage(i.activeTabId, {
                                message: "toggleShowReadIcon",
                                value: t
                            })
                        } else "speaker" == e && (chrome.tabs.sendMessage(i.activeTabId, {
                            fn: "setPresetAsSelectedVoice",
                            index: i.presetIndex
                        }), 1 == i.presetIndex ? i.presetIndex = 2 : i.presetIndex = 1)
                    }), h.default.getActiveTab().then(function(e) {
                        i.activeTabId = e.id
                    }).catch(function(e) {})
                }()
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = n(18),
            a = r(i),
            u = n(21),
            s = r(u),
            c = n(22),
            l = r(c),
            f = n(1173),
            d = r(f),
            p = n(1212),
            h = r(p),
            _ = n(1306),
            m = r(_),
            g = n(1307),
            v = r(g),
            y = new o;
        t.default = y, e.exports = t.default
    },
    135: function(e, t, n) {
        var r = n(61);
        e.exports = Object("z").propertyIsEnumerable(0) ? Object : function(e) {
            return "String" == r(e) ? e.split("") : Object(e)
        }
    },
    137: function(e, t, n) {
        e.exports = !n(33) && !n(46)(function() {
            return 7 != Object.defineProperty(n(96)("div"), "a", {
                get: function() {
                    return 7
                }
            }).a
        })
    },
    138: function(e, t, n) {
        e.exports = n(38)
    },
    139: function(e, t, n) {
        var r = n(41),
            o = n(35),
            i = n(202)(!1),
            a = n(92)("IE_PROTO");
        e.exports = function(e, t) {
            var n, u = o(e),
                s = 0,
                c = [];
            for (n in u) n != a && r(u, n) && c.push(n);
            for (; t.length > s;) r(u, n = t[s++]) && (~i(c, n) || c.push(n));
            return c
        }
    },
    140: function(e, t) {},
    142: function(e, t, n) {
        e.exports = n(25).document && document.documentElement
    },
    144: function(e, t, n) {
        var r = n(41),
            o = n(63),
            i = n(92)("IE_PROTO"),
            a = Object.prototype;
        e.exports = Object.getPrototypeOf || function(e) {
            return e = o(e), r(e, i) ? e[i] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? a : null
        }
    },
    1499: function(e, t, n) {
        e.exports = {
            default: n(1500),
            __esModule: !0
        }
    },
    15: function(e, t) {
        var n = e.exports = {
            version: "2.4.0"
        };
        "number" == typeof __e && (__e = n)
    },
    150: function(e, t, n) {
        var r = n(28),
            o = n(15),
            i = n(46);
        e.exports = function(e, t) {
            var n = (o.Object || {})[e] || Object[e],
                a = {};
            a[e] = t(n), r(r.S + r.F * i(function() {
                n(1)
            }), "Object", a)
        }
    },
    1500: function(e, t, n) {
        n(1501), e.exports = n(15).Object.entries
    },
    1501: function(e, t, n) {
        var r = n(28),
            o = n(318)(!0);
        r(r.S, "Object", {
            entries: function(e) {
                return o(e)
            }
        })
    },
    151: function(e, t, n) {
        e.exports = {
            default: n(326),
            __esModule: !0
        }
    },
    1544: function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function o() {
            function e() {
                return n(null, {
                    code: "console.info('ok?')"
                }).then(function(e) {
                    return a.default.resolve(!0)
                }).catch(function(e) {
                    return a.default.reject(!1)
                })
            }

            function t(e, t) {
                return e ? new a.default(function(e) {
                    var n = null;
                    n = "html" === t ? ["injected/nr-ext-dom/nr-ext-text-processor/html-doc.js"] : "google drive doc" === t ? ["injected/nr-ext-dom/nr-ext-text-processor/google-drive-doc.js"] : "google doc" === t ? ["injected/nr-ext-dom/nr-ext-text-processor/google-doc-utils.js", "injected/nr-ext-dom/nr-ext-text-processor/google-doc.js"] : "google drive preview" === t ? ["injected/nr-ext-dom/nr-ext-text-processor/google-drive-preview.js"] : null === t ? null : ["injected/nr-ext-dom/nr-ext-text-processor/html-doc.js"], e(n)
                }).catch(function(e) {}) : a.default.reject(new Error("ERR_NO_TABID"))
            }

            function n(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "script";
                return new a.default(function(r, o) {
                    "script" === n ? s.default.tabs.executeScript(e, t, function() {
                        chrome.runtime.lastError && o(new Error("ERR_NOT_READABLE")), r(e)
                    }) : s.default.tabs.insertCSS(e, t, function() {
                        chrome.runtime.lastError && o(new Error("ERR_NOT_READABLE")), r(e)
                    })
                })
            }

            function r(e, r) {
                return n(e, {
                    file: "assetsReader/js/core/jquery.min.js"
                }).then(function() {
                    return n(e, {
                        file: "libs/compromise.min.js"
                    })
                }).then(function() {
                    return n(e, {
                        file: "injected/nr-ext-dom/nr-ext-text-processor/nr-ext-text-processor.js"
                    })
                }).then(function() {
                    return n(e, {
                        file: "injected/nr-ext-dom/nr-ext-dom-controller.js"
                    })
                }).then(function() {
                    return n(e, {
                        file: "injected/nr-ext-dom/nr-ext-dom.css"
                    }, "css")
                }).then(function() {
                    return t(e, r)
                }).then(function(t) {
                    var r = [];
                    if (t)
                        for (var o = 0; o < t.length; o++) r.push(n(e, {
                            file: t[o]
                        }));
                    return a.default.all(r)
                }).catch(function(e) {})
            }
            var o = this;
            o.getTextProcessorFilePathForDoc = t, o.executeScriptsForTextProcessor = r, o.canExecuteScript = e, o.executeScriptOnTab = n
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = n(18),
            a = r(i),
            u = n(1173),
            s = r(u),
            c = new o;
        t.default = c, e.exports = t.default
    },
    1545: function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function o() {
            function e(e) {
                return !!self.asyncFunctions.includes(e)
            }

            function t(e, t, n) {
                n(self.textsForTts)
            }

            function n(e) {
                for (var t = 0, n = []; e.trim();) {
                    var o = r(e, 60),
                        i = e.substring(0, o).trim();
                    e = e.substring(o), n.push({
                        charIndex: t,
                        text: i
                    }), t += o
                }
                return n
            }

            function r(e, t) {
                var n = e.substring(0, t);
                if (e.length <= t) return e.length;
                var r = Number.MAX_VALUE,
                    o = n.lastIndexOf(" ");
                return o <= r && o >= 0 && (r = o), r === Number.MAX_VALUE && (r = -1), r <= 0 ? t : r + 10 >= e.length ? e.length : r
            }

            function o(e) {
                for (var t = [], n = 0; n < e.length; n++) {
                    var r = u(e[n]);
                    r = c(r), t.push.apply(t, (0, a.default)(r))
                }
                return t
            }

            function i(e) {
                return e.split(" ").map(function(e) {
                    return e.text.trim()
                })
            }

            function u(e) {
                for (var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 500, n = []; e.length > 0;) {
                    var r = f(e, t),
                        o = e.substring(0, r + 1);
                    n.push(o), e = e.substring(r + 1)
                }
                return n
            }

            function c(e) {
                for (var t = "", n = [], r = 0; r != e.length; r++) {
                    t += e[r];
                    var o = !0;
                    r + 1 < e.length && ((t + e[r + 1]).length > 250 && (o = !1), t.length < 50 && (o = !0)), r != e.length - 1 && o || (n.push(t), t = "")
                }
                return n
            }

            function f(e, t) {
                var n = ["?", "!", "\xbf", "\xa1", "\u3002", "\uff5e", "\u2026\u2026", "\uff01", "\uff1f"],
                    r = [",", ";", ":", "\uff0c", "\uff1b", "\uff1a"],
                    o = e.substring(0, t);
                if (e.length <= t) return e.length - 1;
                for (var i = Number.MAX_VALUE, a = 0; a < n.length; a++) {
                    var u = o.indexOf(n[a]);
                    u <= i && u >= 0 && (i = u)
                }
                if (i === Number.MAX_VALUE && (i = -1), i <= 0) {
                    for (var s = 0; s < r.length; s++) i = Math.max(o.lastIndexOf(r[s]), i);
                    return i <= 0 && (i = o.lastIndexOf(" ")) <= 0 && (i = o.lastIndexOf("\u303f")), i <= 0 ? t - 1 : i
                }
                return e[i + 1] && '"' === e[i + 1] ? i + 1 : i
            }

            function p(e) {
                return h(e)
            }

            function h(e) {
                var t = e.replace(/<br\s*\/?>/gi, ". ");
                return t = t.replace(/[\u200c|\u200b|\u200d|\ufeff]/gi, " "), t = t.replace(/[\u0000|\u001b|\u001c|\u001f|\ufe4f|\u005f|\uff3f]/g, ""), t = t.replace(/[\u2018|\u2019|\u2039|\u203A]/g, "'"), t = t.replace(/[\u201c|\u201d|\u00ab|\u00bb]/g, '"'), t = t.replace(/[\uff01]/g, "!"), t = t.replace(/[\uff1f]/g, "?"), t = t.replace(/[\uff0c]/g, ","), t = t.replace(/[\uff1a]/g, ":"), t = t.replace(/[\uff1b]/g, ";"), t = t.replace(/[\u2026]/g, "."), t = t.replace(/[\u2014|\u2015]/g, "-"), t = t.replace(/[\u005f|\uff3f]/g, " "), t = t.replace(/(^|\s*)(&c\.|&c|etc)(\s|\\u201d|\\u2019|\'|\"|\;|\,|\?|\!|$)/g, "$1etc.$3")
            }
            var _ = function() {
                    var e = (0, l.default)(s.default.mark(function e(t, n) {
                        var r;
                        return s.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (e.prev = 0, 0 !== t) {
                                        e.next = 5;
                                        break
                                    }
                                    return e.abrupt("return", n);
                                case 5:
                                    if (!(t >= 1 && n >= self.textsForTts.length - 1)) {
                                        e.next = 7;
                                        break
                                    }
                                    return e.abrupt("return", -1);
                                case 7:
                                    if (n++, (r = self.textsForTts[n]) && "" !== r.trim()) {
                                        e.next = 11;
                                        break
                                    }
                                    return e.abrupt("return", _(t, n));
                                case 11:
                                    return e.abrupt("return", _(t - 1, n));
                                case 14:
                                    e.prev = 14, e.t0 = e.catch(0);
                                case 16:
                                case "end":
                                    return e.stop()
                            }
                        }, e, this, [
                            [0, 14]
                        ])
                    }));
                    return function(t, n) {
                        return e.apply(this, arguments)
                    }
                }(),
                m = function() {
                    var e = (0, l.default)(s.default.mark(function e(t, n) {
                        var r;
                        return s.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (e.prev = 0, 0 !== t) {
                                        e.next = 5;
                                        break
                                    }
                                    return e.abrupt("return", n);
                                case 5:
                                    if (!(t > 0 && n <= 0)) {
                                        e.next = 7;
                                        break
                                    }
                                    return e.abrupt("return", -1);
                                case 7:
                                    if (n--, (r = self.textsForTts[n]) && "" !== r.trim()) {
                                        e.next = 11;
                                        break
                                    }
                                    return e.abrupt("return", m(t, n));
                                case 11:
                                    return e.abrupt("return", m(t - 1, n));
                                case 14:
                                    e.prev = 14, e.t0 = e.catch(0);
                                case 16:
                                case "end":
                                    return e.stop()
                            }
                        }, e, this, [
                            [0, 14]
                        ])
                    }));
                    return function(t, n) {
                        return e.apply(this, arguments)
                    }
                }();
            self = this, self.textsForTts = [], self.previewTexts = {
                    en: "Hi, e joy helps you learn English with the content you love on mobile and laptop.",
                    es: "\xa1Hola! Puedo leer sus p\xe1ginas web o documentos por usted.",
                    fr: "Salut! Je peux lire vos pages Web ou documents pour vous.",
                    de: "Hallo! Ich kann Ihre Webseiten oder Dokumente f\xfcr Sie lesen.",
                    it: "Ciao! Posso leggere le tue pagine web o documenti per te.",
                    pt: "Ol\xe1! Posso ler suas p\xe1ginas da web ou documentos para voc\xea.",
                    sv: "Hej! Jag kan l\xe4sa dina webbsidor eller dokument \xe5t dig.",
                    nl: "Hallo! Ik kan uw webpagina's of documenten voor u lezen.",
                    ro: "Salut! \xce\u021bi pot citi paginile web sau documentele pentru tine.",
                    tr: "Merhaba! Web sayfalar\u0131n\u0131z\u0131 veya belgelerinizi sizin i\xe7in okuyabilirim.",
                    ru: "\u0417\u0434\u0440\u0430\u0432\u0441\u0442\u0432\u0443\u0439\u0442\u0435! \u042f \u043c\u043e\u0433\u0443 \u0447\u0438\u0442\u0430\u0442\u044c \u0432\u0430\u0448\u0438 \u0432\u0435\u0431-\u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b \u0438\u043b\u0438 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u044b \u0434\u043b\u044f \u0432\u0430\u0441.",
                    pl: "Cze\u015b\u0107! Mog\u0119 dla ciebie czyta\u0107 twoje strony internetowe lub dokumenty.",
                    no: "Hallo! Jeg kan lese websidene eller dokumentene dine for deg.",
                    is: "Hall\xf3! \xc9g get lesi\xf0 vefs\xed\xf0ur \xfe\xednar e\xf0a skj\xf6l fyrir \xfeig.",
                    da: "Hej! Jeg kan l\xe6se dine websider eller dokumenter for dig."
                }, self.getIndexOfNNextSentence = _, self.getIndexOfNPrevSentence = m, self.getTextsForTts = t, self.asyncFunctions = ["getTextsForTts"], self.getTextChunks = n, self.textChunks = [], self.processSentencesByLength = o, self.getNlpSentences = i, self.processText = p,
                function() {
                    d.default.runtime.onMessage.addListener(function(t, n, r) {
                        if (self[t.fn] && (self[t.fn](t, n, r), e(t.fn))) return !0
                    })
                }()
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = n(55),
            a = r(i),
            u = n(21),
            s = r(u),
            c = n(22),
            l = r(c),
            f = n(1173),
            d = r(f),
            p = new o;
        t.default = p, e.exports = t.default
    },
    165: function(e, t, n) {
        var r = n(32);
        e.exports = function(e, t, n, o) {
            try {
                return o ? t(r(n)[0], n[1]) : t(n)
            } catch (t) {
                var i = e.return;
                throw void 0 !== i && r(i.call(e)), t
            }
        }
    },
    166: function(e, t, n) {
        var r = n(52),
            o = n(23)("iterator"),
            i = Array.prototype;
        e.exports = function(e) {
            return void 0 !== e && (r.Array === e || i[o] === e)
        }
    },
    1663: function(e, t, n) {
        "use strict";

        function r() {
            function e(e) {
                chrome.storage.local.set(e, function() {
                    return void chrome.runtime.lastError
                })
            }
            this.set = e;
            ! function() {
                chrome.storage.local.get(null, function(e) {
                    (0, i.default)(e).length
                })
            }()
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = n(67),
            i = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(o),
            a = new r;
        t.default = a, e.exports = t.default
    },
    1664: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.getWatsonVoices = t.speakWithLink = t.buildUriWatsonAudio = void 0;
        var r = n(54),
            o = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(r),
            i = (t.buildUriWatsonAudio = function(e, t, n) {
                return "https://text-to-speech-demo.ng.bluemix.net/api/v3/synthesize?text=" + encodeURIComponent(e) + "&voice=" + encodeURIComponent(t + "_" + n + "Voice") + "&download=true&accept=" + encodeURIComponent("audio/ogg;codec=opus")
            }, null);
        t.speakWithLink = function(e, t, n) {
            i = document.getElementById("glot-player-audio"), i || (i = document.createElement("audio"), i.id = "glot-player-audio", document.body.append(i)), i.src = e, i.onended = t, i.onerror = n, i.play()
        }, t.getWatsonVoices = function() {
            return [{
                key: "Allison",
                name: "Allison (female, expressive, transformable) (Watson)",
                lang: "en-US"
            }, {
                key: "AllisonV3",
                name: "AllisonV3 (female, enhanced dnn) (Watson)",
                lang: "en-US"
            }, {
                key: "EmilyV3",
                name: "EmilyV3 (female, enhanced dnn) (Watson)",
                lang: "en-US"
            }, {
                key: "HenryV3",
                name: "HenryV3 (male, enhanced dnn) (Watson)",
                lang: "en-US"
            }, {
                key: "KevinV3",
                name: "KevinV3 (male, enhanced dnn) (Watson)",
                lang: "en-US"
            }, {
                key: "Lisa",
                name: "Lisa (female, transformable) (Watson)",
                lang: "en-US"
            }, {
                key: "LisaV3",
                name: "LisaV3 (female, enhanced dnn) (Watson)",
                lang: "en-US"
            }, {
                key: "Michael",
                name: "Michael (male, transformable) (Watson)",
                lang: "en-US"
            }, {
                key: "MichaelV3",
                name: "MichaelV3 (male, enhanced dnn) (Watson)",
                lang: "en-US"
            }, {
                key: "OliviaV3",
                name: "OliviaV3 (female, enhanced dnn) (Watson)",
                lang: "en-US"
            }, {
                key: "Omar",
                name: "Omar (male) (Watson)",
                lang: "ar-AR"
            }, {
                key: "Isabela",
                name: "Isabela (female) (Watson)",
                lang: "pt-BR"
            }, {
                key: "IsabelaV3",
                name: "IsabelaV3 (female, enhanced dnn) (Watson)",
                lang: "pt-BR"
            }, {
                key: "CharlotteV3",
                name: "CharlotteV3 (female, enhanced dnn) (Watson)",
                lang: "en-GB"
            }, {
                key: "JamesV3",
                name: "JamesV3 (male, enhanced dnn) (Watson)",
                lang: "en-GB"
            }, {
                key: "Kate",
                name: "Kate (female) (Watson)",
                lang: "en-GB"
            }, {
                key: "KateV3",
                name: "KateV3 (female, enhanced dnn) (Watson)",
                lang: "en-GB"
            }, {
                key: "Enrique",
                name: "Enrique (male) (Watson)",
                lang: "es-ES"
            }, {
                key: "EnriqueV3",
                name: "EnriqueV3 (male, enhanced dnn) (Watson)",
                lang: "es-ES"
            }, {
                key: "Laura",
                name: "Laura (female) (Watson)",
                lang: "es-ES"
            }, {
                key: "LauraV3",
                name: "LauraV3 (female, enhanced dnn) (Watson)",
                lang: "es-ES"
            }, {
                key: "LiNa",
                name: "LiNa (female) (Watson)",
                lang: "zh-CN"
            }, {
                key: "WangWei",
                name: "WangWei (Male) (Watson)",
                lang: "zh-CN"
            }, {
                key: "ZhangJing",
                name: "ZhangJing (female) (Watson)",
                lang: "zh-CN"
            }, {
                key: "Emma",
                name: "Emma (female) (Watson)",
                lang: "nl-NL"
            }, {
                key: "Liam",
                name: "Liam (male) (Watson)",
                lang: "nl-NL"
            }, {
                key: "NicolasV3",
                name: "NicolasV3 (male, enhanced dnn) (Watson)",
                lang: "fr-FR"
            }, {
                key: "Renee",
                name: "Renee (female) (Watson)",
                lang: "fr-FR"
            }, {
                key: "ReneeV3",
                name: "ReneeV3 (female, enhanced dnn) (Watson)",
                lang: "fr-FR"
            }, {
                key: "Birgit",
                name: "Birgit (female) (Watson)",
                lang: "de-DE"
            }, {
                key: "BirgitV3",
                name: "BirgitV3 (female, enhanced dnn) (Watson)",
                lang: "de-DE"
            }, {
                key: "Dieter",
                name: "Dieter (male) (Watson)",
                lang: "de-DE"
            }, {
                key: "DieterV3",
                name: "DieterV3 (male, enhanced dnn) (Watson)",
                lang: "de-DE"
            }, {
                key: "ErikaV3",
                name: "ErikaV3 (female, enhanced dnn) (Watson)",
                lang: "de-DE"
            }, {
                key: "Francesca",
                name: "Francesca (female) (Watson)",
                lang: "it-IT"
            }, {
                key: "FrancescaV3",
                name: "FrancescaV3 (female, enhanced dnn) (Watson)",
                lang: "it-IT"
            }, {
                key: "Emi",
                name: "Emi (female) (Watson)",
                lang: "ja-JP"
            }, {
                key: "EmiV3",
                name: "EmiV3 (female, enhanced dnn) (Watson)",
                lang: "ja-JP"
            }, {
                key: "Youngmi",
                name: "Youngmi (female) (Watson)",
                lang: "ko-KR"
            }, {
                key: "Yuna",
                name: "Yuna (female) (Watson)",
                lang: "ko-KR"
            }, {
                key: "Sofia",
                name: "Sofia (female) (Watson)",
                lang: "es-LA"
            }, {
                key: "SofiaV3",
                name: "SofiaV3 (female, enhanced dnn) (Watson)",
                lang: "es-LA"
            }, {
                key: "Sofia",
                name: "Sofia (female) (Watson)",
                lang: "es-US"
            }, {
                key: "SofiaV3",
                name: "SofiaV3 (female, enhanced dnn) (Watson)",
                lang: "es-US"
            }].map(function(e) {
                return (0, o.default)(e, {
                    default: !1,
                    localService: !1,
                    voiceURI: "custom"
                })
            })
        }
    },
    1665: function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function o() {
            function e(e, t, n) {
                try {
                    s.wordMarkTimer && clearInterval(s.wordMarkTimer);
                    var r = 0,
                        o = performance.now(),
                        i = j.default.getTextChunks(e),
                        a = 0,
                        u = 0;
                    if (t && 0 === t.length) {
                        for (var c = e.split(" "), l = [], f = 0, d = 0; d < c.length; d++) c[d] ? (l.push(f), f = f + c[d].length + 1) : f++;
                        var p = 0,
                            h = n / e.length * .95;
                        s.wordMarkTimer = setInterval(function() {
                            var t = performance.now();
                            if ((u = t - o) >= n || n <= 0) return void clearInterval(s.wordMarkTimer);
                            var r = Math.floor(u / h);
                            if (r > e.length) return void clearInterval(s.wordMarkTimer);
                            r >= l[p] && s.onEvent && s.onEvent({
                                type: "word",
                                word: c[p],
                                wordIndex: p++
                            }), i[a] && r >= i[a].charIndex && (s.onEvent && s.onEvent({
                                type: "textChunk",
                                text: i[a].text,
                                textChunkIndex: a
                            }), a++)
                        }, 50)
                    } else s.wordMarkTimer = setInterval(function() {
                        var e = performance.now();
                        (u = e - o) > t[r].time && (i[a] && t[r].start >= i[a].charIndex && (s.onEvent && s.onEvent({
                            type: "textChunk",
                            text: i[a].text,
                            textChunkIndex: a
                        }), a++), s.onEvent && (s.onEvent({
                            type: "word",
                            word: t[r].word,
                            wordIndex: r++
                        }), r >= t.length && clearInterval(s.wordMarkTimer)))
                    }, 50)
                } catch (e) {}
            }

            function t(t, r, o) {
                return !t || "" === t.trim() || !A.default.voices.free || A.default.free && 0 === (0, w.default)(A.default.voices.free).length ? void o({
                    type: "end"
                }) : a().then(function() {
                    return new b.default(function(e) {
                        s.utterThis = new SpeechSynthesisUtterance, N.lastIndex = 0, s.utterThis.text = t.replace(N, " ");
                        var i = "prem" === R.default.settings.voiceType ? R.default.settings.premVoice : R.default.settings.freeVoice,
                            a = A.default.voices.free[i].voice;
                        s.utterThis.voice = a, s.utterThis.volume = 1, s.utterThis.rate = S.default.calculateRate(R.default.settings.speed), s.onEvent = o, n(r, t), e()
                    })
                }).then(function() {
                    s.synth.speak(s.utterThis);
                    var n = "prem" === R.default.settings.voiceType ? R.default.settings.premVoice : R.default.settings.freeVoice;
                    A.default.voices.free[n].voice.name.toLowerCase().indexOf("google") >= 0 && e(t, [], M * t.length / S.default.calculateRate(R.default.settings.speed)), u()
                }).catch(function(e) {})
            }

            function n(e, t) {
                s.utterThis.onend = function() {
                    s.resumeIntervalRef && clearInterval(s.resumeIntervalRef), s.onEvent && s.onEvent({
                        type: "end"
                    })
                }, s.utterThis.onerror = function() {
                    s.resumeIntervalRef && clearInterval(s.resumeIntervalRef)
                }, s.utterThis.onstart = function() {
                    s.onEvent && s.onEvent({
                        type: "start"
                    })
                };
                var n = 0,
                    r = j.default.getTextChunks(t),
                    o = 0;
                s.utterThis.onboundary = function(i) {
                    if ("word" == i.name) {
                        clearInterval(s.wordMarkTimer);
                        var a = t.substr(i.charIndex, i.charLength);
                        s.utterThis.voice.localService && r[o] && event.charIndex >= r[o].charIndex && (s.onEvent && s.onEvent({
                            type: "textChunk",
                            text: r[o].text,
                            textChunkIndex: o
                        }), o++), s.onEvent && s.onEvent({
                            type: "word",
                            word: a,
                            wordIndex: n,
                            index: e
                        }), n++
                    }
                }
            }

            function r() {
                var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                s.stop(e)
            }

            function o() {
                var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                return s.onEvent && e && s.onEvent({
                    type: "pause"
                }), s.synth.paused ? b.default.resolve().then(function() {
                    return new b.default(function(e) {
                        s.synth.resume(), e()
                    })
                }).then(function() {
                    return a()
                }).catch(function(e) {}) : a()
            }

            function i(e, n) {
                t(e, n, !1)
            }

            function a() {
                return clearInterval(s.wordMarkTimer), new b.default(function(e) {
                    s.resumeIntervalRef && (clearInterval(s.resumeIntervalRef), s.resumeIntervalRef = null), s.utterThis && (s.utterThis.onend = null, s.utterThis.onboundary = null, s.utterThis.onerror = null, s.utterThis = null), s.synth.cancel(), e()
                })
            }

            function u() {
                s.resumeIntervalRef = setInterval(function() {
                    s.synth.speaking ? s.synth.resume() : clearInterval(s.resumeIntervalRef)
                }, 14e3)
            }
            var s = this;
            s.type = "free", s.synth = window.speechSynthesis, s.utterThis = null, s.playTimeoutRef = null, s.isStoppedWhenProcessingPlay = !1, s.isProcessingPlay = !1, s.play = t, s.pause = r, s.stop = o, s.resume = i, s.onEvent = null, s.resumeIntervalRef = null, s.wordMarkTimer = null
        }

        function i() {
            function e() {}

            function t() {
                return clearInterval(u.wordMarkTimer), new b.default(function(e) {
                    x.default.tts.isSpeaking(function(t) {
                        t && x.default.tts.stop(), e({
                            isSpeaking: t
                        })
                    })
                })
            }

            function n(e, t, n) {
                try {
                    u.wordMarkTimer && clearInterval(u.wordMarkTimer);
                    var r = 0,
                        o = performance.now(),
                        i = j.default.getTextChunks(e),
                        a = 0,
                        s = 0,
                        c = [];
                    if (i.map(function(e) {
                            s += e.text.length, c.push(s)
                        }), t && 0 === t.length) {
                        for (var f = e.split(" "), d = [], h = 0, _ = 0; _ < f.length; _++) f[_] ? (d.push(h), h = h + f[_].length + 1) : h++;
                        var m = 0,
                            g = n / e.length * .95;
                        u.wordMarkTimer = setInterval(function() {
                            var t = performance.now();
                            if ((a = t - o) >= n || n <= 0) return void clearInterval(u.wordMarkTimer);
                            var r = Math.floor(a / g);
                            if (r > e.length) return void clearInterval(u.wordMarkTimer);
                            r >= d[m] && u.onEvent && u.onEvent({
                                type: "word",
                                word: f[m],
                                wordIndex: m++
                            }), i[l] && r >= i[l].charIndex && (u.onEvent && u.onEvent({
                                type: "textChunk",
                                text: i[l].text,
                                textChunkIndex: l
                            }), p || l++)
                        }, 50)
                    } else u.wordMarkTimer = setInterval(function() {
                        var e = performance.now();
                        (a = e - o) > t[r].time && (i[l] && t[r].start >= i[l].charIndex && (u.onEvent && u.onEvent({
                            type: "textChunk",
                            text: i[l].text,
                            textChunkIndex: l
                        }), l++), u.onEvent && (u.onEvent({
                            type: "word",
                            word: t[r].word,
                            wordIndex: r++
                        }), r >= t.length && clearInterval(u.wordMarkTimer)))
                    }, 50)
                } catch (e) {}
            }

            function r(e, r, o) {
                var i = e;
                return !i || "" === i.trim() || !A.default.voices.free || A.default.voices.free && 0 === (0, w.default)(A.default.voices.free).length ? void o({
                    type: "end"
                }) : t().then(function(e) {
                    u.onEvent = o, s = [], s = j.default.getTextChunks(i), c = 0, l = 0;
                    var t = S.default.calculateRate(R.default.settings.speed);
                    t < .1 && (t = .1);
                    var h = "prem" === R.default.settings.voiceType ? R.default.settings.premVoice : R.default.settings.freeVoice,
                        _ = A.default.voices.free[h].voice.remote;
                    _ && u.onEvent && u.onEvent({
                        type: "textChunk",
                        text: i,
                        textChunkIndex: l
                    });
                    var m = A.default.voices.free[h].voice.voiceName;
                    f = m, d = t, m.toLowerCase().indexOf("google") >= 0 ? (n(i, [], M * i.length / S.default.calculateRate(R.default.settings.speed)), p = i.length > 259) : p = !1, p ? (N.lastIndex = 0, x.default.tts.speak(s[l].text.replace(N, " "), {
                        voiceName: m,
                        rate: t,
                        requiredEventTypes: ["start", "end", "word"],
                        desiredEventTypes: ["start", "end", "error", "interrupted", "word"],
                        onEvent: function(e) {
                            a(e, i, r, _)
                        }
                    })) : (N.lastIndex = 0, x.default.tts.speak(i.replace(N, " "), {
                        voiceName: m,
                        rate: t,
                        requiredEventTypes: ["start", "end", "word"],
                        desiredEventTypes: ["start", "end", "error", "interrupted", "word"],
                        onEvent: function(e) {
                            a(e, i, r, _)
                        }
                    }))
                }).catch(function(e) {})
            }

            function o() {
                var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                u.onEvent && e && u.onEvent({
                    type: "pause"
                }), x.default.tts.stop()
            }

            function i() {
                var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                u.stop(e)
            }

            function a(e, t, n, r) {
                if ("start" == e.type) u.onEvent && u.onEvent({
                    type: "start"
                });
                else if ("end" == e.type) {
                    if (p && ++l < s.length) return N.lastIndex = 0, void x.default.tts.speak(s[l].text.replace(N, " "), {
                        voiceName: f,
                        rate: d,
                        requiredEventTypes: ["start", "end", "word"],
                        desiredEventTypes: ["start", "end", "error", "interrupted", "word"],
                        onEvent: function(e) {
                            a(e, t, n, r)
                        }
                    });
                    u.onEvent && u.onEvent({
                        type: "end"
                    })
                } else if ("error" == e.type);
                else if ("word" == e.type) {
                    clearInterval(u.wordMarkTimer);
                    var o = t.substr(e.charIndex, e.length);
                    u.onEvent && (!r && s[l] && e.charIndex >= s[l].charIndex && (u.onEvent && u.onEvent({
                        type: "textChunk",
                        text: s[l].text,
                        textChunkIndex: l
                    }), l++), u.onEvent && u.onEvent({
                        type: "word",
                        word: o,
                        wordIndex: c,
                        index: n
                    }), c++)
                }
            }
            var u = this;
            u.init = e, u.type = "free", u.play = r, u.stop = o, u.pause = i, u.onEvent = null, u.stopIfAlreadySpeaking = t;
            var s = [],
                c = 0,
                l = 0;
            u.wordMarkTimer = null;
            var f = "",
                d = 0,
                p = !1
        }

        function a() {
            function e(e, n, r, o, i) {
                L.playId = Date.now();
                var a = (0, P.buildUriWatsonAudio)(e, o, i),
                    u = L.playId;
                return L.isStoppedWhenProcessingPlay ? (L.isProcessingPlay = !1, L.isStoppedWhenProcessingPlay = !1, b.default.resolve()) : t().then(function() {
                    return L.onEvent = r, A(e, n, u, a)
                }).then(function() {
                    if (null !== n && u === L.playId) return M(n, u, o, i)
                }).catch(function(e) {})
            }

            function t() {
                return b.default.resolve().then(function() {
                    L.playTimeoutRef && clearTimeout(L.playTimeoutRef), L.wordMarkTimer && clearInterval(L.wordMarkTimer), L.onEvent = null, L.playPromise ? L.playPromise.then(function() {}).catch(function(e) {}) : L.audioPlayer.pause()
                }).catch(function(e) {})
            }

            function n(e, t) {
                L.audioPlayer.oncanplay = function() {
                    try {
                        L.wordMarkTimer && clearInterval(L.wordMarkTimer);
                        var n = 0,
                            r = performance.now(),
                            o = j.default.getTextChunks(e),
                            i = 0,
                            a = 0;
                        if (t && 0 === t.length) {
                            for (var u = e.split(" "), s = [], c = 0, l = 0; l < u.length; l++) u[l] ? (s.push(c), c = c + u[l].length + 1) : c++;
                            var f = 0,
                                d = 1e3 * L.audioPlayer.duration,
                                p = d / e.length * .95;
                            L.wordMarkTimer = setInterval(function() {
                                var t = performance.now();
                                if ((a = t - r) >= d || d <= 0 || isNaN(L.audioPlayer.duration)) return void clearInterval(L.wordMarkTimer);
                                var n = Math.floor(a / p);
                                if (n > e.length) return void clearInterval(L.wordMarkTimer);
                                n >= s[f] && L.onEvent && L.onEvent({
                                    type: "word",
                                    word: u[f],
                                    wordIndex: f++
                                }), o[i] && n >= o[i].charIndex && (L.onEvent && L.onEvent({
                                    type: "textChunk",
                                    text: o[i].text,
                                    textChunkIndex: i
                                }), i++)
                            }, 50)
                        } else L.wordMarkTimer = setInterval(function() {
                            var e = performance.now();
                            (a = e - r) > t[n].time && (o[i] && t[n].start >= o[i].charIndex && (L.onEvent && L.onEvent({
                                type: "textChunk",
                                text: o[i].text,
                                textChunkIndex: i
                            }), i++), L.onEvent && (L.onEvent({
                                type: "word",
                                word: t[n].word,
                                wordIndex: n++
                            }), n >= t.length && clearInterval(L.wordMarkTimer)))
                        }, 50)
                    } catch (e) {}
                }
            }

            function r() {
                L.audioPlayer.onended = function() {
                    L.onEvent && L.onEvent({
                        type: "end"
                    })
                }, L.audioPlayer.onplay = function() {
                    L.onEvent && L.onEvent({
                        type: "start"
                    })
                }, L.audioPlayer.onerror = function() {
                    L.onEvent && L.onEvent({
                        type: "error",
                        err: L.audioPlayer.error.message
                    })
                }
            }

            function o() {
                var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                L.stop(e)
            }

            function i(e) {
                return L.onEvent && e && L.onEvent({
                    type: "pause"
                }), L.isProcessingPlay && (L.isStoppedWhenProcessingPlay = !0), L.audioPlayer && L.audioPlayer.pause(), t()
            }

            function a(e) {
                for (var t in L.preloads) {
                    var n = L.preloads[t];
                    e[t] || u(n.index)
                }
            }

            function u(e) {
                null !== e && delete L.preloads["" + e]
            }

            function c() {
                L.preloads = {}
            }

            function f(e, t) {
                var n = this;
                return new b.default(function() {
                    var r = (0, m.default)(h.default.mark(function r(o, i) {
                        var a, u, s;
                        return h.default.wrap(function(n) {
                            for (;;) switch (n.prev = n.next) {
                                case 0:
                                    a = 3, u = new F("", "", [], "");
                                case 2:
                                    if (!(a > 0)) {
                                        n.next = 18;
                                        break
                                    }
                                    return s = {
                                        url: t
                                    }, n.next = 6, p(e, s);
                                case 6:
                                    if (u = n.sent, "" === u.err) {
                                        n.next = 14;
                                        break
                                    }
                                    if (!d(u.err)) {
                                        n.next = 10;
                                        break
                                    }
                                    return n.abrupt("break", 18);
                                case 10:
                                    "Too Many Requests" === u.err && (L.hasTooManyRequestsError = !0), a--, n.next = 16;
                                    break;
                                case 14:
                                    return o(u), n.abrupt("return");
                                case 16:
                                    n.next = 2;
                                    break;
                                case 18:
                                    o(u);
                                case 19:
                                case "end":
                                    return n.stop()
                            }
                        }, r, n)
                    }));
                    return function(e, t) {
                        return r.apply(this, arguments)
                    }
                }()).catch(function(e) {})
            }

            function d(e) {
                if (1002 == e || 1005 == e || 1001 == e || 1003 == e || 1004 == e || "Limit Exceeded" == e) return !0
            }

            function p(e, t) {
                return new b.default(function(e) {
                    L.hasTooManyRequestsError ? setTimeout(function() {
                        e()
                    }, 500) : e()
                }).then(function() {
                    return new b.default(function(n, r) {
                        L.hasTooManyRequestsError = !1;
                        var o = new XMLHttpRequest;
                        o.open("GET", t.url), t.headers && (0, l.default)(t.headers).forEach(function(e) {
                            o.setRequestHeader(e[0], e[1])
                        }), o.responseType = "blob", o.onreadystatechange = function() {
                            if (this.readyState === XMLHttpRequest.DONE && this.status >= 400) {
                                var t = o.response;
                                t && t.errorCode && n({
                                    url: "",
                                    text: e,
                                    marks: [],
                                    err: t.errorCode
                                }), 429 == o.status && ("Limit Exceeded" == o.response.message ? n({
                                    url: "",
                                    text: e,
                                    marks: [],
                                    err: "Limit Exceeded"
                                }) : (L.hasTooManyRequestsError = !0, n({
                                    url: "",
                                    text: e,
                                    marks: [],
                                    err: "Too Many Requests"
                                })))
                            }
                            if (this.readyState === XMLHttpRequest.DONE && 200 === this.status) try {
                                var r = o.response,
                                    i = window.URL.createObjectURL(r);
                                if ("" === i) n({
                                    url: "",
                                    text: e,
                                    marks: [],
                                    err: "ERR_UNKNOWN"
                                });
                                else {
                                    var a = g(o.getResponseHeader("x-smark"));
                                    n({
                                        url: i,
                                        text: e,
                                        marks: a,
                                        err: ""
                                    })
                                }
                            } catch (t) {
                                n({
                                    url: "",
                                    text: e,
                                    marks: [],
                                    err: "ERR_UNKNOWN"
                                })
                            }
                            2 === this.readyState && (200 === o.status ? o.responseType = "blob" : o.responseType = "json")
                        }, o.onerror = function(t) {
                            n({
                                url: "",
                                text: e,
                                marks: [],
                                err: "ERR_UNKNOWN"
                            })
                        };
                        var i = (0, s.default)({
                            t: e,
                            s: L.speed,
                            v: L.voice
                        });
                        try {
                            o.send(i)
                        } catch (t) {
                            n({
                                url: "",
                                text: e,
                                marks: [],
                                err: "ERR_UNKNOWN"
                            })
                        }
                    })
                }).catch(function(e) {
                    L.onEvent
                })
            }

            function _(e) {
                return decodeURIComponent(atob(e).split("").map(function(e) {
                    return "%" + ("00" + e.charCodeAt(0).toString(16)).slice(-2)
                }).join(""))
            }

            function g(e) {
                try {
                    e = _(e);
                    for (var t = e.substring(0, 2).trim(), n = e.substring(2).split(t), r = [], o = 0; o < n.length; o += 4) {
                        var i = {};
                        i.word = n[o], i.start = parseInt(n[o + 1]), i.end = parseInt(n[o + 2]), i.time = parseInt(n[o + 3]), r.push(i)
                    }
                    for (var a = [], u = 0; u < r.length; u++)
                        if (r[u - 1])
                            if (r[u - 1].start === r[u].start || r[u - 1].end === r[u].end || r[u].start < r[u - 1].end) {
                                if (a[a.length - 1].end < r[u].end || r[u].start < a[a.length - 1].end) {
                                    var s = y(a[a.length - 1].word, r[u].word);
                                    a[a.length - 1].word = a[a.length - 1].word.substring(0, a[a.length - 1].word.length - s) + r[u].word, a[a.length - 1].end = r[u].end
                                }
                            } else {
                                var c = {};
                                c.word = r[u].word, c.start = r[u].start, c.end = r[u].end, c.time = r[u].time, a.push(c)
                            }
                    else {
                        var l = {};
                        l.word = r[u].word, l.start = r[u].start, l.end = r[u].end, l.time = r[u].time, a.push(l)
                    }
                    return a
                } catch (e) {
                    return []
                }
            }

            function y(e, t) {
                e.length > t.length && (e = e.substring(e.length - t.length));
                for (var n = E(t), r = 0, o = 0; r + o < e.length;) t[o] == e[r + o] ? o += 1 : (r += o - n[o], o > 0 && (o = n[o]));
                return o
            }

            function E(e) {
                var t = new Array(e.length),
                    n = 0;
                t[0] = -1, t[1] = 0;
                for (var r = 2; r < e.length;) e[r - 1] == e[n] ? (t[r] = n + 1, r += 1, n += 1) : n > 0 ? n = t[n] : (t[r] = 0, r += 1);
                return t
            }

            function w(e) {
                L.errCount++, L.errCount >= 3 || !x(e) ? (L.hasError = !0, L.setNumPreloads(2, 0), L.onEvent && L.onEvent({
                    type: "error",
                    err: e,
                    isTempError: x(e)
                })) : (T(e) && L.errCount > 0 && L.errCount--, L.onEvent && L.onEvent({
                    type: "end"
                }))
            }

            function T(e) {
                return 1002 === e || 1e3 === e
            }

            function x(e) {
                return 1001 != e && 1003 != e && 1004 != e && "Limit Exceeded" != e
            }

            function I(e, t) {
                L.numPreloads = {
                    prev: e,
                    next: t
                }
            }

            function S(e) {
                try {
                    if (e.isResolved) return e;
                    var t = !0,
                        n = !1,
                        r = !1,
                        o = e.then(function(e) {
                            return r = !0, t = !1, e
                        }, function(e) {
                            throw n = !0, t = !1, e
                        });
                    return o.isFulfilled = function() {
                        return r
                    }, o.isPending = function() {
                        return t
                    }, o.isRejected = function() {
                        return n
                    }, o
                } catch (t) {
                    return e
                }
            }
            var O = function() {
                    var e = (0, m.default)(h.default.mark(function e() {
                        var t, n, r;
                        return h.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    e.t0 = h.default.keys(L.preloads);
                                case 1:
                                    if ((e.t1 = e.t0()).done) {
                                        e.next = 10;
                                        break
                                    }
                                    return t = e.t1.value, n = L.preloads[t], e.next = 6, n.blob;
                                case 6:
                                    r = e.sent, "ERR_CONVERT_LIMIT" !== r.err && 1005 != r.err || u(n.index), e.next = 1;
                                    break;
                                case 10:
                                case "end":
                                    return e.stop()
                            }
                        }, e, this)
                    }));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }(),
                A = function() {
                    var e = (0, m.default)(h.default.mark(function e(t, n, r, o) {
                        var i, a, s;
                        return h.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (e.prev = 0, t && t && "" !== t.trim()) {
                                        e.next = 4;
                                        break
                                    }
                                    return L.onEvent && L.onEvent({
                                        type: "end"
                                    }), e.abrupt("return");
                                case 4:
                                    if (i = null !== n ? "" + n : R.default.settings.premVoice + "_" + R.default.settings.speed, !(a = null !== n ? L.preloads[i] : L.previews[i])) {
                                        e.next = 16;
                                        break
                                    }
                                    if (r === L.playId) {
                                        e.next = 9;
                                        break
                                    }
                                    throw new Error("invalid playid");
                                case 9:
                                    try {
                                        a.blob.isPending() && L.onEvent && L.onEvent({
                                            type: "loading"
                                        })
                                    } catch (e) {}
                                    return e.next = 12, a.blob;
                                case 12:
                                    s = e.sent, s.text === t ? k(a, r) : (u(n), A(t, n, r, o)), e.next = 18;
                                    break;
                                case 16:
                                    return L.onEvent && L.onEvent({
                                        type: "loading"
                                    }), e.abrupt("return", f(t, o).then(function(e) {
                                        L.preloads[i] = {
                                            text: t,
                                            blob: e,
                                            index: n
                                        }, k(L.preloads[i], r)
                                    }).catch(function(e) {}));
                                case 18:
                                    e.next = 22;
                                    break;
                                case 20:
                                    e.prev = 20, e.t0 = e.catch(0);
                                case 22:
                                case "end":
                                    return e.stop()
                            }
                        }, e, this, [
                            [0, 20]
                        ])
                    }));
                    return function(t, n, r, o) {
                        return e.apply(this, arguments)
                    }
                }(),
                k = function() {
                    var e = (0, m.default)(h.default.mark(function e(t, n) {
                        var r;
                        return h.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (e.prev = 0, n === L.playId && t) {
                                        e.next = 3;
                                        break
                                    }
                                    throw new Error("invalid playId");
                                case 3:
                                    return e.next = 5, t.blob;
                                case 5:
                                    r = e.sent, r.err && "" !== r.err ? w(r.err) : (L.hasError && (L.hasError = !1, L.isStoppedWhenProcessingPlay = !1, L.setNumPreloads(2, 4)), C(t, n)), e.next = 11;
                                    break;
                                case 9:
                                    e.prev = 9, e.t0 = e.catch(0);
                                case 11:
                                case "end":
                                    return e.stop()
                            }
                        }, e, this, [
                            [0, 9]
                        ])
                    }));
                    return function(t, n) {
                        return e.apply(this, arguments)
                    }
                }(),
                C = function() {
                    var e = (0, m.default)(h.default.mark(function e(t, o) {
                        var a;
                        return h.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0, L.errCount = 0, e.next = 4, t.blob;
                                case 4:
                                    if (a = e.sent, L.audioPlayer.src = a.url, L.audioPlayer.load(), r(), L.isStoppedWhenProcessingPlay) {
                                        e.next = 20;
                                        break
                                    }
                                    if (e.prev = 9, o === L.playId && t) {
                                        e.next = 12;
                                        break
                                    }
                                    throw new Error("invalid playid");
                                case 12:
                                    L.playPromise = L.audioPlayer.play(), n(a.text, a.marks), e.next = 18;
                                    break;
                                case 16:
                                    e.prev = 16, e.t0 = e.catch(9);
                                case 18:
                                    e.next = 21;
                                    break;
                                case 20:
                                    i();
                                case 21:
                                    e.next = 25;
                                    break;
                                case 23:
                                    e.prev = 23, e.t1 = e.catch(0);
                                case 25:
                                    L.isProcessingPlay = !1, L.isStoppedWhenProcessingPlay = !1;
                                case 27:
                                case "end":
                                    return e.stop()
                            }
                        }, e, this, [
                            [0, 23],
                            [9, 16]
                        ])
                    }));
                    return function(t, n) {
                        return e.apply(this, arguments)
                    }
                }(),
                M = function() {
                    var e = (0, m.default)(h.default.mark(function e(t, n, r, o) {
                        var i, u, s, c, l, f;
                        return h.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    i = {}, i["" + t] = !0, u = 1;
                                case 3:
                                    if (!(u < L.numPreloads.next + 1)) {
                                        e.next = 25;
                                        break
                                    }
                                    if (L.isStoppedWhenProcessingPlay) {
                                        e.next = 21;
                                        break
                                    }
                                    return e.prev = 5, e.next = 8, j.default.getIndexOfNNextSentence(u, t);
                                case 8:
                                    if (-1 !== (s = e.sent)) {
                                        e.next = 11;
                                        break
                                    }
                                    return e.abrupt("break", 25);
                                case 11:
                                    i["" + s] = !0, c = (0, P.buildUriWatsonAudio)(j.default.textsForTts[s], r, o), N(s, n, c), e.next = 19;
                                    break;
                                case 16:
                                    return e.prev = 16, e.t0 = e.catch(5), e.abrupt("continue", 22);
                                case 19:
                                    e.next = 22;
                                    break;
                                case 21:
                                    return e.abrupt("break", 25);
                                case 22:
                                    u++, e.next = 3;
                                    break;
                                case 25:
                                    l = 1;
                                case 26:
                                    if (!(l < L.numPreloads.prev + 1)) {
                                        e.next = 46;
                                        break
                                    }
                                    if (L.isStoppedWhenProcessingPlay) {
                                        e.next = 42;
                                        break
                                    }
                                    return e.prev = 28, e.next = 31, j.default.getIndexOfNPrevSentence(l, t);
                                case 31:
                                    if (-1 !== (f = e.sent)) {
                                        e.next = 34;
                                        break
                                    }
                                    return e.abrupt("break", 46);
                                case 34:
                                    i["" + f] = !0, e.next = 40;
                                    break;
                                case 37:
                                    return e.prev = 37, e.t1 = e.catch(28), e.abrupt("continue", 43);
                                case 40:
                                    e.next = 43;
                                    break;
                                case 42:
                                    return e.abrupt("break", 46);
                                case 43:
                                    l++, e.next = 26;
                                    break;
                                case 46:
                                    a(i);
                                case 47:
                                case "end":
                                    return e.stop()
                            }
                        }, e, this, [
                            [5, 16],
                            [28, 37]
                        ])
                    }));
                    return function(t, n, r, o) {
                        return e.apply(this, arguments)
                    }
                }(),
                N = function() {
                    var e = (0, m.default)(h.default.mark(function e(t, n, r) {
                        var o, i;
                        return h.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (e.prev = 0, n === L.playId) {
                                        e.next = 3;
                                        break
                                    }
                                    throw new Error("inavlid playId");
                                case 3:
                                    if (o = "" + t, !L.preloads[o]) {
                                        e.next = 6;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 6:
                                    if ((i = j.default.textsForTts[t]) && "" !== i.trim()) {
                                        e.next = 9;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 9:
                                    L.preloads[o] = {
                                        text: i,
                                        blob: S(f(i, r)),
                                        index: t
                                    }, e.next = 14;
                                    break;
                                case 12:
                                    e.prev = 12, e.t0 = e.catch(0);
                                case 14:
                                case "end":
                                    return e.stop()
                            }
                        }, e, this, [
                            [0, 12]
                        ])
                    }));
                    return function(t, n, r) {
                        return e.apply(this, arguments)
                    }
                }(),
                F = function e(t, n, r, o) {
                    (0, v.default)(this, e)
                },
                L = this;
            L.type = "online", L.ttsEndpoint = "https://tuwz0i1tl0.execute-api.us-east-1.amazonaws.com/prod/tts", L.audioPlayer = null, L.errCount = 0, L.playId = void 0, L.numPreloads = {
                    prev: 2,
                    next: 4
                }, L.preloads = {}, L.previews = {}, L.hasError = !1, L.hasTooManyRequestsError = !1, L.onEvent = null, L.wordMarkTimer = null, L.play = e, L.pause = o, L.stop = i, L.clearPreloads = c, L.clearBlobsWithLimitError = O, L.setNumPreloads = I, L.isProcessingPlay = !1, L.isStoppedWhenProcessingPlay = !1, L.playPromise = null,
                function() {
                    L.audioPlayer = document.createElement("AUDIO")
                }()
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.onlineTts = t.freeTts = void 0;
        var u = n(49),
            s = r(u),
            c = n(1499),
            l = r(c),
            f = n(6),
            d = (r(f), n(126)),
            p = (r(d), n(21)),
            h = r(p),
            _ = n(22),
            m = r(_),
            g = n(7),
            v = r(g),
            y = n(18),
            b = r(y),
            E = n(67),
            w = r(E),
            T = n(1173),
            x = r(T),
            I = n(1212),
            S = r(I),
            O = n(1335),
            A = r(O),
            k = n(1307),
            R = r(k),
            C = n(1545),
            j = r(C),
            P = n(1664),
            M = 57,
            N = /[~`!@#$%^&*(){}\[\];:"<,.>?\/\\|_+=-]/g;
        t.freeTts = "mac" === S.default.getOS().os ? new o : new i, t.onlineTts = new a
    },
    167: function(e, t, n) {
        var r, o, i, a = n(53),
            u = n(324),
            s = n(142),
            c = n(96),
            l = n(25),
            f = l.process,
            d = l.setImmediate,
            p = l.clearImmediate,
            h = l.MessageChannel,
            _ = 0,
            m = {},
            g = function() {
                var e = +this;
                if (m.hasOwnProperty(e)) {
                    var t = m[e];
                    delete m[e], t()
                }
            },
            v = function(e) {
                g.call(e.data)
            };
        d && p || (d = function(e) {
            for (var t = [], n = 1; arguments.length > n;) t.push(arguments[n++]);
            return m[++_] = function() {
                u("function" == typeof e ? e : Function(e), t)
            }, r(_), _
        }, p = function(e) {
            delete m[e]
        }, "process" == n(61)(f) ? r = function(e) {
            f.nextTick(a(g, e, 1))
        } : h ? (o = new h, i = o.port2, o.port1.onmessage = v, r = a(i.postMessage, i, 1)) : l.addEventListener && "function" == typeof postMessage && !l.importScripts ? (r = function(e) {
            l.postMessage(e + "", "*")
        }, l.addEventListener("message", v, !1)) : r = "onreadystatechange" in c("script") ? function(e) {
            s.appendChild(c("script")).onreadystatechange = function() {
                s.removeChild(this), g.call(e)
            }
        } : function(e) {
            setTimeout(a(g, e, 1), 0)
        }), e.exports = {
            set: d,
            clear: p
        }
    },
    168: function(e, t, n) {
        var r = n(23)("iterator"),
            o = !1;
        try {
            var i = [7][r]();
            i.return = function() {
                o = !0
            }, Array.from(i, function() {
                throw 2
            })
        } catch (e) {}
        e.exports = function(e, t) {
            if (!t && !o) return !1;
            var n = !1;
            try {
                var i = [7],
                    a = i[r]();
                a.next = function() {
                    return {
                        done: n = !0
                    }
                }, i[r] = function() {
                    return a
                }, e(i)
            } catch (e) {}
            return n
        }
    },
    18: function(e, t, n) {
        e.exports = {
            default: n(321),
            __esModule: !0
        }
    },
    185: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.getLang = function() {
            return chrome.i18n.getUILanguage ? chrome.i18n.getUILanguage().substring(0, 2) : "en"
        }
    },
    188: function(e, t) {
        e.exports = function(e, t) {
            return {
                value: t,
                done: !!e
            }
        }
    },
    189: function(e, t, n) {
        (function(e) {
            function r(e, t) {
                this._id = e, this._clearFn = t
            }
            var o = void 0 !== e && e || "undefined" != typeof self && self || window,
                i = Function.prototype.apply;
            t.setTimeout = function() {
                return new r(i.call(setTimeout, o, arguments), clearTimeout)
            }, t.setInterval = function() {
                return new r(i.call(setInterval, o, arguments), clearInterval)
            }, t.clearTimeout = t.clearInterval = function(e) {
                e && e.close()
            }, r.prototype.unref = r.prototype.ref = function() {}, r.prototype.close = function() {
                this._clearFn.call(o, this._id)
            }, t.enroll = function(e, t) {
                clearTimeout(e._idleTimeoutId), e._idleTimeout = t
            }, t.unenroll = function(e) {
                clearTimeout(e._idleTimeoutId), e._idleTimeout = -1
            }, t._unrefActive = t.active = function(e) {
                clearTimeout(e._idleTimeoutId);
                var t = e._idleTimeout;
                t >= 0 && (e._idleTimeoutId = setTimeout(function() {
                    e._onTimeout && e._onTimeout()
                }, t))
            }, n(510), t.setImmediate = "undefined" != typeof self && self.setImmediate || void 0 !== e && e.setImmediate || this && this.setImmediate, t.clearImmediate = "undefined" != typeof self && self.clearImmediate || void 0 !== e && e.clearImmediate || this && this.clearImmediate
        }).call(t, n(20))
    },
    196: function(e, t, n) {
        var r = n(91),
            o = Math.max,
            i = Math.min;
        e.exports = function(e, t) {
            return e = r(e), e < 0 ? o(e + t, 0) : i(e, t)
        }
    },
    20: function(e, t) {
        var n;
        n = function() {
            return this
        }();
        try {
            n = n || Function("return this")() || (0, eval)("this")
        } catch (e) {
            "object" == typeof window && (n = window)
        }
        e.exports = n
    },
    201: function(e, t, n) {
        "use strict";
        n.p = chrome.extension.getURL("/js/")
    },
    202: function(e, t, n) {
        var r = n(35),
            o = n(100),
            i = n(196);
        e.exports = function(e) {
            return function(t, n, a) {
                var u, s = r(t),
                    c = o(s.length),
                    l = i(a, c);
                if (e && n != n) {
                    for (; c > l;)
                        if ((u = s[l++]) != u) return !0
                } else
                    for (; c > l; l++)
                        if ((e || l in s) && s[l] === n) return e || l || 0;
                return !e && -1
            }
        }
    },
    203: function(e, t, n) {
        var r = n(31),
            o = n(32),
            i = n(43);
        e.exports = n(33) ? Object.defineProperties : function(e, t) {
            o(e);
            for (var n, a = i(t), u = a.length, s = 0; u > s;) r.f(e, n = a[s++], t[n]);
            return e
        }
    },
    21: function(e, t, n) {
        e.exports = n(319)
    },
    214: function(e, t, n) {
        var r = n(91),
            o = n(89);
        e.exports = function(e) {
            return function(t, n) {
                var i, a, u = String(o(t)),
                    s = r(n),
                    c = u.length;
                return s < 0 || s >= c ? e ? "" : void 0 : (i = u.charCodeAt(s), i < 55296 || i > 56319 || s + 1 === c || (a = u.charCodeAt(s + 1)) < 56320 || a > 57343 ? e ? u.charAt(s) : i : e ? u.slice(s, s + 2) : a - 56320 + (i - 55296 << 10) + 65536)
            }
        }
    },
    215: function(e, t, n) {
        "use strict";
        var r = n(101),
            o = n(60),
            i = n(73),
            a = {};
        n(38)(a, n(23)("iterator"), function() {
            return this
        }), e.exports = function(e, t, n) {
            e.prototype = r(a, {
                next: o(1, n)
            }), i(e, t + " Iterator")
        }
    },
    216: function(e, t, n) {
        "use strict";
        var r = n(217),
            o = n(188),
            i = n(52),
            a = n(35);
        e.exports = n(127)(Array, "Array", function(e, t) {
            this._t = a(e), this._i = 0, this._k = t
        }, function() {
            var e = this._t,
                t = this._k,
                n = this._i++;
            return !e || n >= e.length ? (this._t = void 0, o(1)) : "keys" == t ? o(0, n) : "values" == t ? o(0, e[n]) : o(0, [n, e[n]])
        }, "values"), i.Arguments = i.Array, r("keys"), r("values"), r("entries")
    },
    217: function(e, t) {
        e.exports = function() {}
    },
    22: function(e, t, n) {
        "use strict";
        t.__esModule = !0;
        var r = n(18),
            o = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(r);
        t.default = function(e) {
            return function() {
                var t = e.apply(this, arguments);
                return new o.default(function(e, n) {
                    function r(i, a) {
                        try {
                            var u = t[i](a),
                                s = u.value
                        } catch (e) {
                            return void n(e)
                        }
                        if (!u.done) return o.default.resolve(s).then(function(e) {
                            r("next", e)
                        }, function(e) {
                            r("throw", e)
                        });
                        e(s)
                    }
                    return r("next")
                })
            }
        }
    },
    223: function(e, t, n) {
        var r = n(53),
            o = n(165),
            i = n(166),
            a = n(32),
            u = n(100),
            s = n(124),
            c = {},
            l = {},
            t = e.exports = function(e, t, n, f, d) {
                var p, h, _, m, g = d ? function() {
                        return e
                    } : s(e),
                    v = r(n, f, t ? 2 : 1),
                    y = 0;
                if ("function" != typeof g) throw TypeError(e + " is not iterable!");
                if (i(g)) {
                    for (p = u(e.length); p > y; y++)
                        if ((m = t ? v(a(h = e[y])[0], h[1]) : v(e[y])) === c || m === l) return m
                } else
                    for (_ = g.call(e); !(h = _.next()).done;)
                        if ((m = o(_, v, h.value, t)) === c || m === l) return m
            };
        t.BREAK = c, t.RETURN = l
    },
    23: function(e, t, n) {
        var r = n(94)("wks"),
            o = n(72),
            i = n(25).Symbol,
            a = "function" == typeof i;
        (e.exports = function(e) {
            return r[e] || (r[e] = a && i[e] || (a ? i : o)("Symbol." + e))
        }).store = r
    },
    25: function(e, t) {
        var n = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
        "number" == typeof __g && (__g = n)
    },
    256: function(e, t) {
        e.exports = function(e, t, n, r) {
            if (!(e instanceof t) || void 0 !== r && r in e) throw TypeError(n + ": incorrect invocation!");
            return e
        }
    },
    257: function(e, t, n) {
        var r = n(38);
        e.exports = function(e, t, n) {
            for (var o in t) n && e[o] ? e[o] = t[o] : r(e, o, t[o]);
            return e
        }
    },
    28: function(e, t, n) {
        var r = n(25),
            o = n(15),
            i = n(53),
            a = n(38),
            u = function(e, t, n) {
                var s, c, l, f = e & u.F,
                    d = e & u.G,
                    p = e & u.S,
                    h = e & u.P,
                    _ = e & u.B,
                    m = e & u.W,
                    g = d ? o : o[t] || (o[t] = {}),
                    v = g.prototype,
                    y = d ? r : p ? r[t] : (r[t] || {}).prototype;
                d && (n = t);
                for (s in n)(c = !f && y && void 0 !== y[s]) && s in g || (l = c ? y[s] : n[s], g[s] = d && "function" != typeof y[s] ? n[s] : _ && c ? i(l, r) : m && y[s] == l ? function(e) {
                    var t = function(t, n, r) {
                        if (this instanceof e) {
                            switch (arguments.length) {
                                case 0:
                                    return new e;
                                case 1:
                                    return new e(t);
                                case 2:
                                    return new e(t, n)
                            }
                            return new e(t, n, r)
                        }
                        return e.apply(this, arguments)
                    };
                    return t.prototype = e.prototype, t
                }(l) : h && "function" == typeof l ? i(Function.call, l) : l, h && ((g.virtual || (g.virtual = {}))[s] = l, e & u.R && v && !v[s] && a(v, s, l)))
            };
        u.F = 1, u.G = 2, u.S = 4, u.P = 8, u.B = 16, u.W = 32, u.U = 64, u.R = 128, e.exports = u
    },
    290: function(e, t, n) {
        n(291);
        var r = n(15).Object;
        e.exports = function(e, t, n) {
            return r.defineProperty(e, t, n)
        }
    },
    291: function(e, t, n) {
        var r = n(28);
        r(r.S + r.F * !n(33), "Object", {
            defineProperty: n(31).f
        })
    },
    293: function(e, t, n) {
        n(294), e.exports = n(15).Object.assign
    },
    294: function(e, t, n) {
        var r = n(28);
        r(r.S + r.F, "Object", {
            assign: n(295)
        })
    },
    295: function(e, t, n) {
        "use strict";
        var r = n(43),
            o = n(105),
            i = n(65),
            a = n(63),
            u = n(135),
            s = Object.assign;
        e.exports = !s || n(46)(function() {
            var e = {},
                t = {},
                n = Symbol(),
                r = "abcdefghijklmnopqrst";
            return e[n] = 7, r.split("").forEach(function(e) {
                t[e] = e
            }), 7 != s({}, e)[n] || Object.keys(s({}, t)).join("") != r
        }) ? function(e, t) {
            for (var n = a(e), s = arguments.length, c = 1, l = o.f, f = i.f; s > c;)
                for (var d, p = u(arguments[c++]), h = l ? r(p).concat(l(p)) : r(p), _ = h.length, m = 0; _ > m;) f.call(p, d = h[m++]) && (n[d] = p[d]);
            return n
        } : s
    },
    296: function(e, t, n) {
        n(297), e.exports = n(15).Object.keys
    },
    297: function(e, t, n) {
        var r = n(63),
            o = n(43);
        n(150)("keys", function() {
            return function(e) {
                return o(r(e))
            }
        })
    },
    298: function(e, t, n) {
        "use strict";
        var r = n(25),
            o = n(15),
            i = n(31),
            a = n(33),
            u = n(23)("species");
        e.exports = function(e) {
            var t = "function" == typeof o[e] ? o[e] : r[e];
            a && t && !t[u] && i.f(t, u, {
                configurable: !0,
                get: function() {
                    return this
                }
            })
        }
    },
    30: function(e, t, n) {
        "use strict";
        t.__esModule = !0;
        var r = n(84),
            o = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(r);
        t.default = function(e, t, n) {
            return t in e ? (0, o.default)(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }
    },
    3018: function(e, t, n) {
        n(201), e.exports = n(3019)
    },
    3019: function(e, t, n) {
        "use strict";
        n(1173), n(3020), n(1663), n(1334), n(1544), n(1212), n(1335), n(1307), n(1336), n(1545), n(1665), n(1306), n(3021)
    },
    3020: function(e, t, n) {
        "use strict";

        function r() {
            function e() {
                chrome.runtime.onMessageExternal.addListener(function(e, t, r) {
                    "readSelection" === e.fn && i.default.readSelectionWithContextMenu();
                    var o = n.filterTargetMap[e.target];
                    if (o) return o.fn(e, t, r), !!o.isAsync || void 0
                })
            }

            function t(e, t) {
                var r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                n.filterTargetMap[e] = {
                    fn: t,
                    isAsync: r
                }
            }
            var n = this;
            n.filterTargetMap = {}, n.setFilter = t, n.init = e
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = n(1306),
            i = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(o),
            a = new r;
        a.init(), t.default = a, e.exports = t.default
    },
    3021: function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var o = n(10),
            i = r(o),
            a = n(1306),
            u = r(a),
            s = n(9),
            c = r(s),
            l = c.default.config.SELECTION_MENU;
        chrome.contextMenus.create({
            parentId: l.id,
            id: "ejoyReader",
            title: (0, i.default)("readFromContextMenu"),
            contexts: ["selection"]
        }), chrome.contextMenus.onClicked.addListener(function(e) {
            "" != e.selectionText && "ejoyReader" === e.menuItemId && u.default.readSelectionWithContextMenu()
        })
    },
    305: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = {
            Afrikaans: "af",
            Albanian: "sq",
            Amharic: "am",
            Arabic: "ar",
            Armenian: "hy",
            Azerbaijani: "az",
            Basque: "eu",
            Belarusian: "be",
            Bengali: "bn",
            Bosnian: "bs",
            Bulgarian: "bg",
            Catalan: "ca",
            Cebuano: "ceb",
            Chichewa: "ny",
            "Chinese (Simplified)": "zh-CN",
            "Chinese (Traditional)": "zh-TW",
            Corsican: "co",
            Croatian: "hr",
            Czech: "cs",
            Danish: "da",
            Dutch: "nl",
            English: "en",
            Esperanto: "eo",
            Estonian: "et",
            Filipino: "tl",
            Finnish: "fi",
            French: "fr",
            Frisian: "fy",
            Galician: "gl",
            Georgian: "ka",
            German: "de",
            Greek: "el",
            Gujarati: "gu",
            "Haitian Creole": "ht",
            Hausa: "ha",
            Hawaiian: "haw",
            Hebrew: "iw",
            Hindi: "hi",
            Hmong: "hmn",
            Hungarian: "hu",
            Icelandic: "is",
            Igbo: "ig",
            Indonesian: "id",
            Irish: "ga",
            Italian: "it",
            Japanese: "ja",
            Javanese: "jw",
            Kannada: "kn",
            Kazakh: "kk",
            Khmer: "km",
            Kinyarwanda: "rw",
            Korean: "ko",
            Kurdish: "ku",
            Kyrgyz: "ky",
            Lao: "lo",
            Latin: "la",
            Latvian: "lv",
            Lithuanian: "lt",
            Luxembourgish: "lb",
            Macedonian: "mk",
            Malagasy: "mg",
            Malay: "ms",
            Malayalam: "ml",
            Maltese: "mt",
            Maori: "mi",
            Marathi: "mr",
            Mongolian: "mn",
            "Myanmar (Burmese)": "my",
            Nepali: "ne",
            Norwegian: "no",
            "Odia (Oriya)": "or",
            Pashto: "ps",
            Persian: "fa",
            Polish: "pl",
            Portuguese: "pt",
            Punjabi: "ma",
            Romanian: "ro",
            Russian: "ru",
            Samoan: "sm",
            "Scots Gaelic": "gd",
            Serbian: "sr",
            Sesotho: "st",
            Shona: "sn",
            Sindhi: "sd",
            Sinhala: "si",
            Slovak: "sk",
            Slovenian: "sl",
            Somali: "so",
            Spanish: "es",
            Sundanese: "su",
            Swahili: "sw",
            Swedish: "sv",
            Tajik: "tg",
            Tamil: "ta",
            Tatar: "tt",
            Telugu: "te",
            Thai: "th",
            Turkish: "tr",
            Turkmen: "tk",
            Ukrainian: "uk",
            Urdu: "ur",
            Uyghur: "ug",
            Uzbek: "uz",
            Vietnamese: "vi",
            Welsh: "cy",
            Xhosa: "xh",
            Yiddish: "yi",
            Yoruba: "yo",
            Zulu: "zu"
        };
        t.default = r, e.exports = t.default
    },
    31: function(e, t, n) {
        var r = n(32),
            o = n(137),
            i = n(99),
            a = Object.defineProperty;
        t.f = n(33) ? Object.defineProperty : function(e, t, n) {
            if (r(e), t = i(t, !0), r(n), o) try {
                return a(e, t, n)
            } catch (e) {}
            if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
            return "value" in n && (e[t] = n.value), e
        }
    },
    318: function(e, t, n) {
        var r = n(43),
            o = n(35),
            i = n(65).f;
        e.exports = function(e) {
            return function(t) {
                for (var n, a = o(t), u = r(a), s = u.length, c = 0, l = []; s > c;) i.call(a, n = u[c++]) && l.push(e ? [n, a[n]] : a[n]);
                return l
            }
        }
    },
    319: function(e, t, n) {
        (function(t) {
            var r = "object" == typeof t ? t : "object" == typeof window ? window : "object" == typeof self ? self : this,
                o = r.regeneratorRuntime && Object.getOwnPropertyNames(r).indexOf("regeneratorRuntime") >= 0,
                i = o && r.regeneratorRuntime;
            if (r.regeneratorRuntime = void 0, e.exports = n(320), o) r.regeneratorRuntime = i;
            else try {
                delete r.regeneratorRuntime
            } catch (e) {
                r.regeneratorRuntime = void 0
            }
        }).call(t, n(20))
    },
    32: function(e, t, n) {
        var r = n(47);
        e.exports = function(e) {
            if (!r(e)) throw TypeError(e + " is not an object!");
            return e
        }
    },
    320: function(e, t, n) {
        (function(t) {
            ! function(t) {
                "use strict";

                function n(e, t, n, r) {
                    var i = t && t.prototype instanceof o ? t : o,
                        a = Object.create(i.prototype),
                        u = new p(r || []);
                    return a._invoke = c(e, n, u), a
                }

                function r(e, t, n) {
                    try {
                        return {
                            type: "normal",
                            arg: e.call(t, n)
                        }
                    } catch (e) {
                        return {
                            type: "throw",
                            arg: e
                        }
                    }
                }

                function o() {}

                function i() {}

                function a() {}

                function u(e) {
                    ["next", "throw", "return"].forEach(function(t) {
                        e[t] = function(e) {
                            return this._invoke(t, e)
                        }
                    })
                }

                function s(e) {
                    function n(t, o, i, a) {
                        var u = r(e[t], e, o);
                        if ("throw" !== u.type) {
                            var s = u.arg,
                                c = s.value;
                            return c && "object" == typeof c && v.call(c, "__await") ? Promise.resolve(c.__await).then(function(e) {
                                n("next", e, i, a)
                            }, function(e) {
                                n("throw", e, i, a)
                            }) : Promise.resolve(c).then(function(e) {
                                s.value = e, i(s)
                            }, a)
                        }
                        a(u.arg)
                    }

                    function o(e, t) {
                        function r() {
                            return new Promise(function(r, o) {
                                n(e, t, r, o)
                            })
                        }
                        return i = i ? i.then(r, r) : r()
                    }
                    "object" == typeof t.process && t.process.domain && (n = t.process.domain.bind(n));
                    var i;
                    this._invoke = o
                }

                function c(e, t, n) {
                    var o = I;
                    return function(i, a) {
                        if (o === O) throw new Error("Generator is already running");
                        if (o === A) {
                            if ("throw" === i) throw a;
                            return _()
                        }
                        for (n.method = i, n.arg = a;;) {
                            var u = n.delegate;
                            if (u) {
                                var s = l(u, n);
                                if (s) {
                                    if (s === k) continue;
                                    return s
                                }
                            }
                            if ("next" === n.method) n.sent = n._sent = n.arg;
                            else if ("throw" === n.method) {
                                if (o === I) throw o = A, n.arg;
                                n.dispatchException(n.arg)
                            } else "return" === n.method && n.abrupt("return", n.arg);
                            o = O;
                            var c = r(e, t, n);
                            if ("normal" === c.type) {
                                if (o = n.done ? A : S, c.arg === k) continue;
                                return {
                                    value: c.arg,
                                    done: n.done
                                }
                            }
                            "throw" === c.type && (o = A, n.method = "throw", n.arg = c.arg)
                        }
                    }
                }

                function l(e, t) {
                    var n = e.iterator[t.method];
                    if (n === m) {
                        if (t.delegate = null, "throw" === t.method) {
                            if (e.iterator.return && (t.method = "return", t.arg = m, l(e, t), "throw" === t.method)) return k;
                            t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return k
                    }
                    var o = r(n, e.iterator, t.arg);
                    if ("throw" === o.type) return t.method = "throw", t.arg = o.arg, t.delegate = null, k;
                    var i = o.arg;
                    return i ? i.done ? (t[e.resultName] = i.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = m), t.delegate = null, k) : i : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, k)
                }

                function f(e) {
                    var t = {
                        tryLoc: e[0]
                    };
                    1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
                }

                function d(e) {
                    var t = e.completion || {};
                    t.type = "normal", delete t.arg, e.completion = t
                }

                function p(e) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], e.forEach(f, this), this.reset(!0)
                }

                function h(e) {
                    if (e) {
                        var t = e[b];
                        if (t) return t.call(e);
                        if ("function" == typeof e.next) return e;
                        if (!isNaN(e.length)) {
                            var n = -1,
                                r = function t() {
                                    for (; ++n < e.length;)
                                        if (v.call(e, n)) return t.value = e[n], t.done = !1, t;
                                    return t.value = m, t.done = !0, t
                                };
                            return r.next = r
                        }
                    }
                    return {
                        next: _
                    }
                }

                function _() {
                    return {
                        value: m,
                        done: !0
                    }
                }
                var m, g = Object.prototype,
                    v = g.hasOwnProperty,
                    y = "function" == typeof Symbol ? Symbol : {},
                    b = y.iterator || "@@iterator",
                    E = y.asyncIterator || "@@asyncIterator",
                    w = y.toStringTag || "@@toStringTag",
                    T = "object" == typeof e,
                    x = t.regeneratorRuntime;
                if (x) return void(T && (e.exports = x));
                x = t.regeneratorRuntime = T ? e.exports : {}, x.wrap = n;
                var I = "suspendedStart",
                    S = "suspendedYield",
                    O = "executing",
                    A = "completed",
                    k = {},
                    R = {};
                R[b] = function() {
                    return this
                };
                var C = Object.getPrototypeOf,
                    j = C && C(C(h([])));
                j && j !== g && v.call(j, b) && (R = j);
                var P = a.prototype = o.prototype = Object.create(R);
                i.prototype = P.constructor = a, a.constructor = i, a[w] = i.displayName = "GeneratorFunction", x.isGeneratorFunction = function(e) {
                    var t = "function" == typeof e && e.constructor;
                    return !!t && (t === i || "GeneratorFunction" === (t.displayName || t.name))
                }, x.mark = function(e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, a) : (e.__proto__ = a, w in e || (e[w] = "GeneratorFunction")), e.prototype = Object.create(P), e
                }, x.awrap = function(e) {
                    return {
                        __await: e
                    }
                }, u(s.prototype), s.prototype[E] = function() {
                    return this
                }, x.AsyncIterator = s, x.async = function(e, t, r, o) {
                    var i = new s(n(e, t, r, o));
                    return x.isGeneratorFunction(t) ? i : i.next().then(function(e) {
                        return e.done ? e.value : i.next()
                    })
                }, u(P), P[w] = "Generator", P[b] = function() {
                    return this
                }, P.toString = function() {
                    return "[object Generator]"
                }, x.keys = function(e) {
                    var t = [];
                    for (var n in e) t.push(n);
                    return t.reverse(),
                        function n() {
                            for (; t.length;) {
                                var r = t.pop();
                                if (r in e) return n.value = r, n.done = !1, n
                            }
                            return n.done = !0, n
                        }
                }, x.values = h, p.prototype = {
                    constructor: p,
                    reset: function(e) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = m, this.done = !1, this.delegate = null, this.method = "next", this.arg = m, this.tryEntries.forEach(d), !e)
                            for (var t in this) "t" === t.charAt(0) && v.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = m)
                    },
                    stop: function() {
                        this.done = !0;
                        var e = this.tryEntries[0],
                            t = e.completion;
                        if ("throw" === t.type) throw t.arg;
                        return this.rval
                    },
                    dispatchException: function(e) {
                        function t(t, r) {
                            return i.type = "throw", i.arg = e, n.next = t, r && (n.method = "next", n.arg = m), !!r
                        }
                        if (this.done) throw e;
                        for (var n = this, r = this.tryEntries.length - 1; r >= 0; --r) {
                            var o = this.tryEntries[r],
                                i = o.completion;
                            if ("root" === o.tryLoc) return t("end");
                            if (o.tryLoc <= this.prev) {
                                var a = v.call(o, "catchLoc"),
                                    u = v.call(o, "finallyLoc");
                                if (a && u) {
                                    if (this.prev < o.catchLoc) return t(o.catchLoc, !0);
                                    if (this.prev < o.finallyLoc) return t(o.finallyLoc)
                                } else if (a) {
                                    if (this.prev < o.catchLoc) return t(o.catchLoc, !0)
                                } else {
                                    if (!u) throw new Error("try statement without catch or finally");
                                    if (this.prev < o.finallyLoc) return t(o.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(e, t) {
                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                            var r = this.tryEntries[n];
                            if (r.tryLoc <= this.prev && v.call(r, "finallyLoc") && this.prev < r.finallyLoc) {
                                var o = r;
                                break
                            }
                        }
                        o && ("break" === e || "continue" === e) && o.tryLoc <= t && t <= o.finallyLoc && (o = null);
                        var i = o ? o.completion : {};
                        return i.type = e, i.arg = t, o ? (this.method = "next", this.next = o.finallyLoc, k) : this.complete(i)
                    },
                    complete: function(e, t) {
                        if ("throw" === e.type) throw e.arg;
                        return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), k
                    },
                    finish: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var n = this.tryEntries[t];
                            if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), d(n), k
                        }
                    },
                    catch: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var n = this.tryEntries[t];
                            if (n.tryLoc === e) {
                                var r = n.completion;
                                if ("throw" === r.type) {
                                    var o = r.arg;
                                    d(n)
                                }
                                return o
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(e, t, n) {
                        return this.delegate = {
                            iterator: h(e),
                            resultName: t,
                            nextLoc: n
                        }, "next" === this.method && (this.arg = m), k
                    }
                }
            }("object" == typeof t ? t : "object" == typeof window ? window : "object" == typeof self ? self : this)
        }).call(t, n(20))
    },
    321: function(e, t, n) {
        n(140), n(66), n(86), n(322), e.exports = n(15).Promise
    },
    322: function(e, t, n) {
        "use strict";
        var r, o, i, a = n(80),
            u = n(25),
            s = n(53),
            c = n(123),
            l = n(28),
            f = n(47),
            d = n(104),
            p = n(256),
            h = n(223),
            _ = n(323),
            m = n(167).set,
            g = n(325)(),
            v = u.TypeError,
            y = u.process,
            b = u.Promise,
            y = u.process,
            E = "process" == c(y),
            w = function() {},
            T = !! function() {
                try {
                    var e = b.resolve(1),
                        t = (e.constructor = {})[n(23)("species")] = function(e) {
                            e(w, w)
                        };
                    return (E || "function" == typeof PromiseRejectionEvent) && e.then(w) instanceof t
                } catch (e) {}
            }(),
            x = function(e, t) {
                return e === t || e === b && t === i
            },
            I = function(e) {
                var t;
                return !(!f(e) || "function" != typeof(t = e.then)) && t
            },
            S = function(e) {
                return x(b, e) ? new O(e) : new o(e)
            },
            O = o = function(e) {
                var t, n;
                this.promise = new e(function(e, r) {
                    if (void 0 !== t || void 0 !== n) throw v("Bad Promise constructor");
                    t = e, n = r
                }), this.resolve = d(t), this.reject = d(n)
            },
            A = function(e) {
                try {
                    e()
                } catch (e) {
                    return {
                        error: e
                    }
                }
            },
            k = function(e, t) {
                if (!e._n) {
                    e._n = !0;
                    var n = e._c;
                    g(function() {
                        for (var r = e._v, o = 1 == e._s, i = 0; n.length > i;) ! function(t) {
                            var n, i, a = o ? t.ok : t.fail,
                                u = t.resolve,
                                s = t.reject,
                                c = t.domain;
                            try {
                                a ? (o || (2 == e._h && j(e), e._h = 1), !0 === a ? n = r : (c && c.enter(), n = a(r), c && c.exit()), n === t.promise ? s(v("Promise-chain cycle")) : (i = I(n)) ? i.call(n, u, s) : u(n)) : s(r)
                            } catch (e) {
                                s(e)
                            }
                        }(n[i++]);
                        e._c = [], e._n = !1, t && !e._h && R(e)
                    })
                }
            },
            R = function(e) {
                m.call(u, function() {
                    var t, n, r, o = e._v;
                    if (C(e) && (t = A(function() {
                            E ? y.emit("unhandledRejection", o, e) : (n = u.onunhandledrejection) ? n({
                                promise: e,
                                reason: o
                            }) : (r = u.console) && r.error && r.error("Unhandled promise rejection", o)
                        }), e._h = E || C(e) ? 2 : 1), e._a = void 0, t) throw t.error
                })
            },
            C = function(e) {
                if (1 == e._h) return !1;
                for (var t, n = e._a || e._c, r = 0; n.length > r;)
                    if (t = n[r++], t.fail || !C(t.promise)) return !1;
                return !0
            },
            j = function(e) {
                m.call(u, function() {
                    var t;
                    E ? y.emit("rejectionHandled", e) : (t = u.onrejectionhandled) && t({
                        promise: e,
                        reason: e._v
                    })
                })
            },
            P = function(e) {
                var t = this;
                t._d || (t._d = !0, t = t._w || t, t._v = e, t._s = 2, t._a || (t._a = t._c.slice()), k(t, !0))
            },
            M = function(e) {
                var t, n = this;
                if (!n._d) {
                    n._d = !0, n = n._w || n;
                    try {
                        if (n === e) throw v("Promise can't be resolved itself");
                        (t = I(e)) ? g(function() {
                            var r = {
                                _w: n,
                                _d: !1
                            };
                            try {
                                t.call(e, s(M, r, 1), s(P, r, 1))
                            } catch (e) {
                                P.call(r, e)
                            }
                        }): (n._v = e, n._s = 1, k(n, !1))
                    } catch (e) {
                        P.call({
                            _w: n,
                            _d: !1
                        }, e)
                    }
                }
            };
        T || (b = function(e) {
            p(this, b, "Promise", "_h"), d(e), r.call(this);
            try {
                e(s(M, this, 1), s(P, this, 1))
            } catch (e) {
                P.call(this, e)
            }
        }, r = function(e) {
            this._c = [], this._a = void 0, this._s = 0, this._d = !1, this._v = void 0, this._h = 0, this._n = !1
        }, r.prototype = n(257)(b.prototype, {
            then: function(e, t) {
                var n = S(_(this, b));
                return n.ok = "function" != typeof e || e, n.fail = "function" == typeof t && t, n.domain = E ? y.domain : void 0, this._c.push(n), this._a && this._a.push(n), this._s && k(this, !1), n.promise
            },
            catch: function(e) {
                return this.then(void 0, e)
            }
        }), O = function() {
            var e = new r;
            this.promise = e, this.resolve = s(M, e, 1), this.reject = s(P, e, 1)
        }), l(l.G + l.W + l.F * !T, {
            Promise: b
        }), n(73)(b, "Promise"), n(298)("Promise"), i = n(15).Promise, l(l.S + l.F * !T, "Promise", {
            reject: function(e) {
                var t = S(this);
                return (0, t.reject)(e), t.promise
            }
        }), l(l.S + l.F * (a || !T), "Promise", {
            resolve: function(e) {
                if (e instanceof b && x(e.constructor, this)) return e;
                var t = S(this);
                return (0, t.resolve)(e), t.promise
            }
        }), l(l.S + l.F * !(T && n(168)(function(e) {
            b.all(e).catch(w)
        })), "Promise", {
            all: function(e) {
                var t = this,
                    n = S(t),
                    r = n.resolve,
                    o = n.reject,
                    i = A(function() {
                        var n = [],
                            i = 0,
                            a = 1;
                        h(e, !1, function(e) {
                            var u = i++,
                                s = !1;
                            n.push(void 0), a++, t.resolve(e).then(function(e) {
                                s || (s = !0, n[u] = e, --a || r(n))
                            }, o)
                        }), --a || r(n)
                    });
                return i && o(i.error), n.promise
            },
            race: function(e) {
                var t = this,
                    n = S(t),
                    r = n.reject,
                    o = A(function() {
                        h(e, !1, function(e) {
                            t.resolve(e).then(n.resolve, r)
                        })
                    });
                return o && r(o.error), n.promise
            }
        })
    },
    323: function(e, t, n) {
        var r = n(32),
            o = n(104),
            i = n(23)("species");
        e.exports = function(e, t) {
            var n, a = r(e).constructor;
            return void 0 === a || void 0 == (n = r(a)[i]) ? t : o(n)
        }
    },
    324: function(e, t) {
        e.exports = function(e, t, n) {
            var r = void 0 === n;
            switch (t.length) {
                case 0:
                    return r ? e() : e.call(n);
                case 1:
                    return r ? e(t[0]) : e.call(n, t[0]);
                case 2:
                    return r ? e(t[0], t[1]) : e.call(n, t[0], t[1]);
                case 3:
                    return r ? e(t[0], t[1], t[2]) : e.call(n, t[0], t[1], t[2]);
                case 4:
                    return r ? e(t[0], t[1], t[2], t[3]) : e.call(n, t[0], t[1], t[2], t[3])
            }
            return e.apply(n, t)
        }
    },
    325: function(e, t, n) {
        var r = n(25),
            o = n(167).set,
            i = r.MutationObserver || r.WebKitMutationObserver,
            a = r.process,
            u = r.Promise,
            s = "process" == n(61)(a);
        e.exports = function() {
            var e, t, n, c = function() {
                var r, o;
                for (s && (r = a.domain) && r.exit(); e;) {
                    o = e.fn, e = e.next;
                    try {
                        o()
                    } catch (r) {
                        throw e ? n() : t = void 0, r
                    }
                }
                t = void 0, r && r.enter()
            };
            if (s) n = function() {
                a.nextTick(c)
            };
            else if (i) {
                var l = !0,
                    f = document.createTextNode("");
                new i(c).observe(f, {
                    characterData: !0
                }), n = function() {
                    f.data = l = !l
                }
            } else if (u && u.resolve) {
                var d = u.resolve();
                n = function() {
                    d.then(c)
                }
            } else n = function() {
                o.call(r, c)
            };
            return function(r) {
                var o = {
                    fn: r,
                    next: void 0
                };
                t && (t.next = o), e || (e = o, n()), t = o
            }
        }
    },
    326: function(e, t, n) {
        n(66), n(327), e.exports = n(15).Array.from
    },
    327: function(e, t, n) {
        "use strict";
        var r = n(53),
            o = n(28),
            i = n(63),
            a = n(165),
            u = n(166),
            s = n(100),
            c = n(328),
            l = n(124);
        o(o.S + o.F * !n(168)(function(e) {
            Array.from(e)
        }), "Array", {
            from: function(e) {
                var t, n, o, f, d = i(e),
                    p = "function" == typeof this ? this : Array,
                    h = arguments.length,
                    _ = h > 1 ? arguments[1] : void 0,
                    m = void 0 !== _,
                    g = 0,
                    v = l(d);
                if (m && (_ = r(_, h > 2 ? arguments[2] : void 0, 2)), void 0 == v || p == Array && u(v))
                    for (t = s(d.length), n = new p(t); t > g; g++) c(n, g, m ? _(d[g], g) : d[g]);
                else
                    for (f = v.call(d), n = new p; !(o = f.next()).done; g++) c(n, g, m ? a(f, _, [o.value, g], !0) : o.value);
                return n.length = g, n
            }
        })
    },
    328: function(e, t, n) {
        "use strict";
        var r = n(31),
            o = n(60);
        e.exports = function(e, t, n) {
            t in e ? r.f(e, t, o(0, n)) : e[t] = n
        }
    },
    329: function(e, t, n) {
        n(86), n(66), e.exports = n(330)
    },
    33: function(e, t, n) {
        e.exports = !n(46)(function() {
            return 7 != Object.defineProperty({}, "a", {
                get: function() {
                    return 7
                }
            }).a
        })
    },
    330: function(e, t, n) {
        var r = n(32),
            o = n(124);
        e.exports = n(15).getIterator = function(e) {
            var t = o(e);
            if ("function" != typeof t) throw TypeError(e + " is not iterable!");
            return r(t.call(e))
        }
    },
    35: function(e, t, n) {
        var r = n(135),
            o = n(89);
        e.exports = function(e) {
            return r(o(e))
        }
    },
    38: function(e, t, n) {
        var r = n(31),
            o = n(60);
        e.exports = n(33) ? function(e, t, n) {
            return r.f(e, t, o(1, n))
        } : function(e, t, n) {
            return e[t] = n, e
        }
    },
    41: function(e, t) {
        var n = {}.hasOwnProperty;
        e.exports = function(e, t) {
            return n.call(e, t)
        }
    },
    42: function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = n(6),
            i = r(o),
            a = n(487),
            u = (r(a), n(488)),
            s = r(u),
            c = n(489),
            l = r(c),
            f = s.default;
        t.default = (0, i.default)({}, l.default, f), e.exports = t.default
    },
    43: function(e, t, n) {
        var r = n(139),
            o = n(95);
        e.exports = Object.keys || function(e) {
            return r(e, o)
        }
    },
    46: function(e, t) {
        e.exports = function(e) {
            try {
                return !!e()
            } catch (e) {
                return !0
            }
        }
    },
    47: function(e, t) {
        e.exports = function(e) {
            return "object" == typeof e ? null !== e : "function" == typeof e
        }
    },
    471: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n(490),
            o = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(r);
        t.default = o.default, e.exports = t.default
    },
    472: function(e, t, n) {
        (function(t, n, r) {
            ! function(t) {
                e.exports = t()
            }(function() {
                var e, o, i;
                return function e(t, n, r) {
                    function o(a, u) {
                        if (!n[a]) {
                            if (!t[a]) {
                                var s = "function" == typeof _dereq_ && _dereq_;
                                if (!u && s) return s(a, !0);
                                if (i) return i(a, !0);
                                var c = new Error("Cannot find module '" + a + "'");
                                throw c.code = "MODULE_NOT_FOUND", c
                            }
                            var l = n[a] = {
                                exports: {}
                            };
                            t[a][0].call(l.exports, function(e) {
                                var n = t[a][1][e];
                                return o(n || e)
                            }, l, l.exports, e, t, n, r)
                        }
                        return n[a].exports
                    }
                    for (var i = "function" == typeof _dereq_ && _dereq_, a = 0; a < r.length; a++) o(r[a]);
                    return o
                }({
                    1: [function(e, t, n) {
                        "use strict";
                        t.exports = function(e) {
                            function t(e) {
                                var t = new n(e),
                                    r = t.promise();
                                return t.setHowMany(1), t.setUnwrap(), t.init(), r
                            }
                            var n = e._SomePromiseArray;
                            e.any = function(e) {
                                return t(e)
                            }, e.prototype.any = function() {
                                return t(this)
                            }
                        }
                    }, {}],
                    2: [function(e, n, r) {
                        "use strict";

                        function o() {
                            this._customScheduler = !1, this._isTickUsed = !1, this._lateQueue = new d(16), this._normalQueue = new d(16), this._haveDrainedQueues = !1, this._trampolineEnabled = !0;
                            var e = this;
                            this.drainQueues = function() {
                                e._drainQueues()
                            }, this._schedule = f
                        }

                        function i(e, t, n) {
                            this._lateQueue.push(e, t, n), this._queueTick()
                        }

                        function a(e, t, n) {
                            this._normalQueue.push(e, t, n), this._queueTick()
                        }

                        function u(e) {
                            this._normalQueue._pushOne(e), this._queueTick()
                        }

                        function s(e) {
                            for (; e.length() > 0;) c(e)
                        }

                        function c(e) {
                            var t = e.shift();
                            if ("function" != typeof t) t._settlePromises();
                            else {
                                var n = e.shift(),
                                    r = e.shift();
                                t.call(n, r)
                            }
                        }
                        var l;
                        try {
                            throw new Error
                        } catch (e) {
                            l = e
                        }
                        var f = e("./schedule"),
                            d = e("./queue"),
                            p = e("./util");
                        o.prototype.setScheduler = function(e) {
                            var t = this._schedule;
                            return this._schedule = e, this._customScheduler = !0, t
                        }, o.prototype.hasCustomScheduler = function() {
                            return this._customScheduler
                        }, o.prototype.enableTrampoline = function() {
                            this._trampolineEnabled = !0
                        }, o.prototype.disableTrampolineIfNecessary = function() {
                            p.hasDevTools && (this._trampolineEnabled = !1)
                        }, o.prototype.haveItemsQueued = function() {
                            return this._isTickUsed || this._haveDrainedQueues
                        }, o.prototype.fatalError = function(e, n) {
                            n ? (t.stderr.write("Fatal " + (e instanceof Error ? e.stack : e) + "\n"), t.exit(2)) : this.throwLater(e)
                        }, o.prototype.throwLater = function(e, t) {
                            if (1 === arguments.length && (t = e, e = function() {
                                    throw t
                                }), "undefined" != typeof setTimeout) setTimeout(function() {
                                e(t)
                            }, 0);
                            else try {
                                this._schedule(function() {
                                    e(t)
                                })
                            } catch (e) {
                                throw new Error("No async scheduler available\n\n    See http://goo.gl/MqrFmX\n")
                            }
                        }, p.hasDevTools ? (o.prototype.invokeLater = function(e, t, n) {
                            this._trampolineEnabled ? i.call(this, e, t, n) : this._schedule(function() {
                                setTimeout(function() {
                                    e.call(t, n)
                                }, 100)
                            })
                        }, o.prototype.invoke = function(e, t, n) {
                            this._trampolineEnabled ? a.call(this, e, t, n) : this._schedule(function() {
                                e.call(t, n)
                            })
                        }, o.prototype.settlePromises = function(e) {
                            this._trampolineEnabled ? u.call(this, e) : this._schedule(function() {
                                e._settlePromises()
                            })
                        }) : (o.prototype.invokeLater = i, o.prototype.invoke = a, o.prototype.settlePromises = u), o.prototype._drainQueues = function() {
                            s(this._normalQueue), this._reset(), this._haveDrainedQueues = !0, s(this._lateQueue)
                        }, o.prototype._queueTick = function() {
                            this._isTickUsed || (this._isTickUsed = !0, this._schedule(this.drainQueues))
                        }, o.prototype._reset = function() {
                            this._isTickUsed = !1
                        }, n.exports = o, n.exports.firstLineError = l
                    }, {
                        "./queue": 26,
                        "./schedule": 29,
                        "./util": 36
                    }],
                    3: [function(e, t, n) {
                        "use strict";
                        t.exports = function(e, t, n, r) {
                            var o = !1,
                                i = function(e, t) {
                                    this._reject(t)
                                },
                                a = function(e, t) {
                                    t.promiseRejectionQueued = !0, t.bindingPromise._then(i, i, null, this, e)
                                },
                                u = function(e, t) {
                                    0 == (50397184 & this._bitField) && this._resolveCallback(t.target)
                                },
                                s = function(e, t) {
                                    t.promiseRejectionQueued || this._reject(e)
                                };
                            e.prototype.bind = function(i) {
                                o || (o = !0, e.prototype._propagateFrom = r.propagateFromFunction(), e.prototype._boundValue = r.boundValueFunction());
                                var c = n(i),
                                    l = new e(t);
                                l._propagateFrom(this, 1);
                                var f = this._target();
                                if (l._setBoundTo(c), c instanceof e) {
                                    var d = {
                                        promiseRejectionQueued: !1,
                                        promise: l,
                                        target: f,
                                        bindingPromise: c
                                    };
                                    f._then(t, a, void 0, l, d), c._then(u, s, void 0, l, d), l._setOnCancel(c)
                                } else l._resolveCallback(f);
                                return l
                            }, e.prototype._setBoundTo = function(e) {
                                void 0 !== e ? (this._bitField = 2097152 | this._bitField, this._boundTo = e) : this._bitField = -2097153 & this._bitField
                            }, e.prototype._isBound = function() {
                                return 2097152 == (2097152 & this._bitField)
                            }, e.bind = function(t, n) {
                                return e.resolve(n).bind(t)
                            }
                        }
                    }, {}],
                    4: [function(e, t, n) {
                        "use strict";

                        function r() {
                            try {
                                Promise === i && (Promise = o)
                            } catch (e) {}
                            return i
                        }
                        var o;
                        "undefined" != typeof Promise && (o = Promise);
                        var i = e("./promise")();
                        i.noConflict = r, t.exports = i
                    }, {
                        "./promise": 22
                    }],
                    5: [function(e, t, n) {
                        "use strict";
                        var r = Object.create;
                        if (r) {
                            var o = r(null),
                                i = r(null);
                            o[" size"] = i[" size"] = 0
                        }
                        t.exports = function(t) {
                            function n(e, n) {
                                var r;
                                if (null != e && (r = e[n]), "function" != typeof r) {
                                    var o = "Object " + u.classString(e) + " has no method '" + u.toString(n) + "'";
                                    throw new t.TypeError(o)
                                }
                                return r
                            }

                            function r(e) {
                                return n(e, this.pop()).apply(e, this)
                            }

                            function o(e) {
                                return e[this]
                            }

                            function i(e) {
                                var t = +this;
                                return t < 0 && (t = Math.max(0, t + e.length)), e[t]
                            }
                            var a, u = e("./util"),
                                s = u.canEvaluate;
                            u.isIdentifier;
                            t.prototype.call = function(e) {
                                var t = [].slice.call(arguments, 1);
                                return t.push(e), this._then(r, void 0, void 0, t, void 0)
                            }, t.prototype.get = function(e) {
                                var t, n = "number" == typeof e;
                                if (n) t = i;
                                else if (s) {
                                    var r = a(e);
                                    t = null !== r ? r : o
                                } else t = o;
                                return this._then(t, void 0, void 0, e, void 0)
                            }
                        }
                    }, {
                        "./util": 36
                    }],
                    6: [function(e, t, n) {
                        "use strict";
                        t.exports = function(t, n, r, o) {
                            var i = e("./util"),
                                a = i.tryCatch,
                                u = i.errorObj,
                                s = t._async;
                            t.prototype.break = t.prototype.cancel = function() {
                                if (!o.cancellation()) return this._warn("cancellation is disabled");
                                for (var e = this, t = e; e._isCancellable();) {
                                    if (!e._cancelBy(t)) {
                                        t._isFollowing() ? t._followee().cancel() : t._cancelBranched();
                                        break
                                    }
                                    var n = e._cancellationParent;
                                    if (null == n || !n._isCancellable()) {
                                        e._isFollowing() ? e._followee().cancel() : e._cancelBranched();
                                        break
                                    }
                                    e._isFollowing() && e._followee().cancel(), e._setWillBeCancelled(), t = e, e = n
                                }
                            }, t.prototype._branchHasCancelled = function() {
                                this._branchesRemainingToCancel--
                            }, t.prototype._enoughBranchesHaveCancelled = function() {
                                return void 0 === this._branchesRemainingToCancel || this._branchesRemainingToCancel <= 0
                            }, t.prototype._cancelBy = function(e) {
                                return e === this ? (this._branchesRemainingToCancel = 0, this._invokeOnCancel(), !0) : (this._branchHasCancelled(), !!this._enoughBranchesHaveCancelled() && (this._invokeOnCancel(), !0))
                            }, t.prototype._cancelBranched = function() {
                                this._enoughBranchesHaveCancelled() && this._cancel()
                            }, t.prototype._cancel = function() {
                                this._isCancellable() && (this._setCancelled(), s.invoke(this._cancelPromises, this, void 0))
                            }, t.prototype._cancelPromises = function() {
                                this._length() > 0 && this._settlePromises()
                            }, t.prototype._unsetOnCancel = function() {
                                this._onCancelField = void 0
                            }, t.prototype._isCancellable = function() {
                                return this.isPending() && !this._isCancelled()
                            }, t.prototype.isCancellable = function() {
                                return this.isPending() && !this.isCancelled()
                            }, t.prototype._doInvokeOnCancel = function(e, t) {
                                if (i.isArray(e))
                                    for (var n = 0; n < e.length; ++n) this._doInvokeOnCancel(e[n], t);
                                else if (void 0 !== e)
                                    if ("function" == typeof e) {
                                        if (!t) {
                                            var r = a(e).call(this._boundValue());
                                            r === u && (this._attachExtraTrace(r.e), s.throwLater(r.e))
                                        }
                                    } else e._resultCancelled(this)
                            }, t.prototype._invokeOnCancel = function() {
                                var e = this._onCancel();
                                this._unsetOnCancel(), s.invoke(this._doInvokeOnCancel, this, e)
                            }, t.prototype._invokeInternalOnCancel = function() {
                                this._isCancellable() && (this._doInvokeOnCancel(this._onCancel(), !0), this._unsetOnCancel())
                            }, t.prototype._resultCancelled = function() {
                                this.cancel()
                            }
                        }
                    }, {
                        "./util": 36
                    }],
                    7: [function(e, t, n) {
                        "use strict";
                        t.exports = function(t) {
                            function n(e, n, u) {
                                return function(s) {
                                    var c = u._boundValue();
                                    e: for (var l = 0; l < e.length; ++l) {
                                        var f = e[l];
                                        if (f === Error || null != f && f.prototype instanceof Error) {
                                            if (s instanceof f) return i(n).call(c, s)
                                        } else if ("function" == typeof f) {
                                            var d = i(f).call(c, s);
                                            if (d === a) return d;
                                            if (d) return i(n).call(c, s)
                                        } else if (r.isObject(s)) {
                                            for (var p = o(f), h = 0; h < p.length; ++h) {
                                                var _ = p[h];
                                                if (f[_] != s[_]) continue e
                                            }
                                            return i(n).call(c, s)
                                        }
                                    }
                                    return t
                                }
                            }
                            var r = e("./util"),
                                o = e("./es5").keys,
                                i = r.tryCatch,
                                a = r.errorObj;
                            return n
                        }
                    }, {
                        "./es5": 13,
                        "./util": 36
                    }],
                    8: [function(e, t, n) {
                        "use strict";
                        t.exports = function(e) {
                            function t() {
                                this._trace = new t.CapturedTrace(r())
                            }

                            function n() {
                                if (o) return new t
                            }

                            function r() {
                                var e = i.length - 1;
                                if (e >= 0) return i[e]
                            }
                            var o = !1,
                                i = [];
                            return e.prototype._promiseCreated = function() {}, e.prototype._pushContext = function() {}, e.prototype._popContext = function() {
                                return null
                            }, e._peekContext = e.prototype._peekContext = function() {}, t.prototype._pushContext = function() {
                                void 0 !== this._trace && (this._trace._promiseCreated = null, i.push(this._trace))
                            }, t.prototype._popContext = function() {
                                if (void 0 !== this._trace) {
                                    var e = i.pop(),
                                        t = e._promiseCreated;
                                    return e._promiseCreated = null, t
                                }
                                return null
                            }, t.CapturedTrace = null, t.create = n, t.deactivateLongStackTraces = function() {}, t.activateLongStackTraces = function() {
                                var n = e.prototype._pushContext,
                                    i = e.prototype._popContext,
                                    a = e._peekContext,
                                    u = e.prototype._peekContext,
                                    s = e.prototype._promiseCreated;
                                t.deactivateLongStackTraces = function() {
                                    e.prototype._pushContext = n, e.prototype._popContext = i, e._peekContext = a, e.prototype._peekContext = u, e.prototype._promiseCreated = s, o = !1
                                }, o = !0, e.prototype._pushContext = t.prototype._pushContext, e.prototype._popContext = t.prototype._popContext, e._peekContext = e.prototype._peekContext = r, e.prototype._promiseCreated = function() {
                                    var e = this._peekContext();
                                    e && null == e._promiseCreated && (e._promiseCreated = this)
                                }
                            }, t
                        }
                    }, {}],
                    9: [function(e, n, r) {
                        "use strict";
                        n.exports = function(n, r) {
                            function o(e, t) {
                                return {
                                    promise: t
                                }
                            }

                            function i() {
                                return !1
                            }

                            function a(e, t, n) {
                                var r = this;
                                try {
                                    e(t, n, function(e) {
                                        if ("function" != typeof e) throw new TypeError("onCancel must be a function, got: " + W.toString(e));
                                        r._attachCancellationCallback(e)
                                    })
                                } catch (e) {
                                    return e
                                }
                            }

                            function u(e) {
                                if (!this._isCancellable()) return this;
                                var t = this._onCancel();
                                void 0 !== t ? W.isArray(t) ? t.push(e) : this._setOnCancel([t, e]) : this._setOnCancel(e)
                            }

                            function s() {
                                return this._onCancelField
                            }

                            function c(e) {
                                this._onCancelField = e
                            }

                            function l() {
                                this._cancellationParent = void 0, this._onCancelField = void 0
                            }

                            function f(e, t) {
                                if (0 != (1 & t)) {
                                    this._cancellationParent = e;
                                    var n = e._branchesRemainingToCancel;
                                    void 0 === n && (n = 0), e._branchesRemainingToCancel = n + 1
                                }
                                0 != (2 & t) && e._isBound() && this._setBoundTo(e._boundTo)
                            }

                            function d(e, t) {
                                0 != (2 & t) && e._isBound() && this._setBoundTo(e._boundTo)
                            }

                            function p() {
                                var e = this._boundTo;
                                return void 0 !== e && e instanceof n ? e.isFulfilled() ? e.value() : void 0 : e
                            }

                            function h() {
                                this._trace = new P(this._peekContext())
                            }

                            function _(e, t) {
                                if (B(e)) {
                                    var n = this._trace;
                                    if (void 0 !== n && t && (n = n._parent), void 0 !== n) n.attachExtraTrace(e);
                                    else if (!e.__stackCleaned__) {
                                        var r = I(e);
                                        W.notEnumerableProp(e, "stack", r.message + "\n" + r.stack.join("\n")), W.notEnumerableProp(e, "__stackCleaned__", !0)
                                    }
                                }
                            }

                            function m() {
                                this._trace = void 0
                            }

                            function g(e, t, n, r, o) {
                                if (void 0 === e && null !== t && J) {
                                    if (void 0 !== o && o._returnedNonUndefined()) return;
                                    if (0 == (65535 & r._bitField)) return;
                                    n && (n += " ");
                                    var i = "",
                                        a = "";
                                    if (t._trace) {
                                        for (var u = t._trace.stack.split("\n"), s = T(u), c = s.length - 1; c >= 0; --c) {
                                            var l = s[c];
                                            if (!H.test(l)) {
                                                var f = l.match(z);
                                                f && (i = "at " + f[1] + ":" + f[2] + ":" + f[3] + " ");
                                                break
                                            }
                                        }
                                        if (s.length > 0)
                                            for (var d = s[0], c = 0; c < u.length; ++c)
                                                if (u[c] === d) {
                                                    c > 0 && (a = "\n" + u[c - 1]);
                                                    break
                                                }
                                    }
                                    var p = "a promise was created in a " + n + "handler " + i + "but was not returned from it, see http://goo.gl/rRqMUw" + a;
                                    r._warn(p, !0, t)
                                }
                            }

                            function v(e, t) {
                                var n = e + " is deprecated and will be removed in a future version.";
                                return t && (n += " Use " + t + " instead."), y(n)
                            }

                            function y(e, t, r) {
                                if (se.warnings) {
                                    var o, i = new U(e);
                                    if (t) r._attachExtraTrace(i);
                                    else if (se.longStackTraces && (o = n._peekContext())) o.attachExtraTrace(i);
                                    else {
                                        var a = I(i);
                                        i.stack = a.message + "\n" + a.stack.join("\n")
                                    }
                                    re("warning", i) || S(i, "", !0)
                                }
                            }

                            function b(e, t) {
                                for (var n = 0; n < t.length - 1; ++n) t[n].push("From previous event:"), t[n] = t[n].join("\n");
                                return n < t.length && (t[n] = t[n].join("\n")), e + "\n" + t.join("\n")
                            }

                            function E(e) {
                                for (var t = 0; t < e.length; ++t)(0 === e[t].length || t + 1 < e.length && e[t][0] === e[t + 1][0]) && (e.splice(t, 1), t--)
                            }

                            function w(e) {
                                for (var t = e[0], n = 1; n < e.length; ++n) {
                                    for (var r = e[n], o = t.length - 1, i = t[o], a = -1, u = r.length - 1; u >= 0; --u)
                                        if (r[u] === i) {
                                            a = u;
                                            break
                                        } for (var u = a; u >= 0; --u) {
                                        var s = r[u];
                                        if (t[o] !== s) break;
                                        t.pop(), o--
                                    }
                                    t = r
                                }
                            }

                            function T(e) {
                                for (var t = [], n = 0; n < e.length; ++n) {
                                    var r = e[n],
                                        o = "    (No stack trace)" === r || K.test(r),
                                        i = o && ie(r);
                                    o && !i && (q && " " !== r.charAt(0) && (r = "    " + r), t.push(r))
                                }
                                return t
                            }

                            function x(e) {
                                for (var t = e.stack.replace(/\s+$/g, "").split("\n"), n = 0; n < t.length; ++n) {
                                    var r = t[n];
                                    if ("    (No stack trace)" === r || K.test(r)) break
                                }
                                return n > 0 && "SyntaxError" != e.name && (t = t.slice(n)), t
                            }

                            function I(e) {
                                var t = e.stack,
                                    n = e.toString();
                                return t = "string" == typeof t && t.length > 0 ? x(e) : ["    (No stack trace)"], {
                                    message: n,
                                    stack: "SyntaxError" == e.name ? t : T(t)
                                }
                            }

                            function S(e, t, n) {
                                if ("undefined" != typeof console) {
                                    var r;
                                    if (W.isObject(e)) {
                                        var o = e.stack;
                                        r = t + Y(o, e)
                                    } else r = t + String(e);
                                    "function" == typeof F ? F(r, n) : "function" != typeof console.log && "object" != typeof console.log || console.log(r)
                                }
                            }

                            function O(e, t, n, r) {
                                var o = !1;
                                try {
                                    "function" == typeof t && (o = !0, "rejectionHandled" === e ? t(r) : t(n, r))
                                } catch (e) {
                                    D.throwLater(e)
                                }
                                "unhandledRejection" === e ? re(e, n, r) || o || S(n, "Unhandled rejection ") : re(e, r)
                            }

                            function A(e) {
                                var t;
                                if ("function" == typeof e) t = "[function " + (e.name || "anonymous") + "]";
                                else {
                                    t = e && "function" == typeof e.toString ? e.toString() : W.toString(e);
                                    if (/\[object [a-zA-Z0-9$_]+\]/.test(t)) try {
                                        t = JSON.stringify(e)
                                    } catch (e) {}
                                    0 === t.length && (t = "(empty array)")
                                }
                                return "(<" + k(t) + ">, no stack trace)"
                            }

                            function k(e) {
                                return e.length < 41 ? e : e.substr(0, 38) + "..."
                            }

                            function R() {
                                return "function" == typeof ue
                            }

                            function C(e) {
                                var t = e.match(ae);
                                if (t) return {
                                    fileName: t[1],
                                    line: parseInt(t[2], 10)
                                }
                            }

                            function j(e, t) {
                                if (R()) {
                                    for (var n, r, o = e.stack.split("\n"), i = t.stack.split("\n"), a = -1, u = -1, s = 0; s < o.length; ++s) {
                                        var c = C(o[s]);
                                        if (c) {
                                            n = c.fileName, a = c.line;
                                            break
                                        }
                                    }
                                    for (var s = 0; s < i.length; ++s) {
                                        var c = C(i[s]);
                                        if (c) {
                                            r = c.fileName, u = c.line;
                                            break
                                        }
                                    }
                                    a < 0 || u < 0 || !n || !r || n !== r || a >= u || (ie = function(e) {
                                        if (G.test(e)) return !0;
                                        var t = C(e);
                                        return !!(t && t.fileName === n && a <= t.line && t.line <= u)
                                    })
                                }
                            }

                            function P(e) {
                                this._parent = e, this._promisesCreated = 0;
                                var t = this._length = 1 + (void 0 === e ? 0 : e._length);
                                ue(this, P), t > 32 && this.uncycle()
                            }
                            var M, N, F, L = n._getDomain,
                                D = n._async,
                                U = e("./errors").Warning,
                                W = e("./util"),
                                V = e("./es5"),
                                B = W.canAttachTrace,
                                G = /[\\\/]bluebird[\\\/]js[\\\/](release|debug|instrumented)/,
                                H = /\((?:timers\.js):\d+:\d+\)/,
                                z = /[\/<\(](.+?):(\d+):(\d+)\)?\s*$/,
                                K = null,
                                Y = null,
                                q = !1,
                                X = !(0 == W.env("BLUEBIRD_DEBUG")),
                                Z = !(0 == W.env("BLUEBIRD_WARNINGS") || !X && !W.env("BLUEBIRD_WARNINGS")),
                                $ = !(0 == W.env("BLUEBIRD_LONG_STACK_TRACES") || !X && !W.env("BLUEBIRD_LONG_STACK_TRACES")),
                                J = 0 != W.env("BLUEBIRD_W_FORGOTTEN_RETURN") && (Z || !!W.env("BLUEBIRD_W_FORGOTTEN_RETURN"));
                            n.prototype.suppressUnhandledRejections = function() {
                                var e = this._target();
                                e._bitField = -1048577 & e._bitField | 524288
                            }, n.prototype._ensurePossibleRejectionHandled = function() {
                                if (0 == (524288 & this._bitField)) {
                                    this._setRejectionIsUnhandled();
                                    var e = this;
                                    setTimeout(function() {
                                        e._notifyUnhandledRejection()
                                    }, 1)
                                }
                            }, n.prototype._notifyUnhandledRejectionIsHandled = function() {
                                O("rejectionHandled", M, void 0, this)
                            }, n.prototype._setReturnedNonUndefined = function() {
                                this._bitField = 268435456 | this._bitField
                            }, n.prototype._returnedNonUndefined = function() {
                                return 0 != (268435456 & this._bitField)
                            }, n.prototype._notifyUnhandledRejection = function() {
                                if (this._isRejectionUnhandled()) {
                                    var e = this._settledValue();
                                    this._setUnhandledRejectionIsNotified(), O("unhandledRejection", N, e, this)
                                }
                            }, n.prototype._setUnhandledRejectionIsNotified = function() {
                                this._bitField = 262144 | this._bitField
                            }, n.prototype._unsetUnhandledRejectionIsNotified = function() {
                                this._bitField = -262145 & this._bitField
                            }, n.prototype._isUnhandledRejectionNotified = function() {
                                return (262144 & this._bitField) > 0
                            }, n.prototype._setRejectionIsUnhandled = function() {
                                this._bitField = 1048576 | this._bitField
                            }, n.prototype._unsetRejectionIsUnhandled = function() {
                                this._bitField = -1048577 & this._bitField, this._isUnhandledRejectionNotified() && (this._unsetUnhandledRejectionIsNotified(), this._notifyUnhandledRejectionIsHandled())
                            }, n.prototype._isRejectionUnhandled = function() {
                                return (1048576 & this._bitField) > 0
                            }, n.prototype._warn = function(e, t, n) {
                                return y(e, t, n || this)
                            }, n.onPossiblyUnhandledRejection = function(e) {
                                var t = L();
                                N = "function" == typeof e ? null === t ? e : W.domainBind(t, e) : void 0
                            }, n.onUnhandledRejectionHandled = function(e) {
                                var t = L();
                                M = "function" == typeof e ? null === t ? e : W.domainBind(t, e) : void 0
                            };
                            var Q = function() {};
                            n.longStackTraces = function() {
                                if (D.haveItemsQueued() && !se.longStackTraces) throw new Error("cannot enable long stack traces after promises have been created\n\n    See http://goo.gl/MqrFmX\n");
                                if (!se.longStackTraces && R()) {
                                    var e = n.prototype._captureStackTrace,
                                        t = n.prototype._attachExtraTrace,
                                        o = n.prototype._dereferenceTrace;
                                    se.longStackTraces = !0, Q = function() {
                                        if (D.haveItemsQueued() && !se.longStackTraces) throw new Error("cannot enable long stack traces after promises have been created\n\n    See http://goo.gl/MqrFmX\n");
                                        n.prototype._captureStackTrace = e, n.prototype._attachExtraTrace = t, n.prototype._dereferenceTrace = o, r.deactivateLongStackTraces(), D.enableTrampoline(), se.longStackTraces = !1
                                    }, n.prototype._captureStackTrace = h, n.prototype._attachExtraTrace = _, n.prototype._dereferenceTrace = m, r.activateLongStackTraces(), D.disableTrampolineIfNecessary()
                                }
                            }, n.hasLongStackTraces = function() {
                                return se.longStackTraces && R()
                            };
                            var ee = function() {
                                    try {
                                        if ("function" == typeof CustomEvent) {
                                            var e = new CustomEvent("CustomEvent");
                                            return W.global.dispatchEvent(e),
                                                function(e, t) {
                                                    var n = {
                                                        detail: t,
                                                        cancelable: !0
                                                    };
                                                    V.defineProperty(n, "promise", {
                                                        value: t.promise
                                                    }), V.defineProperty(n, "reason", {
                                                        value: t.reason
                                                    });
                                                    var r = new CustomEvent(e.toLowerCase(), n);
                                                    return !W.global.dispatchEvent(r)
                                                }
                                        }
                                        if ("function" == typeof Event) {
                                            var e = new Event("CustomEvent");
                                            return W.global.dispatchEvent(e),
                                                function(e, t) {
                                                    var n = new Event(e.toLowerCase(), {
                                                        cancelable: !0
                                                    });
                                                    return n.detail = t, V.defineProperty(n, "promise", {
                                                        value: t.promise
                                                    }), V.defineProperty(n, "reason", {
                                                        value: t.reason
                                                    }), !W.global.dispatchEvent(n)
                                                }
                                        }
                                        var e = document.createEvent("CustomEvent");
                                        return e.initCustomEvent("testingtheevent", !1, !0, {}), W.global.dispatchEvent(e),
                                            function(e, t) {
                                                var n = document.createEvent("CustomEvent");
                                                return n.initCustomEvent(e.toLowerCase(), !1, !0, t), !W.global.dispatchEvent(n)
                                            }
                                    } catch (e) {}
                                    return function() {
                                        return !1
                                    }
                                }(),
                                te = function() {
                                    return W.isNode ? function() {
                                        return t.emit.apply(t, arguments)
                                    } : W.global ? function(e) {
                                        var t = "on" + e.toLowerCase(),
                                            n = W.global[t];
                                        return !!n && (n.apply(W.global, [].slice.call(arguments, 1)), !0)
                                    } : function() {
                                        return !1
                                    }
                                }(),
                                ne = {
                                    promiseCreated: o,
                                    promiseFulfilled: o,
                                    promiseRejected: o,
                                    promiseResolved: o,
                                    promiseCancelled: o,
                                    promiseChained: function(e, t, n) {
                                        return {
                                            promise: t,
                                            child: n
                                        }
                                    },
                                    warning: function(e, t) {
                                        return {
                                            warning: t
                                        }
                                    },
                                    unhandledRejection: function(e, t, n) {
                                        return {
                                            reason: t,
                                            promise: n
                                        }
                                    },
                                    rejectionHandled: o
                                },
                                re = function(e) {
                                    var t = !1;
                                    try {
                                        t = te.apply(null, arguments)
                                    } catch (e) {
                                        D.throwLater(e), t = !0
                                    }
                                    var n = !1;
                                    try {
                                        n = ee(e, ne[e].apply(null, arguments))
                                    } catch (e) {
                                        D.throwLater(e), n = !0
                                    }
                                    return n || t
                                };
                            n.config = function(e) {
                                if (e = Object(e), "longStackTraces" in e && (e.longStackTraces ? n.longStackTraces() : !e.longStackTraces && n.hasLongStackTraces() && Q()), "warnings" in e) {
                                    var t = e.warnings;
                                    se.warnings = !!t, J = se.warnings, W.isObject(t) && "wForgottenReturn" in t && (J = !!t.wForgottenReturn)
                                }
                                if ("cancellation" in e && e.cancellation && !se.cancellation) {
                                    if (D.haveItemsQueued()) throw new Error("cannot enable cancellation after promises are in use");
                                    n.prototype._clearCancellationData = l, n.prototype._propagateFrom = f, n.prototype._onCancel = s, n.prototype._setOnCancel = c, n.prototype._attachCancellationCallback = u, n.prototype._execute = a, oe = f, se.cancellation = !0
                                }
                                return "monitoring" in e && (e.monitoring && !se.monitoring ? (se.monitoring = !0, n.prototype._fireEvent = re) : !e.monitoring && se.monitoring && (se.monitoring = !1, n.prototype._fireEvent = i)), n
                            }, n.prototype._fireEvent = i, n.prototype._execute = function(e, t, n) {
                                try {
                                    e(t, n)
                                } catch (e) {
                                    return e
                                }
                            }, n.prototype._onCancel = function() {}, n.prototype._setOnCancel = function(e) {}, n.prototype._attachCancellationCallback = function(e) {}, n.prototype._captureStackTrace = function() {}, n.prototype._attachExtraTrace = function() {}, n.prototype._dereferenceTrace = function() {}, n.prototype._clearCancellationData = function() {}, n.prototype._propagateFrom = function(e, t) {};
                            var oe = d,
                                ie = function() {
                                    return !1
                                },
                                ae = /[\/<\(]([^:\/]+):(\d+):(?:\d+)\)?\s*$/;
                            W.inherits(P, Error), r.CapturedTrace = P, P.prototype.uncycle = function() {
                                var e = this._length;
                                if (!(e < 2)) {
                                    for (var t = [], n = {}, r = 0, o = this; void 0 !== o; ++r) t.push(o), o = o._parent;
                                    e = this._length = r;
                                    for (var r = e - 1; r >= 0; --r) {
                                        var i = t[r].stack;
                                        void 0 === n[i] && (n[i] = r)
                                    }
                                    for (var r = 0; r < e; ++r) {
                                        var a = t[r].stack,
                                            u = n[a];
                                        if (void 0 !== u && u !== r) {
                                            u > 0 && (t[u - 1]._parent = void 0, t[u - 1]._length = 1), t[r]._parent = void 0, t[r]._length = 1;
                                            var s = r > 0 ? t[r - 1] : this;
                                            u < e - 1 ? (s._parent = t[u + 1], s._parent.uncycle(), s._length = s._parent._length + 1) : (s._parent = void 0, s._length = 1);
                                            for (var c = s._length + 1, l = r - 2; l >= 0; --l) t[l]._length = c, c++;
                                            return
                                        }
                                    }
                                }
                            }, P.prototype.attachExtraTrace = function(e) {
                                if (!e.__stackCleaned__) {
                                    this.uncycle();
                                    for (var t = I(e), n = t.message, r = [t.stack], o = this; void 0 !== o;) r.push(T(o.stack.split("\n"))), o = o._parent;
                                    w(r), E(r), W.notEnumerableProp(e, "stack", b(n, r)), W.notEnumerableProp(e, "__stackCleaned__", !0)
                                }
                            };
                            var ue = function() {
                                var e = /^\s*at\s*/,
                                    t = function(e, t) {
                                        return "string" == typeof e ? e : void 0 !== t.name && void 0 !== t.message ? t.toString() : A(t)
                                    };
                                if ("number" == typeof Error.stackTraceLimit && "function" == typeof Error.captureStackTrace) {
                                    Error.stackTraceLimit += 6, K = e, Y = t;
                                    var n = Error.captureStackTrace;
                                    return ie = function(e) {
                                            return G.test(e)
                                        },
                                        function(e, t) {
                                            Error.stackTraceLimit += 6, n(e, t), Error.stackTraceLimit -= 6
                                        }
                                }
                                var r = new Error;
                                if ("string" == typeof r.stack && r.stack.split("\n")[0].indexOf("stackDetection@") >= 0) return K = /@/, Y = t, q = !0,
                                    function(e) {
                                        e.stack = (new Error).stack
                                    };
                                var o;
                                try {
                                    throw new Error
                                } catch (e) {
                                    o = "stack" in e
                                }
                                return "stack" in r || !o || "number" != typeof Error.stackTraceLimit ? (Y = function(e, t) {
                                    return "string" == typeof e ? e : "object" != typeof t && "function" != typeof t || void 0 === t.name || void 0 === t.message ? A(t) : t.toString()
                                }, null) : (K = e, Y = t, function(e) {
                                    Error.stackTraceLimit += 6;
                                    try {
                                        throw new Error
                                    } catch (t) {
                                        e.stack = t.stack
                                    }
                                    Error.stackTraceLimit -= 6
                                })
                            }();
                            "undefined" != typeof console && void 0 !== console.warn && (F = function(e) {
                                console.warn(e)
                            }, W.isNode && t.stderr.isTTY ? F = function(e, t) {
                                var n = t ? "\x1b[33m" : "\x1b[31m";
                                console.warn(n + e + "\x1b[0m\n")
                            } : W.isNode || "string" != typeof(new Error).stack || (F = function(e, t) {
                                console.warn("%c" + e, t ? "color: darkorange" : "color: red")
                            }));
                            var se = {
                                warnings: Z,
                                longStackTraces: !1,
                                cancellation: !1,
                                monitoring: !1
                            };
                            return $ && n.longStackTraces(), {
                                longStackTraces: function() {
                                    return se.longStackTraces
                                },
                                warnings: function() {
                                    return se.warnings
                                },
                                cancellation: function() {
                                    return se.cancellation
                                },
                                monitoring: function() {
                                    return se.monitoring
                                },
                                propagateFromFunction: function() {
                                    return oe
                                },
                                boundValueFunction: function() {
                                    return p
                                },
                                checkForgottenReturns: g,
                                setBounds: j,
                                warn: y,
                                deprecated: v,
                                CapturedTrace: P,
                                fireDomEvent: ee,
                                fireGlobalEvent: te
                            }
                        }
                    }, {
                        "./errors": 12,
                        "./es5": 13,
                        "./util": 36
                    }],
                    10: [function(e, t, n) {
                        "use strict";
                        t.exports = function(e) {
                            function t() {
                                return this.value
                            }

                            function n() {
                                throw this.reason
                            }
                            e.prototype.return = e.prototype.thenReturn = function(n) {
                                return n instanceof e && n.suppressUnhandledRejections(), this._then(t, void 0, void 0, {
                                    value: n
                                }, void 0)
                            }, e.prototype.throw = e.prototype.thenThrow = function(e) {
                                return this._then(n, void 0, void 0, {
                                    reason: e
                                }, void 0)
                            }, e.prototype.catchThrow = function(e) {
                                if (arguments.length <= 1) return this._then(void 0, n, void 0, {
                                    reason: e
                                }, void 0);
                                var t = arguments[1],
                                    r = function() {
                                        throw t
                                    };
                                return this.caught(e, r)
                            }, e.prototype.catchReturn = function(n) {
                                if (arguments.length <= 1) return n instanceof e && n.suppressUnhandledRejections(), this._then(void 0, t, void 0, {
                                    value: n
                                }, void 0);
                                var r = arguments[1];
                                r instanceof e && r.suppressUnhandledRejections();
                                var o = function() {
                                    return r
                                };
                                return this.caught(n, o)
                            }
                        }
                    }, {}],
                    11: [function(e, t, n) {
                        "use strict";
                        t.exports = function(e, t) {
                            function n() {
                                return i(this)
                            }

                            function r(e, n) {
                                return o(e, n, t, t)
                            }
                            var o = e.reduce,
                                i = e.all;
                            e.prototype.each = function(e) {
                                return o(this, e, t, 0)._then(n, void 0, void 0, this, void 0)
                            }, e.prototype.mapSeries = function(e) {
                                return o(this, e, t, t)
                            }, e.each = function(e, r) {
                                return o(e, r, t, 0)._then(n, void 0, void 0, e, void 0)
                            }, e.mapSeries = r
                        }
                    }, {}],
                    12: [function(e, t, n) {
                        "use strict";

                        function r(e, t) {
                            function n(r) {
                                if (!(this instanceof n)) return new n(r);
                                f(this, "message", "string" == typeof r ? r : t), f(this, "name", e), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : Error.call(this)
                            }
                            return l(n, Error), n
                        }

                        function o(e) {
                            if (!(this instanceof o)) return new o(e);
                            f(this, "name", "OperationalError"), f(this, "message", e), this.cause = e, this.isOperational = !0, e instanceof Error ? (f(this, "message", e.message), f(this, "stack", e.stack)) : Error.captureStackTrace && Error.captureStackTrace(this, this.constructor)
                        }
                        var i, a, u = e("./es5"),
                            s = u.freeze,
                            c = e("./util"),
                            l = c.inherits,
                            f = c.notEnumerableProp,
                            d = r("Warning", "warning"),
                            p = r("CancellationError", "cancellation error"),
                            h = r("TimeoutError", "timeout error"),
                            _ = r("AggregateError", "aggregate error");
                        try {
                            i = TypeError, a = RangeError
                        } catch (e) {
                            i = r("TypeError", "type error"), a = r("RangeError", "range error")
                        }
                        for (var m = "join pop push shift unshift slice filter forEach some every map indexOf lastIndexOf reduce reduceRight sort reverse".split(" "), g = 0; g < m.length; ++g) "function" == typeof Array.prototype[m[g]] && (_.prototype[m[g]] = Array.prototype[m[g]]);
                        u.defineProperty(_.prototype, "length", {
                            value: 0,
                            configurable: !1,
                            writable: !0,
                            enumerable: !0
                        }), _.prototype.isOperational = !0;
                        var v = 0;
                        _.prototype.toString = function() {
                            var e = Array(4 * v + 1).join(" "),
                                t = "\n" + e + "AggregateError of:\n";
                            v++, e = Array(4 * v + 1).join(" ");
                            for (var n = 0; n < this.length; ++n) {
                                for (var r = this[n] === this ? "[Circular AggregateError]" : this[n] + "", o = r.split("\n"), i = 0; i < o.length; ++i) o[i] = e + o[i];
                                r = o.join("\n"), t += r + "\n"
                            }
                            return v--, t
                        }, l(o, Error);
                        var y = Error.__BluebirdErrorTypes__;
                        y || (y = s({
                            CancellationError: p,
                            TimeoutError: h,
                            OperationalError: o,
                            RejectionError: o,
                            AggregateError: _
                        }), u.defineProperty(Error, "__BluebirdErrorTypes__", {
                            value: y,
                            writable: !1,
                            enumerable: !1,
                            configurable: !1
                        })), t.exports = {
                            Error: Error,
                            TypeError: i,
                            RangeError: a,
                            CancellationError: y.CancellationError,
                            OperationalError: y.OperationalError,
                            TimeoutError: y.TimeoutError,
                            AggregateError: y.AggregateError,
                            Warning: d
                        }
                    }, {
                        "./es5": 13,
                        "./util": 36
                    }],
                    13: [function(e, t, n) {
                        var r = function() {
                            "use strict";
                            return void 0 === this
                        }();
                        if (r) t.exports = {
                            freeze: Object.freeze,
                            defineProperty: Object.defineProperty,
                            getDescriptor: Object.getOwnPropertyDescriptor,
                            keys: Object.keys,
                            names: Object.getOwnPropertyNames,
                            getPrototypeOf: Object.getPrototypeOf,
                            isArray: Array.isArray,
                            isES5: r,
                            propertyIsWritable: function(e, t) {
                                var n = Object.getOwnPropertyDescriptor(e, t);
                                return !(n && !n.writable && !n.set)
                            }
                        };
                        else {
                            var o = {}.hasOwnProperty,
                                i = {}.toString,
                                a = {}.constructor.prototype,
                                u = function(e) {
                                    var t = [];
                                    for (var n in e) o.call(e, n) && t.push(n);
                                    return t
                                },
                                s = function(e, t) {
                                    return {
                                        value: e[t]
                                    }
                                },
                                c = function(e, t, n) {
                                    return e[t] = n.value, e
                                },
                                l = function(e) {
                                    return e
                                },
                                f = function(e) {
                                    try {
                                        return Object(e).constructor.prototype
                                    } catch (e) {
                                        return a
                                    }
                                },
                                d = function(e) {
                                    try {
                                        return "[object Array]" === i.call(e)
                                    } catch (e) {
                                        return !1
                                    }
                                };
                            t.exports = {
                                isArray: d,
                                keys: u,
                                names: u,
                                defineProperty: c,
                                getDescriptor: s,
                                freeze: l,
                                getPrototypeOf: f,
                                isES5: r,
                                propertyIsWritable: function() {
                                    return !0
                                }
                            }
                        }
                    }, {}],
                    14: [function(e, t, n) {
                        "use strict";
                        t.exports = function(e, t) {
                            var n = e.map;
                            e.prototype.filter = function(e, r) {
                                return n(this, e, r, t)
                            }, e.filter = function(e, r, o) {
                                return n(e, r, o, t)
                            }
                        }
                    }, {}],
                    15: [function(e, t, n) {
                        "use strict";
                        t.exports = function(t, n, r) {
                            function o(e, t, n) {
                                this.promise = e, this.type = t, this.handler = n, this.called = !1, this.cancelPromise = null
                            }

                            function i(e) {
                                this.finallyHandler = e
                            }

                            function a(e, t) {
                                return null != e.cancelPromise && (arguments.length > 1 ? e.cancelPromise._reject(t) : e.cancelPromise._cancel(), e.cancelPromise = null, !0)
                            }

                            function u() {
                                return c.call(this, this.promise._target()._settledValue())
                            }

                            function s(e) {
                                if (!a(this, e)) return d.e = e, d
                            }

                            function c(e) {
                                var o = this.promise,
                                    c = this.handler;
                                if (!this.called) {
                                    this.called = !0;
                                    var l = this.isFinallyHandler() ? c.call(o._boundValue()) : c.call(o._boundValue(), e);
                                    if (l === r) return l;
                                    if (void 0 !== l) {
                                        o._setReturnedNonUndefined();
                                        var p = n(l, o);
                                        if (p instanceof t) {
                                            if (null != this.cancelPromise) {
                                                if (p._isCancelled()) {
                                                    var h = new f("late cancellation observer");
                                                    return o._attachExtraTrace(h), d.e = h, d
                                                }
                                                p.isPending() && p._attachCancellationCallback(new i(this))
                                            }
                                            return p._then(u, s, void 0, this, void 0)
                                        }
                                    }
                                }
                                return o.isRejected() ? (a(this), d.e = e, d) : (a(this), e)
                            }
                            var l = e("./util"),
                                f = t.CancellationError,
                                d = l.errorObj,
                                p = e("./catch_filter")(r);
                            return o.prototype.isFinallyHandler = function() {
                                return 0 === this.type
                            }, i.prototype._resultCancelled = function() {
                                a(this.finallyHandler)
                            }, t.prototype._passThrough = function(e, t, n, r) {
                                return "function" != typeof e ? this.then() : this._then(n, r, void 0, new o(this, t, e), void 0)
                            }, t.prototype.lastly = t.prototype.finally = function(e) {
                                return this._passThrough(e, 0, c, c)
                            }, t.prototype.tap = function(e) {
                                return this._passThrough(e, 1, c)
                            }, t.prototype.tapCatch = function(e) {
                                var n = arguments.length;
                                if (1 === n) return this._passThrough(e, 1, void 0, c);
                                var r, o = new Array(n - 1),
                                    i = 0;
                                for (r = 0; r < n - 1; ++r) {
                                    var a = arguments[r];
                                    if (!l.isObject(a)) return t.reject(new TypeError("tapCatch statement predicate: expecting an object but got " + l.classString(a)));
                                    o[i++] = a
                                }
                                o.length = i;
                                var u = arguments[r];
                                return this._passThrough(p(o, u, this), 1, void 0, c)
                            }, o
                        }
                    }, {
                        "./catch_filter": 7,
                        "./util": 36
                    }],
                    16: [function(e, t, n) {
                        "use strict";
                        t.exports = function(t, n, r, o, i, a) {
                            function u(e, n, r) {
                                for (var i = 0; i < n.length; ++i) {
                                    r._pushContext();
                                    var a = p(n[i])(e);
                                    if (r._popContext(), a === d) {
                                        r._pushContext();
                                        var u = t.reject(d.e);
                                        return r._popContext(), u
                                    }
                                    var s = o(a, r);
                                    if (s instanceof t) return s
                                }
                                return null
                            }

                            function s(e, n, o, i) {
                                if (a.cancellation()) {
                                    var u = new t(r),
                                        s = this._finallyPromise = new t(r);
                                    this._promise = u.lastly(function() {
                                        return s
                                    }), u._captureStackTrace(), u._setOnCancel(this)
                                } else {
                                    (this._promise = new t(r))._captureStackTrace()
                                }
                                this._stack = i, this._generatorFunction = e, this._receiver = n, this._generator = void 0, this._yieldHandlers = "function" == typeof o ? [o].concat(h) : h, this._yieldedPromise = null, this._cancellationPhase = !1
                            }
                            var c = e("./errors"),
                                l = c.TypeError,
                                f = e("./util"),
                                d = f.errorObj,
                                p = f.tryCatch,
                                h = [];
                            f.inherits(s, i), s.prototype._isResolved = function() {
                                return null === this._promise
                            }, s.prototype._cleanup = function() {
                                this._promise = this._generator = null, a.cancellation() && null !== this._finallyPromise && (this._finallyPromise._fulfill(), this._finallyPromise = null)
                            }, s.prototype._promiseCancelled = function() {
                                if (!this._isResolved()) {
                                    var e, n = void 0 !== this._generator.return;
                                    if (n) this._promise._pushContext(), e = p(this._generator.return).call(this._generator, void 0), this._promise._popContext();
                                    else {
                                        var r = new t.CancellationError("generator .return() sentinel");
                                        t.coroutine.returnSentinel = r, this._promise._attachExtraTrace(r), this._promise._pushContext(), e = p(this._generator.throw).call(this._generator, r), this._promise._popContext()
                                    }
                                    this._cancellationPhase = !0, this._yieldedPromise = null, this._continue(e)
                                }
                            }, s.prototype._promiseFulfilled = function(e) {
                                this._yieldedPromise = null, this._promise._pushContext();
                                var t = p(this._generator.next).call(this._generator, e);
                                this._promise._popContext(), this._continue(t)
                            }, s.prototype._promiseRejected = function(e) {
                                this._yieldedPromise = null, this._promise._attachExtraTrace(e), this._promise._pushContext();
                                var t = p(this._generator.throw).call(this._generator, e);
                                this._promise._popContext(), this._continue(t)
                            }, s.prototype._resultCancelled = function() {
                                if (this._yieldedPromise instanceof t) {
                                    var e = this._yieldedPromise;
                                    this._yieldedPromise = null, e.cancel()
                                }
                            }, s.prototype.promise = function() {
                                return this._promise
                            }, s.prototype._run = function() {
                                this._generator = this._generatorFunction.call(this._receiver), this._receiver = this._generatorFunction = void 0, this._promiseFulfilled(void 0)
                            }, s.prototype._continue = function(e) {
                                var n = this._promise;
                                if (e === d) return this._cleanup(), this._cancellationPhase ? n.cancel() : n._rejectCallback(e.e, !1);
                                var r = e.value;
                                if (!0 === e.done) return this._cleanup(), this._cancellationPhase ? n.cancel() : n._resolveCallback(r);
                                var i = o(r, this._promise);
                                if (!(i instanceof t) && null === (i = u(i, this._yieldHandlers, this._promise))) return void this._promiseRejected(new l("A value %s was yielded that could not be treated as a promise\n\n    See http://goo.gl/MqrFmX\n\n".replace("%s", String(r)) + "From coroutine:\n" + this._stack.split("\n").slice(1, -7).join("\n")));
                                i = i._target();
                                var a = i._bitField;
                                0 == (50397184 & a) ? (this._yieldedPromise = i, i._proxy(this, null)) : 0 != (33554432 & a) ? t._async.invoke(this._promiseFulfilled, this, i._value()) : 0 != (16777216 & a) ? t._async.invoke(this._promiseRejected, this, i._reason()) : this._promiseCancelled()
                            }, t.coroutine = function(e, t) {
                                if ("function" != typeof e) throw new l("generatorFunction must be a function\n\n    See http://goo.gl/MqrFmX\n");
                                var n = Object(t).yieldHandler,
                                    r = s,
                                    o = (new Error).stack;
                                return function() {
                                    var t = e.apply(this, arguments),
                                        i = new r(void 0, void 0, n, o),
                                        a = i.promise();
                                    return i._generator = t, i._promiseFulfilled(void 0), a
                                }
                            }, t.coroutine.addYieldHandler = function(e) {
                                if ("function" != typeof e) throw new l("expecting a function but got " + f.classString(e));
                                h.push(e)
                            }, t.spawn = function(e) {
                                if (a.deprecated("Promise.spawn()", "Promise.coroutine()"), "function" != typeof e) return n("generatorFunction must be a function\n\n    See http://goo.gl/MqrFmX\n");
                                var r = new s(e, this),
                                    o = r.promise();
                                return r._run(t.spawn), o
                            }
                        }
                    }, {
                        "./errors": 12,
                        "./util": 36
                    }],
                    17: [function(e, t, n) {
                        "use strict";
                        t.exports = function(t, n, r, o, i, a) {
                            var u = e("./util");
                            u.canEvaluate, u.tryCatch, u.errorObj;
                            t.join = function() {
                                var e, t = arguments.length - 1;
                                if (t > 0 && "function" == typeof arguments[t]) {
                                    e = arguments[t];
                                    var r
                                }
                                var o = [].slice.call(arguments);
                                e && o.pop();
                                var r = new n(o).promise();
                                return void 0 !== e ? r.spread(e) : r
                            }
                        }
                    }, {
                        "./util": 36
                    }],
                    18: [function(e, t, n) {
                        "use strict";
                        t.exports = function(t, n, r, o, i, a) {
                            function u(e, t, n, r) {
                                this.constructor$(e), this._promise._captureStackTrace();
                                var o = c();
                                this._callback = null === o ? t : l.domainBind(o, t), this._preservedValues = r === i ? new Array(this.length()) : null, this._limit = n, this._inFlight = 0, this._queue = [], p.invoke(this._asyncInit, this, void 0)
                            }

                            function s(e, n, o, i) {
                                if ("function" != typeof n) return r("expecting a function but got " + l.classString(n));
                                var a = 0;
                                if (void 0 !== o) {
                                    if ("object" != typeof o || null === o) return t.reject(new TypeError("options argument must be an object but it is " + l.classString(o)));
                                    if ("number" != typeof o.concurrency) return t.reject(new TypeError("'concurrency' must be a number but it is " + l.classString(o.concurrency)));
                                    a = o.concurrency
                                }
                                return a = "number" == typeof a && isFinite(a) && a >= 1 ? a : 0, new u(e, n, a, i).promise()
                            }
                            var c = t._getDomain,
                                l = e("./util"),
                                f = l.tryCatch,
                                d = l.errorObj,
                                p = t._async;
                            l.inherits(u, n), u.prototype._asyncInit = function() {
                                this._init$(void 0, -2)
                            }, u.prototype._init = function() {}, u.prototype._promiseFulfilled = function(e, n) {
                                var r = this._values,
                                    i = this.length(),
                                    u = this._preservedValues,
                                    s = this._limit;
                                if (n < 0) {
                                    if (n = -1 * n - 1, r[n] = e, s >= 1 && (this._inFlight--, this._drainQueue(), this._isResolved())) return !0
                                } else {
                                    if (s >= 1 && this._inFlight >= s) return r[n] = e, this._queue.push(n), !1;
                                    null !== u && (u[n] = e);
                                    var c = this._promise,
                                        l = this._callback,
                                        p = c._boundValue();
                                    c._pushContext();
                                    var h = f(l).call(p, e, n, i),
                                        _ = c._popContext();
                                    if (a.checkForgottenReturns(h, _, null !== u ? "Promise.filter" : "Promise.map", c), h === d) return this._reject(h.e), !0;
                                    var m = o(h, this._promise);
                                    if (m instanceof t) {
                                        m = m._target();
                                        var g = m._bitField;
                                        if (0 == (50397184 & g)) return s >= 1 && this._inFlight++, r[n] = m, m._proxy(this, -1 * (n + 1)), !1;
                                        if (0 == (33554432 & g)) return 0 != (16777216 & g) ? (this._reject(m._reason()), !0) : (this._cancel(), !0);
                                        h = m._value()
                                    }
                                    r[n] = h
                                }
                                return ++this._totalResolved >= i && (null !== u ? this._filter(r, u) : this._resolve(r), !0)
                            }, u.prototype._drainQueue = function() {
                                for (var e = this._queue, t = this._limit, n = this._values; e.length > 0 && this._inFlight < t;) {
                                    if (this._isResolved()) return;
                                    var r = e.pop();
                                    this._promiseFulfilled(n[r], r)
                                }
                            }, u.prototype._filter = function(e, t) {
                                for (var n = t.length, r = new Array(n), o = 0, i = 0; i < n; ++i) e[i] && (r[o++] = t[i]);
                                r.length = o, this._resolve(r)
                            }, u.prototype.preservedValues = function() {
                                return this._preservedValues
                            }, t.prototype.map = function(e, t) {
                                return s(this, e, t, null)
                            }, t.map = function(e, t, n, r) {
                                return s(e, t, n, r)
                            }
                        }
                    }, {
                        "./util": 36
                    }],
                    19: [function(e, t, n) {
                        "use strict";
                        t.exports = function(t, n, r, o, i) {
                            var a = e("./util"),
                                u = a.tryCatch;
                            t.method = function(e) {
                                if ("function" != typeof e) throw new t.TypeError("expecting a function but got " + a.classString(e));
                                return function() {
                                    var r = new t(n);
                                    r._captureStackTrace(), r._pushContext();
                                    var o = u(e).apply(this, arguments),
                                        a = r._popContext();
                                    return i.checkForgottenReturns(o, a, "Promise.method", r), r._resolveFromSyncValue(o), r
                                }
                            }, t.attempt = t.try = function(e) {
                                if ("function" != typeof e) return o("expecting a function but got " + a.classString(e));
                                var r = new t(n);
                                r._captureStackTrace(), r._pushContext();
                                var s;
                                if (arguments.length > 1) {
                                    i.deprecated("calling Promise.try with more than 1 argument");
                                    var c = arguments[1],
                                        l = arguments[2];
                                    s = a.isArray(c) ? u(e).apply(l, c) : u(e).call(l, c)
                                } else s = u(e)();
                                var f = r._popContext();
                                return i.checkForgottenReturns(s, f, "Promise.try", r), r._resolveFromSyncValue(s), r
                            }, t.prototype._resolveFromSyncValue = function(e) {
                                e === a.errorObj ? this._rejectCallback(e.e, !1) : this._resolveCallback(e, !0)
                            }
                        }
                    }, {
                        "./util": 36
                    }],
                    20: [function(e, t, n) {
                        "use strict";

                        function r(e) {
                            return e instanceof Error && l.getPrototypeOf(e) === Error.prototype
                        }

                        function o(e) {
                            var t;
                            if (r(e)) {
                                t = new c(e), t.name = e.name, t.message = e.message, t.stack = e.stack;
                                for (var n = l.keys(e), o = 0; o < n.length; ++o) {
                                    var i = n[o];
                                    f.test(i) || (t[i] = e[i])
                                }
                                return t
                            }
                            return a.markAsOriginatingFromRejection(e), e
                        }

                        function i(e, t) {
                            return function(n, r) {
                                if (null !== e) {
                                    if (n) {
                                        var i = o(u(n));
                                        e._attachExtraTrace(i), e._reject(i)
                                    } else if (t) {
                                        var a = [].slice.call(arguments, 1);
                                        e._fulfill(a)
                                    } else e._fulfill(r);
                                    e = null
                                }
                            }
                        }
                        var a = e("./util"),
                            u = a.maybeWrapAsError,
                            s = e("./errors"),
                            c = s.OperationalError,
                            l = e("./es5"),
                            f = /^(?:name|message|stack|cause)$/;
                        t.exports = i
                    }, {
                        "./errors": 12,
                        "./es5": 13,
                        "./util": 36
                    }],
                    21: [function(e, t, n) {
                        "use strict";
                        t.exports = function(t) {
                            function n(e, t) {
                                var n = this;
                                if (!i.isArray(e)) return r.call(n, e, t);
                                var o = u(t).apply(n._boundValue(), [null].concat(e));
                                o === s && a.throwLater(o.e)
                            }

                            function r(e, t) {
                                var n = this,
                                    r = n._boundValue(),
                                    o = void 0 === e ? u(t).call(r, null) : u(t).call(r, null, e);
                                o === s && a.throwLater(o.e)
                            }

                            function o(e, t) {
                                var n = this;
                                if (!e) {
                                    var r = new Error(e + "");
                                    r.cause = e, e = r
                                }
                                var o = u(t).call(n._boundValue(), e);
                                o === s && a.throwLater(o.e)
                            }
                            var i = e("./util"),
                                a = t._async,
                                u = i.tryCatch,
                                s = i.errorObj;
                            t.prototype.asCallback = t.prototype.nodeify = function(e, t) {
                                if ("function" == typeof e) {
                                    var i = r;
                                    void 0 !== t && Object(t).spread && (i = n), this._then(i, o, void 0, this, e)
                                }
                                return this
                            }
                        }
                    }, {
                        "./util": 36
                    }],
                    22: [function(e, n, r) {
                        "use strict";
                        n.exports = function() {
                            function r() {}

                            function o(e, t) {
                                if (null == e || e.constructor !== i) throw new y("the promise constructor cannot be invoked directly\n\n    See http://goo.gl/MqrFmX\n");
                                if ("function" != typeof t) throw new y("expecting a function but got " + h.classString(t))
                            }

                            function i(e) {
                                e !== E && o(this, e), this._bitField = 0, this._fulfillmentHandler0 = void 0, this._rejectionHandler0 = void 0, this._promise0 = void 0, this._receiver0 = void 0, this._resolveFromExecutor(e), this._promiseCreated(), this._fireEvent("promiseCreated", this)
                            }

                            function a(e) {
                                this.promise._resolveCallback(e)
                            }

                            function u(e) {
                                this.promise._rejectCallback(e, !1)
                            }

                            function s(e) {
                                var t = new i(E);
                                t._fulfillmentHandler0 = e, t._rejectionHandler0 = e, t._promise0 = e, t._receiver0 = e
                            }
                            var c, l = function() {
                                    return new y("circular promise resolution chain\n\n    See http://goo.gl/MqrFmX\n")
                                },
                                f = function() {
                                    return new i.PromiseInspection(this._target())
                                },
                                d = function(e) {
                                    return i.reject(new y(e))
                                },
                                p = {},
                                h = e("./util");
                            c = h.isNode ? function() {
                                var e = t.domain;
                                return void 0 === e && (e = null), e
                            } : function() {
                                return null
                            }, h.notEnumerableProp(i, "_getDomain", c);
                            var _ = e("./es5"),
                                m = e("./async"),
                                g = new m;
                            _.defineProperty(i, "_async", {
                                value: g
                            });
                            var v = e("./errors"),
                                y = i.TypeError = v.TypeError;
                            i.RangeError = v.RangeError;
                            var b = i.CancellationError = v.CancellationError;
                            i.TimeoutError = v.TimeoutError, i.OperationalError = v.OperationalError, i.RejectionError = v.OperationalError, i.AggregateError = v.AggregateError;
                            var E = function() {},
                                w = {},
                                T = {},
                                x = e("./thenables")(i, E),
                                I = e("./promise_array")(i, E, x, d, r),
                                S = e("./context")(i),
                                O = S.create,
                                A = e("./debuggability")(i, S),
                                k = (A.CapturedTrace, e("./finally")(i, x, T)),
                                R = e("./catch_filter")(T),
                                C = e("./nodeback"),
                                j = h.errorObj,
                                P = h.tryCatch;
                            return i.prototype.toString = function() {
                                return "[object Promise]"
                            }, i.prototype.caught = i.prototype.catch = function(e) {
                                var t = arguments.length;
                                if (t > 1) {
                                    var n, r = new Array(t - 1),
                                        o = 0;
                                    for (n = 0; n < t - 1; ++n) {
                                        var i = arguments[n];
                                        if (!h.isObject(i)) return d("Catch statement predicate: expecting an object but got " + h.classString(i));
                                        r[o++] = i
                                    }
                                    return r.length = o, e = arguments[n], this.then(void 0, R(r, e, this))
                                }
                                return this.then(void 0, e)
                            }, i.prototype.reflect = function() {
                                return this._then(f, f, void 0, this, void 0)
                            }, i.prototype.then = function(e, t) {
                                if (A.warnings() && arguments.length > 0 && "function" != typeof e && "function" != typeof t) {
                                    var n = ".then() only accepts functions but was passed: " + h.classString(e);
                                    arguments.length > 1 && (n += ", " + h.classString(t)), this._warn(n)
                                }
                                return this._then(e, t, void 0, void 0, void 0)
                            }, i.prototype.done = function(e, t) {
                                this._then(e, t, void 0, void 0, void 0)._setIsFinal()
                            }, i.prototype.spread = function(e) {
                                return "function" != typeof e ? d("expecting a function but got " + h.classString(e)) : this.all()._then(e, void 0, void 0, w, void 0)
                            }, i.prototype.toJSON = function() {
                                var e = {
                                    isFulfilled: !1,
                                    isRejected: !1,
                                    fulfillmentValue: void 0,
                                    rejectionReason: void 0
                                };
                                return this.isFulfilled() ? (e.fulfillmentValue = this.value(), e.isFulfilled = !0) : this.isRejected() && (e.rejectionReason = this.reason(), e.isRejected = !0), e
                            }, i.prototype.all = function() {
                                return arguments.length > 0 && this._warn(".all() was passed arguments but it does not take any"), new I(this).promise()
                            }, i.prototype.error = function(e) {
                                return this.caught(h.originatesFromRejection, e)
                            }, i.getNewLibraryCopy = n.exports, i.is = function(e) {
                                return e instanceof i
                            }, i.fromNode = i.fromCallback = function(e) {
                                var t = new i(E);
                                t._captureStackTrace();
                                var n = arguments.length > 1 && !!Object(arguments[1]).multiArgs,
                                    r = P(e)(C(t, n));
                                return r === j && t._rejectCallback(r.e, !0), t._isFateSealed() || t._setAsyncGuaranteed(), t
                            }, i.all = function(e) {
                                return new I(e).promise()
                            }, i.cast = function(e) {
                                var t = x(e);
                                return t instanceof i || (t = new i(E), t._captureStackTrace(), t._setFulfilled(), t._rejectionHandler0 = e), t
                            }, i.resolve = i.fulfilled = i.cast, i.reject = i.rejected = function(e) {
                                var t = new i(E);
                                return t._captureStackTrace(), t._rejectCallback(e, !0), t
                            }, i.setScheduler = function(e) {
                                if ("function" != typeof e) throw new y("expecting a function but got " + h.classString(e));
                                return g.setScheduler(e)
                            }, i.prototype._then = function(e, t, n, r, o) {
                                var a = void 0 !== o,
                                    u = a ? o : new i(E),
                                    s = this._target(),
                                    l = s._bitField;
                                a || (u._propagateFrom(this, 3), u._captureStackTrace(), void 0 === r && 0 != (2097152 & this._bitField) && (r = 0 != (50397184 & l) ? this._boundValue() : s === this ? void 0 : this._boundTo), this._fireEvent("promiseChained", this, u));
                                var f = c();
                                if (0 != (50397184 & l)) {
                                    var d, p, _ = s._settlePromiseCtx;
                                    0 != (33554432 & l) ? (p = s._rejectionHandler0, d = e) : 0 != (16777216 & l) ? (p = s._fulfillmentHandler0, d = t, s._unsetRejectionIsUnhandled()) : (_ = s._settlePromiseLateCancellationObserver, p = new b("late cancellation observer"), s._attachExtraTrace(p), d = t), g.invoke(_, s, {
                                        handler: null === f ? d : "function" == typeof d && h.domainBind(f, d),
                                        promise: u,
                                        receiver: r,
                                        value: p
                                    })
                                } else s._addCallbacks(e, t, u, r, f);
                                return u
                            }, i.prototype._length = function() {
                                return 65535 & this._bitField
                            }, i.prototype._isFateSealed = function() {
                                return 0 != (117506048 & this._bitField)
                            }, i.prototype._isFollowing = function() {
                                return 67108864 == (67108864 & this._bitField)
                            }, i.prototype._setLength = function(e) {
                                this._bitField = -65536 & this._bitField | 65535 & e
                            }, i.prototype._setFulfilled = function() {
                                this._bitField = 33554432 | this._bitField, this._fireEvent("promiseFulfilled", this)
                            }, i.prototype._setRejected = function() {
                                this._bitField = 16777216 | this._bitField, this._fireEvent("promiseRejected", this)
                            }, i.prototype._setFollowing = function() {
                                this._bitField = 67108864 | this._bitField, this._fireEvent("promiseResolved", this)
                            }, i.prototype._setIsFinal = function() {
                                this._bitField = 4194304 | this._bitField
                            }, i.prototype._isFinal = function() {
                                return (4194304 & this._bitField) > 0
                            }, i.prototype._unsetCancelled = function() {
                                this._bitField = -65537 & this._bitField
                            }, i.prototype._setCancelled = function() {
                                this._bitField = 65536 | this._bitField, this._fireEvent("promiseCancelled", this)
                            }, i.prototype._setWillBeCancelled = function() {
                                this._bitField = 8388608 | this._bitField
                            }, i.prototype._setAsyncGuaranteed = function() {
                                g.hasCustomScheduler() || (this._bitField = 134217728 | this._bitField)
                            }, i.prototype._receiverAt = function(e) {
                                var t = 0 === e ? this._receiver0 : this[4 * e - 4 + 3];
                                if (t !== p) return void 0 === t && this._isBound() ? this._boundValue() : t
                            }, i.prototype._promiseAt = function(e) {
                                return this[4 * e - 4 + 2]
                            }, i.prototype._fulfillmentHandlerAt = function(e) {
                                return this[4 * e - 4 + 0]
                            }, i.prototype._rejectionHandlerAt = function(e) {
                                return this[4 * e - 4 + 1]
                            }, i.prototype._boundValue = function() {}, i.prototype._migrateCallback0 = function(e) {
                                var t = (e._bitField, e._fulfillmentHandler0),
                                    n = e._rejectionHandler0,
                                    r = e._promise0,
                                    o = e._receiverAt(0);
                                void 0 === o && (o = p), this._addCallbacks(t, n, r, o, null)
                            }, i.prototype._migrateCallbackAt = function(e, t) {
                                var n = e._fulfillmentHandlerAt(t),
                                    r = e._rejectionHandlerAt(t),
                                    o = e._promiseAt(t),
                                    i = e._receiverAt(t);
                                void 0 === i && (i = p), this._addCallbacks(n, r, o, i, null)
                            }, i.prototype._addCallbacks = function(e, t, n, r, o) {
                                var i = this._length();
                                if (i >= 65531 && (i = 0, this._setLength(0)), 0 === i) this._promise0 = n, this._receiver0 = r, "function" == typeof e && (this._fulfillmentHandler0 = null === o ? e : h.domainBind(o, e)), "function" == typeof t && (this._rejectionHandler0 = null === o ? t : h.domainBind(o, t));
                                else {
                                    var a = 4 * i - 4;
                                    this[a + 2] = n, this[a + 3] = r, "function" == typeof e && (this[a + 0] = null === o ? e : h.domainBind(o, e)), "function" == typeof t && (this[a + 1] = null === o ? t : h.domainBind(o, t))
                                }
                                return this._setLength(i + 1), i
                            }, i.prototype._proxy = function(e, t) {
                                this._addCallbacks(void 0, void 0, t, e, null)
                            }, i.prototype._resolveCallback = function(e, t) {
                                if (0 == (117506048 & this._bitField)) {
                                    if (e === this) return this._rejectCallback(l(), !1);
                                    var n = x(e, this);
                                    if (!(n instanceof i)) return this._fulfill(e);
                                    t && this._propagateFrom(n, 2);
                                    var r = n._target();
                                    if (r === this) return void this._reject(l());
                                    var o = r._bitField;
                                    if (0 == (50397184 & o)) {
                                        var a = this._length();
                                        a > 0 && r._migrateCallback0(this);
                                        for (var u = 1; u < a; ++u) r._migrateCallbackAt(this, u);
                                        this._setFollowing(), this._setLength(0), this._setFollowee(r)
                                    } else if (0 != (33554432 & o)) this._fulfill(r._value());
                                    else if (0 != (16777216 & o)) this._reject(r._reason());
                                    else {
                                        var s = new b("late cancellation observer");
                                        r._attachExtraTrace(s), this._reject(s)
                                    }
                                }
                            }, i.prototype._rejectCallback = function(e, t, n) {
                                var r = h.ensureErrorObject(e),
                                    o = r === e;
                                if (!o && !n && A.warnings()) {
                                    var i = "a promise was rejected with a non-error: " + h.classString(e);
                                    this._warn(i, !0)
                                }
                                this._attachExtraTrace(r, !!t && o), this._reject(e)
                            }, i.prototype._resolveFromExecutor = function(e) {
                                if (e !== E) {
                                    var t = this;
                                    this._captureStackTrace(), this._pushContext();
                                    var n = !0,
                                        r = this._execute(e, function(e) {
                                            t._resolveCallback(e)
                                        }, function(e) {
                                            t._rejectCallback(e, n)
                                        });
                                    n = !1, this._popContext(), void 0 !== r && t._rejectCallback(r, !0)
                                }
                            }, i.prototype._settlePromiseFromHandler = function(e, t, n, r) {
                                var o = r._bitField;
                                if (0 == (65536 & o)) {
                                    r._pushContext();
                                    var i;
                                    t === w ? n && "number" == typeof n.length ? i = P(e).apply(this._boundValue(), n) : (i = j, i.e = new y("cannot .spread() a non-array: " + h.classString(n))) : i = P(e).call(t, n);
                                    var a = r._popContext();
                                    o = r._bitField, 0 == (65536 & o) && (i === T ? r._reject(n) : i === j ? r._rejectCallback(i.e, !1) : (A.checkForgottenReturns(i, a, "", r, this), r._resolveCallback(i)))
                                }
                            }, i.prototype._target = function() {
                                for (var e = this; e._isFollowing();) e = e._followee();
                                return e
                            }, i.prototype._followee = function() {
                                return this._rejectionHandler0
                            }, i.prototype._setFollowee = function(e) {
                                this._rejectionHandler0 = e
                            }, i.prototype._settlePromise = function(e, t, n, o) {
                                var a = e instanceof i,
                                    u = this._bitField,
                                    s = 0 != (134217728 & u);
                                0 != (65536 & u) ? (a && e._invokeInternalOnCancel(), n instanceof k && n.isFinallyHandler() ? (n.cancelPromise = e, P(t).call(n, o) === j && e._reject(j.e)) : t === f ? e._fulfill(f.call(n)) : n instanceof r ? n._promiseCancelled(e) : a || e instanceof I ? e._cancel() : n.cancel()) : "function" == typeof t ? a ? (s && e._setAsyncGuaranteed(), this._settlePromiseFromHandler(t, n, o, e)) : t.call(n, o, e) : n instanceof r ? n._isResolved() || (0 != (33554432 & u) ? n._promiseFulfilled(o, e) : n._promiseRejected(o, e)) : a && (s && e._setAsyncGuaranteed(), 0 != (33554432 & u) ? e._fulfill(o) : e._reject(o))
                            }, i.prototype._settlePromiseLateCancellationObserver = function(e) {
                                var t = e.handler,
                                    n = e.promise,
                                    r = e.receiver,
                                    o = e.value;
                                "function" == typeof t ? n instanceof i ? this._settlePromiseFromHandler(t, r, o, n) : t.call(r, o, n) : n instanceof i && n._reject(o)
                            }, i.prototype._settlePromiseCtx = function(e) {
                                this._settlePromise(e.promise, e.handler, e.receiver, e.value)
                            }, i.prototype._settlePromise0 = function(e, t, n) {
                                var r = this._promise0,
                                    o = this._receiverAt(0);
                                this._promise0 = void 0, this._receiver0 = void 0, this._settlePromise(r, e, o, t)
                            }, i.prototype._clearCallbackDataAtIndex = function(e) {
                                var t = 4 * e - 4;
                                this[t + 2] = this[t + 3] = this[t + 0] = this[t + 1] = void 0
                            }, i.prototype._fulfill = function(e) {
                                var t = this._bitField;
                                if (!((117506048 & t) >>> 16)) {
                                    if (e === this) {
                                        var n = l();
                                        return this._attachExtraTrace(n), this._reject(n)
                                    }
                                    this._setFulfilled(), this._rejectionHandler0 = e, (65535 & t) > 0 && (0 != (134217728 & t) ? this._settlePromises() : g.settlePromises(this), this._dereferenceTrace())
                                }
                            }, i.prototype._reject = function(e) {
                                var t = this._bitField;
                                if (!((117506048 & t) >>> 16)) {
                                    if (this._setRejected(), this._fulfillmentHandler0 = e, this._isFinal()) return g.fatalError(e, h.isNode);
                                    (65535 & t) > 0 ? g.settlePromises(this) : this._ensurePossibleRejectionHandled()
                                }
                            }, i.prototype._fulfillPromises = function(e, t) {
                                for (var n = 1; n < e; n++) {
                                    var r = this._fulfillmentHandlerAt(n),
                                        o = this._promiseAt(n),
                                        i = this._receiverAt(n);
                                    this._clearCallbackDataAtIndex(n), this._settlePromise(o, r, i, t)
                                }
                            }, i.prototype._rejectPromises = function(e, t) {
                                for (var n = 1; n < e; n++) {
                                    var r = this._rejectionHandlerAt(n),
                                        o = this._promiseAt(n),
                                        i = this._receiverAt(n);
                                    this._clearCallbackDataAtIndex(n), this._settlePromise(o, r, i, t)
                                }
                            }, i.prototype._settlePromises = function() {
                                var e = this._bitField,
                                    t = 65535 & e;
                                if (t > 0) {
                                    if (0 != (16842752 & e)) {
                                        var n = this._fulfillmentHandler0;
                                        this._settlePromise0(this._rejectionHandler0, n, e), this._rejectPromises(t, n)
                                    } else {
                                        var r = this._rejectionHandler0;
                                        this._settlePromise0(this._fulfillmentHandler0, r, e), this._fulfillPromises(t, r)
                                    }
                                    this._setLength(0)
                                }
                                this._clearCancellationData()
                            }, i.prototype._settledValue = function() {
                                var e = this._bitField;
                                return 0 != (33554432 & e) ? this._rejectionHandler0 : 0 != (16777216 & e) ? this._fulfillmentHandler0 : void 0
                            }, i.defer = i.pending = function() {
                                return A.deprecated("Promise.defer", "new Promise"), {
                                    promise: new i(E),
                                    resolve: a,
                                    reject: u
                                }
                            }, h.notEnumerableProp(i, "_makeSelfResolutionError", l), e("./method")(i, E, x, d, A), e("./bind")(i, E, x, A), e("./cancel")(i, I, d, A), e("./direct_resolve")(i), e("./synchronous_inspection")(i), e("./join")(i, I, x, E, g, c), i.Promise = i, i.version = "3.5.2", e("./map.js")(i, I, d, x, E, A), e("./call_get.js")(i), e("./using.js")(i, d, x, O, E, A), e("./timers.js")(i, E, A), e("./generators.js")(i, d, E, x, r, A), e("./nodeify.js")(i), e("./promisify.js")(i, E), e("./props.js")(i, I, x, d), e("./race.js")(i, E, x, d), e("./reduce.js")(i, I, d, x, E, A), e("./settle.js")(i, I, A), e("./some.js")(i, I, d), e("./filter.js")(i, E), e("./each.js")(i, E), e("./any.js")(i), h.toFastProperties(i), h.toFastProperties(i.prototype), s({
                                a: 1
                            }), s({
                                b: 2
                            }), s({
                                c: 3
                            }), s(1), s(function() {}), s(void 0), s(!1), s(new i(E)), A.setBounds(m.firstLineError, h.lastLineError), i
                        }
                    }, {
                        "./any.js": 1,
                        "./async": 2,
                        "./bind": 3,
                        "./call_get.js": 5,
                        "./cancel": 6,
                        "./catch_filter": 7,
                        "./context": 8,
                        "./debuggability": 9,
                        "./direct_resolve": 10,
                        "./each.js": 11,
                        "./errors": 12,
                        "./es5": 13,
                        "./filter.js": 14,
                        "./finally": 15,
                        "./generators.js": 16,
                        "./join": 17,
                        "./map.js": 18,
                        "./method": 19,
                        "./nodeback": 20,
                        "./nodeify.js": 21,
                        "./promise_array": 23,
                        "./promisify.js": 24,
                        "./props.js": 25,
                        "./race.js": 27,
                        "./reduce.js": 28,
                        "./settle.js": 30,
                        "./some.js": 31,
                        "./synchronous_inspection": 32,
                        "./thenables": 33,
                        "./timers.js": 34,
                        "./using.js": 35,
                        "./util": 36
                    }],
                    23: [function(e, t, n) {
                        "use strict";
                        t.exports = function(t, n, r, o, i) {
                            function a(e) {
                                switch (e) {
                                    case -2:
                                        return [];
                                    case -3:
                                        return {};
                                    case -6:
                                        return new Map
                                }
                            }

                            function u(e) {
                                var r = this._promise = new t(n);
                                e instanceof t && r._propagateFrom(e, 3), r._setOnCancel(this), this._values = e, this._length = 0, this._totalResolved = 0, this._init(void 0, -2)
                            }
                            var s = e("./util");
                            s.isArray;
                            return s.inherits(u, i), u.prototype.length = function() {
                                return this._length
                            }, u.prototype.promise = function() {
                                return this._promise
                            }, u.prototype._init = function e(n, i) {
                                var u = r(this._values, this._promise);
                                if (u instanceof t) {
                                    u = u._target();
                                    var c = u._bitField;
                                    if (this._values = u, 0 == (50397184 & c)) return this._promise._setAsyncGuaranteed(), u._then(e, this._reject, void 0, this, i);
                                    if (0 == (33554432 & c)) return 0 != (16777216 & c) ? this._reject(u._reason()) : this._cancel();
                                    u = u._value()
                                }
                                if (null === (u = s.asArray(u))) {
                                    var l = o("expecting an array or an iterable object but got " + s.classString(u)).reason();
                                    return void this._promise._rejectCallback(l, !1)
                                }
                                if (0 === u.length) return void(-5 === i ? this._resolveEmptyArray() : this._resolve(a(i)));
                                this._iterate(u)
                            }, u.prototype._iterate = function(e) {
                                var n = this.getActualLength(e.length);
                                this._length = n, this._values = this.shouldCopyValues() ? new Array(n) : this._values;
                                for (var o = this._promise, i = !1, a = null, u = 0; u < n; ++u) {
                                    var s = r(e[u], o);
                                    s instanceof t ? (s = s._target(), a = s._bitField) : a = null, i ? null !== a && s.suppressUnhandledRejections() : null !== a ? 0 == (50397184 & a) ? (s._proxy(this, u), this._values[u] = s) : i = 0 != (33554432 & a) ? this._promiseFulfilled(s._value(), u) : 0 != (16777216 & a) ? this._promiseRejected(s._reason(), u) : this._promiseCancelled(u) : i = this._promiseFulfilled(s, u)
                                }
                                i || o._setAsyncGuaranteed()
                            }, u.prototype._isResolved = function() {
                                return null === this._values
                            }, u.prototype._resolve = function(e) {
                                this._values = null, this._promise._fulfill(e)
                            }, u.prototype._cancel = function() {
                                !this._isResolved() && this._promise._isCancellable() && (this._values = null, this._promise._cancel())
                            }, u.prototype._reject = function(e) {
                                this._values = null, this._promise._rejectCallback(e, !1)
                            }, u.prototype._promiseFulfilled = function(e, t) {
                                return this._values[t] = e, ++this._totalResolved >= this._length && (this._resolve(this._values), !0)
                            }, u.prototype._promiseCancelled = function() {
                                return this._cancel(), !0
                            }, u.prototype._promiseRejected = function(e) {
                                return this._totalResolved++, this._reject(e), !0
                            }, u.prototype._resultCancelled = function() {
                                if (!this._isResolved()) {
                                    var e = this._values;
                                    if (this._cancel(), e instanceof t) e.cancel();
                                    else
                                        for (var n = 0; n < e.length; ++n) e[n] instanceof t && e[n].cancel()
                                }
                            }, u.prototype.shouldCopyValues = function() {
                                return !0
                            }, u.prototype.getActualLength = function(e) {
                                return e
                            }, u
                        }
                    }, {
                        "./util": 36
                    }],
                    24: [function(e, t, n) {
                        "use strict";
                        t.exports = function(t, n) {
                            function r(e) {
                                return !E.test(e)
                            }

                            function o(e) {
                                try {
                                    return !0 === e.__isPromisified__
                                } catch (e) {
                                    return !1
                                }
                            }

                            function i(e, t, n) {
                                var r = p.getDataPropertyOrDefault(e, t + n, y);
                                return !!r && o(r)
                            }

                            function a(e, t, n) {
                                for (var r = 0; r < e.length; r += 2) {
                                    var o = e[r];
                                    if (n.test(o))
                                        for (var i = o.replace(n, ""), a = 0; a < e.length; a += 2)
                                            if (e[a] === i) throw new v("Cannot promisify an API that has normal methods with '%s'-suffix\n\n    See http://goo.gl/MqrFmX\n".replace("%s", t))
                                }
                            }

                            function u(e, t, n, r) {
                                for (var u = p.inheritedDataKeys(e), s = [], c = 0; c < u.length; ++c) {
                                    var l = u[c],
                                        f = e[l],
                                        d = r === w || w(l, f, e);
                                    "function" != typeof f || o(f) || i(e, l, t) || !r(l, f, e, d) || s.push(l, f)
                                }
                                return a(s, t, n), s
                            }

                            function s(e, r, o, i, a, u) {
                                function s() {
                                    var o = r;
                                    r === d && (o = this);
                                    var i = new t(n);
                                    i._captureStackTrace();
                                    var a = "string" == typeof l && this !== c ? this[l] : e,
                                        s = h(i, u);
                                    try {
                                        a.apply(o, _(arguments, s))
                                    } catch (e) {
                                        i._rejectCallback(m(e), !0, !0)
                                    }
                                    return i._isFateSealed() || i._setAsyncGuaranteed(), i
                                }
                                var c = function() {
                                        return this
                                    }(),
                                    l = e;
                                return "string" == typeof l && (e = i), p.notEnumerableProp(s, "__isPromisified__", !0), s
                            }

                            function c(e, t, n, r, o) {
                                for (var i = new RegExp(T(t) + "$"), a = u(e, t, i, n), s = 0, c = a.length; s < c; s += 2) {
                                    var l = a[s],
                                        f = a[s + 1],
                                        h = l + t;
                                    if (r === x) e[h] = x(l, d, l, f, t, o);
                                    else {
                                        var _ = r(f, function() {
                                            return x(l, d, l, f, t, o)
                                        });
                                        p.notEnumerableProp(_, "__isPromisified__", !0), e[h] = _
                                    }
                                }
                                return p.toFastProperties(e), e
                            }

                            function l(e, t, n) {
                                return x(e, t, void 0, e, null, n)
                            }
                            var f, d = {},
                                p = e("./util"),
                                h = e("./nodeback"),
                                _ = p.withAppended,
                                m = p.maybeWrapAsError,
                                g = p.canEvaluate,
                                v = e("./errors").TypeError,
                                y = {
                                    __isPromisified__: !0
                                },
                                b = ["arity", "length", "name", "arguments", "caller", "callee", "prototype", "__isPromisified__"],
                                E = new RegExp("^(?:" + b.join("|") + ")$"),
                                w = function(e) {
                                    return p.isIdentifier(e) && "_" !== e.charAt(0) && "constructor" !== e
                                },
                                T = function(e) {
                                    return e.replace(/([$])/, "\\$")
                                },
                                x = g ? f : s;
                            t.promisify = function(e, t) {
                                if ("function" != typeof e) throw new v("expecting a function but got " + p.classString(e));
                                if (o(e)) return e;
                                t = Object(t);
                                var n = void 0 === t.context ? d : t.context,
                                    i = !!t.multiArgs,
                                    a = l(e, n, i);
                                return p.copyDescriptors(e, a, r), a
                            }, t.promisifyAll = function(e, t) {
                                if ("function" != typeof e && "object" != typeof e) throw new v("the target of promisifyAll must be an object or a function\n\n    See http://goo.gl/MqrFmX\n");
                                t = Object(t);
                                var n = !!t.multiArgs,
                                    r = t.suffix;
                                "string" != typeof r && (r = "Async");
                                var o = t.filter;
                                "function" != typeof o && (o = w);
                                var i = t.promisifier;
                                if ("function" != typeof i && (i = x), !p.isIdentifier(r)) throw new RangeError("suffix must be a valid identifier\n\n    See http://goo.gl/MqrFmX\n");
                                for (var a = p.inheritedDataKeys(e), u = 0; u < a.length; ++u) {
                                    var s = e[a[u]];
                                    "constructor" !== a[u] && p.isClass(s) && (c(s.prototype, r, o, i, n), c(s, r, o, i, n))
                                }
                                return c(e, r, o, i, n)
                            }
                        }
                    }, {
                        "./errors": 12,
                        "./nodeback": 20,
                        "./util": 36
                    }],
                    25: [function(e, t, n) {
                        "use strict";
                        t.exports = function(t, n, r, o) {
                            function i(e) {
                                var t, n = !1;
                                if (void 0 !== u && e instanceof u) t = f(e), n = !0;
                                else {
                                    var r = l.keys(e),
                                        o = r.length;
                                    t = new Array(2 * o);
                                    for (var i = 0; i < o; ++i) {
                                        var a = r[i];
                                        t[i] = e[a], t[i + o] = a
                                    }
                                }
                                this.constructor$(t), this._isMap = n, this._init$(void 0, n ? -6 : -3)
                            }

                            function a(e) {
                                var n, a = r(e);
                                return c(a) ? (n = a instanceof t ? a._then(t.props, void 0, void 0, void 0, void 0) : new i(a).promise(), a instanceof t && n._propagateFrom(a, 2), n) : o("cannot await properties of a non-object\n\n    See http://goo.gl/MqrFmX\n")
                            }
                            var u, s = e("./util"),
                                c = s.isObject,
                                l = e("./es5");
                            "function" == typeof Map && (u = Map);
                            var f = function() {
                                    function e(e, r) {
                                        this[t] = e, this[t + n] = r, t++
                                    }
                                    var t = 0,
                                        n = 0;
                                    return function(r) {
                                        n = r.size, t = 0;
                                        var o = new Array(2 * r.size);
                                        return r.forEach(e, o), o
                                    }
                                }(),
                                d = function(e) {
                                    for (var t = new u, n = e.length / 2 | 0, r = 0; r < n; ++r) {
                                        var o = e[n + r],
                                            i = e[r];
                                        t.set(o, i)
                                    }
                                    return t
                                };
                            s.inherits(i, n), i.prototype._init = function() {}, i.prototype._promiseFulfilled = function(e, t) {
                                if (this._values[t] = e, ++this._totalResolved >= this._length) {
                                    var n;
                                    if (this._isMap) n = d(this._values);
                                    else {
                                        n = {};
                                        for (var r = this.length(), o = 0, i = this.length(); o < i; ++o) n[this._values[o + r]] = this._values[o]
                                    }
                                    return this._resolve(n), !0
                                }
                                return !1
                            }, i.prototype.shouldCopyValues = function() {
                                return !1
                            }, i.prototype.getActualLength = function(e) {
                                return e >> 1
                            }, t.prototype.props = function() {
                                return a(this)
                            }, t.props = function(e) {
                                return a(e)
                            }
                        }
                    }, {
                        "./es5": 13,
                        "./util": 36
                    }],
                    26: [function(e, t, n) {
                        "use strict";

                        function r(e, t, n, r, o) {
                            for (var i = 0; i < o; ++i) n[i + r] = e[i + t], e[i + t] = void 0
                        }

                        function o(e) {
                            this._capacity = e, this._length = 0, this._front = 0
                        }
                        o.prototype._willBeOverCapacity = function(e) {
                            return this._capacity < e
                        }, o.prototype._pushOne = function(e) {
                            var t = this.length();
                            this._checkCapacity(t + 1), this[this._front + t & this._capacity - 1] = e, this._length = t + 1
                        }, o.prototype.push = function(e, t, n) {
                            var r = this.length() + 3;
                            if (this._willBeOverCapacity(r)) return this._pushOne(e), this._pushOne(t), void this._pushOne(n);
                            var o = this._front + r - 3;
                            this._checkCapacity(r);
                            var i = this._capacity - 1;
                            this[o + 0 & i] = e, this[o + 1 & i] = t, this[o + 2 & i] = n, this._length = r
                        }, o.prototype.shift = function() {
                            var e = this._front,
                                t = this[e];
                            return this[e] = void 0, this._front = e + 1 & this._capacity - 1, this._length--, t
                        }, o.prototype.length = function() {
                            return this._length
                        }, o.prototype._checkCapacity = function(e) {
                            this._capacity < e && this._resizeTo(this._capacity << 1)
                        }, o.prototype._resizeTo = function(e) {
                            var t = this._capacity;
                            this._capacity = e, r(this, 0, this, t, this._front + this._length & t - 1)
                        }, t.exports = o
                    }, {}],
                    27: [function(e, t, n) {
                        "use strict";
                        t.exports = function(t, n, r, o) {
                            function i(e, i) {
                                var s = r(e);
                                if (s instanceof t) return u(s);
                                if (null === (e = a.asArray(e))) return o("expecting an array or an iterable object but got " + a.classString(e));
                                var c = new t(n);
                                void 0 !== i && c._propagateFrom(i, 3);
                                for (var l = c._fulfill, f = c._reject, d = 0, p = e.length; d < p; ++d) {
                                    var h = e[d];
                                    (void 0 !== h || d in e) && t.cast(h)._then(l, f, void 0, c, null)
                                }
                                return c
                            }
                            var a = e("./util"),
                                u = function(e) {
                                    return e.then(function(t) {
                                        return i(t, e)
                                    })
                                };
                            t.race = function(e) {
                                return i(e, void 0)
                            }, t.prototype.race = function() {
                                return i(this, void 0)
                            }
                        }
                    }, {
                        "./util": 36
                    }],
                    28: [function(e, t, n) {
                        "use strict";
                        t.exports = function(t, n, r, o, i, a) {
                            function u(e, n, r, o) {
                                this.constructor$(e);
                                var a = d();
                                this._fn = null === a ? n : p.domainBind(a, n), void 0 !== r && (r = t.resolve(r), r._attachCancellationCallback(this)), this._initialValue = r, this._currentCancellable = null, this._eachValues = o === i ? Array(this._length) : 0 === o ? null : void 0, this._promise._captureStackTrace(), this._init$(void 0, -5)
                            }

                            function s(e, t) {
                                this.isFulfilled() ? t._resolve(e) : t._reject(e)
                            }

                            function c(e, t, n, o) {
                                return "function" != typeof t ? r("expecting a function but got " + p.classString(t)) : new u(e, t, n, o).promise()
                            }

                            function l(e) {
                                this.accum = e, this.array._gotAccum(e);
                                var n = o(this.value, this.array._promise);
                                return n instanceof t ? (this.array._currentCancellable = n, n._then(f, void 0, void 0, this, void 0)) : f.call(this, n)
                            }

                            function f(e) {
                                var n = this.array,
                                    r = n._promise,
                                    o = h(n._fn);
                                r._pushContext();
                                var i;
                                (i = void 0 !== n._eachValues ? o.call(r._boundValue(), e, this.index, this.length) : o.call(r._boundValue(), this.accum, e, this.index, this.length)) instanceof t && (n._currentCancellable = i);
                                var u = r._popContext();
                                return a.checkForgottenReturns(i, u, void 0 !== n._eachValues ? "Promise.each" : "Promise.reduce", r), i
                            }
                            var d = t._getDomain,
                                p = e("./util"),
                                h = p.tryCatch;
                            p.inherits(u, n), u.prototype._gotAccum = function(e) {
                                void 0 !== this._eachValues && null !== this._eachValues && e !== i && this._eachValues.push(e)
                            }, u.prototype._eachComplete = function(e) {
                                return null !== this._eachValues && this._eachValues.push(e), this._eachValues
                            }, u.prototype._init = function() {}, u.prototype._resolveEmptyArray = function() {
                                this._resolve(void 0 !== this._eachValues ? this._eachValues : this._initialValue)
                            }, u.prototype.shouldCopyValues = function() {
                                return !1
                            }, u.prototype._resolve = function(e) {
                                this._promise._resolveCallback(e), this._values = null
                            }, u.prototype._resultCancelled = function(e) {
                                if (e === this._initialValue) return this._cancel();
                                this._isResolved() || (this._resultCancelled$(), this._currentCancellable instanceof t && this._currentCancellable.cancel(), this._initialValue instanceof t && this._initialValue.cancel())
                            }, u.prototype._iterate = function(e) {
                                this._values = e;
                                var n, r, o = e.length;
                                if (void 0 !== this._initialValue ? (n = this._initialValue, r = 0) : (n = t.resolve(e[0]), r = 1), this._currentCancellable = n, !n.isRejected())
                                    for (; r < o; ++r) {
                                        var i = {
                                            accum: null,
                                            value: e[r],
                                            index: r,
                                            length: o,
                                            array: this
                                        };
                                        n = n._then(l, void 0, void 0, i, void 0)
                                    }
                                void 0 !== this._eachValues && (n = n._then(this._eachComplete, void 0, void 0, this, void 0)), n._then(s, s, void 0, n, this)
                            }, t.prototype.reduce = function(e, t) {
                                return c(this, e, t, null)
                            }, t.reduce = function(e, t, n, r) {
                                return c(e, t, n, r)
                            }
                        }
                    }, {
                        "./util": 36
                    }],
                    29: [function(e, o, i) {
                        "use strict";
                        var a, u = e("./util"),
                            s = function() {
                                throw new Error("No async scheduler available\n\n    See http://goo.gl/MqrFmX\n")
                            },
                            c = u.getNativePromise();
                        if (u.isNode && "undefined" == typeof MutationObserver) {
                            var l = n.setImmediate,
                                f = t.nextTick;
                            a = u.isRecentNode ? function(e) {
                                l.call(n, e)
                            } : function(e) {
                                f.call(t, e)
                            }
                        } else if ("function" == typeof c && "function" == typeof c.resolve) {
                            var d = c.resolve();
                            a = function(e) {
                                d.then(e)
                            }
                        } else a = "undefined" == typeof MutationObserver || "undefined" != typeof window && window.navigator && (window.navigator.standalone || window.cordova) ? void 0 !== r ? function(e) {
                            r(e)
                        } : "undefined" != typeof setTimeout ? function(e) {
                            setTimeout(e, 0)
                        } : s : function() {
                            var e = document.createElement("div"),
                                t = {
                                    attributes: !0
                                },
                                n = !1,
                                r = document.createElement("div");
                            new MutationObserver(function() {
                                e.classList.toggle("foo"), n = !1
                            }).observe(r, t);
                            var o = function() {
                                n || (n = !0, r.classList.toggle("foo"))
                            };
                            return function(n) {
                                var r = new MutationObserver(function() {
                                    r.disconnect(), n()
                                });
                                r.observe(e, t), o()
                            }
                        }();
                        o.exports = a
                    }, {
                        "./util": 36
                    }],
                    30: [function(e, t, n) {
                        "use strict";
                        t.exports = function(t, n, r) {
                            function o(e) {
                                this.constructor$(e)
                            }
                            var i = t.PromiseInspection;
                            e("./util").inherits(o, n), o.prototype._promiseResolved = function(e, t) {
                                return this._values[e] = t, ++this._totalResolved >= this._length && (this._resolve(this._values), !0)
                            }, o.prototype._promiseFulfilled = function(e, t) {
                                var n = new i;
                                return n._bitField = 33554432, n._settledValueField = e, this._promiseResolved(t, n)
                            }, o.prototype._promiseRejected = function(e, t) {
                                var n = new i;
                                return n._bitField = 16777216, n._settledValueField = e, this._promiseResolved(t, n)
                            }, t.settle = function(e) {
                                return r.deprecated(".settle()", ".reflect()"), new o(e).promise()
                            }, t.prototype.settle = function() {
                                return t.settle(this)
                            }
                        }
                    }, {
                        "./util": 36
                    }],
                    31: [function(e, t, n) {
                        "use strict";
                        t.exports = function(t, n, r) {
                            function o(e) {
                                this.constructor$(e), this._howMany = 0, this._unwrap = !1, this._initialized = !1
                            }

                            function i(e, t) {
                                if ((0 | t) !== t || t < 0) return r("expecting a positive integer\n\n    See http://goo.gl/MqrFmX\n");
                                var n = new o(e),
                                    i = n.promise();
                                return n.setHowMany(t), n.init(), i
                            }
                            var a = e("./util"),
                                u = e("./errors").RangeError,
                                s = e("./errors").AggregateError,
                                c = a.isArray,
                                l = {};
                            a.inherits(o, n), o.prototype._init = function() {
                                if (this._initialized) {
                                    if (0 === this._howMany) return void this._resolve([]);
                                    this._init$(void 0, -5);
                                    var e = c(this._values);
                                    !this._isResolved() && e && this._howMany > this._canPossiblyFulfill() && this._reject(this._getRangeError(this.length()))
                                }
                            }, o.prototype.init = function() {
                                this._initialized = !0, this._init()
                            }, o.prototype.setUnwrap = function() {
                                this._unwrap = !0
                            }, o.prototype.howMany = function() {
                                return this._howMany
                            }, o.prototype.setHowMany = function(e) {
                                this._howMany = e
                            }, o.prototype._promiseFulfilled = function(e) {
                                return this._addFulfilled(e), this._fulfilled() === this.howMany() && (this._values.length = this.howMany(), 1 === this.howMany() && this._unwrap ? this._resolve(this._values[0]) : this._resolve(this._values), !0)
                            }, o.prototype._promiseRejected = function(e) {
                                return this._addRejected(e), this._checkOutcome()
                            }, o.prototype._promiseCancelled = function() {
                                return this._values instanceof t || null == this._values ? this._cancel() : (this._addRejected(l), this._checkOutcome())
                            }, o.prototype._checkOutcome = function() {
                                if (this.howMany() > this._canPossiblyFulfill()) {
                                    for (var e = new s, t = this.length(); t < this._values.length; ++t) this._values[t] !== l && e.push(this._values[t]);
                                    return e.length > 0 ? this._reject(e) : this._cancel(), !0
                                }
                                return !1
                            }, o.prototype._fulfilled = function() {
                                return this._totalResolved
                            }, o.prototype._rejected = function() {
                                return this._values.length - this.length()
                            }, o.prototype._addRejected = function(e) {
                                this._values.push(e)
                            }, o.prototype._addFulfilled = function(e) {
                                this._values[this._totalResolved++] = e
                            }, o.prototype._canPossiblyFulfill = function() {
                                return this.length() - this._rejected()
                            }, o.prototype._getRangeError = function(e) {
                                var t = "Input array must contain at least " + this._howMany + " items but contains only " + e + " items";
                                return new u(t)
                            }, o.prototype._resolveEmptyArray = function() {
                                this._reject(this._getRangeError(0))
                            }, t.some = function(e, t) {
                                return i(e, t)
                            }, t.prototype.some = function(e) {
                                return i(this, e)
                            }, t._SomePromiseArray = o
                        }
                    }, {
                        "./errors": 12,
                        "./util": 36
                    }],
                    32: [function(e, t, n) {
                        "use strict";
                        t.exports = function(e) {
                            function t(e) {
                                void 0 !== e ? (e = e._target(), this._bitField = e._bitField, this._settledValueField = e._isFateSealed() ? e._settledValue() : void 0) : (this._bitField = 0, this._settledValueField = void 0)
                            }
                            t.prototype._settledValue = function() {
                                return this._settledValueField
                            };
                            var n = t.prototype.value = function() {
                                    if (!this.isFulfilled()) throw new TypeError("cannot get fulfillment value of a non-fulfilled promise\n\n    See http://goo.gl/MqrFmX\n");
                                    return this._settledValue()
                                },
                                r = t.prototype.error = t.prototype.reason = function() {
                                    if (!this.isRejected()) throw new TypeError("cannot get rejection reason of a non-rejected promise\n\n    See http://goo.gl/MqrFmX\n");
                                    return this._settledValue()
                                },
                                o = t.prototype.isFulfilled = function() {
                                    return 0 != (33554432 & this._bitField)
                                },
                                i = t.prototype.isRejected = function() {
                                    return 0 != (16777216 & this._bitField)
                                },
                                a = t.prototype.isPending = function() {
                                    return 0 == (50397184 & this._bitField)
                                },
                                u = t.prototype.isResolved = function() {
                                    return 0 != (50331648 & this._bitField)
                                };
                            t.prototype.isCancelled = function() {
                                return 0 != (8454144 & this._bitField)
                            }, e.prototype.__isCancelled = function() {
                                return 65536 == (65536 & this._bitField)
                            }, e.prototype._isCancelled = function() {
                                return this._target().__isCancelled()
                            }, e.prototype.isCancelled = function() {
                                return 0 != (8454144 & this._target()._bitField)
                            }, e.prototype.isPending = function() {
                                return a.call(this._target())
                            }, e.prototype.isRejected = function() {
                                return i.call(this._target())
                            }, e.prototype.isFulfilled = function() {
                                return o.call(this._target())
                            }, e.prototype.isResolved = function() {
                                return u.call(this._target())
                            }, e.prototype.value = function() {
                                return n.call(this._target())
                            }, e.prototype.reason = function() {
                                var e = this._target();
                                return e._unsetRejectionIsUnhandled(), r.call(e)
                            }, e.prototype._value = function() {
                                return this._settledValue()
                            }, e.prototype._reason = function() {
                                return this._unsetRejectionIsUnhandled(), this._settledValue()
                            }, e.PromiseInspection = t
                        }
                    }, {}],
                    33: [function(e, t, n) {
                        "use strict";
                        t.exports = function(t, n) {
                            function r(e, r) {
                                if (l(e)) {
                                    if (e instanceof t) return e;
                                    var o = i(e);
                                    if (o === c) {
                                        r && r._pushContext();
                                        var s = t.reject(o.e);
                                        return r && r._popContext(), s
                                    }
                                    if ("function" == typeof o) {
                                        if (a(e)) {
                                            var s = new t(n);
                                            return e._then(s._fulfill, s._reject, void 0, s, null), s
                                        }
                                        return u(e, o, r)
                                    }
                                }
                                return e
                            }

                            function o(e) {
                                return e.then
                            }

                            function i(e) {
                                try {
                                    return o(e)
                                } catch (e) {
                                    return c.e = e, c
                                }
                            }

                            function a(e) {
                                try {
                                    return f.call(e, "_promise0")
                                } catch (e) {
                                    return !1
                                }
                            }

                            function u(e, r, o) {
                                function i(e) {
                                    u && (u._resolveCallback(e), u = null)
                                }

                                function a(e) {
                                    u && (u._rejectCallback(e, f, !0), u = null)
                                }
                                var u = new t(n),
                                    l = u;
                                o && o._pushContext(), u._captureStackTrace(), o && o._popContext();
                                var f = !0,
                                    d = s.tryCatch(r).call(e, i, a);
                                return f = !1, u && d === c && (u._rejectCallback(d.e, !0, !0), u = null), l
                            }
                            var s = e("./util"),
                                c = s.errorObj,
                                l = s.isObject,
                                f = {}.hasOwnProperty;
                            return r
                        }
                    }, {
                        "./util": 36
                    }],
                    34: [function(e, t, n) {
                        "use strict";
                        t.exports = function(t, n, r) {
                            function o(e) {
                                this.handle = e
                            }

                            function i(e) {
                                return clearTimeout(this.handle), e
                            }

                            function a(e) {
                                throw clearTimeout(this.handle), e
                            }
                            var u = e("./util"),
                                s = t.TimeoutError;
                            o.prototype._resultCancelled = function() {
                                clearTimeout(this.handle)
                            };
                            var c = function(e) {
                                    return l(+this).thenReturn(e)
                                },
                                l = t.delay = function(e, i) {
                                    var a, u;
                                    return void 0 !== i ? (a = t.resolve(i)._then(c, null, null, e, void 0), r.cancellation() && i instanceof t && a._setOnCancel(i)) : (a = new t(n), u = setTimeout(function() {
                                        a._fulfill()
                                    }, +e), r.cancellation() && a._setOnCancel(new o(u)), a._captureStackTrace()), a._setAsyncGuaranteed(), a
                                };
                            t.prototype.delay = function(e) {
                                return l(e, this)
                            };
                            var f = function(e, t, n) {
                                var r;
                                r = "string" != typeof t ? t instanceof Error ? t : new s("operation timed out") : new s(t), u.markAsOriginatingFromRejection(r), e._attachExtraTrace(r), e._reject(r), null != n && n.cancel()
                            };
                            t.prototype.timeout = function(e, t) {
                                e = +e;
                                var n, u, s = new o(setTimeout(function() {
                                    n.isPending() && f(n, t, u)
                                }, e));
                                return r.cancellation() ? (u = this.then(), n = u._then(i, a, void 0, s, void 0), n._setOnCancel(s)) : n = this._then(i, a, void 0, s, void 0), n
                            }
                        }
                    }, {
                        "./util": 36
                    }],
                    35: [function(e, t, n) {
                        "use strict";
                        t.exports = function(t, n, r, o, i, a) {
                            function u(e) {
                                setTimeout(function() {
                                    throw e
                                }, 0)
                            }

                            function s(e) {
                                var t = r(e);
                                return t !== e && "function" == typeof e._isDisposable && "function" == typeof e._getDisposer && e._isDisposable() && t._setDisposable(e._getDisposer()), t
                            }

                            function c(e, n) {
                                function o() {
                                    if (a >= c) return l._fulfill();
                                    var i = s(e[a++]);
                                    if (i instanceof t && i._isDisposable()) {
                                        try {
                                            i = r(i._getDisposer().tryDispose(n), e.promise)
                                        } catch (e) {
                                            return u(e)
                                        }
                                        if (i instanceof t) return i._then(o, u, null, null, null)
                                    }
                                    o()
                                }
                                var a = 0,
                                    c = e.length,
                                    l = new t(i);
                                return o(), l
                            }

                            function l(e, t, n) {
                                this._data = e, this._promise = t, this._context = n
                            }

                            function f(e, t, n) {
                                this.constructor$(e, t, n)
                            }

                            function d(e) {
                                return l.isDisposer(e) ? (this.resources[this.index]._setDisposable(e), e.promise()) : e
                            }

                            function p(e) {
                                this.length = e, this.promise = null, this[e - 1] = null
                            }
                            var h = e("./util"),
                                _ = e("./errors").TypeError,
                                m = e("./util").inherits,
                                g = h.errorObj,
                                v = h.tryCatch,
                                y = {};
                            l.prototype.data = function() {
                                return this._data
                            }, l.prototype.promise = function() {
                                return this._promise
                            }, l.prototype.resource = function() {
                                return this.promise().isFulfilled() ? this.promise().value() : y
                            }, l.prototype.tryDispose = function(e) {
                                var t = this.resource(),
                                    n = this._context;
                                void 0 !== n && n._pushContext();
                                var r = t !== y ? this.doDispose(t, e) : null;
                                return void 0 !== n && n._popContext(), this._promise._unsetDisposable(), this._data = null, r
                            }, l.isDisposer = function(e) {
                                return null != e && "function" == typeof e.resource && "function" == typeof e.tryDispose
                            }, m(f, l), f.prototype.doDispose = function(e, t) {
                                return this.data().call(e, e, t)
                            }, p.prototype._resultCancelled = function() {
                                for (var e = this.length, n = 0; n < e; ++n) {
                                    var r = this[n];
                                    r instanceof t && r.cancel()
                                }
                            }, t.using = function() {
                                var e = arguments.length;
                                if (e < 2) return n("you must pass at least 2 arguments to Promise.using");
                                var o = arguments[e - 1];
                                if ("function" != typeof o) return n("expecting a function but got " + h.classString(o));
                                var i, u = !0;
                                2 === e && Array.isArray(arguments[0]) ? (i = arguments[0], e = i.length, u = !1) : (i = arguments, e--);
                                for (var s = new p(e), f = 0; f < e; ++f) {
                                    var _ = i[f];
                                    if (l.isDisposer(_)) {
                                        var m = _;
                                        _ = _.promise(), _._setDisposable(m)
                                    } else {
                                        var y = r(_);
                                        y instanceof t && (_ = y._then(d, null, null, {
                                            resources: s,
                                            index: f
                                        }, void 0))
                                    }
                                    s[f] = _
                                }
                                for (var b = new Array(s.length), f = 0; f < b.length; ++f) b[f] = t.resolve(s[f]).reflect();
                                var E = t.all(b).then(function(e) {
                                        for (var t = 0; t < e.length; ++t) {
                                            var n = e[t];
                                            if (n.isRejected()) return g.e = n.error(), g;
                                            if (!n.isFulfilled()) return void E.cancel();
                                            e[t] = n.value()
                                        }
                                        w._pushContext(), o = v(o);
                                        var r = u ? o.apply(void 0, e) : o(e),
                                            i = w._popContext();
                                        return a.checkForgottenReturns(r, i, "Promise.using", w), r
                                    }),
                                    w = E.lastly(function() {
                                        var e = new t.PromiseInspection(E);
                                        return c(s, e)
                                    });
                                return s.promise = w, w._setOnCancel(s), w
                            }, t.prototype._setDisposable = function(e) {
                                this._bitField = 131072 | this._bitField, this._disposer = e
                            }, t.prototype._isDisposable = function() {
                                return (131072 & this._bitField) > 0
                            }, t.prototype._getDisposer = function() {
                                return this._disposer
                            }, t.prototype._unsetDisposable = function() {
                                this._bitField = -131073 & this._bitField, this._disposer = void 0
                            }, t.prototype.disposer = function(e) {
                                if ("function" == typeof e) return new f(e, this, o());
                                throw new _
                            }
                        }
                    }, {
                        "./errors": 12,
                        "./util": 36
                    }],
                    36: [function(e, r, o) {
                        "use strict";

                        function i() {
                            try {
                                var e = C;
                                return C = null, e.apply(this, arguments)
                            } catch (e) {
                                return R.e = e, R
                            }
                        }

                        function a(e) {
                            return C = e, i
                        }

                        function u(e) {
                            return null == e || !0 === e || !1 === e || "string" == typeof e || "number" == typeof e
                        }

                        function s(e) {
                            return "function" == typeof e || "object" == typeof e && null !== e
                        }

                        function c(e) {
                            return u(e) ? new Error(v(e)) : e
                        }

                        function l(e, t) {
                            var n, r = e.length,
                                o = new Array(r + 1);
                            for (n = 0; n < r; ++n) o[n] = e[n];
                            return o[n] = t, o
                        }

                        function f(e, t, n) {
                            if (!A.isES5) return {}.hasOwnProperty.call(e, t) ? e[t] : void 0;
                            var r = Object.getOwnPropertyDescriptor(e, t);
                            return null != r ? null == r.get && null == r.set ? r.value : n : void 0
                        }

                        function d(e, t, n) {
                            if (u(e)) return e;
                            var r = {
                                value: n,
                                configurable: !0,
                                enumerable: !1,
                                writable: !0
                            };
                            return A.defineProperty(e, t, r), e
                        }

                        function p(e) {
                            throw e
                        }

                        function h(e) {
                            try {
                                if ("function" == typeof e) {
                                    var t = A.names(e.prototype),
                                        n = A.isES5 && t.length > 1,
                                        r = t.length > 0 && !(1 === t.length && "constructor" === t[0]),
                                        o = N.test(e + "") && A.names(e).length > 0;
                                    if (n || r || o) return !0
                                }
                                return !1
                            } catch (e) {
                                return !1
                            }
                        }

                        function _(e) {
                            function t() {}

                            function n() {
                                return typeof r.foo
                            }
                            t.prototype = e;
                            var r = new t;
                            return n(), n(), e
                        }

                        function m(e) {
                            return F.test(e)
                        }

                        function g(e, t, n) {
                            for (var r = new Array(e), o = 0; o < e; ++o) r[o] = t + o + n;
                            return r
                        }

                        function v(e) {
                            try {
                                return e + ""
                            } catch (e) {
                                return "[no string representation]"
                            }
                        }

                        function y(e) {
                            return e instanceof Error || null !== e && "object" == typeof e && "string" == typeof e.message && "string" == typeof e.name
                        }

                        function b(e) {
                            try {
                                d(e, "isOperational", !0)
                            } catch (e) {}
                        }

                        function E(e) {
                            return null != e && (e instanceof Error.__BluebirdErrorTypes__.OperationalError || !0 === e.isOperational)
                        }

                        function w(e) {
                            return y(e) && A.propertyIsWritable(e, "stack")
                        }

                        function T(e) {
                            return {}.toString.call(e)
                        }

                        function x(e, t, n) {
                            for (var r = A.names(e), o = 0; o < r.length; ++o) {
                                var i = r[o];
                                if (n(i)) try {
                                    A.defineProperty(t, i, A.getDescriptor(e, i))
                                } catch (e) {}
                            }
                        }

                        function I(e) {
                            return V ? Object({
                                NODE_ENV: "production"
                            })[e] : void 0
                        }

                        function S() {
                            if ("function" == typeof Promise) try {
                                var e = new Promise(function() {});
                                if ("[object Promise]" === {}.toString.call(e)) return Promise
                            } catch (e) {}
                        }

                        function O(e, t) {
                            return e.bind(t)
                        }
                        var A = e("./es5"),
                            k = "undefined" == typeof navigator,
                            R = {
                                e: {}
                            },
                            C, j = "undefined" != typeof self ? self : "undefined" != typeof window ? window : void 0 !== n ? n : void 0 !== this ? this : null,
                            P = function(e, t) {
                                function n() {
                                    this.constructor = e, this.constructor$ = t;
                                    for (var n in t.prototype) r.call(t.prototype, n) && "$" !== n.charAt(n.length - 1) && (this[n + "$"] = t.prototype[n])
                                }
                                var r = {}.hasOwnProperty;
                                return n.prototype = t.prototype, e.prototype = new n, e.prototype
                            },
                            M = function() {
                                var e = [Array.prototype, Object.prototype, Function.prototype],
                                    t = function(t) {
                                        for (var n = 0; n < e.length; ++n)
                                            if (e[n] === t) return !0;
                                        return !1
                                    };
                                if (A.isES5) {
                                    var n = Object.getOwnPropertyNames;
                                    return function(e) {
                                        for (var r = [], o = Object.create(null); null != e && !t(e);) {
                                            var i;
                                            try {
                                                i = n(e)
                                            } catch (e) {
                                                return r
                                            }
                                            for (var a = 0; a < i.length; ++a) {
                                                var u = i[a];
                                                if (!o[u]) {
                                                    o[u] = !0;
                                                    var s = Object.getOwnPropertyDescriptor(e, u);
                                                    null != s && null == s.get && null == s.set && r.push(u)
                                                }
                                            }
                                            e = A.getPrototypeOf(e)
                                        }
                                        return r
                                    }
                                }
                                var r = {}.hasOwnProperty;
                                return function(n) {
                                    if (t(n)) return [];
                                    var o = [];
                                    e: for (var i in n)
                                        if (r.call(n, i)) o.push(i);
                                        else {
                                            for (var a = 0; a < e.length; ++a)
                                                if (r.call(e[a], i)) continue e;
                                            o.push(i)
                                        }
                                    return o
                                }
                            }(),
                            N = /this\s*\.\s*\S+\s*=/,
                            F = /^[a-z$_][a-z$_0-9]*$/i,
                            L = function() {
                                return "stack" in new Error ? function(e) {
                                    return w(e) ? e : new Error(v(e))
                                } : function(e) {
                                    if (w(e)) return e;
                                    try {
                                        throw new Error(v(e))
                                    } catch (e) {
                                        return e
                                    }
                                }
                            }(),
                            D = function(e) {
                                return A.isArray(e) ? e : null
                            };
                        if ("undefined" != typeof Symbol && Symbol.iterator) {
                            var U = "function" == typeof Array.from ? function(e) {
                                return Array.from(e)
                            } : function(e) {
                                for (var t, n = [], r = e[Symbol.iterator](); !(t = r.next()).done;) n.push(t.value);
                                return n
                            };
                            D = function(e) {
                                return A.isArray(e) ? e : null != e && "function" == typeof e[Symbol.iterator] ? U(e) : null
                            }
                        }
                        var W = void 0 !== t && "[object process]" === T(t).toLowerCase(),
                            V = void 0 !== t && !0,
                            B = {
                                isClass: h,
                                isIdentifier: m,
                                inheritedDataKeys: M,
                                getDataPropertyOrDefault: f,
                                thrower: p,
                                isArray: A.isArray,
                                asArray: D,
                                notEnumerableProp: d,
                                isPrimitive: u,
                                isObject: s,
                                isError: y,
                                canEvaluate: k,
                                errorObj: R,
                                tryCatch: a,
                                inherits: P,
                                withAppended: l,
                                maybeWrapAsError: c,
                                toFastProperties: _,
                                filledRange: g,
                                toString: v,
                                canAttachTrace: w,
                                ensureErrorObject: L,
                                originatesFromRejection: E,
                                markAsOriginatingFromRejection: b,
                                classString: T,
                                copyDescriptors: x,
                                hasDevTools: "undefined" != typeof chrome && chrome && "function" == typeof chrome.loadTimes,
                                isNode: W,
                                hasEnvVariables: V,
                                env: I,
                                global: j,
                                getNativePromise: S,
                                domainBind: O
                            };
                        B.isRecentNode = B.isNode && function() {
                            var e = t.versions.node.split(".").map(Number);
                            return 0 === e[0] && e[1] > 10 || e[0] > 0
                        }(), B.isNode && B.toFastProperties(t);
                        try {
                            throw new Error
                        } catch (e) {
                            B.lastLineError = e
                        }
                        r.exports = B
                    }, {
                        "./es5": 13
                    }]
                }, {}, [4])(4)
            }), "undefined" != typeof window && null !== window ? window.P = window.Promise : "undefined" != typeof self && null !== self && (self.P = self.Promise)
        }).call(t, n(81), n(20), n(189).setImmediate)
    },
    487: function(e, t, n) {
        "use strict";

        function r(e) {
            var t = e.name;
            return "https://" + t + ":" + e.pass + "@esync.ejoy.io/" + t
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = {
                facebook: "https://www.facebook.com/eJOYGlobal/",
                youtube: "https://www.youtube.com/channel/UCdrfBOp0E4H-ianlD9F30_A",
                twitter: "https://twitter.com/eJOYGlobal",
                instagram: "https://www.instagram.com/ejoyenglish/",
                pinterest: ""
            },
            i = {
                ejoyTube: "https://ejoy-english.com/go?utm_source=extension&utm_medium=ejoyGo",
                ejoyGoYoutubeConnect: "http://dev.ejoy.ws/convertyt?utm_source=extension&utm_medium=ejoyGoYoutubeConnect",
                ejoyGo: "https://ejoy-english.com/go",
                ejoyGoUtm: "",
                ejoyMovieTraining: "https://ejoy-english.com/go/movie-exercises",
                ejoyMovieTrainingUtm: "",
                printWordbook: "http://dev.ejoy.ws/print_wordbook",
                printWordbookUtm: "",
                importWordbook: "http://dev.ejoy.ws/import_wordbook",
                importWordbookUtm: "&utm_source=extension&utm_medium=import_wordbook",
                ejoyWordhunt: "http://dev.ejoy.ws/wordhunt?word=",
                ejoyWordhuntUtm: "",
                wordStore: "https://ejoy-english.com/go/wordstore?utm_source=extension&utm_medium=wordStore",
                appstore: "https://itunes.apple.com/us/app/ejoy-learn-english-with-videos/id1258329729?ls=1&mt=8",
                goPro: "https://ejoy-english.com/go/premium?utm_source=extension&utm_medium=goPremium",
                goProWithToken: "https://ejoy-english.com/go/premium",
                goProWithTokenUtm: "&utm_source=extension&utm_medium=",
                goSettingWithToken: "https://ejoy-english.com/go/setting",
                goSettingWithTokenUtm: "&utm_source=extension&utm_medium=setting",
                wordbooks: "",
                welcome: "https://ejoy-english.com",
                help: "https://ejoy-english.com/help",
                uninstall: "https://ejoy-english.com"
            },
            a = t.ejoyConfig = {
                nonce: "xxx",
                client_id: "671032c5-ef1a-448d-8b64-66c6bf4a8465",
                redirect_uri: "https://api.ejoy.io",
                host_api_phonetics: "https://dics.glot.ai/vocab/get-phonetics?sentence=",
                host_api_vocab: "https://dics.glot.ai/vocab/word?id=",
                settings_api_vocab: "https://api.ejoy.io/config/ejoyext",
                response_type: "code id_token token",
                response_mode: "query",
                scope: "openid profile email",
                connect_uri: "https://connect.ejoy.io",
                grap_url: "https://api.ejoy.io/graph",
                success_url: "https://api.ejoy.io/success",
                feedback_url: "https://connect.ejoy.io/ej/feedback",
                logout: "https://connect.ejoy.io/signout"
            },
            u = [{
                point: 1500,
                time: 5
            }, {
                point: 6e3,
                time: 15
            }, {
                point: 2e4,
                time: 45
            }],
            s = {
                PRIORITY: {
                    NEED_REVIEW: "needReview",
                    NOT_LEARN: "newWord",
                    MASTER: "master",
                    IN_PROCESS: "inProcess",
                    ADDED: "added"
                },
                QUESTION_DEFAULT: [{
                    word: "racist"
                }, {
                    word: "maximalism"
                }, {
                    word: "democracy"
                }, {
                    word: "communism"
                }],
                IS_GET_DATA_FROM_WORD_HUNT: !0,
                VOLUME: 75,
                MASTER_POINT: 15,
                IS_BONUS_MODEL: !1,
                MASTER_POINT_CALC: {
                    FIRST_CALC_MP: {
                        key: 2,
                        value: .5
                    },
                    SECOND_CALC_MP: {
                        key: 4,
                        value: 1
                    }
                },
                RATE_MASTER_POINT: .1,
                MODE_MIX: !1,
                MAX_POINT: u[0].point,
                DEFAULT_DIF: .3,
                DEFAULT_INTERVEL: 1,
                DURATION_ANIMATION: 700,
                MAX_POINT_BONUS_PER_WORD: 50,
                MAX_TIME_BONUS_PER_SENTENCE: 1e4,
                AVERAGE_TIME_PLAY: 3e4,
                NUMBER_WORD_PER_ROUND: 5,
                FLASH_CARD: {
                    POINT: 1,
                    RATE_MASTER_POINT: 5,
                    POINT_PER_FALSE: .3,
                    TIME_PLAY: 3e4,
                    TIME_MAX_POINT: 6e3,
                    DURATION_ANIMATION: .7,
                    COLOR_FAIL: "#e53838",
                    COLOR_SUCCESS: "#7ac70c"
                },
                FILL_IN_THE_BLANK: {
                    MAX_FIRST_POINT_PER_GAME: 100,
                    MIN_FIRST_POINT_PER_GAME: 20,
                    MAX_SECOND_POINT_PER_GAME: 0,
                    MIN_SECOND_POINT_PER_GAME: 0,
                    RATE_MASTER_POINT: 5,
                    POINT_PER_FALSE: .3,
                    TIME_PLAY: 3e4,
                    TIME_MAX_POINT: 6e3,
                    DURATION_ANIMATION: .7,
                    COLOR_FAIL: "#e53838",
                    COLOR_SUCCESS: "#7ac70c"
                },
                WORD_CONSTRUCTOR: {
                    MAX_FIRST_POINT_PER_GAME: 100,
                    MIN_FIRST_POINT_PER_GAME: 10,
                    MAX_SECOND_POINT_PER_GAME: 10,
                    MIN_SECOND_POINT_PER_GAME: 5,
                    RATE_MASTER_POINT: 5,
                    POINT_PER_FALSE: .3,
                    MAX_LEG_CHAR: 50,
                    TIME_MAX_POINT: 6e3,
                    TIME_PLAY: 3e4
                },
                MULTIABLE_CHOICE: {
                    MAX_FIRST_POINT_PER_GAME: 100,
                    MIN_FIRST_POINT_PER_GAME: 20,
                    MAX_SECOND_POINT_PER_GAME: 20,
                    MIN_SECOND_POINT_PER_GAME: 10,
                    RATE_MASTER_POINT: 3,
                    POINT_PER_FALSE: .3,
                    DURATION_ANIMATION: .7,
                    TIME_MAX_POINT: 6e3,
                    COLOR_FAIL: "#e53838",
                    COLOR_SUCCESS: "#7ac70c",
                    TIME_PLAY: 3e4
                },
                REARRANGE: {
                    MAX_FIRST_POINT_PER_GAME: 100,
                    MIN_FIRST_POINT_PER_GAME: 20,
                    MAX_SECOND_POINT_PER_GAME: 20,
                    MIN_SECOND_POINT_PER_GAME: 10,
                    RATE_MASTER_POINT: 3,
                    POINT_PER_FALSE: .3,
                    DURATION_ANIMATION: .7,
                    TIME_MAX_POINT: 1e4,
                    COLOR_FAIL: "#e53838",
                    COLOR_SUCCESS: "#7ac70c",
                    TIME_PLAY: 3e4,
                    NUM_ANSWER: 3,
                    MAX_LEG_CHAR: 200,
                    NUM_ANSWER_WITH_VIDEO: 5,
                    MIN_NUM_ANSWER: 3,
                    MAX_LEN_CONTEXT: 300
                },
                SPEAK: {
                    MAX_FIRST_POINT_PER_GAME: 100,
                    MIN_FIRST_POINT_PER_GAME: 20,
                    MAX_SECOND_POINT_PER_GAME: 0,
                    MIN_SECOND_POINT_PER_GAME: 0,
                    WORD_RATE_POINT: .5,
                    RATE_MASTER_POINT: 5,
                    POINT_PER_FALSE: .3,
                    DURATION_ANIMATION: .7,
                    TIME_MAX_POINT: 1e4,
                    COLOR_FAIL: "#e53838",
                    COLOR_SUCCESS: "#7ac70c",
                    TIME_PLAY: 3e4,
                    NUM_ANSWER: 3,
                    NUM_ANSWER_WITH_VIDEO: 5,
                    MIN_NUM_ANSWER: 3,
                    MAX_LEN_CONTEXT: 300
                },
                SPEAK_NOT_VIDEO: {
                    MAX_FIRST_POINT_PER_GAME: 100,
                    MIN_FIRST_POINT_PER_GAME: 20,
                    MAX_SECOND_POINT_PER_GAME: 0,
                    MIN_SECOND_POINT_PER_GAME: 0,
                    WORD_RATE_POINT: .5,
                    RATE_MASTER_POINT: 5,
                    POINT_PER_FALSE: .3,
                    DURATION_ANIMATION: .7,
                    TIME_MAX_POINT: 1e4,
                    COLOR_FAIL: "#e53838",
                    COLOR_SUCCESS: "#7ac70c",
                    TIME_PLAY: 3e4,
                    NUM_ANSWER: 3,
                    NUM_ANSWER_WITH_VIDEO: 5,
                    MIN_NUM_ANSWER: 3,
                    MAX_LEN_CONTEXT: 300
                },
                MODE_GAME: {
                    MULTIABLE_CHOICE: "MULTIABLE_CHOICE",
                    WORD_CONSTRUCTOR: "WORD_CONSTRUCTOR",
                    FILL_IN_THE_BLANK: "FILL_IN_THE_BLANK",
                    REARRANGE: "REARRANGE",
                    SPEAK: "SPEAK",
                    SPEAK_NOT_VIDEO: "SPEAK_NOT_VIDEO"
                },
                TYPE_GAME: {
                    QUESTION: 0,
                    DEFINITION: 1,
                    VIDEO: 2,
                    REARRANGE: 3,
                    SPEAK: 4,
                    SPEAK_NOT_VIDEO: 5
                }
            },
            c = {
                MASTER_POINT: 15,
                DEFAULT_DIF: .3,
                DEFAULT_INTERVEL: 1,
                DEFAULT_DUE_DATE: 1
            },
            l = {
                name: "Vietnamese",
                code: "vi"
            };
        t.default = {
            CONTACT_LINKS: o,
            TERM: c,
            OTHER_LINKS: i,
            GOALS: u,
            GAME_CONFIG: s,
            ejoyConfig: a,
            CHECK_IS_COLLAPSED: !1,
            ADDED_WORDS_NUM_LIMIT: 100,
            createDbUrl: r,
            DEFAULT_TRANSLATE_TO: l,
            linkWhatNews: "",
            byPassTime: !0
        }
    },
    488: function(e, t, n) {
        "use strict";

        function r(e) {
            var t = e.name;
            return "https://" + t + ":" + e.pass + "@esync.ejoy.io/" + t
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = {
                facebook: "https://www.facebook.com/eJOYGlobal?utm_source=extension&utm_medium=facebook",
                youtube: "https://www.youtube.com/channel/UCdrfBOp0E4H-ianlD9F30_A?utm_source=extension&utm_medium=youtube",
                twitter: "https://twitter.com/eJOYGlobal?utm_source=extension&utm_medium=twitter",
                instagram: "https://www.instagram.com/ejoyenglish?utm_source=extension&utm_medium=instagram",
                pinterest: ""
            },
            i = {
                ejoyTube: "https://ejoy-english.com/go?utm_source=extension&utm_medium=ejoyGo",
                ejoyGoYoutubeConnect: "https://ejoy-english.com/go/convertyt?utm_source=extension&utm_medium=ejoyGoYoutubeConnect",
                ejoyGo: "https://ejoy-english.com/go",
                ejoyGoUtm: "?utm_source=extension&utm_medium=ejoyGo",
                ejoyMovieTraining: "https://ejoy-english.com/go/movie-exercises",
                ejoyMovieTrainingUtm: "&utm_source=extension&utm_medium=movieTraining",
                printWordbook: "https://ejoy-english.com/go/print_wordbook",
                printWordbookUtm: "&utm_source=extension&utm_medium=print_wordbook",
                importWordbook: "https://ejoy-english.com/go/import_wordbook",
                importWordbookUtm: "&utm_source=extension&utm_medium=import_wordbook",
                ejoyWordhunt: "https://ejoy-english.com/go/wordhunt?word=",
                ejoyWordhuntUtm: "&utm_source=extension&utm_medium=wordhunt",
                wordStore: "https://ejoy-english.com/go/wordstore?utm_source=extension&utm_medium=wordStore",
                appstore: "https://itunes.apple.com/us/app/ejoy-learn-english-with-videos/id1258329729?ls=1&mt=8?utm_source=extension&utm_medium=appstore",
                goPro: "https://ejoy-english.com/go/premium?utm_source=extension&utm_medium=goPremium",
                goProWithToken: "https://ejoy-english.com/go/premium",
                goProWithTokenUtm: "&utm_source=extension&utm_medium=",
                goSettingWithToken: "https://ejoy-english.com/go/setting",
                goSettingWithTokenUtm: "&utm_source=extension&utm_medium=setting",
                wordbooks: "https://ejoy-english.com/go/wordbank",
                welcome: "https://ejoy-english.com",
                help: "https://ejoy-english.com/help",
                uninstall: "https://ejoy-english.com"
            },
            a = t.ejoyConfig = {
                nonce: "xxx",
                client_id: "671032c5-ef1a-448d-8b64-66c6bf4a8465",
                redirect_uri: "https://api.ejoy.io",
                response_type: "code id_token token",
                host_api_phonetics: "https://dics.glot.ai/vocab/get-phonetics?sentence=",
                host_api_vocab: "https://dics.glot.ai/vocab/word?id=",
                settings_api_vocab: "https://api.ejoy.io/config/ejoyext",
                response_mode: "query",
                scope: "openid profile email",
                connect_uri: "https://connect.ejoy.io",
                grap_url: "https://api.ejoy.io/graph",
                success_url: "https://api.ejoy.io/success",
                feedback_url: "https://connect.ejoy.io/ej/feedback",
                logout: "https://connect.ejoy.io/signout"
            };
        t.default = {
            DEFAULT_DISPLAY_ADV_STYLE: "icon",
            CONTACT_LINKS: o,
            OTHER_LINKS: i,
            ejoyConfig: a,
            CHECK_IS_COLLAPSED: !0,
            ADDED_WORDS_NUM_LIMIT: 20,
            createDbUrl: r,
            checkTimeToPlay: !0
        }
    },
    489: function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function o(e) {
            var t = e.name;
            return "http://" + t + ":" + e.pass + "@192.168.1.9:5984/" + t
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.ejoyConfig = t.KEY_BOARD = t.POS = t.TRANSLATE_TABS = t.headerBar = t.HEADER_TABS_NEW = t.HEADER_TABS = void 0;
        var i, a = n(6),
            u = r(a),
            s = n(30),
            c = r(s),
            l = n(10),
            f = r(l),
            d = n(185),
            p = n(471),
            h = r(p),
            _ = n(491),
            m = r(_),
            g = n(492),
            v = r(g),
            y = t.HEADER_TABS = ["Translation", "Definition", "Slang"],
            b = t.HEADER_TABS_NEW = ["Translation", "Definition", "Slang", "Example", "Collocation", "Synnonym", "Word_family"],
            E = t.headerBar = [{
                name: b[0],
                img: "img/icons/translate.svg"
            }, {
                name: b[1],
                img: "img/icons/definition.svg"
            }, {
                name: b[2],
                img: "img/icons/slang.svg"
            }, {
                name: b[3],
                img: "img/icons/example.svg"
            }, {
                name: b[4],
                img: "img/icons/collocation.svg"
            }, {
                name: b[5],
                img: "img/icons/synonym.svg"
            }, {
                name: b[6],
                img: "img/icons/grammar.svg"
            }],
            w = t.TRANSLATE_TABS = {
                google: "google",
                microsoft: "microsoft",
                ipa: "ipa"
            },
            T = t.POS = {
                slang: "slang",
                sentence: "sentence"
            },
            x = {
                web: "web",
                netflix: "netflix",
                iflix: "iflix",
                youtube: "youtube"
            },
            I = (i = {}, (0, c.default)(i, w.google, ",af,sq,am,ar,hy,az,eu,be,bn,bs,bg,ca,ceb,ny,zh-CN,zh-TW,co,hr,cs,da,nl,en,eo,et,tl,fi,fr,fy,gl,ka,de,el,gu,ht,ha,haw,iw,hi,hmn,hu,is,ig,id,ga,it,ja,jw,kn,kk,km,ko,ku,ky,lo,la,lv,lt,lb,mk,mg,ms,ml,mt,mi,mr,mn,my,ne,no,ps,fa,pl,pt,pa,ro,ru,sm,gd,sr,st,sn,sd,si,sk,sl,so,es,su,sw,sv,tg,ta,te,th,tr,uk,ur,uz,vi,cy,xh,yi,yo,zu"), (0, c.default)(i, w.microsoft, ",af,ar,bg,bn,bs,zh-CN,zh-TW,ca,cs,cy,da,nl,en,et,fa,fi,fr,de,el,ht,iw,hi,hr,hmn,hu,id,is,it,ja,ko,lv,lt,mg,ms,mt,no,pl,pt,ro,ru,sm,sk,sl,sr,es,sw,sv,ta,th,tl,tr,uk,ur,vi"), i),
            S = ["top-left", "top-right", "bot-left", "bot-right"],
            O = {
                small: {
                    name: "small",
                    rate: 1
                },
                normal: {
                    name: "normal",
                    rate: 1.25
                },
                large: {
                    name: "large",
                    rate: 1.5
                }
            },
            A = ["6.6.16"],
            k = {
                volume: 1,
                rate: 1,
                pitch: 1,
                nameVoice: "Google US English",
                lang: "en-US"
            },
            R = {
                facebook: "https://www.facebook.com/eJOYGlobal/",
                youtube: "https://www.youtube.com/channel/UCdrfBOp0E4H-ianlD9F30_A",
                twitter: "https://twitter.com/eJOYGlobal",
                instagram: "https://www.instagram.com/ejoyenglish/",
                pinterest: ""
            },
            C = {
                url: "https://docs.google.com/forms/d/e/1FAIpQLSd2ehw2WznMKlqzD9SAP7jsp2b2eiuGs3WKvIE6SgWKkAgq4g/formResponse",
                mothed: "POST",
                data: {
                    keyUrl: "entry.1591633300",
                    keyWord: "entry.326955045",
                    keyUser: "entry.1696159737"
                }
            },
            j = {
                ejoyTube: "https://ejoy-english.com/go?utm_source=extension&utm_medium=ejoyGo",
                ejoyGoYoutubeConnect: "https://ejoy-english.com/go/convertyt?utm_source=extension&utm_medium=ejoyGoYoutubeConnect",
                ejoyGo: "https://ejoy-english.com/go",
                ejoyGoUtm: "?utm_source=extension&utm_medium=ejoyGo",
                ejoyWordhunt: "https://ejoy-english.com/go/wordhunt?word=",
                ejoyWordhuntUtm: "&utm_source=extension&utm_medium=wordhunt",
                ejoyMovieTraining: "https://ejoy-english.com/go/movie-exercises",
                ejoyMovieTrainingUtm: "&utm_source=extension&utm_medium=ejoyGo",
                printWordbook: "https://ejoy-english.com/go/print_wordbook",
                printWordbookUtm: "&utm_source=extension&utm_medium=print_wordbook",
                importWordbook: "https://ejoy-english.com/go/import_wordbook",
                importWordbookUtm: "&utm_source=extension&utm_medium=import_wordbook",
                wordStore: "https://ejoy-english.com/go/wordstore?utm_source=extension&utm_medium=wordStore",
                appstore: "https://itunes.apple.com/us/app/ejoy-learn-english-with-videos/id1258329729?ls=1&mt=8",
                goPro: "https://ejoy-english.com/go/premium?utm_source=extension&utm_medium=goPremium",
                goProWithToken: "https://ejoy-english.com/go/premium",
                goProWithTokenUtm: "&utm_source=extension&utm_medium=",
                goSettingWithToken: "https://ejoy-english.com/go/setting",
                goSettingWithTokenUtm: "&utm_source=extension&utm_medium=setting",
                wordbooks: "",
                welcome: "https://ejoy-english.com",
                help: "https://ejoy-english.com/help",
                uninstall: "https://ejoy-english.com"
            },
            P = {
                WELCOME_URL: "/extension/welcome",
                UNINSTALL_URL: "/extension/bye",
                USER_INFO: ""
            },
            M = {
                WB_ID: "wb::",
                TERM_ID: "term::",
                TERM_PHRASE_ID: "term_phrase::",
                MY_LIST_ID: "mvl::",
                MY_VIEWING_ID: "mvv::",
                DI_ID: "dailyinfo::",
                USER_ID: "user::"
            },
            N = [{
                point: 1500,
                time: 5
            }, {
                point: 6e3,
                time: 15
            }, {
                point: 2e4,
                time: 45
            }],
            F = {
                PRIORITY: {
                    NEED_REVIEW: "needReview",
                    NOT_LEARN: "newWord",
                    MASTER: "master",
                    IN_PROCESS: "inProcess",
                    ADDED: "added"
                },
                QUESTION_DEFAULT: [{
                    word: "racist"
                }, {
                    word: "maximalism"
                }, {
                    word: "democracy"
                }, {
                    word: "communism"
                }],
                IS_GET_DATA_FROM_WORD_HUNT: !0,
                VOLUME: 75,
                MASTER_POINT: 100,
                IS_BONUS_MODEL: !1,
                MASTER_POINT_CALC: {
                    FIRST_CALC_MP: {
                        key: 2,
                        value: .5
                    },
                    SECOND_CALC_MP: {
                        key: 4,
                        value: 1
                    }
                },
                RATE_MASTER_POINT: .1,
                MODE_MIX: !1,
                MAX_POINT: N[0].point,
                DEFAULT_DIF: .3,
                DEFAULT_INTERVEL: 1,
                DURATION_ANIMATION: 700,
                MAX_POINT_BONUS_PER_WORD: 50,
                MAX_TIME_BONUS_PER_SENTENCE: 1e4,
                AVERAGE_TIME_PLAY: 3e4,
                NUMBER_WORD_PER_ROUND: 8,
                FLASH_CARD: {
                    POINT: 1,
                    RATE_MASTER_POINT: 5,
                    POINT_PER_FALSE: .3,
                    TIME_PLAY: 3e4,
                    TIME_MAX_POINT: 6e3,
                    DURATION_ANIMATION: .7,
                    COLOR_FAIL: "#e53838",
                    COLOR_SUCCESS: "#7ac70c"
                },
                FILL_IN_THE_BLANK: {
                    MAX_FIRST_POINT_PER_GAME: 100,
                    MIN_FIRST_POINT_PER_GAME: 20,
                    MAX_SECOND_POINT_PER_GAME: 0,
                    MIN_SECOND_POINT_PER_GAME: 0,
                    RATE_MASTER_POINT: 5,
                    POINT_PER_FALSE: .3,
                    TIME_PLAY: 3e4,
                    TIME_MAX_POINT: 6e3,
                    DURATION_ANIMATION: .7,
                    COLOR_FAIL: "#e53838",
                    COLOR_SUCCESS: "#7ac70c"
                },
                WORD_CONSTRUCTOR: {
                    MAX_FIRST_POINT_PER_GAME: 100,
                    MIN_FIRST_POINT_PER_GAME: 10,
                    MAX_SECOND_POINT_PER_GAME: 10,
                    MIN_SECOND_POINT_PER_GAME: 5,
                    RATE_MASTER_POINT: 5,
                    POINT_PER_FALSE: .3,
                    MAX_LEG_CHAR: 50,
                    TIME_MAX_POINT: 6e3,
                    TIME_PLAY: 3e4
                },
                MULTIABLE_CHOICE: {
                    MAX_FIRST_POINT_PER_GAME: 100,
                    MIN_FIRST_POINT_PER_GAME: 20,
                    MAX_SECOND_POINT_PER_GAME: 20,
                    MIN_SECOND_POINT_PER_GAME: 10,
                    RATE_MASTER_POINT: 3,
                    POINT_PER_FALSE: .3,
                    DURATION_ANIMATION: .7,
                    TIME_MAX_POINT: 6e3,
                    COLOR_FAIL: "#e53838",
                    COLOR_SUCCESS: "#7ac70c",
                    TIME_PLAY: 3e4
                },
                REARRANGE: {
                    MAX_FIRST_POINT_PER_GAME: 100,
                    MIN_FIRST_POINT_PER_GAME: 20,
                    MAX_SECOND_POINT_PER_GAME: 20,
                    MIN_SECOND_POINT_PER_GAME: 10,
                    RATE_MASTER_POINT: 3,
                    POINT_PER_FALSE: .3,
                    DURATION_ANIMATION: .7,
                    TIME_MAX_POINT: 1e4,
                    COLOR_FAIL: "#e53838",
                    COLOR_SUCCESS: "#7ac70c",
                    TIME_PLAY: 3e4,
                    NUM_ANSWER: 3,
                    MAX_LEG_CHAR: 200,
                    NUM_ANSWER_WITH_VIDEO: 5,
                    MIN_NUM_ANSWER: 3,
                    MAX_LEN_CONTEXT: 300
                },
                SPEAK: {
                    MAX_FIRST_POINT_PER_GAME: 100,
                    MIN_FIRST_POINT_PER_GAME: 20,
                    MAX_SECOND_POINT_PER_GAME: 0,
                    MIN_SECOND_POINT_PER_GAME: 0,
                    WORD_RATE_POINT: .5,
                    RATE_MASTER_POINT: 5,
                    POINT_PER_FALSE: .3,
                    DURATION_ANIMATION: .7,
                    TIME_MAX_POINT: 1e4,
                    COLOR_FAIL: "#e53838",
                    COLOR_SUCCESS: "#7ac70c",
                    TIME_PLAY: 3e4,
                    NUM_ANSWER: 3,
                    NUM_ANSWER_WITH_VIDEO: 5,
                    MIN_NUM_ANSWER: 3,
                    MAX_LEN_CONTEXT: 300
                },
                SPEAK_NOT_VIDEO: {
                    MAX_FIRST_POINT_PER_GAME: 100,
                    MIN_FIRST_POINT_PER_GAME: 20,
                    MAX_SECOND_POINT_PER_GAME: 0,
                    MIN_SECOND_POINT_PER_GAME: 0,
                    WORD_RATE_POINT: .5,
                    RATE_MASTER_POINT: 5,
                    POINT_PER_FALSE: .3,
                    DURATION_ANIMATION: .7,
                    TIME_MAX_POINT: 1e4,
                    COLOR_FAIL: "#e53838",
                    COLOR_SUCCESS: "#7ac70c",
                    TIME_PLAY: 3e4,
                    NUM_ANSWER: 3,
                    NUM_ANSWER_WITH_VIDEO: 5,
                    MIN_NUM_ANSWER: 3,
                    MAX_LEN_CONTEXT: 300
                },
                MODE_GAME: {
                    MULTIABLE_CHOICE: "MULTIABLE_CHOICE",
                    WORD_CONSTRUCTOR: "WORD_CONSTRUCTOR",
                    FILL_IN_THE_BLANK: "FILL_IN_THE_BLANK",
                    REARRANGE: "REARRANGE",
                    SPEAK: "SPEAK",
                    SPEAK_NOT_VIDEO: "SPEAK_NOT_VIDEO"
                },
                TYPE_GAME: {
                    QUESTION: 0,
                    DEFINITION: 1,
                    VIDEO: 2,
                    REARRANGE: 3,
                    SPEAK: 4,
                    SPEAK_NOT_VIDEO: 5
                }
            },
            L = {
                MAX_SIZE_IMAGE: 100
            },
            D = {
                popup: {
                    display: "Immediately_Display",
                    key: "popup"
                },
                icon: {
                    display: "Display_Icon",
                    key: "icon"
                },
                none: {
                    display: "Dont_Display",
                    key: "none"
                }
            },
            U = {
                popup: {
                    display: "Immediately_Display",
                    key: "popup"
                },
                icon: {
                    display: "Display_Icon",
                    key: "icon"
                },
                none: {
                    display: "Dont_Display",
                    key: "none"
                }
            },
            W = "https://ejoy-english.com/blog/vi/cach-su-dung-ejoy-extension/",
            V = "https://ejoy-english.com/blog/vi/cach-su-dung-ejoy-extension/",
            B = {
                feedback: {
                    title: "Error",
                    message: "Wrong info"
                },
                addword: {
                    title: "Error",
                    message: "Login, please!"
                }
            },
            G = t.KEY_BOARD = {
                BACKSPACE: 8,
                TAB: 9,
                ENTER: 13,
                SHIFT: 16,
                CTRL: 17,
                ALT: 18,
                PAUSE: 19,
                CAPS_LOCK: 20,
                ESCAPE: 27,
                SPACE: 32,
                PAGE_UP: 33,
                PAGE_DOWN: 34,
                END: 35,
                HOME: 36,
                LEFT_ARROW: 37,
                UP_ARROW: 38,
                RIGHT_ARROW: 39,
                DOWN_ARROW: 40,
                INSERT: 45,
                DELETE: 46,
                KEY_0: 48,
                KEY_1: 49,
                KEY_2: 50,
                KEY_3: 51,
                KEY_4: 52,
                KEY_5: 53,
                KEY_6: 54,
                KEY_7: 55,
                KEY_8: 56,
                KEY_9: 57,
                KEY_A: 65,
                KEY_B: 66,
                KEY_C: 67,
                KEY_D: 68,
                KEY_E: 69,
                KEY_F: 70,
                KEY_G: 71,
                KEY_H: 72,
                KEY_I: 73,
                KEY_J: 74,
                KEY_K: 75,
                KEY_L: 76,
                KEY_M: 77,
                KEY_N: 78,
                KEY_O: 79,
                KEY_P: 80,
                KEY_Q: 81,
                KEY_R: 82,
                KEY_S: 83,
                KEY_T: 84,
                KEY_U: 85,
                KEY_V: 86,
                KEY_W: 87,
                KEY_X: 88,
                KEY_Y: 89,
                KEY_Z: 90,
                LEFT_META: 91,
                RIGHT_META: 92,
                SELECT: 93,
                NUMPAD_0: 96,
                NUMPAD_1: 97,
                NUMPAD_2: 98,
                NUMPAD_3: 99,
                NUMPAD_4: 100,
                NUMPAD_5: 101,
                NUMPAD_6: 102,
                NUMPAD_7: 103,
                NUMPAD_8: 104,
                NUMPAD_9: 105,
                MULTIPLY: 106,
                ADD: 107,
                SUBTRACT: 109,
                DECIMAL: 110,
                DIVIDE: 111,
                F1: 112,
                F2: 113,
                F3: 114,
                F4: 115,
                F5: 116,
                F6: 117,
                F7: 118,
                F8: 119,
                F9: 120,
                F10: 121,
                F11: 122,
                F12: 123,
                NUM_LOCK: 144,
                SCROLL_LOCK: 145,
                SEMICOLON: 186,
                EQUALS: 187,
                COMMA: 188,
                DASH: 189,
                PERIOD: 190,
                FORWARD_SLASH: 191,
                GRAVE_ACCENT: 192,
                OPEN_BRACKET: 219,
                BACK_SLASH: 220,
                CLOSE_BRACKET: 221,
                SINGLE_QUOTE: 222
            },
            H = ["arc", "ar", "dv", "fa", "ha", "he", "iw", "khw", "ks", "ku", "ps", "ur", "yi"],
            z = function(e) {
                return H.find(function(t) {
                    return e.startsWith(t)
                })
            },
            K = {
                MASTER_POINT: 100,
                DEFAULT_DIF: .3,
                DEFAULT_INTERVEL: 1,
                DEFAULT_DUE_DATE: 1
            },
            Y = new Date(0).toISOString(),
            q = t.ejoyConfig = {
                nonce: "xxx",
                client_id: "671032c5-ef1a-448d-8b64-66c6bf4a8465",
                redirect_uri: "http://192.168.1.10:3000",
                response_type: "code id_token token",
                host_api_phonetics: "https://dics.glot.ai/vocab/get-phonetics?sentence=",
                host_api_vocab: "https://dics.glot.ai/vocab/word?id=",
                settings_api_vocab: "https://api.ejoy.io/config/ejoyext",
                response_mode: "query",
                scope: "openid profile email",
                connect_uri: "https://connect.ejoy.io",
                grap_url: "http://192.168.1.10:3000/graph",
                success_url: "http://192.168.1.10:3000/success",
                feedback_url: "https://connect.ejoy.io/ej/feedback",
                logout: "https://connect.ejoy.io/signout"
            },
            X = (0, m.default)("https://cdn.ejoy.io/", !0),
            Z = {
                id: "ejoy_context_menu",
                title: "eJOY Extension",
                contexts: ["page", "selection"],
                childItems: {
                    translate: {
                        id: "translate",
                        title: (0, f.default)("advTranslator") + " (Alt+T)",
                        contexts: ["page", "selection"]
                    },
                    popupEjoy: {
                        id: "popupEjoy",
                        title: (0, f.default)("popup"),
                        contexts: ["selection"]
                    },
                    inlineTranslate: {
                        id: "inlineTranslate",
                        title: (0, f.default)("inlineTranslate"),
                        contexts: ["selection"]
                    },
                    showDefinition: {
                        id: "showDefinition",
                        title: (0, f.default)("definition_setting"),
                        type: "",
                        contexts: ["page", "selection"],
                        childItems: {
                            on: {
                                id: "on",
                                title: (0, f.default)("on"),
                                type: "radio",
                                contexts: ["page", "selection"]
                            },
                            off: {
                                id: "off",
                                title: (0, f.default)("off"),
                                type: "radio",
                                contexts: ["page", "selection"]
                            }
                        }
                    },
                    popupSetting: {
                        id: "popupSetting",
                        title: (0, f.default)("Popup_Setting"),
                        type: "",
                        contexts: ["page", "selection"],
                        childItems: {
                            popup: {
                                id: "popup",
                                title: (0, f.default)("Immediately_Display"),
                                type: "radio",
                                contexts: ["page", "selection"]
                            },
                            icon: {
                                id: "icon",
                                title: (0, f.default)("Display_Icon"),
                                type: "radio",
                                contexts: ["page", "selection"]
                            },
                            none: {
                                id: "none",
                                title: (0, f.default)("Dont_Display"),
                                type: "radio",
                                contexts: ["page", "selection"]
                            }
                        }
                    },
                    howToUse: {
                        id: "howToUse",
                        title: (0, f.default)("howToUse"),
                        contexts: ["page"]
                    },
                    convertYoutube: {
                        id: "convertYoutube",
                        title: (0, f.default)("convertYoutube"),
                        contexts: ["page"]
                    },
                    ejoySetting: {
                        id: "ejoySetting",
                        title: (0, f.default)("ejoySetting"),
                        contexts: ["page"]
                    },
                    enableEjoyInContent: {
                        id: "enableEjoyInContent",
                        title: (0, f.default)("enableEjoyInContent"),
                        type: "",
                        contexts: ["page", "selection"],
                        childItems: {
                            on: {
                                id: "enable",
                                title: (0, f.default)("enable"),
                                type: "radio",
                                contexts: ["page", "selection"]
                            },
                            off: {
                                id: "disable",
                                title: (0, f.default)("disable"),
                                type: "radio",
                                contexts: ["page", "selection"]
                            }
                        }
                    }
                }
            },
            $ = [{
                id: "gameCenter",
                title: (0, f.default)("Game_home"),
                type: "",
                url: "home.html"
            }, {
                title: (0, f.default)("Tools"),
                id: "toolsId",
                childItems: [{
                    id: "eGo",
                    title: (0, f.default)("eGo"),
                    type: "",
                    url: "https://ejoy-english.com/go"
                }, {
                    id: "word_store",
                    title: (0, f.default)("Word_store"),
                    type: "",
                    url: "https://ejoy-english.com/go/wordstore"
                }, {
                    id: "context_menu_adv_tran",
                    type: "",
                    title: (0, f.default)("advTranslator")
                }]
            }, {
                id: "helpsId",
                title: (0, f.default)("Help"),
                childItems: [{
                    id: "tutorial",
                    title: (0, f.default)("Tutorial"),
                    type: "",
                    url: j.welcome + "/" + chrome.i18n.getMessage("@@ui_locale").slice(0, 2) + P.WELCOME_URL
                }, {
                    id: "tutorialHowToUse",
                    title: (0, f.default)("howToUse"),
                    type: "",
                    url: "en" === (0, d.getLang)() ? V : W
                }]
            }, {
                id: "goPro",
                title: (0, f.default)("Go_PRO_now"),
                type: "",
                url: "https://ejoy-english.com/go/premium?utm_source=extension&utm_medium=goPremium"
            }, {
                id: "rate",
                title: (0, f.default)("Rate_me_on_Chrome_Store"),
                type: "",
                url: "https://chrome.google.com/webstore/detail/" + chrome.runtime.id + "/reviews"
            }],
            J = [{
                isBlank: !0,
                link: "https://www.facebook.com/eJOYGlobal",
                imageLink: "/img/options/history/facebook.png",
                alt: "facebook"
            }, {
                isBlank: !0,
                link: "https://www.youtube.com/channel/UCdrfBOp0E4H-ianlD9F30_",
                imageLink: "/img/options/history/youtube.png",
                alt: "youtube"
            }, {
                isBlank: !0,
                link: "https://www.twitter.com/eJOYGlobal/",
                imageLink: "/img/options/history/twitter.png",
                alt: "twitter"
            }, {
                isBlank: !0,
                link: "https://www.instagram.com/eJOYGlobal/",
                imageLink: "/img/options/history/instagram.png",
                alt: "instagram"
            }],
            Q = {
                subscription_plan: {
                    campaign: "moon",
                    discount_amount: 0
                },
                dayToExpire: 3,
                runPromo: !0,
                codeOffer: "customized-12m-30-24m-50",
                discountShowText: "50%",
                firstTrack: {
                    durationDay: 3,
                    timeFrom: "2019-04-08T00:00:00.000Z",
                    dataTrack: {
                        timeFrom: "2019-03-26T00:00:00.000Z",
                        caseTrack: [{
                            streak: {
                                from: 2
                            }
                        }, {
                            streak: {
                                from: 1
                            },
                            viewSubcription: {
                                from: 1
                            }
                        }, {
                            expireRestDay: {
                                from: 1,
                                to: 7
                            }
                        }, {
                            viewSubcription: {
                                from: 3
                            }
                        }, {
                            wordAddByDay: {
                                from: 20
                            },
                            viewSubcription: {
                                from: 1
                            }
                        }, {
                            totalAddedWord: {
                                from: 20
                            },
                            viewSubcription: {
                                from: 1
                            }
                        }]
                    }
                },
                moreTrack: {
                    dayLoop: 8,
                    durationDay: 3,
                    dataTrack: {
                        caseTrack: [{
                            streak: {
                                from: 1
                            }
                        }, {
                            viewSubcription: {
                                from: 1
                            }
                        }]
                    }
                }
            },
            ee = {
                name: "Vietnamese",
                code: "vi"
            },
            te = {
                name: "English",
                code: "en"
            },
            ne = {
                name: "English",
                code: "en"
            },
            re = {
                name: "English",
                code: "en"
            },
            oe = {
                advTranslator: "advTranslator",
                inlineTranslator: "inlineTranslator",
                definition: "definition",
                slang: "slang"
            },
            ie = {
                popup: "popup",
                popupContent: "popupContent",
                popupAdv: "popupAdv"
            },
            ae = {
                width: 614,
                height: 600
            },
            ue = {
                width: 550,
                height: 450
            },
            se = {
                width: 614,
                height: 750
            },
            ce = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
            le = {
                remindedWord: !1,
                timeRemind: "09:00",
                daysSelect: {
                    Mon: !0,
                    Tue: !0,
                    Wed: !0,
                    Thu: !0,
                    Fri: !0,
                    Sat: !0,
                    Sun: !0
                }
            },
            fe = [{
                image: chrome.extension.getURL("img/popup/infinite.svg"),
                name: "name_item1"
            }, {
                image: chrome.extension.getURL("img/popup/crown.svg"),
                name: "name_item2"
            }, {
                image: chrome.extension.getURL("img/popup/link.svg"),
                name: "name_item3"
            }, {
                image: chrome.extension.getURL("img/popup/download.svg"),
                name: "name_item4"
            }],
            de = ["glot", "ejoy"],
            pe = ["glot", "ejoy", "glotejoy"],
            he = {
                video: "ejoy",
                web: "glotejoy"
            },
            _e = {
                netflix: "https://ejo.bz/pro-extension-netflix",
                youtube: "https://ejo.bz/pro-extension-youtube",
                popup: "https://ejo.bz/pro-extension-popup-content",
                extend: "https://ejo.bz/pro-extension-extend",
                upgrade: "https://ejo.bz/pro-extension-upgrade",
                customized: "https://ejo.bz/pro-extension-customized",
                "bottom-account": "https://ejo.bz/pro-extension-bottom-account",
                "popup-chrome": "https://ejo.bz/pro-extension-popup-chrome",
                other: "https://ejo.bz/pro-extension-other"
            },
            me = [{
                name: "netflix.com",
                level: 3
            }, {
                name: "youtube.com",
                level: 2
            }, {
                name: "udemy.com",
                level: 2
            }, {
                name: "coursera.org",
                level: 2
            }, {
                name: "youtube-nocookie.com",
                level: 2
            }, {
                name: "udemy.com",
                level: 2
            }, {
                name: "futurelearn.com",
                level: 2
            }, {
                name: "ted.com",
                level: 2
            }, {
                name: "iq.com",
                level: 2
            }, {
                name: "primevideo.com",
                level: 2
            }, {
                name: "amazon.com",
                level: 2
            }, {
                name: "wetv.vip",
                level: 2
            }, {
                name: "tv.apple.com",
                level: 2
            }],
            ge = {
                urlCommounity: "https://tribe.ejoylearning.com",
                urlFaq: "https://ejoy-english.com/blog/ejoy-learner-help-center/#ejoy_extension_features",
                urlFeedback: "https://ejoy-english.com/help?chat=true&userId=743735&name=undefined&email=ejoyprovn@gmail.com&appVersion=6.4.0&chromeVersion=80.0.3987.178",
                urlHelp: "https://ejo.bz/help-video-ejoy",
                urlAboutUsEjoy: "https://ejoy-english.com/about-us",
                urlAboutUsGlot: "https://ejo.bz/about-glot",
                urlRate: "https://chrome.google.com/webstore/detail/ejoy-english-learn-with-m/amfojhdiedpdnlijjbhjnhokbnohfdfb",
                chatWithUs: "https://ejoy-english.com/go",
                aboutGlot: "https://ejo.bz/about-glot",
                aboutEjoy: "https://ejoy-english.com/about-us",
                helpEn: "https://help.glotdojo.com/tag/video-control/",
                helpVi: "https://help.glotdojo.com/tag/4-tra-tu-khi-xem-video/",
                addNewSite: "https://ejo.bz/add-new-site-to-eJOY",
                addNewSiteVi: "https://ejo.bz/add-new-site-to-eJOY-vi",
                addClass: "https://ejo.bz/get-element-class-ejoy",
                addClassVi: "https://ejo.bz/get-element-class-ejoy",
                fdfLinkVi: "https://ejoy-english.com/go/intl/vi/pdf?utm_source=ejoyext&utm_medium=gamecenter",
                fdfLinkEn: "https://ejoy-english.com/go/intl/en/pdf?utm_source=ejoyext&utm_medium=gamecenter",
                glotExtEn: "https://glotdojo.com/en",
                glotExtVi: "https://glotdojo.com/vi"
            },
            ve = {
                urlFaq: "https://ejoy-english.com/blog/vi/ejoy-faqs/"
            };
        t.default = (0, u.default)({
            PDF_ONLINE: "https://ejoy-english.com/go/pdf?link=",
            PDF_LINK: "https://ejoy-english.com/go/pdf",
            supportEnOptions: ge,
            supportOtherOptions: ve,
            eJOYPopId: "eJOY-pop-container-video",
            levelDomainVideoLookup: me,
            linkTracking: _e,
            dataOnOffVideo: de,
            dataOnOffWeb: pe,
            rtlLang: H,
            checkIsRltLang: z,
            dataOnOffExt: he,
            configPro: fe,
            MAX_HISTORY: 100,
            DEFAULT_AUTO_DISABLE_NOTIFY_STREAK: !1,
            HISTORY_SRC_POPUP: ie,
            FOOTER_HISTORY_DATA: J,
            defaultIsShowExt: !0,
            DAILY_START_DELAY: 36e5,
            SIZE_LOGIN_POPUP: se,
            SIZE_TRANSLATE_POPUP: ae,
            SIZE_PDF_POPUP: ue,
            OPEN_GAME_CENTER_DELAY: 1e3,
            DEFAULT_AUTO_DISABLE_GAME_CENTER: !0,
            remindNotifySetting: le,
            daysRemindSelect: ce,
            SPEAK_CONFIG: k,
            HEADER_TABS: y,
            POS: T,
            multiLanguagePageUrl: "https://ejo.bz/eJOY-multilanguage",
            SELECTED_COLOR: "rgb(25, 101, 148)",
            COMMON_COLOR: "rgb(29, 161, 242)",
            ANGLES: S,
            POP_SIZES: O,
            DEFAULT_DISPLAY_STYLE: "icon",
            DEFAULT_DISPLAY_ADV_STYLE: "icon",
            DISPLAY_STYLES: D,
            DISPLAY_ADV_STYLES: U,
            CONTACT_LINKS: R,
            OTHER_LINKS: j,
            ejoyConfig: q,
            FORM_REPORT: C,
            notifications: B,
            CHECK_IS_COLLAPSED: !1,
            HISTORY_TYPE: oe,
            ADDED_WORDS_NUM_LIMIT: 20,
            POSTFIX: P,
            PREFIX: M,
            TIME_GET_WORD_API_AUTH_AGAIN: 72e5,
            CHAR_NUM_LIMIT_TO_TRANSLATE: 50,
            WORD_NUM_LIMIT_TO_ADD: 5,
            GAME_CONFIG: F,
            DEFAULT_IMAGE: "https://lh3.googleusercontent.com/-XdUIqdMkCWA/AAAAAAAAAAI/AAAAAAAAAAA/4252rscbv5M/photo.jpg",
            GOALS: N,
            CACHE_LOCAL_STORAGE: 31622400,
            TERM: K,
            levels: h.default,
            createDbUrl: o,
            imageUpload: L,
            host_api_family: "https://dics.glot.ai/vocab/family?word=",
            imgUrl: {
                link: X,
                createTitleLink: _.createTitleLink
            }
        }, v.default, {
            IS_SHOW_DISPLAY_LANG: !1,
            listToCheckLang: I,
            NUMBER_WORD_TO_PLAY_SOUND: 3,
            RIGHT_CLICK_MENU: $,
            SELECTION_MENU: Z,
            TRANSLATE_PLACE: x,
            DIFF_DAY_NUM_ALLOW: 4,
            checkTimeToPlay: !0,
            TRANSLATE_TABS: w,
            CONTEXT_MENU_ADV_TRANS: "context_menu_adv_tran",
            DEFAULT_TRANSLATE_FROM_ADV: ne,
            DEFAULT_TRANSLATE_FROM: te,
            DEFAULT_TRANSLATE_FROM_INLINE: re,
            DEFAULT_TRANSLATE_TO: ee,
            microsoftTranslateUrl: "https://webmail.smartlinkcorp.com/dotrans_20160909.php",
            THE_BEGINNING_DATE: Y,
            AUTO_PRONUN: !1,
            KIND_PRONUN: "US",
            NUMBER_CHECK_ONBOARDING: 3,
            phraseId: "wb_phrase",
            HASH_CODE: "ego",
            H_C_CLIEN: "R10-ego-sflpjpsjfpajsflpdksflp",
            keyHash: "R10-ego-fs1knl34l2flksdlk3mlsf0-kfdsjksf",
            linkHowToPhrase: "https://ejoy-english.com/blog/speak-and-write-english-like-a-native-with-ejoy-phrasebook/",
            linkHowToPhraseVi: "https://ejoy-english.com/blog/vi/ejoy-phrase-book/",
            linkHowToUserVi: W,
            linkHowToUserEn: V,
            ejoyAppVi: "https://ejoy-english.com/vi/app",
            ejoyAppEn: "https://ejoy-english.com/en/app",
            linkHowToSyncVi: "https://ejoy-english.com/blog/vi/sync-dong-bo-tren-ejoy/",
            linkHowToSyncEn: "https://ejoy-english.com/blog/sync-on-ejoy/",
            linkLoopUpVi: "https://ejoy-english.com/blog/vi/cach-luu-mot-tu-bat-ky-vao-ejoy-extension/",
            linkLoopUpEn: "https://ejoy-english.com/blog/vi/cach-luu-mot-tu-bat-ky-vao-ejoy-extension/",
            SHOW_DEFINITION: !1,
            SPEAK_CONTEXT_ALL: !0,
            SPEAK_VOICE_DEFAULT: "",
            linkSourceImage: "https://cdn.ejoy.io/games/tutorial/",
            promoConfig: Q,
            HEADER_TABS_NEW: b,
            NUMBER_MORE_GET_TERM: 20,
            headerBar: E,
            linkWhatNews: "https://ejo.bz/eXtension-update",
            ignore_whatnews_version: A,
            linkWelcome: "https://ejo.bz/extension-welcome",
            linkWelcomeVi: "https://ejoy-english.com/vi/extension/welcome",
            linkWelcomeEn: "https://ejoy-english.com/en/extension/welcome",
            videoConfigUrl: "http://cms.ejoylearning.com/video-sites?_limit=100&_start=0",
            byPassTime: !1,
            DAY_NUM_ASK_RATING_EX_AGAIN: 7,
            ejoyAppSettingEn: "https://ejo.bz/app-ext-setting-en",
            ejoyAppSettingVi: "https://ejo.bz/app-ext-setting-vi",
            ejoyAppGamecenterEn: "https://ejo.bz/app-ext-gamecenter-en",
            ejoyAppGamecenterVi: "https://ejo.bz/app-ext-gamecenter-vi",
            ejoyAppSupportrEn: "https://ejo.bz/app-ext-support-en",
            ejoyAppSupportrVi: "https://ejo.bz/app-ext-support-vi",
            ejoyAppAccountEn: "https://ejo.bz/app-ext-account-en",
            ejoyAppAccountVi: "https://ejo.bz/app-ext-account-vi",
            KEY_BOARD: G
        })
    },
    49: function(e, t, n) {
        e.exports = {
            default: n(511),
            __esModule: !0
        }
    },
    490: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.default = JSON.parse('[\n  {\n      "id": 1,\n      "displayName": "Beginner",\n      "colorForm": "sunflowerYellow",\n      "colorTo": "sunflowerYellow",\n      "name": "Beginner",\n      "description": {\n          "toeic": {\n              "name": "TOEIC",\n              "min": 0,\n              "max": 250\n          },\n          "toefl": {\n              "name": "TOEFL",\n              "min": 0,\n              "max": 36\n          },\n          "knowHow": [\n              "Count to 100",\n              "Introduce yourself"\n          ],\n          "familiarWords": [\n              "Know",\n              "Have"\n          ]\n      }\n  },\n  {\n      "id": 2,\n      "displayName": "High Beginner",\n      "colorForm": "yellowishOrange",\n      "colorTo": "yellowishOrange",\n      "name": "High Beginner",\n      "description": {\n          "toeic": {\n              "name": "TOEIC",\n              "min": 251,\n              "max": 350\n          },\n          "toefl": {\n              "name": "TOEFL",\n              "min": 37,\n              "max": 44\n          },\n          "knowHow": [\n              "Make introductions",\n              "Tell the time and date"\n          ],\n          "familiarWords": [\n              "Accident",\n              "Draw"\n          ]\n      }\n  },\n  {\n      "id": 3,\n      "displayName": "Intermediate",\n      "colorForm": "slimeGreen",\n      "colorTo": "slimeGreen",\n      "name": "Intermediate",\n      "description": {\n          "toeic": {\n              "name": "TOEIC",\n              "min": 351,\n              "max": 500\n          },\n          "toefl": {\n              "name": "TOEFL",\n              "min": 45,\n              "max": 55\n          },\n          "knowHow": [\n              "Give basic directions",\n              "Talk about past events"\n          ],\n          "familiarWords": [\n              "Marry",\n              "Hope"\n          ]\n      }\n  },\n  {\n      "id": 4,\n      "displayName": "High Intermediate",\n      "colorForm": "slimeGreen",\n      "colorTo": "slimeGreen",\n      "name": "High Intermediate",\n      "description": {\n          "toeic": {\n              "name": "TOEIC",\n              "min": 501,\n              "max": 600\n          },\n          "toefl": {\n              "name": "TOEFL",\n              "min": 56,\n              "max": 66\n          },\n          "knowHow": [\n              "Give basic advice",\n              "Retell a simple story"\n          ],\n          "familiarWords": [\n              "Refuse",\n              "Recognize"\n          ]\n      }\n  },\n  {\n      "id": 5,\n      "displayName": "Low Advanced",\n      "colorForm": "brightCyan",\n      "colorTo": "azure",\n      "name": "Low Advanced",\n      "description": {\n          "toeic": {\n              "name": "TOEIC",\n              "min": 601,\n              "max": 730\n          },\n          "toefl": {\n              "name": "TOEFL",\n              "min": 67,\n              "max": 88\n          },\n          "knowHow": [\n              "Make suggestions",\n              "Schedule meetings"\n          ],\n          "familiarWords": [\n              "Satisfy",\n              "Crawl"\n          ]\n      }\n  },\n  {\n      "id": 6,\n      "displayName": "Advanced",\n      "colorForm": "brightCyan",\n      "colorTo": "azure",\n      "name": "Advanced",\n      "description": {\n          "toeic": {\n              "name": "TOEIC",\n              "min": 731,\n              "max": 850\n          },\n          "toefl": {\n              "name": "TOEFL",\n              "min": 89,\n              "max": 104\n          },\n          "knowHow": [\n              "Present formal presentations",\n              "Retell complex story"\n          ],\n          "familiarWords": [\n              "Evolve",\n              "Accomplish"\n          ]\n      }\n  },\n  {\n      "id": 7,\n      "displayName": "High Advanced",\n      "colorForm": "tomato",\n      "colorTo": "darkishPink",\n      "name": "High Advanced",\n      "description": {\n          "toeic": {\n              "name": "TOEIC",\n              "min": 851,\n              "max": 990\n          },\n          "toefl": {\n              "name": "TOEFL",\n              "min": 105,\n              "max": 120\n          },\n          "knowHow": [\n              "Use slang and idioms",\n              "Understand and tell jokes"\n          ],\n          "familiarWords": [\n              "Drift apart",\n              "Vilify"\n          ]\n      }\n  }\n]'), e.exports = t.default
    },
    491: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = /^(s\d+)\//gi,
            o = {
                vn: "http://dictionary.cambridge.org/",
                ec: "https://cdn.ejoy.io/ec/",
                cb: "http://dictionary.cambridge.org/",
                vo: "https://audio.vocab.com/",
                yt: "https://i.ytimg.com/",
                md: "https://image.tmdb.org/",
                wc: "https://www.voca.vn/",
                vm: "https://player.vimeo.com/",
                ef: "http://stream.ejoy.ws/ef/"
            };
        t.default = function(e, t) {
            return function(n) {
                if (n && n.startsWith("http")) return n;
                if (!t || !n || n.length < 3) return e + n;
                var i = n.substring(0, 2),
                    a = n.substring(3);
                return o[i] ? o[i] + a : (r.lastIndex = 0, r.test(n) ? "https://api.studify.tv/link/" + n : e + n)
            }
        };
        t.getYoutubeLink = function(e) {
            return function(t) {
                return e + t + "&cc_load_policy=3"
            }
        }, t.createTitleLink = function(e) {
            return e ? e.toLowerCase().trim().replace(/[^\w\s]/g, "").replace(/\s+/g, "-") : ""
        }
    },
    492: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = function(e) {
                return e + "\ufff0"
            },
            o = {
                WB: "wordbook",
                TERM: "term",
                PHRASE: "phrase",
                DAILY_INFO: "dailyinfo",
                INFOS: "infos"
            };
        t.default = {
            DB_TYPES: o,
            makeEndKey: r
        }, e.exports = t.default
    },
    493: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = {
            auto: "Auto Detect",
            af: "Afrikaans",
            sq: "Albanian",
            ar: "Arabic",
            hy: "Armenian",
            az: "Aerbaijani",
            eu: "Basque",
            be: "Belarusian",
            bn: "Bengali",
            bg: "Bulgarian",
            ca: "Catalan",
            "zh-CN": "Chinese (simplified)",
            "zh-TW": "Chinese (traditional)",
            hr: "Croatian",
            cs: "Czech",
            da: "Danish",
            nl: "Dutch",
            en: "English",
            et: "Estonian",
            tl: "Filipino",
            fi: "Finnish",
            fr: "French",
            gl: "Galician",
            ka: "Georgian",
            de: "German",
            el: "Greek",
            ht: "Haitian Creole",
            iw: "Hebrew",
            hi: "Hindi",
            hu: "Hungarian",
            is: "Icelandic",
            id: "Indonesian",
            ga: "Irish",
            it: "Italian",
            ja: "Japanese",
            ko: "Korean",
            lv: "Latvian",
            lt: "Lithuanian",
            mk: "Macedonian",
            ms: "Malay",
            mt: "Maltese",
            no: "Norwegian",
            fa: "Persian",
            pl: "Polish",
            pt: "Portuguese",
            ro: "Romanian",
            ru: "Russian",
            sr: "Serbian",
            sk: "Slovak",
            sl: "Slovenian",
            es: "Spanish",
            sw: "Swahili",
            sv: "Swedish",
            th: "Thai",
            tr: "Turkish",
            uk: "Ukrainian",
            ur: "Urdu",
            vi: "Vietnamese",
            cy: "Welsh",
            yi: "Yiddish"
        };
        t.default = r, e.exports = t.default
    },
    494: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = {
            Afrikaans: "af",
            Albanian: "sq",
            Amharic: "am",
            Arabic: "ar",
            Armenian: "hy",
            Azerbaijani: "az",
            Basque: "eu",
            Belarusian: "be",
            Bengali: "bn",
            Bosnian: "bs",
            Bulgarian: "bg",
            Catalan: "ca",
            Cebuano: "ceb",
            Chichewa: "ny",
            "Chinese (Simplified)": "zh-CN",
            "Simplified Chinese": "zh-CN",
            "Chinese (Traditional)": "zh-TW",
            "Traditional Chinese": "zh-TW",
            Corsican: "co",
            Croatian: "hr",
            Czech: "cs",
            Danish: "da",
            Dutch: "nl",
            English: "en",
            Esperanto: "eo",
            Estonian: "et",
            Filipino: "tl",
            Finnish: "fi",
            French: "fr",
            Frisian: "fy",
            Galician: "gl",
            Georgian: "ka",
            German: "de",
            Greek: "el",
            Gujarati: "gu",
            "Haitian Creole": "ht",
            Hausa: "ha",
            Hawaiian: "haw",
            Hebrew: "iw",
            Hindi: "hi",
            Hmong: "hmn",
            Hungarian: "hu",
            Icelandic: "is",
            Igbo: "ig",
            Indonesian: "id",
            Irish: "ga",
            Italian: "it",
            Japanese: "ja",
            Javanese: "jw",
            Kannada: "kn",
            Kazakh: "kk",
            Khmer: "km",
            Kinyarwanda: "rw",
            Korean: "ko",
            Kurdish: "ku",
            Kyrgyz: "ky",
            Lao: "lo",
            Latin: "la",
            Latvian: "lv",
            Lithuanian: "lt",
            Luxembourgish: "lb",
            Macedonian: "mk",
            Malagasy: "mg",
            Malay: "ms",
            "Bahasa Malaysia": "ms",
            Malayalam: "ml",
            Maltese: "mt",
            Maori: "mi",
            Marathi: "mr",
            Mongolian: "mn",
            "Myanmar (Burmese)": "my",
            Nepali: "ne",
            Norwegian: "no",
            "Odia (Oriya)": "or",
            Pashto: "ps",
            Persian: "fa",
            Polish: "pl",
            Portuguese: "pt",
            Punjabi: "ma",
            Romanian: "ro",
            Russian: "ru",
            Samoan: "sm",
            "Scots Gaelic": "gd",
            Serbian: "sr",
            Sesotho: "st",
            Shona: "sn",
            Sindhi: "sd",
            Sinhala: "si",
            Slovak: "sk",
            Slovenian: "sl",
            Somali: "so",
            Spanish: "es",
            Sundanese: "su",
            Swahili: "sw",
            Swedish: "sv",
            Tajik: "tg",
            Tamil: "ta",
            Tatar: "tt",
            Telugu: "te",
            Thai: "th",
            Turkish: "tr",
            Turkmen: "tk",
            Ukrainian: "uk",
            Urdu: "ur",
            Uyghur: "ug",
            Uzbek: "uz",
            Vietnamese: "vi",
            Welsh: "cy",
            Xhosa: "xh",
            Yiddish: "yi",
            Yoruba: "yo",
            Zulu: "zu"
        };
        t.default = r, e.exports = t.default
    },
    495: function(e, t) {
        e.exports = [{
            domain: "www.netflix.com",
            elemClass: "glot-subtitles__sub__con",
            posEnable: !1,
            pos: {
                left: 0,
                top: 0
            },
            isNextByWord: !1,
            isSystemSuggest: !0,
            isFullSupport: !0,
            enable: !0,
            updated_at: "2019-01-27T09:15:18.512Z",
            created_at: "2019-01-27T09:05:02.384Z"
        }, {
            domain: "tv.apple.com",
            elemClass: "glot-subtitles__sub__con",
            posEnable: !1,
            pos: {
                left: 0,
                top: 0
            },
            isNextByWord: !1,
            isSystemSuggest: !0,
            isFullSupport: !0,
            updated_at: "2019-01-27T09:15:18.512Z",
            created_at: "2019-01-27T09:05:02.384Z",
            enable: !0
        }, {
            domain: "youtube.com",
            elemClass: "glot-subtitles__sub__con",
            posEnable: !1,
            pos: {
                left: 0,
                top: 0
            },
            isNextByWord: !1,
            isSystemSuggest: !0,
            isFullSupport: !0,
            updated_at: "2019-01-27T09:15:18.512Z",
            created_at: "2019-01-27T09:05:02.384Z",
            enable: !0
        }, {
            domain: "www.udemy.com",
            elemClass: "glot-subtitles__sub__con",
            posEnable: !1,
            pos: {
                left: 0,
                top: 0
            },
            isNextByWord: !1,
            isSystemSuggest: !0,
            isFullSupport: !0,
            updated_at: "2019-01-27T09:15:18.512Z",
            created_at: "2019-01-27T09:05:02.384Z",
            enable: !0
        }, {
            domain: "www.coursera.org",
            elemClass: "glot-subtitles__sub__con",
            posEnable: !1,
            pos: {
                left: 0,
                top: 0
            },
            isNextByWord: !1,
            isSystemSuggest: !0,
            isFullSupport: !0,
            updated_at: "2019-01-27T09:15:18.512Z",
            created_at: "2019-01-27T09:05:02.384Z",
            enable: !0
        }, {
            domain: "www.youtube-nocookie.com",
            elemClass: "glot-subtitles__sub__con",
            posEnable: !1,
            pos: {
                left: 0,
                top: 0
            },
            isNextByWord: !1,
            isSystemSuggest: !0,
            isFullSupport: !0,
            updated_at: "2019-01-27T09:15:18.512Z",
            created_at: "2019-01-27T09:05:02.384Z",
            enable: !0
        }, {
            domain: "www.futurelearn.com",
            elemClass: "glot-subtitles__sub__con",
            posEnable: !1,
            pos: {
                left: 0,
                top: 0
            },
            isNextByWord: !1,
            isSystemSuggest: !0,
            isFullSupport: !0,
            updated_at: "2019-01-27T09:15:18.512Z",
            created_at: "2019-01-27T09:05:02.384Z",
            enable: !0
        }, {
            domain: "www.ted.com",
            elemClass: "glot-subtitles__sub__con",
            posEnable: !1,
            pos: {
                left: 0,
                top: 0
            },
            isNextByWord: !1,
            isSystemSuggest: !0,
            isFullSupport: !0,
            updated_at: "2019-01-27T09:15:18.512Z",
            created_at: "2019-01-27T09:05:02.384Z",
            enable: !0
        }, {
            domain: "wetv.vip",
            elemClass: "glot-subtitles__sub__con",
            posEnable: !1,
            pos: {
                left: 0,
                top: 0
            },
            isNextByWord: !1,
            isSystemSuggest: !0,
            isFullSupport: !0,
            updated_at: "2019-01-27T09:15:18.512Z",
            created_at: "2019-01-27T09:05:02.384Z",
            enable: !0
        }, {
            domain: "www.primevideo.com",
            elemClass: "glot-subtitles__sub__con",
            posEnable: !1,
            pos: {
                left: 0,
                top: 0
            },
            isNextByWord: !1,
            isSystemSuggest: !0,
            isFullSupport: !0,
            updated_at: "2019-01-27T09:15:18.512Z",
            created_at: "2019-01-27T09:05:02.384Z",
            enable: !0
        }, {
            domain: "www.amazon.com",
            elemClass: "glot-subtitles__sub__con",
            posEnable: !1,
            pos: {
                left: 0,
                top: 0
            },
            isNextByWord: !1,
            isSystemSuggest: !0,
            isFullSupport: !0,
            updated_at: "2019-01-27T09:15:18.512Z",
            created_at: "2019-01-27T09:05:02.384Z",
            enable: !0
        }, {
            domain: "iq.com",
            elemClass: "glot-subtitles__sub__con",
            posEnable: !1,
            pos: {
                left: 0,
                top: 0
            },
            isNextByWord: !1,
            isSystemSuggest: !0,
            isFullSupport: !0,
            updated_at: "2019-01-27T09:15:18.512Z",
            created_at: "2019-01-27T09:05:02.384Z",
            enable: !0
        }, {
            domain: "viki.com",
            elemClass: "glot-subtitles__sub__con",
            posEnable: !1,
            pos: {
                left: 0,
                top: 0
            },
            isNextByWord: !1,
            isSystemSuggest: !0,
            isFullSupport: !0,
            updated_at: "2019-01-27T09:15:18.512Z",
            created_at: "2019-01-27T09:05:02.384Z",
            enable: !0
        }]
    },
    496: function(e, t) {
        e.exports = {
            ext_create_account: "both",
            ext_install: "ana",
            ext_signup: "both",
            ext_tutorial: "both",
            ext_look_up: "both",
            ext_add_word: "both",
            ext_adv_translator: "both",
            ext_inline_translate: "both",
            ext_wiki: "ana",
            ext_googletranslate: "ana",
            ext_googleimage: "ana",
            ext_add_phrase: "both",
            ext_play_phrase: "both",
            ext_play_game: "both",
            ext_complete_game: "both",
            ext_complete_daily_goal: "both",
            ext_auto_pause: "both",
            ext_bookmark_subtitle: "both",
            ext_dual_sub: "both",
            ext_phonetics: "ana",
            ext_print_subtitles: "both",
            ext_import_word: "ana",
            ext_sayit: "both",
            ext_reader_view: "both",
            ext_audio_reader: "both",
            ext_go_pro: "both",
            ext_go_gift: "both",
            ext_rate_app: "both",
            ext_video_quick_translation: "ana",
            ext_integrate_videosite: "both",
            ext_default_settings: "ana",
            ext_app_setting: "both",
            ext_app_account: "both",
            ext_app_support: "both",
            ext_app_gamecenter: "both",
            setting_sub: "ana",
            ext_pdf_click_icon: "both",
            ext_signup_cta: "both",
            ext_tutorial_review: "both",
            ext_tutorial_dualsub: "both",
            ext_close_playgame: "both",
            ext_remind_agree: "both",
            ext_remind_decline: "both",
            ext_auto_open_gamecenter: "both",
            ext_notif_agree: "both",
            ext_login_cta: "both"
        }
    },
    497: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = {
            "Auto follow OS's language": "",
            "Chinese (Simplified)": "zh_CN",
            English: "en",
            French: "fr",
            Japanese: "ja",
            Russian: "ru",
            Spanish: "es",
            Vietnamese: "vi"
        };
        t.default = r, e.exports = t.default
    },
    498: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = [{
            name: "Afrikaans",
            code: "af",
            countryCodes: ["ZA"]
        }, {
            name: "Albanian",
            code: "sq",
            countryCodes: ["AL"]
        }, {
            name: "Amharic",
            code: "am",
            countryCodes: ["ET"]
        }, {
            name: "Arabic",
            code: "ar",
            countryCodes: ["EG"]
        }, {
            name: "Armenian",
            code: "hy",
            countryCodes: ["AM"]
        }, {
            name: "Azerbaijani",
            code: "az",
            countryCodes: ["AZ"]
        }, {
            name: "Basque",
            code: "eu",
            countryCodes: ["ES"]
        }, {
            name: "Belarusian",
            code: "be",
            countryCodes: ["BY"]
        }, {
            name: "Bengali",
            code: "bn",
            countryCodes: ["BD"]
        }, {
            name: "Bosnian",
            code: "bs",
            countryCodes: ["BA"]
        }, {
            name: "Bulgarian",
            code: "bg",
            countryCodes: ["BG"]
        }, {
            name: "Catalan",
            code: "ca",
            countryCodes: ["CAT"]
        }, {
            name: "Cebuano",
            code: "ceb"
        }, {
            name: "Chichewa",
            code: "ny",
            countryCodes: ["ZM"]
        }, {
            name: "Chinese (Trad)",
            code: "zh-TW",
            countryCodes: ["HK"]
        }, {
            name: "Chinese (Simp)",
            code: "zh-CN",
            countryCodes: ["CN"]
        }, {
            name: "Corsican",
            code: "co"
        }, {
            name: "Croatian",
            code: "hr",
            countryCodes: ["HR"]
        }, {
            name: "Czech",
            code: "cs",
            countryCodes: ["CZ"]
        }, {
            name: "Danish",
            code: "da",
            countryCodes: ["DK", "GL"]
        }, {
            name: "Dutch",
            code: "nl",
            countryCodes: ["BE", "NL"]
        }, {
            name: "English",
            code: "en",
            countryCodes: ["AS", "BS", "CA", "CK", "IN", "NZ", "GB", "VG", "ZM", "ZW", "US", "AG", "AU", "AI", "CY", "FJ", "GH", "GI", "JM", "NA", "NF", "NG", "PK", "SB", "SG", "SL", "VC", "DM", "FM", "GM", "GG", "GY", "IE", "IM", "KI", "LK", "MS", "MU", "MV", "NR", "NU", "PN", "RW", "SH", "TK", "TO", "TT", "VG", "VU", "WS"]
        }, {
            name: "Esperanto",
            code: "eo"
        }, {
            name: "Estonian",
            code: "et",
            countryCodes: ["EE"]
        }, {
            name: "Filipino",
            code: "fil"
        }, {
            name: "Finnish",
            code: "fi",
            countryCodes: ["FI"]
        }, {
            name: "French",
            code: "fr",
            countryCodes: ["BF", "BI", "BJ", "CD", "CF", "CG", "CI", "CM", "MA"]
        }, {
            name: "Frisian",
            code: "fy"
        }, {
            name: "Galician",
            code: "gl"
        }, {
            name: "Georgian",
            code: "ka",
            countryCodes: ["GE"]
        }, {
            name: "German",
            code: "de",
            countryCodes: ["AT", "CH", "DE"]
        }, {
            name: "Greek",
            code: "el",
            countryCodes: ["GR"]
        }, {
            name: "Gujarati",
            code: "gu"
        }, {
            name: "Haitian Creole",
            code: "ht"
        }, {
            name: "Hausa",
            code: "ha"
        }, {
            name: "Hawaiian",
            code: "haw"
        }, {
            name: "Hebrew",
            code: "iw"
        }, {
            name: "Hindi",
            code: "hi"
        }, {
            name: "Hmong",
            code: "hmn"
        }, {
            name: "Hungarian",
            code: "hu",
            countryCodes: ["HU"]
        }, {
            name: "Icelandic",
            code: "is",
            countryCodes: ["IS"]
        }, {
            name: "Igbo",
            code: "ig"
        }, {
            name: "Indonesian",
            code: "id",
            countryCodes: ["ID"]
        }, {
            name: "Irish",
            code: "ga"
        }, {
            name: "Italian",
            code: "it",
            countryCodes: ["IT", "SM"]
        }, {
            name: "Japanese",
            code: "ja",
            countryCodes: ["JP"]
        }, {
            name: "Javanese",
            code: "jv"
        }, {
            name: "Kannada",
            code: "kn"
        }, {
            name: "Kazakh",
            code: "kk",
            countryCodes: ["KZ"]
        }, {
            name: "Khmer",
            code: "km",
            countryCodes: ["KH"]
        }, {
            name: "Korean",
            code: "ko",
            countryCodes: ["KR"]
        }, {
            name: "Kurdish (Kurmanji)",
            code: "ku"
        }, {
            name: "Kyrgyz",
            code: "ky",
            countryCodes: ["KG"]
        }, {
            name: "Lao",
            code: "lo",
            countryCodes: ["LA"]
        }, {
            name: "Latin",
            code: "la"
        }, {
            name: "Latvian",
            code: "lv",
            countryCodes: ["LV"]
        }, {
            name: "Lithuanian",
            code: "lt",
            countryCodes: ["LT"]
        }, {
            name: "Luxembourgish",
            code: "lb"
        }, {
            name: "Macedonian",
            code: "mk",
            countryCodes: ["MK"]
        }, {
            name: "Malagasy",
            code: "mg",
            countryCodes: ["MG"]
        }, {
            name: "Malay",
            code: "ms",
            countryCodes: ["MY"]
        }, {
            name: "Malayalam",
            code: "ml"
        }, {
            name: "Maltese",
            code: "mt",
            countryCodes: ["MT"]
        }, {
            name: "Maori",
            code: "mi"
        }, {
            name: "Marathi",
            code: "mr"
        }, {
            name: "Mongolian",
            code: "mn",
            countryCodes: ["MN"]
        }, {
            name: "Myanmar (Burmese)",
            code: "my"
        }, {
            name: "Nepali",
            code: "ne",
            countryCodes: ["NP"]
        }, {
            name: "Norwegian",
            code: "no",
            countryCodes: ["NO"]
        }, {
            name: "Pashto",
            code: "ps"
        }, {
            name: "Persian",
            code: "fa",
            countryCodes: ["AF"]
        }, {
            name: "Polish",
            code: "pl",
            countryCodes: ["PL"]
        }, {
            name: "Portuguese",
            code: "pt",
            countryCodes: ["AO", "MZ", "BR", "CV", "ST", "TL", "PT"]
        }, {
            name: "Punjabi",
            code: "pa"
        }, {
            name: "Romanian",
            code: "ro",
            countryCodes: ["RO"]
        }, {
            name: "Russian",
            code: "ru",
            countryCodes: ["RU"]
        }, {
            name: "Samoan",
            code: "sm"
        }, {
            name: "Scots Gaelic",
            code: "gd"
        }, {
            name: "Serbian",
            code: "sr",
            countryCodes: ["CS"]
        }, {
            name: "Sesotho",
            code: "st",
            countryCodes: ["LS"]
        }, {
            name: "Shona",
            code: "sh"
        }, {
            name: "Sindhi",
            code: "sd"
        }, {
            name: "Sinhala",
            code: "si"
        }, {
            name: "Slovak",
            code: "sk",
            countryCodes: ["SK"]
        }, {
            name: "Slovenian",
            code: "sl",
            countryCodes: ["SI"]
        }, {
            name: "Somali",
            code: "so",
            countryCodes: ["SO"]
        }, {
            name: "Spanish",
            code: "es",
            countryCodes: ["CL", "CR", "VE", "AR", "BO", "BZ", "CO", "CU", "DO", "EC", "GT", "MX", "NI", "PA", "PE", "PR", "PY", "SV", "UY", "ES", "HN"]
        }, {
            name: "Sundanese",
            code: "su"
        }, {
            name: "Swahili",
            code: "sw",
            countryCodes: ["KE", "TZ"]
        }, {
            name: "Swedish",
            code: "sv",
            countryCodes: ["SE"]
        }, {
            name: "Tajik",
            code: "tg",
            countryCodes: ["TJ"]
        }, {
            name: "Tamil",
            code: "ta"
        }, {
            name: "Telugu",
            code: "te"
        }, {
            name: "Thai",
            code: "th",
            countryCodes: ["TH"]
        }, {
            name: "Turkish",
            code: "tr",
            countryCodes: ["TR"]
        }, {
            name: "Ukrainian",
            code: "uk",
            countryCodes: ["UA"]
        }, {
            name: "Urdu",
            code: "ur"
        }, {
            name: "Uzbek",
            code: "uz",
            countryCodes: ["UZ"]
        }, {
            name: "Vietnamese",
            code: "vi",
            countryCodes: ["VN"]
        }, {
            name: "Welsh",
            code: "cy"
        }, {
            name: "Xhosa",
            code: "xh"
        }, {
            name: "Yiddish",
            code: "yi"
        }, {
            name: "Yoruba",
            code: "yo"
        }, {
            name: "Zulu",
            code: "zu"
        }];
        t.default = {
            langs: r
        }, e.exports = t.default
    },
    499: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = [{
                quote: "For every two minutes of glamour, there are eight hours of hard work.",
                author: "Jessica Savitch"
            }, {
                quote: "Without hard work, nothing grows but weeds.",
                author: "Gordon B. Hinckley"
            }, {
                quote: "What you do today can improve all your tomorrows.",
                author: "Ralph Marston"
            }, {
                quote: "Success isn\u2019t about the end result, it\u2019s about what you learn along the way.",
                author: "Vera Wang"
            }, {
                quote: "There are no secrets to success. It is the result of preparation, hard work, and learning from failure.",
                author: "Colin Powell"
            }, {
                quote: "It's hard to beat a person who never gives up.",
                author: "Babe Ruth"
            }],
            o = [{
                quote: "Your best teacher is your last mistake.",
                author: "Ralph Nader"
            }, {
                quote: "I have not failed. I've just found 10,000 ways that won't work.",
                author: "Thomas A. Edison"
            }, {
                quote: "Pain is temporary. Quitting lasts forever.",
                author: "Lance Armstrong"
            }, {
                quote: "The only real mistake is the one from which we learn nothing.",
                author: "Henry Ford"
            }, {
                quote: "Only those who dare to fail greatly can ever achieve greatly.",
                author: "Robert F. Kennedy"
            }, {
                quote: "Giving up is the only sure way to fail.",
                author: "Gena Showalter"
            }, {
                quote: "Our greatest glory is not in never failing, but in rising every time we fail.",
                author: "Confucius"
            }, {
                quote: "Failure is simply the opportunity to begin again, this time more intelligently.",
                author: "Henry Ford"
            }, {
                quote: "Anyone who has never made a mistake has never tried anything new.",
                author: "Albert Einstein"
            }, {
                quote: "You\u2019ll always miss 100% of the shots you don\u2019t take.",
                author: "Wayne Gretzky"
            }, {
                quote: "Success is the ability to go from failure to failure without losing your enthusiasm.",
                author: "Winston Churchill"
            }, {
                quote: "Remember that failure is an event, not a person.",
                author: "Zig Ziglar"
            }, {
                quote: "Failure is success if we learn from it.",
                author: "Malcolm Forbes"
            }, {
                quote: "It's hard to beat a person who never gives up.",
                author: "Babe Ruth"
            }, {
                quote: "I've failed over and over and over again in my life-and that is why I succeed.",
                author: "Michael Jordan"
            }, {
                quote: "The only real mistake is the one from which we learn nothing.",
                author: "Henry Ford"
            }];
        t.default = {
            excellent: r,
            goodJob: o
        }, e.exports = t.default
    },
    5: function(e, t, n) {
        (function(e, r) {
            var o;
            (function() {
                function i(e, t, n) {
                    switch (n.length) {
                        case 0:
                            return e.call(t);
                        case 1:
                            return e.call(t, n[0]);
                        case 2:
                            return e.call(t, n[0], n[1]);
                        case 3:
                            return e.call(t, n[0], n[1], n[2])
                    }
                    return e.apply(t, n)
                }

                function a(e, t, n, r) {
                    for (var o = -1, i = null == e ? 0 : e.length; ++o < i;) {
                        var a = e[o];
                        t(r, a, n(a), e)
                    }
                    return r
                }

                function u(e, t) {
                    for (var n = -1, r = null == e ? 0 : e.length; ++n < r && !1 !== t(e[n], n, e););
                    return e
                }

                function s(e, t) {
                    for (var n = null == e ? 0 : e.length; n-- && !1 !== t(e[n], n, e););
                    return e
                }

                function c(e, t) {
                    for (var n = -1, r = null == e ? 0 : e.length; ++n < r;)
                        if (!t(e[n], n, e)) return !1;
                    return !0
                }

                function l(e, t) {
                    for (var n = -1, r = null == e ? 0 : e.length, o = 0, i = []; ++n < r;) {
                        var a = e[n];
                        t(a, n, e) && (i[o++] = a)
                    }
                    return i
                }

                function f(e, t) {
                    return !!(null == e ? 0 : e.length) && w(e, t, 0) > -1
                }

                function d(e, t, n) {
                    for (var r = -1, o = null == e ? 0 : e.length; ++r < o;)
                        if (n(t, e[r])) return !0;
                    return !1
                }

                function p(e, t) {
                    for (var n = -1, r = null == e ? 0 : e.length, o = Array(r); ++n < r;) o[n] = t(e[n], n, e);
                    return o
                }

                function h(e, t) {
                    for (var n = -1, r = t.length, o = e.length; ++n < r;) e[o + n] = t[n];
                    return e
                }

                function _(e, t, n, r) {
                    var o = -1,
                        i = null == e ? 0 : e.length;
                    for (r && i && (n = e[++o]); ++o < i;) n = t(n, e[o], o, e);
                    return n
                }

                function m(e, t, n, r) {
                    var o = null == e ? 0 : e.length;
                    for (r && o && (n = e[--o]); o--;) n = t(n, e[o], o, e);
                    return n
                }

                function g(e, t) {
                    for (var n = -1, r = null == e ? 0 : e.length; ++n < r;)
                        if (t(e[n], n, e)) return !0;
                    return !1
                }

                function v(e) {
                    return e.split("")
                }

                function y(e) {
                    return e.match(Lt) || []
                }

                function b(e, t, n) {
                    var r;
                    return n(e, function(e, n, o) {
                        if (t(e, n, o)) return r = n, !1
                    }), r
                }

                function E(e, t, n, r) {
                    for (var o = e.length, i = n + (r ? 1 : -1); r ? i-- : ++i < o;)
                        if (t(e[i], i, e)) return i;
                    return -1
                }

                function w(e, t, n) {
                    return t === t ? X(e, t, n) : E(e, x, n)
                }

                function T(e, t, n, r) {
                    for (var o = n - 1, i = e.length; ++o < i;)
                        if (r(e[o], t)) return o;
                    return -1
                }

                function x(e) {
                    return e !== e
                }

                function I(e, t) {
                    var n = null == e ? 0 : e.length;
                    return n ? R(e, t) / n : Pe
                }

                function S(e) {
                    return function(t) {
                        return null == t ? ne : t[e]
                    }
                }

                function O(e) {
                    return function(t) {
                        return null == e ? ne : e[t]
                    }
                }

                function A(e, t, n, r, o) {
                    return o(e, function(e, o, i) {
                        n = r ? (r = !1, e) : t(n, e, o, i)
                    }), n
                }

                function k(e, t) {
                    var n = e.length;
                    for (e.sort(t); n--;) e[n] = e[n].value;
                    return e
                }

                function R(e, t) {
                    for (var n, r = -1, o = e.length; ++r < o;) {
                        var i = t(e[r]);
                        i !== ne && (n = n === ne ? i : n + i)
                    }
                    return n
                }

                function C(e, t) {
                    for (var n = -1, r = Array(e); ++n < e;) r[n] = t(n);
                    return r
                }

                function j(e, t) {
                    return p(t, function(t) {
                        return [t, e[t]]
                    })
                }

                function P(e) {
                    return function(t) {
                        return e(t)
                    }
                }

                function M(e, t) {
                    return p(t, function(t) {
                        return e[t]
                    })
                }

                function N(e, t) {
                    return e.has(t)
                }

                function F(e, t) {
                    for (var n = -1, r = e.length; ++n < r && w(t, e[n], 0) > -1;);
                    return n
                }

                function L(e, t) {
                    for (var n = e.length; n-- && w(t, e[n], 0) > -1;);
                    return n
                }

                function D(e, t) {
                    for (var n = e.length, r = 0; n--;) e[n] === t && ++r;
                    return r
                }

                function U(e) {
                    return "\\" + In[e]
                }

                function W(e, t) {
                    return null == e ? ne : e[t]
                }

                function V(e) {
                    return mn.test(e)
                }

                function B(e) {
                    return gn.test(e)
                }

                function G(e) {
                    for (var t, n = []; !(t = e.next()).done;) n.push(t.value);
                    return n
                }

                function H(e) {
                    var t = -1,
                        n = Array(e.size);
                    return e.forEach(function(e, r) {
                        n[++t] = [r, e]
                    }), n
                }

                function z(e, t) {
                    return function(n) {
                        return e(t(n))
                    }
                }

                function K(e, t) {
                    for (var n = -1, r = e.length, o = 0, i = []; ++n < r;) {
                        var a = e[n];
                        a !== t && a !== se || (e[n] = se, i[o++] = n)
                    }
                    return i
                }

                function Y(e) {
                    var t = -1,
                        n = Array(e.size);
                    return e.forEach(function(e) {
                        n[++t] = e
                    }), n
                }

                function q(e) {
                    var t = -1,
                        n = Array(e.size);
                    return e.forEach(function(e) {
                        n[++t] = [e, e]
                    }), n
                }

                function X(e, t, n) {
                    for (var r = n - 1, o = e.length; ++r < o;)
                        if (e[r] === t) return r;
                    return -1
                }

                function Z(e, t, n) {
                    for (var r = n + 1; r--;)
                        if (e[r] === t) return r;
                    return r
                }

                function $(e) {
                    return V(e) ? Q(e) : Bn(e)
                }

                function J(e) {
                    return V(e) ? ee(e) : v(e)
                }

                function Q(e) {
                    for (var t = hn.lastIndex = 0; hn.test(e);) ++t;
                    return t
                }

                function ee(e) {
                    return e.match(hn) || []
                }

                function te(e) {
                    return e.match(_n) || []
                }
                var ne, re = 200,
                    oe = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",
                    ie = "Expected a function",
                    ae = "__lodash_hash_undefined__",
                    ue = 500,
                    se = "__lodash_placeholder__",
                    ce = 1,
                    le = 2,
                    fe = 4,
                    de = 1,
                    pe = 2,
                    he = 1,
                    _e = 2,
                    me = 4,
                    ge = 8,
                    ve = 16,
                    ye = 32,
                    be = 64,
                    Ee = 128,
                    we = 256,
                    Te = 512,
                    xe = 30,
                    Ie = "...",
                    Se = 800,
                    Oe = 16,
                    Ae = 1,
                    ke = 2,
                    Re = 1 / 0,
                    Ce = 9007199254740991,
                    je = 1.7976931348623157e308,
                    Pe = NaN,
                    Me = 4294967295,
                    Ne = Me - 1,
                    Fe = Me >>> 1,
                    Le = [
                        ["ary", Ee],
                        ["bind", he],
                        ["bindKey", _e],
                        ["curry", ge],
                        ["curryRight", ve],
                        ["flip", Te],
                        ["partial", ye],
                        ["partialRight", be],
                        ["rearg", we]
                    ],
                    De = "[object Arguments]",
                    Ue = "[object Array]",
                    We = "[object AsyncFunction]",
                    Ve = "[object Boolean]",
                    Be = "[object Date]",
                    Ge = "[object DOMException]",
                    He = "[object Error]",
                    ze = "[object Function]",
                    Ke = "[object GeneratorFunction]",
                    Ye = "[object Map]",
                    qe = "[object Number]",
                    Xe = "[object Null]",
                    Ze = "[object Object]",
                    $e = "[object Proxy]",
                    Je = "[object RegExp]",
                    Qe = "[object Set]",
                    et = "[object String]",
                    tt = "[object Symbol]",
                    nt = "[object Undefined]",
                    rt = "[object WeakMap]",
                    ot = "[object WeakSet]",
                    it = "[object ArrayBuffer]",
                    at = "[object DataView]",
                    ut = "[object Float32Array]",
                    st = "[object Float64Array]",
                    ct = "[object Int8Array]",
                    lt = "[object Int16Array]",
                    ft = "[object Int32Array]",
                    dt = "[object Uint8Array]",
                    pt = "[object Uint8ClampedArray]",
                    ht = "[object Uint16Array]",
                    _t = "[object Uint32Array]",
                    mt = /\b__p \+= '';/g,
                    gt = /\b(__p \+=) '' \+/g,
                    vt = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
                    yt = /&(?:amp|lt|gt|quot|#39);/g,
                    bt = /[&<>"']/g,
                    Et = RegExp(yt.source),
                    wt = RegExp(bt.source),
                    Tt = /<%-([\s\S]+?)%>/g,
                    xt = /<%([\s\S]+?)%>/g,
                    It = /<%=([\s\S]+?)%>/g,
                    St = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
                    Ot = /^\w*$/,
                    At = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
                    kt = /[\\^$.*+?()[\]{}|]/g,
                    Rt = RegExp(kt.source),
                    Ct = /^\s+|\s+$/g,
                    jt = /^\s+/,
                    Pt = /\s+$/,
                    Mt = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
                    Nt = /\{\n\/\* \[wrapped with (.+)\] \*/,
                    Ft = /,? & /,
                    Lt = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
                    Dt = /\\(\\)?/g,
                    Ut = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
                    Wt = /\w*$/,
                    Vt = /^[-+]0x[0-9a-f]+$/i,
                    Bt = /^0b[01]+$/i,
                    Gt = /^\[object .+?Constructor\]$/,
                    Ht = /^0o[0-7]+$/i,
                    zt = /^(?:0|[1-9]\d*)$/,
                    Kt = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
                    Yt = /($^)/,
                    qt = /['\n\r\u2028\u2029\\]/g,
                    Xt = "\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff",
                    Zt = "\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
                    $t = "[" + Zt + "]",
                    Jt = "[" + Xt + "]",
                    Qt = "[a-z\\xdf-\\xf6\\xf8-\\xff]",
                    en = "[^\\ud800-\\udfff" + Zt + "\\d+\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]",
                    tn = "\\ud83c[\\udffb-\\udfff]",
                    nn = "(?:\\ud83c[\\udde6-\\uddff]){2}",
                    rn = "[\\ud800-\\udbff][\\udc00-\\udfff]",
                    on = "[A-Z\\xc0-\\xd6\\xd8-\\xde]",
                    an = "(?:" + Qt + "|" + en + ")",
                    un = "(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",
                    sn = "(?:\\u200d(?:" + ["[^\\ud800-\\udfff]", nn, rn].join("|") + ")[\\ufe0e\\ufe0f]?" + un + ")*",
                    cn = "[\\ufe0e\\ufe0f]?" + un + sn,
                    ln = "(?:" + ["[\\u2700-\\u27bf]", nn, rn].join("|") + ")" + cn,
                    fn = "(?:" + ["[^\\ud800-\\udfff]" + Jt + "?", Jt, nn, rn, "[\\ud800-\\udfff]"].join("|") + ")",
                    dn = RegExp("['\u2019]", "g"),
                    pn = RegExp(Jt, "g"),
                    hn = RegExp(tn + "(?=" + tn + ")|" + fn + cn, "g"),
                    _n = RegExp([on + "?" + Qt + "+(?:['\u2019](?:d|ll|m|re|s|t|ve))?(?=" + [$t, on, "$"].join("|") + ")", "(?:[A-Z\\xc0-\\xd6\\xd8-\\xde]|[^\\ud800-\\udfff\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000\\d+\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde])+(?:['\u2019](?:D|LL|M|RE|S|T|VE))?(?=" + [$t, on + an, "$"].join("|") + ")", on + "?" + an + "+(?:['\u2019](?:d|ll|m|re|s|t|ve))?", on + "+(?:['\u2019](?:D|LL|M|RE|S|T|VE))?", "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", "\\d+", ln].join("|"), "g"),
                    mn = RegExp("[\\u200d\\ud800-\\udfff" + Xt + "\\ufe0e\\ufe0f]"),
                    gn = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
                    vn = ["Array", "Buffer", "DataView", "Date", "Error", "Float32Array", "Float64Array", "Function", "Int8Array", "Int16Array", "Int32Array", "Map", "Math", "Object", "Promise", "RegExp", "Set", "String", "Symbol", "TypeError", "Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array", "WeakMap", "_", "clearTimeout", "isFinite", "parseInt", "setTimeout"],
                    yn = -1,
                    bn = {};
                bn[ut] = bn[st] = bn[ct] = bn[lt] = bn[ft] = bn[dt] = bn[pt] = bn[ht] = bn[_t] = !0, bn[De] = bn[Ue] = bn[it] = bn[Ve] = bn[at] = bn[Be] = bn[He] = bn[ze] = bn[Ye] = bn[qe] = bn[Ze] = bn[Je] = bn[Qe] = bn[et] = bn[rt] = !1;
                var En = {};
                En[De] = En[Ue] = En[it] = En[at] = En[Ve] = En[Be] = En[ut] = En[st] = En[ct] = En[lt] = En[ft] = En[Ye] = En[qe] = En[Ze] = En[Je] = En[Qe] = En[et] = En[tt] = En[dt] = En[pt] = En[ht] = En[_t] = !0, En[He] = En[ze] = En[rt] = !1;
                var wn = {
                        "\xc0": "A",
                        "\xc1": "A",
                        "\xc2": "A",
                        "\xc3": "A",
                        "\xc4": "A",
                        "\xc5": "A",
                        "\xe0": "a",
                        "\xe1": "a",
                        "\xe2": "a",
                        "\xe3": "a",
                        "\xe4": "a",
                        "\xe5": "a",
                        "\xc7": "C",
                        "\xe7": "c",
                        "\xd0": "D",
                        "\xf0": "d",
                        "\xc8": "E",
                        "\xc9": "E",
                        "\xca": "E",
                        "\xcb": "E",
                        "\xe8": "e",
                        "\xe9": "e",
                        "\xea": "e",
                        "\xeb": "e",
                        "\xcc": "I",
                        "\xcd": "I",
                        "\xce": "I",
                        "\xcf": "I",
                        "\xec": "i",
                        "\xed": "i",
                        "\xee": "i",
                        "\xef": "i",
                        "\xd1": "N",
                        "\xf1": "n",
                        "\xd2": "O",
                        "\xd3": "O",
                        "\xd4": "O",
                        "\xd5": "O",
                        "\xd6": "O",
                        "\xd8": "O",
                        "\xf2": "o",
                        "\xf3": "o",
                        "\xf4": "o",
                        "\xf5": "o",
                        "\xf6": "o",
                        "\xf8": "o",
                        "\xd9": "U",
                        "\xda": "U",
                        "\xdb": "U",
                        "\xdc": "U",
                        "\xf9": "u",
                        "\xfa": "u",
                        "\xfb": "u",
                        "\xfc": "u",
                        "\xdd": "Y",
                        "\xfd": "y",
                        "\xff": "y",
                        "\xc6": "Ae",
                        "\xe6": "ae",
                        "\xde": "Th",
                        "\xfe": "th",
                        "\xdf": "ss",
                        "\u0100": "A",
                        "\u0102": "A",
                        "\u0104": "A",
                        "\u0101": "a",
                        "\u0103": "a",
                        "\u0105": "a",
                        "\u0106": "C",
                        "\u0108": "C",
                        "\u010a": "C",
                        "\u010c": "C",
                        "\u0107": "c",
                        "\u0109": "c",
                        "\u010b": "c",
                        "\u010d": "c",
                        "\u010e": "D",
                        "\u0110": "D",
                        "\u010f": "d",
                        "\u0111": "d",
                        "\u0112": "E",
                        "\u0114": "E",
                        "\u0116": "E",
                        "\u0118": "E",
                        "\u011a": "E",
                        "\u0113": "e",
                        "\u0115": "e",
                        "\u0117": "e",
                        "\u0119": "e",
                        "\u011b": "e",
                        "\u011c": "G",
                        "\u011e": "G",
                        "\u0120": "G",
                        "\u0122": "G",
                        "\u011d": "g",
                        "\u011f": "g",
                        "\u0121": "g",
                        "\u0123": "g",
                        "\u0124": "H",
                        "\u0126": "H",
                        "\u0125": "h",
                        "\u0127": "h",
                        "\u0128": "I",
                        "\u012a": "I",
                        "\u012c": "I",
                        "\u012e": "I",
                        "\u0130": "I",
                        "\u0129": "i",
                        "\u012b": "i",
                        "\u012d": "i",
                        "\u012f": "i",
                        "\u0131": "i",
                        "\u0134": "J",
                        "\u0135": "j",
                        "\u0136": "K",
                        "\u0137": "k",
                        "\u0138": "k",
                        "\u0139": "L",
                        "\u013b": "L",
                        "\u013d": "L",
                        "\u013f": "L",
                        "\u0141": "L",
                        "\u013a": "l",
                        "\u013c": "l",
                        "\u013e": "l",
                        "\u0140": "l",
                        "\u0142": "l",
                        "\u0143": "N",
                        "\u0145": "N",
                        "\u0147": "N",
                        "\u014a": "N",
                        "\u0144": "n",
                        "\u0146": "n",
                        "\u0148": "n",
                        "\u014b": "n",
                        "\u014c": "O",
                        "\u014e": "O",
                        "\u0150": "O",
                        "\u014d": "o",
                        "\u014f": "o",
                        "\u0151": "o",
                        "\u0154": "R",
                        "\u0156": "R",
                        "\u0158": "R",
                        "\u0155": "r",
                        "\u0157": "r",
                        "\u0159": "r",
                        "\u015a": "S",
                        "\u015c": "S",
                        "\u015e": "S",
                        "\u0160": "S",
                        "\u015b": "s",
                        "\u015d": "s",
                        "\u015f": "s",
                        "\u0161": "s",
                        "\u0162": "T",
                        "\u0164": "T",
                        "\u0166": "T",
                        "\u0163": "t",
                        "\u0165": "t",
                        "\u0167": "t",
                        "\u0168": "U",
                        "\u016a": "U",
                        "\u016c": "U",
                        "\u016e": "U",
                        "\u0170": "U",
                        "\u0172": "U",
                        "\u0169": "u",
                        "\u016b": "u",
                        "\u016d": "u",
                        "\u016f": "u",
                        "\u0171": "u",
                        "\u0173": "u",
                        "\u0174": "W",
                        "\u0175": "w",
                        "\u0176": "Y",
                        "\u0177": "y",
                        "\u0178": "Y",
                        "\u0179": "Z",
                        "\u017b": "Z",
                        "\u017d": "Z",
                        "\u017a": "z",
                        "\u017c": "z",
                        "\u017e": "z",
                        "\u0132": "IJ",
                        "\u0133": "ij",
                        "\u0152": "Oe",
                        "\u0153": "oe",
                        "\u0149": "'n",
                        "\u017f": "s"
                    },
                    Tn = {
                        "&": "&amp;",
                        "<": "&lt;",
                        ">": "&gt;",
                        '"': "&quot;",
                        "'": "&#39;"
                    },
                    xn = {
                        "&amp;": "&",
                        "&lt;": "<",
                        "&gt;": ">",
                        "&quot;": '"',
                        "&#39;": "'"
                    },
                    In = {
                        "\\": "\\",
                        "'": "'",
                        "\n": "n",
                        "\r": "r",
                        "\u2028": "u2028",
                        "\u2029": "u2029"
                    },
                    Sn = parseFloat,
                    On = parseInt,
                    An = "object" == typeof e && e && e.Object === Object && e,
                    kn = "object" == typeof self && self && self.Object === Object && self,
                    Rn = An || kn || Function("return this")(),
                    Cn = "object" == typeof t && t && !t.nodeType && t,
                    jn = Cn && "object" == typeof r && r && !r.nodeType && r,
                    Pn = jn && jn.exports === Cn,
                    Mn = Pn && An.process,
                    Nn = function() {
                        try {
                            var e = jn && jn.require && jn.require("util").types;
                            return e || Mn && Mn.binding && Mn.binding("util")
                        } catch (e) {}
                    }(),
                    Fn = Nn && Nn.isArrayBuffer,
                    Ln = Nn && Nn.isDate,
                    Dn = Nn && Nn.isMap,
                    Un = Nn && Nn.isRegExp,
                    Wn = Nn && Nn.isSet,
                    Vn = Nn && Nn.isTypedArray,
                    Bn = S("length"),
                    Gn = O(wn),
                    Hn = O(Tn),
                    zn = O(xn),
                    Kn = function e(t) {
                        function n(e) {
                            if (ts(e) && !pd(e) && !(e instanceof v)) {
                                if (e instanceof o) return e;
                                if (dl.call(e, "__wrapped__")) return Ji(e)
                            }
                            return new o(e)
                        }

                        function r() {}

                        function o(e, t) {
                            this.__wrapped__ = e, this.__actions__ = [], this.__chain__ = !!t, this.__index__ = 0, this.__values__ = ne
                        }

                        function v(e) {
                            this.__wrapped__ = e, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = Me, this.__views__ = []
                        }

                        function O() {
                            var e = new v(this.__wrapped__);
                            return e.__actions__ = Po(this.__actions__), e.__dir__ = this.__dir__, e.__filtered__ = this.__filtered__, e.__iteratees__ = Po(this.__iteratees__), e.__takeCount__ = this.__takeCount__, e.__views__ = Po(this.__views__), e
                        }

                        function X() {
                            if (this.__filtered__) {
                                var e = new v(this);
                                e.__dir__ = -1, e.__filtered__ = !0
                            } else e = this.clone(), e.__dir__ *= -1;
                            return e
                        }

                        function Q() {
                            var e = this.__wrapped__.value(),
                                t = this.__dir__,
                                n = pd(e),
                                r = t < 0,
                                o = n ? e.length : 0,
                                i = wi(0, o, this.__views__),
                                a = i.start,
                                u = i.end,
                                s = u - a,
                                c = r ? u : a - 1,
                                l = this.__iteratees__,
                                f = l.length,
                                d = 0,
                                p = Bl(s, this.__takeCount__);
                            if (!n || !r && o == s && p == s) return mo(e, this.__actions__);
                            var h = [];
                            e: for (; s-- && d < p;) {
                                c += t;
                                for (var _ = -1, m = e[c]; ++_ < f;) {
                                    var g = l[_],
                                        v = g.iteratee,
                                        y = g.type,
                                        b = v(m);
                                    if (y == ke) m = b;
                                    else if (!b) {
                                        if (y == Ae) continue e;
                                        break e
                                    }
                                }
                                h[d++] = m
                            }
                            return h
                        }

                        function ee(e) {
                            var t = -1,
                                n = null == e ? 0 : e.length;
                            for (this.clear(); ++t < n;) {
                                var r = e[t];
                                this.set(r[0], r[1])
                            }
                        }

                        function Lt() {
                            this.__data__ = Jl ? Jl(null) : {}, this.size = 0
                        }

                        function Xt(e) {
                            var t = this.has(e) && delete this.__data__[e];
                            return this.size -= t ? 1 : 0, t
                        }

                        function Zt(e) {
                            var t = this.__data__;
                            if (Jl) {
                                var n = t[e];
                                return n === ae ? ne : n
                            }
                            return dl.call(t, e) ? t[e] : ne
                        }

                        function $t(e) {
                            var t = this.__data__;
                            return Jl ? t[e] !== ne : dl.call(t, e)
                        }

                        function Jt(e, t) {
                            var n = this.__data__;
                            return this.size += this.has(e) ? 0 : 1, n[e] = Jl && t === ne ? ae : t, this
                        }

                        function Qt(e) {
                            var t = -1,
                                n = null == e ? 0 : e.length;
                            for (this.clear(); ++t < n;) {
                                var r = e[t];
                                this.set(r[0], r[1])
                            }
                        }

                        function en() {
                            this.__data__ = [], this.size = 0
                        }

                        function tn(e) {
                            var t = this.__data__,
                                n = Yn(t, e);
                            return !(n < 0) && (n == t.length - 1 ? t.pop() : Sl.call(t, n, 1), --this.size, !0)
                        }

                        function nn(e) {
                            var t = this.__data__,
                                n = Yn(t, e);
                            return n < 0 ? ne : t[n][1]
                        }

                        function rn(e) {
                            return Yn(this.__data__, e) > -1
                        }

                        function on(e, t) {
                            var n = this.__data__,
                                r = Yn(n, e);
                            return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this
                        }

                        function an(e) {
                            var t = -1,
                                n = null == e ? 0 : e.length;
                            for (this.clear(); ++t < n;) {
                                var r = e[t];
                                this.set(r[0], r[1])
                            }
                        }

                        function un() {
                            this.size = 0, this.__data__ = {
                                hash: new ee,
                                map: new(ql || Qt),
                                string: new ee
                            }
                        }

                        function sn(e) {
                            var t = vi(this, e).delete(e);
                            return this.size -= t ? 1 : 0, t
                        }

                        function cn(e) {
                            return vi(this, e).get(e)
                        }

                        function ln(e) {
                            return vi(this, e).has(e)
                        }

                        function fn(e, t) {
                            var n = vi(this, e),
                                r = n.size;
                            return n.set(e, t), this.size += n.size == r ? 0 : 1, this
                        }

                        function hn(e) {
                            var t = -1,
                                n = null == e ? 0 : e.length;
                            for (this.__data__ = new an; ++t < n;) this.add(e[t])
                        }

                        function _n(e) {
                            return this.__data__.set(e, ae), this
                        }

                        function mn(e) {
                            return this.__data__.has(e)
                        }

                        function gn(e) {
                            var t = this.__data__ = new Qt(e);
                            this.size = t.size
                        }

                        function wn() {
                            this.__data__ = new Qt, this.size = 0
                        }

                        function Tn(e) {
                            var t = this.__data__,
                                n = t.delete(e);
                            return this.size = t.size, n
                        }

                        function xn(e) {
                            return this.__data__.get(e)
                        }

                        function In(e) {
                            return this.__data__.has(e)
                        }

                        function An(e, t) {
                            var n = this.__data__;
                            if (n instanceof Qt) {
                                var r = n.__data__;
                                if (!ql || r.length < re - 1) return r.push([e, t]), this.size = ++n.size, this;
                                n = this.__data__ = new an(r)
                            }
                            return n.set(e, t), this.size = n.size, this
                        }

                        function kn(e, t) {
                            var n = pd(e),
                                r = !n && dd(e),
                                o = !n && !r && _d(e),
                                i = !n && !r && !o && bd(e),
                                a = n || r || o || i,
                                u = a ? C(e.length, il) : [],
                                s = u.length;
                            for (var c in e) !t && !dl.call(e, c) || a && ("length" == c || o && ("offset" == c || "parent" == c) || i && ("buffer" == c || "byteLength" == c || "byteOffset" == c) || Ri(c, s)) || u.push(c);
                            return u
                        }

                        function Cn(e) {
                            var t = e.length;
                            return t ? e[Zr(0, t - 1)] : ne
                        }

                        function jn(e, t) {
                            return qi(Po(e), Qn(t, 0, e.length))
                        }

                        function Mn(e) {
                            return qi(Po(e))
                        }

                        function Nn(e, t, n) {
                            (n === ne || Vu(e[t], n)) && (n !== ne || t in e) || $n(e, t, n)
                        }

                        function Bn(e, t, n) {
                            var r = e[t];
                            dl.call(e, t) && Vu(r, n) && (n !== ne || t in e) || $n(e, t, n)
                        }

                        function Yn(e, t) {
                            for (var n = e.length; n--;)
                                if (Vu(e[n][0], t)) return n;
                            return -1
                        }

                        function qn(e, t, n, r) {
                            return ff(e, function(e, o, i) {
                                t(r, e, n(e), i)
                            }), r
                        }

                        function Xn(e, t) {
                            return e && Mo(t, Fs(t), e)
                        }

                        function Zn(e, t) {
                            return e && Mo(t, Ls(t), e)
                        }

                        function $n(e, t, n) {
                            "__proto__" == t && Rl ? Rl(e, t, {
                                configurable: !0,
                                enumerable: !0,
                                value: n,
                                writable: !0
                            }) : e[t] = n
                        }

                        function Jn(e, t) {
                            for (var n = -1, r = t.length, o = Jc(r), i = null == e; ++n < r;) o[n] = i ? ne : Ps(e, t[n]);
                            return o
                        }

                        function Qn(e, t, n) {
                            return e === e && (n !== ne && (e = e <= n ? e : n), t !== ne && (e = e >= t ? e : t)), e
                        }

                        function er(e, t, n, r, o, i) {
                            var a, s = t & ce,
                                c = t & le,
                                l = t & fe;
                            if (n && (a = o ? n(e, r, o, i) : n(e)), a !== ne) return a;
                            if (!es(e)) return e;
                            var f = pd(e);
                            if (f) {
                                if (a = Ii(e), !s) return Po(e, a)
                            } else {
                                var d = Tf(e),
                                    p = d == ze || d == Ke;
                                if (_d(e)) return To(e, s);
                                if (d == Ze || d == De || p && !o) {
                                    if (a = c || p ? {} : Si(e), !s) return c ? Fo(e, Zn(a, e)) : No(e, Xn(a, e))
                                } else {
                                    if (!En[d]) return o ? e : {};
                                    a = Oi(e, d, s)
                                }
                            }
                            i || (i = new gn);
                            var h = i.get(e);
                            if (h) return h;
                            i.set(e, a), yd(e) ? e.forEach(function(r) {
                                a.add(er(r, t, n, r, e, i))
                            }) : gd(e) && e.forEach(function(r, o) {
                                a.set(o, er(r, t, n, o, e, i))
                            });
                            var _ = l ? c ? hi : pi : c ? Ls : Fs,
                                m = f ? ne : _(e);
                            return u(m || e, function(r, o) {
                                m && (o = r, r = e[o]), Bn(a, o, er(r, t, n, o, e, i))
                            }), a
                        }

                        function tr(e) {
                            var t = Fs(e);
                            return function(n) {
                                return nr(n, e, t)
                            }
                        }

                        function nr(e, t, n) {
                            var r = n.length;
                            if (null == e) return !r;
                            for (e = rl(e); r--;) {
                                var o = n[r],
                                    i = t[o],
                                    a = e[o];
                                if (a === ne && !(o in e) || !i(a)) return !1
                            }
                            return !0
                        }

                        function rr(e, t, n) {
                            if ("function" != typeof e) throw new al(ie);
                            return Sf(function() {
                                e.apply(ne, n)
                            }, t)
                        }

                        function or(e, t, n, r) {
                            var o = -1,
                                i = f,
                                a = !0,
                                u = e.length,
                                s = [],
                                c = t.length;
                            if (!u) return s;
                            n && (t = p(t, P(n))), r ? (i = d, a = !1) : t.length >= re && (i = N, a = !1, t = new hn(t));
                            e: for (; ++o < u;) {
                                var l = e[o],
                                    h = null == n ? l : n(l);
                                if (l = r || 0 !== l ? l : 0, a && h === h) {
                                    for (var _ = c; _--;)
                                        if (t[_] === h) continue e;
                                    s.push(l)
                                } else i(t, h, r) || s.push(l)
                            }
                            return s
                        }

                        function ir(e, t) {
                            var n = !0;
                            return ff(e, function(e, r, o) {
                                return n = !!t(e, r, o)
                            }), n
                        }

                        function ar(e, t, n) {
                            for (var r = -1, o = e.length; ++r < o;) {
                                var i = e[r],
                                    a = t(i);
                                if (null != a && (u === ne ? a === a && !ds(a) : n(a, u))) var u = a,
                                    s = i
                            }
                            return s
                        }

                        function ur(e, t, n, r) {
                            var o = e.length;
                            for (n = vs(n), n < 0 && (n = -n > o ? 0 : o + n), r = r === ne || r > o ? o : vs(r), r < 0 && (r += o), r = n > r ? 0 : ys(r); n < r;) e[n++] = t;
                            return e
                        }

                        function sr(e, t) {
                            var n = [];
                            return ff(e, function(e, r, o) {
                                t(e, r, o) && n.push(e)
                            }), n
                        }

                        function cr(e, t, n, r, o) {
                            var i = -1,
                                a = e.length;
                            for (n || (n = ki), o || (o = []); ++i < a;) {
                                var u = e[i];
                                t > 0 && n(u) ? t > 1 ? cr(u, t - 1, n, r, o) : h(o, u) : r || (o[o.length] = u)
                            }
                            return o
                        }

                        function lr(e, t) {
                            return e && pf(e, t, Fs)
                        }

                        function fr(e, t) {
                            return e && hf(e, t, Fs)
                        }

                        function dr(e, t) {
                            return l(t, function(t) {
                                return $u(e[t])
                            })
                        }

                        function pr(e, t) {
                            t = Eo(t, e);
                            for (var n = 0, r = t.length; null != e && n < r;) e = e[Xi(t[n++])];
                            return n && n == r ? e : ne
                        }

                        function hr(e, t, n) {
                            var r = t(e);
                            return pd(e) ? r : h(r, n(e))
                        }

                        function _r(e) {
                            return null == e ? e === ne ? nt : Xe : kl && kl in rl(e) ? Ei(e) : Vi(e)
                        }

                        function mr(e, t) {
                            return e > t
                        }

                        function gr(e, t) {
                            return null != e && dl.call(e, t)
                        }

                        function vr(e, t) {
                            return null != e && t in rl(e)
                        }

                        function yr(e, t, n) {
                            return e >= Bl(t, n) && e < Vl(t, n)
                        }

                        function br(e, t, n) {
                            for (var r = n ? d : f, o = e[0].length, i = e.length, a = i, u = Jc(i), s = 1 / 0, c = []; a--;) {
                                var l = e[a];
                                a && t && (l = p(l, P(t))), s = Bl(l.length, s), u[a] = !n && (t || o >= 120 && l.length >= 120) ? new hn(a && l) : ne
                            }
                            l = e[0];
                            var h = -1,
                                _ = u[0];
                            e: for (; ++h < o && c.length < s;) {
                                var m = l[h],
                                    g = t ? t(m) : m;
                                if (m = n || 0 !== m ? m : 0, !(_ ? N(_, g) : r(c, g, n))) {
                                    for (a = i; --a;) {
                                        var v = u[a];
                                        if (!(v ? N(v, g) : r(e[a], g, n))) continue e
                                    }
                                    _ && _.push(g), c.push(m)
                                }
                            }
                            return c
                        }

                        function Er(e, t, n, r) {
                            return lr(e, function(e, o, i) {
                                t(r, n(e), o, i)
                            }), r
                        }

                        function wr(e, t, n) {
                            t = Eo(t, e), e = Gi(e, t);
                            var r = null == e ? e : e[Xi(ga(t))];
                            return null == r ? ne : i(r, e, n)
                        }

                        function Tr(e) {
                            return ts(e) && _r(e) == De
                        }

                        function xr(e) {
                            return ts(e) && _r(e) == it
                        }

                        function Ir(e) {
                            return ts(e) && _r(e) == Be
                        }

                        function Sr(e, t, n, r, o) {
                            return e === t || (null == e || null == t || !ts(e) && !ts(t) ? e !== e && t !== t : Or(e, t, n, r, Sr, o))
                        }

                        function Or(e, t, n, r, o, i) {
                            var a = pd(e),
                                u = pd(t),
                                s = a ? Ue : Tf(e),
                                c = u ? Ue : Tf(t);
                            s = s == De ? Ze : s, c = c == De ? Ze : c;
                            var l = s == Ze,
                                f = c == Ze,
                                d = s == c;
                            if (d && _d(e)) {
                                if (!_d(t)) return !1;
                                a = !0, l = !1
                            }
                            if (d && !l) return i || (i = new gn), a || bd(e) ? ci(e, t, n, r, o, i) : li(e, t, s, n, r, o, i);
                            if (!(n & de)) {
                                var p = l && dl.call(e, "__wrapped__"),
                                    h = f && dl.call(t, "__wrapped__");
                                if (p || h) {
                                    var _ = p ? e.value() : e,
                                        m = h ? t.value() : t;
                                    return i || (i = new gn), o(_, m, n, r, i)
                                }
                            }
                            return !!d && (i || (i = new gn), fi(e, t, n, r, o, i))
                        }

                        function Ar(e) {
                            return ts(e) && Tf(e) == Ye
                        }

                        function kr(e, t, n, r) {
                            var o = n.length,
                                i = o,
                                a = !r;
                            if (null == e) return !i;
                            for (e = rl(e); o--;) {
                                var u = n[o];
                                if (a && u[2] ? u[1] !== e[u[0]] : !(u[0] in e)) return !1
                            }
                            for (; ++o < i;) {
                                u = n[o];
                                var s = u[0],
                                    c = e[s],
                                    l = u[1];
                                if (a && u[2]) {
                                    if (c === ne && !(s in e)) return !1
                                } else {
                                    var f = new gn;
                                    if (r) var d = r(c, l, s, e, t, f);
                                    if (!(d === ne ? Sr(l, c, de | pe, r, f) : d)) return !1
                                }
                            }
                            return !0
                        }

                        function Rr(e) {
                            return !(!es(e) || Ni(e)) && ($u(e) ? vl : Gt).test(Zi(e))
                        }

                        function Cr(e) {
                            return ts(e) && _r(e) == Je
                        }

                        function jr(e) {
                            return ts(e) && Tf(e) == Qe
                        }

                        function Pr(e) {
                            return ts(e) && Qu(e.length) && !!bn[_r(e)]
                        }

                        function Mr(e) {
                            return "function" == typeof e ? e : null == e ? Sc : "object" == typeof e ? pd(e) ? Wr(e[0], e[1]) : Ur(e) : Mc(e)
                        }

                        function Nr(e) {
                            if (!Fi(e)) return Wl(e);
                            var t = [];
                            for (var n in rl(e)) dl.call(e, n) && "constructor" != n && t.push(n);
                            return t
                        }

                        function Fr(e) {
                            if (!es(e)) return Wi(e);
                            var t = Fi(e),
                                n = [];
                            for (var r in e)("constructor" != r || !t && dl.call(e, r)) && n.push(r);
                            return n
                        }

                        function Lr(e, t) {
                            return e < t
                        }

                        function Dr(e, t) {
                            var n = -1,
                                r = Bu(e) ? Jc(e.length) : [];
                            return ff(e, function(e, o, i) {
                                r[++n] = t(e, o, i)
                            }), r
                        }

                        function Ur(e) {
                            var t = yi(e);
                            return 1 == t.length && t[0][2] ? Di(t[0][0], t[0][1]) : function(n) {
                                return n === e || kr(n, e, t)
                            }
                        }

                        function Wr(e, t) {
                            return ji(e) && Li(t) ? Di(Xi(e), t) : function(n) {
                                var r = Ps(n, e);
                                return r === ne && r === t ? Ns(n, e) : Sr(t, r, de | pe)
                            }
                        }

                        function Vr(e, t, n, r, o) {
                            e !== t && pf(t, function(i, a) {
                                if (o || (o = new gn), es(i)) Br(e, t, a, n, Vr, r, o);
                                else {
                                    var u = r ? r(zi(e, a), i, a + "", e, t, o) : ne;
                                    u === ne && (u = i), Nn(e, a, u)
                                }
                            }, Ls)
                        }

                        function Br(e, t, n, r, o, i, a) {
                            var u = zi(e, n),
                                s = zi(t, n),
                                c = a.get(s);
                            if (c) return void Nn(e, n, c);
                            var l = i ? i(u, s, n + "", e, t, a) : ne,
                                f = l === ne;
                            if (f) {
                                var d = pd(s),
                                    p = !d && _d(s),
                                    h = !d && !p && bd(s);
                                l = s, d || p || h ? pd(u) ? l = u : Gu(u) ? l = Po(u) : p ? (f = !1, l = To(s, !0)) : h ? (f = !1, l = Ao(s, !0)) : l = [] : cs(s) || dd(s) ? (l = u, dd(u) ? l = Es(u) : es(u) && !$u(u) || (l = Si(s))) : f = !1
                            }
                            f && (a.set(s, l), o(l, s, r, i, a), a.delete(s)), Nn(e, n, l)
                        }

                        function Gr(e, t) {
                            var n = e.length;
                            if (n) return t += t < 0 ? n : 0, Ri(t, n) ? e[t] : ne
                        }

                        function Hr(e, t, n) {
                            t = t.length ? p(t, function(e) {
                                return pd(e) ? function(t) {
                                    return pr(t, 1 === e.length ? e[0] : e)
                                } : e
                            }) : [Sc];
                            var r = -1;
                            return t = p(t, P(gi())), k(Dr(e, function(e, n, o) {
                                return {
                                    criteria: p(t, function(t) {
                                        return t(e)
                                    }),
                                    index: ++r,
                                    value: e
                                }
                            }), function(e, t) {
                                return Ro(e, t, n)
                            })
                        }

                        function zr(e, t) {
                            return Kr(e, t, function(t, n) {
                                return Ns(e, n)
                            })
                        }

                        function Kr(e, t, n) {
                            for (var r = -1, o = t.length, i = {}; ++r < o;) {
                                var a = t[r],
                                    u = pr(e, a);
                                n(u, a) && no(i, Eo(a, e), u)
                            }
                            return i
                        }

                        function Yr(e) {
                            return function(t) {
                                return pr(t, e)
                            }
                        }

                        function qr(e, t, n, r) {
                            var o = r ? T : w,
                                i = -1,
                                a = t.length,
                                u = e;
                            for (e === t && (t = Po(t)), n && (u = p(e, P(n))); ++i < a;)
                                for (var s = 0, c = t[i], l = n ? n(c) : c;
                                    (s = o(u, l, s, r)) > -1;) u !== e && Sl.call(u, s, 1), Sl.call(e, s, 1);
                            return e
                        }

                        function Xr(e, t) {
                            for (var n = e ? t.length : 0, r = n - 1; n--;) {
                                var o = t[n];
                                if (n == r || o !== i) {
                                    var i = o;
                                    Ri(o) ? Sl.call(e, o, 1) : po(e, o)
                                }
                            }
                            return e
                        }

                        function Zr(e, t) {
                            return e + Nl(zl() * (t - e + 1))
                        }

                        function $r(e, t, n, r) {
                            for (var o = -1, i = Vl(Ml((t - e) / (n || 1)), 0), a = Jc(i); i--;) a[r ? i : ++o] = e, e += n;
                            return a
                        }

                        function Jr(e, t) {
                            var n = "";
                            if (!e || t < 1 || t > Ce) return n;
                            do {
                                t % 2 && (n += e), (t = Nl(t / 2)) && (e += e)
                            } while (t);
                            return n
                        }

                        function Qr(e, t) {
                            return Of(Bi(e, t, Sc), e + "")
                        }

                        function eo(e) {
                            return Cn(Xs(e))
                        }

                        function to(e, t) {
                            var n = Xs(e);
                            return qi(n, Qn(t, 0, n.length))
                        }

                        function no(e, t, n, r) {
                            if (!es(e)) return e;
                            t = Eo(t, e);
                            for (var o = -1, i = t.length, a = i - 1, u = e; null != u && ++o < i;) {
                                var s = Xi(t[o]),
                                    c = n;
                                if ("__proto__" === s || "constructor" === s || "prototype" === s) return e;
                                if (o != a) {
                                    var l = u[s];
                                    c = r ? r(l, s, u) : ne, c === ne && (c = es(l) ? l : Ri(t[o + 1]) ? [] : {})
                                }
                                Bn(u, s, c), u = u[s]
                            }
                            return e
                        }

                        function ro(e) {
                            return qi(Xs(e))
                        }

                        function oo(e, t, n) {
                            var r = -1,
                                o = e.length;
                            t < 0 && (t = -t > o ? 0 : o + t), n = n > o ? o : n, n < 0 && (n += o), o = t > n ? 0 : n - t >>> 0, t >>>= 0;
                            for (var i = Jc(o); ++r < o;) i[r] = e[r + t];
                            return i
                        }

                        function io(e, t) {
                            var n;
                            return ff(e, function(e, r, o) {
                                return !(n = t(e, r, o))
                            }), !!n
                        }

                        function ao(e, t, n) {
                            var r = 0,
                                o = null == e ? r : e.length;
                            if ("number" == typeof t && t === t && o <= Fe) {
                                for (; r < o;) {
                                    var i = r + o >>> 1,
                                        a = e[i];
                                    null !== a && !ds(a) && (n ? a <= t : a < t) ? r = i + 1 : o = i
                                }
                                return o
                            }
                            return uo(e, t, Sc, n)
                        }

                        function uo(e, t, n, r) {
                            var o = 0,
                                i = null == e ? 0 : e.length;
                            if (0 === i) return 0;
                            t = n(t);
                            for (var a = t !== t, u = null === t, s = ds(t), c = t === ne; o < i;) {
                                var l = Nl((o + i) / 2),
                                    f = n(e[l]),
                                    d = f !== ne,
                                    p = null === f,
                                    h = f === f,
                                    _ = ds(f);
                                if (a) var m = r || h;
                                else m = c ? h && (r || d) : u ? h && d && (r || !p) : s ? h && d && !p && (r || !_) : !p && !_ && (r ? f <= t : f < t);
                                m ? o = l + 1 : i = l
                            }
                            return Bl(i, Ne)
                        }

                        function so(e, t) {
                            for (var n = -1, r = e.length, o = 0, i = []; ++n < r;) {
                                var a = e[n],
                                    u = t ? t(a) : a;
                                if (!n || !Vu(u, s)) {
                                    var s = u;
                                    i[o++] = 0 === a ? 0 : a
                                }
                            }
                            return i
                        }

                        function co(e) {
                            return "number" == typeof e ? e : ds(e) ? Pe : +e
                        }

                        function lo(e) {
                            if ("string" == typeof e) return e;
                            if (pd(e)) return p(e, lo) + "";
                            if (ds(e)) return cf ? cf.call(e) : "";
                            var t = e + "";
                            return "0" == t && 1 / e == -Re ? "-0" : t
                        }

                        function fo(e, t, n) {
                            var r = -1,
                                o = f,
                                i = e.length,
                                a = !0,
                                u = [],
                                s = u;
                            if (n) a = !1, o = d;
                            else if (i >= re) {
                                var c = t ? null : yf(e);
                                if (c) return Y(c);
                                a = !1, o = N, s = new hn
                            } else s = t ? [] : u;
                            e: for (; ++r < i;) {
                                var l = e[r],
                                    p = t ? t(l) : l;
                                if (l = n || 0 !== l ? l : 0, a && p === p) {
                                    for (var h = s.length; h--;)
                                        if (s[h] === p) continue e;
                                    t && s.push(p), u.push(l)
                                } else o(s, p, n) || (s !== u && s.push(p), u.push(l))
                            }
                            return u
                        }

                        function po(e, t) {
                            return t = Eo(t, e), null == (e = Gi(e, t)) || delete e[Xi(ga(t))]
                        }

                        function ho(e, t, n, r) {
                            return no(e, t, n(pr(e, t)), r)
                        }

                        function _o(e, t, n, r) {
                            for (var o = e.length, i = r ? o : -1;
                                (r ? i-- : ++i < o) && t(e[i], i, e););
                            return n ? oo(e, r ? 0 : i, r ? i + 1 : o) : oo(e, r ? i + 1 : 0, r ? o : i)
                        }

                        function mo(e, t) {
                            var n = e;
                            return n instanceof v && (n = n.value()), _(t, function(e, t) {
                                return t.func.apply(t.thisArg, h([e], t.args))
                            }, n)
                        }

                        function go(e, t, n) {
                            var r = e.length;
                            if (r < 2) return r ? fo(e[0]) : [];
                            for (var o = -1, i = Jc(r); ++o < r;)
                                for (var a = e[o], u = -1; ++u < r;) u != o && (i[o] = or(i[o] || a, e[u], t, n));
                            return fo(cr(i, 1), t, n)
                        }

                        function vo(e, t, n) {
                            for (var r = -1, o = e.length, i = t.length, a = {}; ++r < o;) {
                                var u = r < i ? t[r] : ne;
                                n(a, e[r], u)
                            }
                            return a
                        }

                        function yo(e) {
                            return Gu(e) ? e : []
                        }

                        function bo(e) {
                            return "function" == typeof e ? e : Sc
                        }

                        function Eo(e, t) {
                            return pd(e) ? e : ji(e, t) ? [e] : Af(Ts(e))
                        }

                        function wo(e, t, n) {
                            var r = e.length;
                            return n = n === ne ? r : n, !t && n >= r ? e : oo(e, t, n)
                        }

                        function To(e, t) {
                            if (t) return e.slice();
                            var n = e.length,
                                r = wl ? wl(n) : new e.constructor(n);
                            return e.copy(r), r
                        }

                        function xo(e) {
                            var t = new e.constructor(e.byteLength);
                            return new El(t).set(new El(e)), t
                        }

                        function Io(e, t) {
                            var n = t ? xo(e.buffer) : e.buffer;
                            return new e.constructor(n, e.byteOffset, e.byteLength)
                        }

                        function So(e) {
                            var t = new e.constructor(e.source, Wt.exec(e));
                            return t.lastIndex = e.lastIndex, t
                        }

                        function Oo(e) {
                            return sf ? rl(sf.call(e)) : {}
                        }

                        function Ao(e, t) {
                            var n = t ? xo(e.buffer) : e.buffer;
                            return new e.constructor(n, e.byteOffset, e.length)
                        }

                        function ko(e, t) {
                            if (e !== t) {
                                var n = e !== ne,
                                    r = null === e,
                                    o = e === e,
                                    i = ds(e),
                                    a = t !== ne,
                                    u = null === t,
                                    s = t === t,
                                    c = ds(t);
                                if (!u && !c && !i && e > t || i && a && s && !u && !c || r && a && s || !n && s || !o) return 1;
                                if (!r && !i && !c && e < t || c && n && o && !r && !i || u && n && o || !a && o || !s) return -1
                            }
                            return 0
                        }

                        function Ro(e, t, n) {
                            for (var r = -1, o = e.criteria, i = t.criteria, a = o.length, u = n.length; ++r < a;) {
                                var s = ko(o[r], i[r]);
                                if (s) {
                                    if (r >= u) return s;
                                    return s * ("desc" == n[r] ? -1 : 1)
                                }
                            }
                            return e.index - t.index
                        }

                        function Co(e, t, n, r) {
                            for (var o = -1, i = e.length, a = n.length, u = -1, s = t.length, c = Vl(i - a, 0), l = Jc(s + c), f = !r; ++u < s;) l[u] = t[u];
                            for (; ++o < a;)(f || o < i) && (l[n[o]] = e[o]);
                            for (; c--;) l[u++] = e[o++];
                            return l
                        }

                        function jo(e, t, n, r) {
                            for (var o = -1, i = e.length, a = -1, u = n.length, s = -1, c = t.length, l = Vl(i - u, 0), f = Jc(l + c), d = !r; ++o < l;) f[o] = e[o];
                            for (var p = o; ++s < c;) f[p + s] = t[s];
                            for (; ++a < u;)(d || o < i) && (f[p + n[a]] = e[o++]);
                            return f
                        }

                        function Po(e, t) {
                            var n = -1,
                                r = e.length;
                            for (t || (t = Jc(r)); ++n < r;) t[n] = e[n];
                            return t
                        }

                        function Mo(e, t, n, r) {
                            var o = !n;
                            n || (n = {});
                            for (var i = -1, a = t.length; ++i < a;) {
                                var u = t[i],
                                    s = r ? r(n[u], e[u], u, n, e) : ne;
                                s === ne && (s = e[u]), o ? $n(n, u, s) : Bn(n, u, s)
                            }
                            return n
                        }

                        function No(e, t) {
                            return Mo(e, Ef(e), t)
                        }

                        function Fo(e, t) {
                            return Mo(e, wf(e), t)
                        }

                        function Lo(e, t) {
                            return function(n, r) {
                                var o = pd(n) ? a : qn,
                                    i = t ? t() : {};
                                return o(n, e, gi(r, 2), i)
                            }
                        }

                        function Do(e) {
                            return Qr(function(t, n) {
                                var r = -1,
                                    o = n.length,
                                    i = o > 1 ? n[o - 1] : ne,
                                    a = o > 2 ? n[2] : ne;
                                for (i = e.length > 3 && "function" == typeof i ? (o--, i) : ne, a && Ci(n[0], n[1], a) && (i = o < 3 ? ne : i, o = 1), t = rl(t); ++r < o;) {
                                    var u = n[r];
                                    u && e(t, u, r, i)
                                }
                                return t
                            })
                        }

                        function Uo(e, t) {
                            return function(n, r) {
                                if (null == n) return n;
                                if (!Bu(n)) return e(n, r);
                                for (var o = n.length, i = t ? o : -1, a = rl(n);
                                    (t ? i-- : ++i < o) && !1 !== r(a[i], i, a););
                                return n
                            }
                        }

                        function Wo(e) {
                            return function(t, n, r) {
                                for (var o = -1, i = rl(t), a = r(t), u = a.length; u--;) {
                                    var s = a[e ? u : ++o];
                                    if (!1 === n(i[s], s, i)) break
                                }
                                return t
                            }
                        }

                        function Vo(e, t, n) {
                            function r() {
                                return (this && this !== Rn && this instanceof r ? i : e).apply(o ? n : this, arguments)
                            }
                            var o = t & he,
                                i = Ho(e);
                            return r
                        }

                        function Bo(e) {
                            return function(t) {
                                t = Ts(t);
                                var n = V(t) ? J(t) : ne,
                                    r = n ? n[0] : t.charAt(0),
                                    o = n ? wo(n, 1).join("") : t.slice(1);
                                return r[e]() + o
                            }
                        }

                        function Go(e) {
                            return function(t) {
                                return _(Ec(tc(t).replace(dn, "")), e, "")
                            }
                        }

                        function Ho(e) {
                            return function() {
                                var t = arguments;
                                switch (t.length) {
                                    case 0:
                                        return new e;
                                    case 1:
                                        return new e(t[0]);
                                    case 2:
                                        return new e(t[0], t[1]);
                                    case 3:
                                        return new e(t[0], t[1], t[2]);
                                    case 4:
                                        return new e(t[0], t[1], t[2], t[3]);
                                    case 5:
                                        return new e(t[0], t[1], t[2], t[3], t[4]);
                                    case 6:
                                        return new e(t[0], t[1], t[2], t[3], t[4], t[5]);
                                    case 7:
                                        return new e(t[0], t[1], t[2], t[3], t[4], t[5], t[6])
                                }
                                var n = lf(e.prototype),
                                    r = e.apply(n, t);
                                return es(r) ? r : n
                            }
                        }

                        function zo(e, t, n) {
                            function r() {
                                for (var a = arguments.length, u = Jc(a), s = a, c = mi(r); s--;) u[s] = arguments[s];
                                var l = a < 3 && u[0] !== c && u[a - 1] !== c ? [] : K(u, c);
                                return (a -= l.length) < n ? ni(e, t, qo, r.placeholder, ne, u, l, ne, ne, n - a) : i(this && this !== Rn && this instanceof r ? o : e, this, u)
                            }
                            var o = Ho(e);
                            return r
                        }

                        function Ko(e) {
                            return function(t, n, r) {
                                var o = rl(t);
                                if (!Bu(t)) {
                                    var i = gi(n, 3);
                                    t = Fs(t), n = function(e) {
                                        return i(o[e], e, o)
                                    }
                                }
                                var a = e(t, n, r);
                                return a > -1 ? o[i ? t[a] : a] : ne
                            }
                        }

                        function Yo(e) {
                            return di(function(t) {
                                var n = t.length,
                                    r = n,
                                    i = o.prototype.thru;
                                for (e && t.reverse(); r--;) {
                                    var a = t[r];
                                    if ("function" != typeof a) throw new al(ie);
                                    if (i && !u && "wrapper" == _i(a)) var u = new o([], !0)
                                }
                                for (r = u ? r : n; ++r < n;) {
                                    a = t[r];
                                    var s = _i(a),
                                        c = "wrapper" == s ? bf(a) : ne;
                                    u = c && Mi(c[0]) && c[1] == (Ee | ge | ye | we) && !c[4].length && 1 == c[9] ? u[_i(c[0])].apply(u, c[3]) : 1 == a.length && Mi(a) ? u[s]() : u.thru(a)
                                }
                                return function() {
                                    var e = arguments,
                                        r = e[0];
                                    if (u && 1 == e.length && pd(r)) return u.plant(r).value();
                                    for (var o = 0, i = n ? t[o].apply(this, e) : r; ++o < n;) i = t[o].call(this, i);
                                    return i
                                }
                            })
                        }

                        function qo(e, t, n, r, o, i, a, u, s, c) {
                            function l() {
                                for (var g = arguments.length, v = Jc(g), y = g; y--;) v[y] = arguments[y];
                                if (h) var b = mi(l),
                                    E = D(v, b);
                                if (r && (v = Co(v, r, o, h)), i && (v = jo(v, i, a, h)), g -= E, h && g < c) {
                                    var w = K(v, b);
                                    return ni(e, t, qo, l.placeholder, n, v, w, u, s, c - g)
                                }
                                var T = d ? n : this,
                                    x = p ? T[e] : e;
                                return g = v.length, u ? v = Hi(v, u) : _ && g > 1 && v.reverse(), f && s < g && (v.length = s), this && this !== Rn && this instanceof l && (x = m || Ho(x)), x.apply(T, v)
                            }
                            var f = t & Ee,
                                d = t & he,
                                p = t & _e,
                                h = t & (ge | ve),
                                _ = t & Te,
                                m = p ? ne : Ho(e);
                            return l
                        }

                        function Xo(e, t) {
                            return function(n, r) {
                                return Er(n, e, t(r), {})
                            }
                        }

                        function Zo(e, t) {
                            return function(n, r) {
                                var o;
                                if (n === ne && r === ne) return t;
                                if (n !== ne && (o = n), r !== ne) {
                                    if (o === ne) return r;
                                    "string" == typeof n || "string" == typeof r ? (n = lo(n), r = lo(r)) : (n = co(n), r = co(r)), o = e(n, r)
                                }
                                return o
                            }
                        }

                        function $o(e) {
                            return di(function(t) {
                                return t = p(t, P(gi())), Qr(function(n) {
                                    var r = this;
                                    return e(t, function(e) {
                                        return i(e, r, n)
                                    })
                                })
                            })
                        }

                        function Jo(e, t) {
                            t = t === ne ? " " : lo(t);
                            var n = t.length;
                            if (n < 2) return n ? Jr(t, e) : t;
                            var r = Jr(t, Ml(e / $(t)));
                            return V(t) ? wo(J(r), 0, e).join("") : r.slice(0, e)
                        }

                        function Qo(e, t, n, r) {
                            function o() {
                                for (var t = -1, s = arguments.length, c = -1, l = r.length, f = Jc(l + s), d = this && this !== Rn && this instanceof o ? u : e; ++c < l;) f[c] = r[c];
                                for (; s--;) f[c++] = arguments[++t];
                                return i(d, a ? n : this, f)
                            }
                            var a = t & he,
                                u = Ho(e);
                            return o
                        }

                        function ei(e) {
                            return function(t, n, r) {
                                return r && "number" != typeof r && Ci(t, n, r) && (n = r = ne), t = gs(t), n === ne ? (n = t, t = 0) : n = gs(n), r = r === ne ? t < n ? 1 : -1 : gs(r), $r(t, n, r, e)
                            }
                        }

                        function ti(e) {
                            return function(t, n) {
                                return "string" == typeof t && "string" == typeof n || (t = bs(t), n = bs(n)), e(t, n)
                            }
                        }

                        function ni(e, t, n, r, o, i, a, u, s, c) {
                            var l = t & ge,
                                f = l ? a : ne,
                                d = l ? ne : a,
                                p = l ? i : ne,
                                h = l ? ne : i;
                            t |= l ? ye : be, (t &= ~(l ? be : ye)) & me || (t &= ~(he | _e));
                            var _ = [e, t, o, p, f, h, d, u, s, c],
                                m = n.apply(ne, _);
                            return Mi(e) && If(m, _), m.placeholder = r, Ki(m, e, t)
                        }

                        function ri(e) {
                            var t = nl[e];
                            return function(e, n) {
                                if (e = bs(e), (n = null == n ? 0 : Bl(vs(n), 292)) && Dl(e)) {
                                    var r = (Ts(e) + "e").split("e");
                                    return r = (Ts(t(r[0] + "e" + (+r[1] + n))) + "e").split("e"), +(r[0] + "e" + (+r[1] - n))
                                }
                                return t(e)
                            }
                        }

                        function oi(e) {
                            return function(t) {
                                var n = Tf(t);
                                return n == Ye ? H(t) : n == Qe ? q(t) : j(t, e(t))
                            }
                        }

                        function ii(e, t, n, r, o, i, a, u) {
                            var s = t & _e;
                            if (!s && "function" != typeof e) throw new al(ie);
                            var c = r ? r.length : 0;
                            if (c || (t &= ~(ye | be), r = o = ne), a = a === ne ? a : Vl(vs(a), 0), u = u === ne ? u : vs(u), c -= o ? o.length : 0, t & be) {
                                var l = r,
                                    f = o;
                                r = o = ne
                            }
                            var d = s ? ne : bf(e),
                                p = [e, t, n, r, o, l, f, i, a, u];
                            if (d && Ui(p, d), e = p[0], t = p[1], n = p[2], r = p[3], o = p[4], u = p[9] = p[9] === ne ? s ? 0 : e.length : Vl(p[9] - c, 0), !u && t & (ge | ve) && (t &= ~(ge | ve)), t && t != he) h = t == ge || t == ve ? zo(e, t, u) : t != ye && t != (he | ye) || o.length ? qo.apply(ne, p) : Qo(e, t, n, r);
                            else var h = Vo(e, t, n);
                            return Ki((d ? _f : If)(h, p), e, t)
                        }

                        function ai(e, t, n, r) {
                            return e === ne || Vu(e, cl[n]) && !dl.call(r, n) ? t : e
                        }

                        function ui(e, t, n, r, o, i) {
                            return es(e) && es(t) && (i.set(t, e), Vr(e, t, ne, ui, i), i.delete(t)), e
                        }

                        function si(e) {
                            return cs(e) ? ne : e
                        }

                        function ci(e, t, n, r, o, i) {
                            var a = n & de,
                                u = e.length,
                                s = t.length;
                            if (u != s && !(a && s > u)) return !1;
                            var c = i.get(e),
                                l = i.get(t);
                            if (c && l) return c == t && l == e;
                            var f = -1,
                                d = !0,
                                p = n & pe ? new hn : ne;
                            for (i.set(e, t), i.set(t, e); ++f < u;) {
                                var h = e[f],
                                    _ = t[f];
                                if (r) var m = a ? r(_, h, f, t, e, i) : r(h, _, f, e, t, i);
                                if (m !== ne) {
                                    if (m) continue;
                                    d = !1;
                                    break
                                }
                                if (p) {
                                    if (!g(t, function(e, t) {
                                            if (!N(p, t) && (h === e || o(h, e, n, r, i))) return p.push(t)
                                        })) {
                                        d = !1;
                                        break
                                    }
                                } else if (h !== _ && !o(h, _, n, r, i)) {
                                    d = !1;
                                    break
                                }
                            }
                            return i.delete(e), i.delete(t), d
                        }

                        function li(e, t, n, r, o, i, a) {
                            switch (n) {
                                case at:
                                    if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
                                    e = e.buffer, t = t.buffer;
                                case it:
                                    return !(e.byteLength != t.byteLength || !i(new El(e), new El(t)));
                                case Ve:
                                case Be:
                                case qe:
                                    return Vu(+e, +t);
                                case He:
                                    return e.name == t.name && e.message == t.message;
                                case Je:
                                case et:
                                    return e == t + "";
                                case Ye:
                                    var u = H;
                                case Qe:
                                    var s = r & de;
                                    if (u || (u = Y), e.size != t.size && !s) return !1;
                                    var c = a.get(e);
                                    if (c) return c == t;
                                    r |= pe, a.set(e, t);
                                    var l = ci(u(e), u(t), r, o, i, a);
                                    return a.delete(e), l;
                                case tt:
                                    if (sf) return sf.call(e) == sf.call(t)
                            }
                            return !1
                        }

                        function fi(e, t, n, r, o, i) {
                            var a = n & de,
                                u = pi(e),
                                s = u.length;
                            if (s != pi(t).length && !a) return !1;
                            for (var c = s; c--;) {
                                var l = u[c];
                                if (!(a ? l in t : dl.call(t, l))) return !1
                            }
                            var f = i.get(e),
                                d = i.get(t);
                            if (f && d) return f == t && d == e;
                            var p = !0;
                            i.set(e, t), i.set(t, e);
                            for (var h = a; ++c < s;) {
                                l = u[c];
                                var _ = e[l],
                                    m = t[l];
                                if (r) var g = a ? r(m, _, l, t, e, i) : r(_, m, l, e, t, i);
                                if (!(g === ne ? _ === m || o(_, m, n, r, i) : g)) {
                                    p = !1;
                                    break
                                }
                                h || (h = "constructor" == l)
                            }
                            if (p && !h) {
                                var v = e.constructor,
                                    y = t.constructor;
                                v != y && "constructor" in e && "constructor" in t && !("function" == typeof v && v instanceof v && "function" == typeof y && y instanceof y) && (p = !1)
                            }
                            return i.delete(e), i.delete(t), p
                        }

                        function di(e) {
                            return Of(Bi(e, ne, ca), e + "")
                        }

                        function pi(e) {
                            return hr(e, Fs, Ef)
                        }

                        function hi(e) {
                            return hr(e, Ls, wf)
                        }

                        function _i(e) {
                            for (var t = e.name + "", n = ef[t], r = dl.call(ef, t) ? n.length : 0; r--;) {
                                var o = n[r],
                                    i = o.func;
                                if (null == i || i == e) return o.name
                            }
                            return t
                        }

                        function mi(e) {
                            return (dl.call(n, "placeholder") ? n : e).placeholder
                        }

                        function gi() {
                            var e = n.iteratee || Oc;
                            return e = e === Oc ? Mr : e, arguments.length ? e(arguments[0], arguments[1]) : e
                        }

                        function vi(e, t) {
                            var n = e.__data__;
                            return Pi(t) ? n["string" == typeof t ? "string" : "hash"] : n.map
                        }

                        function yi(e) {
                            for (var t = Fs(e), n = t.length; n--;) {
                                var r = t[n],
                                    o = e[r];
                                t[n] = [r, o, Li(o)]
                            }
                            return t
                        }

                        function bi(e, t) {
                            var n = W(e, t);
                            return Rr(n) ? n : ne
                        }

                        function Ei(e) {
                            var t = dl.call(e, kl),
                                n = e[kl];
                            try {
                                e[kl] = ne;
                                var r = !0
                            } catch (e) {}
                            var o = _l.call(e);
                            return r && (t ? e[kl] = n : delete e[kl]), o
                        }

                        function wi(e, t, n) {
                            for (var r = -1, o = n.length; ++r < o;) {
                                var i = n[r],
                                    a = i.size;
                                switch (i.type) {
                                    case "drop":
                                        e += a;
                                        break;
                                    case "dropRight":
                                        t -= a;
                                        break;
                                    case "take":
                                        t = Bl(t, e + a);
                                        break;
                                    case "takeRight":
                                        e = Vl(e, t - a)
                                }
                            }
                            return {
                                start: e,
                                end: t
                            }
                        }

                        function Ti(e) {
                            var t = e.match(Nt);
                            return t ? t[1].split(Ft) : []
                        }

                        function xi(e, t, n) {
                            t = Eo(t, e);
                            for (var r = -1, o = t.length, i = !1; ++r < o;) {
                                var a = Xi(t[r]);
                                if (!(i = null != e && n(e, a))) break;
                                e = e[a]
                            }
                            return i || ++r != o ? i : !!(o = null == e ? 0 : e.length) && Qu(o) && Ri(a, o) && (pd(e) || dd(e))
                        }

                        function Ii(e) {
                            var t = e.length,
                                n = new e.constructor(t);
                            return t && "string" == typeof e[0] && dl.call(e, "index") && (n.index = e.index, n.input = e.input), n
                        }

                        function Si(e) {
                            return "function" != typeof e.constructor || Fi(e) ? {} : lf(Tl(e))
                        }

                        function Oi(e, t, n) {
                            var r = e.constructor;
                            switch (t) {
                                case it:
                                    return xo(e);
                                case Ve:
                                case Be:
                                    return new r(+e);
                                case at:
                                    return Io(e, n);
                                case ut:
                                case st:
                                case ct:
                                case lt:
                                case ft:
                                case dt:
                                case pt:
                                case ht:
                                case _t:
                                    return Ao(e, n);
                                case Ye:
                                    return new r;
                                case qe:
                                case et:
                                    return new r(e);
                                case Je:
                                    return So(e);
                                case Qe:
                                    return new r;
                                case tt:
                                    return Oo(e)
                            }
                        }

                        function Ai(e, t) {
                            var n = t.length;
                            if (!n) return e;
                            var r = n - 1;
                            return t[r] = (n > 1 ? "& " : "") + t[r], t = t.join(n > 2 ? ", " : " "), e.replace(Mt, "{\n/* [wrapped with " + t + "] */\n")
                        }

                        function ki(e) {
                            return pd(e) || dd(e) || !!(Ol && e && e[Ol])
                        }

                        function Ri(e, t) {
                            var n = typeof e;
                            return !!(t = null == t ? Ce : t) && ("number" == n || "symbol" != n && zt.test(e)) && e > -1 && e % 1 == 0 && e < t
                        }

                        function Ci(e, t, n) {
                            if (!es(n)) return !1;
                            var r = typeof t;
                            return !!("number" == r ? Bu(n) && Ri(t, n.length) : "string" == r && t in n) && Vu(n[t], e)
                        }

                        function ji(e, t) {
                            if (pd(e)) return !1;
                            var n = typeof e;
                            return !("number" != n && "symbol" != n && "boolean" != n && null != e && !ds(e)) || (Ot.test(e) || !St.test(e) || null != t && e in rl(t))
                        }

                        function Pi(e) {
                            var t = typeof e;
                            return "string" == t || "number" == t || "symbol" == t || "boolean" == t ? "__proto__" !== e : null === e
                        }

                        function Mi(e) {
                            var t = _i(e),
                                r = n[t];
                            if ("function" != typeof r || !(t in v.prototype)) return !1;
                            if (e === r) return !0;
                            var o = bf(r);
                            return !!o && e === o[0]
                        }

                        function Ni(e) {
                            return !!hl && hl in e
                        }

                        function Fi(e) {
                            var t = e && e.constructor;
                            return e === ("function" == typeof t && t.prototype || cl)
                        }

                        function Li(e) {
                            return e === e && !es(e)
                        }

                        function Di(e, t) {
                            return function(n) {
                                return null != n && (n[e] === t && (t !== ne || e in rl(n)))
                            }
                        }

                        function Ui(e, t) {
                            var n = e[1],
                                r = t[1],
                                o = n | r,
                                i = o < (he | _e | Ee),
                                a = r == Ee && n == ge || r == Ee && n == we && e[7].length <= t[8] || r == (Ee | we) && t[7].length <= t[8] && n == ge;
                            if (!i && !a) return e;
                            r & he && (e[2] = t[2], o |= n & he ? 0 : me);
                            var u = t[3];
                            if (u) {
                                var s = e[3];
                                e[3] = s ? Co(s, u, t[4]) : u, e[4] = s ? K(e[3], se) : t[4]
                            }
                            return u = t[5], u && (s = e[5], e[5] = s ? jo(s, u, t[6]) : u, e[6] = s ? K(e[5], se) : t[6]), u = t[7], u && (e[7] = u), r & Ee && (e[8] = null == e[8] ? t[8] : Bl(e[8], t[8])), null == e[9] && (e[9] = t[9]), e[0] = t[0], e[1] = o, e
                        }

                        function Wi(e) {
                            var t = [];
                            if (null != e)
                                for (var n in rl(e)) t.push(n);
                            return t
                        }

                        function Vi(e) {
                            return _l.call(e)
                        }

                        function Bi(e, t, n) {
                            return t = Vl(t === ne ? e.length - 1 : t, 0),
                                function() {
                                    for (var r = arguments, o = -1, a = Vl(r.length - t, 0), u = Jc(a); ++o < a;) u[o] = r[t + o];
                                    o = -1;
                                    for (var s = Jc(t + 1); ++o < t;) s[o] = r[o];
                                    return s[t] = n(u), i(e, this, s)
                                }
                        }

                        function Gi(e, t) {
                            return t.length < 2 ? e : pr(e, oo(t, 0, -1))
                        }

                        function Hi(e, t) {
                            for (var n = e.length, r = Bl(t.length, n), o = Po(e); r--;) {
                                var i = t[r];
                                e[r] = Ri(i, n) ? o[i] : ne
                            }
                            return e
                        }

                        function zi(e, t) {
                            if (("constructor" !== t || "function" != typeof e[t]) && "__proto__" != t) return e[t]
                        }

                        function Ki(e, t, n) {
                            var r = t + "";
                            return Of(e, Ai(r, $i(Ti(r), n)))
                        }

                        function Yi(e) {
                            var t = 0,
                                n = 0;
                            return function() {
                                var r = Gl(),
                                    o = Oe - (r - n);
                                if (n = r, o > 0) {
                                    if (++t >= Se) return arguments[0]
                                } else t = 0;
                                return e.apply(ne, arguments)
                            }
                        }

                        function qi(e, t) {
                            var n = -1,
                                r = e.length,
                                o = r - 1;
                            for (t = t === ne ? r : t; ++n < t;) {
                                var i = Zr(n, o),
                                    a = e[i];
                                e[i] = e[n], e[n] = a
                            }
                            return e.length = t, e
                        }

                        function Xi(e) {
                            if ("string" == typeof e || ds(e)) return e;
                            var t = e + "";
                            return "0" == t && 1 / e == -Re ? "-0" : t
                        }

                        function Zi(e) {
                            if (null != e) {
                                try {
                                    return fl.call(e)
                                } catch (e) {}
                                try {
                                    return e + ""
                                } catch (e) {}
                            }
                            return ""
                        }

                        function $i(e, t) {
                            return u(Le, function(n) {
                                var r = "_." + n[0];
                                t & n[1] && !f(e, r) && e.push(r)
                            }), e.sort()
                        }

                        function Ji(e) {
                            if (e instanceof v) return e.clone();
                            var t = new o(e.__wrapped__, e.__chain__);
                            return t.__actions__ = Po(e.__actions__), t.__index__ = e.__index__, t.__values__ = e.__values__, t
                        }

                        function Qi(e, t, n) {
                            t = (n ? Ci(e, t, n) : t === ne) ? 1 : Vl(vs(t), 0);
                            var r = null == e ? 0 : e.length;
                            if (!r || t < 1) return [];
                            for (var o = 0, i = 0, a = Jc(Ml(r / t)); o < r;) a[i++] = oo(e, o, o += t);
                            return a
                        }

                        function ea(e) {
                            for (var t = -1, n = null == e ? 0 : e.length, r = 0, o = []; ++t < n;) {
                                var i = e[t];
                                i && (o[r++] = i)
                            }
                            return o
                        }

                        function ta() {
                            var e = arguments.length;
                            if (!e) return [];
                            for (var t = Jc(e - 1), n = arguments[0], r = e; r--;) t[r - 1] = arguments[r];
                            return h(pd(n) ? Po(n) : [n], cr(t, 1))
                        }

                        function na(e, t, n) {
                            var r = null == e ? 0 : e.length;
                            return r ? (t = n || t === ne ? 1 : vs(t), oo(e, t < 0 ? 0 : t, r)) : []
                        }

                        function ra(e, t, n) {
                            var r = null == e ? 0 : e.length;
                            return r ? (t = n || t === ne ? 1 : vs(t), t = r - t, oo(e, 0, t < 0 ? 0 : t)) : []
                        }

                        function oa(e, t) {
                            return e && e.length ? _o(e, gi(t, 3), !0, !0) : []
                        }

                        function ia(e, t) {
                            return e && e.length ? _o(e, gi(t, 3), !0) : []
                        }

                        function aa(e, t, n, r) {
                            var o = null == e ? 0 : e.length;
                            return o ? (n && "number" != typeof n && Ci(e, t, n) && (n = 0, r = o), ur(e, t, n, r)) : []
                        }

                        function ua(e, t, n) {
                            var r = null == e ? 0 : e.length;
                            if (!r) return -1;
                            var o = null == n ? 0 : vs(n);
                            return o < 0 && (o = Vl(r + o, 0)), E(e, gi(t, 3), o)
                        }

                        function sa(e, t, n) {
                            var r = null == e ? 0 : e.length;
                            if (!r) return -1;
                            var o = r - 1;
                            return n !== ne && (o = vs(n), o = n < 0 ? Vl(r + o, 0) : Bl(o, r - 1)), E(e, gi(t, 3), o, !0)
                        }

                        function ca(e) {
                            return (null == e ? 0 : e.length) ? cr(e, 1) : []
                        }

                        function la(e) {
                            return (null == e ? 0 : e.length) ? cr(e, Re) : []
                        }

                        function fa(e, t) {
                            return (null == e ? 0 : e.length) ? (t = t === ne ? 1 : vs(t), cr(e, t)) : []
                        }

                        function da(e) {
                            for (var t = -1, n = null == e ? 0 : e.length, r = {}; ++t < n;) {
                                var o = e[t];
                                r[o[0]] = o[1]
                            }
                            return r
                        }

                        function pa(e) {
                            return e && e.length ? e[0] : ne
                        }

                        function ha(e, t, n) {
                            var r = null == e ? 0 : e.length;
                            if (!r) return -1;
                            var o = null == n ? 0 : vs(n);
                            return o < 0 && (o = Vl(r + o, 0)), w(e, t, o)
                        }

                        function _a(e) {
                            return (null == e ? 0 : e.length) ? oo(e, 0, -1) : []
                        }

                        function ma(e, t) {
                            return null == e ? "" : Ul.call(e, t)
                        }

                        function ga(e) {
                            var t = null == e ? 0 : e.length;
                            return t ? e[t - 1] : ne
                        }

                        function va(e, t, n) {
                            var r = null == e ? 0 : e.length;
                            if (!r) return -1;
                            var o = r;
                            return n !== ne && (o = vs(n), o = o < 0 ? Vl(r + o, 0) : Bl(o, r - 1)), t === t ? Z(e, t, o) : E(e, x, o, !0)
                        }

                        function ya(e, t) {
                            return e && e.length ? Gr(e, vs(t)) : ne
                        }

                        function ba(e, t) {
                            return e && e.length && t && t.length ? qr(e, t) : e
                        }

                        function Ea(e, t, n) {
                            return e && e.length && t && t.length ? qr(e, t, gi(n, 2)) : e
                        }

                        function wa(e, t, n) {
                            return e && e.length && t && t.length ? qr(e, t, ne, n) : e
                        }

                        function Ta(e, t) {
                            var n = [];
                            if (!e || !e.length) return n;
                            var r = -1,
                                o = [],
                                i = e.length;
                            for (t = gi(t, 3); ++r < i;) {
                                var a = e[r];
                                t(a, r, e) && (n.push(a), o.push(r))
                            }
                            return Xr(e, o), n
                        }

                        function xa(e) {
                            return null == e ? e : Kl.call(e)
                        }

                        function Ia(e, t, n) {
                            var r = null == e ? 0 : e.length;
                            return r ? (n && "number" != typeof n && Ci(e, t, n) ? (t = 0, n = r) : (t = null == t ? 0 : vs(t), n = n === ne ? r : vs(n)), oo(e, t, n)) : []
                        }

                        function Sa(e, t) {
                            return ao(e, t)
                        }

                        function Oa(e, t, n) {
                            return uo(e, t, gi(n, 2))
                        }

                        function Aa(e, t) {
                            var n = null == e ? 0 : e.length;
                            if (n) {
                                var r = ao(e, t);
                                if (r < n && Vu(e[r], t)) return r
                            }
                            return -1
                        }

                        function ka(e, t) {
                            return ao(e, t, !0)
                        }

                        function Ra(e, t, n) {
                            return uo(e, t, gi(n, 2), !0)
                        }

                        function Ca(e, t) {
                            if (null == e ? 0 : e.length) {
                                var n = ao(e, t, !0) - 1;
                                if (Vu(e[n], t)) return n
                            }
                            return -1
                        }

                        function ja(e) {
                            return e && e.length ? so(e) : []
                        }

                        function Pa(e, t) {
                            return e && e.length ? so(e, gi(t, 2)) : []
                        }

                        function Ma(e) {
                            var t = null == e ? 0 : e.length;
                            return t ? oo(e, 1, t) : []
                        }

                        function Na(e, t, n) {
                            return e && e.length ? (t = n || t === ne ? 1 : vs(t), oo(e, 0, t < 0 ? 0 : t)) : []
                        }

                        function Fa(e, t, n) {
                            var r = null == e ? 0 : e.length;
                            return r ? (t = n || t === ne ? 1 : vs(t), t = r - t, oo(e, t < 0 ? 0 : t, r)) : []
                        }

                        function La(e, t) {
                            return e && e.length ? _o(e, gi(t, 3), !1, !0) : []
                        }

                        function Da(e, t) {
                            return e && e.length ? _o(e, gi(t, 3)) : []
                        }

                        function Ua(e) {
                            return e && e.length ? fo(e) : []
                        }

                        function Wa(e, t) {
                            return e && e.length ? fo(e, gi(t, 2)) : []
                        }

                        function Va(e, t) {
                            return t = "function" == typeof t ? t : ne, e && e.length ? fo(e, ne, t) : []
                        }

                        function Ba(e) {
                            if (!e || !e.length) return [];
                            var t = 0;
                            return e = l(e, function(e) {
                                if (Gu(e)) return t = Vl(e.length, t), !0
                            }), C(t, function(t) {
                                return p(e, S(t))
                            })
                        }

                        function Ga(e, t) {
                            if (!e || !e.length) return [];
                            var n = Ba(e);
                            return null == t ? n : p(n, function(e) {
                                return i(t, ne, e)
                            })
                        }

                        function Ha(e, t) {
                            return vo(e || [], t || [], Bn)
                        }

                        function za(e, t) {
                            return vo(e || [], t || [], no)
                        }

                        function Ka(e) {
                            var t = n(e);
                            return t.__chain__ = !0, t
                        }

                        function Ya(e, t) {
                            return t(e), e
                        }

                        function qa(e, t) {
                            return t(e)
                        }

                        function Xa() {
                            return Ka(this)
                        }

                        function Za() {
                            return new o(this.value(), this.__chain__)
                        }

                        function $a() {
                            this.__values__ === ne && (this.__values__ = ms(this.value()));
                            var e = this.__index__ >= this.__values__.length;
                            return {
                                done: e,
                                value: e ? ne : this.__values__[this.__index__++]
                            }
                        }

                        function Ja() {
                            return this
                        }

                        function Qa(e) {
                            for (var t, n = this; n instanceof r;) {
                                var o = Ji(n);
                                o.__index__ = 0, o.__values__ = ne, t ? i.__wrapped__ = o : t = o;
                                var i = o;
                                n = n.__wrapped__
                            }
                            return i.__wrapped__ = e, t
                        }

                        function eu() {
                            var e = this.__wrapped__;
                            if (e instanceof v) {
                                var t = e;
                                return this.__actions__.length && (t = new v(this)), t = t.reverse(), t.__actions__.push({
                                    func: qa,
                                    args: [xa],
                                    thisArg: ne
                                }), new o(t, this.__chain__)
                            }
                            return this.thru(xa)
                        }

                        function tu() {
                            return mo(this.__wrapped__, this.__actions__)
                        }

                        function nu(e, t, n) {
                            var r = pd(e) ? c : ir;
                            return n && Ci(e, t, n) && (t = ne), r(e, gi(t, 3))
                        }

                        function ru(e, t) {
                            return (pd(e) ? l : sr)(e, gi(t, 3))
                        }

                        function ou(e, t) {
                            return cr(lu(e, t), 1)
                        }

                        function iu(e, t) {
                            return cr(lu(e, t), Re)
                        }

                        function au(e, t, n) {
                            return n = n === ne ? 1 : vs(n), cr(lu(e, t), n)
                        }

                        function uu(e, t) {
                            return (pd(e) ? u : ff)(e, gi(t, 3))
                        }

                        function su(e, t) {
                            return (pd(e) ? s : df)(e, gi(t, 3))
                        }

                        function cu(e, t, n, r) {
                            e = Bu(e) ? e : Xs(e), n = n && !r ? vs(n) : 0;
                            var o = e.length;
                            return n < 0 && (n = Vl(o + n, 0)), fs(e) ? n <= o && e.indexOf(t, n) > -1 : !!o && w(e, t, n) > -1
                        }

                        function lu(e, t) {
                            return (pd(e) ? p : Dr)(e, gi(t, 3))
                        }

                        function fu(e, t, n, r) {
                            return null == e ? [] : (pd(t) || (t = null == t ? [] : [t]), n = r ? ne : n, pd(n) || (n = null == n ? [] : [n]), Hr(e, t, n))
                        }

                        function du(e, t, n) {
                            var r = pd(e) ? _ : A,
                                o = arguments.length < 3;
                            return r(e, gi(t, 4), n, o, ff)
                        }

                        function pu(e, t, n) {
                            var r = pd(e) ? m : A,
                                o = arguments.length < 3;
                            return r(e, gi(t, 4), n, o, df)
                        }

                        function hu(e, t) {
                            return (pd(e) ? l : sr)(e, Au(gi(t, 3)))
                        }

                        function _u(e) {
                            return (pd(e) ? Cn : eo)(e)
                        }

                        function mu(e, t, n) {
                            return t = (n ? Ci(e, t, n) : t === ne) ? 1 : vs(t), (pd(e) ? jn : to)(e, t)
                        }

                        function gu(e) {
                            return (pd(e) ? Mn : ro)(e)
                        }

                        function vu(e) {
                            if (null == e) return 0;
                            if (Bu(e)) return fs(e) ? $(e) : e.length;
                            var t = Tf(e);
                            return t == Ye || t == Qe ? e.size : Nr(e).length
                        }

                        function yu(e, t, n) {
                            var r = pd(e) ? g : io;
                            return n && Ci(e, t, n) && (t = ne), r(e, gi(t, 3))
                        }

                        function bu(e, t) {
                            if ("function" != typeof t) throw new al(ie);
                            return e = vs(e),
                                function() {
                                    if (--e < 1) return t.apply(this, arguments)
                                }
                        }

                        function Eu(e, t, n) {
                            return t = n ? ne : t, t = e && null == t ? e.length : t, ii(e, Ee, ne, ne, ne, ne, t)
                        }

                        function wu(e, t) {
                            var n;
                            if ("function" != typeof t) throw new al(ie);
                            return e = vs(e),
                                function() {
                                    return --e > 0 && (n = t.apply(this, arguments)), e <= 1 && (t = ne), n
                                }
                        }

                        function Tu(e, t, n) {
                            t = n ? ne : t;
                            var r = ii(e, ge, ne, ne, ne, ne, ne, t);
                            return r.placeholder = Tu.placeholder, r
                        }

                        function xu(e, t, n) {
                            t = n ? ne : t;
                            var r = ii(e, ve, ne, ne, ne, ne, ne, t);
                            return r.placeholder = xu.placeholder, r
                        }

                        function Iu(e, t, n) {
                            function r(t) {
                                var n = d,
                                    r = p;
                                return d = p = ne, v = t, _ = e.apply(r, n)
                            }

                            function o(e) {
                                return v = e, m = Sf(u, t), y ? r(e) : _
                            }

                            function i(e) {
                                var n = e - g,
                                    r = e - v,
                                    o = t - n;
                                return b ? Bl(o, h - r) : o
                            }

                            function a(e) {
                                var n = e - g,
                                    r = e - v;
                                return g === ne || n >= t || n < 0 || b && r >= h
                            }

                            function u() {
                                var e = td();
                                if (a(e)) return s(e);
                                m = Sf(u, i(e))
                            }

                            function s(e) {
                                return m = ne, E && d ? r(e) : (d = p = ne, _)
                            }

                            function c() {
                                m !== ne && vf(m), v = 0, d = g = p = m = ne
                            }

                            function l() {
                                return m === ne ? _ : s(td())
                            }

                            function f() {
                                var e = td(),
                                    n = a(e);
                                if (d = arguments, p = this, g = e, n) {
                                    if (m === ne) return o(g);
                                    if (b) return vf(m), m = Sf(u, t), r(g)
                                }
                                return m === ne && (m = Sf(u, t)), _
                            }
                            var d, p, h, _, m, g, v = 0,
                                y = !1,
                                b = !1,
                                E = !0;
                            if ("function" != typeof e) throw new al(ie);
                            return t = bs(t) || 0, es(n) && (y = !!n.leading, b = "maxWait" in n, h = b ? Vl(bs(n.maxWait) || 0, t) : h, E = "trailing" in n ? !!n.trailing : E), f.cancel = c, f.flush = l, f
                        }

                        function Su(e) {
                            return ii(e, Te)
                        }

                        function Ou(e, t) {
                            if ("function" != typeof e || null != t && "function" != typeof t) throw new al(ie);
                            var n = function() {
                                var r = arguments,
                                    o = t ? t.apply(this, r) : r[0],
                                    i = n.cache;
                                if (i.has(o)) return i.get(o);
                                var a = e.apply(this, r);
                                return n.cache = i.set(o, a) || i, a
                            };
                            return n.cache = new(Ou.Cache || an), n
                        }

                        function Au(e) {
                            if ("function" != typeof e) throw new al(ie);
                            return function() {
                                var t = arguments;
                                switch (t.length) {
                                    case 0:
                                        return !e.call(this);
                                    case 1:
                                        return !e.call(this, t[0]);
                                    case 2:
                                        return !e.call(this, t[0], t[1]);
                                    case 3:
                                        return !e.call(this, t[0], t[1], t[2])
                                }
                                return !e.apply(this, t)
                            }
                        }

                        function ku(e) {
                            return wu(2, e)
                        }

                        function Ru(e, t) {
                            if ("function" != typeof e) throw new al(ie);
                            return t = t === ne ? t : vs(t), Qr(e, t)
                        }

                        function Cu(e, t) {
                            if ("function" != typeof e) throw new al(ie);
                            return t = null == t ? 0 : Vl(vs(t), 0), Qr(function(n) {
                                var r = n[t],
                                    o = wo(n, 0, t);
                                return r && h(o, r), i(e, this, o)
                            })
                        }

                        function ju(e, t, n) {
                            var r = !0,
                                o = !0;
                            if ("function" != typeof e) throw new al(ie);
                            return es(n) && (r = "leading" in n ? !!n.leading : r, o = "trailing" in n ? !!n.trailing : o), Iu(e, t, {
                                leading: r,
                                maxWait: t,
                                trailing: o
                            })
                        }

                        function Pu(e) {
                            return Eu(e, 1)
                        }

                        function Mu(e, t) {
                            return ud(bo(t), e)
                        }

                        function Nu() {
                            if (!arguments.length) return [];
                            var e = arguments[0];
                            return pd(e) ? e : [e]
                        }

                        function Fu(e) {
                            return er(e, fe)
                        }

                        function Lu(e, t) {
                            return t = "function" == typeof t ? t : ne, er(e, fe, t)
                        }

                        function Du(e) {
                            return er(e, ce | fe)
                        }

                        function Uu(e, t) {
                            return t = "function" == typeof t ? t : ne, er(e, ce | fe, t)
                        }

                        function Wu(e, t) {
                            return null == t || nr(e, t, Fs(t))
                        }

                        function Vu(e, t) {
                            return e === t || e !== e && t !== t
                        }

                        function Bu(e) {
                            return null != e && Qu(e.length) && !$u(e)
                        }

                        function Gu(e) {
                            return ts(e) && Bu(e)
                        }

                        function Hu(e) {
                            return !0 === e || !1 === e || ts(e) && _r(e) == Ve
                        }

                        function zu(e) {
                            return ts(e) && 1 === e.nodeType && !cs(e)
                        }

                        function Ku(e) {
                            if (null == e) return !0;
                            if (Bu(e) && (pd(e) || "string" == typeof e || "function" == typeof e.splice || _d(e) || bd(e) || dd(e))) return !e.length;
                            var t = Tf(e);
                            if (t == Ye || t == Qe) return !e.size;
                            if (Fi(e)) return !Nr(e).length;
                            for (var n in e)
                                if (dl.call(e, n)) return !1;
                            return !0
                        }

                        function Yu(e, t) {
                            return Sr(e, t)
                        }

                        function qu(e, t, n) {
                            n = "function" == typeof n ? n : ne;
                            var r = n ? n(e, t) : ne;
                            return r === ne ? Sr(e, t, ne, n) : !!r
                        }

                        function Xu(e) {
                            if (!ts(e)) return !1;
                            var t = _r(e);
                            return t == He || t == Ge || "string" == typeof e.message && "string" == typeof e.name && !cs(e)
                        }

                        function Zu(e) {
                            return "number" == typeof e && Dl(e)
                        }

                        function $u(e) {
                            if (!es(e)) return !1;
                            var t = _r(e);
                            return t == ze || t == Ke || t == We || t == $e
                        }

                        function Ju(e) {
                            return "number" == typeof e && e == vs(e)
                        }

                        function Qu(e) {
                            return "number" == typeof e && e > -1 && e % 1 == 0 && e <= Ce
                        }

                        function es(e) {
                            var t = typeof e;
                            return null != e && ("object" == t || "function" == t)
                        }

                        function ts(e) {
                            return null != e && "object" == typeof e
                        }

                        function ns(e, t) {
                            return e === t || kr(e, t, yi(t))
                        }

                        function rs(e, t, n) {
                            return n = "function" == typeof n ? n : ne, kr(e, t, yi(t), n)
                        }

                        function os(e) {
                            return ss(e) && e != +e
                        }

                        function is(e) {
                            if (xf(e)) throw new el(oe);
                            return Rr(e)
                        }

                        function as(e) {
                            return null === e
                        }

                        function us(e) {
                            return null == e
                        }

                        function ss(e) {
                            return "number" == typeof e || ts(e) && _r(e) == qe
                        }

                        function cs(e) {
                            if (!ts(e) || _r(e) != Ze) return !1;
                            var t = Tl(e);
                            if (null === t) return !0;
                            var n = dl.call(t, "constructor") && t.constructor;
                            return "function" == typeof n && n instanceof n && fl.call(n) == ml
                        }

                        function ls(e) {
                            return Ju(e) && e >= -Ce && e <= Ce
                        }

                        function fs(e) {
                            return "string" == typeof e || !pd(e) && ts(e) && _r(e) == et
                        }

                        function ds(e) {
                            return "symbol" == typeof e || ts(e) && _r(e) == tt
                        }

                        function ps(e) {
                            return e === ne
                        }

                        function hs(e) {
                            return ts(e) && Tf(e) == rt
                        }

                        function _s(e) {
                            return ts(e) && _r(e) == ot
                        }

                        function ms(e) {
                            if (!e) return [];
                            if (Bu(e)) return fs(e) ? J(e) : Po(e);
                            if (Al && e[Al]) return G(e[Al]());
                            var t = Tf(e);
                            return (t == Ye ? H : t == Qe ? Y : Xs)(e)
                        }

                        function gs(e) {
                            if (!e) return 0 === e ? e : 0;
                            if ((e = bs(e)) === Re || e === -Re) {
                                return (e < 0 ? -1 : 1) * je
                            }
                            return e === e ? e : 0
                        }

                        function vs(e) {
                            var t = gs(e),
                                n = t % 1;
                            return t === t ? n ? t - n : t : 0
                        }

                        function ys(e) {
                            return e ? Qn(vs(e), 0, Me) : 0
                        }

                        function bs(e) {
                            if ("number" == typeof e) return e;
                            if (ds(e)) return Pe;
                            if (es(e)) {
                                var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                                e = es(t) ? t + "" : t
                            }
                            if ("string" != typeof e) return 0 === e ? e : +e;
                            e = e.replace(Ct, "");
                            var n = Bt.test(e);
                            return n || Ht.test(e) ? On(e.slice(2), n ? 2 : 8) : Vt.test(e) ? Pe : +e
                        }

                        function Es(e) {
                            return Mo(e, Ls(e))
                        }

                        function ws(e) {
                            return e ? Qn(vs(e), -Ce, Ce) : 0 === e ? e : 0
                        }

                        function Ts(e) {
                            return null == e ? "" : lo(e)
                        }

                        function xs(e, t) {
                            var n = lf(e);
                            return null == t ? n : Xn(n, t)
                        }

                        function Is(e, t) {
                            return b(e, gi(t, 3), lr)
                        }

                        function Ss(e, t) {
                            return b(e, gi(t, 3), fr)
                        }

                        function Os(e, t) {
                            return null == e ? e : pf(e, gi(t, 3), Ls)
                        }

                        function As(e, t) {
                            return null == e ? e : hf(e, gi(t, 3), Ls)
                        }

                        function ks(e, t) {
                            return e && lr(e, gi(t, 3))
                        }

                        function Rs(e, t) {
                            return e && fr(e, gi(t, 3))
                        }

                        function Cs(e) {
                            return null == e ? [] : dr(e, Fs(e))
                        }

                        function js(e) {
                            return null == e ? [] : dr(e, Ls(e))
                        }

                        function Ps(e, t, n) {
                            var r = null == e ? ne : pr(e, t);
                            return r === ne ? n : r
                        }

                        function Ms(e, t) {
                            return null != e && xi(e, t, gr)
                        }

                        function Ns(e, t) {
                            return null != e && xi(e, t, vr)
                        }

                        function Fs(e) {
                            return Bu(e) ? kn(e) : Nr(e)
                        }

                        function Ls(e) {
                            return Bu(e) ? kn(e, !0) : Fr(e)
                        }

                        function Ds(e, t) {
                            var n = {};
                            return t = gi(t, 3), lr(e, function(e, r, o) {
                                $n(n, t(e, r, o), e)
                            }), n
                        }

                        function Us(e, t) {
                            var n = {};
                            return t = gi(t, 3), lr(e, function(e, r, o) {
                                $n(n, r, t(e, r, o))
                            }), n
                        }

                        function Ws(e, t) {
                            return Vs(e, Au(gi(t)))
                        }

                        function Vs(e, t) {
                            if (null == e) return {};
                            var n = p(hi(e), function(e) {
                                return [e]
                            });
                            return t = gi(t), Kr(e, n, function(e, n) {
                                return t(e, n[0])
                            })
                        }

                        function Bs(e, t, n) {
                            t = Eo(t, e);
                            var r = -1,
                                o = t.length;
                            for (o || (o = 1, e = ne); ++r < o;) {
                                var i = null == e ? ne : e[Xi(t[r])];
                                i === ne && (r = o, i = n), e = $u(i) ? i.call(e) : i
                            }
                            return e
                        }

                        function Gs(e, t, n) {
                            return null == e ? e : no(e, t, n)
                        }

                        function Hs(e, t, n, r) {
                            return r = "function" == typeof r ? r : ne, null == e ? e : no(e, t, n, r)
                        }

                        function zs(e, t, n) {
                            var r = pd(e),
                                o = r || _d(e) || bd(e);
                            if (t = gi(t, 4), null == n) {
                                var i = e && e.constructor;
                                n = o ? r ? new i : [] : es(e) && $u(i) ? lf(Tl(e)) : {}
                            }
                            return (o ? u : lr)(e, function(e, r, o) {
                                return t(n, e, r, o)
                            }), n
                        }

                        function Ks(e, t) {
                            return null == e || po(e, t)
                        }

                        function Ys(e, t, n) {
                            return null == e ? e : ho(e, t, bo(n))
                        }

                        function qs(e, t, n, r) {
                            return r = "function" == typeof r ? r : ne, null == e ? e : ho(e, t, bo(n), r)
                        }

                        function Xs(e) {
                            return null == e ? [] : M(e, Fs(e))
                        }

                        function Zs(e) {
                            return null == e ? [] : M(e, Ls(e))
                        }

                        function $s(e, t, n) {
                            return n === ne && (n = t, t = ne), n !== ne && (n = bs(n), n = n === n ? n : 0), t !== ne && (t = bs(t), t = t === t ? t : 0), Qn(bs(e), t, n)
                        }

                        function Js(e, t, n) {
                            return t = gs(t), n === ne ? (n = t, t = 0) : n = gs(n), e = bs(e), yr(e, t, n)
                        }

                        function Qs(e, t, n) {
                            if (n && "boolean" != typeof n && Ci(e, t, n) && (t = n = ne), n === ne && ("boolean" == typeof t ? (n = t, t = ne) : "boolean" == typeof e && (n = e, e = ne)), e === ne && t === ne ? (e = 0, t = 1) : (e = gs(e), t === ne ? (t = e, e = 0) : t = gs(t)), e > t) {
                                var r = e;
                                e = t, t = r
                            }
                            if (n || e % 1 || t % 1) {
                                var o = zl();
                                return Bl(e + o * (t - e + Sn("1e-" + ((o + "").length - 1))), t)
                            }
                            return Zr(e, t)
                        }

                        function ec(e) {
                            return Kd(Ts(e).toLowerCase())
                        }

                        function tc(e) {
                            return (e = Ts(e)) && e.replace(Kt, Gn).replace(pn, "")
                        }

                        function nc(e, t, n) {
                            e = Ts(e), t = lo(t);
                            var r = e.length;
                            n = n === ne ? r : Qn(vs(n), 0, r);
                            var o = n;
                            return (n -= t.length) >= 0 && e.slice(n, o) == t
                        }

                        function rc(e) {
                            return e = Ts(e), e && wt.test(e) ? e.replace(bt, Hn) : e
                        }

                        function oc(e) {
                            return e = Ts(e), e && Rt.test(e) ? e.replace(kt, "\\$&") : e
                        }

                        function ic(e, t, n) {
                            e = Ts(e), t = vs(t);
                            var r = t ? $(e) : 0;
                            if (!t || r >= t) return e;
                            var o = (t - r) / 2;
                            return Jo(Nl(o), n) + e + Jo(Ml(o), n)
                        }

                        function ac(e, t, n) {
                            e = Ts(e), t = vs(t);
                            var r = t ? $(e) : 0;
                            return t && r < t ? e + Jo(t - r, n) : e
                        }

                        function uc(e, t, n) {
                            e = Ts(e), t = vs(t);
                            var r = t ? $(e) : 0;
                            return t && r < t ? Jo(t - r, n) + e : e
                        }

                        function sc(e, t, n) {
                            return n || null == t ? t = 0 : t && (t = +t), Hl(Ts(e).replace(jt, ""), t || 0)
                        }

                        function cc(e, t, n) {
                            return t = (n ? Ci(e, t, n) : t === ne) ? 1 : vs(t), Jr(Ts(e), t)
                        }

                        function lc() {
                            var e = arguments,
                                t = Ts(e[0]);
                            return e.length < 3 ? t : t.replace(e[1], e[2])
                        }

                        function fc(e, t, n) {
                            return n && "number" != typeof n && Ci(e, t, n) && (t = n = ne), (n = n === ne ? Me : n >>> 0) ? (e = Ts(e), e && ("string" == typeof t || null != t && !vd(t)) && !(t = lo(t)) && V(e) ? wo(J(e), 0, n) : e.split(t, n)) : []
                        }

                        function dc(e, t, n) {
                            return e = Ts(e), n = null == n ? 0 : Qn(vs(n), 0, e.length), t = lo(t), e.slice(n, n + t.length) == t
                        }

                        function pc(e, t, r) {
                            var o = n.templateSettings;
                            r && Ci(e, t, r) && (t = ne), e = Ts(e), t = Id({}, t, o, ai);
                            var i, a, u = Id({}, t.imports, o.imports, ai),
                                s = Fs(u),
                                c = M(u, s),
                                l = 0,
                                f = t.interpolate || Yt,
                                d = "__p += '",
                                p = ol((t.escape || Yt).source + "|" + f.source + "|" + (f === It ? Ut : Yt).source + "|" + (t.evaluate || Yt).source + "|$", "g"),
                                h = "//# sourceURL=" + (dl.call(t, "sourceURL") ? (t.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++yn + "]") + "\n";
                            e.replace(p, function(t, n, r, o, u, s) {
                                return r || (r = o), d += e.slice(l, s).replace(qt, U), n && (i = !0, d += "' +\n__e(" + n + ") +\n'"), u && (a = !0, d += "';\n" + u + ";\n__p += '"), r && (d += "' +\n((__t = (" + r + ")) == null ? '' : __t) +\n'"), l = s + t.length, t
                            }), d += "';\n";
                            var _ = dl.call(t, "variable") && t.variable;
                            _ || (d = "with (obj) {\n" + d + "\n}\n"), d = (a ? d.replace(mt, "") : d).replace(gt, "$1").replace(vt, "$1;"), d = "function(" + (_ || "obj") + ") {\n" + (_ ? "" : "obj || (obj = {});\n") + "var __t, __p = ''" + (i ? ", __e = _.escape" : "") + (a ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + d + "return __p\n}";
                            var m = Yd(function() {
                                return tl(s, h + "return " + d).apply(ne, c)
                            });
                            if (m.source = d, Xu(m)) throw m;
                            return m
                        }

                        function hc(e) {
                            return Ts(e).toLowerCase()
                        }

                        function _c(e) {
                            return Ts(e).toUpperCase()
                        }

                        function mc(e, t, n) {
                            if ((e = Ts(e)) && (n || t === ne)) return e.replace(Ct, "");
                            if (!e || !(t = lo(t))) return e;
                            var r = J(e),
                                o = J(t);
                            return wo(r, F(r, o), L(r, o) + 1).join("")
                        }

                        function gc(e, t, n) {
                            if ((e = Ts(e)) && (n || t === ne)) return e.replace(Pt, "");
                            if (!e || !(t = lo(t))) return e;
                            var r = J(e);
                            return wo(r, 0, L(r, J(t)) + 1).join("")
                        }

                        function vc(e, t, n) {
                            if ((e = Ts(e)) && (n || t === ne)) return e.replace(jt, "");
                            if (!e || !(t = lo(t))) return e;
                            var r = J(e);
                            return wo(r, F(r, J(t))).join("")
                        }

                        function yc(e, t) {
                            var n = xe,
                                r = Ie;
                            if (es(t)) {
                                var o = "separator" in t ? t.separator : o;
                                n = "length" in t ? vs(t.length) : n, r = "omission" in t ? lo(t.omission) : r
                            }
                            e = Ts(e);
                            var i = e.length;
                            if (V(e)) {
                                var a = J(e);
                                i = a.length
                            }
                            if (n >= i) return e;
                            var u = n - $(r);
                            if (u < 1) return r;
                            var s = a ? wo(a, 0, u).join("") : e.slice(0, u);
                            if (o === ne) return s + r;
                            if (a && (u += s.length - u), vd(o)) {
                                if (e.slice(u).search(o)) {
                                    var c, l = s;
                                    for (o.global || (o = ol(o.source, Ts(Wt.exec(o)) + "g")), o.lastIndex = 0; c = o.exec(l);) var f = c.index;
                                    s = s.slice(0, f === ne ? u : f)
                                }
                            } else if (e.indexOf(lo(o), u) != u) {
                                var d = s.lastIndexOf(o);
                                d > -1 && (s = s.slice(0, d))
                            }
                            return s + r
                        }

                        function bc(e) {
                            return e = Ts(e), e && Et.test(e) ? e.replace(yt, zn) : e
                        }

                        function Ec(e, t, n) {
                            return e = Ts(e), t = n ? ne : t, t === ne ? B(e) ? te(e) : y(e) : e.match(t) || []
                        }

                        function wc(e) {
                            var t = null == e ? 0 : e.length,
                                n = gi();
                            return e = t ? p(e, function(e) {
                                if ("function" != typeof e[1]) throw new al(ie);
                                return [n(e[0]), e[1]]
                            }) : [], Qr(function(n) {
                                for (var r = -1; ++r < t;) {
                                    var o = e[r];
                                    if (i(o[0], this, n)) return i(o[1], this, n)
                                }
                            })
                        }

                        function Tc(e) {
                            return tr(er(e, ce))
                        }

                        function xc(e) {
                            return function() {
                                return e
                            }
                        }

                        function Ic(e, t) {
                            return null == e || e !== e ? t : e
                        }

                        function Sc(e) {
                            return e
                        }

                        function Oc(e) {
                            return Mr("function" == typeof e ? e : er(e, ce))
                        }

                        function Ac(e) {
                            return Ur(er(e, ce))
                        }

                        function kc(e, t) {
                            return Wr(e, er(t, ce))
                        }

                        function Rc(e, t, n) {
                            var r = Fs(t),
                                o = dr(t, r);
                            null != n || es(t) && (o.length || !r.length) || (n = t, t = e, e = this, o = dr(t, Fs(t)));
                            var i = !(es(n) && "chain" in n && !n.chain),
                                a = $u(e);
                            return u(o, function(n) {
                                var r = t[n];
                                e[n] = r, a && (e.prototype[n] = function() {
                                    var t = this.__chain__;
                                    if (i || t) {
                                        var n = e(this.__wrapped__);
                                        return (n.__actions__ = Po(this.__actions__)).push({
                                            func: r,
                                            args: arguments,
                                            thisArg: e
                                        }), n.__chain__ = t, n
                                    }
                                    return r.apply(e, h([this.value()], arguments))
                                })
                            }), e
                        }

                        function Cc() {
                            return Rn._ === this && (Rn._ = gl), this
                        }

                        function jc() {}

                        function Pc(e) {
                            return e = vs(e), Qr(function(t) {
                                return Gr(t, e)
                            })
                        }

                        function Mc(e) {
                            return ji(e) ? S(Xi(e)) : Yr(e)
                        }

                        function Nc(e) {
                            return function(t) {
                                return null == e ? ne : pr(e, t)
                            }
                        }

                        function Fc() {
                            return []
                        }

                        function Lc() {
                            return !1
                        }

                        function Dc() {
                            return {}
                        }

                        function Uc() {
                            return ""
                        }

                        function Wc() {
                            return !0
                        }

                        function Vc(e, t) {
                            if ((e = vs(e)) < 1 || e > Ce) return [];
                            var n = Me,
                                r = Bl(e, Me);
                            t = gi(t), e -= Me;
                            for (var o = C(r, t); ++n < e;) t(n);
                            return o
                        }

                        function Bc(e) {
                            return pd(e) ? p(e, Xi) : ds(e) ? [e] : Po(Af(Ts(e)))
                        }

                        function Gc(e) {
                            var t = ++pl;
                            return Ts(e) + t
                        }

                        function Hc(e) {
                            return e && e.length ? ar(e, Sc, mr) : ne
                        }

                        function zc(e, t) {
                            return e && e.length ? ar(e, gi(t, 2), mr) : ne
                        }

                        function Kc(e) {
                            return I(e, Sc)
                        }

                        function Yc(e, t) {
                            return I(e, gi(t, 2))
                        }

                        function qc(e) {
                            return e && e.length ? ar(e, Sc, Lr) : ne
                        }

                        function Xc(e, t) {
                            return e && e.length ? ar(e, gi(t, 2), Lr) : ne
                        }

                        function Zc(e) {
                            return e && e.length ? R(e, Sc) : 0
                        }

                        function $c(e, t) {
                            return e && e.length ? R(e, gi(t, 2)) : 0
                        }
                        t = null == t ? Rn : Kn.defaults(Rn.Object(), t, Kn.pick(Rn, vn));
                        var Jc = t.Array,
                            Qc = t.Date,
                            el = t.Error,
                            tl = t.Function,
                            nl = t.Math,
                            rl = t.Object,
                            ol = t.RegExp,
                            il = t.String,
                            al = t.TypeError,
                            ul = Jc.prototype,
                            sl = tl.prototype,
                            cl = rl.prototype,
                            ll = t["__core-js_shared__"],
                            fl = sl.toString,
                            dl = cl.hasOwnProperty,
                            pl = 0,
                            hl = function() {
                                var e = /[^.]+$/.exec(ll && ll.keys && ll.keys.IE_PROTO || "");
                                return e ? "Symbol(src)_1." + e : ""
                            }(),
                            _l = cl.toString,
                            ml = fl.call(rl),
                            gl = Rn._,
                            vl = ol("^" + fl.call(dl).replace(kt, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
                            yl = Pn ? t.Buffer : ne,
                            bl = t.Symbol,
                            El = t.Uint8Array,
                            wl = yl ? yl.allocUnsafe : ne,
                            Tl = z(rl.getPrototypeOf, rl),
                            xl = rl.create,
                            Il = cl.propertyIsEnumerable,
                            Sl = ul.splice,
                            Ol = bl ? bl.isConcatSpreadable : ne,
                            Al = bl ? bl.iterator : ne,
                            kl = bl ? bl.toStringTag : ne,
                            Rl = function() {
                                try {
                                    var e = bi(rl, "defineProperty");
                                    return e({}, "", {}), e
                                } catch (e) {}
                            }(),
                            Cl = t.clearTimeout !== Rn.clearTimeout && t.clearTimeout,
                            jl = Qc && Qc.now !== Rn.Date.now && Qc.now,
                            Pl = t.setTimeout !== Rn.setTimeout && t.setTimeout,
                            Ml = nl.ceil,
                            Nl = nl.floor,
                            Fl = rl.getOwnPropertySymbols,
                            Ll = yl ? yl.isBuffer : ne,
                            Dl = t.isFinite,
                            Ul = ul.join,
                            Wl = z(rl.keys, rl),
                            Vl = nl.max,
                            Bl = nl.min,
                            Gl = Qc.now,
                            Hl = t.parseInt,
                            zl = nl.random,
                            Kl = ul.reverse,
                            Yl = bi(t, "DataView"),
                            ql = bi(t, "Map"),
                            Xl = bi(t, "Promise"),
                            Zl = bi(t, "Set"),
                            $l = bi(t, "WeakMap"),
                            Jl = bi(rl, "create"),
                            Ql = $l && new $l,
                            ef = {},
                            tf = Zi(Yl),
                            nf = Zi(ql),
                            rf = Zi(Xl),
                            of = Zi(Zl),
                            af = Zi($l),
                            uf = bl ? bl.prototype : ne,
                            sf = uf ? uf.valueOf : ne,
                            cf = uf ? uf.toString : ne,
                            lf = function() {
                                function e() {}
                                return function(t) {
                                    if (!es(t)) return {};
                                    if (xl) return xl(t);
                                    e.prototype = t;
                                    var n = new e;
                                    return e.prototype = ne, n
                                }
                            }();
                        n.templateSettings = {
                            escape: Tt,
                            evaluate: xt,
                            interpolate: It,
                            variable: "",
                            imports: {
                                _: n
                            }
                        }, n.prototype = r.prototype, n.prototype.constructor = n, o.prototype = lf(r.prototype), o.prototype.constructor = o, v.prototype = lf(r.prototype), v.prototype.constructor = v, ee.prototype.clear = Lt, ee.prototype.delete = Xt, ee.prototype.get = Zt, ee.prototype.has = $t, ee.prototype.set = Jt, Qt.prototype.clear = en, Qt.prototype.delete = tn, Qt.prototype.get = nn, Qt.prototype.has = rn, Qt.prototype.set = on, an.prototype.clear = un, an.prototype.delete = sn, an.prototype.get = cn, an.prototype.has = ln, an.prototype.set = fn, hn.prototype.add = hn.prototype.push = _n, hn.prototype.has = mn, gn.prototype.clear = wn, gn.prototype.delete = Tn, gn.prototype.get = xn, gn.prototype.has = In, gn.prototype.set = An;
                        var ff = Uo(lr),
                            df = Uo(fr, !0),
                            pf = Wo(),
                            hf = Wo(!0),
                            _f = Ql ? function(e, t) {
                                return Ql.set(e, t), e
                            } : Sc,
                            mf = Rl ? function(e, t) {
                                return Rl(e, "toString", {
                                    configurable: !0,
                                    enumerable: !1,
                                    value: xc(t),
                                    writable: !0
                                })
                            } : Sc,
                            gf = Qr,
                            vf = Cl || function(e) {
                                return Rn.clearTimeout(e)
                            },
                            yf = Zl && 1 / Y(new Zl([, -0]))[1] == Re ? function(e) {
                                return new Zl(e)
                            } : jc,
                            bf = Ql ? function(e) {
                                return Ql.get(e)
                            } : jc,
                            Ef = Fl ? function(e) {
                                return null == e ? [] : (e = rl(e), l(Fl(e), function(t) {
                                    return Il.call(e, t)
                                }))
                            } : Fc,
                            wf = Fl ? function(e) {
                                for (var t = []; e;) h(t, Ef(e)), e = Tl(e);
                                return t
                            } : Fc,
                            Tf = _r;
                        (Yl && Tf(new Yl(new ArrayBuffer(1))) != at || ql && Tf(new ql) != Ye || Xl && "[object Promise]" != Tf(Xl.resolve()) || Zl && Tf(new Zl) != Qe || $l && Tf(new $l) != rt) && (Tf = function(e) {
                            var t = _r(e),
                                n = t == Ze ? e.constructor : ne,
                                r = n ? Zi(n) : "";
                            if (r) switch (r) {
                                case tf:
                                    return at;
                                case nf:
                                    return Ye;
                                case rf:
                                    return "[object Promise]";
                                case of:
                                    return Qe;
                                case af:
                                    return rt
                            }
                            return t
                        });
                        var xf = ll ? $u : Lc,
                            If = Yi(_f),
                            Sf = Pl || function(e, t) {
                                return Rn.setTimeout(e, t)
                            },
                            Of = Yi(mf),
                            Af = function(e) {
                                var t = Ou(e, function(e) {
                                        return n.size === ue && n.clear(), e
                                    }),
                                    n = t.cache;
                                return t
                            }(function(e) {
                                var t = [];
                                return 46 === e.charCodeAt(0) && t.push(""), e.replace(At, function(e, n, r, o) {
                                    t.push(r ? o.replace(Dt, "$1") : n || e)
                                }), t
                            }),
                            kf = Qr(function(e, t) {
                                return Gu(e) ? or(e, cr(t, 1, Gu, !0)) : []
                            }),
                            Rf = Qr(function(e, t) {
                                var n = ga(t);
                                return Gu(n) && (n = ne), Gu(e) ? or(e, cr(t, 1, Gu, !0), gi(n, 2)) : []
                            }),
                            Cf = Qr(function(e, t) {
                                var n = ga(t);
                                return Gu(n) && (n = ne), Gu(e) ? or(e, cr(t, 1, Gu, !0), ne, n) : []
                            }),
                            jf = Qr(function(e) {
                                var t = p(e, yo);
                                return t.length && t[0] === e[0] ? br(t) : []
                            }),
                            Pf = Qr(function(e) {
                                var t = ga(e),
                                    n = p(e, yo);
                                return t === ga(n) ? t = ne : n.pop(), n.length && n[0] === e[0] ? br(n, gi(t, 2)) : []
                            }),
                            Mf = Qr(function(e) {
                                var t = ga(e),
                                    n = p(e, yo);
                                return t = "function" == typeof t ? t : ne, t && n.pop(), n.length && n[0] === e[0] ? br(n, ne, t) : []
                            }),
                            Nf = Qr(ba),
                            Ff = di(function(e, t) {
                                var n = null == e ? 0 : e.length,
                                    r = Jn(e, t);
                                return Xr(e, p(t, function(e) {
                                    return Ri(e, n) ? +e : e
                                }).sort(ko)), r
                            }),
                            Lf = Qr(function(e) {
                                return fo(cr(e, 1, Gu, !0))
                            }),
                            Df = Qr(function(e) {
                                var t = ga(e);
                                return Gu(t) && (t = ne), fo(cr(e, 1, Gu, !0), gi(t, 2))
                            }),
                            Uf = Qr(function(e) {
                                var t = ga(e);
                                return t = "function" == typeof t ? t : ne, fo(cr(e, 1, Gu, !0), ne, t)
                            }),
                            Wf = Qr(function(e, t) {
                                return Gu(e) ? or(e, t) : []
                            }),
                            Vf = Qr(function(e) {
                                return go(l(e, Gu))
                            }),
                            Bf = Qr(function(e) {
                                var t = ga(e);
                                return Gu(t) && (t = ne), go(l(e, Gu), gi(t, 2))
                            }),
                            Gf = Qr(function(e) {
                                var t = ga(e);
                                return t = "function" == typeof t ? t : ne, go(l(e, Gu), ne, t)
                            }),
                            Hf = Qr(Ba),
                            zf = Qr(function(e) {
                                var t = e.length,
                                    n = t > 1 ? e[t - 1] : ne;
                                return n = "function" == typeof n ? (e.pop(), n) : ne, Ga(e, n)
                            }),
                            Kf = di(function(e) {
                                var t = e.length,
                                    n = t ? e[0] : 0,
                                    r = this.__wrapped__,
                                    i = function(t) {
                                        return Jn(t, e)
                                    };
                                return !(t > 1 || this.__actions__.length) && r instanceof v && Ri(n) ? (r = r.slice(n, +n + (t ? 1 : 0)), r.__actions__.push({
                                    func: qa,
                                    args: [i],
                                    thisArg: ne
                                }), new o(r, this.__chain__).thru(function(e) {
                                    return t && !e.length && e.push(ne), e
                                })) : this.thru(i)
                            }),
                            Yf = Lo(function(e, t, n) {
                                dl.call(e, n) ? ++e[n] : $n(e, n, 1)
                            }),
                            qf = Ko(ua),
                            Xf = Ko(sa),
                            Zf = Lo(function(e, t, n) {
                                dl.call(e, n) ? e[n].push(t) : $n(e, n, [t])
                            }),
                            $f = Qr(function(e, t, n) {
                                var r = -1,
                                    o = "function" == typeof t,
                                    a = Bu(e) ? Jc(e.length) : [];
                                return ff(e, function(e) {
                                    a[++r] = o ? i(t, e, n) : wr(e, t, n)
                                }), a
                            }),
                            Jf = Lo(function(e, t, n) {
                                $n(e, n, t)
                            }),
                            Qf = Lo(function(e, t, n) {
                                e[n ? 0 : 1].push(t)
                            }, function() {
                                return [
                                    [],
                                    []
                                ]
                            }),
                            ed = Qr(function(e, t) {
                                if (null == e) return [];
                                var n = t.length;
                                return n > 1 && Ci(e, t[0], t[1]) ? t = [] : n > 2 && Ci(t[0], t[1], t[2]) && (t = [t[0]]), Hr(e, cr(t, 1), [])
                            }),
                            td = jl || function() {
                                return Rn.Date.now()
                            },
                            nd = Qr(function(e, t, n) {
                                var r = he;
                                if (n.length) {
                                    var o = K(n, mi(nd));
                                    r |= ye
                                }
                                return ii(e, r, t, n, o)
                            }),
                            rd = Qr(function(e, t, n) {
                                var r = he | _e;
                                if (n.length) {
                                    var o = K(n, mi(rd));
                                    r |= ye
                                }
                                return ii(t, r, e, n, o)
                            }),
                            od = Qr(function(e, t) {
                                return rr(e, 1, t)
                            }),
                            id = Qr(function(e, t, n) {
                                return rr(e, bs(t) || 0, n)
                            });
                        Ou.Cache = an;
                        var ad = gf(function(e, t) {
                                t = 1 == t.length && pd(t[0]) ? p(t[0], P(gi())) : p(cr(t, 1), P(gi()));
                                var n = t.length;
                                return Qr(function(r) {
                                    for (var o = -1, a = Bl(r.length, n); ++o < a;) r[o] = t[o].call(this, r[o]);
                                    return i(e, this, r)
                                })
                            }),
                            ud = Qr(function(e, t) {
                                var n = K(t, mi(ud));
                                return ii(e, ye, ne, t, n)
                            }),
                            sd = Qr(function(e, t) {
                                var n = K(t, mi(sd));
                                return ii(e, be, ne, t, n)
                            }),
                            cd = di(function(e, t) {
                                return ii(e, we, ne, ne, ne, t)
                            }),
                            ld = ti(mr),
                            fd = ti(function(e, t) {
                                return e >= t
                            }),
                            dd = Tr(function() {
                                return arguments
                            }()) ? Tr : function(e) {
                                return ts(e) && dl.call(e, "callee") && !Il.call(e, "callee")
                            },
                            pd = Jc.isArray,
                            hd = Fn ? P(Fn) : xr,
                            _d = Ll || Lc,
                            md = Ln ? P(Ln) : Ir,
                            gd = Dn ? P(Dn) : Ar,
                            vd = Un ? P(Un) : Cr,
                            yd = Wn ? P(Wn) : jr,
                            bd = Vn ? P(Vn) : Pr,
                            Ed = ti(Lr),
                            wd = ti(function(e, t) {
                                return e <= t
                            }),
                            Td = Do(function(e, t) {
                                if (Fi(t) || Bu(t)) return void Mo(t, Fs(t), e);
                                for (var n in t) dl.call(t, n) && Bn(e, n, t[n])
                            }),
                            xd = Do(function(e, t) {
                                Mo(t, Ls(t), e)
                            }),
                            Id = Do(function(e, t, n, r) {
                                Mo(t, Ls(t), e, r)
                            }),
                            Sd = Do(function(e, t, n, r) {
                                Mo(t, Fs(t), e, r)
                            }),
                            Od = di(Jn),
                            Ad = Qr(function(e, t) {
                                e = rl(e);
                                var n = -1,
                                    r = t.length,
                                    o = r > 2 ? t[2] : ne;
                                for (o && Ci(t[0], t[1], o) && (r = 1); ++n < r;)
                                    for (var i = t[n], a = Ls(i), u = -1, s = a.length; ++u < s;) {
                                        var c = a[u],
                                            l = e[c];
                                        (l === ne || Vu(l, cl[c]) && !dl.call(e, c)) && (e[c] = i[c])
                                    }
                                return e
                            }),
                            kd = Qr(function(e) {
                                return e.push(ne, ui), i(Md, ne, e)
                            }),
                            Rd = Xo(function(e, t, n) {
                                null != t && "function" != typeof t.toString && (t = _l.call(t)), e[t] = n
                            }, xc(Sc)),
                            Cd = Xo(function(e, t, n) {
                                null != t && "function" != typeof t.toString && (t = _l.call(t)), dl.call(e, t) ? e[t].push(n) : e[t] = [n]
                            }, gi),
                            jd = Qr(wr),
                            Pd = Do(function(e, t, n) {
                                Vr(e, t, n)
                            }),
                            Md = Do(function(e, t, n, r) {
                                Vr(e, t, n, r)
                            }),
                            Nd = di(function(e, t) {
                                var n = {};
                                if (null == e) return n;
                                var r = !1;
                                t = p(t, function(t) {
                                    return t = Eo(t, e), r || (r = t.length > 1), t
                                }), Mo(e, hi(e), n), r && (n = er(n, ce | le | fe, si));
                                for (var o = t.length; o--;) po(n, t[o]);
                                return n
                            }),
                            Fd = di(function(e, t) {
                                return null == e ? {} : zr(e, t)
                            }),
                            Ld = oi(Fs),
                            Dd = oi(Ls),
                            Ud = Go(function(e, t, n) {
                                return t = t.toLowerCase(), e + (n ? ec(t) : t)
                            }),
                            Wd = Go(function(e, t, n) {
                                return e + (n ? "-" : "") + t.toLowerCase()
                            }),
                            Vd = Go(function(e, t, n) {
                                return e + (n ? " " : "") + t.toLowerCase()
                            }),
                            Bd = Bo("toLowerCase"),
                            Gd = Go(function(e, t, n) {
                                return e + (n ? "_" : "") + t.toLowerCase()
                            }),
                            Hd = Go(function(e, t, n) {
                                return e + (n ? " " : "") + Kd(t)
                            }),
                            zd = Go(function(e, t, n) {
                                return e + (n ? " " : "") + t.toUpperCase()
                            }),
                            Kd = Bo("toUpperCase"),
                            Yd = Qr(function(e, t) {
                                try {
                                    return i(e, ne, t)
                                } catch (e) {
                                    return Xu(e) ? e : new el(e)
                                }
                            }),
                            qd = di(function(e, t) {
                                return u(t, function(t) {
                                    t = Xi(t), $n(e, t, nd(e[t], e))
                                }), e
                            }),
                            Xd = Yo(),
                            Zd = Yo(!0),
                            $d = Qr(function(e, t) {
                                return function(n) {
                                    return wr(n, e, t)
                                }
                            }),
                            Jd = Qr(function(e, t) {
                                return function(n) {
                                    return wr(e, n, t)
                                }
                            }),
                            Qd = $o(p),
                            ep = $o(c),
                            tp = $o(g),
                            np = ei(),
                            rp = ei(!0),
                            op = Zo(function(e, t) {
                                return e + t
                            }, 0),
                            ip = ri("ceil"),
                            ap = Zo(function(e, t) {
                                return e / t
                            }, 1),
                            up = ri("floor"),
                            sp = Zo(function(e, t) {
                                return e * t
                            }, 1),
                            cp = ri("round"),
                            lp = Zo(function(e, t) {
                                return e - t
                            }, 0);
                        return n.after = bu, n.ary = Eu, n.assign = Td, n.assignIn = xd, n.assignInWith = Id, n.assignWith = Sd, n.at = Od, n.before = wu, n.bind = nd, n.bindAll = qd, n.bindKey = rd, n.castArray = Nu, n.chain = Ka, n.chunk = Qi, n.compact = ea, n.concat = ta, n.cond = wc, n.conforms = Tc, n.constant = xc, n.countBy = Yf, n.create = xs, n.curry = Tu, n.curryRight = xu, n.debounce = Iu, n.defaults = Ad, n.defaultsDeep = kd, n.defer = od, n.delay = id, n.difference = kf, n.differenceBy = Rf, n.differenceWith = Cf, n.drop = na, n.dropRight = ra, n.dropRightWhile = oa, n.dropWhile = ia, n.fill = aa, n.filter = ru, n.flatMap = ou, n.flatMapDeep = iu, n.flatMapDepth = au, n.flatten = ca, n.flattenDeep = la, n.flattenDepth = fa, n.flip = Su, n.flow = Xd, n.flowRight = Zd, n.fromPairs = da, n.functions = Cs, n.functionsIn = js, n.groupBy = Zf, n.initial = _a, n.intersection = jf, n.intersectionBy = Pf, n.intersectionWith = Mf, n.invert = Rd, n.invertBy = Cd, n.invokeMap = $f, n.iteratee = Oc, n.keyBy = Jf, n.keys = Fs, n.keysIn = Ls, n.map = lu, n.mapKeys = Ds, n.mapValues = Us, n.matches = Ac, n.matchesProperty = kc, n.memoize = Ou, n.merge = Pd, n.mergeWith = Md, n.method = $d, n.methodOf = Jd, n.mixin = Rc, n.negate = Au, n.nthArg = Pc, n.omit = Nd, n.omitBy = Ws, n.once = ku, n.orderBy = fu, n.over = Qd, n.overArgs = ad, n.overEvery = ep, n.overSome = tp, n.partial = ud, n.partialRight = sd, n.partition = Qf, n.pick = Fd, n.pickBy = Vs, n.property = Mc, n.propertyOf = Nc, n.pull = Nf, n.pullAll = ba, n.pullAllBy = Ea, n.pullAllWith = wa, n.pullAt = Ff, n.range = np, n.rangeRight = rp, n.rearg = cd, n.reject = hu, n.remove = Ta, n.rest = Ru, n.reverse = xa, n.sampleSize = mu, n.set = Gs, n.setWith = Hs, n.shuffle = gu, n.slice = Ia, n.sortBy = ed, n.sortedUniq = ja, n.sortedUniqBy = Pa, n.split = fc, n.spread = Cu, n.tail = Ma, n.take = Na, n.takeRight = Fa, n.takeRightWhile = La, n.takeWhile = Da, n.tap = Ya, n.throttle = ju, n.thru = qa, n.toArray = ms, n.toPairs = Ld, n.toPairsIn = Dd, n.toPath = Bc, n.toPlainObject = Es, n.transform = zs, n.unary = Pu, n.union = Lf, n.unionBy = Df, n.unionWith = Uf, n.uniq = Ua, n.uniqBy = Wa, n.uniqWith = Va, n.unset = Ks, n.unzip = Ba, n.unzipWith = Ga, n.update = Ys, n.updateWith = qs, n.values = Xs, n.valuesIn = Zs, n.without = Wf, n.words = Ec, n.wrap = Mu, n.xor = Vf, n.xorBy = Bf, n.xorWith = Gf, n.zip = Hf, n.zipObject = Ha, n.zipObjectDeep = za, n.zipWith = zf, n.entries = Ld, n.entriesIn = Dd, n.extend = xd, n.extendWith = Id, Rc(n, n), n.add = op, n.attempt = Yd, n.camelCase = Ud, n.capitalize = ec, n.ceil = ip, n.clamp = $s, n.clone = Fu, n.cloneDeep = Du, n.cloneDeepWith = Uu, n.cloneWith = Lu, n.conformsTo = Wu, n.deburr = tc, n.defaultTo = Ic, n.divide = ap, n.endsWith = nc, n.eq = Vu, n.escape = rc, n.escapeRegExp = oc, n.every = nu, n.find = qf, n.findIndex = ua, n.findKey = Is, n.findLast = Xf, n.findLastIndex = sa, n.findLastKey = Ss, n.floor = up, n.forEach = uu, n.forEachRight = su, n.forIn = Os, n.forInRight = As, n.forOwn = ks, n.forOwnRight = Rs, n.get = Ps, n.gt = ld, n.gte = fd, n.has = Ms, n.hasIn = Ns, n.head = pa, n.identity = Sc, n.includes = cu, n.indexOf = ha, n.inRange = Js, n.invoke = jd, n.isArguments = dd, n.isArray = pd, n.isArrayBuffer = hd, n.isArrayLike = Bu, n.isArrayLikeObject = Gu, n.isBoolean = Hu, n.isBuffer = _d, n.isDate = md, n.isElement = zu, n.isEmpty = Ku, n.isEqual = Yu, n.isEqualWith = qu, n.isError = Xu, n.isFinite = Zu, n.isFunction = $u, n.isInteger = Ju, n.isLength = Qu, n.isMap = gd, n.isMatch = ns, n.isMatchWith = rs, n.isNaN = os, n.isNative = is, n.isNil = us, n.isNull = as, n.isNumber = ss, n.isObject = es, n.isObjectLike = ts, n.isPlainObject = cs, n.isRegExp = vd, n.isSafeInteger = ls, n.isSet = yd, n.isString = fs, n.isSymbol = ds, n.isTypedArray = bd, n.isUndefined = ps, n.isWeakMap = hs, n.isWeakSet = _s, n.join = ma, n.kebabCase = Wd, n.last = ga, n.lastIndexOf = va, n.lowerCase = Vd, n.lowerFirst = Bd, n.lt = Ed, n.lte = wd, n.max = Hc, n.maxBy = zc, n.mean = Kc, n.meanBy = Yc, n.min = qc, n.minBy = Xc, n.stubArray = Fc, n.stubFalse = Lc, n.stubObject = Dc, n.stubString = Uc, n.stubTrue = Wc, n.multiply = sp, n.nth = ya, n.noConflict = Cc, n.noop = jc, n.now = td, n.pad = ic, n.padEnd = ac, n.padStart = uc, n.parseInt = sc, n.random = Qs, n.reduce = du, n.reduceRight = pu, n.repeat = cc, n.replace = lc, n.result = Bs, n.round = cp, n.runInContext = e, n.sample = _u, n.size = vu, n.snakeCase = Gd, n.some = yu, n.sortedIndex = Sa, n.sortedIndexBy = Oa, n.sortedIndexOf = Aa, n.sortedLastIndex = ka, n.sortedLastIndexBy = Ra, n.sortedLastIndexOf = Ca, n.startCase = Hd, n.startsWith = dc, n.subtract = lp, n.sum = Zc, n.sumBy = $c, n.template = pc, n.times = Vc, n.toFinite = gs, n.toInteger = vs, n.toLength = ys, n.toLower = hc, n.toNumber = bs, n.toSafeInteger = ws, n.toString = Ts, n.toUpper = _c, n.trim = mc, n.trimEnd = gc, n.trimStart = vc, n.truncate = yc, n.unescape = bc, n.uniqueId = Gc, n.upperCase = zd, n.upperFirst = Kd, n.each = uu, n.eachRight = su, n.first = pa, Rc(n, function() {
                            var e = {};
                            return lr(n, function(t, r) {
                                dl.call(n.prototype, r) || (e[r] = t)
                            }), e
                        }(), {
                            chain: !1
                        }), n.VERSION = "4.17.20", u(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(e) {
                            n[e].placeholder = n
                        }), u(["drop", "take"], function(e, t) {
                            v.prototype[e] = function(n) {
                                n = n === ne ? 1 : Vl(vs(n), 0);
                                var r = this.__filtered__ && !t ? new v(this) : this.clone();
                                return r.__filtered__ ? r.__takeCount__ = Bl(n, r.__takeCount__) : r.__views__.push({
                                    size: Bl(n, Me),
                                    type: e + (r.__dir__ < 0 ? "Right" : "")
                                }), r
                            }, v.prototype[e + "Right"] = function(t) {
                                return this.reverse()[e](t).reverse()
                            }
                        }), u(["filter", "map", "takeWhile"], function(e, t) {
                            var n = t + 1,
                                r = n == Ae || 3 == n;
                            v.prototype[e] = function(e) {
                                var t = this.clone();
                                return t.__iteratees__.push({
                                    iteratee: gi(e, 3),
                                    type: n
                                }), t.__filtered__ = t.__filtered__ || r, t
                            }
                        }), u(["head", "last"], function(e, t) {
                            var n = "take" + (t ? "Right" : "");
                            v.prototype[e] = function() {
                                return this[n](1).value()[0]
                            }
                        }), u(["initial", "tail"], function(e, t) {
                            var n = "drop" + (t ? "" : "Right");
                            v.prototype[e] = function() {
                                return this.__filtered__ ? new v(this) : this[n](1)
                            }
                        }), v.prototype.compact = function() {
                            return this.filter(Sc)
                        }, v.prototype.find = function(e) {
                            return this.filter(e).head()
                        }, v.prototype.findLast = function(e) {
                            return this.reverse().find(e)
                        }, v.prototype.invokeMap = Qr(function(e, t) {
                            return "function" == typeof e ? new v(this) : this.map(function(n) {
                                return wr(n, e, t)
                            })
                        }), v.prototype.reject = function(e) {
                            return this.filter(Au(gi(e)))
                        }, v.prototype.slice = function(e, t) {
                            e = vs(e);
                            var n = this;
                            return n.__filtered__ && (e > 0 || t < 0) ? new v(n) : (e < 0 ? n = n.takeRight(-e) : e && (n = n.drop(e)), t !== ne && (t = vs(t), n = t < 0 ? n.dropRight(-t) : n.take(t - e)), n)
                        }, v.prototype.takeRightWhile = function(e) {
                            return this.reverse().takeWhile(e).reverse()
                        }, v.prototype.toArray = function() {
                            return this.take(Me)
                        }, lr(v.prototype, function(e, t) {
                            var r = /^(?:filter|find|map|reject)|While$/.test(t),
                                i = /^(?:head|last)$/.test(t),
                                a = n[i ? "take" + ("last" == t ? "Right" : "") : t],
                                u = i || /^find/.test(t);
                            a && (n.prototype[t] = function() {
                                var t = this.__wrapped__,
                                    s = i ? [1] : arguments,
                                    c = t instanceof v,
                                    l = s[0],
                                    f = c || pd(t),
                                    d = function(e) {
                                        var t = a.apply(n, h([e], s));
                                        return i && p ? t[0] : t
                                    };
                                f && r && "function" == typeof l && 1 != l.length && (c = f = !1);
                                var p = this.__chain__,
                                    _ = !!this.__actions__.length,
                                    m = u && !p,
                                    g = c && !_;
                                if (!u && f) {
                                    t = g ? t : new v(this);
                                    var y = e.apply(t, s);
                                    return y.__actions__.push({
                                        func: qa,
                                        args: [d],
                                        thisArg: ne
                                    }), new o(y, p)
                                }
                                return m && g ? e.apply(this, s) : (y = this.thru(d), m ? i ? y.value()[0] : y.value() : y)
                            })
                        }), u(["pop", "push", "shift", "sort", "splice", "unshift"], function(e) {
                            var t = ul[e],
                                r = /^(?:push|sort|unshift)$/.test(e) ? "tap" : "thru",
                                o = /^(?:pop|shift)$/.test(e);
                            n.prototype[e] = function() {
                                var e = arguments;
                                if (o && !this.__chain__) {
                                    var n = this.value();
                                    return t.apply(pd(n) ? n : [], e)
                                }
                                return this[r](function(n) {
                                    return t.apply(pd(n) ? n : [], e)
                                })
                            }
                        }), lr(v.prototype, function(e, t) {
                            var r = n[t];
                            if (r) {
                                var o = r.name + "";
                                dl.call(ef, o) || (ef[o] = []), ef[o].push({
                                    name: t,
                                    func: r
                                })
                            }
                        }), ef[qo(ne, _e).name] = [{
                            name: "wrapper",
                            func: ne
                        }], v.prototype.clone = O, v.prototype.reverse = X, v.prototype.value = Q, n.prototype.at = Kf, n.prototype.chain = Xa, n.prototype.commit = Za, n.prototype.next = $a, n.prototype.plant = Qa, n.prototype.reverse = eu, n.prototype.toJSON = n.prototype.valueOf = n.prototype.value = tu, n.prototype.first = n.prototype.head, Al && (n.prototype[Al] = Ja), n
                    }();
                Rn._ = Kn, (o = function() {
                    return Kn
                }.call(t, n, t, r)) !== ne && (r.exports = o)
            }).call(this)
        }).call(t, n(20), n(62)(e))
    },
    500: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = [{
            version: "1.7.1",
            title: {
                en: "Welcome to the new Speaking Game on eJOY",
                vi: "\u0110\xe3 c\xf3 Speaking Game tr\xean eJOY"
            },
            infos: {
                en: ["We've added Speaking games to help you practice speaking better.", "Make sure your microphone is working.", "Please allow eJOY to use your microphone.", "You can choose to play with or without Speaking games.", "You can choose to speak a sentence or just your new word."],
                vi: ["T\u1eeb gi\u1edd b\u1ea1n \u0111\xe3 c\xf3 th\u1ec3 luy\u1ec7n N\xf3i ti\u1ebfng Anh h\xe0ng ng\xe0y v\u1edbi eJOY", "H\xe3y chu\u1ea9n b\u1ecb mic k\u1ebft n\u1ed1i v\u1edbi m\xe1y t\xednh s\u1eb5n s\xe0ng.", "Vui l\xf2ng cho ph\xe9p eJOY s\u1eed d\u1ee5ng mic tr\xean m\xe1y c\u1ee7a b\u1ea1n.", "B\u1ea1n c\xf3 th\u1ec3 ch\u1ecdn ch\u1ebf \u0111\u1ed9 luy\u1ec7n t\u1eadp c\xf3 k\xe8m luy\u1ec7n n\xf3i ho\u1eb7c kh\xf4ng.", "B\u1ea1n c\xf3 th\u1ec3 l\u1ef1a ch\u1ecdn luy\u1ec7n n\xf3i c\u1ea3 c\xe2u ho\u1eb7c ch\u1ec9 ph\xe1t \xe2m t\u1eeb m\u1edbi."]
            }
        }];
        t.default = {
            infos: r
        }, e.exports = t.default
    },
    501: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n(502);
        t.default = {
            coverImages: r.coverImages,
            coverObj: r.coverObj
        }, e.exports = t.default
    },
    502: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.coverObj = t.coverImages = void 0;
        var r = n(5),
            o = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(r),
            i = t.coverImages = [{
                id: "cover0",
                name: "Ejoy Cover",
                image: "img/home/wordbook/cover/missing_cover.jpg"
            }, {
                id: "cover1",
                name: "cover Go 1",
                image: "img/home/wordbook/cover/cover1.jpg"
            }, {
                id: "cover2",
                name: "cover Go 2",
                image: "img/home/wordbook/cover/cover2.jpg"
            }, {
                id: "cover3",
                name: "cover Go 3",
                image: "img/home/wordbook/cover/cover3.jpg"
            }, {
                id: "cover4",
                name: "cover Go 4",
                image: "img/home/wordbook/cover/cover4.jpg"
            }, {
                id: "cover5",
                name: "cover Go 5",
                image: "img/home/wordbook/cover/cover5.jpg"
            }, {
                id: "cover6",
                name: "Education",
                image: "img/home/wordbook/cover/education.jpg"
            }, {
                id: "cover7",
                name: "Entertainment",
                image: "img/home/wordbook/cover/entertainment.jpg"
            }, {
                id: "cover8",
                name: "Art & Culture",
                image: "img/home/wordbook/cover/artCulture.jpg"
            }, {
                id: "cover9",
                name: "Travel & Events",
                image: "img/home/wordbook/cover/travelEvents.jpg"
            }, {
                id: "cover10",
                name: "Kids' movies",
                image: "img/home/wordbook/cover/kidsMovies.jpg"
            }, {
                id: "cover11",
                name: "English skills",
                image: "img/home/wordbook/cover/englishSkills.jpg"
            }, {
                id: "cover12",
                name: "Music Videos",
                image: "img/home/wordbook/cover/musicVideos.jpg"
            }, {
                id: "cover13",
                name: "Health",
                image: "img/home/wordbook/cover/health.jpg"
            }, {
                id: "cover14",
                name: "Movies",
                image: "img/home/wordbook/cover/movies.jpg"
            }, {
                id: "cover15",
                name: "Nature",
                image: "img/home/wordbook/cover/nature.jpg"
            }, {
                id: "cover16",
                name: "News & Politics",
                image: "img/home/wordbook/cover/newsPolitics.jpg"
            }, {
                id: "cover17",
                name: "Science & Technology",
                image: "img/home/wordbook/cover/scienceTechnology.jpg"
            }, {
                id: "cover18",
                name: "Sports",
                image: "img/home/wordbook/cover/sports.jpg"
            }, {
                id: "cover19",
                name: "Test preparation",
                image: "img/home/wordbook/cover/testPreparation.jpg"
            }, {
                id: "cover20",
                name: "TV Shows",
                image: "img/home/wordbook/cover/tvShows.jpg"
            }, {
                id: "cover21",
                name: "Food & Drink",
                image: "img/home/wordbook/cover/foodDrink.jpg"
            }, {
                id: "cover22",
                name: "Business & Finance",
                image: "img/home/wordbook/cover/businessFinance.jpg"
            }, {
                id: "default_cover",
                name: "cover Go 0",
                image: "img/home/wordbook/cover/default_cover.jpg"
            }];
        t.coverObj = o.default.keyBy(i, function(e) {
            return e.id
        })
    },
    503: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n(67),
            o = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(r),
            i = {
                type1: "16px",
                type2: "22px",
                type3: "28px",
                type4: "32px",
                type5: "38px",
                type6: "48px"
            },
            a = {
                type1: {
                    color: "white",
                    background: "transparent"
                },
                type2: {
                    color: "white",
                    background: "rgba(17, 17, 17, 0.7)"
                },
                type3: {
                    color: "#FFCC00",
                    background: "rgba(17, 17, 17, 0.7)"
                },
                type4: {
                    color: "#111111",
                    background: "transparent"
                }
            },
            u = {
                type1: {
                    color: "white",
                    background: "transparent"
                },
                type2: {
                    color: "white",
                    background: "rgba(17, 17, 17, 0.7)"
                },
                type3: {
                    color: "#FFCC00",
                    background: "rgba(17, 17, 17, 0.7)"
                },
                type4: {
                    color: "#00ff44",
                    background: "transparent"
                }
            },
            s = {
                type1: {
                    color: "white",
                    background: "transparent"
                },
                type2: {
                    color: "white",
                    background: "rgba(17, 17, 17, 0.7)"
                },
                type3: {
                    color: "#FFCC00",
                    background: "rgba(17, 17, 17, 0.7)"
                },
                type4: {
                    color: "#00ff44",
                    background: "transparent"
                },
                type5: {
                    color: "#0CB1C7",
                    background: "rgba(67, 65, 65, 0.7)"
                },
                type6: {
                    color: "#161616",
                    background: "rgba(17, 17, 17, 0.7)"
                }
            },
            c = (0, o.default)(u),
            l = (0, o.default)(s),
            f = (0, o.default)(a),
            d = {
                fontSizeMainSub: i.type3,
                fontTypeMainSub: l[2],
                fontSizeAutoTransSub: i.type1,
                fontTypeAutoTransSub: l[4]
            };
        t.default = {
            fontTypeTextBot: u,
            keyFontTypesTextBot: c,
            keyFontTypesSubtitle: l,
            fontTypeSubtitle: s,
            fontSize: i,
            fontType: a,
            keyFontTypes: f,
            initialStyleSubtitle: d
        }, e.exports = t.default
    },
    504: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = [.25, .5, .75, 1, 1.25, 1.5, 1.75, 2],
            o = [.25, .5, .75, 1, 1.25, 1.5, 1.75, 2],
            i = [0, 1, 2, 3, 4, 5, 6, 7, 8, 10];
        t.default = {
            preferredSpeed: r,
            playBackSpeed: o,
            autoPauseTime: i,
            autoPauseTimeDefault: 3
        }, e.exports = t.default
    },
    505: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = [{
            name: "Essential",
            data: [{
                name: ["A"],
                isIcon: !1,
                order: 2,
                alias: "prev_time"
            }, {
                name: ["D"],
                isIcon: !1,
                order: 5,
                alias: "next_time"
            }, {
                name: ["C"],
                isIcon: !1,
                order: 4,
                alias: "Turn_on_off_core_ui_control"
            }, {
                name: ["Q/SPACE"],
                isIcon: !1,
                order: 1,
                alias: "play_pause"
            }, {
                name: ["I"],
                isIcon: !1,
                order: 12,
                alias: "on_off_auto_pronounce"
            }, {
                name: ["V"],
                isIcon: !1,
                order: 9,
                alias: "on_off_POS"
            }, {
                name: ["->"],
                isIcon: !1,
                order: 11,
                alias: "arow_next_10s"
            }, {
                name: ["<-"],
                isIcon: !1,
                order: 8,
                alias: "arow_prev_10s"
            }, {
                name: ["M"],
                isIcon: !1,
                order: 10,
                alias: "mute"
            }, {
                name: ["Arrow Up"],
                isIcon: !1,
                order: 3,
                alias: "arrow_top_up_sound"
            }, {
                name: ["Arrow Down"],
                isIcon: !1,
                order: 6,
                alias: "arrow_top_down_sound"
            }, {
                name: ["F"],
                isIcon: !1,
                order: 7,
                alias: "full_screen"
            }]
        }, {
            name: "Subtitle",
            data: [{
                name: ["K"],
                isIcon: !1,
                order: 4,
                alias: "Turn_on_off_site_bar_sub"
            }, {
                name: ["L"],
                isIcon: !1,
                order: 1,
                alias: "Turn_in_out_main_sub"
            }, {
                name: ["Alt", "_plus", "T"],
                isIcon: !1,
                order: 3,
                alias: "translate_full_sub"
            }, {
                name: [">"],
                isIcon: !1,
                order: 2,
                alias: "select_sub_from_left"
            }, {
                name: ["O"],
                isIcon: !1,
                order: 7,
                alias: "open_trans_sub"
            }, {
                name: ["Alt", "_plus", "A"],
                isIcon: !1,
                order: 6,
                alias: "save_remove_bookmark"
            }, {
                name: ["Alt", "_plus", "C"],
                isIcon: !1,
                order: 9,
                alias: "copy_sub"
            }, {
                name: ["Shift", "_plus", "T"],
                isIcon: !1,
                order: 12,
                alias: "save_phrase_book"
            }, {
                name: ["<"],
                isIcon: !1,
                order: 5,
                alias: "select_sub_from_right"
            }, {
                name: ["T"],
                isIcon: !1,
                order: 13,
                alias: "Reveal_sub_bottom"
            }, {
                name: ["W"],
                isIcon: !1,
                order: 10,
                alias: "Reveal_sub_top"
            }, {
                name: ["N"],
                isIcon: !1,
                order: 8,
                alias: "Reveal_sub_both"
            }, {
                name: ["Alt", "_plus", "9"],
                isIcon: !1,
                order: 11,
                alias: "Turn_on_off_blur_first_sub"
            }, {
                name: ["Alt", "_plus", "8"],
                isIcon: !1,
                order: 14,
                alias: "Turn_on_off_blur_second_sub"
            }]
        }, {
            name: "listening_title_short_cut",
            data: [{
                name: ["R"],
                isIcon: !1,
                order: 3,
                alias: "toggle_playback_rate_favourite"
            }, {
                name: ["P"],
                isIcon: !1,
                order: 4,
                alias: "Turn_on_off_auto_pause"
            }, {
                name: ["S/B"],
                isIcon: !1,
                order: 1,
                alias: "replay_sub"
            }, {
                name: ["1"],
                isIcon: !1,
                order: 2,
                alias: "playback_rate_add_0_1"
            }, {
                name: ["2"],
                isIcon: !1,
                order: 5,
                alias: "playback_rate_minus_0_1"
            }]
        }];
        t.default = {
            shotcutKeys: r
        }, e.exports = t.default
    },
    506: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n(131),
            o = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(r),
            i = {
                both_lang_blur: "both_lang_blur",
                target_lang_blur: "target_lang_blur",
                native_lang_blur: "native_lang_blur",
                none: "none"
            },
            a = (0, o.default)(i),
            u = i.none,
            s = function(e, t, n) {
                return e === t ? i.none : e === i.both_lang_blur ? n : e === i.none ? t : i.both_lang_blur
            },
            c = {
                both_lang: "both_lang",
                target_lang: "target_lang",
                native_lang: "native_lang",
                none: "none"
            },
            l = (0, o.default)(c),
            f = c.both_lang,
            d = function(e, t, n) {
                return e === t ? c.none : e === c.both_lang ? n : e === c.none ? t : c.both_lang
            },
            p = function(e, t, n) {
                return e === t ? c.none : e === c.both_lang ? n : c.none
            },
            h = {
                romaji: "romaji",
                hiragana: "hiragana",
                none: "none"
            },
            _ = {
                show: "show_phonetic",
                none: "none"
            },
            m = (0, o.default)(h),
            g = (0, o.default)(_),
            v = h.romaji,
            y = {
                in_video: "in_video",
                out_video: "out_video"
            },
            b = (0, o.default)(y),
            E = y.in_video,
            w = [{
                name: "target_sub",
                tooltipId: "target_sub_title_tooltip",
                index: 0
            }, {
                name: "native_sub",
                tooltipId: "native_sub_title_tooltip",
                index: 1
            }, {
                name: "transliterate_top",
                tooltipId: "phonetic_title_tooltip",
                index: 2
            }, {
                name: "transliterate_bot",
                tooltipId: "quick_loopup_title_tooltip",
                index: 3
            }];
        t.default = {
            blurSubtitle: i,
            blurSubtitleData: a,
            blurSubtitleDefault: u,
            getToggleBlurSub: s,
            subtitle: c,
            subtitleData: l,
            subtitleDefault: f,
            getToggleSub: d,
            hiddenSub: p,
            transliteration: h,
            transliterationData: m,
            transliterationDataSimple: g,
            transliterationDefault: v,
            subPosition: y,
            subPositionData: b,
            subPositionDefault: E,
            dataSubSettings: w
        }, e.exports = t.default
    },
    507: function(e, t, n) {
        n(508), e.exports = n(15).Object.values
    },
    508: function(e, t, n) {
        var r = n(28),
            o = n(318)(!1);
        r(r.S, "Object", {
            values: function(e) {
                return o(e)
            }
        })
    },
    509: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n(131),
            o = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(r),
            i = {
                none: "do_nothing",
                show_definition: "show_definition",
                pronounce: "pronounce",
                show_definition_and_pronounce: "show_definition_and_pronounce",
                save_word: "save_word"
            },
            a = (0, o.default)(i),
            u = i.clickData,
            s = i.save_word;
        t.default = {
            clickData: a,
            rightClickDefault: s,
            leftClickDefault: u,
            clickConfig: i
        }, e.exports = t.default
    },
    510: function(e, t, n) {
        (function(e, t) {
            ! function(e, n) {
                "use strict";

                function r(e) {
                    "function" != typeof e && (e = new Function("" + e));
                    for (var t = new Array(arguments.length - 1), n = 0; n < t.length; n++) t[n] = arguments[n + 1];
                    var r = {
                        callback: e,
                        args: t
                    };
                    return c[s] = r, u(s), s++
                }

                function o(e) {
                    delete c[e]
                }

                function i(e) {
                    var t = e.callback,
                        r = e.args;
                    switch (r.length) {
                        case 0:
                            t();
                            break;
                        case 1:
                            t(r[0]);
                            break;
                        case 2:
                            t(r[0], r[1]);
                            break;
                        case 3:
                            t(r[0], r[1], r[2]);
                            break;
                        default:
                            t.apply(n, r)
                    }
                }

                function a(e) {
                    if (l) setTimeout(a, 0, e);
                    else {
                        var t = c[e];
                        if (t) {
                            l = !0;
                            try {
                                i(t)
                            } finally {
                                o(e), l = !1
                            }
                        }
                    }
                }
                if (!e.setImmediate) {
                    var u, s = 1,
                        c = {},
                        l = !1,
                        f = e.document,
                        d = Object.getPrototypeOf && Object.getPrototypeOf(e);
                    d = d && d.setTimeout ? d : e, "[object process]" === {}.toString.call(e.process) ? function() {
                        u = function(e) {
                            t.nextTick(function() {
                                a(e)
                            })
                        }
                    }() : function() {
                        if (e.postMessage && !e.importScripts) {
                            var t = !0,
                                n = e.onmessage;
                            return e.onmessage = function() {
                                t = !1
                            }, e.postMessage("", "*"), e.onmessage = n, t
                        }
                    }() ? function() {
                        var t = "setImmediate$" + Math.random() + "$",
                            n = function(n) {
                                n.source === e && "string" == typeof n.data && 0 === n.data.indexOf(t) && a(+n.data.slice(t.length))
                            };
                        e.addEventListener ? e.addEventListener("message", n, !1) : e.attachEvent("onmessage", n), u = function(n) {
                            e.postMessage(t + n, "*")
                        }
                    }() : e.MessageChannel ? function() {
                        var e = new MessageChannel;
                        e.port1.onmessage = function(e) {
                            a(e.data)
                        }, u = function(t) {
                            e.port2.postMessage(t)
                        }
                    }() : f && "onreadystatechange" in f.createElement("script") ? function() {
                        var e = f.documentElement;
                        u = function(t) {
                            var n = f.createElement("script");
                            n.onreadystatechange = function() {
                                a(t), n.onreadystatechange = null, e.removeChild(n), n = null
                            }, e.appendChild(n)
                        }
                    }() : function() {
                        u = function(e) {
                            setTimeout(a, 0, e)
                        }
                    }(), d.setImmediate = r, d.clearImmediate = o
                }
            }("undefined" == typeof self ? void 0 === e ? this : e : self)
        }).call(t, n(20), n(81))
    },
    511: function(e, t, n) {
        var r = n(15),
            o = r.JSON || (r.JSON = {
                stringify: JSON.stringify
            });
        e.exports = function(e) {
            return o.stringify.apply(o, arguments)
        }
    },
    52: function(e, t) {
        e.exports = {}
    },
    53: function(e, t, n) {
        var r = n(104);
        e.exports = function(e, t, n) {
            if (r(e), void 0 === t) return e;
            switch (n) {
                case 1:
                    return function(n) {
                        return e.call(t, n)
                    };
                case 2:
                    return function(n, r) {
                        return e.call(t, n, r)
                    };
                case 3:
                    return function(n, r, o) {
                        return e.call(t, n, r, o)
                    }
            }
            return function() {
                return e.apply(t, arguments)
            }
        }
    },
    54: function(e, t, n) {
        e.exports = {
            default: n(293),
            __esModule: !0
        }
    },
    55: function(e, t, n) {
        "use strict";
        t.__esModule = !0;
        var r = n(151),
            o = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(r);
        t.default = function(e) {
            if (Array.isArray(e)) {
                for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
                return n
            }
            return (0, o.default)(e)
        }
    },
    6: function(e, t, n) {
        "use strict";
        t.__esModule = !0;
        var r = n(54),
            o = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(r);
        t.default = o.default || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }
    },
    60: function(e, t) {
        e.exports = function(e, t) {
            return {
                enumerable: !(1 & e),
                configurable: !(2 & e),
                writable: !(4 & e),
                value: t
            }
        }
    },
    61: function(e, t) {
        var n = {}.toString;
        e.exports = function(e) {
            return n.call(e).slice(8, -1)
        }
    },
    62: function(e, t) {
        e.exports = function(e) {
            return e.webpackPolyfill || (e.deprecate = function() {}, e.paths = [], e.children || (e.children = []), Object.defineProperty(e, "loaded", {
                enumerable: !0,
                get: function() {
                    return e.l
                }
            }), Object.defineProperty(e, "id", {
                enumerable: !0,
                get: function() {
                    return e.i
                }
            }), e.webpackPolyfill = 1), e
        }
    },
    63: function(e, t, n) {
        var r = n(89);
        e.exports = function(e) {
            return Object(r(e))
        }
    },
    65: function(e, t) {
        t.f = {}.propertyIsEnumerable
    },
    66: function(e, t, n) {
        "use strict";
        var r = n(214)(!0);
        n(127)(String, "String", function(e) {
            this._t = String(e), this._i = 0
        }, function() {
            var e, t = this._t,
                n = this._i;
            return n >= t.length ? {
                value: void 0,
                done: !0
            } : (e = r(t, n), this._i += e.length, {
                value: e,
                done: !1
            })
        })
    },
    67: function(e, t, n) {
        e.exports = {
            default: n(296),
            __esModule: !0
        }
    },
    7: function(e, t, n) {
        "use strict";
        t.__esModule = !0, t.default = function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
    },
    72: function(e, t) {
        var n = 0,
            r = Math.random();
        e.exports = function(e) {
            return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++n + r).toString(36))
        }
    },
    73: function(e, t, n) {
        var r = n(31).f,
            o = n(41),
            i = n(23)("toStringTag");
        e.exports = function(e, t, n) {
            e && !o(e = n ? e : e.prototype, i) && r(e, i, {
                configurable: !0,
                value: t
            })
        }
    },
    80: function(e, t) {
        e.exports = !0
    },
    81: function(e, t) {
        function n() {
            throw new Error("setTimeout has not been defined")
        }

        function r() {
            throw new Error("clearTimeout has not been defined")
        }

        function o(e) {
            if (l === setTimeout) return setTimeout(e, 0);
            if ((l === n || !l) && setTimeout) return l = setTimeout, setTimeout(e, 0);
            try {
                return l(e, 0)
            } catch (t) {
                try {
                    return l.call(null, e, 0)
                } catch (t) {
                    return l.call(this, e, 0)
                }
            }
        }

        function i(e) {
            if (f === clearTimeout) return clearTimeout(e);
            if ((f === r || !f) && clearTimeout) return f = clearTimeout, clearTimeout(e);
            try {
                return f(e)
            } catch (t) {
                try {
                    return f.call(null, e)
                } catch (t) {
                    return f.call(this, e)
                }
            }
        }

        function a() {
            _ && p && (_ = !1, p.length ? h = p.concat(h) : m = -1, h.length && u())
        }

        function u() {
            if (!_) {
                var e = o(a);
                _ = !0;
                for (var t = h.length; t;) {
                    for (p = h, h = []; ++m < t;) p && p[m].run();
                    m = -1, t = h.length
                }
                p = null, _ = !1, i(e)
            }
        }

        function s(e, t) {
            this.fun = e, this.array = t
        }

        function c() {}
        var l, f, d = e.exports = {};
        ! function() {
            try {
                l = "function" == typeof setTimeout ? setTimeout : n
            } catch (e) {
                l = n
            }
            try {
                f = "function" == typeof clearTimeout ? clearTimeout : r
            } catch (e) {
                f = r
            }
        }();
        var p, h = [],
            _ = !1,
            m = -1;
        d.nextTick = function(e) {
            var t = new Array(arguments.length - 1);
            if (arguments.length > 1)
                for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
            h.push(new s(e, t)), 1 !== h.length || _ || o(u)
        }, s.prototype.run = function() {
            this.fun.apply(null, this.array)
        }, d.title = "browser", d.browser = !0, d.env = {}, d.argv = [], d.version = "", d.versions = {}, d.on = c, d.addListener = c, d.once = c, d.off = c, d.removeListener = c, d.removeAllListeners = c, d.emit = c, d.prependListener = c, d.prependOnceListener = c, d.listeners = function(e) {
            return []
        }, d.binding = function(e) {
            throw new Error("process.binding is not supported")
        }, d.cwd = function() {
            return "/"
        }, d.chdir = function(e) {
            throw new Error("process.chdir is not supported")
        }, d.umask = function() {
            return 0
        }
    },
    84: function(e, t, n) {
        e.exports = {
            default: n(290),
            __esModule: !0
        }
    },
    86: function(e, t, n) {
        n(216);
        for (var r = n(25), o = n(38), i = n(52), a = n(23)("toStringTag"), u = ["NodeList", "DOMTokenList", "MediaList", "StyleSheetList", "CSSRuleList"], s = 0; s < 5; s++) {
            var c = u[s],
                l = r[c],
                f = l && l.prototype;
            f && !f[a] && o(f, a, c), i[c] = i.Array
        }
    },
    89: function(e, t) {
        e.exports = function(e) {
            if (void 0 == e) throw TypeError("Can't call method on  " + e);
            return e
        }
    },
    9: function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = n(6),
            i = r(o),
            a = n(42),
            u = r(a),
            s = n(305),
            c = r(s),
            l = n(493),
            f = r(l),
            d = n(494),
            p = r(d),
            h = n(495),
            _ = r(h),
            m = n(496),
            g = r(m),
            v = n(497),
            y = r(v),
            b = n(498),
            E = r(b),
            w = n(499),
            T = r(w),
            x = n(500),
            I = r(x),
            S = n(501),
            O = r(S),
            A = n(503),
            k = r(A),
            R = n(504),
            C = r(R),
            j = n(505),
            P = r(j),
            M = n(506),
            N = r(M),
            F = n(509),
            L = r(F);
        Object({
            NODE_ENV: "production"
        }).BLUEBIRD_W_FORGOTTEN_RETURN = 0, n(472).config({
            warnings: {
                wForgottenReturn: !1
            }
        }), t.default = (0, i.default)({}, k.default, C.default, P.default, N.default, L.default, {
            subtitleLookup: _.default,
            config: u.default,
            analyticRules: g.default,
            langName: p.default,
            lang: c.default,
            langFrom: f.default,
            quotes: T.default,
            images: O.default,
            displayLang: y.default,
            updateInfosSpeaking: I.default,
            langsWithCountry: E.default
        }), e.exports = t.default
    },
    91: function(e, t) {
        var n = Math.ceil,
            r = Math.floor;
        e.exports = function(e) {
            return isNaN(e = +e) ? 0 : (e > 0 ? r : n)(e)
        }
    },
    92: function(e, t, n) {
        var r = n(94)("keys"),
            o = n(72);
        e.exports = function(e) {
            return r[e] || (r[e] = o(e))
        }
    },
    94: function(e, t, n) {
        var r = n(25),
            o = r["__core-js_shared__"] || (r["__core-js_shared__"] = {});
        e.exports = function(e) {
            return o[e] || (o[e] = {})
        }
    },
    95: function(e, t) {
        e.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
    },
    96: function(e, t, n) {
        var r = n(47),
            o = n(25).document,
            i = r(o) && r(o.createElement);
        e.exports = function(e) {
            return i ? o.createElement(e) : {}
        }
    },
    99: function(e, t, n) {
        var r = n(47);
        e.exports = function(e, t) {
            if (!r(e)) return e;
            var n, o;
            if (t && "function" == typeof(n = e.toString) && !r(o = n.call(e))) return o;
            if ("function" == typeof(n = e.valueOf) && !r(o = n.call(e))) return o;
            if (!t && "function" == typeof(n = e.toString) && !r(o = n.call(e))) return o;
            throw TypeError("Can't convert object to primitive value")
        }
    }
});