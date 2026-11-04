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
  function $parcel$resolve(url) {  url = importMap[url] || url;  return import.meta.resolve(distDir + url);}newRequire.resolve = $parcel$resolve;

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
})({"eBY1P":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SERVER_PORT = 3000;
var HMR_SECURE = false;
var HMR_ENV_HASH = "439701173a9199ea";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "d68ad56631b563d9";
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

},{}],"a0t4e":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _app = require("./static/js/App");
var _appDefault = parcelHelpers.interopDefault(_app);
const app = new (0, _appDefault.default)();
const isReady = ()=>{
    return new Promise((resolve)=>{
        if (document.readyState === "complete") resolve();
        else document.addEventListener("DOMContentLoaded", resolve);
    });
};
isReady().then(()=>app.init());

},{"./static/js/App":"dgFZv","@parcel/transformer-js/src/esmodule-helpers.js":"53hI8"}],"dgFZv":[function(require,module,exports,__globalThis) {
// Modules
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _player = require("./actors/Player/Player");
var _playerDefault = parcelHelpers.interopDefault(_player);
var _canvas = require("./actors/Canvas/Canvas");
var _canvasDefault = parcelHelpers.interopDefault(_canvas);
// Setup
const initialState = {
    isRunning: true
};
// Setup
class App {
    state = {
        ...initialState
    };
    _draw() {
        this._actors.forEach((actor)=>actor.draw());
    }
    _onResize = ()=>{
        this._canvas.resize();
        this._draw();
    };
    _tick() {
        if (!this.state.isRunning) return;
        this._draw();
        requestAnimationFrame((timestamp)=>this._tick(timestamp));
    }
    init() {
        const canvasEl = document.getElementById("canvas");
        const canvasCtx = canvasEl.getContext("2d");
        this._canvas = new (0, _canvasDefault.default)(canvasEl, canvasCtx);
        this._player = new (0, _playerDefault.default)(canvasCtx);
        // Order is important, canvas needs to be first to draw
        this._actors = [
            this._canvas,
            this._player
        ];
        this._actors.forEach((actor)=>actor.init());
        window.addEventListener("resize", this._onResize);
        this._tick();
    }
}
exports.default = App;

},{"./actors/Player/Player":"yVdWS","./actors/Canvas/Canvas":"cVsjE","@parcel/transformer-js/src/esmodule-helpers.js":"53hI8"}],"yVdWS":[function(require,module,exports,__globalThis) {
// Utils
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _config = require("./config");
var _config1 = require("../../config");
var _mathHelpers = require("../../utils/mathHelpers");
var _inputHelpers = require("../../utils/inputHelpers");
var _uiHelpers = require("../../utils/uiHelpers");
var _audioHelpers = require("../../utils/audioHelpers");
var _bassSpectrum = require("../../utils/bassSpectrum");
// Modules
var _visualizer = require("../Visualizer/Visualizer");
var _visualizerDefault = parcelHelpers.interopDefault(_visualizer);
const initialState = {
    hasUserInteracted: false,
    isPlaying: false,
    isVolumeFading: false,
    isBinDataEmpty: true
};
class Player {
    constructor(canvasCtx){
        this._visualizer = new (0, _visualizerDefault.default)(canvasCtx);
        this._onPointerMove = this._onPointerMove.bind(this);
        this._onPointerUp = this._onPointerUp.bind(this);
    }
    state = {
        ...initialState
    };
    static getChannelData(analyser, bassAnalyser) {
        const bufferLength = analyser.frequencyBinCount;
        const frequencyData = new Uint8Array(bufferLength);
        const bassFrequencyData = new Uint8Array(bassAnalyser.frequencyBinCount);
        // Order is important; first read the data, then process it.
        // .getByteFrequencyData() doesn't return anything, it simply updates the original object.
        analyser.getByteFrequencyData(frequencyData);
        bassAnalyser.getByteFrequencyData(bassFrequencyData);
        // A completely zeroed-out bin data array means total silence
        const dataIsEmpty = (0, _mathHelpers.isArrayZeroedOut)(frequencyData) && (0, _mathHelpers.isArrayZeroedOut)(bassFrequencyData);
        if (dataIsEmpty) return;
        return {
            frequencyData,
            fftSize: analyser.fftSize,
            bassFrequencyData,
            bassFftSize: bassAnalyser.fftSize,
            sampleRate: analyser.context.sampleRate
        };
    }
    _getAudioData() {
        // Unfortunately, after pausing there is a small delay until the bin data array empties out
        // which means that calling .pause() doesn't necessarily reflect the real state of the audio.
        // This is mostly a performance optimisation so that we don't draw empty sample frames.
        if (!this.state.isPlaying && this.state.isBinDataEmpty) return;
        const channelLeftData = Player.getChannelData(this._analyserL, this._bassAnalyserL);
        const channelRightData = Player.getChannelData(this._analyserR, this._bassAnalyserR);
        // Because we're processing each channel separately, some tracks may (at times)
        // only return data for one channel. Therefore, the channels are to be drawn separately.
        if (!channelLeftData && !channelRightData) {
            this.state.isBinDataEmpty = true;
            return;
        }
        this.state.isBinDataEmpty = false;
        return {
            channels: [
                {
                    name: (0, _config1.config).channels.left,
                    data: channelLeftData
                },
                {
                    name: (0, _config1.config).channels.right,
                    data: channelRightData
                }
            ]
        };
    }
    draw() {
        const data = this._getAudioData();
        this._visualizer.draw(data);
    }
    _resetVolume() {
        this._audio.volume = 1;
        this._audio.muted = false;
    }
    _muteVolume() {
        this._audio.volume = 0;
        this._audio.muted = true;
    }
    /**
   * @param {Object} e - The mouse event
   */ _seek = (e)=>{
        const _bounds = this._elements.progress.getBoundingClientRect();
        const _min = _bounds.x;
        const _max = _bounds.x + _bounds.width;
        // Out of bounds
        if (e.pageX < _min || e.pageX > _max) return;
        const _val = e.clientX - _bounds.x;
        this._audio.currentTime = this._audio.duration * (_val / _bounds.width);
    };
    _onPointerUp = ()=>{
        (0, _uiHelpers.unlockUserSelection)(document.body);
        this._resetVolume();
        document.removeEventListener("pointerup", this._onPointerUp);
        document.removeEventListener("pointermove", this._onPointerMove);
    };
    _onPointerMove = (e)=>{
        this._seek(e);
    };
    _onPointerDown = (e)=>{
        if (!this._audioCtx) return;
        (0, _uiHelpers.lockUserSelection)(document.body);
        this._muteVolume();
        this._seek(e);
        document.addEventListener("pointermove", this._onPointerMove);
        document.addEventListener("pointerup", this._onPointerUp);
    };
    _onKeyDown(e) {
        const _keyCode = (0, _inputHelpers.getKeyCode)(e);
        if (!_keyCode) return;
        // Detect spacebar press
        if (_keyCode === 32) {
            // Prevent triggering other events when any UI buttons (ex: play, pause)
            // are focused and the user presses spacebar
            e.preventDefault();
            this._togglePlayback();
        }
    }
    _updateProgress = ()=>{
        const _percent = this._audio.currentTime / this._audio.duration * 100;
        this._elements.progressBar.style.maxWidth = `${_percent}%`;
        this._elements.elapsedTime.textContent = (0, _mathHelpers.formatSeconds)(this._audio.currentTime);
        this._elements.totalTime.textContent = (0, _mathHelpers.formatSeconds)(this._audio.duration);
    };
    _setupAudioAnalyser() {
        // Set up overall analyzer
        this._analyserL = this._audioCtx.createAnalyser();
        this._analyserR = this._audioCtx.createAnalyser();
        this._analyserL.fftSize = (0, _config.config).fftSize;
        this._analyserR.fftSize = (0, _config.config).fftSize;
        this._analyserL.maxDecibels = (0, _config.config).maxDecibels;
        this._analyserR.maxDecibels = (0, _config.config).maxDecibels;
        // Set up bass analyzer
        this._bassAnalyserL = this._audioCtx.createAnalyser();
        this._bassAnalyserR = this._audioCtx.createAnalyser();
        const bassFftSize = (0, _bassSpectrum.getBassFftSize)(this._audioCtx.sampleRate);
        this._bassAnalyserL.fftSize = bassFftSize;
        this._bassAnalyserR.fftSize = bassFftSize;
        this._bassAnalyserL.maxDecibels = (0, _config.config).maxDecibels;
        this._bassAnalyserR.maxDecibels = (0, _config.config).maxDecibels;
        // Connect to source
        const _source = this._audioCtx.createMediaElementSource(this._audio);
        // Connect source to splitter
        const _splitter = this._audioCtx.createChannelSplitter(2);
        _source.connect(_splitter, 0, 0);
        // Analyse each channel at two resolutions without adding another audio path
        _splitter.connect(this._bassAnalyserL, 0);
        _splitter.connect(this._bassAnalyserR, 1);
        this._bassAnalyserL.connect(this._analyserL);
        this._bassAnalyserR.connect(this._analyserR);
        // Connect back to the merger
        const _merger = this._audioCtx.createChannelMerger(2);
        this._analyserL.connect(_merger, 0, 0);
        this._analyserR.connect(_merger, 0, 1);
        // Connect both channels back to the audio source
        _merger.connect(this._audioCtx.destination, 0, 0);
    }
    _loadTrack(track) {
        this._audio.src = track.source;
        this._audio.load();
        this._elements.artistName.textContent = track.artistName;
        this._elements.trackName.textContent = track.trackName;
    }
    /**
   * @NOTE: In some browsers (ex: Safari), the AudioContext starts in 'suspended' state
   * @NOTE: and unlocking it requires a user-gesture event.
   */ _unlockAudioContext() {
        if (this._audioCtx.state === "suspended") this._audioCtx.resume();
    }
    _initAudio() {
        // The AudioContext needs to be created after a user interaction has taken place
        this._audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        this.state.hasUserInteracted = true;
        this._unlockAudioContext();
        this._loadTrack((0, _config.config).track);
        this._audio.play().then(()=>{
            this.state.isPlaying = true;
            this.state.isBinDataEmpty = false;
            this._elements.player.setAttribute("data-is-playing", "true");
            this._setupAudioAnalyser();
        }).catch((error)=>{
            // The play() Promise has been rejected, waiting for user input
            console.log(error);
        });
    }
    _togglePlayback() {
        this.state.isPlaying ? this._pauseAudio() : this._playAudio();
    }
    async _pauseAudio() {
        if (this.state.isVolumeFading) return;
        this.state.isVolumeFading = true;
        this._elements.player.setAttribute("data-is-playing", "false");
        await (0, _audioHelpers.fadeOut)(this._audio);
        this.state.isPlaying = false;
        this.state.isVolumeFading = false;
        this._audio.pause();
    }
    /**
   * @NOTE: On Chrome, this auto-play was temporarily disabled. For more info, see link below:
   * @NOTE: https://developers.google.com/web/updates/2017/09/autoplay-policy-changes#webaudio
   */ async _playAudio() {
        if (this.state.hasUserInteracted) {
            if (this.state.isVolumeFading) return;
            this.state.isPlaying = true;
            this.state.isVolumeFading = true;
            this.state.isBinDataEmpty = false;
            this._elements.player.setAttribute("data-is-playing", "true");
            this._audio.play();
            await (0, _audioHelpers.fadeIn)(this._audio);
            this.state.isVolumeFading = false;
            return;
        }
        this._initAudio();
    }
    _addEventListeners() {
        const _playBtn = document.querySelector("[data-play-btn]");
        const _pauseBtn = document.querySelector("[data-pause-btn]");
        _playBtn.addEventListener("click", ()=>this._playAudio());
        _pauseBtn.addEventListener("click", ()=>this._pauseAudio());
        window.addEventListener("keydown", (e)=>this._onKeyDown(e));
        this._elements.progress.addEventListener("pointerdown", (e)=>this._onPointerDown(e));
        this._audio.addEventListener("timeupdate", ()=>this._updateProgress());
    }
    _cacheSelectors() {
        this._elements = {
            player: document.querySelector("[data-player]"),
            progress: document.querySelector("[data-player-progress]"),
            progressBar: document.querySelector("[data-player-progress-bar]"),
            artistName: document.querySelector("[data-player-artist-name]"),
            trackName: document.querySelector("[data-player-track-name]"),
            elapsedTime: document.querySelector("[data-player-elapsed-time]"),
            totalTime: document.querySelector("[data-player-total-time]")
        };
    }
    _setupWebAudio() {
        this._audio = document.createElement("audio");
        document.body.appendChild(this._audio);
    }
    /**
   * @public
   */ init() {
        this._setupWebAudio();
        this._cacheSelectors();
        this._addEventListeners();
    }
}
exports.default = Player;

},{"./config":"6bS6p","../../config":"i4Gv6","../../utils/mathHelpers":"3WLAF","../../utils/inputHelpers":"3i3Bf","../../utils/uiHelpers":"9LytJ","../../utils/audioHelpers":"f51XH","../../utils/bassSpectrum":"4x1Zk","../Visualizer/Visualizer":"hLipm","@parcel/transformer-js/src/esmodule-helpers.js":"53hI8"}],"6bS6p":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "config", ()=>config);
const config = {
    track: {
        source: new URL(require("4d9eb8da702efda9")),
        artistName: "Cry",
        trackName: "Vibe Tracks"
    },
    fftSize: 2048,
    maxDecibels: 0
};

},{"4d9eb8da702efda9":"7z0Xg","@parcel/transformer-js/src/esmodule-helpers.js":"53hI8"}],"7z0Xg":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("music.8af8cb04.mp3") + "?" + Date.now();

},{}],"53hI8":[function(require,module,exports,__globalThis) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"i4Gv6":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "config", ()=>config);
const config = {
    channels: {
        left: "L",
        right: "R"
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"53hI8"}],"3WLAF":[function(require,module,exports,__globalThis) {
/**
 * Format seconds to hours and minutes
 * @NOTE: Will always return at least minutes and seconds
 * @param {Number} time - The time to be formatted in seconds
 * @returns {string} - The formatted time like "1:05" or "2:34:59" or "255:05:59"
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "formatSeconds", ()=>formatSeconds);
parcelHelpers.export(exports, "isArrayZeroedOut", ()=>isArrayZeroedOut);
const formatSeconds = (time)=>{
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor(time % 3600 / 60);
    const seconds = Math.floor(time % 60);
    let formattedTime = "";
    if (hours > 0) formattedTime += `${hours}:${minutes < 10 ? "0" : ""}`;
    formattedTime += `0${minutes}:${seconds < 10 ? "0" : ""}`;
    formattedTime += `${seconds}`;
    return formattedTime;
};
const isArrayZeroedOut = (arr)=>{
    return arr.every((val)=>val === 0);
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"53hI8"}],"3i3Bf":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getKeyCode", ()=>getKeyCode);
const getKeyCode = (e)=>{
    return e.which || e.keyCode;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"53hI8"}],"9LytJ":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "lockUserSelection", ()=>lockUserSelection);
parcelHelpers.export(exports, "unlockUserSelection", ()=>unlockUserSelection);
parcelHelpers.export(exports, "getCenter", ()=>getCenter);
const DATA_LOCK_SELECTION_ATTR = "data-prevent-selection";
const lockUserSelection = (elem)=>{
    elem.setAttribute(DATA_LOCK_SELECTION_ATTR, "");
};
const unlockUserSelection = (elem)=>{
    elem.removeAttribute(DATA_LOCK_SELECTION_ATTR);
};
function getCenter() {
    return {
        x: window.innerWidth / 2,
        y: window.innerHeight / 2
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"53hI8"}],"f51XH":[function(require,module,exports,__globalThis) {
// Utils
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "fadeIn", ()=>fadeIn);
parcelHelpers.export(exports, "fadeOut", ()=>fadeOut);
var _animationHelpers = require("./animationHelpers");
var _easings = require("./easings");
const fadeIn = async (audio)=>{
    const options = {
        from: 0,
        to: 1,
        duration: 100,
        ease: (0, _easings.easeInOutCubic),
        callback: (vol)=>audio.volume = vol
    };
    await (0, _animationHelpers.ease)(options);
    return new Promise((resolve)=>resolve());
};
const fadeOut = async (audio)=>{
    const options = {
        from: 1,
        to: 0,
        duration: 100,
        ease: (0, _easings.easeInOutCubic),
        callback: (vol)=>audio.volume = vol
    };
    await (0, _animationHelpers.ease)(options);
    return new Promise((resolve)=>resolve());
};

},{"./animationHelpers":"dOoG1","./easings":"2fUy4","@parcel/transformer-js/src/esmodule-helpers.js":"53hI8"}],"dOoG1":[function(require,module,exports,__globalThis) {
// Utils
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ease", ()=>ease);
var _easings = require("./easings");
const ease = (options)=>{
    const { from, to, duration, callback, ease = (0, _easings.linear) } = options;
    let startTime;
    const dx = to - from;
    return new Promise((resolve)=>{
        const _tick = (time)=>{
            // In a RAF loop, the initial timestamp will never be 0.
            // To be more accurate, this should be set to the value returned by the first iteration.
            if (!startTime) startTime = time;
            const dt = time - startTime;
            const p = dt / duration;
            if (p >= 1) {
                if (!callback) return;
                callback(to);
                resolve();
                return;
            }
            callback(from + dx * ease(p));
            requestAnimationFrame(_tick);
        };
        requestAnimationFrame(_tick);
    });
};

},{"./easings":"2fUy4","@parcel/transformer-js/src/esmodule-helpers.js":"53hI8"}],"2fUy4":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "linear", ()=>linear);
parcelHelpers.export(exports, "easeInOutCubic", ()=>easeInOutCubic);
const linear = (t)=>t;
const easeInOutCubic = (t)=>{
    return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"53hI8"}],"4x1Zk":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "bassSpectrum", ()=>bassSpectrum);
parcelHelpers.export(exports, "getAvailableBassBins", ()=>getAvailableBassBins);
parcelHelpers.export(exports, "getBassFftSize", ()=>getBassFftSize);
const BASS_FFT_BLOCK_SIZE = 2048;
const BASS_FFT_MAX_SIZE = 32768;
const bassSpectrum = {
    minFrequency: 20,
    maxFrequency: 250,
    bandCount: 32
};
const getAvailableBassBins = (sampleRate, fftSize)=>{
    const binWidth = sampleRate / fftSize;
    const firstBin = Math.max(1, Math.ceil(bassSpectrum.minFrequency / binWidth));
    const endBin = Math.min(fftSize / 2, Math.ceil(bassSpectrum.maxFrequency / binWidth));
    return Math.max(0, endBin - firstBin);
};
const getBassFftSize = (sampleRate)=>{
    // prettier-ignore
    for(let fftSize = BASS_FFT_BLOCK_SIZE; fftSize <= BASS_FFT_MAX_SIZE; fftSize *= 2){
        if (getAvailableBassBins(sampleRate, fftSize) < bassSpectrum.bandCount) continue;
        return fftSize;
    }
    return BASS_FFT_MAX_SIZE;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"53hI8"}],"hLipm":[function(require,module,exports,__globalThis) {
// Utils
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _config = require("./config");
var _config1 = require("../../config");
var _uiHelpers = require("../../utils/uiHelpers");
var _spectrumHelpers = require("../../utils/spectrumHelpers");
var _frequencyBands = require("../../utils/frequencyBands");
var _bassSpectrum = require("../../utils/bassSpectrum");
class Visualizer {
    constructor(canvasCtx){
        this._canvasCtx = canvasCtx;
    }
    static getVolumeBarCoords(centre, angle, length) {
        const xStart = centre.x + Math.cos(angle) * (0, _config.config).circle.radius;
        const yStart = centre.y + Math.sin(angle) * (0, _config.config).circle.radius;
        const xEnd = centre.x + Math.cos(angle) * ((0, _config.config).circle.radius + length);
        const yEnd = centre.y + Math.sin(angle) * ((0, _config.config).circle.radius + length);
        return {
            xStart,
            yStart,
            xEnd,
            yEnd
        };
    }
    _drawVolumeBar(channel, frequency, coords) {
        const _fill = channel === (0, _config1.config).channels.left ? (0, _config.config).volumeBar.fillLeft(frequency) : (0, _config.config).volumeBar.fillRight(frequency);
        this._canvasCtx.lineWidth = (0, _config.config).volumeBar.lineWidth;
        this._canvasCtx.strokeStyle = _fill;
        this._canvasCtx.beginPath();
        this._canvasCtx.moveTo(coords.xStart, coords.yStart);
        this._canvasCtx.lineTo(coords.xEnd, coords.yEnd);
        this._canvasCtx.stroke();
    }
    _drawChannel(channel) {
        if (!channel.data) return;
        const _centre = (0, _uiHelpers.getCenter)();
        const _side = channel.name === (0, _config1.config).channels.left ? -1 : 1;
        const bassBandCount = Math.min((0, _bassSpectrum.bassSpectrum).bandCount, (0, _bassSpectrum.getAvailableBassBins)(channel.data.sampleRate, channel.data.bassFftSize));
        const bassBands = (0, _frequencyBands.getDistinctFrequencyBands)(channel.data.bassFrequencyData, channel.data.sampleRate, channel.data.bassFftSize, bassBandCount, (0, _bassSpectrum.bassSpectrum).minFrequency, (0, _bassSpectrum.bassSpectrum).maxFrequency, "linear");
        const upperBands = (0, _frequencyBands.getDistinctFrequencyBands)(channel.data.frequencyData, channel.data.sampleRate, channel.data.fftSize, (0, _config.config).volumeBar.bandCount - bassBandCount, (0, _bassSpectrum.bassSpectrum).maxFrequency, (0, _config.config).volumeBar.maxFrequency, "logarithmic");
        const _bands = [
            ...bassBands,
            ...upperBands
        ];
        for(let i = 0; i < _bands.length; i++){
            const _magnitude = _bands[i];
            if (_magnitude === 0) continue;
            const _length = _magnitude / 2;
            const _angle = (0, _spectrumHelpers.getStereoBandAngle)(i, _bands.length, _side, (0, _config.config).volumeBar.angleOffset);
            const _coords = Visualizer.getVolumeBarCoords(_centre, _angle, _length);
            this._drawVolumeBar(channel.name, _magnitude, _coords);
        }
    }
    _drawUI() {
        const _centre = (0, _uiHelpers.getCenter)();
        // @TODO: Add dynamic multiple coloured arc generator
        const _gradient = this._canvasCtx.createLinearGradient(0, window.innerHeight, 0, 0);
        _gradient.addColorStop(0, (0, _config.config).circle.stroke[0]);
        _gradient.addColorStop(1, (0, _config.config).circle.stroke[1]);
        this._canvasCtx.lineWidth = (0, _config.config).circle.lineWidth;
        this._canvasCtx.strokeStyle = _gradient;
        this._canvasCtx.beginPath();
        this._canvasCtx.arc(_centre.x, _centre.y, (0, _config.config).circle.radius, 0, Math.PI * 2);
        this._canvasCtx.stroke();
    }
    /**
   * @public
   */ draw(data) {
        this._drawUI();
        if (!data || !data.channels) return;
        data.channels.forEach((channel)=>this._drawChannel(channel));
    }
}
exports.default = Visualizer;

},{"./config":"kx0z2","../../config":"i4Gv6","../../utils/uiHelpers":"9LytJ","../../utils/spectrumHelpers":"9adjt","../../utils/frequencyBands":"2WbPk","../../utils/bassSpectrum":"4x1Zk","@parcel/transformer-js/src/esmodule-helpers.js":"53hI8"}],"kx0z2":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "config", ()=>config);
const config = {
    circle: {
        radius: 150,
        lineWidth: 3,
        stroke: [
            "blue",
            "purple"
        ]
    },
    volumeBar: {
        angleOffset: -1.5 * Math.PI,
        bandCount: 128,
        maxFrequency: 20000,
        lineWidth: 3,
        fillLeft: (frequency)=>`rgb(255, ${frequency}, 0)`,
        fillRight: (frequency)=>`rgb(0, ${frequency}, 255)`
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"53hI8"}],"9adjt":[function(require,module,exports,__globalThis) {
/**
 * Get the center angle for a band, mirrored onto the left or right semicircle by "side".
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getStereoBandAngle", ()=>getStereoBandAngle);
const getStereoBandAngle = (index, bandCount, side, topAngle)=>topAngle + side * (index + 0.5) * Math.PI / bandCount;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"53hI8"}],"2WbPk":[function(require,module,exports,__globalThis) {
/**
 * Get the strongest magnitude in each linear or logarithmic frequency band.
 *
 * Each band uses distinct FFT bins; the count shrinks if there are too few bins.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getDistinctFrequencyBands", ()=>getDistinctFrequencyBands);
const getDistinctFrequencyBands = (frequencyData, sampleRate, fftSize, bandCount, minFrequency, maxFrequency, scale)=>{
    const binWidth = sampleRate / fftSize;
    const upperFrequency = Math.min(maxFrequency, sampleRate / 2);
    const firstBin = Math.max(1, Math.ceil(minFrequency / binWidth));
    const lastBin = Math.min(frequencyData.length, Math.ceil(upperFrequency / binWidth));
    const count = Math.min(bandCount, Math.max(0, lastBin - firstBin));
    const bands = new Uint8Array(count);
    let start = firstBin;
    for(let i = 0; i < count; i++){
        const fraction = (i + 1) / count;
        const boundary = scale === "linear" ? minFrequency + (upperFrequency - minFrequency) * fraction : minFrequency * (upperFrequency / minFrequency) ** fraction;
        const desiredEnd = Math.ceil(boundary / binWidth);
        const lastAvailableEnd = lastBin - (count - i - 1);
        const end = i === count - 1 ? lastBin : Math.max(start + 1, Math.min(desiredEnd, lastAvailableEnd));
        for(let bin = start; bin < end; bin++)bands[i] = Math.max(bands[i], frequencyData[bin]);
        start = end;
    }
    return bands;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"53hI8"}],"cVsjE":[function(require,module,exports,__globalThis) {
// Setup
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const defaults = {
    fill: "rgb(0, 0, 0)"
};
class Visualizer {
    constructor(canvasEl, canvasCtx){
        this._canvasEl = canvasEl;
        this._canvasCtx = canvasCtx;
        this._width = 0;
        this._height = 0;
        this._pixelRatio = 0;
    }
    state = {
        ...defaults
    };
    /**
   * @public
   */ draw() {
        this._canvasCtx.clearRect(0, 0, this._width, this._height);
        this._canvasCtx.fillStyle = defaults.fill;
        this._canvasCtx.fillRect(0, 0, this._width, this._height);
    }
    resize() {
        const width = window.innerWidth;
        const height = window.innerHeight;
        const pixelRatio = window.devicePixelRatio || 1;
        if (width === this._width && height === this._height && pixelRatio === this._pixelRatio) return;
        this._width = width;
        this._height = height;
        this._pixelRatio = pixelRatio;
        this._canvasEl.width = Math.round(width * pixelRatio);
        this._canvasEl.height = Math.round(height * pixelRatio);
        this._canvasCtx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    }
    /**
   * @public
   */ init() {
        this.resize();
    }
}
exports.default = Visualizer;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"53hI8"}]},["eBY1P","a0t4e"], "a0t4e", "parcelRequire2853", {}, "./", "/")

//# sourceMappingURL=YAAV.31b563d9.js.map
