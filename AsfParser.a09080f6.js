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
})({"2H2Ty":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SERVER_PORT = 3000;
var HMR_SECURE = false;
var HMR_ENV_HASH = "439701173a9199ea";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "7382edc4a09080f6";
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

},{}],"4gdBW":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Windows Media Metadata Usage Guidelines
 * - Ref: https://msdn.microsoft.com/en-us/library/ms867702.aspx
 *
 * Ref:
 * - https://tools.ietf.org/html/draft-fleischman-asf-01
 * - https://hwiegman.home.xs4all.nl/fileformats/asf/ASF_Specification.pdf
 * - http://drang.s4.xrea.com/program/tips/id3tag/wmp/index.html
 * - https://msdn.microsoft.com/en-us/library/windows/desktop/ee663575(v=vs.85).aspx
 */ parcelHelpers.export(exports, "AsfParser", ()=>AsfParser);
var _debug = require("debug");
var _debugDefault = parcelHelpers.interopDefault(_debug);
var _strtok3 = require("strtok3");
var _tokenTypes = require("token-types");
var _allocationJs = require("../common/Allocation.js");
var _basicParserJs = require("../common/BasicParser.js");
var _typeJs = require("../type.js");
var _asfGuidJs = require("./AsfGuid.js");
var _asfGuidJsDefault = parcelHelpers.interopDefault(_asfGuidJs);
var _asfObjectJs = require("./AsfObject.js");
const debug = (0, _debugDefault.default)('music-metadata:parser:ASF');
const headerType = 'asf';
class AsfParser extends (0, _basicParserJs.BasicParser) {
    streams = new Map();
    codecs = [];
    extendedStreams = new Map();
    streamBitrates = new Map();
    async parse() {
        const header = await this.readToken(_asfObjectJs.TopLevelHeaderObjectToken);
        if (!header.objectId.equals((0, _asfGuidJsDefault.default).HeaderObject)) throw new (0, _asfObjectJs.AsfContentParseError)(`expected asf header; but was not found; got: ${header.objectId.str}`);
        if (header.numberOfHeaderObjects < 1 || header.numberOfHeaderObjects > 10000) throw new (0, _asfObjectJs.AsfContentParseError)(`Unrealistic number of ASF header objects: ${header.numberOfHeaderObjects}`);
        await this.parseObjectHeaders(header.numberOfHeaderObjects, header.objectSize - _asfObjectJs.TopLevelHeaderObjectToken.len);
        for (const stream of this.streams.values()){
            const type = stream.streamType === 'audio' ? (0, _typeJs.TrackType).audio : stream.streamType === 'video' ? (0, _typeJs.TrackType).video : stream.streamType === 'command' ? (0, _typeJs.TrackType).control : stream.streamType === 'binary' ? (0, _typeJs.TrackType).metadata : undefined;
            const codec = this.codecs.find((codec)=>{
                if (type === (0, _typeJs.TrackType).audio && codec.type.audioCodec && codec.information.length >= 2) return stream.codecId === `0x${_tokenTypes.UINT16_LE.get(codec.information, 0).toString(16).padStart(4, '0')}`;
                return type === (0, _typeJs.TrackType).video && codec.type.videoCodec && codec.information.length >= 4 && stream.codecId === new _tokenTypes.StringType(4, 'ascii').get(codec.information, 0);
            });
            const track = {
                id: stream.streamNumber,
                type
            };
            const extended = this.extendedStreams.get(stream.streamNumber);
            if (stream.codecId !== undefined) track.codecId = stream.codecId;
            if (codec) track.codecName = codec.codecName;
            if (stream.audio) track.audio = stream.audio;
            if (stream.video) track.video = stream.video;
            if (extended) {
                if (extended.endTime > extended.startTime) track.duration = Number(extended.endTime - extended.startTime) / 1000;
                const name = extended.streamNames[0]?.streamName;
                if (name) track.name = name;
                if (track.video && extended.averageTimePerFrame > 0) track.video.frameRate = 1e7 / extended.averageTimePerFrame;
            }
            const bitrate = this.streamBitrates.get(stream.streamNumber) ?? (extended && extended.dataBitrate > 0 ? extended.dataBitrate : stream.bitrate);
            if (bitrate !== undefined) track.bitrate = bitrate;
            this.metadata.addStreamInfo(track);
        }
        const audio = [
            ...this.streams.values()
        ].find((stream)=>stream.audio)?.audio;
        if (audio) {
            this.metadata.setFormat('sampleRate', audio.samplingFrequency);
            this.metadata.setFormat('numberOfChannels', audio.channels);
            if (audio.bitDepth !== undefined) this.metadata.setFormat('bitsPerSample', audio.bitDepth);
        }
    }
    async parseObjectHeaders(numberOfObjectHeaders, remainingHeaderSize) {
        let tags;
        for(let index = 0; index < numberOfObjectHeaders; ++index){
            const { header, payloadSize } = await this.readObjectHeader(remainingHeaderSize, 'header');
            // Parse data part of the ASF Object
            debug('header GUID=%s', header.objectId.str);
            switch(header.objectId.str){
                case _asfObjectJs.FilePropertiesObject.guid.str:
                    {
                        // 3.2
                        this.validateAllocationSize(payloadSize, 'File Properties Object');
                        const fpo = await this.readToken(new _asfObjectJs.FilePropertiesObject(header));
                        if (!fpo.flags.broadcast) {
                            const duration = Number(fpo.playDuration) / 1e7 - Number(fpo.preroll) / 1000;
                            if (Number.isFinite(duration) && duration > 0) {
                                this.metadata.setFormat('duration', duration);
                                this.metadata.setFormat('containerDuration', duration);
                            }
                        }
                        this.metadata.setFormat('bitrate', fpo.maximumBitrate);
                        break;
                    }
                case _asfObjectJs.StreamPropertiesObject.guid.str:
                    {
                        // 3.3
                        this.validateAllocationSize(payloadSize, 'Stream Properties Object');
                        const spo = await this.readToken(new _asfObjectJs.StreamPropertiesObject(header));
                        this.metadata.setFormat('container', `ASF/${spo.streamType}`);
                        if (spo.streamType === 'audio') this.metadata.setFormat('hasAudio', true);
                        else if (spo.streamType === 'video') this.metadata.setFormat('hasVideo', true);
                        this.streams.set(spo.streamNumber, spo);
                        break;
                    }
                case _asfObjectJs.HeaderExtensionObject.guid.str:
                    {
                        // 3.4
                        const extensionHeaderToken = new _asfObjectJs.HeaderExtensionObject();
                        if (payloadSize < extensionHeaderToken.len) throw new (0, _asfObjectJs.AsfContentParseError)(`ASF Header Extension Object payload is too small: ${payloadSize} bytes`);
                        const extHeader = await this.readToken(extensionHeaderToken);
                        const expectedExtensionSize = payloadSize - extensionHeaderToken.len;
                        if (extHeader.extensionDataSize !== expectedExtensionSize) throw new (0, _asfObjectJs.AsfContentParseError)(`ASF extension data size ${extHeader.extensionDataSize} does not match enclosing payload size ${expectedExtensionSize}`);
                        await this.parseExtensionObject(extHeader.extensionDataSize);
                        break;
                    }
                case _asfObjectJs.ContentDescriptionObjectState.guid.str:
                    this.validateAllocationSize(payloadSize, 'Content Description Object');
                    tags = await this.readToken(new _asfObjectJs.ContentDescriptionObjectState(header));
                    await this.addTags(tags);
                    break;
                case _asfObjectJs.ExtendedContentDescriptionObjectState.guid.str:
                    this.validateAllocationSize(payloadSize, 'Extended Content Description Object');
                    tags = await this.readToken(new _asfObjectJs.ExtendedContentDescriptionObjectState(header));
                    await this.addTags(tags);
                    break;
                case (0, _asfGuidJsDefault.default).CodecListObject.str:
                    {
                        this.validateAllocationSize(payloadSize, 'Codec List Object');
                        let codecs;
                        try {
                            codecs = await _asfObjectJs.readCodecEntries(this.tokenizer, payloadSize, (0, _allocationJs.getMaxMetadataEntries)(this.options));
                        } catch (error) {
                            const message = error instanceof Error ? error.message : String(error);
                            throw new (0, _asfObjectJs.AsfContentParseError)(`Invalid ASF Codec List Object: ${message}`);
                        }
                        for (const codec of codecs)this.codecs.push(codec);
                        const audioCodecs = codecs.filter((codec)=>codec.type.audioCodec).map((codec)=>codec.codecName).join('/');
                        this.metadata.setFormat('codec', audioCodecs);
                        break;
                    }
                case (0, _asfGuidJsDefault.default).StreamBitratePropertiesObject.str:
                    {
                        if (payloadSize < 2) throw new (0, _asfObjectJs.AsfContentParseError)('Truncated Stream Bitrate Properties Object');
                        const count = await this.readToken(_tokenTypes.UINT16_LE);
                        if (count * 6 > payloadSize - 2) throw new (0, _asfObjectJs.AsfContentParseError)('ASF stream bitrate records exceed object payload');
                        for(let index = 0; index < count; ++index){
                            const streamNumber = await this.readToken(_tokenTypes.UINT16_LE) & 0x7f;
                            this.streamBitrates.set(streamNumber, await this.readToken(_tokenTypes.UINT32_LE));
                        }
                        await this.ignorePayload(payloadSize - 2 - count * 6, 'Stream Bitrate Properties Object');
                        break;
                    }
                case (0, _asfGuidJsDefault.default).PaddingObject.str:
                    // ToDo: register bytes pad
                    debug('Padding: %s bytes', payloadSize);
                    await this.ignorePayload(payloadSize, 'Padding Object');
                    break;
                default:
                    this.metadata.addWarning(`Ignore ASF-Object-GUID: ${header.objectId.str}`);
                    debug('Ignore ASF-Object-GUID: %s', header.objectId.str);
                    await this.ignorePayload(payloadSize, `object ${header.objectId.str}`);
            }
            remainingHeaderSize -= header.objectSize;
        }
        if (remainingHeaderSize !== 0) throw new (0, _asfObjectJs.AsfContentParseError)(`ASF header child objects leave ${remainingHeaderSize} payload byte(s) unaccounted`);
    }
    async addTags(tags) {
        // MIME detection may suspend picture normalization; preserve the source order.
        for (const { id, value } of tags)await this.metadata.addTag(headerType, id, value);
    }
    async readObjectHeader(remainingSize, containerType) {
        if (remainingSize < _asfObjectJs.HeaderObjectToken.len) throw new (0, _asfObjectJs.AsfContentParseError)(`Insufficient ASF ${containerType} data for an object header: ${remainingSize} bytes`);
        const header = await this.readToken(_asfObjectJs.HeaderObjectToken);
        if (header.objectSize > remainingSize) throw new (0, _asfObjectJs.AsfContentParseError)(`ASF ${containerType} object size ${header.objectSize} exceeds remaining ${containerType} payload size ${remainingSize}`);
        return {
            header,
            payloadSize: this.validatePayloadAvailability(header, `${containerType} object`)
        };
    }
    validatePayloadAvailability(header, objectType) {
        const payloadSize = header.objectSize - _asfObjectJs.HeaderObjectToken.len;
        const fileSize = this.tokenizer.fileInfo.size;
        if (fileSize !== undefined) {
            const available = fileSize - this.tokenizer.position;
            if (payloadSize > available) throw new (0, _asfObjectJs.AsfContentParseError)(`ASF ${objectType} payload size ${payloadSize} exceeds available input size ${available}`);
        }
        return payloadSize;
    }
    validateAllocationSize(payloadSize, objectType) {
        (0, _allocationJs.validateAllocation)(payloadSize, this.options, (message)=>new (0, _asfObjectJs.AsfContentParseError)(`ASF ${objectType}: ${message}`));
    }
    async ignorePayload(payloadSize, objectType) {
        let ignored;
        try {
            ignored = await this.tokenizer.ignore(payloadSize);
        } catch (error) {
            if (error instanceof (0, _strtok3.EndOfStreamError)) throw new (0, _asfObjectJs.AsfContentParseError)(`Unexpected end of ASF ${objectType}`);
            throw error;
        }
        if (ignored !== payloadSize) throw new (0, _asfObjectJs.AsfContentParseError)(`Unexpected end of ASF ${objectType}; missing ${payloadSize - ignored} bytes`);
    }
    async parseExtensionObject(extensionSize) {
        while(extensionSize > 0){
            const { header, payloadSize } = await this.readObjectHeader(extensionSize, 'extension');
            // Parse data part of the ASF Object
            switch(header.objectId.str){
                case _asfObjectJs.ExtendedStreamPropertiesObjectState.guid.str:
                    {
                        // 4.1
                        this.validateAllocationSize(payloadSize, 'Extended Stream Properties Object');
                        const extended = await this.readToken(new _asfObjectJs.ExtendedStreamPropertiesObjectState(header));
                        this.extendedStreams.set(extended.streamNumber, extended);
                        if (extended.streamPropertiesObject) {
                            const stream = extended.streamPropertiesObject;
                            this.streams.set(stream.streamNumber, stream);
                            this.metadata.setFormat('container', `ASF/${stream.streamType}`);
                        }
                        break;
                    }
                case _asfObjectJs.MetadataObjectState.guid.str:
                    {
                        // 4.7
                        this.validateAllocationSize(payloadSize, 'Metadata Object');
                        const moTags = await this.readToken(new _asfObjectJs.MetadataObjectState(header));
                        await this.addTags(moTags);
                        break;
                    }
                case _asfObjectJs.MetadataLibraryObjectState.guid.str:
                    {
                        // 4.8
                        this.validateAllocationSize(payloadSize, 'Metadata Library Object');
                        const mlTags = await this.readToken(new _asfObjectJs.MetadataLibraryObjectState(header));
                        await this.addTags(mlTags);
                        break;
                    }
                case (0, _asfGuidJsDefault.default).PaddingObject.str:
                    // ToDo: register bytes pad
                    await this.ignorePayload(payloadSize, 'extension Padding Object');
                    break;
                case (0, _asfGuidJsDefault.default).CompatibilityObject.str:
                    await this.ignorePayload(payloadSize, 'Compatibility Object');
                    break;
                case (0, _asfGuidJsDefault.default).ASF_Index_Placeholder_Object.str:
                    await this.ignorePayload(payloadSize, 'Index Placeholder Object');
                    break;
                default:
                    this.metadata.addWarning(`Ignore ASF-Object-GUID: ${header.objectId.str}`);
                    // console.log("Ignore ASF-Object-GUID: %s", header.objectId.str);
                    await this.ignorePayload(payloadSize, `extension object ${header.objectId.str}`);
                    break;
            }
            extensionSize -= header.objectSize;
        }
    }
}

},{"debug":"4XIdh","strtok3":"7L6Gs","token-types":"al35Q","../common/Allocation.js":"8ZVyl","../common/BasicParser.js":"91dLC","../type.js":"a50Lj","./AsfGuid.js":"fvtcJ","./AsfObject.js":"9lsMa","@parcel/transformer-js/src/esmodule-helpers.js":"53hI8"}],"fvtcJ":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _winGuid = require("win-guid");
class AsfGuid {
    // 10.1 Top-level ASF object GUIDs
    static HeaderObject = new AsfGuid('75B22630-668E-11CF-A6D9-00AA0062CE6C');
    static DataObject = new AsfGuid('75B22636-668E-11CF-A6D9-00AA0062CE6C');
    static SimpleIndexObject = new AsfGuid('33000890-E5B1-11CF-89F4-00A0C90349CB');
    static IndexObject = new AsfGuid('D6E229D3-35DA-11D1-9034-00A0C90349BE');
    static MediaObjectIndexObject = new AsfGuid('FEB103F8-12AD-4C64-840F-2A1D2F7AD48C');
    static TimecodeIndexObject = new AsfGuid('3CB73FD0-0C4A-4803-953D-EDF7B6228F0C');
    // 10.2 Header Object GUIDs
    static FilePropertiesObject = new AsfGuid('8CABDCA1-A947-11CF-8EE4-00C00C205365');
    static StreamPropertiesObject = new AsfGuid('B7DC0791-A9B7-11CF-8EE6-00C00C205365');
    static HeaderExtensionObject = new AsfGuid('5FBF03B5-A92E-11CF-8EE3-00C00C205365');
    static CodecListObject = new AsfGuid('86D15240-311D-11D0-A3A4-00A0C90348F6');
    static ScriptCommandObject = new AsfGuid('1EFB1A30-0B62-11D0-A39B-00A0C90348F6');
    static MarkerObject = new AsfGuid('F487CD01-A951-11CF-8EE6-00C00C205365');
    static BitrateMutualExclusionObject = new AsfGuid('D6E229DC-35DA-11D1-9034-00A0C90349BE');
    static ErrorCorrectionObject = new AsfGuid('75B22635-668E-11CF-A6D9-00AA0062CE6C');
    static ContentDescriptionObject = new AsfGuid('75B22633-668E-11CF-A6D9-00AA0062CE6C');
    static ExtendedContentDescriptionObject = new AsfGuid('D2D0A440-E307-11D2-97F0-00A0C95EA850');
    static ContentBrandingObject = new AsfGuid('2211B3FA-BD23-11D2-B4B7-00A0C955FC6E');
    static StreamBitratePropertiesObject = new AsfGuid('7BF875CE-468D-11D1-8D82-006097C9A2B2');
    static ContentEncryptionObject = new AsfGuid('2211B3FB-BD23-11D2-B4B7-00A0C955FC6E');
    static ExtendedContentEncryptionObject = new AsfGuid('298AE614-2622-4C17-B935-DAE07EE9289C');
    static DigitalSignatureObject = new AsfGuid('2211B3FC-BD23-11D2-B4B7-00A0C955FC6E');
    static PaddingObject = new AsfGuid('1806D474-CADF-4509-A4BA-9AABCB96AAE8');
    // 10.3 Header Extension Object GUIDs
    static ExtendedStreamPropertiesObject = new AsfGuid('14E6A5CB-C672-4332-8399-A96952065B5A');
    static AdvancedMutualExclusionObject = new AsfGuid('A08649CF-4775-4670-8A16-6E35357566CD');
    static GroupMutualExclusionObject = new AsfGuid('D1465A40-5A79-4338-B71B-E36B8FD6C249');
    static StreamPrioritizationObject = new AsfGuid('D4FED15B-88D3-454F-81F0-ED5C45999E24');
    static BandwidthSharingObject = new AsfGuid('A69609E6-517B-11D2-B6AF-00C04FD908E9');
    static LanguageListObject = new AsfGuid('7C4346A9-EFE0-4BFC-B229-393EDE415C85');
    static MetadataObject = new AsfGuid('C5F8CBEA-5BAF-4877-8467-AA8C44FA4CCA');
    static MetadataLibraryObject = new AsfGuid('44231C94-9498-49D1-A141-1D134E457054');
    static IndexParametersObject = new AsfGuid('D6E229DF-35DA-11D1-9034-00A0C90349BE');
    static MediaObjectIndexParametersObject = new AsfGuid('6B203BAD-3F11-48E4-ACA8-D7613DE2CFA7');
    static TimecodeIndexParametersObject = new AsfGuid('F55E496D-9797-4B5D-8C8B-604DFE9BFB24');
    static CompatibilityObject = new AsfGuid('26F18B5D-4584-47EC-9F5F-0E651F0452C9');
    static AdvancedContentEncryptionObject = new AsfGuid('43058533-6981-49E6-9B74-AD12CB86D58C');
    // 10.4 Stream Properties Object Stream Type GUIDs
    static AudioMedia = new AsfGuid('F8699E40-5B4D-11CF-A8FD-00805F5C442B');
    static VideoMedia = new AsfGuid('BC19EFC0-5B4D-11CF-A8FD-00805F5C442B');
    static CommandMedia = new AsfGuid('59DACFC0-59E6-11D0-A3AC-00A0C90348F6');
    static JFIF_Media = new AsfGuid('B61BE100-5B4E-11CF-A8FD-00805F5C442B');
    static Degradable_JPEG_Media = new AsfGuid('35907DE0-E415-11CF-A917-00805F5C442B');
    static FileTransferMedia = new AsfGuid('91BD222C-F21C-497A-8B6D-5AA86BFC0185');
    static BinaryMedia = new AsfGuid('3AFB65E2-47EF-40F2-AC2C-70A90D71D343');
    static ASF_Index_Placeholder_Object = new AsfGuid('D9AADE20-7C17-4F9C-BC28-8555DD98E2A2');
    static fromBin(bin, offset = 0) {
        return new AsfGuid(AsfGuid.decode(bin, offset));
    }
    /**
     * Decode GUID in format like "B503BF5F-2EA9-CF11-8EE3-00C00C205365"
     * @param objectId Binary GUID
     * @param offset Read offset in bytes, default 0
     * @returns GUID as dashed hexadecimal representation
     */ static decode(objectId, offset = 0) {
        return new (0, _winGuid.Guid)(objectId.subarray(offset, offset + 16)).toString();
    }
    /**
     * Decode stream type
     * @param mediaType Media type GUID
     * @returns Media type
     */ static decodeMediaType(mediaType) {
        switch(mediaType.str){
            case AsfGuid.AudioMedia.str:
                return 'audio';
            case AsfGuid.VideoMedia.str:
                return 'video';
            case AsfGuid.CommandMedia.str:
                return 'command';
            case AsfGuid.Degradable_JPEG_Media.str:
                return 'degradable-jpeg';
            case AsfGuid.FileTransferMedia.str:
                return 'file-transfer';
            case AsfGuid.BinaryMedia.str:
                return 'binary';
        }
    }
    /**
     * Encode GUID
     * @param guid GUID like: "B503BF5F-2EA9-CF11-8EE3-00C00C205365"
     * @returns Encoded Binary GUID
     */ static encode(guid) {
        return (0, _winGuid.parseWindowsGuid)(guid);
    }
    str;
    constructor(str){
        this.str = str;
    }
    equals(guid) {
        return this.str === guid.str;
    }
    toBin() {
        return AsfGuid.encode(this.str);
    }
}
exports.default = AsfGuid;

},{"win-guid":"l3iqO","@parcel/transformer-js/src/esmodule-helpers.js":"53hI8"}],"l3iqO":[function(require,module,exports,__globalThis) {
/**
 * Parse canonical GUID string (xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx)
 * into Windows / CFBF byte order.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "parseWindowsGuid", ()=>parseWindowsGuid);
parcelHelpers.export(exports, "Guid", ()=>Guid);
function parseWindowsGuid(guid) {
    let s = guid.trim();
    // Keep validation readable and strict, avoid lowercasing allocations
    if (s.length !== 36 || s[8] !== "-" || s[13] !== "-" || s[18] !== "-" || s[23] !== "-") throw new Error(`Invalid GUID format: ${guid}`);
    let v;
    const out = new Uint8Array(16);
    // Data1: 8 hex, uint32 little-endian
    v = parseInt(s.slice(0, 8), 16);
    out[0] = v & 0xff;
    out[1] = v >>> 8 & 0xff;
    out[2] = v >>> 16 & 0xff;
    out[3] = v >>> 24 & 0xff;
    // Data2: 4 hex, uint16 little-endian
    v = parseInt(s.slice(9, 13), 16);
    out[4] = v & 0xff;
    out[5] = v >>> 8 & 0xff;
    // Data3: 4 hex, uint16 little-endian
    v = parseInt(s.slice(14, 18), 16);
    out[6] = v & 0xff;
    out[7] = v >>> 8 & 0xff;
    // Data4: 4 hex, as-is (string order)
    v = parseInt(s.slice(19, 23), 16);
    out[8] = v >>> 8 & 0xff;
    out[9] = v & 0xff;
    // Data5: 12 hex, 6 bytes, as-is (string order)
    // Parse as two chunks to avoid any precision worries, keep it simple.
    v = parseInt(s.slice(24, 32), 16); // 8 hex -> 4 bytes
    out[10] = v >>> 24 & 0xff;
    out[11] = v >>> 16 & 0xff;
    out[12] = v >>> 8 & 0xff;
    out[13] = v & 0xff;
    v = parseInt(s.slice(32, 36), 16); // 4 hex -> 2 bytes
    out[14] = v >>> 8 & 0xff;
    out[15] = v & 0xff;
    // Ensure all parsed parts were valid hex (parseInt can yield NaN)
    for(let i = 0; i < 16; i++){
        if (!Number.isFinite(out[i])) throw new Error(`Invalid GUID format: ${guid}`);
    }
    // Also catch NaN early (more useful error locality)
    // If any parseInt produced NaN, assignments above would have become 0,
    // so instead validate hex characters directly with a lightweight check.
    // (Keeps code small while staying strict.)
    if (!/^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/.test(s)) throw new Error(`Invalid GUID format: ${guid}`);
    return out;
}
class Guid {
    constructor(bytes){
        if (bytes.length !== 16) throw new Error("GUID must be exactly 16 bytes");
        this.bytes = bytes;
    }
    static fromString(guid) {
        return new Guid(parseWindowsGuid(guid));
    }
    /**
     * Convert Windows / CFBF byte order into canonical GUID string:
     * xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
     */ toString() {
        const b = this.bytes;
        const hx = (n)=>n.toString(16).padStart(2, "0");
        // Data1 (uint32 LE) -> big-endian text
        const g1 = hx(b[3]) + hx(b[2]) + hx(b[1]) + hx(b[0]);
        // Data2 (uint16 LE)
        const g2 = hx(b[5]) + hx(b[4]);
        // Data3 (uint16 LE)
        const g3 = hx(b[7]) + hx(b[6]);
        // Data4 (as-is)
        const g4 = hx(b[8]) + hx(b[9]);
        // Data5 (as-is)
        const g5 = hx(b[10]) + hx(b[11]) + hx(b[12]) + hx(b[13]) + hx(b[14]) + hx(b[15]);
        return `${g1}-${g2}-${g3}-${g4}-${g5}`.toUpperCase();
    }
    /**
     * Compare against a Uint8Array containing GUID bytes
     * in Windows / CFBF layout.
     */ equals(buf, offset = 0) {
        if (offset < 0 || buf.length - offset < 16) return false;
        const a = this.bytes;
        for(let i = 0; i < 16; i++){
            if (buf[offset + i] !== a[i]) return false;
        }
        return true;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"53hI8"}],"9lsMa":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AsfContentParseError", ()=>AsfContentParseError);
parcelHelpers.export(exports, "DataType", ()=>DataType);
parcelHelpers.export(exports, "TopLevelHeaderObjectToken", ()=>TopLevelHeaderObjectToken);
parcelHelpers.export(exports, "HeaderObjectToken", ()=>HeaderObjectToken);
parcelHelpers.export(exports, "State", ()=>State);
/**
 * Token for: 3.2: File Properties Object (mandatory, one only)
 * Ref: http://drang.s4.xrea.com/program/tips/id3tag/wmp/03_asf_top_level_header_object.html#3_2
 */ parcelHelpers.export(exports, "FilePropertiesObject", ()=>FilePropertiesObject);
/**
 * Token for: 3.3 Stream Properties Object (mandatory, one per stream)
 * Ref: http://drang.s4.xrea.com/program/tips/id3tag/wmp/03_asf_top_level_header_object.html#3_3
 */ parcelHelpers.export(exports, "StreamPropertiesObject", ()=>StreamPropertiesObject);
/**
 * 3.4: Header Extension Object (mandatory, one only)
 * Ref: http://drang.s4.xrea.com/program/tips/id3tag/wmp/03_asf_top_level_header_object.html#3_4
 */ parcelHelpers.export(exports, "HeaderExtensionObject", ()=>HeaderExtensionObject);
/**
 * 3.5: Read the Codec-List-Object, which provides user-friendly information about the codecs and formats used to encode the content found in the ASF file.
 * Ref: http://drang.s4.xrea.com/program/tips/id3tag/wmp/03_asf_top_level_header_object.html#3_5
 */ parcelHelpers.export(exports, "readCodecEntries", ()=>readCodecEntries);
/**
 * 3.10 Content Description Object (optional, one only)
 * Ref: http://drang.s4.xrea.com/program/tips/id3tag/wmp/03_asf_top_level_header_object.html#3_10
 */ parcelHelpers.export(exports, "ContentDescriptionObjectState", ()=>ContentDescriptionObjectState);
/**
 * 3.11 Extended Content Description Object (optional, one only)
 * Ref: http://drang.s4.xrea.com/program/tips/id3tag/wmp/03_asf_top_level_header_object.html#3_11
 */ parcelHelpers.export(exports, "ExtendedContentDescriptionObjectState", ()=>ExtendedContentDescriptionObjectState);
/**
 * 4.1 Extended Stream Properties Object (optional, 1 per media stream)
 * Ref: http://drang.s4.xrea.com/program/tips/id3tag/wmp/04_objects_in_the_asf_header_extension_object.html#4_1
 */ parcelHelpers.export(exports, "ExtendedStreamPropertiesObjectState", ()=>ExtendedStreamPropertiesObjectState);
/**
 * 4.7  Metadata Object (optional, 0 or 1)
 * Ref: http://drang.s4.xrea.com/program/tips/id3tag/wmp/04_objects_in_the_asf_header_extension_object.html#4_7
 */ parcelHelpers.export(exports, "MetadataObjectState", ()=>MetadataObjectState);
// 4.8	Metadata Library Object (optional, 0 or 1)
parcelHelpers.export(exports, "MetadataLibraryObjectState", ()=>MetadataLibraryObjectState);
/**
 * Ref: https://msdn.microsoft.com/en-us/library/windows/desktop/dd757977(v=vs.85).aspx
 */ parcelHelpers.export(exports, "WmPictureToken", ()=>WmPictureToken);
var _allocationJs = require("../common/Allocation.js");
// ASF Objects
var _strtok3 = require("strtok3");
var _tokenTypes = require("token-types");
var _id3V2TokenJs = require("../id3v2/ID3v2Token.js");
var _parseErrorJs = require("../ParseError.js");
var _asfGuidJs = require("./AsfGuid.js");
var _asfGuidJsDefault = parcelHelpers.interopDefault(_asfGuidJs);
var _asfUtilJs = require("./AsfUtil.js");
class AsfContentParseError extends (0, _parseErrorJs.makeUnexpectedFileContentError)('ASF') {
}
/** Synchronous reads restricted to one declared ASF object payload. */ class ByteCursor {
    context;
    data;
    position = 0;
    constructor(buf, off, length, context){
        this.context = context;
        if (off < 0 || length < 0 || length > buf.length - off) throw new AsfContentParseError(`Truncated ${context}`);
        this.data = buf.subarray(off, off + length);
    }
    get remaining() {
        return this.data.length - this.position;
    }
    require(length, message = `Truncated ${this.context}`) {
        if (length > this.remaining) throw new AsfContentParseError(message);
    }
    read(token) {
        this.require(token.len);
        const value = token.get(this.data, this.position);
        this.position += token.len;
        return value;
    }
    bytes(length, message) {
        this.require(length, message);
        const start = this.position;
        this.position += length;
        return this.data.subarray(start, this.position);
    }
}
const DataType = {
    /**
     * Unicode string. The data consists of a sequence of Unicode characters.
     */ UnicodeString: 0,
    /**
     * BYTE array. The type of data is implementation-specific.
     */ ByteArray: 1,
    /**
     * BOOL. The data is 2 bytes long and should be interpreted as a 16-bit unsigned integer. Only 0x0000 or 0x0001 are permitted values.
     */ Bool: 2,
    /**
     * DWORD. The data is 4 bytes long and should be interpreted as a 32-bit unsigned integer.
     */ DWord: 3,
    /**
     * QWORD. The data is 8 bytes long and should be interpreted as a 64-bit unsigned integer.
     */ QWord: 4,
    /**
     * WORD. The data is 2 bytes long and should be interpreted as a 16-bit unsigned integer.
     */ Word: 5
};
const TopLevelHeaderObjectToken = {
    len: 30,
    get: (buf, off)=>{
        const base = HeaderObjectToken.get(buf, off);
        if (base.objectSize < TopLevelHeaderObjectToken.len) throw new AsfContentParseError(`Invalid ASF top-level header object size: ${base.objectSize}`);
        return {
            ...base,
            numberOfHeaderObjects: _tokenTypes.UINT32_LE.get(buf, off + 24)
        };
    }
};
const HeaderObjectToken = {
    len: 24,
    get: (buf, off)=>{
        const objectSize = _tokenTypes.UINT64_LE.get(buf, off + 16);
        if (objectSize < BigInt(HeaderObjectToken.len) || objectSize > BigInt(Number.MAX_SAFE_INTEGER)) throw new AsfContentParseError(`Invalid ASF header object size: ${objectSize}`);
        const header = {
            objectId: (0, _asfGuidJsDefault.default).fromBin(buf, off),
            objectSize: Number(objectSize)
        };
        return header;
    }
};
class State {
    len;
    constructor(header){
        this.len = header.objectSize - HeaderObjectToken.len;
    }
    postProcessTag(tags, name, valueType, data) {
        if (name === 'WM/Picture') tags.push({
            id: name,
            value: WmPictureToken.fromBuffer(data)
        });
        else {
            const parseAttr = (0, _asfUtilJs.getParserForAttr)(valueType);
            if (!parseAttr) throw new AsfContentParseError(`unexpected value headerType: ${valueType}`);
            const buffer = data;
            const minimumLength = valueType === DataType.QWord ? 8 : valueType === DataType.DWord ? 4 : valueType === DataType.Bool || valueType === DataType.Word ? 2 : 0;
            if (buffer.length < minimumLength) throw new AsfContentParseError(`Truncated ASF attribute ${name} of type ${valueType}`);
            tags.push({
                id: name,
                value: parseAttr(buffer)
            });
        }
    }
}
class FilePropertiesObject extends State {
    static guid = (0, _asfGuidJsDefault.default).FilePropertiesObject;
    get(buf, off) {
        const flags = _tokenTypes.UINT32_LE.get(buf, off + 64);
        return {
            fileId: (0, _asfGuidJsDefault.default).fromBin(buf, off),
            fileSize: _tokenTypes.UINT64_LE.get(buf, off + 16),
            creationDate: _tokenTypes.UINT64_LE.get(buf, off + 24),
            dataPacketsCount: _tokenTypes.UINT64_LE.get(buf, off + 32),
            playDuration: _tokenTypes.UINT64_LE.get(buf, off + 40),
            sendDuration: _tokenTypes.UINT64_LE.get(buf, off + 48),
            preroll: _tokenTypes.UINT64_LE.get(buf, off + 56),
            flags: {
                broadcast: (flags & 1) !== 0,
                seekable: (flags & 2) !== 0
            },
            // flagsNumeric: Token.UINT32_LE.get(buf, off + 64),
            minimumDataPacketSize: _tokenTypes.UINT32_LE.get(buf, off + 68),
            maximumDataPacketSize: _tokenTypes.UINT32_LE.get(buf, off + 72),
            maximumBitrate: _tokenTypes.UINT32_LE.get(buf, off + 76)
        };
    }
}
class StreamPropertiesObject extends State {
    static guid = (0, _asfGuidJsDefault.default).StreamPropertiesObject;
    get(buf, off) {
        const available = Math.min(this.len, buf.length - off);
        if (available < 54) throw new AsfContentParseError('Truncated Stream Properties Object');
        const typeSpecificSize = _tokenTypes.UINT32_LE.get(buf, off + 40);
        const correctionSize = _tokenTypes.UINT32_LE.get(buf, off + 44);
        if (typeSpecificSize + correctionSize > available - 54) throw new AsfContentParseError('ASF stream data exceeds Stream Properties Object payload');
        const result = {
            streamType: (0, _asfGuidJsDefault.default).decodeMediaType((0, _asfGuidJsDefault.default).fromBin(buf, off)),
            errorCorrectionType: (0, _asfGuidJsDefault.default).fromBin(buf, off + 16),
            streamNumber: _tokenTypes.UINT16_LE.get(buf, off + 48) & 0x7f
        };
        const data = off + 54;
        if (result.streamType === 'audio' && typeSpecificSize >= 16) {
            result.codecId = `0x${_tokenTypes.UINT16_LE.get(buf, data).toString(16).padStart(4, '0')}`;
            result.audio = {
                channels: _tokenTypes.UINT16_LE.get(buf, data + 2),
                samplingFrequency: _tokenTypes.UINT32_LE.get(buf, data + 4)
            };
            const bitDepth = _tokenTypes.UINT16_LE.get(buf, data + 14);
            if (bitDepth > 0) result.audio.bitDepth = bitDepth;
            const bytesPerSecond = _tokenTypes.UINT32_LE.get(buf, data + 8);
            if (bytesPerSecond > 0) result.bitrate = bytesPerSecond * 8;
        } else if (result.streamType === 'video' && typeSpecificSize >= 11) {
            result.video = {
                pixelWidth: _tokenTypes.UINT32_LE.get(buf, data),
                pixelHeight: _tokenTypes.UINT32_LE.get(buf, data + 4)
            };
            // ASF specification 9.2: DWORD width, DWORD height, BYTE flags, WORD format size.
            // The packed BITMAPINFOHEADER follows at +11; its compression DWORD is at +16.
            const formatSize = _tokenTypes.UINT16_LE.get(buf, data + 9);
            if (formatSize > typeSpecificSize - 11) throw new AsfContentParseError('ASF video format data exceeds stream data');
            if (formatSize >= 20) result.codecId = new _tokenTypes.StringType(4, 'ascii').get(buf, data + 27);
        }
        return result;
    }
}
class HeaderExtensionObject {
    static guid = (0, _asfGuidJsDefault.default).HeaderExtensionObject;
    len;
    constructor(){
        this.len = 22;
    }
    get(buf, off) {
        if (off < 0 || this.len > buf.length - off) throw new AsfContentParseError('Truncated Header Extension Object');
        const view = new DataView(buf.buffer, buf.byteOffset + off, this.len);
        return {
            reserved1: (0, _asfGuidJsDefault.default).fromBin(buf, off),
            reserved2: view.getUint16(16, true),
            extensionDataSize: view.getUint32(18, true)
        };
    }
}
/**
 * 3.5: The Codec List Object provides user-friendly information about the codecs and formats used to encode the content found in the ASF file.
 * Ref: http://drang.s4.xrea.com/program/tips/id3tag/wmp/03_asf_top_level_header_object.html#3_5
 */ const CodecListObjectHeader = {
    len: 20,
    get: (buf, off)=>{
        const view = new DataView(buf.buffer, off);
        return {
            entryCount: view.getUint16(16, true)
        };
    }
};
async function readString(reader) {
    const length = await reader.readNumber(_tokenTypes.UINT16_LE);
    return (await reader.readToken(new _tokenTypes.StringType(length * 2, 'utf-16le'))).replace('\0', '');
}
async function readCodecEntries(tokenizer, payloadSize, maxEntries = (0, _allocationJs.defaultMaxMetadataEntries)) {
    const reader = (0, _strtok3.createTokenizerView)(tokenizer, payloadSize);
    const entries = [];
    try {
        const codecHeader = await reader.readToken(CodecListObjectHeader);
        if (codecHeader.entryCount > maxEntries) throw new AsfContentParseError(`ASF Codec List entry count ${codecHeader.entryCount} exceeds entry limit ${maxEntries}`);
        for(let i = 0; i < codecHeader.entryCount; ++i)entries.push(await readCodecEntry(reader));
        await reader.consumeRemainder();
    } catch (error) {
        if (error instanceof (0, _strtok3.EndOfStreamError) || error instanceof (0, _strtok3.TokenizerBoundaryError)) throw new AsfContentParseError(`Unexpected end of ASF Codec List Object: ${error.message}`);
        throw error;
    } finally{
        await reader.close();
    }
    return entries;
}
async function readInformation(reader) {
    const length = await reader.readNumber(_tokenTypes.UINT16_LE);
    return reader.readToken(new _tokenTypes.Uint8ArrayType(length));
}
/**
 * Read Codec-Entries
 * @param reader
 */ async function readCodecEntry(reader) {
    const type = await reader.readNumber(_tokenTypes.UINT16_LE);
    return {
        type: {
            videoCodec: (type & 0x0001) === 0x0001,
            audioCodec: (type & 0x0002) === 0x0002
        },
        codecName: await readString(reader),
        description: await readString(reader),
        information: await readInformation(reader)
    };
}
class ContentDescriptionObjectState extends State {
    static guid = (0, _asfGuidJsDefault.default).ContentDescriptionObject;
    static contentDescTags = [
        'Title',
        'Author',
        'Copyright',
        'Description',
        'Rating'
    ];
    get(buf, off) {
        const cursor = new ByteCursor(buf, off, this.len, 'Content Description Object');
        const lengths = cursor.bytes(10, 'Truncated Content Description Object');
        const tags = [];
        for (const [i, tagName] of ContentDescriptionObjectState.contentDescTags.entries()){
            const length = _tokenTypes.UINT16_LE.get(lengths, i * 2);
            const value = cursor.bytes(length, `${tagName} length ${length} exceeds Content Description payload`);
            if (length > 0) tags.push({
                id: tagName,
                value: (0, _asfUtilJs.parseUnicodeAttr)(value)
            });
        }
        return tags;
    }
}
class ExtendedContentDescriptionObjectState extends State {
    static guid = (0, _asfGuidJsDefault.default).ExtendedContentDescriptionObject;
    get(buf, off) {
        const cursor = new ByteCursor(buf, off, this.len, 'Extended Content Description Object');
        const tags = [];
        const attrCount = cursor.read(_tokenTypes.UINT16_LE);
        if (attrCount > cursor.remaining / 6) throw new AsfContentParseError('Extended Content Description count exceeds payload');
        for(let i = 0; i < attrCount; i += 1){
            cursor.require(6, 'Truncated Extended Content Description record');
            const nameLen = cursor.read(_tokenTypes.UINT16_LE);
            cursor.require(nameLen + 4, 'Extended Content Description name exceeds payload');
            const name = (0, _asfUtilJs.parseUnicodeAttr)(cursor.bytes(nameLen, 'Extended Content Description name exceeds payload'));
            const valueType = cursor.read(_tokenTypes.UINT16_LE);
            const valueLen = cursor.read(_tokenTypes.UINT16_LE);
            const value = cursor.bytes(valueLen, 'Extended Content Description value exceeds payload');
            this.postProcessTag(tags, name, valueType, value);
        }
        return tags;
    }
}
class ExtendedStreamPropertiesObjectState extends State {
    static guid = (0, _asfGuidJsDefault.default).ExtendedStreamPropertiesObject;
    get(buf, off) {
        const end = off + Math.min(this.len, buf.length - off);
        if (end - off < 64) throw new AsfContentParseError('Truncated Extended Stream Properties Object');
        const flags = _tokenTypes.UINT32_LE.get(buf, off + 44);
        const result = {
            startTime: _tokenTypes.UINT64_LE.get(buf, off),
            endTime: _tokenTypes.UINT64_LE.get(buf, off + 8),
            dataBitrate: _tokenTypes.UINT32_LE.get(buf, off + 16),
            bufferSize: _tokenTypes.UINT32_LE.get(buf, off + 20),
            initialBufferFullness: _tokenTypes.UINT32_LE.get(buf, off + 24),
            alternateDataBitrate: _tokenTypes.UINT32_LE.get(buf, off + 28),
            alternateBufferSize: _tokenTypes.UINT32_LE.get(buf, off + 32),
            alternateInitialBufferFullness: _tokenTypes.UINT32_LE.get(buf, off + 36),
            maximumObjectSize: _tokenTypes.UINT32_LE.get(buf, off + 40),
            flags: {
                reliableFlag: (flags & 1) !== 0,
                seekableFlag: (flags & 2) !== 0,
                resendLiveCleanpointsFlag: (flags & 8) !== 0
            },
            streamNumber: _tokenTypes.UINT16_LE.get(buf, off + 48) & 0x7f,
            streamLanguageId: _tokenTypes.UINT16_LE.get(buf, off + 50),
            averageTimePerFrame: Number(_tokenTypes.UINT64_LE.get(buf, off + 52)),
            streamNameCount: _tokenTypes.UINT16_LE.get(buf, off + 60),
            payloadExtensionSystems: _tokenTypes.UINT16_LE.get(buf, off + 62),
            streamNames: [],
            streamPropertiesObject: null
        };
        let cursor = off + 64;
        const requireBytes = (length)=>{
            if (length > end - cursor) throw new AsfContentParseError('ASF extended stream data exceeds object payload');
        };
        for(let index = 0; index < result.streamNameCount; ++index){
            requireBytes(4);
            const language = _tokenTypes.UINT16_LE.get(buf, cursor);
            const length = _tokenTypes.UINT16_LE.get(buf, cursor + 2);
            cursor += 4;
            requireBytes(length);
            result.streamNames.push({
                streamLanguageId: language,
                streamName: (0, _asfUtilJs.parseUnicodeAttr)(buf.subarray(cursor, cursor + length))
            });
            cursor += length;
        }
        for(let index = 0; index < result.payloadExtensionSystems; ++index){
            requireBytes(22);
            const length = _tokenTypes.UINT32_LE.get(buf, cursor + 18);
            cursor += 22;
            requireBytes(length);
            cursor += length;
        }
        if (cursor < end) {
            requireBytes(HeaderObjectToken.len);
            const header = HeaderObjectToken.get(buf, cursor);
            if (!header.objectId.equals((0, _asfGuidJsDefault.default).StreamPropertiesObject) || header.objectSize !== end - cursor) throw new AsfContentParseError('Invalid embedded ASF Stream Properties Object');
            result.streamPropertiesObject = new StreamPropertiesObject(header).get(buf, cursor + HeaderObjectToken.len);
        }
        return result;
    }
}
class MetadataObjectState extends State {
    static guid = (0, _asfGuidJsDefault.default).MetadataObject;
    get(uint8Array, off) {
        const cursor = new ByteCursor(uint8Array, off, this.len, 'Metadata Object');
        const tags = [];
        const descriptionRecordsCount = cursor.read(_tokenTypes.UINT16_LE);
        if (descriptionRecordsCount > cursor.remaining / 12) throw new AsfContentParseError('Metadata record count exceeds payload');
        for(let i = 0; i < descriptionRecordsCount; i += 1){
            cursor.require(12, 'Truncated Metadata record header');
            cursor.read(_tokenTypes.UINT32_LE); // Reserved and stream number
            const nameLen = cursor.read(_tokenTypes.UINT16_LE);
            const dataType = cursor.read(_tokenTypes.UINT16_LE);
            const dataLen = cursor.read(_tokenTypes.UINT32_LE);
            const name = (0, _asfUtilJs.parseUnicodeAttr)(cursor.bytes(nameLen, 'Metadata name exceeds payload'));
            const data = cursor.bytes(dataLen, 'Metadata value exceeds payload');
            this.postProcessTag(tags, name, dataType, data);
        }
        return tags;
    }
}
class MetadataLibraryObjectState extends MetadataObjectState {
    static guid = (0, _asfGuidJsDefault.default).MetadataLibraryObject;
}
class WmPictureToken {
    static fromBuffer(buffer) {
        const pic = new WmPictureToken(buffer.length);
        return pic.get(buffer, 0);
    }
    len;
    constructor(len){
        this.len = len;
    }
    get(buffer, offset) {
        const payload = buffer.subarray(offset, offset + this.len);
        if (payload.length < 5) throw new AsfContentParseError('Truncated ASF picture header');
        const view = new DataView(payload.buffer, payload.byteOffset, payload.byteLength);
        const typeId = view.getUint8(0);
        const size = view.getUint32(1, true);
        let index = 5;
        const readString = (field)=>{
            const start = index;
            while(index + 2 <= payload.length){
                const codeUnit = view.getUint16(index, true);
                index += 2;
                if (codeUnit === 0) return new _tokenTypes.StringType(index - start - 2, 'utf-16le').get(payload, start);
            }
            throw new AsfContentParseError(`Unterminated ASF picture ${field}`);
        };
        const format = readString('MIME type');
        const description = readString('description');
        return {
            type: (0, _id3V2TokenJs.AttachedPictureType)[typeId],
            format,
            description,
            size,
            data: payload.slice(index)
        };
    }
}

},{"../common/Allocation.js":"8ZVyl","strtok3":"7L6Gs","token-types":"al35Q","../id3v2/ID3v2Token.js":"eUTtS","../ParseError.js":"E03ox","./AsfGuid.js":"fvtcJ","./AsfUtil.js":"eMulJ","@parcel/transformer-js/src/esmodule-helpers.js":"53hI8"}],"eMulJ":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getParserForAttr", ()=>getParserForAttr);
parcelHelpers.export(exports, "parseUnicodeAttr", ()=>parseUnicodeAttr);
var _tokenTypes = require("token-types");
var _utilJs = require("../common/Util.js");
function getParserForAttr(i) {
    return attributeParsers[i];
}
function parseUnicodeAttr(uint8Array) {
    return _utilJs.stripNulls(_utilJs.decodeString(uint8Array, 'utf-16le'));
}
const attributeParsers = [
    parseUnicodeAttr,
    parseByteArrayAttr,
    parseBoolAttr,
    parseDWordAttr,
    parseQWordAttr,
    parseWordAttr,
    parseByteArrayAttr
];
function parseByteArrayAttr(buf) {
    return new Uint8Array(buf);
}
function parseBoolAttr(buf, offset = 0) {
    return parseWordAttr(buf, offset) === 1;
}
function parseDWordAttr(buf, offset = 0) {
    return _tokenTypes.UINT32_LE.get(buf, offset);
}
function parseQWordAttr(buf, offset = 0) {
    return _tokenTypes.UINT64_LE.get(buf, offset);
}
function parseWordAttr(buf, offset = 0) {
    return _tokenTypes.UINT16_LE.get(buf, offset);
}

},{"token-types":"al35Q","../common/Util.js":"Q4yiL","@parcel/transformer-js/src/esmodule-helpers.js":"53hI8"}]},["2H2Ty"], null, "parcelRequire2853", {})

//# sourceMappingURL=AsfParser.a09080f6.js.map
