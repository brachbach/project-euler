var __extends = this.__extends || function(d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() {
        this.constructor = d;
    }
    __.prototype = b.prototype;
    d.prototype = new __();
};

"function" != typeof Object.assign && !function() {
    Object.assign = function(n) {
        "use strict";
        if (void 0 === n || null === n) throw new TypeError("Cannot convert undefined or null to object");
        for (var t = Object(n), r = 1; r < arguments.length; r++) {
            var e = arguments[r];
            if (void 0 !== e && null !== e) for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
        }
        return t;
    };
}();

window.$ = window.jQuery || function(e, t, l) {
    try {
        var n = {
            "#": "getElementById",
            ".": "getElementsByClassName",
            "@": "getElementsByName",
            "=": "getElementsByTagName",
            "*": "querySelectorAll"
        }[e[0]], m = (t === l ? document : t)[n](e.slice(1));
        !m.length ? m[0] = m : null;
        return !m.length ? m : m.length < 2 ? m[0] : [].slice.call(m);
    } catch (er) {
        return document.querySelectorAll(e);
    }
};

if ("document" in self) {
    if (!("classList" in document.createElement("_")) || document.createElementNS && !("classList" in document.createElementNS("http://www.w3.org/2000/svg", "g"))) {
        (function(t) {
            "use strict";
            if (!("Element" in t)) return;
            var e = "classList", i = "prototype", n = t.Element[i], s = Object, r = String[i].trim || function() {
                return this.replace(/^\s+|\s+$/g, "");
            }, a = Array[i].indexOf || function(t) {
                var e = 0, i = this.length;
                for (;e < i; e++) {
                    if (e in this && this[e] === t) {
                        return e;
                    }
                }
                return -1;
            }, o = function(t, e) {
                this.name = t;
                this.code = DOMException[t];
                this.message = e;
            }, l = function(t, e) {
                if (e === "") {
                    throw new o("SYNTAX_ERR", "An invalid or illegal string was specified");
                }
                if (/\s/.test(e)) {
                    throw new o("INVALID_CHARACTER_ERR", "String contains an invalid character");
                }
                return a.call(t, e);
            }, c = function(t) {
                var e = r.call(t.getAttribute("class") || ""), i = e ? e.split(/\s+/) : [], n = 0, s = i.length;
                for (;n < s; n++) {
                    this.push(i[n]);
                }
                this._updateClassName = function() {
                    t.setAttribute("class", this.toString());
                };
            }, u = c[i] = [], f = function() {
                return new c(this);
            };
            o[i] = Error[i];
            u.item = function(t) {
                return this[t] || null;
            };
            u.contains = function(t) {
                t += "";
                return l(this, t) !== -1;
            };
            u.add = function() {
                var t = arguments, e = 0, i = t.length, n, s = false;
                do {
                    n = t[e] + "";
                    if (l(this, n) === -1) {
                        this.push(n);
                        s = true;
                    }
                } while (++e < i);
                if (s) {
                    this._updateClassName();
                }
            };
            u.remove = function() {
                var t = arguments, e = 0, i = t.length, n, s = false, r;
                do {
                    n = t[e] + "";
                    r = l(this, n);
                    while (r !== -1) {
                        this.splice(r, 1);
                        s = true;
                        r = l(this, n);
                    }
                } while (++e < i);
                if (s) {
                    this._updateClassName();
                }
            };
            u.toggle = function(t, e) {
                t += "";
                var i = this.contains(t), n = i ? e !== true && "remove" : e !== false && "add";
                if (n) {
                    this[n](t);
                }
                if (e === true || e === false) {
                    return e;
                } else {
                    return !i;
                }
            };
            u.toString = function() {
                return this.join(" ");
            };
            if (s.defineProperty) {
                var h = {
                    get: f,
                    enumerable: true,
                    configurable: true
                };
                try {
                    s.defineProperty(n, e, h);
                } catch (d) {
                    if (d.number === -2146823252) {
                        h.enumerable = false;
                        s.defineProperty(n, e, h);
                    }
                }
            } else if (s[i].__defineGetter__) {
                n.__defineGetter__(e, f);
            }
        })(self);
    } else {
        (function() {
            "use strict";
            var t = document.createElement("_");
            t.classList.add("c1", "c2");
            if (!t.classList.contains("c2")) {
                var e = function(t) {
                    var e = DOMTokenList.prototype[t];
                    DOMTokenList.prototype[t] = function(t) {
                        var i, n = arguments.length;
                        for (i = 0; i < n; i++) {
                            t = arguments[i];
                            e.call(this, t);
                        }
                    };
                };
                e("add");
                e("remove");
            }
            t.classList.toggle("c3", false);
            if (t.classList.contains("c3")) {
                var i = DOMTokenList.prototype.toggle;
                DOMTokenList.prototype.toggle = function(t, e) {
                    if (1 in arguments && !this.contains(t) === !e) {
                        return e;
                    } else {
                        return i.call(this, t);
                    }
                };
            }
            t = null;
        })();
    }
}

Element.prototype.hide = function() {
    this.classList.add("hide");
};

Element.prototype.show = function() {
    this.classList.remove("hide");
};

Element.prototype.addEvent = function(event, callback) {
    this.addEventListener(event, callback.bind(temple.banner));
};

Element.prototype.find = function(selector) {
    return $(selector, this);
};

NodeList.prototype.each = Array.prototype.forEach;

Object.defineProperty(Array.prototype, "shuffle", {
    enumerable: false,
    value: function() {
        var i = this.length;
        while (i) {
            var j = Math.floor(Math.random() * i);
            var t = this[--i];
            this[i] = this[j];
            this[j] = t;
        }
        return this;
    }
});

String.prototype.timeFormat = function() {
    var sn = parseInt(this, 10);
    var h = Math.floor(sn / 3600);
    var m = Math.floor((sn - h * 3600) / 60);
    var s = sn - h * 3600 - m * 60;
    if (m < 10) {
        m = m;
    }
    if (s < 10) {
        s = "0" + s;
    }
    var t = (m || 0) + ":" + (s || "00");
    return t;
};

String.prototype.ucfirst = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
};

Function.prototype.delay = function(a) {
    var b = [].slice.call(arguments, 1), c = this;
    return setTimeout(function() {
        c.apply(void 0, b);
    }, 1e3 * a);
};

var temple = new Temple(typeof temple != "undefined" ? temple.config : null);

window.addEventListener("load", temple.create.bind(temple));

function Temple(config) {
    this.type = "Standalone";
    this.version = "2.0.7", this.color = "#ff0088", this.isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent), 
    this.isiOS = /iPad|iPhone|iPod/.test(navigator.userAgent), this.isiOS9up = this.isiOS && navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/)[1] > 9, 
    this.isiPad = /iPad/.test(navigator.userAgent), this.isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent), 
    this.core = {}, this.config = config, this.platforms = {}, this.templates = {}, 
    this.modules = {};
    this.isLive = function() {
        if (!this.config) return window.location.hostname != "localhost";
        if (!this.config.localhost) return window.location.hostname != "localhost";
        var live = window.location.hostname != "localhost";
        for (var i = 0; i < this.config.localhost.length; i++) {
            if (window.location.hostname == this.config.localhost[i]) {
                return false;
            }
        }
        return live;
    }();
    this.isAutoplayAvailable = function() {
        if (!this.isMobile) return true;
        if (!this.isiOS) {
            return true;
        } else if (this.isSafari) {
            if (this.isiPad) var os = Number(navigator.userAgent.split("iPad")[1].split(" ")[3].replace("_", ".")); else var os = navigator.userAgent.split("iPhone OS ")[1].split(" ")[0].split("_")[0];
            if (os >= 10) return true; else return false;
        } else {
            return false;
        }
    };
    this.utils = function() {
        var tracker = function(t) {
            temple.utils.debug("Tracker: " + t, "green");
        };
        var getQueryVar = function(v) {
            var q = window.location.search.substring(1);
            var vs = q.split("&");
            for (var i = 0; i < vs.length; i++) {
                var p = vs[i].split("=");
                if (p[0] == v) {
                    return p[1];
                }
            }
            return false;
        };
        var loadScript = function(u, c, e) {
            if (typeof u == "string") u = [ u ];
            t = 0;
            if (!u.length) {
                c();
                return;
            }
            var loader = function(sc) {
                var s = document.createElement("script");
                s.async = true;
                s.type = "text/javascript", s.readyState ? s.onreadystatechange = function() {
                    ("loaded" == s.readyState || "complete" == s.readyState) && (s.onreadystatechange = null, 
                    c && c());
                } : (s.onload = function(e) {
                    t++;
                    t == u.length ? c && c(e) : loader(u[t]);
                }, s.onerror = function() {
                    temple.utils.debug('ERROR LOADING SCRIPT "' + u + '"'), e && e();
                }), s.src = sc, document.body.appendChild(s);
            };
            loader(u[0]);
        };
        var loadJSON = function(u, c, e, nt) {
            if (typeof u == "string") u = [ u ];
            var t = 0;
            var comp = c;
            var obs = [];
            var data = [];
            c = function(o) {
                data[o] = nt === true ? obs[o].responseText : JSON.parse(obs[o].responseText);
                t++;
                if (t == u.length) {
                    if (data.length == 1) data = data[0];
                    comp.call(temple.banner, data);
                }
            };
            var xobj = [];
            for (var i = 0; i < u.length; i++) {
                xobj[i] = new XMLHttpRequest();
                xobj[i].i = i;
                obs.push(xobj[i]);
                xobj[i].overrideMimeType("application/json");
                xobj[i].open("GET", u[i], !0);
                xobj[i].onreadystatechange = function(e) {
                    x = e.currentTarget;
                    4 == x.readyState && "404" == x.status && (temple.utils.debug("No json found", "#ff0000"), 
                    e && e.call(temple.banner)), 4 == x.readyState && "200" == x.status && c && c(this.i);
                }, xobj[i].send(null);
            }
            if (!u.length) comp.call(temple.banner);
        };
        var loadImage = function(u, c, e) {
            if (typeof u == "string") u = [ u ];
            var t = 0;
            var imgs = [];
            for (var i = 0; i < u.length; i++) {
                var im = new Image();
                im.onload = function(e) {
                    imgs.push(this);
                    t++;
                    if (t == u.length) c && c(imgs, e);
                };
                im.onerror = e;
                im.src = u[i];
            }
        };
        var createStyle = function(n, r) {
            n = n != "banner" ? "#banner " + n : n;
            if (!temple.stylesheet) {
                temple.stylesheet = document.createElement("style"), temple.stylesheet.type = "text/css";
                var head = document.getElementsByTagName("head")[0];
                head.insertBefore(temple.stylesheet, head.firstChild);
            }
            (temple.stylesheet.sheet || {}).insertRule ? temple.stylesheet.sheet.insertRule(n + "{" + r + "}", 0) : (temple.stylesheet.styleSheet || temple.stylesheet.sheet).addRule(n, r);
        };
        var debug = function(e, c, v) {
            if (console.debug && (!temple.isLive || temple.config.debug === true)) {
                console.debug("%c[" + temple.type + "]%s", "font-weight:bold;color:" + (typeof c == "string" ? c : temple.color) + ";", " " + (v || temple.version), ":", e || "", typeof c != "string" && typeof c != "undefined" ? c : "");
            }
        };
        var fitText = function(t) {
            TweenMax.set(t, {
                clearProps: "fontSize, lineHeight"
            });
            var p = t.parentElement;
            var s = Number(window.getComputedStyle(p, null).getPropertyValue("font-size").replace("px", ""));
            if (t.offsetHeight > p.offsetHeight || t.offsetWidth > p.offsetWidth) {
                while (t.offsetHeight > p.offsetHeight || t.offsetWidth > p.offsetWidth) {
                    s -= .2;
                    t.style.fontSize = s + "px";
                    t.style.lineHeight = s + 1 + "px";
                }
            }
        };
        var validURL = function(str) {
            var pattern = new RegExp("^(https?:\\/\\/)?" + "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|" + "((\\d{1,3}\\.){3}\\d{1,3}))" + "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + "(\\?[;&a-z\\d%_.~+=-]*)?" + "(\\#[-a-z\\d_]*)?$", "i");
            return pattern.test(str);
        };
        var findElements = function(e, styles) {
            if (styles) {
                var obj = {};
                obj.all = [];
                findElement(e, styles);
            } else {
                var obj = [];
                findElement(e);
            }
            function findElement(e, styles) {
                if (e && e.childNodes && e.childNodes.length > 0) {
                    for (var i = 0; i < e.childNodes.length; i++) {
                        var child = e.childNodes[i];
                        if (child.type == "image/svg+xml" || [ "DIV", "SPAN", "IMG", "CANVAS", "SVG", "CIRCLE", "PATH" ].indexOf(child.nodeName.toUpperCase()) != -1) {
                            if (child.id || child.className) {
                                if (styles) {
                                    styles = typeof styles == "string" ? [ styles ] : styles;
                                    for (var j = 0; j < styles.length; j++) {
                                        if (!obj[styles[j]]) {
                                            obj[styles[j]] = [];
                                        }
                                        if (child.id && obj[styles[j]].indexOf(child) == -1) {
                                            var val = getStyleRuleValue("." + styles[j], "#" + child.id);
                                            if (val) {
                                                obj[styles[j]].push(child);
                                            }
                                        }
                                        var c = typeof child.className == "object" ? String(child.className.baseVal).split(" ") : String(child.className).split(" ");
                                        for (var k = 0; k < c.length; k++) {
                                            if (c[k] && obj[styles[j]].indexOf(child) == -1) {
                                                var val = getStyleRuleValue("." + styles[j], "." + c[k]);
                                                if (val) {
                                                    obj[styles[j]].push(child);
                                                }
                                            }
                                        }
                                    }
                                    obj.all.push(child);
                                    findElement(child, styles);
                                } else {
                                    obj.push(child);
                                    findElement(child);
                                }
                            }
                        }
                    }
                }
            }
            function getStyleRuleValue(style, selector, sheet) {
                var sheets = typeof sheet !== "undefined" ? [ sheet ] : document.styleSheets;
                var ar = [];
                for (var i = 0, l = sheets.length; i < l; i++) {
                    var sheet = sheets[i];
                    if (!sheet.cssRules) continue;
                    for (var j = 0, k = sheet.cssRules.length; j < k; j++) {
                        var rule = sheet.cssRules[j];
                        if (rule.selectorText) {
                            if (rule.selectorText.indexOf(selector) != -1 && rule.selectorText.indexOf(style) != -1) {
                                var all = rule.selectorText.substring(0, rule.selectorText.indexOf(style)).split(".");
                                var node = all[all.length - 1];
                                return node;
                            }
                        }
                    }
                }
                return;
            }
            return obj;
        };
        return {
            tracker: function(v, e) {
                return tracker(v, e);
            },
            getQueryVar: function(v) {
                return getQueryVar(v);
            },
            loadScript: function(u, c, e) {
                loadScript(u, c, e);
            },
            loadJSON: function(u, c, e, nt) {
                loadJSON(u, c, e, nt);
            },
            loadImage: function(u, c, e) {
                loadImage(u, c, e);
            },
            debug: function(e, c, v) {
                debug(e, c, v);
            },
            createStyle: function(n, r) {
                createStyle(n, r);
            },
            fitText: function(t) {
                fitText(t);
            },
            findElements: function(e, styles) {
                return findElements(e, styles);
            },
            validURL: function(u) {
                return validURL(u);
            }
        };
    }();
    this.create = function() {
        var config = document.body.getAttribute("data-config") || "config.json";
        config = config.replace(".json", "");
        config = temple.utils.getQueryVar("c") && !this.isLive ? config + "_" + temple.utils.getQueryVar("c").replace("config_", "") + ".json" : config + ".json";
        if (temple.config) config = [];
        temple.utils.loadJSON(config, function(json) {
            this.config = json || temple.config;
            var scripts = [];
            var m = this.config.modules || [];
            if (m.length) {
                scripts.push(this.config.modules[0]);
            }
            temple.utils.loadScript(scripts, function(e) {
                if (temple.Banner) temple.banner = new temple.Banner();
            }.bind(this));
        }.bind(this));
    };
    this.events = {
        READY: "ready",
        SHOW: "show",
        CORE_READY: "core_ready",
        MODULE_READY: "module_ready",
        EXIT: "exit"
    };
}

temple.core.EventDispatcher = function() {
    function EventDispatcher() {}
    EventDispatcher.prototype.dispatchEvent = function(event, args) {
        if (!arguments[1]) arguments[1] = this;
        this._events = this._events || [];
        if (this._events[event]) {
            var listeners = this._events[event], len = listeners.length;
            while (len--) {
                temple.utils.debug("Event <" + event + "> " + (arguments[1].target ? arguments[1].target.constructor.name : arguments[1].constructor.name), "black");
                if (!args) args = {};
                if (!args.target) args.target = this;
                if (!listeners[len]._one) {
                    var f = listeners.splice(len, 1);
                    f[0](args);
                } else {
                    listeners[len](args);
                }
            }
            return true;
        }
        return false;
    };
    EventDispatcher.prototype.addEventListener = function(event, callback, _one) {
        callback._one = _one != undefined ? _one : true;
        this._events = this._events || [];
        this._events[event] = this._events[event] || [];
        if (this._events[event]) {
            this._events[event].push(callback);
        }
    };
    EventDispatcher.prototype.removeEventListener = function(event) {
        if (this._events[event]) {
            delete this._events[event];
        }
    };
    return EventDispatcher;
}();

temple.core.Module = function(_super) {
    __extends(Module, _super);
    function Module() {}
    Module.prototype._moduleReady = function() {
        temple.utils.debug("Module << " + this.constructor.name + " >>", this.color || "Tomato");
        this.dispatchEvent(temple.events.MODULE_READY);
    };
    Module.prototype.done = function() {
        setTimeout(this._moduleReady.bind(this), 50);
    };
    return Module;
}(temple.core.EventDispatcher);

temple.core.Core = function(_super) {
    __extends(Core, _super);
    function Core() {
        this._initCore();
    }
    Core.prototype.exit = function(url) {
        window.open(url || this.defaultExitURL, "_blank");
        this.dispatchEvent(temple.events.EXIT);
    };
    Core.prototype.chain = function(e) {
        try {
            e.prototype;
        } catch (err) {
            console.error("Module not loaded. Please add it to your config.");
            console.error("Available modules > ", temple.modules);
            return;
        }
        if (!this._chained) {
            this._chained = [];
            this._chained.push({
                m: e,
                a: arguments[1],
                c: arguments[2]
            });
            setTimeout(this._runChain.bind(this), 1);
        } else {
            this._chained.push({
                m: e,
                a: arguments[1],
                c: arguments[2]
            });
        }
        return this;
    };
    Core.prototype._politeLoads = function(c) {
        var loads = document.querySelectorAll("[multilingual], [polite]"), svgs = document.querySelectorAll("[svg]"), t = 0, t2 = 0, _s = [];
        function onload(e, img) {
            if (loads[t].nodeName == "DIV") {
                loads[t].style.backgroundImage = "url('" + loads[t].ml + loads[t].getAttribute("data-src") + "')";
                loads[t].style.width = img.width + "px";
                loads[t].style.height = img.height + "px";
            }
            t++;
            if (t + t2 == loads.length + svgs.length) if (c) setTimeout(c.call(this), 10);
        }
        for (var i = 0; i < loads.length; i++) {
            loads[i].ml = loads[i].hasAttribute("multilingual") || "";
            if (loads[i].ml === true) loads[i].ml = "img/" + this.config.language + "/";
            if (loads[i].nodeName == "DIV") {
                temple.utils.loadImage(loads[i].ml + loads[i].getAttribute("data-src"), onload.bind(this));
            } else {
                loads[i].onload = onload.bind(this, loads[i]);
                loads[i].src = loads[i].ml + loads[i].getAttribute("data-src");
            }
        }
        for (i = 0; i < svgs.length; i++) {
            _s[i] = {
                xhr: new XMLHttpRequest(),
                el: svgs[i]
            };
            _s[i].xhr.id = i;
            _s[i].xhr.onload = function(e) {
                var r = e.currentTarget.responseXML.documentElement;
                r.setAttribute("class", _s[e.currentTarget.id].el.getAttribute("class"));
                var id = _s[e.currentTarget.id].el.getAttribute("id");
                r.setAttribute("id", id);
                _s[e.currentTarget.id].el.parentNode.replaceChild(r, _s[e.currentTarget.id].el);
                window[id] = r;
                t2++;
                if (t + t2 == loads.length + svgs.length) if (c) setTimeout(c.call(this), 10);
            }.bind(this);
            _s[i].xhr.open("GET", svgs[i].getAttribute("data-src"), !0);
            _s[i].xhr.overrideMimeType("image/svg+xml");
            _s[i].xhr.send("");
        }
        if (!loads.length && !svgs.length) if (c) setTimeout(c.call(this), 10);
    };
    Core.prototype._initCore = function() {
        this.config = temple.config;
        temple.utils.debug(temple.type + " Platform");
        this._pageReady();
    };
    Core.prototype._pageReady = function() {
        this._bannerInit();
    };
    Core.prototype._bannerInit = function() {
        temple.utils.createStyle("#banner", "position:relative;overflow:hidden;background-color:#000;color:#fff;width:" + (temple.config.size.width ? temple.config.size.width + "px;height:" : "auto;height:") + (temple.config.size.height ? temple.config.size.height + "px;" : "auto;"));
        temple.utils.createStyle(".bannerClick", "position:absolute;top:0;left:0;width:100%;height:100%;cursor:pointer;background:url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7);");
        this.dispatchEvent(temple.events.CORE_READY);
    };
    Core.prototype._chainLoaded = function(e) {
        if (this._chained[0].c) this._chained[0].c.call(this);
        this._chained.splice(0, 1);
        this._runChain();
    };
    Core.prototype.async = function() {
        arguments.callee.caller.async = true;
        return function() {
            this._chainLoaded();
        }.bind(this);
    };
    Core.prototype._runChain = function(e) {
        if (!this._chained[0]) return;
        if (this._chained[0].m.prototype.__proto__.constructor != temple.core.Module) {
            this._chained[0].m.call(this, this._chained[0].a);
            if (!this._chained[0].m.async) this._chainLoaded();
            return;
        }
        var name = this._chained[0].m.name || this._chained[0].m.toString().match(/^function\s*([^\s(]+)/)[1];
        var moduleName = name.charAt(0).toLowerCase() + name.slice(1);
        var listName = moduleName;
        this[listName + "List"] = this[listName + "List"] || [];
        if (this[moduleName]) {
            var t = 2;
            var tempName = moduleName;
            tempName = moduleName + t;
            while (this[tempName]) {
                t++;
                tempName = moduleName + t;
            }
            moduleName = tempName;
        }
        this[moduleName] = new this._chained[0].m(this._chained[0].a || this, this, t || 0);
        this[moduleName].addEventListener(temple.events.MODULE_READY, this._chainLoaded.bind(this));
        this[listName + "List"].push(this[moduleName]);
    };
    return Core;
}(temple.core.EventDispatcher);

temple.platforms.doubleclick = {};

temple.platforms.doubleclick.Platform = function(_super) {
    __extends(Platform, _super);
    function Platform() {
        this.version = "1.0.3";
        this.defaultExitURL = "";
        this.exitURLs = [ "" ];
        temple.color = "#338e43";
        temple.type = "DoubleClick";
        temple.utils.tracker = this._tracker;
        this._platform = {
            _closeOverlay: function() {
                Enabler.close();
            }
        };
        if (typeof Enabler == "undefined") {
            temple.utils.loadScript("https://s0.2mdn.net/ads/studio/Enabler.js", this._initCore.bind(this));
        } else {
            this._initCore();
        }
    }
    Platform.prototype.setVideoTracking = function(player) {
        if (!studio.video) {
            Enabler.loadModule(studio.module.ModuleId.VIDEO, function() {
                this.setVideoTracking(player);
            }.bind(this));
            return;
        }
        if (player.playHistory) {
            studio.video.Reporter.detach(player.playHistory[player.playHistory.length - 1].id);
            studio.video.Reporter.attach(player.currentVideo.id, player._video);
        } else {
            studio.video.Reporter.attach(player.currentVideo.id, player._video);
        }
    };
    Platform.prototype.exit = function(url) {
        url = temple.utils.validURL(url) ? url : null;
        this.dispatchEvent(temple.events.EXIT, url || this.defaultExitURL);
        Enabler.exit("Default Exit", url || this.defaultExitURL);
    };
    Platform.prototype._pageReady = function() {
        temple.isLive = Enabler.isServingInLiveEnvironment();
        if (typeof Enabler != "undefined") {
            if (Enabler.isInitialized()) this._pageLoaded(); else Enabler.addEventListener(studio.events.StudioEvent.INIT, this._pageLoaded.bind(this));
        } else {
            setTimeout(this.init.bind(this), 50);
        }
    };
    Platform.prototype._pageLoaded = function() {
        if (Enabler.isPageLoaded()) this._bannerInit(); else Enabler.addEventListener(studio.events.StudioEvent.PAGE_LOADED, this._bannerInit.bind(this));
    };
    Platform.prototype._tracker = function(title, repeat) {
        if (studio.video) return;
        if (repeat == undefined) repeat = true;
        this._trackedEvents = this._trackedEvents || [];
        if (this._trackedEvents.length > 19) return;
        if (repeat === false && this._trackedEvents.indexOf(title) >= 0) return;
        if (this._trackedEvents.indexOf(title) == -1) {
            this._trackedEvents.push(title);
        }
        Enabler.counter(title, repeat);
        temple.utils.debug("Tracked Event: " + (this._trackedEvents.indexOf(title) + 1) + " - " + title, "green");
    };
    Platform.prototype._addExitEvents = function() {
        Enabler.addEventListener(studio.events.StudioEvent.EXIT, this.onExit.bind(this));
    };
    return Platform;
}(temple.core.Core);

temple.platforms.Platform = temple.platforms.doubleclick.Platform;

temple.templates.StandardBanner = function(_super) {
    __extends(StandardBanner, _super);
    function StandardBanner() {
        _super.call(this, arguments[0]);
        temple.utils.debug("Template <" + arguments.callee.name + ">");
    }
    StandardBanner.prototype.show = function(autoplay) {
        if (this.config.video) if (this.config.video.autoplay && !autoplay) {
            this.dispatchEvent(temple.events.VideoEvents.AUTOPLAY);
            this.videoController.getSource(0).addEventListener(temple.events.VideoEvents.COMPLETE, this.startAnimation.bind(this), false);
            this.videoController.getSource(0).addEventListener(temple.events.VideoEvents.CLOSE, this.startAnimation.bind(this), false);
            return;
        }
        if (document.body.classList.contains("phantom-backup")) {
            this.onBackupImage();
        }
        this.banner.classList.remove("hide");
        if (this.config.video) if (!this.config.video.autoplay) this.startAnimation();
        if (!this.config.video) this.startAnimation();
        this.dispatchEvent(temple.events.SHOW);
        if (document.body.classList.contains("phantom-backup")) {
            alert('{"phantom":"phantom-backup"}');
        }
        if (this.config.ytmh) {
            temple.utils.createStyle("#ytClose", "z-index: 20;");
            if (this.config.ytmh.impression.length) {
                this.Impression_Pixel_URL = this.Impression_Pixel_URL || this.config.ytmh.impression;
            }
            if (this.config.ytmh.retargeting.length) {
                this.Click_Pixel_URL = this.Click_Pixel_URL || this.config.ytmh.retargeting;
            }
            if (this.Impression_Pixel_URL.length) {
                temple.utils.debug("Impression Pixel tracked | " + this.Impression_Pixel_URL, "blue");
                temple.utils.loadImage(this.Impression_Pixel_URL);
            }
            if (this.Click_Pixel_URL.length) {
                this.addEventListener(temple.events.EXIT, function() {
                    temple.utils.debug("Retargeting Pixel tracked | " + this.Click_Pixel_URL, "blue");
                    temple.utils.loadImage(this.Click_Pixel_URL);
                }.bind(this));
            }
        }
    };
    StandardBanner.prototype.onBannerClick = function() {
        this.exit();
    };
    StandardBanner.prototype.startAnimation = function() {};
    StandardBanner.prototype.onTabChange = function() {};
    StandardBanner.prototype.onBackupImage = function() {};
    StandardBanner.prototype.onExit = function() {};
    StandardBanner.prototype.onOver = function(e) {};
    StandardBanner.prototype.onOut = function(e) {};
    StandardBanner.prototype.init = function(e) {};
    StandardBanner.prototype._bannerInit = function() {
        _super.prototype._bannerInit(this);
        this._ready();
    };
    StandardBanner.prototype._ready = function() {
        this.banner = document.getElementById("banner");
        this.bannerClick = document.querySelectorAll(".bannerClick");
        if (document.body.classList.contains("phantom-backup")) {
            this.isBackup = true;
        }
        for (i = 0; i < this.bannerClick.length; i++) {
            this.bannerClick[i].addEventListener("click", this.onBannerClick.bind(this));
            this.bannerClick[i].addEventListener("mouseover", this.onOver.bind(this));
            this.bannerClick[i].addEventListener("mouseleave", this.onOut.bind(this));
        }
        this._addTabEvents();
        if (this._addExitEvents) this._addExitEvents(); else this.addEventListener(temple.events.EXIT, this.onExit.bind(this));
        this._politeLoads(function() {
            if (navigator.userAgent.toLowerCase().indexOf("firefox") > -1 && !window.innerHeight) {
                window.onresize = function() {
                    if (!temple.isVisible) {
                        temple.isVisible = true;
                        window.onresize = null;
                        this.dispatchEvent(temple.events.READY);
                        this.init();
                    }
                }.bind(this);
                if (!temple.isVisible) return;
            }
            this.dispatchEvent(temple.events.READY);
            this.init();
        });
    };
    StandardBanner.prototype._addTabEvents = function() {
        this._isHidden = false;
        if ("hidden" in document) {
            document.addEventListener("visibilitychange", this.onTabChange.bind(this));
        } else if ((this._isHidden = "mozHidden") in document) {
            document.addEventListener("mozvisibilitychange", this.onTabChange.bind(this));
        } else if ((this._isHidden = "webkitHidden") in document) {
            document.addEventListener("webkitvisibilitychange", this.onTabChange.bind(this));
        } else if ((this._isHidden = "msHidden") in document) {
            document.addEventListener("msvisibilitychange", this.onTabChange.bind(this));
        } else if ("onfocusin" in document) {
            document.onfocusin = document.onfocusout = this.onTabChange.bind(this);
        } else {
            window.onpageshow = window.onpagehide = window.onfocus = window.onblur = this.onTabChange.bind(this);
        }
    };
    return StandardBanner;
}(temple.platforms.Platform || temple.core.Core);

temple.Template = temple.templates.StandardBanner;

temple.Banner = function(_super) {
    __extends(banner, _super);
    function banner() {
        _super.call(this, arguments[0]);
    }
    banner.prototype.init = function() {
        this.chain(this.setupCopy).chain(this.show);
    };
    banner.prototype.setupCopy = function() {
        $(".copy1").innerHTML = this.config.copy1;
        $(".copy2").innerHTML = this.config.copy2;
        $(".ctaCopy").innerHTML = this.config.copyCta;
        this.setupBanner();
    };
    banner.prototype.setupBanner = function() {
        temple.utils.fitText($(".copy1"));
        temple.utils.fitText($(".copy2"));
        temple.utils.fitText($(".ctaCopy"));
        this.timeline = new TimelineMax({
            paused: true
        });
        this.timeline.add("frame1").from($(".imagesWrapper1"), 1, {
            opacity: 0,
            y: 62,
            ease: Power1.easeInOut
        }, "frame1").from($(".imagesWrapper2"), 1, {
            opacity: 0,
            y: -62,
            ease: Power1.easeInOut
        }, "frame1").add("frame2", "-=0.5").from($("#backgroundGradient"), 1, {
            opacity: 0,
            ease: Power1.easeOut
        }, "frame2+=0.8").from($("#logo"), 1, {
            opacity: 0,
            y: -15,
            ease: Power1.easeOut
        }, "frame2+=0.6").from($(".copy1"), 1, {
            opacity: 0,
            y: -25,
            ease: Power1.easeOut
        }, "frame2+=1.2").from($("#cta"), 1, {
            opacity: 0,
            y: -15,
            ease: Power1.easeOut
        }, "frame2+=1.8").add("textLabel").to($(".copy1"), 1, {
            opacity: 0,
            y: 10,
            ease: Power1.easeOut
        }, "textLabel+=1.4").from($(".copy2"), 1, {
            opacity: 0,
            y: -55,
            ease: Power1.easeOut
        }, "textLabel+=1.7").add("fadeImage", "-=2.5").to($(".imagesWrapper1_fade").getElementsByClassName("images")[0], 1, {
            opacity: 1,
            ease: Power1.easeOut
        }, "fadeImage").to($(".imagesWrapper2_fade").getElementsByClassName("images")[0], 1, {
            opacity: 1,
            ease: Power1.easeOut
        }, "fadeImage+=1").to($(".imagesWrapper3_fade").getElementsByClassName("images")[0], 1, {
            opacity: 1,
            ease: Power1.easeOut
        }, "fadeImage+=2");
    };
    banner.prototype.startAnimation = function() {
        this.timeline.play();
    };
    banner.prototype.onOver = function() {
        TweenMax.set($("#cta"), {
            background: "#004791"
        });
    };
    banner.prototype.onOut = function() {
        TweenMax.set($("#cta"), {
            clearProps: "background"
        });
    };
    banner.prototype.onExit = function() {
        this.timeline.progress(1);
    };
    return banner;
}(temple.Template);

var _gsScope = typeof module !== "undefined" && module.exports && typeof global !== "undefined" ? global : this || window;

(function(window) {
    "use strict";
    var _globals = window.GreenSockGlobals || window, _namespace = function(ns) {
        var a = ns.split("."), p = _globals, i;
        for (i = 0; i < a.length; i++) {
            p[a[i]] = p = p[a[i]] || {};
        }
        return p;
    }, pkg = _namespace("com.greensock.utils"), _getText = function(e) {
        var type = e.nodeType, result = "";
        if (type === 1 || type === 9 || type === 11) {
            if (typeof e.textContent === "string") {
                return e.textContent;
            } else {
                for (e = e.firstChild; e; e = e.nextSibling) {
                    result += _getText(e);
                }
            }
        } else if (type === 3 || type === 4) {
            return e.nodeValue;
        }
        return result;
    }, _doc = document, _getComputedStyle = _doc.defaultView ? _doc.defaultView.getComputedStyle : function() {}, _capsExp = /([A-Z])/g, _getStyle = function(t, p, cs, str) {
        var result;
        if (cs = cs || _getComputedStyle(t, null)) {
            t = cs.getPropertyValue(p.replace(_capsExp, "-$1").toLowerCase());
            result = t || cs.length ? t : cs[p];
        } else if (t.currentStyle) {
            cs = t.currentStyle;
            result = cs[p];
        }
        return str ? result : parseInt(result, 10) || 0;
    }, _isArrayLike = function(e) {
        return e.length && e[0] && (e[0].nodeType && e[0].style && !e.nodeType || e[0].length && e[0][0]) ? true : false;
    }, _flattenArray = function(a) {
        var result = [], l = a.length, i, e, j;
        for (i = 0; i < l; i++) {
            e = a[i];
            if (_isArrayLike(e)) {
                j = e.length;
                for (j = 0; j < e.length; j++) {
                    result.push(e[j]);
                }
            } else {
                result.push(e);
            }
        }
        return result;
    }, _stripExp = /(?:\r|\n|\t\t)/g, _multipleSpacesExp = /(?:\s\s+)/g, _emojiStart = 55296, _emojiEnd = 56319, _emojiLowStart = 56320, _emojiRegionStart = 127462, _emojiRegionEnd = 127487, _emojiModStart = 127995, _emojiModEnd = 127999, _emojiPairCode = function(s) {
        return (s.charCodeAt(0) - _emojiStart << 10) + (s.charCodeAt(1) - _emojiLowStart) + 65536;
    }, _isOldIE = _doc.all && !_doc.addEventListener, _divStart = " style='position:relative;display:inline-block;" + (_isOldIE ? "*display:inline;*zoom:1;'" : "'"), _cssClassFunc = function(cssClass, tag) {
        cssClass = cssClass || "";
        var iterate = cssClass.indexOf("++") !== -1, num = 1;
        if (iterate) {
            cssClass = cssClass.split("++").join("");
        }
        return function() {
            return "<" + tag + _divStart + (cssClass ? " class='" + cssClass + (iterate ? num++ : "") + "'>" : ">");
        };
    }, SplitText = pkg.SplitText = _globals.SplitText = function(element, vars) {
        if (typeof element === "string") {
            element = SplitText.selector(element);
        }
        if (!element) {
            throw "cannot split a null element.";
        }
        this.elements = _isArrayLike(element) ? _flattenArray(element) : [ element ];
        this.chars = [];
        this.words = [];
        this.lines = [];
        this._originals = [];
        this.vars = vars || {};
        this.split(vars);
    }, _swapText = function(element, oldText, newText) {
        var type = element.nodeType;
        if (type === 1 || type === 9 || type === 11) {
            for (element = element.firstChild; element; element = element.nextSibling) {
                _swapText(element, oldText, newText);
            }
        } else if (type === 3 || type === 4) {
            element.nodeValue = element.nodeValue.split(oldText).join(newText);
        }
    }, _pushReversed = function(a, merge) {
        var i = merge.length;
        while (--i > -1) {
            a.push(merge[i]);
        }
    }, _slice = function(a) {
        var b = [], l = a.length, i;
        for (i = 0; i !== l; b.push(a[i++])) {}
        return b;
    }, _isBeforeWordDelimiter = function(e, root, wordDelimiter) {
        var next;
        while (e && e !== root) {
            next = e._next || e.nextSibling;
            if (next) {
                return next.textContent.charAt(0) === wordDelimiter;
            }
            e = e.parentNode || e._parent;
        }
        return false;
    }, _deWordify = function(e) {
        var children = _slice(e.childNodes), l = children.length, i, child;
        for (i = 0; i < l; i++) {
            child = children[i];
            if (child._isSplit) {
                _deWordify(child);
            } else {
                if (i && child.previousSibling.nodeType === 3) {
                    child.previousSibling.nodeValue += child.nodeType === 3 ? child.nodeValue : child.firstChild.nodeValue;
                } else if (child.nodeType !== 3) {
                    e.insertBefore(child.firstChild, child);
                }
                e.removeChild(child);
            }
        }
    }, _setPositionsAfterSplit = function(element, vars, allChars, allWords, allLines, origWidth, origHeight) {
        var cs = _getComputedStyle(element), paddingLeft = _getStyle(element, "paddingLeft", cs), lineOffsetY = -999, borderTopAndBottom = _getStyle(element, "borderBottomWidth", cs) + _getStyle(element, "borderTopWidth", cs), borderLeftAndRight = _getStyle(element, "borderLeftWidth", cs) + _getStyle(element, "borderRightWidth", cs), padTopAndBottom = _getStyle(element, "paddingTop", cs) + _getStyle(element, "paddingBottom", cs), padLeftAndRight = _getStyle(element, "paddingLeft", cs) + _getStyle(element, "paddingRight", cs), lineThreshold = _getStyle(element, "fontSize") * .2, textAlign = _getStyle(element, "textAlign", cs, true), charArray = [], wordArray = [], lineArray = [], wordDelimiter = vars.wordDelimiter || " ", tag = vars.span ? "span" : "div", types = vars.type || vars.split || "chars,words,lines", lines = allLines && types.indexOf("lines") !== -1 ? [] : null, words = types.indexOf("words") !== -1, chars = types.indexOf("chars") !== -1, absolute = vars.position === "absolute" || vars.absolute === true, linesClass = vars.linesClass, iterateLine = (linesClass || "").indexOf("++") !== -1, i, j, l, node, nodes, isChild, curLine, addWordSpaces, style, lineNode, lineWidth, offset;
        if (lines && element.children.length === 1 && element.children[0]._isSplit) {
            element = element.children[0];
        }
        if (iterateLine) {
            linesClass = linesClass.split("++").join("");
        }
        j = element.getElementsByTagName("*");
        l = j.length;
        nodes = [];
        for (i = 0; i < l; i++) {
            nodes[i] = j[i];
        }
        if (lines || absolute) {
            for (i = 0; i < l; i++) {
                node = nodes[i];
                isChild = node.parentNode === element;
                if (isChild || absolute || chars && !words) {
                    offset = node.offsetTop;
                    if (lines && isChild && Math.abs(offset - lineOffsetY) > lineThreshold && node.nodeName !== "BR") {
                        curLine = [];
                        lines.push(curLine);
                        lineOffsetY = offset;
                    }
                    if (absolute) {
                        node._x = node.offsetLeft;
                        node._y = offset;
                        node._w = node.offsetWidth;
                        node._h = node.offsetHeight;
                    }
                    if (lines) {
                        if (node._isSplit && isChild || !chars && isChild || words && isChild || !words && node.parentNode.parentNode === element && !node.parentNode._isSplit) {
                            curLine.push(node);
                            node._x -= paddingLeft;
                            if (_isBeforeWordDelimiter(node, element, wordDelimiter)) {
                                node._wordEnd = true;
                            }
                        }
                        if (node.nodeName === "BR" && node.nextSibling && node.nextSibling.nodeName === "BR") {
                            lines.push([]);
                        }
                    }
                }
            }
        }
        for (i = 0; i < l; i++) {
            node = nodes[i];
            isChild = node.parentNode === element;
            if (node.nodeName === "BR") {
                if (lines || absolute) {
                    element.removeChild(node);
                    nodes.splice(i--, 1);
                    l--;
                } else if (!words) {
                    element.appendChild(node);
                }
                continue;
            }
            if (absolute) {
                style = node.style;
                if (!words && !isChild) {
                    node._x += node.parentNode._x;
                    node._y += node.parentNode._y;
                }
                style.left = node._x + "px";
                style.top = node._y + "px";
                style.position = "absolute";
                style.display = "block";
                style.width = node._w + 1 + "px";
                style.height = node._h + "px";
            }
            if (!words && chars) {
                if (node._isSplit) {
                    node._next = node.nextSibling;
                    node.parentNode.appendChild(node);
                } else if (node.parentNode._isSplit) {
                    node._parent = node.parentNode;
                    if (!node.previousSibling && node.firstChild) {
                        node.firstChild._isFirst = true;
                    }
                    node._next = node.nextSibling && node.nextSibling._isFirst ? null : node.nextSibling;
                    node.parentNode.removeChild(node);
                    nodes.splice(i--, 1);
                    l--;
                } else if (!isChild) {
                    offset = !node.nextSibling && _isBeforeWordDelimiter(node.parentNode, element, wordDelimiter);
                    if (node.parentNode._parent) {
                        node.parentNode._parent.appendChild(node);
                    }
                    if (offset) {
                        node.parentNode.appendChild(_doc.createTextNode(" "));
                    }
                    if (vars.span) {
                        node.style.display = "inline";
                    }
                    charArray.push(node);
                }
            } else if (node.parentNode._isSplit && !node._isSplit && node.innerHTML !== "") {
                wordArray.push(node);
            } else if (chars && !node._isSplit) {
                if (vars.span) {
                    node.style.display = "inline";
                }
                charArray.push(node);
            }
        }
        if (lines) {
            if (absolute) {
                lineNode = _doc.createElement(tag);
                element.appendChild(lineNode);
                lineWidth = lineNode.offsetWidth + "px";
                offset = lineNode.offsetParent === element ? 0 : element.offsetLeft;
                element.removeChild(lineNode);
            }
            style = element.style.cssText;
            element.style.cssText = "display:none;";
            while (element.firstChild) {
                element.removeChild(element.firstChild);
            }
            addWordSpaces = wordDelimiter === " " && (!absolute || !words && !chars);
            for (i = 0; i < lines.length; i++) {
                curLine = lines[i];
                lineNode = _doc.createElement(tag);
                lineNode.style.cssText = "display:block;text-align:" + textAlign + ";position:" + (absolute ? "absolute;" : "relative;");
                if (linesClass) {
                    lineNode.className = linesClass + (iterateLine ? i + 1 : "");
                }
                lineArray.push(lineNode);
                l = curLine.length;
                for (j = 0; j < l; j++) {
                    if (curLine[j].nodeName !== "BR") {
                        node = curLine[j];
                        lineNode.appendChild(node);
                        if (addWordSpaces && node._wordEnd) {
                            lineNode.appendChild(_doc.createTextNode(" "));
                        }
                        if (absolute) {
                            if (j === 0) {
                                lineNode.style.top = node._y + "px";
                                lineNode.style.left = paddingLeft + offset + "px";
                            }
                            node.style.top = "0px";
                            if (offset) {
                                node.style.left = node._x - offset + "px";
                            }
                        }
                    }
                }
                if (l === 0) {
                    lineNode.innerHTML = "&nbsp;";
                } else if (!words && !chars) {
                    _deWordify(lineNode);
                    _swapText(lineNode, String.fromCharCode(160), " ");
                }
                if (absolute) {
                    lineNode.style.width = lineWidth;
                    lineNode.style.height = node._h + "px";
                }
                element.appendChild(lineNode);
            }
            element.style.cssText = style;
        }
        if (absolute) {
            if (origHeight > element.clientHeight) {
                element.style.height = origHeight - padTopAndBottom + "px";
                if (element.clientHeight < origHeight) {
                    element.style.height = origHeight + borderTopAndBottom + "px";
                }
            }
            if (origWidth > element.clientWidth) {
                element.style.width = origWidth - padLeftAndRight + "px";
                if (element.clientWidth < origWidth) {
                    element.style.width = origWidth + borderLeftAndRight + "px";
                }
            }
        }
        _pushReversed(allChars, charArray);
        _pushReversed(allWords, wordArray);
        _pushReversed(allLines, lineArray);
    }, _splitRawText = function(element, vars, wordStart, charStart) {
        var tag = vars.span ? "span" : "div", types = vars.type || vars.split || "chars,words,lines", words = types.indexOf("words") !== -1, chars = types.indexOf("chars") !== -1, absolute = vars.position === "absolute" || vars.absolute === true, wordDelimiter = vars.wordDelimiter || " ", space = wordDelimiter !== " " ? "" : absolute ? "&#173; " : " ", wordEnd = vars.span ? "</span>" : "</div>", wordIsOpen = true, text, splitText, i, j, l, character, hasTagStart, emojiPair1, emojiPair2, container = _doc.createElement("div"), parent = element.parentNode;
        parent.insertBefore(container, element);
        container.textContent = element.nodeValue;
        parent.removeChild(element);
        element = container;
        text = _getText(element);
        hasTagStart = text.indexOf("<") !== -1;
        if (vars.reduceWhiteSpace !== false) {
            text = text.replace(_multipleSpacesExp, " ").replace(_stripExp, "");
        }
        if (hasTagStart) {
            text = text.split("<").join("{{LT}}");
        }
        l = text.length;
        splitText = (text.charAt(0) === " " ? space : "") + wordStart();
        for (i = 0; i < l; i++) {
            character = text.charAt(i);
            if (character === wordDelimiter && text.charAt(i - 1) !== wordDelimiter && i) {
                splitText += wordIsOpen ? wordEnd : "";
                wordIsOpen = false;
                while (text.charAt(i + 1) === wordDelimiter) {
                    splitText += space;
                    i++;
                }
                if (i === l - 1) {
                    splitText += space;
                } else if (text.charAt(i + 1) !== ")") {
                    splitText += space + wordStart();
                    wordIsOpen = true;
                }
            } else if (character === "{" && text.substr(i, 6) === "{{LT}}") {
                splitText += chars ? charStart() + "{{LT}}" + "</" + tag + ">" : "{{LT}}";
                i += 5;
            } else if (character.charCodeAt(0) >= _emojiStart && character.charCodeAt(0) <= _emojiEnd || text.charCodeAt(i + 1) >= 65024 && text.charCodeAt(i + 1) <= 65039) {
                emojiPair1 = _emojiPairCode(text.substr(i, 2));
                emojiPair2 = _emojiPairCode(text.substr(i + 2, 2));
                j = emojiPair1 >= _emojiRegionStart && emojiPair1 <= _emojiRegionEnd && emojiPair2 >= _emojiRegionStart && emojiPair2 <= _emojiRegionEnd || emojiPair2 >= _emojiModStart && emojiPair2 <= _emojiModEnd ? 4 : 2;
                splitText += chars && character !== " " ? charStart() + text.substr(i, j) + "</" + tag + ">" : text.substr(i, j);
                i += j - 1;
            } else {
                splitText += chars && character !== " " ? charStart() + character + "</" + tag + ">" : character;
            }
        }
        element.outerHTML = splitText + (wordIsOpen ? wordEnd : "");
        if (hasTagStart) {
            _swapText(parent, "{{LT}}", "<");
        }
    }, _split = function(element, vars, wordStart, charStart) {
        var children = _slice(element.childNodes), l = children.length, absolute = vars.position === "absolute" || vars.absolute === true, i, child;
        if (element.nodeType !== 3 || l > 1) {
            vars.absolute = false;
            for (i = 0; i < l; i++) {
                child = children[i];
                if (child.nodeType !== 3 || /\S+/.test(child.nodeValue)) {
                    if (absolute && child.nodeType !== 3 && _getStyle(child, "display", null, true) === "inline") {
                        child.style.display = "inline-block";
                        child.style.position = "relative";
                    }
                    child._isSplit = true;
                    _split(child, vars, wordStart, charStart);
                }
            }
            vars.absolute = absolute;
            element._isSplit = true;
            return;
        }
        _splitRawText(element, vars, wordStart, charStart);
    }, p = SplitText.prototype;
    p.split = function(vars) {
        if (this.isSplit) {
            this.revert();
        }
        this.vars = vars = vars || this.vars;
        this._originals.length = this.chars.length = this.words.length = this.lines.length = 0;
        var i = this.elements.length, tag = vars.span ? "span" : "div", absolute = vars.position === "absolute" || vars.absolute === true, wordStart = _cssClassFunc(vars.wordsClass, tag), charStart = _cssClassFunc(vars.charsClass, tag), origHeight, origWidth, e;
        while (--i > -1) {
            e = this.elements[i];
            this._originals[i] = e.innerHTML;
            origHeight = e.clientHeight;
            origWidth = e.clientWidth;
            _split(e, vars, wordStart, charStart);
            _setPositionsAfterSplit(e, vars, this.chars, this.words, this.lines, origWidth, origHeight);
        }
        this.chars.reverse();
        this.words.reverse();
        this.lines.reverse();
        this.isSplit = true;
        return this;
    };
    p.revert = function() {
        if (!this._originals) {
            throw "revert() call wasn't scoped properly.";
        }
        var i = this._originals.length;
        while (--i > -1) {
            this.elements[i].innerHTML = this._originals[i];
        }
        this.chars = [];
        this.words = [];
        this.lines = [];
        this.isSplit = false;
        return this;
    };
    SplitText.selector = window.$ || window.jQuery || function(e) {
        var selector = window.$ || window.jQuery;
        if (selector) {
            SplitText.selector = selector;
            return selector(e);
        }
        return typeof document === "undefined" ? e : document.querySelectorAll ? document.querySelectorAll(e) : document.getElementById(e.charAt(0) === "#" ? e.substr(1) : e);
    };
    SplitText.version = "0.5.6";
})(_gsScope);

(function(name) {
    "use strict";
    var getGlobal = function() {
        return (_gsScope.GreenSockGlobals || _gsScope)[name];
    };
    if (typeof define === "function" && define.amd) {
        define([], getGlobal);
    } else if (typeof module !== "undefined" && module.exports) {
        module.exports = getGlobal();
    }
})("SplitText");