(() => {
  "use strict";
  var __webpack_modules__ = {
      65: (e, t, r) => {
        r.d(t, { A: () => o });
        const o = {
          INJECT_CSS: "bdbrowser-inject-css",
          MAKE_REQUESTS: "bdbrowser-make-requests",
          INJECT_THEME: "bdbrowser-inject-theme",
        };
      },
      706: (e, t, r) => {
        r.d(t, { Z: () => o });
        class o {
          static createElement(e, t = {}, ...r) {
            const o = document.createElement(e);
            Object.assign(o, t);
            for (const e of r) o.append(e);
            return o;
          }
          static injectTheme(e, t) {
            const [r] = document.getElementsByTagName("bd-themes"),
              o = this.createElement("style", { id: e, type: "text/css", innerHTML: t });
            o.setAttribute("data-bd-native", ""), r.append(o);
          }
          static injectCSS(e, t) {
            const r = this.createElement("style", { id: e, type: "text/css", innerHTML: t });
            this.headAppend(r);
          }
          static removeCSS(e) {
            const t = document.querySelector("style#" + e);
            t && t.remove();
          }
          static injectJS(e, t, r = !0) {
            const o = this.createElement("script", { id: e, type: "text/javascript", src: t });
            this.headAppend(o),
              r &&
                o.addEventListener(
                  "load",
                  () => {
                    o.remove();
                  },
                  { once: !0 }
                );
          }
        }
        o.headAppend = document.head.append.bind(document.head);
      },
      602: (e, t, r) => {
        r.d(t, { Z: () => o });
        class o {
          static _parseType(e) {
            switch (e) {
              case "info":
              case "warn":
              case "error":
                return e;
              default:
                return "log";
            }
          }
          static _log(e, t, ...r) {
            (e = this._parseType(e)),
              console[e](
                `%c[BetterDiscord]%c %c[${t}]%c`,
                "color: #3E82E5; font-weight: 700;",
                "",
                "color: #396CB8",
                "",
                ...r
              );
          }
          static log(e, ...t) {
            this._log("log", e, ...t);
          }
          static info(e, ...t) {
            this._log("info", e, ...t);
          }
          static warn(e, ...t) {
            this._log("warn", e, ...t);
          }
          static error(e, ...t) {
            this._log("error", e, ...t);
          }
        }
      },
      229: (e, t, r) => {
        r.d(t, { Z: () => o });
        const o = new (class {
          constructor(e) {
            if (!e) throw new Error("Context is required");
            this.context = e;
          }
          createHash() {
            return Math.random().toString(36).substr(2, 10);
          }
          reply(e, t) {
            this.send(e.event + "-reply", t, void 0, e.hash);
          }
          on(e, t, r = !1) {
            const o = (n) => {
              n.data.event === e &&
                n.data.context !== this.context &&
                1 == t(n.data, n.data.data) &&
                r &&
                window.removeEventListener("message", o);
            };
            window.addEventListener("message", o);
          }
          send(e, t, r = null, o) {
            o || (o = this.createHash()),
              r && this.on(e + "-reply", (e) => e.hash === o && (r(e.data), !0), !0),
              window.postMessage({
                source: "betterdiscord-browser-" + this.context,
                event: e,
                context: this.context,
                hash: o,
                data: t,
              });
          }
        })("frontend");
      },
      735: (e, t, r) => {
        r.r(t), r.d(t, { globals: () => n, app: () => i });
        var o = r(323);
        const n = {
            get releaseChannel() {
              return location.href.includes("canary")
                ? "canary"
                : location.href.includes("ptb")
                ? "ptb"
                : "stable";
            },
          },
          i = {
            getReleaseChannel: () => n.releaseChannel,
            getVersion: () => "1.0.9002",
            async getPath(e) {
              switch (e) {
                case "appData":
                  return o.Z.env.APPDATA;
                default:
                  throw new Error("Cannot find path: " + e);
              }
            },
          };
      },
      287: (e, t, r) => {
        r.d(t, { Z: () => o });
        class o {
          constructor() {
            var e, t;
            (t = {}),
              (e = "listeners") in this
                ? Object.defineProperty(this, e, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (this[e] = t);
          }
          emit(e, ...t) {
            this.listeners[e] &&
              this.listeners[e].forEach((r) => {
                try {
                  r(...t);
                } catch (t) {
                  console.error(
                    `[BetterDiscord] Could not fire event [${e}] for ${r.toString().slice(0, 20)}:`,
                    t
                  );
                }
              });
          }
          get off() {
            return this.removeListener;
          }
          on(e, t) {
            this.listeners[e] || (this.listeners[e] = new Set()), this.listeners[e].add(t);
          }
          removeListener(e, t) {
            this.listeners[e] && this.listeners[e].delete(t);
          }
          setMaxListeners() {}
        }
        o.EventEmitter = o;
      },
      551: (e, t, r) => {
        r.d(t, { Z: () => i });
        var o = r(229),
          n = r(65);
        function i(e) {
          return new Promise((t) => {
            o.Z.send(n.A.MAKE_REQUESTS, { url: e }, (r) => {
              t(new Response(r, { url: e }));
            });
          });
        }
      },
      66: (e, t, r) => {
        r.r(t),
          r.d(t, {
            getStore: () => s,
            writeFileSync: () => a,
            writeFile: () => c,
            mkdirSync: () => l,
            readdirSync: () => d,
            readFileSync: () => u,
            existsSync: () => m,
            exists: () => p,
            statSync: () => E,
            unlinkSync: () => h,
            normalizePath: () => f,
            realpathSync: () => O,
            basename: () => g,
            watch: () => b,
            default: () => D,
          });
        var o = r(287),
          n = r(578);
        const i = /\.(.+)$/;
        function _(e) {
          return i.test(e);
        }
        function s() {
          return JSON.parse(
            (0, n.r)("bd-files") ||
              JSON.stringify(
                (function (e) {
                  let t = { type: "dir", files: {} },
                    r = t;
                  const o = "AppData/BetterDiscord".split("/");
                  for (const e in o) {
                    const t = o[e];
                    if (_(t)) continue;
                    let n = { type: "dir", files: {} };
                    (r.files[t] = n), (r = n);
                  }
                  return t;
                })()
              )
          );
        }
        function a(e, t) {
          e = f(e);
          const r = s(),
            o = e.split("/"),
            i = o[o.length - 1];
          if (!_(i)) return !1;
          let a = r;
          for (const e in o) {
            var c;
            const r = o[e],
              n = parseInt(e) === o.length - 1;
            if ((n || (a = null === (c = a.files) || void 0 === c ? void 0 : c[r]), !a && !n))
              return "NOT_FOUND";
            if (n) {
              if ("dir" !== a.type) return "NOT_A_DIR";
              a.files[i] = { type: "file", content: t };
            }
          }
          (0, n.L)("bd-files", JSON.stringify(r));
        }
        function c(e, t, r) {
          try {
            a(e, t), r(null);
          } catch (e) {
            r(e);
          }
        }
        function l(e) {
          e = f(e);
          const t = s(),
            r = e.split("/"),
            o = r[r.length - 1];
          if (_(o)) return !1;
          let i = t;
          for (let e = 0; e < r.length; e++) {
            var a;
            const t = r[e],
              n = e === r.length - 1;
            if (!i) return;
            if ((n || (i = null === (a = i.files) || void 0 === a ? void 0 : a[t]), !i && !n))
              return "NOT_FOUND";
            if (n) {
              if ("dir" !== i.type) return "NOT_A_DIR";
              i.files[o] = { type: "dir", files: {} };
            }
          }
          (0, n.L)("bd-files", JSON.stringify(t));
        }
        function d(e) {
          e = f(e);
          const t = [],
            r = s(),
            o = e.split("/");
          let n = r;
          for (let e = 0; e < o.length; e++) {
            var i;
            const r = e === o.length - 1,
              _ = o[e];
            if (((n = null === (i = n.files) || void 0 === i ? void 0 : i[_]), !n && !r))
              return "NOT_FOUND";
            if (r && n) {
              if ("dir" !== n.type) return "NOT_A_DIR";
              t.push(...Object.keys(n.files));
            }
          }
          return t.sort();
        }
        function u(e) {
          e = f(e);
          const t = s(),
            r = e.split("/");
          let o = t;
          for (let e = 0; e < r.length; e++) {
            var n;
            const t = e === r.length - 1,
              i = r[e];
            if (((o = null === (n = o.files) || void 0 === n ? void 0 : n[i]), !o && !t))
              return "NOT_FOUND";
            if (t && o) return "file" !== o.type ? "NOT_A_FILE" : o.content;
          }
        }
        function m(e) {
          const t = E((e = f(e)));
          return t.isFile() || t.isDirectory();
        }
        new o.Z(),
          (0, n.r)("bd-files") ||
            (0, n.L)(
              "bd-files",
              JSON.stringify({
                type: "dir",
                files: {
                  AppData: {
                    type: "dir",
                    files: {
                      BetterDiscord: {
                        type: "dir",
                        files: {
                          plugins: { type: "dir", files: {} },
                          themes: { type: "dir", files: {} },
                          data: { type: "dir", files: {} },
                        },
                      },
                    },
                  },
                },
              })
            );
        const p = m;
        function E(e) {
          e = f(e);
          const t = s(),
            r = e.split("/");
          let o = t;
          for (const e of r) {
            var n, i;
            o =
              null === (n = o) || void 0 === n || null === (i = n.files) || void 0 === i
                ? void 0
                : i[e];
          }
          return {
            mtime: { getTime: () => Date.now() },
            isFile: () => {
              var e;
              return "file" === (null === (e = o) || void 0 === e ? void 0 : e.type);
            },
            isDirectory: () => {
              var e;
              return "dir" === (null === (e = o) || void 0 === e ? void 0 : e.type);
            },
          };
        }
        function h(e) {
          e = f(e);
          const t = s(),
            r = e.split("/"),
            o = r[r.length - 1];
          let i = t;
          for (let e = 0; e < r.length; e++) {
            var _;
            const t = r[e],
              n = e === r.length - 1;
            if (!i) return;
            if ((n || (i = null === (_ = i.files) || void 0 === _ ? void 0 : _[t]), !i && !n))
              return "NOT_FOUND";
            n && delete i.files[o];
          }
          (0, n.L)("bd-files", JSON.stringify(t));
        }
        function f(e) {
          return e.replace(/\\/g, "/");
        }
        const O = f;
        function g(e) {
          if (e) return e.split(/\/|\\/).pop();
        }
        function b(e, t, r) {}
        const D = {
          watch: b,
          mkdirSync: l,
          readdirSync: d,
          readFileSync: u,
          existsSync: m,
          writeFileSync: a,
          getStore: s,
          statSync: E,
          realpathSync: f,
          writeFile: c,
          basename: g,
          unlinkSync: h,
        };
      },
      578: (e, t, r) => {
        r.d(t, { r: () => i, L: () => _ });
        var o,
          n = r(343);
        function i(e, t) {
          return (o || (o = (0, n.findByProps)("get", "set", "stringify"))).get(e, t);
        }
        function _(e, t) {
          return (o || (o = (0, n.findByProps)("get", "set", "stringify"))).set(e, t);
        }
      },
      301: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, { Z: () => __WEBPACK_DEFAULT_EXPORT__ });
        var _fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66),
          _path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(878);
        const globalPaths = [],
          _extensions = {
            ".json": (e, t) => {
              const r = _fs__WEBPACK_IMPORTED_MODULE_0__.default.readFileSync(t);
              e.exports = JSON.parse(r);
            },
            ".js": (e, t) => {
              console.log(e, t);
            },
          };
        function _require(path, req) {
          const extension = "." + (0, _path__WEBPACK_IMPORTED_MODULE_1__.extname)(path),
            loader = _extensions[extension];
          if (!loader) throw new Error("Unkown File extension " + path);
          const existsFile = _fs__WEBPACK_IMPORTED_MODULE_0__.default.existsSync(path);
          if ((path || console.log(path), !existsFile)) throw new Error("Module not found!");
          if (req.cache[path]) return req.cache[path];
          const final = {
            exports: {},
            filename: path,
            _compile: (content) => {
              let { module } = eval(
                `((module, global) => {\n                ${content}\n\n                return {\n                    module\n                };\n            })({exports: {}}, window)`
              );
              return (
                Object.keys(module.exports).length && (final.exports = module.exports),
                final.exports
              );
            },
          };
          return loader(final, path), (req.cache[path] = final.exports);
        }
        const __WEBPACK_DEFAULT_EXPORT__ = { Module: { globalPaths, _extensions }, _require };
      },
      585: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.r(__webpack_exports__),
          __webpack_require__.d(__webpack_exports__, { editor: () => editor });
        var common_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65),
          common_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(706),
          _ipc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(229),
          _fetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(551),
          _webpack__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(343);
        const UserSettingsStore = (0, _webpack__WEBPACK_IMPORTED_MODULE_4__.findByProps)(
            "theme",
            "afkTimeout"
          ),
          version = "5.62.0",
          links = [
            `https://cdnjs.cloudflare.com/ajax/libs/codemirror/${version}/codemirror.min.js`,
            `https://cdnjs.cloudflare.com/ajax/libs/codemirror/${version}/mode/css/css.js`,
            `https://cdnjs.cloudflare.com/ajax/libs/codemirror/${version}/mode/javascript/javascript.js`,
            `https://cdnjs.cloudflare.com/ajax/libs/codemirror/${version}/addon/search/search.js`,
            `https://cdnjs.cloudflare.com/ajax/libs/codemirror/${version}/addon/search/searchcursor.js`,
            `https://cdnjs.cloudflare.com/ajax/libs/codemirror/${version}/addon/search/jump-to-line.js`,
          ],
          cssCodes = [
            "/*  Name:       material  Author:     Mattia Astorino (http://github.com/equinusocio)  Website:    https://material-theme.site/*/.cm-s-material-darker.CodeMirror {  background-color: #212121;  color: #EEFFFF;}.cm-s-material-darker .CodeMirror-gutters {  background: #212121;  color: #545454;  border: none;}.cm-s-material-darker .CodeMirror-guttermarker,.cm-s-material-darker .CodeMirror-guttermarker-subtle,.cm-s-material-darker .CodeMirror-linenumber {  color: #545454;}.cm-s-material-darker .CodeMirror-cursor {  border-left: 1px solid #FFCC00;}.cm-s-material-darker div.CodeMirror-selected {  background: rgba(97, 97, 97, 0.2);}.cm-s-material-darker.CodeMirror-focused div.CodeMirror-selected {  background: rgba(97, 97, 97, 0.2);}.cm-s-material-darker .CodeMirror-line::selection,.cm-s-material-darker .CodeMirror-line>span::selection,.cm-s-material-darker .CodeMirror-line>span>span::selection {  background: rgba(128, 203, 196, 0.2);}.cm-s-material-darker .CodeMirror-line::-moz-selection,.cm-s-material-darker .CodeMirror-line>span::-moz-selection,.cm-s-material-darker .CodeMirror-line>span>span::-moz-selection {  background: rgba(128, 203, 196, 0.2);}.cm-s-material-darker .CodeMirror-activeline-background {  background: rgba(0, 0, 0, 0.5);}.cm-s-material-darker .cm-keyword {  color: #C792EA;}.cm-s-material-darker .cm-operator {  color: #89DDFF;}.cm-s-material-darker .cm-variable-2 {  color: #EEFFFF;}.cm-s-material-darker .cm-variable-3,.cm-s-material-darker .cm-type {  color: #f07178;}.cm-s-material-darker .cm-builtin {  color: #FFCB6B;}.cm-s-material-darker .cm-atom {  color: #F78C6C;}.cm-s-material-darker .cm-number {  color: #FF5370;}.cm-s-material-darker .cm-def {  color: #82AAFF;}.cm-s-material-darker .cm-string {  color: #C3E88D;}.cm-s-material-darker .cm-string-2 {  color: #f07178;}.cm-s-material-darker .cm-comment {  color: #545454;}.cm-s-material-darker .cm-variable {  color: #f07178;}.cm-s-material-darker .cm-tag {  color: #FF5370;}.cm-s-material-darker .cm-meta {  color: #FFCB6B;}.cm-s-material-darker .cm-attribute {  color: #C792EA;}.cm-s-material-darker .cm-property {  color: #C792EA;}.cm-s-material-darker .cm-qualifier {  color: #DECB6B;}.cm-s-material-darker .cm-variable-3,.cm-s-material-darker .cm-type {  color: #DECB6B;}.cm-s-material-darker .cm-error {  color: rgba(255, 255, 255, 1.0);  background-color: #FF5370;}.cm-s-material-darker .CodeMirror-matchingbracket {  text-decoration: underline;  color: white !important;}",
            '/*Copyright (C) 2011 by MarkLogic CorporationAuthor: Mike Brevoort <mike@brevoort.com>Permission is hereby granted, free of charge, to any person obtaining a copyof this software and associated documentation files (the "Software"), to dealin the Software without restriction, including without limitation the rightsto use, copy, modify, merge, publish, distribute, sublicense, and/or sellcopies of the Software, and to permit persons to whom the Software isfurnished to do so, subject to the following conditions:The above copyright notice and this permission notice shall be included inall copies or substantial portions of the Software.THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS ORIMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THEAUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHERLIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS INTHE SOFTWARE.*/.cm-s-xq-light span.cm-keyword { line-height: 1em; font-weight: bold; color: #5A5CAD; }.cm-s-xq-light span.cm-atom { color: #6C8CD5; }.cm-s-xq-light span.cm-number { color: #164; }.cm-s-xq-light span.cm-def { text-decoration:underline; }.cm-s-xq-light span.cm-variable { color: black; }.cm-s-xq-light span.cm-variable-2 { color:black; }.cm-s-xq-light span.cm-variable-3, .cm-s-xq-light span.cm-type { color: black; }.cm-s-xq-light span.cm-property {}.cm-s-xq-light span.cm-operator {}.cm-s-xq-light span.cm-comment { color: #0080FF; font-style: italic; }.cm-s-xq-light span.cm-string { color: red; }.cm-s-xq-light span.cm-meta { color: yellow; }.cm-s-xq-light span.cm-qualifier { color: grey; }.cm-s-xq-light span.cm-builtin { color: #7EA656; }.cm-s-xq-light span.cm-bracket { color: #cc7; }.cm-s-xq-light span.cm-tag { color: #3F7F7F; }.cm-s-xq-light span.cm-attribute { color: #7F007F; }.cm-s-xq-light span.cm-error { color: #f00; }.cm-s-xq-light .CodeMirror-activeline-background { background: #e8f2ff; }.cm-s-xq-light .CodeMirror-matchingbracket { outline:1px solid grey;color:black !important;background:yellow; }',
          ];
        Promise.all(
          links.map((link, i) =>
            (0, _fetch__WEBPACK_IMPORTED_MODULE_3__.Z)(link)
              .then((e) => e.text())
              .then(async (code) => {
                if (i > 0 && !window.CodeMirror)
                  for (; !window.CodeMirror; ) await new Promise((e) => setTimeout(e, 200));
                eval(code);
              })
          )
        ),
          (0, _fetch__WEBPACK_IMPORTED_MODULE_3__.Z)(
            `https://cdnjs.cloudflare.com/ajax/libs/codemirror/${version}/codemirror.min.css`
          )
            .then((e) => e.text())
            .then((e) => {
              _ipc__WEBPACK_IMPORTED_MODULE_2__.Z.send(
                common_constants__WEBPACK_IMPORTED_MODULE_0__.A.INJECT_CSS,
                { css: e, id: "code-mirror-style" }
              );
            });
        for (const e of cssCodes)
          _ipc__WEBPACK_IMPORTED_MODULE_2__.Z.send(
            common_constants__WEBPACK_IMPORTED_MODULE_0__.A.INJECT_CSS,
            { css: e, id: "code-mirror-theme-" + cssCodes.indexOf(e) }
          );
        const editor = {
          _active: [],
          setTheme: (e) => {
            editor._active.forEach((t) => t.setOption("theme", e));
          },
          create: (e, t) => {
            const r = common_dom__WEBPACK_IMPORTED_MODULE_1__.Z.createElement("textarea", {});
            e.appendChild(r);
            const o = CodeMirror.fromTextArea(r, {
              mode: t.language,
              lineNumbers: !0,
              theme: "light" === UserSettingsStore.theme ? "xq-light" : "material-darker",
            });
            return (
              o.setValue(t.value),
              editor._active.push(o),
              {
                dispose: () => {
                  editor._active.splice(editor._active.indexOf(o), 1);
                },
                onDidChangeModelContent: (e) => (
                  o.on("change", () => e()), { dispose: () => o.off("change", e) }
                ),
                getValue: () => o.getValue(),
                setValue: (e) => o.setValue(e),
                layout: () => {},
                $defaultHandler: { commands: { showSettingsMenu: { exec: () => {} } } },
              }
            );
          },
        };
      },
      580: (__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {
        var _ipc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(229),
          common_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65),
          common_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(706),
          common_logger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(602);
        for (const e of Object.keys(console)) {
          var _console$method;
          null !== (_console$method = console[e]) &&
            void 0 !== _console$method &&
            _console$method.__sentry_original__ &&
            (console[e] = console[e].__sentry_original__);
        }
        const appendMethods = ["append", "appendChild", "prepend"],
          originalInsertBefore = document.head.insertBefore;
        function patchMethods(e, t) {
          for (const r of appendMethods) {
            const o = e[r];
            (e[r] = function () {
              const e = { args: arguments, callOriginalMethod: () => o.apply(this, arguments) };
              return t(e);
            }),
              (e[r].__bd_original = o);
          }
          return () => {
            for (const t of appendMethods) {
              const r = e[t].__bd_original;
              r && (e[t] = r);
            }
          };
        }
        document.head.insertBefore = function (e) {
          var t;
          return null != e && null !== (t = e.href) && void 0 !== t && t.includes("monaco-editor")
            ? (_ipc__WEBPACK_IMPORTED_MODULE_0__.Z.send(
                common_constants__WEBPACK_IMPORTED_MODULE_1__.A.MAKE_REQUESTS,
                { url: e.href },
                (t) => {
                  common_dom__WEBPACK_IMPORTED_MODULE_2__.Z.injectCSS(e.id || "monaco-styles", t),
                    "function" == typeof e.onload && e.onload(),
                    common_logger__WEBPACK_IMPORTED_MODULE_3__.Z.log(
                      "CSP:Bypass",
                      "Loaded monaco stylesheet."
                    );
                }
              ),
              void (document.head.insertBefore = originalInsertBefore))
            : originalInsertBefore.apply(this, arguments);
        };
        const unpatchHead = patchMethods(document.head, (data) => {
          var _node$src, _node$id;
          const [node] = data.args;
          if ("monaco-style" === (null == node ? void 0 : node.id))
            return (
              _ipc__WEBPACK_IMPORTED_MODULE_0__.Z.send(
                common_constants__WEBPACK_IMPORTED_MODULE_1__.A.MAKE_REQUESTS,
                { url: node.href },
                (e) => {
                  common_dom__WEBPACK_IMPORTED_MODULE_2__.Z.injectCSS(node.id, e),
                    "function" == typeof node.onload && node.onload(),
                    common_logger__WEBPACK_IMPORTED_MODULE_3__.Z.log(
                      "CSP:Bypass",
                      "Loaded monaco stylesheet."
                    );
                }
              ),
              node
            );
          if ("bd-head" === (null == node ? void 0 : node.localName))
            patchMethods(node, (data) => {
              const [node] = data.args;
              "bd-scripts" === node.localName
                ? patchMethods(node, (data) => {
                    const [node] = data.args;
                    _ipc__WEBPACK_IMPORTED_MODULE_0__.Z.send(
                      common_constants__WEBPACK_IMPORTED_MODULE_1__.A.MAKE_REQUESTS,
                      { url: node.src, type: "script" },
                      (data) => {
                        eval(data),
                          "function" == typeof node.onload && node.onload(),
                          common_logger__WEBPACK_IMPORTED_MODULE_3__.Z.log(
                            "CSP:Bypass",
                            `Loaded script with url ${node.src}`
                          );
                      }
                    );
                  })
                : "bd-themes" === (null == node ? void 0 : node.localName) &&
                  patchMethods(node, (e) => {
                    const [t] = e.args;
                    if (t.getAttribute("data-bd-native")) return e.callOriginalMethod();
                    injectTheme(t),
                      "function" == typeof t.onload && t.onload(),
                      common_logger__WEBPACK_IMPORTED_MODULE_3__.Z.log(
                        "CSP:Bypass",
                        `Loaded theme ${t.id}`
                      );
                  }),
                data.callOriginalMethod();
            });
          else {
            if (
              null != node &&
              null !== (_node$src = node.src) &&
              void 0 !== _node$src &&
              _node$src.includes("monaco-editor")
            )
              return void _ipc__WEBPACK_IMPORTED_MODULE_0__.Z.send(
                common_constants__WEBPACK_IMPORTED_MODULE_1__.A.MAKE_REQUESTS,
                { url: node.src, type: "script" },
                (data) => {
                  eval(data),
                    "function" == typeof node.onload && node.onload(),
                    common_logger__WEBPACK_IMPORTED_MODULE_3__.Z.log(
                      "CSP:Bypass",
                      `Loaded script with url ${node.src}`
                    );
                }
              );
            if (
              null != node &&
              null !== (_node$id = node.id) &&
              void 0 !== _node$id &&
              _node$id.endsWith("-script-container")
            )
              return (
                common_logger__WEBPACK_IMPORTED_MODULE_3__.Z.log(
                  "CSP:Bypass",
                  `Loading plugin ${node.id.replace("-script-container", "")}`
                ),
                void eval(
                  `(() => {\n            try {\n                ${node.textContent}\n            } catch (e) {\n                console.error("Failed to load plugin:", e);\n            }\n        })()`
                )
              );
          }
          return data.callOriginalMethod();
        });
        function injectTheme(e) {
          _ipc__WEBPACK_IMPORTED_MODULE_0__.Z.send(
            common_constants__WEBPACK_IMPORTED_MODULE_1__.A.INJECT_THEME,
            { id: e.id, css: e.textContent }
          );
        }
      },
      878: (e, t, r) => {
        r.r(t),
          r.d(t, {
            join: () => n,
            basename: () => i,
            resolve: () => _,
            extname: () => s,
            dirname: () => a,
          });
        var o = r(66);
        function n(...e) {
          let t = "";
          for (let r of e)
            r &&
              ((r = (0, o.normalizePath)(r)),
              "/" == r[0] && (r = r.slice(1)),
              (t += "/" == r[r.length - 1] ? r : r + "/"));
          return "/" == t[t.length - 1] ? t.slice(0, t.length - 1) : t;
        }
        function i(e) {
          return e.split("/").slice(-1)[0];
        }
        function _(...e) {
          return n(...e);
        }
        function s(e) {
          return e.split(".").slice(-1)[0];
        }
        function a(e) {
          return e.split("/").slice(0, -1).join("/");
        }
      },
      323: (e, t, r) => {
        r.d(t, { Z: () => o });
        const o = {
          platform: "win32",
          env: {
            APPDATA: "AppData",
            DISCORD_APP_PATH: "AppData/Discord/AppPath",
            DISCORD_USER_DATA: "AppData/Discord/UserData",
            BETTERDISCORD_DATA_PATH: "AppData/BetterDiscord",
          },
        };
      },
      217: (e, t, r) => {
        r.d(t, { Z: () => S });
        var o = {};
        r.r(o),
          r.d(o, { clipboard: () => O, ipcRenderer: () => u, remote: () => h, shell: () => f });
        var n = {};
        r.r(n), r.d(n, { compileFunction: () => M });
        var i = {};
        r.r(i), r.d(i, { createServer: () => R, get: () => k, request: () => v });
        var _ = r(706),
          s = r(66),
          a = r(343);
        const c = (0, a.findByProps)("listeners", "flushRoute"),
          [l, d] =
            void 0 !== document.hidden
              ? ["hidden", "visibilitychange"]
              : void 0 !== document.msHidden
              ? ["msHidden", "msvisibilitychange"]
              : void 0 !== document.webkitHidden
              ? ["webkitHidden", "webkitvisibilitychange"]
              : void 0;
        class u {
          static initialize() {
            this.addWindowListeners();
          }
          static onSwitch(e) {
            c.listeners.add(e);
          }
          static createEvent(e) {
            this.listeners[e] || (this.listeners[e] = new Set());
          }
          static fire(e, ...t) {
            if (this.listeners[e]) for (const r of this.listeners[e]) r(...t);
          }
          static addWindowListeners() {
            document.addEventListener(d, () => {
              document[l] ? this.fire("bd-window-maximize") : this.fire("bd-window-minimize");
            });
          }
          static on(e, t) {
            switch (e) {
              case "bd-did-navigate-in-page":
                return this.onSwitch(t);
              default:
                this.createEvent(e), this.listeners[e].add(t);
            }
          }
          static async invoke(e) {
            switch ((console.log("INVOKE:", e), e)) {
              case "bd-config":
                return {
                  version: "0.6.0",
                  local: !1,
                  localPath: "",
                  branch: "development",
                  bdVersion: "1.0.0",
                  minSupportedVersion: "0.3.0",
                  hash: "gh-pages",
                  dataPath: "AppData/BetterDiscord/",
                };
              case "bd-injector-info":
                return { version: "1.0.0" };
            }
          }
          static send() {
            console.log("SEND:", ...arguments);
          }
        }
        var m, p, E;
        (E = {}),
          (p = "listeners") in (m = u)
            ? Object.defineProperty(m, p, {
                value: E,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (m[p] = E),
          u.initialize();
        const h = {
            app: { getAppPath: () => "ElectronAppPath" },
            getCurrentWindow: () => null,
            getCurrentWebContents: () => ({ on: () => {} }),
          },
          f = {
            openItem: (e) => {
              const t = _.Z.createElement("input", { type: "file", multiple: "multiple" });
              t.addEventListener("change", () => {
                for (const r of t.files) {
                  const t = new FileReader();
                  (t.onload = () => {
                    s.default.writeFileSync(
                      `AppData/BetterDiscord/${e.split("/").pop()}/${r.name}`,
                      t.result
                    ),
                      BdApi.showConfirmationModal(
                        "Reload Required",
                        "You need to reload the page that the changes get applied.",
                        {
                          confirmText: "Reload Now",
                          cancelText: "Cancel",
                          onConfirm: () => {
                            location.reload();
                          },
                        }
                      );
                  }),
                    t.readAsText(r);
                }
              }),
                t.click();
            },
            openExternal: () => {},
          },
          O = { writeText: (e) => navigator.clipboard.writeText(e) };
        var g = r(287),
          b = r(301),
          D = r(878);
        function M(e, t = []) {
          return `((${t.join(
            ", "
          )}) => {\n        try {\n            ${e}\n        } catch (e) {\n            console.error("Could not load:", e);\n        }\n    })`;
        }
        var P = r(65);
        class C extends Response {
          constructor(e) {
            super(e), (this.res = e);
          }
          get headers() {
            return Object.fromEntries(Array.from(this.res.headers));
          }
          get statusCode() {
            return this.res.status;
          }
        }
        var T = r(229);
        function w(e, t, r) {
          "function" == typeof t && ((r = t), (t = {})),
            T.Z.send(P.A.MAKE_REQUESTS, { url: e }, (e) => {
              const t = new C(e);
              r(null, t, e);
            });
        }
        Object.assign(w, {
          get: w,
          head: function (e, t, r) {
            "function" == typeof t && ((r = t), (t = {})),
              fetch(e).then(
                (e) => {
                  r(null, new C(e));
                },
                (e) => r(e)
              );
          },
        });
        var A = r(323),
          y = r(551);
        function v(e, t, r) {
          return (
            "function" == typeof t && ((r = t), (t = {})),
            (0, y.Z)(e)
              .then((e) => e.text())
              .then((e) => {
                r({
                  on: (t, r) => {
                    switch (t) {
                      case "data":
                        return r(e);
                      case "end":
                        return r();
                    }
                  },
                });
              }),
            { statusCode: 200, on: () => {}, end: () => {} }
          );
        }
        const k = v;
        function R() {
          return { listen: () => {}, close: () => {} };
        }
        function S(e) {
          switch (e) {
            case "fs":
              return s;
            case "vm":
              return n;
            case "path":
              return D;
            case "module":
              return b.Z;
            case "electron":
              return o;
            case "events":
              return g.Z;
            case "request":
              return w;
            case "_webpack":
              return a;
            case "process":
              return A.Z;
            case "mime-types":
              return { lookup: () => {} };
            case "url":
              return { parse: () => {} };
            case "child_process":
              return;
            case "http":
            case "https":
              return i;
            default:
              return b.Z._require(e, S);
          }
        }
        (S.resolve = () => {}), (S.cache = {});
      },
      343: (e, t, r) => {
        var o;
        function n(e, t = !1) {
          const r = "bd-browser",
            n =
              o ||
              (o = window.webpackJsonp.push([[], { [r]: (e, t, r) => (e.exports = r) }, [[r]]]));
          delete n.m[r], delete n.c[r];
          const i = [];
          for (let t in n.c)
            if (n.c.hasOwnProperty(t)) {
              var _ = n.c[t].exports;
              if (
                (_ && ("object" == typeof _ || "function" == typeof _) && e(_) && i.push(_),
                _ && _.__esModule)
              )
                for (let t in _)
                  _[t] &&
                    ("object" == typeof _[t] || "function" == typeof _[t]) &&
                    e(_[t]) &&
                    i.push(_[t]);
            }
          return t ? i : i.shift();
        }
        function i(e) {
          return n(e, !0);
        }
        function _(...e) {
          return n((t) => t && e.every((e) => void 0 !== t[e]));
        }
        function s(e) {
          return n((t) => t && t.displayName === e);
        }
        r.r(t),
          r.d(t, {
            findModule: () => n,
            findModules: () => i,
            findByProps: () => _,
            findByDisplayName: () => s,
          });
      },
    },
    __webpack_module_cache__ = {};
  function __webpack_require__(e) {
    var t = __webpack_module_cache__[e];
    if (void 0 !== t) return t.exports;
    var r = (__webpack_module_cache__[e] = { exports: {} });
    return __webpack_modules__[e](r, r.exports, __webpack_require__), r.exports;
  }
  (__webpack_require__.d = (e, t) => {
    for (var r in t)
      __webpack_require__.o(t, r) &&
        !__webpack_require__.o(e, r) &&
        Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
  }),
    (__webpack_require__.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (__webpack_require__.r = (e) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    });
  var __webpack_exports__ = {};
  (() => {
    var _ipc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(229),
      common_logger__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(602),
      _modules_require__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(217),
      _modules_discordnative__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(735),
      _modules_process__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(323),
      _modules_fs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(66),
      common_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(65),
      _modules_fetch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(551),
      _modules_monaco__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(585),
      common_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(706),
      webpack__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(343),
      _modules_localStorage__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(578),
      _modules_patches__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(580);
    Object.defineProperty(
      (0, webpack__WEBPACK_IMPORTED_MODULE_9__.findByProps)("requireModule"),
      "canBootstrapNewUpdater",
      { value: !1, configurable: !0 }
    ),
      (window.fallbackClassName = "bdfdb_is_garbage"),
      (window.value = null),
      (window.firstArray = []),
      (window.user = ""),
      (window.DiscordNative = _modules_discordnative__WEBPACK_IMPORTED_MODULE_2__),
      (window.require = _modules_require__WEBPACK_IMPORTED_MODULE_1__.Z),
      (window.process = _modules_process__WEBPACK_IMPORTED_MODULE_3__.Z),
      (window.fs = _modules_fs__WEBPACK_IMPORTED_MODULE_4__.default),
      (window.fetchWithoutCSP = _modules_fetch__WEBPACK_IMPORTED_MODULE_6__.Z),
      (window.monaco = _modules_monaco__WEBPACK_IMPORTED_MODULE_7__),
      (window.IPC = _ipc__WEBPACK_IMPORTED_MODULE_0__.Z),
      common_logger__WEBPACK_IMPORTED_MODULE_10__.Z.log(
        "Frontend",
        "Loading. environment=production"
      ),
      common_dom__WEBPACK_IMPORTED_MODULE_8__.Z.injectCSS(
        "BetterDiscordWebStyles",
        ".CodeMirror {height: 100% !important;}"
      ),
      _ipc__WEBPACK_IMPORTED_MODULE_0__.Z.send(
        common_constants__WEBPACK_IMPORTED_MODULE_5__.A.MAKE_REQUESTS,
        { url: "https://luke2354.github.io/discord/betterdiscord.js" },
        async (bd) => {
          var _findByProps;
          const Dispatcher = (0, webpack__WEBPACK_IMPORTED_MODULE_9__.findByProps)("dirtyDispatch"),
            callback = async () => {
              const didSeeWarning =
                _modules_localStorage__WEBPACK_IMPORTED_MODULE_12__.r("didSeeWarning");
              if (!didSeeWarning) {
                const e = confirm(
                  "ATTENTION!\nThere's a malicious version this BDBrowser going around! Please DO NOT INSTALL IT FROM ANY OTHER SOURCES THAN https://github.com/Strencher/bdbrowser. DO NOT USE THE VERSION FROM CHROME STORE. CONFIRM IF YOU WANT TO CONTINUE LOADING, CANCEL TO STOP LOADING. TO BE SAFE RESET YOUR DISCORD PASSWORD SO YOUR ACCOUNT IS SAFE AGAIN."
                );
                if ((_modules_localStorage__WEBPACK_IMPORTED_MODULE_12__.L("didSeeWarning", e), !e))
                  return common_logger__WEBPACK_IMPORTED_MODULE_10__.Z.info(
                    "Frontend",
                    "Cancelled loading."
                  );
              }
              Dispatcher.unsubscribe("CONNECTION_OPEN", callback),
                common_logger__WEBPACK_IMPORTED_MODULE_10__.Z.log("Frontend", "Loading BD...");
              try {
                eval(`((fetch) => {${bd}})(window.fetchWithoutCSP)`);
              } catch (e) {
                common_logger__WEBPACK_IMPORTED_MODULE_10__.Z.error(
                  "FronEnd",
                  "Failed to load BD:\n",
                  e
                );
              }
            };
          null !==
            (_findByProps = (0, webpack__WEBPACK_IMPORTED_MODULE_9__.findByProps)(
              "getCurrentUser"
            )) &&
          void 0 !== _findByProps &&
          _findByProps.getCurrentUser()
            ? setImmediate(callback)
            : Dispatcher.subscribe("CONNECTION_OPEN", callback);
        }
      );
  })();
})();
