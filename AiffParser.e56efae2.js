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
})({"82kRg":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SERVER_PORT = 3000;
var HMR_SECURE = false;
var HMR_ENV_HASH = "439701173a9199ea";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "719516dfe56efae2";
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

},{}],"9gmzP":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "parseGenre", ()=>parseGenre);
parcelHelpers.export(exports, "FrameParser", ()=>FrameParser);
parcelHelpers.export(exports, "Id3v2ContentError", ()=>Id3v2ContentError);
var _debug = require("debug");
var _debugDefault = parcelHelpers.interopDefault(_debug);
var _tokenTypes = require("token-types");
var _allocationJs = require("../common/Allocation.js");
var _utilJs = require("../common/Util.js");
var _id3V1ParserJs = require("../id3v1/ID3v1Parser.js");
var _parseErrorJs = require("../ParseError.js");
var _frameHeaderJs = require("./FrameHeader.js");
var _id3V2ChapterTokenJs = require("./ID3v2ChapterToken.js");
var _id3V2TokenJs = require("./ID3v2Token.js");
const debug = (0, _debugDefault.default)('music-metadata:id3v2:frame-parser');
const defaultEnc = 'latin1'; // latin1 == iso-8859-1;
const urlEnc = {
    encoding: defaultEnc,
    bom: false
};
function parseGenre(origVal, maxEntries = (0, _allocationJs.defaultMaxMetadataEntries)) {
    // match everything inside parentheses
    const genres = [];
    const addGenre = (genre)=>{
        if (genres.length >= maxEntries) throw new Id3v2ContentError(`TCON value count ${genres.length + 1} exceeds entry limit ${maxEntries}`);
        genres.push(genre);
    };
    let word = '';
    for(let offset = 0; offset < origVal.length;){
        const open = origVal.indexOf('(', offset);
        if (open < 0) {
            word += origVal.slice(offset);
            break;
        }
        word += origVal.slice(offset, open);
        if (origVal[open + 1] === '(') {
            word += '(';
            offset = open + 2;
            continue;
        }
        const close = origVal.indexOf(')', open + 1);
        if (close < 0) break;
        if (word !== '') {
            addGenre(word);
            word = '';
        }
        const genre = parseGenreCode(origVal.slice(open + 1, close));
        if (genre) addGenre(genre);
        offset = close + 1;
    }
    if (word) {
        if (genres.length === 0 && word.match(/^\d*$/)) word = parseGenreCode(word);
        if (word) addGenre(word);
    }
    return genres;
}
function parseGenreCode(code) {
    if (code === 'RX') return 'Remix';
    if (code === 'CR') return 'Cover';
    if (code.match(/^\d*$/)) return (0, _id3V1ParserJs.Genres)[Number.parseInt(code, 10)];
}
class FrameParser {
    maxEntries;
    embeddedFrameDepth = 0;
    major;
    warningCollector;
    /**
     * Create id3v2 frame parser
     * @param major - Major version, e.g. (4) for  id3v2.4
     * @param warningCollector - Used to collect decode issue
     */ constructor(major, warningCollector, maxEntries = (0, _allocationJs.defaultMaxMetadataEntries)){
        this.maxEntries = maxEntries;
        this.major = major;
        this.warningCollector = warningCollector;
    }
    validateTextValues = (count, context)=>{
        if (count > this.maxEntries) throw new Id3v2ContentError(`${context} value count ${count} exceeds entry limit ${this.maxEntries}`);
    };
    readData(uint8Array, type, includeCovers) {
        if (uint8Array.length === 0) {
            if (type === 'CHAP' || type === 'CTOC') throw new Id3v2ContentError(`Truncated ${type} header`);
            this.warningCollector.addWarning(`id3v2.${this.major} header has empty tag type=${type}`);
            return;
        }
        const { encoding, bom } = (0, _id3V2TokenJs.TextEncodingToken).get(uint8Array, 0);
        const length = uint8Array.length;
        let offset = 0;
        let output = []; // ToDo
        const nullTerminatorLength = FrameParser.getNullTerminatorLength(encoding);
        let fzero;
        debug(`Parsing tag type=${type}, encoding=${encoding}, bom=${bom}`);
        switch(type !== 'TXXX' && type[0] === 'T' ? 'T*' : type){
            case 'T*':
            case 'GRP1':
            case 'GP1':
            case 'IPL':
            case 'IPLS':
            case 'MVIN':
            case 'MVNM':
            case 'PCS':
            case 'PCST':
                {
                    let text;
                    try {
                        text = FrameParser.trimNullPadding(_utilJs.decodeString(uint8Array.subarray(1), encoding));
                    } catch (error) {
                        if (error instanceof Error) {
                            this.warningCollector.addWarning(`id3v2.${this.major} type=${type} header has invalid string value: ${error.message}`);
                            break;
                        }
                        throw error;
                    }
                    switch(type){
                        case 'TMCL':
                        case 'TIPL':
                        case 'IPL':
                        case 'IPLS':
                            output = this.functionList(this.splitValue(type, text));
                            break;
                        case 'TRK':
                        case 'TRCK':
                        case 'TPOS':
                        case 'TIT1':
                        case 'TIT2':
                        case 'TIT3':
                            output = text;
                            break;
                        case 'TCOM':
                        case 'TEXT':
                        case 'TOLY':
                        case 'TOPE':
                        case 'TPE1':
                        case 'TSRC':
                            // id3v2.3 defines that TCOM, TEXT, TOLY, TOPE & TPE1 values are separated by /
                            output = this.splitValue(type, text);
                            break;
                        case 'TCO':
                        case 'TCON':
                            {
                                const genres = [];
                                for (const value of this.splitValue(type, text))for (const genre of parseGenre(value, this.maxEntries)){
                                    this.validateTextValues(genres.length + 1, 'TCON');
                                    genres.push(genre);
                                }
                                output = genres;
                                break;
                            }
                        case 'PCS':
                        case 'PCST':
                            // TODO: Why `default` not results `1` but `''`?
                            output = this.major >= 4 ? this.splitValue(type, text) : [
                                text
                            ];
                            output = Array.isArray(output) && output[0] === '' ? 1 : 0;
                            break;
                        default:
                            output = this.major >= 4 ? this.splitValue(type, text) : [
                                text
                            ];
                    }
                    break;
                }
            case 'TXXX':
                {
                    const idAndData = FrameParser.readIdentifierAndData(uint8Array.subarray(1), encoding);
                    output = {
                        description: idAndData.id,
                        text: this.splitValue(type, FrameParser.trimNullPadding(_utilJs.decodeString(idAndData.data, encoding)), idAndData.id)
                    };
                    break;
                }
            case 'PIC':
            case 'APIC':
                if (includeCovers) {
                    const pic = {};
                    uint8Array = uint8Array.subarray(1);
                    switch(this.major){
                        case 2:
                            pic.format = _utilJs.decodeString(uint8Array.subarray(0, 3), 'latin1'); // 'latin1'; // latin1 == iso-8859-1;
                            uint8Array = uint8Array.subarray(3);
                            break;
                        case 3:
                        case 4:
                            fzero = _utilJs.findZero(uint8Array, defaultEnc);
                            pic.format = _utilJs.decodeString(uint8Array.subarray(0, fzero), defaultEnc);
                            uint8Array = uint8Array.subarray(fzero + 1);
                            break;
                        default:
                            throw makeUnexpectedMajorVersionError(this.major);
                    }
                    pic.format = FrameParser.fixPictureMimeType(pic.format);
                    pic.type = (0, _id3V2TokenJs.AttachedPictureType)[uint8Array[0]];
                    uint8Array = uint8Array.subarray(1);
                    fzero = _utilJs.findZero(uint8Array, encoding);
                    pic.description = _utilJs.decodeString(uint8Array.subarray(0, fzero), encoding);
                    uint8Array = uint8Array.subarray(fzero + nullTerminatorLength);
                    pic.data = uint8Array;
                    output = pic;
                }
                break;
            case 'CNT':
            case 'PCNT':
                output = (0, _utilJs.decodeUintBE)(uint8Array);
                break;
            case 'SYLT':
                {
                    const syltHeader = (0, _id3V2TokenJs.SyncTextHeader).get(uint8Array, 0);
                    uint8Array = uint8Array.subarray((0, _id3V2TokenJs.SyncTextHeader).len);
                    const result = {
                        descriptor: '',
                        language: syltHeader.language,
                        contentType: syltHeader.contentType,
                        timeStampFormat: syltHeader.timeStampFormat,
                        syncText: []
                    };
                    let readSyllables = false;
                    while(uint8Array.length > 0){
                        const nullStr = FrameParser.readNullTerminatedString(uint8Array, syltHeader.encoding);
                        uint8Array = uint8Array.subarray(nullStr.len);
                        if (readSyllables) {
                            this.validateTextValues(result.syncText.length + 1, 'SYLT');
                            const timestamp = _tokenTypes.UINT32_BE.get(uint8Array, 0);
                            uint8Array = uint8Array.subarray(_tokenTypes.UINT32_BE.len);
                            result.syncText.push({
                                text: nullStr.text,
                                timestamp
                            });
                        } else {
                            result.descriptor = nullStr.text;
                            readSyllables = true;
                        }
                    }
                    output = result;
                    break;
                }
            case 'ULT':
            case 'USLT':
            case 'COM':
            case 'COMM':
                {
                    const textHeader = (0, _id3V2TokenJs.TextHeader).get(uint8Array, offset);
                    offset += (0, _id3V2TokenJs.TextHeader).len;
                    const descriptorStr = FrameParser.readNullTerminatedString(uint8Array.subarray(offset), textHeader.encoding);
                    offset += descriptorStr.len;
                    const textStr = FrameParser.readNullTerminatedString(uint8Array.subarray(offset), textHeader.encoding);
                    const comment = {
                        language: textHeader.language,
                        descriptor: descriptorStr.text,
                        text: textStr.text
                    };
                    output = comment;
                    break;
                }
            case 'UFID':
                {
                    const ufid = FrameParser.readIdentifierAndData(uint8Array, defaultEnc);
                    output = {
                        owner_identifier: ufid.id,
                        identifier: ufid.data
                    };
                    break;
                }
            case 'PRIV':
                {
                    // private frame
                    const priv = FrameParser.readIdentifierAndData(uint8Array, defaultEnc);
                    output = {
                        owner_identifier: priv.id,
                        data: priv.data
                    };
                    break;
                }
            case 'POPM':
                {
                    // Popularimeter
                    uint8Array = uint8Array.subarray(offset);
                    const emailStr = FrameParser.readNullTerminatedString(uint8Array, urlEnc);
                    const email = emailStr.text;
                    uint8Array = uint8Array.subarray(emailStr.len);
                    if (uint8Array.length === 0) {
                        this.warningCollector.addWarning(`id3v2.${this.major} type=${type} POPM frame missing rating byte`);
                        output = {
                            email,
                            rating: 0,
                            counter: undefined
                        };
                        break;
                    }
                    const rating = _tokenTypes.UINT8.get(uint8Array, 0);
                    const counterBytes = uint8Array.subarray(_tokenTypes.UINT8.len);
                    output = {
                        email,
                        rating,
                        counter: counterBytes.length > 0 ? (0, _utilJs.decodeUintBE)(counterBytes) : undefined
                    };
                    break;
                }
            case 'GEOB':
                {
                    // General encapsulated object
                    // [encoding] <MIME> 0x00 <filename> 0x00/0x00 0x00 <description> 0x00/0x00 0x00 <data>
                    const encoding = (0, _id3V2TokenJs.TextEncodingToken).get(uint8Array, 0);
                    uint8Array = uint8Array.subarray(1);
                    const mimeTypeStr = FrameParser.readNullTerminatedString(uint8Array, urlEnc);
                    const mimeType = mimeTypeStr.text;
                    uint8Array = uint8Array.subarray(mimeTypeStr.len);
                    const filenameStr = FrameParser.readNullTerminatedString(uint8Array, encoding);
                    const filename = filenameStr.text;
                    uint8Array = uint8Array.subarray(filenameStr.len);
                    const descriptionStr = FrameParser.readNullTerminatedString(uint8Array, encoding);
                    const description = descriptionStr.text;
                    uint8Array = uint8Array.subarray(descriptionStr.len);
                    const geob = {
                        type: mimeType,
                        filename,
                        description,
                        data: uint8Array
                    };
                    output = geob;
                    break;
                }
            // W-Frames:
            case 'WCOM':
            case 'WCOP':
            case 'WOAF':
            case 'WOAR':
            case 'WOAS':
            case 'WORS':
            case 'WPAY':
            case 'WPUB':
                // Decode URL
                output = FrameParser.readNullTerminatedString(uint8Array, urlEnc).text;
                break;
            case 'WXXX':
                {
                    // [encoding] <description> 0x00/0x00 0x00 <url>
                    const encoding = (0, _id3V2TokenJs.TextEncodingToken).get(uint8Array, 0);
                    uint8Array = uint8Array.subarray(1);
                    const descriptionStr = FrameParser.readNullTerminatedString(uint8Array, encoding);
                    const description = descriptionStr.text;
                    uint8Array = uint8Array.subarray(descriptionStr.len);
                    // URL is always ISO-8859-1
                    output = {
                        description,
                        url: FrameParser.trimNullPadding(_utilJs.decodeString(uint8Array, defaultEnc))
                    };
                    break;
                }
            case 'WFD':
            case 'WFED':
                {
                    const encoding = (0, _id3V2TokenJs.TextEncodingToken).get(uint8Array, 0);
                    uint8Array = uint8Array.subarray(1);
                    output = FrameParser.readNullTerminatedString(uint8Array, encoding).text;
                    break;
                }
            case 'MCDI':
                // Music CD identifier
                output = uint8Array.subarray(0, length);
                break;
            // ID3v2 Chapters 1.0
            // https://mutagen-specs.readthedocs.io/en/latest/id3/id3v2-chapters-1.0.html#chapter-frame
            case 'CHAP':
                {
                    //  // Chapter frame
                    debug('Reading CHAP');
                    fzero = uint8Array.indexOf(0);
                    if (fzero < 0) throw new Id3v2ContentError('Missing CHAP element ID terminator');
                    if (length - fzero - 1 < (0, _id3V2ChapterTokenJs.ChapterInfo).len) throw new Id3v2ContentError('Truncated CHAP header');
                    const chapter = {
                        label: _utilJs.decodeString(uint8Array.subarray(0, fzero), defaultEnc),
                        info: (0, _id3V2ChapterTokenJs.ChapterInfo).get(uint8Array, fzero + 1),
                        frames: this.readEmbeddedFrames(uint8Array, fzero + 1 + (0, _id3V2ChapterTokenJs.ChapterInfo).len, includeCovers)
                    };
                    output = chapter;
                    break;
                }
            // ID3v2 Chapters 1.0
            // https://mutagen-specs.readthedocs.io/en/latest/id3/id3v2-chapters-1.0.html#table-of-contents-frame
            case 'CTOC':
                {
                    // Table of contents frame
                    debug('Reading CTOC');
                    // Element ID (null-terminated latin1)
                    const idEnd = uint8Array.indexOf(0);
                    if (idEnd < 0) throw new Id3v2ContentError('Missing CTOC element ID terminator');
                    if (length - idEnd - 1 < 2) throw new Id3v2ContentError('Truncated CTOC header');
                    const label = _utilJs.decodeString(uint8Array.subarray(0, idEnd), defaultEnc);
                    offset = idEnd + 1;
                    // Flags
                    const flags = _tokenTypes.UINT8.get(uint8Array, offset++);
                    const topLevel = (flags & 0x02) !== 0;
                    const ordered = (flags & 0x01) !== 0;
                    // Child element IDs
                    const entryCount = _tokenTypes.UINT8.get(uint8Array, offset++);
                    const childElementIds = [];
                    for(let i = 0; i < entryCount; i++){
                        const end = uint8Array.indexOf(0, offset);
                        if (end < 0) throw new Id3v2ContentError('Truncated CTOC child element ID');
                        const childId = _utilJs.decodeString(uint8Array.subarray(offset, end), defaultEnc);
                        childElementIds.push(childId);
                        offset = end + 1;
                    }
                    const toc = {
                        label,
                        flags: {
                            topLevel,
                            ordered
                        },
                        childElementIds,
                        // Optional embedded sub-frames (e.g. TIT2) follow after the child list.
                        frames: this.readEmbeddedFrames(uint8Array, offset, includeCovers)
                    };
                    output = toc;
                    break;
                }
            default:
                debug(`Warning: unsupported id3v2-tag-type: ${type}`);
                break;
        }
        return output;
    }
    readEmbeddedFrames(data, offset, includeCovers) {
        const frames = new Map();
        const headerLength = (0, _frameHeaderJs.getFrameHeaderLength)(this.major);
        while(offset < data.length){
            if (data.length - offset < headerLength) throw new Id3v2ContentError('Truncated embedded ID3v2 frame header');
            const frame = (0, _frameHeaderJs.readFrameHeader)(data.subarray(offset), this.major, this.warningCollector);
            offset += headerLength;
            if (frame.length > data.length - offset) throw new Id3v2ContentError(`Embedded ID3v2 frame ${frame.id} size ${frame.length} exceeds remaining chapter data`);
            this.validateTextValues(frames.size + 1, 'Embedded frame');
            if (this.embeddedFrameDepth >= 32) throw new Id3v2ContentError('Embedded ID3v2 frame nesting exceeds limit 32');
            ++this.embeddedFrameDepth;
            let value;
            try {
                value = this.readData(data.subarray(offset, offset + frame.length), frame.id, includeCovers);
            } finally{
                --this.embeddedFrameDepth;
            }
            offset += frame.length;
            frames.set(frame.id, value);
        }
        return frames;
    }
    static readNullTerminatedString(uint8Array, encoding) {
        const originalLen = uint8Array.length;
        const zeroIndex = _utilJs.findZero(uint8Array, encoding.encoding);
        if (zeroIndex >= originalLen) // No terminator found, decode the whole buffer
        return {
            text: _utilJs.decodeString(uint8Array, encoding.encoding),
            len: originalLen
        };
        const txt = uint8Array.subarray(0, zeroIndex);
        return {
            text: _utilJs.decodeString(txt, encoding.encoding),
            len: zeroIndex + FrameParser.getNullTerminatorLength(encoding.encoding)
        };
    }
    static fixPictureMimeType(pictureType) {
        pictureType = pictureType.toLocaleLowerCase();
        switch(pictureType){
            case 'jpg':
                return 'image/jpeg';
            case 'png':
                return 'image/png';
        }
        return pictureType;
    }
    /**
     * Converts TMCL (Musician credits list) or TIPL (Involved people list)
     * @param entries
     */ functionList(entries) {
        const roles = new Map();
        for(let i = 0; i < entries.length; i += 2){
            const role = entries[i];
            const people = entries[i + 1];
            if (role === undefined || people === undefined) break;
            const names = _utilJs.splitText(people, ',', 'people-list', this.validateTextValues, {
                keepEmpty: true
            });
            roles.set(role, (roles.get(role) ?? []).concat(names));
        }
        return Object.fromEntries(roles);
    }
    /**
     * id3v2.4 defines that multiple T* values are separated by 0x00
     * id3v2.3 defines that TCOM, TEXT, TOLY, TOPE & TPE1 values are separated by /
     * (TCON/TCO genre values are NOT slash-separated in ID3v2.3)
     * @param tag - Tag name
     * @param text - Concatenated tag value
     * @param description - User text description, for legacy slash-separated list compatibility
     * @returns Split tag value
     */ splitValue(tag, text, description = '') {
        let values;
        if (this.major < 4) {
            values = _utilJs.splitText(text, '\0', tag, this.validateTextValues, {
                keepEmpty: true
            });
            if (values.length > 1) // Involved-person lists use null-separated role/name pairs in all versions.
            {
                if (tag !== 'IPL' && tag !== 'IPLS') this.warningCollector.addWarning(`ID3v2.${this.major} ${tag} uses non standard null-separator.`);
            } else if ([
                /* v2.3: */ 'TPE1',
                'TPE2',
                'TPE3',
                'TPE4',
                'TCOM',
                'TEXT',
                'TOLY',
                'TOPE',
                /* v2.2: */ 'TP1',
                'TCM',
                'TXT',
                'TOA',
                'TOL',
                'TSRC',
                // Retain legacy support for nonstandard slash-separated credits.
                'IPL',
                'IPLS'
            ].includes(tag) || // Preserve arbitrary TXXX text (XML, URLs, paths, etc.). Only known list
            // descriptions retain compatibility with Picard's legacy '/' separator.
            // https://picard-docs.musicbrainz.org/en/v2.13/config/options_tags_compatibility_id3.html
            tag === 'TXXX' && [
                'ARTISTS',
                'MUSICBRAINZ ARTIST ID',
                'MUSICBRAINZ ALBUM ARTIST ID',
                'MUSICBRAINZ ALBUM TYPE',
                'ISRC'
            ].includes(description.toUpperCase())) // note that field Genre (TCON/TCO) is NOT in this list:
            // a genre like "Duo Cello/Piano" must stay intact
            values = _utilJs.splitText(text, '/', tag, this.validateTextValues, {
                keepEmpty: true
            });
        } else values = _utilJs.splitText(text, '\0', tag, this.validateTextValues, {
            keepEmpty: true
        });
        return FrameParser.trimArray(values);
    }
    static trimArray(values) {
        return values.map((value)=>FrameParser.trimNullPadding(value).trim());
    }
    static trimNullPadding(value) {
        let end = value.length;
        while(end > 0 && value.charCodeAt(end - 1) === 0)end--;
        return end === value.length ? value : value.slice(0, end);
    }
    static readIdentifierAndData(uint8Array, encoding) {
        const idStr = FrameParser.readNullTerminatedString(uint8Array, {
            encoding,
            bom: false
        });
        return {
            id: idStr.text,
            data: uint8Array.subarray(idStr.len)
        };
    }
    static getNullTerminatorLength(enc) {
        return enc.startsWith('utf-16') ? 2 : 1;
    }
}
class Id3v2ContentError extends (0, _parseErrorJs.makeUnexpectedFileContentError)('id3v2') {
}
function makeUnexpectedMajorVersionError(majorVer) {
    throw new Id3v2ContentError(`Unexpected majorVer: ${majorVer}`);
}

},{"debug":"4XIdh","token-types":"al35Q","../common/Allocation.js":"8ZVyl","../common/Util.js":"Q4yiL","../id3v1/ID3v1Parser.js":"fWBrl","../ParseError.js":"E03ox","./FrameHeader.js":"6ehJH","./ID3v2ChapterToken.js":"hAkC6","./ID3v2Token.js":"eUTtS","@parcel/transformer-js/src/esmodule-helpers.js":"53hI8"}],"6ehJH":[function(require,module,exports,__globalThis) {
// lib/id3v2/FrameHeader.ts
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Frame header length (bytes) depending on ID3v2 major version.
 */ parcelHelpers.export(exports, "getFrameHeaderLength", ()=>getFrameHeaderLength);
/**
 * Factory: parse a frame header from its header bytes (6 for v2.2, 10 for v2.3/v2.4).
 *
 * Note: It only *parses* and does light validation. It does not read payload bytes.
 */ parcelHelpers.export(exports, "readFrameHeader", ()=>readFrameHeader);
var _textCodec = require("@borewit/text-codec");
var _tokenTypes = require("token-types");
var _utilJs = require("../common/Util.js");
var _frameParserJs = require("./FrameParser.js");
var _id3V2TokenJs = require("./ID3v2Token.js");
function getFrameHeaderLength(majorVer) {
    switch(majorVer){
        case 2:
            return 6;
        case 3:
        case 4:
            return 10;
        default:
            throw makeUnexpectedMajorVersionError(majorVer);
    }
}
function readFrameFlags(b, majorVer) {
    // ID3v2.3 and ID3v2.4 use different bit layouts for the frame status and format flags.
    if (majorVer === 3) // ID3v2.3: status `%abc00000`, format `%ijk00000` (https://id3.org/id3v2.3.0)
    return {
        status: {
            tag_alter_preservation: _utilJs.getBit(b, 0, 7),
            file_alter_preservation: _utilJs.getBit(b, 0, 6),
            read_only: _utilJs.getBit(b, 0, 5)
        },
        format: {
            compression: _utilJs.getBit(b, 1, 7),
            encryption: _utilJs.getBit(b, 1, 6),
            grouping_identity: _utilJs.getBit(b, 1, 5),
            // Unsynchronisation and data-length-indicator do not exist as per-frame flags in ID3v2.3.
            unsynchronisation: false,
            data_length_indicator: false
        }
    };
    // ID3v2.4: status `%0abc0000`, format `%0h00kmnp` (https://id3.org/id3v2.4.0-structure)
    return {
        status: {
            tag_alter_preservation: _utilJs.getBit(b, 0, 6),
            file_alter_preservation: _utilJs.getBit(b, 0, 5),
            read_only: _utilJs.getBit(b, 0, 4)
        },
        format: {
            grouping_identity: _utilJs.getBit(b, 1, 6),
            compression: _utilJs.getBit(b, 1, 3),
            encryption: _utilJs.getBit(b, 1, 2),
            unsynchronisation: _utilJs.getBit(b, 1, 1),
            data_length_indicator: _utilJs.getBit(b, 1, 0)
        }
    };
}
function readFrameHeader(uint8Array, majorVer, warningCollector) {
    switch(majorVer){
        case 2:
            return parseFrameHeaderV22(uint8Array, majorVer, warningCollector);
        case 3:
        case 4:
            return parseFrameHeaderV23V24(uint8Array, majorVer, warningCollector);
        default:
            throw makeUnexpectedMajorVersionError(majorVer);
    }
}
function parseFrameHeaderV22(uint8Array, majorVer, warningCollector) {
    const header = {
        id: (0, _textCodec.textDecode)(uint8Array.subarray(0, 3), 'ascii'),
        length: _tokenTypes.UINT24_BE.get(uint8Array, 3)
    };
    if (!header.id.match(/^[A-Z0-9]{3}$/)) warningCollector.addWarning(`Invalid ID3v2.${majorVer} frame-header-ID: ${header.id}`);
    return header;
}
function parseFrameHeaderV23V24(uint8Array, majorVer, warningCollector) {
    const header = {
        id: (0, _textCodec.textDecode)(uint8Array.subarray(0, 4), 'ascii'),
        length: (majorVer === 4 ? (0, _id3V2TokenJs.UINT32SYNCSAFE) : _tokenTypes.UINT32_BE).get(uint8Array, 4),
        flags: readFrameFlags(uint8Array.subarray(8, 10), majorVer)
    };
    if (!header.id.match(/^[A-Z0-9]{4}$/)) warningCollector.addWarning(`Invalid ID3v2.${majorVer} frame-header-ID: ${header.id}`);
    return header;
}
function makeUnexpectedMajorVersionError(majorVer) {
    throw new (0, _frameParserJs.Id3v2ContentError)(`Unexpected majorVer: ${majorVer}`);
}

},{"@borewit/text-codec":"104u3","token-types":"al35Q","../common/Util.js":"Q4yiL","./FrameParser.js":"9gmzP","./ID3v2Token.js":"eUTtS","@parcel/transformer-js/src/esmodule-helpers.js":"53hI8"}],"hAkC6":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ChapterInfo", ()=>ChapterInfo);
var _tokenTypes = require("token-types");
const ChapterInfo = {
    len: 16,
    get: (buf, off)=>{
        const startOffset = _tokenTypes.UINT32_BE.get(buf, off + 8);
        const endOffset = _tokenTypes.UINT32_BE.get(buf, off + 12);
        return {
            startTime: _tokenTypes.UINT32_BE.get(buf, off),
            endTime: _tokenTypes.UINT32_BE.get(buf, off + 4),
            startOffset: startOffset === 0xffffffff ? undefined : startOffset,
            endOffset: endOffset === 0xffffffff ? undefined : endOffset
        };
    }
};

},{"token-types":"al35Q","@parcel/transformer-js/src/esmodule-helpers.js":"53hI8"}],"6YZCj":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ID3v2Parser", ()=>ID3v2Parser);
var _tokenTypes = require("token-types");
var _allocationJs = require("../common/Allocation.js");
var _frameHeaderJs = require("./FrameHeader.js");
var _frameParserJs = require("./FrameParser.js");
var _id3V2TokenJs = require("./ID3v2Token.js");
class ID3v2Parser {
    static removeUnsyncBytes(buffer) {
        let readI = 0;
        let writeI = 0;
        while(readI < buffer.length - 1){
            if (readI !== writeI) buffer[writeI] = buffer[readI];
            readI += buffer[readI] === 0xff && buffer[readI + 1] === 0 ? 2 : 1;
            writeI++;
        }
        if (readI < buffer.length) buffer[writeI++] = buffer[readI];
        return buffer.subarray(0, writeI);
    }
    static readFrameData(uint8Array, frameHeader, majorVer, includeCovers, warningCollector, maxEntries) {
        const frameParser = new (0, _frameParserJs.FrameParser)(majorVer, warningCollector, maxEntries);
        switch(majorVer){
            case 2:
                return frameParser.readData(uint8Array, frameHeader.id, includeCovers);
            case 3:
            case 4:
                if (frameHeader.flags?.format.unsynchronisation) uint8Array = ID3v2Parser.removeUnsyncBytes(uint8Array);
                if (frameHeader.flags?.format.data_length_indicator) uint8Array = uint8Array.subarray(4, uint8Array.length);
                return frameParser.readData(uint8Array, frameHeader.id, includeCovers);
            default:
                throw makeUnexpectedMajorVersionError(majorVer);
        }
    }
    /**
     * Create a combined tag key, of tag & description
     * @param tag e.g.: COM
     * @param description e.g. iTunPGAP
     * @returns string e.g. COM:iTunPGAP
     */ static makeDescriptionTagName(tag, description) {
        return tag + (description ? `:${description}` : '');
    }
    tokenizer = undefined;
    id3Header = undefined;
    metadata = undefined;
    headerType = undefined;
    options = undefined;
    async parse(metadata, tokenizer, options) {
        this.tokenizer = tokenizer;
        this.metadata = metadata;
        this.options = options;
        const id3Header = await this.tokenizer.readToken((0, _id3V2TokenJs.ID3v2Header));
        if (id3Header.fileIdentifier !== 'ID3') throw new (0, _frameParserJs.Id3v2ContentError)("expected ID3-header file-identifier 'ID3' was not found");
        const fileSize = this.tokenizer.fileInfo.size;
        if (fileSize !== undefined) {
            const remainingBytes = fileSize - this.tokenizer.position;
            if (id3Header.size > remainingBytes) throw new (0, _frameParserJs.Id3v2ContentError)(`ID3v2 tag size ${id3Header.size} exceeds remaining file size ${remainingBytes}`);
        }
        this.id3Header = id3Header;
        this.headerType = `ID3v2.${id3Header.version.major}`;
        await this.parseId3Data(id3Header.size);
        // Post process
        const chapters = this.mapId3v2Chapters(this.metadata.native[this.headerType]);
        this.metadata.setFormat('chapters', chapters);
    }
    getExtendedHeaderSize(data) {
        if (data.length < _tokenTypes.UINT32_BE.len) throw new (0, _frameParserJs.Id3v2ContentError)('ID3v2 extended header size field exceeds tag boundary');
        // The ID3v2.3 size excludes its own 4 bytes, the synchsafe ID3v2.4 size includes them
        const extendedHeaderSize = this.id3Header.version.major === 4 ? (0, _id3V2TokenJs.UINT32SYNCSAFE).get(data, 0) : _tokenTypes.UINT32_BE.get(data, 0) + 4;
        // An ID3v2.3 extended header takes at least 10 bytes, an ID3v2.4 one at least 6
        const minimumSize = this.id3Header.version.major === 4 ? 6 : 10;
        if (extendedHeaderSize < minimumSize || extendedHeaderSize > data.length) throw new (0, _frameParserJs.Id3v2ContentError)(`Invalid ID3v2 extended header size: ${extendedHeaderSize}`);
        return extendedHeaderSize;
    }
    async parseId3Data(dataLen) {
        // Own the complete on-disk body before resynchronising, including custom tokenizer inputs.
        let uint8Array = await (0, _allocationJs.readBuffer)(this.tokenizer, dataLen, this.options, undefined, (message)=>new (0, _frameParserJs.Id3v2ContentError)(message));
        // ID3v2.2 and ID3v2.3 unsynchronise the whole tag, ID3v2.4 flags each frame
        if (this.id3Header.flags.unsynchronisation && this.id3Header.version.major < 4) uint8Array = ID3v2Parser.removeUnsyncBytes(uint8Array);
        if (this.id3Header.flags.isExtendedHeader) uint8Array = uint8Array.subarray(this.getExtendedHeaderSize(uint8Array));
        const tags = this.parseMetadata(uint8Array);
        for (const tag of tags)switch(tag.id){
            case 'TXXX':
                if (tag.value) await this.handleTag(tag, tag.value.text, ()=>tag.value.description);
                break;
            default:
                await (Array.isArray(tag.value) ? Promise.all(tag.value.map((value)=>this.addTag(tag.id, value))) : this.addTag(tag.id, tag.value));
        }
        if (this.id3Header.version.major === 3) await this.mapRecordingDate(tags);
    }
    async mapRecordingDate(tags) {
        const text = (id)=>tags.findLast((tag)=>tag.id === id && tag.value.at(-1))?.value?.at(-1);
        // Explicit timestamps take priority over the legacy components, regardless of frame order.
        const discogs = tags.findLast((tag)=>tag.id === 'TXXX' && tag.value.description.toUpperCase() === 'DISCOGS_RELEASED' && tag.value.text.at(-1));
        const explicit = text('TDRC') ?? text('TDRV') ?? discogs?.value?.text.at(-1);
        if (explicit) {
            await this.metadata.postMap(this.headerType, {
                id: 'date',
                value: explicit
            });
            return;
        }
        const year = text('TYER');
        if (!year || !/^\d{4}$/.test(year)) return;
        let date = year;
        const dayMonth = text('TDAT');
        if (dayMonth && /^\d{4}$/.test(dayMonth)) {
            const day = Number(dayMonth.slice(0, 2));
            const month = Number(dayMonth.slice(2));
            const y = Number(year);
            const leapYear = y % 4 === 0 && (y % 100 !== 0 || y % 400 === 0);
            const daysInMonth = [
                31,
                leapYear ? 29 : 28,
                31,
                30,
                31,
                30,
                31,
                31,
                30,
                31,
                30,
                31
            ];
            if (day >= 1 && day <= daysInMonth[month - 1]) {
                date += `-${dayMonth.slice(2)}-${dayMonth.slice(0, 2)}`;
                const time = text('TIME');
                if (time && /^([01]\d|2[0-3])[0-5]\d$/.test(time)) date += `T${time.slice(0, 2)}:${time.slice(2)}`;
            }
        }
        await this.metadata.postMap(this.headerType, {
            id: 'date',
            value: date
        });
    }
    async handleTag(tag, values, descriptor, resolveValue = (value)=>value) {
        await Promise.all(values.map((value)=>this.addTag(ID3v2Parser.makeDescriptionTagName(tag.id, descriptor(value)), resolveValue(value))));
    }
    async addTag(id, value) {
        await this.metadata.addTag(this.headerType, id, value);
    }
    parseMetadata(data) {
        let offset = 0;
        let frameCount = 0;
        const tags = [];
        while(true){
            if (offset === data.length) break;
            // Padding follows the last frame and consists entirely of zero bytes.
            // Check before requiring a complete frame header: padding can be shorter.
            if (data[offset] === 0) {
                if (data.subarray(offset).some((byte)=>byte !== 0)) this.metadata.addWarning('Non-zero bytes found in ID3v2 padding');
                break;
            }
            const frameHeaderLength = (0, _frameHeaderJs.getFrameHeaderLength)(this.id3Header.version.major);
            if (offset + frameHeaderLength > data.length) {
                this.metadata.addWarning('Illegal ID3v2 tag length');
                break;
            }
            const frameHeaderBytes = data.subarray(offset, offset + frameHeaderLength);
            offset += frameHeaderLength;
            const frameHeader = (0, _frameHeaderJs.readFrameHeader)(frameHeaderBytes, this.id3Header.version.major, this.metadata);
            if (++frameCount > (0, _allocationJs.getMaxMetadataEntries)(this.options)) throw new (0, _frameParserJs.Id3v2ContentError)('Frame count exceeds entry limit');
            const frameDataBytes = data.subarray(offset, offset + frameHeader.length);
            offset += frameHeader.length;
            const values = ID3v2Parser.readFrameData(frameDataBytes, frameHeader, this.id3Header.version.major, !this.options.skipCovers, this.metadata, (0, _allocationJs.getMaxMetadataEntries)(this.options));
            if (values) tags.push({
                id: frameHeader.id,
                value: values
            });
        }
        return tags;
    }
    /**
     * Convert parsed ID3v2 chapter frames (CHAP / CTOC) to generic `format.chapters`.
     *
     * This function expects the `native` tags already to contain parsed `CHAP` and `CTOC` frame values,
     * as produced by `FrameParser.readData`.
     */ mapId3v2Chapters(id3Tags) {
        if (!id3Tags) return;
        const chapFrames = id3Tags.filter((t)=>t.id === 'CHAP').map((t)=>t.value);
        if (!chapFrames.length) return;
        const tocFrames = id3Tags.filter((t)=>t.id === 'CTOC').map((t)=>t.value);
        const topLevelToc = tocFrames.find((t)=>t.flags.topLevel);
        const chapterById = new Map();
        for (const chap of chapFrames)chapterById.set(chap.label, chap);
        const orderedIds = topLevelToc?.childElementIds;
        const chapters = [];
        const maxChapterCount = (0, _allocationJs.getMaxChapterCount)(this.options);
        // Without a CTOC, return the earliest chapters even if CHAP frames arrive out of order.
        const source = orderedIds ?? [
            ...chapterById.keys()
        ].sort((left, right)=>(chapterById.get(left)?.info.startTime ?? 0) - (chapterById.get(right)?.info.startTime ?? 0));
        for (const id of source){
            const chap = chapterById.get(id);
            if (!chap) continue;
            const frames = chap.frames;
            // TIT2 is recommended, not required; keep untitled chapters navigable.
            const title = frames.get('TIT2') ?? '';
            if (chapters.length >= maxChapterCount) {
                this.metadata.addWarning(`Chapter count exceeds the ${maxChapterCount} chapter limit`);
                break;
            }
            chapters.push({
                id,
                title,
                url: frames.get('WXXX'),
                start: chap.info.startTime / 1000,
                end: chap.info.endTime / 1000,
                image: frames.get('APIC')
            });
        }
        return chapters.length ? chapters : undefined;
    }
}
function makeUnexpectedMajorVersionError(majorVer) {
    throw new (0, _frameParserJs.Id3v2ContentError)(`Unexpected majorVer: ${majorVer}`);
}

},{"token-types":"al35Q","../common/Allocation.js":"8ZVyl","./FrameHeader.js":"6ehJH","./FrameParser.js":"9gmzP","./ID3v2Token.js":"eUTtS","@parcel/transformer-js/src/esmodule-helpers.js":"53hI8"}]},["82kRg"], null, "parcelRequire2853", {})

//# sourceMappingURL=AiffParser.e56efae2.js.map
