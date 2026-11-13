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
})({"198QD":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SERVER_PORT = 3000;
var HMR_SECURE = false;
var HMR_ENV_HASH = "439701173a9199ea";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "2c2df29b441d1d19";
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

},{}],"5yRJd":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "FlacParser", ()=>FlacParser);
var _debug = require("debug");
var _debugDefault = parcelHelpers.interopDefault(_debug);
var _tokenTypes = require("token-types");
var _allocationJs = require("../common/Allocation.js");
var _fourCCJs = require("../common/FourCC.js");
var _abstractID3ParserJs = require("../id3v2/AbstractID3Parser.js");
var _vorbisJs = require("../ogg/vorbis/Vorbis.js");
var _vorbisDecoderJs = require("../ogg/vorbis/VorbisDecoder.js");
var _vorbisStreamJs = require("../ogg/vorbis/VorbisStream.js");
var _parseErrorJs = require("../ParseError.js");
var _flacTokenJs = require("./FlacToken.js");
const debug = (0, _debugDefault.default)('music-metadata:parser:FLAC');
class FlacContentError extends (0, _parseErrorJs.makeUnexpectedFileContentError)('FLAC') {
}
class FlacParser extends (0, _abstractID3ParserJs.AbstractID3Parser) {
    vorbisParser = new (0, _vorbisStreamJs.VorbisStream)(this.metadata, this.options);
    async postId3v2Parse() {
        const fourCC = await this.readToken((0, _fourCCJs.FourCcToken));
        if (fourCC.toString() !== 'fLaC') throw new FlacContentError('Invalid FLAC preamble');
        let blockHeader;
        do {
            // Read block header
            blockHeader = await this.readToken(_flacTokenJs.BlockHeader);
            // Parse block data
            await this.parseDataBlock(blockHeader);
        }while (!blockHeader.lastBlock);
        if (this.tokenizer.fileInfo.size && this.metadata.format.duration) {
            const dataSize = this.tokenizer.fileInfo.size - this.tokenizer.position;
            this.metadata.setFormat('bitrate', 8 * dataSize / this.metadata.format.duration);
        }
    }
    async parseDataBlock(blockHeader) {
        debug(`blockHeader type=${blockHeader.type}, length=${blockHeader.length}`);
        switch(blockHeader.type){
            case _flacTokenJs.BlockType.STREAMINFO:
                return this.readBlockStreamInfo(blockHeader.length);
            case _flacTokenJs.BlockType.PADDING:
                break;
            case _flacTokenJs.BlockType.APPLICATION:
                break;
            case _flacTokenJs.BlockType.SEEKTABLE:
                break;
            case _flacTokenJs.BlockType.VORBIS_COMMENT:
                return this.readComment(blockHeader.length);
            case _flacTokenJs.BlockType.CUESHEET:
                break;
            case _flacTokenJs.BlockType.PICTURE:
                await this.parsePicture(blockHeader.length);
                return;
            default:
                this.metadata.addWarning(`Unknown block type: ${blockHeader.type}`);
        }
        // Ignore data block
        return this.tokenizer.ignore(blockHeader.length).then();
    }
    /**
     * Parse STREAMINFO
     */ async readBlockStreamInfo(dataLen) {
        if (dataLen !== _flacTokenJs.BlockStreamInfo.len) throw new FlacContentError('Unexpected block-stream-info length');
        const streamInfo = await this.readToken(_flacTokenJs.BlockStreamInfo);
        this.metadata.setFormat('container', 'FLAC');
        this.processsStreamInfo(streamInfo);
    }
    /**
     * Parse STREAMINFO
     */ processsStreamInfo(streamInfo) {
        this.metadata.setFormat('codec', 'FLAC');
        this.metadata.setFormat('hasAudio', true);
        this.metadata.setFormat('lossless', true);
        this.metadata.setFormat('numberOfChannels', streamInfo.channels);
        this.metadata.setFormat('bitsPerSample', streamInfo.bitsPerSample);
        this.metadata.setFormat('sampleRate', streamInfo.sampleRate);
        if (streamInfo.totalSamples > 0) this.metadata.setFormat('duration', streamInfo.totalSamples / streamInfo.sampleRate);
    }
    /**
     * Read VORBIS_COMMENT from tokenizer
     * Ref: https://www.xiph.org/vorbis/doc/Vorbis_I_spec.html#x1-640004.2.3
     */ async readComment(dataLen) {
        const data = await this.readToken(new (0, _tokenTypes.Uint8ArrayType)(dataLen));
        return this.parseComment(data);
    }
    /**
     * Parse VORBIS_COMMENT
     * Ref: https://www.xiph.org/vorbis/doc/Vorbis_I_spec.html#x1-640004.2.3
     */ async parseComment(data) {
        const decoder = new (0, _vorbisDecoderJs.VorbisDecoder)(data, 0);
        const { vendor, comments } = decoder.parseCommentList((message)=>new FlacContentError(message), (0, _allocationJs.getMaxMetadataEntries)(this.options));
        if (vendor.length > 0) this.metadata.setFormat('tool', vendor);
        for (const tag of comments){
            if (tag.key === 'ENCODER') this.metadata.setFormat('tool', tag.value);
            await this.addTag(tag.key, tag.value);
        }
    }
    async parsePicture(dataLen) {
        if (this.options.skipCovers) return this.tokenizer.ignore(dataLen);
        return this.addPictureTag(await this.readToken(new (0, _vorbisJs.VorbisPictureToken)(dataLen, {
            createError: (message)=>new FlacContentError(message)
        })));
    }
    addPictureTag(picture) {
        return this.addTag('METADATA_BLOCK_PICTURE', picture);
    }
    addTag(id, value) {
        return this.vorbisParser.addTag(id, value);
    }
}

},{"debug":"4XIdh","token-types":"al35Q","../common/Allocation.js":"8ZVyl","../common/FourCC.js":"1nM5t","../id3v2/AbstractID3Parser.js":"bZKYA","../ogg/vorbis/Vorbis.js":"7Yilq","../ogg/vorbis/VorbisDecoder.js":"iZ3NW","../ogg/vorbis/VorbisStream.js":"5TdBF","../ParseError.js":"E03ox","./FlacToken.js":"etK8V","@parcel/transformer-js/src/esmodule-helpers.js":"53hI8"}],"bZKYA":[function(require,module,exports,__globalThis) {
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

},{"debug":"4XIdh","strtok3":"7L6Gs","../common/BasicParser.js":"91dLC","../id3v1/ID3v1Parser.js":"fWBrl","./ID3v2Parser.js":"6YZCj","./ID3v2Token.js":"eUTtS","@parcel/transformer-js/src/esmodule-helpers.js":"53hI8"}],"7Yilq":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Parse the METADATA_BLOCK_PICTURE
 * Ref: https://wiki.xiph.org/VorbisComment#METADATA_BLOCK_PICTURE
 * Ref: https://xiph.org/flac/format.html#metadata_block_picture
 */ parcelHelpers.export(exports, "VorbisPictureToken", ()=>VorbisPictureToken);
parcelHelpers.export(exports, "CommonHeader", ()=>CommonHeader);
parcelHelpers.export(exports, "IdentificationHeader", ()=>IdentificationHeader);
var _tokenTypes = require("token-types");
var _base64Js = require("../../common/Base64.js");
var _flacJs = require("../../tokens/flac.js");
class VorbisPictureToken {
    options;
    static fromBase64(base64str) {
        return VorbisPictureToken.fromBuffer((0, _base64Js.decodeBase64)(base64str));
    }
    static fromBuffer(buffer) {
        const pic = new VorbisPictureToken(buffer.length);
        return pic.get(buffer, 0);
    }
    len;
    constructor(len, options = {}){
        this.options = options;
        this.len = len;
    }
    get(buffer, offset) {
        return (0, _flacJs.decodePicture)(buffer.subarray(offset, offset + this.len), 0, this.options);
    }
}
const CommonHeader = {
    len: 7,
    get: (buf, off)=>{
        return {
            packetType: _tokenTypes.UINT8.get(buf, off),
            vorbis: new _tokenTypes.StringType(6, 'ascii').get(buf, off + 1)
        };
    }
};
const IdentificationHeader = {
    len: 23,
    get: (uint8Array, off)=>{
        return {
            version: _tokenTypes.UINT32_LE.get(uint8Array, off + 0),
            channelMode: _tokenTypes.UINT8.get(uint8Array, off + 4),
            sampleRate: _tokenTypes.UINT32_LE.get(uint8Array, off + 5),
            bitrateMax: _tokenTypes.INT32_LE.get(uint8Array, off + 9),
            bitrateNominal: _tokenTypes.INT32_LE.get(uint8Array, off + 13),
            bitrateMin: _tokenTypes.INT32_LE.get(uint8Array, off + 17)
        };
    }
};

},{"token-types":"al35Q","../../common/Base64.js":"jzfoq","../../tokens/flac.js":"eDET2","@parcel/transformer-js/src/esmodule-helpers.js":"53hI8"}],"jzfoq":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Decode a base64 string into a Uint8Array.
 *
 * Uses native `atob` (available in Node.js ≥ 22 and browsers).
 * Invalid characters are skipped for lenient decoding.
 */ parcelHelpers.export(exports, "decodeBase64", ()=>decodeBase64);
/**
 * Encode a Uint8Array as a base64 string.
 *
 * Uses native `btoa` (available in Node.js ≥ 22 and browsers).
 * Falls back to manual encoding for non-Latin1 compatible data.
 */ parcelHelpers.export(exports, "encodeBase64", ()=>encodeBase64);
const BASE64_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
const BASE64_TABLE = new Uint8Array(256);
for(let i = 0; i < 256; i++)BASE64_TABLE[i] = 0xff;
for(let i = 0; i < BASE64_CHARS.length; i++)BASE64_TABLE[BASE64_CHARS.charCodeAt(i)] = i;
function decodeBase64(value) {
    // Remove whitespace (common in PEM/pretty-printed base64) - avoid allocation if none
    const normalized = value.includes(' ') || value.includes('\n') || value.includes('\t') || value.includes('\r') ? value.replace(/\s/g, '') : value;
    // Use native atob for decoding (Node.js ≥ 22, browsers)
    // atob throws on invalid characters, so fall back to manual decoding for lenient behavior
    try {
        const binary = atob(normalized);
        const result = new Uint8Array(binary.length);
        for(let i = 0; i < binary.length; i++)result[i] = binary.charCodeAt(i);
        return result;
    } catch  {
        // Fallback: manual lenient decoding (skip invalid characters)
        const length = Math.floor(normalized.length * 3 / 4);
        const result = new Uint8Array(length);
        let resultIndex = 0;
        let buffer = 0;
        let bits = 0;
        for(let i = 0; i < normalized.length; i++){
            const char = normalized.charCodeAt(i);
            const charValue = char < 256 ? BASE64_TABLE[char] : 0xff;
            if (charValue === 0xff) continue; // skip invalid characters
            buffer = buffer << 6 | charValue;
            bits += 6;
            if (bits >= 8) {
                bits -= 8;
                result[resultIndex++] = buffer >> bits & 0xff;
            }
        }
        return result.subarray(0, resultIndex);
    }
}
function encodeBase64(data) {
    // Fast path: use native btoa when data is Latin1-compatible (all bytes < 256)
    // This is always true for Uint8Array, so we can use btoa directly.
    let binary = '';
    for (const byte of data)binary += String.fromCharCode(byte);
    return btoa(binary);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"53hI8"}],"eDET2":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "BlockType", ()=>BlockType);
parcelHelpers.export(exports, "BlockHeader", ()=>BlockHeader);
parcelHelpers.export(exports, "PICTURE_TYPES", ()=>PICTURE_TYPES);
parcelHelpers.export(exports, "pictureTypeToNumber", ()=>pictureTypeToNumber);
parcelHelpers.export(exports, "normalizePictureMimeType", ()=>normalizePictureMimeType);
/**
 * Decode a FLAC PICTURE block body.
 *
 * The decoder validates every length before reading, so a forged length cannot
 * make it read outside the supplied buffer. It does not impose a policy limit
 * on the picture data itself; callers should bound the block before calling it.
 */ parcelHelpers.export(exports, "decodePicture", ()=>decodePicture);
var _textCodec = require("@borewit/text-codec");
var _tokenTypes = require("token-types");
var _id3V2Js = require("./id3v2.js");
const BlockType = {
    STREAMINFO: 0,
    PADDING: 1,
    APPLICATION: 2,
    SEEKTABLE: 3,
    VORBIS_COMMENT: 4,
    CUESHEET: 5,
    PICTURE: 6
};
function ensureAvailable(buffer, offset, length, createError) {
    if (!Number.isSafeInteger(offset) || !Number.isSafeInteger(length) || offset < 0 || length < 0 || offset + length > buffer.length) throw createError(`Cannot read ${length} byte(s) at offset ${offset} from a ${buffer.length}-byte buffer`);
}
const MAX_BLOCK_LENGTH = 0xffffff;
const BlockHeader = {
    len: 4,
    get (buffer, offset) {
        ensureAvailable(buffer, offset, BlockHeader.len, (message)=>new RangeError(message));
        return {
            lastBlock: (buffer[offset] & 0x80) !== 0,
            type: buffer[offset] & 0x7f,
            length: (0, _tokenTypes.UINT24_BE).get(buffer, offset + 1)
        };
    },
    put (buffer, offset, value) {
        ensureAvailable(buffer, offset, BlockHeader.len, (message)=>new RangeError(message));
        if (!Number.isSafeInteger(value.length) || value.length < 0 || value.length > MAX_BLOCK_LENGTH) throw new RangeError(`FLAC metadata block length must be between 0 and ${MAX_BLOCK_LENGTH}, got ${value.length}`);
        if (!Number.isSafeInteger(value.type) || value.type < 0 || value.type > 126) throw new RangeError(`FLAC metadata block type must be between 0 and 126, got ${value.type}`);
        buffer[offset] = (value.lastBlock ? 0x80 : 0) | value.type;
        return (0, _tokenTypes.UINT24_BE).put(buffer, offset + 1, value.length);
    }
};
const PICTURE_TYPES = [
    'Other',
    "32x32 pixels 'file icon' (PNG only)",
    'Other file icon',
    'Cover (front)',
    'Cover (back)',
    'Leaflet page',
    'Media (e.g. label side of CD)',
    'Lead artist/lead performer/soloist',
    'Artist/performer',
    'Conductor',
    'Band/Orchestra',
    'Composer',
    'Lyricist/text writer',
    'Recording Location',
    'During recording',
    'During performance',
    'Movie/video screen capture',
    'A bright coloured fish',
    'Illustration',
    'Band/artist logotype',
    'Publisher/Studio logotype'
];
function pictureTypeToNumber(type) {
    if (type === undefined) return 0;
    const index = PICTURE_TYPES.indexOf(type);
    return Math.max(index, 0);
}
function normalizePictureMimeType(format) {
    switch(format.toLowerCase()){
        case 'jpg':
        case 'jpeg':
            return 'image/jpeg';
        case 'png':
            return 'image/png';
        default:
            return format;
    }
}
function decodePicture(buffer, offset = 0, options = {}) {
    const createError = options.createError ?? ((message)=>new RangeError(message));
    ensureAvailable(buffer, offset, 32, createError);
    let cursor = offset;
    const typeId = (0, _tokenTypes.UINT32_BE).get(buffer, cursor);
    cursor += 4;
    const formatLength = (0, _tokenTypes.UINT32_BE).get(buffer, cursor);
    cursor += 4;
    ensureAvailable(buffer, cursor, formatLength, createError);
    const format = (0, _textCodec.textDecode)(buffer.subarray(cursor, cursor + formatLength), 'utf-8');
    cursor += formatLength;
    ensureAvailable(buffer, cursor, 4, createError);
    const descriptionLength = (0, _tokenTypes.UINT32_BE).get(buffer, cursor);
    cursor += 4;
    ensureAvailable(buffer, cursor, descriptionLength, createError);
    const description = (0, _textCodec.textDecode)(buffer.subarray(cursor, cursor + descriptionLength), 'utf-8');
    cursor += descriptionLength;
    ensureAvailable(buffer, cursor, 20, createError);
    const width = (0, _tokenTypes.UINT32_BE).get(buffer, cursor);
    cursor += 4;
    const height = (0, _tokenTypes.UINT32_BE).get(buffer, cursor);
    cursor += 4;
    const colourDepth = (0, _tokenTypes.UINT32_BE).get(buffer, cursor);
    cursor += 4;
    const colours = (0, _tokenTypes.UINT32_BE).get(buffer, cursor);
    cursor += 4;
    const dataLength = (0, _tokenTypes.UINT32_BE).get(buffer, cursor);
    cursor += 4;
    ensureAvailable(buffer, cursor, dataLength, createError);
    const data = new Uint8Array(buffer.subarray(cursor, cursor + dataLength));
    cursor += dataLength;
    if (options.requireExactData && cursor !== buffer.length) throw createError(`FLAC PICTURE has ${buffer.length - cursor} trailing byte(s)`);
    return {
        typeId,
        type: (0, _id3V2Js.attachedPictureType)(typeId),
        format,
        description,
        width,
        height,
        colour_depth: colourDepth,
        indexed_color: colours,
        colourDepth,
        colours,
        data
    };
}

},{"@borewit/text-codec":"104u3","token-types":"al35Q","./id3v2.js":"7AuoS","@parcel/transformer-js/src/esmodule-helpers.js":"53hI8"}],"iZ3NW":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Vorbis Comment decoder used by the reader.
 *
 * The shared decoder preserves the original key spelling; this boundary
 * uppercases keys to keep `music-metadata`'s native-tag behavior unchanged.
 */ parcelHelpers.export(exports, "VorbisDecoder", ()=>VorbisDecoder);
var _allocationJs = require("../../common/Allocation.js");
var _parseErrorJs = require("../../ParseError.js");
var _vorbisJs = require("../../tokens/vorbis.js");
class VorbisCommentError extends (0, _parseErrorJs.makeUnexpectedFileContentError)('Vorbis') {
}
class VorbisDecoder extends (0, _vorbisJs.VorbisDecoder) {
    constructor(data, offset = 0, options = {}){
        super(data, offset, {
            createError: (message)=>new VorbisCommentError(message),
            maxComments: options.maxComments ?? (0, _allocationJs.defaultMaxMetadataEntries)
        });
    }
    parseUserComment() {
        const tag = super.parseUserComment();
        return {
            ...tag,
            key: tag.key.toUpperCase()
        };
    }
    parseCommentList(createCountError, maxComments) {
        return super.parseCommentList(createCountError, maxComments);
    }
}

},{"../../common/Allocation.js":"8ZVyl","../../ParseError.js":"E03ox","../../tokens/vorbis.js":"doYHs","@parcel/transformer-js/src/esmodule-helpers.js":"53hI8"}],"doYHs":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DEFAULT_MAX_COMMENT_COUNT", ()=>DEFAULT_MAX_COMMENT_COUNT);
parcelHelpers.export(exports, "VorbisCommentError", ()=>VorbisCommentError);
/**
 * Low-level Vorbis Comment reader.
 *
 * The decoder preserves the original key spelling, order and duplicates. It
 * leaves packet framing, tag normalization and metadata policy to callers.
 */ parcelHelpers.export(exports, "VorbisDecoder", ()=>VorbisDecoder);
/**
 * Parse a complete Vorbis Comment metadata block body.
 *
 * Unlike the low-level decoder, this rejects comments without a field
 * separator and trailing bytes after the comment list.
 */ parcelHelpers.export(exports, "parseVorbisComment", ()=>parseVorbisComment);
var _textCodec = require("@borewit/text-codec");
var _tokenTypes = require("token-types");
const DEFAULT_MAX_COMMENT_COUNT = 100000;
function validateMaxComments(maxComments) {
    if (maxComments !== Number.POSITIVE_INFINITY && (!Number.isSafeInteger(maxComments) || maxComments < 0)) throw new RangeError('maxComments must be a non-negative safe integer or Infinity');
}
class VorbisCommentError extends Error {
    constructor(message){
        super(message);
        this.name = 'VorbisCommentError';
    }
}
class VorbisDecoder {
    data;
    offset;
    createError;
    maxComments;
    constructor(data, offset = 0, options = {}){
        if (!Number.isSafeInteger(offset) || offset < 0 || offset > data.length) throw new RangeError(`Invalid Vorbis Comment offset ${offset} for a ${data.length}-byte buffer`);
        this.data = data;
        this.offset = offset;
        this.createError = options.createError ?? ((message)=>new VorbisCommentError(message));
        this.maxComments = options.maxComments ?? DEFAULT_MAX_COMMENT_COUNT;
        validateMaxComments(this.maxComments);
    }
    get remaining() {
        return this.data.length - this.offset;
    }
    readInt32() {
        if (this.remaining < 4) throw this.createError('Truncated Vorbis comment length');
        const value = (0, _tokenTypes.UINT32_LE).get(this.data, this.offset);
        this.offset += 4;
        return value;
    }
    readStringUtf8() {
        const length = this.readInt32();
        if (length > this.remaining) throw this.createError(`Vorbis comment length ${length} exceeds remaining data ${this.remaining}`);
        const value = (0, _textCodec.textDecode)(this.data.subarray(this.offset, this.offset + length), 'utf-8');
        this.offset += length;
        return value;
    }
    /**
     * Decode the shared structure, leaving packet framing and metadata policy to
     * callers. Iterating the returned comments consumes the underlying buffer.
     */ parseCommentList(createCountError = this.createError, maxComments = this.maxComments) {
        validateMaxComments(maxComments);
        const vendor = this.readStringUtf8();
        const count = this.readInt32();
        // Each entry needs at least its four-byte length, even for an empty comment.
        if (count > Math.floor(this.remaining / 4)) throw createCountError(`Vorbis comment count ${count} exceeds remaining data`);
        if (count > maxComments) throw createCountError(`Vorbis comment count ${count} exceeds entry limit ${maxComments}`);
        return {
            vendor,
            comments: this.parseUserComments(count)
        };
    }
    parseUserComment() {
        const offset0 = this.offset;
        const value = this.readStringUtf8();
        const separator = value.indexOf('=');
        return {
            key: value.substring(0, separator),
            value: value.substring(separator + 1),
            len: this.offset - offset0
        };
    }
    *parseUserComments(count) {
        for(let index = 0; index < count; index++)yield this.parseUserComment();
    }
}
function parseVorbisComment(data, options = {}) {
    const createError = options.createError ?? ((message)=>new VorbisCommentError(message));
    const decoder = new VorbisDecoder(data, 0, {
        createError,
        ...options.maxComments === undefined ? {} : {
            maxComments: options.maxComments
        }
    });
    const requireFieldSeparator = options.requireFieldSeparator ?? true;
    const { vendor, comments: parsedComments } = decoder.parseCommentList(createError);
    const comments = [];
    let index = 0;
    for (const comment of parsedComments){
        if (requireFieldSeparator && comment.key.length === 0) throw createError(`Malformed Vorbis Comment at index ${index}: missing field separator`);
        comments.push({
            key: comment.key,
            value: comment.value
        });
        index++;
    }
    if (decoder.remaining !== 0) throw createError(`Vorbis Comment block has ${decoder.remaining} trailing byte(s)`);
    return {
        vendor,
        comments
    };
}

},{"@borewit/text-codec":"104u3","token-types":"al35Q","@parcel/transformer-js/src/esmodule-helpers.js":"53hI8"}],"5TdBF":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "VorbisContentError", ()=>VorbisContentError);
/**
 * Vorbis 1 Parser.
 * Used by OggStream
 */ parcelHelpers.export(exports, "VorbisStream", ()=>VorbisStream);
var _debug = require("debug");
var _debugDefault = parcelHelpers.interopDefault(_debug);
var _allocationJs = require("../../common/Allocation.js");
var _parseErrorJs = require("../../ParseError.js");
var _vorbisJs = require("./Vorbis.js");
var _vorbisDecoderJs = require("./VorbisDecoder.js");
const debug = (0, _debugDefault.default)('music-metadata:parser:ogg:vorbis1');
class VorbisContentError extends (0, _parseErrorJs.makeUnexpectedFileContentError)('Vorbis') {
}
class VorbisStream {
    pageSegments = [];
    bufferedPageLength = 0;
    metadata;
    options;
    lastPageHeader;
    maxBufferedSegments;
    durationOnLastPage = true;
    isMetadataComplete = false;
    constructor(metadata, options){
        this.metadata = metadata;
        this.options = options;
        this.maxBufferedSegments = (0, _allocationJs.getMaxMetadataEntries)(options);
    }
    /**
     * Vorbis 1 parser
     * @param header Ogg Page Header
     * @param pageData Page data
     */ async parsePage(header, pageData) {
        this.lastPageHeader = header;
        if (header.headerType.firstPage) this.parseFirstPage(header, pageData);
        else {
            if (header.headerType.continued) {
                if (this.pageSegments.length === 0) throw new VorbisContentError('Cannot continue on previous page');
                (0, _allocationJs.validateAllocation)(this.bufferedPageLength + pageData.length, this.options);
                if (this.pageSegments.length >= this.maxBufferedSegments) throw new VorbisContentError('Buffered Ogg page count exceeds entry limit');
                this.pageSegments.push(pageData);
                this.bufferedPageLength += pageData.length;
            }
            if (header.headerType.lastPage || !header.headerType.continued) {
                // Flush page segments
                if (this.pageSegments.length > 0) {
                    const fullPage = this.mergeUint8Arrays(this.pageSegments);
                    await this.parseFullPage(fullPage);
                }
                // Reset page segments
                this.bufferedPageLength = header.headerType.lastPage ? 0 : pageData.length;
                (0, _allocationJs.validateAllocation)(this.bufferedPageLength, this.options);
                this.pageSegments = header.headerType.lastPage ? [] : [
                    pageData
                ];
            }
        }
    }
    mergeUint8Arrays(arrays) {
        const totalSize = arrays.reduce((acc, e)=>acc + e.length, 0);
        (0, _allocationJs.validateAllocation)(totalSize, this.options);
        const merged = new Uint8Array(totalSize);
        let offset = 0;
        for (const array of arrays){
            merged.set(array, offset);
            offset += array.length;
        }
        return merged;
    }
    async flush() {
        if (this.pageSegments.length === 0) return;
        await this.parseFullPage(this.mergeUint8Arrays(this.pageSegments));
    }
    async parseUserComment(pageData, offset) {
        const decoder = new (0, _vorbisDecoderJs.VorbisDecoder)(pageData, offset);
        const tag = decoder.parseUserComment();
        await this.addTag(tag.key, tag.value);
        return tag.len;
    }
    async addTag(id, value) {
        if (id === 'METADATA_BLOCK_PICTURE' && typeof value === 'string') {
            if (this.options.skipCovers) {
                debug('Ignore picture');
                return;
            }
            value = (0, _vorbisJs.VorbisPictureToken).fromBase64(value);
            debug(`Push picture: id=${id}, format=${value.format}`);
        } else debug(`Push tag: id=${id}, value=${value}`);
        await this.metadata.addTag('vorbis', id, value);
    }
    calculateDuration(enfOfStream) {
        if (this.lastPageHeader && (enfOfStream || this.lastPageHeader.headerType.lastPage) && this.metadata.format.sampleRate && this.lastPageHeader.absoluteGranulePosition >= 0) {
            // Calculate duration
            this.metadata.setFormat('numberOfSamples', this.lastPageHeader.absoluteGranulePosition);
            this.metadata.setFormat('duration', this.lastPageHeader.absoluteGranulePosition / this.metadata.format.sampleRate);
        }
    }
    /**
     * Parse first Ogg/Vorbis page
     * @param _header
     * @param pageData
     */ parseFirstPage(_header, pageData) {
        this.metadata.setFormat('codec', 'Vorbis I');
        this.metadata.setFormat('lossless', false);
        this.metadata.setFormat('hasAudio', true);
        debug('Parse first page');
        // Parse  Vorbis common header
        if (pageData.length < (0, _vorbisJs.CommonHeader).len) throw new VorbisContentError('Truncated Vorbis packet header');
        const commonHeader = (0, _vorbisJs.CommonHeader).get(pageData, 0);
        if (commonHeader.vorbis !== 'vorbis') throw new VorbisContentError('Metadata does not look like Vorbis');
        if (commonHeader.packetType === 1) {
            if (pageData.length < (0, _vorbisJs.CommonHeader).len + (0, _vorbisJs.IdentificationHeader).len) throw new VorbisContentError('Truncated Vorbis identification header');
            const idHeader = (0, _vorbisJs.IdentificationHeader).get(pageData, (0, _vorbisJs.CommonHeader).len);
            this.metadata.setFormat('sampleRate', idHeader.sampleRate);
            this.metadata.setFormat('bitrate', idHeader.bitrateNominal);
            this.metadata.setFormat('numberOfChannels', idHeader.channelMode);
            debug('sample-rate=%s[hz], bitrate=%s[b/s], channel-mode=%s', idHeader.sampleRate, idHeader.bitrateNominal, idHeader.channelMode);
        } else throw new VorbisContentError('First Ogg page should be type 1: the identification header');
    }
    async parseFullPage(pageData) {
        // Audio packets need not contain a metadata header and may be very short.
        if (pageData.length > 0 && (pageData[0] & 1) === 0) return;
        if (pageData.length < (0, _vorbisJs.CommonHeader).len) throw new VorbisContentError('Truncated Vorbis packet header');
        const commonHeader = (0, _vorbisJs.CommonHeader).get(pageData, 0);
        debug('Parse full page: type=%s, byteLength=%s', commonHeader.packetType, pageData.byteLength);
        switch(commonHeader.packetType){
            case 3:
                return this.parseUserCommentList(pageData, (0, _vorbisJs.CommonHeader).len);
            case 1:
            case 5:
                break; // ignore
        }
    }
    /**
     * Ref: https://xiph.org/vorbis/doc/Vorbis_I_spec.html#x1-840005.2
     */ async parseUserCommentList(pageData, offset) {
        const { comments } = new (0, _vorbisDecoderJs.VorbisDecoder)(pageData, offset).parseCommentList((message)=>new VorbisContentError(message), (0, _allocationJs.getMaxMetadataEntries)(this.options));
        for (const tag of comments)await this.addTag(tag.key, tag.value);
        this.isMetadataComplete = true;
    }
}

},{"debug":"4XIdh","../../common/Allocation.js":"8ZVyl","../../ParseError.js":"E03ox","./Vorbis.js":"7Yilq","./VorbisDecoder.js":"iZ3NW","@parcel/transformer-js/src/esmodule-helpers.js":"53hI8"}],"etK8V":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "BlockHeader", ()=>(0, _flacJs.BlockHeader));
parcelHelpers.export(exports, "BlockType", ()=>(0, _flacJs.BlockType));
parcelHelpers.export(exports, "BlockStreamInfo", ()=>BlockStreamInfo);
var _tokenTypes = require("token-types");
var _utilJs = require("../common/Util.js");
var _flacJs = require("../tokens/flac.js");
const BlockStreamInfo = {
    len: 34,
    get: (buf, off)=>{
        return {
            // The minimum block size (in samples) used in the stream.
            minimumBlockSize: (0, _tokenTypes.UINT16_BE).get(buf, off),
            // The maximum block size (in samples) used in the stream.
            // (Minimum blocksize == maximum blocksize) implies a fixed-blocksize stream.
            maximumBlockSize: (0, _tokenTypes.UINT16_BE).get(buf, off + 2),
            // The minimum frame size (in bytes) used in the stream.
            // May be 0 to imply the value is not known.
            minimumFrameSize: (0, _tokenTypes.UINT24_BE).get(buf, off + 4),
            // The maximum frame size (in bytes) used in the stream.
            // May be 0 to imply the value is not known.
            maximumFrameSize: (0, _tokenTypes.UINT24_BE).get(buf, off + 7),
            // Sample rate in Hz. Though 20 bits are available,
            // the maximum sample rate is limited by the structure of frame headers to 655350Hz.
            // Also, a value of 0 is invalid.
            sampleRate: (0, _tokenTypes.UINT24_BE).get(buf, off + 10) >> 4,
            // probably slower: sampleRate: common.getBitAllignedNumber(buf, off + 10, 0, 20),
            // (number of channels)-1. FLAC supports from 1 to 8 channels
            channels: _utilJs.getBitAllignedNumber(buf, off + 12, 4, 3) + 1,
            // bits per sample)-1.
            // FLAC supports from 4 to 32 bits per sample. Currently the reference encoder and decoders only support up to 24 bits per sample.
            bitsPerSample: _utilJs.getBitAllignedNumber(buf, off + 12, 7, 5) + 1,
            // Total samples in stream.
            // 'Samples' means inter-channel sample, i.e. one second of 44.1Khz audio will have 44100 samples regardless of the number of channels.
            // A value of zero here means the number of total samples is unknown.
            totalSamples: _utilJs.getBitAllignedNumber(buf, off + 13, 4, 36),
            // the MD5 hash of the file (see notes for usage... it's a littly tricky)
            fileMD5: new (0, _tokenTypes.Uint8ArrayType)(16).get(buf, off + 18)
        };
    }
};

},{"token-types":"al35Q","../common/Util.js":"Q4yiL","../tokens/flac.js":"eDET2","@parcel/transformer-js/src/esmodule-helpers.js":"53hI8"}]},["198QD"], null, "parcelRequire2853", {})

//# sourceMappingURL=FlacParser.441d1d19.js.map
