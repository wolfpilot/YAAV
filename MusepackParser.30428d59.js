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
})({"2zEco":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SERVER_PORT = 3000;
var HMR_SECURE = false;
var HMR_ENV_HASH = "439701173a9199ea";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "58c58b7430428d59";
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

},{}],"farJo":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MusepackParser", ()=>MusepackParser);
var _debug = require("debug");
var _debugDefault = parcelHelpers.interopDefault(_debug);
var _tokenTypes = require("token-types");
var _abstractID3ParserJs = require("../id3v2/AbstractID3Parser.js");
var _musepackConentErrorJs = require("./MusepackConentError.js");
var _mpcSv7ParserJs = require("./sv7/MpcSv7Parser.js");
var _mpcSv8ParserJs = require("./sv8/MpcSv8Parser.js");
const debug = (0, _debugDefault.default)('music-metadata:parser:musepack');
class MusepackParser extends (0, _abstractID3ParserJs.AbstractID3Parser) {
    async postId3v2Parse() {
        const signature = await this.tokenizer.peekToken(new _tokenTypes.StringType(3, 'latin1'));
        let mpcParser;
        switch(signature){
            case 'MP+':
                debug('Stream-version 7');
                mpcParser = new (0, _mpcSv7ParserJs.MpcSv7Parser)(this.metadata, this.tokenizer, this.options);
                break;
            case 'MPC':
                debug('Stream-version 8');
                mpcParser = new (0, _mpcSv8ParserJs.MpcSv8Parser)(this.metadata, this.tokenizer, this.options);
                break;
            default:
                throw new (0, _musepackConentErrorJs.MusepackContentError)('Invalid signature prefix');
        }
        this.metadata.setAudioOnly();
        return mpcParser.parse();
    }
}

},{"debug":"4XIdh","token-types":"al35Q","../id3v2/AbstractID3Parser.js":"bZKYA","./MusepackConentError.js":"9Lac7","./sv7/MpcSv7Parser.js":"7VJSr","./sv8/MpcSv8Parser.js":"jWCQw","@parcel/transformer-js/src/esmodule-helpers.js":"53hI8"}],"bZKYA":[function(require,module,exports,__globalThis) {
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

},{"debug":"4XIdh","strtok3":"7L6Gs","../common/BasicParser.js":"91dLC","../id3v1/ID3v1Parser.js":"fWBrl","./ID3v2Parser.js":"6YZCj","./ID3v2Token.js":"eUTtS","@parcel/transformer-js/src/esmodule-helpers.js":"53hI8"}],"9Lac7":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MusepackContentError", ()=>MusepackContentError);
var _parseErrorJs = require("../ParseError.js");
class MusepackContentError extends (0, _parseErrorJs.makeUnexpectedFileContentError)('Musepack') {
}

},{"../ParseError.js":"E03ox","@parcel/transformer-js/src/esmodule-helpers.js":"53hI8"}],"7VJSr":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MpcSv7Parser", ()=>MpcSv7Parser);
var _debug = require("debug");
var _debugDefault = parcelHelpers.interopDefault(_debug);
var _apev2ParserJs = require("../../apev2/APEv2Parser.js");
var _basicParserJs = require("../../common/BasicParser.js");
var _musepackConentErrorJs = require("../MusepackConentError.js");
var _bitReaderJs = require("./BitReader.js");
var _streamVersion7Js = require("./StreamVersion7.js");
const debug = (0, _debugDefault.default)('music-metadata:parser:musepack');
class MpcSv7Parser extends (0, _basicParserJs.BasicParser) {
    bitreader = null;
    audioLength = 0;
    duration = null;
    async parse() {
        const header = await this.tokenizer.readToken(_streamVersion7Js.Header);
        if (header.signature !== 'MP+') throw new (0, _musepackConentErrorJs.MusepackContentError)('Unexpected magic number');
        debug(`stream-version=${header.streamMajorVersion}.${header.streamMinorVersion}`);
        this.metadata.setFormat('container', 'Musepack, SV7');
        this.metadata.setFormat('sampleRate', header.sampleFrequency);
        const numberOfSamples = 1152 * (header.frameCount - 1) + header.lastFrameLength;
        this.metadata.setFormat('numberOfSamples', numberOfSamples);
        this.duration = numberOfSamples / header.sampleFrequency;
        this.metadata.setFormat('duration', this.duration);
        this.bitreader = new (0, _bitReaderJs.BitReader)(this.tokenizer);
        this.metadata.setFormat('numberOfChannels', header.midSideStereo || header.intensityStereo ? 2 : 1);
        const version = await this.bitreader.read(8);
        this.metadata.setFormat('codec', (version / 100).toFixed(2));
        await this.skipAudioData(header.frameCount);
        debug(`End of audio stream, switching to APEv2, offset=${this.tokenizer.position}`);
        return (0, _apev2ParserJs.tryParseApeHeader)(this.metadata, this.tokenizer, this.options);
    }
    async skipAudioData(frameCount) {
        while(frameCount-- > 0){
            const frameLength = await this.bitreader.read(20);
            this.audioLength += 20 + frameLength;
            await this.bitreader.ignore(frameLength);
        }
        // last frame
        const lastFrameLength = await this.bitreader.read(11);
        this.audioLength += lastFrameLength;
        if (this.duration !== null) this.metadata.setFormat('bitrate', this.audioLength / this.duration);
    }
}

},{"debug":"4XIdh","../../apev2/APEv2Parser.js":"1ZQcJ","../../common/BasicParser.js":"91dLC","../MusepackConentError.js":"9Lac7","./BitReader.js":"Wgn5z","./StreamVersion7.js":"hJxGN","@parcel/transformer-js/src/esmodule-helpers.js":"53hI8"}],"Wgn5z":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "BitReader", ()=>BitReader);
var _tokenTypes = require("token-types");
class BitReader {
    pos = 0;
    dword = null;
    tokenizer;
    constructor(tokenizer){
        this.tokenizer = tokenizer;
    }
    /**
     *
     * @param bits 1..30 bits
     */ async read(bits) {
        while(this.dword === null)this.dword = await this.tokenizer.readToken(_tokenTypes.UINT32_LE);
        let out = this.dword;
        this.pos += bits;
        if (this.pos < 32) {
            out >>>= 32 - this.pos;
            return out & (1 << bits) - 1;
        }
        this.pos -= 32;
        if (this.pos === 0) {
            this.dword = null;
            return out & (1 << bits) - 1;
        }
        this.dword = await this.tokenizer.readToken(_tokenTypes.UINT32_LE);
        if (this.pos) {
            out <<= this.pos;
            out |= this.dword >>> 32 - this.pos;
        }
        return out & (1 << bits) - 1;
    }
    async ignore(bits) {
        if (this.pos > 0) {
            const remaining = 32 - this.pos;
            this.dword = null;
            bits -= remaining;
            this.pos = 0;
        }
        const remainder = bits % 32;
        const numOfWords = (bits - remainder) / 32;
        await this.tokenizer.ignore(numOfWords * 4);
        return this.read(remainder);
    }
}

},{"token-types":"al35Q","@parcel/transformer-js/src/esmodule-helpers.js":"53hI8"}],"hJxGN":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Header", ()=>Header);
var _textCodec = require("@borewit/text-codec");
var _tokenTypes = require("token-types");
var _utilJs = require("../../common/Util.js");
const Header = {
    len: 24,
    get: (buf, off)=>{
        const header = {
            // word 0
            signature: (0, _textCodec.textDecode)(buf.subarray(off, off + 3), 'latin1'),
            // versionIndex number * 1000 (3.81 = 3810) (remember that 4-byte alignment causes this to take 4-bytes)
            streamMinorVersion: _utilJs.getBitAllignedNumber(buf, off + 3, 0, 4),
            streamMajorVersion: _utilJs.getBitAllignedNumber(buf, off + 3, 4, 4),
            // word 1
            frameCount: _tokenTypes.UINT32_LE.get(buf, off + 4),
            // word 2
            maxLevel: _tokenTypes.UINT16_LE.get(buf, off + 8),
            sampleFrequency: [
                44100,
                48000,
                37800,
                32000
            ][_utilJs.getBitAllignedNumber(buf, off + 10, 0, 2)],
            link: _utilJs.getBitAllignedNumber(buf, off + 10, 2, 2),
            profile: _utilJs.getBitAllignedNumber(buf, off + 10, 4, 4),
            maxBand: _utilJs.getBitAllignedNumber(buf, off + 11, 0, 6),
            intensityStereo: _utilJs.isBitSet(buf, off + 11, 6),
            midSideStereo: _utilJs.isBitSet(buf, off + 11, 7),
            // word 3
            titlePeak: _tokenTypes.UINT16_LE.get(buf, off + 12),
            titleGain: _tokenTypes.UINT16_LE.get(buf, off + 14),
            // word 4
            albumPeak: _tokenTypes.UINT16_LE.get(buf, off + 16),
            albumGain: _tokenTypes.UINT16_LE.get(buf, off + 18),
            // word
            lastFrameLength: _tokenTypes.UINT32_LE.get(buf, off + 20) >>> 20 & 0x7ff,
            trueGapless: _utilJs.isBitSet(buf, off + 23, 0)
        };
        header.lastFrameLength = header.trueGapless ? _tokenTypes.UINT32_LE.get(buf, 20) >>> 20 & 0x7ff : 0;
        return header;
    }
};

},{"@borewit/text-codec":"104u3","token-types":"al35Q","../../common/Util.js":"Q4yiL","@parcel/transformer-js/src/esmodule-helpers.js":"53hI8"}],"jWCQw":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MpcSv8Parser", ()=>MpcSv8Parser);
var _debug = require("debug");
var _debugDefault = parcelHelpers.interopDefault(_debug);
var _apev2ParserJs = require("../../apev2/APEv2Parser.js");
var _basicParserJs = require("../../common/BasicParser.js");
var _fourCCJs = require("../../common/FourCC.js");
var _musepackConentErrorJs = require("../MusepackConentError.js");
var _streamVersion8Js = require("./StreamVersion8.js");
const debug = (0, _debugDefault.default)('music-metadata:parser:musepack');
class MpcSv8Parser extends (0, _basicParserJs.BasicParser) {
    audioLength = 0;
    async parse() {
        const signature = await this.tokenizer.readToken((0, _fourCCJs.FourCcToken));
        if (signature !== 'MPCK') throw new (0, _musepackConentErrorJs.MusepackContentError)('Invalid Magic number');
        this.metadata.setFormat('container', 'Musepack, SV8');
        return this.parsePacket();
    }
    async parsePacket() {
        const sv8reader = new _streamVersion8Js.StreamReader(this.tokenizer);
        do {
            const header = await sv8reader.readPacketHeader();
            debug(`packet-header key=${header.key}, payloadLength=${header.payloadLength}`);
            switch(header.key){
                case 'SH':
                    {
                        // Stream Header
                        const sh = await sv8reader.readStreamHeader(header.payloadLength);
                        this.metadata.setFormat('numberOfSamples', sh.sampleCount);
                        this.metadata.setFormat('sampleRate', sh.sampleFrequency);
                        this.metadata.setFormat('duration', sh.sampleCount / sh.sampleFrequency);
                        this.metadata.setFormat('numberOfChannels', sh.channelCount);
                        break;
                    }
                case 'AP':
                    this.audioLength += header.payloadLength;
                    await this.tokenizer.ignore(header.payloadLength);
                    break;
                case 'RG':
                case 'EI':
                case 'SO':
                case 'ST':
                case 'CT':
                    await this.tokenizer.ignore(header.payloadLength);
                    break;
                case 'SE':
                    if (this.metadata.format.duration) this.metadata.setFormat('bitrate', this.audioLength * 8 / this.metadata.format.duration);
                    return (0, _apev2ParserJs.tryParseApeHeader)(this.metadata, this.tokenizer, this.options);
                default:
                    throw new (0, _musepackConentErrorJs.MusepackContentError)(`Unexpected header: ${header.key}`);
            }
        // biome-ignore lint/correctness/noConstantCondition: break is handled in the switch statement
        }while (true);
    }
}

},{"debug":"4XIdh","../../apev2/APEv2Parser.js":"1ZQcJ","../../common/BasicParser.js":"91dLC","../../common/FourCC.js":"1nM5t","../MusepackConentError.js":"9Lac7","./StreamVersion8.js":"7vT3J","@parcel/transformer-js/src/esmodule-helpers.js":"53hI8"}],"7vT3J":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "StreamReader", ()=>StreamReader);
var _debug = require("debug");
var _debugDefault = parcelHelpers.interopDefault(_debug);
var _tokenTypes = require("token-types");
var _utilJs = require("../../common/Util.js");
var _musepackConentErrorJs = require("../MusepackConentError.js");
const debug = (0, _debugDefault.default)('music-metadata:parser:musepack:sv8');
const PacketKey = new _tokenTypes.StringType(2, 'latin1');
/**
 * Stream Header Packet part 1
 * Ref: http://trac.musepack.net/musepack/wiki/SV8Specification#StreamHeaderPacket
 */ const SH_part1 = {
    len: 5,
    get: (buf, off)=>{
        return {
            crc: _tokenTypes.UINT32_LE.get(buf, off),
            streamVersion: _tokenTypes.UINT8.get(buf, off + 4)
        };
    }
};
/**
 * Stream Header Packet part 3
 * Ref: http://trac.musepack.net/musepack/wiki/SV8Specification#StreamHeaderPacket
 */ const SH_part3 = {
    len: 2,
    get: (buf, off)=>{
        return {
            sampleFrequency: [
                44100,
                48000,
                37800,
                32000
            ][_utilJs.getBitAllignedNumber(buf, off, 0, 3)],
            maxUsedBands: _utilJs.getBitAllignedNumber(buf, off, 3, 5),
            channelCount: _utilJs.getBitAllignedNumber(buf, off + 1, 0, 4) + 1,
            msUsed: _utilJs.isBitSet(buf, off + 1, 4),
            audioBlockFrames: _utilJs.getBitAllignedNumber(buf, off + 1, 5, 3)
        };
    }
};
class StreamReader {
    _tokenizer;
    get tokenizer() {
        return this._tokenizer;
    }
    set tokenizer(value) {
        this._tokenizer = value;
    }
    constructor(_tokenizer){
        this._tokenizer = _tokenizer;
    }
    async readPacketHeader() {
        const key = await this.tokenizer.readToken(PacketKey);
        const size = await this.readVariableSizeField();
        const headerLength = PacketKey.len + size.len;
        if (size.value < headerLength) throw new (0, _musepackConentErrorJs.MusepackContentError)(`Invalid packet size: ${size.value}`);
        return {
            key,
            payloadLength: size.value - headerLength
        };
    }
    async readStreamHeader(size) {
        const streamHeader = {};
        debug(`Reading SH at offset=${this.tokenizer.position}`);
        const part1 = await this.tokenizer.readToken(SH_part1);
        size -= SH_part1.len;
        Object.assign(streamHeader, part1);
        debug(`SH.streamVersion = ${part1.streamVersion}`);
        const sampleCount = await this.readVariableSizeField();
        size -= sampleCount.len;
        streamHeader.sampleCount = sampleCount.value;
        const bs = await this.readVariableSizeField();
        size -= bs.len;
        streamHeader.beginningOfSilence = bs.value;
        const part3 = await this.tokenizer.readToken(SH_part3);
        size -= SH_part3.len;
        Object.assign(streamHeader, part3);
        // assert.equal(size, 0);
        await this.tokenizer.ignore(size);
        return streamHeader;
    }
    async readVariableSizeField() {
        let value = 0;
        for(let len = 1; len <= 9; ++len){
            const byte = await this.tokenizer.readNumber(_tokenTypes.UINT8);
            const digit = byte & 0x7f;
            if (value > (Number.MAX_SAFE_INTEGER - digit) / 128) throw new (0, _musepackConentErrorJs.MusepackContentError)('Variable-size integer exceeds JavaScript safe integer range');
            value = value * 128 + digit;
            if ((byte & 0x80) === 0) return {
                len,
                value
            };
        }
        throw new (0, _musepackConentErrorJs.MusepackContentError)('Variable-size integer exceeds 9 bytes');
    }
}

},{"debug":"4XIdh","token-types":"al35Q","../../common/Util.js":"Q4yiL","../MusepackConentError.js":"9Lac7","@parcel/transformer-js/src/esmodule-helpers.js":"53hI8"}]},["2zEco"], null, "parcelRequire2853", {})

//# sourceMappingURL=MusepackParser.30428d59.js.map
