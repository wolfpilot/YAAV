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
})({"a30JZ":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SERVER_PORT = 3000;
var HMR_SECURE = false;
var HMR_ENV_HASH = "439701173a9199ea";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "f2482d37d586c9a3";
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

},{}],"ah7Df":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Extensible Binary Meta Language (EBML) parser
 * https://en.wikipedia.org/wiki/Extensible_Binary_Meta_Language
 * http://matroska.sourceforge.net/technical/specs/rfc/index.html
 *
 * WEBM VP8 AUDIO FILE
 */ parcelHelpers.export(exports, "MatroskaParser", ()=>MatroskaParser);
var _debug = require("debug");
var _debugDefault = parcelHelpers.interopDefault(_debug);
var _basicParserJs = require("../common/BasicParser.js");
var _ebmlIteratorJs = require("../ebml/EbmlIterator.js");
var _matroskaDtdJs = require("./MatroskaDtd.js");
var _typesJs = require("./types.js");
const debug = (0, _debugDefault.default)('music-metadata:parser:matroska');
const targetTypes = (0, _typesJs.TargetType);
function isCompleteTrack(entry) {
    return typeof entry.trackNumber === 'number' && Number.isSafeInteger(entry.trackNumber) && entry.trackNumber > 0 && typeof entry.codecID === 'string' && entry.codecID.length > 0 && Object.values((0, _typesJs.TrackType)).some((type)=>type === entry.trackType);
}
function isCompleteFile(file) {
    return typeof file.name === 'string' && typeof file.mimeType === 'string' && file.data instanceof Uint8Array && file.uid instanceof Uint8Array;
}
function videoInfo(video) {
    const { flagInterlaced, ...properties } = video;
    const result = properties;
    // Matroska uses 0=undetermined, 1=interlaced, 2=progressive.
    if (flagInterlaced === 1 || flagInterlaced === 2) result.flagInterlaced = flagInterlaced === 1;
    return result;
}
class MatroskaParser extends (0, _basicParserJs.BasicParser) {
    tracksByUid = new Map();
    trackStatistics = new Map();
    seekHead;
    seekHeadOffset = 0;
    selectedAudioTrackUid;
    albumCandidates = [];
    /**
     * Use index to skip multiple segment/cluster elements at once.
     * Significant performance impact
     */ flagUseIndexToSkipClusters = this.options.mkvUseIndex ?? false;
    async parse() {
        const containerSize = this.tokenizer.fileInfo.size ?? Number.MAX_SAFE_INTEGER;
        const attachmentMimeTypes = new WeakMap();
        const matroskaIterator = new (0, _ebmlIteratorJs.EbmlIterator)(this.tokenizer, this.options);
        debug('Initializing DTD end MatroskaIterator');
        await matroskaIterator.iterate((0, _matroskaDtdJs.matroskaDtd), containerSize, {
            // Process tags and attachments one at a time. Never assemble a Segment/root tree.
            collect: (element)=>[
                    0x114d9b74,
                    0x1549a966,
                    0x1654ae6b,
                    0x7373,
                    0x61a7
                ].includes(element.id),
            startNext: async (element)=>{
                switch(element.id){
                    case 0x18538067:
                        this.seekHeadOffset = this.tokenizer.position;
                        return (0, _ebmlIteratorJs.ParseAction).ReadNext;
                    case 0x1941a469:
                        return this.options.skipCovers ? (0, _ebmlIteratorJs.ParseAction).IgnoreElement : (0, _ebmlIteratorJs.ParseAction).ReadNext;
                    case 0x465c:
                        {
                            // FileData
                            const mimeType = element.parent && attachmentMimeTypes.get(element.parent);
                            // If MIME follows FileData, retain one payload under maxMemoryAllocation
                            // until AttachedFile ends, then classify it. This also works on streams.
                            return mimeType !== undefined && !mimeType.startsWith('image/') ? (0, _ebmlIteratorJs.ParseAction).IgnoreElement : (0, _ebmlIteratorJs.ParseAction).ReadNext;
                        }
                    case 0x114d9b74:
                        return this.flagUseIndexToSkipClusters ? (0, _ebmlIteratorJs.ParseAction).ReadNext : (0, _ebmlIteratorJs.ParseAction).IgnoreElement;
                    case 0x63a2:
                    case 0x6d80:
                    case 0x1043a770:
                    case 0x1c53bb6b:
                        debug(`Skip element: name=${element.name}, id=0x${element.id.toString(16)}`);
                        return (0, _ebmlIteratorJs.ParseAction).IgnoreElement;
                    case 0x1f43b675:
                        if (this.flagUseIndexToSkipClusters && this.seekHead) {
                            const index = (this.seekHead.seek ?? []).find((index)=>index.position !== undefined && index.position + this.seekHeadOffset > this.tokenizer.position);
                            if (index?.position !== undefined) {
                                // Go to next index position
                                const ignoreSize = index.position + this.seekHeadOffset - this.tokenizer.position;
                                debug(`Use index to go to next position, ignoring ${ignoreSize} bytes`);
                                await this.tokenizer.ignore(ignoreSize);
                                return (0, _ebmlIteratorJs.ParseAction).SkipElement;
                            }
                        }
                        return (0, _ebmlIteratorJs.ParseAction).IgnoreElement;
                    default:
                        return (0, _ebmlIteratorJs.ParseAction).ReadNext;
                }
            },
            onElement: async (event)=>{
                if (debug.enabled) {
                    const value = event.value instanceof Uint8Array ? `${event.value.byteLength} bytes` : event.value;
                    debug(`Received: name=${event.element.name}, value=${value}`);
                }
                switch(event.id){
                    case 0x4282:
                        this.metadata.setFormat('container', `EBML/${event.value}`);
                        break;
                    case 0x114d9b74:
                        this.seekHead = event.value;
                        break;
                    case 0x1549a966:
                        {
                            // Info (Segment Information)
                            const info = event.value;
                            if (info.title !== undefined) await this.addTag('segment:title', info.title);
                            const timecodeScale = info.timecodeScale ? info.timecodeScale : 1000000;
                            if (typeof info.duration === 'number') {
                                const duration = info.duration * timecodeScale / 1000000000;
                                if (Number.isFinite(duration) && duration > 0) {
                                    this.metadata.setFormat('duration', duration);
                                    this.metadata.setFormat('containerDuration', duration);
                                }
                            }
                        }
                        break;
                    case 0x1654ae6b:
                        {
                            // tracks
                            const audioTracks = event.value;
                            if (audioTracks?.entries) {
                                const entries = audioTracks.entries.filter((entry)=>{
                                    if (isCompleteTrack(entry)) return true;
                                    this.metadata.addWarning('Ignoring Matroska track without valid TrackNumber, TrackType or CodecID');
                                    return false;
                                }).filter(isCompleteTrack);
                                entries.forEach((entry)=>{
                                    const stream = {
                                        id: entry.trackNumber,
                                        codecId: entry.codecID,
                                        codecName: entry.codecName ?? entry.codecID.replace(/^[AV]_/, ''),
                                        codecSettings: entry.codecSettings,
                                        flagDefault: entry.flagDefault ?? true,
                                        flagLacing: entry.flagLacing ?? true,
                                        flagEnabled: entry.flagEnabled ?? true,
                                        flagForced: entry.flagForced ?? false,
                                        language: entry.languageIETF ?? entry.language ?? 'eng',
                                        name: entry.name,
                                        type: entry.trackType,
                                        audio: entry.trackType === (0, _typesJs.TrackType).audio ? {
                                            ...entry.audio,
                                            samplingFrequency: entry.audio?.samplingFrequency ?? 8000,
                                            channels: entry.audio?.channels ?? 1
                                        } : undefined,
                                        video: entry.trackType === (0, _typesJs.TrackType).video && entry.video ? videoInfo(entry.video) : undefined
                                    };
                                    if (stream.video && entry.defaultDuration && entry.defaultDuration > 0) stream.video = {
                                        ...stream.video,
                                        frameRate: 1e9 / entry.defaultDuration
                                    };
                                    if (entry.uid) this.tracksByUid.set(this.uidKey(entry.uid), stream);
                                    this.metadata.addStreamInfo(stream);
                                });
                                const audioTrack = entries.filter((entry)=>entry.trackType === (0, _typesJs.TrackType).audio && entry.flagEnabled !== false).reduce((acc, cur)=>{
                                    if (!acc) return cur;
                                    const currentDefault = cur.flagDefault ?? true;
                                    const previousDefault = acc.flagDefault ?? true;
                                    if (currentDefault !== previousDefault) return currentDefault ? cur : acc;
                                    if (cur.trackNumber < acc.trackNumber) return cur;
                                    return acc;
                                }, null);
                                if (audioTrack) {
                                    if (audioTrack.uid) this.selectedAudioTrackUid = this.uidKey(audioTrack.uid);
                                    this.metadata.setFormat('codec', audioTrack.codecID.replace(/^A_/, ''));
                                    this.metadata.setFormat('hasAudio', true);
                                    this.metadata.setFormat('sampleRate', audioTrack.audio?.outputSamplingFrequency ?? audioTrack.audio?.samplingFrequency ?? 8000);
                                    this.metadata.setFormat('numberOfChannels', audioTrack.audio?.channels ?? 1);
                                    if (audioTrack.audio?.bitDepth !== undefined) this.metadata.setFormat('bitsPerSample', audioTrack.audio.bitDepth);
                                }
                            }
                        }
                        break;
                    case 0x7373:
                        {
                            // One Tag, released before the next sibling.
                            const tag = event.value;
                            const target = tag.target;
                            for (const uid of target?.tagTrackUID ?? []){
                                const key = this.uidKey(uid);
                                if (key !== '0') {
                                    const statistics = this.trackStatistics.get(key) ?? new Map();
                                    for (const simpleTag of tag.simpleTags ?? [])if (simpleTag.name && typeof simpleTag.string === 'string') statistics.set(simpleTag.name.toUpperCase(), simpleTag.string);
                                    this.trackStatistics.set(key, statistics);
                                }
                            }
                            const targetType = target?.targetTypeValue !== undefined ? targetTypes[target.targetTypeValue] ?? 'track' : target?.targetType ?? 'track';
                            const isTrackTarget = targetType.toLowerCase() === 'track';
                            const targetUidKeys = (target?.tagTrackUID ?? []).map((uid)=>this.uidKey(uid)).filter((uid)=>uid !== '0');
                            const selectedAudioUid = this.selectedAudioTrackUid;
                            const targetsSelectedAudio = selectedAudioUid !== undefined && targetUidKeys.includes(selectedAudioUid);
                            const isUntargeted = (target?.tagTrackUID ?? []).length === 0;
                            for (const simpleTag of tag.simpleTags ?? []){
                                const value = simpleTag.string ?? simpleTag.binary;
                                if (simpleTag.name && value !== undefined) {
                                    const nameUpper = simpleTag.name.toUpperCase();
                                    if (isTrackTarget && nameUpper === 'ALBUM') {
                                        this.addNativeTag('track:ALBUM', value);
                                        this.albumCandidates.push({
                                            value,
                                            targetUIDs: targetUidKeys,
                                            untargeted: isUntargeted
                                        });
                                    } else if (isTrackTarget && (nameUpper === 'DATE' || nameUpper === 'DISC' || nameUpper === 'COMPOSER' || nameUpper === 'ALBUM_ARTIST')) {
                                        // Map track-level tags only when they target the selected audio track (or are untargeted).
                                        // Tags targeting other tracks are preserved as native tags only.
                                        if (selectedAudioUid !== undefined && !targetsSelectedAudio && !isUntargeted) this.addNativeTag(`track:${simpleTag.name}`, value);
                                        else await this.addTag(`${targetType}:${simpleTag.name}`, value);
                                    } else await this.addTag(`${targetType}:${simpleTag.name}`, value);
                                }
                            }
                            break;
                        }
                    case 0x4660:
                        if (event.element.parent) attachmentMimeTypes.set(event.element.parent, event.value);
                        break;
                    case 0x61a7:
                        {
                            // One AttachedFile, released before the next sibling.
                            const file = event.value;
                            if (file.mimeType?.startsWith('image/')) {
                                if (isCompleteFile(file)) await this.addTag('picture', {
                                    data: file.data,
                                    format: file.mimeType,
                                    description: file.description,
                                    name: file.name
                                });
                                else this.metadata.addWarning('Ignoring incomplete Matroska image attachment');
                            }
                            break;
                        }
                }
            }
        });
        this.applyTrackStatistics();
        await this.resolveTrackAlbum();
    }
    addNativeTag(tagId, value) {
        this.metadata.registerTagType('matroska');
        if (!this.metadata.native.matroska) this.metadata.native.matroska = [];
        this.metadata.native.matroska.push({
            id: tagId,
            value
        });
    }
    async resolveTrackAlbum() {
        if (this.albumCandidates.length === 0) return;
        const selectedAudioUid = this.selectedAudioTrackUid;
        const targetsSelectedAudio = (candidate)=>selectedAudioUid !== undefined && candidate.targetUIDs.includes(selectedAudioUid);
        const targetsVideoOnly = (candidate)=>candidate.targetUIDs.length > 0 && candidate.targetUIDs.every((uid)=>this.tracksByUid.get(uid)?.type === (0, _typesJs.TrackType).video);
        const selected = this.albumCandidates.findLast(targetsSelectedAudio) ?? this.albumCandidates.findLast((candidate)=>candidate.untargeted) ?? this.albumCandidates.findLast((candidate)=>!targetsVideoOnly(candidate)) ?? this.albumCandidates[this.albumCandidates.length - 1];
        if (this.metadata.common.album === undefined) await this.metadata.postMap('matroska', {
            id: 'album',
            value: selected.value
        });
    }
    uidKey(uid) {
        return Array.from(uid, (byte)=>byte.toString(16).padStart(2, '0')).join('').replace(/^0+/, '') || '0';
    }
    applyTrackStatistics() {
        for (const [uid, tags] of this.trackStatistics){
            const track = this.tracksByUid.get(uid);
            if (!track) continue;
            const duration = tags.get('DURATION')?.match(/^(\d+):([0-5]\d):([0-5]\d(?:\.\d+)?)$/);
            if (duration) {
                const seconds = Number(duration[1]) * 3600 + Number(duration[2]) * 60 + Number(duration[3]);
                if (Number.isFinite(seconds) && seconds > 0) track.duration = seconds;
            }
            const number = (name)=>{
                const value = tags.get(name);
                if (value && /^\d+$/.test(value)) {
                    const result = Number(value);
                    if (Number.isSafeInteger(result) && result >= 0) return result;
                }
                return undefined;
            };
            const bitrate = number('BPS');
            const size = number('NUMBER_OF_BYTES');
            if (bitrate !== undefined && bitrate > 0) track.bitrate = bitrate;
            else if (size !== undefined && track.duration) track.bitrate = size * 8 / track.duration;
            const frames = number('NUMBER_OF_FRAMES');
            if (track.video && frames !== undefined && frames > 0 && track.duration) track.video.frameRate ??= frames / track.duration;
        }
    }
    async addTag(tagId, value) {
        await this.metadata.addTag('matroska', tagId, value);
    }
}

},{"debug":"4XIdh","../common/BasicParser.js":"91dLC","../ebml/EbmlIterator.js":"3w3iz","./MatroskaDtd.js":"BJwL4","./types.js":"1emm8","@parcel/transformer-js/src/esmodule-helpers.js":"53hI8"}],"3w3iz":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "EbmlContentError", ()=>EbmlContentError);
parcelHelpers.export(exports, "ParseAction", ()=>ParseAction);
/**
 * Extensible Binary Meta Language (EBML) iterator
 * https://en.wikipedia.org/wiki/Extensible_Binary_Meta_Language
 * http://matroska.sourceforge.net/technical/specs/rfc/index.html
 *
 * WEBM VP8 AUDIO FILE
 */ parcelHelpers.export(exports, "EbmlIterator", ()=>EbmlIterator);
parcelHelpers.export(exports, "getElementPath", ()=>getElementPath);
var _debug = require("debug");
var _debugDefault = parcelHelpers.interopDefault(_debug);
var _strtok3 = require("strtok3");
var _tokenTypes = require("token-types");
var _allocationJs = require("../common/Allocation.js");
var _parseErrorJs = require("../ParseError.js");
var _typesJs = require("./types.js");
const debug = (0, _debugDefault.default)('music-metadata:parser:ebml');
class EbmlContentError extends (0, _parseErrorJs.makeUnexpectedFileContentError)('EBML') {
}
const ParseAction = {
    ReadNext: 0,
    IgnoreElement: 2,
    SkipSiblings: 3,
    TerminateParsing: 4,
    SkipElement: 5 // Consider the element has read, assume position is at the next element
};
class EbmlIterator {
    options;
    parserMap = new Map();
    ebmlMaxIDLength = 4;
    ebmlMaxSizeLength = 8;
    tokenizer;
    elementHeader;
    /**
     * @param {ITokenizer} tokenizer Input
     * @param tokenizer
     */ constructor(tokenizer, options = {}){
        this.options = options;
        this.tokenizer = tokenizer;
        const maxMemoryAllocation = (0, _allocationJs.getMaxMemoryAllocation)(options);
        this.elementHeader = new Uint8Array(Math.min(12, maxMemoryAllocation));
        this.parserMap.set((0, _typesJs.DataType).uint, (e)=>this.readUint(e));
        this.parserMap.set((0, _typesJs.DataType).int, (e)=>this.readInt(e));
        this.parserMap.set((0, _typesJs.DataType).string, (e)=>this.readString(e));
        this.parserMap.set((0, _typesJs.DataType).binary, (e)=>this.readBuffer(e));
        this.parserMap.set((0, _typesJs.DataType).uid, async (e)=>this.readBuffer(e));
        this.parserMap.set((0, _typesJs.DataType).bool, (e)=>this.readFlag(e));
        this.parserMap.set((0, _typesJs.DataType).float, (e)=>this.readFloat(e));
    }
    async iterate(dtdElement, posDone, listener) {
        const root = {
            ...dtdElement,
            id: 0,
            parent: undefined
        };
        const tree = await this.parseContainer(root, posDone, {
            startNext: listener.startNext,
            collect: listener.collect ?? (()=>true),
            elementValue: async (element, value, offset)=>{
                await listener.elementValue?.(element, value, offset);
                // The schema selects both the decoder and the event ID. Keep this bridge here,
                // rather than asserting unrelated domain types in each parser listener.
                await listener.onElement?.({
                    id: element.id,
                    element,
                    value,
                    offset
                });
            }
        }, listener.collect?.(root) ?? true);
        return tree;
    }
    async parseContainer(dtdElement, posDone, listener, collect) {
        const tree = {};
        while(this.tokenizer.position < posDone){
            let element;
            const elementPosition = this.tokenizer.position;
            try {
                element = await this.readElement();
            } catch (error) {
                if (error instanceof (0, _strtok3.EndOfStreamError)) break;
                throw error;
            }
            const definition = dtdElement.container?.[element.id];
            if (definition) {
                const child = {
                    ...definition,
                    id: element.id,
                    parent: dtdElement
                };
                const action = await listener.startNext(child);
                switch(action){
                    case ParseAction.ReadNext:
                        debug(`Read element: name=${getElementPath(child)}{id=0x${element.id.toString(16)}, container=${!!child.container}} at position=${elementPosition}`);
                        if (child.container) {
                            const childEnd = Math.min(posDone, this.tokenizer.fileInfo.size ?? Number.POSITIVE_INFINITY, element.len >= 0 ? this.tokenizer.position + element.len : posDone);
                            const res = await this.parseContainer(child, childEnd, listener, collect || listener.collect(child));
                            if (collect) this.collect(tree, child, res);
                            await listener.elementValue(child, res, elementPosition);
                        } else {
                            const parser = child.value === undefined ? undefined : this.parserMap.get(child.value);
                            if (typeof parser === 'function') {
                                // Validate before leaf readers allocate buffers or string tokens from the declared length.
                                const end = Math.min(posDone, this.tokenizer.fileInfo.size ?? Number.POSITIVE_INFINITY);
                                if (!Number.isSafeInteger(element.len) || element.len < 0 || element.len > end - this.tokenizer.position) throw new EbmlContentError(`Invalid element length: ${element.len}`);
                                const value = await parser(element);
                                if (collect) this.collect(tree, child, value);
                                await listener.elementValue(child, value, elementPosition);
                            } else {
                                if (!await this.ignore(element.len, posDone)) return tree;
                            }
                        }
                        break;
                    case ParseAction.SkipElement:
                        debug(`Go to next element: name=${getElementPath(child)}, element.id=0x${element.id}, container=${!!child.container} at position=${elementPosition}`);
                        break;
                    case ParseAction.IgnoreElement:
                        debug(`Ignore element: name=${getElementPath(child)}, element.id=0x${element.id}, container=${!!child.container} at position=${elementPosition}`);
                        if (!await this.ignore(element.len, posDone)) return tree;
                        break;
                    case ParseAction.SkipSiblings:
                        debug(`Ignore remaining container, at: name=${getElementPath(child)}, element.id=0x${element.id}, container=${!!child.container} at position=${elementPosition}`);
                        if (!await this.ignore(posDone - this.tokenizer.position, posDone)) return tree;
                        break;
                    case ParseAction.TerminateParsing:
                        debug(`Terminate parsing at element: name=${getElementPath(child)}, element.id=0x${element.id}, container=${!!child.container} at position=${elementPosition}`);
                        return tree;
                }
            } else switch(element.id){
                case 0xec:
                    if (!await this.ignore(element.len, posDone)) return tree;
                    break;
                default:
                    debug(`parseEbml: parent=${getElementPath(dtdElement)}, unknown child: id=${element.id.toString(16)} at position=${elementPosition}`);
                    if (!await this.ignore(element.len, posDone)) return tree;
            }
        }
        return tree;
    }
    collect(tree, element, value) {
        if (element.multiple) {
            const values = tree[element.name] ??= [];
            if (Array.isArray(values)) {
                if (values.length >= (0, _allocationJs.getMaxMetadataEntries)(this.options)) throw new EbmlContentError('Collected EBML element count exceeds entry limit');
                values.push(value);
            }
        } else tree[element.name] = value;
    }
    async ignore(length, posDone) {
        // Unknown-size EBML containers may advertise lengths above the safe integer range.
        // Bound skips by the enclosing container and known input before passing them to the tokenizer.
        const end = Math.min(posDone, this.tokenizer.fileInfo.size ?? Number.POSITIVE_INFINITY);
        const boundedLength = Math.min(length, end - this.tokenizer.position);
        if (!Number.isSafeInteger(boundedLength) || boundedLength < 0) throw new EbmlContentError(`Invalid element length: ${length}`);
        try {
            return await this.tokenizer.ignore(boundedLength) === boundedLength;
        } catch (error) {
            if (error instanceof (0, _strtok3.EndOfStreamError)) return false;
            throw error;
        }
    }
    async readVintData(maxLength) {
        const msb = await this.tokenizer.peekNumber((0, _tokenTypes.UINT8));
        let mask = 0x80;
        let oc = 1;
        // Calculate VINT_WIDTH
        while((msb & mask) === 0){
            if (oc > maxLength) throw new EbmlContentError('VINT value exceeding maximum size');
            ++oc;
            mask >>= 1;
        }
        const id = new Uint8Array(oc);
        await this.tokenizer.readBuffer(id);
        return id;
    }
    async readElement() {
        if ((0, _strtok3.isRandomAccessTokenizer)(this.tokenizer) && this.elementHeader.length === 12) {
            // RFC 8794 (July 2020), sections 4-6: an ID and size occupy at most 4 + 8 bytes.
            // Peek both VINTs together to avoid four separate file/network reads per element.
            // https://www.rfc-editor.org/rfc/rfc8794.html#section-4
            const available = await this.tokenizer.peekBuffer(this.elementHeader, {
                mayBeLess: true
            });
            const width = (offset, maximum)=>{
                if (offset >= available) throw new (0, _strtok3.EndOfStreamError)();
                for(let length = 1; length <= maximum; ++length)if ((this.elementHeader[offset] & 0x80 >> length - 1) !== 0) {
                    if (offset + length > available) throw new (0, _strtok3.EndOfStreamError)();
                    return length;
                }
                throw new EbmlContentError('VINT value exceeding maximum size');
            };
            const idLength = width(0, this.ebmlMaxIDLength);
            const sizeLength = width(idLength, this.ebmlMaxSizeLength);
            const id = readUIntBE(this.elementHeader.subarray(0, idLength), idLength);
            const lenField = this.elementHeader.subarray(idLength, idLength + sizeLength);
            lenField[0] ^= 0x80 >> sizeLength - 1;
            this.tokenizer.setPosition(this.tokenizer.position + idLength + sizeLength);
            return {
                id,
                len: readUIntBE(lenField, sizeLength)
            };
        }
        const id = await this.readVintData(this.ebmlMaxIDLength);
        const lenField = await this.readVintData(this.ebmlMaxSizeLength);
        lenField[0] ^= 0x80 >> lenField.length - 1;
        return {
            id: readUIntBE(id, id.length),
            len: readUIntBE(lenField, lenField.length)
        };
    }
    async readFloat(e) {
        switch(e.len){
            case 0:
                return 0.0;
            case 4:
                return this.tokenizer.readNumber((0, _tokenTypes.Float32_BE));
            case 8:
                return this.tokenizer.readNumber((0, _tokenTypes.Float64_BE));
            case 10:
                return this.tokenizer.readNumber((0, _tokenTypes.Float64_BE));
            default:
                throw new EbmlContentError(`Invalid IEEE-754 float length: ${e.len}`);
        }
    }
    async readFlag(e) {
        return await this.readUint(e) === 1;
    }
    async readUint(e) {
        const buf = await this.readBuffer(e);
        return readUIntBE(buf, e.len);
    }
    async readInt(e) {
        const buffer = await this.readBuffer(e);
        const value = readUIntBeAsBigInt(buffer, e.len);
        return Number(buffer[0] & 0x80 ? value - (1n << BigInt(8 * e.len)) : value);
    }
    async readString(e) {
        const buf = await this.readBuffer(e);
        const rawString = new (0, _tokenTypes.StringType)(e.len, 'utf-8').get(buf, 0);
        return rawString.replace(/\x00.*$/g, '');
    }
    async readBuffer(e) {
        return (0, _allocationJs.readBuffer)(this.tokenizer, e.len, this.options, undefined, (message)=>new EbmlContentError(message));
    }
}
function readUIntBE(buf, len) {
    return Number(readUIntBeAsBigInt(buf, len));
}
/**
 * Reeds an unsigned integer from a big endian buffer of length `len`
 * @param buf Buffer to decode from
 * @param len Number of bytes
 * @private
 */ function readUIntBeAsBigInt(buf, len) {
    const normalizedNumber = new Uint8Array(8);
    const cleanNumber = buf.subarray(0, len);
    try {
        normalizedNumber.set(cleanNumber, 8 - len);
        return _tokenTypes.UINT64_BE.get(normalizedNumber, 0);
    } catch (_error) {
        return BigInt(-1);
    }
}
function getElementPath(element) {
    let path = '';
    if (element.parent && element.parent.name !== 'dtd') path += `${getElementPath(element.parent)}/`;
    return path + element.name;
}

},{"debug":"4XIdh","strtok3":"7L6Gs","token-types":"al35Q","../common/Allocation.js":"8ZVyl","../ParseError.js":"E03ox","./types.js":"lLaD6","@parcel/transformer-js/src/esmodule-helpers.js":"53hI8"}],"lLaD6":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DataType", ()=>DataType);
const DataType = {
    string: 0,
    uint: 1,
    uid: 2,
    bool: 3,
    binary: 4,
    float: 5,
    int: 6
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"53hI8"}],"BJwL4":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "matroskaDtd", ()=>matroskaDtd);
var _typesJs = require("../ebml/types.js");
const matroskaDtd = {
    name: 'dtd',
    container: {
        0x1a45dfa3: {
            // 5.1
            name: 'ebml',
            container: {
                0x4286: {
                    name: 'ebmlVersion',
                    value: (0, _typesJs.DataType).uint
                },
                0x42f7: {
                    name: 'ebmlReadVersion',
                    value: (0, _typesJs.DataType).uint
                },
                0x42f2: {
                    name: 'ebmlMaxIDWidth',
                    value: (0, _typesJs.DataType).uint
                },
                0x42f3: {
                    name: 'ebmlMaxSizeWidth',
                    value: (0, _typesJs.DataType).uint
                },
                0x4282: {
                    name: 'docType',
                    value: (0, _typesJs.DataType).string
                },
                0x4287: {
                    name: 'docTypeVersion',
                    value: (0, _typesJs.DataType).uint
                },
                0x4285: {
                    name: 'docTypeReadVersion',
                    value: (0, _typesJs.DataType).uint
                } // 5.1.7
            }
        },
        // Matroska segments
        0x18538067: {
            name: 'segment',
            container: {
                // Meta Seek Information (also known as MetaSeek)
                0x114d9b74: {
                    name: 'seekHead',
                    multiple: true,
                    container: {
                        0x4dbb: {
                            name: 'seek',
                            multiple: true,
                            container: {
                                0x53ab: {
                                    name: 'id',
                                    value: (0, _typesJs.DataType).binary
                                },
                                0x53ac: {
                                    name: 'position',
                                    value: (0, _typesJs.DataType).uint
                                }
                            }
                        }
                    }
                },
                // Segment Information
                0x1549a966: {
                    name: 'info',
                    container: {
                        0x73a4: {
                            name: 'uid',
                            value: (0, _typesJs.DataType).uid
                        },
                        0x7384: {
                            name: 'filename',
                            value: (0, _typesJs.DataType).string
                        },
                        0x3cb923: {
                            name: 'prevUID',
                            value: (0, _typesJs.DataType).uid
                        },
                        0x3c83ab: {
                            name: 'prevFilename',
                            value: (0, _typesJs.DataType).string
                        },
                        0x3eb923: {
                            name: 'nextUID',
                            value: (0, _typesJs.DataType).uid
                        },
                        0x3e83bb: {
                            name: 'nextFilename',
                            value: (0, _typesJs.DataType).string
                        },
                        0x2ad7b1: {
                            name: 'timecodeScale',
                            value: (0, _typesJs.DataType).uint
                        },
                        0x4489: {
                            name: 'duration',
                            value: (0, _typesJs.DataType).float
                        },
                        0x4461: {
                            name: 'dateUTC',
                            value: (0, _typesJs.DataType).int
                        },
                        0x7ba9: {
                            name: 'title',
                            value: (0, _typesJs.DataType).string
                        },
                        0x4d80: {
                            name: 'muxingApp',
                            value: (0, _typesJs.DataType).string
                        },
                        0x5741: {
                            name: 'writingApp',
                            value: (0, _typesJs.DataType).string
                        }
                    }
                },
                // Cluster
                0x1f43b675: {
                    name: 'cluster',
                    multiple: true,
                    container: {
                        0xe7: {
                            name: 'timecode',
                            value: (0, _typesJs.DataType).uint
                        },
                        0x5854: {
                            name: 'silentTracks',
                            container: {
                                0x58d7: {
                                    name: 'trackNumber',
                                    value: (0, _typesJs.DataType).uint,
                                    multiple: true
                                }
                            }
                        },
                        0xa7: {
                            name: 'position',
                            value: (0, _typesJs.DataType).uint
                        },
                        0xab: {
                            name: 'prevSize',
                            value: (0, _typesJs.DataType).uint
                        },
                        0xa0: {
                            name: 'blockGroup',
                            multiple: true
                        },
                        0xa3: {
                            name: 'simpleBlock',
                            value: (0, _typesJs.DataType).binary,
                            multiple: true
                        }
                    }
                },
                // Track
                0x1654ae6b: {
                    name: 'tracks',
                    container: {
                        0xae: {
                            name: 'entries',
                            multiple: true,
                            container: {
                                0xd7: {
                                    name: 'trackNumber',
                                    value: (0, _typesJs.DataType).uint
                                },
                                0x73c5: {
                                    name: 'uid',
                                    value: (0, _typesJs.DataType).uid
                                },
                                0x83: {
                                    name: 'trackType',
                                    value: (0, _typesJs.DataType).uint
                                },
                                0xb9: {
                                    name: 'flagEnabled',
                                    value: (0, _typesJs.DataType).bool
                                },
                                0x88: {
                                    name: 'flagDefault',
                                    value: (0, _typesJs.DataType).bool
                                },
                                0x55aa: {
                                    name: 'flagForced',
                                    value: (0, _typesJs.DataType).bool
                                },
                                0x9c: {
                                    name: 'flagLacing',
                                    value: (0, _typesJs.DataType).bool
                                },
                                0x6de7: {
                                    name: 'minCache',
                                    value: (0, _typesJs.DataType).uint
                                },
                                0x6df8: {
                                    name: 'maxCache',
                                    value: (0, _typesJs.DataType).uint
                                },
                                0x23e383: {
                                    name: 'defaultDuration',
                                    value: (0, _typesJs.DataType).uint
                                },
                                0x23314f: {
                                    name: 'trackTimecodeScale',
                                    value: (0, _typesJs.DataType).float
                                },
                                0x536e: {
                                    name: 'name',
                                    value: (0, _typesJs.DataType).string
                                },
                                0x22b59c: {
                                    name: 'language',
                                    value: (0, _typesJs.DataType).string
                                },
                                0x22b59d: {
                                    name: 'languageIETF',
                                    value: (0, _typesJs.DataType).string
                                },
                                0x86: {
                                    name: 'codecID',
                                    value: (0, _typesJs.DataType).string
                                },
                                0x63a2: {
                                    name: 'codecPrivate',
                                    value: (0, _typesJs.DataType).binary
                                },
                                0x258688: {
                                    name: 'codecName',
                                    value: (0, _typesJs.DataType).string
                                },
                                0x3a9697: {
                                    name: 'codecSettings',
                                    value: (0, _typesJs.DataType).string
                                },
                                0x3b4040: {
                                    name: 'codecInfoUrl',
                                    value: (0, _typesJs.DataType).string,
                                    multiple: true
                                },
                                0x26b240: {
                                    name: 'codecDownloadUrl',
                                    value: (0, _typesJs.DataType).string,
                                    multiple: true
                                },
                                0xaa: {
                                    name: 'codecDecodeAll',
                                    value: (0, _typesJs.DataType).bool
                                },
                                0x6fab: {
                                    name: 'trackOverlay',
                                    value: (0, _typesJs.DataType).uint,
                                    multiple: true
                                },
                                // Video
                                0xe0: {
                                    name: 'video',
                                    container: {
                                        0x9a: {
                                            name: 'flagInterlaced',
                                            value: (0, _typesJs.DataType).uint
                                        },
                                        0x53b8: {
                                            name: 'stereoMode',
                                            value: (0, _typesJs.DataType).uint
                                        },
                                        0xb0: {
                                            name: 'pixelWidth',
                                            value: (0, _typesJs.DataType).uint
                                        },
                                        0xba: {
                                            name: 'pixelHeight',
                                            value: (0, _typesJs.DataType).uint
                                        },
                                        0x54b0: {
                                            name: 'displayWidth',
                                            value: (0, _typesJs.DataType).uint
                                        },
                                        0x54ba: {
                                            name: 'displayHeight',
                                            value: (0, _typesJs.DataType).uint
                                        },
                                        0x54b2: {
                                            name: 'displayUnit',
                                            value: (0, _typesJs.DataType).uint
                                        },
                                        0x54b3: {
                                            name: 'aspectRatioType',
                                            value: (0, _typesJs.DataType).uint
                                        },
                                        0x2eb524: {
                                            name: 'colourSpace',
                                            value: (0, _typesJs.DataType).binary
                                        },
                                        0x2fb523: {
                                            name: 'gammaValue',
                                            value: (0, _typesJs.DataType).float
                                        }
                                    }
                                },
                                // Audio
                                0xe1: {
                                    name: 'audio',
                                    container: {
                                        0xb5: {
                                            name: 'samplingFrequency',
                                            value: (0, _typesJs.DataType).float
                                        },
                                        0x78b5: {
                                            name: 'outputSamplingFrequency',
                                            value: (0, _typesJs.DataType).float
                                        },
                                        0x9f: {
                                            name: 'channels',
                                            value: (0, _typesJs.DataType).uint
                                        },
                                        0x7d7b: {
                                            name: 'channelPositions',
                                            value: (0, _typesJs.DataType).binary
                                        },
                                        0x6264: {
                                            name: 'bitDepth',
                                            value: (0, _typesJs.DataType).uint
                                        }
                                    }
                                },
                                // Content Encoding
                                0x6d80: {
                                    name: 'contentEncodings',
                                    container: {
                                        0x6240: {
                                            name: 'contentEncoding',
                                            multiple: true,
                                            container: {
                                                0x5031: {
                                                    name: 'order',
                                                    value: (0, _typesJs.DataType).uint
                                                },
                                                0x5032: {
                                                    name: 'scope',
                                                    value: (0, _typesJs.DataType).uint
                                                },
                                                0x5033: {
                                                    name: 'type',
                                                    value: (0, _typesJs.DataType).uint
                                                },
                                                0x5034: {
                                                    name: 'contentCompression',
                                                    container: {
                                                        0x4254: {
                                                            name: 'contentCompAlgo',
                                                            value: (0, _typesJs.DataType).uint
                                                        },
                                                        0x4255: {
                                                            name: 'contentCompSettings',
                                                            value: (0, _typesJs.DataType).binary
                                                        }
                                                    }
                                                },
                                                0x5035: {
                                                    name: 'contentEncryption',
                                                    container: {
                                                        0x47e1: {
                                                            name: 'contentEncAlgo',
                                                            value: (0, _typesJs.DataType).uint
                                                        },
                                                        0x47e2: {
                                                            name: 'contentEncKeyID',
                                                            value: (0, _typesJs.DataType).binary
                                                        },
                                                        0x47e3: {
                                                            name: 'contentSignature',
                                                            value: (0, _typesJs.DataType).binary
                                                        },
                                                        0x47e4: {
                                                            name: 'contentSigKeyID',
                                                            value: (0, _typesJs.DataType).binary
                                                        },
                                                        0x47e5: {
                                                            name: 'contentSigAlgo',
                                                            value: (0, _typesJs.DataType).uint
                                                        },
                                                        0x47e6: {
                                                            name: 'contentSigHashAlgo',
                                                            value: (0, _typesJs.DataType).uint
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                // Cueing Data
                0x1c53bb6b: {
                    name: 'cues',
                    container: {
                        0xbb: {
                            name: 'cuePoint',
                            multiple: true,
                            container: {
                                0xb3: {
                                    name: 'cueTime',
                                    value: (0, _typesJs.DataType).uint
                                },
                                0xb7: {
                                    name: 'positions',
                                    multiple: true,
                                    container: {
                                        0xf7: {
                                            name: 'track',
                                            value: (0, _typesJs.DataType).uint
                                        },
                                        0xf1: {
                                            name: 'clusterPosition',
                                            value: (0, _typesJs.DataType).uint
                                        },
                                        0x5378: {
                                            name: 'blockNumber',
                                            value: (0, _typesJs.DataType).uint
                                        },
                                        0xea: {
                                            name: 'codecState',
                                            value: (0, _typesJs.DataType).uint
                                        },
                                        0xdb: {
                                            name: 'reference',
                                            multiple: true,
                                            container: {
                                                0x96: {
                                                    name: 'time',
                                                    value: (0, _typesJs.DataType).uint
                                                },
                                                0x97: {
                                                    name: 'cluster',
                                                    value: (0, _typesJs.DataType).uint
                                                },
                                                0x535f: {
                                                    name: 'number',
                                                    value: (0, _typesJs.DataType).uint
                                                },
                                                0xeb: {
                                                    name: 'codecState',
                                                    value: (0, _typesJs.DataType).uint
                                                }
                                            }
                                        },
                                        0xf0: {
                                            name: 'relativePosition',
                                            value: (0, _typesJs.DataType).uint
                                        } // extended
                                    }
                                }
                            }
                        }
                    }
                },
                // Attachment
                0x1941a469: {
                    name: 'attachments',
                    container: {
                        0x61a7: {
                            name: 'attachedFiles',
                            multiple: true,
                            container: {
                                0x467e: {
                                    name: 'description',
                                    value: (0, _typesJs.DataType).string
                                },
                                0x466e: {
                                    name: 'name',
                                    value: (0, _typesJs.DataType).string
                                },
                                0x4660: {
                                    name: 'mimeType',
                                    value: (0, _typesJs.DataType).string
                                },
                                0x465c: {
                                    name: 'data',
                                    value: (0, _typesJs.DataType).binary
                                },
                                0x46ae: {
                                    name: 'uid',
                                    value: (0, _typesJs.DataType).uid
                                }
                            }
                        }
                    }
                },
                // Chapters
                0x1043a770: {
                    name: 'chapters',
                    container: {
                        0x45b9: {
                            name: 'editionEntry',
                            multiple: true,
                            container: {
                                0xb6: {
                                    name: 'chapterAtom',
                                    multiple: true,
                                    container: {
                                        0x73c4: {
                                            name: 'uid',
                                            value: (0, _typesJs.DataType).uid
                                        },
                                        0x91: {
                                            name: 'timeStart',
                                            value: (0, _typesJs.DataType).uint
                                        },
                                        0x92: {
                                            name: 'timeEnd',
                                            value: (0, _typesJs.DataType).uint
                                        },
                                        0x98: {
                                            name: 'hidden',
                                            value: (0, _typesJs.DataType).bool
                                        },
                                        0x4598: {
                                            name: 'enabled',
                                            value: (0, _typesJs.DataType).bool
                                        },
                                        0x8f: {
                                            name: 'track',
                                            container: {
                                                0x89: {
                                                    name: 'trackUID',
                                                    value: (0, _typesJs.DataType).uid,
                                                    multiple: true
                                                }
                                            }
                                        },
                                        0x80: {
                                            name: 'display',
                                            multiple: true,
                                            container: {
                                                0x85: {
                                                    name: 'string',
                                                    value: (0, _typesJs.DataType).string
                                                },
                                                0x437c: {
                                                    name: 'language',
                                                    value: (0, _typesJs.DataType).string,
                                                    multiple: true
                                                },
                                                0x437e: {
                                                    name: 'country',
                                                    value: (0, _typesJs.DataType).string,
                                                    multiple: true
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                // Tagging
                0x1254c367: {
                    name: 'tags',
                    multiple: true,
                    container: {
                        0x7373: {
                            name: 'tag',
                            multiple: true,
                            container: {
                                0x63c0: {
                                    name: 'target',
                                    container: {
                                        0x63c5: {
                                            name: 'tagTrackUID',
                                            value: (0, _typesJs.DataType).uid,
                                            multiple: true
                                        },
                                        0x63c4: {
                                            name: 'tagChapterUID',
                                            value: (0, _typesJs.DataType).uid,
                                            multiple: true
                                        },
                                        0x63c6: {
                                            name: 'tagAttachmentUID',
                                            value: (0, _typesJs.DataType).uid,
                                            multiple: true
                                        },
                                        0x63ca: {
                                            name: 'targetType',
                                            value: (0, _typesJs.DataType).string
                                        },
                                        0x68ca: {
                                            name: 'targetTypeValue',
                                            value: (0, _typesJs.DataType).uint
                                        },
                                        0x63c9: {
                                            name: 'tagEditionUID',
                                            value: (0, _typesJs.DataType).uid,
                                            multiple: true
                                        } // extended
                                    }
                                },
                                0x67c8: {
                                    name: 'simpleTags',
                                    multiple: true,
                                    container: {
                                        0x45a3: {
                                            name: 'name',
                                            value: (0, _typesJs.DataType).string
                                        },
                                        0x4487: {
                                            name: 'string',
                                            value: (0, _typesJs.DataType).string
                                        },
                                        0x4485: {
                                            name: 'binary',
                                            value: (0, _typesJs.DataType).binary
                                        },
                                        0x447a: {
                                            name: 'language',
                                            value: (0, _typesJs.DataType).string
                                        },
                                        0x447b: {
                                            name: 'languageIETF',
                                            value: (0, _typesJs.DataType).string
                                        },
                                        0x4484: {
                                            name: 'default',
                                            value: (0, _typesJs.DataType).bool
                                        } // extended
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
};

},{"../ebml/types.js":"lLaD6","@parcel/transformer-js/src/esmodule-helpers.js":"53hI8"}],"1emm8":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "TrackType", ()=>(0, _typeJs.TrackType));
parcelHelpers.export(exports, "TrackTypeValueToKeyMap", ()=>(0, _typeJs.TrackTypeValueToKeyMap));
parcelHelpers.export(exports, "TargetType", ()=>TargetType);
var _typeJs = require("../type.js");
const TargetType = {
    10: 'shot',
    20: 'scene',
    30: 'track',
    40: 'part',
    50: 'album',
    60: 'edition',
    70: 'collection'
};

},{"../type.js":"a50Lj","@parcel/transformer-js/src/esmodule-helpers.js":"53hI8"}]},["a30JZ"], null, "parcelRequire2853", {})

//# sourceMappingURL=MatroskaParser.d586c9a3.js.map
