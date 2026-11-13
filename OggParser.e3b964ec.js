// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (
  modules,
  entry,
  mainEntry,
  parcelRequireName,
  externals,
  distDir,
  publicUrl,
  devServer
) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var importMap = previousRequire.i || {};
  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        if (externals[name]) {
          return externals[name];
        }
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      if (res === false) {
        return {};
      }
      // Synthesize a module to follow re-exports.
      if (Array.isArray(res)) {
        var m = {__esModule: true};
        res.forEach(function (v) {
          var key = v[0];
          var id = v[1];
          var exp = v[2] || v[0];
          var x = newRequire(id);
          if (key === '*') {
            Object.keys(x).forEach(function (key) {
              if (
                key === 'default' ||
                key === '__esModule' ||
                Object.prototype.hasOwnProperty.call(m, key)
              ) {
                return;
              }

              Object.defineProperty(m, key, {
                enumerable: true,
                get: function () {
                  return x[key];
                },
              });
            });
          } else if (exp === '*') {
            Object.defineProperty(m, key, {
              enumerable: true,
              value: x,
            });
          } else {
            Object.defineProperty(m, key, {
              enumerable: true,
              get: function () {
                if (exp === 'default') {
                  return x.__esModule ? x.default : x;
                }
                return x[exp];
              },
            });
          }
        });
        return m;
      }
      return newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.require = nodeRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.distDir = distDir;
  newRequire.publicUrl = publicUrl;
  newRequire.devServer = devServer;
  newRequire.i = importMap;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  // Only insert newRequire.load when it is actually used.
  // The code in this file is linted against ES5, so dynamic import is not allowed.
  // INSERT_LOAD_HERE

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });
    }
  }
})({"7guXj":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SERVER_PORT = 3000;
var HMR_SECURE = false;
var HMR_ENV_HASH = "439701173a9199ea";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "19230163e3b964ec";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_SERVER_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_SERVER_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ , bundleNotFound = false;
function getHostname() {
    return HMR_HOST || (typeof location !== 'undefined' && location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || (typeof location !== 'undefined' ? location.port : HMR_SERVER_PORT);
}
// eslint-disable-next-line no-redeclare
let WebSocket = globalThis.WebSocket;
if (!WebSocket && typeof module.bundle.root === 'function') try {
    // eslint-disable-next-line no-global-assign
    WebSocket = module.bundle.root('ws');
} catch  {
// ignore.
}
var hostname = getHostname();
var port = getPort();
var protocol = HMR_SECURE || typeof location !== 'undefined' && location.protocol === 'https:' && ![
    'localhost',
    '127.0.0.1',
    '0.0.0.0'
].includes(hostname) ? 'wss' : 'ws';
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if (!parent || !parent.isParcelRequire) {
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        // If we're running in the dev server's node runner, listen for messages on the parent port.
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) {
            parentPort.on('message', async (message)=>{
                try {
                    await handleMessage(message);
                    parentPort.postMessage('updated');
                } catch  {
                    parentPort.postMessage('restart');
                }
            });
            // After the bundle has finished running, notify the dev server that the HMR update is complete.
            queueMicrotask(()=>parentPort.postMessage('ready'));
        }
    } catch  {
        if (typeof WebSocket !== 'undefined') try {
            ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
        } catch (err) {
            // Ignore cloudflare workers error.
            if (err.message && !err.message.includes('Disallowed operation called within global scope')) console.error(err.message);
        }
    }
    if (ws) {
        // $FlowFixMe
        ws.onmessage = async function(event /*: {data: string, ...} */ ) {
            var data /*: HMRMessage */  = JSON.parse(event.data);
            await handleMessage(data);
        };
        if (ws instanceof WebSocket) {
            ws.onerror = function(e) {
                if (e.message) console.error(e.message);
            };
            ws.onclose = function() {
                console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
            };
        }
    }
}
async function handleMessage(data /*: HMRMessage */ ) {
    checkedAssets = {} /*: {|[string]: boolean|} */ ;
    disposedAssets = {} /*: {|[string]: boolean|} */ ;
    assetsToAccept = [];
    assetsToDispose = [];
    bundleNotFound = false;
    if (data.type === 'reload') fullReload();
    else if (data.type === 'update') {
        // Remove error overlay if there is one
        if (typeof document !== 'undefined') removeErrorOverlay();
        let assets = data.assets;
        // Handle HMR Update
        let handled = assets.every((asset)=>{
            return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
        });
        // Dispatch a custom event in case a bundle was not found. This might mean
        // an asset on the server changed and we should reload the page. This event
        // gives the client an opportunity to refresh without losing state
        // (e.g. via React Server Components). If e.preventDefault() is not called,
        // we will trigger a full page reload.
        if (handled && bundleNotFound && assets.some((a)=>a.envHash !== HMR_ENV_HASH) && typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') handled = !window.dispatchEvent(new CustomEvent('parcelhmrreload', {
            cancelable: true
        }));
        if (handled) {
            console.clear();
            // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
            if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
            await hmrApplyUpdates(assets);
            hmrDisposeQueue();
            // Run accept callbacks. This will also re-execute other disposed assets in topological order.
            let processedAssets = {};
            for(let i = 0; i < assetsToAccept.length; i++){
                let id = assetsToAccept[i][1];
                if (!processedAssets[id]) {
                    hmrAccept(assetsToAccept[i][0], id);
                    processedAssets[id] = true;
                }
            }
        } else fullReload();
    }
    if (data.type === 'error') {
        // Log parcel errors to console
        for (let ansiDiagnostic of data.diagnostics.ansi){
            let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
            console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
        }
        if (typeof document !== 'undefined') {
            // Render the fancy html overlay
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html);
            // $FlowFixMe
            document.body.appendChild(overlay);
        }
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="${protocol === 'wss' ? 'https' : 'http'}://${hostname}:${port}/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if (typeof location !== 'undefined' && 'reload' in location) location.reload();
    else if (typeof extCtx !== 'undefined' && extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
    else try {
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) parentPort.postMessage('restart');
    } catch (err) {
        console.error("[parcel] \u26A0\uFE0F An HMR update was not accepted. Please restart the process.");
    }
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout || typeof document === 'undefined') return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    checkedAssets = {};
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else if (a !== null) {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) {
            bundleNotFound = true;
            return true;
        }
        return hmrAcceptCheckOne(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return null;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    if (!cached) return true;
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
    return false;
}
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"gM8tK":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "OggContentError", ()=>OggContentError);
/**
 * Parser for Ogg logical bitstream framing
 */ parcelHelpers.export(exports, "OggParser", ()=>OggParser);
var _debug = require("debug");
var _debugDefault = parcelHelpers.interopDefault(_debug);
var _strtok3 = require("strtok3");
var _tokenTypes = require("token-types");
var _allocationJs = require("../common/Allocation.js");
var _basicParserJs = require("../common/BasicParser.js");
var _trackInfoJs = require("../common/TrackInfo.js");
var _parseErrorJs = require("../ParseError.js");
var _typeJs = require("../type.js");
var _flacStreamJs = require("./flac/FlacStream.js");
var _oggStreamMetadataJs = require("./OggStreamMetadata.js");
var _oggTokenJs = require("./OggToken.js");
var _opusStreamJs = require("./opus/OpusStream.js");
var _speexStreamJs = require("./speex/SpeexStream.js");
var _theoraStreamJs = require("./theora/TheoraStream.js");
var _vorbisStreamJs = require("./vorbis/VorbisStream.js");
class OggContentError extends (0, _parseErrorJs.makeUnexpectedFileContentError)('Ogg') {
}
const debug = (0, _debugDefault.default)('music-metadata:parser:ogg');
class OggStream {
    metadata;
    streamSerial;
    pageNumber = 0;
    payloadBytes = 0;
    closed = false;
    options;
    pageConsumer;
    isSkeleton = false;
    constructor(metadata, streamSerial, options){
        this.metadata = new (0, _oggStreamMetadataJs.OggStreamMetadata)(metadata);
        this.streamSerial = streamSerial;
        this.options = options;
    }
    async parsePage(tokenizer, header) {
        this.pageNumber = header.pageSequenceNo;
        debug('serial=%s page#=%s, Ogg.id=%s', header.streamSerialNumber, header.pageSequenceNo, header.capturePattern);
        const segmentTable = await tokenizer.readToken(new (0, _oggTokenJs.SegmentTable)(header));
        debug('totalPageSize=%s', segmentTable.totalPageSize);
        const pageData = await (0, _allocationJs.readToken)(tokenizer, new _tokenTypes.Uint8ArrayType(segmentTable.totalPageSize), this.options);
        this.payloadBytes += pageData.length;
        debug('firstPage=%s, lastPage=%s, continued=%s', header.headerType.firstPage, header.headerType.lastPage, header.headerType.continued);
        if (header.headerType.firstPage) {
            this.metadata.setFormat('container', 'Ogg');
            const idData = pageData.subarray(0, 7); // Copy this portion
            const asciiId = Array.from(idData).filter((b)=>b >= 32 && b <= 126) // Keep only printable ASCII
            .map((b)=>String.fromCharCode(b)).join('');
            switch(asciiId){
                case 'vorbis':
                    debug(`Set Ogg stream serial ${header.streamSerialNumber}, codec=Vorbis`);
                    this.pageConsumer = new (0, _vorbisStreamJs.VorbisStream)(this.metadata, this.options);
                    break;
                case 'OpusHea':
                    debug('Set page consumer to Ogg/Opus');
                    this.pageConsumer = new (0, _opusStreamJs.OpusStream)(this.metadata, this.options, tokenizer);
                    break;
                case 'Speex  ':
                    debug('Set page consumer to Ogg/Speex');
                    this.pageConsumer = new (0, _speexStreamJs.SpeexStream)(this.metadata, this.options, tokenizer);
                    break;
                case 'fishead':
                    this.isSkeleton = true;
                    break;
                case 'theora':
                    debug('Set page consumer to Ogg/Theora');
                    this.pageConsumer = new (0, _theoraStreamJs.TheoraStream)(this.metadata, this.options, tokenizer);
                    break;
                case 'FLAC':
                    debug('Set page consumer to Vorbis');
                    this.pageConsumer = new (0, _flacStreamJs.FlacStream)(this.metadata, this.options, tokenizer);
                    break;
                default:
                    throw new OggContentError(`Ogg codec not recognized (id=${asciiId}`);
            }
        }
        if (header.headerType.lastPage) this.closed = true;
        if (this.isSkeleton) return;
        if (this.pageConsumer) await this.pageConsumer.parsePage(header, pageData, segmentTable.lacingValues);
        else throw new Error('pageConsumer should be initialized');
    }
}
class OggParser extends (0, _basicParserJs.BasicParser) {
    streams = new Map();
    /**
     * Parse page
     * @returns {Promise<void>}
     */ async parse() {
        this.streams = new Map();
        const maxLogicalStreams = (0, _allocationJs.getMaxMetadataEntries)(this.options);
        let enfOfStream = false;
        let stoppedEarly = false;
        let header;
        try {
            do {
                header = await this.tokenizer.readToken((0, _oggTokenJs.PageHeader));
                if (header.capturePattern !== 'OggS') throw new OggContentError('Invalid Ogg capture pattern');
                let stream = this.streams.get(header.streamSerialNumber);
                if (!stream) {
                    if (this.streams.size >= maxLogicalStreams) throw new OggContentError('Logical stream count exceeds entry limit');
                    stream = new OggStream(this.metadata, header.streamSerialNumber, this.options);
                    this.streams.set(header.streamSerialNumber, stream);
                }
                await stream.parsePage(this.tokenizer, header);
                if (stream.pageNumber > 12 && // A comment (including its cover art) may span more than 13 pages.
                [
                    ...this.streams.values()
                ].every((stream)=>stream.pageConsumer?.isMetadataComplete !== false) && !(this.options.duration && [
                    ...this.streams.values()
                ].find((stream)=>stream.pageConsumer?.durationOnLastPage))) {
                    stoppedEarly = true;
                    debug('Stop processing Ogg stream');
                    break;
                }
            }while (![
                ...this.streams.values()
            ].every((item)=>item.closed));
        } catch (err) {
            if (err instanceof (0, _strtok3.EndOfStreamError)) {
                debug('Reached end-of-stream');
                enfOfStream = true;
            } else if (err instanceof OggContentError) this.metadata.addWarning(`Corrupt Ogg content at ${this.tokenizer.position}`);
            else throw err;
        }
        for (const stream of this.streams.values()){
            if (!stream.closed) {
                if (!stoppedEarly) this.metadata.addWarning(`End-of-stream reached before reaching last page in Ogg stream serial=${stream.streamSerial}`);
                await stream.pageConsumer?.flush();
            }
            stream.pageConsumer?.calculateDuration(enfOfStream);
            const format = stream.metadata.format;
            if (format.hasAudio) {
                const track = (0, _trackInfoJs.createAudioTrackInfo)(format);
                track.id = stream.streamSerial;
                // The summary's Opus estimate uses the file size. Count only this stream's
                // payload to keep the track bitrate independent of framing and other streams.
                if (format.codec === 'Opus') {
                    delete track.bitrate;
                    if (track.duration && track.duration > 0 && stream.closed) track.bitrate = stream.payloadBytes * 8 / track.duration;
                }
                if (format.codec === 'Opus' && track.audio) track.audio.outputSamplingFrequency = 48000;
                this.metadata.addStreamInfo(track);
            } else if (format.hasVideo) {
                const track = format.trackInfo[0] ?? {
                    type: (0, _typeJs.TrackType).video,
                    codecName: format.codec
                };
                track.id = stream.streamSerial;
                if (track.duration && track.duration > 0 && (stream.closed || enfOfStream)) track.bitrate = stream.payloadBytes * 8 / track.duration;
                this.metadata.addStreamInfo(track);
            }
        }
        // Absence can only be determined after discovering the logical streams.
        for (const flag of [
            'hasAudio',
            'hasVideo'
        ]){
            const present = [
                ...this.streams.values()
            ].some((stream)=>stream.metadata.format[flag] === true);
            if (this.metadata.format[flag] !== present) this.metadata.setFormat(flag, present);
        }
    }
}

},{"debug":"4XIdh","strtok3":"7L6Gs","token-types":"al35Q","../common/Allocation.js":"8ZVyl","../common/BasicParser.js":"91dLC","../common/TrackInfo.js":"9lsMn","../ParseError.js":"E03ox","../type.js":"a50Lj","./flac/FlacStream.js":"3EQ5T","./OggStreamMetadata.js":"2ONUS","./OggToken.js":"gybcd","./opus/OpusStream.js":"ipjpM","./speex/SpeexStream.js":"1j4oQ","./theora/TheoraStream.js":"lormO","./vorbis/VorbisStream.js":"5TdBF","@parcel/transformer-js/src/esmodule-helpers.js":"53hI8"}],"3EQ5T":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Ref:
 * - https://xiph.org/flac/ogg_mapping.html
 */ parcelHelpers.export(exports, "FlacStream", ()=>FlacStream);
var _debug = require("debug");
var _debugDefault = parcelHelpers.interopDefault(_debug);
var _allocationJs = require("../../common/Allocation.js");
var _fourCCJs = require("../../common/FourCC.js");
var _flacParserJs = require("../../flac/FlacParser.js");
var _flacTokenJs = require("../../flac/FlacToken.js");
var _parseErrorJs = require("../../ParseError.js");
var _vorbisJs = require("../vorbis/Vorbis.js");
class FlacContentError extends (0, _parseErrorJs.makeUnexpectedFileContentError)('FLAC') {
}
const debug = (0, _debugDefault.default)('music-metadata:parser:ogg:flac');
class FlacStream {
    metadata;
    options;
    flacParser;
    lastPageHeader;
    lastGranulePosition;
    durationOnLastPage = true;
    isMetadataComplete = false;
    identified = false;
    packetParts = [];
    packetLength = 0;
    constructor(metadata, options, tokenizer){
        this.metadata = metadata;
        this.options = options;
        this.flacParser = new (0, _flacParserJs.FlacParser)(this.metadata, tokenizer, options);
    }
    /** Assemble metadata packets using the page lacing table. */ async parsePage(header, pageData, lacingValues = new Uint8Array()) {
        this.lastPageHeader = header;
        if (header.absoluteGranulePosition >= 0) this.lastGranulePosition = header.absoluteGranulePosition;
        // Audio packets do not need assembling once the final metadata block was seen.
        if (this.isMetadataComplete) return;
        if (header.headerType.continued !== this.packetLength > 0) throw new FlacContentError('Invalid Ogg/FLAC packet continuation');
        if (lacingValues.reduce((sum, length)=>sum + length, 0) !== pageData.length) throw new FlacContentError('Ogg/FLAC lacing does not match page data');
        let offset = 0;
        for (const length of lacingValues){
            (0, _allocationJs.validateAllocation)(this.packetLength + length, this.options);
            if (length > 0) {
                if (this.packetParts.length >= (0, _allocationJs.getMaxMetadataEntries)(this.options)) throw new FlacContentError('Buffered Ogg/FLAC segment count exceeds entry limit');
                this.packetParts.push(pageData.subarray(offset, offset + length));
                this.packetLength += length;
            }
            offset += length;
            if (length < 255) {
                const packet = new Uint8Array(this.packetLength);
                let position = 0;
                for (const part of this.packetParts){
                    packet.set(part, position);
                    position += part.length;
                }
                this.packetParts = [];
                this.packetLength = 0;
                await this.parsePacket(packet);
                if (this.isMetadataComplete) break;
            }
        }
        if (header.headerType.lastPage) await this.flush();
    }
    async parsePacket(packet) {
        if (!this.identified) {
            await this.parseFirstPage(packet);
            this.identified = true;
            return;
        }
        if (packet.length < _flacTokenJs.BlockHeader.len) throw new FlacContentError('Truncated Ogg/FLAC metadata header');
        const header = _flacTokenJs.BlockHeader.get(packet, 0);
        if (header.type === _flacTokenJs.BlockType.STREAMINFO) throw new FlacContentError('Unexpected repeated Ogg/FLAC STREAMINFO');
        if (header.length !== packet.length - _flacTokenJs.BlockHeader.len) throw new FlacContentError('Ogg/FLAC metadata block length does not match packet');
        await this.parseDataBlock(header, packet.subarray(_flacTokenJs.BlockHeader.len));
        this.isMetadataComplete = header.lastBlock;
    }
    calculateDuration(enfOfStream) {
        if (this.lastPageHeader && (enfOfStream || this.lastPageHeader.headerType.lastPage) && this.metadata.format.sampleRate && this.lastGranulePosition !== undefined) {
            // Use the last known granule position if the stream ends on an unfinished packet.
            // Ref: https://xiph.org/flac/ogg_mapping.html
            this.metadata.setFormat('numberOfSamples', this.lastGranulePosition);
            this.metadata.setFormat('duration', this.lastGranulePosition / this.metadata.format.sampleRate);
        }
    }
    async parseFirstPage(packet) {
        debug('First Ogg/FLAC packet');
        if (packet.length !== 13 + _flacTokenJs.BlockHeader.len + _flacTokenJs.BlockStreamInfo.len) throw new FlacContentError('Invalid Ogg/FLAC identification packet length');
        if (packet[0] !== 0x7f || (0, _fourCCJs.FourCcToken).get(packet, 1) !== 'FLAC' || packet[5] !== 1 || (0, _fourCCJs.FourCcToken).get(packet, 9) !== 'fLaC') throw new FlacContentError('Invalid Ogg/FLAC preamble or mapping version');
        const header = _flacTokenJs.BlockHeader.get(packet, 13);
        if (header.type !== _flacTokenJs.BlockType.STREAMINFO || header.length !== _flacTokenJs.BlockStreamInfo.len) throw new FlacContentError('Invalid Ogg/FLAC STREAMINFO header');
        await this.parseDataBlock(header, packet.subarray(17));
        this.isMetadataComplete = header.lastBlock;
    }
    async parseDataBlock(blockHeader, pageData) {
        debug(`blockHeader type=${blockHeader.type}, length=${blockHeader.length}`);
        switch(blockHeader.type){
            case _flacTokenJs.BlockType.STREAMINFO:
                {
                    const streamInfo = _flacTokenJs.BlockStreamInfo.get(pageData, 0);
                    return this.flacParser.processsStreamInfo(streamInfo);
                }
            case _flacTokenJs.BlockType.PADDING:
                break;
            case _flacTokenJs.BlockType.APPLICATION:
                break;
            case _flacTokenJs.BlockType.SEEKTABLE:
            case _flacTokenJs.BlockType.CUESHEET:
                break;
            case _flacTokenJs.BlockType.VORBIS_COMMENT:
                return this.flacParser.parseComment(pageData);
            case _flacTokenJs.BlockType.PICTURE:
                if (!this.options.skipCovers) {
                    this.validatePicture(pageData);
                    const picture = new (0, _vorbisJs.VorbisPictureToken)(pageData.length).get(pageData, 0);
                    return this.flacParser.addPictureTag(picture);
                }
                break;
            default:
                this.metadata.addWarning(`Unknown block type: ${blockHeader.type}`);
        }
    // The page payload was already consumed; ignored blocks require no source I/O.
    }
    validatePicture(data) {
        if (data.length < 32) throw new FlacContentError('Truncated Ogg/FLAC picture');
        const view = new DataView(data.buffer, data.byteOffset, data.byteLength);
        const mimeLength = view.getUint32(4);
        if (mimeLength > data.length - 32) throw new FlacContentError('Ogg/FLAC picture MIME length exceeds block');
        const descriptionLength = view.getUint32(8 + mimeLength);
        if (descriptionLength > data.length - 32 - mimeLength) throw new FlacContentError('Ogg/FLAC picture description length exceeds block');
        const headerLength = 32 + mimeLength + descriptionLength;
        if (view.getUint32(headerLength - 4) !== data.length - headerLength) throw new FlacContentError('Ogg/FLAC picture data length does not match block');
    }
    async flush() {
        if (this.packetLength > 0 || this.identified && !this.isMetadataComplete) throw new FlacContentError('Truncated Ogg/FLAC metadata packet');
    }
}

},{"debug":"4XIdh","../../common/Allocation.js":"8ZVyl","../../common/FourCC.js":"1nM5t","../../flac/FlacParser.js":"5yRJd","../../flac/FlacToken.js":"etK8V","../../ParseError.js":"E03ox","../vorbis/Vorbis.js":"7Yilq","@parcel/transformer-js/src/esmodule-helpers.js":"53hI8"}],"2ONUS":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/** Keep format values local to a logical stream while sharing tags and warnings. */ parcelHelpers.export(exports, "OggStreamMetadata", ()=>OggStreamMetadata);
var _metadataCollectorJs = require("../common/MetadataCollector.js");
class OggStreamMetadata extends (0, _metadataCollectorJs.MetadataCollector) {
    parent;
    constructor(parent){
        super();
        this.parent = parent;
        this.native = parent.native;
        this.quality = parent.quality;
    }
    setFormat(key, value) {
        super.setFormat(key, value);
        // One logical stream cannot rule out the presence of another media type.
        if (key !== 'hasAudio' && key !== 'hasVideo' || value === true) this.parent.setFormat(key, value);
    }
    registerTagType(tagType) {
        this.parent.registerTagType(tagType);
    }
    addTag(tagType, tagId, value) {
        return this.parent.addTag(tagType, tagId, value);
    }
    addWarning(warning) {
        this.parent.addWarning(warning);
    }
}

},{"../common/MetadataCollector.js":"4AZ8q","@parcel/transformer-js/src/esmodule-helpers.js":"53hI8"}],"gybcd":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "PageHeader", ()=>PageHeader);
parcelHelpers.export(exports, "SegmentTable", ()=>SegmentTable);
var _tokenTypes = require("token-types");
var _utilJs = require("../common/Util.js");
const PageHeader = {
    len: 27,
    get: (buf, off)=>{
        const granulePosition = _tokenTypes.UINT64_LE.get(buf, off + 6);
        return {
            capturePattern: new (0, _tokenTypes.StringType)(4, 'latin1').get(buf, off),
            version: _tokenTypes.UINT8.get(buf, off + 4),
            headerType: {
                continued: _utilJs.getBit(buf, off + 5, 0),
                firstPage: _utilJs.getBit(buf, off + 5, 1),
                lastPage: _utilJs.getBit(buf, off + 5, 2)
            },
            // packet_flag: Token.UINT8.get(buf, off + 5),
            absoluteGranulePosition: granulePosition === 0xffffffffffffffffn ? -1 : Number(granulePosition),
            streamSerialNumber: _tokenTypes.UINT32_LE.get(buf, off + 14),
            pageSequenceNo: _tokenTypes.UINT32_LE.get(buf, off + 18),
            pageChecksum: _tokenTypes.UINT32_LE.get(buf, off + 22),
            page_segments: _tokenTypes.UINT8.get(buf, off + 26)
        };
    }
};
class SegmentTable {
    len;
    constructor(header){
        this.len = header.page_segments;
    }
    get(buf, off) {
        const lacingValues = Uint8Array.from(buf.subarray(off, off + this.len));
        return {
            totalPageSize: lacingValues.reduce((sum, length)=>sum + length, 0),
            lacingValues
        };
    }
}

},{"token-types":"al35Q","../common/Util.js":"Q4yiL","@parcel/transformer-js/src/esmodule-helpers.js":"53hI8"}],"ipjpM":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Opus parser
 * Internet Engineering Task Force (IETF) - RFC 6716
 * Used by OggStream
 */ parcelHelpers.export(exports, "OpusStream", ()=>OpusStream);
var _tokenTypes = require("token-types");
var _vorbisStreamJs = require("../vorbis/VorbisStream.js");
var _opusJs = require("./Opus.js");
class OpusStream extends (0, _vorbisStreamJs.VorbisStream) {
    idHeader = null;
    lastPos = -1;
    tokenizer;
    constructor(metadata, options, tokenizer){
        super(metadata, options);
        this.tokenizer = tokenizer;
        this.durationOnLastPage = true;
    }
    /**
     * Parse first Opus Ogg page
     * @param {IPageHeader} header
     * @param {Uint8Array} pageData
     */ parseFirstPage(_header, pageData) {
        this.metadata.setFormat('codec', 'Opus');
        this.metadata.setFormat('lossless', false);
        // Parse Opus ID Header
        this.idHeader = new _opusJs.IdHeader(pageData.length).get(pageData, 0);
        if (this.idHeader.magicSignature !== 'OpusHead') throw new (0, _opusJs.OpusContentError)('Illegal ogg/Opus magic-signature');
        this.metadata.setFormat('sampleRate', this.idHeader.inputSampleRate);
        this.metadata.setFormat('numberOfChannels', this.idHeader.channelCount);
        this.metadata.setAudioOnly();
    }
    async parseFullPage(pageData) {
        const magicSignature = new _tokenTypes.StringType(8, 'ascii').get(pageData, 0);
        switch(magicSignature){
            case 'OpusTags':
                await this.parseUserCommentList(pageData, 8);
                this.lastPos = this.tokenizer.position - pageData.length;
                break;
            default:
                break;
        }
    }
    calculateDuration(enfOfStream) {
        if (this.lastPageHeader && (enfOfStream || this.lastPageHeader.headerType.lastPage) && this.metadata.format.sampleRate && this.lastPageHeader.absoluteGranulePosition >= 0) {
            // Calculate duration
            const pos_48bit = this.lastPageHeader.absoluteGranulePosition - this.idHeader.preSkip;
            this.metadata.setFormat('numberOfSamples', pos_48bit);
            this.metadata.setFormat('duration', pos_48bit / 48000);
            if (this.lastPos !== -1 && this.tokenizer.fileInfo.size && this.metadata.format.duration) {
                const dataSize = this.tokenizer.fileInfo.size - this.lastPos;
                this.metadata.setFormat('bitrate', 8 * dataSize / this.metadata.format.duration);
            }
        }
    }
}

},{"token-types":"al35Q","../vorbis/VorbisStream.js":"5TdBF","./Opus.js":"cc1QJ","@parcel/transformer-js/src/esmodule-helpers.js":"53hI8"}],"cc1QJ":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "OpusContentError", ()=>OpusContentError);
/**
 * Opus ID Header parser
 * Ref: https://wiki.xiph.org/OggOpus#ID_Header
 */ parcelHelpers.export(exports, "IdHeader", ()=>IdHeader);
var _tokenTypes = require("token-types");
var _parseErrorJs = require("../../ParseError.js");
class OpusContentError extends (0, _parseErrorJs.makeUnexpectedFileContentError)('Opus') {
}
class IdHeader {
    len;
    constructor(len){
        if (len < 19) throw new OpusContentError('ID-header-page 0 should be at least 19 bytes long');
        this.len = len;
    }
    get(buf, off) {
        return {
            magicSignature: new _tokenTypes.StringType(8, 'ascii').get(buf, off + 0),
            version: _tokenTypes.UINT8.get(buf, off + 8),
            channelCount: _tokenTypes.UINT8.get(buf, off + 9),
            preSkip: _tokenTypes.UINT16_LE.get(buf, off + 10),
            inputSampleRate: _tokenTypes.UINT32_LE.get(buf, off + 12),
            outputGain: _tokenTypes.UINT16_LE.get(buf, off + 16),
            channelMapping: _tokenTypes.UINT8.get(buf, off + 18)
        };
    }
}

},{"token-types":"al35Q","../../ParseError.js":"E03ox","@parcel/transformer-js/src/esmodule-helpers.js":"53hI8"}],"1j4oQ":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Speex, RFC 5574
 * Ref:
 * - https://www.speex.org/docs/manual/speex-manual/
 * - https://tools.ietf.org/html/rfc5574
 */ parcelHelpers.export(exports, "SpeexStream", ()=>SpeexStream);
var _debug = require("debug");
var _debugDefault = parcelHelpers.interopDefault(_debug);
var _parseErrorJs = require("../../ParseError.js");
var _vorbisStreamJs = require("../vorbis/VorbisStream.js");
var _speexJs = require("./Speex.js");
class SpeexContentError extends (0, _parseErrorJs.makeUnexpectedFileContentError)('Speex') {
}
const debug = (0, _debugDefault.default)('music-metadata:parser:ogg:speex');
class SpeexStream extends (0, _vorbisStreamJs.VorbisStream) {
    commentHeaderParsed = false;
    constructor(metadata, options, _tokenizer){
        super(metadata, options);
    }
    /**
     * Parse first Speex Ogg page
     * @param {IPageHeader} header
     * @param {Uint8Array} pageData
     */ parseFirstPage(_header, pageData) {
        debug('First Ogg/Speex page');
        if (pageData.length < _speexJs.Header.len) throw new SpeexContentError('Truncated Speex identification header');
        const speexHeader = _speexJs.Header.get(pageData, 0);
        this.metadata.setFormat('codec', `Speex ${speexHeader.version}`);
        this.metadata.setFormat('lossless', false);
        this.metadata.setFormat('numberOfChannels', speexHeader.nb_channels);
        this.metadata.setFormat('sampleRate', speexHeader.rate);
        if (speexHeader.bitrate !== -1) this.metadata.setFormat('bitrate', speexHeader.bitrate);
        this.metadata.setAudioOnly();
    }
    /**
     * The packet following the identification header is the comment header, in
     * Vorbis comment format but without a packet type or magic signature.
     * Ref: https://tools.ietf.org/html/rfc5574#section-3
     */ async parseFullPage(pageData) {
        if (this.commentHeaderParsed) return;
        this.commentHeaderParsed = true;
        debug('Parse Ogg/Speex comment header');
        await this.parseUserCommentList(pageData, 0);
    }
}

},{"debug":"4XIdh","../../ParseError.js":"E03ox","../vorbis/VorbisStream.js":"5TdBF","./Speex.js":"62wHM","@parcel/transformer-js/src/esmodule-helpers.js":"53hI8"}],"62wHM":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Header", ()=>Header);
var _tokenTypes = require("token-types");
var _utilJs = require("../../common/Util.js");
const Header = {
    len: 80,
    get: (buf, off)=>{
        return {
            speex: new _tokenTypes.StringType(8, 'ascii').get(buf, off + 0),
            version: _utilJs.trimRightNull(new _tokenTypes.StringType(20, 'ascii').get(buf, off + 8)),
            version_id: _tokenTypes.INT32_LE.get(buf, off + 28),
            header_size: _tokenTypes.INT32_LE.get(buf, off + 32),
            rate: _tokenTypes.INT32_LE.get(buf, off + 36),
            mode: _tokenTypes.INT32_LE.get(buf, off + 40),
            mode_bitstream_version: _tokenTypes.INT32_LE.get(buf, off + 44),
            nb_channels: _tokenTypes.INT32_LE.get(buf, off + 48),
            bitrate: _tokenTypes.INT32_LE.get(buf, off + 52),
            frame_size: _tokenTypes.INT32_LE.get(buf, off + 56),
            vbr: _tokenTypes.INT32_LE.get(buf, off + 60),
            frames_per_packet: _tokenTypes.INT32_LE.get(buf, off + 64),
            extra_headers: _tokenTypes.INT32_LE.get(buf, off + 68),
            reserved1: _tokenTypes.INT32_LE.get(buf, off + 72),
            reserved2: _tokenTypes.INT32_LE.get(buf, off + 76)
        };
    }
};

},{"token-types":"al35Q","../../common/Util.js":"Q4yiL","@parcel/transformer-js/src/esmodule-helpers.js":"53hI8"}],"lormO":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Ref:
 * - https://theora.org/doc/Theora.pdf
 */ parcelHelpers.export(exports, "TheoraStream", ()=>TheoraStream);
var _debug = require("debug");
var _debugDefault = parcelHelpers.interopDefault(_debug);
var _parseErrorJs = require("../../ParseError.js");
var _typeJs = require("../../type.js");
var _theoraJs = require("./Theora.js");
class TheoraContentError extends (0, _parseErrorJs.makeUnexpectedFileContentError)('Theora') {
}
const debug = (0, _debugDefault.default)('music-metadata:parser:ogg:theora');
class TheoraStream {
    metadata;
    durationOnLastPage = true;
    identification;
    lastPageHeader;
    lastGranulePosition;
    constructor(metadata, _options, _tokenizer){
        this.metadata = metadata;
    }
    /**
     * Vorbis 1 parser
     * @param header Ogg Page Header
     * @param pageData Page data
     */ async parsePage(header, pageData) {
        this.lastPageHeader = header;
        if (Number.isSafeInteger(header.absoluteGranulePosition) && header.absoluteGranulePosition >= 0) this.lastGranulePosition = header.absoluteGranulePosition;
        if (header.headerType.firstPage) await this.parseFirstPage(header, pageData);
    }
    calculateDuration(endOfStream) {
        const info = this.identification;
        const granule = this.lastGranulePosition;
        if (!info || !this.lastPageHeader || !(endOfStream || this.lastPageHeader.headerType.lastPage) || granule === undefined || info.frn <= 0 || info.frd <= 0) return;
        // The granule position packs the key frame and the offset from that key frame.
        // Since Theora 3.2.1 the key frame part is one-based; earlier versions are zero-based.
        const scale = 2 ** info.keyframeGranuleShift;
        const legacy = info.vmaj * 65536 + info.vmin * 256 + info.vrev < 0x030201;
        const frames = Math.floor(granule / scale) + granule % scale + Number(legacy);
        if (frames > 0) {
            const duration = frames * info.frd / info.frn;
            this.metadata.format.trackInfo[0].duration = duration;
        }
    }
    /**
     * Parse first Theora Ogg page. the initial identification header packet
     */ async parseFirstPage(_header, pageData) {
        debug('First Ogg/Theora page');
        this.metadata.setFormat('codec', 'Theora');
        if (pageData.length < (0, _theoraJs.IdentificationHeader).len) throw new TheoraContentError('Truncated Theora identification header');
        const idHeader = (0, _theoraJs.IdentificationHeader).get(pageData, 0);
        this.identification = idHeader;
        this.metadata.setFormat('bitrate', idHeader.nombr);
        this.metadata.setFormat('hasVideo', true);
        this.metadata.addStreamInfo({
            type: (0, _typeJs.TrackType).video,
            codecName: 'Theora',
            ...idHeader.nombr > 0 ? {
                bitrate: idHeader.nombr
            } : {},
            video: {
                pixelWidth: idHeader.vmbw * 16,
                pixelHeight: idHeader.vmbh * 16,
                displayWidth: idHeader.picw,
                displayHeight: idHeader.pich,
                ...idHeader.frd > 0 && idHeader.frn > 0 ? {
                    frameRate: idHeader.frn / idHeader.frd
                } : {}
            }
        });
    }
    flush() {
        return Promise.resolve();
    }
}

},{"debug":"4XIdh","../../ParseError.js":"E03ox","../../type.js":"a50Lj","./Theora.js":"jh2fU","@parcel/transformer-js/src/esmodule-helpers.js":"53hI8"}],"jh2fU":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "IdentificationHeader", ()=>IdentificationHeader);
var _tokenTypes = require("token-types");
const IdentificationHeader = {
    len: 42,
    get: (buf, off)=>{
        return {
            id: new _tokenTypes.StringType(7, 'ascii').get(buf, off),
            vmaj: _tokenTypes.UINT8.get(buf, off + 7),
            vmin: _tokenTypes.UINT8.get(buf, off + 8),
            vrev: _tokenTypes.UINT8.get(buf, off + 9),
            vmbw: _tokenTypes.UINT16_BE.get(buf, off + 10),
            vmbh: _tokenTypes.UINT16_BE.get(buf, off + 12),
            picw: _tokenTypes.UINT24_BE.get(buf, off + 14),
            pich: _tokenTypes.UINT24_BE.get(buf, off + 17),
            frn: _tokenTypes.UINT32_BE.get(buf, off + 22),
            frd: _tokenTypes.UINT32_BE.get(buf, off + 26),
            nombr: _tokenTypes.UINT24_BE.get(buf, off + 37),
            nqual: _tokenTypes.UINT16_BE.get(buf, off + 40) >> 10,
            keyframeGranuleShift: _tokenTypes.UINT16_BE.get(buf, off + 40) >> 5 & 0x1f
        };
    }
};

},{"token-types":"al35Q","@parcel/transformer-js/src/esmodule-helpers.js":"53hI8"}]},["7guXj"], null, "parcelRequire2853", {})

//# sourceMappingURL=OggParser.e3b964ec.js.map
