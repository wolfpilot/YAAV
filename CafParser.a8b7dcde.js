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
})({"4MuvY":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SERVER_PORT = 3000;
var HMR_SECURE = false;
var HMR_ENV_HASH = "439701173a9199ea";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "1c1ce529a8b7dcde";
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

},{}],"54QkR":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * CAF - Core Audio File Format
 *
 * Ref: https://developer.apple.com/library/archive/documentation/MusicAudio/Reference/CAFSpec/CAF_spec/CAF_spec.html
 */ parcelHelpers.export(exports, "CafParser", ()=>CafParser);
var _debug = require("debug");
var _debugDefault = parcelHelpers.interopDefault(_debug);
var _strtok3 = require("strtok3");
var _tokenTypes = require("token-types");
var _allocationJs = require("../common/Allocation.js");
var _basicParserJs = require("../common/BasicParser.js");
var _cafTokenJs = require("./CafToken.js");
const debug = (0, _debugDefault.default)('music-metadata:parser:caf');
// Unrecognised mFormatID values are reported as-is, without claiming losslessness.
const codecByFormatId = {
    lpcm: {
        codec: 'PCM',
        lossless: true
    },
    ima4: {
        codec: 'IMA4 ADPCM',
        lossless: false
    },
    alac: {
        codec: 'ALAC',
        lossless: true
    },
    flac: {
        codec: 'FLAC',
        lossless: true
    },
    ulaw: {
        codec: 'ITU-T G.711 mu-law',
        lossless: false
    },
    alaw: {
        codec: 'ITU-T G.711 A-law',
        lossless: false
    },
    '.mp1': {
        codec: 'MPEG-1 Layer I',
        lossless: false
    },
    '.mp2': {
        codec: 'MPEG-1 Layer II',
        lossless: false
    },
    '.mp3': {
        codec: 'MPEG-1 Layer III',
        lossless: false
    },
    'aac ': {
        codec: 'AAC',
        lossless: false
    },
    aace: {
        codec: 'AAC',
        lossless: false
    },
    aacf: {
        codec: 'AAC',
        lossless: false
    },
    aacg: {
        codec: 'AAC',
        lossless: false
    },
    aach: {
        codec: 'AAC',
        lossless: false
    },
    aacl: {
        codec: 'AAC',
        lossless: false
    },
    aacp: {
        codec: 'AAC',
        lossless: false
    }
};
const editCountLen = 4;
const numEntriesLen = 4;
class CafParser extends (0, _basicParserJs.BasicParser) {
    desc;
    packetTable;
    dataBytes;
    expectedFirstChunk = true;
    reachedEndOfFile = false;
    async parse() {
        const header = await this.tokenizer.readToken(_cafTokenJs.FileHeader);
        if (header.fileType !== 'caff') throw new (0, _cafTokenJs.CafContentError)(`Invalid file-type, expected 'caff', found '${header.fileType}'`);
        this.metadata.setFormat('container', 'CAF');
        this.metadata.setAudioOnly();
        while(!this.reachedEndOfFile && !this.endOfFileReached()){
            let chunkHeader;
            try {
                chunkHeader = await this.tokenizer.readToken(_cafTokenJs.ChunkHeader);
            } catch (error) {
                if (error instanceof _strtok3.EndOfStreamError) {
                    debug('End-of-stream');
                    break;
                }
                throw error;
            }
            debug(`Reading CAF chunk type=${chunkHeader.chunkType} size=${chunkHeader.chunkSize}`);
            if (this.expectedFirstChunk) {
                this.expectedFirstChunk = false;
                if (chunkHeader.chunkType !== 'desc') throw new (0, _cafTokenJs.CafContentError)(`Expected an Audio Description chunk, found '${chunkHeader.chunkType}'`);
            }
            await this.readChunk(chunkHeader);
        }
        if (!this.desc) throw new (0, _cafTokenJs.CafContentError)('Missing Audio Description chunk');
        this.applyDerivedFormat();
    }
    endOfFileReached() {
        const { size } = this.tokenizer.fileInfo;
        return size !== undefined && size - this.tokenizer.position < _cafTokenJs.ChunkHeader.len;
    }
    async readChunk(header) {
        switch(header.chunkType){
            case 'desc':
                return this.readAudioDescription(header.chunkSize);
            case 'pakt':
                return this.readPacketTable(header.chunkSize);
            case 'data':
                return this.readAudioData(header.chunkSize);
            case 'info':
                return this.readInfo(header.chunkSize);
            case 'chan':
                return this.readChannelLayout(header.chunkSize);
            default:
                debug(`Ignore chunk type=${header.chunkType} size=${header.chunkSize}`);
                return this.skipUnknownChunk(header.chunkSize);
        }
    }
    async readAudioDescription(chunkSize) {
        if (chunkSize < _cafTokenJs.AudioDescription.len) throw new (0, _cafTokenJs.CafContentError)(`Audio Description chunk size ${chunkSize} is smaller than ${_cafTokenJs.AudioDescription.len}`);
        this.desc = await this.tokenizer.readToken(_cafTokenJs.AudioDescription);
        await this.tokenizer.ignore(chunkSize - _cafTokenJs.AudioDescription.len);
        this.applyAudioDescription(this.desc);
    }
    applyAudioDescription(desc) {
        this.metadata.setFormat('sampleRate', desc.sampleRate);
        this.metadata.setFormat('numberOfChannels', desc.channelsPerFrame);
        if (desc.bitsPerChannel > 0) this.metadata.setFormat('bitsPerSample', desc.bitsPerChannel);
        const codec = codecByFormatId[desc.formatId];
        this.metadata.setFormat('codec', codec ? codec.codec : desc.formatId);
        if (codec) this.metadata.setFormat('lossless', codec.lossless);
    }
    async readPacketTable(chunkSize) {
        const desc = this.desc;
        if (!desc) throw new (0, _cafTokenJs.CafContentError)('Packet Table chunk found before the Audio Description chunk');
        if (chunkSize < _cafTokenJs.PacketTableHeader.len) throw new (0, _cafTokenJs.CafContentError)(`Packet Table chunk size ${chunkSize} is smaller than ${_cafTokenJs.PacketTableHeader.len}`);
        this.validateChunkAvailability(chunkSize, 'Packet Table');
        const packetTable = await this.tokenizer.readToken(_cafTokenJs.PacketTableHeader);
        const body = await this.readChunkBody(chunkSize - _cafTokenJs.PacketTableHeader.len, 'Packet Table');
        _cafTokenJs.decodePacketTableEntries(body, desc, packetTable.numberPackets);
        this.packetTable = packetTable;
    }
    async readAudioData(chunkSize) {
        if (chunkSize >= 0 && chunkSize < editCountLen) throw new (0, _cafTokenJs.CafContentError)(`Audio Data chunk size ${chunkSize} is too small to hold mEditCount`);
        if (chunkSize >= 0) this.validateChunkAvailability(chunkSize, 'Audio Data');
        if (await this.tokenizer.ignore(editCountLen) !== editCountLen) throw new _strtok3.EndOfStreamError();
        if (chunkSize === -1) {
            this.reachedEndOfFile = true; // Runs to the end of the file, nothing can follow
            const { size } = this.tokenizer.fileInfo;
            if (size !== undefined) {
                this.dataBytes = size - this.tokenizer.position;
                await this.tokenizer.ignore(this.dataBytes);
                return;
            }
            if (!this.options.duration) {
                debug('Audio Data chunk has an unknown size and duration was not requested');
                return;
            }
            const desc = this.desc;
            if (!desc || desc.sampleRate <= 0 || this.deriveFrameCount(desc) !== undefined || desc.bytesPerPacket <= 0 || desc.framesPerPacket <= 0) // A packet table may already supply duration; variable packets cannot use a byte count.
            return;
            this.dataBytes = await this.readToPhysicalEof();
            return;
        }
        const dataBytes = chunkSize - editCountLen;
        if (await this.tokenizer.ignore(dataBytes) !== dataBytes) throw new _strtok3.EndOfStreamError();
        this.dataBytes = dataBytes;
    }
    /**
     * Consume the remaining input, counting bytes until physical end-of-stream.
     * Only needed for duration recovery when neither the data chunk nor the input declares a size.
     */ async readToPhysicalEof() {
        const buffer = new Uint8Array(65536);
        let bytes = 0;
        for(;;){
            const read = await this.tokenizer.readBuffer(buffer, {
                mayBeLess: true
            });
            if (read === 0) return bytes;
            bytes += read;
        }
    }
    async readInfo(chunkSize) {
        if (chunkSize < numEntriesLen) throw new (0, _cafTokenJs.CafContentError)(`Information chunk size ${chunkSize} is too small to hold mNumEntries`);
        const body = await this.readChunkBody(chunkSize, 'Information');
        const entries = _cafTokenJs.parseInfoEntries(body, (0, _allocationJs.getMaxMetadataEntries)(this.options));
        for (const { key, value } of entries){
            if ([
                'artist',
                'composer',
                'lyricist',
                'genre'
            ].includes(key)) {
                let count = 1;
                for(let offset = value.indexOf(','); offset >= 0; offset = value.indexOf(',', offset + 1))++count;
                if (count > (0, _allocationJs.getMaxMetadataEntries)(this.options)) throw new (0, _cafTokenJs.CafContentError)(`Comma-separated value count ${count} exceeds entry limit ${(0, _allocationJs.getMaxMetadataEntries)(this.options)}`);
            }
            debug(`info key=${key}`);
            await this.metadata.addTag('CAF', key, value);
        }
    }
    async readChannelLayout(chunkSize) {
        if (chunkSize < _cafTokenJs.ChannelLayoutHeader.len) throw new (0, _cafTokenJs.CafContentError)(`Channel Layout chunk size ${chunkSize} is smaller than ${_cafTokenJs.ChannelLayoutHeader.len}`);
        this.validateChunkAvailability(chunkSize, 'Channel Layout');
        const header = await this.tokenizer.readToken(_cafTokenJs.ChannelLayoutHeader);
        const descriptionLen = header.numberChannelDescriptions * _cafTokenJs.channelDescriptionLen;
        const bodyLen = _cafTokenJs.ChannelLayoutHeader.len + descriptionLen;
        if (bodyLen > chunkSize) throw new (0, _cafTokenJs.CafContentError)(`Channel Layout chunk declares ${header.numberChannelDescriptions} description(s) which exceed its size of ${chunkSize}`);
        const descriptions = descriptionLen > 0 ? _cafTokenJs.parseChannelDescriptions(await this.readChunkBody(descriptionLen, 'Channel Layout'), header.numberChannelDescriptions, (0, _allocationJs.getMaxMetadataEntries)(this.options)) : [];
        await this.addChannelLayout(header, descriptions);
        await this.tokenizer.ignore(chunkSize - bodyLen);
    }
    async addChannelLayout(header, descriptions) {
        await this.metadata.addTag('CAF', 'channelLayoutTag', header.channelLayoutTag);
        await this.metadata.addTag('CAF', 'channelLayoutBitmap', header.channelBitmap);
        if (descriptions.length > 0) // No common tag describes channel order so keep the complete descriptions
        await this.metadata.addTag('CAF', 'channelLayoutDescriptions', descriptions);
    }
    /**
     * Rejects a whole chunk whose declared size exceeds the remaining input.
     * Only applicable when the total input size is known.
     */ validateChunkAvailability(chunkSize, chunkType) {
        const { size } = this.tokenizer.fileInfo;
        if (size !== undefined) {
            const available = size - this.tokenizer.position;
            if (chunkSize > available) throw new (0, _cafTokenJs.CafContentError)(`${chunkType} chunk size ${chunkSize} exceeds available input size ${available}`);
        }
    }
    /**
     * Reads a chunk body without trusting its declared size.
     * @param chunkSize Declared body size
     * @param chunkType Chunk name for error messages
     */ async readChunkBody(chunkSize, chunkType) {
        this.validateChunkAvailability(chunkSize, chunkType);
        return this.readToken(new _tokenTypes.Uint8ArrayType(chunkSize));
    }
    async skipUnknownChunk(chunkSize) {
        if (chunkSize < 0) throw new (0, _cafTokenJs.CafContentError)(`Chunk size ${chunkSize} may only be -1 for an Audio Data chunk`);
        await this.tokenizer.ignore(chunkSize);
    }
    // Deferred: the packet table and audio payload may arrive after the description
    applyDerivedFormat() {
        const desc = this.desc;
        if (!desc || desc.sampleRate <= 0) return;
        const frames = this.deriveFrameCount(desc);
        if (frames === undefined) {
            debug('Unable to derive the number of sample frames');
            return;
        }
        const duration = frames / desc.sampleRate;
        this.metadata.setFormat('numberOfSamples', frames);
        this.metadata.setFormat('duration', duration);
        if (this.dataBytes !== undefined) this.metadata.setFormat('bitrate', 8 * this.dataBytes / duration);
    }
    deriveFrameCount(desc) {
        const packetTable = this.packetTable;
        if (packetTable) {
            // Signed field, writers emit negative values. Already excludes priming and remainder frames.
            if (packetTable.numberValidFrames > 0) return packetTable.numberValidFrames;
            debug(`Ignoring packet table with mNumberValidFrames=${packetTable.numberValidFrames}`);
        }
        if (desc.bytesPerPacket > 0 && desc.framesPerPacket > 0 && this.dataBytes !== undefined) {
            // Count only complete packets so truncated payloads cannot inflate the extent.
            const frames = Math.floor(this.dataBytes / desc.bytesPerPacket) * desc.framesPerPacket;
            if (frames > 0) return frames;
        }
        return undefined;
    }
}

},{"debug":"4XIdh","strtok3":"7L6Gs","token-types":"al35Q","../common/Allocation.js":"8ZVyl","../common/BasicParser.js":"91dLC","./CafToken.js":"4oOPb","@parcel/transformer-js/src/esmodule-helpers.js":"53hI8"}],"4oOPb":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CafContentError", ()=>CafContentError);
parcelHelpers.export(exports, "FileHeader", ()=>FileHeader);
parcelHelpers.export(exports, "ChunkHeader", ()=>ChunkHeader);
parcelHelpers.export(exports, "AudioDescription", ()=>AudioDescription);
parcelHelpers.export(exports, "PacketTableHeader", ()=>PacketTableHeader);
/**
 * Decodes the base-128, MSB-first integers that follow a Packet Table header,
 * high-order bit set meaning the number continues in the next byte.
 * @returns number of bytes occupied by the entries
 */ parcelHelpers.export(exports, "decodePacketTableEntries", ()=>decodePacketTableEntries);
parcelHelpers.export(exports, "ChannelLayoutHeader", ()=>ChannelLayoutHeader);
parcelHelpers.export(exports, "channelDescriptionLen", ()=>channelDescriptionLen);
/** Each CAFChannelDescription has a UInt32 label, UInt32 flags and three Float32 coordinates */ parcelHelpers.export(exports, "parseChannelDescriptions", ()=>parseChannelDescriptions);
/** Reads the NUL terminated UTF-8 pairs, the declared entry count is authoritative */ parcelHelpers.export(exports, "parseInfoEntries", ()=>parseInfoEntries);
var _textCodec = require("@borewit/text-codec");
var _tokenTypes = require("token-types");
var _allocationJs = require("../common/Allocation.js");
var _parseErrorJs = require("../ParseError.js");
class CafContentError extends (0, _parseErrorJs.makeUnexpectedFileContentError)('CAF') {
}
// Application defined identifiers need not be printable ASCII, unlike FourCcToken
const decodeFourCC = (buf, off)=>(0, _textCodec.textDecode)(buf.subarray(off, off + 4), 'latin1');
const FileHeader = {
    len: 8,
    get: (buf, off)=>{
        return {
            fileType: decodeFourCC(buf, off),
            fileVersion: _tokenTypes.UINT16_BE.get(buf, off + 4),
            fileFlags: _tokenTypes.UINT16_BE.get(buf, off + 6)
        };
    }
};
const ChunkHeader = {
    len: 12,
    get: (buf, off)=>{
        return {
            chunkType: decodeFourCC(buf, off),
            chunkSize: Number(_tokenTypes.INT64_BE.get(buf, off + 4))
        };
    }
};
const AudioDescription = {
    len: 32,
    get: (buf, off)=>{
        return {
            sampleRate: _tokenTypes.Float64_BE.get(buf, off),
            formatId: decodeFourCC(buf, off + 8),
            formatFlags: _tokenTypes.UINT32_BE.get(buf, off + 12),
            bytesPerPacket: _tokenTypes.UINT32_BE.get(buf, off + 16),
            framesPerPacket: _tokenTypes.UINT32_BE.get(buf, off + 20),
            channelsPerFrame: _tokenTypes.UINT32_BE.get(buf, off + 24),
            bitsPerChannel: _tokenTypes.UINT32_BE.get(buf, off + 28)
        };
    }
};
const PacketTableHeader = {
    len: 24,
    get: (buf, off)=>{
        return {
            numberPackets: Number(_tokenTypes.INT64_BE.get(buf, off)),
            numberValidFrames: Number(_tokenTypes.INT64_BE.get(buf, off + 8)),
            primingFrames: _tokenTypes.INT32_BE.get(buf, off + 16),
            remainderFrames: _tokenTypes.INT32_BE.get(buf, off + 20)
        };
    }
};
// A variable bytes or frames per packet value contributes one entry each
function varIntsPerPacket(desc) {
    return (desc.bytesPerPacket === 0 ? 1 : 0) + (desc.framesPerPacket === 0 ? 1 : 0);
}
function decodePacketTableEntries(body, desc, numberPackets) {
    const expected = numberPackets * varIntsPerPacket(desc);
    if (expected === 0) return 0;
    // Each entry needs at least one byte, checked up front to bound the loop
    if (expected > body.length) throw new CafContentError(`Packet Table data section holds ${body.length} byte(s) for ${expected} packet table entries`);
    let offset = 0;
    for(let i = 0; i < expected; ++i){
        let byte;
        do {
            if (offset >= body.length) throw new CafContentError('Packet Table data section ends in the middle of a variable length integer');
            byte = body[offset++];
        }while ((byte & 0x80) !== 0);
    }
    return offset;
}
const ChannelLayoutHeader = {
    len: 12,
    get: (buf, off)=>{
        return {
            channelLayoutTag: _tokenTypes.UINT32_BE.get(buf, off),
            channelBitmap: _tokenTypes.UINT32_BE.get(buf, off + 4),
            numberChannelDescriptions: _tokenTypes.UINT32_BE.get(buf, off + 8)
        };
    }
};
const channelDescriptionLen = 20;
function parseChannelDescriptions(body, count, maxEntries = (0, _allocationJs.defaultMaxMetadataEntries)) {
    if (count * channelDescriptionLen > body.length) throw new CafContentError(`Channel Layout chunk declares ${count} description(s) for ${body.length} byte(s)`);
    if (count > maxEntries) throw new CafContentError(`Channel Layout description count ${count} exceeds entry limit ${maxEntries}`);
    const descriptions = [];
    for(let i = 0; i < count; ++i){
        const off = i * channelDescriptionLen;
        descriptions.push({
            channelLabel: _tokenTypes.UINT32_BE.get(body, off),
            channelFlags: _tokenTypes.UINT32_BE.get(body, off + 4),
            coordinates: [
                _tokenTypes.Float32_BE.get(body, off + 8),
                _tokenTypes.Float32_BE.get(body, off + 12),
                _tokenTypes.Float32_BE.get(body, off + 16)
            ]
        });
    }
    return descriptions;
}
function parseInfoEntries(body, maxEntries = (0, _allocationJs.defaultMaxMetadataEntries)) {
    const readString = (from)=>{
        const end = body.indexOf(0, from);
        if (end < 0) throw new CafContentError('Information chunk contains an unterminated string');
        return {
            value: (0, _textCodec.textDecode)(body.subarray(from, end), 'utf8'),
            next: end + 1
        };
    };
    const numEntries = _tokenTypes.UINT32_BE.get(body, 0);
    if (numEntries > maxEntries) throw new CafContentError(`Information entry count ${numEntries} exceeds entry limit ${maxEntries}`);
    const entries = [];
    let offset = 4;
    for(let i = 0; i < numEntries; ++i){
        const key = readString(offset);
        const value = readString(key.next);
        entries.push({
            key: key.value,
            value: value.value
        });
        offset = value.next;
    }
    return entries;
}

},{"@borewit/text-codec":"104u3","token-types":"al35Q","../common/Allocation.js":"8ZVyl","../ParseError.js":"E03ox","@parcel/transformer-js/src/esmodule-helpers.js":"53hI8"}]},["4MuvY"], null, "parcelRequire2853", {})

//# sourceMappingURL=CafParser.a8b7dcde.js.map
