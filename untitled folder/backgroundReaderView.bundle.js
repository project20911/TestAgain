! function(t) {
    function e(r) {
        if (n[r]) return n[r].exports;
        var o = n[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return t[r].call(o.exports, o, o.exports, e), o.l = !0, o.exports
    }
    var n = {};
    e.m = t, e.c = n, e.d = function(t, n, r) {
        e.o(t, n) || Object.defineProperty(t, n, {
            configurable: !1,
            enumerable: !0,
            get: r
        })
    }, e.n = function(t) {
        var n = t && t.__esModule ? function() {
            return t.default
        } : function() {
            return t
        };
        return e.d(n, "a", n), n
    }, e.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, e.p = "", e(e.s = 3026)
}({
    100: function(t, e, n) {
        var r = n(91),
            o = Math.min;
        t.exports = function(t) {
            return t > 0 ? o(r(t), 9007199254740991) : 0
        }
    },
    101: function(t, e, n) {
        var r = n(32),
            o = n(203),
            i = n(95),
            a = n(92)("IE_PROTO"),
            c = function() {},
            u = function() {
                var t, e = n(96)("iframe"),
                    r = i.length;
                for (e.style.display = "none", n(142).appendChild(e), e.src = "javascript:", t = e.contentWindow.document, t.open(), t.write("<script>document.F=Object<\/script>"), t.close(), u = t.F; r--;) delete u.prototype[i[r]];
                return u()
            };
        t.exports = Object.create || function(t, e) {
            var n;
            return null !== t ? (c.prototype = r(t), n = new c, c.prototype = null, n[a] = t) : n = u(), void 0 === e ? n : o(n, e)
        }
    },
    104: function(t, e) {
        t.exports = function(t) {
            if ("function" != typeof t) throw TypeError(t + " is not a function!");
            return t
        }
    },
    105: function(t, e) {
        e.f = Object.getOwnPropertySymbols
    },
    108: function(t, e, n) {
        e.f = n(23)
    },
    111: function(t, e, n) {
        var r = n(25),
            o = n(15),
            i = n(80),
            a = n(108),
            c = n(31).f;
        t.exports = function(t) {
            var e = o.Symbol || (o.Symbol = i ? {} : r.Symbol || {});
            "_" == t.charAt(0) || t in e || c(e, t, {
                value: a.f(t)
            })
        }
    },
    123: function(t, e, n) {
        var r = n(61),
            o = n(23)("toStringTag"),
            i = "Arguments" == r(function() {
                return arguments
            }()),
            a = function(t, e) {
                try {
                    return t[e]
                } catch (t) {}
            };
        t.exports = function(t) {
            var e, n, c;
            return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof(n = a(e = Object(t), o)) ? n : i ? r(e) : "Object" == (c = r(e)) && "function" == typeof e.callee ? "Arguments" : c
        }
    },
    124: function(t, e, n) {
        var r = n(123),
            o = n(23)("iterator"),
            i = n(52);
        t.exports = n(15).getIteratorMethod = function(t) {
            if (void 0 != t) return t[o] || t["@@iterator"] || i[r(t)]
        }
    },
    127: function(t, e, n) {
        "use strict";
        var r = n(80),
            o = n(28),
            i = n(138),
            a = n(38),
            c = n(41),
            u = n(52),
            s = n(215),
            f = n(73),
            l = n(144),
            d = n(23)("iterator"),
            h = !([].keys && "next" in [].keys()),
            p = function() {
                return this
            };
        t.exports = function(t, e, n, g, m, v, y) {
            s(n, e, g);
            var b, w, x, S = function(t) {
                    if (!h && t in k) return k[t];
                    switch (t) {
                        case "keys":
                        case "values":
                            return function() {
                                return new n(this, t)
                            }
                    }
                    return function() {
                        return new n(this, t)
                    }
                },
                O = e + " Iterator",
                _ = "values" == m,
                j = !1,
                k = t.prototype,
                C = k[d] || k["@@iterator"] || m && k[m],
                I = C || S(m),
                E = m ? _ ? S("entries") : I : void 0,
                M = "Array" == e ? k.entries || C : C;
            if (M && (x = l(M.call(new t))) !== Object.prototype && (f(x, O, !0), r || c(x, d) || a(x, d, p)), _ && C && "values" !== C.name && (j = !0, I = function() {
                    return C.call(this)
                }), r && !y || !h && !j && k[d] || a(k, d, I), u[e] = I, u[O] = p, m)
                if (b = {
                        values: _ ? I : S("values"),
                        keys: v ? I : S("keys"),
                        entries: E
                    }, y)
                    for (w in b) w in k || i(k, w, b[w]);
                else o(o.P + o.F * (h || j), e, b);
            return b
        }
    },
    128: function(t, e, n) {
        t.exports = {
            default: n(329),
            __esModule: !0
        }
    },
    1299: function(t, e, n) {
        "use strict";

        function r(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        var o = n(54),
            i = r(o),
            a = n(67),
            c = r(a);
        if (window.top !== window && (chrome = top.chrome), "undefined" == typeof config) {
            var u = {
                callbacks: [],
                onChanged: []
            };
            window.config = u, u.prefs = {
                embedded: !1,
                "font-size": 18,
                font: "sans-serif",
                width: 900,
                "line-height": 0,
                "reader-mode": !1,
                "tts-delay": 300,
                "tts-maxlength": 160,
                "tts-minlength": 60,
                "tts-separator": "\n!\n",
                "tts-scroll": "center",
                "mail-to": "email@example.com",
                "mail-max": 1500,
                "mail-ending": "\n\n--\nOriginal Page: [URL]",
                faqs: !0,
                version: null,
                guide: 3,
                "guide-timeout": 2e3,
                mode: localStorage.getItem("mode") || "light",
                "printing-button": "false" !== localStorage.getItem("printing-button"),
                "mail-button": localStorage.getItem("mail-button") && "false" !== localStorage.getItem("mail-button"),
                "save-button": localStorage.getItem("save-button") && "false" !== localStorage.getItem("save-button"),
                "fullscreen-button": "false" !== localStorage.getItem("fullscreen-button"),
                "speech-button": "false" !== localStorage.getItem("speech-button"),
                "images-button": "false" !== localStorage.getItem("images-button"),
                "highlight-button": "false" !== localStorage.getItem("highlight-button"),
                "design-mode-button": "false" !== localStorage.getItem("design-mode-button"),
                "show-images": "false" !== localStorage.getItem("show-images"),
                "navigate-buttons": "false" !== localStorage.getItem("navigate-buttons"),
                "top-css": localStorage.getItem("top-css") || "",
                "cache-highlights": !0,
                "highlights-count": 20,
                "highlights-keys": [],
                "highlights-objects": {},
                "user-action": [],
                "user-css": localStorage.getItem("user-css") || 'body {\n  padding-bottom: 64px;\n}\na:visited {\n  color: #d33bf0;\n}\na:link, a:link:hover, a:link:active {\n  color: #0095dd;\n}\na:link {\n  text-decoration: none;\n  font-weight: normal;\n}\npre {\n  white-space: pre-wrap;\n}\npre code {\n  background-color: #eff0f1;\n  color: #393318;\n  font-family: monospace;\n  display: block;\n  padding: 5px 10px;\n}\nbody[data-mode="dark"] pre code {\n  background-color: #585858;\n  color: #e8e8e8;\n}\n\n/* CSS for sans-serif fonts */\nbody[data-font=sans-serif] {}\n/* CSS for serif fonts */\nbody[data-font=serif] {}\n\n/* CSS for "sepia" theme */\nbody[data-mode=sepia] {\n}\n/* CSS for "light" theme */\nbody[data-mode=light] {}\n/* CSS for "dark" theme */\nbody[data-mode=dark] {}',
                "context-open-in-reader-view": !1,
                "context-open-in-reader-view-bg": !1,
                "context-switch-to-reader-view": !0,
                shortcuts: {
                    print: ["Ctrl/Command", "KeyP"],
                    email: ["Ctrl/Command", "Shift", "KeyE"],
                    save: ["Ctrl/Command", "KeyS"],
                    fullscreen: ["F9"],
                    "design-mode": ["Ctrl/Command", "Shift", "KeyR"],
                    speech: ["Ctrl/Command", "Shift", "KeyS"],
                    "speech-previous": ["Ctrl/Command", "Shift", "KeyA"],
                    "speech-next": ["Ctrl/Command", "Shift", "KeyD"],
                    "speech-play": ["Ctrl/Command", "Shift", "Space"],
                    images: ["Ctrl/Command", "Shift", "KeyI"],
                    highlight: ["Ctrl/Command", "Shift", "KeyH"],
                    "next-page": ["Ctrl/Command", "Shift", "ArrowRight"],
                    "previous-page": ["Ctrl/Command", "Shift", "ArrowLeft"]
                }
            }, chrome.storage.onChanged.addListener(function(t) {
                (0, c.default)(t).forEach(function(e) {
                    return u.prefs[e] = t[e].newValue
                }), u.onChanged.forEach(function(e) {
                    return e(t)
                })
            }), chrome.storage.local.get(u.prefs, function(t) {
                (0, i.default)(u.prefs, t), u.ready = !0, u.callbacks.forEach(function(t) {
                    return t()
                })
            }), u.load = function(t) {
                u.ready ? t() : u.callbacks.push(t)
            }
        }
    },
    135: function(t, e, n) {
        var r = n(61);
        t.exports = Object("z").propertyIsEnumerable(0) ? Object : function(t) {
            return "String" == r(t) ? t.split("") : Object(t)
        }
    },
    137: function(t, e, n) {
        t.exports = !n(33) && !n(46)(function() {
            return 7 != Object.defineProperty(n(96)("div"), "a", {
                get: function() {
                    return 7
                }
            }).a
        })
    },
    138: function(t, e, n) {
        t.exports = n(38)
    },
    139: function(t, e, n) {
        var r = n(41),
            o = n(35),
            i = n(202)(!1),
            a = n(92)("IE_PROTO");
        t.exports = function(t, e) {
            var n, c = o(t),
                u = 0,
                s = [];
            for (n in c) n != a && r(c, n) && s.push(n);
            for (; e.length > u;) r(c, n = e[u++]) && (~i(s, n) || s.push(n));
            return s
        }
    },
    140: function(t, e) {},
    142: function(t, e, n) {
        t.exports = n(25).document && document.documentElement
    },
    144: function(t, e, n) {
        var r = n(41),
            o = n(63),
            i = n(92)("IE_PROTO"),
            a = Object.prototype;
        t.exports = Object.getPrototypeOf || function(t) {
            return t = o(t), r(t, i) ? t[i] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? a : null
        }
    },
    15: function(t, e) {
        var n = t.exports = {
            version: "2.4.0"
        };
        "number" == typeof __e && (__e = n)
    },
    150: function(t, e, n) {
        var r = n(28),
            o = n(15),
            i = n(46);
        t.exports = function(t, e) {
            var n = (o.Object || {})[t] || Object[t],
                a = {};
            a[t] = e(n), r(r.S + r.F * i(function() {
                n(1)
            }), "Object", a)
        }
    },
    158: function(t, e, n) {
        var r = n(139),
            o = n(95).concat("length", "prototype");
        e.f = Object.getOwnPropertyNames || function(t) {
            return r(t, o)
        }
    },
    160: function(t, e, n) {
        "use strict";
        var r = n(25),
            o = n(41),
            i = n(33),
            a = n(28),
            c = n(138),
            u = n(195).KEY,
            s = n(46),
            f = n(94),
            l = n(73),
            d = n(72),
            h = n(23),
            p = n(108),
            g = n(111),
            m = n(283),
            v = n(284),
            y = n(251),
            b = n(32),
            w = n(35),
            x = n(99),
            S = n(60),
            O = n(101),
            _ = n(285),
            j = n(161),
            k = n(31),
            C = n(43),
            I = j.f,
            E = k.f,
            M = _.f,
            P = r.Symbol,
            L = r.JSON,
            R = L && L.stringify,
            A = h("_hidden"),
            U = h("toPrimitive"),
            T = {}.propertyIsEnumerable,
            N = f("symbol-registry"),
            F = f("symbols"),
            W = f("op-symbols"),
            K = Object.prototype,
            D = "function" == typeof P,
            V = r.QObject,
            q = !V || !V.prototype || !V.prototype.findChild,
            J = i && s(function() {
                return 7 != O(E({}, "a", {
                    get: function() {
                        return E(this, "a", {
                            value: 7
                        }).a
                    }
                })).a
            }) ? function(t, e, n) {
                var r = I(K, e);
                r && delete K[e], E(t, e, n), r && t !== K && E(K, e, r)
            } : E,
            B = function(t) {
                var e = F[t] = O(P.prototype);
                return e._k = t, e
            },
            z = D && "symbol" == typeof P.iterator ? function(t) {
                return "symbol" == typeof t
            } : function(t) {
                return t instanceof P
            },
            G = function(t, e, n) {
                return t === K && G(W, e, n), b(t), e = x(e, !0), b(n), o(F, e) ? (n.enumerable ? (o(t, A) && t[A][e] && (t[A][e] = !1), n = O(n, {
                    enumerable: S(0, !1)
                })) : (o(t, A) || E(t, A, S(1, {})), t[A][e] = !0), J(t, e, n)) : E(t, e, n)
            },
            Y = function(t, e) {
                b(t);
                for (var n, r = v(e = w(e)), o = 0, i = r.length; i > o;) G(t, n = r[o++], e[n]);
                return t
            },
            H = function(t, e) {
                return void 0 === e ? O(t) : Y(O(t), e)
            },
            Q = function(t) {
                var e = T.call(this, t = x(t, !0));
                return !(this === K && o(F, t) && !o(W, t)) && (!(e || !o(this, t) || !o(F, t) || o(this, A) && this[A][t]) || e)
            },
            X = function(t, e) {
                if (t = w(t), e = x(e, !0), t !== K || !o(F, e) || o(W, e)) {
                    var n = I(t, e);
                    return !n || !o(F, e) || o(t, A) && t[A][e] || (n.enumerable = !0), n
                }
            },
            Z = function(t) {
                for (var e, n = M(w(t)), r = [], i = 0; n.length > i;) o(F, e = n[i++]) || e == A || e == u || r.push(e);
                return r
            },
            $ = function(t) {
                for (var e, n = t === K, r = M(n ? W : w(t)), i = [], a = 0; r.length > a;) !o(F, e = r[a++]) || n && !o(K, e) || i.push(F[e]);
                return i
            };
        D || (P = function() {
            if (this instanceof P) throw TypeError("Symbol is not a constructor!");
            var t = d(arguments.length > 0 ? arguments[0] : void 0),
                e = function(n) {
                    this === K && e.call(W, n), o(this, A) && o(this[A], t) && (this[A][t] = !1), J(this, t, S(1, n))
                };
            return i && q && J(K, t, {
                configurable: !0,
                set: e
            }), B(t)
        }, c(P.prototype, "toString", function() {
            return this._k
        }), j.f = X, k.f = G, n(158).f = _.f = Z, n(65).f = Q, n(105).f = $, i && !n(80) && c(K, "propertyIsEnumerable", Q, !0), p.f = function(t) {
            return B(h(t))
        }), a(a.G + a.W + a.F * !D, {
            Symbol: P
        });
        for (var tt = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), et = 0; tt.length > et;) h(tt[et++]);
        for (var tt = C(h.store), et = 0; tt.length > et;) g(tt[et++]);
        a(a.S + a.F * !D, "Symbol", {
            for: function(t) {
                return o(N, t += "") ? N[t] : N[t] = P(t)
            },
            keyFor: function(t) {
                if (z(t)) return m(N, t);
                throw TypeError(t + " is not a symbol!")
            },
            useSetter: function() {
                q = !0
            },
            useSimple: function() {
                q = !1
            }
        }), a(a.S + a.F * !D, "Object", {
            create: H,
            defineProperty: G,
            defineProperties: Y,
            getOwnPropertyDescriptor: X,
            getOwnPropertyNames: Z,
            getOwnPropertySymbols: $
        }), L && a(a.S + a.F * (!D || s(function() {
            var t = P();
            return "[null]" != R([t]) || "{}" != R({
                a: t
            }) || "{}" != R(Object(t))
        })), "JSON", {
            stringify: function(t) {
                if (void 0 !== t && !z(t)) {
                    for (var e, n, r = [t], o = 1; arguments.length > o;) r.push(arguments[o++]);
                    return e = r[1], "function" == typeof e && (n = e), !n && y(e) || (e = function(t, e) {
                        if (n && (e = n.call(this, t, e)), !z(e)) return e
                    }), r[1] = e, R.apply(L, r)
                }
            }
        }), P.prototype[U] || n(38)(P.prototype, U, P.prototype.valueOf), l(P, "Symbol"), l(Math, "Math", !0), l(r.JSON, "JSON", !0)
    },
    161: function(t, e, n) {
        var r = n(65),
            o = n(60),
            i = n(35),
            a = n(99),
            c = n(41),
            u = n(137),
            s = Object.getOwnPropertyDescriptor;
        e.f = n(33) ? s : function(t, e) {
            if (t = i(t), e = a(e, !0), u) try {
                return s(t, e)
            } catch (t) {}
            if (c(t, e)) return o(!r.f.call(t, e), t[e])
        }
    },
    188: function(t, e) {
        t.exports = function(t, e) {
            return {
                value: e,
                done: !!t
            }
        }
    },
    195: function(t, e, n) {
        var r = n(72)("meta"),
            o = n(47),
            i = n(41),
            a = n(31).f,
            c = 0,
            u = Object.isExtensible || function() {
                return !0
            },
            s = !n(46)(function() {
                return u(Object.preventExtensions({}))
            }),
            f = function(t) {
                a(t, r, {
                    value: {
                        i: "O" + ++c,
                        w: {}
                    }
                })
            },
            l = function(t, e) {
                if (!o(t)) return "symbol" == typeof t ? t : ("string" == typeof t ? "S" : "P") + t;
                if (!i(t, r)) {
                    if (!u(t)) return "F";
                    if (!e) return "E";
                    f(t)
                }
                return t[r].i
            },
            d = function(t, e) {
                if (!i(t, r)) {
                    if (!u(t)) return !0;
                    if (!e) return !1;
                    f(t)
                }
                return t[r].w
            },
            h = function(t) {
                return s && p.NEED && u(t) && !i(t, r) && f(t), t
            },
            p = t.exports = {
                KEY: r,
                NEED: !1,
                fastKey: l,
                getWeak: d,
                onFreeze: h
            }
    },
    196: function(t, e, n) {
        var r = n(91),
            o = Math.max,
            i = Math.min;
        t.exports = function(t, e) {
            return t = r(t), t < 0 ? o(t + e, 0) : i(t, e)
        }
    },
    201: function(t, e, n) {
        "use strict";
        n.p = chrome.extension.getURL("/js/")
    },
    202: function(t, e, n) {
        var r = n(35),
            o = n(100),
            i = n(196);
        t.exports = function(t) {
            return function(e, n, a) {
                var c, u = r(e),
                    s = o(u.length),
                    f = i(a, s);
                if (t && n != n) {
                    for (; s > f;)
                        if ((c = u[f++]) != c) return !0
                } else
                    for (; s > f; f++)
                        if ((t || f in u) && u[f] === n) return t || f || 0;
                return !t && -1
            }
        }
    },
    203: function(t, e, n) {
        var r = n(31),
            o = n(32),
            i = n(43);
        t.exports = n(33) ? Object.defineProperties : function(t, e) {
            o(t);
            for (var n, a = i(e), c = a.length, u = 0; c > u;) r.f(t, n = a[u++], e[n]);
            return t
        }
    },
    214: function(t, e, n) {
        var r = n(91),
            o = n(89);
        t.exports = function(t) {
            return function(e, n) {
                var i, a, c = String(o(e)),
                    u = r(n),
                    s = c.length;
                return u < 0 || u >= s ? t ? "" : void 0 : (i = c.charCodeAt(u), i < 55296 || i > 56319 || u + 1 === s || (a = c.charCodeAt(u + 1)) < 56320 || a > 57343 ? t ? c.charAt(u) : i : t ? c.slice(u, u + 2) : a - 56320 + (i - 55296 << 10) + 65536)
            }
        }
    },
    215: function(t, e, n) {
        "use strict";
        var r = n(101),
            o = n(60),
            i = n(73),
            a = {};
        n(38)(a, n(23)("iterator"), function() {
            return this
        }), t.exports = function(t, e, n) {
            t.prototype = r(a, {
                next: o(1, n)
            }), i(t, e + " Iterator")
        }
    },
    216: function(t, e, n) {
        "use strict";
        var r = n(217),
            o = n(188),
            i = n(52),
            a = n(35);
        t.exports = n(127)(Array, "Array", function(t, e) {
            this._t = a(t), this._i = 0, this._k = e
        }, function() {
            var t = this._t,
                e = this._k,
                n = this._i++;
            return !t || n >= t.length ? (this._t = void 0, o(1)) : "keys" == e ? o(0, n) : "values" == e ? o(0, t[n]) : o(0, [n, t[n]])
        }, "values"), i.Arguments = i.Array, r("keys"), r("values"), r("entries")
    },
    217: function(t, e) {
        t.exports = function() {}
    },
    23: function(t, e, n) {
        var r = n(94)("wks"),
            o = n(72),
            i = n(25).Symbol,
            a = "function" == typeof i;
        (t.exports = function(t) {
            return r[t] || (r[t] = a && i[t] || (a ? i : o)("Symbol." + t))
        }).store = r
    },
    25: function(t, e) {
        var n = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
        "number" == typeof __g && (__g = n)
    },
    251: function(t, e, n) {
        var r = n(61);
        t.exports = Array.isArray || function(t) {
            return "Array" == r(t)
        }
    },
    28: function(t, e, n) {
        var r = n(25),
            o = n(15),
            i = n(53),
            a = n(38),
            c = function(t, e, n) {
                var u, s, f, l = t & c.F,
                    d = t & c.G,
                    h = t & c.S,
                    p = t & c.P,
                    g = t & c.B,
                    m = t & c.W,
                    v = d ? o : o[e] || (o[e] = {}),
                    y = v.prototype,
                    b = d ? r : h ? r[e] : (r[e] || {}).prototype;
                d && (n = e);
                for (u in n)(s = !l && b && void 0 !== b[u]) && u in v || (f = s ? b[u] : n[u], v[u] = d && "function" != typeof b[u] ? n[u] : g && s ? i(f, r) : m && b[u] == f ? function(t) {
                    var e = function(e, n, r) {
                        if (this instanceof t) {
                            switch (arguments.length) {
                                case 0:
                                    return new t;
                                case 1:
                                    return new t(e);
                                case 2:
                                    return new t(e, n)
                            }
                            return new t(e, n, r)
                        }
                        return t.apply(this, arguments)
                    };
                    return e.prototype = t.prototype, e
                }(f) : p && "function" == typeof f ? i(Function.call, f) : f, p && ((v.virtual || (v.virtual = {}))[u] = f, t & c.R && y && !y[u] && a(y, u, f)))
            };
        c.F = 1, c.G = 2, c.S = 4, c.P = 8, c.B = 16, c.W = 32, c.U = 64, c.R = 128, t.exports = c
    },
    283: function(t, e, n) {
        var r = n(43),
            o = n(35);
        t.exports = function(t, e) {
            for (var n, i = o(t), a = r(i), c = a.length, u = 0; c > u;)
                if (i[n = a[u++]] === e) return n
        }
    },
    284: function(t, e, n) {
        var r = n(43),
            o = n(105),
            i = n(65);
        t.exports = function(t) {
            var e = r(t),
                n = o.f;
            if (n)
                for (var a, c = n(t), u = i.f, s = 0; c.length > s;) u.call(t, a = c[s++]) && e.push(a);
            return e
        }
    },
    285: function(t, e, n) {
        var r = n(35),
            o = n(158).f,
            i = {}.toString,
            a = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [],
            c = function(t) {
                try {
                    return o(t)
                } catch (t) {
                    return a.slice()
                }
            };
        t.exports.f = function(t) {
            return a && "[object Window]" == i.call(t) ? c(t) : o(r(t))
        }
    },
    286: function(t, e, n) {
        n(160), n(140), n(287), n(288), t.exports = n(15).Symbol
    },
    287: function(t, e, n) {
        n(111)("asyncIterator")
    },
    288: function(t, e, n) {
        n(111)("observable")
    },
    292: function(t, e, n) {
        n(66), n(86), t.exports = n(108).f("iterator")
    },
    293: function(t, e, n) {
        n(294), t.exports = n(15).Object.assign
    },
    294: function(t, e, n) {
        var r = n(28);
        r(r.S + r.F, "Object", {
            assign: n(295)
        })
    },
    295: function(t, e, n) {
        "use strict";
        var r = n(43),
            o = n(105),
            i = n(65),
            a = n(63),
            c = n(135),
            u = Object.assign;
        t.exports = !u || n(46)(function() {
            var t = {},
                e = {},
                n = Symbol(),
                r = "abcdefghijklmnopqrst";
            return t[n] = 7, r.split("").forEach(function(t) {
                e[t] = t
            }), 7 != u({}, t)[n] || Object.keys(u({}, e)).join("") != r
        }) ? function(t, e) {
            for (var n = a(t), u = arguments.length, s = 1, f = o.f, l = i.f; u > s;)
                for (var d, h = c(arguments[s++]), p = f ? r(h).concat(f(h)) : r(h), g = p.length, m = 0; g > m;) l.call(h, d = p[m++]) && (n[d] = h[d]);
            return n
        } : u
    },
    296: function(t, e, n) {
        n(297), t.exports = n(15).Object.keys
    },
    297: function(t, e, n) {
        var r = n(63),
            o = n(43);
        n(150)("keys", function() {
            return function(t) {
                return o(r(t))
            }
        })
    },
    3026: function(t, e, n) {
        n(201), t.exports = n(3027)
    },
    3027: function(t, e, n) {
        "use strict";
        n(1299), n(3028)
    },
    3028: function(t, e, n) {
        "use strict";

        function r(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        function o(t) {
            chrome.notifications.create({
                title: chrome.runtime.getManifest().name,
                type: "basic",
                iconUrl: "readerView/icons/48.png",
                message: t
            })
        }

        function i(t) {
            var e = (arguments.length > 1 && void 0 !== arguments[1] && arguments[1], arguments.length > 2 && void 0 !== arguments[2] && arguments[2]),
                n = chrome.runtime.getURL("");
            t.url && t.url.startsWith(n) ? g(t) : chrome.tabs.query({
                active: !0,
                currentWindow: !e
            }, function(t) {
                var n = t[0].id;
                t[1] && e && (n = t[1].id), chrome.tabs.sendMessage(n, {
                    type: "readerViewAction"
                })
            })
        }
        var a = n(90),
            c = r(a),
            u = n(128),
            s = r(u),
            f = n(54),
            l = r(f),
            d = n(67),
            h = r(d),
            p = void 0,
            g = function(t) {
                var e = t.id,
                    n = t.url,
                    r = void 0 === n ? "" : n;
                O.ids[e] = !0, chrome.tabs.goBack ? chrome.tabs.goBack(e, function() {
                    if (chrome.runtime.lastError) {
                        var t = new URLSearchParams(r.split("?")[1]);
                        chrome.tabs.update({
                            url: t.get("url")
                        })
                    }
                }) : chrome.tabs.executeScript(e, {
                    code: "history.back()"
                })
            },
            m = function() {
                return config.load(function() {
                    chrome.contextMenus.create({
                        id: "open-in-embedded-reader-view",
                        type: "normal",
                        title: "Open in Reader View",
                        contexts: ["browser_action"]
                    }, function() {
                        return chrome.runtime.lastError
                    }), config.prefs["context-open-in-reader-view"] ? chrome.contextMenus.create({
                        id: "open-in-reader-view",
                        title: "Open in Reader View",
                        contexts: ["link"]
                    }, function() {
                        return chrome.runtime.lastError
                    }) : chrome.contextMenus.remove("open-in-reader-view", function() {
                        return chrome.runtime.lastError
                    }), config.prefs["context-open-in-reader-view-bg"] ? chrome.contextMenus.create({
                        id: "open-in-reader-view-bg",
                        title: "Open in background Reader View",
                        contexts: ["link"]
                    }, function() {
                        return chrome.runtime.lastError
                    }) : chrome.contextMenus.remove("open-in-reader-view-bg", function() {
                        return chrome.runtime.lastError
                    }), config.prefs["context-switch-to-reader-view"] ? chrome.contextMenus.create({
                        parentId: "ejoy_context_menu",
                        id: "switch-to-reader-view",
                        title: "Switch to Reader View",
                        contexts: ["page", "selection"],
                        documentUrlPatterns: ["*://*/*"]
                    }, function() {
                        return chrome.runtime.lastError
                    }) : chrome.contextMenus.remove("switch-to-reader-view", function() {
                        return chrome.runtime.lastError
                    })
                })
            };
        chrome.runtime.onInstalled.addListener(m), chrome.runtime.onStartup.addListener(m), chrome.extension.inIncognitoContext && m();
        var v = function(t, e) {
            var n = t.menuItemId,
                r = t.pageUrl,
                o = t.linkUrl,
                a = o || r;
            if (a && !1 === a.startsWith("http")) {
                var c = new URL(a),
                    u = new URLSearchParams(c.search);
                u.has("url") && (a = u.get("url").split("#")[0] + c.hash)
            }
            "switch-to-reader-view" === n ? i(e) : "inlineTranslate" === n ? p = e : "open-in-embedded-reader-view" === n ? i(e, !1) : n.startsWith("open-in-reader-view") && chrome.tabs.create({
                url: a,
                openerTabId: e.id,
                index: e.index + 1,
                active: !n.endsWith("-bg")
            }, function(t) {
                return i({
                    id: t.id,
                    url: a
                })
            })
        };
        chrome.contextMenus.onClicked.addListener(v), chrome.commands.onCommand.addListener(function(t) {
            "on-off-reader-view" === t && chrome.tabs.query({
                active: !0,
                currentWindow: !0
            }, function(t) {
                t.length && i(t[0])
            })
        });
        var y = function t(e, n, r) {
            t.cache[e] && (n.url || "complete" === n.status) && (i(r), delete t.cache[e], 0 === (0, h.default)(t.cache).length && chrome.tabs.onUpdated.removeListener(t))
        };
        y.cache = {};
        var b = {},
            w = {};
        window.highlights = w, chrome.tabs.onRemoved.addListener(function(t) {
            return delete b[t]
        });
        var x = function(t, e, n) {
            var r = e.tab ? e.tab.id : "",
                a = e.tab ? e.tab.url : "";
            "open_pop_up_inline" === t.type && (p = e.tab), "open-reader" === t.cmd && t.article ? (b[e.tab.id] = t.article, chrome.tabs.update(r, {
                url: chrome.runtime.getURL("readerView/reader/index.html?id=" + r + "&url=" + encodeURIComponent(a))
            })) : "open-reader-pdf" === t.cmd ? p && i(p, !1, !0) : "open-reader" === t.cmd ? o("Sorry, this page cannot be converted!") : "notify" === t.cmd ? o(t.msg) : "read-data" === t.cmd ? (b[r].highlights = w[b[r].url], n(b[r])) : "open" === t.cmd ? t.current ? (t.reader && (y.cache[r] = !0, chrome.tabs.onUpdated.addListener(y)), chrome.tabs.update({
                url: t.url
            })) : chrome.tabs.create({
                url: t.url,
                openerTabId: r,
                index: e.tab.index + 1,
                active: !1
            }, function(e) {
                return t.reader && i(e)
            }) : "reader-on-reload" === t.cmd ? (y.cache[r] = !0, chrome.tabs.onUpdated.addListener(y)) : "go-back" === t.cmd ? g(e.tab) : "highlights" === t.cmd ? config.load(function() {
                if (t.value.length && config.prefs["cache-highlights"]) w[t.href] = t.value, config.prefs["highlights-keys"].unshift(t.href), config.prefs["highlights-keys"] = config.prefs["highlights-keys"].filter(function(t, e, n) {
                    return t && n.indexOf(t) === e
                }).slice(0, config.prefs["highlights-count"]);
                else {
                    delete w[t.href];
                    var e = config.prefs["highlights-keys"].indexOf(t.href); - 1 !== e && config.prefs["highlights-keys"].splice(e, 1)
                }
                chrome.storage.local.set({
                    "highlights-keys": config.prefs["highlights-keys"],
                    "highlights-objects": config.prefs["highlights-keys"].reduce(function(t, e) {
                        return t[e] = w[e] || {}, t
                    }, {})
                })
            }) : "delete-cache" === t.cmd && "undefined" != typeof caches && caches.delete(t.cache)
        };
        window.onMessage = x, chrome.runtime.onMessage.addListener(x);
        var S = function() {
            return config.load(function() {
                return (0, l.default)(w, config.prefs["highlights-objects"])
            })
        };
        chrome.runtime.onStartup.addListener(S), config.onChanged.push(function(t) {
            if (t["cache-highlights"] && !1 === t["cache-highlights"].newValue) {
                var e = !0,
                    n = !1,
                    r = void 0;
                try {
                    for (var o, i = (0, s.default)((0, h.default)(w)); !(e = (o = i.next()).done); e = !0) {
                        var a = o.value;
                        delete w[a]
                    }
                } catch (t) {
                    n = !0, r = t
                } finally {
                    try {
                        !e && i.return && i.return()
                    } finally {
                        if (n) throw r
                    }
                }
                chrome.storage.local.set({
                    "highlights-keys": [],
                    "highlights-objects": {}
                })
            }(t["context-open-in-reader-view"] || t["context-open-in-reader-view-bg"] || t["context-switch-to-reader-view"]) && m()
        });
        var O = function t() {
            t.rules = JSON.parse(localStorage.getItem("auto-rules") || "[]").map(function(t) {
                if (t.startsWith("r:")) try {
                    return new RegExp(t.substr(2), "i")
                } catch (t) {
                    return ""
                }
                return t
            }).filter(function(t) {
                return t
            });
            var e = function(e) {
                    !0 !== t.ids[e.tabId] && i({
                        url: e.url,
                        id: e.tabId
                    })
                },
                n = function(n) {
                    if (0 === n.frameId) {
                        var r = new URL(n.url),
                            o = r.hostname,
                            i = !0,
                            a = !1,
                            c = void 0;
                        try {
                            for (var u, f = (0, s.default)(t.rules); !(i = (u = f.next()).done); i = !0) {
                                var l = u.value;
                                if (l.test) {
                                    if (l.test(n.url)) {
                                        e(n);
                                        break
                                    }
                                } else if (o === l) {
                                    e(n);
                                    break
                                }
                            }
                        } catch (t) {
                            a = !0, c = t
                        } finally {
                            try {
                                !i && f.return && f.return()
                            } finally {
                                if (a) throw c
                            }
                        }
                        delete t.ids[n.tabId]
                    }
                };
            chrome.webNavigation && (chrome.webNavigation.onDOMContentLoaded.removeListener(n), t.rules.length && chrome.webNavigation.onDOMContentLoaded.addListener(n, {
                url: [{
                    schemes: ["http", "https"]
                }]
            }))
        };
        if (O.ids = {}, window.webNavigation = O, O(), chrome.declarativeContent) {
            var _ = function() {
                return chrome.declarativeContent.onPageChanged.removeRules(void 0, function() {
                    chrome.declarativeContent.onPageChanged.addRules([{
                        conditions: [new chrome.declarativeContent.PageStateMatcher({
                            pageUrl: {
                                schemes: ["http", "https", "file"]
                            }
                        })],
                        actions: [new chrome.declarativeContent.ShowPageAction]
                    }])
                })
            };
            chrome.extension.inIncognitoContext ? _() : chrome.runtime.onInstalled.addListener(_)
        }
        var j = function() {
            return "object" === ("undefined" == typeof caches ? "undefined" : (0, c.default)(caches)) && caches.keys().then(function(t) {
                var e = !0,
                    n = !1,
                    r = void 0;
                try {
                    for (var o, i = (0, s.default)(t); !(e = (o = i.next()).done); e = !0) {
                        var a = o.value;
                        caches.delete(a)
                    }
                } catch (t) {
                    n = !0, r = t
                } finally {
                    try {
                        !e && i.return && i.return()
                    } finally {
                        if (n) throw r
                    }
                }
            })
        };
        chrome.runtime.onInstalled.addListener(j), chrome.runtime.onStartup.addListener(j);
        var k = chrome,
            C = k.management,
            I = k.runtime,
            E = I.onInstalled,
            M = (I.setUninstallURL, I.getManifest),
            P = k.storage;
        k.tabs;
        if (!0 !== navigator.webdriver) {
            var L = (M().homepage_url, M()),
                R = (L.name, L.version);
            E.addListener(function(t) {
                var e = t.reason,
                    n = t.previousVersion;
                C.getSelf(function(t) {
                    return "normal" === t.installType && P.local.get({
                        faqs: !0,
                        "last-update": 0
                    }, function(t) {
                        ("install" === e || t.faqs && "update" === e) && (Date.now() - t["last-update"]) / 1e3 / 60 / 60 / 24 > 45 && n !== R && P.local.set({
                            "last-update": Date.now()
                        })
                    })
                })
            })
        }
    },
    31: function(t, e, n) {
        var r = n(32),
            o = n(137),
            i = n(99),
            a = Object.defineProperty;
        e.f = n(33) ? Object.defineProperty : function(t, e, n) {
            if (r(t), e = i(e, !0), r(n), o) try {
                return a(t, e, n)
            } catch (t) {}
            if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
            return "value" in n && (t[e] = n.value), t
        }
    },
    32: function(t, e, n) {
        var r = n(47);
        t.exports = function(t) {
            if (!r(t)) throw TypeError(t + " is not an object!");
            return t
        }
    },
    329: function(t, e, n) {
        n(86), n(66), t.exports = n(330)
    },
    33: function(t, e, n) {
        t.exports = !n(46)(function() {
            return 7 != Object.defineProperty({}, "a", {
                get: function() {
                    return 7
                }
            }).a
        })
    },
    330: function(t, e, n) {
        var r = n(32),
            o = n(124);
        t.exports = n(15).getIterator = function(t) {
            var e = o(t);
            if ("function" != typeof e) throw TypeError(t + " is not iterable!");
            return r(e.call(t))
        }
    },
    35: function(t, e, n) {
        var r = n(135),
            o = n(89);
        t.exports = function(t) {
            return r(o(t))
        }
    },
    38: function(t, e, n) {
        var r = n(31),
            o = n(60);
        t.exports = n(33) ? function(t, e, n) {
            return r.f(t, e, o(1, n))
        } : function(t, e, n) {
            return t[e] = n, t
        }
    },
    39: function(t, e, n) {
        t.exports = {
            default: n(286),
            __esModule: !0
        }
    },
    41: function(t, e) {
        var n = {}.hasOwnProperty;
        t.exports = function(t, e) {
            return n.call(t, e)
        }
    },
    43: function(t, e, n) {
        var r = n(139),
            o = n(95);
        t.exports = Object.keys || function(t) {
            return r(t, o)
        }
    },
    44: function(t, e, n) {
        t.exports = {
            default: n(292),
            __esModule: !0
        }
    },
    46: function(t, e) {
        t.exports = function(t) {
            try {
                return !!t()
            } catch (t) {
                return !0
            }
        }
    },
    47: function(t, e) {
        t.exports = function(t) {
            return "object" == typeof t ? null !== t : "function" == typeof t
        }
    },
    52: function(t, e) {
        t.exports = {}
    },
    53: function(t, e, n) {
        var r = n(104);
        t.exports = function(t, e, n) {
            if (r(t), void 0 === e) return t;
            switch (n) {
                case 1:
                    return function(n) {
                        return t.call(e, n)
                    };
                case 2:
                    return function(n, r) {
                        return t.call(e, n, r)
                    };
                case 3:
                    return function(n, r, o) {
                        return t.call(e, n, r, o)
                    }
            }
            return function() {
                return t.apply(e, arguments)
            }
        }
    },
    54: function(t, e, n) {
        t.exports = {
            default: n(293),
            __esModule: !0
        }
    },
    60: function(t, e) {
        t.exports = function(t, e) {
            return {
                enumerable: !(1 & t),
                configurable: !(2 & t),
                writable: !(4 & t),
                value: e
            }
        }
    },
    61: function(t, e) {
        var n = {}.toString;
        t.exports = function(t) {
            return n.call(t).slice(8, -1)
        }
    },
    63: function(t, e, n) {
        var r = n(89);
        t.exports = function(t) {
            return Object(r(t))
        }
    },
    65: function(t, e) {
        e.f = {}.propertyIsEnumerable
    },
    66: function(t, e, n) {
        "use strict";
        var r = n(214)(!0);
        n(127)(String, "String", function(t) {
            this._t = String(t), this._i = 0
        }, function() {
            var t, e = this._t,
                n = this._i;
            return n >= e.length ? {
                value: void 0,
                done: !0
            } : (t = r(e, n), this._i += t.length, {
                value: t,
                done: !1
            })
        })
    },
    67: function(t, e, n) {
        t.exports = {
            default: n(296),
            __esModule: !0
        }
    },
    72: function(t, e) {
        var n = 0,
            r = Math.random();
        t.exports = function(t) {
            return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++n + r).toString(36))
        }
    },
    73: function(t, e, n) {
        var r = n(31).f,
            o = n(41),
            i = n(23)("toStringTag");
        t.exports = function(t, e, n) {
            t && !o(t = n ? t : t.prototype, i) && r(t, i, {
                configurable: !0,
                value: e
            })
        }
    },
    80: function(t, e) {
        t.exports = !0
    },
    86: function(t, e, n) {
        n(216);
        for (var r = n(25), o = n(38), i = n(52), a = n(23)("toStringTag"), c = ["NodeList", "DOMTokenList", "MediaList", "StyleSheetList", "CSSRuleList"], u = 0; u < 5; u++) {
            var s = c[u],
                f = r[s],
                l = f && f.prototype;
            l && !l[a] && o(l, a, s), i[s] = i.Array
        }
    },
    89: function(t, e) {
        t.exports = function(t) {
            if (void 0 == t) throw TypeError("Can't call method on  " + t);
            return t
        }
    },
    90: function(t, e, n) {
        "use strict";

        function r(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        e.__esModule = !0;
        var o = n(44),
            i = r(o),
            a = n(39),
            c = r(a),
            u = "function" == typeof c.default && "symbol" == typeof i.default ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof c.default && t.constructor === c.default && t !== c.default.prototype ? "symbol" : typeof t
            };
        e.default = "function" == typeof c.default && "symbol" === u(i.default) ? function(t) {
            return void 0 === t ? "undefined" : u(t)
        } : function(t) {
            return t && "function" == typeof c.default && t.constructor === c.default && t !== c.default.prototype ? "symbol" : void 0 === t ? "undefined" : u(t)
        }
    },
    91: function(t, e) {
        var n = Math.ceil,
            r = Math.floor;
        t.exports = function(t) {
            return isNaN(t = +t) ? 0 : (t > 0 ? r : n)(t)
        }
    },
    92: function(t, e, n) {
        var r = n(94)("keys"),
            o = n(72);
        t.exports = function(t) {
            return r[t] || (r[t] = o(t))
        }
    },
    94: function(t, e, n) {
        var r = n(25),
            o = r["__core-js_shared__"] || (r["__core-js_shared__"] = {});
        t.exports = function(t) {
            return o[t] || (o[t] = {})
        }
    },
    95: function(t, e) {
        t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
    },
    96: function(t, e, n) {
        var r = n(47),
            o = n(25).document,
            i = r(o) && r(o.createElement);
        t.exports = function(t) {
            return i ? o.createElement(t) : {}
        }
    },
    99: function(t, e, n) {
        var r = n(47);
        t.exports = function(t, e) {
            if (!r(t)) return t;
            var n, o;
            if (e && "function" == typeof(n = t.toString) && !r(o = n.call(t))) return o;
            if ("function" == typeof(n = t.valueOf) && !r(o = n.call(t))) return o;
            if (!e && "function" == typeof(n = t.toString) && !r(o = n.call(t))) return o;
            throw TypeError("Can't convert object to primitive value")
        }
    }
});