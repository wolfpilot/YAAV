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
})({"1KwAN":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SERVER_PORT = 3000;
var HMR_SECURE = false;
var HMR_ENV_HASH = "439701173a9199ea";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "a06d4c6b35d588fb";
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

},{}],"5y6uZ":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MpegContentError", ()=>(0, _mpegFrameHeaderJs.MpegContentError));
parcelHelpers.export(exports, "MpegParser", ()=>MpegParser);
var _debug = require("debug");
var _debugDefault = parcelHelpers.interopDefault(_debug);
var _strtok3 = require("strtok3");
var _utilJs = require("../common/Util.js");
var _id3V1ParserJs = require("../id3v1/ID3v1Parser.js");
var _abstractID3ParserJs = require("../id3v2/AbstractID3Parser.js");
var _adtsFrameHeaderJs = require("./AdtsFrameHeader.js");
var _mpegFrameHeaderJs = require("./MpegFrameHeader.js");
var _xingTagJs = require("./XingTag.js");
const debug = (0, _debugDefault.default)('music-metadata:parser:mpeg');
/**
 * Cache buffer size used for searching synchronization preamble
 */ const maxPeekLen = 1024;
function getVbrCodecProfile(vbrScale) {
    return `V${Math.floor((100 - vbrScale) / 10)}`;
}
class MpegParser extends (0, _abstractID3ParserJs.AbstractID3Parser) {
    frameCount = 0;
    syncFrameCount = -1;
    totalDataLength = 0;
    audioFrameHeader;
    firstBitrate;
    constantBitrate = true;
    offset = 0;
    frameSize = 0;
    audioEnd;
    calculateEofDuration = false;
    samplesPerFrame = null;
    frameHeaderBuffer = new Uint8Array((0, _mpegFrameHeaderJs.MpegFrameHeader).len);
    frameHeaderTail = this.frameHeaderBuffer.subarray(1);
    adtsHeaderBuffer = new Uint8Array(3);
    sideInfoBuffer = new Uint8Array(32);
    /**
     * Number of bytes already parsed since beginning of stream / file
     */ mpegOffset = null;
    syncPeek = {
        buf: new Uint8Array(maxPeekLen),
        len: 0
    };
    /**
     * Called after ID3 headers have been parsed
     */ async postId3v2Parse() {
        this.metadata.setFormat('lossless', false);
        this.metadata.setAudioOnly();
        if (this.options.duration && (0, _strtok3.isRandomAccessTokenizer)(this.tokenizer)) this.audioEnd = this.tokenizer.fileInfo.size - (await (0, _id3V1ParserJs.hasID3v1Header)(this.tokenizer) ? 128 : 0);
        try {
            let quit = false;
            while(!quit){
                await this.sync();
                quit = await this.parseFrameHeader();
            }
        } catch (err) {
            if (err instanceof (0, _strtok3.EndOfStreamError)) {
                debug('End-of-stream');
                if (this.calculateEofDuration) {
                    if (this.samplesPerFrame !== null) {
                        const numberOfSamples = this.frameCount * this.samplesPerFrame;
                        this.metadata.setFormat('numberOfSamples', numberOfSamples);
                        if (this.metadata.format.sampleRate) {
                            const duration = numberOfSamples / this.metadata.format.sampleRate;
                            debug(`Calculate duration at EOF: ${duration} sec.`, duration);
                            this.metadata.setFormat('duration', duration);
                        }
                    }
                }
            } else throw err;
        }
    }
    /**
     * Called after file has been fully parsed, this allows, if present, to exclude the ID3v1.1 header length
     */ finalize() {
        const format = this.metadata.format;
        const hasID3v1 = !!this.metadata.native.ID3v1;
        if (this.mpegOffset !== null) {
            if (format.duration && this.tokenizer.fileInfo.size) {
                const mpegSize = this.tokenizer.fileInfo.size - this.mpegOffset - (hasID3v1 ? 128 : 0);
                if (format.codecProfile && format.codecProfile[0] === 'V') this.metadata.setFormat('bitrate', mpegSize * 8 / format.duration);
            }
            if (this.tokenizer.fileInfo.size && format.codecProfile === 'CBR' && !this.calculateEofDuration) {
                const mpegSize = this.tokenizer.fileInfo.size - this.mpegOffset - (hasID3v1 ? 128 : 0);
                if (this.samplesPerFrame !== null) {
                    const numberOfSamples = Math.round(mpegSize / this.frameSize) * this.samplesPerFrame;
                    this.metadata.setFormat('numberOfSamples', numberOfSamples);
                    if (format.sampleRate && !format.duration) {
                        const duration = numberOfSamples / format.sampleRate;
                        debug('Calculate CBR duration based on file size: %s', duration);
                        this.metadata.setFormat('duration', duration);
                    }
                }
            }
        }
    }
    async sync() {
        let gotFirstSync = false;
        while(true){
            let bo = 0;
            this.syncPeek.len = await this.tokenizer.peekBuffer(this.syncPeek.buf, {
                length: maxPeekLen,
                mayBeLess: true
            });
            if (this.syncPeek.len >= 128 && this.syncPeek.len < maxPeekLen) {
                const footer = this.syncPeek.len - 128;
                const end = this.tokenizer.position + this.syncPeek.len;
                if ((this.tokenizer.fileInfo.size === undefined || this.tokenizer.fileInfo.size === end) && this.syncPeek.buf[footer] === 0x54 && this.syncPeek.buf[footer + 1] === 0x41 && this.syncPeek.buf[footer + 2] === 0x47) this.audioEnd = end - 128;
            }
            const fullMpegScan = this.calculateEofDuration && this.audioFrameHeader !== undefined;
            const id3v1Tail = this.syncPeek.len >= 3 && this.syncPeek.buf[0] === 0x54 && this.syncPeek.buf[1] === 0x41 && this.syncPeek.buf[2] === 0x47;
            if (this.syncPeek.len < 2 || this.syncPeek.len <= 163 && this.audioFrameHeader !== undefined && (!fullMpegScan || id3v1Tail)) throw new (0, _strtok3.EndOfStreamError)();
            while(true){
                if (gotFirstSync && bo === this.syncPeek.len) {
                    // Keep a possible sync byte at the end of a lookahead buffer.
                    await this.tokenizer.ignore(bo - 1);
                    gotFirstSync = false;
                    break;
                }
                if (gotFirstSync && (this.syncPeek.buf[bo] & 0xe0) === 0xe0) {
                    this.frameHeaderBuffer[0] = 0xff;
                    this.frameHeaderBuffer[1] = this.syncPeek.buf[bo];
                    // Retain the MPEG tail policy; a complete ADTS frame can be much smaller.
                    if (this.syncPeek.len <= 163 && !(0, _adtsFrameHeaderJs.AdtsFrameHeader).matches(this.frameHeaderBuffer) && (!fullMpegScan || id3v1Tail)) throw new (0, _strtok3.EndOfStreamError)();
                    await this.tokenizer.ignore(bo);
                    debug(`Sync at offset=${this.tokenizer.position - 1}, frameCount=${this.frameCount}`);
                    if (this.syncFrameCount === this.frameCount) {
                        debug(`Re-synced MPEG stream, frameCount=${this.frameCount}`);
                        this.frameCount = 0;
                        this.frameSize = 0;
                    }
                    this.syncFrameCount = this.frameCount;
                    return; // sync
                }
                gotFirstSync = false;
                bo = this.syncPeek.buf.indexOf(0xff, bo);
                if (bo === -1) {
                    if (this.syncPeek.len < this.syncPeek.buf.length) throw new (0, _strtok3.EndOfStreamError)();
                    await this.tokenizer.ignore(this.syncPeek.len);
                    break; // continue with next buffer
                }
                ++bo;
                gotFirstSync = true;
            }
        }
    }
    /**
     * Read the shared four-byte prefix, then dispatch to ADTS or MPEG audio.
     * @return {Promise<boolean>} true if parser should quit
     */ async parseFrameHeader() {
        if (this.frameCount === 0) this.mpegOffset = this.tokenizer.position - 1;
        await this.tokenizer.peekBuffer(this.frameHeaderTail, {
            length: 3
        });
        let header;
        try {
            header = (0, _adtsFrameHeaderJs.AdtsFrameHeader).matches(this.frameHeaderBuffer) ? new (0, _adtsFrameHeaderJs.AdtsFrameHeader)(this.frameHeaderBuffer) : new (0, _mpegFrameHeaderJs.MpegFrameHeader)(this.frameHeaderBuffer);
        } catch (err) {
            await this.tokenizer.ignore(1);
            if (err instanceof Error) {
                this.metadata.addWarning(`Parse error: ${err.message}`);
                return false; // sync
            }
            throw err;
        }
        if (header instanceof (0, _mpegFrameHeaderJs.MpegFrameHeader) && this.options.duration && this.audioEnd !== undefined && this.tokenizer.position - 1 + header.frameSize > this.audioEnd) throw new (0, _strtok3.EndOfStreamError)();
        await this.tokenizer.ignore(3);
        if (header instanceof (0, _adtsFrameHeaderJs.AdtsFrameHeader)) {
            this.metadata.setFormat('container', header.container);
            this.metadata.setFormat('codec', header.codec);
            this.metadata.setFormat('lossless', false);
            return this.parseAdts(header);
        }
        this.metadata.setFormat('container', header.container);
        this.metadata.setFormat('codec', header.codec);
        this.metadata.setFormat('lossless', false);
        this.frameCount++;
        try {
            return await this.parseMpegFrame(header);
        } catch (error) {
            if (error instanceof (0, _strtok3.EndOfStreamError)) --this.frameCount;
            throw error;
        }
    }
    /**
     * @return {Promise<boolean>} true if parser should quit
     */ async parseMpegFrame(header) {
        if (this.frameCount < 200000) debug('offset=%s MP%s bitrate=%s sample-rate=%s', this.tokenizer.position - 4, header.layer, header.bitrate, header.samplingRate);
        this.frameSize = header.frameSize;
        this.audioFrameHeader = header;
        // Xing/Info keeps the same offset even when CRC-protected: header + side information.
        // Its first-frame CRC is included in the skipped bytes; later frames skip CRC separately.
        // Ref: https://github.com/rbrito/lame/blob/master/libmp3lame/VbrTag.c#L866-L874
        if (this.frameCount === 1) {
            this.offset = (0, _mpegFrameHeaderJs.MpegFrameHeader).len;
            await this.skipSideInformation();
            this.applyMpegFormat(header);
            return false;
        }
        if (this.frameCount === 4) {
            this.samplesPerFrame = header.samplesPerFrame;
            if (this.metadata.format.duration) {
                this.applyMpegFormat(header);
                return true;
            }
            if (!this.options.duration) this.applyMpegFormat(header);
            // Treat the stream as CBR if all observed MPEG bitrates match.
            if (this.constantBitrate) {
                // Actual calculation will be done in finalize
                this.samplesPerFrame = header.samplesPerFrame;
                this.metadata.setFormat('codecProfile', 'CBR');
            }
            if (!this.options.duration) return true; // Enforce duration not enabled, stop processing entire stream
        }
        // Count the remaining frames when a full duration scan is requested.
        if (this.options.duration && this.frameCount === 4) {
            this.samplesPerFrame = header.samplesPerFrame;
            this.calculateEofDuration = true;
        }
        this.offset = (0, _mpegFrameHeaderJs.MpegFrameHeader).len;
        if (header.isProtectedByCRC) {
            await this.tokenizer.ignore(2);
            this.offset += 2;
        }
        await this.skipSideInformation();
        this.applyMpegFormat(header);
        if (this.calculateEofDuration && !this.constantBitrate && this.metadata.format.codecProfile === 'CBR') this.metadata.setFormat('codecProfile', 'VBR');
        return false;
    }
    applyMpegFormat(header) {
        this.metadata.setFormat('container', header.container);
        this.metadata.setFormat('codec', header.codec);
        this.metadata.setFormat('lossless', false);
        this.metadata.setFormat('sampleRate', header.samplingRate);
        this.metadata.setFormat('numberOfChannels', header.numberOfChannels);
        this.metadata.setFormat('bitrate', header.bitrate);
        this.firstBitrate ??= header.bitrate;
        this.constantBitrate &&= header.bitrate === this.firstBitrate;
    }
    async parseAdts(header) {
        await this.tokenizer.readBuffer(this.adtsHeaderBuffer);
        const frameLength = header.frameLength + _utilJs.getBitAllignedNumber(this.adtsHeaderBuffer, 0, 0, 11);
        if (frameLength <= header.headerLength) throw new (0, _mpegFrameHeaderJs.MpegContentError)(`Invalid ADTS frame length: ${frameLength}`);
        const remaining = frameLength - 7;
        if ((0, _strtok3.isRandomAccessTokenizer)(this.tokenizer)) {
            // Verify the physical end even when a custom tokenizer advertises an inaccurate size.
            const count = await this.tokenizer.readBuffer(this.adtsHeaderBuffer, {
                position: this.tokenizer.position + remaining - 1,
                length: 1
            });
            if (count !== 1) throw new (0, _strtok3.EndOfStreamError)();
        } else if (await this.tokenizer.ignore(remaining) !== remaining) throw new (0, _strtok3.EndOfStreamError)();
        // Do not let a rejected partial frame override the rate of complete frames.
        this.metadata.setFormat('sampleRate', header.samplingRate ?? undefined);
        // Only complete frames contribute samples, including clips shorter than three frames.
        this.frameCount++;
        this.totalDataLength += frameLength;
        this.samplesPerFrame = 1024;
        this.calculateEofDuration = this.options.duration ?? false;
        if (header.samplingRate !== null) {
            const framesPerSec = header.samplingRate / this.samplesPerFrame;
            const bytesPerFrame = this.totalDataLength / this.frameCount;
            const bitrate = 8 * bytesPerFrame * framesPerSec + 0.5;
            this.metadata.setFormat('bitrate', bitrate);
            debug(`frame-count=${this.frameCount}, size=${frameLength} bytes, bit-rate=${bitrate}`);
        }
        if (this.frameCount === 1) {
            this.metadata.setFormat('codecProfile', header.codecProfile);
            if (header.numberOfChannels) this.metadata.setFormat('numberOfChannels', header.numberOfChannels);
        }
        return this.frameCount === 3 && !this.options.duration;
    }
    async skipSideInformation() {
        if (this.audioFrameHeader) {
            const sideInfoLength = this.audioFrameHeader.sideInfoLength;
            await this.tokenizer.readBuffer(this.sideInfoBuffer, {
                length: sideInfoLength
            });
            this.offset += sideInfoLength;
            await this.readXtraInfoHeader();
        }
    }
    async readXtraInfoHeader() {
        const headerTag = await this.tokenizer.readToken((0, _xingTagJs.InfoTagHeaderTag));
        this.offset += (0, _xingTagJs.InfoTagHeaderTag).len;
        switch(headerTag){
            case 'Info':
                this.metadata.setFormat('codecProfile', 'CBR');
                return this.readXingInfoHeader();
            case 'Xing':
                {
                    const infoTag = await this.readXingInfoHeader();
                    if (infoTag.vbrScale !== null) {
                        const codecProfile = getVbrCodecProfile(infoTag.vbrScale);
                        this.metadata.setFormat('codecProfile', codecProfile);
                    }
                    return null;
                }
            case 'Xtra':
                break;
            case 'LAME':
                {
                    const version = await this.tokenizer.readToken((0, _xingTagJs.LameEncoderVersion));
                    if (this.frameSize >= this.offset + (0, _xingTagJs.LameEncoderVersion).len) {
                        this.offset += (0, _xingTagJs.LameEncoderVersion).len;
                        this.metadata.setFormat('tool', `LAME ${version}`);
                        await this.skipFrameData(this.frameSize - this.offset);
                        return null;
                    }
                    this.metadata.addWarning('Corrupt LAME header');
                    break;
                }
        }
        const frameDataLeft = this.frameSize - this.offset;
        if (frameDataLeft < 0) this.metadata.addWarning(`Frame ${this.frameCount}corrupt: negative frameDataLeft`);
        else await this.skipFrameData(frameDataLeft);
        return null;
    }
    /**
     * Ref: http://gabriel.mp3-tech.org/mp3infotag.html
     */ async readXingInfoHeader() {
        const offset = this.tokenizer.position;
        const infoTag = await (0, _xingTagJs.readXingHeader)(this.tokenizer);
        this.offset += this.tokenizer.position - offset;
        if (infoTag.lame) {
            this.metadata.setFormat('tool', `LAME ${_utilJs.stripNulls(infoTag.lame.version)}`);
            if (infoTag.lame.extended) {
                this.metadata.setFormat('trackPeakLevel', infoTag.lame.extended.track_peak ?? undefined);
                if (infoTag.lame.extended.track_gain) this.metadata.setFormat('trackGain', infoTag.lame.extended.track_gain.adjustment);
                if (infoTag.lame.extended.album_gain) this.metadata.setFormat('albumGain', infoTag.lame.extended.album_gain.adjustment);
                this.metadata.setFormat('duration', infoTag.lame.extended.music_length / 1000);
            }
        }
        if (infoTag.streamSize && this.audioFrameHeader && infoTag.numFrames !== null) {
            const duration = infoTag.numFrames * this.audioFrameHeader.samplesPerFrame / this.audioFrameHeader.samplingRate;
            this.metadata.setFormat('duration', duration);
            debug('Get duration from Xing header: %s', this.metadata.format.duration);
            return infoTag;
        }
        // frames field is not present
        const frameDataLeft = this.frameSize - this.offset;
        await this.skipFrameData(frameDataLeft);
        return infoTag;
    }
    async skipFrameData(frameDataLeft) {
        if (frameDataLeft < 0) throw new (0, _mpegFrameHeaderJs.MpegContentError)('frame-data-left cannot be negative');
        if (frameDataLeft > 0 && this.calculateEofDuration && (0, _strtok3.isRandomAccessTokenizer)(this.tokenizer)) {
            const count = await this.tokenizer.readBuffer(this.sideInfoBuffer, {
                position: this.tokenizer.position + frameDataLeft - 1,
                length: 1
            });
            if (count !== 1) throw new (0, _strtok3.EndOfStreamError)();
        } else if (await this.tokenizer.ignore(frameDataLeft) !== frameDataLeft) throw new (0, _strtok3.EndOfStreamError)();
    }
}

},{"debug":"4XIdh","strtok3":"7L6Gs","../common/Util.js":"Q4yiL","../id3v1/ID3v1Parser.js":"fWBrl","../id3v2/AbstractID3Parser.js":"bZKYA","./AdtsFrameHeader.js":"4Ge6i","./MpegFrameHeader.js":"jhrxn","./XingTag.js":"dZMXo","@parcel/transformer-js/src/esmodule-helpers.js":"53hI8"}],"bZKYA":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Abstract parser which tries take ID3v2 and ID3v1 headers.
 */ parcelHelpers.export(exports, "AbstractID3Parser", ()=>AbstractID3Parser);
var _debug = require("debug");
var _debugDefault = parcelHelpers.interopDefault(_debug);
var _strtok3 = require("strtok3");
var _basicParserJs = require("../common/BasicParser.js");
var _id3V1ParserJs = require("../id3v1/ID3v1Parser.js");
var _id3V2ParserJs = require("./ID3v2Parser.js");
var _id3V2TokenJs = require("./ID3v2Token.js");
const debug = (0, _debugDefault.default)('music-metadata:parser:ID3');
class AbstractID3Parser extends (0, _basicParserJs.BasicParser) {
    static async startsWithID3v2Header(tokenizer) {
        return (await tokenizer.peekToken((0, _id3V2TokenJs.ID3v2Header))).fileIdentifier === 'ID3';
    }
    id3parser = new (0, _id3V2ParserJs.ID3v2Parser)();
    async parse() {
        try {
            await this.parseID3v2();
        } catch (err) {
            if (err instanceof (0, _strtok3.EndOfStreamError)) debug('End-of-stream');
            else throw err;
        }
    }
    finalize() {
        return;
    }
    async parseID3v2() {
        await this.tryReadId3v2Headers();
        debug('End of ID3v2 header, go to MPEG-parser: pos=%s', this.tokenizer.position);
        await this.postId3v2Parse();
        if (this.options.skipPostHeaders && this.metadata.hasAny()) this.finalize();
        else {
            const id3v1parser = new (0, _id3V1ParserJs.ID3v1Parser)(this.metadata, this.tokenizer, this.options);
            await id3v1parser.parse();
            this.finalize();
        }
    }
    async tryReadId3v2Headers() {
        const id3Header = await this.tokenizer.peekToken((0, _id3V2TokenJs.ID3v2Header));
        if (id3Header.fileIdentifier === 'ID3') {
            debug('Found ID3v2 header, pos=%s', this.tokenizer.position);
            await this.id3parser.parse(this.metadata, this.tokenizer, this.options);
            return this.tryReadId3v2Headers();
        }
    }
}

},{"debug":"4XIdh","strtok3":"7L6Gs","../common/BasicParser.js":"91dLC","../id3v1/ID3v1Parser.js":"fWBrl","./ID3v2Parser.js":"6YZCj","./ID3v2Token.js":"eUTtS","@parcel/transformer-js/src/esmodule-helpers.js":"53hI8"}],"4Ge6i":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * ADTS/AAC fixed header. The remaining three bytes contain the rest of the frame length.
 * Ref: https://wiki.multimedia.cx/index.php/ADTS
 */ parcelHelpers.export(exports, "AdtsFrameHeader", ()=>AdtsFrameHeader);
var _utilJs = require("../common/Util.js");
class AdtsFrameHeader {
    static profiles = [
        'AAC Main',
        'AAC LC',
        'AAC SSR',
        'AAC LTP'
    ];
    static samplingRates = [
        96000,
        88200,
        64000,
        48000,
        44100,
        32000,
        24000,
        22050,
        16000,
        12000,
        11025,
        8000,
        7350,
        null,
        null,
        null // Escape index 15
    ];
    static channelCounts = [
        undefined,
        1,
        2,
        3,
        4,
        5,
        6,
        8
    ];
    container;
    codec = 'AAC';
    codecProfile;
    samplingRate;
    numberOfChannels;
    frameLength;
    headerLength;
    static matches(buf) {
        // MPEG version index 2 or 3, with layer bits 00, identifies ADTS after synchronization.
        return (buf[1] & 0x16) === 0x10;
    }
    constructor(buf){
        this.headerLength = (buf[1] & 1) === 0 ? 9 : 7;
        this.container = `ADTS/MPEG-${_utilJs.isBitSet(buf, 1, 4) ? 2 : 4}`;
        this.codecProfile = AdtsFrameHeader.profiles[_utilJs.getBitAllignedNumber(buf, 2, 0, 2)];
        this.samplingRate = AdtsFrameHeader.samplingRates[_utilJs.getBitAllignedNumber(buf, 2, 2, 4)];
        this.numberOfChannels = AdtsFrameHeader.channelCounts[_utilJs.getBitAllignedNumber(buf, 2, 7, 3)];
        this.frameLength = _utilJs.getBitAllignedNumber(buf, 3, 6, 2) << 11;
    }
}

},{"../common/Util.js":"Q4yiL","@parcel/transformer-js/src/esmodule-helpers.js":"53hI8"}],"jhrxn":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MpegContentError", ()=>MpegContentError);
/**
 * MPEG Audio Layer I/II/III frame header.
 * Bit layout: AAAAAAAA AAABBCCD EEEEFFGH IIJJKLMM
 * Ref: https://www.mp3-tech.org/programmer/frame_header.html
 */ parcelHelpers.export(exports, "MpegFrameHeader", ()=>MpegFrameHeader);
var _utilJs = require("../common/Util.js");
var _parseErrorJs = require("../ParseError.js");
class MpegContentError extends (0, _parseErrorJs.makeUnexpectedFileContentError)('MPEG') {
}
class MpegFrameHeader {
    static len = 4;
    static versions = [
        2.5,
        null,
        2,
        1
    ];
    static layers = [
        0,
        3,
        2,
        1
    ];
    static sideInfoLengths = [
        [
            17,
            32
        ],
        [
            9,
            17
        ]
    ];
    static bitrates = {
        1: {
            11: 32,
            12: 32,
            13: 32,
            21: 32,
            22: 8,
            23: 8
        },
        2: {
            11: 64,
            12: 48,
            13: 40,
            21: 48,
            22: 16,
            23: 16
        },
        3: {
            11: 96,
            12: 56,
            13: 48,
            21: 56,
            22: 24,
            23: 24
        },
        4: {
            11: 128,
            12: 64,
            13: 56,
            21: 64,
            22: 32,
            23: 32
        },
        5: {
            11: 160,
            12: 80,
            13: 64,
            21: 80,
            22: 40,
            23: 40
        },
        6: {
            11: 192,
            12: 96,
            13: 80,
            21: 96,
            22: 48,
            23: 48
        },
        7: {
            11: 224,
            12: 112,
            13: 96,
            21: 112,
            22: 56,
            23: 56
        },
        8: {
            11: 256,
            12: 128,
            13: 112,
            21: 128,
            22: 64,
            23: 64
        },
        9: {
            11: 288,
            12: 160,
            13: 128,
            21: 144,
            22: 80,
            23: 80
        },
        10: {
            11: 320,
            12: 192,
            13: 160,
            21: 160,
            22: 96,
            23: 96
        },
        11: {
            11: 352,
            12: 224,
            13: 192,
            21: 176,
            22: 112,
            23: 112
        },
        12: {
            11: 384,
            12: 256,
            13: 224,
            21: 192,
            22: 128,
            23: 128
        },
        13: {
            11: 416,
            12: 320,
            13: 256,
            21: 224,
            22: 144,
            23: 144
        },
        14: {
            11: 448,
            12: 384,
            13: 320,
            21: 256,
            22: 160,
            23: 160
        }
    };
    static samplingRates = {
        1: {
            0: 44100,
            1: 48000,
            2: 32000
        },
        2: {
            0: 22050,
            1: 24000,
            2: 16000
        },
        2.5: {
            0: 11025,
            1: 12000,
            2: 8000
        }
    };
    static samplesInFrameTable = [
        /* Layer   I    II   III */ [
            0,
            384,
            1152,
            1152
        ],
        [
            0,
            384,
            1152,
            576
        ] // MPEG-2/2.5
    ];
    container = 'MPEG';
    codec;
    layer;
    isProtectedByCRC;
    bitrate;
    samplingRate;
    numberOfChannels;
    samplesPerFrame;
    frameSize;
    sideInfoLength;
    constructor(buf){
        const version = MpegFrameHeader.versions[_utilJs.getBitAllignedNumber(buf, 1, 3, 2)];
        if (version === null) throw new MpegContentError('Cannot determine bit-rate');
        this.layer = MpegFrameHeader.layers[_utilJs.getBitAllignedNumber(buf, 1, 5, 2)];
        this.isProtectedByCRC = !_utilJs.isBitSet(buf, 1, 7);
        const bitrateIndex = _utilJs.getBitAllignedNumber(buf, 2, 0, 4);
        const samplingRateIndex = _utilJs.getBitAllignedNumber(buf, 2, 4, 2);
        const padding = _utilJs.isBitSet(buf, 2, 6);
        this.numberOfChannels = _utilJs.getBitAllignedNumber(buf, 3, 0, 2) === 3 ? 1 : 2;
        this.codec = `MPEG ${version} Layer ${this.layer}`;
        const bitrate = MpegFrameHeader.bitrates[bitrateIndex]?.[10 * Math.floor(version) + this.layer];
        if (!bitrate) throw new MpegContentError('Cannot determine bit-rate');
        this.bitrate = bitrate * 1000;
        const samplingRate = MpegFrameHeader.samplingRates[version][samplingRateIndex];
        if (samplingRate == null) throw new MpegContentError('Cannot determine sampling-rate');
        this.samplingRate = samplingRate;
        this.samplesPerFrame = MpegFrameHeader.samplesInFrameTable[version === 1 ? 0 : 1][this.layer];
        const slotSize = this.layer === 1 ? 4 : 1;
        this.frameSize = Math.floor(this.samplesPerFrame / 8 * this.bitrate / samplingRate + (padding ? slotSize : 0));
        this.sideInfoLength = this.layer !== 3 ? 2 : MpegFrameHeader.sideInfoLengths[version === 1 ? 0 : 1][this.numberOfChannels === 1 ? 0 : 1];
    }
}

},{"../common/Util.js":"Q4yiL","../ParseError.js":"E03ox","@parcel/transformer-js/src/esmodule-helpers.js":"53hI8"}],"dZMXo":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "InfoTagHeaderTag", ()=>InfoTagHeaderTag);
parcelHelpers.export(exports, "LameEncoderVersion", ()=>LameEncoderVersion);
parcelHelpers.export(exports, "XingHeaderFlags", ()=>XingHeaderFlags);
// /**
//  * XING Header Tag
//  * Ref: http://gabriel.mp3-tech.org/mp3infotag.html
//  */
parcelHelpers.export(exports, "readXingHeader", ()=>readXingHeader);
var _tokenTypes = require("token-types");
var _utilJs = require("../common/Util.js");
var _extendedLameHeaderJs = require("./ExtendedLameHeader.js");
const InfoTagHeaderTag = new _tokenTypes.StringType(4, 'ascii');
const LameEncoderVersion = new _tokenTypes.StringType(6, 'ascii');
const XingHeaderFlags = {
    len: 4,
    get: (buf, off)=>{
        return {
            frames: _utilJs.isBitSet(buf, off, 31),
            bytes: _utilJs.isBitSet(buf, off, 30),
            toc: _utilJs.isBitSet(buf, off, 29),
            vbrScale: _utilJs.isBitSet(buf, off, 28)
        };
    }
};
async function readXingHeader(tokenizer) {
    const flags = await tokenizer.readToken(XingHeaderFlags);
    const xingInfoTag = {
        numFrames: null,
        streamSize: null,
        vbrScale: null
    };
    if (flags.frames) xingInfoTag.numFrames = await tokenizer.readToken(_tokenTypes.UINT32_BE);
    if (flags.bytes) xingInfoTag.streamSize = await tokenizer.readToken(_tokenTypes.UINT32_BE);
    if (flags.toc) {
        xingInfoTag.toc = new Uint8Array(100);
        await tokenizer.readBuffer(xingInfoTag.toc);
    }
    if (flags.vbrScale) xingInfoTag.vbrScale = await tokenizer.readToken(_tokenTypes.UINT32_BE);
    const lameTag = await tokenizer.peekToken(new _tokenTypes.StringType(4, 'ascii'));
    if (lameTag === 'LAME') {
        await tokenizer.ignore(4);
        xingInfoTag.lame = {
            version: await tokenizer.readToken(new _tokenTypes.StringType(5, 'ascii'))
        };
        const match = xingInfoTag.lame.version.match(/\d+.\d+/g);
        if (match !== null) {
            const majorMinorVersion = match[0]; // e.g. 3.97
            const version = majorMinorVersion.split('.').map((n)=>Number.parseInt(n, 10));
            if (version[0] >= 3 && version[1] >= 90) xingInfoTag.lame.extended = await tokenizer.readToken((0, _extendedLameHeaderJs.ExtendedLameHeader));
        }
    }
    return xingInfoTag;
}

},{"token-types":"al35Q","../common/Util.js":"Q4yiL","./ExtendedLameHeader.js":"iplhg","@parcel/transformer-js/src/esmodule-helpers.js":"53hI8"}],"iplhg":[function(require,module,exports,__globalThis) {
/**
 * Extended Lame Header
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ExtendedLameHeader", ()=>ExtendedLameHeader);
var _tokenTypes = require("token-types");
var _utilJs = require("../common/Util.js");
var _replayGainDataFormatJs = require("./ReplayGainDataFormat.js");
const ExtendedLameHeader = {
    len: 27,
    get: (buf, off)=>{
        const track_peak = _tokenTypes.UINT32_BE.get(buf, off + 2);
        return {
            revision: _utilJs.getBitAllignedNumber(buf, off, 0, 4),
            vbr_method: _utilJs.getBitAllignedNumber(buf, off, 4, 4),
            lowpass_filter: 100 * _tokenTypes.UINT8.get(buf, off + 1),
            track_peak: track_peak === 0 ? null : track_peak / 2 ** 23,
            track_gain: (0, _replayGainDataFormatJs.ReplayGain).get(buf, 6),
            album_gain: (0, _replayGainDataFormatJs.ReplayGain).get(buf, 8),
            music_length: _tokenTypes.UINT32_BE.get(buf, off + 20),
            music_crc: _tokenTypes.UINT8.get(buf, off + 24),
            header_crc: _tokenTypes.UINT16_BE.get(buf, off + 24)
        };
    }
};

},{"token-types":"al35Q","../common/Util.js":"Q4yiL","./ReplayGainDataFormat.js":"bb5ky","@parcel/transformer-js/src/esmodule-helpers.js":"53hI8"}],"bb5ky":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ReplayGain", ()=>ReplayGain);
var _utilJs = require("../common/Util.js");
/**
 * https://github.com/Borewit/music-metadata/wiki/Replay-Gain-Data-Format#name-code
 */ const NameCode = {
    /**
     * not set
     */ not_set: 0,
    /**
     * Radio Gain Adjustment
     */ radio: 1,
    /**
     * Audiophile Gain Adjustment
     */ audiophile: 2
};
/**
 * https://github.com/Borewit/music-metadata/wiki/Replay-Gain-Data-Format#originator-code
 */ const ReplayGainOriginator = {
    /**
     * Replay Gain unspecified
     */ unspecified: 0,
    /**
     * Replay Gain pre-set by artist/producer/mastering engineer
     */ engineer: 1,
    /**
     * Replay Gain set by user
     */ user: 2,
    /**
     * Replay Gain determined automatically, as described on this site
     */ automatic: 3,
    /**
     * Set by simple RMS average
     */ rms_average: 4
};
const ReplayGain = {
    len: 2,
    get: (buf, off)=>{
        const gain_type = _utilJs.getBitAllignedNumber(buf, off, 0, 3);
        const sign = _utilJs.getBitAllignedNumber(buf, off, 6, 1);
        const gain_adj = _utilJs.getBitAllignedNumber(buf, off, 7, 9) / 10.0;
        if (gain_type > 0) return {
            type: _utilJs.getBitAllignedNumber(buf, off, 0, 3),
            origin: _utilJs.getBitAllignedNumber(buf, off, 3, 3),
            adjustment: sign ? -gain_adj : gain_adj
        };
        return undefined;
    }
};

},{"../common/Util.js":"Q4yiL","@parcel/transformer-js/src/esmodule-helpers.js":"53hI8"}]},["1KwAN"], null, "parcelRequire2853", {})

//# sourceMappingURL=MpegParser.35d588fb.js.map
