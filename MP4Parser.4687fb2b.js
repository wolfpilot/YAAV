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
})({"MuaHA":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SERVER_PORT = 3000;
var HMR_SECURE = false;
var HMR_ENV_HASH = "439701173a9199ea";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "60f404244687fb2b";
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

},{}],"e8ARY":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/*
 * Parser for the MP4 (MPEG-4 Part 14) container format
 * Standard: ISO/IEC 14496-14
 * supporting:
 * - QuickTime container
 * - MP4 File Format
 * - 3GPP file format
 * - 3GPP2 file format
 *
 * MPEG-4 Audio / Part 3 (.m4a)& MPEG 4 Video (m4v, mp4) extension.
 * Support for Apple iTunes tags as found in a M4A/M4V files.
 * Ref:
 *   https://en.wikipedia.org/wiki/ISO_base_media_file_format
 *   https://developer.apple.com/library/archive/documentation/QuickTime/QTFF/Metadata/Metadata.html
 *   http://atomicparsley.sourceforge.net/mpeg-4files.html
 *   https://github.com/sergiomb2/libmp4v2/wiki/iTunesMetadata
 *   https://wiki.multimedia.cx/index.php/QuickTime_container
 */ parcelHelpers.export(exports, "MP4Parser", ()=>MP4Parser);
var _textCodec = require("@borewit/text-codec");
var _debug = require("debug");
var _debugDefault = parcelHelpers.interopDefault(_debug);
var _strtok3 = require("strtok3");
var _tokenTypes = require("token-types");
var _uint8ArrayExtras = require("uint8array-extras");
var _allocationJs = require("../common/Allocation.js");
var _basicParserJs = require("../common/BasicParser.js");
var _id3V1ParserJs = require("../id3v1/ID3v1Parser.js");
var _typeJs = require("../type.js");
var _atomJs = require("./Atom.js");
var _atomTokenJs = require("./AtomToken.js");
const debug = (0, _debugDefault.default)('music-metadata:parser:MP4');
const tagFormat = 'iTunes';
const maxChapterTitleBytes = 65536;
const encoderDict = {
    raw: {
        lossy: false,
        format: 'raw'
    },
    MAC3: {
        lossy: true,
        format: 'MACE 3:1'
    },
    MAC6: {
        lossy: true,
        format: 'MACE 6:1'
    },
    ima4: {
        lossy: true,
        format: 'IMA 4:1'
    },
    ulaw: {
        lossy: true,
        format: 'uLaw 2:1'
    },
    alaw: {
        lossy: true,
        format: 'uLaw 2:1'
    },
    Qclp: {
        lossy: true,
        format: 'QUALCOMM PureVoice'
    },
    '.mp3': {
        lossy: true,
        format: 'MPEG-1 layer 3'
    },
    alac: {
        lossy: false,
        format: 'ALAC'
    },
    'ac-3': {
        lossy: true,
        format: 'AC-3'
    },
    mp4a: {
        lossy: true,
        format: 'MPEG-4/AAC'
    },
    mp4s: {
        lossy: true,
        format: 'MP4S'
    },
    // Closed Captioning Media, https://developer.apple.com/library/archive/documentation/QuickTime/QTFF/QTFFChap3/qtff3.html#//apple_ref/doc/uid/TP40000939-CH205-SW87
    c608: {
        lossy: true,
        format: 'CEA-608'
    },
    c708: {
        lossy: true,
        format: 'CEA-708'
    }
};
/** Chapter offsets can be revisited even when the total input size is unknown. */ function supportsSeeking(tokenizer) {
    return tokenizer.supportsRandomAccess() && 'setPosition' in tokenizer && typeof tokenizer.setPosition === 'function';
}
/**
 * Determine if a track carries audio.
 *
 * Ref: ISO/IEC 14496-12, 8.5.2: the sample entries in a sample description box are track-type specific,
 * selected by the handler type of the enclosing track. Only an audio track holds an AudioSampleEntry.
 * Both the 'soun' and 'audi' handler types are treated as audio.
 *
 * Falls back to the sample description when no handler box was found, preserving the previous behavior.
 */ function isAudioTrack(track) {
    const [ssd] = track.soundSampleDescription ?? [];
    if (!ssd) return false;
    if (track.handler) return track.handler.handlerType === 'soun' || track.handler.handlerType === 'audi';
    return !!ssd.description && ssd.description.numAudioChannels > 0;
}
/**
 * Channel count from an AAC-LC AudioSpecificConfig (ISO/IEC 14496-3). The count in the
 * sample entry is not reliable for AAC: some encoders leave it at the default of 2.
 */ function readAacLcChannels(objectType, config) {
    if (objectType !== 2 || config.length < 2) return undefined;
    const frequencyIndex = (config[0] & 7) << 1 | config[1] >>> 7;
    let channelConfigByte = 1;
    if (frequencyIndex === 15) {
        if (config.length < 5) return undefined;
        channelConfigByte = 4;
    }
    const channelConfig = config[channelConfigByte] >>> 3 & 0xf;
    if (channelConfig >= 1 && channelConfig <= 7) return channelConfig === 7 ? 8 : channelConfig;
    if (channelConfig === 0 && config.length > channelConfigByte + 1) {
        const pceByte = channelConfigByte + 1;
        if ((config[pceByte] & 0x80) !== 0) {
            const profile = config[pceByte] >>> 6;
            if (profile === 0) {
                const channels = config[pceByte] >> 1 & 0x7;
                if (channels > 0) return channels;
            }
        }
    }
    return undefined;
}
class MP4Parser extends (0, _basicParserJs.BasicParser) {
    maxChapterCount = (0, _allocationJs.getMaxChapterCount)(this.options);
    static read_BE_Integer(array, signed) {
        const integerType = (signed ? 'INT' : 'UINT') + array.length * 8 + (array.length > 1 ? '_BE' : '');
        const token = _tokenTypes[integerType];
        if (!token) throw new (0, _atomTokenJs.Mp4ContentError)(`Token for integer type not found: "${integerType}"`);
        return Number(token.get(array, 0));
    }
    // Metadata and sample tables are buffered; media data is skipped separately.
    // A bound is also necessary for streams whose total size is unknown.
    validatePayloadLength(length) {
        (0, _allocationJs.validateAllocation)(length, this.options, (message)=>new (0, _atomTokenJs.Mp4ContentError)(message));
    }
    async readToken(token, position) {
        return (0, _allocationJs.readToken)(this.tokenizer, token, this.options, position, (message)=>new (0, _atomTokenJs.Mp4ContentError)(message));
    }
    movieHeader;
    trackDefaults = new Map();
    tracks = new Map();
    mediaDataRanges = [];
    streamedChapters = new Map();
    streamedChapterCount;
    neroChapters = [];
    hasVideoTrack = false;
    hasAudioTrack = false;
    remainingAtoms = 0;
    maxMetadataEntries = 0;
    metadataKeys = new WeakMap();
    pendingTags = [];
    async parse() {
        this.hasVideoTrack = false;
        this.hasAudioTrack = false;
        this.maxMetadataEntries = (0, _allocationJs.getMaxMetadataEntries)(this.options);
        this.remainingAtoms = _atomTokenJs.maxMp4StructureEntries;
        this.tracks.clear();
        this.mediaDataRanges = [];
        this.streamedChapters.clear();
        this.streamedChapterCount = undefined;
        this.neroChapters = [];
        this.trackDefaults.clear();
        this.movieHeader = undefined;
        this.pendingTags = [];
        this.metadataKeys = new WeakMap();
        let remainingFileSize = this.tokenizer.fileInfo.size ?? Number.POSITIVE_INFINITY;
        while(remainingFileSize > 0){
            try {
                const token = await this.tokenizer.peekToken(_atomTokenJs.Header);
                if (token.name === '\0\0\0\0') {
                    const errMsg = `Error at offset=${this.tokenizer.position}: box.id=0`;
                    debug(errMsg);
                    this.addWarning(errMsg);
                    break;
                }
            } catch (error) {
                if (error instanceof Error) {
                    const errMsg = `Error at offset=${this.tokenizer.position}: ${error.message}`;
                    debug(errMsg);
                    this.addWarning(errMsg);
                } else throw error;
                break;
            }
            const atomsBeforeRoot = this.remainingAtoms;
            const rootAtom = await (0, _atomJs.Atom).readAtom(this.tokenizer, (atom, remaining)=>this.handleAtom(atom, remaining), null, remainingFileSize, ()=>this.reserveAtom());
            // Release the root tree budget; each table is limited separately.
            this.remainingAtoms = atomsBeforeRoot;
            remainingFileSize = rootAtom.header.length === 0n ? 0 : remainingFileSize - Number(rootAtom.header.length);
            // A keys box can follow its ilst. Keep wire order and resolve only within the owning meta box.
            for (const tag of this.pendingTags){
                let id = tag.id;
                if (tag.scope && id.length === 4 && id.charCodeAt(0) === 0) {
                    const index = [
                        ...id
                    ].reduce((value, character)=>value * 256 + character.charCodeAt(0), 0);
                    const key = this.metadataKeys.get(tag.scope)?.[index - 1];
                    if (key !== undefined) id = key;
                    else this.addWarning(`Unresolved MP4 metadata key index ${index}`);
                }
                await this.metadata.addTag(tagFormat, id, tag.value);
            }
            this.pendingTags = [];
            this.metadataKeys = new WeakMap();
        }
        if (this.mediaDataRanges.length > 0 && supportsSeeking(this.tokenizer)) {
            // Track references and sample tables may follow the media data in a trailing moov box.
            const tokenizer = this.tokenizer;
            const position = tokenizer.position;
            try {
                await this.parseChapters(this.mediaDataRanges);
            } finally{
                tokenizer.setPosition(position);
            }
        }
        if (this.streamedChapterCount !== undefined && this.streamedChapters.size !== this.streamedChapterCount) {
            if (this.neroChapters.length === 0) throw new (0, _atomTokenJs.Mp4ContentError)('Chapter chunk exceeding media data bounds');
            this.addWarning('Cannot read chapter track: Chapter chunk exceeding media data bounds');
        }
        if (this.options.includeChapters && this.neroChapters.length > 0 && !this.metadata.format.chapters?.some((chapter)=>chapter.title)) this.metadata.setFormat('chapters', this.neroChapters);
        // Post process metadata
        const formatList = [];
        this.tracks.forEach((track)=>{
            const trackFormats = [];
            // Sample descriptions are alternative encodings of one track, not separate tracks.
            for (const ssd of track.soundSampleDescription){
                const encoderInfo = ssd.encoder ?? encoderDict[ssd.dataFormat];
                if (encoderInfo) trackFormats.push(encoderInfo.format);
            }
            if (trackFormats.length >= 1) formatList.push(trackFormats.join('/'));
        });
        if (formatList.length > 0) this.metadata.setFormat('codec', [
            ...new Set(formatList)
        ].join('+'));
        const audioTracks = [
            ...this.tracks.values()
        ].filter(isAudioTrack);
        // Both audio and video use the same sample tables and fragment timing.
        for (const track of this.tracks.values())this.calculateTrackTiming(track);
        for (const audioTrack of audioTracks){
            const ssd = audioTrack.soundSampleDescription[0];
            if (ssd.description && audioTrack.media.header) {
                this.metadata.setFormat('sampleRate', ssd.description.sampleRate);
                this.metadata.setFormat('bitsPerSample', ssd.description.sampleSize);
                this.metadata.setFormat('numberOfChannels', ssd.description.numAudioChannels);
                if (audioTrack.media.header.timeScale === 0 && audioTrack.timeToSampleTable.length > 0 && ssd.description.sampleRate > 0) {
                    const totalSampleSize = audioTrack.timeToSampleTable.map((ttstEntry)=>ttstEntry.count * ttstEntry.duration).reduce((total, sampleSize)=>total + sampleSize);
                    audioTrack.duration = totalSampleSize / ssd.description.sampleRate;
                }
            }
            const encoderInfo = ssd.encoder ?? encoderDict[ssd.dataFormat];
            if (encoderInfo) this.metadata.setFormat('lossless', !encoderInfo.lossy);
        }
        if (audioTracks.length >= 1) {
            const firstAudioTrack = audioTracks[0];
            if (firstAudioTrack.duration) {
                this.metadata.setFormat('duration', firstAudioTrack.duration);
                if (firstAudioTrack.sizeInBytes) this.metadata.setFormat('bitrate', 8 * firstAudioTrack.sizeInBytes / firstAudioTrack.duration);
            }
        }
        for (const track of this.tracks.values())this.metadata.addStreamInfo(this.getTrackInfo(track));
        this.metadata.setFormat('hasAudio', this.hasAudioTrack || audioTracks.length > 0);
        this.metadata.setFormat('hasVideo', this.hasVideoTrack);
        const movieDuration = this.getDuration(this.movieHeader);
        if (movieDuration !== undefined) this.metadata.setFormat('containerDuration', movieDuration);
        else {
            const endTimes = [
                ...this.tracks.values()
            ].filter((track)=>isAudioTrack(track) || track.handler?.handlerType === 'vide').map((track)=>track.endTime);
            if (endTimes.length > 0 && endTimes.every((endTime)=>endTime !== undefined)) this.metadata.setFormat('containerDuration', endTimes.reduce((maximum, endTime)=>Math.max(maximum, endTime), 0));
        }
    }
    async handleAtom(atom, remaining) {
        if (atom.header.name === 'keys' && atom.parent?.header.name === 'meta') return this.parseMetadataKeys(atom.parent, remaining);
        if (atom.parent) switch(atom.parent.header.name){
            case 'ilst':
            case '<id>':
                return this.parseMetadataItemData(atom);
            case 'moov':
                switch(atom.header.name){
                    case 'trak':
                        return this.parseTrackBox(atom);
                    case 'udta':
                        return this.parseTrackBox(atom);
                }
                break;
            case 'moof':
                switch(atom.header.name){
                    case 'traf':
                        return this.parseTrackFragmentBox(atom);
                }
        }
        // Track-specific boxes are handled by parseTrackBox's local track context.
        // An orphan box must not modify whichever track happened to be registered last.
        if ([
            'chap',
            'stsd',
            'stsz'
        ].includes(atom.header.name)) {
            this.validatePayloadLength(remaining);
            // Retain structural validation of sample tables, including malformed-entry rejection.
            if (atom.header.name === 'stsd') await this.readToken(new _atomTokenJs.StsdAtom(remaining, _atomTokenJs.maxMp4StructureEntries));
            else if (atom.header.name === 'stsz') await this.readToken(new _atomTokenJs.StszAtom(remaining));
            else await this.tokenizer.ignore(remaining);
            this.addWarning(`Ignoring track-specific atom ${atom.atomPath} outside a track`);
            return;
        }
        if (this.atomParsers[atom.header.name]) {
            if (atom.header.name !== 'mdat') this.validatePayloadLength(remaining);
            return this.atomParsers[atom.header.name](remaining);
        }
        debug(`No parser for atom path=${atom.atomPath}, payload-len=${remaining}, ignoring atom`);
        await this.tokenizer.ignore(remaining);
    }
    reserveAtom() {
        if (this.remainingAtoms === 0) throw new (0, _atomTokenJs.Mp4ContentError)('MP4 atom count exceeds entry limit');
        --this.remainingAtoms;
    }
    assertRetainedEntryCapacity(count, collection, limit = _atomTokenJs.maxMp4StructureEntries) {
        if (count >= limit) throw new (0, _atomTokenJs.Mp4ContentError)(`${collection} count exceeds entry limit ${limit}`);
    }
    async addTag(id, value, scope) {
        this.assertRetainedEntryCapacity(this.pendingTags.length, 'MP4 metadata value', this.maxMetadataEntries);
        this.pendingTags.push({
            id,
            value,
            scope
        });
    }
    async parseMetadataKeys(scope, length) {
        if (length < 8) throw new (0, _atomTokenJs.Mp4ContentError)('Truncated metadata keys header');
        const data = await this.readToken(new _tokenTypes.Uint8ArrayType(length));
        if (_tokenTypes.UINT32_BE.get(data, 0) !== 0) throw new (0, _atomTokenJs.Mp4ContentError)('Unsupported metadata keys version or flags');
        const count = _tokenTypes.UINT32_BE.get(data, 4);
        if (count > this.maxMetadataEntries || count > Math.floor((length - 8) / 8)) throw new (0, _atomTokenJs.Mp4ContentError)('Metadata keys count exceeds entry limit or payload bounds');
        const keys = [];
        let offset = 8;
        for(let index = 0; index < count; ++index){
            if (offset + 8 > length) throw new (0, _atomTokenJs.Mp4ContentError)('Truncated metadata key entry');
            const size = _tokenTypes.UINT32_BE.get(data, offset);
            if (size < 8 || size > length - offset) throw new (0, _atomTokenJs.Mp4ContentError)('Invalid metadata key entry size');
            const namespace = new _tokenTypes.StringType(4, 'latin1').get(data, offset + 4);
            keys.push(`${namespace}:${(0, _textCodec.textDecode)(data.subarray(offset + 8, offset + size))}`);
            offset += size;
        }
        if (offset !== length) throw new (0, _atomTokenJs.Mp4ContentError)('Unexpected bytes after metadata keys');
        if (this.metadataKeys.has(scope)) this.addWarning('Duplicate MP4 metadata keys table; keeping the first table');
        else this.metadataKeys.set(scope, keys);
    }
    addWarning(message) {
        debug(`Warning: ${message}`);
        this.metadata.addWarning(message);
    }
    /**
     * Parse data of Meta-item-list-atom (item of 'ilst' atom)
     * @param metaAtom
     * Ref: https://developer.apple.com/library/content/documentation/QuickTime/QTFF/Metadata/Metadata.html#//apple_ref/doc/uid/TP40000939-CH1-SW8
     */ parseMetadataItemData(metaAtom) {
        let tagKey = metaAtom.header.name;
        let scope = metaAtom.parent;
        while(scope && scope.header.name !== 'meta')scope = scope.parent;
        const indexed = scope !== null && tagKey.charCodeAt(0) === 0;
        return metaAtom.readAtoms(this.tokenizer, async (child)=>{
            const payLoadLength = child.getPayloadLength();
            switch(child.header.name){
                case 'data':
                    return this.parseValueAtom(tagKey, child, scope ?? undefined);
                case 'name':
                case 'mean':
                case 'rate':
                    {
                        const name = await this.readToken(new _atomTokenJs.NameAtom(payLoadLength));
                        if (!indexed) tagKey += `:${name.name}`;
                        break;
                    }
                default:
                    {
                        const uint8Array = await this.readToken(new _tokenTypes.Uint8ArrayType(payLoadLength));
                        this.addWarning(`Unsupported meta-item: ${tagKey}[${child.header.name}] => value=${(0, _uint8ArrayExtras.uint8ArrayToHex)(uint8Array)} ascii=${(0, _textCodec.textDecode)(uint8Array, 'ascii')}`);
                    }
            }
        }, metaAtom.getPayloadLength());
    }
    async parseValueAtom(tagKey, metaAtom, scope) {
        const length = metaAtom.getPayloadLength();
        if (length < _atomTokenJs.DataAtomHeader.len) throw new (0, _atomTokenJs.Mp4ContentError)('Truncated data atom header');
        const header = await this.readToken(_atomTokenJs.DataAtomHeader);
        if (header.type.set !== 0) throw new (0, _atomTokenJs.Mp4ContentError)(`Unsupported type-set != 0: ${header.type.set}`);
        const bodyLength = length - _atomTokenJs.DataAtomHeader.len;
        if (this.options.skipCovers && (header.type.type === 13 || header.type.type === 14)) {
            const body = (0, _strtok3.createTokenizerView)(this.tokenizer, bodyLength);
            try {
                await body.consumeRemainder();
            } finally{
                await body.close();
            }
            return;
        }
        // Preserve the complete value's allocation policy when buffering its body.
        this.validatePayloadLength(length);
        const dataAtom = {
            ...header,
            value: await this.readToken(new _tokenTypes.Uint8ArrayType(bodyLength))
        };
        // Use well-known-type table
        // Ref: https://developer.apple.com/library/content/documentation/QuickTime/QTFF/Metadata/Metadata.html#//apple_ref/doc/uid/TP40000939-CH1-SW35
        switch(dataAtom.type.type){
            case 0:
                switch(tagKey){
                    case 'trkn':
                    case 'disk':
                        {
                            const num = _tokenTypes.UINT8.get(dataAtom.value, 3);
                            const of = _tokenTypes.UINT8.get(dataAtom.value, 5);
                            // console.log("  %s[data] = %s/%s", tagKey, num, of);
                            await this.addTag(tagKey, `${num}/${of}`, scope);
                            break;
                        }
                    case 'gnre':
                        {
                            const genreInt = _tokenTypes.UINT8.get(dataAtom.value, 1);
                            const genreStr = (0, _id3V1ParserJs.Genres)[genreInt - 1];
                            // console.log("  %s[data] = %s", tagKey, genreStr);
                            await this.addTag(tagKey, genreStr, scope);
                            break;
                        }
                    case 'rate':
                        {
                            const rate = (0, _textCodec.textDecode)(dataAtom.value, 'ascii');
                            await this.addTag(tagKey, rate, scope);
                            break;
                        }
                    default:
                        debug(`unknown proprietary value type for: ${metaAtom.atomPath}`);
                }
                break;
            case 1:
            case 18:
                await this.addTag(tagKey, (0, _textCodec.textDecode)(dataAtom.value), scope);
                break;
            case 13:
                await this.addTag(tagKey, {
                    format: 'image/jpeg',
                    data: Uint8Array.from(dataAtom.value)
                }, scope);
                break;
            case 14:
                await this.addTag(tagKey, {
                    format: 'image/png',
                    data: Uint8Array.from(dataAtom.value)
                }, scope);
                break;
            case 21:
                await this.addTag(tagKey, MP4Parser.read_BE_Integer(dataAtom.value, true), scope);
                break;
            case 22:
                await this.addTag(tagKey, MP4Parser.read_BE_Integer(dataAtom.value, false), scope);
                break;
            case 65:
                await this.addTag(tagKey, _tokenTypes.INT8.get(dataAtom.value, 0), scope);
                break;
            case 66:
                await this.addTag(tagKey, _tokenTypes.INT16_BE.get(dataAtom.value, 0), scope);
                break;
            case 67:
                await this.addTag(tagKey, _tokenTypes.INT32_BE.get(dataAtom.value, 0), scope);
                break;
            default:
                this.addWarning(`atom key=${tagKey}, has unknown well-known-type (data-type): ${dataAtom.type.type}`);
        }
    }
    getDuration(header) {
        if (header && header.timeScale > 0 && header.duration > 0 && header.duration !== 0xffffffff && header.duration !== Number(0xffffffffffffffffn)) return header.duration / header.timeScale;
        return undefined;
    }
    calculateTrackTiming(track) {
        const timeScale = track.media.header?.timeScale;
        track.duration = this.getDuration(track.media.header);
        track.endTime = track.duration;
        let sampleCount = track.timeToSampleTable.reduce((sum, entry)=>sum + entry.count, 0);
        let timeUnits = track.timeToSampleTable.reduce((sum, entry)=>sum + entry.count * entry.duration, 0);
        const fragments = track.fragmentStatistics;
        if (fragments) {
            const size = (track.sizeInBytes ?? 0) + fragments.size;
            const sizesComplete = (track.sampleCount === 0 || track.sizeInBytes !== undefined) && fragments.sizesComplete;
            sampleCount += fragments.sampleCount;
            if (sizesComplete && Number.isSafeInteger(size)) track.sizeInBytes = size;
            else track.sizeInBytes = undefined;
            if (fragments.timingComplete && timeScale && fragments.start !== undefined && Number.isSafeInteger(fragments.end)) {
                timeUnits += fragments.end - fragments.start;
                track.duration = Math.max(track.duration ?? 0, timeUnits / timeScale);
                track.endTime = Math.max(fragments.end / timeScale, track.duration);
            } else timeUnits = 0;
        } else if (track.duration === undefined && timeScale && timeUnits > 0) {
            track.duration = timeUnits / timeScale;
            track.endTime = track.duration;
        }
        if (timeScale && timeUnits > 0 && sampleCount > 0 && Number.isSafeInteger(sampleCount)) track.frameRate = sampleCount * timeScale / timeUnits;
        if (track.duration === undefined && this.movieHeader && track.header.duration > 0 && track.header.duration !== 0xffffffff && track.header.duration !== Number(0xffffffffffffffffn) && this.movieHeader.timeScale > 0) {
            track.duration = track.header.duration / this.movieHeader.timeScale;
            track.endTime = track.duration;
        }
    }
    aggregateFragment(track, header, run, decodeTime) {
        if (run.sampleCount === 0) return;
        const defaults = this.trackDefaults.get(track.header.trackId);
        const fragments = track.fragmentStatistics ??= {
            cursor: track.timeToSampleTable.reduce((sum, entry)=>sum + entry.count * entry.duration, 0),
            end: 0,
            sampleCount: 0,
            size: 0,
            timingComplete: true,
            sizesComplete: true
        };
        fragments.cursor = decodeTime ?? fragments.cursor;
        fragments.start = fragments.start === undefined ? fragments.cursor : Math.min(fragments.start, fragments.cursor);
        const defaultDuration = header.defaultSampleDuration ?? defaults?.duration;
        const defaultSize = header.defaultSampleSize ?? defaults?.size;
        if (run.flags.sampleDurationPresent) {
            fragments.cursor += run.duration;
            fragments.timingComplete &&= run.timingComplete;
        } else if (defaultDuration !== undefined && defaultDuration > 0) fragments.cursor += defaultDuration * run.sampleCount;
        else fragments.timingComplete = false;
        if (run.flags.sampleSizePresent) fragments.size += run.size;
        else if (defaultSize !== undefined) fragments.size += defaultSize * run.sampleCount;
        else fragments.sizesComplete = false;
        fragments.sampleCount += run.sampleCount;
        fragments.end = Math.max(fragments.end, fragments.cursor);
    }
    getTrackInfo(track) {
        const info = {
            id: track.header.trackId,
            flagEnabled: (track.header.flags & 1) !== 0
        };
        switch(track.handler?.handlerType){
            case 'soun':
            case 'audi':
                info.type = (0, _typeJs.TrackType).audio;
                break;
            case 'vide':
                info.type = (0, _typeJs.TrackType).video;
                break;
            case 'text':
            case 'sbtl':
            case 'subt':
            case 'clcp':
                info.type = (0, _typeJs.TrackType).subtitle;
                break;
            case 'meta':
            case 'mdta':
                info.type = (0, _typeJs.TrackType).metadata;
                break;
            default:
                if (isAudioTrack(track)) info.type = (0, _typeJs.TrackType).audio;
        }
        const mediaHeader = track.media.header;
        if (mediaHeader) {
            // ISO BMFF stores three lowercase letters in three 5-bit fields.
            const letters = [
                10,
                5,
                0
            ].map((shift)=>mediaHeader.language >> shift & 0x1f);
            if (letters.every((letter)=>letter >= 1 && letter <= 26)) info.language = String.fromCharCode(...letters.map((letter)=>letter + 0x60));
        }
        if (track.duration !== undefined) info.duration = track.duration;
        const size = track.sizeInBytes;
        if (size !== undefined && info.duration && info.duration > 0) info.bitrate = 8 * size / info.duration;
        const ssd = track.soundSampleDescription[0];
        if (ssd) {
            info.codecId = ssd.dataFormat;
            const encoder = ssd.encoder ?? encoderDict[ssd.dataFormat];
            info.codecName = encoder?.format ?? `<${ssd.dataFormat}>`;
            if (info.type === (0, _typeJs.TrackType).audio) {
                if (encoder) info.lossless = !encoder.lossy;
                if (ssd.description) {
                    info.audio = {};
                    if (ssd.description.sampleRate > 0) info.audio.samplingFrequency = ssd.description.sampleRate;
                    if (ssd.description.numAudioChannels > 0) info.audio.channels = ssd.description.numAudioChannels;
                    if (ssd.description.sampleSize && ssd.description.sampleSize > 0) info.audio.bitDepth = ssd.description.sampleSize;
                }
            }
        }
        // A VisualSampleEntry has width and height 16 bytes after the SampleEntry base.
        const description = track.sampleDescriptions?.[0]?.description;
        if (info.type === (0, _typeJs.TrackType).video) {
            info.video = {};
            if (track.frameRate !== undefined) info.video.frameRate = track.frameRate;
            if (track.header.displayWidth && track.header.displayHeight) {
                info.video.displayWidth = track.header.displayWidth;
                info.video.displayHeight = track.header.displayHeight;
            }
        }
        if (info.video && description && description.length >= 20) {
            const pixelWidth = _tokenTypes.UINT16_BE.get(description, 16);
            const pixelHeight = _tokenTypes.UINT16_BE.get(description, 18);
            if (pixelWidth > 0 && pixelHeight > 0) {
                info.video.pixelWidth = pixelWidth;
                info.video.pixelHeight = pixelHeight;
            }
        }
        return info;
    }
    async parseTrackBox(trakBox) {
        // The handler and header can occur in any order; resolve them after parsing the track.
        const track = {
            media: {},
            soundSampleDescription: [],
            chunkOffsetTable: [],
            sampleSize: 0,
            sampleCount: 0,
            sampleSizeTable: [],
            sampleToChunkTable: [],
            timeToSampleTable: []
        };
        await trakBox.readAtoms(this.tokenizer, async (child)=>{
            const payLoadLength = child.getPayloadLength();
            switch(child.header.name){
                case 'chap':
                    {
                        const chap = await this.readToken(new (0, _atomTokenJs.ChapterTrackReferenceBox)(payLoadLength, _atomTokenJs.maxMp4StructureEntries));
                        track.chapterList = chap;
                        break;
                    }
                case 'tkhd':
                    track.header = await this.readToken(new _atomTokenJs.TrackHeaderAtom(payLoadLength));
                    break;
                case 'hdlr':
                    // QuickTime File Format, Media atom: Handler reference atom ('hdlr').
                    // https://developer.apple.com/documentation/quicktime-file-format/media_atom/handler_reference_atom
                    if (child.parent?.header.name !== 'mdia' || child.parent.parent !== trakBox) {
                        await this.tokenizer.ignore(payLoadLength);
                        break;
                    }
                    track.handler = await this.readToken(new _atomTokenJs.HandlerBox(payLoadLength));
                    if (track.handler.handlerType === 'audi' || track.handler.handlerType === 'soun') this.hasAudioTrack = true;
                    else if (track.handler.handlerType === 'vide') this.hasVideoTrack = true;
                    break;
                case 'mdhd':
                    {
                        // Parse media header (mdhd) box
                        const mdhd_data = await this.readToken(new _atomTokenJs.MdhdAtom(payLoadLength));
                        track.media.header = mdhd_data;
                        break;
                    }
                case 'stco':
                case 'co64':
                    {
                        const token = child.header.name === 'co64' ? new _atomTokenJs.Co64Atom(payLoadLength, _atomTokenJs.maxMp4StructureEntries) : new _atomTokenJs.StcoAtom(payLoadLength, _atomTokenJs.maxMp4StructureEntries);
                        const stco = await this.readToken(token);
                        track.chunkOffsetTable = stco.entries; // remember chunk offsets
                        break;
                    }
                case 'stsc':
                    {
                        // sample-to-Chunk box
                        const stsc = await this.readToken(new _atomTokenJs.StscAtom(payLoadLength, _atomTokenJs.maxMp4StructureEntries));
                        track.sampleToChunkTable = stsc.entries;
                        break;
                    }
                case 'stsd':
                    {
                        // sample description box
                        const stsd = await this.readToken(new _atomTokenJs.StsdAtom(payLoadLength, _atomTokenJs.maxMp4StructureEntries));
                        track.sampleDescriptions = stsd.table;
                        track.soundSampleDescription = stsd.table.map((dfEntry)=>this.parseSoundSampleDescription(dfEntry));
                        break;
                    }
                case 'stts':
                    {
                        // time-to-sample table
                        const stts = await this.readToken(new _atomTokenJs.SttsAtom(payLoadLength, _atomTokenJs.maxMp4StructureEntries));
                        track.timeToSampleTable = stts.entries;
                        break;
                    }
                case 'stsz':
                    {
                        // References and handlers may appear later; retain a bounded chapter prefix for any track.
                        const stsz = await this.readToken(new _atomTokenJs.StszAtom(payLoadLength, this.options.includeChapters ? this.maxChapterCount : 0));
                        track.sampleSize = stsz.sampleSize;
                        track.sampleCount = stsz.numberOfEntries;
                        track.sampleSizeTable = stsz.entries;
                        track.sizeInBytes = stsz.totalSize;
                        break;
                    }
                case 'dinf':
                case 'vmhd':
                case 'smhd':
                    debug(`Ignoring: ${child.header.name}`);
                    await this.tokenizer.ignore(payLoadLength);
                    break;
                default:
                    if (child.parent?.header.name === 'ilst' || child.parent?.header.name === '<id>' || child.header.name === 'keys' && child.parent?.header.name === 'meta') {
                        await this.handleAtom(child, payLoadLength);
                        break;
                    }
                    debug(`Unexpected track box: ${child.header.name}`);
                    await this.tokenizer.ignore(payLoadLength);
            }
        }, trakBox.getPayloadLength());
        // Register track
        if (track.header) {
            if (!this.tracks.has(track.header.trackId)) this.assertRetainedEntryCapacity(this.tracks.size, 'MP4 track');
            this.tracks.set(track.header.trackId, {
                ...track,
                header: track.header
            });
        }
    }
    async parseTrackFragmentBox(trafBox) {
        let tfhd;
        let decodeTime;
        const runs = [];
        let remainingSamples = _atomTokenJs.maxMp4StructureEntries;
        await trafBox.readAtoms(this.tokenizer, async (child)=>{
            const length = child.getPayloadLength();
            switch(child.header.name){
                case 'tfhd':
                    tfhd = await this.readToken(new _atomTokenJs.TrackFragmentHeaderBox(length));
                    break;
                case 'tfdt':
                    {
                        const data = await this.readToken(new _tokenTypes.Uint8ArrayType(length));
                        if (length < 4 || data[0] === 0 && length < 8 || data[0] === 1 && length < 12) throw new (0, _atomTokenJs.Mp4ContentError)('Truncated tfdt box');
                        if (data[0] === 0) decodeTime = _tokenTypes.UINT32_BE.get(data, 4);
                        else if (data[0] === 1) decodeTime = Number(_tokenTypes.UINT64_BE.get(data, 4));
                        else throw new (0, _atomTokenJs.Mp4ContentError)('Invalid tfdt version');
                        if (!Number.isSafeInteger(decodeTime)) throw new (0, _atomTokenJs.Mp4ContentError)('Unsafe tfdt decode time');
                        break;
                    }
                case 'trun':
                    {
                        const run = await this.readToken(new _atomTokenJs.TrackRunBox(length, remainingSamples));
                        remainingSamples -= run.explicitSampleCount;
                        runs.push(run);
                        break;
                    }
                default:
                    await this.tokenizer.ignore(length);
            }
        }, trafBox.getPayloadLength());
        if (tfhd) {
            const track = this.tracks.get(tfhd.trackId);
            for (const run of runs){
                if (track) this.aggregateFragment(track, tfhd, run, decodeTime);
                decodeTime = undefined;
            }
        }
    }
    atomParsers = {
        /**
         * Parse movie header (mvhd) atom
         * Ref: https://developer.apple.com/library/archive/documentation/QuickTime/QTFF/QTFFChap2/qtff2.html#//apple_ref/doc/uid/TP40000939-CH204-56313
         */ mvhd: async (len)=>{
            const mvhd = await this.readToken(new _atomTokenJs.MvhdAtom(len));
            this.movieHeader = mvhd;
            this.metadata.setFormat('creationTime', mvhd.creationTime);
            this.metadata.setFormat('modificationTime', mvhd.modificationTime);
        },
        chpl: async (len)=>{
            if (this.options.includeChapters) this.neroChapters = await this.readToken(new _atomTokenJs.ChapterListAtom(len, this.maxChapterCount, ()=>{
                this.addWarning(`Chapter count exceeds the ${this.maxChapterCount} chapter limit`);
            }));
            else await this.tokenizer.ignore(len);
        },
        trex: async (len)=>{
            const data = await this.readToken(new _tokenTypes.Uint8ArrayType(len));
            if (len < 24) throw new (0, _atomTokenJs.Mp4ContentError)('Truncated trex box');
            const trackId = _tokenTypes.UINT32_BE.get(data, 4);
            if (!this.trackDefaults.has(trackId)) this.assertRetainedEntryCapacity(this.trackDefaults.size, 'MP4 track-default');
            this.trackDefaults.set(trackId, {
                duration: _tokenTypes.UINT32_BE.get(data, 12),
                size: _tokenTypes.UINT32_BE.get(data, 16)
            });
        },
        /**
         * Parse mdat atom.
         * Will scan for chapters
         */ mdat: async (len)=>{
            const range = {
                offset: this.tokenizer.position,
                end: this.tokenizer.position + len
            };
            if (this.options.includeChapters) {
                if (supportsSeeking(this.tokenizer)) {
                    this.assertRetainedEntryCapacity(this.mediaDataRanges.length, 'MP4 media-data range');
                    this.mediaDataRanges.push(range);
                } else await this.parseChapters([
                    range
                ], true);
            }
            await this.tokenizer.ignore(range.end - this.tokenizer.position);
        },
        ftyp: async (len)=>{
            if (len < 8 || len % _atomTokenJs.ftyp.len !== 0) throw new (0, _atomTokenJs.Mp4ContentError)(`Invalid ftyp payload length: ${len}`);
            const typeCount = len / _atomTokenJs.ftyp.len;
            if (typeCount > _atomTokenJs.maxMp4StructureEntries) throw new (0, _atomTokenJs.Mp4ContentError)(`ftyp entry count ${typeCount} exceeds entry limit ${_atomTokenJs.maxMp4StructureEntries}`);
            const types = [];
            while(len > 0){
                const ftype = await this.readToken(_atomTokenJs.ftyp);
                len -= _atomTokenJs.ftyp.len;
                const value = ftype.type.replace(/\W/g, '');
                if (value.length > 0) types.push(value); // unshift for backward compatibility
            }
            debug(`ftyp: ${types.join('/')}`);
            const x = [
                ...new Set(types)
            ].join('/');
            this.metadata.setFormat('container', x);
        },
        date: async (len)=>{
            const date = await this.readToken(new _tokenTypes.StringType(len, 'utf-8'));
            await this.addTag('date', date);
        }
    };
    /**
     * @param sampleDescription
     * Ref: https://developer.apple.com/library/archive/documentation/QuickTime/QTFF/QTFFChap3/qtff3.html#//apple_ref/doc/uid/TP40000939-CH205-128916
     */ parseSoundSampleDescription(sampleDescription) {
        const ssd = {
            dataFormat: sampleDescription.dataFormat,
            dataReferenceIndex: sampleDescription.dataReferenceIndex
        };
        let offset = 0;
        const { description } = sampleDescription;
        // Only an AudioSampleEntry carries a sound sample description; it is at least 20 bytes beyond the
        // 16-byte SampleEntry base. A shorter description belongs to another sample entry class, or is truncated.
        if (description && description.length >= _atomTokenJs.SoundSampleDescriptionVersion.len) {
            const version = _atomTokenJs.SoundSampleDescriptionVersion.get(description, offset);
            offset += _atomTokenJs.SoundSampleDescriptionVersion.len;
            if (version.version === 0 || version.version === 1) {
                // Sound Sample Description (Version 0)
                if (description.length >= offset + _atomTokenJs.SoundSampleDescriptionV0.len) {
                    ssd.description = _atomTokenJs.SoundSampleDescriptionV0.get(description, offset);
                    if (ssd.dataFormat === 'mp4a') {
                        const childOffset = offset + _atomTokenJs.SoundSampleDescriptionV0.len + (version.version === 1 ? 16 : 0);
                        if (childOffset > description.length) throw new (0, _atomTokenJs.Mp4ContentError)('Truncated mp4a sound sample description');
                        const audioConfig = this.readAudioConfig(description, childOffset);
                        if (audioConfig?.objectType === 36) ssd.encoder = {
                            format: 'MPEG-4/ALS',
                            lossy: false
                        };
                        if (audioConfig?.channels) ssd.description.numAudioChannels = audioConfig.channels;
                    }
                } else debug(`Warning: sound-sample-description too short: ${description.length} bytes`);
            } else debug(`Warning: sound-sample-description ${version} not implemented`);
        }
        return ssd;
    }
    /** Read codec configuration only inside the bounded AudioSampleEntry child boxes. */ readAudioConfig(data, offset) {
        while(offset < data.length){
            this.reserveAtom();
            if (data.length - offset < 8) throw new (0, _atomTokenJs.Mp4ContentError)('Truncated mp4a child box header');
            let size = _tokenTypes.UINT32_BE.get(data, offset);
            const name = _atomTokenJs.Header.get(data, offset).name;
            let headerSize = 8;
            if (size === 1) {
                if (data.length - offset < 16) throw new (0, _atomTokenJs.Mp4ContentError)('Truncated mp4a extended child box header');
                const extendedSize = _tokenTypes.UINT64_BE.get(data, offset + 8);
                if (extendedSize > BigInt(data.length - offset)) throw new (0, _atomTokenJs.Mp4ContentError)('mp4a child box exceeds sample entry');
                size = Number(extendedSize);
                headerSize = 16;
            } else if (size === 0) size = data.length - offset;
            if (size < headerSize || size > data.length - offset) throw new (0, _atomTokenJs.Mp4ContentError)('Invalid mp4a child box size');
            if (name === 'esds') return this.readEsdsAudioConfig(data.subarray(offset + headerSize, offset + size));
            offset += size;
        }
    }
    /** ISO/IEC 14496-1 descriptor sizes have at most four base-128 bytes. */ *readDescriptors(data, offset) {
        while(offset < data.length){
            this.reserveAtom();
            const tag = data[offset++];
            let size = 0;
            for(let i = 0;; i++){
                if (offset >= data.length || i === 4) throw new (0, _atomTokenJs.Mp4ContentError)('Truncated or invalid MPEG-4 descriptor length');
                const byte = data[offset++];
                size = size << 7 | byte & 0x7f;
                if (!(byte & 0x80)) break;
            }
            if (size > data.length - offset) throw new (0, _atomTokenJs.Mp4ContentError)('MPEG-4 descriptor exceeds its parent');
            yield {
                tag,
                body: data.subarray(offset, offset + size)
            };
            offset += size;
        }
    }
    readEsdsAudioConfig(data) {
        if (data.length < 4) throw new (0, _atomTokenJs.Mp4ContentError)('Truncated esds full-box header');
        for (const es of this.readDescriptors(data, 4)){
            if (es.tag !== 3) continue;
            if (es.body.length < 3) throw new (0, _atomTokenJs.Mp4ContentError)('Truncated ES descriptor');
            const flags = es.body[2];
            let offset = 3 + (flags & 0x80 ? 2 : 0);
            if (flags & 0x40) {
                if (offset >= es.body.length) throw new (0, _atomTokenJs.Mp4ContentError)('Truncated ES URL length');
                offset += 1 + es.body[offset];
            }
            offset += flags & 0x20 ? 2 : 0;
            if (offset > es.body.length) throw new (0, _atomTokenJs.Mp4ContentError)('Truncated optional ES descriptor fields');
            for (const decoder of this.readDescriptors(es.body, offset)){
                if (decoder.tag !== 4) continue;
                if (decoder.body.length < 13) throw new (0, _atomTokenJs.Mp4ContentError)('Truncated decoder configuration');
                // AudioSpecificConfig is defined for MPEG-4 Audio (0x40), stream type Audio (5).
                if (decoder.body[0] !== 0x40 || decoder.body[1] >>> 2 !== 5) continue;
                for (const specific of this.readDescriptors(decoder.body, 13)){
                    if (specific.tag !== 5) continue;
                    if (specific.body.length === 0 || specific.body[0] >>> 3 === 31 && specific.body.length < 2) throw new (0, _atomTokenJs.Mp4ContentError)('Truncated AudioSpecificConfig object type');
                    const type = specific.body[0] >>> 3;
                    if (type === 31) return {
                        objectType: 32 + ((specific.body[0] & 7) << 3) + (specific.body[1] >>> 5)
                    };
                    return {
                        objectType: type,
                        channels: readAacLcChannels(type, specific.body)
                    };
                }
            }
        }
    }
    async parseChapters(mediaDataRanges, forwardOnly = false) {
        for (const track of this.tracks.values())for (const id of track.chapterList ?? []){
            const chapterTrack = this.tracks.get(id);
            if (!chapterTrack || chapterTrack === track || chapterTrack.handler && ![
                'text',
                'sbtl'
            ].includes(chapterTrack.handler.handlerType)) continue;
            try {
                await this.parseChapterTrack(chapterTrack, track, mediaDataRanges, forwardOnly);
            } catch (error) {
                // A broken QuickTime track must not hide an independently usable Nero list.
                if (this.neroChapters.length === 0 || !(error instanceof (0, _atomTokenJs.Mp4ContentError))) throw error;
                this.streamedChapterCount = undefined;
                this.streamedChapters.clear();
                this.addWarning(`Cannot read chapter track: ${error.message}`);
            }
            return;
        }
    }
    async parseChapterTrack(chapterTrack, track, mediaDataRanges, forwardOnly) {
        const timeScale = chapterTrack.media.header?.timeScale;
        if (timeScale === undefined || timeScale <= 0) throw new (0, _atomTokenJs.Mp4ContentError)('Invalid chapter track timescale');
        const sampleCount = Math.min(chapterTrack.sampleCount, this.maxChapterCount);
        if (chapterTrack.sampleCount > this.maxChapterCount) this.addWarning(`Chapter count exceeds the ${this.maxChapterCount} chapter limit`);
        if (forwardOnly) this.streamedChapterCount = sampleCount;
        const chapters = [];
        let sampleIndex = 0;
        let timeRun = 0;
        let samplesInTimeRun = chapterTrack.timeToSampleTable[0]?.count ?? 0;
        let start = 0;
        const chunkRuns = chapterTrack.sampleToChunkTable;
        for(let run = 0; run < chunkRuns.length && sampleIndex < sampleCount; ++run){
            const { firstChunk, samplesPerChunk } = chunkRuns[run];
            const nextFirstChunk = chunkRuns[run + 1]?.firstChunk ?? chapterTrack.chunkOffsetTable.length + 1;
            if (run === 0 && firstChunk !== 1 || firstChunk < 1 || samplesPerChunk === 0 || nextFirstChunk <= firstChunk || nextFirstChunk > chapterTrack.chunkOffsetTable.length + 1) throw new (0, _atomTokenJs.Mp4ContentError)('Invalid chapter sample-to-chunk table');
            for(let chunk = firstChunk - 1; chunk < nextFirstChunk - 1 && sampleIndex < sampleCount; ++chunk){
                let offset = chapterTrack.chunkOffsetTable[chunk];
                for(let sample = 0; sample < samplesPerChunk && sampleIndex < sampleCount; ++sample){
                    while(samplesInTimeRun === 0 && timeRun < chapterTrack.timeToSampleTable.length)samplesInTimeRun = chapterTrack.timeToSampleTable[++timeRun]?.count ?? 0;
                    const timing = chapterTrack.timeToSampleTable[timeRun];
                    if (!timing) throw new (0, _atomTokenJs.Mp4ContentError)('Missing chapter sample timing');
                    const size = chapterTrack.sampleSize || chapterTrack.sampleSizeTable[sampleIndex];
                    const deferred = forwardOnly && (this.streamedChapters.has(sampleIndex) || offset >= mediaDataRanges[0].end);
                    if (!deferred) {
                        if (!Number.isSafeInteger(offset) || !Number.isSafeInteger(size) || size < 0 || !mediaDataRanges.some((range)=>offset >= range.offset && size <= range.end - offset)) throw new (0, _atomTokenJs.Mp4ContentError)('Chapter chunk exceeding media data bounds');
                        if (forwardOnly && offset < this.tokenizer.position) throw new (0, _atomTokenJs.Mp4ContentError)('Chapter chunk exceeding media data bounds');
                        // Oversized or empty title samples retain their timestamps without buffering their data.
                        const title = size < 2 || size > maxChapterTitleBytes ? '' : await this.readToken(new _atomTokenJs.ChapterText(size), offset);
                        const chapter = {
                            title,
                            timeScale,
                            start
                        };
                        if (track.chunkOffsetTable.length > 0 && track.sampleToChunkTable.length > 0 && track.timeToSampleTable.length > 0) {
                            track.chapterSampleLookup ??= this.createSampleOffsetLookup(track);
                            chapter.sampleOffset = track.chapterSampleLookup(offset + size);
                        }
                        if (forwardOnly) this.streamedChapters.set(sampleIndex, chapter);
                        else chapters.push(chapter);
                    }
                    offset += size;
                    start += timing.duration;
                    --samplesInTimeRun;
                    ++sampleIndex;
                }
            }
        }
        if (sampleIndex < sampleCount) throw new (0, _atomTokenJs.Mp4ContentError)('Missing chapter sample-to-chunk entries');
        if (!forwardOnly) this.metadata.setFormat('chapters', chapters);
        else if (this.streamedChapters.size === sampleCount) this.metadata.setFormat('chapters', [
            ...this.streamedChapters
        ].sort(([left], [right])=>left - right).map(([, chapter])=>chapter));
    }
    /** Advance across monotone queries; restart for backward queries without sorting file tables. */ createSampleOffsetLookup(track) {
        let previousChunk = 0;
        for (const entry of track.sampleToChunkTable){
            if (previousChunk === 0 && entry.firstChunk !== 1 || entry.firstChunk <= previousChunk || entry.samplesPerChunk === 0) throw new (0, _atomTokenJs.Mp4ContentError)('Invalid audio sample-to-chunk table');
            previousChunk = entry.firstChunk;
        }
        let chunkIndex = 0;
        let chunkId = 1;
        let chunkRun = 0;
        let timingIndex = 0;
        let remainingSamples = 0;
        let sampleDuration = 0;
        let totalDuration = 0;
        let previousOffset = Number.NEGATIVE_INFINITY;
        return (chapterOffset)=>{
            if (chapterOffset < previousOffset) {
                chunkIndex = chunkRun = timingIndex = remainingSamples = sampleDuration = totalDuration = 0;
                chunkId = 1;
            }
            previousOffset = chapterOffset;
            // Earlier rejected offsets remain below any later query, even in an unordered table.
            while(chunkIndex < track.chunkOffsetTable.length && track.chunkOffsetTable[chunkIndex] < chapterOffset)++chunkIndex;
            const targetChunk = chunkIndex + 1;
            for(; chunkId < targetChunk; ++chunkId){
                while(track.sampleToChunkTable[chunkRun + 1]?.firstChunk <= chunkId)++chunkRun;
                let samplesPerChunk = track.sampleToChunkTable[chunkRun].samplesPerChunk;
                while(samplesPerChunk > 0){
                    while(remainingSamples === 0){
                        const timing = track.timeToSampleTable[timingIndex++];
                        if (!timing) throw new (0, _atomTokenJs.Mp4ContentError)('Missing audio sample timing for chapter offset');
                        remainingSamples = timing.count;
                        sampleDuration = timing.duration;
                    }
                    const samples = Math.min(remainingSamples, samplesPerChunk);
                    totalDuration += samples * sampleDuration;
                    if (!Number.isSafeInteger(totalDuration)) throw new (0, _atomTokenJs.Mp4ContentError)('Unsafe audio sample timing for chapter offset');
                    remainingSamples -= samples;
                    samplesPerChunk -= samples;
                }
            }
            return totalDuration;
        };
    }
}

},{"@borewit/text-codec":"104u3","debug":"4XIdh","strtok3":"7L6Gs","token-types":"al35Q","uint8array-extras":"4N1qG","../common/Allocation.js":"8ZVyl","../common/BasicParser.js":"91dLC","../id3v1/ID3v1Parser.js":"fWBrl","../type.js":"a50Lj","./Atom.js":"7evMU","./AtomToken.js":"kX16M","@parcel/transformer-js/src/esmodule-helpers.js":"53hI8"}],"7evMU":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Atom", ()=>Atom);
var _debug = require("debug");
var _debugDefault = parcelHelpers.interopDefault(_debug);
var _atomTokenJs = require("./AtomToken.js");
const debug = (0, _debugDefault.default)('music-metadata:parser:MP4:Atom');
const maxAtomDepth = 64;
class Atom {
    payloadLength;
    reserveAtom;
    static async readAtom(tokenizer, dataHandler, parent, remaining, reserveAtom = ()=>undefined) {
        let depth = 0;
        for(let ancestor = parent; ancestor; ancestor = ancestor.parent){
            if (++depth >= maxAtomDepth) throw new (0, _atomTokenJs.Mp4ContentError)(`MP4 atom nesting exceeds limit ${maxAtomDepth}`);
        }
        // Validate boundaries before reading either header or dispatching a payload parser.
        const offset = tokenizer.position;
        remaining = Math.min(remaining, (tokenizer.fileInfo.size ?? Number.POSITIVE_INFINITY) - offset);
        if (remaining < _atomTokenJs.Header.len) throw new (0, _atomTokenJs.Mp4ContentError)('Truncated atom header');
        debug(`Reading next token on offset=${offset}...`); //  buf.toString('ascii')
        const header = await tokenizer.readToken(_atomTokenJs.Header);
        const extended = header.length === 1n;
        if (extended) {
            if (remaining < 16) throw new (0, _atomTokenJs.Mp4ContentError)('Truncated extended atom header');
            header.length = await tokenizer.readToken(_atomTokenJs.ExtendedSize);
        }
        const headerLength = extended ? 16 : 8;
        if ((extended || header.length !== 0n) && header.length < BigInt(headerLength)) throw new (0, _atomTokenJs.Mp4ContentError)(`Invalid atom size: ${header.length}`);
        if (header.length > BigInt(Number.MAX_SAFE_INTEGER)) throw new (0, _atomTokenJs.Mp4ContentError)(`Atom size exceeds Number.MAX_SAFE_INTEGER: ${header.length}`);
        const length = header.length === 0n ? remaining : Number(header.length);
        if (length > remaining) throw new (0, _atomTokenJs.Mp4ContentError)(`Atom size exceeds remaining bytes: ${header.length} > ${remaining}`);
        const payloadLength = length - headerLength;
        reserveAtom();
        const atomBean = new Atom(header, extended, parent, payloadLength, reserveAtom);
        debug(`parse atom name=${atomBean.atomPath}, extended=${atomBean.extended}, offset=${offset}, len=${atomBean.header.length}`); //  buf.toString('ascii')
        await atomBean.readData(tokenizer, dataHandler, payloadLength);
        return atomBean;
    }
    atomPath;
    header;
    extended;
    parent;
    constructor(header, extended, parent, payloadLength, reserveAtom = ()=>undefined){
        this.payloadLength = payloadLength;
        this.reserveAtom = reserveAtom;
        this.header = header;
        this.extended = extended;
        this.parent = parent;
        this.atomPath = (this.parent ? `${this.parent.atomPath}.` : '') + this.header.name;
    }
    getHeaderLength() {
        return this.extended ? 16 : 8;
    }
    getPayloadLength() {
        return this.payloadLength;
    }
    async readAtoms(tokenizer, dataHandler, size) {
        while(size > 0){
            if (size === Number.POSITIVE_INFINITY) {
                // An open-ended container ends only at clean EOF, before the next header.
                const bytesRead = await tokenizer.peekBuffer(new Uint8Array((0, _atomTokenJs.Header).len), {
                    mayBeLess: true
                });
                if (bytesRead === 0) return;
                if (bytesRead < (0, _atomTokenJs.Header).len) throw new (0, _atomTokenJs.Mp4ContentError)('Truncated atom header');
            }
            const atomBean = await Atom.readAtom(tokenizer, dataHandler, this, size, this.reserveAtom);
            size = atomBean.header.length === 0n ? 0 : size - Number(atomBean.header.length);
        }
    }
    async readData(tokenizer, dataHandler, remaining) {
        switch(this.header.name){
            // "Container" atoms, contains nested atoms
            case 'moov':
            case 'udta':
            case 'mdia':
            case 'minf':
            case 'stbl':
            case '<id>':
            case 'ilst':
            case 'tref':
            case 'mvex':
            case 'moof':
                return this.readAtoms(tokenizer, dataHandler, remaining);
            case 'meta':
                {
                    // Metadata Atom, ref: https://developer.apple.com/library/content/documentation/QuickTime/QTFF/Metadata/Metadata.html#//apple_ref/doc/uid/TP40000939-CH1-SW8
                    if (remaining < 8) throw new (0, _atomTokenJs.Mp4ContentError)('Truncated meta atom');
                    // meta has 4 bytes of padding, ignore
                    const peekHeader = await tokenizer.peekToken((0, _atomTokenJs.Header));
                    const paddingLength = peekHeader.name === 'hdlr' ? 0 : 4;
                    await tokenizer.ignore(paddingLength);
                    return this.readAtoms(tokenizer, dataHandler, remaining - paddingLength);
                }
            default:
                return dataHandler(this, remaining);
        }
    }
}

},{"debug":"4XIdh","./AtomToken.js":"kX16M","@parcel/transformer-js/src/esmodule-helpers.js":"53hI8"}],"kX16M":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Mp4ContentError", ()=>Mp4ContentError);
parcelHelpers.export(exports, "maxMp4StructureEntries", ()=>maxMp4StructureEntries);
parcelHelpers.export(exports, "Header", ()=>Header);
parcelHelpers.export(exports, "ExtendedSize", ()=>ExtendedSize);
parcelHelpers.export(exports, "ftyp", ()=>ftyp);
parcelHelpers.export(exports, "mhdr", ()=>mhdr);
/**
 * Base class for 'fixed' length atoms.
 * In some cases these atoms are longer then the sum of the described fields.
 * Issue: https://github.com/Borewit/music-metadata/issues/120
 */ parcelHelpers.export(exports, "FixedLengthAtom", ()=>FixedLengthAtom);
/**
 * Token: Media Header Atom
 * Ref:
 * - https://developer.apple.com/library/archive/documentation/QuickTime/QTFF/QTFFChap2/qtff2.html#//apple_ref/doc/uid/TP40000939-CH204-SW34
 * - https://wiki.multimedia.cx/index.php/QuickTime_container#mdhd
 */ parcelHelpers.export(exports, "MdhdAtom", ()=>MdhdAtom);
/**
 * Token: Movie Header Atom
 */ parcelHelpers.export(exports, "MvhdAtom", ()=>MvhdAtom);
parcelHelpers.export(exports, "DataAtomHeader", ()=>DataAtomHeader);
/**
 * Data Atom Structure
 * Ref: https://developer.apple.com/library/content/documentation/QuickTime/QTFF/Metadata/Metadata.html#//apple_ref/doc/uid/TP40000939-CH1-SW31
 */ parcelHelpers.export(exports, "NameAtom", ()=>NameAtom);
/**
 * Track Header Atoms structure (`tkhd`)
 * Ref: https://developer.apple.com/library/content/documentation/QuickTime/QTFF/QTFFChap2/qtff2.html#//apple_ref/doc/uid/TP40000939-CH204-25550
 */ parcelHelpers.export(exports, "TrackHeaderAtom", ()=>TrackHeaderAtom);
/**
 * Atom: Sample-description Atom ('stsd')
 * Ref: https://developer.apple.com/library/archive/documentation/QuickTime/QTFF/QTFFChap2/qtff2.html#//apple_ref/doc/uid/TP40000939-CH204-25691
 */ parcelHelpers.export(exports, "StsdAtom", ()=>StsdAtom);
parcelHelpers.export(exports, "SoundSampleDescriptionVersion", ()=>SoundSampleDescriptionVersion);
parcelHelpers.export(exports, "SoundSampleDescriptionV0", ()=>SoundSampleDescriptionV0);
parcelHelpers.export(exports, "TimeToSampleToken", ()=>TimeToSampleToken);
/**
 * Time-to-sample('stts') atom.
 * Store duration information for a media’s samples.
 * Ref: https://developer.apple.com/library/archive/documentation/QuickTime/QTFF/QTFFChap2/qtff2.html#//apple_ref/doc/uid/TP40000939-CH204-25696
 */ parcelHelpers.export(exports, "SttsAtom", ()=>SttsAtom);
parcelHelpers.export(exports, "SampleToChunkToken", ()=>SampleToChunkToken);
/**
 * Sample-to-Chunk ('stsc') atom interface
 * Ref: https://developer.apple.com/library/archive/documentation/QuickTime/QTFF/QTFFChap2/qtff2.html#//apple_ref/doc/uid/TP40000939-CH204-25706
 */ parcelHelpers.export(exports, "StscAtom", ()=>StscAtom);
/**
 * Sample-size ('stsz') atom
 * Ref: https://developer.apple.com/library/archive/documentation/QuickTime/QTFF/QTFFChap2/qtff2.html#//apple_ref/doc/uid/TP40000939-CH204-25710
 */ parcelHelpers.export(exports, "StszAtom", ()=>StszAtom);
/**
 * Chunk offset atom, 'stco'
 * Ref: https://developer.apple.com/library/archive/documentation/QuickTime/QTFF/QTFFChap2/qtff2.html#//apple_ref/doc/uid/TP40000939-CH204-25715
 */ parcelHelpers.export(exports, "StcoAtom", ()=>StcoAtom);
/** 64-bit chunk offsets (co64), constrained to exact JavaScript positions. */ parcelHelpers.export(exports, "Co64Atom", ()=>Co64Atom);
/**
 * Token used to decode text-track from 'mdat' atom (raw data stream)
 */ parcelHelpers.export(exports, "ChapterText", ()=>ChapterText);
/** Nero chapter list (chpl): UTF-8 titles and start times in 100ns units. */ parcelHelpers.export(exports, "ChapterListAtom", ()=>ChapterListAtom);
/**
 * Sample-size ('tfhd') TrackFragmentHeaderBox
 */ parcelHelpers.export(exports, "TrackFragmentHeaderBox", ()=>TrackFragmentHeaderBox);
/**
 * Sample-size ('trun') TrackRunBox
 */ parcelHelpers.export(exports, "TrackRunBox", ()=>TrackRunBox);
/**
 * HandlerBox (`hdlr`)
 */ parcelHelpers.export(exports, "HandlerBox", ()=>HandlerBox);
/**
 * Chapter Track Reference Box (`chap`)
 */ parcelHelpers.export(exports, "ChapterTrackReferenceBox", ()=>ChapterTrackReferenceBox);
var _textCodec = require("@borewit/text-codec");
var _debug = require("debug");
var _debugDefault = parcelHelpers.interopDefault(_debug);
var _tokenTypes = require("token-types");
var _allocationJs = require("../common/Allocation.js");
var _fourCCJs = require("../common/FourCC.js");
var _utilJs = require("../common/Util.js");
var _parseErrorJs = require("../ParseError.js");
const debug = (0, _debugDefault.default)('music-metadata:parser:MP4:atom');
class Mp4ContentError extends (0, _parseErrorJs.makeUnexpectedFileContentError)('MP4') {
}
const maxMp4StructureEntries = 5000000;
const Header = {
    len: 8,
    get: (buf, off)=>{
        const length = _tokenTypes.UINT32_BE.get(buf, off);
        if (length < 0) throw new Mp4ContentError('Invalid atom header length');
        return {
            length: BigInt(length),
            name: new _tokenTypes.StringType(4, 'latin1').get(buf, off + 4)
        };
    },
    put: (buf, off, hdr)=>{
        _tokenTypes.UINT32_BE.put(buf, off, Number(hdr.length));
        return (0, _fourCCJs.FourCcToken).put(buf, off + 4, hdr.name);
    }
};
const ExtendedSize = _tokenTypes.UINT64_BE;
const ftyp = {
    len: 4,
    get: (buf, off)=>{
        return {
            type: new _tokenTypes.StringType(4, 'ascii').get(buf, off)
        };
    }
};
const mhdr = {
    len: 8,
    get: (buf, off)=>{
        return {
            version: _tokenTypes.UINT8.get(buf, off),
            flags: _tokenTypes.UINT24_BE.get(buf, off + 1),
            nextItemID: _tokenTypes.UINT32_BE.get(buf, off + 4)
        };
    }
};
class FixedLengthAtom {
    len;
    /**
     *
     * @param {number} len Length as specified in the size field
     * @param {number} expLen Total length of sum of specified fields in the standard
     * @param atomId Atom ID
     */ constructor(len, expLen, atomId){
        if (len < expLen) throw new Mp4ContentError(`Atom ${atomId} expected to be ${expLen}, but specifies ${len} bytes long.`);
        if (len > expLen) debug(`Warning: atom ${atomId} expected to be ${expLen}, but was actually ${len} bytes long.`);
        this.len = len;
    }
}
/**
 * Timestamp stored in seconds since Mac Epoch (1 January 1904)
 */ const SecondsSinceMacEpoch = {
    len: 4,
    get: (buf, off)=>{
        const secondsSinceUnixEpoch = _tokenTypes.UINT32_BE.get(buf, off) - 2082844800;
        return new Date(secondsSinceUnixEpoch * 1000);
    }
};
const SecondsSinceMacEpoch64 = {
    len: 8,
    get: (buf, off)=>{
        const secondsSinceUnixEpoch = Number(_tokenTypes.UINT64_BE.get(buf, off)) - 2082844800;
        return new Date(secondsSinceUnixEpoch * 1000);
    }
};
/** Shared creation, modification and timing fields of media/movie headers. */ function readTimeHeader(buf, off) {
    const version = _tokenTypes.UINT8.get(buf, off);
    const wide = version === 1;
    const timestamp = wide ? SecondsSinceMacEpoch64 : SecondsSinceMacEpoch;
    return {
        version,
        flags: _tokenTypes.UINT24_BE.get(buf, off + 1),
        creationTime: timestamp.get(buf, off + 4),
        modificationTime: timestamp.get(buf, off + (wide ? 12 : 8)),
        timeScale: _tokenTypes.UINT32_BE.get(buf, off + (wide ? 20 : 12)),
        duration: wide ? Number(_tokenTypes.UINT64_BE.get(buf, off + 24)) : _tokenTypes.UINT32_BE.get(buf, off + 16)
    };
}
class MdhdAtom extends FixedLengthAtom {
    constructor(len){
        super(len, 24, 'mdhd');
    }
    get(buf, off) {
        const version = _tokenTypes.UINT8.get(buf, off);
        if (version !== 0 && version !== 1) throw new (0, _parseErrorJs.FieldDecodingError)('Invalid mdhd version header');
        const tail = off + (version === 1 ? 32 : 20);
        return {
            ...readTimeHeader(buf, off),
            language: _tokenTypes.UINT16_BE.get(buf, tail),
            quality: _tokenTypes.UINT16_BE.get(buf, tail + 2)
        };
    }
}
class MvhdAtom extends FixedLengthAtom {
    constructor(len){
        super(len, 100, 'mvhd');
    }
    get(buf, off) {
        // Preserve the legacy 32-bit layout for versions other than 1.
        const tail = off + (_tokenTypes.UINT8.get(buf, off) === 1 ? 32 : 20);
        return {
            ...readTimeHeader(buf, off),
            preferredRate: _tokenTypes.UINT32_BE.get(buf, tail),
            preferredVolume: _tokenTypes.UINT16_BE.get(buf, tail + 4),
            // Reserved (10 bytes) and matrix structure (36 bytes).
            previewTime: _tokenTypes.UINT32_BE.get(buf, tail + 52),
            previewDuration: _tokenTypes.UINT32_BE.get(buf, tail + 56),
            posterTime: _tokenTypes.UINT32_BE.get(buf, tail + 60),
            selectionTime: _tokenTypes.UINT32_BE.get(buf, tail + 64),
            selectionDuration: _tokenTypes.UINT32_BE.get(buf, tail + 68),
            currentTime: _tokenTypes.UINT32_BE.get(buf, tail + 72),
            nextTrackID: _tokenTypes.UINT32_BE.get(buf, tail + 76)
        };
    }
}
const DataAtomHeader = {
    len: 8,
    get (buf, off) {
        if (off < 0 || buf.length - off < 8) throw new Mp4ContentError('Truncated data atom header');
        return {
            type: {
                set: _tokenTypes.UINT8.get(buf, off),
                type: _tokenTypes.UINT24_BE.get(buf, off + 1)
            },
            locale: _tokenTypes.UINT32_BE.get(buf, off + 4)
        };
    }
};
class NameAtom {
    len;
    constructor(len){
        this.len = len;
    }
    get(buf, off) {
        return {
            version: _tokenTypes.UINT8.get(buf, off),
            flags: _tokenTypes.UINT24_BE.get(buf, off + 1),
            name: new _tokenTypes.StringType(this.len - 4, 'utf-8').get(buf, off + 4)
        };
    }
}
class TrackHeaderAtom {
    len;
    constructor(len){
        this.len = len;
    }
    get(buf, off) {
        const available = Math.min(this.len, buf.length - off);
        if (available < 4) throw new Mp4ContentError('Truncated tkhd header');
        const version = _tokenTypes.UINT8.get(buf, off);
        // Validate through the volume field, the last field currently decoded.
        if (version === 0 && available < 38 || version === 1 && available < 50) throw new Mp4ContentError('Truncated tkhd header');
        const flags = _tokenTypes.UINT24_BE.get(buf, off + 1);
        switch(version){
            case 0:
                // Version 0: 32-bit fields
                return {
                    version,
                    flags,
                    creationTime: SecondsSinceMacEpoch.get(buf, off + 4),
                    modificationTime: SecondsSinceMacEpoch.get(buf, off + 8),
                    trackId: _tokenTypes.UINT32_BE.get(buf, off + 12),
                    // reserved 4 bytes
                    duration: _tokenTypes.UINT32_BE.get(buf, off + 20),
                    // reserved 8 bytes
                    layer: _tokenTypes.UINT16_BE.get(buf, off + 32),
                    alternateGroup: _tokenTypes.UINT16_BE.get(buf, off + 34),
                    volume: _tokenTypes.UINT16_BE.get(buf, off + 36),
                    ...available >= 84 ? {
                        displayWidth: _tokenTypes.UINT32_BE.get(buf, off + 76) / 65536,
                        displayHeight: _tokenTypes.UINT32_BE.get(buf, off + 80) / 65536
                    } : {}
                };
            case 1:
                // Version 1: 64-bit creation/modification times and duration
                return {
                    version,
                    flags,
                    creationTime: SecondsSinceMacEpoch64.get(buf, off + 4),
                    modificationTime: SecondsSinceMacEpoch64.get(buf, off + 12),
                    trackId: _tokenTypes.UINT32_BE.get(buf, off + 20),
                    // reserved 4 bytes
                    duration: Number(_tokenTypes.UINT64_BE.get(buf, off + 28)),
                    // reserved 8 bytes
                    layer: _tokenTypes.UINT16_BE.get(buf, off + 44),
                    alternateGroup: _tokenTypes.UINT16_BE.get(buf, off + 46),
                    volume: _tokenTypes.UINT16_BE.get(buf, off + 48),
                    ...available >= 96 ? {
                        displayWidth: _tokenTypes.UINT32_BE.get(buf, off + 88) / 65536,
                        displayHeight: _tokenTypes.UINT32_BE.get(buf, off + 92) / 65536
                    } : {}
                };
            default:
                throw new (0, _parseErrorJs.FieldDecodingError)('Invalid tkhd version header');
        }
    }
}
/**
 * Atom: Sample Description Atom ('stsd')
 * Ref: https://developer.apple.com/library/archive/documentation/QuickTime/QTFF/QTFFChap2/qtff2.html#//apple_ref/doc/uid/TP40000939-CH204-25691
 */ const stsdHeader = {
    len: 8,
    get: (buf, off)=>{
        return {
            version: _tokenTypes.UINT8.get(buf, off),
            flags: _tokenTypes.UINT24_BE.get(buf, off + 1),
            numberOfEntries: _tokenTypes.UINT32_BE.get(buf, off + 4)
        };
    }
};
/**
 * Atom: Sample Description Atom ('stsd')
 * Ref: https://developer.apple.com/documentation/quicktime-file-format/sample_description_atom
 */ class SampleDescriptionTable {
    len;
    constructor(len){
        this.len = len;
    }
    get(buf, off) {
        const descrLen = this.len - 12;
        return {
            dataFormat: (0, _fourCCJs.FourCcToken).get(buf, off),
            dataReferenceIndex: _tokenTypes.UINT16_BE.get(buf, off + 10),
            description: descrLen > 0 ? new _tokenTypes.Uint8ArrayType(descrLen).get(buf, off + 12) : undefined
        };
    }
}
class StsdAtom {
    maxEntries;
    len;
    constructor(len, maxEntries = maxMp4StructureEntries){
        this.maxEntries = maxEntries;
        this.len = len;
    }
    get(buf, off) {
        const end = Math.min(off + this.len, buf.length);
        if (end - off < stsdHeader.len) throw new Mp4ContentError('Truncated stsd header');
        const header = stsdHeader.get(buf, off);
        off += stsdHeader.len;
        const table = [];
        for(let n = 0; n < header.numberOfEntries; ++n){
            if (end - off < _tokenTypes.UINT32_BE.len) throw new Mp4ContentError('Truncated stsd sample entry');
            const size = _tokenTypes.UINT32_BE.get(buf, off); // Sample description size
            // A SampleEntry needs its size, format, reserved bytes and data reference index.
            // Requiring it to fit also bounds the loop by the available payload, not entry_count.
            if (size < 16 || size > end - off) throw new Mp4ContentError(`Invalid stsd sample entry size: ${size}`);
            if (n >= this.maxEntries) throw new Mp4ContentError(`stsd entry count ${header.numberOfEntries} exceeds entry limit ${this.maxEntries}`);
            off += _tokenTypes.UINT32_BE.len;
            table.push(new SampleDescriptionTable(size - _tokenTypes.UINT32_BE.len).get(buf, off));
            // A SampleEntry extends Box, so its size covers the size field already stepped over
            off += size - _tokenTypes.UINT32_BE.len;
        }
        return {
            header,
            table
        };
    }
}
const SoundSampleDescriptionVersion = {
    len: 8,
    get (buf, off) {
        return {
            version: _tokenTypes.INT16_BE.get(buf, off),
            revision: _tokenTypes.INT16_BE.get(buf, off + 2),
            vendor: _tokenTypes.INT32_BE.get(buf, off + 4)
        };
    }
};
const SoundSampleDescriptionV0 = {
    len: 12,
    get (buf, off) {
        return {
            numAudioChannels: _tokenTypes.INT16_BE.get(buf, off + 0),
            sampleSize: _tokenTypes.INT16_BE.get(buf, off + 2),
            compressionId: _tokenTypes.INT16_BE.get(buf, off + 4),
            packetSize: _tokenTypes.INT16_BE.get(buf, off + 6),
            sampleRate: _tokenTypes.UINT16_BE.get(buf, off + 8) + _tokenTypes.UINT16_BE.get(buf, off + 10) / 10000
        };
    }
};
class SimpleTableAtom {
    maxEntries;
    len;
    token;
    constructor(len, token, maxEntries = maxMp4StructureEntries){
        this.maxEntries = maxEntries;
        this.len = len;
        this.token = token;
    }
    get(buf, off) {
        const nrOfEntries = _tokenTypes.INT32_BE.get(buf, off + 4);
        return {
            version: _tokenTypes.INT8.get(buf, off + 0),
            flags: _tokenTypes.INT24_BE.get(buf, off + 1),
            numberOfEntries: nrOfEntries,
            entries: readTokenTable(buf, this.token, off + 8, this.len - 8, nrOfEntries, this.maxEntries)
        };
    }
}
const TimeToSampleToken = {
    len: 8,
    get (buf, off) {
        return {
            count: _tokenTypes.UINT32_BE.get(buf, off + 0),
            duration: _tokenTypes.UINT32_BE.get(buf, off + 4)
        };
    }
};
class SttsAtom extends SimpleTableAtom {
    constructor(len, maxEntries){
        super(len, TimeToSampleToken, maxEntries);
    }
}
const SampleToChunkToken = {
    len: 12,
    get (buf, off) {
        return {
            firstChunk: _tokenTypes.UINT32_BE.get(buf, off),
            samplesPerChunk: _tokenTypes.UINT32_BE.get(buf, off + 4),
            sampleDescriptionId: _tokenTypes.UINT32_BE.get(buf, off + 8)
        };
    }
};
class StscAtom extends SimpleTableAtom {
    constructor(len, maxEntries){
        super(len, SampleToChunkToken, maxEntries);
    }
}
class StszAtom {
    maxRetainedEntries;
    len;
    constructor(len, // Retain only the prefix needed by chapter parsing; the complete table still contributes to totalSize.
    maxRetainedEntries = 0){
        this.maxRetainedEntries = maxRetainedEntries;
        this.len = len;
    }
    get(buf, off) {
        if (this.len < 12) throw new Mp4ContentError('Invalid stsz payload length');
        const sampleSize = _tokenTypes.UINT32_BE.get(buf, off + 4);
        const numberOfEntries = _tokenTypes.UINT32_BE.get(buf, off + 8);
        const tableLength = this.len - 12;
        // Preserve empty tables with a declared sample count; they provide no variable-size total.
        if (tableLength !== 0 && tableLength !== numberOfEntries * _tokenTypes.UINT32_BE.len) throw new Mp4ContentError('mismatch number-of-entries with remaining atom-length');
        const tableEntries = tableLength / _tokenTypes.UINT32_BE.len;
        const retainedCount = Math.min(tableEntries, this.maxRetainedEntries);
        const entries = [];
        let totalSize = sampleSize * numberOfEntries;
        for(let index = 0; index < tableEntries; ++index){
            const size = _tokenTypes.UINT32_BE.get(buf, off + 12 + index * _tokenTypes.UINT32_BE.len);
            if (sampleSize === 0) totalSize += size;
            if (index < retainedCount) entries.push(size);
        }
        return {
            version: _tokenTypes.INT8.get(buf, off),
            flags: _tokenTypes.INT24_BE.get(buf, off + 1),
            sampleSize,
            numberOfEntries,
            totalSize: sampleSize > 0 || tableEntries > 0 ? totalSize : undefined,
            entries
        };
    }
}
class StcoAtom extends SimpleTableAtom {
    constructor(len, maxEntries){
        super(len, _tokenTypes.UINT32_BE, maxEntries);
    }
}
class Co64Atom extends SimpleTableAtom {
    constructor(len, maxEntries){
        super(len, {
            len: 8,
            get (buf, off) {
                const offset = _tokenTypes.UINT64_BE.get(buf, off);
                if (offset > BigInt(Number.MAX_SAFE_INTEGER)) throw new Mp4ContentError('Chunk offset exceeds Number.MAX_SAFE_INTEGER');
                return Number(offset);
            }
        }, maxEntries);
    }
}
class ChapterText {
    len;
    constructor(len){
        this.len = len;
    }
    get(buf, off) {
        const available = Math.min(this.len, buf.length - off);
        if (available < 2) return '';
        const titleLen = Math.min(_tokenTypes.UINT16_BE.get(buf, off), available - 2);
        const bytes = buf.subarray(off + 2, off + 2 + titleLen);
        // QuickTime Unicode text uses UTF-8 unless a UTF-16 byte-order mark is present.
        if (bytes[0] === 0xfe && bytes[1] === 0xff) {
            const littleEndian = new Uint8Array(bytes.length - 2);
            for(let i = 2; i + 1 < bytes.length; i += 2){
                littleEndian[i - 2] = bytes[i + 1];
                littleEndian[i - 1] = bytes[i];
            }
            return (0, _textCodec.textDecode)(littleEndian, 'utf-16le');
        }
        if (bytes[0] === 0xff && bytes[1] === 0xfe) return (0, _textCodec.textDecode)(bytes.subarray(2), 'utf-16le');
        return (0, _textCodec.textDecode)(bytes);
    }
}
class ChapterListAtom {
    len;
    maxChapters;
    onLimit;
    constructor(len, maxChapters = (0, _allocationJs.defaultMaxChapterCount), onLimit){
        this.len = len;
        this.maxChapters = maxChapters;
        this.onLimit = onLimit;
    }
    get(buf, off) {
        const end = off + Math.min(this.len, buf.length - off);
        if (end - off < 5) return [];
        const version = _tokenTypes.UINT8.get(buf, off);
        if (version > 1) throw new Mp4ContentError(`Unsupported chpl version: ${version}`);
        let position = off + (version === 1 ? 8 : 4);
        if (position >= end) return [];
        const count = _tokenTypes.UINT8.get(buf, position++);
        if (count > this.maxChapters) this.onLimit?.();
        const chapters = [];
        for(let i = 0; i < Math.min(count, this.maxChapters) && position + 9 <= end; ++i){
            const start = _tokenTypes.UINT64_BE.get(buf, position);
            const titleLength = _tokenTypes.UINT8.get(buf, position + 8);
            position += 9;
            if (position + titleLength > end) break;
            if (start > BigInt(Number.MAX_SAFE_INTEGER)) throw new Mp4ContentError('Chapter start exceeds Number.MAX_SAFE_INTEGER');
            chapters.push({
                title: (0, _textCodec.textDecode)(buf.subarray(position, position + titleLength)),
                start: Number(start),
                timeScale: 10000000
            });
            position += titleLength;
        }
        return chapters;
    }
}
function readTokenTable(buf, token, off, remainingLen, numberOfEntries, maxEntries = maxMp4StructureEntries) {
    debug(`remainingLen=${remainingLen}, numberOfEntries=${numberOfEntries} * token-len=${token.len}`);
    if (remainingLen === 0) return [];
    if (remainingLen !== numberOfEntries * token.len) throw new Mp4ContentError('mismatch number-of-entries with remaining atom-length');
    if (numberOfEntries > maxEntries) throw new Mp4ContentError(`MP4 table entry count ${numberOfEntries} exceeds entry limit ${maxEntries}`);
    const entries = [];
    // parse offset-table
    for(let n = 0; n < numberOfEntries; ++n){
        entries.push(token.get(buf, off));
        off += token.len;
    }
    return entries;
}
class TrackFragmentHeaderBox {
    len;
    constructor(len){
        this.len = len;
    }
    get(buf, off) {
        const flagOffset = off + 1;
        const header = {
            version: _tokenTypes.INT8.get(buf, off),
            flags: {
                baseDataOffsetPresent: _utilJs.getBit(buf, flagOffset + 2, 0),
                sampleDescriptionIndexPresent: _utilJs.getBit(buf, flagOffset + 2, 1),
                defaultSampleDurationPresent: _utilJs.getBit(buf, flagOffset + 2, 3),
                defaultSampleSizePresent: _utilJs.getBit(buf, flagOffset + 2, 4),
                defaultSampleFlagsPresent: _utilJs.getBit(buf, flagOffset + 2, 5),
                defaultDurationIsEmpty: _utilJs.getBit(buf, flagOffset, 0),
                defaultBaseIsMoof: _utilJs.getBit(buf, flagOffset, 1)
            },
            trackId: _tokenTypes.UINT32_BE.get(buf, 4)
        };
        let dynOffset = 8;
        if (header.flags.baseDataOffsetPresent) {
            header.baseDataOffset = _tokenTypes.UINT64_BE.get(buf, dynOffset);
            dynOffset += 8;
        }
        if (header.flags.sampleDescriptionIndexPresent) {
            header.sampleDescriptionIndex = _tokenTypes.UINT32_BE.get(buf, dynOffset);
            dynOffset += 4;
        }
        if (header.flags.defaultSampleDurationPresent) {
            header.defaultSampleDuration = _tokenTypes.UINT32_BE.get(buf, dynOffset);
            dynOffset += 4;
        }
        if (header.flags.defaultSampleSizePresent) {
            header.defaultSampleSize = _tokenTypes.UINT32_BE.get(buf, dynOffset);
            dynOffset += 4;
        }
        if (header.flags.defaultSampleFlagsPresent) header.defaultSampleFlags = _tokenTypes.UINT32_BE.get(buf, dynOffset);
        return header;
    }
}
class TrackRunBox {
    maxSampleCount;
    len;
    constructor(len, maxSampleCount = maxMp4StructureEntries){
        this.maxSampleCount = maxSampleCount;
        this.len = len;
    }
    get(buf, off) {
        const flagOffset = off + 1;
        const trun = {
            version: _tokenTypes.INT8.get(buf, off),
            flags: {
                dataOffsetPresent: _utilJs.getBit(buf, flagOffset + 2, 0),
                firstSampleFlagsPresent: _utilJs.getBit(buf, flagOffset + 2, 2),
                sampleDurationPresent: _utilJs.getBit(buf, flagOffset + 1, 0),
                sampleSizePresent: _utilJs.getBit(buf, flagOffset + 1, 1),
                sampleFlagsPresent: _utilJs.getBit(buf, flagOffset + 1, 2),
                sampleCompositionTimeOffsetsPresent: _utilJs.getBit(buf, flagOffset + 1, 3)
            },
            sampleCount: _tokenTypes.UINT32_BE.get(buf, off + 4),
            duration: 0,
            size: 0,
            timingComplete: true,
            explicitSampleCount: 0
        };
        let dynOffset = off + 8;
        if (trun.flags.dataOffsetPresent) {
            trun.dataOffset = _tokenTypes.UINT32_BE.get(buf, dynOffset);
            dynOffset += 4;
        }
        if (trun.flags.firstSampleFlagsPresent) {
            trun.firstSampleFlags = _tokenTypes.UINT32_BE.get(buf, dynOffset);
            dynOffset += 4;
        }
        const sampleFields = Number(trun.flags.sampleDurationPresent) + Number(trun.flags.sampleSizePresent) + Number(trun.flags.sampleFlagsPresent) + Number(trun.flags.sampleCompositionTimeOffsetsPresent);
        if (dynOffset + sampleFields * 4 * trun.sampleCount > off + this.len) throw new Mp4ContentError('Invalid trun sample count');
        // Default-only runs need no per-sample allocation, even for a large sample_count.
        if (sampleFields === 0) return trun;
        if (trun.sampleCount > this.maxSampleCount) throw new Mp4ContentError(`trun sample count ${trun.sampleCount} exceeds entry limit ${this.maxSampleCount}`);
        for(let n = 0; n < trun.sampleCount; ++n){
            if (trun.flags.sampleDurationPresent) {
                const duration = _tokenTypes.UINT32_BE.get(buf, dynOffset);
                trun.duration += duration;
                trun.timingComplete &&= duration > 0;
                dynOffset += 4;
            }
            if (trun.flags.sampleSizePresent) {
                trun.size += _tokenTypes.UINT32_BE.get(buf, dynOffset);
                dynOffset += 4;
            }
            // The validated row width includes flags and composition offsets, which are not retained.
            dynOffset += 4 * (Number(trun.flags.sampleFlagsPresent) + Number(trun.flags.sampleCompositionTimeOffsetsPresent));
        }
        trun.explicitSampleCount = trun.sampleCount;
        return trun;
    }
}
class HandlerBox {
    len;
    constructor(len){
        this.len = len;
    }
    get(buf, off) {
        const _flagOffset = off + 1;
        const charTypeToken = new _tokenTypes.StringType(4, 'utf-8');
        return {
            version: _tokenTypes.INT8.get(buf, off),
            flags: _tokenTypes.UINT24_BE.get(buf, off + 1),
            componentType: charTypeToken.get(buf, off + 4),
            handlerType: charTypeToken.get(buf, off + 8),
            componentName: new _tokenTypes.StringType(this.len - 28, 'utf-8').get(buf, off + 28)
        };
    }
}
class ChapterTrackReferenceBox {
    maxEntries;
    len;
    constructor(len, maxEntries = maxMp4StructureEntries){
        this.maxEntries = maxEntries;
        this.len = len;
    }
    get(buf, off) {
        if (this.len % _tokenTypes.UINT32_BE.len !== 0) throw new Mp4ContentError('Invalid chapter track-reference length');
        const count = this.len / _tokenTypes.UINT32_BE.len;
        if (count > this.maxEntries) throw new Mp4ContentError(`Chapter track-reference count ${count} exceeds entry limit ${this.maxEntries}`);
        let dynOffset = 0;
        const trackIds = [];
        while(dynOffset < this.len){
            trackIds.push(_tokenTypes.UINT32_BE.get(buf, off + dynOffset));
            dynOffset += 4;
        }
        return trackIds;
    }
}

},{"@borewit/text-codec":"104u3","debug":"4XIdh","token-types":"al35Q","../common/Allocation.js":"8ZVyl","../common/FourCC.js":"1nM5t","../common/Util.js":"Q4yiL","../ParseError.js":"E03ox","@parcel/transformer-js/src/esmodule-helpers.js":"53hI8"}]},["MuaHA"], null, "parcelRequire2853", {})

//# sourceMappingURL=MP4Parser.4687fb2b.js.map
