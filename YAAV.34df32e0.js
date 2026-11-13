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
})({"drH8Q":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SERVER_PORT = 3000;
var HMR_SECURE = false;
var HMR_ENV_HASH = "439701173a9199ea";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "4b8ea06834df32e0";
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

},{}],"gH3Lb":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _app = require("./static/js/App");
var _appDefault = parcelHelpers.interopDefault(_app);
const app = new (0, _appDefault.default)();
const isReady = ()=>{
    return new Promise((resolve)=>{
        if (document.readyState === "complete") resolve();
        else document.addEventListener("DOMContentLoaded", ()=>resolve());
    });
};
isReady().then(()=>app.init());

},{"./static/js/App":"iidv5","@parcel/transformer-js/src/esmodule-helpers.js":"53hI8"}],"iidv5":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _musicMetadata = require("music-metadata");
// Modules
var _player = require("./actors/Player/Player");
var _playerDefault = parcelHelpers.interopDefault(_player);
var _canvas = require("./actors/Canvas/Canvas");
var _canvasDefault = parcelHelpers.interopDefault(_canvas);
var _gui = require("./managers/GUI/GUI");
var _guiDefault = parcelHelpers.interopDefault(_gui);
var _config = require("./config");
var _config1 = require("./actors/Visualizer/renderers/Bars/config");
var _config2 = require("./actors/Visualizer/renderers/Electric/config");
var _errorHelpers = require("./utils/errorHelpers");
// Setup
const initialState = {
    isRunning: true
};
const settings = {
    visualization: {
        variant: (0, _config.config).variant.bars
    },
    bars: {
        channels: (0, _config.config).channels.both,
        ringBandCountSingleChannel: (0, _config1.config).ringBandCountSingleChannel,
        ringBandCountBothChannels: (0, _config1.config).ringBandCountBothChannels,
        glowBlur: (0, _config1.config).glowBlur,
        lineWidths: {
            ...(0, _config1.config).lineWidths
        },
        hueShiftDegrees: (0, _config1.config).hueShiftDegrees,
        saturationRange: {
            ...(0, _config1.config).saturationRange
        },
        lightnessRange: {
            ...(0, _config1.config).lightnessRange
        },
        linkedColors: (0, _config1.config).linkedColors,
        colorChannelL: {
            ...(0, _config1.config).colorLeft
        },
        colorChannelR: {
            ...(0, _config1.config).colorRight
        }
    },
    electric: {
        bandCount: (0, _config2.config).bandCount,
        ringsAmount: (0, _config2.config).ringsAmount,
        ringSpacing: (0, _config2.config).ringSpacing,
        hueShiftDegrees: (0, _config2.config).hueShiftDegrees,
        rotationPeriodSeconds: (0, _config2.config).rotationPeriodSeconds,
        lineWidthMin: (0, _config2.config).lineWidthMin,
        lineWidthMax: (0, _config2.config).lineWidthMax,
        color: {
            ...(0, _config2.config).color
        }
    }
};
// Setup
class App {
    _canvas;
    _player;
    _gui;
    state = {
        ...initialState
    };
    _draw() {
        // Order is important, canvas needs to be first to draw
        this._canvas.draw();
        this._player.draw();
    }
    _onResize = ()=>{
        this._canvas.resize();
        this._draw();
    };
    _tick() {
        if (!this.state.isRunning) return;
        this._draw();
        requestAnimationFrame(()=>this._tick());
    }
    async _getMetadata() {
        try {
            const response = await fetch((0, _config.config).track.source);
            const contentType = response.headers.get("Content-Type");
            const contentLength = response.headers.get("Content-Length");
            const mimeType = contentType || undefined;
            const size = contentLength ? parseInt(contentLength, 10) : undefined;
            const metadata = await (0, _musicMetadata.parseWebStream)(response.body, {
                mimeType,
                size
            });
            return metadata;
        } catch (error) {
            console.error("Error parsing metadata:", (0, _errorHelpers.getErrorMessage)(error));
        }
    }
    async init() {
        const canvasEl = document.getElementById("canvas");
        if (!(canvasEl instanceof HTMLCanvasElement)) throw new Error("Canvas element not found");
        const canvasCtx = canvasEl.getContext("2d");
        if (!canvasCtx) throw new Error("2D canvas context is unavailable");
        const metadata = await this._getMetadata();
        if (!metadata) throw new Error("Could not parse metadata");
        const track = {
            source: (0, _config.config).track.source,
            artistName: metadata.common.artist || "",
            trackName: metadata.common.title || ""
        };
        this._gui = new (0, _guiDefault.default)(settings);
        this._canvas = new (0, _canvasDefault.default)(canvasEl, canvasCtx);
        this._player = new (0, _playerDefault.default)(canvasCtx, settings, track);
        this._gui.init();
        this._canvas.init();
        this._player.init();
        window.addEventListener("resize", this._onResize);
        this._tick();
    }
}
exports.default = App;

},{"./actors/Player/Player":"3ZTI5","./actors/Canvas/Canvas":"5d76k","./managers/GUI/GUI":"eCjx1","./config":"ibNvS","./actors/Visualizer/renderers/Bars/config":"eJ8V8","./actors/Visualizer/renderers/Electric/config":"brFhd","@parcel/transformer-js/src/esmodule-helpers.js":"53hI8","music-metadata":"XSias","./utils/errorHelpers":"lubo1"}],"3ZTI5":[function(require,module,exports,__globalThis) {
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
    _visualizer;
    _settings;
    _track;
    _audio;
    _audioCtx;
    _analyserL;
    _analyserR;
    _bassAnalyserL;
    _bassAnalyserR;
    _elements;
    _elapsedMs;
    _lastPlayingSampleTime;
    constructor(canvasCtx, settings, track){
        this._visualizer = new (0, _visualizerDefault.default)(canvasCtx, settings);
        this._settings = settings;
        this._track = track;
        this._elapsedMs = 0;
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
    /**
   * Resize the bass analysers to resolve as many bands as the active variant needs.
   */ _syncBassFftSize() {
        if (!this._audioCtx) return;
        const { visualization, bars } = this._settings;
        const isBars = visualization.variant === (0, _config1.config).variant.bars;
        const bandCount = !isBars ? (0, _bassSpectrum.bassSpectrum).bandCount : bars.channels === (0, _config1.config).channels.both ? bars.ringBandCountBothChannels : bars.ringBandCountSingleChannel;
        const fftSize = (0, _bassSpectrum.getBassFftSize)(this._audioCtx.sampleRate, Math.max(bandCount, (0, _bassSpectrum.bassSpectrum).bandCount));
        if (this._bassAnalyserL.fftSize === fftSize) return;
        this._bassAnalyserL.fftSize = fftSize;
        this._bassAnalyserR.fftSize = fftSize;
    }
    _getAudioData() {
        // Unfortunately, after pausing there is a small delay until the bin data array empties out
        // which means that calling .pause() doesn't necessarily reflect the real state of the audio.
        // This is mostly a performance optimisation so that we don't draw empty sample frames.
        if (!this.state.isPlaying && this.state.isBinDataEmpty) return;
        this._syncBassFftSize();
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
    _updateElapsedPlayingTime() {
        const now = performance.now();
        const isPlaying = !this._audio.seeking && !this._audio.paused && !this._audio.ended;
        if (isPlaying && this._lastPlayingSampleTime !== undefined) {
            const newElapsedTime = now - this._lastPlayingSampleTime;
            this._elapsedMs += newElapsedTime;
        }
        this._lastPlayingSampleTime = isPlaying ? now : undefined;
    }
    draw() {
        this._updateElapsedPlayingTime();
        const spectrum = this._getAudioData();
        this._visualizer.draw({
            spectrum,
            elapsedMs: this._elapsedMs
        });
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
   * @param e - The pointer event
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
        if (!this._audioCtx) throw new Error("Audio context is unavailable");
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
    _loadTrack() {
        this._audio.src = this._track.source.href;
        this._audio.load();
        this._elements.artistName.textContent = this._track.artistName;
        this._elements.trackName.textContent = this._track.trackName;
    }
    /**
   * @NOTE: In some browsers (ex: Safari), the AudioContext starts in 'suspended' state
   * @NOTE: and unlocking it requires a user-gesture event.
   */ _unlockAudioContext() {
        if (!this._audioCtx) return;
        if (this._audioCtx.state === "suspended") this._audioCtx.resume();
    }
    _initAudio() {
        // The AudioContext needs to be created after a user interaction has taken place
        const audioWindow = window;
        const AudioContextConstructor = window.AudioContext || audioWindow.webkitAudioContext;
        if (!AudioContextConstructor) throw new Error("Web Audio is unavailable");
        // Lock down sample rate so it's consistent across different devices
        this._audioCtx = new AudioContextConstructor({
            sampleRate: (0, _config.config).audioSampleRate
        });
        this.state.hasUserInteracted = true;
        this._unlockAudioContext();
        this._loadTrack();
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
    _onEnded = ()=>{
        this.state.isPlaying = false;
        this.state.isVolumeFading = false;
        this._elements.player.setAttribute("data-is-playing", "false");
    };
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
            // Replay the track from the start once it has finished
            if (this._audio.ended) this._audio.currentTime = 0;
            this._audio.play();
            await (0, _audioHelpers.fadeIn)(this._audio);
            this.state.isVolumeFading = false;
            return;
        }
        this._initAudio();
    }
    _addEventListeners() {
        const _playBtn = this._getElement("[data-play-btn]");
        const _pauseBtn = this._getElement("[data-pause-btn]");
        _playBtn.addEventListener("click", ()=>this._playAudio());
        _pauseBtn.addEventListener("click", ()=>this._pauseAudio());
        window.addEventListener("keydown", (e)=>this._onKeyDown(e));
        this._elements.progress.addEventListener("pointerdown", (e)=>this._onPointerDown(e));
        this._audio.addEventListener("timeupdate", ()=>this._updateProgress());
        this._audio.addEventListener("ended", this._onEnded);
    }
    _cacheSelectors() {
        this._elements = {
            player: this._getElement("[data-player]"),
            progress: this._getElement("[data-player-progress]"),
            progressBar: this._getElement("[data-player-progress-bar]"),
            artistName: this._getElement("[data-player-artist-name]"),
            trackName: this._getElement("[data-player-track-name]"),
            elapsedTime: this._getElement("[data-player-elapsed-time]"),
            totalTime: this._getElement("[data-player-total-time]")
        };
    }
    _getElement(selector) {
        const element = document.querySelector(selector);
        if (!element) throw new Error(`Player element not found: ${selector}`);
        return element;
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

},{"./config":"jNSR1","../../config":"ibNvS","../../utils/mathHelpers":"60gRT","../../utils/inputHelpers":"61FdP","../../utils/uiHelpers":"hJg0i","../../utils/audioHelpers":"iLYjc","../../utils/bassSpectrum":"jCaIJ","../Visualizer/Visualizer":"3QP5D","@parcel/transformer-js/src/esmodule-helpers.js":"53hI8"}],"jNSR1":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "config", ()=>config);
const config = {
    audioSampleRate: 48000,
    fftSize: 4096,
    maxDecibels: 0
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"53hI8"}],"53hI8":[function(require,module,exports,__globalThis) {
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

},{}],"ibNvS":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "config", ()=>config);
const config = {
    // metadata
    track: {
        source: new URL(require("5178b91609690a41"))
    },
    // audio
    channels: {
        both: "L + R",
        left: "L",
        right: "R"
    },
    // visualization
    variant: {
        bars: "bars",
        electric: "electric"
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"53hI8","5178b91609690a41":"7z0Xg"}],"7z0Xg":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("music.8af8cb04.mp3") + "?" + Date.now();

},{}],"60gRT":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "formatSeconds", ()=>formatSeconds);
parcelHelpers.export(exports, "isArrayZeroedOut", ()=>isArrayZeroedOut);
parcelHelpers.export(exports, "interpolate", ()=>interpolate);
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
const interpolate = ({ min, max }, progress)=>min + (max - min) * progress;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"53hI8"}],"61FdP":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getKeyCode", ()=>getKeyCode);
const getKeyCode = (e)=>{
    return e.which || e.keyCode;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"53hI8"}],"hJg0i":[function(require,module,exports,__globalThis) {
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
const getCenter = ()=>({
        x: window.innerWidth / 2,
        y: window.innerHeight / 2
    });

},{"@parcel/transformer-js/src/esmodule-helpers.js":"53hI8"}],"iLYjc":[function(require,module,exports,__globalThis) {
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

},{"./animationHelpers":"dHpDP","./easings":"fREcM","@parcel/transformer-js/src/esmodule-helpers.js":"53hI8"}],"dHpDP":[function(require,module,exports,__globalThis) {
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
            if (startTime === undefined) startTime = time;
            const dt = time - startTime;
            const p = dt / duration;
            if (p >= 1) {
                if (!callback) return;
                callback(to);
                resolve();
                return;
            }
            callback?.(from + dx * ease(p));
            requestAnimationFrame(_tick);
        };
        requestAnimationFrame(_tick);
    });
};

},{"./easings":"fREcM","@parcel/transformer-js/src/esmodule-helpers.js":"53hI8"}],"fREcM":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "linear", ()=>linear);
parcelHelpers.export(exports, "easeInOutCubic", ()=>easeInOutCubic);
const linear = (t)=>t;
const easeInOutCubic = (t)=>{
    return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"53hI8"}],"jCaIJ":[function(require,module,exports,__globalThis) {
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
const getBassFftSize = (sampleRate, bandCount = bassSpectrum.bandCount)=>{
    // prettier-ignore
    for(let fftSize = BASS_FFT_BLOCK_SIZE; fftSize <= BASS_FFT_MAX_SIZE; fftSize *= 2){
        if (getAvailableBassBins(sampleRate, fftSize) < bandCount) continue;
        return fftSize;
    }
    return BASS_FFT_MAX_SIZE;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"53hI8"}],"3QP5D":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _config = require("./config");
var _uiHelpers = require("../../utils/uiHelpers");
var _rendererFactory = require("./utils/rendererFactory");
var _theme = require("./ui/theme");
class Visualizer {
    _canvasCtx;
    _settings;
    _activeVariant;
    _activeRenderer;
    _appliedUITheme;
    constructor(canvasCtx, settings){
        this._canvasCtx = canvasCtx;
        this._settings = settings;
        this._activeVariant = settings.visualization.variant;
        this._activeRenderer = this._createRenderer(this._activeVariant);
    }
    _createRenderer(variant) {
        return (0, _rendererFactory.createRenderer)(variant, this._canvasCtx, this._settings);
    }
    _syncRenderer() {
        if (this._activeVariant !== this._settings.visualization.variant) {
            this._activeVariant = this._settings.visualization.variant;
            this._activeRenderer = this._createRenderer(this._activeVariant);
        }
    }
    _syncUITheme(theme) {
        const serializedTheme = JSON.stringify(theme);
        if (serializedTheme === this._appliedUITheme) return;
        this._appliedUITheme = serializedTheme;
        const rootStyle = document.documentElement.style;
        rootStyle.setProperty("--ui-accent", theme.accent);
        rootStyle.setProperty("--ui-ring-start", theme.ring[0].start);
        rootStyle.setProperty("--ui-ring-end", theme.ring[theme.ring.length - 1].end);
        rootStyle.setProperty("--ui-track-start", theme.trackStart);
        rootStyle.setProperty("--ui-track-end", theme.trackEnd);
    }
    _drawRingSegment({ arc, start, end }) {
        const centre = (0, _uiHelpers.getCenter)();
        const gradient = this._canvasCtx.createLinearGradient(0, window.innerHeight, 0, 0);
        gradient.addColorStop(0, start);
        gradient.addColorStop(1, end);
        this._canvasCtx.lineWidth = (0, _config.config).ring.lineWidth;
        this._canvasCtx.strokeStyle = gradient;
        this._canvasCtx.beginPath();
        this._canvasCtx.arc(centre.x, centre.y, (0, _config.config).ring.radius, (0, _config.config).ring.arcs[arc].start, (0, _config.config).ring.arcs[arc].end);
        this._canvasCtx.stroke();
    }
    _drawUI(theme) {
        theme.ring.forEach((segment)=>this._drawRingSegment(segment));
    }
    draw({ spectrum, elapsedMs }) {
        const theme = (0, _theme.getUITheme)(this._settings.visualization.variant, this._settings);
        this._syncUITheme(theme);
        this._drawUI(theme);
        this._syncRenderer();
        if (!spectrum) return;
        this._activeRenderer.draw({
            channels: spectrum.channels,
            elapsedMs
        });
    }
}
exports.default = Visualizer;

},{"./config":"kEsuf","../../utils/uiHelpers":"hJg0i","./utils/rendererFactory":"6qGan","./ui/theme":"37bWv","@parcel/transformer-js/src/esmodule-helpers.js":"53hI8"}],"kEsuf":[function(require,module,exports,__globalThis) {
// Defaults
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "config", ()=>config);
const config = {
    accent: {
        color: "#07a6c2"
    },
    ring: {
        radius: 150,
        lineWidth: 3,
        colors: [
            "#10c3b1",
            "#107cc3"
        ],
        hueShiftDegrees: 15,
        // Canvas angles grow clockwise, with 0 pointing right and π/2 pointing down
        arcs: {
            full: {
                start: 0,
                end: Math.PI * 2
            },
            left: {
                start: Math.PI / 2,
                end: Math.PI * 1.5
            },
            right: {
                start: -Math.PI / 2,
                end: Math.PI / 2
            }
        }
    },
    track: {
        colors: [
            "#10c3b1",
            "#107cc3"
        ],
        hueShiftDegrees: 30
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"53hI8"}],"6qGan":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createRenderer", ()=>createRenderer);
var _barsRenderer = require("../renderers/Bars/BarsRenderer");
var _barsRendererDefault = parcelHelpers.interopDefault(_barsRenderer);
var _electricRenderer = require("../renderers/Electric/ElectricRenderer");
var _electricRendererDefault = parcelHelpers.interopDefault(_electricRenderer);
const createRenderer = (variant, canvasCtx, settings)=>{
    switch(variant){
        case "electric":
            return new (0, _electricRendererDefault.default)(canvasCtx, settings.electric);
        default:
            return new (0, _barsRendererDefault.default)(canvasCtx, settings.bars);
    }
};

},{"../renderers/Bars/BarsRenderer":"kU2lW","../renderers/Electric/ElectricRenderer":"jUdym","@parcel/transformer-js/src/esmodule-helpers.js":"53hI8"}],"kU2lW":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _config = require("../../../../config");
var _spectrumHelpers = require("../../../../utils/spectrumHelpers");
var _uiHelpers = require("../../../../utils/uiHelpers");
var _smoothing = require("../../../../utils/smoothing");
var _config1 = require("../../config");
var _helpers = require("./helpers");
var _getChannelBands = require("../getChannelBands");
var _color = require("../../../../utils/color");
var _color1 = require("./color");
var _config2 = require("./config");
class BarsRenderer {
    canvasCtx;
    settings;
    constructor(canvasCtx, settings){
        this.canvasCtx = canvasCtx;
        this.settings = settings;
    }
    static getVolumeBarCoords({ centre, angle, radius, length }) {
        const xStart = centre.x + Math.cos(angle) * radius;
        const yStart = centre.y + Math.sin(angle) * radius;
        const xEnd = centre.x + Math.cos(angle) * (radius + length);
        const yEnd = centre.y + Math.sin(angle) * (radius + length);
        return {
            xStart,
            yStart,
            xEnd,
            yEnd
        };
    }
    static getRingRadius(ringIndex) {
        return (0, _config1.config).ring.radius + (0, _config2.config).centreOffset + ringIndex * (0, _config2.config).ringGap;
    }
    static getBandAngle({ bandIndex, bandCount, side, isSolo }) {
        if (isSolo) return (0, _config2.config).angleOffset + side * (bandIndex + 0.5) * Math.PI * 2 / bandCount;
        return (0, _spectrumHelpers.getStereoBandAngle)(bandIndex, bandCount, side, (0, _config2.config).angleOffset);
    }
    _getBandsPerRing(isSolo) {
        return isSolo ? this.settings.ringBandCountSingleChannel : this.settings.ringBandCountBothChannels;
    }
    static getColorGroup(magnitude) {
        const progress = Math.max(0, Math.min(magnitude / 255, 1));
        return Math.min((0, _config2.config).colorGroups - 1, Math.floor(progress * (0, _config2.config).colorGroups));
    }
    /** Get the magnitude at the middle of a color group. */ static getGroupMagnitude(group) {
        return (group + 0.5) / (0, _config2.config).colorGroups * 255;
    }
    _getGroupFill(group, baseColor) {
        return (0, _color1.getMagnitudeColor)({
            color: baseColor,
            magnitude: BarsRenderer.getGroupMagnitude(group),
            hueShiftDegrees: this.settings.hueShiftDegrees,
            saturationRange: this.settings.saturationRange,
            lightnessRange: this.settings.lightnessRange
        });
    }
    /**
   * Draw all bands of a ring with one stroke per color group instead of one
   * per bar. Strokes (and their glow) are the expensive part of drawing.
   */ _drawBands({ bands, radius, lineWidth, getLength, channelContext }) {
        const { centre, side, isSolo, baseColor } = channelContext;
        const paths = [];
        bands.forEach((magnitude, bandIndex)=>{
            if (magnitude === 0) return;
            const angle = BarsRenderer.getBandAngle({
                bandIndex,
                bandCount: bands.length,
                side,
                isSolo
            });
            const { xStart, yStart, xEnd, yEnd } = BarsRenderer.getVolumeBarCoords({
                centre,
                angle,
                radius,
                length: getLength(magnitude)
            });
            const group = BarsRenderer.getColorGroup(magnitude);
            const path = paths[group] ??= new Path2D();
            path.moveTo(xStart, yStart);
            path.lineTo(xEnd, yEnd);
        });
        this.canvasCtx.lineWidth = lineWidth;
        paths.forEach((path, group)=>{
            const fill = this._getGroupFill(group, baseColor);
            this.canvasCtx.strokeStyle = fill;
            this.canvasCtx.shadowColor = fill;
            this.canvasCtx.stroke(path);
        });
    }
    _drawRing({ ring, ringIndex, bands, channelContext }) {
        this.canvasCtx.globalAlpha = ring.opacity;
        this._drawBands({
            bands,
            radius: BarsRenderer.getRingRadius(ringIndex),
            lineWidth: this.settings.lineWidths[ring.band],
            getLength: (magnitude)=>magnitude / 8,
            channelContext
        });
    }
    _drawBackgroundRing({ data, channelContext }) {
        const { opacity, lineWidth, lengthScale } = (0, _config2.config).backgroundRing;
        const bandCount = this._getBandsPerRing(channelContext.isSolo);
        const bands = (0, _smoothing.movingAverage)((0, _getChannelBands.getChannelBands)(data, bandCount, (0, _config2.config).maxFrequency), (0, _config2.config).smoothingWindowSize);
        const radius = BarsRenderer.getRingRadius(0);
        const highsRadius = BarsRenderer.getRingRadius((0, _config2.config).rings.length - 1);
        const spanToHighs = highsRadius - radius;
        // The ring is too faint for a glow to be visible, so skip the blur passes
        this.canvasCtx.save();
        this.canvasCtx.globalAlpha = opacity;
        this.canvasCtx.shadowBlur = 0;
        this._drawBands({
            bands,
            radius,
            lineWidth,
            getLength: (magnitude)=>spanToHighs + magnitude * lengthScale,
            channelContext
        });
        this.canvasCtx.restore();
    }
    _drawChannel({ channel, isSolo }) {
        if (!channel.data) return;
        const side = channel.name === (0, _config.config).channels.left ? 1 : -1;
        const channelContext = {
            centre: (0, _uiHelpers.getCenter)(),
            side,
            isSolo,
            baseColor: (0, _color.rgbToHsl)(side === 1 ? this.settings.colorChannelL : this.settings.colorChannelR)
        };
        const bandGroups = (0, _helpers.getChannelBandGroups)({
            data: channel.data,
            bandsPerRing: this._getBandsPerRing(isSolo),
            midsMaxFrequency: (0, _config2.config).midsMaxFrequency,
            maxFrequency: (0, _config2.config).maxFrequency
        });
        this._drawBackgroundRing({
            data: channel.data,
            channelContext
        });
        (0, _config2.config).rings.forEach((ring, ringIndex)=>{
            this._drawRing({
                ring,
                ringIndex,
                bands: (0, _smoothing.movingAverage)(bandGroups[ring.band], (0, _config2.config).smoothingWindowSize),
                channelContext
            });
        });
    }
    draw({ channels }) {
        this.canvasCtx.save();
        this.canvasCtx.lineCap = "round";
        this.canvasCtx.shadowBlur = this.settings.glowBlur;
        const selectedChannels = this.settings.channels;
        const isSolo = selectedChannels !== (0, _config.config).channels.both;
        const visibleChannels = isSolo ? channels.filter((channel)=>channel.name === selectedChannels) : channels;
        visibleChannels.forEach((channel)=>this._drawChannel({
                channel,
                isSolo
            }));
        this.canvasCtx.restore();
    }
}
exports.default = BarsRenderer;

},{"../../../../config":"ibNvS","../../../../utils/spectrumHelpers":"kjBMI","../../../../utils/uiHelpers":"hJg0i","../../../../utils/smoothing":"O1O6W","../../config":"kEsuf","./helpers":"9rjs8","../getChannelBands":"6NJbX","../../../../utils/color":"1Zxww","./color":"dgPvn","./config":"eJ8V8","@parcel/transformer-js/src/esmodule-helpers.js":"53hI8"}],"kjBMI":[function(require,module,exports,__globalThis) {
/**
 * Get the center angle for a band, mirrored onto the left or right semicircle by "side".
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getStereoBandAngle", ()=>getStereoBandAngle);
const getStereoBandAngle = (index, bandCount, side, topAngle)=>topAngle + side * (index + 0.5) * Math.PI / bandCount;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"53hI8"}],"O1O6W":[function(require,module,exports,__globalThis) {
/** Get a centered moving average without wrapping the ends. */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "movingAverage", ()=>movingAverage);
const movingAverage = (values, windowSize)=>{
    if (!Number.isInteger(windowSize) || windowSize < 1 || windowSize % 2 === 0) throw new RangeError("windowSize must be a positive odd integer");
    const radius = (windowSize - 1) / 2;
    const result = new Array(values.length);
    for(let i = 0; i < values.length; i++){
        const start = Math.max(0, i - radius);
        const end = Math.min(values.length - 1, i + radius);
        let sum = 0;
        for(let j = start; j <= end; j++)sum += values[j];
        result[i] = sum / (end - start + 1);
    }
    return result;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"53hI8"}],"9rjs8":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getChannelBandGroups", ()=>getChannelBandGroups);
var _bassSpectrum = require("../../../../utils/bassSpectrum");
var _frequencyBands = require("../../../../utils/frequencyBands");
var _getChannelBands = require("../getChannelBands");
const getChannelBandGroups = ({ data, bandsPerRing, midsMaxFrequency, maxFrequency })=>{
    const getUpperBands = (bandCount, minFrequency, upperFrequency)=>Array.from((0, _frequencyBands.getDistinctFrequencyBands)(data.frequencyData, data.sampleRate, data.fftSize, bandCount, minFrequency, upperFrequency, "logarithmic"));
    const getGroups = (bandCount)=>({
            bass: Array.from((0, _getChannelBands.getBassBands)(data, bandCount)),
            mids: getUpperBands(bandCount, (0, _bassSpectrum.bassSpectrum).maxFrequency, midsMaxFrequency),
            highs: getUpperBands(bandCount, midsMaxFrequency, maxFrequency)
        });
    const groups = getGroups(bandsPerRing);
    const alignedCount = Math.min(groups.bass.length, groups.mids.length, groups.highs.length);
    return alignedCount === bandsPerRing ? groups : getGroups(alignedCount);
};

},{"../../../../utils/bassSpectrum":"jCaIJ","../../../../utils/frequencyBands":"g8x6e","../getChannelBands":"6NJbX","@parcel/transformer-js/src/esmodule-helpers.js":"53hI8"}],"g8x6e":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
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

},{"@parcel/transformer-js/src/esmodule-helpers.js":"53hI8"}],"6NJbX":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getBassBandCount", ()=>getBassBandCount);
parcelHelpers.export(exports, "getBassBands", ()=>getBassBands);
parcelHelpers.export(exports, "getUpperBands", ()=>getUpperBands);
parcelHelpers.export(exports, "getChannelBands", ()=>getChannelBands);
var _bassSpectrum = require("../../../utils/bassSpectrum");
var _frequencyBands = require("../../../utils/frequencyBands");
const getBassBandCount = (data)=>Math.min((0, _bassSpectrum.bassSpectrum).bandCount, (0, _bassSpectrum.getAvailableBassBins)(data.sampleRate, data.bassFftSize));
const getBassBands = (data, bassBandCount)=>(0, _frequencyBands.getDistinctFrequencyBands)(data.bassFrequencyData, data.sampleRate, data.bassFftSize, bassBandCount, (0, _bassSpectrum.bassSpectrum).minFrequency, (0, _bassSpectrum.bassSpectrum).maxFrequency, "linear");
const getUpperBands = (data, totalBandCount, bassBandCount, maxFrequency)=>(0, _frequencyBands.getDistinctFrequencyBands)(data.frequencyData, data.sampleRate, data.fftSize, totalBandCount - bassBandCount, (0, _bassSpectrum.bassSpectrum).maxFrequency, maxFrequency, "logarithmic");
const getChannelBands = (data, totalBandCount, maxFrequency)=>{
    const bassBandCount = getBassBandCount(data);
    const bassBands = getBassBands(data, bassBandCount);
    const upperBands = getUpperBands(data, totalBandCount, bassBandCount, maxFrequency);
    return [
        ...bassBands,
        ...upperBands
    ];
};

},{"../../../utils/bassSpectrum":"jCaIJ","../../../utils/frequencyBands":"g8x6e","@parcel/transformer-js/src/esmodule-helpers.js":"53hI8"}],"1Zxww":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "rgbToHsl", ()=>rgbToHsl);
parcelHelpers.export(exports, "shiftHue", ()=>shiftHue);
parcelHelpers.export(exports, "formatHsl", ()=>formatHsl);
parcelHelpers.export(exports, "getHueShiftedColor", ()=>getHueShiftedColor);
const rgbToHsl = ({ r, g, b, a })=>{
    let hue;
    const red = r / 255;
    const green = g / 255;
    const blue = b / 255;
    const max = Math.max(red, green, blue);
    const min = Math.min(red, green, blue);
    const delta = max - min;
    const lightness = (max + min) / 2;
    if (delta === 0) return {
        h: 0,
        s: 0,
        l: lightness * 100,
        a
    };
    const saturation = delta / (1 - Math.abs(2 * lightness - 1));
    if (max === red) hue = (green - blue) / delta % 6;
    else if (max === green) hue = (blue - red) / delta + 2;
    else hue = (red - green) / delta + 4;
    return {
        h: (hue * 60 + 360) % 360,
        s: saturation * 100,
        l: lightness * 100,
        a
    };
};
const shiftHue = (color, shiftDegrees)=>({
        ...color,
        h: ((color.h + shiftDegrees) % 360 + 360) % 360
    });
const formatHsl = ({ h, s, l })=>`hsl(${h}, ${s}%, ${l}%)`;
const getHueShiftedColor = (color, shiftDegrees)=>formatHsl(shiftHue(rgbToHsl(color), shiftDegrees));

},{"@parcel/transformer-js/src/esmodule-helpers.js":"53hI8"}],"dgPvn":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getMagnitudeHsl", ()=>getMagnitudeHsl);
parcelHelpers.export(exports, "getMagnitudeColor", ()=>getMagnitudeColor);
var _mathHelpers = require("../../../../utils/mathHelpers");
const getMagnitudeHsl = ({ color, magnitude, hueShiftDegrees, saturationRange, lightnessRange })=>{
    const progress = Math.max(0, Math.min(magnitude / 255, 1));
    return {
        h: (color.h + hueShiftDegrees * progress + 360) % 360,
        s: (0, _mathHelpers.interpolate)(saturationRange, progress),
        l: (0, _mathHelpers.interpolate)(lightnessRange, progress),
        a: color.a
    };
};
const getMagnitudeColor = (options)=>{
    const { h, s, l, a } = getMagnitudeHsl(options);
    return `hsla(${h}, ${s}%, ${l}%, ${a})`;
};

},{"../../../../utils/mathHelpers":"60gRT","@parcel/transformer-js/src/esmodule-helpers.js":"53hI8"}],"eJ8V8":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "config", ()=>config);
const config = {
    angleOffset: -1.5 * Math.PI,
    // Bands per ring, shared by bass, mids and highs
    ringBandCountSingleChannel: 128,
    ringBandCountBothChannels: 64,
    maxFrequency: 20000,
    midsMaxFrequency: 6000,
    smoothingWindowSize: 5,
    centreOffset: 10,
    ringGap: 75,
    // Ordered from the innermost to the outermost ring
    rings: [
        {
            band: "bass",
            opacity: 1
        },
        {
            band: "mids",
            opacity: 0.75
        },
        {
            band: "highs",
            opacity: 0.5
        }
    ],
    // Faint ring behind the others, driven by the whole spectrum at once.
    // It starts at the bass ring and reaches the highs ring, then extends
    // past it by magnitude * lengthScale.
    backgroundRing: {
        opacity: 0.01,
        lineWidth: 5,
        lengthScale: 0
    },
    lineWidths: {
        bass: 5,
        mids: 2.25,
        highs: 1.75
    },
    // Keep the left and right colors identical when edited in the GUI
    linkedColors: true,
    colorLeft: {
        r: 90,
        g: 25,
        b: 225,
        a: 0.75
    },
    colorRight: {
        r: 90,
        g: 25,
        b: 225,
        a: 0.75
    },
    glowBlur: 10,
    // Groups of adjacent colours for faster processing
    colorGroups: 16,
    hueShiftDegrees: -180,
    // Magnitude (0 - 255) at which the player UI mimics the bars' color
    uiReferenceMagnitude: 100,
    saturationRange: {
        min: 75,
        max: 100
    },
    lightnessRange: {
        min: 10,
        max: 90
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"53hI8"}],"jUdym":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _uiHelpers = require("../../../../utils/uiHelpers");
var _config = require("../../config");
var _getChannelBands = require("../getChannelBands");
var _config1 = require("./config");
var _easings = require("../../../../utils/easings");
var _color = require("../../../../utils/color");
var _color1 = require("./color");
class ElectricRenderer {
    canvasCtx;
    settings;
    constructor(canvasCtx, settings){
        this.canvasCtx = canvasCtx;
        this.settings = settings;
    }
    _getBandColor(baseColor, magnitude) {
        return (0, _color1.getBandColor)({
            color: baseColor,
            magnitude,
            hueShiftDegrees: this.settings.hueShiftDegrees
        });
    }
    _getBandFill(baseColor, magnitude, ringOpacity) {
        const bandOpacity = (0, _color1.getBandOpacity)({
            magnitude,
            ...(0, _config1.config).bandOpacity
        });
        return (0, _config1.config).fillDynamic(this._getBandColor(baseColor, magnitude), ringOpacity * bandOpacity);
    }
    /**
   * Get a gradient running around the ring, with a color for each band. The
   * colors only depend on the bands, so every ring has the same colors.
   */ _createRingGradient({ bands, baseColor, centre, rotationAngle, opacity }) {
        const gradient = this.canvasCtx.createConicGradient((0, _config1.config).angleOffset + rotationAngle, centre.x, centre.y);
        bands.forEach((magnitude, index)=>{
            gradient.addColorStop((index + 0.5) / bands.length, this._getBandFill(baseColor, magnitude, opacity));
        });
        // The start of the ring sits between the last and the first band
        const seamMagnitude = (bands[0] + bands[bands.length - 1]) / 2;
        const seamColor = this._getBandFill(baseColor, seamMagnitude, opacity);
        gradient.addColorStop(0, seamColor);
        gradient.addColorStop(1, seamColor);
        return gradient;
    }
    _drawBands({ bands, rotationAngle }) {
        const centre = (0, _uiHelpers.getCenter)();
        const ringsAmount = this.settings.ringsAmount;
        const baseColor = (0, _color.rgbToHsl)(this.settings.color);
        for(let i = 0; i < ringsAmount; i++){
            const progress = ringsAmount === 1 ? 0 : i / (ringsAmount - 1);
            const sqProgres = Math.pow(progress, 2);
            const inverseSqProgress = Math.pow(1 - progress, 2);
            this.canvasCtx.lineWidth = (0, _config1.config).lineWidthDynamic(this.settings.lineWidthMin, this.settings.lineWidthMax, sqProgres);
            this.canvasCtx.strokeStyle = this._createRingGradient({
                bands,
                baseColor,
                centre,
                rotationAngle,
                opacity: inverseSqProgress
            });
            this.canvasCtx.beginPath();
            for(let j = 0; j < bands.length; j++){
                const magnitude = (0, _easings.easeInOutCubic)(2.5 + i) * bands[j] * 0.0025;
                const length = magnitude / 2;
                const angle = (0, _config1.config).angleOffset + rotationAngle + (j + 0.5) * Math.PI * 2 / bands.length;
                const radius = (0, _config.config).ring.radius + length + (0, _config1.config).centreOffset + i * this.settings.ringSpacing;
                const x = centre.x + Math.cos(angle) * radius;
                const y = centre.y + Math.sin(angle) * radius;
                j === 0 ? this.canvasCtx.moveTo(x, y) : this.canvasCtx.lineTo(x, y);
            }
            this.canvasCtx.closePath();
            this.canvasCtx.stroke();
        }
    }
    _calculateRotation(elapsedMs) {
        const elapsedS = elapsedMs / 1000;
        const rotationFactor = elapsedS % this.settings.rotationPeriodSeconds;
        const rotationDegree = rotationFactor * Math.PI * 2;
        const rotationAngle = rotationDegree / this.settings.rotationPeriodSeconds;
        return rotationAngle;
    }
    draw({ channels, elapsedMs }) {
        const channelBands = channels.flatMap(({ data })=>data ? [
                (0, _getChannelBands.getChannelBands)(data, this.settings.bandCount, (0, _config1.config).maxFrequency)
            ] : []).filter((bands)=>bands.length > 0);
        if (channelBands.length === 0) return;
        const bands = channelBands[0].map((_, index)=>channelBands.reduce((sum, channel)=>sum + channel[index], 0) / channelBands.length);
        const rotationAngle = this._calculateRotation(elapsedMs);
        this._drawBands({
            bands,
            rotationAngle
        });
    }
}
exports.default = ElectricRenderer;

},{"../../../../utils/uiHelpers":"hJg0i","../../config":"kEsuf","../getChannelBands":"6NJbX","./config":"brFhd","../../../../utils/easings":"fREcM","../../../../utils/color":"1Zxww","./color":"3QMTd","@parcel/transformer-js/src/esmodule-helpers.js":"53hI8"}],"brFhd":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "config", ()=>config);
const config = {
    minFrequency: 40,
    maxFrequency: 12000,
    bandCount: 128,
    angleOffset: -1.5 * Math.PI,
    rotationPeriodSeconds: 60,
    centreOffset: 5,
    ringsAmount: 10,
    ringSpacing: 3,
    lineWidthMin: 0.5,
    lineWidthMax: 30,
    lineWidthDynamic: (min, max, percent)=>min + percent * max,
    uiRingHueShift: 15,
    uiTrackHueShift: 30,
    color: {
        r: 225,
        g: 25,
        b: 150,
        a: 0.75
    },
    fillDynamic: ({ h, s, l, a }, opacity)=>`hsla(${h}, ${s}%, ${l}%, ${a * opacity})`,
    hueShiftDegrees: 90,
    // Band magnitude (0 - 255) at which the player UI mimics the rings' color
    uiReferenceMagnitude: 100,
    // Band opacity follows its magnitude, so rings fade out when music stops
    bandOpacity: {
        // Magnitude (0 - 255) at which a band is fully opaque
        fullMagnitude: 100
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"53hI8"}],"3QMTd":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getBandColor", ()=>getBandColor);
parcelHelpers.export(exports, "getBandOpacity", ()=>getBandOpacity);
var _color = require("../../../../utils/color");
const getBandColor = ({ color, magnitude, hueShiftDegrees })=>{
    const progress = Math.max(0, Math.min(magnitude / 255, 1));
    return (0, _color.shiftHue)(color, hueShiftDegrees * progress);
};
const getBandOpacity = ({ magnitude, fullMagnitude })=>Math.max(0, Math.min(magnitude / fullMagnitude, 1));

},{"../../../../utils/color":"1Zxww","@parcel/transformer-js/src/esmodule-helpers.js":"53hI8"}],"37bWv":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getUITheme", ()=>getUITheme);
var _barsThemeHelpers = require("./variants/barsThemeHelpers");
var _electricThemeHelpers = require("./variants/electricThemeHelpers");
const getUITheme = (variant, settings)=>{
    switch(variant){
        case "electric":
            return (0, _electricThemeHelpers.getElectricTheme)(settings.electric);
        default:
            return (0, _barsThemeHelpers.getBarsTheme)(settings.bars);
    }
};

},{"./variants/barsThemeHelpers":"bDfbz","./variants/electricThemeHelpers":"5v8Gb","@parcel/transformer-js/src/esmodule-helpers.js":"53hI8"}],"bDfbz":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getBarsTheme", ()=>getBarsTheme);
var _config = require("../../../../config");
var _color = require("../../../../utils/color");
var _config1 = require("../../renderers/Bars/config");
var _color1 = require("../../renderers/Bars/color");
var _helpers = require("../helpers");
// The color a bar of this channel has at the reference magnitude
const getReferenceColor = (channelColor, settings)=>(0, _color1.getMagnitudeHsl)({
        color: (0, _color.rgbToHsl)(channelColor),
        magnitude: (0, _config1.config).uiReferenceMagnitude,
        hueShiftDegrees: settings.hueShiftDegrees,
        saturationRange: settings.saturationRange,
        lightnessRange: settings.lightnessRange
    });
const getBarsTheme = (settings)=>{
    const { channels, colorChannelL, colorChannelR } = settings;
    // Two channels => one semi-circle per
    if (channels === (0, _config.config).channels.both) {
        const left = getReferenceColor(colorChannelL, settings);
        const right = getReferenceColor(colorChannelR, settings);
        const ringL = (0, _helpers.getRingSegment)("left", left);
        const ringR = (0, _helpers.getRingSegment)("right", right);
        const accent = `color-mix(in srgb, ${(0, _color.formatHsl)(left)}, ${(0, _color.formatHsl)(right)})`;
        return {
            accent,
            ring: [
                ringL,
                ringR
            ],
            trackStart: (0, _color.formatHsl)(left),
            trackEnd: (0, _color.formatHsl)(right)
        };
    }
    // Single channel => one full circle per
    const color = channels === (0, _config.config).channels.left ? colorChannelL : colorChannelR;
    return (0, _helpers.getSingleColorTheme)(getReferenceColor(color, settings));
};

},{"../../../../config":"ibNvS","../../../../utils/color":"1Zxww","../../renderers/Bars/config":"eJ8V8","../../renderers/Bars/color":"dgPvn","../helpers":"i5HQD","@parcel/transformer-js/src/esmodule-helpers.js":"53hI8"}],"i5HQD":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getRingSegment", ()=>getRingSegment);
parcelHelpers.export(exports, "getSingleColorTheme", ()=>getSingleColorTheme);
var _color = require("../../../utils/color");
var _config = require("../config");
const getRingSegment = (arc, color)=>({
        arc,
        start: (0, _color.formatHsl)((0, _color.shiftHue)(color, -(0, _config.config).ring.hueShiftDegrees)),
        end: (0, _color.formatHsl)((0, _color.shiftHue)(color, (0, _config.config).ring.hueShiftDegrees))
    });
const getSingleColorTheme = (color)=>({
        accent: (0, _color.formatHsl)(color),
        ring: [
            getRingSegment("full", color)
        ],
        trackStart: (0, _color.formatHsl)((0, _color.shiftHue)(color, -(0, _config.config).track.hueShiftDegrees)),
        trackEnd: (0, _color.formatHsl)((0, _color.shiftHue)(color, (0, _config.config).track.hueShiftDegrees))
    });

},{"../../../utils/color":"1Zxww","../config":"kEsuf","@parcel/transformer-js/src/esmodule-helpers.js":"53hI8"}],"5v8Gb":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getElectricTheme", ()=>getElectricTheme);
var _color = require("../../../../utils/color");
var _config = require("../../renderers/Electric/config");
var _color1 = require("../../renderers/Electric/color");
var _helpers = require("../helpers");
const getElectricTheme = (settings)=>{
    // The color a ring segment has at the reference magnitude
    const referenceColor = (0, _color1.getBandColor)({
        color: (0, _color.rgbToHsl)(settings.color),
        magnitude: (0, _config.config).uiReferenceMagnitude,
        hueShiftDegrees: settings.hueShiftDegrees
    });
    return (0, _helpers.getSingleColorTheme)(referenceColor);
};

},{"../../../../utils/color":"1Zxww","../../renderers/Electric/config":"brFhd","../../renderers/Electric/color":"3QMTd","../helpers":"i5HQD","@parcel/transformer-js/src/esmodule-helpers.js":"53hI8"}],"5d76k":[function(require,module,exports,__globalThis) {
// Setup
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const defaults = {
    fill: "rgb(0, 0, 0)"
};
class Canvas {
    _canvasEl;
    _canvasCtx;
    _width;
    _height;
    _pixelRatio;
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
exports.default = Canvas;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"53hI8"}],"eCjx1":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _tweakpane = require("tweakpane");
var _folders = require("./folders");
class GUI {
    _settings;
    constructor(settings){
        this._settings = settings;
    }
    /**
   * @public
   */ init() {
        const pane = new (0, _tweakpane.Pane)();
        (0, _folders.addVisualizationFolder)(pane, this._settings.visualization);
        (0, _folders.addBarsFolder)(pane, this._settings.bars);
        (0, _folders.addElectricFolder)(pane, this._settings.electric);
    }
}
exports.default = GUI;

},{"tweakpane":"hSYYa","./folders":"45cjw","@parcel/transformer-js/src/esmodule-helpers.js":"53hI8"}],"hSYYa":[function(require,module,exports,__globalThis) {
/*! Tweakpane 4.0.5 (c) 2016 cocopon, licensed under the MIT license. */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "BladeApi", ()=>BladeApi);
parcelHelpers.export(exports, "ButtonApi", ()=>ButtonApi);
parcelHelpers.export(exports, "FolderApi", ()=>FolderApi);
parcelHelpers.export(exports, "ListBladeApi", ()=>ListBladeApi);
parcelHelpers.export(exports, "ListInputBindingApi", ()=>ListInputBindingApi);
parcelHelpers.export(exports, "Pane", ()=>Pane);
parcelHelpers.export(exports, "Semver", ()=>Semver);
parcelHelpers.export(exports, "SeparatorBladeApi", ()=>SeparatorBladeApi);
parcelHelpers.export(exports, "SliderBladeApi", ()=>SliderBladeApi);
parcelHelpers.export(exports, "SliderInputBindingApi", ()=>SliderInputBindingApi);
parcelHelpers.export(exports, "TabApi", ()=>TabApi);
parcelHelpers.export(exports, "TabPageApi", ()=>TabPageApi);
parcelHelpers.export(exports, "TextBladeApi", ()=>TextBladeApi);
parcelHelpers.export(exports, "TpChangeEvent", ()=>TpChangeEvent);
parcelHelpers.export(exports, "VERSION", ()=>VERSION);
function forceCast(v) {
    return v;
}
function isEmpty(value) {
    return value === null || value === undefined;
}
function isObject$1(value) {
    return value !== null && typeof value === 'object';
}
function isRecord(value) {
    return value !== null && typeof value === 'object';
}
function deepEqualsArray(a1, a2) {
    if (a1.length !== a2.length) return false;
    for(let i = 0; i < a1.length; i++){
        if (a1[i] !== a2[i]) return false;
    }
    return true;
}
function deepMerge(r1, r2) {
    const keys = Array.from(new Set([
        ...Object.keys(r1),
        ...Object.keys(r2)
    ]));
    return keys.reduce((result, key)=>{
        const v1 = r1[key];
        const v2 = r2[key];
        return isRecord(v1) && isRecord(v2) ? Object.assign(Object.assign({}, result), {
            [key]: deepMerge(v1, v2)
        }) : Object.assign(Object.assign({}, result), {
            [key]: key in r2 ? v2 : v1
        });
    }, {});
}
function isBinding(value) {
    if (!isObject$1(value)) return false;
    return 'target' in value;
}
const CREATE_MESSAGE_MAP = {
    alreadydisposed: ()=>'View has been already disposed',
    invalidparams: (context)=>`Invalid parameters for '${context.name}'`,
    nomatchingcontroller: (context)=>`No matching controller for '${context.key}'`,
    nomatchingview: (context)=>`No matching view for '${JSON.stringify(context.params)}'`,
    notbindable: ()=>`Value is not bindable`,
    notcompatible: (context)=>`Not compatible with  plugin '${context.id}'`,
    propertynotfound: (context)=>`Property '${context.name}' not found`,
    shouldneverhappen: ()=>'This error should never happen'
};
class TpError {
    static alreadyDisposed() {
        return new TpError({
            type: 'alreadydisposed'
        });
    }
    static notBindable() {
        return new TpError({
            type: 'notbindable'
        });
    }
    static notCompatible(bundleId, id) {
        return new TpError({
            type: 'notcompatible',
            context: {
                id: `${bundleId}.${id}`
            }
        });
    }
    static propertyNotFound(name) {
        return new TpError({
            type: 'propertynotfound',
            context: {
                name: name
            }
        });
    }
    static shouldNeverHappen() {
        return new TpError({
            type: 'shouldneverhappen'
        });
    }
    constructor(config){
        var _a;
        this.message = (_a = CREATE_MESSAGE_MAP[config.type](forceCast(config.context))) !== null && _a !== void 0 ? _a : 'Unexpected error';
        this.name = this.constructor.name;
        this.stack = new Error(this.message).stack;
        this.type = config.type;
    }
    toString() {
        return this.message;
    }
}
class BindingTarget {
    constructor(obj, key){
        this.obj_ = obj;
        this.key = key;
    }
    static isBindable(obj) {
        if (obj === null) return false;
        if (typeof obj !== 'object' && typeof obj !== 'function') return false;
        return true;
    }
    read() {
        return this.obj_[this.key];
    }
    write(value) {
        this.obj_[this.key] = value;
    }
    writeProperty(name, value) {
        const valueObj = this.read();
        if (!BindingTarget.isBindable(valueObj)) throw TpError.notBindable();
        if (!(name in valueObj)) throw TpError.propertyNotFound(name);
        valueObj[name] = value;
    }
}
class Emitter {
    constructor(){
        this.observers_ = {};
    }
    on(eventName, handler, opt_options) {
        var _a;
        let observers = this.observers_[eventName];
        if (!observers) observers = this.observers_[eventName] = [];
        observers.push({
            handler: handler,
            key: (_a = opt_options === null || opt_options === void 0 ? void 0 : opt_options.key) !== null && _a !== void 0 ? _a : handler
        });
        return this;
    }
    off(eventName, key) {
        const observers = this.observers_[eventName];
        if (observers) this.observers_[eventName] = observers.filter((observer)=>{
            return observer.key !== key;
        });
        return this;
    }
    emit(eventName, event) {
        const observers = this.observers_[eventName];
        if (!observers) return;
        observers.forEach((observer)=>{
            observer.handler(event);
        });
    }
}
class ComplexValue {
    constructor(initialValue, config){
        var _a;
        this.constraint_ = config === null || config === void 0 ? void 0 : config.constraint;
        this.equals_ = (_a = config === null || config === void 0 ? void 0 : config.equals) !== null && _a !== void 0 ? _a : (v1, v2)=>v1 === v2;
        this.emitter = new Emitter();
        this.rawValue_ = initialValue;
    }
    get constraint() {
        return this.constraint_;
    }
    get rawValue() {
        return this.rawValue_;
    }
    set rawValue(rawValue) {
        this.setRawValue(rawValue, {
            forceEmit: false,
            last: true
        });
    }
    setRawValue(rawValue, options) {
        const opts = options !== null && options !== void 0 ? options : {
            forceEmit: false,
            last: true
        };
        const constrainedValue = this.constraint_ ? this.constraint_.constrain(rawValue) : rawValue;
        const prevValue = this.rawValue_;
        const changed = !this.equals_(prevValue, constrainedValue);
        if (!changed && !opts.forceEmit) return;
        this.emitter.emit('beforechange', {
            sender: this
        });
        this.rawValue_ = constrainedValue;
        this.emitter.emit('change', {
            options: opts,
            previousRawValue: prevValue,
            rawValue: constrainedValue,
            sender: this
        });
    }
}
class PrimitiveValue {
    constructor(initialValue){
        this.emitter = new Emitter();
        this.value_ = initialValue;
    }
    get rawValue() {
        return this.value_;
    }
    set rawValue(value) {
        this.setRawValue(value, {
            forceEmit: false,
            last: true
        });
    }
    setRawValue(value, options) {
        const opts = options !== null && options !== void 0 ? options : {
            forceEmit: false,
            last: true
        };
        const prevValue = this.value_;
        if (prevValue === value && !opts.forceEmit) return;
        this.emitter.emit('beforechange', {
            sender: this
        });
        this.value_ = value;
        this.emitter.emit('change', {
            options: opts,
            previousRawValue: prevValue,
            rawValue: this.value_,
            sender: this
        });
    }
}
class ReadonlyPrimitiveValue {
    constructor(value){
        this.emitter = new Emitter();
        this.onValueBeforeChange_ = this.onValueBeforeChange_.bind(this);
        this.onValueChange_ = this.onValueChange_.bind(this);
        this.value_ = value;
        this.value_.emitter.on('beforechange', this.onValueBeforeChange_);
        this.value_.emitter.on('change', this.onValueChange_);
    }
    get rawValue() {
        return this.value_.rawValue;
    }
    onValueBeforeChange_(ev) {
        this.emitter.emit('beforechange', Object.assign(Object.assign({}, ev), {
            sender: this
        }));
    }
    onValueChange_(ev) {
        this.emitter.emit('change', Object.assign(Object.assign({}, ev), {
            sender: this
        }));
    }
}
function createValue(initialValue, config) {
    const constraint = config === null || config === void 0 ? void 0 : config.constraint;
    const equals = config === null || config === void 0 ? void 0 : config.equals;
    if (!constraint && !equals) return new PrimitiveValue(initialValue);
    return new ComplexValue(initialValue, config);
}
function createReadonlyValue(value) {
    return [
        new ReadonlyPrimitiveValue(value),
        (rawValue, options)=>{
            value.setRawValue(rawValue, options);
        }
    ];
}
class ValueMap {
    constructor(valueMap){
        this.emitter = new Emitter();
        this.valMap_ = valueMap;
        for(const key in this.valMap_){
            const v = this.valMap_[key];
            v.emitter.on('change', ()=>{
                this.emitter.emit('change', {
                    key: key,
                    sender: this
                });
            });
        }
    }
    static createCore(initialValue) {
        const keys = Object.keys(initialValue);
        return keys.reduce((o, key)=>{
            return Object.assign(o, {
                [key]: createValue(initialValue[key])
            });
        }, {});
    }
    static fromObject(initialValue) {
        const core = this.createCore(initialValue);
        return new ValueMap(core);
    }
    get(key) {
        return this.valMap_[key].rawValue;
    }
    set(key, value) {
        this.valMap_[key].rawValue = value;
    }
    value(key) {
        return this.valMap_[key];
    }
}
class DefiniteRangeConstraint {
    constructor(config){
        this.values = ValueMap.fromObject({
            max: config.max,
            min: config.min
        });
    }
    constrain(value) {
        const max = this.values.get('max');
        const min = this.values.get('min');
        return Math.min(Math.max(value, min), max);
    }
}
class RangeConstraint {
    constructor(config){
        this.values = ValueMap.fromObject({
            max: config.max,
            min: config.min
        });
    }
    constrain(value) {
        const max = this.values.get('max');
        const min = this.values.get('min');
        let result = value;
        if (!isEmpty(min)) result = Math.max(result, min);
        if (!isEmpty(max)) result = Math.min(result, max);
        return result;
    }
}
class StepConstraint {
    constructor(step, origin = 0){
        this.step = step;
        this.origin = origin;
    }
    constrain(value) {
        const o = this.origin % this.step;
        const r = Math.round((value - o) / this.step);
        return o + r * this.step;
    }
}
class NumberLiteralNode {
    constructor(text){
        this.text = text;
    }
    evaluate() {
        return Number(this.text);
    }
    toString() {
        return this.text;
    }
}
const BINARY_OPERATION_MAP = {
    '**': (v1, v2)=>Math.pow(v1, v2),
    '*': (v1, v2)=>v1 * v2,
    '/': (v1, v2)=>v1 / v2,
    '%': (v1, v2)=>v1 % v2,
    '+': (v1, v2)=>v1 + v2,
    '-': (v1, v2)=>v1 - v2,
    '<<': (v1, v2)=>v1 << v2,
    '>>': (v1, v2)=>v1 >> v2,
    '>>>': (v1, v2)=>v1 >>> v2,
    '&': (v1, v2)=>v1 & v2,
    '^': (v1, v2)=>v1 ^ v2,
    '|': (v1, v2)=>v1 | v2
};
class BinaryOperationNode {
    constructor(operator, left, right){
        this.left = left;
        this.operator = operator;
        this.right = right;
    }
    evaluate() {
        const op = BINARY_OPERATION_MAP[this.operator];
        if (!op) throw new Error(`unexpected binary operator: '${this.operator}`);
        return op(this.left.evaluate(), this.right.evaluate());
    }
    toString() {
        return [
            'b(',
            this.left.toString(),
            this.operator,
            this.right.toString(),
            ')'
        ].join(' ');
    }
}
const UNARY_OPERATION_MAP = {
    '+': (v)=>v,
    '-': (v)=>-v,
    '~': (v)=>~v
};
class UnaryOperationNode {
    constructor(operator, expr){
        this.operator = operator;
        this.expression = expr;
    }
    evaluate() {
        const op = UNARY_OPERATION_MAP[this.operator];
        if (!op) throw new Error(`unexpected unary operator: '${this.operator}`);
        return op(this.expression.evaluate());
    }
    toString() {
        return [
            'u(',
            this.operator,
            this.expression.toString(),
            ')'
        ].join(' ');
    }
}
function combineReader(parsers) {
    return (text, cursor)=>{
        for(let i = 0; i < parsers.length; i++){
            const result = parsers[i](text, cursor);
            if (result !== '') return result;
        }
        return '';
    };
}
function readWhitespace(text, cursor) {
    var _a;
    const m = text.substr(cursor).match(/^\s+/);
    return (_a = m && m[0]) !== null && _a !== void 0 ? _a : '';
}
function readNonZeroDigit(text, cursor) {
    const ch = text.substr(cursor, 1);
    return ch.match(/^[1-9]$/) ? ch : '';
}
function readDecimalDigits(text, cursor) {
    var _a;
    const m = text.substr(cursor).match(/^[0-9]+/);
    return (_a = m && m[0]) !== null && _a !== void 0 ? _a : '';
}
function readSignedInteger(text, cursor) {
    const ds = readDecimalDigits(text, cursor);
    if (ds !== '') return ds;
    const sign = text.substr(cursor, 1);
    cursor += 1;
    if (sign !== '-' && sign !== '+') return '';
    const sds = readDecimalDigits(text, cursor);
    if (sds === '') return '';
    return sign + sds;
}
function readExponentPart(text, cursor) {
    const e = text.substr(cursor, 1);
    cursor += 1;
    if (e.toLowerCase() !== 'e') return '';
    const si = readSignedInteger(text, cursor);
    if (si === '') return '';
    return e + si;
}
function readDecimalIntegerLiteral(text, cursor) {
    const ch = text.substr(cursor, 1);
    if (ch === '0') return ch;
    const nzd = readNonZeroDigit(text, cursor);
    cursor += nzd.length;
    if (nzd === '') return '';
    return nzd + readDecimalDigits(text, cursor);
}
function readDecimalLiteral1(text, cursor) {
    const dil = readDecimalIntegerLiteral(text, cursor);
    cursor += dil.length;
    if (dil === '') return '';
    const dot = text.substr(cursor, 1);
    cursor += dot.length;
    if (dot !== '.') return '';
    const dds = readDecimalDigits(text, cursor);
    cursor += dds.length;
    return dil + dot + dds + readExponentPart(text, cursor);
}
function readDecimalLiteral2(text, cursor) {
    const dot = text.substr(cursor, 1);
    cursor += dot.length;
    if (dot !== '.') return '';
    const dds = readDecimalDigits(text, cursor);
    cursor += dds.length;
    if (dds === '') return '';
    return dot + dds + readExponentPart(text, cursor);
}
function readDecimalLiteral3(text, cursor) {
    const dil = readDecimalIntegerLiteral(text, cursor);
    cursor += dil.length;
    if (dil === '') return '';
    return dil + readExponentPart(text, cursor);
}
const readDecimalLiteral = combineReader([
    readDecimalLiteral1,
    readDecimalLiteral2,
    readDecimalLiteral3
]);
function parseBinaryDigits(text, cursor) {
    var _a;
    const m = text.substr(cursor).match(/^[01]+/);
    return (_a = m && m[0]) !== null && _a !== void 0 ? _a : '';
}
function readBinaryIntegerLiteral(text, cursor) {
    const prefix = text.substr(cursor, 2);
    cursor += prefix.length;
    if (prefix.toLowerCase() !== '0b') return '';
    const bds = parseBinaryDigits(text, cursor);
    if (bds === '') return '';
    return prefix + bds;
}
function readOctalDigits(text, cursor) {
    var _a;
    const m = text.substr(cursor).match(/^[0-7]+/);
    return (_a = m && m[0]) !== null && _a !== void 0 ? _a : '';
}
function readOctalIntegerLiteral(text, cursor) {
    const prefix = text.substr(cursor, 2);
    cursor += prefix.length;
    if (prefix.toLowerCase() !== '0o') return '';
    const ods = readOctalDigits(text, cursor);
    if (ods === '') return '';
    return prefix + ods;
}
function readHexDigits(text, cursor) {
    var _a;
    const m = text.substr(cursor).match(/^[0-9a-f]+/i);
    return (_a = m && m[0]) !== null && _a !== void 0 ? _a : '';
}
function readHexIntegerLiteral(text, cursor) {
    const prefix = text.substr(cursor, 2);
    cursor += prefix.length;
    if (prefix.toLowerCase() !== '0x') return '';
    const hds = readHexDigits(text, cursor);
    if (hds === '') return '';
    return prefix + hds;
}
const readNonDecimalIntegerLiteral = combineReader([
    readBinaryIntegerLiteral,
    readOctalIntegerLiteral,
    readHexIntegerLiteral
]);
const readNumericLiteral = combineReader([
    readNonDecimalIntegerLiteral,
    readDecimalLiteral
]);
function parseLiteral(text, cursor) {
    const num = readNumericLiteral(text, cursor);
    cursor += num.length;
    if (num === '') return null;
    return {
        evaluable: new NumberLiteralNode(num),
        cursor: cursor
    };
}
function parseParenthesizedExpression(text, cursor) {
    const op = text.substr(cursor, 1);
    cursor += op.length;
    if (op !== '(') return null;
    const expr = parseExpression(text, cursor);
    if (!expr) return null;
    cursor = expr.cursor;
    cursor += readWhitespace(text, cursor).length;
    const cl = text.substr(cursor, 1);
    cursor += cl.length;
    if (cl !== ')') return null;
    return {
        evaluable: expr.evaluable,
        cursor: cursor
    };
}
function parsePrimaryExpression(text, cursor) {
    var _a;
    return (_a = parseLiteral(text, cursor)) !== null && _a !== void 0 ? _a : parseParenthesizedExpression(text, cursor);
}
function parseUnaryExpression(text, cursor) {
    const expr = parsePrimaryExpression(text, cursor);
    if (expr) return expr;
    const op = text.substr(cursor, 1);
    cursor += op.length;
    if (op !== '+' && op !== '-' && op !== '~') return null;
    const num = parseUnaryExpression(text, cursor);
    if (!num) return null;
    cursor = num.cursor;
    return {
        cursor: cursor,
        evaluable: new UnaryOperationNode(op, num.evaluable)
    };
}
function readBinaryOperator(ops, text, cursor) {
    cursor += readWhitespace(text, cursor).length;
    const op = ops.filter((op)=>text.startsWith(op, cursor))[0];
    if (!op) return null;
    cursor += op.length;
    cursor += readWhitespace(text, cursor).length;
    return {
        cursor: cursor,
        operator: op
    };
}
function createBinaryOperationExpressionParser(exprParser, ops) {
    return (text, cursor)=>{
        const firstExpr = exprParser(text, cursor);
        if (!firstExpr) return null;
        cursor = firstExpr.cursor;
        let expr = firstExpr.evaluable;
        for(;;){
            const op = readBinaryOperator(ops, text, cursor);
            if (!op) break;
            cursor = op.cursor;
            const nextExpr = exprParser(text, cursor);
            if (!nextExpr) return null;
            cursor = nextExpr.cursor;
            expr = new BinaryOperationNode(op.operator, expr, nextExpr.evaluable);
        }
        return expr ? {
            cursor: cursor,
            evaluable: expr
        } : null;
    };
}
const parseBinaryOperationExpression = [
    [
        '**'
    ],
    [
        '*',
        '/',
        '%'
    ],
    [
        '+',
        '-'
    ],
    [
        '<<',
        '>>>',
        '>>'
    ],
    [
        '&'
    ],
    [
        '^'
    ],
    [
        '|'
    ]
].reduce((parser, ops)=>{
    return createBinaryOperationExpressionParser(parser, ops);
}, parseUnaryExpression);
function parseExpression(text, cursor) {
    cursor += readWhitespace(text, cursor).length;
    return parseBinaryOperationExpression(text, cursor);
}
function parseEcmaNumberExpression(text) {
    const expr = parseExpression(text, 0);
    if (!expr) return null;
    const cursor = expr.cursor + readWhitespace(text, expr.cursor).length;
    if (cursor !== text.length) return null;
    return expr.evaluable;
}
function parseNumber(text) {
    var _a;
    const r = parseEcmaNumberExpression(text);
    return (_a = r === null || r === void 0 ? void 0 : r.evaluate()) !== null && _a !== void 0 ? _a : null;
}
function numberFromUnknown(value) {
    if (typeof value === 'number') return value;
    if (typeof value === 'string') {
        const pv = parseNumber(value);
        if (!isEmpty(pv)) return pv;
    }
    return 0;
}
function numberToString(value) {
    return String(value);
}
function createNumberFormatter(digits) {
    return (value)=>{
        return value.toFixed(Math.max(Math.min(digits, 20), 0));
    };
}
function mapRange(value, start1, end1, start2, end2) {
    const p = (value - start1) / (end1 - start1);
    return start2 + p * (end2 - start2);
}
function getDecimalDigits(value) {
    const text = String(value.toFixed(10));
    const frac = text.split('.')[1];
    return frac.replace(/0+$/, '').length;
}
function constrainRange(value, min, max) {
    return Math.min(Math.max(value, min), max);
}
function loopRange(value, max) {
    return (value % max + max) % max;
}
function getSuitableDecimalDigits(params, rawValue) {
    return !isEmpty(params.step) ? getDecimalDigits(params.step) : Math.max(getDecimalDigits(rawValue), 2);
}
function getSuitableKeyScale(params) {
    var _a;
    return (_a = params.step) !== null && _a !== void 0 ? _a : 1;
}
function getSuitablePointerScale(params, rawValue) {
    var _a;
    const base = Math.abs((_a = params.step) !== null && _a !== void 0 ? _a : rawValue);
    return base === 0 ? 0.1 : Math.pow(10, Math.floor(Math.log10(base)) - 1);
}
function createStepConstraint(params, initialValue) {
    if (!isEmpty(params.step)) return new StepConstraint(params.step, initialValue);
    return null;
}
function createRangeConstraint(params) {
    if (!isEmpty(params.max) && !isEmpty(params.min)) return new DefiniteRangeConstraint({
        max: params.max,
        min: params.min
    });
    if (!isEmpty(params.max) || !isEmpty(params.min)) return new RangeConstraint({
        max: params.max,
        min: params.min
    });
    return null;
}
function createNumberTextPropsObject(params, initialValue) {
    var _a, _b, _c;
    return {
        formatter: (_a = params.format) !== null && _a !== void 0 ? _a : createNumberFormatter(getSuitableDecimalDigits(params, initialValue)),
        keyScale: (_b = params.keyScale) !== null && _b !== void 0 ? _b : getSuitableKeyScale(params),
        pointerScale: (_c = params.pointerScale) !== null && _c !== void 0 ? _c : getSuitablePointerScale(params, initialValue)
    };
}
function createNumberTextInputParamsParser(p) {
    return {
        format: p.optional.function,
        keyScale: p.optional.number,
        max: p.optional.number,
        min: p.optional.number,
        pointerScale: p.optional.number,
        step: p.optional.number
    };
}
function createPointAxis(config) {
    return {
        constraint: config.constraint,
        textProps: ValueMap.fromObject(createNumberTextPropsObject(config.params, config.initialValue))
    };
}
class BladeApi {
    constructor(controller){
        this.controller = controller;
    }
    get element() {
        return this.controller.view.element;
    }
    get disabled() {
        return this.controller.viewProps.get('disabled');
    }
    set disabled(disabled) {
        this.controller.viewProps.set('disabled', disabled);
    }
    get hidden() {
        return this.controller.viewProps.get('hidden');
    }
    set hidden(hidden) {
        this.controller.viewProps.set('hidden', hidden);
    }
    dispose() {
        this.controller.viewProps.set('disposed', true);
    }
    importState(state) {
        return this.controller.importState(state);
    }
    exportState() {
        return this.controller.exportState();
    }
}
class TpEvent {
    constructor(target){
        this.target = target;
    }
}
class TpChangeEvent extends TpEvent {
    constructor(target, value, last){
        super(target);
        this.value = value;
        this.last = last !== null && last !== void 0 ? last : true;
    }
}
class TpFoldEvent extends TpEvent {
    constructor(target, expanded){
        super(target);
        this.expanded = expanded;
    }
}
class TpTabSelectEvent extends TpEvent {
    constructor(target, index){
        super(target);
        this.index = index;
    }
}
class TpMouseEvent extends TpEvent {
    constructor(target, nativeEvent){
        super(target);
        this.native = nativeEvent;
    }
}
class BindingApi extends BladeApi {
    constructor(controller){
        super(controller);
        this.onValueChange_ = this.onValueChange_.bind(this);
        this.emitter_ = new Emitter();
        this.controller.value.emitter.on('change', this.onValueChange_);
    }
    get label() {
        return this.controller.labelController.props.get('label');
    }
    set label(label) {
        this.controller.labelController.props.set('label', label);
    }
    get key() {
        return this.controller.value.binding.target.key;
    }
    get tag() {
        return this.controller.tag;
    }
    set tag(tag) {
        this.controller.tag = tag;
    }
    on(eventName, handler) {
        const bh = handler.bind(this);
        this.emitter_.on(eventName, (ev)=>{
            bh(ev);
        }, {
            key: handler
        });
        return this;
    }
    off(eventName, handler) {
        this.emitter_.off(eventName, handler);
        return this;
    }
    refresh() {
        this.controller.value.fetch();
    }
    onValueChange_(ev) {
        const value = this.controller.value;
        this.emitter_.emit('change', new TpChangeEvent(this, forceCast(value.binding.target.read()), ev.options.last));
    }
}
class InputBindingValue {
    constructor(value, binding){
        this.onValueBeforeChange_ = this.onValueBeforeChange_.bind(this);
        this.onValueChange_ = this.onValueChange_.bind(this);
        this.binding = binding;
        this.value_ = value;
        this.value_.emitter.on('beforechange', this.onValueBeforeChange_);
        this.value_.emitter.on('change', this.onValueChange_);
        this.emitter = new Emitter();
    }
    get rawValue() {
        return this.value_.rawValue;
    }
    set rawValue(rawValue) {
        this.value_.rawValue = rawValue;
    }
    setRawValue(rawValue, options) {
        this.value_.setRawValue(rawValue, options);
    }
    fetch() {
        this.value_.rawValue = this.binding.read();
    }
    push() {
        this.binding.write(this.value_.rawValue);
    }
    onValueBeforeChange_(ev) {
        this.emitter.emit('beforechange', Object.assign(Object.assign({}, ev), {
            sender: this
        }));
    }
    onValueChange_(ev) {
        this.push();
        this.emitter.emit('change', Object.assign(Object.assign({}, ev), {
            sender: this
        }));
    }
}
function isInputBindingValue(v) {
    if (!('binding' in v)) return false;
    const b = v['binding'];
    return isBinding(b) && 'read' in b && 'write' in b;
}
function parseObject(value, keyToParserMap) {
    const keys = Object.keys(keyToParserMap);
    const result = keys.reduce((tmp, key)=>{
        if (tmp === undefined) return undefined;
        const parser = keyToParserMap[key];
        const result = parser(value[key]);
        return result.succeeded ? Object.assign(Object.assign({}, tmp), {
            [key]: result.value
        }) : undefined;
    }, {});
    return forceCast(result);
}
function parseArray(value, parseItem) {
    return value.reduce((tmp, item)=>{
        if (tmp === undefined) return undefined;
        const result = parseItem(item);
        if (!result.succeeded || result.value === undefined) return undefined;
        return [
            ...tmp,
            result.value
        ];
    }, []);
}
function isObject(value) {
    if (value === null) return false;
    return typeof value === 'object';
}
function createMicroParserBuilder(parse) {
    return (optional)=>(v)=>{
            if (!optional && v === undefined) return {
                succeeded: false,
                value: undefined
            };
            if (optional && v === undefined) return {
                succeeded: true,
                value: undefined
            };
            const result = parse(v);
            return result !== undefined ? {
                succeeded: true,
                value: result
            } : {
                succeeded: false,
                value: undefined
            };
        };
}
function createMicroParserBuilders(optional) {
    return {
        custom: (parse)=>createMicroParserBuilder(parse)(optional),
        boolean: createMicroParserBuilder((v)=>typeof v === 'boolean' ? v : undefined)(optional),
        number: createMicroParserBuilder((v)=>typeof v === 'number' ? v : undefined)(optional),
        string: createMicroParserBuilder((v)=>typeof v === 'string' ? v : undefined)(optional),
        function: createMicroParserBuilder((v)=>typeof v === 'function' ? v : undefined)(optional),
        constant: (value)=>createMicroParserBuilder((v)=>v === value ? value : undefined)(optional),
        raw: createMicroParserBuilder((v)=>v)(optional),
        object: (keyToParserMap)=>createMicroParserBuilder((v)=>{
                if (!isObject(v)) return undefined;
                return parseObject(v, keyToParserMap);
            })(optional),
        array: (itemParser)=>createMicroParserBuilder((v)=>{
                if (!Array.isArray(v)) return undefined;
                return parseArray(v, itemParser);
            })(optional)
    };
}
const MicroParsers = {
    optional: createMicroParserBuilders(true),
    required: createMicroParserBuilders(false)
};
function parseRecord(value, keyToParserMap) {
    const map = keyToParserMap(MicroParsers);
    const result = MicroParsers.required.object(map)(value);
    return result.succeeded ? result.value : undefined;
}
function importBladeState(state, superImport, parser, callback) {
    if (superImport && !superImport(state)) return false;
    const result = parseRecord(state, parser);
    return result ? callback(result) : false;
}
function exportBladeState(superExport, thisState) {
    var _a;
    return deepMerge((_a = superExport === null || superExport === void 0 ? void 0 : superExport()) !== null && _a !== void 0 ? _a : {}, thisState);
}
function isValueBladeController(bc) {
    return 'value' in bc;
}
function isBindingValue(v) {
    if (!isObject$1(v) || !('binding' in v)) return false;
    const b = v.binding;
    return isBinding(b);
}
const SVG_NS = 'http://www.w3.org/2000/svg';
function forceReflow(element) {
    element.offsetHeight;
}
function disableTransitionTemporarily(element, callback) {
    const t = element.style.transition;
    element.style.transition = 'none';
    callback();
    element.style.transition = t;
}
function supportsTouch(doc) {
    return doc.ontouchstart !== undefined;
}
function getGlobalObject() {
    return globalThis;
}
function getWindowDocument() {
    const globalObj = forceCast(getGlobalObject());
    return globalObj.document;
}
function getCanvasContext(canvasElement) {
    const win = canvasElement.ownerDocument.defaultView;
    if (!win) return null;
    const isBrowser = 'document' in win;
    return isBrowser ? canvasElement.getContext('2d', {
        willReadFrequently: true
    }) : null;
}
const ICON_ID_TO_INNER_HTML_MAP = {
    check: '<path d="M2 8l4 4l8 -8"/>',
    dropdown: '<path d="M5 7h6l-3 3 z"/>',
    p2dpad: '<path d="M8 4v8"/><path d="M4 8h8"/><circle cx="12" cy="12" r="1.2"/>'
};
function createSvgIconElement(document, iconId) {
    const elem = document.createElementNS(SVG_NS, 'svg');
    elem.innerHTML = ICON_ID_TO_INNER_HTML_MAP[iconId];
    return elem;
}
function insertElementAt(parentElement, element, index) {
    parentElement.insertBefore(element, parentElement.children[index]);
}
function removeElement(element) {
    if (element.parentElement) element.parentElement.removeChild(element);
}
function removeChildElements(element) {
    while(element.children.length > 0)element.removeChild(element.children[0]);
}
function removeChildNodes(element) {
    while(element.childNodes.length > 0)element.removeChild(element.childNodes[0]);
}
function findNextTarget(ev) {
    if (ev.relatedTarget) return forceCast(ev.relatedTarget);
    if ('explicitOriginalTarget' in ev) return ev.explicitOriginalTarget;
    return null;
}
function bindValue(value, applyValue) {
    value.emitter.on('change', (ev)=>{
        applyValue(ev.rawValue);
    });
    applyValue(value.rawValue);
}
function bindValueMap(valueMap, key, applyValue) {
    bindValue(valueMap.value(key), applyValue);
}
const PREFIX = 'tp';
function ClassName(viewName) {
    const fn = (opt_elementName, opt_modifier)=>{
        return [
            PREFIX,
            '-',
            viewName,
            'v',
            opt_elementName ? `_${opt_elementName}` : '',
            opt_modifier ? `-${opt_modifier}` : ''
        ].join('');
    };
    return fn;
}
const cn$r = ClassName('lbl');
function createLabelNode(doc, label) {
    const frag = doc.createDocumentFragment();
    const lineNodes = label.split('\n').map((line)=>{
        return doc.createTextNode(line);
    });
    lineNodes.forEach((lineNode, index)=>{
        if (index > 0) frag.appendChild(doc.createElement('br'));
        frag.appendChild(lineNode);
    });
    return frag;
}
class LabelView {
    constructor(doc, config){
        this.element = doc.createElement('div');
        this.element.classList.add(cn$r());
        config.viewProps.bindClassModifiers(this.element);
        const labelElem = doc.createElement('div');
        labelElem.classList.add(cn$r('l'));
        bindValueMap(config.props, 'label', (value)=>{
            if (isEmpty(value)) this.element.classList.add(cn$r(undefined, 'nol'));
            else {
                this.element.classList.remove(cn$r(undefined, 'nol'));
                removeChildNodes(labelElem);
                labelElem.appendChild(createLabelNode(doc, value));
            }
        });
        this.element.appendChild(labelElem);
        this.labelElement = labelElem;
        const valueElem = doc.createElement('div');
        valueElem.classList.add(cn$r('v'));
        this.element.appendChild(valueElem);
        this.valueElement = valueElem;
    }
}
class LabelController {
    constructor(doc, config){
        this.props = config.props;
        this.valueController = config.valueController;
        this.viewProps = config.valueController.viewProps;
        this.view = new LabelView(doc, {
            props: config.props,
            viewProps: this.viewProps
        });
        this.view.valueElement.appendChild(this.valueController.view.element);
    }
    importProps(state) {
        return importBladeState(state, null, (p)=>({
                label: p.optional.string
            }), (result)=>{
            this.props.set('label', result.label);
            return true;
        });
    }
    exportProps() {
        return exportBladeState(null, {
            label: this.props.get('label')
        });
    }
}
function getAllBladePositions() {
    return [
        'veryfirst',
        'first',
        'last',
        'verylast'
    ];
}
const cn$q = ClassName('');
const POS_TO_CLASS_NAME_MAP = {
    veryfirst: 'vfst',
    first: 'fst',
    last: 'lst',
    verylast: 'vlst'
};
class BladeController {
    constructor(config){
        this.parent_ = null;
        this.blade = config.blade;
        this.view = config.view;
        this.viewProps = config.viewProps;
        const elem = this.view.element;
        this.blade.value('positions').emitter.on('change', ()=>{
            getAllBladePositions().forEach((pos)=>{
                elem.classList.remove(cn$q(undefined, POS_TO_CLASS_NAME_MAP[pos]));
            });
            this.blade.get('positions').forEach((pos)=>{
                elem.classList.add(cn$q(undefined, POS_TO_CLASS_NAME_MAP[pos]));
            });
        });
        this.viewProps.handleDispose(()=>{
            removeElement(elem);
        });
    }
    get parent() {
        return this.parent_;
    }
    set parent(parent) {
        this.parent_ = parent;
        this.viewProps.set('parent', this.parent_ ? this.parent_.viewProps : null);
    }
    importState(state) {
        return importBladeState(state, null, (p)=>({
                disabled: p.required.boolean,
                hidden: p.required.boolean
            }), (result)=>{
            this.viewProps.importState(result);
            return true;
        });
    }
    exportState() {
        return exportBladeState(null, Object.assign({}, this.viewProps.exportState()));
    }
}
class LabeledValueBladeController extends BladeController {
    constructor(doc, config){
        if (config.value !== config.valueController.value) throw TpError.shouldNeverHappen();
        const viewProps = config.valueController.viewProps;
        const lc = new LabelController(doc, {
            blade: config.blade,
            props: config.props,
            valueController: config.valueController
        });
        super(Object.assign(Object.assign({}, config), {
            view: new LabelView(doc, {
                props: config.props,
                viewProps: viewProps
            }),
            viewProps: viewProps
        }));
        this.labelController = lc;
        this.value = config.value;
        this.valueController = config.valueController;
        this.view.valueElement.appendChild(this.valueController.view.element);
    }
    importState(state) {
        return importBladeState(state, (s)=>{
            var _a, _b, _c;
            return super.importState(s) && this.labelController.importProps(s) && ((_c = (_b = (_a = this.valueController).importProps) === null || _b === void 0 ? void 0 : _b.call(_a, state)) !== null && _c !== void 0 ? _c : true);
        }, (p)=>({
                value: p.optional.raw
            }), (result)=>{
            if (result.value) this.value.rawValue = result.value;
            return true;
        });
    }
    exportState() {
        var _a, _b, _c;
        return exportBladeState(()=>super.exportState(), Object.assign(Object.assign({
            value: this.value.rawValue
        }, this.labelController.exportProps()), (_c = (_b = (_a = this.valueController).exportProps) === null || _b === void 0 ? void 0 : _b.call(_a)) !== null && _c !== void 0 ? _c : {}));
    }
}
function excludeValue(state) {
    const result = Object.assign({}, state);
    delete result.value;
    return result;
}
class BindingController extends LabeledValueBladeController {
    constructor(doc, config){
        super(doc, config);
        this.tag = config.tag;
    }
    importState(state) {
        return importBladeState(state, (_s)=>super.importState(excludeValue(state)), (p)=>({
                tag: p.optional.string
            }), (result)=>{
            this.tag = result.tag;
            return true;
        });
    }
    exportState() {
        return exportBladeState(()=>excludeValue(super.exportState()), {
            binding: {
                key: this.value.binding.target.key,
                value: this.value.binding.target.read()
            },
            tag: this.tag
        });
    }
}
function isBindingController(bc) {
    return isValueBladeController(bc) && isBindingValue(bc.value);
}
class InputBindingController extends BindingController {
    importState(state) {
        return importBladeState(state, (s)=>super.importState(s), (p)=>({
                binding: p.required.object({
                    value: p.required.raw
                })
            }), (result)=>{
            this.value.binding.inject(result.binding.value);
            this.value.fetch();
            return true;
        });
    }
}
function isInputBindingController(bc) {
    return isValueBladeController(bc) && isInputBindingValue(bc.value);
}
function fillBuffer(buffer, bufferSize) {
    while(buffer.length < bufferSize)buffer.push(undefined);
}
function initializeBuffer(bufferSize) {
    const buffer = [];
    fillBuffer(buffer, bufferSize);
    return buffer;
}
function createTrimmedBuffer(buffer) {
    const index = buffer.indexOf(undefined);
    return forceCast(index < 0 ? buffer : buffer.slice(0, index));
}
function createPushedBuffer(buffer, newValue) {
    const newBuffer = [
        ...createTrimmedBuffer(buffer),
        newValue
    ];
    if (newBuffer.length > buffer.length) newBuffer.splice(0, newBuffer.length - buffer.length);
    else fillBuffer(newBuffer, buffer.length);
    return newBuffer;
}
class MonitorBindingValue {
    constructor(config){
        this.emitter = new Emitter();
        this.onTick_ = this.onTick_.bind(this);
        this.onValueBeforeChange_ = this.onValueBeforeChange_.bind(this);
        this.onValueChange_ = this.onValueChange_.bind(this);
        this.binding = config.binding;
        this.value_ = createValue(initializeBuffer(config.bufferSize));
        this.value_.emitter.on('beforechange', this.onValueBeforeChange_);
        this.value_.emitter.on('change', this.onValueChange_);
        this.ticker = config.ticker;
        this.ticker.emitter.on('tick', this.onTick_);
        this.fetch();
    }
    get rawValue() {
        return this.value_.rawValue;
    }
    set rawValue(rawValue) {
        this.value_.rawValue = rawValue;
    }
    setRawValue(rawValue, options) {
        this.value_.setRawValue(rawValue, options);
    }
    fetch() {
        this.value_.rawValue = createPushedBuffer(this.value_.rawValue, this.binding.read());
    }
    onTick_() {
        this.fetch();
    }
    onValueBeforeChange_(ev) {
        this.emitter.emit('beforechange', Object.assign(Object.assign({}, ev), {
            sender: this
        }));
    }
    onValueChange_(ev) {
        this.emitter.emit('change', Object.assign(Object.assign({}, ev), {
            sender: this
        }));
    }
}
function isMonitorBindingValue(v) {
    if (!('binding' in v)) return false;
    const b = v['binding'];
    return isBinding(b) && 'read' in b && !('write' in b);
}
class MonitorBindingController extends BindingController {
    exportState() {
        return exportBladeState(()=>super.exportState(), {
            binding: {
                readonly: true
            }
        });
    }
}
function isMonitorBindingController(bc) {
    return isValueBladeController(bc) && isMonitorBindingValue(bc.value);
}
class ButtonApi extends BladeApi {
    get label() {
        return this.controller.labelController.props.get('label');
    }
    set label(label) {
        this.controller.labelController.props.set('label', label);
    }
    get title() {
        var _a;
        return (_a = this.controller.buttonController.props.get('title')) !== null && _a !== void 0 ? _a : '';
    }
    set title(title) {
        this.controller.buttonController.props.set('title', title);
    }
    on(eventName, handler) {
        const bh = handler.bind(this);
        const emitter = this.controller.buttonController.emitter;
        emitter.on(eventName, (ev)=>{
            bh(new TpMouseEvent(this, ev.nativeEvent));
        });
        return this;
    }
    off(eventName, handler) {
        const emitter = this.controller.buttonController.emitter;
        emitter.off(eventName, handler);
        return this;
    }
}
function applyClass(elem, className, active) {
    if (active) elem.classList.add(className);
    else elem.classList.remove(className);
}
function valueToClassName(elem, className) {
    return (value)=>{
        applyClass(elem, className, value);
    };
}
function bindValueToTextContent(value, elem) {
    bindValue(value, (text)=>{
        elem.textContent = text !== null && text !== void 0 ? text : '';
    });
}
const cn$p = ClassName('btn');
class ButtonView {
    constructor(doc, config){
        this.element = doc.createElement('div');
        this.element.classList.add(cn$p());
        config.viewProps.bindClassModifiers(this.element);
        const buttonElem = doc.createElement('button');
        buttonElem.classList.add(cn$p('b'));
        config.viewProps.bindDisabled(buttonElem);
        this.element.appendChild(buttonElem);
        this.buttonElement = buttonElem;
        const titleElem = doc.createElement('div');
        titleElem.classList.add(cn$p('t'));
        bindValueToTextContent(config.props.value('title'), titleElem);
        this.buttonElement.appendChild(titleElem);
    }
}
class ButtonController {
    constructor(doc, config){
        this.emitter = new Emitter();
        this.onClick_ = this.onClick_.bind(this);
        this.props = config.props;
        this.viewProps = config.viewProps;
        this.view = new ButtonView(doc, {
            props: this.props,
            viewProps: this.viewProps
        });
        this.view.buttonElement.addEventListener('click', this.onClick_);
    }
    importProps(state) {
        return importBladeState(state, null, (p)=>({
                title: p.optional.string
            }), (result)=>{
            this.props.set('title', result.title);
            return true;
        });
    }
    exportProps() {
        return exportBladeState(null, {
            title: this.props.get('title')
        });
    }
    onClick_(ev) {
        this.emitter.emit('click', {
            nativeEvent: ev,
            sender: this
        });
    }
}
class ButtonBladeController extends BladeController {
    constructor(doc, config){
        const bc = new ButtonController(doc, {
            props: config.buttonProps,
            viewProps: config.viewProps
        });
        const lc = new LabelController(doc, {
            blade: config.blade,
            props: config.labelProps,
            valueController: bc
        });
        super({
            blade: config.blade,
            view: lc.view,
            viewProps: config.viewProps
        });
        this.buttonController = bc;
        this.labelController = lc;
    }
    importState(state) {
        return importBladeState(state, (s)=>super.importState(s) && this.buttonController.importProps(s) && this.labelController.importProps(s), ()=>({}), ()=>true);
    }
    exportState() {
        return exportBladeState(()=>super.exportState(), Object.assign(Object.assign({}, this.buttonController.exportProps()), this.labelController.exportProps()));
    }
}
class Semver {
    constructor(text){
        const [core, prerelease] = text.split('-');
        const coreComps = core.split('.');
        this.major = parseInt(coreComps[0], 10);
        this.minor = parseInt(coreComps[1], 10);
        this.patch = parseInt(coreComps[2], 10);
        this.prerelease = prerelease !== null && prerelease !== void 0 ? prerelease : null;
    }
    toString() {
        const core = [
            this.major,
            this.minor,
            this.patch
        ].join('.');
        return this.prerelease !== null ? [
            core,
            this.prerelease
        ].join('-') : core;
    }
}
const VERSION$1 = new Semver('2.0.5');
function createPlugin(plugin) {
    return Object.assign({
        core: VERSION$1
    }, plugin);
}
const ButtonBladePlugin = createPlugin({
    id: 'button',
    type: 'blade',
    accept (params) {
        const result = parseRecord(params, (p)=>({
                title: p.required.string,
                view: p.required.constant('button'),
                label: p.optional.string
            }));
        return result ? {
            params: result
        } : null;
    },
    controller (args) {
        return new ButtonBladeController(args.document, {
            blade: args.blade,
            buttonProps: ValueMap.fromObject({
                title: args.params.title
            }),
            labelProps: ValueMap.fromObject({
                label: args.params.label
            }),
            viewProps: args.viewProps
        });
    },
    api (args) {
        if (args.controller instanceof ButtonBladeController) return new ButtonApi(args.controller);
        return null;
    }
});
function addButtonAsBlade(api, params) {
    return api.addBlade(Object.assign(Object.assign({}, params), {
        view: 'button'
    }));
}
function addFolderAsBlade(api, params) {
    return api.addBlade(Object.assign(Object.assign({}, params), {
        view: 'folder'
    }));
}
function addTabAsBlade(api, params) {
    return api.addBlade(Object.assign(Object.assign({}, params), {
        view: 'tab'
    }));
}
function isRefreshable(value) {
    if (!isObject$1(value)) return false;
    return 'refresh' in value && typeof value.refresh === 'function';
}
function createBindingTarget(obj, key) {
    if (!BindingTarget.isBindable(obj)) throw TpError.notBindable();
    return new BindingTarget(obj, key);
}
class RackApi {
    constructor(controller, pool){
        this.onRackValueChange_ = this.onRackValueChange_.bind(this);
        this.controller_ = controller;
        this.emitter_ = new Emitter();
        this.pool_ = pool;
        const rack = this.controller_.rack;
        rack.emitter.on('valuechange', this.onRackValueChange_);
    }
    get children() {
        return this.controller_.rack.children.map((bc)=>this.pool_.createApi(bc));
    }
    addBinding(object, key, opt_params) {
        const params = opt_params !== null && opt_params !== void 0 ? opt_params : {};
        const doc = this.controller_.element.ownerDocument;
        const bc = this.pool_.createBinding(doc, createBindingTarget(object, key), params);
        const api = this.pool_.createBindingApi(bc);
        return this.add(api, params.index);
    }
    addFolder(params) {
        return addFolderAsBlade(this, params);
    }
    addButton(params) {
        return addButtonAsBlade(this, params);
    }
    addTab(params) {
        return addTabAsBlade(this, params);
    }
    add(api, opt_index) {
        const bc = api.controller;
        this.controller_.rack.add(bc, opt_index);
        return api;
    }
    remove(api) {
        this.controller_.rack.remove(api.controller);
    }
    addBlade(params) {
        const doc = this.controller_.element.ownerDocument;
        const bc = this.pool_.createBlade(doc, params);
        const api = this.pool_.createApi(bc);
        return this.add(api, params.index);
    }
    on(eventName, handler) {
        const bh = handler.bind(this);
        this.emitter_.on(eventName, (ev)=>{
            bh(ev);
        }, {
            key: handler
        });
        return this;
    }
    off(eventName, handler) {
        this.emitter_.off(eventName, handler);
        return this;
    }
    refresh() {
        this.children.forEach((c)=>{
            if (isRefreshable(c)) c.refresh();
        });
    }
    onRackValueChange_(ev) {
        const bc = ev.bladeController;
        const api = this.pool_.createApi(bc);
        const binding = isBindingValue(bc.value) ? bc.value.binding : null;
        this.emitter_.emit('change', new TpChangeEvent(api, binding ? binding.target.read() : bc.value.rawValue, ev.options.last));
    }
}
class ContainerBladeApi extends BladeApi {
    constructor(controller, pool){
        super(controller);
        this.rackApi_ = new RackApi(controller.rackController, pool);
    }
    refresh() {
        this.rackApi_.refresh();
    }
}
class ContainerBladeController extends BladeController {
    constructor(config){
        super({
            blade: config.blade,
            view: config.view,
            viewProps: config.rackController.viewProps
        });
        this.rackController = config.rackController;
    }
    importState(state) {
        return importBladeState(state, (s)=>super.importState(s), (p)=>({
                children: p.required.array(p.required.raw)
            }), (result)=>{
            return this.rackController.rack.children.every((c, index)=>{
                return c.importState(result.children[index]);
            });
        });
    }
    exportState() {
        return exportBladeState(()=>super.exportState(), {
            children: this.rackController.rack.children.map((c)=>c.exportState())
        });
    }
}
function isContainerBladeController(bc) {
    return 'rackController' in bc;
}
class NestedOrderedSet {
    constructor(extract){
        this.emitter = new Emitter();
        this.items_ = [];
        this.cache_ = new Set();
        this.onSubListAdd_ = this.onSubListAdd_.bind(this);
        this.onSubListRemove_ = this.onSubListRemove_.bind(this);
        this.extract_ = extract;
    }
    get items() {
        return this.items_;
    }
    allItems() {
        return Array.from(this.cache_);
    }
    find(callback) {
        for (const item of this.allItems()){
            if (callback(item)) return item;
        }
        return null;
    }
    includes(item) {
        return this.cache_.has(item);
    }
    add(item, opt_index) {
        if (this.includes(item)) throw TpError.shouldNeverHappen();
        const index = opt_index !== undefined ? opt_index : this.items_.length;
        this.items_.splice(index, 0, item);
        this.cache_.add(item);
        const subList = this.extract_(item);
        if (subList) {
            subList.emitter.on('add', this.onSubListAdd_);
            subList.emitter.on('remove', this.onSubListRemove_);
            subList.allItems().forEach((i)=>{
                this.cache_.add(i);
            });
        }
        this.emitter.emit('add', {
            index: index,
            item: item,
            root: this,
            target: this
        });
    }
    remove(item) {
        const index = this.items_.indexOf(item);
        if (index < 0) return;
        this.items_.splice(index, 1);
        this.cache_.delete(item);
        const subList = this.extract_(item);
        if (subList) {
            subList.allItems().forEach((i)=>{
                this.cache_.delete(i);
            });
            subList.emitter.off('add', this.onSubListAdd_);
            subList.emitter.off('remove', this.onSubListRemove_);
        }
        this.emitter.emit('remove', {
            index: index,
            item: item,
            root: this,
            target: this
        });
    }
    onSubListAdd_(ev) {
        this.cache_.add(ev.item);
        this.emitter.emit('add', {
            index: ev.index,
            item: ev.item,
            root: this,
            target: ev.target
        });
    }
    onSubListRemove_(ev) {
        this.cache_.delete(ev.item);
        this.emitter.emit('remove', {
            index: ev.index,
            item: ev.item,
            root: this,
            target: ev.target
        });
    }
}
function findValueBladeController(bcs, v) {
    for(let i = 0; i < bcs.length; i++){
        const bc = bcs[i];
        if (isValueBladeController(bc) && bc.value === v) return bc;
    }
    return null;
}
function findSubBladeControllerSet(bc) {
    return isContainerBladeController(bc) ? bc.rackController.rack['bcSet_'] : null;
}
class Rack {
    constructor(config){
        var _a, _b;
        this.emitter = new Emitter();
        this.onBladePositionsChange_ = this.onBladePositionsChange_.bind(this);
        this.onSetAdd_ = this.onSetAdd_.bind(this);
        this.onSetRemove_ = this.onSetRemove_.bind(this);
        this.onChildDispose_ = this.onChildDispose_.bind(this);
        this.onChildPositionsChange_ = this.onChildPositionsChange_.bind(this);
        this.onChildValueChange_ = this.onChildValueChange_.bind(this);
        this.onChildViewPropsChange_ = this.onChildViewPropsChange_.bind(this);
        this.onRackLayout_ = this.onRackLayout_.bind(this);
        this.onRackValueChange_ = this.onRackValueChange_.bind(this);
        this.blade_ = (_a = config.blade) !== null && _a !== void 0 ? _a : null;
        (_b = this.blade_) === null || _b === void 0 || _b.value('positions').emitter.on('change', this.onBladePositionsChange_);
        this.viewProps = config.viewProps;
        this.bcSet_ = new NestedOrderedSet(findSubBladeControllerSet);
        this.bcSet_.emitter.on('add', this.onSetAdd_);
        this.bcSet_.emitter.on('remove', this.onSetRemove_);
    }
    get children() {
        return this.bcSet_.items;
    }
    add(bc, opt_index) {
        var _a;
        (_a = bc.parent) === null || _a === void 0 || _a.remove(bc);
        bc.parent = this;
        this.bcSet_.add(bc, opt_index);
    }
    remove(bc) {
        bc.parent = null;
        this.bcSet_.remove(bc);
    }
    find(finder) {
        return this.bcSet_.allItems().filter(finder);
    }
    onSetAdd_(ev) {
        this.updatePositions_();
        const root = ev.target === ev.root;
        this.emitter.emit('add', {
            bladeController: ev.item,
            index: ev.index,
            root: root,
            sender: this
        });
        if (!root) return;
        const bc = ev.item;
        bc.viewProps.emitter.on('change', this.onChildViewPropsChange_);
        bc.blade.value('positions').emitter.on('change', this.onChildPositionsChange_);
        bc.viewProps.handleDispose(this.onChildDispose_);
        if (isValueBladeController(bc)) bc.value.emitter.on('change', this.onChildValueChange_);
        else if (isContainerBladeController(bc)) {
            const rack = bc.rackController.rack;
            if (rack) {
                const emitter = rack.emitter;
                emitter.on('layout', this.onRackLayout_);
                emitter.on('valuechange', this.onRackValueChange_);
            }
        }
    }
    onSetRemove_(ev) {
        this.updatePositions_();
        const root = ev.target === ev.root;
        this.emitter.emit('remove', {
            bladeController: ev.item,
            root: root,
            sender: this
        });
        if (!root) return;
        const bc = ev.item;
        if (isValueBladeController(bc)) bc.value.emitter.off('change', this.onChildValueChange_);
        else if (isContainerBladeController(bc)) {
            const rack = bc.rackController.rack;
            if (rack) {
                const emitter = rack.emitter;
                emitter.off('layout', this.onRackLayout_);
                emitter.off('valuechange', this.onRackValueChange_);
            }
        }
    }
    updatePositions_() {
        const visibleItems = this.bcSet_.items.filter((bc)=>!bc.viewProps.get('hidden'));
        const firstVisibleItem = visibleItems[0];
        const lastVisibleItem = visibleItems[visibleItems.length - 1];
        this.bcSet_.items.forEach((bc)=>{
            const ps = [];
            if (bc === firstVisibleItem) {
                ps.push('first');
                if (!this.blade_ || this.blade_.get('positions').includes('veryfirst')) ps.push('veryfirst');
            }
            if (bc === lastVisibleItem) {
                ps.push('last');
                if (!this.blade_ || this.blade_.get('positions').includes('verylast')) ps.push('verylast');
            }
            bc.blade.set('positions', ps);
        });
    }
    onChildPositionsChange_() {
        this.updatePositions_();
        this.emitter.emit('layout', {
            sender: this
        });
    }
    onChildViewPropsChange_(_ev) {
        this.updatePositions_();
        this.emitter.emit('layout', {
            sender: this
        });
    }
    onChildDispose_() {
        const disposedUcs = this.bcSet_.items.filter((bc)=>{
            return bc.viewProps.get('disposed');
        });
        disposedUcs.forEach((bc)=>{
            this.bcSet_.remove(bc);
        });
    }
    onChildValueChange_(ev) {
        const bc = findValueBladeController(this.find(isValueBladeController), ev.sender);
        if (!bc) throw TpError.alreadyDisposed();
        this.emitter.emit('valuechange', {
            bladeController: bc,
            options: ev.options,
            sender: this
        });
    }
    onRackLayout_(_) {
        this.updatePositions_();
        this.emitter.emit('layout', {
            sender: this
        });
    }
    onRackValueChange_(ev) {
        this.emitter.emit('valuechange', {
            bladeController: ev.bladeController,
            options: ev.options,
            sender: this
        });
    }
    onBladePositionsChange_() {
        this.updatePositions_();
    }
}
class RackController {
    constructor(config){
        this.onRackAdd_ = this.onRackAdd_.bind(this);
        this.onRackRemove_ = this.onRackRemove_.bind(this);
        this.element = config.element;
        this.viewProps = config.viewProps;
        const rack = new Rack({
            blade: config.root ? undefined : config.blade,
            viewProps: config.viewProps
        });
        rack.emitter.on('add', this.onRackAdd_);
        rack.emitter.on('remove', this.onRackRemove_);
        this.rack = rack;
        this.viewProps.handleDispose(()=>{
            for(let i = this.rack.children.length - 1; i >= 0; i--){
                const bc = this.rack.children[i];
                bc.viewProps.set('disposed', true);
            }
        });
    }
    onRackAdd_(ev) {
        if (!ev.root) return;
        insertElementAt(this.element, ev.bladeController.view.element, ev.index);
    }
    onRackRemove_(ev) {
        if (!ev.root) return;
        removeElement(ev.bladeController.view.element);
    }
}
function createBlade() {
    return new ValueMap({
        positions: createValue([], {
            equals: deepEqualsArray
        })
    });
}
class Foldable extends ValueMap {
    constructor(valueMap){
        super(valueMap);
    }
    static create(expanded) {
        const coreObj = {
            completed: true,
            expanded: expanded,
            expandedHeight: null,
            shouldFixHeight: false,
            temporaryExpanded: null
        };
        const core = ValueMap.createCore(coreObj);
        return new Foldable(core);
    }
    get styleExpanded() {
        var _a;
        return (_a = this.get('temporaryExpanded')) !== null && _a !== void 0 ? _a : this.get('expanded');
    }
    get styleHeight() {
        if (!this.styleExpanded) return '0';
        const exHeight = this.get('expandedHeight');
        if (this.get('shouldFixHeight') && !isEmpty(exHeight)) return `${exHeight}px`;
        return 'auto';
    }
    bindExpandedClass(elem, expandedClassName) {
        const onExpand = ()=>{
            const expanded = this.styleExpanded;
            if (expanded) elem.classList.add(expandedClassName);
            else elem.classList.remove(expandedClassName);
        };
        bindValueMap(this, 'expanded', onExpand);
        bindValueMap(this, 'temporaryExpanded', onExpand);
    }
    cleanUpTransition() {
        this.set('shouldFixHeight', false);
        this.set('expandedHeight', null);
        this.set('completed', true);
    }
}
function computeExpandedFolderHeight(folder, containerElement) {
    let height = 0;
    disableTransitionTemporarily(containerElement, ()=>{
        folder.set('expandedHeight', null);
        folder.set('temporaryExpanded', true);
        forceReflow(containerElement);
        height = containerElement.clientHeight;
        folder.set('temporaryExpanded', null);
        forceReflow(containerElement);
    });
    return height;
}
function applyHeight(foldable, elem) {
    elem.style.height = foldable.styleHeight;
}
function bindFoldable(foldable, elem) {
    foldable.value('expanded').emitter.on('beforechange', ()=>{
        foldable.set('completed', false);
        if (isEmpty(foldable.get('expandedHeight'))) {
            const h = computeExpandedFolderHeight(foldable, elem);
            if (h > 0) foldable.set('expandedHeight', h);
        }
        foldable.set('shouldFixHeight', true);
        forceReflow(elem);
    });
    foldable.emitter.on('change', ()=>{
        applyHeight(foldable, elem);
    });
    applyHeight(foldable, elem);
    elem.addEventListener('transitionend', (ev)=>{
        if (ev.propertyName !== 'height') return;
        foldable.cleanUpTransition();
    });
}
class FolderApi extends ContainerBladeApi {
    constructor(controller, pool){
        super(controller, pool);
        this.emitter_ = new Emitter();
        this.controller.foldable.value('expanded').emitter.on('change', (ev)=>{
            this.emitter_.emit('fold', new TpFoldEvent(this, ev.sender.rawValue));
        });
        this.rackApi_.on('change', (ev)=>{
            this.emitter_.emit('change', ev);
        });
    }
    get expanded() {
        return this.controller.foldable.get('expanded');
    }
    set expanded(expanded) {
        this.controller.foldable.set('expanded', expanded);
    }
    get title() {
        return this.controller.props.get('title');
    }
    set title(title) {
        this.controller.props.set('title', title);
    }
    get children() {
        return this.rackApi_.children;
    }
    addBinding(object, key, opt_params) {
        return this.rackApi_.addBinding(object, key, opt_params);
    }
    addFolder(params) {
        return this.rackApi_.addFolder(params);
    }
    addButton(params) {
        return this.rackApi_.addButton(params);
    }
    addTab(params) {
        return this.rackApi_.addTab(params);
    }
    add(api, opt_index) {
        return this.rackApi_.add(api, opt_index);
    }
    remove(api) {
        this.rackApi_.remove(api);
    }
    addBlade(params) {
        return this.rackApi_.addBlade(params);
    }
    on(eventName, handler) {
        const bh = handler.bind(this);
        this.emitter_.on(eventName, (ev)=>{
            bh(ev);
        }, {
            key: handler
        });
        return this;
    }
    off(eventName, handler) {
        this.emitter_.off(eventName, handler);
        return this;
    }
}
const bladeContainerClassName = ClassName('cnt');
class FolderView {
    constructor(doc, config){
        var _a;
        this.className_ = ClassName((_a = config.viewName) !== null && _a !== void 0 ? _a : 'fld');
        this.element = doc.createElement('div');
        this.element.classList.add(this.className_(), bladeContainerClassName());
        config.viewProps.bindClassModifiers(this.element);
        this.foldable_ = config.foldable;
        this.foldable_.bindExpandedClass(this.element, this.className_(undefined, 'expanded'));
        bindValueMap(this.foldable_, 'completed', valueToClassName(this.element, this.className_(undefined, 'cpl')));
        const buttonElem = doc.createElement('button');
        buttonElem.classList.add(this.className_('b'));
        bindValueMap(config.props, 'title', (title)=>{
            if (isEmpty(title)) this.element.classList.add(this.className_(undefined, 'not'));
            else this.element.classList.remove(this.className_(undefined, 'not'));
        });
        config.viewProps.bindDisabled(buttonElem);
        this.element.appendChild(buttonElem);
        this.buttonElement = buttonElem;
        const indentElem = doc.createElement('div');
        indentElem.classList.add(this.className_('i'));
        this.element.appendChild(indentElem);
        const titleElem = doc.createElement('div');
        titleElem.classList.add(this.className_('t'));
        bindValueToTextContent(config.props.value('title'), titleElem);
        this.buttonElement.appendChild(titleElem);
        this.titleElement = titleElem;
        const markElem = doc.createElement('div');
        markElem.classList.add(this.className_('m'));
        this.buttonElement.appendChild(markElem);
        const containerElem = doc.createElement('div');
        containerElem.classList.add(this.className_('c'));
        this.element.appendChild(containerElem);
        this.containerElement = containerElem;
    }
}
class FolderController extends ContainerBladeController {
    constructor(doc, config){
        var _a;
        const foldable = Foldable.create((_a = config.expanded) !== null && _a !== void 0 ? _a : true);
        const view = new FolderView(doc, {
            foldable: foldable,
            props: config.props,
            viewName: config.root ? 'rot' : undefined,
            viewProps: config.viewProps
        });
        super(Object.assign(Object.assign({}, config), {
            rackController: new RackController({
                blade: config.blade,
                element: view.containerElement,
                root: config.root,
                viewProps: config.viewProps
            }),
            view: view
        }));
        this.onTitleClick_ = this.onTitleClick_.bind(this);
        this.props = config.props;
        this.foldable = foldable;
        bindFoldable(this.foldable, this.view.containerElement);
        this.rackController.rack.emitter.on('add', ()=>{
            this.foldable.cleanUpTransition();
        });
        this.rackController.rack.emitter.on('remove', ()=>{
            this.foldable.cleanUpTransition();
        });
        this.view.buttonElement.addEventListener('click', this.onTitleClick_);
    }
    get document() {
        return this.view.element.ownerDocument;
    }
    importState(state) {
        return importBladeState(state, (s)=>super.importState(s), (p)=>({
                expanded: p.required.boolean,
                title: p.optional.string
            }), (result)=>{
            this.foldable.set('expanded', result.expanded);
            this.props.set('title', result.title);
            return true;
        });
    }
    exportState() {
        return exportBladeState(()=>super.exportState(), {
            expanded: this.foldable.get('expanded'),
            title: this.props.get('title')
        });
    }
    onTitleClick_() {
        this.foldable.set('expanded', !this.foldable.get('expanded'));
    }
}
const FolderBladePlugin = createPlugin({
    id: 'folder',
    type: 'blade',
    accept (params) {
        const result = parseRecord(params, (p)=>({
                title: p.required.string,
                view: p.required.constant('folder'),
                expanded: p.optional.boolean
            }));
        return result ? {
            params: result
        } : null;
    },
    controller (args) {
        return new FolderController(args.document, {
            blade: args.blade,
            expanded: args.params.expanded,
            props: ValueMap.fromObject({
                title: args.params.title
            }),
            viewProps: args.viewProps
        });
    },
    api (args) {
        if (!(args.controller instanceof FolderController)) return null;
        return new FolderApi(args.controller, args.pool);
    }
});
const cn$o = ClassName('');
function valueToModifier(elem, modifier) {
    return valueToClassName(elem, cn$o(undefined, modifier));
}
class ViewProps extends ValueMap {
    constructor(valueMap){
        var _a;
        super(valueMap);
        this.onDisabledChange_ = this.onDisabledChange_.bind(this);
        this.onParentChange_ = this.onParentChange_.bind(this);
        this.onParentGlobalDisabledChange_ = this.onParentGlobalDisabledChange_.bind(this);
        [this.globalDisabled_, this.setGlobalDisabled_] = createReadonlyValue(createValue(this.getGlobalDisabled_()));
        this.value('disabled').emitter.on('change', this.onDisabledChange_);
        this.value('parent').emitter.on('change', this.onParentChange_);
        (_a = this.get('parent')) === null || _a === void 0 || _a.globalDisabled.emitter.on('change', this.onParentGlobalDisabledChange_);
    }
    static create(opt_initialValue) {
        var _a, _b, _c;
        const initialValue = opt_initialValue !== null && opt_initialValue !== void 0 ? opt_initialValue : {};
        return new ViewProps(ValueMap.createCore({
            disabled: (_a = initialValue.disabled) !== null && _a !== void 0 ? _a : false,
            disposed: false,
            hidden: (_b = initialValue.hidden) !== null && _b !== void 0 ? _b : false,
            parent: (_c = initialValue.parent) !== null && _c !== void 0 ? _c : null
        }));
    }
    get globalDisabled() {
        return this.globalDisabled_;
    }
    bindClassModifiers(elem) {
        bindValue(this.globalDisabled_, valueToModifier(elem, 'disabled'));
        bindValueMap(this, 'hidden', valueToModifier(elem, 'hidden'));
    }
    bindDisabled(target) {
        bindValue(this.globalDisabled_, (disabled)=>{
            target.disabled = disabled;
        });
    }
    bindTabIndex(elem) {
        bindValue(this.globalDisabled_, (disabled)=>{
            elem.tabIndex = disabled ? -1 : 0;
        });
    }
    handleDispose(callback) {
        this.value('disposed').emitter.on('change', (disposed)=>{
            if (disposed) callback();
        });
    }
    importState(state) {
        this.set('disabled', state.disabled);
        this.set('hidden', state.hidden);
    }
    exportState() {
        return {
            disabled: this.get('disabled'),
            hidden: this.get('hidden')
        };
    }
    getGlobalDisabled_() {
        const parent = this.get('parent');
        const parentDisabled = parent ? parent.globalDisabled.rawValue : false;
        return parentDisabled || this.get('disabled');
    }
    updateGlobalDisabled_() {
        this.setGlobalDisabled_(this.getGlobalDisabled_());
    }
    onDisabledChange_() {
        this.updateGlobalDisabled_();
    }
    onParentGlobalDisabledChange_() {
        this.updateGlobalDisabled_();
    }
    onParentChange_(ev) {
        var _a;
        const prevParent = ev.previousRawValue;
        prevParent === null || prevParent === void 0 || prevParent.globalDisabled.emitter.off('change', this.onParentGlobalDisabledChange_);
        (_a = this.get('parent')) === null || _a === void 0 || _a.globalDisabled.emitter.on('change', this.onParentGlobalDisabledChange_);
        this.updateGlobalDisabled_();
    }
}
const cn$n = ClassName('tbp');
class TabPageView {
    constructor(doc, config){
        this.element = doc.createElement('div');
        this.element.classList.add(cn$n());
        config.viewProps.bindClassModifiers(this.element);
        const containerElem = doc.createElement('div');
        containerElem.classList.add(cn$n('c'));
        this.element.appendChild(containerElem);
        this.containerElement = containerElem;
    }
}
const cn$m = ClassName('tbi');
class TabItemView {
    constructor(doc, config){
        this.element = doc.createElement('div');
        this.element.classList.add(cn$m());
        config.viewProps.bindClassModifiers(this.element);
        bindValueMap(config.props, 'selected', (selected)=>{
            if (selected) this.element.classList.add(cn$m(undefined, 'sel'));
            else this.element.classList.remove(cn$m(undefined, 'sel'));
        });
        const buttonElem = doc.createElement('button');
        buttonElem.classList.add(cn$m('b'));
        config.viewProps.bindDisabled(buttonElem);
        this.element.appendChild(buttonElem);
        this.buttonElement = buttonElem;
        const titleElem = doc.createElement('div');
        titleElem.classList.add(cn$m('t'));
        bindValueToTextContent(config.props.value('title'), titleElem);
        this.buttonElement.appendChild(titleElem);
        this.titleElement = titleElem;
    }
}
class TabItemController {
    constructor(doc, config){
        this.emitter = new Emitter();
        this.onClick_ = this.onClick_.bind(this);
        this.props = config.props;
        this.viewProps = config.viewProps;
        this.view = new TabItemView(doc, {
            props: config.props,
            viewProps: config.viewProps
        });
        this.view.buttonElement.addEventListener('click', this.onClick_);
    }
    onClick_() {
        this.emitter.emit('click', {
            sender: this
        });
    }
}
class TabPageController extends ContainerBladeController {
    constructor(doc, config){
        const view = new TabPageView(doc, {
            viewProps: config.viewProps
        });
        super(Object.assign(Object.assign({}, config), {
            rackController: new RackController({
                blade: config.blade,
                element: view.containerElement,
                viewProps: config.viewProps
            }),
            view: view
        }));
        this.onItemClick_ = this.onItemClick_.bind(this);
        this.ic_ = new TabItemController(doc, {
            props: config.itemProps,
            viewProps: ViewProps.create()
        });
        this.ic_.emitter.on('click', this.onItemClick_);
        this.props = config.props;
        bindValueMap(this.props, 'selected', (selected)=>{
            this.itemController.props.set('selected', selected);
            this.viewProps.set('hidden', !selected);
        });
    }
    get itemController() {
        return this.ic_;
    }
    importState(state) {
        return importBladeState(state, (s)=>super.importState(s), (p)=>({
                selected: p.required.boolean,
                title: p.required.string
            }), (result)=>{
            this.ic_.props.set('selected', result.selected);
            this.ic_.props.set('title', result.title);
            return true;
        });
    }
    exportState() {
        return exportBladeState(()=>super.exportState(), {
            selected: this.ic_.props.get('selected'),
            title: this.ic_.props.get('title')
        });
    }
    onItemClick_() {
        this.props.set('selected', true);
    }
}
class TabApi extends ContainerBladeApi {
    constructor(controller, pool){
        super(controller, pool);
        this.emitter_ = new Emitter();
        this.onSelect_ = this.onSelect_.bind(this);
        this.pool_ = pool;
        this.rackApi_.on('change', (ev)=>{
            this.emitter_.emit('change', ev);
        });
        this.controller.tab.selectedIndex.emitter.on('change', this.onSelect_);
    }
    get pages() {
        return this.rackApi_.children;
    }
    addPage(params) {
        const doc = this.controller.view.element.ownerDocument;
        const pc = new TabPageController(doc, {
            blade: createBlade(),
            itemProps: ValueMap.fromObject({
                selected: false,
                title: params.title
            }),
            props: ValueMap.fromObject({
                selected: false
            }),
            viewProps: ViewProps.create()
        });
        const papi = this.pool_.createApi(pc);
        return this.rackApi_.add(papi, params.index);
    }
    removePage(index) {
        this.rackApi_.remove(this.rackApi_.children[index]);
    }
    on(eventName, handler) {
        const bh = handler.bind(this);
        this.emitter_.on(eventName, (ev)=>{
            bh(ev);
        }, {
            key: handler
        });
        return this;
    }
    off(eventName, handler) {
        this.emitter_.off(eventName, handler);
        return this;
    }
    onSelect_(ev) {
        this.emitter_.emit('select', new TpTabSelectEvent(this, ev.rawValue));
    }
}
class TabPageApi extends ContainerBladeApi {
    get title() {
        var _a;
        return (_a = this.controller.itemController.props.get('title')) !== null && _a !== void 0 ? _a : '';
    }
    set title(title) {
        this.controller.itemController.props.set('title', title);
    }
    get selected() {
        return this.controller.props.get('selected');
    }
    set selected(selected) {
        this.controller.props.set('selected', selected);
    }
    get children() {
        return this.rackApi_.children;
    }
    addButton(params) {
        return this.rackApi_.addButton(params);
    }
    addFolder(params) {
        return this.rackApi_.addFolder(params);
    }
    addTab(params) {
        return this.rackApi_.addTab(params);
    }
    add(api, opt_index) {
        this.rackApi_.add(api, opt_index);
    }
    remove(api) {
        this.rackApi_.remove(api);
    }
    addBinding(object, key, opt_params) {
        return this.rackApi_.addBinding(object, key, opt_params);
    }
    addBlade(params) {
        return this.rackApi_.addBlade(params);
    }
}
const INDEX_NOT_SELECTED = -1;
class Tab {
    constructor(){
        this.onItemSelectedChange_ = this.onItemSelectedChange_.bind(this);
        this.empty = createValue(true);
        this.selectedIndex = createValue(INDEX_NOT_SELECTED);
        this.items_ = [];
    }
    add(item, opt_index) {
        const index = opt_index !== null && opt_index !== void 0 ? opt_index : this.items_.length;
        this.items_.splice(index, 0, item);
        item.emitter.on('change', this.onItemSelectedChange_);
        this.keepSelection_();
    }
    remove(item) {
        const index = this.items_.indexOf(item);
        if (index < 0) return;
        this.items_.splice(index, 1);
        item.emitter.off('change', this.onItemSelectedChange_);
        this.keepSelection_();
    }
    keepSelection_() {
        if (this.items_.length === 0) {
            this.selectedIndex.rawValue = INDEX_NOT_SELECTED;
            this.empty.rawValue = true;
            return;
        }
        const firstSelIndex = this.items_.findIndex((s)=>s.rawValue);
        if (firstSelIndex < 0) {
            this.items_.forEach((s, i)=>{
                s.rawValue = i === 0;
            });
            this.selectedIndex.rawValue = 0;
        } else {
            this.items_.forEach((s, i)=>{
                s.rawValue = i === firstSelIndex;
            });
            this.selectedIndex.rawValue = firstSelIndex;
        }
        this.empty.rawValue = false;
    }
    onItemSelectedChange_(ev) {
        if (ev.rawValue) {
            const index = this.items_.findIndex((s)=>s === ev.sender);
            this.items_.forEach((s, i)=>{
                s.rawValue = i === index;
            });
            this.selectedIndex.rawValue = index;
        } else this.keepSelection_();
    }
}
const cn$l = ClassName('tab');
class TabView {
    constructor(doc, config){
        this.element = doc.createElement('div');
        this.element.classList.add(cn$l(), bladeContainerClassName());
        config.viewProps.bindClassModifiers(this.element);
        bindValue(config.empty, valueToClassName(this.element, cn$l(undefined, 'nop')));
        const titleElem = doc.createElement('div');
        titleElem.classList.add(cn$l('t'));
        this.element.appendChild(titleElem);
        this.itemsElement = titleElem;
        const indentElem = doc.createElement('div');
        indentElem.classList.add(cn$l('i'));
        this.element.appendChild(indentElem);
        const contentsElem = doc.createElement('div');
        contentsElem.classList.add(cn$l('c'));
        this.element.appendChild(contentsElem);
        this.contentsElement = contentsElem;
    }
}
class TabController extends ContainerBladeController {
    constructor(doc, config){
        const tab = new Tab();
        const view = new TabView(doc, {
            empty: tab.empty,
            viewProps: config.viewProps
        });
        super({
            blade: config.blade,
            rackController: new RackController({
                blade: config.blade,
                element: view.contentsElement,
                viewProps: config.viewProps
            }),
            view: view
        });
        this.onRackAdd_ = this.onRackAdd_.bind(this);
        this.onRackRemove_ = this.onRackRemove_.bind(this);
        const rack = this.rackController.rack;
        rack.emitter.on('add', this.onRackAdd_);
        rack.emitter.on('remove', this.onRackRemove_);
        this.tab = tab;
    }
    add(pc, opt_index) {
        this.rackController.rack.add(pc, opt_index);
    }
    remove(index) {
        this.rackController.rack.remove(this.rackController.rack.children[index]);
    }
    onRackAdd_(ev) {
        if (!ev.root) return;
        const pc = ev.bladeController;
        insertElementAt(this.view.itemsElement, pc.itemController.view.element, ev.index);
        pc.itemController.viewProps.set('parent', this.viewProps);
        this.tab.add(pc.props.value('selected'));
    }
    onRackRemove_(ev) {
        if (!ev.root) return;
        const pc = ev.bladeController;
        removeElement(pc.itemController.view.element);
        pc.itemController.viewProps.set('parent', null);
        this.tab.remove(pc.props.value('selected'));
    }
}
const TabBladePlugin = createPlugin({
    id: 'tab',
    type: 'blade',
    accept (params) {
        const result = parseRecord(params, (p)=>({
                pages: p.required.array(p.required.object({
                    title: p.required.string
                })),
                view: p.required.constant('tab')
            }));
        if (!result || result.pages.length === 0) return null;
        return {
            params: result
        };
    },
    controller (args) {
        const c = new TabController(args.document, {
            blade: args.blade,
            viewProps: args.viewProps
        });
        args.params.pages.forEach((p)=>{
            const pc = new TabPageController(args.document, {
                blade: createBlade(),
                itemProps: ValueMap.fromObject({
                    selected: false,
                    title: p.title
                }),
                props: ValueMap.fromObject({
                    selected: false
                }),
                viewProps: ViewProps.create()
            });
            c.add(pc);
        });
        return c;
    },
    api (args) {
        if (args.controller instanceof TabController) return new TabApi(args.controller, args.pool);
        if (args.controller instanceof TabPageController) return new TabPageApi(args.controller, args.pool);
        return null;
    }
});
function createBladeController(plugin, args) {
    const ac = plugin.accept(args.params);
    if (!ac) return null;
    const params = parseRecord(args.params, (p)=>({
            disabled: p.optional.boolean,
            hidden: p.optional.boolean
        }));
    return plugin.controller({
        blade: createBlade(),
        document: args.document,
        params: forceCast(Object.assign(Object.assign({}, ac.params), {
            disabled: params === null || params === void 0 ? void 0 : params.disabled,
            hidden: params === null || params === void 0 ? void 0 : params.hidden
        })),
        viewProps: ViewProps.create({
            disabled: params === null || params === void 0 ? void 0 : params.disabled,
            hidden: params === null || params === void 0 ? void 0 : params.hidden
        })
    });
}
class ListInputBindingApi extends BindingApi {
    get options() {
        return this.controller.valueController.props.get('options');
    }
    set options(options) {
        this.controller.valueController.props.set('options', options);
    }
}
class ManualTicker {
    constructor(){
        this.disabled = false;
        this.emitter = new Emitter();
    }
    dispose() {}
    tick() {
        if (this.disabled) return;
        this.emitter.emit('tick', {
            sender: this
        });
    }
}
class IntervalTicker {
    constructor(doc, interval){
        this.disabled_ = false;
        this.timerId_ = null;
        this.onTick_ = this.onTick_.bind(this);
        this.doc_ = doc;
        this.emitter = new Emitter();
        this.interval_ = interval;
        this.setTimer_();
    }
    get disabled() {
        return this.disabled_;
    }
    set disabled(inactive) {
        this.disabled_ = inactive;
        if (this.disabled_) this.clearTimer_();
        else this.setTimer_();
    }
    dispose() {
        this.clearTimer_();
    }
    clearTimer_() {
        if (this.timerId_ === null) return;
        const win = this.doc_.defaultView;
        if (win) win.clearInterval(this.timerId_);
        this.timerId_ = null;
    }
    setTimer_() {
        this.clearTimer_();
        if (this.interval_ <= 0) return;
        const win = this.doc_.defaultView;
        if (win) this.timerId_ = win.setInterval(this.onTick_, this.interval_);
    }
    onTick_() {
        if (this.disabled_) return;
        this.emitter.emit('tick', {
            sender: this
        });
    }
}
class CompositeConstraint {
    constructor(constraints){
        this.constraints = constraints;
    }
    constrain(value) {
        return this.constraints.reduce((result, c)=>{
            return c.constrain(result);
        }, value);
    }
}
function findConstraint(c, constraintClass) {
    if (c instanceof constraintClass) return c;
    if (c instanceof CompositeConstraint) {
        const result = c.constraints.reduce((tmpResult, sc)=>{
            if (tmpResult) return tmpResult;
            return sc instanceof constraintClass ? sc : null;
        }, null);
        if (result) return result;
    }
    return null;
}
class ListConstraint {
    constructor(options){
        this.values = ValueMap.fromObject({
            options: options
        });
    }
    constrain(value) {
        const opts = this.values.get('options');
        if (opts.length === 0) return value;
        const matched = opts.filter((item)=>{
            return item.value === value;
        }).length > 0;
        return matched ? value : opts[0].value;
    }
}
function parseListOptions(value) {
    var _a;
    const p = MicroParsers;
    if (Array.isArray(value)) return (_a = parseRecord({
        items: value
    }, (p)=>({
            items: p.required.array(p.required.object({
                text: p.required.string,
                value: p.required.raw
            }))
        }))) === null || _a === void 0 ? void 0 : _a.items;
    if (typeof value === 'object') return p.required.raw(value).value;
    return undefined;
}
function normalizeListOptions(options) {
    if (Array.isArray(options)) return options;
    const items = [];
    Object.keys(options).forEach((text)=>{
        items.push({
            text: text,
            value: options[text]
        });
    });
    return items;
}
function createListConstraint(options) {
    return !isEmpty(options) ? new ListConstraint(normalizeListOptions(forceCast(options))) : null;
}
const cn$k = ClassName('lst');
class ListView {
    constructor(doc, config){
        this.onValueChange_ = this.onValueChange_.bind(this);
        this.props_ = config.props;
        this.element = doc.createElement('div');
        this.element.classList.add(cn$k());
        config.viewProps.bindClassModifiers(this.element);
        const selectElem = doc.createElement('select');
        selectElem.classList.add(cn$k('s'));
        config.viewProps.bindDisabled(selectElem);
        this.element.appendChild(selectElem);
        this.selectElement = selectElem;
        const markElem = doc.createElement('div');
        markElem.classList.add(cn$k('m'));
        markElem.appendChild(createSvgIconElement(doc, 'dropdown'));
        this.element.appendChild(markElem);
        config.value.emitter.on('change', this.onValueChange_);
        this.value_ = config.value;
        bindValueMap(this.props_, 'options', (opts)=>{
            removeChildElements(this.selectElement);
            opts.forEach((item)=>{
                const optionElem = doc.createElement('option');
                optionElem.textContent = item.text;
                this.selectElement.appendChild(optionElem);
            });
            this.update_();
        });
    }
    update_() {
        const values = this.props_.get('options').map((o)=>o.value);
        this.selectElement.selectedIndex = values.indexOf(this.value_.rawValue);
    }
    onValueChange_() {
        this.update_();
    }
}
class ListController {
    constructor(doc, config){
        this.onSelectChange_ = this.onSelectChange_.bind(this);
        this.props = config.props;
        this.value = config.value;
        this.viewProps = config.viewProps;
        this.view = new ListView(doc, {
            props: this.props,
            value: this.value,
            viewProps: this.viewProps
        });
        this.view.selectElement.addEventListener('change', this.onSelectChange_);
    }
    onSelectChange_(e) {
        const selectElem = forceCast(e.currentTarget);
        this.value.rawValue = this.props.get('options')[selectElem.selectedIndex].value;
    }
    importProps(state) {
        return importBladeState(state, null, (p)=>({
                options: p.required.custom(parseListOptions)
            }), (result)=>{
            this.props.set('options', normalizeListOptions(result.options));
            return true;
        });
    }
    exportProps() {
        return exportBladeState(null, {
            options: this.props.get('options')
        });
    }
}
const cn$j = ClassName('pop');
class PopupView {
    constructor(doc, config){
        this.element = doc.createElement('div');
        this.element.classList.add(cn$j());
        config.viewProps.bindClassModifiers(this.element);
        bindValue(config.shows, valueToClassName(this.element, cn$j(undefined, 'v')));
    }
}
class PopupController {
    constructor(doc, config){
        this.shows = createValue(false);
        this.viewProps = config.viewProps;
        this.view = new PopupView(doc, {
            shows: this.shows,
            viewProps: this.viewProps
        });
    }
}
const cn$i = ClassName('txt');
class TextView {
    constructor(doc, config){
        this.onChange_ = this.onChange_.bind(this);
        this.element = doc.createElement('div');
        this.element.classList.add(cn$i());
        config.viewProps.bindClassModifiers(this.element);
        this.props_ = config.props;
        this.props_.emitter.on('change', this.onChange_);
        const inputElem = doc.createElement('input');
        inputElem.classList.add(cn$i('i'));
        inputElem.type = 'text';
        config.viewProps.bindDisabled(inputElem);
        this.element.appendChild(inputElem);
        this.inputElement = inputElem;
        config.value.emitter.on('change', this.onChange_);
        this.value_ = config.value;
        this.refresh();
    }
    refresh() {
        const formatter = this.props_.get('formatter');
        this.inputElement.value = formatter(this.value_.rawValue);
    }
    onChange_() {
        this.refresh();
    }
}
class TextController {
    constructor(doc, config){
        this.onInputChange_ = this.onInputChange_.bind(this);
        this.parser_ = config.parser;
        this.props = config.props;
        this.value = config.value;
        this.viewProps = config.viewProps;
        this.view = new TextView(doc, {
            props: config.props,
            value: this.value,
            viewProps: this.viewProps
        });
        this.view.inputElement.addEventListener('change', this.onInputChange_);
    }
    onInputChange_(e) {
        const inputElem = forceCast(e.currentTarget);
        const value = inputElem.value;
        const parsedValue = this.parser_(value);
        if (!isEmpty(parsedValue)) this.value.rawValue = parsedValue;
        this.view.refresh();
    }
}
function boolToString(value) {
    return String(value);
}
function boolFromUnknown(value) {
    if (value === 'false') return false;
    return !!value;
}
function BooleanFormatter(value) {
    return boolToString(value);
}
function composeParsers(parsers) {
    return (text)=>{
        return parsers.reduce((result, parser)=>{
            if (result !== null) return result;
            return parser(text);
        }, null);
    };
}
const innerFormatter = createNumberFormatter(0);
function formatPercentage(value) {
    return innerFormatter(value) + '%';
}
function stringFromUnknown(value) {
    return String(value);
}
function formatString(value) {
    return value;
}
function connectValues({ primary, secondary, forward, backward }) {
    let changing = false;
    function preventFeedback(callback) {
        if (changing) return;
        changing = true;
        callback();
        changing = false;
    }
    primary.emitter.on('change', (ev)=>{
        preventFeedback(()=>{
            secondary.setRawValue(forward(primary.rawValue, secondary.rawValue), ev.options);
        });
    });
    secondary.emitter.on('change', (ev)=>{
        preventFeedback(()=>{
            primary.setRawValue(backward(primary.rawValue, secondary.rawValue), ev.options);
        });
        preventFeedback(()=>{
            secondary.setRawValue(forward(primary.rawValue, secondary.rawValue), ev.options);
        });
    });
    preventFeedback(()=>{
        secondary.setRawValue(forward(primary.rawValue, secondary.rawValue), {
            forceEmit: false,
            last: true
        });
    });
}
function getStepForKey(keyScale, keys) {
    const step = keyScale * (keys.altKey ? 0.1 : 1) * (keys.shiftKey ? 10 : 1);
    if (keys.upKey) return +step;
    else if (keys.downKey) return -step;
    return 0;
}
function getVerticalStepKeys(ev) {
    return {
        altKey: ev.altKey,
        downKey: ev.key === 'ArrowDown',
        shiftKey: ev.shiftKey,
        upKey: ev.key === 'ArrowUp'
    };
}
function getHorizontalStepKeys(ev) {
    return {
        altKey: ev.altKey,
        downKey: ev.key === 'ArrowLeft',
        shiftKey: ev.shiftKey,
        upKey: ev.key === 'ArrowRight'
    };
}
function isVerticalArrowKey(key) {
    return key === 'ArrowUp' || key === 'ArrowDown';
}
function isArrowKey(key) {
    return isVerticalArrowKey(key) || key === 'ArrowLeft' || key === 'ArrowRight';
}
function computeOffset$1(ev, elem) {
    var _a, _b;
    const win = elem.ownerDocument.defaultView;
    const rect = elem.getBoundingClientRect();
    return {
        x: ev.pageX - (((_a = win && win.scrollX) !== null && _a !== void 0 ? _a : 0) + rect.left),
        y: ev.pageY - (((_b = win && win.scrollY) !== null && _b !== void 0 ? _b : 0) + rect.top)
    };
}
class PointerHandler {
    constructor(element){
        this.lastTouch_ = null;
        this.onDocumentMouseMove_ = this.onDocumentMouseMove_.bind(this);
        this.onDocumentMouseUp_ = this.onDocumentMouseUp_.bind(this);
        this.onMouseDown_ = this.onMouseDown_.bind(this);
        this.onTouchEnd_ = this.onTouchEnd_.bind(this);
        this.onTouchMove_ = this.onTouchMove_.bind(this);
        this.onTouchStart_ = this.onTouchStart_.bind(this);
        this.elem_ = element;
        this.emitter = new Emitter();
        element.addEventListener('touchstart', this.onTouchStart_, {
            passive: false
        });
        element.addEventListener('touchmove', this.onTouchMove_, {
            passive: true
        });
        element.addEventListener('touchend', this.onTouchEnd_);
        element.addEventListener('mousedown', this.onMouseDown_);
    }
    computePosition_(offset) {
        const rect = this.elem_.getBoundingClientRect();
        return {
            bounds: {
                width: rect.width,
                height: rect.height
            },
            point: offset ? {
                x: offset.x,
                y: offset.y
            } : null
        };
    }
    onMouseDown_(ev) {
        var _a;
        ev.preventDefault();
        (_a = ev.currentTarget) === null || _a === void 0 || _a.focus();
        const doc = this.elem_.ownerDocument;
        doc.addEventListener('mousemove', this.onDocumentMouseMove_);
        doc.addEventListener('mouseup', this.onDocumentMouseUp_);
        this.emitter.emit('down', {
            altKey: ev.altKey,
            data: this.computePosition_(computeOffset$1(ev, this.elem_)),
            sender: this,
            shiftKey: ev.shiftKey
        });
    }
    onDocumentMouseMove_(ev) {
        this.emitter.emit('move', {
            altKey: ev.altKey,
            data: this.computePosition_(computeOffset$1(ev, this.elem_)),
            sender: this,
            shiftKey: ev.shiftKey
        });
    }
    onDocumentMouseUp_(ev) {
        const doc = this.elem_.ownerDocument;
        doc.removeEventListener('mousemove', this.onDocumentMouseMove_);
        doc.removeEventListener('mouseup', this.onDocumentMouseUp_);
        this.emitter.emit('up', {
            altKey: ev.altKey,
            data: this.computePosition_(computeOffset$1(ev, this.elem_)),
            sender: this,
            shiftKey: ev.shiftKey
        });
    }
    onTouchStart_(ev) {
        ev.preventDefault();
        const touch = ev.targetTouches.item(0);
        const rect = this.elem_.getBoundingClientRect();
        this.emitter.emit('down', {
            altKey: ev.altKey,
            data: this.computePosition_(touch ? {
                x: touch.clientX - rect.left,
                y: touch.clientY - rect.top
            } : undefined),
            sender: this,
            shiftKey: ev.shiftKey
        });
        this.lastTouch_ = touch;
    }
    onTouchMove_(ev) {
        const touch = ev.targetTouches.item(0);
        const rect = this.elem_.getBoundingClientRect();
        this.emitter.emit('move', {
            altKey: ev.altKey,
            data: this.computePosition_(touch ? {
                x: touch.clientX - rect.left,
                y: touch.clientY - rect.top
            } : undefined),
            sender: this,
            shiftKey: ev.shiftKey
        });
        this.lastTouch_ = touch;
    }
    onTouchEnd_(ev) {
        var _a;
        const touch = (_a = ev.targetTouches.item(0)) !== null && _a !== void 0 ? _a : this.lastTouch_;
        const rect = this.elem_.getBoundingClientRect();
        this.emitter.emit('up', {
            altKey: ev.altKey,
            data: this.computePosition_(touch ? {
                x: touch.clientX - rect.left,
                y: touch.clientY - rect.top
            } : undefined),
            sender: this,
            shiftKey: ev.shiftKey
        });
    }
}
const cn$h = ClassName('txt');
class NumberTextView {
    constructor(doc, config){
        this.onChange_ = this.onChange_.bind(this);
        this.props_ = config.props;
        this.props_.emitter.on('change', this.onChange_);
        this.element = doc.createElement('div');
        this.element.classList.add(cn$h(), cn$h(undefined, 'num'));
        if (config.arrayPosition) this.element.classList.add(cn$h(undefined, config.arrayPosition));
        config.viewProps.bindClassModifiers(this.element);
        const inputElem = doc.createElement('input');
        inputElem.classList.add(cn$h('i'));
        inputElem.type = 'text';
        config.viewProps.bindDisabled(inputElem);
        this.element.appendChild(inputElem);
        this.inputElement = inputElem;
        this.onDraggingChange_ = this.onDraggingChange_.bind(this);
        this.dragging_ = config.dragging;
        this.dragging_.emitter.on('change', this.onDraggingChange_);
        this.element.classList.add(cn$h());
        this.inputElement.classList.add(cn$h('i'));
        const knobElem = doc.createElement('div');
        knobElem.classList.add(cn$h('k'));
        this.element.appendChild(knobElem);
        this.knobElement = knobElem;
        const guideElem = doc.createElementNS(SVG_NS, 'svg');
        guideElem.classList.add(cn$h('g'));
        this.knobElement.appendChild(guideElem);
        const bodyElem = doc.createElementNS(SVG_NS, 'path');
        bodyElem.classList.add(cn$h('gb'));
        guideElem.appendChild(bodyElem);
        this.guideBodyElem_ = bodyElem;
        const headElem = doc.createElementNS(SVG_NS, 'path');
        headElem.classList.add(cn$h('gh'));
        guideElem.appendChild(headElem);
        this.guideHeadElem_ = headElem;
        const tooltipElem = doc.createElement('div');
        tooltipElem.classList.add(ClassName('tt')());
        this.knobElement.appendChild(tooltipElem);
        this.tooltipElem_ = tooltipElem;
        config.value.emitter.on('change', this.onChange_);
        this.value = config.value;
        this.refresh();
    }
    onDraggingChange_(ev) {
        if (ev.rawValue === null) {
            this.element.classList.remove(cn$h(undefined, 'drg'));
            return;
        }
        this.element.classList.add(cn$h(undefined, 'drg'));
        const x = ev.rawValue / this.props_.get('pointerScale');
        const aox = x + (x > 0 ? -1 : x < 0 ? 1 : 0);
        const adx = constrainRange(-aox, -4, 4);
        this.guideHeadElem_.setAttributeNS(null, 'd', [
            `M ${aox + adx},0 L${aox},4 L${aox + adx},8`,
            `M ${x},-1 L${x},9`
        ].join(' '));
        this.guideBodyElem_.setAttributeNS(null, 'd', `M 0,4 L${x},4`);
        const formatter = this.props_.get('formatter');
        this.tooltipElem_.textContent = formatter(this.value.rawValue);
        this.tooltipElem_.style.left = `${x}px`;
    }
    refresh() {
        const formatter = this.props_.get('formatter');
        this.inputElement.value = formatter(this.value.rawValue);
    }
    onChange_() {
        this.refresh();
    }
}
class NumberTextController {
    constructor(doc, config){
        var _a;
        this.originRawValue_ = 0;
        this.onInputChange_ = this.onInputChange_.bind(this);
        this.onInputKeyDown_ = this.onInputKeyDown_.bind(this);
        this.onInputKeyUp_ = this.onInputKeyUp_.bind(this);
        this.onPointerDown_ = this.onPointerDown_.bind(this);
        this.onPointerMove_ = this.onPointerMove_.bind(this);
        this.onPointerUp_ = this.onPointerUp_.bind(this);
        this.parser_ = config.parser;
        this.props = config.props;
        this.sliderProps_ = (_a = config.sliderProps) !== null && _a !== void 0 ? _a : null;
        this.value = config.value;
        this.viewProps = config.viewProps;
        this.dragging_ = createValue(null);
        this.view = new NumberTextView(doc, {
            arrayPosition: config.arrayPosition,
            dragging: this.dragging_,
            props: this.props,
            value: this.value,
            viewProps: this.viewProps
        });
        this.view.inputElement.addEventListener('change', this.onInputChange_);
        this.view.inputElement.addEventListener('keydown', this.onInputKeyDown_);
        this.view.inputElement.addEventListener('keyup', this.onInputKeyUp_);
        const ph = new PointerHandler(this.view.knobElement);
        ph.emitter.on('down', this.onPointerDown_);
        ph.emitter.on('move', this.onPointerMove_);
        ph.emitter.on('up', this.onPointerUp_);
    }
    constrainValue_(value) {
        var _a, _b;
        const min = (_a = this.sliderProps_) === null || _a === void 0 ? void 0 : _a.get('min');
        const max = (_b = this.sliderProps_) === null || _b === void 0 ? void 0 : _b.get('max');
        let v = value;
        if (min !== undefined) v = Math.max(v, min);
        if (max !== undefined) v = Math.min(v, max);
        return v;
    }
    onInputChange_(e) {
        const inputElem = forceCast(e.currentTarget);
        const value = inputElem.value;
        const parsedValue = this.parser_(value);
        if (!isEmpty(parsedValue)) this.value.rawValue = this.constrainValue_(parsedValue);
        this.view.refresh();
    }
    onInputKeyDown_(ev) {
        const step = getStepForKey(this.props.get('keyScale'), getVerticalStepKeys(ev));
        if (step === 0) return;
        this.value.setRawValue(this.constrainValue_(this.value.rawValue + step), {
            forceEmit: false,
            last: false
        });
    }
    onInputKeyUp_(ev) {
        const step = getStepForKey(this.props.get('keyScale'), getVerticalStepKeys(ev));
        if (step === 0) return;
        this.value.setRawValue(this.value.rawValue, {
            forceEmit: true,
            last: true
        });
    }
    onPointerDown_() {
        this.originRawValue_ = this.value.rawValue;
        this.dragging_.rawValue = 0;
    }
    computeDraggingValue_(data) {
        if (!data.point) return null;
        const dx = data.point.x - data.bounds.width / 2;
        return this.constrainValue_(this.originRawValue_ + dx * this.props.get('pointerScale'));
    }
    onPointerMove_(ev) {
        const v = this.computeDraggingValue_(ev.data);
        if (v === null) return;
        this.value.setRawValue(v, {
            forceEmit: false,
            last: false
        });
        this.dragging_.rawValue = this.value.rawValue - this.originRawValue_;
    }
    onPointerUp_(ev) {
        const v = this.computeDraggingValue_(ev.data);
        if (v === null) return;
        this.value.setRawValue(v, {
            forceEmit: true,
            last: true
        });
        this.dragging_.rawValue = null;
    }
}
const cn$g = ClassName('sld');
class SliderView {
    constructor(doc, config){
        this.onChange_ = this.onChange_.bind(this);
        this.props_ = config.props;
        this.props_.emitter.on('change', this.onChange_);
        this.element = doc.createElement('div');
        this.element.classList.add(cn$g());
        config.viewProps.bindClassModifiers(this.element);
        const trackElem = doc.createElement('div');
        trackElem.classList.add(cn$g('t'));
        config.viewProps.bindTabIndex(trackElem);
        this.element.appendChild(trackElem);
        this.trackElement = trackElem;
        const knobElem = doc.createElement('div');
        knobElem.classList.add(cn$g('k'));
        this.trackElement.appendChild(knobElem);
        this.knobElement = knobElem;
        config.value.emitter.on('change', this.onChange_);
        this.value = config.value;
        this.update_();
    }
    update_() {
        const p = constrainRange(mapRange(this.value.rawValue, this.props_.get('min'), this.props_.get('max'), 0, 100), 0, 100);
        this.knobElement.style.width = `${p}%`;
    }
    onChange_() {
        this.update_();
    }
}
class SliderController {
    constructor(doc, config){
        this.onKeyDown_ = this.onKeyDown_.bind(this);
        this.onKeyUp_ = this.onKeyUp_.bind(this);
        this.onPointerDownOrMove_ = this.onPointerDownOrMove_.bind(this);
        this.onPointerUp_ = this.onPointerUp_.bind(this);
        this.value = config.value;
        this.viewProps = config.viewProps;
        this.props = config.props;
        this.view = new SliderView(doc, {
            props: this.props,
            value: this.value,
            viewProps: this.viewProps
        });
        this.ptHandler_ = new PointerHandler(this.view.trackElement);
        this.ptHandler_.emitter.on('down', this.onPointerDownOrMove_);
        this.ptHandler_.emitter.on('move', this.onPointerDownOrMove_);
        this.ptHandler_.emitter.on('up', this.onPointerUp_);
        this.view.trackElement.addEventListener('keydown', this.onKeyDown_);
        this.view.trackElement.addEventListener('keyup', this.onKeyUp_);
    }
    handlePointerEvent_(d, opts) {
        if (!d.point) return;
        this.value.setRawValue(mapRange(constrainRange(d.point.x, 0, d.bounds.width), 0, d.bounds.width, this.props.get('min'), this.props.get('max')), opts);
    }
    onPointerDownOrMove_(ev) {
        this.handlePointerEvent_(ev.data, {
            forceEmit: false,
            last: false
        });
    }
    onPointerUp_(ev) {
        this.handlePointerEvent_(ev.data, {
            forceEmit: true,
            last: true
        });
    }
    onKeyDown_(ev) {
        const step = getStepForKey(this.props.get('keyScale'), getHorizontalStepKeys(ev));
        if (step === 0) return;
        this.value.setRawValue(this.value.rawValue + step, {
            forceEmit: false,
            last: false
        });
    }
    onKeyUp_(ev) {
        const step = getStepForKey(this.props.get('keyScale'), getHorizontalStepKeys(ev));
        if (step === 0) return;
        this.value.setRawValue(this.value.rawValue, {
            forceEmit: true,
            last: true
        });
    }
}
const cn$f = ClassName('sldtxt');
class SliderTextView {
    constructor(doc, config){
        this.element = doc.createElement('div');
        this.element.classList.add(cn$f());
        const sliderElem = doc.createElement('div');
        sliderElem.classList.add(cn$f('s'));
        this.sliderView_ = config.sliderView;
        sliderElem.appendChild(this.sliderView_.element);
        this.element.appendChild(sliderElem);
        const textElem = doc.createElement('div');
        textElem.classList.add(cn$f('t'));
        this.textView_ = config.textView;
        textElem.appendChild(this.textView_.element);
        this.element.appendChild(textElem);
    }
}
class SliderTextController {
    constructor(doc, config){
        this.value = config.value;
        this.viewProps = config.viewProps;
        this.sliderC_ = new SliderController(doc, {
            props: config.sliderProps,
            value: config.value,
            viewProps: this.viewProps
        });
        this.textC_ = new NumberTextController(doc, {
            parser: config.parser,
            props: config.textProps,
            sliderProps: config.sliderProps,
            value: config.value,
            viewProps: config.viewProps
        });
        this.view = new SliderTextView(doc, {
            sliderView: this.sliderC_.view,
            textView: this.textC_.view
        });
    }
    get sliderController() {
        return this.sliderC_;
    }
    get textController() {
        return this.textC_;
    }
    importProps(state) {
        return importBladeState(state, null, (p)=>({
                max: p.required.number,
                min: p.required.number
            }), (result)=>{
            const sliderProps = this.sliderC_.props;
            sliderProps.set('max', result.max);
            sliderProps.set('min', result.min);
            return true;
        });
    }
    exportProps() {
        const sliderProps = this.sliderC_.props;
        return exportBladeState(null, {
            max: sliderProps.get('max'),
            min: sliderProps.get('min')
        });
    }
}
function createSliderTextProps(config) {
    return {
        sliderProps: new ValueMap({
            keyScale: config.keyScale,
            max: config.max,
            min: config.min
        }),
        textProps: new ValueMap({
            formatter: createValue(config.formatter),
            keyScale: config.keyScale,
            pointerScale: createValue(config.pointerScale)
        })
    };
}
const CSS_VAR_MAP = {
    containerUnitSize: 'cnt-usz'
};
function getCssVar(key) {
    return `--${CSS_VAR_MAP[key]}`;
}
function createPointDimensionParser(p) {
    return createNumberTextInputParamsParser(p);
}
function parsePointDimensionParams(value) {
    if (!isRecord(value)) return undefined;
    return parseRecord(value, createPointDimensionParser);
}
function createDimensionConstraint(params, initialValue) {
    if (!params) return undefined;
    const constraints = [];
    const cs = createStepConstraint(params, initialValue);
    if (cs) constraints.push(cs);
    const rs = createRangeConstraint(params);
    if (rs) constraints.push(rs);
    return new CompositeConstraint(constraints);
}
function isCompatible(ver) {
    if (!ver) return false;
    return ver.major === VERSION$1.major;
}
function parsePickerLayout(value) {
    if (value === 'inline' || value === 'popup') return value;
    return undefined;
}
function writePrimitive(target, value) {
    target.write(value);
}
const cn$e = ClassName('ckb');
class CheckboxView {
    constructor(doc, config){
        this.onValueChange_ = this.onValueChange_.bind(this);
        this.element = doc.createElement('div');
        this.element.classList.add(cn$e());
        config.viewProps.bindClassModifiers(this.element);
        const labelElem = doc.createElement('label');
        labelElem.classList.add(cn$e('l'));
        this.element.appendChild(labelElem);
        this.labelElement = labelElem;
        const inputElem = doc.createElement('input');
        inputElem.classList.add(cn$e('i'));
        inputElem.type = 'checkbox';
        this.labelElement.appendChild(inputElem);
        this.inputElement = inputElem;
        config.viewProps.bindDisabled(this.inputElement);
        const wrapperElem = doc.createElement('div');
        wrapperElem.classList.add(cn$e('w'));
        this.labelElement.appendChild(wrapperElem);
        const markElem = createSvgIconElement(doc, 'check');
        wrapperElem.appendChild(markElem);
        config.value.emitter.on('change', this.onValueChange_);
        this.value = config.value;
        this.update_();
    }
    update_() {
        this.inputElement.checked = this.value.rawValue;
    }
    onValueChange_() {
        this.update_();
    }
}
class CheckboxController {
    constructor(doc, config){
        this.onInputChange_ = this.onInputChange_.bind(this);
        this.onLabelMouseDown_ = this.onLabelMouseDown_.bind(this);
        this.value = config.value;
        this.viewProps = config.viewProps;
        this.view = new CheckboxView(doc, {
            value: this.value,
            viewProps: this.viewProps
        });
        this.view.inputElement.addEventListener('change', this.onInputChange_);
        this.view.labelElement.addEventListener('mousedown', this.onLabelMouseDown_);
    }
    onInputChange_(ev) {
        const inputElem = forceCast(ev.currentTarget);
        this.value.rawValue = inputElem.checked;
        ev.preventDefault();
        ev.stopPropagation();
    }
    onLabelMouseDown_(ev) {
        ev.preventDefault();
    }
}
function createConstraint$6(params) {
    const constraints = [];
    const lc = createListConstraint(params.options);
    if (lc) constraints.push(lc);
    return new CompositeConstraint(constraints);
}
const BooleanInputPlugin = createPlugin({
    id: 'input-bool',
    type: 'input',
    accept: (value, params)=>{
        if (typeof value !== 'boolean') return null;
        const result = parseRecord(params, (p)=>({
                options: p.optional.custom(parseListOptions),
                readonly: p.optional.constant(false)
            }));
        return result ? {
            initialValue: value,
            params: result
        } : null;
    },
    binding: {
        reader: (_args)=>boolFromUnknown,
        constraint: (args)=>createConstraint$6(args.params),
        writer: (_args)=>writePrimitive
    },
    controller: (args)=>{
        const doc = args.document;
        const value = args.value;
        const c = args.constraint;
        const lc = c && findConstraint(c, ListConstraint);
        if (lc) return new ListController(doc, {
            props: new ValueMap({
                options: lc.values.value('options')
            }),
            value: value,
            viewProps: args.viewProps
        });
        return new CheckboxController(doc, {
            value: value,
            viewProps: args.viewProps
        });
    },
    api (args) {
        if (typeof args.controller.value.rawValue !== 'boolean') return null;
        if (args.controller.valueController instanceof ListController) return new ListInputBindingApi(args.controller);
        return null;
    }
});
const cn$d = ClassName('col');
class ColorView {
    constructor(doc, config){
        this.element = doc.createElement('div');
        this.element.classList.add(cn$d());
        config.foldable.bindExpandedClass(this.element, cn$d(undefined, 'expanded'));
        bindValueMap(config.foldable, 'completed', valueToClassName(this.element, cn$d(undefined, 'cpl')));
        const headElem = doc.createElement('div');
        headElem.classList.add(cn$d('h'));
        this.element.appendChild(headElem);
        const swatchElem = doc.createElement('div');
        swatchElem.classList.add(cn$d('s'));
        headElem.appendChild(swatchElem);
        this.swatchElement = swatchElem;
        const textElem = doc.createElement('div');
        textElem.classList.add(cn$d('t'));
        headElem.appendChild(textElem);
        this.textElement = textElem;
        if (config.pickerLayout === 'inline') {
            const pickerElem = doc.createElement('div');
            pickerElem.classList.add(cn$d('p'));
            this.element.appendChild(pickerElem);
            this.pickerElement = pickerElem;
        } else this.pickerElement = null;
    }
}
function rgbToHslInt(r, g, b) {
    const rp = constrainRange(r / 255, 0, 1);
    const gp = constrainRange(g / 255, 0, 1);
    const bp = constrainRange(b / 255, 0, 1);
    const cmax = Math.max(rp, gp, bp);
    const cmin = Math.min(rp, gp, bp);
    const c = cmax - cmin;
    let h = 0;
    let s = 0;
    const l = (cmin + cmax) / 2;
    if (c !== 0) {
        s = c / (1 - Math.abs(cmax + cmin - 1));
        if (rp === cmax) h = (gp - bp) / c;
        else if (gp === cmax) h = 2 + (bp - rp) / c;
        else h = 4 + (rp - gp) / c;
        h = h / 6 + (h < 0 ? 1 : 0);
    }
    return [
        h * 360,
        s * 100,
        l * 100
    ];
}
function hslToRgbInt(h, s, l) {
    const hp = (h % 360 + 360) % 360;
    const sp = constrainRange(s / 100, 0, 1);
    const lp = constrainRange(l / 100, 0, 1);
    const c = (1 - Math.abs(2 * lp - 1)) * sp;
    const x = c * (1 - Math.abs(hp / 60 % 2 - 1));
    const m = lp - c / 2;
    let rp, gp, bp;
    if (hp >= 0 && hp < 60) [rp, gp, bp] = [
        c,
        x,
        0
    ];
    else if (hp >= 60 && hp < 120) [rp, gp, bp] = [
        x,
        c,
        0
    ];
    else if (hp >= 120 && hp < 180) [rp, gp, bp] = [
        0,
        c,
        x
    ];
    else if (hp >= 180 && hp < 240) [rp, gp, bp] = [
        0,
        x,
        c
    ];
    else if (hp >= 240 && hp < 300) [rp, gp, bp] = [
        x,
        0,
        c
    ];
    else [rp, gp, bp] = [
        c,
        0,
        x
    ];
    return [
        (rp + m) * 255,
        (gp + m) * 255,
        (bp + m) * 255
    ];
}
function rgbToHsvInt(r, g, b) {
    const rp = constrainRange(r / 255, 0, 1);
    const gp = constrainRange(g / 255, 0, 1);
    const bp = constrainRange(b / 255, 0, 1);
    const cmax = Math.max(rp, gp, bp);
    const cmin = Math.min(rp, gp, bp);
    const d = cmax - cmin;
    let h;
    if (d === 0) h = 0;
    else if (cmax === rp) h = 60 * (((gp - bp) / d % 6 + 6) % 6);
    else if (cmax === gp) h = 60 * ((bp - rp) / d + 2);
    else h = 60 * ((rp - gp) / d + 4);
    const s = cmax === 0 ? 0 : d / cmax;
    const v = cmax;
    return [
        h,
        s * 100,
        v * 100
    ];
}
function hsvToRgbInt(h, s, v) {
    const hp = loopRange(h, 360);
    const sp = constrainRange(s / 100, 0, 1);
    const vp = constrainRange(v / 100, 0, 1);
    const c = vp * sp;
    const x = c * (1 - Math.abs(hp / 60 % 2 - 1));
    const m = vp - c;
    let rp, gp, bp;
    if (hp >= 0 && hp < 60) [rp, gp, bp] = [
        c,
        x,
        0
    ];
    else if (hp >= 60 && hp < 120) [rp, gp, bp] = [
        x,
        c,
        0
    ];
    else if (hp >= 120 && hp < 180) [rp, gp, bp] = [
        0,
        c,
        x
    ];
    else if (hp >= 180 && hp < 240) [rp, gp, bp] = [
        0,
        x,
        c
    ];
    else if (hp >= 240 && hp < 300) [rp, gp, bp] = [
        x,
        0,
        c
    ];
    else [rp, gp, bp] = [
        c,
        0,
        x
    ];
    return [
        (rp + m) * 255,
        (gp + m) * 255,
        (bp + m) * 255
    ];
}
function hslToHsvInt(h, s, l) {
    const sd = l + s * (100 - Math.abs(2 * l - 100)) / 200;
    return [
        h,
        sd !== 0 ? s * (100 - Math.abs(2 * l - 100)) / sd : 0,
        l + s * (100 - Math.abs(2 * l - 100)) / 200
    ];
}
function hsvToHslInt(h, s, v) {
    const sd = 100 - Math.abs(v * (200 - s) / 100 - 100);
    return [
        h,
        sd !== 0 ? s * v / sd : 0,
        v * (200 - s) / 200
    ];
}
function removeAlphaComponent(comps) {
    return [
        comps[0],
        comps[1],
        comps[2]
    ];
}
function appendAlphaComponent(comps, alpha) {
    return [
        comps[0],
        comps[1],
        comps[2],
        alpha
    ];
}
const MODE_CONVERTER_MAP = {
    hsl: {
        hsl: (h, s, l)=>[
                h,
                s,
                l
            ],
        hsv: hslToHsvInt,
        rgb: hslToRgbInt
    },
    hsv: {
        hsl: hsvToHslInt,
        hsv: (h, s, v)=>[
                h,
                s,
                v
            ],
        rgb: hsvToRgbInt
    },
    rgb: {
        hsl: rgbToHslInt,
        hsv: rgbToHsvInt,
        rgb: (r, g, b)=>[
                r,
                g,
                b
            ]
    }
};
function getColorMaxComponents(mode, type) {
    return [
        type === 'float' ? 1 : mode === 'rgb' ? 255 : 360,
        type === 'float' ? 1 : mode === 'rgb' ? 255 : 100,
        type === 'float' ? 1 : mode === 'rgb' ? 255 : 100
    ];
}
function loopHueRange(hue, max) {
    return hue === max ? max : loopRange(hue, max);
}
function constrainColorComponents(components, mode, type) {
    var _a;
    const ms = getColorMaxComponents(mode, type);
    return [
        mode === 'rgb' ? constrainRange(components[0], 0, ms[0]) : loopHueRange(components[0], ms[0]),
        constrainRange(components[1], 0, ms[1]),
        constrainRange(components[2], 0, ms[2]),
        constrainRange((_a = components[3]) !== null && _a !== void 0 ? _a : 1, 0, 1)
    ];
}
function convertColorType(comps, mode, from, to) {
    const fms = getColorMaxComponents(mode, from);
    const tms = getColorMaxComponents(mode, to);
    return comps.map((c, index)=>c / fms[index] * tms[index]);
}
function convertColor(components, from, to) {
    const intComps = convertColorType(components, from.mode, from.type, 'int');
    const result = MODE_CONVERTER_MAP[from.mode][to.mode](...intComps);
    return convertColorType(result, to.mode, 'int', to.type);
}
class IntColor {
    static black() {
        return new IntColor([
            0,
            0,
            0
        ], 'rgb');
    }
    constructor(comps, mode){
        this.type = 'int';
        this.mode = mode;
        this.comps_ = constrainColorComponents(comps, mode, this.type);
    }
    getComponents(opt_mode) {
        return appendAlphaComponent(convertColor(removeAlphaComponent(this.comps_), {
            mode: this.mode,
            type: this.type
        }, {
            mode: opt_mode !== null && opt_mode !== void 0 ? opt_mode : this.mode,
            type: this.type
        }), this.comps_[3]);
    }
    toRgbaObject() {
        const rgbComps = this.getComponents('rgb');
        return {
            r: rgbComps[0],
            g: rgbComps[1],
            b: rgbComps[2],
            a: rgbComps[3]
        };
    }
}
const cn$c = ClassName('colp');
class ColorPickerView {
    constructor(doc, config){
        this.alphaViews_ = null;
        this.element = doc.createElement('div');
        this.element.classList.add(cn$c());
        config.viewProps.bindClassModifiers(this.element);
        const hsvElem = doc.createElement('div');
        hsvElem.classList.add(cn$c('hsv'));
        const svElem = doc.createElement('div');
        svElem.classList.add(cn$c('sv'));
        this.svPaletteView_ = config.svPaletteView;
        svElem.appendChild(this.svPaletteView_.element);
        hsvElem.appendChild(svElem);
        const hElem = doc.createElement('div');
        hElem.classList.add(cn$c('h'));
        this.hPaletteView_ = config.hPaletteView;
        hElem.appendChild(this.hPaletteView_.element);
        hsvElem.appendChild(hElem);
        this.element.appendChild(hsvElem);
        const rgbElem = doc.createElement('div');
        rgbElem.classList.add(cn$c('rgb'));
        this.textsView_ = config.textsView;
        rgbElem.appendChild(this.textsView_.element);
        this.element.appendChild(rgbElem);
        if (config.alphaViews) {
            this.alphaViews_ = {
                palette: config.alphaViews.palette,
                text: config.alphaViews.text
            };
            const aElem = doc.createElement('div');
            aElem.classList.add(cn$c('a'));
            const apElem = doc.createElement('div');
            apElem.classList.add(cn$c('ap'));
            apElem.appendChild(this.alphaViews_.palette.element);
            aElem.appendChild(apElem);
            const atElem = doc.createElement('div');
            atElem.classList.add(cn$c('at'));
            atElem.appendChild(this.alphaViews_.text.element);
            aElem.appendChild(atElem);
            this.element.appendChild(aElem);
        }
    }
    get allFocusableElements() {
        const elems = [
            this.svPaletteView_.element,
            this.hPaletteView_.element,
            this.textsView_.modeSelectElement,
            ...this.textsView_.inputViews.map((v)=>v.inputElement)
        ];
        if (this.alphaViews_) elems.push(this.alphaViews_.palette.element, this.alphaViews_.text.inputElement);
        return elems;
    }
}
function parseColorType(value) {
    return value === 'int' ? 'int' : value === 'float' ? 'float' : undefined;
}
function parseColorInputParams(params) {
    return parseRecord(params, (p)=>({
            color: p.optional.object({
                alpha: p.optional.boolean,
                type: p.optional.custom(parseColorType)
            }),
            expanded: p.optional.boolean,
            picker: p.optional.custom(parsePickerLayout),
            readonly: p.optional.constant(false)
        }));
}
function getKeyScaleForColor(forAlpha) {
    return forAlpha ? 0.1 : 1;
}
function extractColorType(params) {
    var _a;
    return (_a = params.color) === null || _a === void 0 ? void 0 : _a.type;
}
class FloatColor {
    constructor(comps, mode){
        this.type = 'float';
        this.mode = mode;
        this.comps_ = constrainColorComponents(comps, mode, this.type);
    }
    getComponents(opt_mode) {
        return appendAlphaComponent(convertColor(removeAlphaComponent(this.comps_), {
            mode: this.mode,
            type: this.type
        }, {
            mode: opt_mode !== null && opt_mode !== void 0 ? opt_mode : this.mode,
            type: this.type
        }), this.comps_[3]);
    }
    toRgbaObject() {
        const rgbComps = this.getComponents('rgb');
        return {
            r: rgbComps[0],
            g: rgbComps[1],
            b: rgbComps[2],
            a: rgbComps[3]
        };
    }
}
const TYPE_TO_CONSTRUCTOR_MAP = {
    int: (comps, mode)=>new IntColor(comps, mode),
    float: (comps, mode)=>new FloatColor(comps, mode)
};
function createColor(comps, mode, type) {
    return TYPE_TO_CONSTRUCTOR_MAP[type](comps, mode);
}
function isFloatColor(c) {
    return c.type === 'float';
}
function isIntColor(c) {
    return c.type === 'int';
}
function convertFloatToInt(cf) {
    const comps = cf.getComponents();
    const ms = getColorMaxComponents(cf.mode, 'int');
    return new IntColor([
        Math.round(mapRange(comps[0], 0, 1, 0, ms[0])),
        Math.round(mapRange(comps[1], 0, 1, 0, ms[1])),
        Math.round(mapRange(comps[2], 0, 1, 0, ms[2])),
        comps[3]
    ], cf.mode);
}
function convertIntToFloat(ci) {
    const comps = ci.getComponents();
    const ms = getColorMaxComponents(ci.mode, 'int');
    return new FloatColor([
        mapRange(comps[0], 0, ms[0], 0, 1),
        mapRange(comps[1], 0, ms[1], 0, 1),
        mapRange(comps[2], 0, ms[2], 0, 1),
        comps[3]
    ], ci.mode);
}
function mapColorType(c, type) {
    if (c.type === type) return c;
    if (isIntColor(c) && type === 'float') return convertIntToFloat(c);
    if (isFloatColor(c) && type === 'int') return convertFloatToInt(c);
    throw TpError.shouldNeverHappen();
}
function equalsStringColorFormat(f1, f2) {
    return f1.alpha === f2.alpha && f1.mode === f2.mode && f1.notation === f2.notation && f1.type === f2.type;
}
function parseCssNumberOrPercentage(text, max) {
    const m = text.match(/^(.+)%$/);
    if (!m) return Math.min(parseFloat(text), max);
    return Math.min(parseFloat(m[1]) * 0.01 * max, max);
}
const ANGLE_TO_DEG_MAP = {
    deg: (angle)=>angle,
    grad: (angle)=>angle * 360 / 400,
    rad: (angle)=>angle * 360 / (2 * Math.PI),
    turn: (angle)=>angle * 360
};
function parseCssNumberOrAngle(text) {
    const m = text.match(/^([0-9.]+?)(deg|grad|rad|turn)$/);
    if (!m) return parseFloat(text);
    const angle = parseFloat(m[1]);
    const unit = m[2];
    return ANGLE_TO_DEG_MAP[unit](angle);
}
function parseFunctionalRgbColorComponents(text) {
    const m = text.match(/^rgb\(\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);
    if (!m) return null;
    const comps = [
        parseCssNumberOrPercentage(m[1], 255),
        parseCssNumberOrPercentage(m[2], 255),
        parseCssNumberOrPercentage(m[3], 255)
    ];
    if (isNaN(comps[0]) || isNaN(comps[1]) || isNaN(comps[2])) return null;
    return comps;
}
function parseFunctionalRgbColor(text) {
    const comps = parseFunctionalRgbColorComponents(text);
    return comps ? new IntColor(comps, 'rgb') : null;
}
function parseFunctionalRgbaColorComponents(text) {
    const m = text.match(/^rgba\(\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);
    if (!m) return null;
    const comps = [
        parseCssNumberOrPercentage(m[1], 255),
        parseCssNumberOrPercentage(m[2], 255),
        parseCssNumberOrPercentage(m[3], 255),
        parseCssNumberOrPercentage(m[4], 1)
    ];
    if (isNaN(comps[0]) || isNaN(comps[1]) || isNaN(comps[2]) || isNaN(comps[3])) return null;
    return comps;
}
function parseFunctionalRgbaColor(text) {
    const comps = parseFunctionalRgbaColorComponents(text);
    return comps ? new IntColor(comps, 'rgb') : null;
}
function parseFunctionalHslColorComponents(text) {
    const m = text.match(/^hsl\(\s*([0-9A-Fa-f.]+(?:deg|grad|rad|turn)?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);
    if (!m) return null;
    const comps = [
        parseCssNumberOrAngle(m[1]),
        parseCssNumberOrPercentage(m[2], 100),
        parseCssNumberOrPercentage(m[3], 100)
    ];
    if (isNaN(comps[0]) || isNaN(comps[1]) || isNaN(comps[2])) return null;
    return comps;
}
function parseFunctionalHslColor(text) {
    const comps = parseFunctionalHslColorComponents(text);
    return comps ? new IntColor(comps, 'hsl') : null;
}
function parseHslaColorComponents(text) {
    const m = text.match(/^hsla\(\s*([0-9A-Fa-f.]+(?:deg|grad|rad|turn)?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);
    if (!m) return null;
    const comps = [
        parseCssNumberOrAngle(m[1]),
        parseCssNumberOrPercentage(m[2], 100),
        parseCssNumberOrPercentage(m[3], 100),
        parseCssNumberOrPercentage(m[4], 1)
    ];
    if (isNaN(comps[0]) || isNaN(comps[1]) || isNaN(comps[2]) || isNaN(comps[3])) return null;
    return comps;
}
function parseFunctionalHslaColor(text) {
    const comps = parseHslaColorComponents(text);
    return comps ? new IntColor(comps, 'hsl') : null;
}
function parseHexRgbColorComponents(text) {
    const mRgb = text.match(/^#([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/);
    if (mRgb) return [
        parseInt(mRgb[1] + mRgb[1], 16),
        parseInt(mRgb[2] + mRgb[2], 16),
        parseInt(mRgb[3] + mRgb[3], 16)
    ];
    const mRrggbb = text.match(/^(?:#|0x)([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/);
    if (mRrggbb) return [
        parseInt(mRrggbb[1], 16),
        parseInt(mRrggbb[2], 16),
        parseInt(mRrggbb[3], 16)
    ];
    return null;
}
function parseHexRgbColor(text) {
    const comps = parseHexRgbColorComponents(text);
    return comps ? new IntColor(comps, 'rgb') : null;
}
function parseHexRgbaColorComponents(text) {
    const mRgb = text.match(/^#([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/);
    if (mRgb) return [
        parseInt(mRgb[1] + mRgb[1], 16),
        parseInt(mRgb[2] + mRgb[2], 16),
        parseInt(mRgb[3] + mRgb[3], 16),
        mapRange(parseInt(mRgb[4] + mRgb[4], 16), 0, 255, 0, 1)
    ];
    const mRrggbb = text.match(/^(?:#|0x)?([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/);
    if (mRrggbb) return [
        parseInt(mRrggbb[1], 16),
        parseInt(mRrggbb[2], 16),
        parseInt(mRrggbb[3], 16),
        mapRange(parseInt(mRrggbb[4], 16), 0, 255, 0, 1)
    ];
    return null;
}
function parseHexRgbaColor(text) {
    const comps = parseHexRgbaColorComponents(text);
    return comps ? new IntColor(comps, 'rgb') : null;
}
function parseObjectRgbColorComponents(text) {
    const m = text.match(/^\{\s*r\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*g\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*b\s*:\s*([0-9A-Fa-f.]+%?)\s*\}$/);
    if (!m) return null;
    const comps = [
        parseFloat(m[1]),
        parseFloat(m[2]),
        parseFloat(m[3])
    ];
    if (isNaN(comps[0]) || isNaN(comps[1]) || isNaN(comps[2])) return null;
    return comps;
}
function createObjectRgbColorParser(type) {
    return (text)=>{
        const comps = parseObjectRgbColorComponents(text);
        return comps ? createColor(comps, 'rgb', type) : null;
    };
}
function parseObjectRgbaColorComponents(text) {
    const m = text.match(/^\{\s*r\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*g\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*b\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*a\s*:\s*([0-9A-Fa-f.]+%?)\s*\}$/);
    if (!m) return null;
    const comps = [
        parseFloat(m[1]),
        parseFloat(m[2]),
        parseFloat(m[3]),
        parseFloat(m[4])
    ];
    if (isNaN(comps[0]) || isNaN(comps[1]) || isNaN(comps[2]) || isNaN(comps[3])) return null;
    return comps;
}
function createObjectRgbaColorParser(type) {
    return (text)=>{
        const comps = parseObjectRgbaColorComponents(text);
        return comps ? createColor(comps, 'rgb', type) : null;
    };
}
const PARSER_AND_RESULT = [
    {
        parser: parseHexRgbColorComponents,
        result: {
            alpha: false,
            mode: 'rgb',
            notation: 'hex'
        }
    },
    {
        parser: parseHexRgbaColorComponents,
        result: {
            alpha: true,
            mode: 'rgb',
            notation: 'hex'
        }
    },
    {
        parser: parseFunctionalRgbColorComponents,
        result: {
            alpha: false,
            mode: 'rgb',
            notation: 'func'
        }
    },
    {
        parser: parseFunctionalRgbaColorComponents,
        result: {
            alpha: true,
            mode: 'rgb',
            notation: 'func'
        }
    },
    {
        parser: parseFunctionalHslColorComponents,
        result: {
            alpha: false,
            mode: 'hsl',
            notation: 'func'
        }
    },
    {
        parser: parseHslaColorComponents,
        result: {
            alpha: true,
            mode: 'hsl',
            notation: 'func'
        }
    },
    {
        parser: parseObjectRgbColorComponents,
        result: {
            alpha: false,
            mode: 'rgb',
            notation: 'object'
        }
    },
    {
        parser: parseObjectRgbaColorComponents,
        result: {
            alpha: true,
            mode: 'rgb',
            notation: 'object'
        }
    }
];
function detectStringColor(text) {
    return PARSER_AND_RESULT.reduce((prev, { parser, result: detection })=>{
        if (prev) return prev;
        return parser(text) ? detection : null;
    }, null);
}
function detectStringColorFormat(text, type = 'int') {
    const r = detectStringColor(text);
    if (!r) return null;
    if (r.notation === 'hex' && type !== 'float') return Object.assign(Object.assign({}, r), {
        type: 'int'
    });
    if (r.notation === 'func') return Object.assign(Object.assign({}, r), {
        type: type
    });
    return null;
}
function createColorStringParser(type) {
    const parsers = [
        parseHexRgbColor,
        parseHexRgbaColor,
        parseFunctionalRgbColor,
        parseFunctionalRgbaColor,
        parseFunctionalHslColor,
        parseFunctionalHslaColor
    ];
    if (type === 'int') parsers.push(createObjectRgbColorParser('int'), createObjectRgbaColorParser('int'));
    if (type === 'float') parsers.push(createObjectRgbColorParser('float'), createObjectRgbaColorParser('float'));
    const parser = composeParsers(parsers);
    return (text)=>{
        const result = parser(text);
        return result ? mapColorType(result, type) : null;
    };
}
function readIntColorString(value) {
    const parser = createColorStringParser('int');
    if (typeof value !== 'string') return IntColor.black();
    const result = parser(value);
    return result !== null && result !== void 0 ? result : IntColor.black();
}
function zerofill(comp) {
    const hex = constrainRange(Math.floor(comp), 0, 255).toString(16);
    return hex.length === 1 ? `0${hex}` : hex;
}
function colorToHexRgbString(value, prefix = '#') {
    const hexes = removeAlphaComponent(value.getComponents('rgb')).map(zerofill).join('');
    return `${prefix}${hexes}`;
}
function colorToHexRgbaString(value, prefix = '#') {
    const rgbaComps = value.getComponents('rgb');
    const hexes = [
        rgbaComps[0],
        rgbaComps[1],
        rgbaComps[2],
        rgbaComps[3] * 255
    ].map(zerofill).join('');
    return `${prefix}${hexes}`;
}
function colorToFunctionalRgbString(value) {
    const formatter = createNumberFormatter(0);
    const ci = mapColorType(value, 'int');
    const comps = removeAlphaComponent(ci.getComponents('rgb')).map((comp)=>formatter(comp));
    return `rgb(${comps.join(', ')})`;
}
function colorToFunctionalRgbaString(value) {
    const aFormatter = createNumberFormatter(2);
    const rgbFormatter = createNumberFormatter(0);
    const ci = mapColorType(value, 'int');
    const comps = ci.getComponents('rgb').map((comp, index)=>{
        const formatter = index === 3 ? aFormatter : rgbFormatter;
        return formatter(comp);
    });
    return `rgba(${comps.join(', ')})`;
}
function colorToFunctionalHslString(value) {
    const formatters = [
        createNumberFormatter(0),
        formatPercentage,
        formatPercentage
    ];
    const ci = mapColorType(value, 'int');
    const comps = removeAlphaComponent(ci.getComponents('hsl')).map((comp, index)=>formatters[index](comp));
    return `hsl(${comps.join(', ')})`;
}
function colorToFunctionalHslaString(value) {
    const formatters = [
        createNumberFormatter(0),
        formatPercentage,
        formatPercentage,
        createNumberFormatter(2)
    ];
    const ci = mapColorType(value, 'int');
    const comps = ci.getComponents('hsl').map((comp, index)=>formatters[index](comp));
    return `hsla(${comps.join(', ')})`;
}
function colorToObjectRgbString(value, type) {
    const formatter = createNumberFormatter(type === 'float' ? 2 : 0);
    const names = [
        'r',
        'g',
        'b'
    ];
    const cc = mapColorType(value, type);
    const comps = removeAlphaComponent(cc.getComponents('rgb')).map((comp, index)=>`${names[index]}: ${formatter(comp)}`);
    return `{${comps.join(', ')}}`;
}
function createObjectRgbColorFormatter(type) {
    return (value)=>colorToObjectRgbString(value, type);
}
function colorToObjectRgbaString(value, type) {
    const aFormatter = createNumberFormatter(2);
    const rgbFormatter = createNumberFormatter(type === 'float' ? 2 : 0);
    const names = [
        'r',
        'g',
        'b',
        'a'
    ];
    const cc = mapColorType(value, type);
    const comps = cc.getComponents('rgb').map((comp, index)=>{
        const formatter = index === 3 ? aFormatter : rgbFormatter;
        return `${names[index]}: ${formatter(comp)}`;
    });
    return `{${comps.join(', ')}}`;
}
function createObjectRgbaColorFormatter(type) {
    return (value)=>colorToObjectRgbaString(value, type);
}
const FORMAT_AND_STRINGIFIERS = [
    {
        format: {
            alpha: false,
            mode: 'rgb',
            notation: 'hex',
            type: 'int'
        },
        stringifier: colorToHexRgbString
    },
    {
        format: {
            alpha: true,
            mode: 'rgb',
            notation: 'hex',
            type: 'int'
        },
        stringifier: colorToHexRgbaString
    },
    {
        format: {
            alpha: false,
            mode: 'rgb',
            notation: 'func',
            type: 'int'
        },
        stringifier: colorToFunctionalRgbString
    },
    {
        format: {
            alpha: true,
            mode: 'rgb',
            notation: 'func',
            type: 'int'
        },
        stringifier: colorToFunctionalRgbaString
    },
    {
        format: {
            alpha: false,
            mode: 'hsl',
            notation: 'func',
            type: 'int'
        },
        stringifier: colorToFunctionalHslString
    },
    {
        format: {
            alpha: true,
            mode: 'hsl',
            notation: 'func',
            type: 'int'
        },
        stringifier: colorToFunctionalHslaString
    },
    ...[
        'int',
        'float'
    ].reduce((prev, type)=>{
        return [
            ...prev,
            {
                format: {
                    alpha: false,
                    mode: 'rgb',
                    notation: 'object',
                    type: type
                },
                stringifier: createObjectRgbColorFormatter(type)
            },
            {
                format: {
                    alpha: true,
                    mode: 'rgb',
                    notation: 'object',
                    type: type
                },
                stringifier: createObjectRgbaColorFormatter(type)
            }
        ];
    }, [])
];
function findColorStringifier(format) {
    return FORMAT_AND_STRINGIFIERS.reduce((prev, fas)=>{
        if (prev) return prev;
        return equalsStringColorFormat(fas.format, format) ? fas.stringifier : null;
    }, null);
}
const cn$b = ClassName('apl');
class APaletteView {
    constructor(doc, config){
        this.onValueChange_ = this.onValueChange_.bind(this);
        this.value = config.value;
        this.value.emitter.on('change', this.onValueChange_);
        this.element = doc.createElement('div');
        this.element.classList.add(cn$b());
        config.viewProps.bindClassModifiers(this.element);
        config.viewProps.bindTabIndex(this.element);
        const barElem = doc.createElement('div');
        barElem.classList.add(cn$b('b'));
        this.element.appendChild(barElem);
        const colorElem = doc.createElement('div');
        colorElem.classList.add(cn$b('c'));
        barElem.appendChild(colorElem);
        this.colorElem_ = colorElem;
        const markerElem = doc.createElement('div');
        markerElem.classList.add(cn$b('m'));
        this.element.appendChild(markerElem);
        this.markerElem_ = markerElem;
        const previewElem = doc.createElement('div');
        previewElem.classList.add(cn$b('p'));
        this.markerElem_.appendChild(previewElem);
        this.previewElem_ = previewElem;
        this.update_();
    }
    update_() {
        const c = this.value.rawValue;
        const rgbaComps = c.getComponents('rgb');
        const leftColor = new IntColor([
            rgbaComps[0],
            rgbaComps[1],
            rgbaComps[2],
            0
        ], 'rgb');
        const rightColor = new IntColor([
            rgbaComps[0],
            rgbaComps[1],
            rgbaComps[2],
            255
        ], 'rgb');
        const gradientComps = [
            'to right',
            colorToFunctionalRgbaString(leftColor),
            colorToFunctionalRgbaString(rightColor)
        ];
        this.colorElem_.style.background = `linear-gradient(${gradientComps.join(',')})`;
        this.previewElem_.style.backgroundColor = colorToFunctionalRgbaString(c);
        const left = mapRange(rgbaComps[3], 0, 1, 0, 100);
        this.markerElem_.style.left = `${left}%`;
    }
    onValueChange_() {
        this.update_();
    }
}
class APaletteController {
    constructor(doc, config){
        this.onKeyDown_ = this.onKeyDown_.bind(this);
        this.onKeyUp_ = this.onKeyUp_.bind(this);
        this.onPointerDown_ = this.onPointerDown_.bind(this);
        this.onPointerMove_ = this.onPointerMove_.bind(this);
        this.onPointerUp_ = this.onPointerUp_.bind(this);
        this.value = config.value;
        this.viewProps = config.viewProps;
        this.view = new APaletteView(doc, {
            value: this.value,
            viewProps: this.viewProps
        });
        this.ptHandler_ = new PointerHandler(this.view.element);
        this.ptHandler_.emitter.on('down', this.onPointerDown_);
        this.ptHandler_.emitter.on('move', this.onPointerMove_);
        this.ptHandler_.emitter.on('up', this.onPointerUp_);
        this.view.element.addEventListener('keydown', this.onKeyDown_);
        this.view.element.addEventListener('keyup', this.onKeyUp_);
    }
    handlePointerEvent_(d, opts) {
        if (!d.point) return;
        const alpha = d.point.x / d.bounds.width;
        const c = this.value.rawValue;
        const [h, s, v] = c.getComponents('hsv');
        this.value.setRawValue(new IntColor([
            h,
            s,
            v,
            alpha
        ], 'hsv'), opts);
    }
    onPointerDown_(ev) {
        this.handlePointerEvent_(ev.data, {
            forceEmit: false,
            last: false
        });
    }
    onPointerMove_(ev) {
        this.handlePointerEvent_(ev.data, {
            forceEmit: false,
            last: false
        });
    }
    onPointerUp_(ev) {
        this.handlePointerEvent_(ev.data, {
            forceEmit: true,
            last: true
        });
    }
    onKeyDown_(ev) {
        const step = getStepForKey(getKeyScaleForColor(true), getHorizontalStepKeys(ev));
        if (step === 0) return;
        const c = this.value.rawValue;
        const [h, s, v, a] = c.getComponents('hsv');
        this.value.setRawValue(new IntColor([
            h,
            s,
            v,
            a + step
        ], 'hsv'), {
            forceEmit: false,
            last: false
        });
    }
    onKeyUp_(ev) {
        const step = getStepForKey(getKeyScaleForColor(true), getHorizontalStepKeys(ev));
        if (step === 0) return;
        this.value.setRawValue(this.value.rawValue, {
            forceEmit: true,
            last: true
        });
    }
}
const cn$a = ClassName('coltxt');
function createModeSelectElement(doc) {
    const selectElem = doc.createElement('select');
    const items = [
        {
            text: 'RGB',
            value: 'rgb'
        },
        {
            text: 'HSL',
            value: 'hsl'
        },
        {
            text: 'HSV',
            value: 'hsv'
        },
        {
            text: 'HEX',
            value: 'hex'
        }
    ];
    selectElem.appendChild(items.reduce((frag, item)=>{
        const optElem = doc.createElement('option');
        optElem.textContent = item.text;
        optElem.value = item.value;
        frag.appendChild(optElem);
        return frag;
    }, doc.createDocumentFragment()));
    return selectElem;
}
class ColorTextsView {
    constructor(doc, config){
        this.element = doc.createElement('div');
        this.element.classList.add(cn$a());
        config.viewProps.bindClassModifiers(this.element);
        const modeElem = doc.createElement('div');
        modeElem.classList.add(cn$a('m'));
        this.modeElem_ = createModeSelectElement(doc);
        this.modeElem_.classList.add(cn$a('ms'));
        modeElem.appendChild(this.modeSelectElement);
        config.viewProps.bindDisabled(this.modeElem_);
        const modeMarkerElem = doc.createElement('div');
        modeMarkerElem.classList.add(cn$a('mm'));
        modeMarkerElem.appendChild(createSvgIconElement(doc, 'dropdown'));
        modeElem.appendChild(modeMarkerElem);
        this.element.appendChild(modeElem);
        const inputsElem = doc.createElement('div');
        inputsElem.classList.add(cn$a('w'));
        this.element.appendChild(inputsElem);
        this.inputsElem_ = inputsElem;
        this.inputViews_ = config.inputViews;
        this.applyInputViews_();
        bindValue(config.mode, (mode)=>{
            this.modeElem_.value = mode;
        });
    }
    get modeSelectElement() {
        return this.modeElem_;
    }
    get inputViews() {
        return this.inputViews_;
    }
    set inputViews(inputViews) {
        this.inputViews_ = inputViews;
        this.applyInputViews_();
    }
    applyInputViews_() {
        removeChildElements(this.inputsElem_);
        const doc = this.element.ownerDocument;
        this.inputViews_.forEach((v)=>{
            const compElem = doc.createElement('div');
            compElem.classList.add(cn$a('c'));
            compElem.appendChild(v.element);
            this.inputsElem_.appendChild(compElem);
        });
    }
}
function createFormatter$2(type) {
    return createNumberFormatter(type === 'float' ? 2 : 0);
}
function createConstraint$5(mode, type, index) {
    const max = getColorMaxComponents(mode, type)[index];
    return new DefiniteRangeConstraint({
        min: 0,
        max: max
    });
}
function createComponentController(doc, config, index) {
    return new NumberTextController(doc, {
        arrayPosition: index === 0 ? 'fst' : index === 2 ? 'lst' : 'mid',
        parser: config.parser,
        props: ValueMap.fromObject({
            formatter: createFormatter$2(config.colorType),
            keyScale: getKeyScaleForColor(false),
            pointerScale: config.colorType === 'float' ? 0.01 : 1
        }),
        value: createValue(0, {
            constraint: createConstraint$5(config.colorMode, config.colorType, index)
        }),
        viewProps: config.viewProps
    });
}
function createComponentControllers(doc, config) {
    const cc = {
        colorMode: config.colorMode,
        colorType: config.colorType,
        parser: parseNumber,
        viewProps: config.viewProps
    };
    return [
        0,
        1,
        2
    ].map((i)=>{
        const c = createComponentController(doc, cc, i);
        connectValues({
            primary: config.value,
            secondary: c.value,
            forward (p) {
                const mc = mapColorType(p, config.colorType);
                return mc.getComponents(config.colorMode)[i];
            },
            backward (p, s) {
                const pickedMode = config.colorMode;
                const mc = mapColorType(p, config.colorType);
                const comps = mc.getComponents(pickedMode);
                comps[i] = s;
                const c = createColor(appendAlphaComponent(removeAlphaComponent(comps), comps[3]), pickedMode, config.colorType);
                return mapColorType(c, 'int');
            }
        });
        return c;
    });
}
function createHexController(doc, config) {
    const c = new TextController(doc, {
        parser: createColorStringParser('int'),
        props: ValueMap.fromObject({
            formatter: colorToHexRgbString
        }),
        value: createValue(IntColor.black()),
        viewProps: config.viewProps
    });
    connectValues({
        primary: config.value,
        secondary: c.value,
        forward: (p)=>new IntColor(removeAlphaComponent(p.getComponents()), p.mode),
        backward: (p, s)=>new IntColor(appendAlphaComponent(removeAlphaComponent(s.getComponents(p.mode)), p.getComponents()[3]), p.mode)
    });
    return [
        c
    ];
}
function isColorMode(mode) {
    return mode !== 'hex';
}
class ColorTextsController {
    constructor(doc, config){
        this.onModeSelectChange_ = this.onModeSelectChange_.bind(this);
        this.colorType_ = config.colorType;
        this.value = config.value;
        this.viewProps = config.viewProps;
        this.colorMode = createValue(this.value.rawValue.mode);
        this.ccs_ = this.createComponentControllers_(doc);
        this.view = new ColorTextsView(doc, {
            mode: this.colorMode,
            inputViews: [
                this.ccs_[0].view,
                this.ccs_[1].view,
                this.ccs_[2].view
            ],
            viewProps: this.viewProps
        });
        this.view.modeSelectElement.addEventListener('change', this.onModeSelectChange_);
    }
    createComponentControllers_(doc) {
        const mode = this.colorMode.rawValue;
        if (isColorMode(mode)) return createComponentControllers(doc, {
            colorMode: mode,
            colorType: this.colorType_,
            value: this.value,
            viewProps: this.viewProps
        });
        return createHexController(doc, {
            value: this.value,
            viewProps: this.viewProps
        });
    }
    onModeSelectChange_(ev) {
        const selectElem = ev.currentTarget;
        this.colorMode.rawValue = selectElem.value;
        this.ccs_ = this.createComponentControllers_(this.view.element.ownerDocument);
        this.view.inputViews = this.ccs_.map((cc)=>cc.view);
    }
}
const cn$9 = ClassName('hpl');
class HPaletteView {
    constructor(doc, config){
        this.onValueChange_ = this.onValueChange_.bind(this);
        this.value = config.value;
        this.value.emitter.on('change', this.onValueChange_);
        this.element = doc.createElement('div');
        this.element.classList.add(cn$9());
        config.viewProps.bindClassModifiers(this.element);
        config.viewProps.bindTabIndex(this.element);
        const colorElem = doc.createElement('div');
        colorElem.classList.add(cn$9('c'));
        this.element.appendChild(colorElem);
        const markerElem = doc.createElement('div');
        markerElem.classList.add(cn$9('m'));
        this.element.appendChild(markerElem);
        this.markerElem_ = markerElem;
        this.update_();
    }
    update_() {
        const c = this.value.rawValue;
        const [h] = c.getComponents('hsv');
        this.markerElem_.style.backgroundColor = colorToFunctionalRgbString(new IntColor([
            h,
            100,
            100
        ], 'hsv'));
        const left = mapRange(h, 0, 360, 0, 100);
        this.markerElem_.style.left = `${left}%`;
    }
    onValueChange_() {
        this.update_();
    }
}
class HPaletteController {
    constructor(doc, config){
        this.onKeyDown_ = this.onKeyDown_.bind(this);
        this.onKeyUp_ = this.onKeyUp_.bind(this);
        this.onPointerDown_ = this.onPointerDown_.bind(this);
        this.onPointerMove_ = this.onPointerMove_.bind(this);
        this.onPointerUp_ = this.onPointerUp_.bind(this);
        this.value = config.value;
        this.viewProps = config.viewProps;
        this.view = new HPaletteView(doc, {
            value: this.value,
            viewProps: this.viewProps
        });
        this.ptHandler_ = new PointerHandler(this.view.element);
        this.ptHandler_.emitter.on('down', this.onPointerDown_);
        this.ptHandler_.emitter.on('move', this.onPointerMove_);
        this.ptHandler_.emitter.on('up', this.onPointerUp_);
        this.view.element.addEventListener('keydown', this.onKeyDown_);
        this.view.element.addEventListener('keyup', this.onKeyUp_);
    }
    handlePointerEvent_(d, opts) {
        if (!d.point) return;
        const hue = mapRange(constrainRange(d.point.x, 0, d.bounds.width), 0, d.bounds.width, 0, 360);
        const c = this.value.rawValue;
        const [, s, v, a] = c.getComponents('hsv');
        this.value.setRawValue(new IntColor([
            hue,
            s,
            v,
            a
        ], 'hsv'), opts);
    }
    onPointerDown_(ev) {
        this.handlePointerEvent_(ev.data, {
            forceEmit: false,
            last: false
        });
    }
    onPointerMove_(ev) {
        this.handlePointerEvent_(ev.data, {
            forceEmit: false,
            last: false
        });
    }
    onPointerUp_(ev) {
        this.handlePointerEvent_(ev.data, {
            forceEmit: true,
            last: true
        });
    }
    onKeyDown_(ev) {
        const step = getStepForKey(getKeyScaleForColor(false), getHorizontalStepKeys(ev));
        if (step === 0) return;
        const c = this.value.rawValue;
        const [h, s, v, a] = c.getComponents('hsv');
        this.value.setRawValue(new IntColor([
            h + step,
            s,
            v,
            a
        ], 'hsv'), {
            forceEmit: false,
            last: false
        });
    }
    onKeyUp_(ev) {
        const step = getStepForKey(getKeyScaleForColor(false), getHorizontalStepKeys(ev));
        if (step === 0) return;
        this.value.setRawValue(this.value.rawValue, {
            forceEmit: true,
            last: true
        });
    }
}
const cn$8 = ClassName('svp');
const CANVAS_RESOL = 64;
class SvPaletteView {
    constructor(doc, config){
        this.onValueChange_ = this.onValueChange_.bind(this);
        this.value = config.value;
        this.value.emitter.on('change', this.onValueChange_);
        this.element = doc.createElement('div');
        this.element.classList.add(cn$8());
        config.viewProps.bindClassModifiers(this.element);
        config.viewProps.bindTabIndex(this.element);
        const canvasElem = doc.createElement('canvas');
        canvasElem.height = CANVAS_RESOL;
        canvasElem.width = CANVAS_RESOL;
        canvasElem.classList.add(cn$8('c'));
        this.element.appendChild(canvasElem);
        this.canvasElement = canvasElem;
        const markerElem = doc.createElement('div');
        markerElem.classList.add(cn$8('m'));
        this.element.appendChild(markerElem);
        this.markerElem_ = markerElem;
        this.update_();
    }
    update_() {
        const ctx = getCanvasContext(this.canvasElement);
        if (!ctx) return;
        const c = this.value.rawValue;
        const hsvComps = c.getComponents('hsv');
        const width = this.canvasElement.width;
        const height = this.canvasElement.height;
        const imgData = ctx.getImageData(0, 0, width, height);
        const data = imgData.data;
        for(let iy = 0; iy < height; iy++)for(let ix = 0; ix < width; ix++){
            const s = mapRange(ix, 0, width, 0, 100);
            const v = mapRange(iy, 0, height, 100, 0);
            const rgbComps = hsvToRgbInt(hsvComps[0], s, v);
            const i = (iy * width + ix) * 4;
            data[i] = rgbComps[0];
            data[i + 1] = rgbComps[1];
            data[i + 2] = rgbComps[2];
            data[i + 3] = 255;
        }
        ctx.putImageData(imgData, 0, 0);
        const left = mapRange(hsvComps[1], 0, 100, 0, 100);
        this.markerElem_.style.left = `${left}%`;
        const top = mapRange(hsvComps[2], 0, 100, 100, 0);
        this.markerElem_.style.top = `${top}%`;
    }
    onValueChange_() {
        this.update_();
    }
}
class SvPaletteController {
    constructor(doc, config){
        this.onKeyDown_ = this.onKeyDown_.bind(this);
        this.onKeyUp_ = this.onKeyUp_.bind(this);
        this.onPointerDown_ = this.onPointerDown_.bind(this);
        this.onPointerMove_ = this.onPointerMove_.bind(this);
        this.onPointerUp_ = this.onPointerUp_.bind(this);
        this.value = config.value;
        this.viewProps = config.viewProps;
        this.view = new SvPaletteView(doc, {
            value: this.value,
            viewProps: this.viewProps
        });
        this.ptHandler_ = new PointerHandler(this.view.element);
        this.ptHandler_.emitter.on('down', this.onPointerDown_);
        this.ptHandler_.emitter.on('move', this.onPointerMove_);
        this.ptHandler_.emitter.on('up', this.onPointerUp_);
        this.view.element.addEventListener('keydown', this.onKeyDown_);
        this.view.element.addEventListener('keyup', this.onKeyUp_);
    }
    handlePointerEvent_(d, opts) {
        if (!d.point) return;
        const saturation = mapRange(d.point.x, 0, d.bounds.width, 0, 100);
        const value = mapRange(d.point.y, 0, d.bounds.height, 100, 0);
        const [h, , , a] = this.value.rawValue.getComponents('hsv');
        this.value.setRawValue(new IntColor([
            h,
            saturation,
            value,
            a
        ], 'hsv'), opts);
    }
    onPointerDown_(ev) {
        this.handlePointerEvent_(ev.data, {
            forceEmit: false,
            last: false
        });
    }
    onPointerMove_(ev) {
        this.handlePointerEvent_(ev.data, {
            forceEmit: false,
            last: false
        });
    }
    onPointerUp_(ev) {
        this.handlePointerEvent_(ev.data, {
            forceEmit: true,
            last: true
        });
    }
    onKeyDown_(ev) {
        if (isArrowKey(ev.key)) ev.preventDefault();
        const [h, s, v, a] = this.value.rawValue.getComponents('hsv');
        const keyScale = getKeyScaleForColor(false);
        const ds = getStepForKey(keyScale, getHorizontalStepKeys(ev));
        const dv = getStepForKey(keyScale, getVerticalStepKeys(ev));
        if (ds === 0 && dv === 0) return;
        this.value.setRawValue(new IntColor([
            h,
            s + ds,
            v + dv,
            a
        ], 'hsv'), {
            forceEmit: false,
            last: false
        });
    }
    onKeyUp_(ev) {
        const keyScale = getKeyScaleForColor(false);
        const ds = getStepForKey(keyScale, getHorizontalStepKeys(ev));
        const dv = getStepForKey(keyScale, getVerticalStepKeys(ev));
        if (ds === 0 && dv === 0) return;
        this.value.setRawValue(this.value.rawValue, {
            forceEmit: true,
            last: true
        });
    }
}
class ColorPickerController {
    constructor(doc, config){
        this.value = config.value;
        this.viewProps = config.viewProps;
        this.hPaletteC_ = new HPaletteController(doc, {
            value: this.value,
            viewProps: this.viewProps
        });
        this.svPaletteC_ = new SvPaletteController(doc, {
            value: this.value,
            viewProps: this.viewProps
        });
        this.alphaIcs_ = config.supportsAlpha ? {
            palette: new APaletteController(doc, {
                value: this.value,
                viewProps: this.viewProps
            }),
            text: new NumberTextController(doc, {
                parser: parseNumber,
                props: ValueMap.fromObject({
                    pointerScale: 0.01,
                    keyScale: 0.1,
                    formatter: createNumberFormatter(2)
                }),
                value: createValue(0, {
                    constraint: new DefiniteRangeConstraint({
                        min: 0,
                        max: 1
                    })
                }),
                viewProps: this.viewProps
            })
        } : null;
        if (this.alphaIcs_) connectValues({
            primary: this.value,
            secondary: this.alphaIcs_.text.value,
            forward: (p)=>p.getComponents()[3],
            backward: (p, s)=>{
                const comps = p.getComponents();
                comps[3] = s;
                return new IntColor(comps, p.mode);
            }
        });
        this.textsC_ = new ColorTextsController(doc, {
            colorType: config.colorType,
            value: this.value,
            viewProps: this.viewProps
        });
        this.view = new ColorPickerView(doc, {
            alphaViews: this.alphaIcs_ ? {
                palette: this.alphaIcs_.palette.view,
                text: this.alphaIcs_.text.view
            } : null,
            hPaletteView: this.hPaletteC_.view,
            supportsAlpha: config.supportsAlpha,
            svPaletteView: this.svPaletteC_.view,
            textsView: this.textsC_.view,
            viewProps: this.viewProps
        });
    }
    get textsController() {
        return this.textsC_;
    }
}
const cn$7 = ClassName('colsw');
class ColorSwatchView {
    constructor(doc, config){
        this.onValueChange_ = this.onValueChange_.bind(this);
        config.value.emitter.on('change', this.onValueChange_);
        this.value = config.value;
        this.element = doc.createElement('div');
        this.element.classList.add(cn$7());
        config.viewProps.bindClassModifiers(this.element);
        const swatchElem = doc.createElement('div');
        swatchElem.classList.add(cn$7('sw'));
        this.element.appendChild(swatchElem);
        this.swatchElem_ = swatchElem;
        const buttonElem = doc.createElement('button');
        buttonElem.classList.add(cn$7('b'));
        config.viewProps.bindDisabled(buttonElem);
        this.element.appendChild(buttonElem);
        this.buttonElement = buttonElem;
        this.update_();
    }
    update_() {
        const value = this.value.rawValue;
        this.swatchElem_.style.backgroundColor = colorToHexRgbaString(value);
    }
    onValueChange_() {
        this.update_();
    }
}
class ColorSwatchController {
    constructor(doc, config){
        this.value = config.value;
        this.viewProps = config.viewProps;
        this.view = new ColorSwatchView(doc, {
            value: this.value,
            viewProps: this.viewProps
        });
    }
}
class ColorController {
    constructor(doc, config){
        this.onButtonBlur_ = this.onButtonBlur_.bind(this);
        this.onButtonClick_ = this.onButtonClick_.bind(this);
        this.onPopupChildBlur_ = this.onPopupChildBlur_.bind(this);
        this.onPopupChildKeydown_ = this.onPopupChildKeydown_.bind(this);
        this.value = config.value;
        this.viewProps = config.viewProps;
        this.foldable_ = Foldable.create(config.expanded);
        this.swatchC_ = new ColorSwatchController(doc, {
            value: this.value,
            viewProps: this.viewProps
        });
        const buttonElem = this.swatchC_.view.buttonElement;
        buttonElem.addEventListener('blur', this.onButtonBlur_);
        buttonElem.addEventListener('click', this.onButtonClick_);
        this.textC_ = new TextController(doc, {
            parser: config.parser,
            props: ValueMap.fromObject({
                formatter: config.formatter
            }),
            value: this.value,
            viewProps: this.viewProps
        });
        this.view = new ColorView(doc, {
            foldable: this.foldable_,
            pickerLayout: config.pickerLayout
        });
        this.view.swatchElement.appendChild(this.swatchC_.view.element);
        this.view.textElement.appendChild(this.textC_.view.element);
        this.popC_ = config.pickerLayout === 'popup' ? new PopupController(doc, {
            viewProps: this.viewProps
        }) : null;
        const pickerC = new ColorPickerController(doc, {
            colorType: config.colorType,
            supportsAlpha: config.supportsAlpha,
            value: this.value,
            viewProps: this.viewProps
        });
        pickerC.view.allFocusableElements.forEach((elem)=>{
            elem.addEventListener('blur', this.onPopupChildBlur_);
            elem.addEventListener('keydown', this.onPopupChildKeydown_);
        });
        this.pickerC_ = pickerC;
        if (this.popC_) {
            this.view.element.appendChild(this.popC_.view.element);
            this.popC_.view.element.appendChild(pickerC.view.element);
            connectValues({
                primary: this.foldable_.value('expanded'),
                secondary: this.popC_.shows,
                forward: (p)=>p,
                backward: (_, s)=>s
            });
        } else if (this.view.pickerElement) {
            this.view.pickerElement.appendChild(this.pickerC_.view.element);
            bindFoldable(this.foldable_, this.view.pickerElement);
        }
    }
    get textController() {
        return this.textC_;
    }
    onButtonBlur_(e) {
        if (!this.popC_) return;
        const elem = this.view.element;
        const nextTarget = forceCast(e.relatedTarget);
        if (!nextTarget || !elem.contains(nextTarget)) this.popC_.shows.rawValue = false;
    }
    onButtonClick_() {
        this.foldable_.set('expanded', !this.foldable_.get('expanded'));
        if (this.foldable_.get('expanded')) this.pickerC_.view.allFocusableElements[0].focus();
    }
    onPopupChildBlur_(ev) {
        if (!this.popC_) return;
        const elem = this.popC_.view.element;
        const nextTarget = findNextTarget(ev);
        if (nextTarget && elem.contains(nextTarget)) return;
        if (nextTarget && nextTarget === this.swatchC_.view.buttonElement && !supportsTouch(elem.ownerDocument)) return;
        this.popC_.shows.rawValue = false;
    }
    onPopupChildKeydown_(ev) {
        if (this.popC_) {
            if (ev.key === 'Escape') this.popC_.shows.rawValue = false;
        } else if (this.view.pickerElement) {
            if (ev.key === 'Escape') this.swatchC_.view.buttonElement.focus();
        }
    }
}
function colorToRgbNumber(value) {
    return removeAlphaComponent(value.getComponents('rgb')).reduce((result, comp)=>{
        return result << 8 | Math.floor(comp) & 0xff;
    }, 0);
}
function colorToRgbaNumber(value) {
    return value.getComponents('rgb').reduce((result, comp, index)=>{
        const hex = Math.floor(index === 3 ? comp * 255 : comp) & 0xff;
        return result << 8 | hex;
    }, 0) >>> 0;
}
function numberToRgbColor(num) {
    return new IntColor([
        num >> 16 & 0xff,
        num >> 8 & 0xff,
        num & 0xff
    ], 'rgb');
}
function numberToRgbaColor(num) {
    return new IntColor([
        num >> 24 & 0xff,
        num >> 16 & 0xff,
        num >> 8 & 0xff,
        mapRange(num & 0xff, 0, 255, 0, 1)
    ], 'rgb');
}
function colorFromRgbNumber(value) {
    if (typeof value !== 'number') return IntColor.black();
    return numberToRgbColor(value);
}
function colorFromRgbaNumber(value) {
    if (typeof value !== 'number') return IntColor.black();
    return numberToRgbaColor(value);
}
function isRgbColorComponent(obj, key) {
    if (typeof obj !== 'object' || isEmpty(obj)) return false;
    return key in obj && typeof obj[key] === 'number';
}
function isRgbColorObject(obj) {
    return isRgbColorComponent(obj, 'r') && isRgbColorComponent(obj, 'g') && isRgbColorComponent(obj, 'b');
}
function isRgbaColorObject(obj) {
    return isRgbColorObject(obj) && isRgbColorComponent(obj, 'a');
}
function isColorObject(obj) {
    return isRgbColorObject(obj);
}
function equalsColor(v1, v2) {
    if (v1.mode !== v2.mode) return false;
    if (v1.type !== v2.type) return false;
    const comps1 = v1.getComponents();
    const comps2 = v2.getComponents();
    for(let i = 0; i < comps1.length; i++){
        if (comps1[i] !== comps2[i]) return false;
    }
    return true;
}
function createColorComponentsFromRgbObject(obj) {
    return 'a' in obj ? [
        obj.r,
        obj.g,
        obj.b,
        obj.a
    ] : [
        obj.r,
        obj.g,
        obj.b
    ];
}
function createColorStringWriter(format) {
    const stringify = findColorStringifier(format);
    return stringify ? (target, value)=>{
        writePrimitive(target, stringify(value));
    } : null;
}
function createColorNumberWriter(supportsAlpha) {
    const colorToNumber = supportsAlpha ? colorToRgbaNumber : colorToRgbNumber;
    return (target, value)=>{
        writePrimitive(target, colorToNumber(value));
    };
}
function writeRgbaColorObject(target, value, type) {
    const cc = mapColorType(value, type);
    const obj = cc.toRgbaObject();
    target.writeProperty('r', obj.r);
    target.writeProperty('g', obj.g);
    target.writeProperty('b', obj.b);
    target.writeProperty('a', obj.a);
}
function writeRgbColorObject(target, value, type) {
    const cc = mapColorType(value, type);
    const obj = cc.toRgbaObject();
    target.writeProperty('r', obj.r);
    target.writeProperty('g', obj.g);
    target.writeProperty('b', obj.b);
}
function createColorObjectWriter(supportsAlpha, type) {
    return (target, inValue)=>{
        if (supportsAlpha) writeRgbaColorObject(target, inValue, type);
        else writeRgbColorObject(target, inValue, type);
    };
}
function shouldSupportAlpha$1(inputParams) {
    var _a;
    if ((_a = inputParams === null || inputParams === void 0 ? void 0 : inputParams.color) === null || _a === void 0 ? void 0 : _a.alpha) return true;
    return false;
}
function createFormatter$1(supportsAlpha) {
    return supportsAlpha ? (v)=>colorToHexRgbaString(v, '0x') : (v)=>colorToHexRgbString(v, '0x');
}
function isForColor(params) {
    if ('color' in params) return true;
    if (params.view === 'color') return true;
    return false;
}
const NumberColorInputPlugin = createPlugin({
    id: 'input-color-number',
    type: 'input',
    accept: (value, params)=>{
        if (typeof value !== 'number') return null;
        if (!isForColor(params)) return null;
        const result = parseColorInputParams(params);
        return result ? {
            initialValue: value,
            params: Object.assign(Object.assign({}, result), {
                supportsAlpha: shouldSupportAlpha$1(params)
            })
        } : null;
    },
    binding: {
        reader: (args)=>{
            return args.params.supportsAlpha ? colorFromRgbaNumber : colorFromRgbNumber;
        },
        equals: equalsColor,
        writer: (args)=>{
            return createColorNumberWriter(args.params.supportsAlpha);
        }
    },
    controller: (args)=>{
        var _a, _b;
        return new ColorController(args.document, {
            colorType: 'int',
            expanded: (_a = args.params.expanded) !== null && _a !== void 0 ? _a : false,
            formatter: createFormatter$1(args.params.supportsAlpha),
            parser: createColorStringParser('int'),
            pickerLayout: (_b = args.params.picker) !== null && _b !== void 0 ? _b : 'popup',
            supportsAlpha: args.params.supportsAlpha,
            value: args.value,
            viewProps: args.viewProps
        });
    }
});
function colorFromObject(value, type) {
    if (!isColorObject(value)) return mapColorType(IntColor.black(), type);
    if (type === 'int') {
        const comps = createColorComponentsFromRgbObject(value);
        return new IntColor(comps, 'rgb');
    }
    if (type === 'float') {
        const comps = createColorComponentsFromRgbObject(value);
        return new FloatColor(comps, 'rgb');
    }
    return mapColorType(IntColor.black(), 'int');
}
function shouldSupportAlpha(initialValue) {
    return isRgbaColorObject(initialValue);
}
function createColorObjectBindingReader(type) {
    return (value)=>{
        const c = colorFromObject(value, type);
        return mapColorType(c, 'int');
    };
}
function createColorObjectFormatter(supportsAlpha, type) {
    return (value)=>{
        if (supportsAlpha) return colorToObjectRgbaString(value, type);
        return colorToObjectRgbString(value, type);
    };
}
const ObjectColorInputPlugin = createPlugin({
    id: 'input-color-object',
    type: 'input',
    accept: (value, params)=>{
        var _a;
        if (!isColorObject(value)) return null;
        const result = parseColorInputParams(params);
        return result ? {
            initialValue: value,
            params: Object.assign(Object.assign({}, result), {
                colorType: (_a = extractColorType(params)) !== null && _a !== void 0 ? _a : 'int'
            })
        } : null;
    },
    binding: {
        reader: (args)=>createColorObjectBindingReader(args.params.colorType),
        equals: equalsColor,
        writer: (args)=>createColorObjectWriter(shouldSupportAlpha(args.initialValue), args.params.colorType)
    },
    controller: (args)=>{
        var _a, _b;
        const supportsAlpha = isRgbaColorObject(args.initialValue);
        return new ColorController(args.document, {
            colorType: args.params.colorType,
            expanded: (_a = args.params.expanded) !== null && _a !== void 0 ? _a : false,
            formatter: createColorObjectFormatter(supportsAlpha, args.params.colorType),
            parser: createColorStringParser('int'),
            pickerLayout: (_b = args.params.picker) !== null && _b !== void 0 ? _b : 'popup',
            supportsAlpha: supportsAlpha,
            value: args.value,
            viewProps: args.viewProps
        });
    }
});
const StringColorInputPlugin = createPlugin({
    id: 'input-color-string',
    type: 'input',
    accept: (value, params)=>{
        if (typeof value !== 'string') return null;
        if (params.view === 'text') return null;
        const format = detectStringColorFormat(value, extractColorType(params));
        if (!format) return null;
        const stringifier = findColorStringifier(format);
        if (!stringifier) return null;
        const result = parseColorInputParams(params);
        return result ? {
            initialValue: value,
            params: Object.assign(Object.assign({}, result), {
                format: format,
                stringifier: stringifier
            })
        } : null;
    },
    binding: {
        reader: ()=>readIntColorString,
        equals: equalsColor,
        writer: (args)=>{
            const writer = createColorStringWriter(args.params.format);
            if (!writer) throw TpError.notBindable();
            return writer;
        }
    },
    controller: (args)=>{
        var _a, _b;
        return new ColorController(args.document, {
            colorType: args.params.format.type,
            expanded: (_a = args.params.expanded) !== null && _a !== void 0 ? _a : false,
            formatter: args.params.stringifier,
            parser: createColorStringParser('int'),
            pickerLayout: (_b = args.params.picker) !== null && _b !== void 0 ? _b : 'popup',
            supportsAlpha: args.params.format.alpha,
            value: args.value,
            viewProps: args.viewProps
        });
    }
});
class PointNdConstraint {
    constructor(config){
        this.components = config.components;
        this.asm_ = config.assembly;
    }
    constrain(value) {
        const comps = this.asm_.toComponents(value).map((comp, index)=>{
            var _a, _b;
            return (_b = (_a = this.components[index]) === null || _a === void 0 ? void 0 : _a.constrain(comp)) !== null && _b !== void 0 ? _b : comp;
        });
        return this.asm_.fromComponents(comps);
    }
}
const cn$6 = ClassName('pndtxt');
class PointNdTextView {
    constructor(doc, config){
        this.textViews = config.textViews;
        this.element = doc.createElement('div');
        this.element.classList.add(cn$6());
        this.textViews.forEach((v)=>{
            const axisElem = doc.createElement('div');
            axisElem.classList.add(cn$6('a'));
            axisElem.appendChild(v.element);
            this.element.appendChild(axisElem);
        });
    }
}
function createAxisController(doc, config, index) {
    return new NumberTextController(doc, {
        arrayPosition: index === 0 ? 'fst' : index === config.axes.length - 1 ? 'lst' : 'mid',
        parser: config.parser,
        props: config.axes[index].textProps,
        value: createValue(0, {
            constraint: config.axes[index].constraint
        }),
        viewProps: config.viewProps
    });
}
class PointNdTextController {
    constructor(doc, config){
        this.value = config.value;
        this.viewProps = config.viewProps;
        this.acs_ = config.axes.map((_, index)=>createAxisController(doc, config, index));
        this.acs_.forEach((c, index)=>{
            connectValues({
                primary: this.value,
                secondary: c.value,
                forward: (p)=>config.assembly.toComponents(p)[index],
                backward: (p, s)=>{
                    const comps = config.assembly.toComponents(p);
                    comps[index] = s;
                    return config.assembly.fromComponents(comps);
                }
            });
        });
        this.view = new PointNdTextView(doc, {
            textViews: this.acs_.map((ac)=>ac.view)
        });
    }
    get textControllers() {
        return this.acs_;
    }
}
class SliderInputBindingApi extends BindingApi {
    get max() {
        return this.controller.valueController.sliderController.props.get('max');
    }
    set max(max) {
        this.controller.valueController.sliderController.props.set('max', max);
    }
    get min() {
        return this.controller.valueController.sliderController.props.get('min');
    }
    set min(max) {
        this.controller.valueController.sliderController.props.set('min', max);
    }
}
function createConstraint$4(params, initialValue) {
    const constraints = [];
    const sc = createStepConstraint(params, initialValue);
    if (sc) constraints.push(sc);
    const rc = createRangeConstraint(params);
    if (rc) constraints.push(rc);
    const lc = createListConstraint(params.options);
    if (lc) constraints.push(lc);
    return new CompositeConstraint(constraints);
}
const NumberInputPlugin = createPlugin({
    id: 'input-number',
    type: 'input',
    accept: (value, params)=>{
        if (typeof value !== 'number') return null;
        const result = parseRecord(params, (p)=>Object.assign(Object.assign({}, createNumberTextInputParamsParser(p)), {
                options: p.optional.custom(parseListOptions),
                readonly: p.optional.constant(false)
            }));
        return result ? {
            initialValue: value,
            params: result
        } : null;
    },
    binding: {
        reader: (_args)=>numberFromUnknown,
        constraint: (args)=>createConstraint$4(args.params, args.initialValue),
        writer: (_args)=>writePrimitive
    },
    controller: (args)=>{
        const value = args.value;
        const c = args.constraint;
        const lc = c && findConstraint(c, ListConstraint);
        if (lc) return new ListController(args.document, {
            props: new ValueMap({
                options: lc.values.value('options')
            }),
            value: value,
            viewProps: args.viewProps
        });
        const textPropsObj = createNumberTextPropsObject(args.params, value.rawValue);
        const drc = c && findConstraint(c, DefiniteRangeConstraint);
        if (drc) return new SliderTextController(args.document, Object.assign(Object.assign({}, createSliderTextProps(Object.assign(Object.assign({}, textPropsObj), {
            keyScale: createValue(textPropsObj.keyScale),
            max: drc.values.value('max'),
            min: drc.values.value('min')
        }))), {
            parser: parseNumber,
            value: value,
            viewProps: args.viewProps
        }));
        return new NumberTextController(args.document, {
            parser: parseNumber,
            props: ValueMap.fromObject(textPropsObj),
            value: value,
            viewProps: args.viewProps
        });
    },
    api (args) {
        if (typeof args.controller.value.rawValue !== 'number') return null;
        if (args.controller.valueController instanceof SliderTextController) return new SliderInputBindingApi(args.controller);
        if (args.controller.valueController instanceof ListController) return new ListInputBindingApi(args.controller);
        return null;
    }
});
class Point2d {
    constructor(x = 0, y = 0){
        this.x = x;
        this.y = y;
    }
    getComponents() {
        return [
            this.x,
            this.y
        ];
    }
    static isObject(obj) {
        if (isEmpty(obj)) return false;
        const x = obj.x;
        const y = obj.y;
        if (typeof x !== 'number' || typeof y !== 'number') return false;
        return true;
    }
    static equals(v1, v2) {
        return v1.x === v2.x && v1.y === v2.y;
    }
    toObject() {
        return {
            x: this.x,
            y: this.y
        };
    }
}
const Point2dAssembly = {
    toComponents: (p)=>p.getComponents(),
    fromComponents: (comps)=>new Point2d(...comps)
};
const cn$5 = ClassName('p2d');
class Point2dView {
    constructor(doc, config){
        this.element = doc.createElement('div');
        this.element.classList.add(cn$5());
        config.viewProps.bindClassModifiers(this.element);
        bindValue(config.expanded, valueToClassName(this.element, cn$5(undefined, 'expanded')));
        const headElem = doc.createElement('div');
        headElem.classList.add(cn$5('h'));
        this.element.appendChild(headElem);
        const buttonElem = doc.createElement('button');
        buttonElem.classList.add(cn$5('b'));
        buttonElem.appendChild(createSvgIconElement(doc, 'p2dpad'));
        config.viewProps.bindDisabled(buttonElem);
        headElem.appendChild(buttonElem);
        this.buttonElement = buttonElem;
        const textElem = doc.createElement('div');
        textElem.classList.add(cn$5('t'));
        headElem.appendChild(textElem);
        this.textElement = textElem;
        if (config.pickerLayout === 'inline') {
            const pickerElem = doc.createElement('div');
            pickerElem.classList.add(cn$5('p'));
            this.element.appendChild(pickerElem);
            this.pickerElement = pickerElem;
        } else this.pickerElement = null;
    }
}
const cn$4 = ClassName('p2dp');
class Point2dPickerView {
    constructor(doc, config){
        this.onFoldableChange_ = this.onFoldableChange_.bind(this);
        this.onPropsChange_ = this.onPropsChange_.bind(this);
        this.onValueChange_ = this.onValueChange_.bind(this);
        this.props_ = config.props;
        this.props_.emitter.on('change', this.onPropsChange_);
        this.element = doc.createElement('div');
        this.element.classList.add(cn$4());
        if (config.layout === 'popup') this.element.classList.add(cn$4(undefined, 'p'));
        config.viewProps.bindClassModifiers(this.element);
        const padElem = doc.createElement('div');
        padElem.classList.add(cn$4('p'));
        config.viewProps.bindTabIndex(padElem);
        this.element.appendChild(padElem);
        this.padElement = padElem;
        const svgElem = doc.createElementNS(SVG_NS, 'svg');
        svgElem.classList.add(cn$4('g'));
        this.padElement.appendChild(svgElem);
        this.svgElem_ = svgElem;
        const xAxisElem = doc.createElementNS(SVG_NS, 'line');
        xAxisElem.classList.add(cn$4('ax'));
        xAxisElem.setAttributeNS(null, 'x1', '0');
        xAxisElem.setAttributeNS(null, 'y1', '50%');
        xAxisElem.setAttributeNS(null, 'x2', '100%');
        xAxisElem.setAttributeNS(null, 'y2', '50%');
        this.svgElem_.appendChild(xAxisElem);
        const yAxisElem = doc.createElementNS(SVG_NS, 'line');
        yAxisElem.classList.add(cn$4('ax'));
        yAxisElem.setAttributeNS(null, 'x1', '50%');
        yAxisElem.setAttributeNS(null, 'y1', '0');
        yAxisElem.setAttributeNS(null, 'x2', '50%');
        yAxisElem.setAttributeNS(null, 'y2', '100%');
        this.svgElem_.appendChild(yAxisElem);
        const lineElem = doc.createElementNS(SVG_NS, 'line');
        lineElem.classList.add(cn$4('l'));
        lineElem.setAttributeNS(null, 'x1', '50%');
        lineElem.setAttributeNS(null, 'y1', '50%');
        this.svgElem_.appendChild(lineElem);
        this.lineElem_ = lineElem;
        const markerElem = doc.createElement('div');
        markerElem.classList.add(cn$4('m'));
        this.padElement.appendChild(markerElem);
        this.markerElem_ = markerElem;
        config.value.emitter.on('change', this.onValueChange_);
        this.value = config.value;
        this.update_();
    }
    get allFocusableElements() {
        return [
            this.padElement
        ];
    }
    update_() {
        const [x, y] = this.value.rawValue.getComponents();
        const max = this.props_.get('max');
        const px = mapRange(x, -max, +max, 0, 100);
        const py = mapRange(y, -max, +max, 0, 100);
        const ipy = this.props_.get('invertsY') ? 100 - py : py;
        this.lineElem_.setAttributeNS(null, 'x2', `${px}%`);
        this.lineElem_.setAttributeNS(null, 'y2', `${ipy}%`);
        this.markerElem_.style.left = `${px}%`;
        this.markerElem_.style.top = `${ipy}%`;
    }
    onValueChange_() {
        this.update_();
    }
    onPropsChange_() {
        this.update_();
    }
    onFoldableChange_() {
        this.update_();
    }
}
function computeOffset(ev, keyScales, invertsY) {
    return [
        getStepForKey(keyScales[0], getHorizontalStepKeys(ev)),
        getStepForKey(keyScales[1], getVerticalStepKeys(ev)) * (invertsY ? 1 : -1)
    ];
}
class Point2dPickerController {
    constructor(doc, config){
        this.onPadKeyDown_ = this.onPadKeyDown_.bind(this);
        this.onPadKeyUp_ = this.onPadKeyUp_.bind(this);
        this.onPointerDown_ = this.onPointerDown_.bind(this);
        this.onPointerMove_ = this.onPointerMove_.bind(this);
        this.onPointerUp_ = this.onPointerUp_.bind(this);
        this.props = config.props;
        this.value = config.value;
        this.viewProps = config.viewProps;
        this.view = new Point2dPickerView(doc, {
            layout: config.layout,
            props: this.props,
            value: this.value,
            viewProps: this.viewProps
        });
        this.ptHandler_ = new PointerHandler(this.view.padElement);
        this.ptHandler_.emitter.on('down', this.onPointerDown_);
        this.ptHandler_.emitter.on('move', this.onPointerMove_);
        this.ptHandler_.emitter.on('up', this.onPointerUp_);
        this.view.padElement.addEventListener('keydown', this.onPadKeyDown_);
        this.view.padElement.addEventListener('keyup', this.onPadKeyUp_);
    }
    handlePointerEvent_(d, opts) {
        if (!d.point) return;
        const max = this.props.get('max');
        const px = mapRange(d.point.x, 0, d.bounds.width, -max, +max);
        const py = mapRange(this.props.get('invertsY') ? d.bounds.height - d.point.y : d.point.y, 0, d.bounds.height, -max, +max);
        this.value.setRawValue(new Point2d(px, py), opts);
    }
    onPointerDown_(ev) {
        this.handlePointerEvent_(ev.data, {
            forceEmit: false,
            last: false
        });
    }
    onPointerMove_(ev) {
        this.handlePointerEvent_(ev.data, {
            forceEmit: false,
            last: false
        });
    }
    onPointerUp_(ev) {
        this.handlePointerEvent_(ev.data, {
            forceEmit: true,
            last: true
        });
    }
    onPadKeyDown_(ev) {
        if (isArrowKey(ev.key)) ev.preventDefault();
        const [dx, dy] = computeOffset(ev, [
            this.props.get('xKeyScale'),
            this.props.get('yKeyScale')
        ], this.props.get('invertsY'));
        if (dx === 0 && dy === 0) return;
        this.value.setRawValue(new Point2d(this.value.rawValue.x + dx, this.value.rawValue.y + dy), {
            forceEmit: false,
            last: false
        });
    }
    onPadKeyUp_(ev) {
        const [dx, dy] = computeOffset(ev, [
            this.props.get('xKeyScale'),
            this.props.get('yKeyScale')
        ], this.props.get('invertsY'));
        if (dx === 0 && dy === 0) return;
        this.value.setRawValue(this.value.rawValue, {
            forceEmit: true,
            last: true
        });
    }
}
class Point2dController {
    constructor(doc, config){
        var _a, _b;
        this.onPopupChildBlur_ = this.onPopupChildBlur_.bind(this);
        this.onPopupChildKeydown_ = this.onPopupChildKeydown_.bind(this);
        this.onPadButtonBlur_ = this.onPadButtonBlur_.bind(this);
        this.onPadButtonClick_ = this.onPadButtonClick_.bind(this);
        this.value = config.value;
        this.viewProps = config.viewProps;
        this.foldable_ = Foldable.create(config.expanded);
        this.popC_ = config.pickerLayout === 'popup' ? new PopupController(doc, {
            viewProps: this.viewProps
        }) : null;
        const padC = new Point2dPickerController(doc, {
            layout: config.pickerLayout,
            props: new ValueMap({
                invertsY: createValue(config.invertsY),
                max: createValue(config.max),
                xKeyScale: config.axes[0].textProps.value('keyScale'),
                yKeyScale: config.axes[1].textProps.value('keyScale')
            }),
            value: this.value,
            viewProps: this.viewProps
        });
        padC.view.allFocusableElements.forEach((elem)=>{
            elem.addEventListener('blur', this.onPopupChildBlur_);
            elem.addEventListener('keydown', this.onPopupChildKeydown_);
        });
        this.pickerC_ = padC;
        this.textC_ = new PointNdTextController(doc, {
            assembly: Point2dAssembly,
            axes: config.axes,
            parser: config.parser,
            value: this.value,
            viewProps: this.viewProps
        });
        this.view = new Point2dView(doc, {
            expanded: this.foldable_.value('expanded'),
            pickerLayout: config.pickerLayout,
            viewProps: this.viewProps
        });
        this.view.textElement.appendChild(this.textC_.view.element);
        (_a = this.view.buttonElement) === null || _a === void 0 || _a.addEventListener('blur', this.onPadButtonBlur_);
        (_b = this.view.buttonElement) === null || _b === void 0 || _b.addEventListener('click', this.onPadButtonClick_);
        if (this.popC_) {
            this.view.element.appendChild(this.popC_.view.element);
            this.popC_.view.element.appendChild(this.pickerC_.view.element);
            connectValues({
                primary: this.foldable_.value('expanded'),
                secondary: this.popC_.shows,
                forward: (p)=>p,
                backward: (_, s)=>s
            });
        } else if (this.view.pickerElement) {
            this.view.pickerElement.appendChild(this.pickerC_.view.element);
            bindFoldable(this.foldable_, this.view.pickerElement);
        }
    }
    get textController() {
        return this.textC_;
    }
    onPadButtonBlur_(e) {
        if (!this.popC_) return;
        const elem = this.view.element;
        const nextTarget = forceCast(e.relatedTarget);
        if (!nextTarget || !elem.contains(nextTarget)) this.popC_.shows.rawValue = false;
    }
    onPadButtonClick_() {
        this.foldable_.set('expanded', !this.foldable_.get('expanded'));
        if (this.foldable_.get('expanded')) this.pickerC_.view.allFocusableElements[0].focus();
    }
    onPopupChildBlur_(ev) {
        if (!this.popC_) return;
        const elem = this.popC_.view.element;
        const nextTarget = findNextTarget(ev);
        if (nextTarget && elem.contains(nextTarget)) return;
        if (nextTarget && nextTarget === this.view.buttonElement && !supportsTouch(elem.ownerDocument)) return;
        this.popC_.shows.rawValue = false;
    }
    onPopupChildKeydown_(ev) {
        if (this.popC_) {
            if (ev.key === 'Escape') this.popC_.shows.rawValue = false;
        } else if (this.view.pickerElement) {
            if (ev.key === 'Escape') this.view.buttonElement.focus();
        }
    }
}
function point2dFromUnknown(value) {
    return Point2d.isObject(value) ? new Point2d(value.x, value.y) : new Point2d();
}
function writePoint2d(target, value) {
    target.writeProperty('x', value.x);
    target.writeProperty('y', value.y);
}
function createConstraint$3(params, initialValue) {
    return new PointNdConstraint({
        assembly: Point2dAssembly,
        components: [
            createDimensionConstraint(Object.assign(Object.assign({}, params), params.x), initialValue.x),
            createDimensionConstraint(Object.assign(Object.assign({}, params), params.y), initialValue.y)
        ]
    });
}
function getSuitableMaxDimensionValue(params, rawValue) {
    var _a, _b;
    if (!isEmpty(params.min) || !isEmpty(params.max)) return Math.max(Math.abs((_a = params.min) !== null && _a !== void 0 ? _a : 0), Math.abs((_b = params.max) !== null && _b !== void 0 ? _b : 0));
    const step = getSuitableKeyScale(params);
    return Math.max(Math.abs(step) * 10, Math.abs(rawValue) * 10);
}
function getSuitableMax(params, initialValue) {
    var _a, _b;
    const xr = getSuitableMaxDimensionValue(deepMerge(params, (_a = params.x) !== null && _a !== void 0 ? _a : {}), initialValue.x);
    const yr = getSuitableMaxDimensionValue(deepMerge(params, (_b = params.y) !== null && _b !== void 0 ? _b : {}), initialValue.y);
    return Math.max(xr, yr);
}
function shouldInvertY(params) {
    if (!('y' in params)) return false;
    const yParams = params.y;
    if (!yParams) return false;
    return 'inverted' in yParams ? !!yParams.inverted : false;
}
const Point2dInputPlugin = createPlugin({
    id: 'input-point2d',
    type: 'input',
    accept: (value, params)=>{
        if (!Point2d.isObject(value)) return null;
        const result = parseRecord(params, (p)=>Object.assign(Object.assign({}, createPointDimensionParser(p)), {
                expanded: p.optional.boolean,
                picker: p.optional.custom(parsePickerLayout),
                readonly: p.optional.constant(false),
                x: p.optional.custom(parsePointDimensionParams),
                y: p.optional.object(Object.assign(Object.assign({}, createPointDimensionParser(p)), {
                    inverted: p.optional.boolean
                }))
            }));
        return result ? {
            initialValue: value,
            params: result
        } : null;
    },
    binding: {
        reader: ()=>point2dFromUnknown,
        constraint: (args)=>createConstraint$3(args.params, args.initialValue),
        equals: Point2d.equals,
        writer: ()=>writePoint2d
    },
    controller: (args)=>{
        var _a, _b;
        const doc = args.document;
        const value = args.value;
        const c = args.constraint;
        const dParams = [
            args.params.x,
            args.params.y
        ];
        return new Point2dController(doc, {
            axes: value.rawValue.getComponents().map((comp, i)=>{
                var _a;
                return createPointAxis({
                    constraint: c.components[i],
                    initialValue: comp,
                    params: deepMerge(args.params, (_a = dParams[i]) !== null && _a !== void 0 ? _a : {})
                });
            }),
            expanded: (_a = args.params.expanded) !== null && _a !== void 0 ? _a : false,
            invertsY: shouldInvertY(args.params),
            max: getSuitableMax(args.params, value.rawValue),
            parser: parseNumber,
            pickerLayout: (_b = args.params.picker) !== null && _b !== void 0 ? _b : 'popup',
            value: value,
            viewProps: args.viewProps
        });
    }
});
class Point3d {
    constructor(x = 0, y = 0, z = 0){
        this.x = x;
        this.y = y;
        this.z = z;
    }
    getComponents() {
        return [
            this.x,
            this.y,
            this.z
        ];
    }
    static isObject(obj) {
        if (isEmpty(obj)) return false;
        const x = obj.x;
        const y = obj.y;
        const z = obj.z;
        if (typeof x !== 'number' || typeof y !== 'number' || typeof z !== 'number') return false;
        return true;
    }
    static equals(v1, v2) {
        return v1.x === v2.x && v1.y === v2.y && v1.z === v2.z;
    }
    toObject() {
        return {
            x: this.x,
            y: this.y,
            z: this.z
        };
    }
}
const Point3dAssembly = {
    toComponents: (p)=>p.getComponents(),
    fromComponents: (comps)=>new Point3d(...comps)
};
function point3dFromUnknown(value) {
    return Point3d.isObject(value) ? new Point3d(value.x, value.y, value.z) : new Point3d();
}
function writePoint3d(target, value) {
    target.writeProperty('x', value.x);
    target.writeProperty('y', value.y);
    target.writeProperty('z', value.z);
}
function createConstraint$2(params, initialValue) {
    return new PointNdConstraint({
        assembly: Point3dAssembly,
        components: [
            createDimensionConstraint(Object.assign(Object.assign({}, params), params.x), initialValue.x),
            createDimensionConstraint(Object.assign(Object.assign({}, params), params.y), initialValue.y),
            createDimensionConstraint(Object.assign(Object.assign({}, params), params.z), initialValue.z)
        ]
    });
}
const Point3dInputPlugin = createPlugin({
    id: 'input-point3d',
    type: 'input',
    accept: (value, params)=>{
        if (!Point3d.isObject(value)) return null;
        const result = parseRecord(params, (p)=>Object.assign(Object.assign({}, createPointDimensionParser(p)), {
                readonly: p.optional.constant(false),
                x: p.optional.custom(parsePointDimensionParams),
                y: p.optional.custom(parsePointDimensionParams),
                z: p.optional.custom(parsePointDimensionParams)
            }));
        return result ? {
            initialValue: value,
            params: result
        } : null;
    },
    binding: {
        reader: (_args)=>point3dFromUnknown,
        constraint: (args)=>createConstraint$2(args.params, args.initialValue),
        equals: Point3d.equals,
        writer: (_args)=>writePoint3d
    },
    controller: (args)=>{
        const value = args.value;
        const c = args.constraint;
        const dParams = [
            args.params.x,
            args.params.y,
            args.params.z
        ];
        return new PointNdTextController(args.document, {
            assembly: Point3dAssembly,
            axes: value.rawValue.getComponents().map((comp, i)=>{
                var _a;
                return createPointAxis({
                    constraint: c.components[i],
                    initialValue: comp,
                    params: deepMerge(args.params, (_a = dParams[i]) !== null && _a !== void 0 ? _a : {})
                });
            }),
            parser: parseNumber,
            value: value,
            viewProps: args.viewProps
        });
    }
});
class Point4d {
    constructor(x = 0, y = 0, z = 0, w = 0){
        this.x = x;
        this.y = y;
        this.z = z;
        this.w = w;
    }
    getComponents() {
        return [
            this.x,
            this.y,
            this.z,
            this.w
        ];
    }
    static isObject(obj) {
        if (isEmpty(obj)) return false;
        const x = obj.x;
        const y = obj.y;
        const z = obj.z;
        const w = obj.w;
        if (typeof x !== 'number' || typeof y !== 'number' || typeof z !== 'number' || typeof w !== 'number') return false;
        return true;
    }
    static equals(v1, v2) {
        return v1.x === v2.x && v1.y === v2.y && v1.z === v2.z && v1.w === v2.w;
    }
    toObject() {
        return {
            x: this.x,
            y: this.y,
            z: this.z,
            w: this.w
        };
    }
}
const Point4dAssembly = {
    toComponents: (p)=>p.getComponents(),
    fromComponents: (comps)=>new Point4d(...comps)
};
function point4dFromUnknown(value) {
    return Point4d.isObject(value) ? new Point4d(value.x, value.y, value.z, value.w) : new Point4d();
}
function writePoint4d(target, value) {
    target.writeProperty('x', value.x);
    target.writeProperty('y', value.y);
    target.writeProperty('z', value.z);
    target.writeProperty('w', value.w);
}
function createConstraint$1(params, initialValue) {
    return new PointNdConstraint({
        assembly: Point4dAssembly,
        components: [
            createDimensionConstraint(Object.assign(Object.assign({}, params), params.x), initialValue.x),
            createDimensionConstraint(Object.assign(Object.assign({}, params), params.y), initialValue.y),
            createDimensionConstraint(Object.assign(Object.assign({}, params), params.z), initialValue.z),
            createDimensionConstraint(Object.assign(Object.assign({}, params), params.w), initialValue.w)
        ]
    });
}
const Point4dInputPlugin = createPlugin({
    id: 'input-point4d',
    type: 'input',
    accept: (value, params)=>{
        if (!Point4d.isObject(value)) return null;
        const result = parseRecord(params, (p)=>Object.assign(Object.assign({}, createPointDimensionParser(p)), {
                readonly: p.optional.constant(false),
                w: p.optional.custom(parsePointDimensionParams),
                x: p.optional.custom(parsePointDimensionParams),
                y: p.optional.custom(parsePointDimensionParams),
                z: p.optional.custom(parsePointDimensionParams)
            }));
        return result ? {
            initialValue: value,
            params: result
        } : null;
    },
    binding: {
        reader: (_args)=>point4dFromUnknown,
        constraint: (args)=>createConstraint$1(args.params, args.initialValue),
        equals: Point4d.equals,
        writer: (_args)=>writePoint4d
    },
    controller: (args)=>{
        const value = args.value;
        const c = args.constraint;
        const dParams = [
            args.params.x,
            args.params.y,
            args.params.z,
            args.params.w
        ];
        return new PointNdTextController(args.document, {
            assembly: Point4dAssembly,
            axes: value.rawValue.getComponents().map((comp, i)=>{
                var _a;
                return createPointAxis({
                    constraint: c.components[i],
                    initialValue: comp,
                    params: deepMerge(args.params, (_a = dParams[i]) !== null && _a !== void 0 ? _a : {})
                });
            }),
            parser: parseNumber,
            value: value,
            viewProps: args.viewProps
        });
    }
});
function createConstraint(params) {
    const constraints = [];
    const lc = createListConstraint(params.options);
    if (lc) constraints.push(lc);
    return new CompositeConstraint(constraints);
}
const StringInputPlugin = createPlugin({
    id: 'input-string',
    type: 'input',
    accept: (value, params)=>{
        if (typeof value !== 'string') return null;
        const result = parseRecord(params, (p)=>({
                readonly: p.optional.constant(false),
                options: p.optional.custom(parseListOptions)
            }));
        return result ? {
            initialValue: value,
            params: result
        } : null;
    },
    binding: {
        reader: (_args)=>stringFromUnknown,
        constraint: (args)=>createConstraint(args.params),
        writer: (_args)=>writePrimitive
    },
    controller: (args)=>{
        const doc = args.document;
        const value = args.value;
        const c = args.constraint;
        const lc = c && findConstraint(c, ListConstraint);
        if (lc) return new ListController(doc, {
            props: new ValueMap({
                options: lc.values.value('options')
            }),
            value: value,
            viewProps: args.viewProps
        });
        return new TextController(doc, {
            parser: (v)=>v,
            props: ValueMap.fromObject({
                formatter: formatString
            }),
            value: value,
            viewProps: args.viewProps
        });
    },
    api (args) {
        if (typeof args.controller.value.rawValue !== 'string') return null;
        if (args.controller.valueController instanceof ListController) return new ListInputBindingApi(args.controller);
        return null;
    }
});
const Constants = {
    monitor: {
        defaultInterval: 200,
        defaultRows: 3
    }
};
const cn$3 = ClassName('mll');
class MultiLogView {
    constructor(doc, config){
        this.onValueUpdate_ = this.onValueUpdate_.bind(this);
        this.formatter_ = config.formatter;
        this.element = doc.createElement('div');
        this.element.classList.add(cn$3());
        config.viewProps.bindClassModifiers(this.element);
        const textareaElem = doc.createElement('textarea');
        textareaElem.classList.add(cn$3('i'));
        textareaElem.style.height = `calc(var(${getCssVar('containerUnitSize')}) * ${config.rows})`;
        textareaElem.readOnly = true;
        config.viewProps.bindDisabled(textareaElem);
        this.element.appendChild(textareaElem);
        this.textareaElem_ = textareaElem;
        config.value.emitter.on('change', this.onValueUpdate_);
        this.value = config.value;
        this.update_();
    }
    update_() {
        const elem = this.textareaElem_;
        const shouldScroll = elem.scrollTop === elem.scrollHeight - elem.clientHeight;
        const lines = [];
        this.value.rawValue.forEach((value)=>{
            if (value !== undefined) lines.push(this.formatter_(value));
        });
        elem.textContent = lines.join('\n');
        if (shouldScroll) elem.scrollTop = elem.scrollHeight;
    }
    onValueUpdate_() {
        this.update_();
    }
}
class MultiLogController {
    constructor(doc, config){
        this.value = config.value;
        this.viewProps = config.viewProps;
        this.view = new MultiLogView(doc, {
            formatter: config.formatter,
            rows: config.rows,
            value: this.value,
            viewProps: this.viewProps
        });
    }
}
const cn$2 = ClassName('sgl');
class SingleLogView {
    constructor(doc, config){
        this.onValueUpdate_ = this.onValueUpdate_.bind(this);
        this.formatter_ = config.formatter;
        this.element = doc.createElement('div');
        this.element.classList.add(cn$2());
        config.viewProps.bindClassModifiers(this.element);
        const inputElem = doc.createElement('input');
        inputElem.classList.add(cn$2('i'));
        inputElem.readOnly = true;
        inputElem.type = 'text';
        config.viewProps.bindDisabled(inputElem);
        this.element.appendChild(inputElem);
        this.inputElement = inputElem;
        config.value.emitter.on('change', this.onValueUpdate_);
        this.value = config.value;
        this.update_();
    }
    update_() {
        const values = this.value.rawValue;
        const lastValue = values[values.length - 1];
        this.inputElement.value = lastValue !== undefined ? this.formatter_(lastValue) : '';
    }
    onValueUpdate_() {
        this.update_();
    }
}
class SingleLogController {
    constructor(doc, config){
        this.value = config.value;
        this.viewProps = config.viewProps;
        this.view = new SingleLogView(doc, {
            formatter: config.formatter,
            value: this.value,
            viewProps: this.viewProps
        });
    }
}
const BooleanMonitorPlugin = createPlugin({
    id: 'monitor-bool',
    type: 'monitor',
    accept: (value, params)=>{
        if (typeof value !== 'boolean') return null;
        const result = parseRecord(params, (p)=>({
                readonly: p.required.constant(true),
                rows: p.optional.number
            }));
        return result ? {
            initialValue: value,
            params: result
        } : null;
    },
    binding: {
        reader: (_args)=>boolFromUnknown
    },
    controller: (args)=>{
        var _a;
        if (args.value.rawValue.length === 1) return new SingleLogController(args.document, {
            formatter: BooleanFormatter,
            value: args.value,
            viewProps: args.viewProps
        });
        return new MultiLogController(args.document, {
            formatter: BooleanFormatter,
            rows: (_a = args.params.rows) !== null && _a !== void 0 ? _a : Constants.monitor.defaultRows,
            value: args.value,
            viewProps: args.viewProps
        });
    }
});
class GraphLogMonitorBindingApi extends BindingApi {
    get max() {
        return this.controller.valueController.props.get('max');
    }
    set max(max) {
        this.controller.valueController.props.set('max', max);
    }
    get min() {
        return this.controller.valueController.props.get('min');
    }
    set min(min) {
        this.controller.valueController.props.set('min', min);
    }
}
const cn$1 = ClassName('grl');
class GraphLogView {
    constructor(doc, config){
        this.onCursorChange_ = this.onCursorChange_.bind(this);
        this.onValueUpdate_ = this.onValueUpdate_.bind(this);
        this.element = doc.createElement('div');
        this.element.classList.add(cn$1());
        config.viewProps.bindClassModifiers(this.element);
        this.formatter_ = config.formatter;
        this.props_ = config.props;
        this.cursor_ = config.cursor;
        this.cursor_.emitter.on('change', this.onCursorChange_);
        const svgElem = doc.createElementNS(SVG_NS, 'svg');
        svgElem.classList.add(cn$1('g'));
        svgElem.style.height = `calc(var(${getCssVar('containerUnitSize')}) * ${config.rows})`;
        this.element.appendChild(svgElem);
        this.svgElem_ = svgElem;
        const lineElem = doc.createElementNS(SVG_NS, 'polyline');
        this.svgElem_.appendChild(lineElem);
        this.lineElem_ = lineElem;
        const tooltipElem = doc.createElement('div');
        tooltipElem.classList.add(cn$1('t'), ClassName('tt')());
        this.element.appendChild(tooltipElem);
        this.tooltipElem_ = tooltipElem;
        config.value.emitter.on('change', this.onValueUpdate_);
        this.value = config.value;
        this.update_();
    }
    get graphElement() {
        return this.svgElem_;
    }
    update_() {
        const { clientWidth: w, clientHeight: h } = this.element;
        const maxIndex = this.value.rawValue.length - 1;
        const min = this.props_.get('min');
        const max = this.props_.get('max');
        const points = [];
        this.value.rawValue.forEach((v, index)=>{
            if (v === undefined) return;
            const x = mapRange(index, 0, maxIndex, 0, w);
            const y = mapRange(v, min, max, h, 0);
            points.push([
                x,
                y
            ].join(','));
        });
        this.lineElem_.setAttributeNS(null, 'points', points.join(' '));
        const tooltipElem = this.tooltipElem_;
        const value = this.value.rawValue[this.cursor_.rawValue];
        if (value === undefined) {
            tooltipElem.classList.remove(cn$1('t', 'a'));
            return;
        }
        const tx = mapRange(this.cursor_.rawValue, 0, maxIndex, 0, w);
        const ty = mapRange(value, min, max, h, 0);
        tooltipElem.style.left = `${tx}px`;
        tooltipElem.style.top = `${ty}px`;
        tooltipElem.textContent = `${this.formatter_(value)}`;
        if (!tooltipElem.classList.contains(cn$1('t', 'a'))) {
            tooltipElem.classList.add(cn$1('t', 'a'), cn$1('t', 'in'));
            forceReflow(tooltipElem);
            tooltipElem.classList.remove(cn$1('t', 'in'));
        }
    }
    onValueUpdate_() {
        this.update_();
    }
    onCursorChange_() {
        this.update_();
    }
}
class GraphLogController {
    constructor(doc, config){
        this.onGraphMouseMove_ = this.onGraphMouseMove_.bind(this);
        this.onGraphMouseLeave_ = this.onGraphMouseLeave_.bind(this);
        this.onGraphPointerDown_ = this.onGraphPointerDown_.bind(this);
        this.onGraphPointerMove_ = this.onGraphPointerMove_.bind(this);
        this.onGraphPointerUp_ = this.onGraphPointerUp_.bind(this);
        this.props = config.props;
        this.value = config.value;
        this.viewProps = config.viewProps;
        this.cursor_ = createValue(-1);
        this.view = new GraphLogView(doc, {
            cursor: this.cursor_,
            formatter: config.formatter,
            rows: config.rows,
            props: this.props,
            value: this.value,
            viewProps: this.viewProps
        });
        if (!supportsTouch(doc)) {
            this.view.element.addEventListener('mousemove', this.onGraphMouseMove_);
            this.view.element.addEventListener('mouseleave', this.onGraphMouseLeave_);
        } else {
            const ph = new PointerHandler(this.view.element);
            ph.emitter.on('down', this.onGraphPointerDown_);
            ph.emitter.on('move', this.onGraphPointerMove_);
            ph.emitter.on('up', this.onGraphPointerUp_);
        }
    }
    importProps(state) {
        return importBladeState(state, null, (p)=>({
                max: p.required.number,
                min: p.required.number
            }), (result)=>{
            this.props.set('max', result.max);
            this.props.set('min', result.min);
            return true;
        });
    }
    exportProps() {
        return exportBladeState(null, {
            max: this.props.get('max'),
            min: this.props.get('min')
        });
    }
    onGraphMouseLeave_() {
        this.cursor_.rawValue = -1;
    }
    onGraphMouseMove_(ev) {
        const { clientWidth: w } = this.view.element;
        this.cursor_.rawValue = Math.floor(mapRange(ev.offsetX, 0, w, 0, this.value.rawValue.length));
    }
    onGraphPointerDown_(ev) {
        this.onGraphPointerMove_(ev);
    }
    onGraphPointerMove_(ev) {
        if (!ev.data.point) {
            this.cursor_.rawValue = -1;
            return;
        }
        this.cursor_.rawValue = Math.floor(mapRange(ev.data.point.x, 0, ev.data.bounds.width, 0, this.value.rawValue.length));
    }
    onGraphPointerUp_() {
        this.cursor_.rawValue = -1;
    }
}
function createFormatter(params) {
    return !isEmpty(params.format) ? params.format : createNumberFormatter(2);
}
function createTextMonitor(args) {
    var _a;
    if (args.value.rawValue.length === 1) return new SingleLogController(args.document, {
        formatter: createFormatter(args.params),
        value: args.value,
        viewProps: args.viewProps
    });
    return new MultiLogController(args.document, {
        formatter: createFormatter(args.params),
        rows: (_a = args.params.rows) !== null && _a !== void 0 ? _a : Constants.monitor.defaultRows,
        value: args.value,
        viewProps: args.viewProps
    });
}
function createGraphMonitor(args) {
    var _a, _b, _c;
    return new GraphLogController(args.document, {
        formatter: createFormatter(args.params),
        rows: (_a = args.params.rows) !== null && _a !== void 0 ? _a : Constants.monitor.defaultRows,
        props: ValueMap.fromObject({
            max: (_b = args.params.max) !== null && _b !== void 0 ? _b : 100,
            min: (_c = args.params.min) !== null && _c !== void 0 ? _c : 0
        }),
        value: args.value,
        viewProps: args.viewProps
    });
}
function shouldShowGraph(params) {
    return params.view === 'graph';
}
const NumberMonitorPlugin = createPlugin({
    id: 'monitor-number',
    type: 'monitor',
    accept: (value, params)=>{
        if (typeof value !== 'number') return null;
        const result = parseRecord(params, (p)=>({
                format: p.optional.function,
                max: p.optional.number,
                min: p.optional.number,
                readonly: p.required.constant(true),
                rows: p.optional.number,
                view: p.optional.string
            }));
        return result ? {
            initialValue: value,
            params: result
        } : null;
    },
    binding: {
        defaultBufferSize: (params)=>shouldShowGraph(params) ? 64 : 1,
        reader: (_args)=>numberFromUnknown
    },
    controller: (args)=>{
        if (shouldShowGraph(args.params)) return createGraphMonitor(args);
        return createTextMonitor(args);
    },
    api: (args)=>{
        if (args.controller.valueController instanceof GraphLogController) return new GraphLogMonitorBindingApi(args.controller);
        return null;
    }
});
const StringMonitorPlugin = createPlugin({
    id: 'monitor-string',
    type: 'monitor',
    accept: (value, params)=>{
        if (typeof value !== 'string') return null;
        const result = parseRecord(params, (p)=>({
                multiline: p.optional.boolean,
                readonly: p.required.constant(true),
                rows: p.optional.number
            }));
        return result ? {
            initialValue: value,
            params: result
        } : null;
    },
    binding: {
        reader: (_args)=>stringFromUnknown
    },
    controller: (args)=>{
        var _a;
        const value = args.value;
        const multiline = value.rawValue.length > 1 || args.params.multiline;
        if (multiline) return new MultiLogController(args.document, {
            formatter: formatString,
            rows: (_a = args.params.rows) !== null && _a !== void 0 ? _a : Constants.monitor.defaultRows,
            value: value,
            viewProps: args.viewProps
        });
        return new SingleLogController(args.document, {
            formatter: formatString,
            value: value,
            viewProps: args.viewProps
        });
    }
});
class BladeApiCache {
    constructor(){
        this.map_ = new Map();
    }
    get(bc) {
        var _a;
        return (_a = this.map_.get(bc)) !== null && _a !== void 0 ? _a : null;
    }
    has(bc) {
        return this.map_.has(bc);
    }
    add(bc, api) {
        this.map_.set(bc, api);
        bc.viewProps.handleDispose(()=>{
            this.map_.delete(bc);
        });
        return api;
    }
}
class ReadWriteBinding {
    constructor(config){
        this.target = config.target;
        this.reader_ = config.reader;
        this.writer_ = config.writer;
    }
    read() {
        return this.reader_(this.target.read());
    }
    write(value) {
        this.writer_(this.target, value);
    }
    inject(value) {
        this.write(this.reader_(value));
    }
}
function createInputBindingController(plugin, args) {
    var _a;
    const result = plugin.accept(args.target.read(), args.params);
    if (isEmpty(result)) return null;
    const valueArgs = {
        target: args.target,
        initialValue: result.initialValue,
        params: result.params
    };
    const params = parseRecord(args.params, (p)=>({
            disabled: p.optional.boolean,
            hidden: p.optional.boolean,
            label: p.optional.string,
            tag: p.optional.string
        }));
    const reader = plugin.binding.reader(valueArgs);
    const constraint = plugin.binding.constraint ? plugin.binding.constraint(valueArgs) : undefined;
    const binding = new ReadWriteBinding({
        reader: reader,
        target: args.target,
        writer: plugin.binding.writer(valueArgs)
    });
    const value = new InputBindingValue(createValue(reader(result.initialValue), {
        constraint: constraint,
        equals: plugin.binding.equals
    }), binding);
    const controller = plugin.controller({
        constraint: constraint,
        document: args.document,
        initialValue: result.initialValue,
        params: result.params,
        value: value,
        viewProps: ViewProps.create({
            disabled: params === null || params === void 0 ? void 0 : params.disabled,
            hidden: params === null || params === void 0 ? void 0 : params.hidden
        })
    });
    return new InputBindingController(args.document, {
        blade: createBlade(),
        props: ValueMap.fromObject({
            label: 'label' in args.params ? (_a = params === null || params === void 0 ? void 0 : params.label) !== null && _a !== void 0 ? _a : null : args.target.key
        }),
        tag: params === null || params === void 0 ? void 0 : params.tag,
        value: value,
        valueController: controller
    });
}
class ReadonlyBinding {
    constructor(config){
        this.target = config.target;
        this.reader_ = config.reader;
    }
    read() {
        return this.reader_(this.target.read());
    }
}
function createTicker(document, interval) {
    return interval === 0 ? new ManualTicker() : new IntervalTicker(document, interval !== null && interval !== void 0 ? interval : Constants.monitor.defaultInterval);
}
function createMonitorBindingController(plugin, args) {
    var _a, _b, _c;
    const result = plugin.accept(args.target.read(), args.params);
    if (isEmpty(result)) return null;
    const bindingArgs = {
        target: args.target,
        initialValue: result.initialValue,
        params: result.params
    };
    const params = parseRecord(args.params, (p)=>({
            bufferSize: p.optional.number,
            disabled: p.optional.boolean,
            hidden: p.optional.boolean,
            interval: p.optional.number,
            label: p.optional.string
        }));
    const reader = plugin.binding.reader(bindingArgs);
    const bufferSize = (_b = (_a = params === null || params === void 0 ? void 0 : params.bufferSize) !== null && _a !== void 0 ? _a : plugin.binding.defaultBufferSize && plugin.binding.defaultBufferSize(result.params)) !== null && _b !== void 0 ? _b : 1;
    const value = new MonitorBindingValue({
        binding: new ReadonlyBinding({
            reader: reader,
            target: args.target
        }),
        bufferSize: bufferSize,
        ticker: createTicker(args.document, params === null || params === void 0 ? void 0 : params.interval)
    });
    const controller = plugin.controller({
        document: args.document,
        params: result.params,
        value: value,
        viewProps: ViewProps.create({
            disabled: params === null || params === void 0 ? void 0 : params.disabled,
            hidden: params === null || params === void 0 ? void 0 : params.hidden
        })
    });
    controller.viewProps.bindDisabled(value.ticker);
    controller.viewProps.handleDispose(()=>{
        value.ticker.dispose();
    });
    return new MonitorBindingController(args.document, {
        blade: createBlade(),
        props: ValueMap.fromObject({
            label: 'label' in args.params ? (_c = params === null || params === void 0 ? void 0 : params.label) !== null && _c !== void 0 ? _c : null : args.target.key
        }),
        value: value,
        valueController: controller
    });
}
class PluginPool {
    constructor(apiCache){
        this.pluginsMap_ = {
            blades: [],
            inputs: [],
            monitors: []
        };
        this.apiCache_ = apiCache;
    }
    getAll() {
        return [
            ...this.pluginsMap_.blades,
            ...this.pluginsMap_.inputs,
            ...this.pluginsMap_.monitors
        ];
    }
    register(bundleId, r) {
        if (!isCompatible(r.core)) throw TpError.notCompatible(bundleId, r.id);
        if (r.type === 'blade') this.pluginsMap_.blades.unshift(r);
        else if (r.type === 'input') this.pluginsMap_.inputs.unshift(r);
        else if (r.type === 'monitor') this.pluginsMap_.monitors.unshift(r);
    }
    createInput_(document, target, params) {
        return this.pluginsMap_.inputs.reduce((result, plugin)=>result !== null && result !== void 0 ? result : createInputBindingController(plugin, {
                document: document,
                target: target,
                params: params
            }), null);
    }
    createMonitor_(document, target, params) {
        return this.pluginsMap_.monitors.reduce((result, plugin)=>result !== null && result !== void 0 ? result : createMonitorBindingController(plugin, {
                document: document,
                params: params,
                target: target
            }), null);
    }
    createBinding(doc, target, params) {
        const initialValue = target.read();
        if (isEmpty(initialValue)) throw new TpError({
            context: {
                key: target.key
            },
            type: 'nomatchingcontroller'
        });
        const ic = this.createInput_(doc, target, params);
        if (ic) return ic;
        const mc = this.createMonitor_(doc, target, params);
        if (mc) return mc;
        throw new TpError({
            context: {
                key: target.key
            },
            type: 'nomatchingcontroller'
        });
    }
    createBlade(document, params) {
        const bc = this.pluginsMap_.blades.reduce((result, plugin)=>result !== null && result !== void 0 ? result : createBladeController(plugin, {
                document: document,
                params: params
            }), null);
        if (!bc) throw new TpError({
            type: 'nomatchingview',
            context: {
                params: params
            }
        });
        return bc;
    }
    createInputBindingApi_(bc) {
        const api = this.pluginsMap_.inputs.reduce((result, plugin)=>{
            var _a, _b;
            if (result) return result;
            return (_b = (_a = plugin.api) === null || _a === void 0 ? void 0 : _a.call(plugin, {
                controller: bc
            })) !== null && _b !== void 0 ? _b : null;
        }, null);
        return this.apiCache_.add(bc, api !== null && api !== void 0 ? api : new BindingApi(bc));
    }
    createMonitorBindingApi_(bc) {
        const api = this.pluginsMap_.monitors.reduce((result, plugin)=>{
            var _a, _b;
            if (result) return result;
            return (_b = (_a = plugin.api) === null || _a === void 0 ? void 0 : _a.call(plugin, {
                controller: bc
            })) !== null && _b !== void 0 ? _b : null;
        }, null);
        return this.apiCache_.add(bc, api !== null && api !== void 0 ? api : new BindingApi(bc));
    }
    createBindingApi(bc) {
        if (this.apiCache_.has(bc)) return this.apiCache_.get(bc);
        if (isInputBindingController(bc)) return this.createInputBindingApi_(bc);
        if (isMonitorBindingController(bc)) return this.createMonitorBindingApi_(bc);
        throw TpError.shouldNeverHappen();
    }
    createApi(bc) {
        if (this.apiCache_.has(bc)) return this.apiCache_.get(bc);
        if (isBindingController(bc)) return this.createBindingApi(bc);
        const api = this.pluginsMap_.blades.reduce((result, plugin)=>result !== null && result !== void 0 ? result : plugin.api({
                controller: bc,
                pool: this
            }), null);
        if (!api) throw TpError.shouldNeverHappen();
        return this.apiCache_.add(bc, api);
    }
}
const sharedCache = new BladeApiCache();
function createDefaultPluginPool() {
    const pool = new PluginPool(sharedCache);
    [
        Point2dInputPlugin,
        Point3dInputPlugin,
        Point4dInputPlugin,
        StringInputPlugin,
        NumberInputPlugin,
        StringColorInputPlugin,
        ObjectColorInputPlugin,
        NumberColorInputPlugin,
        BooleanInputPlugin,
        BooleanMonitorPlugin,
        StringMonitorPlugin,
        NumberMonitorPlugin,
        ButtonBladePlugin,
        FolderBladePlugin,
        TabBladePlugin
    ].forEach((p)=>{
        pool.register('core', p);
    });
    return pool;
}
class ListBladeApi extends BladeApi {
    /**
     * @hidden
     */ constructor(controller){
        super(controller);
        this.emitter_ = new Emitter();
        this.controller.value.emitter.on('change', (ev)=>{
            this.emitter_.emit('change', new TpChangeEvent(this, ev.rawValue));
        });
    }
    get label() {
        return this.controller.labelController.props.get('label');
    }
    set label(label) {
        this.controller.labelController.props.set('label', label);
    }
    get options() {
        return this.controller.valueController.props.get('options');
    }
    set options(options) {
        this.controller.valueController.props.set('options', options);
    }
    get value() {
        return this.controller.value.rawValue;
    }
    set value(value) {
        this.controller.value.rawValue = value;
    }
    on(eventName, handler) {
        const bh = handler.bind(this);
        this.emitter_.on(eventName, (ev)=>{
            bh(ev);
        }, {
            key: handler
        });
        return this;
    }
    off(eventName, handler) {
        this.emitter_.off(eventName, handler);
        return this;
    }
}
class SeparatorBladeApi extends BladeApi {
}
class SliderBladeApi extends BladeApi {
    /**
     * @hidden
     */ constructor(controller){
        super(controller);
        this.emitter_ = new Emitter();
        this.controller.value.emitter.on('change', (ev)=>{
            this.emitter_.emit('change', new TpChangeEvent(this, ev.rawValue));
        });
    }
    get label() {
        return this.controller.labelController.props.get('label');
    }
    set label(label) {
        this.controller.labelController.props.set('label', label);
    }
    get max() {
        return this.controller.valueController.sliderController.props.get('max');
    }
    set max(max) {
        this.controller.valueController.sliderController.props.set('max', max);
    }
    get min() {
        return this.controller.valueController.sliderController.props.get('min');
    }
    set min(min) {
        this.controller.valueController.sliderController.props.set('min', min);
    }
    get value() {
        return this.controller.value.rawValue;
    }
    set value(value) {
        this.controller.value.rawValue = value;
    }
    on(eventName, handler) {
        const bh = handler.bind(this);
        this.emitter_.on(eventName, (ev)=>{
            bh(ev);
        }, {
            key: handler
        });
        return this;
    }
    off(eventName, handler) {
        this.emitter_.off(eventName, handler);
        return this;
    }
}
class TextBladeApi extends BladeApi {
    /**
     * @hidden
     */ constructor(controller){
        super(controller);
        this.emitter_ = new Emitter();
        this.controller.value.emitter.on('change', (ev)=>{
            this.emitter_.emit('change', new TpChangeEvent(this, ev.rawValue));
        });
    }
    get label() {
        return this.controller.labelController.props.get('label');
    }
    set label(label) {
        this.controller.labelController.props.set('label', label);
    }
    get formatter() {
        return this.controller.valueController.props.get('formatter');
    }
    set formatter(formatter) {
        this.controller.valueController.props.set('formatter', formatter);
    }
    get value() {
        return this.controller.value.rawValue;
    }
    set value(value) {
        this.controller.value.rawValue = value;
    }
    on(eventName, handler) {
        const bh = handler.bind(this);
        this.emitter_.on(eventName, (ev)=>{
            bh(ev);
        }, {
            key: handler
        });
        return this;
    }
    off(eventName, handler) {
        this.emitter_.off(eventName, handler);
        return this;
    }
}
const ListBladePlugin = function() {
    return {
        id: 'list',
        type: 'blade',
        core: VERSION$1,
        accept (params) {
            const result = parseRecord(params, (p)=>({
                    options: p.required.custom(parseListOptions),
                    value: p.required.raw,
                    view: p.required.constant('list'),
                    label: p.optional.string
                }));
            return result ? {
                params: result
            } : null;
        },
        controller (args) {
            const lc = new ListConstraint(normalizeListOptions(args.params.options));
            const value = createValue(args.params.value, {
                constraint: lc
            });
            const ic = new ListController(args.document, {
                props: new ValueMap({
                    options: lc.values.value('options')
                }),
                value: value,
                viewProps: args.viewProps
            });
            return new LabeledValueBladeController(args.document, {
                blade: args.blade,
                props: ValueMap.fromObject({
                    label: args.params.label
                }),
                value: value,
                valueController: ic
            });
        },
        api (args) {
            if (!(args.controller instanceof LabeledValueBladeController)) return null;
            if (!(args.controller.valueController instanceof ListController)) return null;
            return new ListBladeApi(args.controller);
        }
    };
}();
class RootApi extends FolderApi {
    /**
     * @hidden
     */ constructor(controller, pool){
        super(controller, pool);
    }
    get element() {
        return this.controller.view.element;
    }
}
/**
 * @hidden
 */ class RootController extends FolderController {
    constructor(doc, config){
        super(doc, {
            expanded: config.expanded,
            blade: config.blade,
            props: config.props,
            root: true,
            viewProps: config.viewProps
        });
    }
}
const cn = ClassName('spr');
/**
 * @hidden
 */ class SeparatorView {
    constructor(doc, config){
        this.element = doc.createElement('div');
        this.element.classList.add(cn());
        config.viewProps.bindClassModifiers(this.element);
        const hrElem = doc.createElement('hr');
        hrElem.classList.add(cn('r'));
        this.element.appendChild(hrElem);
    }
}
/**
 * @hidden
 */ class SeparatorController extends BladeController {
    /**
     * @hidden
     */ constructor(doc, config){
        super(Object.assign(Object.assign({}, config), {
            view: new SeparatorView(doc, {
                viewProps: config.viewProps
            })
        }));
    }
}
const SeparatorBladePlugin = {
    id: 'separator',
    type: 'blade',
    core: VERSION$1,
    accept (params) {
        const result = parseRecord(params, (p)=>({
                view: p.required.constant('separator')
            }));
        return result ? {
            params: result
        } : null;
    },
    controller (args) {
        return new SeparatorController(args.document, {
            blade: args.blade,
            viewProps: args.viewProps
        });
    },
    api (args) {
        if (!(args.controller instanceof SeparatorController)) return null;
        return new SeparatorBladeApi(args.controller);
    }
};
const SliderBladePlugin = {
    id: 'slider',
    type: 'blade',
    core: VERSION$1,
    accept (params) {
        const result = parseRecord(params, (p)=>({
                max: p.required.number,
                min: p.required.number,
                view: p.required.constant('slider'),
                format: p.optional.function,
                label: p.optional.string,
                value: p.optional.number
            }));
        return result ? {
            params: result
        } : null;
    },
    controller (args) {
        var _a, _b;
        const initialValue = (_a = args.params.value) !== null && _a !== void 0 ? _a : 0;
        const drc = new DefiniteRangeConstraint({
            max: args.params.max,
            min: args.params.min
        });
        const v = createValue(initialValue, {
            constraint: drc
        });
        const vc = new SliderTextController(args.document, Object.assign(Object.assign({}, createSliderTextProps({
            formatter: (_b = args.params.format) !== null && _b !== void 0 ? _b : numberToString,
            keyScale: createValue(1),
            max: drc.values.value('max'),
            min: drc.values.value('min'),
            pointerScale: getSuitablePointerScale(args.params, initialValue)
        })), {
            parser: parseNumber,
            value: v,
            viewProps: args.viewProps
        }));
        return new LabeledValueBladeController(args.document, {
            blade: args.blade,
            props: ValueMap.fromObject({
                label: args.params.label
            }),
            value: v,
            valueController: vc
        });
    },
    api (args) {
        if (!(args.controller instanceof LabeledValueBladeController)) return null;
        if (!(args.controller.valueController instanceof SliderTextController)) return null;
        return new SliderBladeApi(args.controller);
    }
};
const TextBladePlugin = function() {
    return {
        id: 'text',
        type: 'blade',
        core: VERSION$1,
        accept (params) {
            const result = parseRecord(params, (p)=>({
                    parse: p.required.function,
                    value: p.required.raw,
                    view: p.required.constant('text'),
                    format: p.optional.function,
                    label: p.optional.string
                }));
            return result ? {
                params: result
            } : null;
        },
        controller (args) {
            var _a;
            const v = createValue(args.params.value);
            const ic = new TextController(args.document, {
                parser: args.params.parse,
                props: ValueMap.fromObject({
                    formatter: (_a = args.params.format) !== null && _a !== void 0 ? _a : (v)=>String(v)
                }),
                value: v,
                viewProps: args.viewProps
            });
            return new LabeledValueBladeController(args.document, {
                blade: args.blade,
                props: ValueMap.fromObject({
                    label: args.params.label
                }),
                value: v,
                valueController: ic
            });
        },
        api (args) {
            if (!(args.controller instanceof LabeledValueBladeController)) return null;
            if (!(args.controller.valueController instanceof TextController)) return null;
            return new TextBladeApi(args.controller);
        }
    };
}();
function createDefaultWrapperElement(doc) {
    const elem = doc.createElement('div');
    elem.classList.add(ClassName('dfw')());
    if (doc.body) doc.body.appendChild(elem);
    return elem;
}
function embedStyle(doc, id, css) {
    if (doc.querySelector(`style[data-tp-style=${id}]`)) return;
    const styleElem = doc.createElement('style');
    styleElem.dataset.tpStyle = id;
    styleElem.textContent = css;
    doc.head.appendChild(styleElem);
}
/**
 * The root pane of Tweakpane.
 */ class Pane extends RootApi {
    constructor(opt_config){
        var _a, _b;
        const config = opt_config !== null && opt_config !== void 0 ? opt_config : {};
        const doc = (_a = config.document) !== null && _a !== void 0 ? _a : getWindowDocument();
        const pool = createDefaultPluginPool();
        const rootController = new RootController(doc, {
            expanded: config.expanded,
            blade: createBlade(),
            props: ValueMap.fromObject({
                title: config.title
            }),
            viewProps: ViewProps.create()
        });
        super(rootController, pool);
        this.pool_ = pool;
        this.containerElem_ = (_b = config.container) !== null && _b !== void 0 ? _b : createDefaultWrapperElement(doc);
        this.containerElem_.appendChild(this.element);
        this.doc_ = doc;
        this.usesDefaultWrapper_ = !config.container;
        this.setUpDefaultPlugins_();
    }
    get document() {
        if (!this.doc_) throw TpError.alreadyDisposed();
        return this.doc_;
    }
    dispose() {
        const containerElem = this.containerElem_;
        if (!containerElem) throw TpError.alreadyDisposed();
        if (this.usesDefaultWrapper_) {
            const parentElem = containerElem.parentElement;
            if (parentElem) parentElem.removeChild(containerElem);
        }
        this.containerElem_ = null;
        this.doc_ = null;
        super.dispose();
    }
    registerPlugin(bundle) {
        if (bundle.css) embedStyle(this.document, `plugin-${bundle.id}`, bundle.css);
        const plugins = 'plugin' in bundle ? [
            bundle.plugin
        ] : 'plugins' in bundle ? bundle.plugins : [];
        plugins.forEach((p)=>{
            this.pool_.register(bundle.id, p);
        });
    }
    setUpDefaultPlugins_() {
        this.registerPlugin({
            id: 'default',
            // NOTE: This string literal will be replaced with the default CSS by Rollup at the compilation time
            css: '.tp-tbiv_b,.tp-coltxtv_ms,.tp-colswv_b,.tp-ckbv_i,.tp-sglv_i,.tp-mllv_i,.tp-grlv_g,.tp-txtv_i,.tp-p2dpv_p,.tp-colswv_sw,.tp-rotv_b,.tp-fldv_b,.tp-p2dv_b,.tp-btnv_b,.tp-lstv_s{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:rgba(0,0,0,0);border-width:0;font-family:inherit;font-size:inherit;font-weight:inherit;margin:0;outline:none;padding:0}.tp-p2dv_b,.tp-btnv_b,.tp-lstv_s{background-color:var(--btn-bg);border-radius:var(--bld-br);color:var(--btn-fg);cursor:pointer;display:block;font-weight:bold;height:var(--cnt-usz);line-height:var(--cnt-usz);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.tp-p2dv_b:hover,.tp-btnv_b:hover,.tp-lstv_s:hover{background-color:var(--btn-bg-h)}.tp-p2dv_b:focus,.tp-btnv_b:focus,.tp-lstv_s:focus{background-color:var(--btn-bg-f)}.tp-p2dv_b:active,.tp-btnv_b:active,.tp-lstv_s:active{background-color:var(--btn-bg-a)}.tp-p2dv_b:disabled,.tp-btnv_b:disabled,.tp-lstv_s:disabled{opacity:.5}.tp-rotv_c>.tp-cntv.tp-v-lst,.tp-tbpv_c>.tp-cntv.tp-v-lst,.tp-fldv_c>.tp-cntv.tp-v-lst{margin-bottom:calc(-1*var(--cnt-vp))}.tp-rotv_c>.tp-fldv.tp-v-lst .tp-fldv_c,.tp-tbpv_c>.tp-fldv.tp-v-lst .tp-fldv_c,.tp-fldv_c>.tp-fldv.tp-v-lst .tp-fldv_c{border-bottom-left-radius:0}.tp-rotv_c>.tp-fldv.tp-v-lst .tp-fldv_b,.tp-tbpv_c>.tp-fldv.tp-v-lst .tp-fldv_b,.tp-fldv_c>.tp-fldv.tp-v-lst .tp-fldv_b{border-bottom-left-radius:0}.tp-rotv_c>*:not(.tp-v-fst),.tp-tbpv_c>*:not(.tp-v-fst),.tp-fldv_c>*:not(.tp-v-fst){margin-top:var(--cnt-usp)}.tp-rotv_c>.tp-sprv:not(.tp-v-fst),.tp-tbpv_c>.tp-sprv:not(.tp-v-fst),.tp-fldv_c>.tp-sprv:not(.tp-v-fst),.tp-rotv_c>.tp-cntv:not(.tp-v-fst),.tp-tbpv_c>.tp-cntv:not(.tp-v-fst),.tp-fldv_c>.tp-cntv:not(.tp-v-fst){margin-top:var(--cnt-vp)}.tp-rotv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-tbpv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-fldv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-rotv_c>.tp-cntv+*:not(.tp-v-hidden),.tp-tbpv_c>.tp-cntv+*:not(.tp-v-hidden),.tp-fldv_c>.tp-cntv+*:not(.tp-v-hidden){margin-top:var(--cnt-vp)}.tp-rotv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-tbpv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-fldv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-rotv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv,.tp-tbpv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv,.tp-fldv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv{margin-top:0}.tp-tbpv_c>.tp-cntv,.tp-fldv_c>.tp-cntv{margin-left:4px}.tp-tbpv_c>.tp-fldv>.tp-fldv_b,.tp-fldv_c>.tp-fldv>.tp-fldv_b{border-top-left-radius:var(--bld-br);border-bottom-left-radius:var(--bld-br)}.tp-tbpv_c>.tp-fldv.tp-fldv-expanded>.tp-fldv_b,.tp-fldv_c>.tp-fldv.tp-fldv-expanded>.tp-fldv_b{border-bottom-left-radius:0}.tp-tbpv_c .tp-fldv>.tp-fldv_c,.tp-fldv_c .tp-fldv>.tp-fldv_c{border-bottom-left-radius:var(--bld-br)}.tp-tbpv_c>.tp-cntv+.tp-fldv>.tp-fldv_b,.tp-fldv_c>.tp-cntv+.tp-fldv>.tp-fldv_b{border-top-left-radius:0}.tp-tbpv_c>.tp-cntv+.tp-tabv>.tp-tabv_t,.tp-fldv_c>.tp-cntv+.tp-tabv>.tp-tabv_t{border-top-left-radius:0}.tp-tbpv_c>.tp-tabv>.tp-tabv_t,.tp-fldv_c>.tp-tabv>.tp-tabv_t{border-top-left-radius:var(--bld-br)}.tp-tbpv_c .tp-tabv>.tp-tabv_c,.tp-fldv_c .tp-tabv>.tp-tabv_c{border-bottom-left-radius:var(--bld-br)}.tp-rotv_b,.tp-fldv_b{background-color:var(--cnt-bg);color:var(--cnt-fg);cursor:pointer;display:block;height:calc(var(--cnt-usz) + 4px);line-height:calc(var(--cnt-usz) + 4px);overflow:hidden;padding-left:var(--cnt-hp);padding-right:calc(4px + var(--cnt-usz) + var(--cnt-hp));position:relative;text-align:left;text-overflow:ellipsis;white-space:nowrap;width:100%;transition:border-radius .2s ease-in-out .2s}.tp-rotv_b:hover,.tp-fldv_b:hover{background-color:var(--cnt-bg-h)}.tp-rotv_b:focus,.tp-fldv_b:focus{background-color:var(--cnt-bg-f)}.tp-rotv_b:active,.tp-fldv_b:active{background-color:var(--cnt-bg-a)}.tp-rotv_b:disabled,.tp-fldv_b:disabled{opacity:.5}.tp-rotv_m,.tp-fldv_m{background:linear-gradient(to left, var(--cnt-fg), var(--cnt-fg) 2px, transparent 2px, transparent 4px, var(--cnt-fg) 4px);border-radius:2px;bottom:0;content:"";display:block;height:6px;right:calc(var(--cnt-hp) + (var(--cnt-usz) + 4px - 6px)/2 - 2px);margin:auto;opacity:.5;position:absolute;top:0;transform:rotate(90deg);transition:transform .2s ease-in-out;width:6px}.tp-rotv.tp-rotv-expanded .tp-rotv_m,.tp-fldv.tp-fldv-expanded>.tp-fldv_b>.tp-fldv_m{transform:none}.tp-rotv_c,.tp-fldv_c{box-sizing:border-box;height:0;opacity:0;overflow:hidden;padding-bottom:0;padding-top:0;position:relative;transition:height .2s ease-in-out,opacity .2s linear,padding .2s ease-in-out}.tp-rotv.tp-rotv-cpl:not(.tp-rotv-expanded) .tp-rotv_c,.tp-fldv.tp-fldv-cpl:not(.tp-fldv-expanded)>.tp-fldv_c{display:none}.tp-rotv.tp-rotv-expanded .tp-rotv_c,.tp-fldv.tp-fldv-expanded>.tp-fldv_c{opacity:1;padding-bottom:var(--cnt-vp);padding-top:var(--cnt-vp);transform:none;overflow:visible;transition:height .2s ease-in-out,opacity .2s linear .2s,padding .2s ease-in-out}.tp-txtv_i,.tp-p2dpv_p,.tp-colswv_sw{background-color:var(--in-bg);border-radius:var(--bld-br);box-sizing:border-box;color:var(--in-fg);font-family:inherit;height:var(--cnt-usz);line-height:var(--cnt-usz);min-width:0;width:100%}.tp-txtv_i:hover,.tp-p2dpv_p:hover,.tp-colswv_sw:hover{background-color:var(--in-bg-h)}.tp-txtv_i:focus,.tp-p2dpv_p:focus,.tp-colswv_sw:focus{background-color:var(--in-bg-f)}.tp-txtv_i:active,.tp-p2dpv_p:active,.tp-colswv_sw:active{background-color:var(--in-bg-a)}.tp-txtv_i:disabled,.tp-p2dpv_p:disabled,.tp-colswv_sw:disabled{opacity:.5}.tp-lstv,.tp-coltxtv_m{position:relative}.tp-lstv_s{padding:0 20px 0 4px;width:100%}.tp-lstv_m,.tp-coltxtv_mm{bottom:0;margin:auto;pointer-events:none;position:absolute;right:2px;top:0}.tp-lstv_m svg,.tp-coltxtv_mm svg{bottom:0;height:16px;margin:auto;position:absolute;right:0;top:0;width:16px}.tp-lstv_m svg path,.tp-coltxtv_mm svg path{fill:currentColor}.tp-sglv_i,.tp-mllv_i,.tp-grlv_g{background-color:var(--mo-bg);border-radius:var(--bld-br);box-sizing:border-box;color:var(--mo-fg);height:var(--cnt-usz);scrollbar-color:currentColor rgba(0,0,0,0);scrollbar-width:thin;width:100%}.tp-sglv_i::-webkit-scrollbar,.tp-mllv_i::-webkit-scrollbar,.tp-grlv_g::-webkit-scrollbar{height:8px;width:8px}.tp-sglv_i::-webkit-scrollbar-corner,.tp-mllv_i::-webkit-scrollbar-corner,.tp-grlv_g::-webkit-scrollbar-corner{background-color:rgba(0,0,0,0)}.tp-sglv_i::-webkit-scrollbar-thumb,.tp-mllv_i::-webkit-scrollbar-thumb,.tp-grlv_g::-webkit-scrollbar-thumb{background-clip:padding-box;background-color:currentColor;border:rgba(0,0,0,0) solid 2px;border-radius:4px}.tp-pndtxtv,.tp-coltxtv_w{display:flex}.tp-pndtxtv_a,.tp-coltxtv_c{width:100%}.tp-pndtxtv_a+.tp-pndtxtv_a,.tp-coltxtv_c+.tp-pndtxtv_a,.tp-pndtxtv_a+.tp-coltxtv_c,.tp-coltxtv_c+.tp-coltxtv_c{margin-left:2px}.tp-rotv{--bs-bg: var(--tp-base-background-color, hsl(230, 7%, 17%));--bs-br: var(--tp-base-border-radius, 6px);--bs-ff: var(--tp-base-font-family, Roboto Mono, Source Code Pro, Menlo, Courier, monospace);--bs-sh: var(--tp-base-shadow-color, rgba(0, 0, 0, 0.2));--bld-br: var(--tp-blade-border-radius, 2px);--bld-hp: var(--tp-blade-horizontal-padding, 4px);--bld-vw: var(--tp-blade-value-width, 160px);--btn-bg: var(--tp-button-background-color, hsl(230, 7%, 70%));--btn-bg-a: var(--tp-button-background-color-active, #d6d7db);--btn-bg-f: var(--tp-button-background-color-focus, #c8cad0);--btn-bg-h: var(--tp-button-background-color-hover, #bbbcc4);--btn-fg: var(--tp-button-foreground-color, hsl(230, 7%, 17%));--cnt-bg: var(--tp-container-background-color, rgba(187, 188, 196, 0.1));--cnt-bg-a: var(--tp-container-background-color-active, rgba(187, 188, 196, 0.25));--cnt-bg-f: var(--tp-container-background-color-focus, rgba(187, 188, 196, 0.2));--cnt-bg-h: var(--tp-container-background-color-hover, rgba(187, 188, 196, 0.15));--cnt-fg: var(--tp-container-foreground-color, hsl(230, 7%, 75%));--cnt-hp: var(--tp-container-horizontal-padding, 4px);--cnt-vp: var(--tp-container-vertical-padding, 4px);--cnt-usp: var(--tp-container-unit-spacing, 4px);--cnt-usz: var(--tp-container-unit-size, 20px);--in-bg: var(--tp-input-background-color, rgba(187, 188, 196, 0.1));--in-bg-a: var(--tp-input-background-color-active, rgba(187, 188, 196, 0.25));--in-bg-f: var(--tp-input-background-color-focus, rgba(187, 188, 196, 0.2));--in-bg-h: var(--tp-input-background-color-hover, rgba(187, 188, 196, 0.15));--in-fg: var(--tp-input-foreground-color, hsl(230, 7%, 75%));--lbl-fg: var(--tp-label-foreground-color, rgba(187, 188, 196, 0.7));--mo-bg: var(--tp-monitor-background-color, rgba(0, 0, 0, 0.2));--mo-fg: var(--tp-monitor-foreground-color, rgba(187, 188, 196, 0.7));--grv-fg: var(--tp-groove-foreground-color, rgba(187, 188, 196, 0.1))}.tp-btnv_b{width:100%}.tp-btnv_t{text-align:center}.tp-ckbv_l{display:block;position:relative}.tp-ckbv_i{left:0;opacity:0;position:absolute;top:0}.tp-ckbv_w{background-color:var(--in-bg);border-radius:var(--bld-br);cursor:pointer;display:block;height:var(--cnt-usz);position:relative;width:var(--cnt-usz)}.tp-ckbv_w svg{display:block;height:16px;inset:0;margin:auto;opacity:0;position:absolute;width:16px}.tp-ckbv_w svg path{fill:none;stroke:var(--in-fg);stroke-width:2}.tp-ckbv_i:hover+.tp-ckbv_w{background-color:var(--in-bg-h)}.tp-ckbv_i:focus+.tp-ckbv_w{background-color:var(--in-bg-f)}.tp-ckbv_i:active+.tp-ckbv_w{background-color:var(--in-bg-a)}.tp-ckbv_i:checked+.tp-ckbv_w svg{opacity:1}.tp-ckbv.tp-v-disabled .tp-ckbv_w{opacity:.5}.tp-colv{position:relative}.tp-colv_h{display:flex}.tp-colv_s{flex-grow:0;flex-shrink:0;width:var(--cnt-usz)}.tp-colv_t{flex:1;margin-left:4px}.tp-colv_p{height:0;margin-top:0;opacity:0;overflow:hidden;transition:height .2s ease-in-out,opacity .2s linear,margin .2s ease-in-out}.tp-colv.tp-colv-expanded.tp-colv-cpl .tp-colv_p{overflow:visible}.tp-colv.tp-colv-expanded .tp-colv_p{margin-top:var(--cnt-usp);opacity:1}.tp-colv .tp-popv{left:calc(-1*var(--cnt-hp));right:calc(-1*var(--cnt-hp));top:var(--cnt-usz)}.tp-colpv_h,.tp-colpv_ap{margin-left:6px;margin-right:6px}.tp-colpv_h{margin-top:var(--cnt-usp)}.tp-colpv_rgb{display:flex;margin-top:var(--cnt-usp);width:100%}.tp-colpv_a{display:flex;margin-top:var(--cnt-vp);padding-top:calc(var(--cnt-vp) + 2px);position:relative}.tp-colpv_a::before{background-color:var(--grv-fg);content:"";height:2px;left:calc(-1*var(--cnt-hp));position:absolute;right:calc(-1*var(--cnt-hp));top:0}.tp-colpv.tp-v-disabled .tp-colpv_a::before{opacity:.5}.tp-colpv_ap{align-items:center;display:flex;flex:3}.tp-colpv_at{flex:1;margin-left:4px}.tp-svpv{border-radius:var(--bld-br);outline:none;overflow:hidden;position:relative}.tp-svpv.tp-v-disabled{opacity:.5}.tp-svpv_c{cursor:crosshair;display:block;height:calc(var(--cnt-usz)*4);width:100%}.tp-svpv_m{border-radius:100%;border:rgba(255,255,255,.75) solid 2px;box-sizing:border-box;filter:drop-shadow(0 0 1px rgba(0, 0, 0, 0.3));height:12px;margin-left:-6px;margin-top:-6px;pointer-events:none;position:absolute;width:12px}.tp-svpv:focus .tp-svpv_m{border-color:#fff}.tp-hplv{cursor:pointer;height:var(--cnt-usz);outline:none;position:relative}.tp-hplv.tp-v-disabled{opacity:.5}.tp-hplv_c{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAABCAYAAABubagXAAAAQ0lEQVQoU2P8z8Dwn0GCgQEDi2OK/RBgYHjBgIpfovFh8j8YBIgzFGQxuqEgPhaDOT5gOhPkdCxOZeBg+IDFZZiGAgCaSSMYtcRHLgAAAABJRU5ErkJggg==);background-position:left top;background-repeat:no-repeat;background-size:100% 100%;border-radius:2px;display:block;height:4px;left:0;margin-top:-2px;position:absolute;top:50%;width:100%}.tp-hplv_m{border-radius:var(--bld-br);border:rgba(255,255,255,.75) solid 2px;box-shadow:0 0 2px rgba(0,0,0,.1);box-sizing:border-box;height:12px;left:50%;margin-left:-6px;margin-top:-6px;position:absolute;top:50%;width:12px}.tp-hplv:focus .tp-hplv_m{border-color:#fff}.tp-aplv{cursor:pointer;height:var(--cnt-usz);outline:none;position:relative;width:100%}.tp-aplv.tp-v-disabled{opacity:.5}.tp-aplv_b{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:4px 4px;background-position:0 0,2px 2px;border-radius:2px;display:block;height:4px;left:0;margin-top:-2px;overflow:hidden;position:absolute;top:50%;width:100%}.tp-aplv_c{inset:0;position:absolute}.tp-aplv_m{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:12px 12px;background-position:0 0,6px 6px;border-radius:var(--bld-br);box-shadow:0 0 2px rgba(0,0,0,.1);height:12px;left:50%;margin-left:-6px;margin-top:-6px;overflow:hidden;position:absolute;top:50%;width:12px}.tp-aplv_p{border-radius:var(--bld-br);border:rgba(255,255,255,.75) solid 2px;box-sizing:border-box;inset:0;position:absolute}.tp-aplv:focus .tp-aplv_p{border-color:#fff}.tp-colswv{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:10px 10px;background-position:0 0,5px 5px;border-radius:var(--bld-br);overflow:hidden}.tp-colswv.tp-v-disabled{opacity:.5}.tp-colswv_sw{border-radius:0}.tp-colswv_b{cursor:pointer;display:block;height:var(--cnt-usz);left:0;position:absolute;top:0;width:var(--cnt-usz)}.tp-colswv_b:focus::after{border:rgba(255,255,255,.75) solid 2px;border-radius:var(--bld-br);content:"";display:block;inset:0;position:absolute}.tp-coltxtv{display:flex;width:100%}.tp-coltxtv_m{margin-right:4px}.tp-coltxtv_ms{border-radius:var(--bld-br);color:var(--lbl-fg);cursor:pointer;height:var(--cnt-usz);line-height:var(--cnt-usz);padding:0 18px 0 4px}.tp-coltxtv_ms:hover{background-color:var(--in-bg-h)}.tp-coltxtv_ms:focus{background-color:var(--in-bg-f)}.tp-coltxtv_ms:active{background-color:var(--in-bg-a)}.tp-coltxtv_mm{color:var(--lbl-fg)}.tp-coltxtv.tp-v-disabled .tp-coltxtv_mm{opacity:.5}.tp-coltxtv_w{flex:1}.tp-dfwv{position:absolute;top:8px;right:8px;width:256px}.tp-fldv{position:relative}.tp-fldv_t{padding-left:4px}.tp-fldv_b:disabled .tp-fldv_m{display:none}.tp-fldv_c{padding-left:4px}.tp-fldv_i{bottom:0;color:var(--cnt-bg);left:0;overflow:hidden;position:absolute;top:calc(var(--cnt-usz) + 4px);width:max(var(--bs-br),4px)}.tp-fldv_i::before{background-color:currentColor;bottom:0;content:"";left:0;position:absolute;top:0;width:4px}.tp-fldv_b:hover+.tp-fldv_i{color:var(--cnt-bg-h)}.tp-fldv_b:focus+.tp-fldv_i{color:var(--cnt-bg-f)}.tp-fldv_b:active+.tp-fldv_i{color:var(--cnt-bg-a)}.tp-fldv.tp-v-disabled>.tp-fldv_i{opacity:.5}.tp-grlv{position:relative}.tp-grlv_g{display:block;height:calc(var(--cnt-usz)*3)}.tp-grlv_g polyline{fill:none;stroke:var(--mo-fg);stroke-linejoin:round}.tp-grlv_t{margin-top:-4px;transition:left .05s,top .05s;visibility:hidden}.tp-grlv_t.tp-grlv_t-a{visibility:visible}.tp-grlv_t.tp-grlv_t-in{transition:none}.tp-grlv.tp-v-disabled .tp-grlv_g{opacity:.5}.tp-grlv .tp-ttv{background-color:var(--mo-fg)}.tp-grlv .tp-ttv::before{border-top-color:var(--mo-fg)}.tp-lblv{align-items:center;display:flex;line-height:1.3;padding-left:var(--cnt-hp);padding-right:var(--cnt-hp)}.tp-lblv.tp-lblv-nol{display:block}.tp-lblv_l{color:var(--lbl-fg);flex:1;-webkit-hyphens:auto;hyphens:auto;overflow:hidden;padding-left:4px;padding-right:16px}.tp-lblv.tp-v-disabled .tp-lblv_l{opacity:.5}.tp-lblv.tp-lblv-nol .tp-lblv_l{display:none}.tp-lblv_v{align-self:flex-start;flex-grow:0;flex-shrink:0;width:var(--bld-vw)}.tp-lblv.tp-lblv-nol .tp-lblv_v{width:100%}.tp-lstv_s{padding:0 20px 0 var(--bld-hp);width:100%}.tp-lstv_m{color:var(--btn-fg)}.tp-sglv_i{padding-left:var(--bld-hp);padding-right:var(--bld-hp)}.tp-sglv.tp-v-disabled .tp-sglv_i{opacity:.5}.tp-mllv_i{display:block;height:calc(var(--cnt-usz)*3);line-height:var(--cnt-usz);padding-left:var(--bld-hp);padding-right:var(--bld-hp);resize:none;white-space:pre}.tp-mllv.tp-v-disabled .tp-mllv_i{opacity:.5}.tp-p2dv{position:relative}.tp-p2dv_h{display:flex}.tp-p2dv_b{height:var(--cnt-usz);margin-right:4px;position:relative;width:var(--cnt-usz)}.tp-p2dv_b svg{display:block;height:16px;left:50%;margin-left:-8px;margin-top:-8px;position:absolute;top:50%;width:16px}.tp-p2dv_b svg path{stroke:currentColor;stroke-width:2}.tp-p2dv_b svg circle{fill:currentColor}.tp-p2dv_t{flex:1}.tp-p2dv_p{height:0;margin-top:0;opacity:0;overflow:hidden;transition:height .2s ease-in-out,opacity .2s linear,margin .2s ease-in-out}.tp-p2dv.tp-p2dv-expanded .tp-p2dv_p{margin-top:var(--cnt-usp);opacity:1}.tp-p2dv .tp-popv{left:calc(-1*var(--cnt-hp));right:calc(-1*var(--cnt-hp));top:var(--cnt-usz)}.tp-p2dpv{padding-left:calc(var(--cnt-usz) + 4px)}.tp-p2dpv_p{cursor:crosshair;height:0;overflow:hidden;padding-bottom:100%;position:relative}.tp-p2dpv.tp-v-disabled .tp-p2dpv_p{opacity:.5}.tp-p2dpv_g{display:block;height:100%;left:0;pointer-events:none;position:absolute;top:0;width:100%}.tp-p2dpv_ax{opacity:.1;stroke:var(--in-fg);stroke-dasharray:1}.tp-p2dpv_l{opacity:.5;stroke:var(--in-fg);stroke-dasharray:1}.tp-p2dpv_m{border:var(--in-fg) solid 1px;border-radius:50%;box-sizing:border-box;height:4px;margin-left:-2px;margin-top:-2px;position:absolute;width:4px}.tp-p2dpv_p:focus .tp-p2dpv_m{background-color:var(--in-fg);border-width:0}.tp-popv{background-color:var(--bs-bg);border-radius:var(--bs-br);box-shadow:0 2px 4px var(--bs-sh);display:none;max-width:var(--bld-vw);padding:var(--cnt-vp) var(--cnt-hp);position:absolute;visibility:hidden;z-index:1000}.tp-popv.tp-popv-v{display:block;visibility:visible}.tp-sldv.tp-v-disabled{opacity:.5}.tp-sldv_t{box-sizing:border-box;cursor:pointer;height:var(--cnt-usz);margin:0 6px;outline:none;position:relative}.tp-sldv_t::before{background-color:var(--in-bg);border-radius:1px;content:"";display:block;height:2px;inset:0;margin:auto;position:absolute}.tp-sldv_k{height:100%;left:0;position:absolute;top:0}.tp-sldv_k::before{background-color:var(--in-fg);border-radius:1px;content:"";display:block;height:2px;inset:0;margin-bottom:auto;margin-top:auto;position:absolute}.tp-sldv_k::after{background-color:var(--btn-bg);border-radius:var(--bld-br);bottom:0;content:"";display:block;height:12px;margin-bottom:auto;margin-top:auto;position:absolute;right:-6px;top:0;width:12px}.tp-sldv_t:hover .tp-sldv_k::after{background-color:var(--btn-bg-h)}.tp-sldv_t:focus .tp-sldv_k::after{background-color:var(--btn-bg-f)}.tp-sldv_t:active .tp-sldv_k::after{background-color:var(--btn-bg-a)}.tp-sldtxtv{display:flex}.tp-sldtxtv_s{flex:2}.tp-sldtxtv_t{flex:1;margin-left:4px}.tp-tabv{position:relative}.tp-tabv_t{align-items:flex-end;color:var(--cnt-bg);display:flex;overflow:hidden;position:relative}.tp-tabv_t:hover{color:var(--cnt-bg-h)}.tp-tabv_t:has(*:focus){color:var(--cnt-bg-f)}.tp-tabv_t:has(*:active){color:var(--cnt-bg-a)}.tp-tabv_t::before{background-color:currentColor;bottom:0;content:"";height:2px;left:0;pointer-events:none;position:absolute;right:0}.tp-tabv.tp-v-disabled .tp-tabv_t::before{opacity:.5}.tp-tabv.tp-tabv-nop .tp-tabv_t{height:calc(var(--cnt-usz) + 4px);position:relative}.tp-tabv.tp-tabv-nop .tp-tabv_t::before{background-color:var(--cnt-bg);bottom:0;content:"";height:2px;left:0;position:absolute;right:0}.tp-tabv_i{bottom:0;color:var(--cnt-bg);left:0;overflow:hidden;position:absolute;top:calc(var(--cnt-usz) + 4px);width:max(var(--bs-br),4px)}.tp-tabv_i::before{background-color:currentColor;bottom:0;content:"";left:0;position:absolute;top:0;width:4px}.tp-tabv_t:hover+.tp-tabv_i{color:var(--cnt-bg-h)}.tp-tabv_t:has(*:focus)+.tp-tabv_i{color:var(--cnt-bg-f)}.tp-tabv_t:has(*:active)+.tp-tabv_i{color:var(--cnt-bg-a)}.tp-tabv.tp-v-disabled>.tp-tabv_i{opacity:.5}.tp-tbiv{flex:1;min-width:0;position:relative}.tp-tbiv+.tp-tbiv{margin-left:2px}.tp-tbiv+.tp-tbiv.tp-v-disabled::before{opacity:.5}.tp-tbiv_b{display:block;padding-left:calc(var(--cnt-hp) + 4px);padding-right:calc(var(--cnt-hp) + 4px);position:relative;width:100%}.tp-tbiv_b:disabled{opacity:.5}.tp-tbiv_b::before{background-color:var(--cnt-bg);content:"";inset:0 0 2px;pointer-events:none;position:absolute}.tp-tbiv_b:hover::before{background-color:var(--cnt-bg-h)}.tp-tbiv_b:focus::before{background-color:var(--cnt-bg-f)}.tp-tbiv_b:active::before{background-color:var(--cnt-bg-a)}.tp-tbiv_t{color:var(--cnt-fg);height:calc(var(--cnt-usz) + 4px);line-height:calc(var(--cnt-usz) + 4px);opacity:.5;overflow:hidden;position:relative;text-overflow:ellipsis}.tp-tbiv.tp-tbiv-sel .tp-tbiv_t{opacity:1}.tp-tbpv_c{padding-bottom:var(--cnt-vp);padding-left:4px;padding-top:var(--cnt-vp)}.tp-txtv{position:relative}.tp-txtv_i{padding-left:var(--bld-hp);padding-right:var(--bld-hp)}.tp-txtv.tp-txtv-fst .tp-txtv_i{border-bottom-right-radius:0;border-top-right-radius:0}.tp-txtv.tp-txtv-mid .tp-txtv_i{border-radius:0}.tp-txtv.tp-txtv-lst .tp-txtv_i{border-bottom-left-radius:0;border-top-left-radius:0}.tp-txtv.tp-txtv-num .tp-txtv_i{text-align:right}.tp-txtv.tp-txtv-drg .tp-txtv_i{opacity:.3}.tp-txtv_k{cursor:pointer;height:100%;left:calc(var(--bld-hp) - 5px);position:absolute;top:0;width:12px}.tp-txtv_k::before{background-color:var(--in-fg);border-radius:1px;bottom:0;content:"";height:calc(var(--cnt-usz) - 4px);left:50%;margin-bottom:auto;margin-left:-1px;margin-top:auto;opacity:.1;position:absolute;top:0;transition:border-radius .1s,height .1s,transform .1s,width .1s;width:2px}.tp-txtv_k:hover::before,.tp-txtv.tp-txtv-drg .tp-txtv_k::before{opacity:1}.tp-txtv.tp-txtv-drg .tp-txtv_k::before{border-radius:50%;height:4px;transform:translateX(-1px);width:4px}.tp-txtv_g{bottom:0;display:block;height:8px;left:50%;margin:auto;overflow:visible;pointer-events:none;position:absolute;top:0;visibility:hidden;width:100%}.tp-txtv.tp-txtv-drg .tp-txtv_g{visibility:visible}.tp-txtv_gb{fill:none;stroke:var(--in-fg);stroke-dasharray:1}.tp-txtv_gh{fill:none;stroke:var(--in-fg)}.tp-txtv .tp-ttv{margin-left:6px;visibility:hidden}.tp-txtv.tp-txtv-drg .tp-ttv{visibility:visible}.tp-ttv{background-color:var(--in-fg);border-radius:var(--bld-br);color:var(--bs-bg);padding:2px 4px;pointer-events:none;position:absolute;transform:translate(-50%, -100%)}.tp-ttv::before{border-color:var(--in-fg) rgba(0,0,0,0) rgba(0,0,0,0) rgba(0,0,0,0);border-style:solid;border-width:2px;box-sizing:border-box;content:"";font-size:.9em;height:4px;left:50%;margin-left:-2px;position:absolute;top:100%;width:4px}.tp-rotv{background-color:var(--bs-bg);border-radius:var(--bs-br);box-shadow:0 2px 4px var(--bs-sh);font-family:var(--bs-ff);font-size:11px;font-weight:500;line-height:1;text-align:left}.tp-rotv_b{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br);border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br);padding-left:calc(4px + var(--cnt-usz) + var(--cnt-hp));text-align:center}.tp-rotv.tp-rotv-expanded .tp-rotv_b{border-bottom-left-radius:0;border-bottom-right-radius:0;transition-delay:0s;transition-duration:0s}.tp-rotv.tp-rotv-not>.tp-rotv_b{display:none}.tp-rotv_b:disabled .tp-rotv_m{display:none}.tp-rotv_c>.tp-fldv.tp-v-lst>.tp-fldv_c{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c>.tp-fldv.tp-v-lst>.tp-fldv_i{border-bottom-left-radius:var(--bs-br)}.tp-rotv_c>.tp-fldv.tp-v-lst:not(.tp-fldv-expanded)>.tp-fldv_b{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c>.tp-fldv.tp-v-lst.tp-fldv-expanded>.tp-fldv_b{transition-delay:0s;transition-duration:0s}.tp-rotv_c .tp-fldv.tp-v-vlst:not(.tp-fldv-expanded)>.tp-fldv_b{border-bottom-right-radius:var(--bs-br)}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-fldv.tp-v-fst{margin-top:calc(-1*var(--cnt-vp))}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-fldv.tp-v-fst>.tp-fldv_b{border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br)}.tp-rotv_c>.tp-tabv.tp-v-lst>.tp-tabv_c{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c>.tp-tabv.tp-v-lst>.tp-tabv_i{border-bottom-left-radius:var(--bs-br)}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-tabv.tp-v-fst{margin-top:calc(-1*var(--cnt-vp))}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-tabv.tp-v-fst>.tp-tabv_t{border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br)}.tp-rotv.tp-v-disabled,.tp-rotv .tp-v-disabled{pointer-events:none}.tp-rotv.tp-v-hidden,.tp-rotv .tp-v-hidden{display:none}.tp-sprv_r{background-color:var(--grv-fg);border-width:0;display:block;height:2px;margin:0;width:100%}.tp-sprv.tp-v-disabled .tp-sprv_r{opacity:.5}',
            plugins: [
                ListBladePlugin,
                SeparatorBladePlugin,
                SliderBladePlugin,
                TabBladePlugin,
                TextBladePlugin
            ]
        });
    }
}
const VERSION = new Semver('4.0.5');

},{"@parcel/transformer-js/src/esmodule-helpers.js":"53hI8"}],"45cjw":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _barsFolder = require("./BarsFolder");
parcelHelpers.exportAll(_barsFolder, exports);
var _electricFolder = require("./ElectricFolder");
parcelHelpers.exportAll(_electricFolder, exports);
var _visualizationFolder = require("./VisualizationFolder");
parcelHelpers.exportAll(_visualizationFolder, exports);

},{"./BarsFolder":"3XLDs","./ElectricFolder":"gQ6oO","./VisualizationFolder":"6wrEP","@parcel/transformer-js/src/esmodule-helpers.js":"53hI8"}],"3XLDs":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "addBarsFolder", ()=>addBarsFolder);
var _config = require("../../../config");
const addBarsFolder = (pane, settings)=>{
    const folder = pane.addFolder({
        title: "Bars",
        expanded: false
    });
    // Channels
    folder.addBinding(settings, "channels", {
        options: {
            "L + R": (0, _config.config).channels.both,
            L: (0, _config.config).channels.left,
            R: (0, _config.config).channels.right
        }
    });
    folder.addBinding(settings, "ringBandCountSingleChannel", {
        min: 8,
        max: 128,
        step: 8
    });
    folder.addBinding(settings, "ringBandCountBothChannels", {
        min: 4,
        max: 64,
        step: 4
    });
    folder.addBlade({
        view: "separator"
    });
    // Sizes
    folder.addBinding(settings.lineWidths, "bass", {
        label: "lineWidthBass",
        min: 0.1,
        max: 15,
        step: 0.25
    });
    folder.addBinding(settings.lineWidths, "mids", {
        label: "lineWidthMids",
        min: 0.1,
        max: 10,
        step: 0.25
    });
    folder.addBinding(settings.lineWidths, "highs", {
        label: "lineWidthHighs",
        min: 0.1,
        max: 5,
        step: 0.25
    });
    folder.addBlade({
        view: "separator"
    });
    // Colors
    const rangeOptions = {
        min: 0,
        max: 100,
        step: 1
    };
    const colorOptions = {
        color: {
            alpha: true
        }
    };
    const linkedColorsBinding = folder.addBinding(settings, "linkedColors");
    const colorLBinding = folder.addBinding(settings, "colorChannelL", colorOptions);
    const colorRBinding = folder.addBinding(settings, "colorChannelR", colorOptions);
    // Copy into the existing object so everything reading it stays in sync
    const copyColor = (from, to, toBinding)=>{
        Object.assign(to, from);
        toBinding.refresh();
    };
    colorLBinding.on("change", ()=>{
        if (settings.linkedColors) copyColor(settings.colorChannelL, settings.colorChannelR, colorRBinding);
    });
    colorRBinding.on("change", ()=>{
        if (settings.linkedColors) copyColor(settings.colorChannelR, settings.colorChannelL, colorLBinding);
    });
    linkedColorsBinding.on("change", ()=>{
        if (settings.linkedColors) copyColor(settings.colorChannelL, settings.colorChannelR, colorRBinding);
    });
    folder.addBinding(settings, "hueShiftDegrees", {
        min: -360,
        max: 360,
        step: 0.5
    });
    folder.addBinding(settings.saturationRange, "min", {
        ...rangeOptions,
        label: "saturationMin"
    });
    folder.addBinding(settings.saturationRange, "max", {
        ...rangeOptions,
        label: "saturationMax"
    });
    folder.addBinding(settings.lightnessRange, "min", {
        ...rangeOptions,
        label: "lightnessMin"
    });
    folder.addBinding(settings.lightnessRange, "max", {
        ...rangeOptions,
        label: "lightnessMax"
    });
    folder.addBinding(settings, "glowBlur", {
        min: 0.5,
        max: 20,
        step: 0.5
    });
};

},{"../../../config":"ibNvS","@parcel/transformer-js/src/esmodule-helpers.js":"53hI8"}],"gQ6oO":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "addElectricFolder", ()=>addElectricFolder);
const addElectricFolder = (pane, settings)=>{
    const folder = pane.addFolder({
        title: "Electric",
        expanded: false
    });
    // Channels
    folder.addBinding(settings, "bandCount", {
        min: 32,
        max: 128,
        step: 16
    });
    folder.addBlade({
        view: "separator"
    });
    // Dynamics
    folder.addBinding(settings, "ringsAmount", {
        min: 1,
        max: 15,
        step: 1
    });
    folder.addBinding(settings, "ringSpacing", {
        min: 0,
        max: 50,
        step: 0.5
    });
    folder.addBinding(settings, "lineWidthMin", {
        min: 0.5,
        max: 5,
        step: 0.5
    });
    folder.addBinding(settings, "lineWidthMax", {
        min: 5,
        max: 30,
        step: 0.5
    });
    folder.addBinding(settings, "rotationPeriodSeconds", {
        min: 20,
        max: 120,
        step: 1
    });
    folder.addBlade({
        view: "separator"
    });
    // Colors
    folder.addBinding(settings, "color", {
        color: {
            alpha: true
        }
    });
    folder.addBinding(settings, "hueShiftDegrees", {
        min: -360,
        max: 360,
        step: 0.5
    });
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"53hI8"}],"6wrEP":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "addVisualizationFolder", ()=>addVisualizationFolder);
var _config = require("../../../config");
const addVisualizationFolder = (pane, settings)=>{
    const folder = pane.addFolder({
        title: "Visualization"
    });
    folder.addBinding(settings, "variant", {
        options: {
            bars: (0, _config.config).variant.bars,
            electric: (0, _config.config).variant.electric
        }
    });
};

},{"../../../config":"ibNvS","@parcel/transformer-js/src/esmodule-helpers.js":"53hI8"}],"XSias":[function(require,module,exports,__globalThis) {
/**
 * Cross-platform entry point for reading and writing metadata.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CouldNotDetermineFileTypeError", ()=>(0, _parseErrorJs.CouldNotDetermineFileTypeError));
parcelHelpers.export(exports, "UnsupportedFileTypeError", ()=>(0, _parseErrorJs.UnsupportedFileTypeError));
parcelHelpers.export(exports, "LyricsContentType", ()=>(0, _typeJs.LyricsContentType));
parcelHelpers.export(exports, "TimestampFormat", ()=>(0, _typeJs.TimestampFormat));
parcelHelpers.export(exports, "TrackType", ()=>(0, _typeJs.TrackType));
/**
 * Parse Web API File
 * Requires Blob to be able to stream using a ReadableStreamBYOBReader, only available since Node.js ≥ 20
 * @param blob - Blob to parse
 * @param options - Parsing options
 * @returns Metadata
 */ parcelHelpers.export(exports, "parseBlob", ()=>parseBlob);
/**
 * Parse audio from Web Stream.Readable
 * @param webStream - WebStream to read the audio track from
 * @param options - Parsing options
 * @param fileInfo - File information object or MIME-type string
 * @returns Metadata
 */ parcelHelpers.export(exports, "parseWebStream", ()=>parseWebStream);
/**
 * Parse audio from memory
 * @param uint8Array - Uint8Array holding audio data
 * @param fileInfo - File information object or MIME-type string
 * @param options - Parsing options
 * @returns Metadata
 * Ref: https://github.com/Borewit/strtok3/blob/e6938c81ff685074d5eb3064a11c0b03ca934c1d/src/index.ts#L15
 */ parcelHelpers.export(exports, "parseBuffer", ()=>parseBuffer);
/**
 * Parse audio from ITokenizer source
 * @param tokenizer - Audio source implementing the tokenizer interface
 * @param options - Parsing options
 * @returns Metadata
 */ parcelHelpers.export(exports, "parseFromTokenizer", ()=>parseFromTokenizer);
/**
 * Create a dictionary ordered by their tag id (key)
 * @param nativeTags list of tags
 * @returns tags indexed by id
 */ parcelHelpers.export(exports, "orderTags", ()=>orderTags);
/**
 * Convert rating to 1-5 star rating
 * @param rating Normalized rating [0..1] (common.rating[n].rating)
 * @returns Number of stars: 1, 2, 3, 4 or 5 stars
 */ parcelHelpers.export(exports, "ratingToStars", ()=>ratingToStars);
/**
 * Select most likely cover image.
 * @param pictures Usually metadata.common.picture
 * @return Cover image, if any, otherwise null
 */ parcelHelpers.export(exports, "selectCover", ()=>selectCover);
parcelHelpers.export(exports, "scanAppendingHeaders", ()=>scanAppendingHeaders);
/**
 * Implementation only available when loaded as Node.js
 * This method will throw an Error, always.
 */ parcelHelpers.export(exports, "parseFile", ()=>parseFile);
/**
 * Implementation only available when loaded as Node.js
 * This method will throw an Error, always.
 */ parcelHelpers.export(exports, "parseStream", ()=>parseStream);
/**
 * Return a list of supported mime-types
 */ parcelHelpers.export(exports, "getSupportedMimeTypes", ()=>getSupportedMimeTypes);
var _strtok3 = require("strtok3");
var _apev2ParserJs = require("./apev2/APEv2Parser.js");
var _allocationJs = require("./common/Allocation.js");
var _id3V1ParserJs = require("./id3v1/ID3v1Parser.js");
var _lyrics3Js = require("./lyrics3/Lyrics3.js");
var _parserFactoryJs = require("./ParserFactory.js");
var _parseErrorJs = require("./ParseError.js");
parcelHelpers.exportAll(_parseErrorJs, exports);
var _typeJs = require("./type.js");
var _browserJs = require("./write/browser.js");
parcelHelpers.exportAll(_browserJs, exports);
async function parseBlob(blob, options = {}) {
    const tokenizer = (0, _strtok3.fromBlob)(blob, (0, _allocationJs.getTokenizerOptions)(options));
    try {
        return await parseFromTokenizer(tokenizer, options);
    } finally{
        await tokenizer.close();
    }
}
async function parseWebStream(webStream, fileInfo, options = {}) {
    const tokenizer = (0, _strtok3.fromWebStream)(webStream, (0, _allocationJs.getTokenizerOptions)(options, typeof fileInfo === 'string' ? {
        mimeType: fileInfo
    } : fileInfo));
    try {
        return await parseFromTokenizer(tokenizer, options);
    } finally{
        await tokenizer.close();
    }
}
async function parseBuffer(uint8Array, fileInfo, options = {}) {
    const tokenizer = (0, _strtok3.fromBuffer)(uint8Array, (0, _allocationJs.getTokenizerOptions)(options, typeof fileInfo === 'string' ? {
        mimeType: fileInfo
    } : fileInfo));
    return parseFromTokenizer(tokenizer, options);
}
function parseFromTokenizer(tokenizer, options) {
    const parserFactory = new (0, _parserFactoryJs.ParserFactory)();
    return parserFactory.parse(tokenizer, undefined, options);
}
function orderTags(nativeTags) {
    const tags = Object.create(null);
    for (const { id, value } of nativeTags)(tags[id] ||= []).push(value);
    return tags;
}
function ratingToStars(rating) {
    return rating === undefined ? 0 : 1 + Math.round(rating * 4);
}
function selectCover(pictures) {
    return pictures?.find((picture)=>picture.type && [
            'front',
            'cover',
            'cover (front)'
        ].includes(picture.type.toLowerCase())) ?? pictures?.[0] ?? null;
}
async function scanAppendingHeaders(tokenizer, options = {}) {
    let apeOffset = tokenizer.fileInfo.size;
    if (await (0, _id3V1ParserJs.hasID3v1Header)(tokenizer)) {
        apeOffset -= 128;
        const lyricsLen = await (0, _lyrics3Js.getLyricsHeaderLength)(tokenizer);
        apeOffset -= lyricsLen;
    }
    options.apeHeader = await (0, _apev2ParserJs.APEv2Parser).findApeFooterOffset(tokenizer, apeOffset);
}
async function parseFile(_filePath, _options = {}) {
    throw new Error('This function require a Node engine. To load Web API File objects use parseBlob instead.');
}
async function parseStream(_stream, _fileInfo, _options = {}) {
    throw new Error('This function require a Node engine.');
}
function getSupportedMimeTypes() {
    return new (0, _parserFactoryJs.ParserFactory)().getSupportedMimeTypes();
}

},{"strtok3":"7L6Gs","./apev2/APEv2Parser.js":"1ZQcJ","./common/Allocation.js":"8ZVyl","./id3v1/ID3v1Parser.js":"fWBrl","./lyrics3/Lyrics3.js":"hMz63","./ParserFactory.js":"L60ob","./ParseError.js":false,"./type.js":false,"./write/browser.js":false,"@parcel/transformer-js/src/esmodule-helpers.js":"53hI8"}],"7L6Gs":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AbstractTokenizer", ()=>(0, _abstractTokenizerJs.AbstractTokenizer));
parcelHelpers.export(exports, "BufferSizeError", ()=>(0, _bufferSizeErrorJs.BufferSizeError));
parcelHelpers.export(exports, "isRandomAccessTokenizer", ()=>(0, _isRandomAccessTokenizerJs.isRandomAccessTokenizer));
parcelHelpers.export(exports, "AbortError", ()=>(0, _indexJs.AbortError));
parcelHelpers.export(exports, "EndOfStreamError", ()=>(0, _indexJs.EndOfStreamError));
parcelHelpers.export(exports, "TokenizerBoundaryError", ()=>(0, _tokenizerBoundaryErrorJs.TokenizerBoundaryError));
parcelHelpers.export(exports, "createTokenizerView", ()=>(0, _tokenizerViewJs.createTokenizerView));
parcelHelpers.export(exports, "TokenWriter", ()=>(0, _tokenWriterJs.TokenWriter));
/**
 * Construct ReadStreamTokenizer from given Stream.
 * Will set fileSize, if provided given Stream has set the .path property/
 * @param stream - Read from Node.js Stream.Readable
 * @param options - Tokenizer options
 * @returns ReadStreamTokenizer
 */ parcelHelpers.export(exports, "fromStream", ()=>fromStream);
/**
 * Construct ReadStreamTokenizer from given ReadableStream (WebStream API).
 * Will set fileSize, if provided given Stream has set the .path property/
 * @param webStream - Read from Node.js Stream.Readable (must be a byte stream)
 * @param options - Tokenizer options
 * @returns ReadStreamTokenizer
 */ parcelHelpers.export(exports, "fromWebStream", ()=>fromWebStream);
/**
 * Construct ReadStreamTokenizer from given Buffer.
 * @param uint8Array - Uint8Array to tokenize
 * @param options - Tokenizer options
 * @returns BufferTokenizer
 */ parcelHelpers.export(exports, "fromBuffer", ()=>fromBuffer);
/**
 * Construct ReadStreamTokenizer from given Blob.
 * @param blob - Uint8Array to tokenize
 * @param options - Tokenizer options
 * @returns BufferTokenizer
 */ parcelHelpers.export(exports, "fromBlob", ()=>fromBlob);
var _abortSignalJs = require("./AbortSignal.js");
var _blobTokenizerJs = require("./BlobTokenizer.js");
var _bufferSizeErrorJs = require("./BufferSizeError.js");
var _bufferTokenizerJs = require("./BufferTokenizer.js");
var _readStreamTokenizerJs = require("./ReadStreamTokenizer.js");
var _indexJs = require("./stream/index.js");
var _abstractTokenizerJs = require("./AbstractTokenizer.js");
var _isRandomAccessTokenizerJs = require("./isRandomAccessTokenizer.js");
var _tokenizerBoundaryErrorJs = require("./TokenizerBoundaryError.js");
var _tokenizerViewJs = require("./TokenizerView.js");
var _tokenWriterJs = require("./TokenWriter.js");
function fromStream(stream, options) {
    (0, _bufferSizeErrorJs.getMaxBufferSize)(options);
    (0, _abortSignalJs.throwIfAborted)(options?.abortSignal);
    const streamReader = new (0, _indexJs.StreamReader)(stream);
    return new (0, _readStreamTokenizerJs.ReadStreamTokenizer)(streamReader, options);
}
function fromWebStream(webStream, options) {
    (0, _bufferSizeErrorJs.getMaxBufferSize)(options);
    (0, _abortSignalJs.throwIfAborted)(options?.abortSignal);
    const webStreamReader = (0, _indexJs.makeWebStreamReader)(webStream);
    return new (0, _readStreamTokenizerJs.ReadStreamTokenizer)(webStreamReader, options);
}
function fromBuffer(uint8Array, options) {
    return new (0, _bufferTokenizerJs.BufferTokenizer)(uint8Array, options);
}
function fromBlob(blob, options) {
    return new (0, _blobTokenizerJs.BlobTokenizer)(blob, options);
}

},{"./AbortSignal.js":"fqL5a","./BlobTokenizer.js":"cbn6V","./BufferSizeError.js":"Dyq3l","./BufferTokenizer.js":"bDejE","./ReadStreamTokenizer.js":"jRVHY","./stream/index.js":"cufwd","./AbstractTokenizer.js":"9rjND","./isRandomAccessTokenizer.js":"g0pgf","./TokenizerBoundaryError.js":"9A9rS","./TokenizerView.js":"2ho0J","./TokenWriter.js":"jLb0p","@parcel/transformer-js/src/esmodule-helpers.js":"53hI8"}],"fqL5a":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/** Reject an already-cancelled operation before acquiring tokenizer resources. */ parcelHelpers.export(exports, "throwIfAborted", ()=>throwIfAborted);
var _errorsJs = require("./stream/Errors.js");
function throwIfAborted(signal) {
    if (signal?.aborted) throw new (0, _errorsJs.AbortError)();
}

},{"./stream/Errors.js":"fkwOS","@parcel/transformer-js/src/esmodule-helpers.js":"53hI8"}],"fkwOS":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "defaultMessages", ()=>defaultMessages);
/**
 * Thrown on read operation of the end of file or stream has been reached
 */ parcelHelpers.export(exports, "EndOfStreamError", ()=>EndOfStreamError);
parcelHelpers.export(exports, "AbortError", ()=>AbortError);
const defaultMessages = 'End-Of-Stream';
class EndOfStreamError extends Error {
    constructor(){
        super(defaultMessages);
        this.name = 'EndOfStreamError';
    }
}
class AbortError extends Error {
    constructor(message = 'The operation was aborted'){
        super(message);
        this.name = 'AbortError';
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"53hI8"}],"cbn6V":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "BlobTokenizer", ()=>BlobTokenizer);
var _abstractTokenizerJs = require("./AbstractTokenizer.js");
var _indexJs = require("./stream/index.js");
class BlobTokenizer extends (0, _abstractTokenizerJs.AbstractTokenizer) {
    /**
     * Construct BufferTokenizer
     * @param blob - Uint8Array to tokenize
     * @param options Tokenizer options
     */ constructor(blob, options){
        super(options);
        this.blob = blob;
        this.fileInfo = {
            ...options?.fileInfo ?? {},
            size: blob.size,
            mimeType: blob.type
        };
    }
    /**
     * Read buffer from tokenizer
     * @param uint8Array - Uint8Array to tokenize
     * @param options - Read behaviour options
     * @returns {Promise<number>}
     */ async readBuffer(uint8Array, options) {
        const normOptions = this.normalizeOptions(uint8Array, options);
        const bytesRead = await this.peekBuffer(uint8Array, normOptions);
        this.position = normOptions.position + bytesRead;
        return bytesRead;
    }
    /**
     * Peek (read ahead) buffer from tokenizer
     * @param buffer
     * @param options - Read behaviour options
     * @returns {Promise<number>}
     */ async peekBuffer(buffer, options) {
        const normOptions = this.normalizeOptions(buffer, options);
        const bytes2read = Math.max(0, Math.min(this.blob.size - normOptions.position, normOptions.length));
        if (!normOptions.mayBeLess && bytes2read < normOptions.length) throw new (0, _indexJs.EndOfStreamError)();
        for(let offset = 0; offset < bytes2read;){
            const chunkLength = Math.min(this.maxBufferSize, bytes2read - offset);
            const position = normOptions.position + offset;
            const arrayBuffer = await this.blob.slice(position, position + chunkLength).arrayBuffer();
            buffer.set(new Uint8Array(arrayBuffer), offset);
            offset += chunkLength;
        }
        return bytes2read;
    }
    close() {
        return super.close();
    }
    supportsRandomAccess() {
        return true;
    }
    setPosition(position) {
        this.validateLength(position, 'position');
        this.position = position;
    }
}

},{"./AbstractTokenizer.js":"9rjND","./stream/index.js":"cufwd","@parcel/transformer-js/src/esmodule-helpers.js":"53hI8"}],"9rjND":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Core tokenizer
 */ parcelHelpers.export(exports, "AbstractTokenizer", ()=>AbstractTokenizer);
var _abortSignalJs = require("./AbortSignal.js");
var _bufferSizeErrorJs = require("./BufferSizeError.js");
var _indexJs = require("./stream/index.js");
class AbstractTokenizer {
    /**
     * Constructor
     * @param options Tokenizer options
     * @protected
     */ constructor(options){
        this.numBuffer = new Uint8Array(10); // Includes the 80-bit floating-point tokens.
        /**
         * Tokenizer-stream position
         */ this.position = 0;
        this.maxBufferSize = (0, _bufferSizeErrorJs.getMaxBufferSize)(options);
        (0, _abortSignalJs.throwIfAborted)(options?.abortSignal);
        this.onClose = options?.onClose;
        if (options?.abortSignal) this.addAbortListener(options.abortSignal, ()=>{
            this.abort().catch(()=>{
            // Signal events cannot propagate cancellation errors; explicit abort/close calls still reject.
            });
        });
    }
    addAbortListener(signal, listener) {
        this.abortSignal = signal;
        this.abortListener = listener;
        signal.addEventListener('abort', listener, {
            once: true
        });
    }
    removeAbortListener() {
        if (this.abortListener) this.abortSignal?.removeEventListener('abort', this.abortListener);
        this.abortSignal = undefined;
        this.abortListener = undefined;
    }
    /**
     * Read a token from the tokenizer-stream
     * @param token - The token to read
     * @param position - If provided, the desired position in the tokenizer-stream
     * @returns Promise with token data
     */ async readToken(token, position = this.position) {
        this.validateTokenRead(token.len, position);
        const uint8Array = new Uint8Array(token.len);
        const len = await this.readBuffer(uint8Array, {
            position
        });
        if (len < token.len) throw new (0, _indexJs.EndOfStreamError)();
        return token.get(uint8Array, 0);
    }
    /**
     * Peek a token from the tokenizer-stream.
     * @param token - Token to peek from the tokenizer-stream.
     * @param position - Offset where to begin reading within the file. If position is null, data will be read from the current file position.
     * @returns Promise with token data
     */ async peekToken(token, position = this.position) {
        const peekPosition = position ?? this.position;
        this.validateTokenRead(token.len, peekPosition, true);
        const uint8Array = new Uint8Array(token.len);
        const len = await this.peekBuffer(uint8Array, {
            position: peekPosition
        });
        if (len < token.len) throw new (0, _indexJs.EndOfStreamError)();
        return token.get(uint8Array, 0);
    }
    /**
     * Read a numeric token from the stream
     * @param token - Numeric token
     * @returns Promise with number
     */ async readNumber(token) {
        const len = await this.readBuffer(this.numBuffer, {
            length: token.len
        });
        if (len < token.len) throw new (0, _indexJs.EndOfStreamError)();
        return token.get(this.numBuffer, 0);
    }
    /**
     * Read a numeric token from the stream
     * @param token - Numeric token
     * @returns Promise with number
     */ async peekNumber(token) {
        const len = await this.peekBuffer(this.numBuffer, {
            length: token.len
        });
        if (len < token.len) throw new (0, _indexJs.EndOfStreamError)();
        return token.get(this.numBuffer, 0);
    }
    /**
     * Ignore number of bytes, advances the pointer in under tokenizer-stream.
     * @param length - Number of bytes to ignore.  Must be ≥ 0.
     * @return resolves the number of bytes ignored, equals length if this available, otherwise the number of bytes available
     */ async ignore(length) {
        if (length < 0) throw new RangeError("ignore length must be \u2265 0 bytes");
        this.validateLength(length, 'ignore length');
        this.validateLength(this.position + length, 'end position');
        if (this.fileInfo.size !== undefined) {
            const bytesLeft = Math.max(0, this.fileInfo.size - this.position);
            if (length > bytesLeft) {
                this.position += bytesLeft;
                return bytesLeft;
            }
        }
        this.position += length;
        return length;
    }
    close() {
        if (!this.closePromise) {
            this.removeAbortListener();
            // Cache completion before invoking cleanup hooks or caller callbacks.
            this.closePromise = Promise.resolve().then(()=>this.closeOnce());
        }
        return this.closePromise;
    }
    /** Perform cleanup once, sharing completion and the first error across close calls. */ async closeOnce() {
        await this.abort();
        await this.onClose?.();
    }
    /**
     * Validate a byte length or position before using it in buffer calculations.
     * @param value - Value that must be a non-negative safe integer
     * @param name - Label used in the validation error
     * @throws RangeError if the value is negative or not a safe integer
     */ validateLength(value, name) {
        if (!Number.isSafeInteger(value) || value < 0) throw new RangeError(`${name} must be a non-negative safe integer`);
    }
    /**
     * Validate a requested buffer size against the configured allocation limit.
     * @param length - Requested buffer size in bytes
     * @throws RangeError if the length is negative or not a safe integer
     * @throws BufferSizeError if the length exceeds maxBufferSize
     */ validateBufferSize(length) {
        this.validateLength(length, 'buffer length');
        if (length > this.maxBufferSize) throw new (0, _bufferSizeErrorJs.BufferSizeError)(length, this.maxBufferSize);
    }
    /**
     * Validate a token request before allocating a buffer or consuming input.
     * @param length - Token length in bytes
     * @param position - Byte offset where the token starts
     * @param peek - Whether to include skipped stream bytes in the lookahead limit
     * @throws RangeError if a length or position is negative or not a safe integer
     * @throws BufferSizeError if the token buffer or stream lookahead exceeds maxBufferSize
     * @throws Error if a stream request starts before the current position
     * @throws EndOfStreamError if the token extends beyond the known input size
     */ validateTokenRead(length, position, peek = false) {
        this.validateBufferSize(length);
        this.validateLength(position, 'position');
        this.validateLength(position + length, 'end position');
        if (!this.supportsRandomAccess() && position < this.position) throw new Error('`options.position` must be equal or greater than `tokenizer.position`');
        if (peek && !this.supportsRandomAccess()) this.validateBufferSize(length + position - this.position);
        if (this.fileInfo.size !== undefined && length > this.fileInfo.size - position) throw new (0, _indexJs.EndOfStreamError)();
    }
    /**
     * Apply defaults and validate buffer read or peek options.
     * @param uint8Array - Target buffer whose length is the default read length
     * @param options - Requested length, position and partial-read behavior
     * @returns Validated options with an explicit length, position and mayBeLess flag
     * @throws RangeError if a length or position is invalid, or the length exceeds the target buffer
     * @throws Error if a stream request starts before the current position
     */ normalizeOptions(uint8Array, options) {
        const length = options?.length ?? uint8Array.length;
        const position = options?.position ?? this.position;
        this.validateLength(length, 'length');
        this.validateLength(position, 'position');
        this.validateLength(position + length, 'end position');
        if (length > uint8Array.length) throw new RangeError('length must not exceed the target buffer length');
        if (!this.supportsRandomAccess() && position < this.position) throw new Error('`options.position` must be equal or greater than `tokenizer.position`');
        return {
            length,
            position,
            mayBeLess: options?.mayBeLess ?? false
        };
    }
    abort() {
        this.removeAbortListener();
        return Promise.resolve(); // Ignore abort signal
    }
}

},{"./AbortSignal.js":"fqL5a","./BufferSizeError.js":"Dyq3l","./stream/index.js":"cufwd","@parcel/transformer-js/src/esmodule-helpers.js":"53hI8"}],"Dyq3l":[function(require,module,exports,__globalThis) {
/** Thrown before a tokenizer or writer buffer exceeds its configured limit. */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "BufferSizeError", ()=>BufferSizeError);
/**
 * Validate options before acquiring file handles or stream readers.
 * @param options - Tokenizer options containing the optional allocation limit
 * @returns Configured buffer limit in bytes, or Infinity when the limit is disabled
 * @throws RangeError if maxBufferSize is neither a positive safe integer nor Infinity
 */ parcelHelpers.export(exports, "getMaxBufferSize", ()=>getMaxBufferSize);
class BufferSizeError extends RangeError {
    /**
     * Create an error describing an allocation that exceeds the configured limit.
     * @param requestedSize - Requested buffer size in bytes
     * @param maxBufferSize - Configured maximum buffer size in bytes
     */ constructor(requestedSize, maxBufferSize){
        super(`Requested buffer size ${requestedSize} exceeds maxBufferSize ${maxBufferSize}`);
        this.requestedSize = requestedSize;
        this.maxBufferSize = maxBufferSize;
        this.name = 'BufferSizeError';
    }
}
function getMaxBufferSize(options) {
    const limit = options?.maxBufferSize ?? Number.POSITIVE_INFINITY;
    if (limit !== Number.POSITIVE_INFINITY && (!Number.isSafeInteger(limit) || limit <= 0)) throw new RangeError('maxBufferSize must be a positive safe integer or Infinity');
    return limit;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"53hI8"}],"cufwd":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AbortError", ()=>(0, _errorsJs.AbortError));
parcelHelpers.export(exports, "EndOfStreamError", ()=>(0, _errorsJs.EndOfStreamError));
parcelHelpers.export(exports, "StreamReader", ()=>(0, _streamReaderJs.StreamReader));
parcelHelpers.export(exports, "WebStreamByobReader", ()=>(0, _webStreamByobReaderJs.WebStreamByobReader));
parcelHelpers.export(exports, "WebStreamDefaultReader", ()=>(0, _webStreamDefaultReaderJs.WebStreamDefaultReader));
parcelHelpers.export(exports, "makeWebStreamReader", ()=>(0, _webStreamReaderFactoryJs.makeWebStreamReader));
var _errorsJs = require("./Errors.js");
var _streamReaderJs = require("./StreamReader.js");
var _webStreamByobReaderJs = require("./WebStreamByobReader.js");
var _webStreamDefaultReaderJs = require("./WebStreamDefaultReader.js");
var _webStreamReaderFactoryJs = require("./WebStreamReaderFactory.js");

},{"./Errors.js":"fkwOS","./StreamReader.js":"bGWh2","./WebStreamByobReader.js":"fX7u3","./WebStreamDefaultReader.js":"ibzxA","./WebStreamReaderFactory.js":"hp47C","@parcel/transformer-js/src/esmodule-helpers.js":"53hI8"}],"bGWh2":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Node.js Readable Stream Reader
 * Ref: https://nodejs.org/api/stream.html#readable-streams
 */ parcelHelpers.export(exports, "StreamReader", ()=>StreamReader);
var _abstractStreamReaderJs = require("./AbstractStreamReader.js");
var _deferredJs = require("./Deferred.js");
var _errorsJs = require("./Errors.js");
function handlePostEndError() {
    this.removeListener('close', removePostEndErrorHandler);
}
function removePostEndErrorHandler() {
    this.removeListener('error', handlePostEndError);
}
class StreamReader extends (0, _abstractStreamReaderJs.AbstractStreamReader) {
    constructor(s){
        super();
        this.s = s;
        /**
         * Pending requests waiting for data, tracked until completion or cancellation
         */ this.pendingRequests = new Set();
        this.onEnd = ()=>{
            this.endOfStream = true;
            this.removeLifecycleListeners();
            // Auto-destruction may emit an error after `end`. These shared handlers do
            // not retain this reader when `emitClose` is disabled.
            this.s.once('error', handlePostEndError);
            this.s.once('close', removePostEndErrorHandler);
            for (const request of this.pendingRequests){
                this.removeRequest(request);
                request.deferred.resolve(0);
            }
        };
        this.onError = (err)=>this.reject(err);
        this.onClose = ()=>{
            this.removeLifecycleListeners();
            // Normal EOF may leave peeked bytes that the caller still needs to consume.
            if (!this.endOfStream) this.abort();
        };
        if (!s.read || !s.once) throw new Error('Expected an instance of stream.Readable');
        this.s.once('end', this.onEnd);
        this.s.once('error', this.onError);
        this.s.once('close', this.onClose);
    }
    /**
     * Read chunk from stream
     * @param buffer Target Uint8Array (or Buffer) to store data read from stream in
     * @param mayBeLess - If true, may fill the buffer partially
     * @returns Number of bytes read
     */ async readFromStream(buffer, mayBeLess) {
        if (buffer.length === 0) return 0;
        const readBuffer = this.s.read(buffer.length);
        if (readBuffer) {
            buffer.set(readBuffer);
            return readBuffer.length;
        }
        const request = {
            buffer,
            mayBeLess,
            deferred: new (0, _deferredJs.Deferred)(),
            onReadable: ()=>this.readDeferred(request)
        };
        this.pendingRequests.add(request);
        this.s.once('readable', request.onReadable);
        return request.deferred.promise;
    }
    /**
     * Process deferred read request
     * @param request Deferred read request
     */ readDeferred(request) {
        if (this.interrupted || !this.pendingRequests.has(request)) return;
        try {
            const readBuffer = this.s.read(request.buffer.length);
            // Reading may synchronously emit an error or close event that cancels the request.
            if (!this.pendingRequests.has(request)) return;
            if (readBuffer) {
                request.buffer.set(readBuffer);
                this.removeRequest(request);
                request.deferred.resolve(readBuffer.length);
            } else this.s.once('readable', request.onReadable);
        } catch (error) {
            this.reject(error instanceof Error ? error : new Error(String(error)));
        }
    }
    removeRequest(request) {
        this.s.removeListener('readable', request.onReadable);
        this.pendingRequests.delete(request);
    }
    removeLifecycleListeners() {
        this.s.removeListener('end', this.onEnd);
        this.s.removeListener('error', this.onError);
        this.s.removeListener('close', this.onClose);
    }
    reject(err) {
        this.removeLifecycleListeners();
        this.interrupted = true;
        this.peekQueue = [];
        for (const request of this.pendingRequests){
            this.removeRequest(request);
            request.deferred.reject(err);
        }
    }
    async abort() {
        this.reject(new (0, _errorsJs.AbortError)());
    }
    async close() {
        return this.abort();
    }
}

},{"./AbstractStreamReader.js":"7p7I1","./Deferred.js":"8jhAy","./Errors.js":"fkwOS","@parcel/transformer-js/src/esmodule-helpers.js":"53hI8"}],"7p7I1":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AbstractStreamReader", ()=>AbstractStreamReader);
var _errorsJs = require("./Errors.js");
class AbstractStreamReader {
    constructor(){
        this.endOfStream = false;
        this.interrupted = false;
        /**
         * Store peeked data
         * @type {Array}
         */ this.peekQueue = [];
    }
    async peek(uint8Array, mayBeLess = false) {
        const bytesRead = await this.read(uint8Array, mayBeLess);
        this.peekQueue.push(uint8Array.subarray(0, bytesRead)); // Put read data back to peek buffer
        return bytesRead;
    }
    async read(buffer, mayBeLess = false) {
        if (buffer.length === 0) return 0;
        let bytesRead = this.readFromPeekBuffer(buffer);
        if (!this.endOfStream) bytesRead += await this.readRemainderFromStream(buffer.subarray(bytesRead), mayBeLess);
        if (bytesRead === 0 && !mayBeLess) throw new (0, _errorsJs.EndOfStreamError)();
        return bytesRead;
    }
    /**
     * Read chunk from stream
     * @param buffer - Target Uint8Array (or Buffer) to store data read from stream in
     * @returns Number of bytes read
     */ readFromPeekBuffer(buffer) {
        let remaining = buffer.length;
        let bytesRead = 0;
        // consume peeked data first
        while(this.peekQueue.length > 0 && remaining > 0){
            const peekData = this.peekQueue.pop(); // Front of queue
            if (!peekData) throw new Error('peekData should be defined');
            const lenCopy = Math.min(peekData.length, remaining);
            buffer.set(peekData.subarray(0, lenCopy), bytesRead);
            bytesRead += lenCopy;
            remaining -= lenCopy;
            if (lenCopy < peekData.length) // remainder back to queue
            this.peekQueue.push(peekData.subarray(lenCopy));
        }
        return bytesRead;
    }
    async readRemainderFromStream(buffer, mayBeLess) {
        let bytesRead = 0;
        // Continue reading from stream if required
        while(bytesRead < buffer.length && !this.endOfStream){
            if (this.interrupted) throw new (0, _errorsJs.AbortError)();
            const chunkLen = await this.readFromStream(buffer.subarray(bytesRead), mayBeLess);
            if (chunkLen === 0) break;
            bytesRead += chunkLen;
        }
        if (!mayBeLess && bytesRead < buffer.length) throw new (0, _errorsJs.EndOfStreamError)();
        return bytesRead;
    }
}

},{"./Errors.js":"fkwOS","@parcel/transformer-js/src/esmodule-helpers.js":"53hI8"}],"8jhAy":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Deferred", ()=>Deferred);
class Deferred {
    constructor(){
        this.resolve = ()=>null;
        this.reject = ()=>null;
        this.promise = new Promise((resolve, reject)=>{
            this.reject = reject;
            this.resolve = resolve;
        });
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"53hI8"}],"fX7u3":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Read from a WebStream using a BYOB reader
 * Reference: https://nodejs.org/api/webstreams.html#class-readablestreambyobreader
 */ parcelHelpers.export(exports, "WebStreamByobReader", ()=>WebStreamByobReader);
var _webStreamReaderJs = require("./WebStreamReader.js");
class WebStreamByobReader extends (0, _webStreamReaderJs.WebStreamReader) {
    /**
     * Read from stream
     * @param buffer - Target Uint8Array (or Buffer) to store data read from stream in
     * @param mayBeLess - If true, may fill the buffer partially
     * @protected Bytes read
     */ async readFromStream(buffer, mayBeLess) {
        if (buffer.length === 0) return 0;
        const result = await this.reader.read(new Uint8Array(buffer.length), {
            min: mayBeLess ? undefined : buffer.length
        });
        if (result.done) this.endOfStream = result.done;
        if (result.value) {
            buffer.set(result.value);
            return result.value.length;
        }
        return 0;
    }
}

},{"./WebStreamReader.js":"42AVJ","@parcel/transformer-js/src/esmodule-helpers.js":"53hI8"}],"42AVJ":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "WebStreamReader", ()=>WebStreamReader);
var _abstractStreamReaderJs = require("./AbstractStreamReader.js");
class WebStreamReader extends (0, _abstractStreamReaderJs.AbstractStreamReader) {
    constructor(reader){
        super();
        this.reader = reader;
    }
    async abort() {
        return this.close();
    }
    async close() {
        this.reader.releaseLock();
    }
}

},{"./AbstractStreamReader.js":"7p7I1","@parcel/transformer-js/src/esmodule-helpers.js":"53hI8"}],"ibzxA":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "WebStreamDefaultReader", ()=>WebStreamDefaultReader);
var _abstractStreamReaderJs = require("./AbstractStreamReader.js");
var _errorsJs = require("./Errors.js");
class WebStreamDefaultReader extends (0, _abstractStreamReaderJs.AbstractStreamReader) {
    constructor(reader){
        super();
        this.reader = reader;
        this.buffer = null; // Internal buffer to store excess data
    }
    /**
     * Copy chunk to target, and store the remainder in this.buffer
     */ writeChunk(target, chunk) {
        const written = Math.min(chunk.length, target.length);
        target.set(chunk.subarray(0, written));
        // Adjust the remainder of the buffer
        if (written < chunk.length) this.buffer = chunk.subarray(written);
        else this.buffer = null;
        return written;
    }
    /**
     * Read from stream
     * @param buffer - Target Uint8Array (or Buffer) to store data read from stream in
     * @param mayBeLess - If true, may fill the buffer partially
     * @protected Bytes read
     */ async readFromStream(buffer, mayBeLess) {
        if (buffer.length === 0) return 0;
        let totalBytesRead = 0;
        // Serve from the internal buffer first
        if (this.buffer) totalBytesRead += this.writeChunk(buffer, this.buffer);
        // Continue reading from the stream if more data is needed
        while(totalBytesRead < buffer.length && !this.endOfStream){
            const result = await this.reader.read();
            if (result.done) {
                this.endOfStream = true;
                break;
            }
            if (result.value) totalBytesRead += this.writeChunk(buffer.subarray(totalBytesRead), result.value);
        }
        if (!mayBeLess && totalBytesRead === 0 && this.endOfStream) throw new (0, _errorsJs.EndOfStreamError)();
        return totalBytesRead;
    }
    abort() {
        this.interrupted = true;
        return this.reader.cancel();
    }
    async close() {
        try {
            await this.abort();
        } finally{
            this.reader.releaseLock();
        }
    }
}

},{"./AbstractStreamReader.js":"7p7I1","./Errors.js":"fkwOS","@parcel/transformer-js/src/esmodule-helpers.js":"53hI8"}],"hp47C":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "makeWebStreamReader", ()=>makeWebStreamReader);
var _webStreamByobReaderJs = require("./WebStreamByobReader.js");
var _webStreamDefaultReaderJs = require("./WebStreamDefaultReader.js");
function makeWebStreamReader(stream) {
    try {
        const reader = stream.getReader({
            mode: 'byob'
        });
        if (reader instanceof ReadableStreamDefaultReader) // Fallback to default reader in case `mode: byob` is ignored
        return new (0, _webStreamDefaultReaderJs.WebStreamDefaultReader)(reader);
        return new (0, _webStreamByobReaderJs.WebStreamByobReader)(reader);
    } catch (error) {
        if (error instanceof TypeError) // Fallback to default reader in case `mode: byob` rejected by a `TypeError`
        return new (0, _webStreamDefaultReaderJs.WebStreamDefaultReader)(stream.getReader());
        throw error;
    }
}

},{"./WebStreamByobReader.js":"fX7u3","./WebStreamDefaultReader.js":"ibzxA","@parcel/transformer-js/src/esmodule-helpers.js":"53hI8"}],"bDejE":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "BufferTokenizer", ()=>BufferTokenizer);
var _abstractTokenizerJs = require("./AbstractTokenizer.js");
var _indexJs = require("./stream/index.js");
class BufferTokenizer extends (0, _abstractTokenizerJs.AbstractTokenizer) {
    /**
     * Construct BufferTokenizer
     * @param uint8Array - Uint8Array to tokenize
     * @param options Tokenizer options
     */ constructor(uint8Array, options){
        super(options);
        this.uint8Array = uint8Array;
        this.fileInfo = {
            ...options?.fileInfo ?? {},
            size: uint8Array.length
        };
    }
    /**
     * Read buffer from tokenizer
     * @param uint8Array - Uint8Array to tokenize
     * @param options - Read behaviour options
     * @returns {Promise<number>}
     */ async readBuffer(uint8Array, options) {
        const normOptions = this.normalizeOptions(uint8Array, options);
        const bytesRead = await this.peekBuffer(uint8Array, normOptions);
        this.position = normOptions.position + bytesRead;
        return bytesRead;
    }
    /**
     * Peek (read ahead) buffer from tokenizer
     * @param uint8Array
     * @param options - Read behaviour options
     * @returns {Promise<number>}
     */ async peekBuffer(uint8Array, options) {
        const normOptions = this.normalizeOptions(uint8Array, options);
        const bytes2read = Math.max(0, Math.min(this.uint8Array.length - normOptions.position, normOptions.length));
        if (!normOptions.mayBeLess && bytes2read < normOptions.length) throw new (0, _indexJs.EndOfStreamError)();
        uint8Array.set(this.uint8Array.subarray(normOptions.position, normOptions.position + bytes2read));
        return bytes2read;
    }
    close() {
        return super.close();
    }
    supportsRandomAccess() {
        return true;
    }
    setPosition(position) {
        this.validateLength(position, 'position');
        this.position = position;
    }
}

},{"./AbstractTokenizer.js":"9rjND","./stream/index.js":"cufwd","@parcel/transformer-js/src/esmodule-helpers.js":"53hI8"}],"jRVHY":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ReadStreamTokenizer", ()=>ReadStreamTokenizer);
var _abstractTokenizerJs = require("./AbstractTokenizer.js");
var _indexJs = require("./stream/index.js");
const ignoreChunkSize = 256000;
class ReadStreamTokenizer extends (0, _abstractTokenizerJs.AbstractTokenizer) {
    /**
     * Constructor
     * @param streamReader stream-reader to read from
     * @param options Tokenizer options
     */ constructor(streamReader, options){
        super(options);
        this.streamReader = streamReader;
        this.fileInfo = options?.fileInfo ?? {};
    }
    /**
     * Read buffer from tokenizer
     * @param uint8Array - Target Uint8Array to fill with data read from the tokenizer-stream
     * @param options - Read behaviour options
     * @returns Promise with number of bytes read
     */ async readBuffer(uint8Array, options) {
        const normOptions = this.normalizeOptions(uint8Array, options);
        const skipBytes = normOptions.position - this.position;
        if (skipBytes > 0) {
            await this.ignore(skipBytes);
            return this.readBuffer(uint8Array, options);
        }
        if (skipBytes < 0) throw new Error('`options.position` must be equal or greater than `tokenizer.position`');
        if (normOptions.length === 0) return 0;
        let bytesRead = 0;
        // Account for partial input before reporting an exact-read failure.
        while(bytesRead < normOptions.length){
            const chunkLength = Math.min(this.maxBufferSize, normOptions.length - bytesRead);
            const count = await this.streamReader.read(uint8Array.subarray(bytesRead, bytesRead + chunkLength), true);
            bytesRead += count;
            this.position += count;
            if (count < chunkLength) break;
        }
        if (!normOptions.mayBeLess && bytesRead < normOptions.length) throw new (0, _indexJs.EndOfStreamError)();
        return bytesRead;
    }
    /**
     * Peek (read ahead) buffer from tokenizer
     * @param uint8Array - Uint8Array (or Buffer) to write data to
     * @param options - Read behaviour options
     * @returns Promise with number of bytes peeked
     */ async peekBuffer(uint8Array, options) {
        const normOptions = this.normalizeOptions(uint8Array, options);
        if (normOptions.length === 0) return 0;
        // A known-empty range needs neither lookahead allocation nor source I/O.
        if (this.fileInfo.size !== undefined && normOptions.position >= this.fileInfo.size) {
            if (normOptions.mayBeLess) return 0;
            throw new (0, _indexJs.EndOfStreamError)();
        }
        const lookaheadSize = normOptions.length + normOptions.position - this.position;
        this.validateBufferSize(lookaheadSize);
        let bytesRead = 0;
        if (normOptions.position) {
            const skipBytes = normOptions.position - this.position;
            if (skipBytes > 0) {
                const skipBuffer = new Uint8Array(normOptions.length + skipBytes);
                bytesRead = await this.peekBuffer(skipBuffer, {
                    mayBeLess: normOptions.mayBeLess
                });
                const bytesPeeked = Math.max(0, bytesRead - skipBytes);
                uint8Array.set(skipBuffer.subarray(skipBytes, skipBytes + bytesPeeked));
                return bytesPeeked;
            }
            if (skipBytes < 0) throw new Error('Cannot peek from a negative offset in a stream');
        }
        if (normOptions.length > 0) {
            try {
                // The reader retains this buffer. Keep it independent of caller-owned memory,
                // including partial bytes retained when an exact peek encounters truncation.
                const peekBuffer = new Uint8Array(normOptions.length);
                bytesRead = await this.streamReader.peek(peekBuffer, true);
                uint8Array.set(peekBuffer.subarray(0, bytesRead));
            } catch (err) {
                if (options?.mayBeLess && err instanceof (0, _indexJs.EndOfStreamError)) return 0;
                throw err;
            }
            if (!normOptions.mayBeLess && bytesRead < normOptions.length) throw new (0, _indexJs.EndOfStreamError)();
        }
        return bytesRead;
    }
    /**
     * @param length Number of bytes to ignore. Must be ≥ 0.
     */ async ignore(length) {
        if (length < 0) throw new RangeError("ignore length must be \u2265 0 bytes");
        this.validateLength(length, 'ignore length');
        this.validateLength(this.position + length, 'end position');
        if (length > 0 && this.fileInfo.size !== undefined && length > this.fileInfo.size - this.position) throw new (0, _indexJs.EndOfStreamError)();
        const bufSize = Math.min(ignoreChunkSize, this.maxBufferSize, length);
        const buf = new Uint8Array(bufSize);
        let totBytesRead = 0;
        while(totBytesRead < length){
            const remaining = length - totBytesRead;
            const bytesRead = await this.readBuffer(buf, {
                length: Math.min(bufSize, remaining)
            });
            if (bytesRead < 0) return bytesRead;
            totBytesRead += bytesRead;
        }
        return totBytesRead;
    }
    abort() {
        this.removeAbortListener();
        return this.streamReader.abort();
    }
    async close() {
        this.removeAbortListener();
        return this.streamReader.close();
    }
    supportsRandomAccess() {
        return false;
    }
}

},{"./AbstractTokenizer.js":"9rjND","./stream/index.js":"cufwd","@parcel/transformer-js/src/esmodule-helpers.js":"53hI8"}],"g0pgf":[function(require,module,exports,__globalThis) {
/**
 * Check for random-access capability, position control and a known file size.
 * A known size alone does not imply random access.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isRandomAccessTokenizer", ()=>isRandomAccessTokenizer);
function isRandomAccessTokenizer(tokenizer) {
    return tokenizer.supportsRandomAccess() && 'setPosition' in tokenizer && typeof tokenizer.setPosition === 'function' && typeof tokenizer.fileInfo.size === 'number';
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"53hI8"}],"9A9rS":[function(require,module,exports,__globalThis) {
/** A request exceeds a tokenizer view, rather than encountering truncated input. */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "TokenizerBoundaryError", ()=>TokenizerBoundaryError);
class TokenizerBoundaryError extends RangeError {
    constructor(position, length, size){
        super(`Range at position ${position} with length ${length} exceeds tokenizer view size ${size}`);
        this.position = position;
        this.length = length;
        this.size = size;
        this.name = 'TokenizerBoundaryError';
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"53hI8"}],"2ho0J":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createTokenizerView", ()=>createTokenizerView);
var _isRandomAccessTokenizerJs = require("./isRandomAccessTokenizer.js");
var _indexJs = require("./stream/index.js");
var _tokenizerBoundaryErrorJs = require("./TokenizerBoundaryError.js");
function validateOffset(value, name) {
    if (!Number.isSafeInteger(value) || value < 0) throw new RangeError(`${name} must be a non-negative safe integer`);
}
function createTokenizerView(source, length) {
    return (0, _isRandomAccessTokenizerJs.isRandomAccessTokenizer)(source) ? new RandomAccessTokenizerView(source, length) : new TokenizerView(source, length);
}
class TokenizerView {
    constructor(source, size){
        this.source = source;
        this.size = size;
        this.closed = false;
        this.closedPosition = 0;
        this.busy = false;
        validateOffset(size, 'length');
        validateOffset(source.position, 'source position');
        validateOffset(source.position + size, 'end position');
        if (source instanceof TokenizerView) {
            source.assertAvailable();
            source.translateRange(size, source.position);
        }
        this.start = source.position;
        // A chunk has its own size; the outer file's MIME type/path need not describe it.
        this.fileInfo = {
            size
        };
    }
    get position() {
        return this.closed ? this.closedPosition : this.source.position - this.start;
    }
    get remaining() {
        return this.size - this.position;
    }
    supportsRandomAccess() {
        return false;
    }
    createView(length) {
        this.assertAvailable();
        return createTokenizerView(this, length);
    }
    async readBuffer(buffer, options) {
        return this.bufferOperation('readBuffer', buffer, options);
    }
    async peekBuffer(buffer, options) {
        return this.bufferOperation('peekBuffer', buffer, options);
    }
    async bufferOperation(method, buffer, options) {
        this.assertAvailable();
        const length = options?.length ?? buffer.length;
        const position = options?.position ?? this.position;
        const absolutePosition = this.translateRange(length, position);
        if (length > buffer.length) throw new RangeError('length must not exceed the target buffer length');
        return this.run(()=>this.source[method](buffer, {
                ...options,
                length,
                position: absolutePosition
            }));
    }
    async readToken(token, position = this.position) {
        this.assertAvailable();
        const absolutePosition = this.translateRange(token.len, position);
        return this.run(()=>this.source.readToken(token, absolutePosition));
    }
    async peekToken(token, position = this.position) {
        this.assertAvailable();
        const absolutePosition = this.translateRange(token.len, position ?? this.position);
        return this.run(()=>this.source.peekToken(token, absolutePosition));
    }
    async readNumber(token) {
        this.assertAvailable();
        this.translateRange(token.len, this.position);
        return this.run(()=>this.source.readNumber(token));
    }
    async peekNumber(token) {
        this.assertAvailable();
        this.translateRange(token.len, this.position);
        return this.run(()=>this.source.peekNumber(token));
    }
    async ignore(length) {
        this.assertAvailable();
        this.translateRange(length, this.position);
        return this.run(()=>this.source.ignore(length));
    }
    async consumeRemainder() {
        this.assertAvailable();
        const length = this.remaining;
        const end = this.translateRange(length, this.position) + length;
        return this.run(async ()=>{
            if (length === 0) return 0;
            if ((0, _isRandomAccessTokenizerJs.isRandomAccessTokenizer)(this.source)) {
                // Unlike ignore()/setPosition(), this verifies that the final byte exists,
                // including a file that was truncated after its initial stat. No large read.
                if (await this.source.peekBuffer(new Uint8Array(1), {
                    position: end - 1
                }) !== 1) throw new (0, _indexJs.EndOfStreamError)();
                this.source.setPosition(end);
            } else {
                const ignored = await this.source.ignore(length);
                if (ignored !== length) throw new (0, _indexJs.EndOfStreamError)();
            }
            return length;
        });
    }
    /** Release this view only. Never drain, close or abort the borrowed source. */ async close() {
        if (this.closed) return;
        if (this.busy) throw new Error('Cannot close a tokenizer view during an active operation');
        this.closedPosition = this.position;
        this.closed = true;
    }
    /** Explicit cancellation propagates to the shared source and affects its other users. */ async abort() {
        if (this.closed) return;
        try {
            await this.source.abort();
        } finally{
            this.closedPosition = this.position;
            this.closed = true;
        }
    }
    assertAvailable() {
        if (this.closed) throw new Error('Tokenizer view is closed');
        if (this.busy) throw new Error('Tokenizer views require sequential operations');
        if (this.source instanceof TokenizerView) this.source.assertAvailable();
    }
    /** Validate the whole request before delegating or allowing a token allocation. */ translateRange(length, position) {
        validateOffset(length, 'length');
        validateOffset(position, 'position');
        validateOffset(position + length, 'end position');
        if (position > this.size || length > this.size - position) throw new (0, _tokenizerBoundaryErrorJs.TokenizerBoundaryError)(position, length, this.size);
        if (!this.supportsRandomAccess() && position < this.position) throw new Error('`options.position` must be equal or greater than `tokenizer.position`');
        return this.start + position;
    }
    async run(operation) {
        this.busy = true;
        try {
            return await operation();
        } finally{
            this.busy = false;
        }
    }
}
class RandomAccessTokenizerView extends TokenizerView {
    constructor(source, size){
        super(source, size);
    }
    supportsRandomAccess() {
        return true;
    }
    setPosition(position) {
        this.assertAvailable();
        this.source.setPosition(this.translateRange(0, position));
    }
    createView(length) {
        this.assertAvailable();
        return createTokenizerView(this, length);
    }
}

},{"./isRandomAccessTokenizer.js":"g0pgf","./stream/index.js":"cufwd","./TokenizerBoundaryError.js":"9A9rS","@parcel/transformer-js/src/esmodule-helpers.js":"53hI8"}],"jLb0p":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Growable byte buffer for serializing tokens.
 *
 * Numeric and structured tokens are written through their `IToken.put`
 * implementation, so encoding and decoding share the same token definition.
 * Encoders must write synchronously within their declared token region and
 * must not retain the destination buffer.
 */ parcelHelpers.export(exports, "TokenWriter", ()=>TokenWriter);
var _bufferSizeErrorJs = require("./BufferSizeError.js");
const DEFAULT_INITIAL_CAPACITY = 1024;
const MINIMUM_CAPACITY = 16;
class TokenWriter {
    /**
     * Create a token writer.
     * @param initialCapacity - Initial buffer size in bytes. The writer grows as needed.
     * Defaults to 1024, reduced to maxBufferSize when a smaller cap is configured.
     * @param options - Optional output and backing-buffer limit.
     */ constructor(initialCapacity, options){
        this.offset = 0;
        this.maxBufferSize = (0, _bufferSizeErrorJs.getMaxBufferSize)(options);
        const capacity = initialCapacity === undefined ? Math.min(DEFAULT_INITIAL_CAPACITY, this.maxBufferSize) : initialCapacity;
        this.validateCapacity(capacity, 'initialCapacity');
        this.buffer = new Uint8Array(Math.min(this.maxBufferSize, Math.max(MINIMUM_CAPACITY, capacity)));
    }
    /**
     * Number of bytes written so far.
     */ get length() {
        return this.offset;
    }
    /**
     * Reserve a zero-filled region and advance the write position.
     * @param length - Number of bytes to reserve.
     * @returns Offset of the reserved region.
     */ reserve(length) {
        this.validateLength(length, 'length');
        const start = this.offset;
        this.ensureCapacity(length);
        this.offset += length;
        return start;
    }
    /**
     * Encode a token at the current write position.
     * If encoding throws, the written bytes and length remain unchanged.
     * @param token - Token providing the byte length and encoder.
     * @param value - Value to encode.
     * @returns Number of bytes written, equal to token.len.
     */ writeToken(token, value) {
        const length = token.len;
        this.validateLength(length, 'token length');
        this.ensureCapacity(length);
        const start = this.offset;
        try {
            token.put(this.buffer, start, value);
        } catch (error) {
            this.buffer.fill(0, start, start + length);
            throw error;
        }
        this.offset += length;
        return length;
    }
    /**
     * Append raw bytes.
     * @param value - Bytes to append. The data is copied.
     * @returns Number of bytes written.
     */ writeBuffer(value) {
        this.validateLength(value.length, 'value length');
        const start = this.offset;
        this.ensureCapacity(value.length);
        this.buffer.set(value, start);
        this.offset += value.length;
        return value.length;
    }
    /**
     * Alias for writeBuffer. The data is copied.
     * @param value - Bytes to append.
     * @returns Number of bytes written.
     */ writeBytes(value) {
        return this.writeBuffer(value);
    }
    /**
     * Append zero bytes.
     * @param length - Number of zero bytes to append.
     * @returns Number of bytes written.
     */ writeZeros(length) {
        const start = this.reserve(length);
        this.buffer.fill(0, start, start + length);
        return length;
    }
    /**
     * Overwrite a previously reserved or written region with an encoded token.
     * If encoding throws, the original bytes are restored and length is unchanged.
     * @param token - Token providing the byte length and encoder.
     * @param offset - Absolute offset of the region.
     * @param value - Value to encode.
     */ patchToken(token, offset, value) {
        this.validateLength(offset, 'offset');
        const length = token.len;
        this.validateLength(length, 'token length');
        if (offset + length > this.offset) throw new RangeError(`Invalid patch range: offset=${offset}, length=${length}, written=${this.offset}`);
        const original = this.buffer.slice(offset, offset + length);
        try {
            token.put(this.buffer, offset, value);
        } catch (error) {
            this.buffer.set(original, offset);
            throw error;
        }
    }
    /**
     * Return a copy of the written bytes.
     */ toUint8Array() {
        return this.buffer.slice(0, this.offset);
    }
    ensureCapacity(extra) {
        const required = this.offset + extra;
        this.validateCapacity(required, 'required capacity');
        if (required <= this.buffer.length) return;
        let capacity = this.buffer.length;
        while(capacity < required)capacity = Math.min(capacity * 2, this.maxBufferSize);
        const next = new Uint8Array(capacity);
        next.set(this.buffer.subarray(0, this.offset));
        this.buffer = next;
    }
    validateCapacity(value, name) {
        this.validateLength(value, name);
        if (value > this.maxBufferSize) throw new (0, _bufferSizeErrorJs.BufferSizeError)(value, this.maxBufferSize);
    }
    validateLength(value, name) {
        if (!Number.isSafeInteger(value) || value < 0) throw new RangeError(`${name} must be a non-negative safe integer`);
    }
}

},{"./BufferSizeError.js":"Dyq3l","@parcel/transformer-js/src/esmodule-helpers.js":"53hI8"}],"1ZQcJ":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ApeContentError", ()=>ApeContentError);
parcelHelpers.export(exports, "tryParseApeHeader", ()=>tryParseApeHeader);
parcelHelpers.export(exports, "APEv2Parser", ()=>APEv2Parser);
var _textCodec = require("@borewit/text-codec");
var _debug = require("debug");
var _debugDefault = parcelHelpers.interopDefault(_debug);
var _strtok3 = require("strtok3");
var _tokenTypes = require("token-types");
var _allocationJs = require("../common/Allocation.js");
var _basicParserJs = require("../common/BasicParser.js");
var _utilJs = require("../common/Util.js");
var _parseErrorJs = require("../ParseError.js");
var _apev2TokenJs = require("./APEv2Token.js");
const debug = (0, _debugDefault.default)('music-metadata:parser:APEv2');
const tagFormat = 'APEv2';
const preamble = 'APETAGEX';
class ApeContentError extends (0, _parseErrorJs.makeUnexpectedFileContentError)('APEv2') {
}
function tryParseApeHeader(metadata, tokenizer, options) {
    const apeParser = new APEv2Parser(metadata, tokenizer, options);
    return apeParser.tryParseApeHeader();
}
class APEv2Parser extends (0, _basicParserJs.BasicParser) {
    /**
     * Calculate the media file duration
     * @param ah ApeHeader
     * @return {number} duration in seconds
     */ static calculateDuration(ah) {
        let duration = ah.totalFrames > 1 ? ah.blocksPerFrame * (ah.totalFrames - 1) : 0;
        duration += ah.finalFrameBlocks;
        return duration / ah.sampleRate;
    }
    /**
     * Calculates the APEv1 / APEv2 first field offset
     * @param tokenizer
     * @param offset
     */ static async findApeFooterOffset(tokenizer, offset) {
        // Search for APE footer header at the end of the file
        const apeBuf = new Uint8Array((0, _apev2TokenJs.TagFooter).len);
        const position = tokenizer.position;
        if (offset <= (0, _apev2TokenJs.TagFooter).len) {
            debug(`Offset is too small to read APE footer: offset=${offset}`);
            return undefined;
        }
        if (offset > (0, _apev2TokenJs.TagFooter).len) {
            await tokenizer.readBuffer(apeBuf, {
                position: offset - (0, _apev2TokenJs.TagFooter).len
            });
            tokenizer.setPosition(position);
            const tagFooter = (0, _apev2TokenJs.TagFooter).get(apeBuf, 0);
            if (tagFooter.ID === 'APETAGEX') {
                if (tagFooter.flags.isHeader) debug(`APE Header found at offset=${offset - (0, _apev2TokenJs.TagFooter).len}`);
                else {
                    debug(`APE Footer found at offset=${offset - (0, _apev2TokenJs.TagFooter).len}`);
                    offset -= tagFooter.size;
                }
                return {
                    footer: tagFooter,
                    offset
                };
            }
        }
    }
    static parseTagFooter(metadata, buffer, options) {
        const footer = (0, _apev2TokenJs.TagFooter).get(buffer, buffer.length - (0, _apev2TokenJs.TagFooter).len);
        if (footer.ID !== preamble) throw new ApeContentError('Unexpected APEv2 Footer ID preamble value');
        const apeParser = new APEv2Parser(metadata, _strtok3.fromBuffer(buffer, (0, _allocationJs.getTokenizerOptions)(options)), options);
        return apeParser.parseTags(footer);
    }
    ape = {};
    /**
     * Parse APEv1 / APEv2 header if header signature found
     */ async tryParseApeHeader() {
        if (this.tokenizer.fileInfo.size && this.tokenizer.fileInfo.size - this.tokenizer.position < (0, _apev2TokenJs.TagFooter).len) {
            debug('No APEv2 header found, end-of-file reached');
            return;
        }
        const footer = await this.tokenizer.peekToken((0, _apev2TokenJs.TagFooter));
        if (footer.ID === preamble) {
            await this.tokenizer.ignore((0, _apev2TokenJs.TagFooter).len);
            return this.parseTags(footer);
        }
        debug(`APEv2 header not found at offset=${this.tokenizer.position}`);
        if (this.tokenizer.fileInfo.size) {
            // Try to read the APEv2 header using just the footer-header
            const remaining = this.tokenizer.fileInfo.size - this.tokenizer.position; // ToDo: take ID3v1 into account
            const buffer = await this.readTagValue(remaining);
            return APEv2Parser.parseTagFooter(this.metadata, buffer, this.options);
        }
    }
    async parse() {
        const descriptor = await this.tokenizer.readToken((0, _apev2TokenJs.DescriptorParser));
        if (descriptor.ID !== 'MAC ') throw new ApeContentError('Unexpected descriptor ID');
        this.ape.descriptor = descriptor;
        const lenExp = descriptor.descriptorBytes - (0, _apev2TokenJs.DescriptorParser).len;
        const header = await (lenExp > 0 ? this.parseDescriptorExpansion(lenExp) : this.parseHeader());
        this.metadata.setAudioOnly();
        await this.tokenizer.ignore(header.forwardBytes);
        return this.tryParseApeHeader();
    }
    async parseTags(footer) {
        if (footer.fields > (0, _allocationJs.getMaxMetadataEntries)(this.options)) throw new ApeContentError(`Tag item count ${footer.fields} exceeds entry limit ${(0, _allocationJs.getMaxMetadataEntries)(this.options)}`);
        const keyBuffer = new Uint8Array(256); // maximum tag key length
        let bytesRemaining = footer.size - (0, _apev2TokenJs.TagFooter).len;
        debug(`Parse APE tags at offset=${this.tokenizer.position}, size=${bytesRemaining}`);
        for(let i = 0; i < footer.fields; i++){
            if (bytesRemaining < (0, _apev2TokenJs.TagItemHeader).len) {
                this.metadata.addWarning(`APEv2 Tag-header: ${footer.fields - i} items remaining, but no more tag data to read.`);
                break;
            }
            // Only APEv2 tag has tag item headers
            const tagItemHeader = await this.tokenizer.readToken((0, _apev2TokenJs.TagItemHeader));
            bytesRemaining -= (0, _apev2TokenJs.TagItemHeader).len;
            // Reserve the value bytes before looking for the key terminator.
            if (tagItemHeader.size >= bytesRemaining) throw new ApeContentError(`Invalid tag item size: ${tagItemHeader.size}`);
            const keyBytes = await this.tokenizer.peekBuffer(keyBuffer, {
                length: Math.min(keyBuffer.length, bytesRemaining - tagItemHeader.size),
                mayBeLess: true
            });
            let zero = keyBuffer.subarray(0, keyBytes).indexOf(0);
            if (zero === -1) throw new ApeContentError('Unterminated tag item key');
            const key = await this.tokenizer.readToken(new (0, _tokenTypes.StringType)(zero, 'ascii'));
            await this.tokenizer.ignore(1);
            bytesRemaining -= key.length + 1;
            if (this.tokenizer.fileInfo.size !== undefined && tagItemHeader.size > this.tokenizer.fileInfo.size - this.tokenizer.position) throw new ApeContentError(`Invalid tag item size: ${tagItemHeader.size}`);
            bytesRemaining -= tagItemHeader.size;
            switch(tagItemHeader.flags.dataType){
                case (0, _apev2TokenJs.DataType).text_utf8:
                    {
                        // utf-8 text-string
                        const value = (0, _textCodec.textDecode)(await this.readTagValue(tagItemHeader.size), 'utf-8');
                        let valueCount = 1;
                        for(let offset = value.indexOf('\0'); offset >= 0; offset = value.indexOf('\0', offset + 1))++valueCount;
                        if (valueCount > (0, _allocationJs.getMaxMetadataEntries)(this.options)) throw new ApeContentError(`Text value count ${valueCount} exceeds entry limit ${(0, _allocationJs.getMaxMetadataEntries)(this.options)}`);
                        const values = value.split(/\x00/g);
                        await Promise.all(values.map((val)=>this.metadata.addTag(tagFormat, key, val)));
                        break;
                    }
                case (0, _apev2TokenJs.DataType).binary:
                    if (this.options.skipCovers) await this.tokenizer.ignore(tagItemHeader.size);
                    else {
                        const picData = await this.readTagValue(tagItemHeader.size);
                        zero = _utilJs.findZero(picData);
                        const description = (0, _textCodec.textDecode)(picData.subarray(0, zero), 'utf-8');
                        const data = picData.subarray(zero + 1);
                        await this.metadata.addTag(tagFormat, key, {
                            description,
                            data
                        });
                    }
                    break;
                case (0, _apev2TokenJs.DataType).external_info:
                    debug(`Ignore external info ${key}`);
                    await this.tokenizer.ignore(tagItemHeader.size);
                    break;
                case (0, _apev2TokenJs.DataType).reserved:
                    debug(`Ignore external info ${key}`);
                    this.metadata.addWarning(`APEv2 header declares a reserved datatype for "${key}"`);
                    await this.tokenizer.ignore(tagItemHeader.size);
                    break;
            }
        }
    }
    async readTagValue(size) {
        return (0, _allocationJs.readBuffer)(this.tokenizer, size, this.options, undefined, (message)=>new ApeContentError(message));
    }
    async parseDescriptorExpansion(lenExp) {
        await this.tokenizer.ignore(lenExp);
        return this.parseHeader();
    }
    async parseHeader() {
        const header = await this.tokenizer.readToken((0, _apev2TokenJs.Header));
        // ToDo before
        this.metadata.setFormat('lossless', true);
        this.metadata.setFormat('container', "Monkey's Audio");
        this.metadata.setFormat('codec', "Monkey's Audio");
        this.metadata.setFormat('bitsPerSample', header.bitsPerSample);
        this.metadata.setFormat('sampleRate', header.sampleRate);
        this.metadata.setFormat('numberOfChannels', header.channel);
        this.metadata.setFormat('duration', APEv2Parser.calculateDuration(header));
        if (!this.ape.descriptor) throw new ApeContentError('Missing APE descriptor');
        return {
            forwardBytes: this.ape.descriptor.seekTableBytes + this.ape.descriptor.headerDataBytes + this.ape.descriptor.apeFrameDataBytes + this.ape.descriptor.terminatingDataBytes
        };
    }
}

},{"@borewit/text-codec":"104u3","debug":"4XIdh","strtok3":"7L6Gs","token-types":"al35Q","../common/Allocation.js":"8ZVyl","../common/BasicParser.js":"91dLC","../common/Util.js":"Q4yiL","../ParseError.js":"E03ox","./APEv2Token.js":"5CQoK","@parcel/transformer-js/src/esmodule-helpers.js":"53hI8"}],"104u3":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Decode text from binary data
 */ parcelHelpers.export(exports, "textDecode", ()=>textDecode);
parcelHelpers.export(exports, "textEncode", ()=>textEncode);
const WINDOWS_1252_EXTRA = {
    0x80: "\u20AC",
    0x82: "\u201A",
    0x83: "\u0192",
    0x84: "\u201E",
    0x85: "\u2026",
    0x86: "\u2020",
    0x87: "\u2021",
    0x88: "\u02C6",
    0x89: "\u2030",
    0x8a: "\u0160",
    0x8b: "\u2039",
    0x8c: "\u0152",
    0x8e: "\u017D",
    0x91: "\u2018",
    0x92: "\u2019",
    0x93: "\u201C",
    0x94: "\u201D",
    0x95: "\u2022",
    0x96: "\u2013",
    0x97: "\u2014",
    0x98: "\u02DC",
    0x99: "\u2122",
    0x9a: "\u0161",
    0x9b: "\u203A",
    0x9c: "\u0153",
    0x9e: "\u017E",
    0x9f: "\u0178"
};
const WINDOWS_1252_REVERSE = {};
for (const [code, char] of Object.entries(WINDOWS_1252_EXTRA))WINDOWS_1252_REVERSE[char] = Number.parseInt(code, 10);
let _utf8Decoder;
let _utf8Encoder;
function utf8Decoder() {
    if (_utf8Decoder === undefined) try {
        _utf8Decoder = typeof globalThis.TextDecoder === 'undefined' ? null : new globalThis.TextDecoder('utf-8');
    } catch  {
        _utf8Decoder = null;
    }
    return _utf8Decoder !== null && _utf8Decoder !== void 0 ? _utf8Decoder : undefined;
}
function utf8Encoder() {
    if (_utf8Encoder === undefined) try {
        _utf8Encoder = typeof globalThis.TextEncoder === 'undefined' ? null : new globalThis.TextEncoder();
    } catch  {
        _utf8Encoder = null;
    }
    return _utf8Encoder !== null && _utf8Encoder !== void 0 ? _utf8Encoder : undefined;
}
const CHUNK = 32768;
const REPLACEMENT = 0xfffd;
function textDecode(bytes, encoding = 'utf-8') {
    switch(encoding.toLowerCase()){
        case 'utf-8':
        case 'utf8':
            {
                const dec = utf8Decoder();
                return dec ? dec.decode(bytes) : decodeUTF8(bytes);
            }
        case 'utf-16le':
            return decodeUTF16LE(bytes);
        case 'us-ascii':
        case 'ascii':
            return decodeASCII(bytes);
        case 'latin1':
        case 'iso-8859-1':
            return decodeLatin1(bytes);
        case 'windows-1252':
            return decodeWindows1252(bytes);
        default:
            throw new RangeError(`Encoding '${encoding}' not supported`);
    }
}
function textEncode(input = '', encoding = 'utf-8') {
    switch(encoding.toLowerCase()){
        case 'utf-8':
        case 'utf8':
            {
                const enc = utf8Encoder();
                return enc ? enc.encode(input) : encodeUTF8(input);
            }
        case 'utf-16le':
            return encodeUTF16LE(input);
        case 'us-ascii':
        case 'ascii':
            return encodeASCII(input);
        case 'latin1':
        case 'iso-8859-1':
            return encodeLatin1(input);
        case 'windows-1252':
            return encodeWindows1252(input);
        default:
            throw new RangeError(`Encoding '${encoding}' not supported`);
    }
}
function flushChunk(parts, chunk) {
    if (chunk.length === 0) return;
    parts.push(String.fromCharCode.apply(null, chunk));
    chunk.length = 0;
}
function pushCodeUnit(parts, chunk, codeUnit) {
    chunk.push(codeUnit);
    if (chunk.length >= CHUNK) flushChunk(parts, chunk);
}
function pushCodePoint(parts, chunk, cp) {
    if (cp <= 0xffff) {
        pushCodeUnit(parts, chunk, cp);
        return;
    }
    cp -= 0x10000;
    pushCodeUnit(parts, chunk, 0xd800 + (cp >> 10));
    pushCodeUnit(parts, chunk, 0xdc00 + (cp & 0x3ff));
}
function decodeUTF8(bytes) {
    const parts = [];
    const chunk = [];
    let i = 0;
    // Match TextDecoder("utf-8") default BOM handling
    if (bytes.length >= 3 && bytes[0] === 0xef && bytes[1] === 0xbb && bytes[2] === 0xbf) i = 3;
    while(i < bytes.length){
        const b1 = bytes[i];
        if (b1 <= 0x7f) {
            pushCodeUnit(parts, chunk, b1);
            i++;
            continue;
        }
        // Invalid leading bytes: continuation byte or impossible prefixes
        if (b1 < 0xc2 || b1 > 0xf4) {
            pushCodeUnit(parts, chunk, REPLACEMENT);
            i++;
            continue;
        }
        const length = b1 <= 0xdf ? 2 : b1 <= 0xef ? 3 : 4;
        let cp = b1 & 0x7f >> length;
        let lower = b1 === 0xe0 ? 0xa0 : b1 === 0xf0 ? 0x90 : 0x80;
        let upper = b1 === 0xed ? 0x9f : b1 === 0xf4 ? 0x8f : 0xbf;
        let consumed = 1;
        i++;
        // Consume only the valid prefix. An interrupting byte starts a new sequence.
        while(consumed < length && i < bytes.length){
            const next = bytes[i];
            if (next < lower || next > upper) break;
            cp = cp << 6 | next & 0x3f;
            consumed++;
            i++;
            lower = 0x80;
            upper = 0xbf;
        }
        pushCodePoint(parts, chunk, consumed === length ? cp : REPLACEMENT);
    }
    flushChunk(parts, chunk);
    return parts.join('');
}
function decodeUTF16LE(bytes) {
    const parts = [];
    const chunk = [];
    const len = bytes.length;
    let i = 0;
    // Match TextDecoder("utf-16le") default BOM handling
    if (len >= 2 && bytes[0] === 0xff && bytes[1] === 0xfe) i = 2;
    while(i + 1 < len){
        const u1 = bytes[i] | bytes[i + 1] << 8;
        i += 2;
        // High surrogate
        if (u1 >= 0xd800 && u1 <= 0xdbff) {
            if (i + 1 < len) {
                const u2 = bytes[i] | bytes[i + 1] << 8;
                if (u2 >= 0xdc00 && u2 <= 0xdfff) {
                    pushCodeUnit(parts, chunk, u1);
                    pushCodeUnit(parts, chunk, u2);
                    i += 2;
                } else pushCodeUnit(parts, chunk, REPLACEMENT);
            } else pushCodeUnit(parts, chunk, REPLACEMENT);
            continue;
        }
        // Lone low surrogate
        if (u1 >= 0xdc00 && u1 <= 0xdfff) {
            pushCodeUnit(parts, chunk, REPLACEMENT);
            continue;
        }
        pushCodeUnit(parts, chunk, u1);
    }
    // Odd trailing byte
    if (i < len) pushCodeUnit(parts, chunk, REPLACEMENT);
    flushChunk(parts, chunk);
    return parts.join('');
}
function decodeASCII(bytes) {
    const parts = [];
    for(let i = 0; i < bytes.length; i += CHUNK){
        const end = Math.min(bytes.length, i + CHUNK);
        const codes = new Array(end - i);
        for(let j = i, k = 0; j < end; j++, k++)codes[k] = bytes[j] & 0x7f;
        parts.push(String.fromCharCode.apply(null, codes));
    }
    return parts.join('');
}
function decodeLatin1(bytes) {
    const parts = [];
    for(let i = 0; i < bytes.length; i += CHUNK){
        const end = Math.min(bytes.length, i + CHUNK);
        const codes = new Array(end - i);
        for(let j = i, k = 0; j < end; j++, k++)codes[k] = bytes[j];
        parts.push(String.fromCharCode.apply(null, codes));
    }
    return parts.join('');
}
function decodeWindows1252(bytes) {
    const parts = [];
    let out = '';
    for(let i = 0; i < bytes.length; i++){
        const b = bytes[i];
        const extra = b >= 0x80 && b <= 0x9f ? WINDOWS_1252_EXTRA[b] : undefined;
        out += extra !== null && extra !== void 0 ? extra : String.fromCharCode(b);
        if (out.length >= CHUNK) {
            parts.push(out);
            out = '';
        }
    }
    if (out) parts.push(out);
    return parts.join('');
}
function encodeUTF8(str) {
    const out = [];
    for(let i = 0; i < str.length; i++){
        let cp = str.charCodeAt(i);
        // Valid surrogate pair
        if (cp >= 0xd800 && cp <= 0xdbff) {
            if (i + 1 < str.length) {
                const lo = str.charCodeAt(i + 1);
                if (lo >= 0xdc00 && lo <= 0xdfff) {
                    cp = 0x10000 + (cp - 0xd800 << 10) + (lo - 0xdc00);
                    i++;
                } else cp = REPLACEMENT;
            } else cp = REPLACEMENT;
        } else if (cp >= 0xdc00 && cp <= 0xdfff) // Lone low surrogate
        cp = REPLACEMENT;
        if (cp < 0x80) out.push(cp);
        else if (cp < 0x800) out.push(0xc0 | cp >> 6, 0x80 | cp & 0x3f);
        else if (cp < 0x10000) out.push(0xe0 | cp >> 12, 0x80 | cp >> 6 & 0x3f, 0x80 | cp & 0x3f);
        else out.push(0xf0 | cp >> 18, 0x80 | cp >> 12 & 0x3f, 0x80 | cp >> 6 & 0x3f, 0x80 | cp & 0x3f);
    }
    return new Uint8Array(out);
}
function encodeUTF16LE(str) {
    // Preserve JS string code units, but do not emit non-well-formed UTF-16.
    // Replace lone surrogates with U+FFFD.
    const units = [];
    for(let i = 0; i < str.length; i++){
        const u = str.charCodeAt(i);
        if (u >= 0xd800 && u <= 0xdbff) {
            if (i + 1 < str.length) {
                const lo = str.charCodeAt(i + 1);
                if (lo >= 0xdc00 && lo <= 0xdfff) {
                    units.push(u, lo);
                    i++;
                } else units.push(REPLACEMENT);
            } else units.push(REPLACEMENT);
            continue;
        }
        if (u >= 0xdc00 && u <= 0xdfff) {
            units.push(REPLACEMENT);
            continue;
        }
        units.push(u);
    }
    const out = new Uint8Array(units.length * 2);
    for(let i = 0; i < units.length; i++){
        const code = units[i];
        const o = i * 2;
        out[o] = code & 0xff;
        out[o + 1] = code >>> 8;
    }
    return out;
}
function encodeASCII(str) {
    const out = new Uint8Array(str.length);
    for(let i = 0; i < str.length; i++)out[i] = str.charCodeAt(i) & 0x7f;
    return out;
}
function encodeLatin1(str) {
    const out = new Uint8Array(str.length);
    for(let i = 0; i < str.length; i++)out[i] = str.charCodeAt(i) & 0xff;
    return out;
}
function encodeWindows1252(str) {
    const out = new Uint8Array(str.length);
    for(let i = 0; i < str.length; i++){
        const ch = str[i];
        const code = ch.charCodeAt(0);
        if (WINDOWS_1252_REVERSE[ch] !== undefined) {
            out[i] = WINDOWS_1252_REVERSE[ch];
            continue;
        }
        if (code >= 0x00 && code <= 0x7f || code >= 0xa0 && code <= 0xff) {
            out[i] = code;
            continue;
        }
        out[i] = 0x3f; // '?'
    }
    return out;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"53hI8"}],"4XIdh":[function(require,module,exports,__globalThis) {
/* eslint-env browser */ /**
 * This is the web browser implementation of `debug()`.
 */ exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = localstorage();
exports.destroy = (()=>{
    let warned = false;
    return ()=>{
        if (!warned) {
            warned = true;
            console.warn('Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.');
        }
    };
})();
/**
 * Colors.
 */ exports.colors = [
    '#0000CC',
    '#0000FF',
    '#0033CC',
    '#0033FF',
    '#0066CC',
    '#0066FF',
    '#0099CC',
    '#0099FF',
    '#00CC00',
    '#00CC33',
    '#00CC66',
    '#00CC99',
    '#00CCCC',
    '#00CCFF',
    '#3300CC',
    '#3300FF',
    '#3333CC',
    '#3333FF',
    '#3366CC',
    '#3366FF',
    '#3399CC',
    '#3399FF',
    '#33CC00',
    '#33CC33',
    '#33CC66',
    '#33CC99',
    '#33CCCC',
    '#33CCFF',
    '#6600CC',
    '#6600FF',
    '#6633CC',
    '#6633FF',
    '#66CC00',
    '#66CC33',
    '#9900CC',
    '#9900FF',
    '#9933CC',
    '#9933FF',
    '#99CC00',
    '#99CC33',
    '#CC0000',
    '#CC0033',
    '#CC0066',
    '#CC0099',
    '#CC00CC',
    '#CC00FF',
    '#CC3300',
    '#CC3333',
    '#CC3366',
    '#CC3399',
    '#CC33CC',
    '#CC33FF',
    '#CC6600',
    '#CC6633',
    '#CC9900',
    '#CC9933',
    '#CCCC00',
    '#CCCC33',
    '#FF0000',
    '#FF0033',
    '#FF0066',
    '#FF0099',
    '#FF00CC',
    '#FF00FF',
    '#FF3300',
    '#FF3333',
    '#FF3366',
    '#FF3399',
    '#FF33CC',
    '#FF33FF',
    '#FF6600',
    '#FF6633',
    '#FF9900',
    '#FF9933',
    '#FFCC00',
    '#FFCC33'
];
/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */ // eslint-disable-next-line complexity
function useColors() {
    // NB: In an Electron preload script, document will be defined but not fully
    // initialized. Since we know we're in Chrome, we'll just detect this case
    // explicitly
    if (typeof window !== 'undefined' && window.process && (window.process.type === 'renderer' || window.process.__nwjs)) return true;
    // Internet Explorer and Edge do not support colors.
    if (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) return false;
    let m;
    // Is webkit? http://stackoverflow.com/a/16459606/376773
    // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
    // eslint-disable-next-line no-return-assign
    return typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || // Is firebug? http://stackoverflow.com/a/398120/376773
    typeof window !== 'undefined' && window.console && (window.console.firebug || window.console.exception && window.console.table) || // Is firefox >= v31?
    // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
    typeof navigator !== 'undefined' && navigator.userAgent && (m = navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)) && parseInt(m[1], 10) >= 31 || // Double check webkit in userAgent just in case we are in a worker
    typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
}
/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */ function formatArgs(args) {
    args[0] = (this.useColors ? '%c' : '') + this.namespace + (this.useColors ? ' %c' : ' ') + args[0] + (this.useColors ? '%c ' : ' ') + '+' + module.exports.humanize(this.diff);
    if (!this.useColors) return;
    const c = 'color: ' + this.color;
    args.splice(1, 0, c, 'color: inherit');
    // The final "%c" is somewhat tricky, because there could be other
    // arguments passed either before or after the %c, so we need to
    // figure out the correct index to insert the CSS into
    let index = 0;
    let lastC = 0;
    args[0].replace(/%[a-zA-Z%]/g, (match)=>{
        if (match === '%%') return;
        index++;
        if (match === '%c') // We only are interested in the *last* %c
        // (the user may have provided their own)
        lastC = index;
    });
    args.splice(lastC, 0, c);
}
/**
 * Invokes `console.debug()` when available.
 * No-op when `console.debug` is not a "function".
 * If `console.debug` is not available, falls back
 * to `console.log`.
 *
 * @api public
 */ exports.log = console.debug || console.log || (()=>{});
/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */ function save(namespaces) {
    try {
        if (namespaces) exports.storage.setItem('debug', namespaces);
        else exports.storage.removeItem('debug');
    } catch (error) {
    // Swallow
    // XXX (@Qix-) should we be logging these?
    }
}
/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */ function load() {
    let r;
    try {
        r = exports.storage.getItem('debug') || exports.storage.getItem('DEBUG');
    } catch (error) {
    // Swallow
    // XXX (@Qix-) should we be logging these?
    }
    // If debug isn't set in LS, and we're in Electron, try to load $DEBUG
    r;
    return r;
}
/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */ function localstorage() {
    try {
        // TVMLKit (Apple TV JS Runtime) does not have a window object, just localStorage in the global context
        // The Browser also has localStorage in the global context.
        return localStorage;
    } catch (error) {
    // Swallow
    // XXX (@Qix-) should we be logging these?
    }
}
module.exports = require("7f16131c9ea6cbdd")(exports);
const { formatters } = module.exports;
/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */ formatters.j = function(v) {
    try {
        return JSON.stringify(v);
    } catch (error) {
        return '[UnexpectedJSONParseError]: ' + error.message;
    }
};

},{"7f16131c9ea6cbdd":"2rn4u"}],"2rn4u":[function(require,module,exports,__globalThis) {
/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 */ function setup(env) {
    createDebug.debug = createDebug;
    createDebug.default = createDebug;
    createDebug.coerce = coerce;
    createDebug.disable = disable;
    createDebug.enable = enable;
    createDebug.enabled = enabled;
    createDebug.humanize = require("3f61b6dfa7c020af");
    createDebug.destroy = destroy;
    Object.keys(env).forEach((key)=>{
        createDebug[key] = env[key];
    });
    /**
	* The currently active debug mode names, and names to skip.
	*/ createDebug.names = [];
    createDebug.skips = [];
    /**
	* Map of special "%n" handling functions, for the debug "format" argument.
	*
	* Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
	*/ createDebug.formatters = {};
    /**
	* Selects a color for a debug namespace
	* @param {String} namespace The namespace string for the debug instance to be colored
	* @return {Number|String} An ANSI color code for the given namespace
	* @api private
	*/ function selectColor(namespace) {
        let hash = 0;
        for(let i = 0; i < namespace.length; i++){
            hash = (hash << 5) - hash + namespace.charCodeAt(i);
            hash |= 0; // Convert to 32bit integer
        }
        return createDebug.colors[Math.abs(hash) % createDebug.colors.length];
    }
    createDebug.selectColor = selectColor;
    /**
	* Create a debugger with the given `namespace`.
	*
	* @param {String} namespace
	* @return {Function}
	* @api public
	*/ function createDebug(namespace) {
        let prevTime;
        let enableOverride = null;
        let namespacesCache;
        let enabledCache;
        function debug(...args) {
            // Disabled?
            if (!debug.enabled) return;
            const self = debug;
            // Set `diff` timestamp
            const curr = Number(new Date());
            const ms = curr - (prevTime || curr);
            self.diff = ms;
            self.prev = prevTime;
            self.curr = curr;
            prevTime = curr;
            args[0] = createDebug.coerce(args[0]);
            if (typeof args[0] !== 'string') // Anything else let's inspect with %O
            args.unshift('%O');
            // Apply any `formatters` transformations
            let index = 0;
            args[0] = args[0].replace(/%([a-zA-Z%])/g, (match, format)=>{
                // If we encounter an escaped % then don't increase the array index
                if (match === '%%') return '%';
                index++;
                const formatter = createDebug.formatters[format];
                if (typeof formatter === 'function') {
                    const val = args[index];
                    match = formatter.call(self, val);
                    // Now we need to remove `args[index]` since it's inlined in the `format`
                    args.splice(index, 1);
                    index--;
                }
                return match;
            });
            // Apply env-specific formatting (colors, etc.)
            createDebug.formatArgs.call(self, args);
            const logFn = self.log || createDebug.log;
            logFn.apply(self, args);
        }
        debug.namespace = namespace;
        debug.useColors = createDebug.useColors();
        debug.color = createDebug.selectColor(namespace);
        debug.extend = extend;
        debug.destroy = createDebug.destroy; // XXX Temporary. Will be removed in the next major release.
        Object.defineProperty(debug, 'enabled', {
            enumerable: true,
            configurable: false,
            get: ()=>{
                if (enableOverride !== null) return enableOverride;
                if (namespacesCache !== createDebug.namespaces) {
                    namespacesCache = createDebug.namespaces;
                    enabledCache = createDebug.enabled(namespace);
                }
                return enabledCache;
            },
            set: (v)=>{
                enableOverride = v;
            }
        });
        // Env-specific initialization logic for debug instances
        if (typeof createDebug.init === 'function') createDebug.init(debug);
        return debug;
    }
    function extend(namespace, delimiter) {
        const newDebug = createDebug(this.namespace + (typeof delimiter === 'undefined' ? ':' : delimiter) + namespace);
        newDebug.log = this.log;
        return newDebug;
    }
    /**
	* Enables a debug mode by namespaces. This can include modes
	* separated by a colon and wildcards.
	*
	* @param {String} namespaces
	* @api public
	*/ function enable(namespaces) {
        createDebug.save(namespaces);
        createDebug.namespaces = namespaces;
        createDebug.names = [];
        createDebug.skips = [];
        const split = (typeof namespaces === 'string' ? namespaces : '').trim().replace(/\s+/g, ',').split(',').filter(Boolean);
        for (const ns of split)if (ns[0] === '-') createDebug.skips.push(ns.slice(1));
        else createDebug.names.push(ns);
    }
    /**
	 * Checks if the given string matches a namespace template, honoring
	 * asterisks as wildcards.
	 *
	 * @param {String} search
	 * @param {String} template
	 * @return {Boolean}
	 */ function matchesTemplate(search, template) {
        let searchIndex = 0;
        let templateIndex = 0;
        let starIndex = -1;
        let matchIndex = 0;
        while(searchIndex < search.length){
            if (templateIndex < template.length && (template[templateIndex] === search[searchIndex] || template[templateIndex] === '*')) {
                // Match character or proceed with wildcard
                if (template[templateIndex] === '*') {
                    starIndex = templateIndex;
                    matchIndex = searchIndex;
                    templateIndex++; // Skip the '*'
                } else {
                    searchIndex++;
                    templateIndex++;
                }
            } else if (starIndex !== -1) {
                // Backtrack to the last '*' and try to match more characters
                templateIndex = starIndex + 1;
                matchIndex++;
                searchIndex = matchIndex;
            } else return false; // No match
        }
        // Handle trailing '*' in template
        while(templateIndex < template.length && template[templateIndex] === '*')templateIndex++;
        return templateIndex === template.length;
    }
    /**
	* Disable debug output.
	*
	* @return {String} namespaces
	* @api public
	*/ function disable() {
        const namespaces = [
            ...createDebug.names,
            ...createDebug.skips.map((namespace)=>'-' + namespace)
        ].join(',');
        createDebug.enable('');
        return namespaces;
    }
    /**
	* Returns true if the given mode name is enabled, false otherwise.
	*
	* @param {String} name
	* @return {Boolean}
	* @api public
	*/ function enabled(name) {
        for (const skip of createDebug.skips){
            if (matchesTemplate(name, skip)) return false;
        }
        for (const ns of createDebug.names){
            if (matchesTemplate(name, ns)) return true;
        }
        return false;
    }
    /**
	* Coerce `val`.
	*
	* @param {Mixed} val
	* @return {Mixed}
	* @api private
	*/ function coerce(val) {
        if (val instanceof Error) return val.stack || val.message;
        return val;
    }
    /**
	* XXX DO NOT USE. This is a temporary stub function.
	* XXX It WILL be removed in the next major release.
	*/ function destroy() {
        console.warn('Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.');
    }
    createDebug.enable(createDebug.load());
    return createDebug;
}
module.exports = setup;

},{"3f61b6dfa7c020af":"7DfO7"}],"7DfO7":[function(require,module,exports,__globalThis) {
/**
 * Helpers.
 */ var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var w = d * 7;
var y = d * 365.25;
/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */ module.exports = function(val, options) {
    options = options || {};
    var type = typeof val;
    if (type === 'string' && val.length > 0) return parse(val);
    else if (type === 'number' && isFinite(val)) return options.long ? fmtLong(val) : fmtShort(val);
    throw new Error('val is not a non-empty string or a valid number. val=' + JSON.stringify(val));
};
/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */ function parse(str) {
    str = String(str);
    if (str.length > 100) return;
    var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(str);
    if (!match) return;
    var n = parseFloat(match[1]);
    var type = (match[2] || 'ms').toLowerCase();
    switch(type){
        case 'years':
        case 'year':
        case 'yrs':
        case 'yr':
        case 'y':
            return n * y;
        case 'weeks':
        case 'week':
        case 'w':
            return n * w;
        case 'days':
        case 'day':
        case 'd':
            return n * d;
        case 'hours':
        case 'hour':
        case 'hrs':
        case 'hr':
        case 'h':
            return n * h;
        case 'minutes':
        case 'minute':
        case 'mins':
        case 'min':
        case 'm':
            return n * m;
        case 'seconds':
        case 'second':
        case 'secs':
        case 'sec':
        case 's':
            return n * s;
        case 'milliseconds':
        case 'millisecond':
        case 'msecs':
        case 'msec':
        case 'ms':
            return n;
        default:
            return undefined;
    }
}
/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */ function fmtShort(ms) {
    var msAbs = Math.abs(ms);
    if (msAbs >= d) return Math.round(ms / d) + 'd';
    if (msAbs >= h) return Math.round(ms / h) + 'h';
    if (msAbs >= m) return Math.round(ms / m) + 'm';
    if (msAbs >= s) return Math.round(ms / s) + 's';
    return ms + 'ms';
}
/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */ function fmtLong(ms) {
    var msAbs = Math.abs(ms);
    if (msAbs >= d) return plural(ms, msAbs, d, 'day');
    if (msAbs >= h) return plural(ms, msAbs, h, 'hour');
    if (msAbs >= m) return plural(ms, msAbs, m, 'minute');
    if (msAbs >= s) return plural(ms, msAbs, s, 'second');
    return ms + ' ms';
}
/**
 * Pluralization helper.
 */ function plural(ms, msAbs, n, name) {
    var isPlural = msAbs >= n * 1.5;
    return Math.round(ms / n) + ' ' + name + (isPlural ? 's' : '');
}

},{}],"al35Q":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "UINT8", ()=>UINT8);
parcelHelpers.export(exports, "UINT16_LE", ()=>UINT16_LE);
parcelHelpers.export(exports, "UINT16_BE", ()=>UINT16_BE);
parcelHelpers.export(exports, "UINT24_LE", ()=>UINT24_LE);
parcelHelpers.export(exports, "UINT24_BE", ()=>UINT24_BE);
parcelHelpers.export(exports, "UINT32_LE", ()=>UINT32_LE);
parcelHelpers.export(exports, "UINT32_BE", ()=>UINT32_BE);
parcelHelpers.export(exports, "INT8", ()=>INT8);
parcelHelpers.export(exports, "INT16_BE", ()=>INT16_BE);
parcelHelpers.export(exports, "INT16_LE", ()=>INT16_LE);
parcelHelpers.export(exports, "INT24_LE", ()=>INT24_LE);
parcelHelpers.export(exports, "INT24_BE", ()=>INT24_BE);
parcelHelpers.export(exports, "INT32_BE", ()=>INT32_BE);
parcelHelpers.export(exports, "INT32_LE", ()=>INT32_LE);
parcelHelpers.export(exports, "UINT64_LE", ()=>UINT64_LE);
parcelHelpers.export(exports, "INT64_LE", ()=>INT64_LE);
parcelHelpers.export(exports, "UINT64_BE", ()=>UINT64_BE);
parcelHelpers.export(exports, "INT64_BE", ()=>INT64_BE);
parcelHelpers.export(exports, "Float16_BE", ()=>Float16_BE);
parcelHelpers.export(exports, "Float16_LE", ()=>Float16_LE);
parcelHelpers.export(exports, "Float32_BE", ()=>Float32_BE);
parcelHelpers.export(exports, "Float32_LE", ()=>Float32_LE);
parcelHelpers.export(exports, "Float64_BE", ()=>Float64_BE);
parcelHelpers.export(exports, "Float64_LE", ()=>Float64_LE);
parcelHelpers.export(exports, "Float80_BE", ()=>Float80_BE);
parcelHelpers.export(exports, "Float80_LE", ()=>Float80_LE);
/**
 * Ignore a given number of bytes
 */ parcelHelpers.export(exports, "IgnoreType", ()=>IgnoreType);
/**
 * Fixed-size byte array
 */ parcelHelpers.export(exports, "Uint8ArrayType", ()=>Uint8ArrayType);
/**
 * Decode or encode a fixed number of bytes as a string with a specified encoding.
 * Supports all encodings supported by TextDecoder, plus 'windows-1252'.
 */ parcelHelpers.export(exports, "StringType", ()=>StringType);
/**
 * ANSI Latin 1 String using Windows-1252 (Code Page 1252)
 * Windows-1252 is a superset of ISO 8859-1 / Latin-1.
 */ parcelHelpers.export(exports, "AnsiStringType", ()=>AnsiStringType);
var _textCodec = require("@borewit/text-codec");
var _ieee754 = require("ieee754");
// Primitive types
function dv(array) {
    return new DataView(array.buffer, array.byteOffset);
}
const UINT8 = {
    len: 1,
    get (array, offset) {
        return dv(array).getUint8(offset);
    },
    put (array, offset, value) {
        dv(array).setUint8(offset, value);
        return offset + 1;
    }
};
const UINT16_LE = {
    len: 2,
    get (array, offset) {
        return dv(array).getUint16(offset, true);
    },
    put (array, offset, value) {
        dv(array).setUint16(offset, value, true);
        return offset + 2;
    }
};
const UINT16_BE = {
    len: 2,
    get (array, offset) {
        return dv(array).getUint16(offset);
    },
    put (array, offset, value) {
        dv(array).setUint16(offset, value);
        return offset + 2;
    }
};
const UINT24_LE = {
    len: 3,
    get (array, offset) {
        const dataView = dv(array);
        return dataView.getUint8(offset) + (dataView.getUint16(offset + 1, true) << 8);
    },
    put (array, offset, value) {
        const dataView = dv(array);
        dataView.setUint8(offset, value & 0xff);
        dataView.setUint16(offset + 1, value >> 8, true);
        return offset + 3;
    }
};
const UINT24_BE = {
    len: 3,
    get (array, offset) {
        const dataView = dv(array);
        return (dataView.getUint16(offset) << 8) + dataView.getUint8(offset + 2);
    },
    put (array, offset, value) {
        const dataView = dv(array);
        dataView.setUint16(offset, value >> 8);
        dataView.setUint8(offset + 2, value & 0xff);
        return offset + 3;
    }
};
const UINT32_LE = {
    len: 4,
    get (array, offset) {
        return dv(array).getUint32(offset, true);
    },
    put (array, offset, value) {
        dv(array).setUint32(offset, value, true);
        return offset + 4;
    }
};
const UINT32_BE = {
    len: 4,
    get (array, offset) {
        return dv(array).getUint32(offset);
    },
    put (array, offset, value) {
        dv(array).setUint32(offset, value);
        return offset + 4;
    }
};
const INT8 = {
    len: 1,
    get (array, offset) {
        return dv(array).getInt8(offset);
    },
    put (array, offset, value) {
        dv(array).setInt8(offset, value);
        return offset + 1;
    }
};
const INT16_BE = {
    len: 2,
    get (array, offset) {
        return dv(array).getInt16(offset);
    },
    put (array, offset, value) {
        dv(array).setInt16(offset, value);
        return offset + 2;
    }
};
const INT16_LE = {
    len: 2,
    get (array, offset) {
        return dv(array).getInt16(offset, true);
    },
    put (array, offset, value) {
        dv(array).setInt16(offset, value, true);
        return offset + 2;
    }
};
const INT24_LE = {
    len: 3,
    get (array, offset) {
        const unsigned = UINT24_LE.get(array, offset);
        return unsigned > 0x7fffff ? unsigned - 0x1000000 : unsigned;
    },
    put (array, offset, value) {
        const dataView = dv(array);
        dataView.setUint8(offset, value & 0xff);
        dataView.setUint16(offset + 1, value >> 8, true);
        return offset + 3;
    }
};
const INT24_BE = {
    len: 3,
    get (array, offset) {
        const unsigned = UINT24_BE.get(array, offset);
        return unsigned > 0x7fffff ? unsigned - 0x1000000 : unsigned;
    },
    put (array, offset, value) {
        const dataView = dv(array);
        dataView.setUint16(offset, value >> 8);
        dataView.setUint8(offset + 2, value & 0xff);
        return offset + 3;
    }
};
const INT32_BE = {
    len: 4,
    get (array, offset) {
        return dv(array).getInt32(offset);
    },
    put (array, offset, value) {
        dv(array).setInt32(offset, value);
        return offset + 4;
    }
};
const INT32_LE = {
    len: 4,
    get (array, offset) {
        return dv(array).getInt32(offset, true);
    },
    put (array, offset, value) {
        dv(array).setInt32(offset, value, true);
        return offset + 4;
    }
};
const UINT64_LE = {
    len: 8,
    get (array, offset) {
        return dv(array).getBigUint64(offset, true);
    },
    put (array, offset, value) {
        dv(array).setBigUint64(offset, value, true);
        return offset + 8;
    }
};
const INT64_LE = {
    len: 8,
    get (array, offset) {
        return dv(array).getBigInt64(offset, true);
    },
    put (array, offset, value) {
        dv(array).setBigInt64(offset, value, true);
        return offset + 8;
    }
};
const UINT64_BE = {
    len: 8,
    get (array, offset) {
        return dv(array).getBigUint64(offset);
    },
    put (array, offset, value) {
        dv(array).setBigUint64(offset, value);
        return offset + 8;
    }
};
const INT64_BE = {
    len: 8,
    get (array, offset) {
        return dv(array).getBigInt64(offset);
    },
    put (array, offset, value) {
        dv(array).setBigInt64(offset, value);
        return offset + 8;
    }
};
const Float16_BE = {
    len: 2,
    get (dataView, offset) {
        return _ieee754.read(dataView, offset, false, 10, this.len);
    },
    put (dataView, offset, value) {
        _ieee754.write(dataView, value, offset, false, 10, this.len);
        return offset + this.len;
    }
};
const Float16_LE = {
    len: 2,
    get (array, offset) {
        return _ieee754.read(array, offset, true, 10, this.len);
    },
    put (array, offset, value) {
        _ieee754.write(array, value, offset, true, 10, this.len);
        return offset + this.len;
    }
};
const Float32_BE = {
    len: 4,
    get (array, offset) {
        return dv(array).getFloat32(offset);
    },
    put (array, offset, value) {
        dv(array).setFloat32(offset, value);
        return offset + 4;
    }
};
const Float32_LE = {
    len: 4,
    get (array, offset) {
        return dv(array).getFloat32(offset, true);
    },
    put (array, offset, value) {
        dv(array).setFloat32(offset, value, true);
        return offset + 4;
    }
};
const Float64_BE = {
    len: 8,
    get (array, offset) {
        return dv(array).getFloat64(offset);
    },
    put (array, offset, value) {
        dv(array).setFloat64(offset, value);
        return offset + 8;
    }
};
const Float64_LE = {
    len: 8,
    get (array, offset) {
        return dv(array).getFloat64(offset, true);
    },
    put (array, offset, value) {
        dv(array).setFloat64(offset, value, true);
        return offset + 8;
    }
};
const Float80_BE = {
    len: 10,
    get (array, offset) {
        return _ieee754.read(array, offset, false, 63, this.len);
    },
    put (array, offset, value) {
        _ieee754.write(array, value, offset, false, 63, this.len);
        return offset + this.len;
    }
};
const Float80_LE = {
    len: 10,
    get (array, offset) {
        return _ieee754.read(array, offset, true, 63, this.len);
    },
    put (array, offset, value) {
        _ieee754.write(array, value, offset, true, 63, this.len);
        return offset + this.len;
    }
};
class IgnoreType {
    /**
     * @param len number of bytes to ignore
     */ constructor(len){
        this.len = len;
    }
    get(_array, _off) {
    // ToDo: don't read, but skip data
    }
}
class Uint8ArrayType {
    constructor(len){
        this.len = len;
    }
    get(array, offset) {
        return array.subarray(offset, offset + this.len);
    }
    put(array, offset, value) {
        if (value.length !== this.len) throw new RangeError(`Expected a value of ${this.len} byte(s), got ${value.length}`);
        array.set(value, offset);
        return offset + this.len;
    }
}
class StringType {
    constructor(len, encoding){
        this.len = len;
        this.encoding = encoding;
    }
    get(data, offset = 0) {
        const bytes = data.subarray(offset, offset + this.len);
        return (0, _textCodec.textDecode)(bytes, this.encoding);
    }
    put(array, offset, value) {
        const bytes = (0, _textCodec.textEncode)(value, this.encoding);
        if (bytes.length !== this.len) throw new RangeError(`Expected an encoded value of ${this.len} byte(s), got ${bytes.length}`);
        array.set(bytes, offset);
        return offset + this.len;
    }
}
class AnsiStringType extends StringType {
    constructor(len){
        super(len, 'windows-1252');
    }
}

},{"@borewit/text-codec":"104u3","ieee754":"1qrwd","@parcel/transformer-js/src/esmodule-helpers.js":"53hI8"}],"1qrwd":[function(require,module,exports,__globalThis) {
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */ exports.read = function(buffer, offset, isLE, mLen, nBytes) {
    var e, m;
    var eLen = nBytes * 8 - mLen - 1;
    var eMax = (1 << eLen) - 1;
    var eBias = eMax >> 1;
    var nBits = -7;
    var i = isLE ? nBytes - 1 : 0;
    var d = isLE ? -1 : 1;
    var s = buffer[offset + i];
    i += d;
    e = s & (1 << -nBits) - 1;
    s >>= -nBits;
    nBits += eLen;
    for(; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8);
    m = e & (1 << -nBits) - 1;
    e >>= -nBits;
    nBits += mLen;
    for(; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8);
    if (e === 0) e = 1 - eBias;
    else if (e === eMax) return m ? NaN : (s ? -1 : 1) * Infinity;
    else {
        m = m + Math.pow(2, mLen);
        e = e - eBias;
    }
    return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
};
exports.write = function(buffer, value, offset, isLE, mLen, nBytes) {
    var e, m, c;
    var eLen = nBytes * 8 - mLen - 1;
    var eMax = (1 << eLen) - 1;
    var eBias = eMax >> 1;
    var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
    var i = isLE ? 0 : nBytes - 1;
    var d = isLE ? 1 : -1;
    var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
    value = Math.abs(value);
    if (isNaN(value) || value === Infinity) {
        m = isNaN(value) ? 1 : 0;
        e = eMax;
    } else {
        e = Math.floor(Math.log(value) / Math.LN2);
        if (value * (c = Math.pow(2, -e)) < 1) {
            e--;
            c *= 2;
        }
        if (e + eBias >= 1) value += rt / c;
        else value += rt * Math.pow(2, 1 - eBias);
        if (value * c >= 2) {
            e++;
            c /= 2;
        }
        if (e + eBias >= eMax) {
            m = 0;
            e = eMax;
        } else if (e + eBias >= 1) {
            m = (value * c - 1) * Math.pow(2, mLen);
            e = e + eBias;
        } else {
            m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
            e = 0;
        }
    }
    for(; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8);
    e = e << mLen | m;
    eLen += mLen;
    for(; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8);
    buffer[offset + i - d] |= s * 128;
};

},{}],"8ZVyl":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "defaultMaxMetadataEntries", ()=>defaultMaxMetadataEntries);
parcelHelpers.export(exports, "defaultMaxChapterCount", ()=>defaultMaxChapterCount);
parcelHelpers.export(exports, "getMaxMemoryAllocation", ()=>getMaxMemoryAllocation);
/** Limit entries in an individual decoded list or table, independently of byte-buffer limits. */ parcelHelpers.export(exports, "getMaxMetadataEntries", ()=>getMaxMetadataEntries);
/** Maximum chapters returned by supported chapter parsers. */ parcelHelpers.export(exports, "getMaxChapterCount", ()=>getMaxChapterCount);
/** Configure the tokenizer safety net once, using the same limit as parser-owned buffers. */ parcelHelpers.export(exports, "getTokenizerOptions", ()=>getTokenizerOptions);
/** Check untrusted lengths before allocating, including accumulated stream payloads. */ parcelHelpers.export(exports, "validateAllocation", ()=>validateAllocation);
/** Read only bounded chunks from streams; an advertised stream size does not prove bytes exist. */ parcelHelpers.export(exports, "readBuffer", ()=>readBuffer);
/** Bound custom tokenizer reads and buffer large stream payloads incrementally. */ parcelHelpers.export(exports, "readToken", ()=>readToken);
var _strtok3 = require("strtok3");
var _parseErrorJs = require("../ParseError.js");
const defaultMaxMemoryAllocation = 67108864;
const defaultMaxMetadataEntries = 100000;
const defaultMaxChapterCount = 1000;
const readChunkSize = 65536;
const allocationError = (message)=>new (0, _parseErrorJs.UnexpectedFileContentError)('metadata', message);
function getMaxMemoryAllocation(options) {
    const limit = options.maxMemoryAllocation ?? defaultMaxMemoryAllocation;
    if (!Number.isSafeInteger(limit) || limit <= 0) throw new RangeError('maxMemoryAllocation must be a positive safe integer');
    return limit;
}
function getMaxMetadataEntries(options) {
    const limit = options.maxMetadataEntries ?? defaultMaxMetadataEntries;
    if (!Number.isSafeInteger(limit) || limit <= 0) throw new RangeError('maxMetadataEntries must be a positive safe integer');
    return limit;
}
function getMaxChapterCount(options) {
    const limit = options.maxChapterCount ?? defaultMaxChapterCount;
    if (!Number.isSafeInteger(limit) || limit <= 0) throw new RangeError('maxChapterCount must be a positive safe integer');
    return limit;
}
function getTokenizerOptions(options, fileInfo) {
    return {
        maxBufferSize: getMaxMemoryAllocation(options),
        fileInfo
    };
}
function validateAllocation(length, options, makeError = allocationError) {
    if (!Number.isSafeInteger(length) || length < 0) throw makeError(`Invalid allocation size: ${length}`);
    const limit = getMaxMemoryAllocation(options);
    if (length > limit) throw makeError(`Metadata size ${length} exceeds allocation limit ${limit} (buffering limit)`);
}
function validateAvailableBytes(tokenizer, length, position) {
    if (tokenizer.fileInfo.size !== undefined && length > tokenizer.fileInfo.size - position) throw new (0, _strtok3.EndOfStreamError)();
}
async function readBuffer(tokenizer, length, options, position = tokenizer.position, makeError = allocationError) {
    validateAllocation(length, options, makeError);
    validateAvailableBytes(tokenizer, length, position);
    if (!(0, _strtok3.isRandomAccessTokenizer)(tokenizer) && length > readChunkSize) {
        const chunks = [];
        for(let remaining = length; remaining > 0;){
            const chunk = new Uint8Array(Math.min(remaining, readChunkSize));
            const bytesRead = await tokenizer.readBuffer(chunk, {
                position
            });
            if (bytesRead !== chunk.length) throw new (0, _strtok3.EndOfStreamError)();
            chunks.push(chunk);
            remaining -= chunk.length;
            position += chunk.length;
        }
        const buffer = new Uint8Array(length);
        let offset = 0;
        for (const chunk of chunks){
            buffer.set(chunk, offset);
            offset += chunk.length;
        }
        return buffer;
    }
    const buffer = new Uint8Array(length);
    if (await tokenizer.readBuffer(buffer, {
        position
    }) !== length) throw new (0, _strtok3.EndOfStreamError)();
    return buffer;
}
async function readToken(tokenizer, token, options, position = tokenizer.position, makeError = allocationError) {
    validateAllocation(token.len, options, makeError);
    validateAvailableBytes(tokenizer, token.len, position);
    if (token.len <= readChunkSize) return tokenizer.readToken(token, position);
    return token.get(await readBuffer(tokenizer, token.len, options, position, makeError), 0);
}

},{"strtok3":"7L6Gs","../ParseError.js":"E03ox","@parcel/transformer-js/src/esmodule-helpers.js":"53hI8"}],"E03ox":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "makeParseError", ()=>makeParseError);
// Concrete error class representing a file type determination failure.
parcelHelpers.export(exports, "CouldNotDetermineFileTypeError", ()=>CouldNotDetermineFileTypeError);
// Concrete error class representing an unsupported file type.
parcelHelpers.export(exports, "UnsupportedFileTypeError", ()=>UnsupportedFileTypeError);
// Concrete error class representing unexpected file content.
parcelHelpers.export(exports, "UnexpectedFileContentError", ()=>UnexpectedFileContentError);
// Concrete error class representing a field decoding error.
parcelHelpers.export(exports, "FieldDecodingError", ()=>FieldDecodingError);
parcelHelpers.export(exports, "InternalParserError", ()=>InternalParserError);
parcelHelpers.export(exports, "makeUnexpectedFileContentError", ()=>makeUnexpectedFileContentError);
const makeParseError = (name)=>{
    return class ParseError extends Error {
        name;
        constructor(message){
            super(message);
            this.name = name;
        }
    };
};
class CouldNotDetermineFileTypeError extends makeParseError('CouldNotDetermineFileTypeError') {
}
class UnsupportedFileTypeError extends makeParseError('UnsupportedFileTypeError') {
}
class UnexpectedFileContentError extends makeParseError('UnexpectedFileContentError') {
    fileType;
    constructor(fileType, message){
        super(message);
        this.fileType = fileType;
    }
    // Override toString to include file type information.
    toString() {
        return `${this.name} (FileType: ${this.fileType}): ${this.message}`;
    }
}
class FieldDecodingError extends makeParseError('FieldDecodingError') {
}
class InternalParserError extends makeParseError('InternalParserError') {
}
const makeUnexpectedFileContentError = (fileType)=>{
    return class extends UnexpectedFileContentError {
        constructor(message){
            super(fileType, message);
        }
    };
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"53hI8"}],"91dLC":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "BasicParser", ()=>BasicParser);
var _allocationJs = require("./Allocation.js");
class BasicParser {
    metadata;
    tokenizer;
    options;
    /**
     * Initialize parser with output (metadata), input (tokenizer) & parsing options (options).
     * @param {INativeMetadataCollector} metadata Output
     * @param {ITokenizer} tokenizer Input
     * @param {IOptions} options Parsing options
     */ constructor(metadata, tokenizer, options){
        (0, _allocationJs.getMaxMemoryAllocation)(options);
        this.metadata = metadata;
        this.tokenizer = tokenizer;
        this.options = options;
    }
    readToken(token, position) {
        return (0, _allocationJs.readToken)(this.tokenizer, token, this.options, position);
    }
}

},{"./Allocation.js":"8ZVyl","@parcel/transformer-js/src/esmodule-helpers.js":"53hI8"}],"Q4yiL":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getBit", ()=>getBit);
/**
 * Find delimiting zero in uint8Array
 * @param uint8Array Uint8Array to find the zero delimiter in
 * @param encoding The string encoding used
 * @return position in uint8Array where zero found, or uint8Array.length if not found
 */ parcelHelpers.export(exports, "findZero", ()=>findZero);
parcelHelpers.export(exports, "trimRightNull", ()=>trimRightNull);
/** Split text, validating the value count before allocation. By default, omit empty segments except for empty results. */ parcelHelpers.export(exports, "splitText", ()=>splitText);
/**
 * Decode string
 */ parcelHelpers.export(exports, "decodeString", ()=>decodeString);
parcelHelpers.export(exports, "stripNulls", ()=>stripNulls);
/**
 * Read bit-aligned number start from buffer
 * Total offset in bits = byteOffset * 8 + bitOffset
 * @param source Byte buffer
 * @param byteOffset Starting offset in bytes
 * @param bitOffset Starting offset in bits: 0 = most significant bit
 * @param len Length of number in bits
 * @return Decoded bit aligned number
 */ parcelHelpers.export(exports, "getBitAllignedNumber", ()=>getBitAllignedNumber);
/**
 * Read bit-aligned number start from buffer
 * Total offset in bits = byteOffset * 8 + bitOffset
 * @param source Byte Uint8Array
 * @param byteOffset Starting offset in bytes
 * @param bitOffset Starting offset in bits: 0 = most significant bit, 7 is the least significant bit
 * @return True if bit is set
 */ parcelHelpers.export(exports, "isBitSet", ()=>isBitSet);
parcelHelpers.export(exports, "a2hex", ()=>a2hex);
/**
 * Convert power ratio to DB
 * ratio: [0..1]
 */ parcelHelpers.export(exports, "ratioToDb", ()=>ratioToDb);
/**
 * Convert dB to ratio
 * db Decibels
 */ parcelHelpers.export(exports, "dbToRatio", ()=>dbToRatio);
/**
 * Convert replay gain to ratio and Decibel
 * @param value string holding a ratio like '0.034' or '-7.54 dB'
 */ parcelHelpers.export(exports, "toRatio", ()=>toRatio);
/**
 * Decode a big-endian unsigned integer from a Uint8Array.
 * Supports dynamic length (1–8 bytes).
 */ parcelHelpers.export(exports, "decodeUintBE", ()=>decodeUintBE);
var _tokenTypes = require("token-types");
var _uint8ArrayExtras = require("uint8array-extras");
var _parseErrorJs = require("../ParseError.js");
function getBit(buf, off, bit) {
    return (buf[off] & 1 << bit) !== 0;
}
function findZero(uint8Array, encoding) {
    const len = uint8Array.length;
    if (encoding === 'utf-16le' || encoding === 'utf-16be') {
        // Look for 0x00 0x00 on 2-byte boundary
        for(let i = 0; i + 1 < len; i += 2){
            if (uint8Array[i] === 0 && uint8Array[i + 1] === 0) return i;
        }
        return len;
    }
    // latin1 / utf8 / utf16be (caller typically handles utf16be separately or via decode)
    for(let i = 0; i < len; i++){
        if (uint8Array[i] === 0) return i;
    }
    return len;
}
function trimRightNull(x) {
    const pos0 = x.indexOf('\0');
    return pos0 === -1 ? x : x.substring(0, pos0);
}
function splitText(text, separator, context, validateCount, { keepEmpty = false } = {}) {
    if (separator.length === 0) throw new RangeError('Text separator must not be empty');
    let count = 0;
    let start = 0;
    for(let end = text.indexOf(separator); end >= 0; end = text.indexOf(separator, start)){
        if (keepEmpty || end > start) ++count;
        start = end + separator.length;
    }
    if (keepEmpty || start < text.length) ++count;
    validateCount(Math.max(count, 1), context);
    const values = [];
    start = 0;
    for(let end = text.indexOf(separator); end >= 0; end = text.indexOf(separator, start)){
        if (keepEmpty || end > start) values.push(text.slice(start, end));
        start = end + separator.length;
    }
    if (keepEmpty || start < text.length) values.push(text.slice(start));
    else if (values.length === 0) values.push('');
    return values;
}
function swapBytes(uint8Array) {
    const l = uint8Array.length;
    if ((l & 1) !== 0) throw new (0, _parseErrorJs.FieldDecodingError)('Buffer length must be even');
    for(let i = 0; i < l; i += 2){
        const a = uint8Array[i];
        uint8Array[i] = uint8Array[i + 1];
        uint8Array[i + 1] = a;
    }
    return uint8Array;
}
function decodeString(uint8Array, encoding) {
    // annoying workaround for a double BOM issue
    // https://github.com/leetreveil/musicmetadata/issues/84
    if (uint8Array[0] === 0xff && uint8Array[1] === 0xfe) // little endian
    return decodeString(uint8Array.subarray(2), encoding);
    if (encoding === 'utf-16le' && uint8Array[0] === 0xfe && uint8Array[1] === 0xff) {
        // BOM, indicating big endian decoding
        if ((uint8Array.length & 1) !== 0) throw new (0, _parseErrorJs.FieldDecodingError)('Expected even number of octets for 16-bit unicode string');
        return decodeString(swapBytes(uint8Array), encoding);
    }
    if (encoding === 'utf-16be') {
        // There is no native UTF-16BE decoder; swap to UTF-16LE and decode that.
        if ((uint8Array.length & 1) !== 0) throw new (0, _parseErrorJs.FieldDecodingError)('Expected even number of octets for 16-bit unicode string');
        return new (0, _tokenTypes.StringType)(uint8Array.length, 'utf-16le').get(swapBytes(Uint8Array.from(uint8Array)), 0);
    }
    return new (0, _tokenTypes.StringType)(uint8Array.length, encoding).get(uint8Array, 0);
}
function stripNulls(str) {
    str = str.replace(/^\x00+/g, '');
    str = str.replace(/\x00+$/g, '');
    return str;
}
function getBitAllignedNumber(source, byteOffset, bitOffset, len) {
    const byteOff = byteOffset + ~~(bitOffset / 8);
    const bitOff = bitOffset % 8;
    const value = source[byteOff] & 0xff >> bitOff;
    const bitsLeft = len + bitOff - 8;
    if (bitsLeft <= 0) return value >> -bitsLeft;
    return value << bitsLeft | getBitAllignedNumber(source, byteOff + 1, 0, bitsLeft);
}
function isBitSet(source, byteOffset, bitOffset) {
    return getBitAllignedNumber(source, byteOffset, bitOffset, 1) === 1;
}
function a2hex(str) {
    const arr = [];
    for(let i = 0, l = str.length; i < l; i++){
        const hex = Number(str.charCodeAt(i)).toString(16);
        arr.push(hex.length === 1 ? `0${hex}` : hex);
    }
    return arr.join(' ');
}
function ratioToDb(ratio) {
    return 10 * Math.log10(ratio);
}
function dbToRatio(dB) {
    return 10 ** (dB / 10);
}
function toRatio(value) {
    const ps = value.split(' ', 2).map((p)=>p.trim().toLowerCase());
    if (ps.length >= 1) {
        const v = Number.parseFloat(ps[0]);
        return ps.length === 2 && ps[1] === 'db' ? {
            dB: v,
            ratio: dbToRatio(v)
        } : {
            dB: ratioToDb(v),
            ratio: v
        };
    }
}
function decodeUintBE(uint8Array) {
    if (uint8Array.length === 0) throw new Error('decodeUintBE: empty Uint8Array');
    const view = new DataView(uint8Array.buffer, uint8Array.byteOffset, uint8Array.byteLength);
    return (0, _uint8ArrayExtras.getUintBE)(view);
}

},{"token-types":"al35Q","uint8array-extras":"4N1qG","../ParseError.js":"E03ox","@parcel/transformer-js/src/esmodule-helpers.js":"53hI8"}],"4N1qG":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isUint8Array", ()=>isUint8Array);
parcelHelpers.export(exports, "assertUint8Array", ()=>assertUint8Array);
parcelHelpers.export(exports, "assertUint8ArrayOrArrayBuffer", ()=>assertUint8ArrayOrArrayBuffer);
parcelHelpers.export(exports, "toUint8Array", ()=>toUint8Array);
parcelHelpers.export(exports, "concatUint8Arrays", ()=>concatUint8Arrays);
parcelHelpers.export(exports, "areUint8ArraysEqual", ()=>areUint8ArraysEqual);
parcelHelpers.export(exports, "compareUint8Arrays", ()=>compareUint8Arrays);
parcelHelpers.export(exports, "uint8ArrayToString", ()=>uint8ArrayToString);
parcelHelpers.export(exports, "stringToUint8Array", ()=>stringToUint8Array);
parcelHelpers.export(exports, "uint8ArrayToBase64", ()=>uint8ArrayToBase64);
parcelHelpers.export(exports, "base64ToUint8Array", ()=>base64ToUint8Array);
parcelHelpers.export(exports, "stringToBase64", ()=>stringToBase64);
parcelHelpers.export(exports, "base64ToString", ()=>base64ToString);
parcelHelpers.export(exports, "uint8ArrayToHex", ()=>uint8ArrayToHex);
parcelHelpers.export(exports, "hexToUint8Array", ()=>hexToUint8Array);
/**
@param {DataView} view
@returns {number}
*/ parcelHelpers.export(exports, "getUintBE", ()=>getUintBE);
/**
@param {Uint8Array | ArrayBuffer} array
@param {Uint8Array | ArrayBuffer} value
@returns {number}
*/ parcelHelpers.export(exports, "indexOf", ()=>indexOf);
/**
@param {Uint8Array | ArrayBuffer} array
@param {Uint8Array | ArrayBuffer} value
@returns {boolean}
*/ parcelHelpers.export(exports, "includes", ()=>includes);
const objectToString = Object.prototype.toString;
const uint8ArrayStringified = '[object Uint8Array]';
const arrayBufferStringified = '[object ArrayBuffer]';
function isType(value, typeConstructor, typeStringified) {
    if (!value) return false;
    if (value.constructor === typeConstructor) return true;
    return objectToString.call(value) === typeStringified;
}
function isUint8Array(value) {
    return isType(value, Uint8Array, uint8ArrayStringified);
}
function isArrayBuffer(value) {
    return isType(value, ArrayBuffer, arrayBufferStringified);
}
function isUint8ArrayOrArrayBuffer(value) {
    return isUint8Array(value) || isArrayBuffer(value);
}
function toUint8ArrayIfArrayBuffer(value) {
    return isArrayBuffer(value) ? new Uint8Array(value) : value;
}
function assertUint8Array(value) {
    if (!isUint8Array(value)) throw new TypeError(`Expected \`Uint8Array\`, got \`${typeof value}\``);
}
function assertUint8ArrayOrArrayBuffer(value) {
    if (!isUint8ArrayOrArrayBuffer(value)) throw new TypeError(`Expected \`Uint8Array\` or \`ArrayBuffer\`, got \`${typeof value}\``);
}
function toUint8Array(value) {
    if (value instanceof ArrayBuffer) return new Uint8Array(value);
    if (ArrayBuffer.isView(value)) return new Uint8Array(value.buffer, value.byteOffset, value.byteLength);
    throw new TypeError(`Unsupported value, got \`${typeof value}\`.`);
}
function concatUint8Arrays(arrays, totalLength) {
    if (arrays.length === 0) return new Uint8Array(0);
    totalLength ??= arrays.reduce((accumulator, currentValue)=>accumulator + currentValue.byteLength, 0);
    const returnValue = new Uint8Array(totalLength);
    let offset = 0;
    for (let array of arrays){
        assertUint8ArrayOrArrayBuffer(array);
        array = toUint8ArrayIfArrayBuffer(array);
        returnValue.set(array, offset);
        offset += array.length;
    }
    return returnValue;
}
function areUint8ArraysEqual(a, b) {
    assertUint8ArrayOrArrayBuffer(a);
    assertUint8ArrayOrArrayBuffer(b);
    a = toUint8ArrayIfArrayBuffer(a);
    b = toUint8ArrayIfArrayBuffer(b);
    if (a === b) return true;
    if (a.length !== b.length) return false;
    // eslint-disable-next-line unicorn/no-for-loop
    for(let index = 0; index < a.length; index++){
        if (a[index] !== b[index]) return false;
    }
    return true;
}
function compareUint8Arrays(a, b) {
    assertUint8ArrayOrArrayBuffer(a);
    assertUint8ArrayOrArrayBuffer(b);
    a = toUint8ArrayIfArrayBuffer(a);
    b = toUint8ArrayIfArrayBuffer(b);
    const length = Math.min(a.length, b.length);
    for(let index = 0; index < length; index++){
        const diff = a[index] - b[index];
        if (diff !== 0) return Math.sign(diff);
    }
    // At this point, all the compared elements are equal.
    // The shorter array should come first if the arrays are of different lengths.
    return Math.sign(a.length - b.length);
}
const cachedDecoders = {
    utf8: new globalThis.TextDecoder('utf8')
};
function uint8ArrayToString(array, encoding = 'utf8') {
    assertUint8ArrayOrArrayBuffer(array);
    cachedDecoders[encoding] ??= new globalThis.TextDecoder(encoding);
    return cachedDecoders[encoding].decode(array);
}
function assertString(value) {
    if (typeof value !== 'string') throw new TypeError(`Expected \`string\`, got \`${typeof value}\``);
}
const cachedEncoder = new globalThis.TextEncoder();
function stringToUint8Array(string) {
    assertString(string);
    return cachedEncoder.encode(string);
}
function base64ToBase64Url(base64) {
    return base64.replaceAll('+', '-').replaceAll('/', '_').replace(/=+$/, '');
}
function base64UrlToBase64(base64url) {
    const base64 = base64url.replaceAll('-', '+').replaceAll('_', '/');
    const padding = (4 - base64.length % 4) % 4;
    return base64 + '='.repeat(padding);
}
// Reference: https://phuoc.ng/collection/this-vs-that/concat-vs-push/
// Important: Keep this value divisible by 3 so intermediate chunks produce no Base64 padding.
const MAX_BLOCK_SIZE = 65535;
function uint8ArrayToBase64(array, { urlSafe = false } = {}) {
    assertUint8ArrayOrArrayBuffer(array);
    array = toUint8ArrayIfArrayBuffer(array);
    let base64 = '';
    for(let index = 0; index < array.length; index += MAX_BLOCK_SIZE){
        const chunk = array.subarray(index, index + MAX_BLOCK_SIZE);
        // Required as `btoa` and `atob` don't properly support Unicode: https://developer.mozilla.org/en-US/docs/Glossary/Base64#the_unicode_problem
        base64 += globalThis.btoa(String.fromCodePoint.apply(undefined, chunk));
    }
    return urlSafe ? base64ToBase64Url(base64) : base64;
}
function base64ToUint8Array(base64String) {
    assertString(base64String);
    return Uint8Array.from(globalThis.atob(base64UrlToBase64(base64String)), (x)=>x.codePointAt(0));
}
function stringToBase64(string, { urlSafe = false } = {}) {
    assertString(string);
    return uint8ArrayToBase64(stringToUint8Array(string), {
        urlSafe
    });
}
function base64ToString(base64String) {
    assertString(base64String);
    return uint8ArrayToString(base64ToUint8Array(base64String));
}
const byteToHexLookupTable = Array.from({
    length: 256
}, (_, index)=>index.toString(16).padStart(2, '0'));
function uint8ArrayToHex(array) {
    assertUint8ArrayOrArrayBuffer(array);
    array = toUint8ArrayIfArrayBuffer(array);
    // Concatenating a string is faster than using an array.
    let hexString = '';
    // eslint-disable-next-line unicorn/no-for-loop -- Max performance is critical.
    for(let index = 0; index < array.length; index++)hexString += byteToHexLookupTable[array[index]];
    return hexString;
}
const hexToDecimalLookupTable = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    a: 10,
    b: 11,
    c: 12,
    d: 13,
    e: 14,
    f: 15,
    A: 10,
    B: 11,
    C: 12,
    D: 13,
    E: 14,
    F: 15
};
function hexToUint8Array(hexString) {
    assertString(hexString);
    if (hexString.length % 2 !== 0) throw new Error('Invalid Hex string length.');
    const resultLength = hexString.length / 2;
    const bytes = new Uint8Array(resultLength);
    for(let index = 0; index < resultLength; index++){
        const highNibble = hexToDecimalLookupTable[hexString[index * 2]];
        const lowNibble = hexToDecimalLookupTable[hexString[index * 2 + 1]];
        if (highNibble === undefined || lowNibble === undefined) throw new Error(`Invalid Hex character encountered at position ${index * 2}`);
        bytes[index] = highNibble << 4 | lowNibble; // eslint-disable-line no-bitwise
    }
    return bytes;
}
function getUintBE(view) {
    const { byteLength } = view;
    if (byteLength === 6) return view.getUint16(0) * 2 ** 32 + view.getUint32(2);
    if (byteLength === 5) return view.getUint8(0) * 2 ** 32 + view.getUint32(1);
    if (byteLength === 4) return view.getUint32(0);
    if (byteLength === 3) return view.getUint8(0) * 2 ** 16 + view.getUint16(1);
    if (byteLength === 2) return view.getUint16(0);
    if (byteLength === 1) return view.getUint8(0);
}
function indexOf(array, value) {
    array = toUint8ArrayIfArrayBuffer(array);
    value = toUint8ArrayIfArrayBuffer(value);
    const arrayLength = array.length;
    const valueLength = value.length;
    if (valueLength === 0) return -1;
    if (valueLength > arrayLength) return -1;
    const validOffsetLength = arrayLength - valueLength;
    for(let index = 0; index <= validOffsetLength; index++){
        let isMatch = true;
        for(let index2 = 0; index2 < valueLength; index2++)if (array[index + index2] !== value[index2]) {
            isMatch = false;
            break;
        }
        if (isMatch) return index;
    }
    return -1;
}
function includes(array, value) {
    return indexOf(array, value) !== -1;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"53hI8"}],"5CQoK":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DataType", ()=>DataType);
parcelHelpers.export(exports, "DescriptorParser", ()=>DescriptorParser);
parcelHelpers.export(exports, "Header", ()=>Header);
parcelHelpers.export(exports, "TagFooter", ()=>TagFooter);
parcelHelpers.export(exports, "TagItemHeader", ()=>TagItemHeader);
parcelHelpers.export(exports, "parseTagFlags", ()=>parseTagFlags);
/**
 * @param num {number}
 * @param bit 0 is least significant bit (LSB)
 * @return {boolean} true if bit is 1; otherwise false
 */ parcelHelpers.export(exports, "isBitSet", ()=>isBitSet);
var _tokenTypes = require("token-types");
var _fourCCJs = require("../common/FourCC.js");
const DataType = {
    text_utf8: 0,
    binary: 1,
    external_info: 2,
    reserved: 3
};
const DescriptorParser = {
    len: 52,
    get: (buf, off)=>{
        return {
            // should equal 'MAC '
            ID: (0, _fourCCJs.FourCcToken).get(buf, off),
            // versionIndex number * 1000 (3.81 = 3810) (remember that 4-byte alignment causes this to take 4-bytes)
            version: _tokenTypes.UINT32_LE.get(buf, off + 4) / 1000,
            // the number of descriptor bytes (allows later expansion of this header)
            descriptorBytes: _tokenTypes.UINT32_LE.get(buf, off + 8),
            // the number of header APE_HEADER bytes
            headerBytes: _tokenTypes.UINT32_LE.get(buf, off + 12),
            // the number of header APE_HEADER bytes
            seekTableBytes: _tokenTypes.UINT32_LE.get(buf, off + 16),
            // the number of header data bytes (from original file)
            headerDataBytes: _tokenTypes.UINT32_LE.get(buf, off + 20),
            // the number of bytes of APE frame data
            apeFrameDataBytes: _tokenTypes.UINT32_LE.get(buf, off + 24),
            // the high order number of APE frame data bytes
            apeFrameDataBytesHigh: _tokenTypes.UINT32_LE.get(buf, off + 28),
            // the terminating data of the file (not including tag data)
            terminatingDataBytes: _tokenTypes.UINT32_LE.get(buf, off + 32),
            // the MD5 hash of the file (see notes for usage... it's a little tricky)
            fileMD5: new _tokenTypes.Uint8ArrayType(16).get(buf, off + 36)
        };
    }
};
const Header = {
    len: 24,
    get: (buf, off)=>{
        return {
            // the compression level (see defines I.E. COMPRESSION_LEVEL_FAST)
            compressionLevel: _tokenTypes.UINT16_LE.get(buf, off),
            // any format flags (for future use)
            formatFlags: _tokenTypes.UINT16_LE.get(buf, off + 2),
            // the number of audio blocks in one frame
            blocksPerFrame: _tokenTypes.UINT32_LE.get(buf, off + 4),
            // the number of audio blocks in the final frame
            finalFrameBlocks: _tokenTypes.UINT32_LE.get(buf, off + 8),
            // the total number of frames
            totalFrames: _tokenTypes.UINT32_LE.get(buf, off + 12),
            // the bits per sample (typically 16)
            bitsPerSample: _tokenTypes.UINT16_LE.get(buf, off + 16),
            // the number of channels (1 or 2)
            channel: _tokenTypes.UINT16_LE.get(buf, off + 18),
            // the sample rate (typically 44100)
            sampleRate: _tokenTypes.UINT32_LE.get(buf, off + 20)
        };
    }
};
const TagFooter = {
    len: 32,
    get: (buf, off)=>{
        return {
            // should equal 'APETAGEX'
            ID: new _tokenTypes.StringType(8, 'ascii').get(buf, off),
            // equals CURRENT_APE_TAG_VERSION
            version: _tokenTypes.UINT32_LE.get(buf, off + 8),
            // the complete size of the tag, including this footer (excludes header)
            size: _tokenTypes.UINT32_LE.get(buf, off + 12),
            // the number of fields in the tag
            fields: _tokenTypes.UINT32_LE.get(buf, off + 16),
            // reserved for later use (must be zero),
            flags: parseTagFlags(_tokenTypes.UINT32_LE.get(buf, off + 20))
        };
    }
};
const TagItemHeader = {
    len: 8,
    get: (buf, off)=>{
        return {
            // Length of assigned value in bytes
            size: _tokenTypes.UINT32_LE.get(buf, off),
            // reserved for later use (must be zero),
            flags: parseTagFlags(_tokenTypes.UINT32_LE.get(buf, off + 4))
        };
    }
};
function parseTagFlags(flags) {
    return {
        containsHeader: isBitSet(flags, 31),
        containsFooter: isBitSet(flags, 30),
        isHeader: isBitSet(flags, 29),
        readOnly: isBitSet(flags, 0),
        dataType: (flags & 6) >> 1
    };
}
function isBitSet(num, bit) {
    return (num & 1 << bit) !== 0;
}

},{"token-types":"al35Q","../common/FourCC.js":"1nM5t","@parcel/transformer-js/src/esmodule-helpers.js":"53hI8"}],"1nM5t":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "FourCcToken", ()=>FourCcToken);
var _textCodec = require("@borewit/text-codec");
var _parseErrorJs = require("../ParseError.js");
var _utilJs = require("./Util.js");
const validFourCC = /^[\x21-\x7e©][\x20-\x7e\x00()]{3}/;
const FourCcToken = {
    len: 4,
    get: (buf, off)=>{
        const id = (0, _textCodec.textDecode)(buf.subarray(off, off + FourCcToken.len), 'latin1');
        if (!id.match(validFourCC)) throw new (0, _parseErrorJs.FieldDecodingError)(`FourCC contains invalid characters: ${_utilJs.a2hex(id)} "${id}"`);
        return id;
    },
    put: (buffer, offset, id)=>{
        const str = (0, _textCodec.textEncode)(id, 'latin1');
        if (str.length !== 4) throw new (0, _parseErrorJs.InternalParserError)('Invalid length');
        buffer.set(str, offset);
        return offset + 4;
    }
};

},{"@borewit/text-codec":"104u3","../ParseError.js":"E03ox","./Util.js":"Q4yiL","@parcel/transformer-js/src/esmodule-helpers.js":"53hI8"}],"fWBrl":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Genres", ()=>Genres);
parcelHelpers.export(exports, "ID3v1Parser", ()=>ID3v1Parser);
parcelHelpers.export(exports, "hasID3v1Header", ()=>hasID3v1Header);
var _textCodec = require("@borewit/text-codec");
var _debug = require("debug");
var _debugDefault = parcelHelpers.interopDefault(_debug);
var _strtok3 = require("strtok3");
var _tokenTypes = require("token-types");
var _apev2ParserJs = require("../apev2/APEv2Parser.js");
var _basicParserJs = require("../common/BasicParser.js");
var _utilJs = require("../common/Util.js");
const debug = (0, _debugDefault.default)('music-metadata:parser:ID3v1');
const Genres = [
    'Blues',
    'Classic Rock',
    'Country',
    'Dance',
    'Disco',
    'Funk',
    'Grunge',
    'Hip-Hop',
    'Jazz',
    'Metal',
    'New Age',
    'Oldies',
    'Other',
    'Pop',
    'R&B',
    'Rap',
    'Reggae',
    'Rock',
    'Techno',
    'Industrial',
    'Alternative',
    'Ska',
    'Death Metal',
    'Pranks',
    'Soundtrack',
    'Euro-Techno',
    'Ambient',
    'Trip-Hop',
    'Vocal',
    'Jazz+Funk',
    'Fusion',
    'Trance',
    'Classical',
    'Instrumental',
    'Acid',
    'House',
    'Game',
    'Sound Clip',
    'Gospel',
    'Noise',
    'Alt. Rock',
    'Bass',
    'Soul',
    'Punk',
    'Space',
    'Meditative',
    'Instrumental Pop',
    'Instrumental Rock',
    'Ethnic',
    'Gothic',
    'Darkwave',
    'Techno-Industrial',
    'Electronic',
    'Pop-Folk',
    'Eurodance',
    'Dream',
    'Southern Rock',
    'Comedy',
    'Cult',
    'Gangsta Rap',
    'Top 40',
    'Christian Rap',
    'Pop/Funk',
    'Jungle',
    'Native American',
    'Cabaret',
    'New Wave',
    'Psychedelic',
    'Rave',
    'Showtunes',
    'Trailer',
    'Lo-Fi',
    'Tribal',
    'Acid Punk',
    'Acid Jazz',
    'Polka',
    'Retro',
    'Musical',
    'Rock & Roll',
    'Hard Rock',
    'Folk',
    'Folk/Rock',
    'National Folk',
    'Swing',
    'Fast-Fusion',
    'Bebob',
    'Latin',
    'Revival',
    'Celtic',
    'Bluegrass',
    'Avantgarde',
    'Gothic Rock',
    'Progressive Rock',
    'Psychedelic Rock',
    'Symphonic Rock',
    'Slow Rock',
    'Big Band',
    'Chorus',
    'Easy Listening',
    'Acoustic',
    'Humour',
    'Speech',
    'Chanson',
    'Opera',
    'Chamber Music',
    'Sonata',
    'Symphony',
    'Booty Bass',
    'Primus',
    'Porn Groove',
    'Satire',
    'Slow Jam',
    'Club',
    'Tango',
    'Samba',
    'Folklore',
    'Ballad',
    'Power Ballad',
    'Rhythmic Soul',
    'Freestyle',
    'Duet',
    'Punk Rock',
    'Drum Solo',
    'A Cappella',
    'Euro-House',
    'Dance Hall',
    'Goa',
    'Drum & Bass',
    'Club-House',
    'Hardcore',
    'Terror',
    'Indie',
    'BritPop',
    'Negerpunk',
    'Polsk Punk',
    'Beat',
    'Christian Gangsta Rap',
    'Heavy Metal',
    'Black Metal',
    'Crossover',
    'Contemporary Christian',
    'Christian Rock',
    'Merengue',
    'Salsa',
    'Thrash Metal',
    'Anime',
    'JPop',
    'Synthpop',
    'Abstract',
    'Art Rock',
    'Baroque',
    'Bhangra',
    'Big Beat',
    'Breakbeat',
    'Chillout',
    'Downtempo',
    'Dub',
    'EBM',
    'Eclectic',
    'Electro',
    'Electroclash',
    'Emo',
    'Experimental',
    'Garage',
    'Global',
    'IDM',
    'Illbient',
    'Industro-Goth',
    'Jam Band',
    'Krautrock',
    'Leftfield',
    'Lounge',
    'Math Rock',
    'New Romantic',
    'Nu-Breakz',
    'Post-Punk',
    'Post-Rock',
    'Psytrance',
    'Shoegaze',
    'Space Rock',
    'Trop Rock',
    'World Music',
    'Neoclassical',
    'Audiobook',
    'Audio Theatre',
    'Neue Deutsche Welle',
    'Podcast',
    'Indie Rock',
    'G-Funk',
    'Dubstep',
    'Garage Rock',
    'Psybient'
];
/**
 * Spec: http://id3.org/ID3v1
 * Wiki: https://en.wikipedia.org/wiki/ID3
 */ const Iid3v1Token = {
    len: 128,
    /**
     * @param buf Buffer possibly holding the 128-byte ID3v1/1.1 metadata header
     * @param off Offset in buffer in bytes
     * @returns ID3v1/1.1 header if the first 3 bytes equal 'TAG', otherwise null is returned
     */ get: (buf, off)=>{
        const header = new Id3v1StringType(3).get(buf, off);
        if (header !== 'TAG') return null;
        const zeroByte = (0, _tokenTypes.UINT8).get(buf, off + 125);
        const track = (0, _tokenTypes.UINT8).get(buf, off + 126);
        // ID3v1.1 replaces the final two comment bytes with a zero separator and a nonzero track number.
        const hasTrack = zeroByte === 0 && track !== 0;
        return {
            header,
            title: new Id3v1StringType(30).get(buf, off + 3),
            artist: new Id3v1StringType(30).get(buf, off + 33),
            album: new Id3v1StringType(30).get(buf, off + 63),
            year: new Id3v1StringType(4).get(buf, off + 93),
            comment: new Id3v1StringType(hasTrack ? 28 : 30).get(buf, off + 97),
            track: hasTrack ? track : undefined,
            genre: (0, _tokenTypes.UINT8).get(buf, off + 127)
        };
    }
};
class Id3v1StringType {
    len;
    stringType;
    constructor(len){
        this.len = len;
        this.stringType = new (0, _tokenTypes.StringType)(len, 'latin1');
    }
    get(buf, off) {
        let value = this.stringType.get(buf, off);
        value = _utilJs.trimRightNull(value);
        value = value.trim();
        return value.length > 0 ? value : undefined;
    }
}
class ID3v1Parser extends (0, _basicParserJs.BasicParser) {
    apeHeader;
    constructor(metadata, tokenizer, options){
        super(metadata, tokenizer, options);
        this.apeHeader = options.apeHeader;
    }
    static getGenre(genreIndex) {
        if (genreIndex < Genres.length) return Genres[genreIndex];
        return undefined; // ToDO: generate warning
    }
    async parse() {
        if (!this.tokenizer.fileInfo.size) {
            debug('Skip checking for ID3v1 because the file-size is unknown');
            return;
        }
        if (this.apeHeader && (0, _strtok3.isRandomAccessTokenizer)(this.tokenizer)) {
            this.tokenizer.setPosition(this.apeHeader.offset);
            const apeParser = new (0, _apev2ParserJs.APEv2Parser)(this.metadata, this.tokenizer, this.options);
            await apeParser.parseTags(this.apeHeader.footer);
        }
        const offset = this.tokenizer.fileInfo.size - Iid3v1Token.len;
        if (this.tokenizer.position > offset) {
            debug('Already consumed the last 128 bytes');
            return;
        }
        const header = await this.tokenizer.readToken(Iid3v1Token, offset);
        if (header) {
            debug('ID3v1 header found at: pos=%s', this.tokenizer.fileInfo.size - Iid3v1Token.len);
            const props = [
                'title',
                'artist',
                'album',
                'comment',
                'track',
                'year'
            ];
            for (const id of props)if (header[id] && header[id] !== '') await this.addTag(id, header[id]);
            const genre = ID3v1Parser.getGenre(header.genre);
            if (genre) await this.addTag('genre', genre);
        } else debug('ID3v1 header not found at: pos=%s', this.tokenizer.fileInfo.size - Iid3v1Token.len);
    }
    async addTag(id, value) {
        await this.metadata.addTag('ID3v1', id, value);
    }
}
async function hasID3v1Header(tokenizer) {
    if (tokenizer.fileInfo.size >= 128) {
        const tag = new Uint8Array(3);
        const position = tokenizer.position;
        await tokenizer.readBuffer(tag, {
            position: tokenizer.fileInfo.size - 128
        });
        tokenizer.setPosition(position); // Restore tokenizer position
        return (0, _textCodec.textDecode)(tag, 'latin1') === 'TAG';
    }
    return false;
}

},{"@borewit/text-codec":"104u3","debug":"4XIdh","strtok3":"7L6Gs","token-types":"al35Q","../apev2/APEv2Parser.js":"1ZQcJ","../common/BasicParser.js":"91dLC","../common/Util.js":"Q4yiL","@parcel/transformer-js/src/esmodule-helpers.js":"53hI8"}],"hMz63":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "endTag2", ()=>endTag2);
parcelHelpers.export(exports, "getLyricsHeaderLength", ()=>getLyricsHeaderLength);
var _textCodec = require("@borewit/text-codec");
const endTag2 = 'LYRICS200';
async function getLyricsHeaderLength(tokenizer) {
    const fileSize = tokenizer.fileInfo.size;
    if (fileSize >= 143) {
        const buf = new Uint8Array(15);
        const position = tokenizer.position;
        await tokenizer.readBuffer(buf, {
            position: fileSize - 143
        });
        tokenizer.setPosition(position); // Restore position
        const txt = (0, _textCodec.textDecode)(buf, 'latin1');
        const tag = txt.substring(6);
        if (tag === endTag2) return Number.parseInt(txt.substring(0, 6), 10) + 15;
    }
    return 0;
}

},{"@borewit/text-codec":"104u3","@parcel/transformer-js/src/esmodule-helpers.js":"53hI8"}],"L60ob":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "parseHttpContentType", ()=>parseHttpContentType);
parcelHelpers.export(exports, "ParserFactory", ()=>ParserFactory);
var _contentType = require("content-type");
var _debug = require("debug");
var _debugDefault = parcelHelpers.interopDefault(_debug);
var _fileType = require("file-type");
var _mediaTyper = require("media-typer");
var _strtok3 = require("strtok3");
var _aiffLoaderJs = require("./aiff/AiffLoader.js");
var _apev2LoaderJs = require("./apev2/Apev2Loader.js");
var _asfLoaderJs = require("./asf/AsfLoader.js");
var _cafLoaderJs = require("./caf/CafLoader.js");
var _allocationJs = require("./common/Allocation.js");
var _metadataCollectorJs = require("./common/MetadataCollector.js");
var _trackInfoJs = require("./common/TrackInfo.js");
var _coreJs = require("./core.js");
var _dsdiffLoaderJs = require("./dsdiff/DsdiffLoader.js");
var _dsfLoaderJs = require("./dsf/DsfLoader.js");
var _flacLoaderJs = require("./flac/FlacLoader.js");
var _matroskaLoaderJs = require("./matroska/MatroskaLoader.js");
var _mp4LoaderJs = require("./mp4/Mp4Loader.js");
var _mpegLoaderJs = require("./mpeg/MpegLoader.js");
var _musepackLoaderJs = require("./musepack/MusepackLoader.js");
var _oggLoaderJs = require("./ogg/OggLoader.js");
var _parseErrorJs = require("./ParseError.js");
var _typeJs = require("./type.js");
var _waveLoaderJs = require("./wav/WaveLoader.js");
var _wavPackLoaderJs = require("./wavpack/WavPackLoader.js");
const debug = (0, _debugDefault.default)('music-metadata:parser:factory');
function parseHttpContentType(contentType) {
    const type = (0, _contentType.parse)(contentType);
    const mime = (0, _mediaTyper.parse)(type.type);
    return {
        type: mime.type,
        subtype: mime.subtype,
        suffix: mime.suffix,
        parameters: type.parameters
    };
}
class ParserFactory {
    parsers = [];
    constructor(){
        [
            (0, _flacLoaderJs.flacParserLoader),
            (0, _mpegLoaderJs.mpegParserLoader),
            (0, _apev2LoaderJs.apeParserLoader),
            (0, _mp4LoaderJs.mp4ParserLoader),
            (0, _matroskaLoaderJs.matroskaParserLoader),
            (0, _waveLoaderJs.riffParserLoader),
            (0, _oggLoaderJs.oggParserLoader),
            (0, _asfLoaderJs.asfParserLoader),
            (0, _aiffLoaderJs.aiffParserLoader),
            (0, _wavPackLoaderJs.wavpackParserLoader),
            (0, _musepackLoaderJs.musepackParserLoader),
            (0, _dsfLoaderJs.dsfParserLoader),
            (0, _dsdiffLoaderJs.dsdiffParserLoader),
            (0, _cafLoaderJs.cafParserLoader)
        ].forEach((parser)=>{
            this.registerParser(parser);
        });
    }
    registerParser(parser) {
        this.parsers.push(parser);
    }
    async parse(tokenizer, parserLoader, opts = {}) {
        const maxBufferSize = (0, _allocationJs.getMaxMemoryAllocation)(opts);
        (0, _allocationJs.getMaxMetadataEntries)(opts);
        (0, _allocationJs.getMaxChapterCount)(opts);
        if ((0, _strtok3.isRandomAccessTokenizer)(tokenizer)) {
            debug('tokenizer supports random-access, scanning for appending headers');
            await (0, _coreJs.scanAppendingHeaders)(tokenizer, opts);
        } else debug('tokenizer does not support random-access, cannot scan for appending headers');
        if (!parserLoader) {
            const buf = new Uint8Array(4100);
            if (tokenizer.fileInfo.mimeType) parserLoader = this.findLoaderForContentType(tokenizer.fileInfo.mimeType);
            if (!parserLoader && tokenizer.fileInfo.path) parserLoader = this.findLoaderForExtension(tokenizer.fileInfo.path);
            if (!parserLoader) {
                // Parser could not be determined on MIME-type or extension
                debug('Guess parser on content...');
                await tokenizer.peekBuffer(buf, {
                    mayBeLess: true
                });
                const guessedType = await (0, _fileType.fileTypeFromBuffer)(buf, {
                    mpegOffsetTolerance: 10,
                    maxBufferSize
                });
                if (!guessedType?.mime) throw new (0, _parseErrorJs.CouldNotDetermineFileTypeError)('Failed to determine audio format');
                debug(`Guessed file type is mime=${guessedType.mime}, extension=${guessedType.ext}`);
                parserLoader = this.findLoaderForContentType(guessedType.mime);
                if (!parserLoader) throw new (0, _parseErrorJs.UnsupportedFileTypeError)(`Guessed MIME-type not supported: ${guessedType.mime}`);
            }
        }
        // Parser found, execute parser
        debug(`Loading ${parserLoader.parserType} parser...`);
        const metadata = new (0, _metadataCollectorJs.MetadataCollector)(opts);
        const ParserImpl = await parserLoader.load();
        const parser = new ParserImpl(metadata, tokenizer, opts);
        debug(`Parser ${parserLoader.parserType} loaded`);
        await parser.parse();
        // Audio-only parsers describe their single stream through the format fields.
        // Container parsers supply their own tracks; never copy aggregate fields to them.
        if (metadata.format.trackInfo.length === 0 && metadata.format.hasAudio === true) metadata.addStreamInfo((0, _trackInfoJs.createAudioTrackInfo)(metadata.format));
        if (metadata.format.trackInfo) {
            if (metadata.format.hasAudio === undefined) metadata.setFormat('hasAudio', !!metadata.format.trackInfo.find((track)=>track.type === (0, _typeJs.TrackType).audio));
            if (metadata.format.hasVideo === undefined) metadata.setFormat('hasVideo', !!metadata.format.trackInfo.find((track)=>track.type === (0, _typeJs.TrackType).video));
        }
        (0, _trackInfoJs.finalizeContainerInfo)(metadata, tokenizer.fileInfo.size);
        return metadata.toCommonMetadata();
    }
    /**
     * @param filePath - Path, filename or extension to audio file
     * @return Parser submodule name
     */ findLoaderForExtension(filePath) {
        if (!filePath) return;
        const extension = getExtension(filePath).toLocaleLowerCase() || filePath;
        return this.parsers.find((parser)=>parser.extensions.indexOf(extension) !== -1);
    }
    findLoaderForContentType(httpContentType) {
        let mime;
        if (!httpContentType) return;
        try {
            mime = parseHttpContentType(httpContentType);
        } catch (_err) {
            debug(`Invalid HTTP Content-Type header value: ${httpContentType}`);
            return;
        }
        const subType = mime.subtype.indexOf('x-') === 0 ? mime.subtype.substring(2) : mime.subtype;
        return this.parsers.find((parser)=>parser.mimeTypes.find((loader)=>loader.indexOf(`${mime.type}/${subType}`) !== -1));
    }
    getSupportedMimeTypes() {
        const mimeTypeSet = new Set();
        this.parsers.forEach((loader)=>{
            loader.mimeTypes.forEach((mimeType)=>{
                mimeTypeSet.add(mimeType);
                mimeTypeSet.add(mimeType.replace('/', '/x-'));
            });
        });
        return Array.from(mimeTypeSet);
    }
}
function getExtension(fname) {
    const i = fname.lastIndexOf('.');
    return i === -1 ? '' : fname.substring(i);
}

},{"content-type":"a3EE4","debug":"4XIdh","file-type":"fFy6J","media-typer":"fx0Xs","strtok3":"7L6Gs","./aiff/AiffLoader.js":"5rhjj","./apev2/Apev2Loader.js":"e6Pjw","./asf/AsfLoader.js":"hagGG","./caf/CafLoader.js":"aMlmm","./common/Allocation.js":"8ZVyl","./common/MetadataCollector.js":"4AZ8q","./common/TrackInfo.js":"9lsMn","./core.js":"XSias","./dsdiff/DsdiffLoader.js":"8ksyx","./dsf/DsfLoader.js":"ldKnP","./flac/FlacLoader.js":"9LWWJ","./matroska/MatroskaLoader.js":"c2Kwk","./mp4/Mp4Loader.js":"5xi5n","./mpeg/MpegLoader.js":"27EFZ","./musepack/MusepackLoader.js":"azMFD","./ogg/OggLoader.js":"iIaSP","./ParseError.js":"E03ox","./type.js":"a50Lj","./wav/WaveLoader.js":"hXbgY","./wavpack/WavPackLoader.js":"btQco","@parcel/transformer-js/src/esmodule-helpers.js":"53hI8"}],"a3EE4":[function(require,module,exports,__globalThis) {
/*!
 * content-type
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Validate a type string against RFC 9110.
 */ parcelHelpers.export(exports, "isTypeValid", ()=>isTypeValid);
/**
 * Validate a token against RFC 9110.
 */ parcelHelpers.export(exports, "isTokenValid", ()=>isTokenValid);
/**
 * Format an object into a `Content-Type` header.
 */ parcelHelpers.export(exports, "format", ()=>format);
/**
 * Parse a `Content-Type` header.
 */ parcelHelpers.export(exports, "parse", ()=>parse);
const SP = 32; // " "
const HTAB = 9; // "\t"
const SEMI = 59; // ";"
const EQ = 61; // "="
const DQUOTE = 34; // '"'
const BSLASH = 92; // "\\"
const COMMA = 44; // ","
const LOWER_CASE = 1;
const OWS = 2;
const SEMI_FLAG = 4;
const COMMA_FLAG = 8;
const TOKEN_FLAG = 16;
const NON_ASCII = 0xff00;
const CASE_FLAGS = LOWER_CASE | NON_ASCII;
/**
 * Character flags used to normalize HTTP field values while scanning.
 * Out-of-range reads intentionally coerce to zero in bitwise expressions.
 */ const CHAR_MAP = new Uint8Array(0x100);
CHAR_MAP[HTAB] |= OWS;
CHAR_MAP[SP] |= OWS;
CHAR_MAP[SEMI] |= SEMI_FLAG;
CHAR_MAP[COMMA] |= COMMA_FLAG;
for(let code = 0x80 /* non-ASCII */ ; code <= 0xff; code++)CHAR_MAP[code] |= LOWER_CASE;
for (const char of "!#$%&'*+-.^_`|~")CHAR_MAP[char.charCodeAt(0)] |= TOKEN_FLAG;
for(let code = 0x30 /* 0 */ ; code <= 0x39 /* 9 */ ; code++)CHAR_MAP[code] |= TOKEN_FLAG;
for(let code = 0x41 /* A */ ; code <= 0x5a /* Z */ ; code++)CHAR_MAP[code] |= LOWER_CASE | TOKEN_FLAG;
for(let code = 0x61 /* a */ ; code <= 0x7a /* z */ ; code++)CHAR_MAP[code] |= TOKEN_FLAG;
/**
 * Null object perf optimization. Faster than `Object.create(null)` and `{ __proto__: null }`.
 */ const NullObject = /* @__PURE__ */ (()=>{
    const C = function() {};
    C.prototype = Object.create(null);
    return C;
})();
function isTypeValid(type, start = 0, end = type.length) {
    let hasSlash = false;
    for(let index = start; index < end; index++){
        const code = type.charCodeAt(index);
        if (code === 47 /* / */ ) {
            if (hasSlash || index === start || index >= end - 1) return false;
            hasSlash = true;
        } else if (!isTokenCode(code)) return false;
    }
    return hasSlash;
}
function isTokenValid(token, start = 0, end = token.length) {
    if (start >= end) return false;
    for(let index = start; index < end; index++){
        if (!isTokenCode(token.charCodeAt(index))) return false;
    }
    return true;
}
/**
 * Check whether a character code belongs to the token production in RFC 9110.
 */ function isTokenCode(code) {
    return (CHAR_MAP[code] & TOKEN_FLAG) !== 0;
}
/**
 * Serialize a parameter value.
 */ function parameterValue(str) {
    const len = str.length;
    if (len === 0) return '""';
    let index = 0;
    while(index < len && isTokenCode(str.charCodeAt(index)))index++;
    if (index === len) return str;
    let result = '"';
    let start = 0;
    while(index < len){
        const code = str.charCodeAt(index);
        if (code !== HTAB && (code < SP || code === 127 || code > 255)) throw new TypeError(`Invalid parameter value: ${str}`);
        if (code === 34 /* " */  || code === 92 /* \\ */ ) {
            result += `${str.slice(start, index)}\\`;
            start = index;
        }
        index++;
    }
    return `${result}${str.slice(start)}"`;
}
function format(obj) {
    const { type, parameters } = obj;
    if (!type || !isTypeValid(type)) throw new TypeError(`Invalid type: ${type}`);
    let result = type;
    if (parameters) for (const param of Object.keys(parameters)){
        if (!isTokenValid(param)) throw new TypeError(`Invalid parameter name: ${param}`);
        result += `; ${param}=${parameterValue(parameters[param])}`;
    }
    return result;
}
function parse(header, options) {
    const stopFlags = SEMI_FLAG | (options?.comma === true ? COMMA_FLAG : 0);
    const len = header.length;
    let valueStart = options?.start ?? 0;
    while((CHAR_MAP[header.charCodeAt(valueStart)] & OWS) !== 0)valueStart++;
    let index = valueStart;
    let typeFlags = 0;
    let whitespace = -1;
    let stop = options?.parameters === false ? COMMA_FLAG : 0;
    while(index < len){
        const code = header.charCodeAt(index);
        const flags = CHAR_MAP[code];
        if ((flags & stopFlags) !== 0) {
            stop |= flags & COMMA_FLAG;
            break;
        }
        if ((flags & OWS) !== 0) {
            if (whitespace === -1) whitespace = index;
        } else whitespace = -1;
        typeFlags |= code & NON_ASCII | flags;
        index++;
    }
    const valueEnd = whitespace === -1 ? index : whitespace;
    const value = header.slice(valueStart, valueEnd);
    const type = (typeFlags & CASE_FLAGS) === 0 ? value : value.toLowerCase();
    if (index === len || stop !== 0) return {
        type,
        index,
        parameters: new NullObject()
    };
    return parseParameters(header, type, index, len, stopFlags);
}
/**
 * Parses the parameters of a `Content-Type` header starting at the given index.
 */ function parseParameters(header, type, index, len, stopFlags) {
    const parameters = new NullObject();
    parameter: while(index < len){
        index++; // Skip over ;
        while((CHAR_MAP[header.charCodeAt(index)] & OWS) !== 0)index++;
        const keyStart = index;
        let keyFlags = 0;
        let keyWhitespace = -1;
        while(index < len){
            const code = header.charCodeAt(index);
            const flags = CHAR_MAP[code];
            if ((flags & stopFlags) !== 0) {
                if ((flags & COMMA_FLAG) !== 0) break parameter;
                continue parameter;
            }
            if (code === EQ) {
                const keyEnd = keyWhitespace === -1 ? index : keyWhitespace;
                const value = header.slice(keyStart, keyEnd);
                const key = (keyFlags & CASE_FLAGS) === 0 ? value : value.toLowerCase();
                index++;
                while((CHAR_MAP[header.charCodeAt(index)] & OWS) !== 0)index++;
                if (index < len && header.charCodeAt(index) === DQUOTE) {
                    const quotedStart = ++index;
                    let escaped = false;
                    while(index < len){
                        const code = header.charCodeAt(index);
                        if (code === DQUOTE) {
                            if (parameters[key] === undefined) parameters[key] = escaped ? unescapeQuotedPairs(header, quotedStart, index) : header.slice(quotedStart, index);
                            index++;
                            let stop = 0;
                            // Discard characters between quote and delimiter.
                            while(index < len){
                                const code = header.charCodeAt(index);
                                const flags = CHAR_MAP[code];
                                if ((flags & stopFlags) !== 0) {
                                    stop = flags & COMMA_FLAG;
                                    break;
                                }
                                index++;
                            }
                            if (stop !== 0) break parameter;
                            continue parameter;
                        }
                        if (code === BSLASH && index + 1 < len) {
                            escaped = true;
                            index += 2;
                            continue;
                        }
                        index++;
                    }
                    continue parameter;
                }
                const valueStart = index;
                let stop = 0;
                let valueWhitespace = -1;
                while(index < len){
                    const code = header.charCodeAt(index);
                    const flags = CHAR_MAP[code];
                    if ((flags & stopFlags) !== 0) {
                        stop = flags & COMMA_FLAG;
                        break;
                    }
                    if ((flags & OWS) !== 0) {
                        if (valueWhitespace === -1) valueWhitespace = index;
                    } else valueWhitespace = -1;
                    index++;
                }
                if (parameters[key] === undefined) {
                    const valueEnd = valueWhitespace === -1 ? index : valueWhitespace;
                    parameters[key] = header.slice(valueStart, valueEnd);
                }
                if (stop !== 0) break parameter;
                continue parameter;
            }
            if ((flags & OWS) !== 0) {
                if (keyWhitespace === -1) keyWhitespace = index;
            } else keyWhitespace = -1;
            keyFlags |= code & NON_ASCII | flags;
            index++;
        }
    }
    return {
        type,
        index,
        parameters
    };
}
/**
 * Remove backslashes from quoted pairs in a known-terminated quoted string body.
 */ function unescapeQuotedPairs(str, start, end) {
    let result = "";
    for(let index = start; index < end; index++)if (str.charCodeAt(index) === BSLASH) {
        result += str.slice(start, index);
        start = ++index;
    }
    return result + str.slice(start, end);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"53hI8"}],"fFy6J":[function(require,module,exports,__globalThis) {
/**
Primary entry point, Node.js specific entry point is index.js
*/ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "reasonableDetectionSizeInBytes", ()=>reasonableDetectionSizeInBytes);
parcelHelpers.export(exports, "normalizeSampleSize", ()=>normalizeSampleSize);
parcelHelpers.export(exports, "fileTypeFromStream", ()=>fileTypeFromStream);
parcelHelpers.export(exports, "fileTypeFromBuffer", ()=>fileTypeFromBuffer);
parcelHelpers.export(exports, "fileTypeFromBlob", ()=>fileTypeFromBlob);
parcelHelpers.export(exports, "fileTypeFromTokenizer", ()=>fileTypeFromTokenizer);
parcelHelpers.export(exports, "fileTypeStream", ()=>fileTypeStream);
parcelHelpers.export(exports, "FileTypeParser", ()=>FileTypeParser);
parcelHelpers.export(exports, "supportedExtensions", ()=>supportedExtensions);
parcelHelpers.export(exports, "supportedMimeTypes", ()=>supportedMimeTypes);
parcelHelpers.export(exports, "fileTypeFromFile", ()=>fileTypeFromFile);
var _tokenTypes = require("token-types");
var _core = require("strtok3/core");
var _inflate = require("@tokenizer/inflate");
var _uint8ArrayExtras = require("uint8array-extras");
var _tokensJs = require("./tokens.js");
var _supportedJs = require("./supported.js");
var _parserJs = require("./parser.js");
var _zipJs = require("./detectors/zip.js");
var _ebmlJs = require("./detectors/ebml.js");
var _pngJs = require("./detectors/png.js");
var _asfJs = require("./detectors/asf.js");
const reasonableDetectionSizeInBytes = 4100; // A fair amount of file-types are detectable within this range.
const maximumMpegOffsetTolerance = reasonableDetectionSizeInBytes - 4; // Keep room for the 4 bytes of the frame header at the deepest scanned offset.
const maximumNestedGzipDetectionSizeInBytes = (0, _parserJs.maximumUntrustedSkipSizeInBytes);
const maximumNestedGzipProbeDepth = 1;
const unknownSizeGzipProbeTimeoutInMilliseconds = 100;
const maximumId3HeaderSizeInBytes = (0, _parserJs.maximumUntrustedSkipSizeInBytes);
const maximumTiffTagCount = 512;
const maximumDetectionReentryCount = 256;
const maximumTiffStreamIfdOffsetInBytes = 1048576;
const maximumTiffIfdOffsetInBytes = (0, _parserJs.maximumUntrustedSkipSizeInBytes);
function normalizeSampleSize(sampleSize) {
    // `sampleSize` is an explicit caller-controlled tuning knob, not untrusted file input.
    // Preserve valid caller-requested probe depth here; applications must bound attacker-derived option values themselves.
    if (!Number.isFinite(sampleSize)) return reasonableDetectionSizeInBytes;
    return Math.max(1, Math.trunc(sampleSize));
}
function normalizeMpegOffsetTolerance(mpegOffsetTolerance) {
    // This value controls scan depth and therefore worst-case CPU work.
    if (!Number.isFinite(mpegOffsetTolerance)) return 0;
    return Math.max(0, Math.min(maximumMpegOffsetTolerance, Math.trunc(mpegOffsetTolerance)));
}
function getKnownFileSizeOrMaximum(fileSize) {
    if (!Number.isFinite(fileSize)) return Number.MAX_SAFE_INTEGER;
    return Math.max(0, fileSize);
}
// Keep the specifier non-literal at the call site so browser bundlers do not try to resolve Node-only imports.
function importAtRuntime(specifier) {
    // eslint-disable-next-line jsdoc/no-bad-blocks
    return import(/* @vite-ignore */ /* webpackIgnore: true */ specifier);
}
// Wrap stream in an identity TransformStream to avoid BYOB readers.
// Node.js has a bug where calling controller.close() inside a BYOB stream's
// pull() callback does not resolve pending reader.read() calls, causing
// permanent hangs on streams shorter than the requested read size.
// Using a default (non-BYOB) reader via TransformStream avoids this.
function toDefaultStream(stream) {
    return stream.pipeThrough(new TransformStream());
}
function readWithSignal(reader, signal) {
    if (signal === undefined) return reader.read();
    signal.throwIfAborted();
    return Promise.race([
        reader.read(),
        new Promise((_resolve, reject)=>{
            signal.addEventListener('abort', ()=>{
                reject(signal.reason);
                reader.cancel(signal.reason).catch(()=>{});
            }, {
                once: true
            });
        })
    ]);
}
function createByteLimitedReadableStream(stream, maximumBytes) {
    const reader = stream.getReader();
    let emittedBytes = 0;
    let isSourceDone = false;
    let isSourceCanceled = false;
    const cancelSource = async (reason)=>{
        if (isSourceDone || isSourceCanceled) return;
        isSourceCanceled = true;
        await reader.cancel(reason);
    };
    return new ReadableStream({
        async pull (controller) {
            if (emittedBytes >= maximumBytes) {
                controller.close();
                await cancelSource();
                return;
            }
            const { done, value } = await reader.read();
            if (done || !value) {
                isSourceDone = true;
                controller.close();
                return;
            }
            const remainingBytes = maximumBytes - emittedBytes;
            if (value.length > remainingBytes) {
                controller.enqueue(value.subarray(0, remainingBytes));
                emittedBytes += remainingBytes;
                controller.close();
                await cancelSource();
                return;
            }
            controller.enqueue(value);
            emittedBytes += value.length;
        },
        async cancel (reason) {
            await cancelSource(reason);
        }
    });
}
async function fileTypeFromStream(stream, options) {
    return new FileTypeParser(options).fromStream(stream);
}
async function fileTypeFromBuffer(input, options) {
    return new FileTypeParser(options).fromBuffer(input);
}
async function fileTypeFromBlob(blob, options) {
    return new FileTypeParser(options).fromBlob(blob);
}
async function fileTypeFromTokenizer(tokenizer, options) {
    return new FileTypeParser(options).fromTokenizer(tokenizer);
}
async function fileTypeStream(webStream, options) {
    return new FileTypeParser(options).toDetectionStream(webStream, options);
}
class FileTypeParser {
    buffer;
    tokenizer;
    detectionReentryCount;
    constructor(options){
        const normalizedMpegOffsetTolerance = normalizeMpegOffsetTolerance(options?.mpegOffsetTolerance);
        const maxBufferSize = options?.maxBufferSize ?? Infinity;
        if (maxBufferSize !== Infinity && (!Number.isSafeInteger(maxBufferSize) || maxBufferSize <= 0)) throw new RangeError('maxBufferSize must be a positive safe integer or Infinity');
        this.options = {
            ...options,
            mpegOffsetTolerance: normalizedMpegOffsetTolerance
        };
        this.detectors = [
            ...this.options.customDetectors ?? [],
            {
                id: 'core',
                detect: (tokenizer)=>this.detectConfident(tokenizer)
            },
            {
                id: 'core.imprecise',
                detect: (tokenizer)=>this.detectImprecise(tokenizer)
            }
        ];
        this.tokenizerOptions = {
            abortSignal: this.options.signal,
            maxBufferSize
        };
        this.gzipProbeDepth = 0;
    }
    getTokenizerOptions() {
        return {
            ...this.tokenizerOptions
        };
    }
    createTokenizerFromWebStream(stream) {
        return _core.fromWebStream(toDefaultStream(stream), this.getTokenizerOptions());
    }
    async parseTokenizer(tokenizer, detectionReentryCount = 0) {
        this.detectionReentryCount = detectionReentryCount;
        const initialPosition = tokenizer.position;
        // Iterate through all file-type detectors
        for (const detector of this.detectors){
            let fileType;
            try {
                fileType = await detector.detect(tokenizer);
            } catch (error) {
                if (error instanceof _core.EndOfStreamError) return;
                if (error instanceof (0, _parserJs.ParserHardLimitError)) return;
                throw error;
            }
            if (fileType) return fileType;
            if (initialPosition !== tokenizer.position) return undefined; // Cannot proceed scanning of the tokenizer is at an arbitrary position
        }
    }
    async fromTokenizer(tokenizer) {
        try {
            return await this.parseTokenizer(tokenizer);
        } finally{
            await tokenizer.close();
        }
    }
    async fromBuffer(input) {
        if (!(input instanceof Uint8Array || input instanceof ArrayBuffer)) throw new TypeError(`Expected the \`input\` argument to be of type \`Uint8Array\` or \`ArrayBuffer\`, got \`${typeof input}\``);
        const buffer = input instanceof Uint8Array ? input : new Uint8Array(input);
        if (!(buffer?.length > 1)) return;
        return this.fromTokenizer(_core.fromBuffer(buffer, this.getTokenizerOptions()));
    }
    async fromBlob(blob) {
        this.options.signal?.throwIfAborted();
        const tokenizer = _core.fromBlob(blob, this.getTokenizerOptions());
        return this.fromTokenizer(tokenizer);
    }
    async fromStream(stream) {
        this.options.signal?.throwIfAborted();
        const tokenizer = this.createTokenizerFromWebStream(stream);
        return this.fromTokenizer(tokenizer);
    }
    async fromFile(path) {
        this.options.signal?.throwIfAborted();
        const { fromFile, NotRegularFileError } = await importAtRuntime('strtok3');
        let tokenizer;
        try {
            tokenizer = await fromFile(path, {
                ...this.getTokenizerOptions(),
                regularFileOnly: true
            });
        } catch (error) {
            if (error instanceof NotRegularFileError) return;
            throw error;
        }
        return this.fromTokenizer(tokenizer);
    }
    async toDetectionStream(stream, options) {
        this.options.signal?.throwIfAborted();
        const sampleSize = normalizeSampleSize(options?.sampleSize ?? reasonableDetectionSizeInBytes);
        let detectedFileType;
        let hasStreamEnded = false;
        const reader = stream.getReader();
        const chunks = [];
        let totalSize = 0;
        try {
            while(totalSize < sampleSize){
                const { value, done } = await readWithSignal(reader, this.options.signal);
                if (done || !value) {
                    hasStreamEnded = true;
                    break;
                }
                chunks.push(value);
                totalSize += value.length;
            }
            if (!hasStreamEnded && totalSize === sampleSize) {
                const { value, done } = await readWithSignal(reader, this.options.signal);
                if (done || !value) hasStreamEnded = true;
                else {
                    chunks.push(value);
                    totalSize += value.length;
                }
            }
        } finally{
            reader.releaseLock();
        }
        if (totalSize > 0) {
            const sample = chunks.length === 1 ? chunks[0] : (0, _uint8ArrayExtras.concatUint8Arrays)(chunks);
            try {
                detectedFileType = await this.fromBuffer(sample.subarray(0, sampleSize));
            } catch (error) {
                if (!(error instanceof _core.EndOfStreamError)) throw error;
                detectedFileType = undefined;
            }
            if (!hasStreamEnded && detectedFileType?.ext === 'pages') detectedFileType = {
                ext: 'zip',
                mime: 'application/zip'
            };
        }
        // Prepend collected chunks and pipe the rest through
        const transformStream = new TransformStream({
            start (controller) {
                for (const chunk of chunks)controller.enqueue(chunk);
            },
            transform (chunk, controller) {
                controller.enqueue(chunk);
            }
        });
        const newStream = stream.pipeThrough(transformStream);
        newStream.fileType = detectedFileType;
        return newStream;
    }
    async detectGzip(tokenizer) {
        if (this.gzipProbeDepth >= maximumNestedGzipProbeDepth) return {
            ext: 'gz',
            mime: 'application/gzip'
        };
        const gzipHandler = new (0, _inflate.GzipHandler)(tokenizer);
        const limitedInflatedStream = createByteLimitedReadableStream(gzipHandler.inflate(), maximumNestedGzipDetectionSizeInBytes);
        const hasUnknownSize = (0, _parserJs.hasUnknownFileSize)(tokenizer);
        let timeout;
        let probeSignal;
        let probeParser;
        let compressedFileType;
        if (hasUnknownSize) {
            const timeoutController = new AbortController();
            timeout = setTimeout(()=>{
                timeoutController.abort(new DOMException(`Operation timed out after ${unknownSizeGzipProbeTimeoutInMilliseconds} ms`, 'TimeoutError'));
            }, unknownSizeGzipProbeTimeoutInMilliseconds);
            probeSignal = this.options.signal === undefined ? timeoutController.signal : AbortSignal.any([
                this.options.signal,
                timeoutController.signal
            ]);
            probeParser = new FileTypeParser({
                ...this.options,
                signal: probeSignal
            });
            probeParser.gzipProbeDepth = this.gzipProbeDepth + 1;
        } else this.gzipProbeDepth++;
        try {
            compressedFileType = await (probeParser ?? this).fromStream(limitedInflatedStream);
        } catch (error) {
            if (error?.name === 'AbortError' && probeSignal?.reason?.name !== 'TimeoutError') throw error;
        // Timeout, decompression, or inner-detection failures are expected for non-tar gzip files.
        } finally{
            clearTimeout(timeout);
            if (!hasUnknownSize) this.gzipProbeDepth--;
        }
        if (compressedFileType?.ext === 'tar') return {
            ext: 'tar.gz',
            mime: 'application/gzip'
        };
        return {
            ext: 'gz',
            mime: 'application/gzip'
        };
    }
    check(header, options) {
        return (0, _parserJs.checkBytes)(this.buffer, header, options);
    }
    checkString(header, options) {
        return this.check((0, _tokensJs.stringToBytes)(header, options?.encoding), options);
    }
    // Detections with a high degree of certainty in identifying the correct file type
    async detectConfident(tokenizer) {
        this.buffer = new Uint8Array(reasonableDetectionSizeInBytes);
        // Keep reading until EOF if the file size is unknown.
        if (tokenizer.fileInfo.size === undefined) tokenizer.fileInfo.size = Number.MAX_SAFE_INTEGER;
        this.tokenizer = tokenizer;
        if ((0, _parserJs.hasUnknownFileSize)(tokenizer)) {
            await tokenizer.peekBuffer(this.buffer, {
                length: 3,
                mayBeLess: true
            });
            if (this.check([
                0x1F,
                0x8B,
                0x8
            ])) return this.detectGzip(tokenizer);
        }
        await tokenizer.peekBuffer(this.buffer, {
            length: 32,
            mayBeLess: true
        });
        // -- 2-byte signatures --
        if (this.check([
            0x42,
            0x4D
        ])) return {
            ext: 'bmp',
            mime: 'image/bmp'
        };
        if (this.check([
            0x0B,
            0x77
        ])) return {
            ext: 'ac3',
            mime: 'audio/vnd.dolby.dd-raw'
        };
        if (this.check([
            0x78,
            0x01
        ])) return {
            ext: 'dmg',
            mime: 'application/x-apple-diskimage'
        };
        if (this.check([
            0x4D,
            0x5A
        ])) return {
            ext: 'exe',
            mime: 'application/x-msdownload'
        };
        if (this.check([
            0x25,
            0x21
        ])) {
            await tokenizer.peekBuffer(this.buffer, {
                length: 24,
                mayBeLess: true
            });
            if (this.checkString('PS-Adobe-', {
                offset: 2
            }) && this.checkString(' EPSF-', {
                offset: 14
            })) return {
                ext: 'eps',
                mime: 'application/eps'
            };
            return {
                ext: 'ps',
                mime: 'application/postscript'
            };
        }
        if (this.check([
            0x1F,
            0xA0
        ]) || this.check([
            0x1F,
            0x9D
        ])) return {
            ext: 'Z',
            mime: 'application/x-compress'
        };
        if (this.check([
            0xC7,
            0x71
        ])) return {
            ext: 'cpio',
            mime: 'application/x-cpio'
        };
        if (this.check([
            0x60,
            0xEA
        ])) return {
            ext: 'arj',
            mime: 'application/x-arj'
        };
        // -- 3-byte signatures --
        if (this.check([
            0xEF,
            0xBB,
            0xBF
        ])) {
            if (this.detectionReentryCount >= maximumDetectionReentryCount) return;
            this.detectionReentryCount++;
            // Strip off UTF-8-BOM
            await this.tokenizer.ignore(3);
            return this.detectConfident(tokenizer);
        }
        if (this.check([
            0x47,
            0x49,
            0x46
        ])) return {
            ext: 'gif',
            mime: 'image/gif'
        };
        if (this.check([
            0x49,
            0x49,
            0xBC
        ])) return {
            ext: 'jxr',
            mime: 'image/vnd.ms-photo'
        };
        if (this.check([
            0x1F,
            0x8B,
            0x8
        ])) return this.detectGzip(tokenizer);
        if (this.check([
            0x42,
            0x5A,
            0x68
        ])) return {
            ext: 'bz2',
            mime: 'application/x-bzip2'
        };
        if (this.checkString('ID3')) {
            await (0, _parserJs.safeIgnore)(tokenizer, 6, {
                maximumLength: 6,
                reason: 'ID3 header prefix'
            }); // Skip ID3 header until the header size
            const id3HeaderLength = await tokenizer.readToken((0, _tokensJs.uint32SyncSafeToken));
            const isUnknownFileSize = (0, _parserJs.hasUnknownFileSize)(tokenizer);
            if (!Number.isFinite(id3HeaderLength) || id3HeaderLength < 0 || isUnknownFileSize && (id3HeaderLength > maximumId3HeaderSizeInBytes || tokenizer.position + id3HeaderLength > maximumId3HeaderSizeInBytes)) return;
            if (tokenizer.position + id3HeaderLength > tokenizer.fileInfo.size) {
                if (isUnknownFileSize) return;
                return {
                    ext: 'mp3',
                    mime: 'audio/mpeg'
                };
            }
            try {
                await (0, _parserJs.safeIgnore)(tokenizer, id3HeaderLength, {
                    maximumLength: isUnknownFileSize ? maximumId3HeaderSizeInBytes : tokenizer.fileInfo.size,
                    reason: 'ID3 payload'
                });
            } catch (error) {
                if (error instanceof _core.EndOfStreamError) return;
                throw error;
            }
            if (this.detectionReentryCount >= maximumDetectionReentryCount) return;
            this.detectionReentryCount++;
            return this.parseTokenizer(tokenizer, this.detectionReentryCount); // Skip ID3 header, recursion
        }
        // Musepack, SV7
        if (this.checkString('MP+')) return {
            ext: 'mpc',
            mime: 'audio/x-musepack'
        };
        if ((this.buffer[0] === 0x43 || this.buffer[0] === 0x46) && this.check([
            0x57,
            0x53
        ], {
            offset: 1
        })) return {
            ext: 'swf',
            mime: 'application/x-shockwave-flash'
        };
        // -- 4-byte signatures --
        // Requires a sample size of 4 bytes
        if (this.check([
            0xFF,
            0xD8,
            0xFF
        ])) {
            if (this.check([
                0xF7
            ], {
                offset: 3
            })) return {
                ext: 'jls',
                mime: 'image/jls'
            };
            return {
                ext: 'jpg',
                mime: 'image/jpeg'
            };
        }
        if (this.check([
            0x4F,
            0x62,
            0x6A,
            0x01
        ])) return {
            ext: 'avro',
            mime: 'application/avro'
        };
        if (this.checkString('FLIF')) return {
            ext: 'flif',
            mime: 'image/flif'
        };
        if (this.checkString('8BPS')) return {
            ext: 'psd',
            mime: 'image/vnd.adobe.photoshop'
        };
        // Musepack, SV8
        if (this.checkString('MPCK')) return {
            ext: 'mpc',
            mime: 'audio/x-musepack'
        };
        if (this.checkString('FORM')) return {
            ext: 'aif',
            mime: 'audio/aiff'
        };
        // Core Audio Format (CAF), version 1, followed by the required Audio Description chunk.
        if (this.checkString('caff') && this.check([
            0x00,
            0x01
        ], {
            offset: 4
        }) && this.checkString('desc', {
            offset: 8
        })) return {
            ext: 'caf',
            mime: 'audio/x-caf'
        };
        if (this.checkString('icns', {
            offset: 0
        })) return {
            ext: 'icns',
            mime: 'image/icns'
        };
        // Zip-based file formats
        // Need to be before the `zip` check
        if (this.check([
            0x50,
            0x4B,
            0x3,
            0x4
        ])) return (0, _zipJs.detectZip)(tokenizer);
        if (this.checkString('OggS')) {
            // This is an OGG container
            await tokenizer.ignore(28);
            const type = new Uint8Array(8);
            await tokenizer.readBuffer(type);
            // Needs to be before `ogg` check
            if ((0, _parserJs.checkBytes)(type, [
                0x4F,
                0x70,
                0x75,
                0x73,
                0x48,
                0x65,
                0x61,
                0x64
            ])) return {
                ext: 'opus',
                mime: 'audio/ogg; codecs=opus'
            };
            // If ' theora' in header.
            if ((0, _parserJs.checkBytes)(type, [
                0x80,
                0x74,
                0x68,
                0x65,
                0x6F,
                0x72,
                0x61
            ])) return {
                ext: 'ogv',
                mime: 'video/ogg'
            };
            // If '\x01video' in header.
            if ((0, _parserJs.checkBytes)(type, [
                0x01,
                0x76,
                0x69,
                0x64,
                0x65,
                0x6F,
                0x00
            ])) return {
                ext: 'ogm',
                mime: 'video/ogg'
            };
            // If ' FLAC' in header  https://xiph.org/flac/faq.html
            if ((0, _parserJs.checkBytes)(type, [
                0x7F,
                0x46,
                0x4C,
                0x41,
                0x43
            ])) return {
                ext: 'oga',
                mime: 'audio/ogg'
            };
            // 'Speex  ' in header https://en.wikipedia.org/wiki/Speex
            if ((0, _parserJs.checkBytes)(type, [
                0x53,
                0x70,
                0x65,
                0x65,
                0x78,
                0x20,
                0x20
            ])) return {
                ext: 'spx',
                mime: 'audio/ogg'
            };
            // If '\x01vorbis' in header
            if ((0, _parserJs.checkBytes)(type, [
                0x01,
                0x76,
                0x6F,
                0x72,
                0x62,
                0x69,
                0x73
            ])) return {
                ext: 'ogg',
                mime: 'audio/ogg'
            };
            // Default OGG container https://www.iana.org/assignments/media-types/application/ogg
            return {
                ext: 'ogx',
                mime: 'application/ogg'
            };
        }
        if (this.check([
            0x50,
            0x4B
        ]) && [
            0x3,
            0x5,
            0x7
        ].includes(this.buffer[2]) && [
            0x4,
            0x6,
            0x8
        ].includes(this.buffer[3])) return {
            ext: 'zip',
            mime: 'application/zip'
        };
        if (this.checkString('MThd')) return {
            ext: 'mid',
            mime: 'audio/midi'
        };
        if (this.checkString('wOFF') && (this.check([
            0x00,
            0x01,
            0x00,
            0x00
        ], {
            offset: 4
        }) || this.checkString('OTTO', {
            offset: 4
        }))) return {
            ext: 'woff',
            mime: 'font/woff'
        };
        if (this.checkString('wOF2') && (this.check([
            0x00,
            0x01,
            0x00,
            0x00
        ], {
            offset: 4
        }) || this.checkString('OTTO', {
            offset: 4
        }))) return {
            ext: 'woff2',
            mime: 'font/woff2'
        };
        if (this.check([
            0xD4,
            0xC3,
            0xB2,
            0xA1
        ]) || this.check([
            0xA1,
            0xB2,
            0xC3,
            0xD4
        ])) return {
            ext: 'pcap',
            mime: 'application/vnd.tcpdump.pcap'
        };
        // Sony DSD Stream File (DSF)
        if (this.checkString('DSD ')) return {
            ext: 'dsf',
            mime: 'audio/x-dsf'
        };
        if (this.checkString('LZIP')) return {
            ext: 'lz',
            mime: 'application/lzip'
        };
        if (this.checkString('fLaC')) return {
            ext: 'flac',
            mime: 'audio/flac'
        };
        if (this.check([
            0x42,
            0x50,
            0x47,
            0xFB
        ])) return {
            ext: 'bpg',
            mime: 'image/bpg'
        };
        if (this.checkString('wvpk')) return {
            ext: 'wv',
            mime: 'audio/wavpack'
        };
        if (this.checkString('%PDF')) // Assume this is just a normal PDF
        return {
            ext: 'pdf',
            mime: 'application/pdf'
        };
        if (this.check([
            0x00,
            0x61,
            0x73,
            0x6D
        ])) return {
            ext: 'wasm',
            mime: 'application/wasm'
        };
        // TIFF, little-endian type
        if (this.check([
            0x49,
            0x49
        ])) {
            const fileType = await this.readTiffHeader(false);
            if (fileType) return fileType;
        }
        // TIFF, big-endian type
        if (this.check([
            0x4D,
            0x4D
        ])) {
            const fileType = await this.readTiffHeader(true);
            if (fileType) return fileType;
        }
        if (this.checkString('MAC ')) return {
            ext: 'ape',
            mime: 'audio/ape'
        };
        // https://github.com/file/file/blob/master/magic/Magdir/matroska
        if (this.check([
            0x1A,
            0x45,
            0xDF,
            0xA3
        ])) return (0, _ebmlJs.detectEbml)(tokenizer);
        if (this.checkString('SQLi')) return {
            ext: 'sqlite',
            mime: 'application/x-sqlite3'
        };
        if (this.check([
            0x4E,
            0x45,
            0x53,
            0x1A
        ])) return {
            ext: 'nes',
            mime: 'application/x-nintendo-nes-rom'
        };
        if (this.checkString('Cr24')) return {
            ext: 'crx',
            mime: 'application/x-google-chrome-extension'
        };
        if (this.checkString('MSCF') || this.checkString('ISc(')) return {
            ext: 'cab',
            mime: 'application/vnd.ms-cab-compressed'
        };
        if (this.check([
            0xED,
            0xAB,
            0xEE,
            0xDB
        ])) return {
            ext: 'rpm',
            mime: 'application/x-rpm'
        };
        if (this.check([
            0xC5,
            0xD0,
            0xD3,
            0xC6
        ])) return {
            ext: 'eps',
            mime: 'application/eps'
        };
        if (this.check([
            0x28,
            0xB5,
            0x2F,
            0xFD
        ])) return {
            ext: 'zst',
            mime: 'application/zstd'
        };
        if (this.check([
            0x7F,
            0x45,
            0x4C,
            0x46
        ])) return {
            ext: 'elf',
            mime: 'application/x-elf'
        };
        if (this.check([
            0x21,
            0x42,
            0x44,
            0x4E
        ])) return {
            ext: 'pst',
            mime: 'application/vnd.ms-outlook'
        };
        if (this.checkString('PAR1') || this.checkString('PARE')) return {
            ext: 'parquet',
            mime: 'application/vnd.apache.parquet'
        };
        if (this.checkString('ttcf')) return {
            ext: 'ttc',
            mime: 'font/collection'
        };
        if (this.check([
            0xFE,
            0xED,
            0xFA,
            0xCE
        ]) // 32-bit, big-endian
         || this.check([
            0xFE,
            0xED,
            0xFA,
            0xCF
        ]) // 64-bit, big-endian
         || this.check([
            0xCE,
            0xFA,
            0xED,
            0xFE
        ]) // 32-bit, little-endian
         || this.check([
            0xCF,
            0xFA,
            0xED,
            0xFE
        ]) // 64-bit, little-endian
        ) return {
            ext: 'macho',
            mime: 'application/x-mach-binary'
        };
        if (this.check([
            0x04,
            0x22,
            0x4D,
            0x18
        ])) return {
            ext: 'lz4',
            mime: 'application/x-lz4'
        };
        if (this.checkString('regf')) return {
            ext: 'dat',
            mime: 'application/x-ft-windows-registry-hive'
        };
        // SPSS Statistical Data File
        if (this.checkString('$FL2') || this.checkString('$FL3')) return {
            ext: 'sav',
            mime: 'application/x-spss-sav'
        };
        // -- 5-byte signatures --
        if (this.check([
            0x4F,
            0x54,
            0x54,
            0x4F,
            0x00
        ])) return {
            ext: 'otf',
            mime: 'font/otf'
        };
        if (this.checkString('#!AMR')) return {
            ext: 'amr',
            mime: 'audio/amr'
        };
        if (this.checkString(String.raw`{\rtf`)) return {
            ext: 'rtf',
            mime: 'application/rtf'
        };
        if (this.check([
            0x46,
            0x4C,
            0x56,
            0x01
        ])) return {
            ext: 'flv',
            mime: 'video/x-flv'
        };
        if (this.checkString('IMPM')) return {
            ext: 'it',
            mime: 'audio/x-it'
        };
        if (this.checkString('-lh0-', {
            offset: 2
        }) || this.checkString('-lh1-', {
            offset: 2
        }) || this.checkString('-lh2-', {
            offset: 2
        }) || this.checkString('-lh3-', {
            offset: 2
        }) || this.checkString('-lh4-', {
            offset: 2
        }) || this.checkString('-lh5-', {
            offset: 2
        }) || this.checkString('-lh6-', {
            offset: 2
        }) || this.checkString('-lh7-', {
            offset: 2
        }) || this.checkString('-lzs-', {
            offset: 2
        }) || this.checkString('-lz4-', {
            offset: 2
        }) || this.checkString('-lz5-', {
            offset: 2
        }) || this.checkString('-lhd-', {
            offset: 2
        })) return {
            ext: 'lzh',
            mime: 'application/x-lzh-compressed'
        };
        // MPEG program stream (PS or MPEG-PS)
        if (this.check([
            0x00,
            0x00,
            0x01,
            0xBA
        ])) {
            //  MPEG-PS, MPEG-1 Part 1
            if (this.check([
                0x21
            ], {
                offset: 4,
                mask: [
                    0xF1
                ]
            })) return {
                ext: 'mpg',
                mime: 'video/MP1S'
            };
            // MPEG-PS, MPEG-2 Part 1
            if (this.check([
                0x44
            ], {
                offset: 4,
                mask: [
                    0xC4
                ]
            })) return {
                ext: 'mpg',
                mime: 'video/MP2P'
            };
        }
        if (this.checkString('ITSF')) return {
            ext: 'chm',
            mime: 'application/vnd.ms-htmlhelp'
        };
        if (this.check([
            0xCA,
            0xFE,
            0xBA,
            0xBE
        ])) {
            // Java bytecode and Mach-O universal binaries have the same magic number.
            // We disambiguate based on the next 4 bytes, as done by `file`.
            // See https://github.com/file/file/blob/master/magic/Magdir/cafebabe
            const machOArchitectureCount = _tokenTypes.UINT32_BE.get(this.buffer, 4);
            if (machOArchitectureCount > 0 && machOArchitectureCount <= 30) return {
                ext: 'macho',
                mime: 'application/x-mach-binary'
            };
            const javaClassFileMajorVersion = _tokenTypes.UINT16_BE.get(this.buffer, 6);
            if (javaClassFileMajorVersion > 30) return {
                ext: 'class',
                mime: 'application/java-vm'
            };
        }
        if (this.checkString('.RMF')) return {
            ext: 'rm',
            mime: 'application/vnd.rn-realmedia'
        };
        // -- 5-byte signatures --
        if (this.checkString('DRACO')) return {
            ext: 'drc',
            mime: 'application/x-ft-draco'
        };
        // -- 6-byte signatures --
        if (this.check([
            0xFD,
            0x37,
            0x7A,
            0x58,
            0x5A,
            0x00
        ])) return {
            ext: 'xz',
            mime: 'application/x-xz'
        };
        if (this.checkString('<?xml ')) return {
            ext: 'xml',
            mime: 'application/xml'
        };
        if (this.check([
            0x37,
            0x7A,
            0xBC,
            0xAF,
            0x27,
            0x1C
        ])) return {
            ext: '7z',
            mime: 'application/x-7z-compressed'
        };
        if (this.check([
            0x52,
            0x61,
            0x72,
            0x21,
            0x1A,
            0x7
        ]) && (this.buffer[6] === 0x0 || this.buffer[6] === 0x1)) return {
            ext: 'rar',
            mime: 'application/x-rar-compressed'
        };
        if (this.checkString('solid ')) return {
            ext: 'stl',
            mime: 'model/stl'
        };
        if (this.checkString('AC')) {
            const version = new _tokenTypes.StringType(4, 'latin1').get(this.buffer, 2);
            if (/^\d+$/v.test(version) && version >= 1000 && version <= 1050) return {
                ext: 'dwg',
                mime: 'image/vnd.dwg'
            };
        }
        if (this.checkString('070707')) return {
            ext: 'cpio',
            mime: 'application/x-cpio'
        };
        // -- 7-byte signatures --
        if (this.checkString('BLENDER')) return {
            ext: 'blend',
            mime: 'application/x-blender'
        };
        if (this.checkString('!<arch>')) {
            await tokenizer.ignore(8);
            const string = await tokenizer.readToken(new _tokenTypes.StringType(13, 'ascii'));
            if (string === 'debian-binary') return {
                ext: 'deb',
                mime: 'application/x-deb'
            };
            return {
                ext: 'ar',
                mime: 'application/x-unix-archive'
            };
        }
        if (this.checkString('WEBVTT') && // One of LF, CR, tab, space, or end of file must follow "WEBVTT" per the spec (see `fixture/fixture-vtt-*.vtt` for examples). Note that `\0` is technically the null character (there is no such thing as an EOF character). However, checking for `\0` gives us the same result as checking for the end of the stream.
        [
            '\n',
            '\r',
            '\t',
            ' ',
            '\0'
        ].some((char7)=>this.checkString(char7, {
                offset: 6
            }))) return {
            ext: 'vtt',
            mime: 'text/vtt'
        };
        // -- 8-byte signatures --
        if (this.check([
            0x89,
            0x50,
            0x4E,
            0x47,
            0x0D,
            0x0A,
            0x1A,
            0x0A
        ])) return (0, _pngJs.detectPng)(tokenizer);
        if (this.check([
            0x41,
            0x52,
            0x52,
            0x4F,
            0x57,
            0x31,
            0x00,
            0x00
        ])) return {
            ext: 'arrow',
            mime: 'application/vnd.apache.arrow.file'
        };
        if (this.check([
            0x67,
            0x6C,
            0x54,
            0x46,
            0x02,
            0x00,
            0x00,
            0x00
        ])) return {
            ext: 'glb',
            mime: 'model/gltf-binary'
        };
        // `mov` format variants
        if (this.check([
            0x66,
            0x72,
            0x65,
            0x65
        ], {
            offset: 4
        }) // `free`
         || this.check([
            0x6D,
            0x64,
            0x61,
            0x74
        ], {
            offset: 4
        }) // `mdat` MJPEG
         || this.check([
            0x6D,
            0x6F,
            0x6F,
            0x76
        ], {
            offset: 4
        }) // `moov`
         || this.check([
            0x77,
            0x69,
            0x64,
            0x65
        ], {
            offset: 4
        }) // `wide`
        ) return {
            ext: 'mov',
            mime: 'video/quicktime'
        };
        // -- 9-byte signatures --
        if (this.check([
            0x49,
            0x49,
            0x52,
            0x4F,
            0x08,
            0x00,
            0x00,
            0x00,
            0x18
        ])) return {
            ext: 'orf',
            mime: 'image/x-olympus-orf'
        };
        if (this.checkString('gimp xcf ')) return {
            ext: 'xcf',
            mime: 'image/x-xcf'
        };
        // File Type Box (https://en.wikipedia.org/wiki/ISO_base_media_file_format)
        // It's not required to be first, but it's recommended to be. Almost all ISO base media files start with `ftyp` box.
        // `ftyp` box must contain a brand major identifier, which must consist of ISO 8859-1 printable characters.
        // Here we check for 8859-1 printable characters (for simplicity, it's a mask which also catches one non-printable character).
        if (this.checkString('ftyp', {
            offset: 4
        }) && (this.buffer[8] & 0x60) !== 0x00 // Brand major, first character ASCII?
        ) {
            // They all can have MIME `video/mp4` except `application/mp4` special-case which is hard to detect.
            // For some cases, we're specific, everything else falls to `video/mp4` with `mp4` extension.
            const brandMajor = new _tokenTypes.StringType(4, 'latin1').get(this.buffer, 8).replace('\0', ' ').trim();
            switch(brandMajor){
                case 'avif':
                case 'avis':
                    return {
                        ext: 'avif',
                        mime: 'image/avif'
                    };
                case 'mif1':
                    return {
                        ext: 'heic',
                        mime: 'image/heif'
                    };
                case 'msf1':
                    return {
                        ext: 'heic',
                        mime: 'image/heif-sequence'
                    };
                case 'heic':
                case 'heix':
                    return {
                        ext: 'heic',
                        mime: 'image/heic'
                    };
                case 'hevc':
                case 'hevx':
                    return {
                        ext: 'heic',
                        mime: 'image/heic-sequence'
                    };
                case 'qt':
                    return {
                        ext: 'mov',
                        mime: 'video/quicktime'
                    };
                case 'M4V':
                case 'M4VH':
                case 'M4VP':
                    return {
                        ext: 'm4v',
                        mime: 'video/x-m4v'
                    };
                case 'M4P':
                    return {
                        ext: 'm4p',
                        mime: 'video/mp4'
                    };
                case 'M4B':
                    return {
                        ext: 'm4b',
                        mime: 'audio/mp4'
                    };
                case 'M4A':
                    return {
                        ext: 'm4a',
                        mime: 'audio/x-m4a'
                    };
                case 'F4V':
                    return {
                        ext: 'f4v',
                        mime: 'video/mp4'
                    };
                case 'F4P':
                    return {
                        ext: 'f4p',
                        mime: 'video/mp4'
                    };
                case 'F4A':
                    return {
                        ext: 'f4a',
                        mime: 'audio/mp4'
                    };
                case 'F4B':
                    return {
                        ext: 'f4b',
                        mime: 'audio/mp4'
                    };
                case 'crx':
                    return {
                        ext: 'cr3',
                        mime: 'image/x-canon-cr3'
                    };
                default:
                    if (brandMajor.startsWith('3g')) {
                        if (brandMajor.startsWith('3g2')) return {
                            ext: '3g2',
                            mime: 'video/3gpp2'
                        };
                        return {
                            ext: '3gp',
                            mime: 'video/3gpp'
                        };
                    }
                    return {
                        ext: 'mp4',
                        mime: 'video/mp4'
                    };
            }
        }
        // -- 10-byte signatures --
        if (this.checkString('REGEDIT4\r\n')) return {
            ext: 'reg',
            mime: 'application/x-ms-regedit'
        };
        // -- 12-byte signatures --
        // RIFF file format which might be AVI, WAV, QCP, etc
        if (this.check([
            0x52,
            0x49,
            0x46,
            0x46
        ])) {
            if (this.checkString('WEBP', {
                offset: 8
            })) return {
                ext: 'webp',
                mime: 'image/webp'
            };
            if (this.check([
                0x41,
                0x56,
                0x49
            ], {
                offset: 8
            })) return {
                ext: 'avi',
                mime: 'video/vnd.avi'
            };
            if (this.check([
                0x57,
                0x41,
                0x56,
                0x45
            ], {
                offset: 8
            })) return {
                ext: 'wav',
                mime: 'audio/wav'
            };
            // QLCM, QCP file
            if (this.check([
                0x51,
                0x4C,
                0x43,
                0x4D
            ], {
                offset: 8
            })) return {
                ext: 'qcp',
                mime: 'audio/qcelp'
            };
        }
        if (this.check([
            0x49,
            0x49,
            0x55,
            0x00,
            0x18,
            0x00,
            0x00,
            0x00,
            0x88,
            0xE7,
            0x74,
            0xD8
        ])) return {
            ext: 'rw2',
            mime: 'image/x-panasonic-rw2'
        };
        // ASF_Header_Object first 80 bytes
        if (this.check([
            0x30,
            0x26,
            0xB2,
            0x75,
            0x8E,
            0x66,
            0xCF,
            0x11,
            0xA6,
            0xD9
        ])) return (0, _asfJs.detectAsf)(tokenizer);
        if (this.check([
            0xAB,
            0x4B,
            0x54,
            0x58,
            0x20,
            0x31,
            0x31,
            0xBB,
            0x0D,
            0x0A,
            0x1A,
            0x0A
        ])) return {
            ext: 'ktx',
            mime: 'image/ktx'
        };
        if ((this.check([
            0x7E,
            0x10,
            0x04
        ]) || this.check([
            0x7E,
            0x18,
            0x04
        ])) && this.check([
            0x30,
            0x4D,
            0x49,
            0x45
        ], {
            offset: 4
        })) return {
            ext: 'mie',
            mime: 'application/x-mie'
        };
        if (this.check([
            0x27,
            0x0A,
            0x00,
            0x00,
            0x00,
            0x00,
            0x00,
            0x00,
            0x00,
            0x00,
            0x00,
            0x00
        ], {
            offset: 2
        })) return {
            ext: 'shp',
            mime: 'application/x-esri-shape'
        };
        if (this.check([
            0xFF,
            0x4F,
            0xFF,
            0x51
        ])) return {
            ext: 'j2c',
            mime: 'image/j2c'
        };
        if (this.check([
            0x00,
            0x00,
            0x00,
            0x0C,
            0x6A,
            0x50,
            0x20,
            0x20,
            0x0D,
            0x0A,
            0x87,
            0x0A
        ])) {
            // JPEG-2000 family
            await tokenizer.ignore(20);
            const type = await tokenizer.readToken(new _tokenTypes.StringType(4, 'ascii'));
            switch(type){
                case 'jp2 ':
                    return {
                        ext: 'jp2',
                        mime: 'image/jp2'
                    };
                case 'jpx ':
                    return {
                        ext: 'jpx',
                        mime: 'image/jpx'
                    };
                case 'jpm ':
                    return {
                        ext: 'jpm',
                        mime: 'image/jpm'
                    };
                case 'mjp2':
                    return {
                        ext: 'mj2',
                        mime: 'image/mj2'
                    };
                default:
                    return;
            }
        }
        if (this.check([
            0xFF,
            0x0A
        ]) || this.check([
            0x00,
            0x00,
            0x00,
            0x0C,
            0x4A,
            0x58,
            0x4C,
            0x20,
            0x0D,
            0x0A,
            0x87,
            0x0A
        ])) return {
            ext: 'jxl',
            mime: 'image/jxl'
        };
        if (this.check([
            0xFE,
            0xFF
        ])) {
            if (this.checkString('<?xml ', {
                offset: 2,
                encoding: 'utf-16be'
            })) return {
                ext: 'xml',
                mime: 'application/xml'
            };
            return undefined; // Some unknown text based format
        }
        if (this.check([
            0xD0,
            0xCF,
            0x11,
            0xE0,
            0xA1,
            0xB1,
            0x1A,
            0xE1
        ])) // Detected Microsoft Compound File Binary File (MS-CFB) Format.
        return {
            ext: 'cfb',
            mime: 'application/x-cfb'
        };
        // Direct Stream Digital Interchange File Format (DSDIFF)
        if (this.checkString('FRM8') && this.checkString('DSD ', {
            offset: 12
        })) return {
            ext: 'dff',
            mime: 'audio/x-dff'
        };
        // Increase sample size from 32 to 256.
        await tokenizer.peekBuffer(this.buffer, {
            length: Math.min(256, tokenizer.fileInfo.size),
            mayBeLess: true
        });
        if (this.check([
            0x61,
            0x63,
            0x73,
            0x70
        ], {
            offset: 36
        })) return {
            ext: 'icc',
            mime: 'application/vnd.iccprofile'
        };
        // ACE: requires 14 bytes in the buffer
        if (this.checkString('**ACE', {
            offset: 7
        }) && this.checkString('**', {
            offset: 12
        })) return {
            ext: 'ace',
            mime: 'application/x-ace-compressed'
        };
        // -- 15-byte signatures --
        if (this.checkString('BEGIN:')) {
            if (this.checkString('VCARD', {
                offset: 6
            })) return {
                ext: 'vcf',
                mime: 'text/vcard'
            };
            if (this.checkString('VCALENDAR', {
                offset: 6
            })) return {
                ext: 'ics',
                mime: 'text/calendar'
            };
        }
        // `raf` is here just to keep all the raw image detectors together.
        if (this.checkString('FUJIFILMCCD-RAW')) return {
            ext: 'raf',
            mime: 'image/x-fujifilm-raf'
        };
        if (this.checkString('Extended Module:')) return {
            ext: 'xm',
            mime: 'audio/x-xm'
        };
        if (this.checkString('Creative Voice File')) return {
            ext: 'voc',
            mime: 'audio/x-voc'
        };
        if (this.check([
            0x04,
            0x00,
            0x00,
            0x00
        ]) && this.buffer.length >= 16) {
            const jsonSize = new DataView(this.buffer.buffer).getUint32(12, true);
            if (jsonSize > 12 && this.buffer.length >= jsonSize + 16) try {
                const header = new TextDecoder().decode(this.buffer.subarray(16, jsonSize + 16));
                const json = JSON.parse(header);
                // Check if Pickle is ASAR
                if (json.files) return {
                    ext: 'asar',
                    mime: 'application/x-asar'
                };
            } catch  {}
        }
        if (this.check([
            0x06,
            0x0E,
            0x2B,
            0x34,
            0x02,
            0x05,
            0x01,
            0x01,
            0x0D,
            0x01,
            0x02,
            0x01,
            0x01,
            0x02
        ])) return {
            ext: 'mxf',
            mime: 'application/mxf'
        };
        if (this.checkString('SCRM', {
            offset: 44
        })) return {
            ext: 's3m',
            mime: 'audio/x-s3m'
        };
        // Raw MPEG-2 transport stream (188-byte packets)
        if (this.check([
            0x47
        ]) && this.check([
            0x47
        ], {
            offset: 188
        })) return {
            ext: 'mts',
            mime: 'video/mp2t'
        };
        // Blu-ray Disc Audio-Video (BDAV) MPEG-2 transport stream has 4-byte TP_extra_header before each 188-byte packet
        if (this.check([
            0x47
        ], {
            offset: 4
        }) && this.check([
            0x47
        ], {
            offset: 196
        })) return {
            ext: 'mts',
            mime: 'video/mp2t'
        };
        if (this.check([
            0x42,
            0x4F,
            0x4F,
            0x4B,
            0x4D,
            0x4F,
            0x42,
            0x49
        ], {
            offset: 60
        })) return {
            ext: 'mobi',
            mime: 'application/x-mobipocket-ebook'
        };
        if (this.check([
            0x44,
            0x49,
            0x43,
            0x4D
        ], {
            offset: 128
        })) return {
            ext: 'dcm',
            mime: 'application/dicom'
        };
        if (this.check([
            0x4C,
            0x00,
            0x00,
            0x00,
            0x01,
            0x14,
            0x02,
            0x00,
            0x00,
            0x00,
            0x00,
            0x00,
            0xC0,
            0x00,
            0x00,
            0x00,
            0x00,
            0x00,
            0x00,
            0x46
        ])) return {
            ext: 'lnk',
            mime: 'application/x-ms-shortcut'
        };
        if (this.check([
            0x62,
            0x6F,
            0x6F,
            0x6B,
            0x00,
            0x00,
            0x00,
            0x00,
            0x6D,
            0x61,
            0x72,
            0x6B,
            0x00,
            0x00,
            0x00,
            0x00
        ])) return {
            ext: 'alias',
            mime: 'application/x-ft-apple.alias'
        };
        if (this.checkString('Kaydara FBX Binary  \0')) return {
            ext: 'fbx',
            mime: 'application/x-ft-fbx'
        };
        if (this.check([
            0x4C,
            0x50
        ], {
            offset: 34
        }) && (this.check([
            0x00,
            0x00,
            0x01
        ], {
            offset: 8
        }) || this.check([
            0x01,
            0x00,
            0x02
        ], {
            offset: 8
        }) || this.check([
            0x02,
            0x00,
            0x02
        ], {
            offset: 8
        }))) return {
            ext: 'eot',
            mime: 'application/vnd.ms-fontobject'
        };
        if (this.check([
            0x06,
            0x06,
            0xED,
            0xF5,
            0xD8,
            0x1D,
            0x46,
            0xE5,
            0xBD,
            0x31,
            0xEF,
            0xE7,
            0xFE,
            0x74,
            0xB7,
            0x1D
        ])) return {
            ext: 'indd',
            mime: 'application/x-indesign'
        };
        // -- 16-byte signatures --
        // JMP files - check for both Little Endian and Big Endian signatures
        if (this.check([
            0xFF,
            0xFF,
            0x00,
            0x00,
            0x07,
            0x00,
            0x00,
            0x00,
            0x04,
            0x00,
            0x00,
            0x00,
            0x01,
            0x00,
            0x01,
            0x00
        ]) || this.check([
            0x00,
            0x00,
            0xFF,
            0xFF,
            0x00,
            0x00,
            0x00,
            0x07,
            0x00,
            0x00,
            0x00,
            0x04,
            0x00,
            0x01,
            0x00,
            0x01
        ])) return {
            ext: 'jmp',
            mime: 'application/x-jmp-data'
        };
        // Increase sample size from 256 to 512
        await tokenizer.peekBuffer(this.buffer, {
            length: Math.min(512, tokenizer.fileInfo.size),
            mayBeLess: true
        });
        // Requires a buffer size of 512 bytes
        if (this.checkString('ustar', {
            offset: 257
        }) && (this.checkString('\0', {
            offset: 262
        }) || this.checkString(' ', {
            offset: 262
        })) || this.check([
            0,
            0,
            0,
            0,
            0,
            0
        ], {
            offset: 257
        }) && (0, _tokensJs.tarHeaderChecksumMatches)(this.buffer)) return {
            ext: 'tar',
            mime: 'application/x-tar'
        };
        if (this.check([
            0xFF,
            0xFE
        ])) {
            const encoding = 'utf-16le';
            if (this.checkString('<?xml ', {
                offset: 2,
                encoding
            })) return {
                ext: 'xml',
                mime: 'application/xml'
            };
            if (this.check([
                0xFF,
                0x0E
            ], {
                offset: 2
            }) && this.checkString('SketchUp Model', {
                offset: 4,
                encoding
            })) return {
                ext: 'skp',
                mime: 'application/vnd.sketchup.skp'
            };
            if (this.checkString('Windows Registry Editor Version 5.00\r\n', {
                offset: 2,
                encoding
            })) return {
                ext: 'reg',
                mime: 'application/x-ms-regedit'
            };
            return undefined; // Some text based format
        }
        if (this.checkString('-----BEGIN PGP MESSAGE-----')) return {
            ext: 'pgp',
            mime: 'application/pgp-encrypted'
        };
        // ISO 9660 optical disc image: the Volume Descriptor Set starts at sector 16 (2048-byte
        // sectors). Every descriptor in that set carries the 5-byte standard identifier `CD001`
        // at offset 1, regardless of descriptor type, so checking the first one is sufficient.
        // Only attempted for random-access inputs (buffer/file/blob, or a stream sampled with a
        // large enough `sampleSize`): on an unknown-size stream this offset is far past what's
        // reasonable to buffer just to rule out one format, so it's left undetected there.
        const isoStandardIdentifierOffset = 32769;
        const isoStandardIdentifierLength = 5;
        if (tokenizer.supportsRandomAccess() && tokenizer.fileInfo.size >= isoStandardIdentifierOffset + isoStandardIdentifierLength) {
            const isoStandardIdentifier = new Uint8Array(isoStandardIdentifierLength);
            await tokenizer.peekBuffer(isoStandardIdentifier, {
                position: isoStandardIdentifierOffset,
                length: isoStandardIdentifierLength,
                mayBeLess: true
            });
            if ((0, _parserJs.checkBytes)(isoStandardIdentifier, (0, _tokensJs.stringToBytes)('CD001'))) return {
                ext: 'iso',
                mime: 'application/x-iso9660-image'
            };
        }
    }
    // Detections with limited supporting data, resulting in a higher likelihood of false positives
    async detectImprecise(tokenizer) {
        this.buffer = new Uint8Array(reasonableDetectionSizeInBytes);
        const fileSize = getKnownFileSizeOrMaximum(tokenizer.fileInfo.size);
        // Read initial sample size of 8 bytes
        await tokenizer.peekBuffer(this.buffer, {
            length: Math.min(8, fileSize),
            mayBeLess: true
        });
        if (this.check([
            0x0,
            0x0,
            0x1,
            0xBA
        ]) || this.check([
            0x0,
            0x0,
            0x1,
            0xB3
        ])) return {
            ext: 'mpg',
            mime: 'video/mpeg'
        };
        if (this.check([
            0x00,
            0x01,
            0x00,
            0x00,
            0x00
        ])) return {
            ext: 'ttf',
            mime: 'font/ttf'
        };
        if (this.check([
            0x00,
            0x00,
            0x01,
            0x00
        ])) return {
            ext: 'ico',
            mime: 'image/x-icon'
        };
        if (this.check([
            0x00,
            0x00,
            0x02,
            0x00
        ])) return {
            ext: 'cur',
            mime: 'image/x-icon'
        };
        // Adjust buffer to `mpegOffsetTolerance`, plus the 4 bytes of the frame header itself
        await tokenizer.peekBuffer(this.buffer, {
            length: Math.min(4 + this.options.mpegOffsetTolerance, fileSize),
            mayBeLess: true
        });
        // Check MPEG 1 or 2 Layer 3 header, or 'layer 0' for ADTS (MPEG sync-word 0xFFE)
        if (this.buffer.length >= 4 + this.options.mpegOffsetTolerance) for(let depth = 0; depth <= this.options.mpegOffsetTolerance; ++depth){
            const type = this.scanMpeg(depth);
            if (type) return type;
        }
    }
    async readTiffTag(isBigEndian) {
        const tagId = await this.tokenizer.readToken(isBigEndian ? _tokenTypes.UINT16_BE : _tokenTypes.UINT16_LE);
        await this.tokenizer.ignore(10);
        switch(tagId){
            case 50341:
                return {
                    ext: 'arw',
                    mime: 'image/x-sony-arw'
                };
            case 50706:
                return {
                    ext: 'dng',
                    mime: 'image/x-adobe-dng'
                };
            default:
        }
    }
    async readTiffIFD(isBigEndian) {
        const numberOfTags = await this.tokenizer.readToken(isBigEndian ? _tokenTypes.UINT16_BE : _tokenTypes.UINT16_LE);
        if (numberOfTags > maximumTiffTagCount) return;
        if ((0, _parserJs.hasUnknownFileSize)(this.tokenizer) && 2 + numberOfTags * 12 > maximumTiffIfdOffsetInBytes) return;
        for(let n = 0; n < numberOfTags; ++n){
            const fileType = await this.readTiffTag(isBigEndian);
            if (fileType) return fileType;
        }
    }
    async readTiffHeader(isBigEndian) {
        const tiffFileType = {
            ext: 'tif',
            mime: 'image/tiff'
        };
        const version = (isBigEndian ? _tokenTypes.UINT16_BE : _tokenTypes.UINT16_LE).get(this.buffer, 2);
        const ifdOffset = (isBigEndian ? _tokenTypes.UINT32_BE : _tokenTypes.UINT32_LE).get(this.buffer, 4);
        if (version === 42) {
            // TIFF file header
            if (ifdOffset >= 6) {
                if (this.checkString('CR', {
                    offset: 8
                })) return {
                    ext: 'cr2',
                    mime: 'image/x-canon-cr2'
                };
                if (ifdOffset >= 8) {
                    const someId1 = (isBigEndian ? _tokenTypes.UINT16_BE : _tokenTypes.UINT16_LE).get(this.buffer, 8);
                    const someId2 = (isBigEndian ? _tokenTypes.UINT16_BE : _tokenTypes.UINT16_LE).get(this.buffer, 10);
                    if (someId1 === 0x1C && someId2 === 0xFE || someId1 === 0x1F && someId2 === 0x0B) return {
                        ext: 'nef',
                        mime: 'image/x-nikon-nef'
                    };
                }
            }
            if ((0, _parserJs.hasUnknownFileSize)(this.tokenizer) && ifdOffset > maximumTiffStreamIfdOffsetInBytes) return tiffFileType;
            const maximumTiffOffset = (0, _parserJs.hasUnknownFileSize)(this.tokenizer) ? maximumTiffIfdOffsetInBytes : this.tokenizer.fileInfo.size;
            try {
                await (0, _parserJs.safeIgnore)(this.tokenizer, ifdOffset, {
                    maximumLength: maximumTiffOffset,
                    reason: 'TIFF IFD offset'
                });
            } catch (error) {
                if (error instanceof _core.EndOfStreamError) return;
                throw error;
            }
            let fileType;
            try {
                fileType = await this.readTiffIFD(isBigEndian);
            } catch (error) {
                if (error instanceof _core.EndOfStreamError) return;
                throw error;
            }
            return fileType ?? tiffFileType;
        }
        if (version === 43) return tiffFileType;
    }
    /**
	Scan check MPEG 1 or 2 Layer 3 header, or 'layer 0' for ADTS (MPEG sync-word 0xFFE).

	@param {number} offset - Offset to scan for sync-preamble.
	@returns {{ext: string, mime: string} | undefined} The detected file type, if any.
	*/ scanMpeg(offset) {
        if (this.check([
            0xFF,
            0xE0
        ], {
            offset,
            mask: [
                0xFF,
                0xE0
            ]
        })) {
            // Both (ADTS) MPEG-2 and MPEG-4 are AAC
            if (this.check([
                0x10
            ], {
                offset: offset + 1,
                mask: [
                    0x16
                ]
            })) return {
                ext: 'aac',
                mime: 'audio/aac'
            };
            // An MPEG-1 Layer I header with CRC protection enabled is byte-identical to a UTF-16 LE BOM, so text files cannot be told apart from audio. `file(1)` disables MPEG-1 Layer I detection completely for this reason; we only drop the colliding variant.
            if (this.check([
                0xFF,
                0xFE
            ], {
                offset
            })) return;
            // Reject the reserved MPEG version `01`
            if (this.check([
                0x08
            ], {
                offset: offset + 1,
                mask: [
                    0x18
                ]
            })) return;
            // Reject the `bad` (`1111`) bitrate index
            if (this.check([
                0xF0
            ], {
                offset: offset + 2,
                mask: [
                    0xF0
                ]
            })) return;
            // Reject the reserved sampling frequency `11`
            if (this.check([
                0x0C
            ], {
                offset: offset + 2,
                mask: [
                    0x0C
                ]
            })) return;
            // MPEG 1 or 2 Layer 3 header
            // Check for MPEG layer 3
            if (this.check([
                0x02
            ], {
                offset: offset + 1,
                mask: [
                    0x06
                ]
            })) return {
                ext: 'mp3',
                mime: 'audio/mpeg'
            };
            // Check for MPEG layer 2
            if (this.check([
                0x04
            ], {
                offset: offset + 1,
                mask: [
                    0x06
                ]
            })) return {
                ext: 'mp2',
                mime: 'audio/mpeg'
            };
            // Check for MPEG layer 1
            if (this.check([
                0x06
            ], {
                offset: offset + 1,
                mask: [
                    0x06
                ]
            })) return {
                ext: 'mp1',
                mime: 'audio/mpeg'
            };
        }
    }
}
const supportedExtensions = new Set((0, _supportedJs.extensions));
const supportedMimeTypes = new Set((0, _supportedJs.mimeTypes));
async function fileTypeFromFile(path, options) {
    return new FileTypeParser(options).fromFile(path);
}

},{"token-types":"al35Q","strtok3/core":"7L6Gs","@tokenizer/inflate":"lpjd2","uint8array-extras":"4N1qG","./tokens.js":"1DpIT","./supported.js":"hnJf9","./parser.js":"epYb3","./detectors/zip.js":"6ToMg","./detectors/ebml.js":"fFgA7","./detectors/png.js":"duP7s","./detectors/asf.js":"hWnJF","@parcel/transformer-js/src/esmodule-helpers.js":"53hI8"}],"lpjd2":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "GzipHandler", ()=>(0, _gzipHandlerJs.GzipHandler));
parcelHelpers.export(exports, "ZipHandler", ()=>(0, _zipHandlerJs.ZipHandler));
parcelHelpers.export(exports, "ZipLimitError", ()=>(0, _zipLimitErrorJs.ZipLimitError));
var _gzipHandlerJs = require("./GzipHandler.js");
var _zipHandlerJs = require("./ZipHandler.js");
var _zipLimitErrorJs = require("./ZipLimitError.js");

},{"./GzipHandler.js":"6k42l","./ZipHandler.js":"d4LQZ","./ZipLimitError.js":"2G5T2","@parcel/transformer-js/src/esmodule-helpers.js":"53hI8"}],"6k42l":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "GzipHandler", ()=>GzipHandler);
class GzipHandler {
    constructor(tokenizer){
        this.tokenizer = tokenizer;
    }
    inflate() {
        const tokenizer = this.tokenizer;
        return new ReadableStream({
            async pull (controller) {
                const buffer = new Uint8Array(1024);
                const size = await tokenizer.readBuffer(buffer, {
                    mayBeLess: true
                });
                if (size === 0) {
                    controller.close();
                    return;
                }
                controller.enqueue(buffer.subarray(0, size));
            }
        }).pipeThrough(new DecompressionStream('gzip'));
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"53hI8"}],"d4LQZ":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ZipHandler", ()=>ZipHandler);
var _debug = require("debug");
var _debugDefault = parcelHelpers.interopDefault(_debug);
var _core = require("strtok3/core");
var _tokenTypes = require("token-types");
var _zipLimitErrorJs = require("./ZipLimitError.js");
var _zipTokenJs = require("./ZipToken.js");
function signatureToArray(signature) {
    const signatureBytes = new Uint8Array((0, _tokenTypes.UINT32_LE).len);
    (0, _tokenTypes.UINT32_LE).put(signatureBytes, 0, signature);
    return signatureBytes;
}
const debug = (0, _debugDefault.default)('tokenizer:inflate');
const syncBufferSize = 262144;
const eocdSignatureBytes = signatureToArray((0, _zipTokenJs.Signature).EndOfCentralDirectory);
class ZipHandler {
    constructor(tokenizer, options = {}){
        this.tokenizer = tokenizer;
        this.syncBuffer = new Uint8Array(syncBufferSize);
        this.scannedBytes = 0;
        this.descriptorScannedBytes = 0;
        this.limits = {
            maxEntryCount: options.maxEntryCount ?? Number.POSITIVE_INFINITY,
            maxTotalScanBytes: options.maxTotalScanBytes ?? Number.POSITIVE_INFINITY,
            maxTotalDataDescriptorScanBytes: options.maxTotalDataDescriptorScanBytes ?? Number.POSITIVE_INFINITY,
            maxSkippedEntrySize: options.maxSkippedEntrySize ?? Number.POSITIVE_INFINITY,
            maxDataDescriptorScanBytes: options.maxDataDescriptorScanBytes ?? Number.POSITIVE_INFINITY,
            maxCompressedSize: options.maxCompressedSize ?? Number.POSITIVE_INFINITY,
            maxUncompressedSize: options.maxUncompressedSize ?? Number.POSITIVE_INFINITY
        };
        this.useCentralDirectory = options.useCentralDirectory ?? true;
        this.allowTruncatedDataDescriptor = options.allowTruncatedDataDescriptor ?? false;
        if (typeof this.useCentralDirectory !== 'boolean') throw new TypeError('useCentralDirectory must be a boolean');
        if (typeof this.allowTruncatedDataDescriptor !== 'boolean') throw new TypeError('allowTruncatedDataDescriptor must be a boolean');
        for (const [name, limit] of Object.entries(this.limits)){
            if (limit !== Number.POSITIVE_INFINITY && (!Number.isSafeInteger(limit) || limit <= 0)) throw new RangeError(`${name} must be a positive safe integer or Infinity`);
        }
    }
    /** Reject oversized entries before retaining data or allocating a combined buffer. */ checkLimit(limit, size) {
        if (size > this.limits[limit]) throw new (0, _zipLimitErrorJs.ZipLimitError)(limit, size, this.limits[limit]);
    }
    resetTraversal() {
        this.scannedBytes = 0;
        this.descriptorScannedBytes = 0;
    }
    consumeBytes(length) {
        this.checkLimit('maxTotalScanBytes', this.scannedBytes + length);
        this.scannedBytes += length;
    }
    readToken(token, input = this.tokenizer) {
        this.consumeBytes(token.len);
        return input.readToken(token);
    }
    ignore(length, input = this.tokenizer) {
        this.consumeBytes(length);
        return input.ignore(length);
    }
    readData(length) {
        this.consumeBytes(length);
        const data = new Uint8Array(length);
        return this.tokenizer.readBuffer(data).then(()=>data);
    }
    checkEntrySize(header) {
        this.checkLimit('maxCompressedSize', header.compressedSize);
        this.checkLimit('maxUncompressedSize', header.uncompressedSize);
        if (header.compressedMethod === 0) this.checkLimit('maxUncompressedSize', header.compressedSize);
    }
    async isZip() {
        return await this.peekSignature() === (0, _zipTokenJs.Signature).LocalFileHeader;
    }
    peekSignature() {
        return this.tokenizer.peekToken((0, _tokenTypes.UINT32_LE));
    }
    async findEndOfCentralDirectoryLocator() {
        const randomReadTokenizer = this.tokenizer;
        const chunkLength = Math.min(16384, randomReadTokenizer.fileInfo.size);
        const buffer = this.syncBuffer.subarray(0, chunkLength);
        this.consumeBytes(chunkLength);
        await this.tokenizer.readBuffer(buffer, {
            position: randomReadTokenizer.fileInfo.size - chunkLength
        });
        // Search the buffer from end to beginning for EOCD signature
        // const signature = 0x06054b50;
        for(let i = buffer.length - 4; i >= 0; i--){
            // Compare 4 bytes directly without calling readUInt32LE
            if (buffer[i] === eocdSignatureBytes[0] && buffer[i + 1] === eocdSignatureBytes[1] && buffer[i + 2] === eocdSignatureBytes[2] && buffer[i + 3] === eocdSignatureBytes[3]) return randomReadTokenizer.fileInfo.size - chunkLength + i;
        }
        return -1;
    }
    async readCentralDirectory() {
        this.resetTraversal();
        const entries = await this.centralDirectoryEntries();
        if (!entries) return;
        const files = [];
        for await (const entry of entries)files.push(entry);
        return files;
    }
    async centralDirectoryEntries() {
        if (!this.tokenizer.supportsRandomAccess()) {
            debug('Cannot reading central-directory without random-read support');
            return;
        }
        debug('Reading central-directory...');
        const pos = this.tokenizer.position;
        try {
            const offset = await this.findEndOfCentralDirectoryLocator();
            if (offset > 0) {
                debug('Central-directory 32-bit signature found');
                this.tokenizer.setPosition(offset);
                const eocdHeader = await this.readToken((0, _zipTokenJs.EndOfCentralDirectoryRecordToken));
                return this.iterateDirectory(eocdHeader.offsetOfStartOfCd, eocdHeader.sizeOfCd, eocdHeader.nrOfEntriesOfSize);
            }
        } finally{
            this.tokenizer.setPosition(pos);
        }
    }
    async *iterateDirectory(offset, size, count) {
        const source = this.tokenizer;
        const pos = source.position;
        let directory;
        let position = 0;
        try {
            source.setPosition(offset);
            directory = (0, _core.createTokenizerView)(source, size);
            for(let n = 0; n < count; ++n){
                this.checkLimit('maxEntryCount', n + 1);
                // Extraction between yields can move the source to a local header.
                directory.setPosition(position);
                const entry = await this.readToken((0, _zipTokenJs.FileHeader), directory);
                if (entry.signature !== (0, _zipTokenJs.Signature).CentralFileHeader) throw new Error('Expected Central-File-Header signature');
                entry.filename = await this.readToken(new (0, _tokenTypes.StringType)(entry.filenameLength, 'utf-8'), directory);
                await this.ignore(entry.extraFieldLength, directory);
                await this.ignore(entry.fileCommentLength, directory);
                position = directory.position;
                yield entry;
            }
        } finally{
            try {
                await directory?.close();
            } finally{
                source.setPosition(pos);
            }
        }
    }
    async unzip(fileCb) {
        this.resetTraversal();
        const entries = this.useCentralDirectory ? await this.centralDirectoryEntries() : undefined;
        if (entries) // Use Central Directory to iterate over files
        return this.iterateOverCentralDirectory(entries, fileCb);
        // Scan Zip files for local-file-header
        let stop = false;
        let entryCount = 0;
        do {
            const zipHeader = await this.readLocalFileHeader();
            if (!zipHeader) break;
            this.checkLimit('maxEntryCount', ++entryCount);
            const next = fileCb(zipHeader);
            stop = !!next.stop;
            let fileData;
            await this.ignore(zipHeader.extraFieldLength);
            if (next.handler) this.checkEntrySize(zipHeader);
            else this.checkLimit('maxSkippedEntrySize', zipHeader.compressedSize);
            if (zipHeader.dataDescriptor && zipHeader.compressedSize === 0) {
                const chunks = [];
                let totalSize = 0;
                const scanLimit = Math.min(this.limits.maxDataDescriptorScanBytes, this.limits.maxTotalDataDescriptorScanBytes - this.descriptorScannedBytes, this.limits.maxTotalScanBytes - this.scannedBytes, next.handler ? Number.POSITIVE_INFINITY : this.limits.maxSkippedEntrySize, next.handler ? this.limits.maxCompressedSize : Number.POSITIVE_INFINITY, next.handler && zipHeader.compressedMethod === 0 ? this.limits.maxUncompressedSize : Number.POSITIVE_INFINITY);
                debug('Compressed-file-size unknown, scanning for next data-descriptor-signature....');
                while(true){
                    // Retain a full descriptor overlap so its compressed-size field can be validated.
                    const peekLength = Math.min(syncBufferSize, scanLimit - totalSize + (0, _zipTokenJs.DataDescriptor).len);
                    const len = await this.tokenizer.peekBuffer(this.syncBuffer.subarray(0, peekLength), {
                        mayBeLess: true
                    });
                    const allowTruncated = this.allowTruncatedDataDescriptor && len < peekLength;
                    const nextHeaderIndex = findDescriptor(this.syncBuffer.subarray(0, len), totalSize, allowTruncated);
                    if (nextHeaderIndex < 0 && len < (0, _zipTokenJs.DataDescriptor).len && !allowTruncated) throw new Error('Expected data-descriptor-signature before end of input');
                    const size = nextHeaderIndex >= 0 ? nextHeaderIndex : allowTruncated ? len : len - (0, _zipTokenJs.DataDescriptor).len + 1;
                    if (size === 0) break;
                    this.checkLimit('maxDataDescriptorScanBytes', totalSize + size);
                    this.checkLimit('maxTotalDataDescriptorScanBytes', this.descriptorScannedBytes + size);
                    if (!next.handler) this.checkLimit('maxSkippedEntrySize', totalSize + size);
                    if (next.handler) {
                        this.checkLimit('maxCompressedSize', totalSize + size);
                        if (zipHeader.compressedMethod === 0) this.checkLimit('maxUncompressedSize', totalSize + size);
                        if (size > 0) {
                            const data = await this.readData(size);
                            chunks.push(data);
                        }
                    } else await this.ignore(size);
                    totalSize += size;
                    this.descriptorScannedBytes += size;
                    if (nextHeaderIndex >= 0) break;
                }
                debug(`Found data-descriptor-signature at pos=${this.tokenizer.position}`);
                if (next.handler) {
                    this.checkLimit('maxCompressedSize', totalSize);
                    await this.inflate(zipHeader, mergeArrays(chunks), next.handler);
                }
            } else if (next.handler) {
                debug(`Reading compressed-file-data: ${zipHeader.compressedSize} bytes`);
                fileData = await this.readData(zipHeader.compressedSize);
                await this.inflate(zipHeader, fileData, next.handler);
            } else {
                debug(`Ignoring compressed-file-data: ${zipHeader.compressedSize} bytes`);
                await this.ignore(zipHeader.compressedSize);
            }
            debug(`Reading data-descriptor at pos=${this.tokenizer.position}`);
            if (zipHeader.dataDescriptor) {
                // await this.tokenizer.ignore(DataDescriptor.len);
                const dataDescriptor = await this.readToken((0, _zipTokenJs.DataDescriptor));
                if (dataDescriptor.signature !== 0x08074b50) throw new Error(`Expected data-descriptor-signature at position ${this.tokenizer.position - (0, _zipTokenJs.DataDescriptor).len}`);
            }
        }while (!stop);
    }
    async iterateOverCentralDirectory(entries, fileCb) {
        for await (const fileHeader of entries){
            const next = fileCb(fileHeader);
            if (next.handler) {
                this.tokenizer.setPosition(fileHeader.relativeOffsetOfLocalHeader);
                const zipHeader = await this.readLocalFileHeader();
                if (zipHeader) {
                    await this.ignore(zipHeader.extraFieldLength);
                    this.checkEntrySize(fileHeader);
                    this.checkEntrySize(zipHeader);
                    const fileData = await this.readData(fileHeader.compressedSize);
                    await this.inflate(zipHeader, fileData, next.handler);
                }
            }
            if (next.stop) break;
        }
    }
    async inflate(zipHeader, fileData, cb) {
        if (zipHeader.compressedMethod === 0) {
            // Stored (uncompressed)
            this.checkLimit('maxUncompressedSize', fileData.length);
            return cb(fileData);
        }
        if (zipHeader.compressedMethod !== 8) throw new Error(`Unsupported ZIP compression method: ${zipHeader.compressedMethod}`);
        debug(`Decompress filename=${zipHeader.filename}, compressed-size=${fileData.length}`);
        const uncompressedData = await this.decompressDeflateRaw(fileData);
        return cb(uncompressedData);
    }
    async decompressDeflateRaw(data) {
        // Wrap Uint8Array in a ReadableStream without copying
        const input = new ReadableStream({
            start (controller) {
                controller.enqueue(data);
                controller.close();
            }
        });
        const ds = new DecompressionStream('deflate-raw');
        const output = input.pipeThrough(ds);
        const reader = output.getReader();
        const chunks = [];
        let totalSize = 0;
        try {
            while(true){
                const { done, value } = await reader.read();
                if (done) break;
                this.checkLimit('maxUncompressedSize', totalSize + value.length);
                totalSize += value.length;
                chunks.push(value);
            }
            this.checkLimit('maxUncompressedSize', totalSize);
            return mergeArrays(chunks);
        } catch (err) {
            // Cancellation propagates through pipeThrough to stop decompression.
            await reader.cancel(err).catch(()=>{
            // Preserve the original failure if cancellation also fails.
            });
            if (err instanceof (0, _zipLimitErrorJs.ZipLimitError)) throw err;
            // Descriptor scanning can retain bytes after the deflate stream, including
            // unsigned ZIP data descriptors. Node.js rejects these after delivering the
            // inflated data. Recover only this error; every retained chunk was bounded.
            if (err instanceof Error && 'code' in err && err.code === 'ERR_TRAILING_JUNK_AFTER_STREAM_END') return mergeArrays(chunks);
            // Provide ZIP-specific error context
            const message = err instanceof Error ? `Failed to deflate ZIP entry: ${err.message}` : 'Unknown decompression error in ZIP entry';
            throw new TypeError(message);
        } finally{
            reader.releaseLock();
        }
    }
    async readLocalFileHeader() {
        const signature = await this.tokenizer.peekToken((0, _tokenTypes.UINT32_LE));
        if (signature === (0, _zipTokenJs.Signature).LocalFileHeader) {
            const header = await this.readToken((0, _zipTokenJs.LocalFileHeaderToken));
            header.filename = await this.readToken(new (0, _tokenTypes.StringType)(header.filenameLength, 'utf-8'));
            return header;
        }
        if (signature === (0, _zipTokenJs.Signature).CentralFileHeader) return false;
        if (signature === 0xe011cfd0) throw new Error('Encrypted ZIP');
        throw new Error('Unexpected signature');
    }
}
function findDescriptor(buffer, consumed, allowTruncated) {
    for(let i = 0; i <= buffer.length - (allowTruncated ? 4 : (0, _zipTokenJs.DataDescriptor).len); i++){
        if ((0, _tokenTypes.UINT32_LE).get(buffer, i) === (0, _zipTokenJs.Signature).DataDescriptor && (buffer.length - i < 12 || (0, _tokenTypes.UINT32_LE).get(buffer, i + 8) === consumed + i)) return i;
    }
    return -1;
}
function mergeArrays(chunks) {
    // Concatenate chunks into a single Uint8Array
    const totalLength = chunks.reduce((acc, curr)=>acc + curr.length, 0);
    const mergedArray = new Uint8Array(totalLength);
    let offset = 0;
    for (const chunk of chunks){
        mergedArray.set(chunk, offset);
        offset += chunk.length;
    }
    return mergedArray;
}

},{"debug":"4XIdh","strtok3/core":"7L6Gs","token-types":"al35Q","./ZipLimitError.js":"2G5T2","./ZipToken.js":"kQKrr","@parcel/transformer-js/src/esmodule-helpers.js":"53hI8"}],"2G5T2":[function(require,module,exports,__globalThis) {
/** A configured ZIP processing limit was exceeded. */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ZipLimitError", ()=>ZipLimitError);
class ZipLimitError extends RangeError {
    constructor(limit, requestedSize, maxSize){
        super(`ZIP ${limit} exceeded: ${requestedSize} exceeds limit of ${maxSize}`);
        this.limit = limit;
        this.requestedSize = requestedSize;
        this.maxSize = maxSize;
        this.name = 'ZipLimitError';
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"53hI8"}],"kQKrr":[function(require,module,exports,__globalThis) {
/**
 * Ref https://pkware.cachefly.net/webdocs/casestudies/APPNOTE.TXT
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Signature", ()=>Signature);
parcelHelpers.export(exports, "DataDescriptor", ()=>DataDescriptor);
parcelHelpers.export(exports, "LocalFileHeaderToken", ()=>LocalFileHeaderToken);
parcelHelpers.export(exports, "EndOfCentralDirectoryRecordToken", ()=>EndOfCentralDirectoryRecordToken);
parcelHelpers.export(exports, "FileHeader", ()=>FileHeader);
var _tokenTypes = require("token-types");
const Signature = {
    LocalFileHeader: 0x04034b50,
    DataDescriptor: 0x08074b50,
    CentralFileHeader: 0x02014b50,
    EndOfCentralDirectory: 0x06054b50
};
const DataDescriptor = {
    get (array) {
        return {
            signature: (0, _tokenTypes.UINT32_LE).get(array, 0),
            compressedSize: (0, _tokenTypes.UINT32_LE).get(array, 8),
            uncompressedSize: (0, _tokenTypes.UINT32_LE).get(array, 12)
        };
    },
    len: 16
};
const LocalFileHeaderToken = {
    get (array) {
        const flags = (0, _tokenTypes.UINT16_LE).get(array, 6);
        return {
            signature: (0, _tokenTypes.UINT32_LE).get(array, 0),
            minVersion: (0, _tokenTypes.UINT16_LE).get(array, 4),
            dataDescriptor: !!(flags & 0x0008),
            compressedMethod: (0, _tokenTypes.UINT16_LE).get(array, 8),
            compressedSize: (0, _tokenTypes.UINT32_LE).get(array, 18),
            uncompressedSize: (0, _tokenTypes.UINT32_LE).get(array, 22),
            filenameLength: (0, _tokenTypes.UINT16_LE).get(array, 26),
            extraFieldLength: (0, _tokenTypes.UINT16_LE).get(array, 28),
            filename: null
        };
    },
    len: 30
};
const EndOfCentralDirectoryRecordToken = {
    get (array) {
        return {
            signature: (0, _tokenTypes.UINT32_LE).get(array, 0),
            nrOfThisDisk: (0, _tokenTypes.UINT16_LE).get(array, 4),
            nrOfThisDiskWithTheStart: (0, _tokenTypes.UINT16_LE).get(array, 6),
            nrOfEntriesOnThisDisk: (0, _tokenTypes.UINT16_LE).get(array, 8),
            nrOfEntriesOfSize: (0, _tokenTypes.UINT16_LE).get(array, 10),
            sizeOfCd: (0, _tokenTypes.UINT32_LE).get(array, 12),
            offsetOfStartOfCd: (0, _tokenTypes.UINT32_LE).get(array, 16),
            zipFileCommentLength: (0, _tokenTypes.UINT16_LE).get(array, 20)
        };
    },
    len: 22
};
const FileHeader = {
    get (array) {
        const flags = (0, _tokenTypes.UINT16_LE).get(array, 8);
        return {
            signature: (0, _tokenTypes.UINT32_LE).get(array, 0),
            minVersion: (0, _tokenTypes.UINT16_LE).get(array, 6),
            dataDescriptor: !!(flags & 0x0008),
            compressedMethod: (0, _tokenTypes.UINT16_LE).get(array, 10),
            compressedSize: (0, _tokenTypes.UINT32_LE).get(array, 20),
            uncompressedSize: (0, _tokenTypes.UINT32_LE).get(array, 24),
            filenameLength: (0, _tokenTypes.UINT16_LE).get(array, 28),
            extraFieldLength: (0, _tokenTypes.UINT16_LE).get(array, 30),
            fileCommentLength: (0, _tokenTypes.UINT16_LE).get(array, 32),
            relativeOffsetOfLocalHeader: (0, _tokenTypes.UINT32_LE).get(array, 42),
            filename: null
        };
    },
    len: 46
};

},{"token-types":"al35Q","@parcel/transformer-js/src/esmodule-helpers.js":"53hI8"}],"1DpIT":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "stringToBytes", ()=>stringToBytes);
/**
Checks whether the TAR checksum is valid.

@param {Uint8Array} arrayBuffer - The TAR header `[offset ... offset + 512]`.
@param {number} offset - Position of the TAR header in `arrayBuffer`.
@returns {boolean} `true` if the TAR checksum is valid, otherwise `false`.
*/ parcelHelpers.export(exports, "tarHeaderChecksumMatches", ()=>tarHeaderChecksumMatches);
parcelHelpers.export(exports, "uint32SyncSafeToken", ()=>uint32SyncSafeToken);
var _tokenTypes = require("token-types");
function stringToBytes(string, encoding) {
    if (encoding === 'utf-16le') {
        const bytes = [];
        for(let index = 0; index < string.length; index++){
            const code = string.charCodeAt(index); // eslint-disable-line unicorn/prefer-code-point
            bytes.push(code & 0xFF, code >> 8 & 0xFF); // High byte
        }
        return bytes;
    }
    if (encoding === 'utf-16be') {
        const bytes = [];
        for(let index = 0; index < string.length; index++){
            const code = string.charCodeAt(index); // eslint-disable-line unicorn/prefer-code-point
            bytes.push(code >> 8 & 0xFF, code & 0xFF); // Low byte
        }
        return bytes;
    }
    return [
        ...string
    ].map((character)=>character.charCodeAt(0)); // eslint-disable-line unicorn/prefer-code-point
}
function tarHeaderChecksumMatches(arrayBuffer, offset = 0) {
    const readSum = Number.parseInt(new (0, _tokenTypes.StringType)(6).get(arrayBuffer, 148), 8); // Read sum in header
    if (Number.isNaN(readSum)) return false;
    let sum = 256; // Initialize signed bit sum
    for(let index = offset; index < offset + 148; index++)sum += arrayBuffer[index];
    for(let index = offset + 156; index < offset + 512; index++)sum += arrayBuffer[index];
    return readSum === sum;
}
const uint32SyncSafeToken = {
    get: (buffer, offset)=>buffer[offset + 3] & 0x7F | (buffer[offset + 2] & 0x7F) << 7 | (buffer[offset + 1] & 0x7F) << 14 | (buffer[offset] & 0x7F) << 21,
    len: 4
};

},{"token-types":"al35Q","@parcel/transformer-js/src/esmodule-helpers.js":"53hI8"}],"hnJf9":[function(require,module,exports,__globalThis) {
// MIME media subtypes prefixed with `x-ft-` are custom and defined by us. They are neither formally registered with IANA nor based on any informal conventions.
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "extensions", ()=>extensions);
parcelHelpers.export(exports, "mimeTypes", ()=>mimeTypes);
const extensions = [
    'jpg',
    'png',
    'apng',
    'gif',
    'webp',
    'flif',
    'xcf',
    'cr2',
    'cr3',
    'orf',
    'arw',
    'dng',
    'nef',
    'rw2',
    'raf',
    'tif',
    'bmp',
    'icns',
    'jxr',
    'psd',
    'indd',
    'zip',
    'tar',
    'rar',
    'gz',
    'bz2',
    '7z',
    'dmg',
    'mp4',
    'mid',
    'mkv',
    'webm',
    'mov',
    'avi',
    'mpg',
    'mp2',
    'mp3',
    'm4a',
    'oga',
    'ogg',
    'ogv',
    'opus',
    'flac',
    'wav',
    'spx',
    'amr',
    'pdf',
    'epub',
    'elf',
    'macho',
    'exe',
    'swf',
    'rtf',
    'wasm',
    'woff',
    'woff2',
    'eot',
    'ttf',
    'otf',
    'ttc',
    'ico',
    'flv',
    'ps',
    'xz',
    'sqlite',
    'nes',
    'crx',
    'xpi',
    'cab',
    'deb',
    'ar',
    'rpm',
    'Z',
    'lz',
    'cfb',
    'mxf',
    'mts',
    'blend',
    'bpg',
    'docx',
    'pptx',
    'xlsx',
    '3gp',
    '3g2',
    'j2c',
    'jp2',
    'jpm',
    'jpx',
    'mj2',
    'aif',
    'caf',
    'qcp',
    'odt',
    'ods',
    'odp',
    'xml',
    'mobi',
    'heic',
    'cur',
    'ktx',
    'ape',
    'wv',
    'dcm',
    'ics',
    'glb',
    'pcap',
    'dsf',
    'dff',
    'lnk',
    'alias',
    'voc',
    'ac3',
    'm4v',
    'm4p',
    'm4b',
    'f4v',
    'f4p',
    'f4b',
    'f4a',
    'mie',
    'asf',
    'ogm',
    'ogx',
    'mpc',
    'arrow',
    'shp',
    'aac',
    'mp1',
    'it',
    's3m',
    'xm',
    'skp',
    'avif',
    'eps',
    'lzh',
    'pgp',
    'asar',
    'stl',
    'chm',
    '3mf',
    'zst',
    'jxl',
    'vcf',
    'jls',
    'pst',
    'dwg',
    'parquet',
    'class',
    'arj',
    'cpio',
    'ace',
    'avro',
    'icc',
    'fbx',
    'vsdx',
    'vtt',
    'apk',
    'drc',
    'lz4',
    'potx',
    'xltx',
    'dotx',
    'xltm',
    'ott',
    'ots',
    'otp',
    'odg',
    'otg',
    'xlsm',
    'docm',
    'dotm',
    'potm',
    'pptm',
    'jar',
    'jmp',
    'rm',
    'sav',
    'ppsm',
    'ppsx',
    'tar.gz',
    'reg',
    'dat',
    'key',
    'numbers',
    'pages',
    'iso'
];
const mimeTypes = [
    'image/jpeg',
    'image/png',
    'image/gif',
    'image/webp',
    'image/flif',
    'image/x-xcf',
    'image/x-canon-cr2',
    'image/x-canon-cr3',
    'image/tiff',
    'image/bmp',
    'image/vnd.ms-photo',
    'image/vnd.adobe.photoshop',
    'application/x-indesign',
    'application/epub+zip',
    'application/x-xpinstall',
    'application/vnd.ms-powerpoint.slideshow.macroenabled.12',
    'application/vnd.oasis.opendocument.text',
    'application/vnd.oasis.opendocument.spreadsheet',
    'application/vnd.oasis.opendocument.presentation',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'application/vnd.openxmlformats-officedocument.presentationml.presentation',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    'application/vnd.openxmlformats-officedocument.presentationml.slideshow',
    'application/zip',
    'application/x-tar',
    'application/x-rar-compressed',
    'application/gzip',
    'application/x-bzip2',
    'application/x-7z-compressed',
    'application/x-apple-diskimage',
    'application/vnd.apache.arrow.file',
    'video/mp4',
    'audio/midi',
    'video/matroska',
    'video/webm',
    'video/quicktime',
    'video/vnd.avi',
    'audio/wav',
    'audio/qcelp',
    'audio/x-ms-asf',
    'video/x-ms-asf',
    'application/vnd.ms-asf',
    'video/mpeg',
    'video/3gpp',
    'audio/mpeg',
    'audio/mp4',
    'video/ogg',
    'audio/ogg',
    'audio/ogg; codecs=opus',
    'application/ogg',
    'audio/flac',
    'audio/ape',
    'audio/wavpack',
    'audio/amr',
    'application/pdf',
    'application/x-elf',
    'application/x-mach-binary',
    'application/x-msdownload',
    'application/x-shockwave-flash',
    'application/rtf',
    'application/wasm',
    'font/woff',
    'font/woff2',
    'application/vnd.ms-fontobject',
    'font/ttf',
    'font/otf',
    'font/collection',
    'image/x-icon',
    'video/x-flv',
    'application/postscript',
    'application/eps',
    'application/x-xz',
    'application/x-sqlite3',
    'application/x-nintendo-nes-rom',
    'application/x-google-chrome-extension',
    'application/vnd.ms-cab-compressed',
    'application/x-deb',
    'application/x-unix-archive',
    'application/x-rpm',
    'application/x-compress',
    'application/lzip',
    'application/x-cfb',
    'application/x-mie',
    'application/mxf',
    'video/mp2t',
    'application/x-blender',
    'image/bpg',
    'image/j2c',
    'image/jp2',
    'image/jpx',
    'image/jpm',
    'image/mj2',
    'audio/aiff',
    'audio/x-caf',
    'application/xml',
    'application/x-mobipocket-ebook',
    'image/heif',
    'image/heif-sequence',
    'image/heic',
    'image/heic-sequence',
    'image/icns',
    'image/ktx',
    'application/dicom',
    'audio/x-musepack',
    'text/calendar',
    'text/vcard',
    'text/vtt',
    'model/gltf-binary',
    'application/vnd.tcpdump.pcap',
    'audio/x-dsf',
    'audio/x-dff',
    'application/x-ms-shortcut',
    'application/x-ft-apple.alias',
    'audio/x-voc',
    'audio/vnd.dolby.dd-raw',
    'audio/x-m4a',
    'image/apng',
    'image/x-olympus-orf',
    'image/x-sony-arw',
    'image/x-adobe-dng',
    'image/x-nikon-nef',
    'image/x-panasonic-rw2',
    'image/x-fujifilm-raf',
    'video/x-m4v',
    'video/3gpp2',
    'application/x-esri-shape',
    'audio/aac',
    'audio/x-it',
    'audio/x-s3m',
    'audio/x-xm',
    'video/MP1S',
    'video/MP2P',
    'application/vnd.sketchup.skp',
    'image/avif',
    'application/x-lzh-compressed',
    'application/pgp-encrypted',
    'application/x-asar',
    'model/stl',
    'application/vnd.ms-htmlhelp',
    'model/3mf',
    'image/jxl',
    'application/zstd',
    'image/jls',
    'application/vnd.ms-outlook',
    'image/vnd.dwg',
    'application/vnd.apache.parquet',
    'application/java-vm',
    'application/x-arj',
    'application/x-cpio',
    'application/x-ace-compressed',
    'application/avro',
    'application/vnd.iccprofile',
    'application/x-ft-fbx',
    'application/vnd.visio',
    'application/vnd.android.package-archive',
    'application/x-ft-draco',
    'application/x-lz4',
    'application/vnd.openxmlformats-officedocument.presentationml.template',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.template',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.template',
    'application/vnd.ms-excel.template.macroenabled.12',
    'application/vnd.oasis.opendocument.text-template',
    'application/vnd.oasis.opendocument.spreadsheet-template',
    'application/vnd.oasis.opendocument.presentation-template',
    'application/vnd.oasis.opendocument.graphics',
    'application/vnd.oasis.opendocument.graphics-template',
    'application/vnd.ms-excel.sheet.macroenabled.12',
    'application/vnd.ms-word.document.macroenabled.12',
    'application/vnd.ms-word.template.macroenabled.12',
    'application/vnd.ms-powerpoint.template.macroenabled.12',
    'application/vnd.ms-powerpoint.presentation.macroenabled.12',
    'application/java-archive',
    'application/vnd.rn-realmedia',
    'application/x-spss-sav',
    'application/x-ms-regedit',
    'application/x-ft-windows-registry-hive',
    'application/x-jmp-data',
    'application/vnd.apple.keynote',
    'application/vnd.apple.numbers',
    'application/vnd.apple.pages',
    'application/x-iso9660-image'
];

},{"@parcel/transformer-js/src/esmodule-helpers.js":"53hI8"}],"epYb3":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "maximumUntrustedSkipSizeInBytes", ()=>maximumUntrustedSkipSizeInBytes);
parcelHelpers.export(exports, "ParserHardLimitError", ()=>ParserHardLimitError);
parcelHelpers.export(exports, "getSafeBound", ()=>getSafeBound);
parcelHelpers.export(exports, "safeIgnore", ()=>safeIgnore);
parcelHelpers.export(exports, "safeReadBuffer", ()=>safeReadBuffer);
parcelHelpers.export(exports, "checkBytes", ()=>checkBytes);
parcelHelpers.export(exports, "hasUnknownFileSize", ()=>hasUnknownFileSize);
parcelHelpers.export(exports, "hasExceededUnknownSizeScanBudget", ()=>hasExceededUnknownSizeScanBudget);
const maximumUntrustedSkipSizeInBytes = 16777216;
class ParserHardLimitError extends Error {
}
function getSafeBound(value, maximum, reason) {
    if (!Number.isFinite(value) || value < 0 || value > maximum) throw new ParserHardLimitError(`${reason} has invalid size ${value} (maximum ${maximum} bytes)`);
    return value;
}
async function safeIgnore(tokenizer, length, { maximumLength = maximumUntrustedSkipSizeInBytes, reason = 'skip' } = {}) {
    const safeLength = getSafeBound(length, maximumLength, reason);
    await tokenizer.ignore(safeLength);
}
async function safeReadBuffer(tokenizer, buffer, options, { maximumLength = buffer.length, reason = 'read' } = {}) {
    const length = options?.length ?? buffer.length;
    const safeLength = getSafeBound(length, maximumLength, reason);
    return tokenizer.readBuffer(buffer, {
        ...options,
        length: safeLength
    });
}
function checkBytes(buffer, headers, options) {
    options = {
        offset: 0,
        ...options
    };
    for (const [index, header] of headers.entries()){
        // If a bitmask is set
        if (options.mask) {
            // If header doesn't equal `buf` with bits masked off
            if (header !== (options.mask[index] & buffer[index + options.offset])) return false;
        } else if (header !== buffer[index + options.offset]) return false;
    }
    return true;
}
function hasUnknownFileSize(tokenizer) {
    const fileSize = tokenizer.fileInfo.size;
    return !Number.isFinite(fileSize) || fileSize === Number.MAX_SAFE_INTEGER;
}
function hasExceededUnknownSizeScanBudget(tokenizer, startOffset, maximumBytes) {
    return hasUnknownFileSize(tokenizer) && tokenizer.position - startOffset > maximumBytes;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"53hI8"}],"6ToMg":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "detectZip", ()=>detectZip);
var _core = require("strtok3/core");
var _inflate = require("@tokenizer/inflate");
var _parserJs = require("../parser.js");
const maximumZipEntrySizeInBytes = 1048576;
const maximumZipEntryCount = 1024;
const maximumZipTextEntrySizeInBytes = maximumZipEntrySizeInBytes;
const recoverableZipErrorMessages = new Set([
    'Unexpected signature',
    'Encrypted ZIP',
    'Expected Central-File-Header signature'
]);
const recoverableZipErrorMessagePrefixes = [
    'Unsupported ZIP compression method:',
    'Expected data-descriptor-signature at position '
];
const recoverableZipErrorCodes = new Set([
    'Z_BUF_ERROR',
    'Z_DATA_ERROR',
    'ERR_INVALID_STATE'
]);
function isRecoverableZipError(error) {
    if (error instanceof _core.EndOfStreamError) return true;
    if (error instanceof (0, _parserJs.ParserHardLimitError) || error instanceof (0, _inflate.ZipLimitError)) return true;
    if (!(error instanceof Error)) return false;
    if (error instanceof TypeError && error.message.startsWith('Failed to deflate ZIP entry:')) return true;
    if (recoverableZipErrorMessages.has(error.message)) return true;
    if (recoverableZipErrorCodes.has(error.code)) return true;
    for (const prefix of recoverableZipErrorMessagePrefixes){
        if (error.message.startsWith(prefix)) return true;
    }
    return false;
}
function isZipScanLimitError(error) {
    return error instanceof (0, _inflate.ZipLimitError) && [
        'maxTotalScanBytes',
        'maxTotalDataDescriptorScanBytes',
        'maxDataDescriptorScanBytes',
        'maxSkippedEntrySize'
    ].includes(error.limit);
}
function canReadZipEntryForDetection(zipHeader, maximumSize = maximumZipEntrySizeInBytes) {
    const sizes = [
        zipHeader.compressedSize,
        zipHeader.uncompressedSize
    ];
    for (const size of sizes){
        if (!Number.isFinite(size) || size < 0 || size > maximumSize) return false;
    }
    return true;
}
// -- iWork helpers --
function createIWorkZipDetectionState() {
    return {
        hasDocumentEntry: false,
        hasMasterSlideEntry: false,
        hasTablesEntry: false,
        hasCalculationEngineEntry: false
    };
}
function updateIWorkZipDetectionStateFromFilename(iWorkState, filename) {
    if (filename === 'Index/Document.iwa') iWorkState.hasDocumentEntry = true;
    if (filename.startsWith('Index/MasterSlide')) iWorkState.hasMasterSlideEntry = true;
    if (filename.startsWith('Index/Tables/')) iWorkState.hasTablesEntry = true;
    if (filename === 'Index/CalculationEngine.iwa') iWorkState.hasCalculationEngineEntry = true;
}
function getIWorkFileTypeFromZipEntries(iWorkState) {
    if (!iWorkState.hasDocumentEntry) return;
    if (iWorkState.hasMasterSlideEntry) return {
        ext: 'key',
        mime: 'application/vnd.apple.keynote'
    };
    if (iWorkState.hasTablesEntry) return {
        ext: 'numbers',
        mime: 'application/vnd.apple.numbers'
    };
    return {
        ext: 'pages',
        mime: 'application/vnd.apple.pages'
    };
}
// -- OpenXML helpers --
function getFileTypeFromMimeType(mimeType) {
    mimeType = mimeType.toLowerCase();
    switch(mimeType){
        case 'application/epub+zip':
            return {
                ext: 'epub',
                mime: mimeType
            };
        case 'application/vnd.oasis.opendocument.text':
            return {
                ext: 'odt',
                mime: mimeType
            };
        case 'application/vnd.oasis.opendocument.text-template':
            return {
                ext: 'ott',
                mime: mimeType
            };
        case 'application/vnd.oasis.opendocument.spreadsheet':
            return {
                ext: 'ods',
                mime: mimeType
            };
        case 'application/vnd.oasis.opendocument.spreadsheet-template':
            return {
                ext: 'ots',
                mime: mimeType
            };
        case 'application/vnd.oasis.opendocument.presentation':
            return {
                ext: 'odp',
                mime: mimeType
            };
        case 'application/vnd.oasis.opendocument.presentation-template':
            return {
                ext: 'otp',
                mime: mimeType
            };
        case 'application/vnd.oasis.opendocument.graphics':
            return {
                ext: 'odg',
                mime: mimeType
            };
        case 'application/vnd.oasis.opendocument.graphics-template':
            return {
                ext: 'otg',
                mime: mimeType
            };
        case 'application/vnd.openxmlformats-officedocument.presentationml.slideshow':
            return {
                ext: 'ppsx',
                mime: mimeType
            };
        case 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet':
            return {
                ext: 'xlsx',
                mime: mimeType
            };
        case 'application/vnd.ms-excel.sheet.macroenabled':
            return {
                ext: 'xlsm',
                mime: 'application/vnd.ms-excel.sheet.macroenabled.12'
            };
        case 'application/vnd.openxmlformats-officedocument.spreadsheetml.template':
            return {
                ext: 'xltx',
                mime: mimeType
            };
        case 'application/vnd.ms-excel.template.macroenabled':
            return {
                ext: 'xltm',
                mime: 'application/vnd.ms-excel.template.macroenabled.12'
            };
        case 'application/vnd.ms-powerpoint.slideshow.macroenabled':
            return {
                ext: 'ppsm',
                mime: 'application/vnd.ms-powerpoint.slideshow.macroenabled.12'
            };
        case 'application/vnd.openxmlformats-officedocument.wordprocessingml.document':
            return {
                ext: 'docx',
                mime: mimeType
            };
        case 'application/vnd.ms-word.document.macroenabled':
            return {
                ext: 'docm',
                mime: 'application/vnd.ms-word.document.macroenabled.12'
            };
        case 'application/vnd.openxmlformats-officedocument.wordprocessingml.template':
            return {
                ext: 'dotx',
                mime: mimeType
            };
        case 'application/vnd.ms-word.template.macroenabledtemplate':
            return {
                ext: 'dotm',
                mime: 'application/vnd.ms-word.template.macroenabled.12'
            };
        case 'application/vnd.openxmlformats-officedocument.presentationml.template':
            return {
                ext: 'potx',
                mime: mimeType
            };
        case 'application/vnd.ms-powerpoint.template.macroenabled':
            return {
                ext: 'potm',
                mime: 'application/vnd.ms-powerpoint.template.macroenabled.12'
            };
        case 'application/vnd.openxmlformats-officedocument.presentationml.presentation':
            return {
                ext: 'pptx',
                mime: mimeType
            };
        case 'application/vnd.ms-powerpoint.presentation.macroenabled':
            return {
                ext: 'pptm',
                mime: 'application/vnd.ms-powerpoint.presentation.macroenabled.12'
            };
        case 'application/vnd.ms-visio.drawing':
            return {
                ext: 'vsdx',
                mime: 'application/vnd.visio'
            };
        case 'application/vnd.ms-package.3dmanufacturing-3dmodel+xml':
            return {
                ext: '3mf',
                mime: 'model/3mf'
            };
        default:
    }
}
function createOpenXmlZipDetectionState() {
    return {
        hasContentTypesEntry: false,
        hasParsedContentTypesEntry: false,
        isParsingContentTypes: false,
        hasUnparseableContentTypes: false,
        hasWordDirectory: false,
        hasPresentationDirectory: false,
        hasSpreadsheetDirectory: false,
        hasThreeDimensionalModelEntry: false
    };
}
function updateOpenXmlZipDetectionStateFromFilename(openXmlState, filename) {
    if (filename.startsWith('word/')) openXmlState.hasWordDirectory = true;
    if (filename.startsWith('ppt/')) openXmlState.hasPresentationDirectory = true;
    if (filename.startsWith('xl/')) openXmlState.hasSpreadsheetDirectory = true;
    if (filename.startsWith('3D/') && filename.endsWith('.model')) openXmlState.hasThreeDimensionalModelEntry = true;
}
function getOpenXmlFileTypeFromDirectoryNames(openXmlState) {
    if (openXmlState.hasWordDirectory) return {
        ext: 'docx',
        mime: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    };
    if (openXmlState.hasPresentationDirectory) return {
        ext: 'pptx',
        mime: 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
    };
    if (openXmlState.hasSpreadsheetDirectory) return {
        ext: 'xlsx',
        mime: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
    };
    if (openXmlState.hasThreeDimensionalModelEntry) return {
        ext: '3mf',
        mime: 'model/3mf'
    };
}
function getOpenXmlFileTypeFromZipEntries(openXmlState) {
    // Only use directory-name heuristic when [Content_Types].xml was present in the archive
    // but its handler was skipped (not invoked, not currently running, and not already resolved).
    // This avoids guessing from directory names when content-type parsing already gave a definitive answer or failed.
    if (!openXmlState.hasContentTypesEntry || openXmlState.hasUnparseableContentTypes || openXmlState.isParsingContentTypes || openXmlState.hasParsedContentTypesEntry) return;
    return getOpenXmlFileTypeFromDirectoryNames(openXmlState);
}
function getOpenXmlMimeTypeFromContentTypesXml(xmlContent) {
    // We only need the `ContentType="...main+xml"` value, so a small string scan is enough and avoids full XML parsing.
    const endPosition = xmlContent.indexOf('.main+xml"');
    if (endPosition === -1) {
        const mimeType = 'application/vnd.ms-package.3dmanufacturing-3dmodel+xml';
        if (xmlContent.includes(`ContentType="${mimeType}"`)) return mimeType;
        return;
    }
    const truncatedContent = xmlContent.slice(0, endPosition);
    const firstQuotePosition = truncatedContent.lastIndexOf('"');
    // If no quote is found, `lastIndexOf` returns -1 and this intentionally falls back to the full truncated prefix.
    return truncatedContent.slice(firstQuotePosition + 1);
}
async function detectZip(tokenizer) {
    let fileType;
    const openXmlState = createOpenXmlZipDetectionState();
    const iWorkState = createIWorkZipDetectionState();
    try {
        await new (0, _inflate.ZipHandler)(tokenizer, {
            // Keep local-header order and partial-archive detection consistent across input types.
            useCentralDirectory: false,
            allowTruncatedDataDescriptor: true,
            maxEntryCount: maximumZipEntryCount,
            // Unknown-size input is bounded before each read, including entry metadata.
            maxTotalScanBytes: (0, _parserJs.hasUnknownFileSize)(tokenizer) ? (0, _parserJs.maximumUntrustedSkipSizeInBytes) : Infinity,
            maxTotalDataDescriptorScanBytes: (0, _parserJs.hasUnknownFileSize)(tokenizer) ? Infinity : maximumZipEntrySizeInBytes,
            maxSkippedEntrySize: (0, _parserJs.hasUnknownFileSize)(tokenizer) ? maximumZipEntrySizeInBytes : Infinity,
            maxDataDescriptorScanBytes: maximumZipEntrySizeInBytes,
            maxCompressedSize: maximumZipTextEntrySizeInBytes,
            maxUncompressedSize: maximumZipTextEntrySizeInBytes
        }).unzip((zipHeader)=>{
            updateOpenXmlZipDetectionStateFromFilename(openXmlState, zipHeader.filename);
            updateIWorkZipDetectionStateFromFilename(iWorkState, zipHeader.filename);
            // Early exit for Keynote or Numbers when markers are definitive
            if (iWorkState.hasDocumentEntry && (iWorkState.hasMasterSlideEntry || iWorkState.hasTablesEntry)) {
                fileType = getIWorkFileTypeFromZipEntries(iWorkState);
                return {
                    stop: true
                };
            }
            const isOpenXmlContentTypesEntry = zipHeader.filename === '[Content_Types].xml';
            const openXmlFileTypeFromEntries = getOpenXmlFileTypeFromZipEntries(openXmlState);
            if (!isOpenXmlContentTypesEntry && openXmlFileTypeFromEntries) {
                fileType = openXmlFileTypeFromEntries;
                return {
                    stop: true
                };
            }
            switch(zipHeader.filename){
                case 'META-INF/mozilla.rsa':
                    fileType = {
                        ext: 'xpi',
                        mime: 'application/x-xpinstall'
                    };
                    return {
                        stop: true
                    };
                case 'META-INF/MANIFEST.MF':
                    fileType = {
                        ext: 'jar',
                        mime: 'application/java-archive'
                    };
                    return {
                        stop: true
                    };
                case 'mimetype':
                    if (!canReadZipEntryForDetection(zipHeader, maximumZipTextEntrySizeInBytes)) return {};
                    return {
                        async handler (fileData) {
                            // Use TextDecoder to decode the UTF-8 encoded data
                            const mimeType = new TextDecoder('utf-8').decode(fileData).trim();
                            fileType = getFileTypeFromMimeType(mimeType);
                        },
                        stop: true
                    };
                case '[Content_Types].xml':
                    openXmlState.hasContentTypesEntry = true;
                    if (!canReadZipEntryForDetection(zipHeader, maximumZipTextEntrySizeInBytes)) {
                        openXmlState.hasUnparseableContentTypes = true;
                        return {};
                    }
                    openXmlState.isParsingContentTypes = true;
                    return {
                        async handler (fileData) {
                            // Use TextDecoder to decode the UTF-8 encoded data
                            const xmlContent = new TextDecoder('utf-8').decode(fileData);
                            const mimeType = getOpenXmlMimeTypeFromContentTypesXml(xmlContent);
                            if (mimeType) fileType = getFileTypeFromMimeType(mimeType);
                            openXmlState.hasParsedContentTypesEntry = true;
                            openXmlState.isParsingContentTypes = false;
                        },
                        stop: true
                    };
                default:
                    if (/classes\d*\.dex/v.test(zipHeader.filename)) {
                        fileType = {
                            ext: 'apk',
                            mime: 'application/vnd.android.package-archive'
                        };
                        return {
                            stop: true
                        };
                    }
                    return {};
            }
        });
    } catch (error) {
        if (!isRecoverableZipError(error)) throw error;
        if (openXmlState.isParsingContentTypes) {
            openXmlState.isParsingContentTypes = false;
            openXmlState.hasUnparseableContentTypes = true;
        }
        // Producers are free to put [Content_Types].xml after the content entries, so running out of
        // input or budget before reaching it says nothing about whether this is an OOXML file.
        // Guess from the directory names instead.
        if (!fileType && (error instanceof _core.EndOfStreamError || error instanceof (0, _parserJs.ParserHardLimitError) || isZipScanLimitError(error)) && !openXmlState.hasContentTypesEntry) fileType = getOpenXmlFileTypeFromDirectoryNames(openXmlState);
    }
    const iWorkFileType = (0, _parserJs.hasUnknownFileSize)(tokenizer) && iWorkState.hasDocumentEntry && !iWorkState.hasMasterSlideEntry && !iWorkState.hasTablesEntry && !iWorkState.hasCalculationEngineEntry ? undefined : getIWorkFileTypeFromZipEntries(iWorkState);
    return fileType ?? getOpenXmlFileTypeFromZipEntries(openXmlState) ?? iWorkFileType ?? {
        ext: 'zip',
        mime: 'application/zip'
    };
}

},{"strtok3/core":"7L6Gs","@tokenizer/inflate":"lpjd2","../parser.js":"epYb3","@parcel/transformer-js/src/esmodule-helpers.js":"53hI8"}],"fFgA7":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "detectEbml", ()=>detectEbml);
var _tokenTypes = require("token-types");
var _core = require("strtok3/core");
var _uint8ArrayExtras = require("uint8array-extras");
var _parserJs = require("../parser.js");
const maximumEbmlDocumentTypeSizeInBytes = 64;
const maximumEbmlElementPayloadSizeInBytes = 1048576;
const maximumEbmlElementCount = 256;
async function detectEbml(tokenizer) {
    async function readField(input) {
        const msb = await input.peekNumber(_tokenTypes.UINT8);
        let mask = 0x80;
        let ic = 0; // 0 = A, 1 = B, 2 = C, 3 = D
        while(mask !== 0 && (msb & mask) === 0){
            ++ic;
            mask >>= 1;
        }
        const id = new Uint8Array(ic + 1);
        await (0, _parserJs.safeReadBuffer)(input, id, undefined, {
            maximumLength: id.length,
            reason: 'EBML field'
        });
        return id;
    }
    async function readElement(input) {
        const idField = await readField(input);
        const lengthField = await readField(input);
        lengthField[0] ^= 0x80 >> lengthField.length - 1;
        const nrLength = Math.min(6, lengthField.length); // JavaScript can max read 6 bytes integer
        const idView = new DataView(idField.buffer);
        const lengthView = new DataView(lengthField.buffer, lengthField.length - nrLength, nrLength);
        return {
            id: (0, _uint8ArrayExtras.getUintBE)(idView),
            len: (0, _uint8ArrayExtras.getUintBE)(lengthView)
        };
    }
    const isUnknownFileSize = (0, _parserJs.hasUnknownFileSize)(tokenizer);
    async function readChildren(header) {
        let ebmlElementCount = 0;
        while(header.remaining > 0){
            ebmlElementCount++;
            if (ebmlElementCount > maximumEbmlElementCount) return;
            if ((0, _parserJs.hasExceededUnknownSizeScanBudget)(tokenizer, ebmlScanStart, (0, _parserJs.maximumUntrustedSkipSizeInBytes))) return;
            const previousPosition = tokenizer.position;
            const element = await readElement(header);
            if (element.id === 0x4282) {
                // `DocType` is a short string ("webm", "matroska", ...), reject implausible lengths to avoid large allocations.
                if (element.len > maximumEbmlDocumentTypeSizeInBytes) return;
                const documentTypeLength = (0, _parserJs.getSafeBound)(element.len, maximumEbmlDocumentTypeSizeInBytes, 'EBML DocType');
                const rawValue = await header.readToken(new _tokenTypes.StringType(documentTypeLength));
                return rawValue.split('\0', 1)[0]; // Return DocType
            }
            if (isUnknownFileSize && (!Number.isFinite(element.len) || element.len < 0 || element.len > maximumEbmlElementPayloadSizeInBytes)) return;
            await (0, _parserJs.safeIgnore)(header, element.len, {
                maximumLength: isUnknownFileSize ? maximumEbmlElementPayloadSizeInBytes : tokenizer.fileInfo.size,
                reason: 'EBML payload'
            }); // ignore payload
            // Safeguard against malformed files: bail if the position did not advance.
            if (tokenizer.position <= previousPosition) return;
        }
    }
    const rootElement = await readElement(tokenizer);
    const ebmlScanStart = tokenizer.position;
    const header = (0, _core.createTokenizerView)(tokenizer, rootElement.len);
    let documentType;
    try {
        documentType = await readChildren(header);
    } catch (error) {
        if (error instanceof (0, _core.TokenizerBoundaryError)) return;
        throw error;
    } finally{
        // Detection can stop at DocType; do not drain the rest or close the source.
        await header.close();
    }
    switch(documentType){
        case 'webm':
            return {
                ext: 'webm',
                mime: 'video/webm'
            };
        case 'matroska':
            return {
                ext: 'mkv',
                mime: 'video/matroska'
            };
        default:
    }
}

},{"token-types":"al35Q","strtok3/core":"7L6Gs","uint8array-extras":"4N1qG","../parser.js":"epYb3","@parcel/transformer-js/src/esmodule-helpers.js":"53hI8"}],"duP7s":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "detectPng", ()=>detectPng);
var _tokenTypes = require("token-types");
var _core = require("strtok3/core");
var _parserJs = require("../parser.js");
const maximumPngChunkCount = 512;
const maximumPngStreamScanBudgetInBytes = 16777216;
const maximumPngChunkSizeInBytes = 1048576;
function isPngAncillaryChunk(type) {
    return (type.codePointAt(0) & 0x20) !== 0;
}
async function detectPng(tokenizer) {
    const pngFileType = {
        ext: 'png',
        mime: 'image/png'
    };
    const apngFileType = {
        ext: 'apng',
        mime: 'image/apng'
    };
    // APNG format (https://wiki.mozilla.org/APNG_Specification)
    // 1. Find the first IDAT (image data) chunk (49 44 41 54)
    // 2. Check if there is an "acTL" chunk before the IDAT one (61 63 54 4C)
    // Offset calculated as follows:
    // - 8 bytes: PNG signature
    // - 4 (length) + 4 (chunk type) + 13 (chunk data) + 4 (CRC): IHDR chunk
    await tokenizer.ignore(8); // ignore PNG signature
    async function readChunkHeader() {
        return {
            length: await tokenizer.readToken(_tokenTypes.INT32_BE),
            type: await tokenizer.readToken(new _tokenTypes.StringType(4, 'latin1'))
        };
    }
    const isUnknownPngStream = (0, _parserJs.hasUnknownFileSize)(tokenizer);
    const pngScanStart = tokenizer.position;
    let pngChunkCount = 0;
    let hasSeenImageHeader = false;
    do {
        pngChunkCount++;
        if (pngChunkCount > maximumPngChunkCount) break;
        if ((0, _parserJs.hasExceededUnknownSizeScanBudget)(tokenizer, pngScanStart, maximumPngStreamScanBudgetInBytes)) break;
        const previousPosition = tokenizer.position;
        const chunk = await readChunkHeader();
        // eslint-disable-next-line unicorn/no-impossible-length-comparison -- The length is read as a signed 32-bit integer.
        if (chunk.length < 0) return; // Invalid chunk length
        if (chunk.type === 'IHDR') {
            // PNG requires the first real image header to be a 13-byte IHDR chunk.
            if (chunk.length !== 13) return;
            hasSeenImageHeader = true;
        }
        switch(chunk.type){
            case 'IDAT':
                return pngFileType;
            case 'acTL':
                return apngFileType;
            default:
                if (!hasSeenImageHeader && chunk.type !== 'CgBI') return;
                if (isUnknownPngStream && chunk.length > maximumPngChunkSizeInBytes) // Avoid huge attacker-controlled skips when probing unknown-size streams.
                return hasSeenImageHeader && isPngAncillaryChunk(chunk.type) ? pngFileType : undefined;
                try {
                    await (0, _parserJs.safeIgnore)(tokenizer, chunk.length + 4, {
                        maximumLength: isUnknownPngStream ? maximumPngChunkSizeInBytes + 4 : tokenizer.fileInfo.size,
                        reason: 'PNG chunk payload'
                    }); // Ignore chunk-data + CRC
                } catch (error) {
                    if (!isUnknownPngStream && (error instanceof (0, _parserJs.ParserHardLimitError) || error instanceof _core.EndOfStreamError)) return pngFileType;
                    throw error;
                }
        }
        // Safeguard against malformed files: bail if the position did not advance.
        if (tokenizer.position <= previousPosition) break;
    }while (tokenizer.position + 8 < tokenizer.fileInfo.size);
    return pngFileType;
}

},{"token-types":"al35Q","strtok3/core":"7L6Gs","../parser.js":"epYb3","@parcel/transformer-js/src/esmodule-helpers.js":"53hI8"}],"hWnJF":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "detectAsf", ()=>detectAsf);
var _tokenTypes = require("token-types");
var _core = require("strtok3/core");
var _parserJs = require("../parser.js");
const maximumAsfHeaderObjectCount = 512;
const maximumAsfHeaderPayloadSizeInBytes = 1048576;
async function detectAsf(tokenizer) {
    let isMalformedAsf = false;
    try {
        async function readHeader() {
            const guid = new Uint8Array(16);
            await (0, _parserJs.safeReadBuffer)(tokenizer, guid, undefined, {
                maximumLength: guid.length,
                reason: 'ASF header GUID'
            });
            return {
                id: guid,
                size: Number(await tokenizer.readToken(_tokenTypes.UINT64_LE))
            };
        }
        await (0, _parserJs.safeIgnore)(tokenizer, 30, {
            maximumLength: 30,
            reason: 'ASF header prelude'
        });
        const isUnknownFileSize = (0, _parserJs.hasUnknownFileSize)(tokenizer);
        const asfHeaderScanStart = tokenizer.position;
        let asfHeaderObjectCount = 0;
        while(tokenizer.position + 24 < tokenizer.fileInfo.size){
            asfHeaderObjectCount++;
            if (asfHeaderObjectCount > maximumAsfHeaderObjectCount) break;
            if ((0, _parserJs.hasExceededUnknownSizeScanBudget)(tokenizer, asfHeaderScanStart, (0, _parserJs.maximumUntrustedSkipSizeInBytes))) break;
            const previousPosition = tokenizer.position;
            const header = await readHeader();
            let payload = header.size - 24;
            if (!Number.isFinite(payload) || payload < 0) {
                isMalformedAsf = true;
                break;
            }
            if ((0, _parserJs.checkBytes)(header.id, [
                0x91,
                0x07,
                0xDC,
                0xB7,
                0xB7,
                0xA9,
                0xCF,
                0x11,
                0x8E,
                0xE6,
                0x00,
                0xC0,
                0x0C,
                0x20,
                0x53,
                0x65
            ])) {
                // Sync on Stream-Properties-Object (B7DC0791-A9B7-11CF-8EE6-00C00C205365)
                const typeId = new Uint8Array(16);
                payload -= await (0, _parserJs.safeReadBuffer)(tokenizer, typeId, undefined, {
                    maximumLength: typeId.length,
                    reason: 'ASF stream type GUID'
                });
                if ((0, _parserJs.checkBytes)(typeId, [
                    0x40,
                    0x9E,
                    0x69,
                    0xF8,
                    0x4D,
                    0x5B,
                    0xCF,
                    0x11,
                    0xA8,
                    0xFD,
                    0x00,
                    0x80,
                    0x5F,
                    0x5C,
                    0x44,
                    0x2B
                ])) // Found audio:
                return {
                    ext: 'asf',
                    mime: 'audio/x-ms-asf'
                };
                if ((0, _parserJs.checkBytes)(typeId, [
                    0xC0,
                    0xEF,
                    0x19,
                    0xBC,
                    0x4D,
                    0x5B,
                    0xCF,
                    0x11,
                    0xA8,
                    0xFD,
                    0x00,
                    0x80,
                    0x5F,
                    0x5C,
                    0x44,
                    0x2B
                ])) // Found video:
                return {
                    ext: 'asf',
                    mime: 'video/x-ms-asf'
                };
                break;
            }
            if (isUnknownFileSize && payload > maximumAsfHeaderPayloadSizeInBytes) {
                isMalformedAsf = true;
                break;
            }
            await (0, _parserJs.safeIgnore)(tokenizer, payload, {
                maximumLength: isUnknownFileSize ? maximumAsfHeaderPayloadSizeInBytes : tokenizer.fileInfo.size,
                reason: 'ASF header payload'
            });
            // Safeguard against malformed files: break if the position did not advance.
            if (tokenizer.position <= previousPosition) {
                isMalformedAsf = true;
                break;
            }
        }
    } catch (error) {
        if (error instanceof _core.EndOfStreamError || error instanceof (0, _parserJs.ParserHardLimitError)) {
            if ((0, _parserJs.hasUnknownFileSize)(tokenizer)) isMalformedAsf = true;
        } else throw error;
    }
    if (isMalformedAsf) return;
    // Default to ASF generic extension
    return {
        ext: 'asf',
        mime: 'application/vnd.ms-asf'
    };
}

},{"token-types":"al35Q","strtok3/core":"7L6Gs","../parser.js":"epYb3","@parcel/transformer-js/src/esmodule-helpers.js":"53hI8"}],"fx0Xs":[function(require,module,exports,__globalThis) {
/**
 * RegExp to match type in RFC 6838
 *
 * type-name = restricted-name
 * subtype-name = restricted-name
 * restricted-name = restricted-name-first *126restricted-name-chars
 * restricted-name-first  = ALPHA / DIGIT
 * restricted-name-chars  = ALPHA / DIGIT / "!" / "#" /
 *                          "$" / "&" / "-" / "^" / "_"
 * restricted-name-chars =/ "." ; Characters before first dot always
 *                              ; specify a facet name
 * restricted-name-chars =/ "+" ; Characters after last plus always
 *                              ; specify a structured syntax suffix
 * ALPHA =  %x41-5A / %x61-7A   ; A-Z / a-z
 * DIGIT =  %x30-39             ; 0-9
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Format object to media type.
 */ parcelHelpers.export(exports, "format", ()=>format);
/**
 * Parse media type to object.
 */ parcelHelpers.export(exports, "parse", ()=>parse);
/**
 * Test media type.
 */ parcelHelpers.export(exports, "test", ()=>test);
const subtypeNameRegExp = /^[A-Za-z0-9][A-Za-z0-9!#$&^_.+-]{0,126}$/;
const typeNameRegExp = /^[A-Za-z0-9][A-Za-z0-9!#$&^_-]{0,126}$/;
const typeRegExp = /^[A-Za-z0-9][A-Za-z0-9!#$&^_-]{0,126}\/[A-Za-z0-9][A-Za-z0-9!#$&^_.+-]{0,126}$/;
function format(obj) {
    const { type, subtype, suffix } = obj;
    if (!type || !typeNameRegExp.test(type)) throw new TypeError(`Invalid type: ${type}`);
    if (!subtype || !subtypeNameRegExp.test(subtype)) throw new TypeError(`Invalid subtype: ${subtype}`);
    let str = type + "/" + subtype;
    if (suffix !== undefined) {
        if (!typeNameRegExp.test(suffix)) throw new TypeError(`Invalid suffix: ${suffix}`);
        str += "+" + suffix;
    }
    return str;
}
function parse(str) {
    if (!typeRegExp.test(str)) throw new TypeError(`Invalid media type: ${str}`);
    const slashIndex = str.indexOf("/");
    const type = str.slice(0, slashIndex).toLowerCase();
    let subtype = str.slice(slashIndex + 1).toLowerCase();
    let suffix;
    const index = subtype.lastIndexOf("+");
    if (index !== -1) {
        suffix = subtype.slice(index + 1);
        subtype = subtype.slice(0, index);
    }
    return {
        type,
        subtype,
        suffix
    };
}
function test(str) {
    return typeRegExp.test(str);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"53hI8"}],"5rhjj":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "aiffParserLoader", ()=>aiffParserLoader);
const aiffParserLoader = {
    parserType: 'aiff',
    extensions: [
        '.aif',
        'aiff',
        'aifc'
    ],
    mimeTypes: [
        'audio/aiff',
        'audio/aif',
        'audio/aifc',
        'application/aiff'
    ],
    async load () {
        return (await require("e61266d961a99b85")).AIFFParser;
    }
};

},{"e61266d961a99b85":"j525B","@parcel/transformer-js/src/esmodule-helpers.js":"53hI8"}],"j525B":[function(require,module,exports,__globalThis) {
module.exports = Promise.all([
    import("./AiffParser.e56efae2.js"),
    import("./AiffParser.2a52df08.js")
]).then(()=>module.bundle.root('aZX1w'));

},{"aZX1w":"aZX1w"}],"e6Pjw":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "apeParserLoader", ()=>apeParserLoader);
const apeParserLoader = {
    parserType: 'apev2',
    extensions: [
        '.ape'
    ],
    mimeTypes: [
        'audio/ape',
        'audio/monkeys-audio'
    ],
    async load () {
        return (await require("45f52a31046e0ed4")).APEv2Parser;
    }
};

},{"45f52a31046e0ed4":"g1k4T","@parcel/transformer-js/src/esmodule-helpers.js":"53hI8"}],"g1k4T":[function(require,module,exports,__globalThis) {
module.exports = Promise.resolve(module.bundle.root("1ZQcJ"));

},{"1ZQcJ":"1ZQcJ"}],"hagGG":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "asfParserLoader", ()=>asfParserLoader);
const asfParserLoader = {
    parserType: 'asf',
    extensions: [
        '.asf',
        '.wma',
        '.wmv'
    ],
    mimeTypes: [
        'audio/ms-wma',
        'video/ms-wmv',
        'audio/ms-asf',
        'video/ms-asf',
        'application/vnd.ms-asf'
    ],
    async load () {
        return (await require("271e53588471f21")).AsfParser;
    }
};

},{"271e53588471f21":"9fWMD","@parcel/transformer-js/src/esmodule-helpers.js":"53hI8"}],"9fWMD":[function(require,module,exports,__globalThis) {
module.exports = import("./AsfParser.a09080f6.js").then(()=>module.bundle.root('4gdBW'));

},{"4gdBW":"4gdBW"}],"aMlmm":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "cafParserLoader", ()=>cafParserLoader);
const cafParserLoader = {
    parserType: 'caf',
    extensions: [
        '.caf',
        '.caff'
    ],
    mimeTypes: [
        'audio/caf',
        'application/caf'
    ],
    async load () {
        return (await require("2a013add922cfd05")).CafParser;
    }
};

},{"2a013add922cfd05":"8K3db","@parcel/transformer-js/src/esmodule-helpers.js":"53hI8"}],"8K3db":[function(require,module,exports,__globalThis) {
module.exports = import("./CafParser.a8b7dcde.js").then(()=>module.bundle.root('54QkR'));

},{"54QkR":"54QkR"}],"4AZ8q":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Provided to the parser to update the metadata result.
 * Responsible for notifying observers synchronously after updates.
 */ parcelHelpers.export(exports, "MetadataCollector", ()=>MetadataCollector);
parcelHelpers.export(exports, "joinArtists", ()=>joinArtists);
var _debug = require("debug");
var _debugDefault = parcelHelpers.interopDefault(_debug);
var _fileType = require("file-type");
var _lyricsParserJs = require("../lrc/LyricsParser.js");
var _typeJs = require("../type.js");
var _allocationJs = require("./Allocation.js");
var _combinedTagMapperJs = require("./CombinedTagMapper.js");
var _genericTagMapperJs = require("./GenericTagMapper.js");
var _genericTagTypesJs = require("./GenericTagTypes.js");
var _trackInfoJs = require("./TrackInfo.js");
var _utilJs = require("./Util.js");
const debug = (0, _debugDefault.default)('music-metadata:collector');
const TagPriority = [
    'matroska',
    'APEv2',
    'vorbis',
    'ID3v2.4',
    'ID3v2.3',
    'ID3v2.2',
    'exif',
    'asf',
    'iTunes',
    'AIFF',
    'CAF',
    'ID3v1'
];
class MetadataCollector {
    format = {
        tagTypes: [],
        trackInfo: []
    };
    native = {};
    common = {
        track: {
            no: null,
            of: null
        },
        disk: {
            no: null,
            of: null
        },
        movementIndex: {
            no: null,
            of: null
        }
    };
    quality = {
        warnings: []
    };
    /**
     * Keeps track of origin priority for each mapped id
     */ commonOrigin = {};
    /**
     * Maps a tag type to a priority
     */ originPriority = {};
    tagMapper = new (0, _combinedTagMapperJs.CombinedTagMapper)();
    opts;
    constructor(opts){
        this.opts = opts;
        let priority = 1;
        for (const tagType of TagPriority)this.originPriority[tagType] = priority++;
        this.originPriority.artificial = 500; // Filled using alternative tags
        this.originPriority.id3v1 = 600; // Consider as the worst because of the field length limit
    }
    /**
     * @returns {boolean} true if one or more tags have been found
     */ hasAny() {
        return Object.keys(this.native).length > 0;
    }
    addStreamInfo(streamInfo) {
        debug(`streamInfo: type=${streamInfo.type ? (0, _typeJs.TrackTypeValueToKeyMap)[streamInfo.type] : '?'}, codec=${streamInfo.codecName}`);
        if ((0, _trackInfoJs.normalizeBitrate)(streamInfo.bitrate) === undefined) delete streamInfo.bitrate;
        this.format.trackInfo.push(streamInfo);
    }
    setFormat(key, value) {
        // Objects may have been mutated in place, so only skip unchanged primitives.
        if ((value === null || typeof value !== 'object') && Object.is(this.format[key], value)) return;
        debug(`format: ${key} = ${value}`);
        // Allow internal writes while preserving each property's value type.
        this.format[key] = value;
        if (this.opts?.observer) this.opts.observer({
            metadata: this,
            tag: {
                type: 'format',
                id: key,
                value
            }
        });
    }
    setAudioOnly() {
        this.setFormat('hasAudio', true);
        this.setFormat('hasVideo', false);
    }
    registerTagType(tagType) {
        if (!this.format.tagTypes.includes(tagType)) this.format.tagTypes.push(tagType);
    }
    async addTag(tagType, tagId, value) {
        debug('tag %s.%s = %o', tagType, tagId, value);
        if (!this.native[tagType]) {
            this.registerTagType(tagType);
            this.native[tagType] = [];
        }
        this.native[tagType].push({
            id: tagId,
            value
        });
        await this.toCommon(tagType, tagId, value);
    }
    addWarning(warning) {
        this.quality.warnings.push({
            message: warning
        });
    }
    async postMap(tagType, tag) {
        // Common tag (alias) found
        // check if we need to do something special with common tag
        // if the event has been aliased then we need to clean it before
        // it is emitted to the user. e.g. genre (20) -> Electronic
        switch(tag.id){
            case 'artist':
                return this.handleSingularArtistTag(tagType, tag, 'artist', 'artists');
            case 'albumartist':
                return this.handleSingularArtistTag(tagType, tag, 'albumartist', 'albumartists');
            case 'artists':
                return this.handlePluralArtistTag(tagType, tag, 'artist', 'artists');
            case 'albumartists':
                return this.handlePluralArtistTag(tagType, tag, 'albumartist', 'albumartists');
            case 'picture':
                return this.postFixPicture(tag.value).then((picture)=>{
                    if (picture !== null) {
                        tag.value = picture;
                        this.setGenericTag(tagType, tag);
                    }
                });
            case 'totaltracks':
                this.common.track.of = (0, _genericTagMapperJs.CommonTagMapper).toIntOrNull(tag.value);
                this.notifyCommonTag({
                    id: 'track',
                    value: {
                        ...this.common.track
                    }
                });
                return;
            case 'totaldiscs':
                this.common.disk.of = (0, _genericTagMapperJs.CommonTagMapper).toIntOrNull(tag.value);
                this.notifyCommonTag({
                    id: 'disk',
                    value: {
                        ...this.common.disk
                    }
                });
                return;
            case 'movementTotal':
                this.common.movementIndex.of = (0, _genericTagMapperJs.CommonTagMapper).toIntOrNull(tag.value);
                this.notifyCommonTag({
                    id: 'movementIndex',
                    value: {
                        ...this.common.movementIndex
                    }
                });
                return;
            case 'track':
            case 'disk':
            case 'movementIndex':
                {
                    const of = this.common[tag.id].of; // store of value, maybe maybe overwritten
                    this.common[tag.id] = (0, _genericTagMapperJs.CommonTagMapper).normalizeTrack(tag.value);
                    this.common[tag.id].of = of != null ? of : this.common[tag.id].of;
                    this.notifyCommonTag({
                        id: tag.id,
                        value: {
                            ...this.common[tag.id]
                        }
                    });
                    return;
                }
            case 'bpm':
            case 'year':
            case 'originalyear':
                tag.value = Number.parseInt(tag.value, 10);
                break;
            case 'date':
                {
                    // ToDo: be more strict on 'YYYY...'
                    const year = Number.parseInt(tag.value.substr(0, 4), 10);
                    if (!Number.isNaN(year)) this.common.year = year;
                    break;
                }
            case 'discogs_label_id':
            case 'discogs_release_id':
            case 'discogs_master_release_id':
            case 'discogs_artist_id':
            case 'discogs_votes':
                tag.value = typeof tag.value === 'string' ? Number.parseInt(tag.value, 10) : tag.value;
                break;
            case 'replaygain_track_gain':
            case 'replaygain_track_peak':
            case 'replaygain_album_gain':
            case 'replaygain_album_peak':
                tag.value = (0, _utilJs.toRatio)(tag.value);
                break;
            case 'replaygain_track_minmax':
                tag.value = tag.value.split(',', 2).map((v)=>Number.parseInt(v, 10));
                break;
            case 'replaygain_undo':
                {
                    const minMix = tag.value.split(',', 2).map((v)=>Number.parseInt(v, 10));
                    tag.value = {
                        leftChannel: minMix[0],
                        rightChannel: minMix[1]
                    };
                    break;
                }
            case 'gapless':
            case 'compilation':
            case 'podcast':
            case 'showMovement':
                tag.value = tag.value === '1' || tag.value === 1 || tag.value === true; // boolean
                break;
            case 'isrc':
                {
                    // Only keep unique values
                    const commonTag = this.common[tag.id];
                    if (commonTag && commonTag.indexOf(tag.value) !== -1) return;
                    break;
                }
            case 'comment':
                if (typeof tag.value === 'string') tag.value = {
                    text: tag.value
                };
                if (tag.value.descriptor === 'iTunPGAP') this.setGenericTag(tagType, {
                    id: 'gapless',
                    value: tag.value.text === '1'
                });
                break;
            case 'lyrics':
                if (typeof tag.value === 'string') tag.value = (0, _lyricsParserJs.parseLyrics)(tag.value, (0, _allocationJs.getMaxMetadataEntries)(this.opts ?? {}));
                else if (tag.value && typeof tag.value === 'object' && !Array.isArray(tag.value)) tag.value = (0, _lyricsParserJs.normalizeLyricsTag)(tag.value);
                break;
            default:
        }
        if (tag.value !== null) this.setGenericTag(tagType, tag);
    }
    /**
     * Convert native tags to common tags
     * @returns {IAudioMetadata} Native + common tags
     */ toCommonMetadata() {
        return {
            format: this.format,
            native: this.native,
            quality: this.quality,
            common: this.common
        };
    }
    /**
     * Handle singular artist tags (artist, albumartist) and cross-populate to plural form
     */ handleSingularArtistTag(tagType, tag, singularId, pluralId) {
        if (this.commonOrigin[singularId] === this.originPriority[tagType]) // Assume the singular field is used as plural (multiple values from same source)
        return this.postMap('artificial', {
            id: pluralId,
            value: tag.value
        });
        if (!this.common[pluralId]) // Fill plural using singular source
        this.setGenericTag('artificial', {
            id: pluralId,
            value: tag.value
        });
        this.setGenericTag(tagType, tag);
    }
    /**
     * Handle plural artist tags (artists, albumartists) and cross-populate to singular form
     */ handlePluralArtistTag(tagType, tag, singularId, pluralId) {
        if (!this.common[singularId] || this.commonOrigin[singularId] === this.originPriority.artificial) {
            if (!this.common[pluralId] || this.common[pluralId].indexOf(tag.value) === -1) {
                // Fill singular using plural source
                const values = (this.common[pluralId] || []).concat([
                    tag.value
                ]);
                const value = joinArtists(values);
                this.setGenericTag('artificial', {
                    id: singularId,
                    value
                });
            }
        }
        this.setGenericTag(tagType, tag);
    }
    /**
     * Fix some common issues with picture object
     * @param picture Picture
     */ async postFixPicture(picture) {
        if (picture.data && picture.data.length > 0) {
            if (!picture.format) {
                const fileType = await (0, _fileType.fileTypeFromBuffer)(Uint8Array.from(picture.data), {
                    maxBufferSize: (0, _allocationJs.getMaxMemoryAllocation)(this.opts ?? {})
                }); // ToDO: remove Buffer
                if (fileType) picture.format = fileType.mime;
                else return null;
            }
            picture.format = picture.format.toLocaleLowerCase();
            switch(picture.format){
                case 'image/jpg':
                    picture.format = 'image/jpeg'; // ToDo: register warning
            }
            return picture;
        }
        this.addWarning('Empty picture tag found');
        return null;
    }
    /**
     * Convert native tag to common tags
     */ async toCommon(tagType, tagId, value) {
        // Expand involved-person roles for mapping without adding synthetic native tags.
        if ((tagType === 'ID3v2.2' && tagId === 'IPL' || tagType === 'ID3v2.3' && tagId === 'IPLS' || tagType === 'ID3v2.4' && tagId === 'TIPL') && value !== null && typeof value === 'object') {
            for (const [role, people] of Object.entries(value))if (Array.isArray(people)) {
                for (const person of people)if (typeof person === 'string' && person.length > 0) await this.toCommon(tagType, `${tagId}:${role}`, person);
            }
            return;
        }
        const tag = {
            id: tagId,
            value
        };
        const genericTag = this.tagMapper.mapTag(tagType, tag, this);
        if (genericTag) {
            if (Array.isArray(genericTag.value)) for (const value of genericTag.value)await this.postMap(tagType, {
                id: genericTag.id,
                value
            });
            else await this.postMap(tagType, genericTag);
        }
    }
    /**
     * Set generic tag
     */ setGenericTag(tagType, tag) {
        debug(`common.${tag.id} = ${tag.value}`);
        const prio0 = this.commonOrigin[tag.id] || 1000;
        const prio1 = this.originPriority[tagType];
        if ((0, _genericTagTypesJs.isSingleton)(tag.id)) {
            if (prio1 <= prio0) {
                this.common[tag.id] = tag.value;
                this.commonOrigin[tag.id] = prio1;
            } else return debug(`Ignore native tag (singleton): ${tagType}.${tag.id} = ${tag.value}`);
        } else {
            if (prio1 === prio0) {
                if (!(0, _genericTagTypesJs.isUnique)(tag.id) || this.common[tag.id].indexOf(tag.value) === -1) this.common[tag.id].push(tag.value);
                else return debug(`Ignore duplicate value: ${tagType}.${tag.id} = ${tag.value}`);
            // no effect? this.commonOrigin[tag.id] = prio1;
            } else if (prio1 < prio0) {
                this.common[tag.id] = [
                    tag.value
                ];
                this.commonOrigin[tag.id] = prio1;
            } else return debug(`Ignore native tag (list): ${tagType}.${tag.id} = ${tag.value}`);
        }
        this.notifyCommonTag(tag);
    }
    notifyCommonTag(tag) {
        if (this.opts?.observer) this.opts.observer({
            metadata: this,
            tag: {
                type: 'common',
                id: tag.id,
                value: tag.value
            }
        });
    }
}
function joinArtists(artists) {
    if (artists.length > 2) return `${artists.slice(0, artists.length - 1).join(', ')} & ${artists[artists.length - 1]}`;
    return artists.join(' & ');
}

},{"debug":"4XIdh","file-type":"fFy6J","../lrc/LyricsParser.js":"17QZm","../type.js":"a50Lj","./Allocation.js":"8ZVyl","./CombinedTagMapper.js":"a57fU","./GenericTagMapper.js":"9w2Kx","./GenericTagTypes.js":"hVoB5","./TrackInfo.js":"9lsMn","./Util.js":"Q4yiL","@parcel/transformer-js/src/esmodule-helpers.js":"53hI8"}],"17QZm":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "LyricsContentError", ()=>LyricsContentError);
parcelHelpers.export(exports, "parseLyrics", ()=>parseLyrics);
/**
 * Complete a reader-produced lyrics value with the fields required by
 * `ILyricsTag`. ID3 USLT/ULT values are plain comments before this step.
 */ parcelHelpers.export(exports, "normalizeLyricsTag", ()=>normalizeLyricsTag);
parcelHelpers.export(exports, "toUnsyncedLyrics", ()=>toUnsyncedLyrics);
/**
 * Parse LRC (Lyrics) formatted text
 * Ref: https://en.wikipedia.org/wiki/LRC_(file_format)
 * @param lrcString
 */ parcelHelpers.export(exports, "parseLrc", ()=>parseLrc);
var _allocationJs = require("../common/Allocation.js");
var _parseErrorJs = require("../ParseError.js");
var _typeJs = require("../type.js");
// Shared timestamp regex for LRC format
const TIMESTAMP_REGEX = /\[(\d{2}):(\d{2})\.(\d{2,3})]/;
class LyricsContentError extends (0, _parseErrorJs.makeUnexpectedFileContentError)('lyrics') {
}
function parseLyrics(input, maxLines = (0, _allocationJs.defaultMaxMetadataEntries)) {
    if (TIMESTAMP_REGEX.test(input)) return parseLrc(input, maxLines);
    return toUnsyncedLyrics(input);
}
function normalizeLyricsTag(lyrics) {
    return {
        ...lyrics,
        contentType: lyrics.contentType ?? (0, _typeJs.LyricsContentType).lyrics,
        timeStampFormat: lyrics.timeStampFormat ?? (0, _typeJs.TimestampFormat).notSynchronized,
        syncText: lyrics.syncText ?? []
    };
}
function toUnsyncedLyrics(lyrics) {
    return {
        contentType: (0, _typeJs.LyricsContentType).lyrics,
        timeStampFormat: (0, _typeJs.TimestampFormat).notSynchronized,
        text: lyrics.trim(),
        syncText: []
    };
}
function parseLrc(lrcString, maxLines = (0, _allocationJs.defaultMaxMetadataEntries)) {
    let lineCount = 1;
    for(let offset = lrcString.indexOf('\n'); offset >= 0; offset = lrcString.indexOf('\n', offset + 1))++lineCount;
    if (lineCount > maxLines) throw new LyricsContentError(`Line count ${lineCount} exceeds entry limit ${maxLines}`);
    const lines = lrcString.split('\n');
    const syncText = [];
    for (const line of lines){
        const match = line.match(TIMESTAMP_REGEX);
        if (match) {
            const minutes = Number.parseInt(match[1], 10);
            const seconds = Number.parseInt(match[2], 10);
            const ms = match[3].length === 3 ? Number.parseInt(match[3], 10) : Number.parseInt(match[3], 10) * 10;
            const timestamp = (minutes * 60 + seconds) * 1000 + ms;
            const text = line.replace(TIMESTAMP_REGEX, '').trim();
            syncText.push({
                timestamp,
                text
            });
        }
    }
    return {
        contentType: (0, _typeJs.LyricsContentType).lyrics,
        timeStampFormat: (0, _typeJs.TimestampFormat).milliseconds,
        text: syncText.map((line)=>line.text).join('\n'),
        syncText
    };
}

},{"../common/Allocation.js":"8ZVyl","../ParseError.js":"E03ox","../type.js":"a50Lj","@parcel/transformer-js/src/esmodule-helpers.js":"53hI8"}],"a50Lj":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "LyricsContentType", ()=>(0, _id3V2TokenJs.LyricsContentType));
parcelHelpers.export(exports, "TimestampFormat", ()=>(0, _id3V2TokenJs.TimestampFormat));
parcelHelpers.export(exports, "TrackType", ()=>TrackType);
parcelHelpers.export(exports, "TrackTypeValueToKeyMap", ()=>TrackTypeValueToKeyMap);
var _id3V2TokenJs = require("./id3v2/ID3v2Token.js");
const TrackType = {
    video: 0x01,
    audio: 0x02,
    complex: 0x03,
    logo: 0x04,
    subtitle: 0x11,
    button: 0x12,
    control: 0x20,
    /** Timed metadata (library extension to the Matroska track types). */ metadata: 0x21
};
const TrackTypeValueToKeyMap = {
    [TrackType.video]: 'video',
    [TrackType.audio]: 'audio',
    [TrackType.complex]: 'complex',
    [TrackType.logo]: 'logo',
    [TrackType.subtitle]: 'subtitle',
    [TrackType.button]: 'button',
    [TrackType.control]: 'control',
    [TrackType.metadata]: 'metadata'
};

},{"./id3v2/ID3v2Token.js":"eUTtS","@parcel/transformer-js/src/esmodule-helpers.js":"53hI8"}],"eUTtS":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AttachedPictureType", ()=>(0, _id3V2Js.AttachedPictureType));
parcelHelpers.export(exports, "UINT32SYNCSAFE", ()=>(0, _id3V2Js.UINT32SYNCSAFE));
parcelHelpers.export(exports, "LyricsContentType", ()=>LyricsContentType);
parcelHelpers.export(exports, "TimestampFormat", ()=>TimestampFormat);
parcelHelpers.export(exports, "ID3v2Header", ()=>ID3v2Header);
parcelHelpers.export(exports, "TextEncodingToken", ()=>TextEncodingToken);
parcelHelpers.export(exports, "TextHeader", ()=>TextHeader);
parcelHelpers.export(exports, "SyncTextHeader", ()=>SyncTextHeader);
var _tokenTypes = require("token-types");
var _utilJs = require("../common/Util.js");
var _id3V2Js = require("../tokens/id3v2.js");
const LyricsContentType = {
    other: 0,
    lyrics: 1,
    text: 2,
    movement_part: 3,
    events: 4,
    chord: 5,
    trivia_pop: 6
};
const TimestampFormat = {
    notSynchronized: 0,
    mpegFrameNumber: 1,
    milliseconds: 2
};
const ID3v2Header = {
    len: 10,
    get: (buf, off)=>{
        return {
            // ID3v2/file identifier   "ID3"
            fileIdentifier: new _tokenTypes.StringType(3, 'ascii').get(buf, off),
            // ID3v2 versionIndex
            version: {
                major: _tokenTypes.INT8.get(buf, off + 3),
                revision: _tokenTypes.INT8.get(buf, off + 4)
            },
            // ID3v2 flags
            flags: {
                // Unsynchronisation
                unsynchronisation: _utilJs.getBit(buf, off + 5, 7),
                // Extended header
                isExtendedHeader: _utilJs.getBit(buf, off + 5, 6),
                // Experimental indicator
                expIndicator: _utilJs.getBit(buf, off + 5, 5),
                footer: _utilJs.getBit(buf, off + 5, 4)
            },
            size: (0, _id3V2Js.UINT32SYNCSAFE).get(buf, off + 6)
        };
    }
};
const TextEncodingToken = {
    len: 1,
    get: (uint8Array, off)=>{
        switch(uint8Array[off]){
            case 0x00:
                return {
                    encoding: 'latin1'
                }; // binary
            case 0x01:
                return {
                    encoding: 'utf-16le',
                    bom: true
                };
            case 0x02:
                return {
                    encoding: 'utf-16be',
                    bom: false
                };
            case 0x03:
                return {
                    encoding: 'utf8',
                    bom: false
                };
            default:
                return {
                    encoding: 'utf8',
                    bom: false
                };
        }
    }
};
const TextHeader = {
    len: 4,
    get: (uint8Array, off)=>{
        return {
            encoding: TextEncodingToken.get(uint8Array, off),
            language: new _tokenTypes.StringType(3, 'latin1').get(uint8Array, off + 1)
        };
    }
};
const SyncTextHeader = {
    len: 6,
    get: (uint8Array, off)=>{
        const text = TextHeader.get(uint8Array, off);
        return {
            encoding: text.encoding,
            language: text.language,
            timeStampFormat: _tokenTypes.UINT8.get(uint8Array, off + 4),
            contentType: _tokenTypes.UINT8.get(uint8Array, off + 5)
        };
    }
};

},{"token-types":"al35Q","../common/Util.js":"Q4yiL","../tokens/id3v2.js":"7AuoS","@parcel/transformer-js/src/esmodule-helpers.js":"53hI8"}],"7AuoS":[function(require,module,exports,__globalThis) {
/**
 * The picture type according to the ID3v2 APIC frame.
 * Ref: https://id3.org/id3v2.3.0#Attached_picture
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AttachedPictureType", ()=>AttachedPictureType);
parcelHelpers.export(exports, "attachedPictureType", ()=>attachedPictureType);
parcelHelpers.export(exports, "UINT32SYNCSAFE", ()=>UINT32SYNCSAFE);
const AttachedPictureType = {
    0: 'Other',
    1: "32x32 pixels 'file icon' (PNG only)",
    2: 'Other file icon',
    3: 'Cover (front)',
    4: 'Cover (back)',
    5: 'Leaflet page',
    6: 'Media (e.g. label side of CD)',
    7: 'Lead artist/lead performer/soloist',
    8: 'Artist/performer',
    9: 'Conductor',
    10: 'Band/Orchestra',
    11: 'Composer',
    12: 'Lyricist/text writer',
    13: 'Recording Location',
    14: 'During recording',
    15: 'During performance',
    16: 'Movie/video screen capture',
    17: 'A bright coloured fish',
    18: 'Illustration',
    19: 'Band/artist logotype',
    20: 'Publisher/Studio logotype'
};
const attachedPictureTypes = AttachedPictureType;
function attachedPictureType(typeId) {
    return attachedPictureTypes[typeId];
}
function ensureAvailable(buffer, offset, length) {
    if (!Number.isSafeInteger(offset) || !Number.isSafeInteger(length) || offset < 0 || length < 0 || offset + length > buffer.length) throw new RangeError(`Cannot read ${length} byte(s) at offset ${offset} from a ${buffer.length}-byte buffer`);
}
const UINT32SYNCSAFE = {
    len: 4,
    get (buffer, offset) {
        ensureAvailable(buffer, offset, UINT32SYNCSAFE.len);
        return buffer[offset + 3] & 0x7f | buffer[offset + 2] << 7 | buffer[offset + 1] << 14 | buffer[offset] << 21;
    },
    put (buffer, offset, value) {
        ensureAvailable(buffer, offset, UINT32SYNCSAFE.len);
        if (!Number.isSafeInteger(value) || value < 0 || value > 0x0fffffff) throw new RangeError(`Sync-safe integer must be between 0 and ${0x0fffffff}, got ${value}`);
        buffer[offset] = value >>> 21 & 0x7f;
        buffer[offset + 1] = value >>> 14 & 0x7f;
        buffer[offset + 2] = value >>> 7 & 0x7f;
        buffer[offset + 3] = value & 0x7f;
        return offset + UINT32SYNCSAFE.len;
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"53hI8"}],"a57fU":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CombinedTagMapper", ()=>CombinedTagMapper);
var _aiffTagMapJs = require("../aiff/AiffTagMap.js");
var _apev2TagMapperJs = require("../apev2/APEv2TagMapper.js");
var _asfTagMapperJs = require("../asf/AsfTagMapper.js");
var _cafTagMapJs = require("../caf/CafTagMap.js");
var _id3V1TagMapJs = require("../id3v1/ID3v1TagMap.js");
var _id3V22TagMapperJs = require("../id3v2/ID3v22TagMapper.js");
var _id3V24TagMapperJs = require("../id3v2/ID3v24TagMapper.js");
var _matroskaTagMapperJs = require("../matroska/MatroskaTagMapper.js");
var _mp4TagMapperJs = require("../mp4/MP4TagMapper.js");
var _vorbisTagMapperJs = require("../ogg/vorbis/VorbisTagMapper.js");
var _parseErrorJs = require("../ParseError.js");
var _riffInfoTagMapJs = require("../riff/RiffInfoTagMap.js");
class CombinedTagMapper {
    tagMappers = {};
    constructor(){
        [
            new (0, _id3V1TagMapJs.ID3v1TagMapper)(),
            new (0, _id3V22TagMapperJs.ID3v22TagMapper)(),
            new (0, _id3V24TagMapperJs.ID3v24TagMapper)(),
            new (0, _mp4TagMapperJs.MP4TagMapper)(),
            new (0, _vorbisTagMapperJs.VorbisTagMapper)(),
            new (0, _apev2TagMapperJs.APEv2TagMapper)(),
            new (0, _asfTagMapperJs.AsfTagMapper)(),
            new (0, _riffInfoTagMapJs.RiffInfoTagMapper)(),
            new (0, _matroskaTagMapperJs.MatroskaTagMapper)(),
            new (0, _aiffTagMapJs.AiffTagMapper)(),
            new (0, _cafTagMapJs.CafTagMapper)()
        ].forEach((mapper)=>{
            this.registerTagMapper(mapper);
        });
    }
    /**
     * Convert native to generic (common) tags
     * @param tagType Originating tag format
     * @param tag     Native tag to map to a generic tag id
     * @param warnings
     * @return Generic tag result (output of this function)
     */ mapTag(tagType, tag, warnings) {
        const tagMapper = this.tagMappers[tagType];
        if (tagMapper) return this.tagMappers[tagType].mapGenericTag(tag, warnings);
        throw new (0, _parseErrorJs.InternalParserError)(`No generic tag mapper defined for tag-format: ${tagType}`);
    }
    registerTagMapper(genericTagMapper) {
        for (const tagType of genericTagMapper.tagTypes)this.tagMappers[tagType] = genericTagMapper;
    }
}

},{"../aiff/AiffTagMap.js":"3kAGg","../apev2/APEv2TagMapper.js":"kIsLB","../asf/AsfTagMapper.js":"lvBNE","../caf/CafTagMap.js":"k3ABo","../id3v1/ID3v1TagMap.js":"9tY30","../id3v2/ID3v22TagMapper.js":"i72Pg","../id3v2/ID3v24TagMapper.js":"iYnQZ","../matroska/MatroskaTagMapper.js":"4ZGC3","../mp4/MP4TagMapper.js":"hChjI","../ogg/vorbis/VorbisTagMapper.js":"b3luA","../ParseError.js":"E03ox","../riff/RiffInfoTagMap.js":"3K7hb","@parcel/transformer-js/src/esmodule-helpers.js":"53hI8"}],"3kAGg":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AiffTagMapper", ()=>AiffTagMapper);
var _genericTagMapperJs = require("../common/GenericTagMapper.js");
/**
 * ID3v1 tag mappings
 */ const tagMap = {
    NAME: 'title',
    AUTH: 'artist',
    '(c) ': 'copyright',
    ANNO: 'comment'
};
class AiffTagMapper extends (0, _genericTagMapperJs.CommonTagMapper) {
    constructor(){
        super([
            'AIFF'
        ], tagMap);
    }
}

},{"../common/GenericTagMapper.js":"9w2Kx","@parcel/transformer-js/src/esmodule-helpers.js":"53hI8"}],"9w2Kx":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CommonTagMapper", ()=>CommonTagMapper);
class CommonTagMapper {
    static maxRatingScore = 1;
    static toIntOrNull(str) {
        const cleaned = Number.parseInt(str, 10);
        return Number.isNaN(cleaned) ? null : cleaned;
    }
    // TODO: a string of 1of1 would fail to be converted
    // converts 1/10 to no : 1, of : 10
    // or 1 to no : 1, of : 0
    static normalizeTrack(origVal) {
        const split = origVal.toString().split('/', 2);
        return {
            no: Number.parseInt(split[0], 10) || null,
            of: Number.parseInt(split[1], 10) || null
        };
    }
    tagTypes;
    tagMap;
    constructor(tagTypes, tagMap){
        this.tagTypes = tagTypes;
        this.tagMap = tagMap;
    }
    /**
     * Process and set common tags
     * write common tags to
     * @param tag Native tag
     * @param warnings Register warnings
     * @return common name
     */ mapGenericTag(tag, warnings) {
        tag = {
            id: tag.id,
            value: tag.value
        }; // clone object
        this.postMap(tag, warnings);
        // Convert native tag event to generic 'alias' tag
        const id = this.getCommonName(tag.id);
        return id ? {
            id,
            value: tag.value
        } : null;
    }
    /**
     * Convert native tag key to common tag key
     * @param tag Native header tag
     * @return common tag name (alias)
     */ getCommonName(tag) {
        return Object.hasOwn(this.tagMap, tag) ? this.tagMap[tag] : undefined;
    }
    /**
     * Handle post mapping exceptions / correction
     * @param tag Tag e.g. {"©alb", "Buena Vista Social Club")
     * @param warnings Used to register warnings
     */ postMap(_tag, _warnings) {
        return;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"53hI8"}],"kIsLB":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "APEv2TagMapper", ()=>APEv2TagMapper);
var _caseInsensitiveTagMapJs = require("../common/CaseInsensitiveTagMap.js");
/**
 * ID3v2.2 tag mappings
 */ const apev2TagMap = {
    Title: 'title',
    Artist: 'artist',
    Artists: 'artists',
    'Album Artist': 'albumartist',
    Album: 'album',
    Year: 'date',
    Date: 'date',
    Originalyear: 'originalyear',
    Originaldate: 'originaldate',
    Releasedate: 'releasedate',
    Comment: 'comment',
    Track: 'track',
    Disc: 'disk',
    DISCNUMBER: 'disk',
    Genre: 'genre',
    'Cover Art (Front)': 'picture',
    'Cover Art (Back)': 'picture',
    Composer: 'composer',
    Lyrics: 'lyrics',
    ALBUMSORT: 'albumsort',
    TITLESORT: 'titlesort',
    WORK: 'work',
    ARTISTSORT: 'artistsort',
    ALBUMARTISTSORT: 'albumartistsort',
    COMPOSERSORT: 'composersort',
    Lyricist: 'lyricist',
    Writer: 'writer',
    Conductor: 'conductor',
    // 'Performer=artist (instrument)': 'performer:instrument',
    MixArtist: 'remixer',
    Arranger: 'arranger',
    Engineer: 'engineer',
    Producer: 'producer',
    DJMixer: 'djmixer',
    Mixer: 'mixer',
    Label: 'label',
    Grouping: 'grouping',
    Subtitle: 'subtitle',
    DiscSubtitle: 'discsubtitle',
    Compilation: 'compilation',
    BPM: 'bpm',
    Mood: 'mood',
    Media: 'media',
    CatalogNumber: 'catalognumber',
    MUSICBRAINZ_ALBUMSTATUS: 'releasestatus',
    MUSICBRAINZ_ALBUMTYPE: 'releasetype',
    RELEASECOUNTRY: 'releasecountry',
    Script: 'script',
    Language: 'language',
    Copyright: 'copyright',
    LICENSE: 'license',
    EncodedBy: 'encodedby',
    EncoderSettings: 'encodersettings',
    Barcode: 'barcode',
    ISRC: 'isrc',
    ASIN: 'asin',
    musicbrainz_trackid: 'musicbrainz_recordingid',
    musicbrainz_releasetrackid: 'musicbrainz_trackid',
    MUSICBRAINZ_ALBUMID: 'musicbrainz_albumid',
    MUSICBRAINZ_ARTISTID: 'musicbrainz_artistid',
    MUSICBRAINZ_ALBUMARTISTID: 'musicbrainz_albumartistid',
    MUSICBRAINZ_RELEASEGROUPID: 'musicbrainz_releasegroupid',
    MUSICBRAINZ_WORKID: 'musicbrainz_workid',
    MUSICBRAINZ_TRMID: 'musicbrainz_trmid',
    MUSICBRAINZ_DISCID: 'musicbrainz_discid',
    Acoustid_Id: 'acoustid_id',
    ACOUSTID_FINGERPRINT: 'acoustid_fingerprint',
    MUSICIP_PUID: 'musicip_puid',
    Weblink: 'website',
    REPLAYGAIN_TRACK_GAIN: 'replaygain_track_gain',
    REPLAYGAIN_TRACK_PEAK: 'replaygain_track_peak',
    MP3GAIN_MINMAX: 'replaygain_track_minmax',
    MP3GAIN_UNDO: 'replaygain_undo'
};
class APEv2TagMapper extends (0, _caseInsensitiveTagMapJs.CaseInsensitiveTagMap) {
    constructor(){
        super([
            'APEv2'
        ], apev2TagMap);
    }
}

},{"../common/CaseInsensitiveTagMap.js":"3Cs0F","@parcel/transformer-js/src/esmodule-helpers.js":"53hI8"}],"3Cs0F":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CaseInsensitiveTagMap", ()=>CaseInsensitiveTagMap);
var _genericTagMapperJs = require("./GenericTagMapper.js");
class CaseInsensitiveTagMap extends (0, _genericTagMapperJs.CommonTagMapper) {
    constructor(tagTypes, tagMap){
        const upperCaseMap = {};
        for (const [tag, commonName] of Object.entries(tagMap))upperCaseMap[tag.toUpperCase()] = commonName;
        super(tagTypes, upperCaseMap);
    }
    /**
     * @tag  Native header tag
     * @return common tag name (alias)
     */ getCommonName(tag) {
        return super.getCommonName(tag.toUpperCase());
    }
}

},{"./GenericTagMapper.js":"9w2Kx","@parcel/transformer-js/src/esmodule-helpers.js":"53hI8"}],"lvBNE":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AsfTagMapper", ()=>AsfTagMapper);
var _genericTagMapperJs = require("../common/GenericTagMapper.js");
var _utilJs = require("../common/Util.js");
/**
 * ASF Metadata tag mappings.
 * See http://msdn.microsoft.com/en-us/library/ms867702.aspx
 */ const asfTagMap = {
    Title: 'title',
    Author: 'artist',
    'WM/AlbumArtist': 'albumartist',
    'WM/AlbumTitle': 'album',
    'WM/Year': 'date',
    'WM/OriginalReleaseTime': 'originaldate',
    'WM/OriginalReleaseYear': 'originalyear',
    Description: 'comment',
    'WM/TrackNumber': 'track',
    TotalTracks: 'totaltracks',
    'WM/PartOfSet': 'disk',
    'WM/Genre': 'genre',
    'WM/Composer': 'composer',
    'WM/Lyrics': 'lyrics',
    'WM/AlbumSortOrder': 'albumsort',
    'WM/TitleSortOrder': 'titlesort',
    'WM/ArtistSortOrder': 'artistsort',
    'WM/AlbumArtistSortOrder': 'albumartistsort',
    'WM/ComposerSortOrder': 'composersort',
    'WM/Writer': 'lyricist',
    'WM/Conductor': 'conductor',
    'WM/ModifiedBy': 'remixer',
    'WM/Engineer': 'engineer',
    'WM/Producer': 'producer',
    'WM/DJMixer': 'djmixer',
    'WM/Mixer': 'mixer',
    'WM/Publisher': 'label',
    'WM/ContentGroupDescription': 'grouping',
    'WM/SubTitle': 'subtitle',
    'WM/SetSubTitle': 'discsubtitle',
    REPLAYGAIN_TRACK_GAIN: 'replaygain_track_gain',
    REPLAYGAIN_TRACK_PEAK: 'replaygain_track_peak',
    REPLAYGAIN_ALBUM_GAIN: 'replaygain_album_gain',
    REPLAYGAIN_ALBUM_PEAK: 'replaygain_album_peak',
    replaygain_track_gain: 'replaygain_track_gain',
    replaygain_track_peak: 'replaygain_track_peak',
    replaygain_album_gain: 'replaygain_album_gain',
    replaygain_album_peak: 'replaygain_album_peak',
    'WM/IsCompilation': 'compilation',
    'WM/SharedUserRating': 'rating',
    POPULARIMETER: 'rating',
    'WM/BeatsPerMinute': 'bpm',
    'WM/Mood': 'mood',
    'WM/Media': 'media',
    'WM/CatalogNo': 'catalognumber',
    'MusicBrainz/Album Status': 'releasestatus',
    'MusicBrainz/Album Type': 'releasetype',
    'MusicBrainz/Album Release Country': 'releasecountry',
    'WM/Script': 'script',
    'WM/Language': 'language',
    Copyright: 'copyright',
    LICENSE: 'license',
    'WM/EncodedBy': 'encodedby',
    'WM/EncodingSettings': 'encodersettings',
    'WM/Barcode': 'barcode',
    'WM/ISRC': 'isrc',
    'MusicBrainz/Track Id': 'musicbrainz_recordingid',
    'MusicBrainz/Release Track Id': 'musicbrainz_trackid',
    'MusicBrainz/Album Id': 'musicbrainz_albumid',
    'MusicBrainz/Artist Id': 'musicbrainz_artistid',
    'MusicBrainz/Album Artist Id': 'musicbrainz_albumartistid',
    'MusicBrainz/Release Group Id': 'musicbrainz_releasegroupid',
    'MusicBrainz/Work Id': 'musicbrainz_workid',
    'MusicBrainz/TRM Id': 'musicbrainz_trmid',
    'MusicBrainz/Disc Id': 'musicbrainz_discid',
    'Acoustid/Id': 'acoustid_id',
    'Acoustid/Fingerprint': 'acoustid_fingerprint',
    'MusicIP/PUID': 'musicip_puid',
    'WM/ARTISTS': 'artists',
    'WM/InitialKey': 'key',
    ASIN: 'asin',
    'WM/Work': 'work',
    'WM/AuthorURL': 'website',
    'WM/Picture': 'picture'
};
class AsfTagMapper extends (0, _genericTagMapperJs.CommonTagMapper) {
    static toRating(rating) {
        const value = typeof rating === 'number' ? rating : Number.parseFloat(rating);
        if (!Number.isFinite(value) || value <= 0) return {
            rating: undefined
        };
        return {
            rating: value / 99
        };
    }
    constructor(){
        super([
            'asf'
        ], asfTagMap);
    }
    postMap(tag, warnings) {
        if (this.getCommonName(tag.id)?.startsWith('replaygain_')) {
            const value = typeof tag.value === 'string' ? tag.value.trim().match(/^([+-]?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?)\s*(dB)?$/i) : null;
            const normalized = value ? `${value[1]}${value[2] ? ' dB' : ''}` : undefined;
            const ratio = normalized ? (0, _utilJs.toRatio)(normalized) : undefined;
            // A silent peak of zero is valid (its dB value is -Infinity).
            if (!ratio || !Number.isFinite(ratio.ratio) || Number.isNaN(ratio.dB)) {
                warnings.addWarning(`Invalid ASF ReplayGain value for ${tag.id}`);
                tag.id = ''; // Keep invalid values native without mapping them to common metadata.
            } else tag.value = normalized;
        }
        switch(tag.id){
            case 'POPULARIMETER':
                {
                    // popm-style attribute, written by e.g. foobar2000; value is "email|rating|counter"
                    const [email, rating] = tag.value.split('|', 2);
                    const value = Number(rating);
                    const valid = /^\d+$/.test(rating) && Number.isInteger(value) && value >= 0 && value <= 255;
                    if (!valid) warnings.addWarning(`Invalid ASF POPULARIMETER rating: ${rating}`);
                    tag.value = {
                        source: email,
                        rating: valid && value > 0 ? (value - 1) / 254 * (0, _genericTagMapperJs.CommonTagMapper).maxRatingScore : undefined
                    };
                    break;
                }
            case 'WM/SharedUserRating':
                {
                    const keys = tag.id.split(':', 2);
                    tag.value = AsfTagMapper.toRating(tag.value);
                    tag.id = keys[0];
                    break;
                }
        }
    }
}

},{"../common/GenericTagMapper.js":"9w2Kx","../common/Util.js":"Q4yiL","@parcel/transformer-js/src/esmodule-helpers.js":"53hI8"}],"k3ABo":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CafTagMapper", ()=>CafTagMapper);
var _genericTagMapperJs = require("../common/GenericTagMapper.js");
// "time signature", "nominal bit rate" and "channel layout" have no common
// equivalent and stay native. Undocumented keys are always kept natively too.
const infoTagMap = {
    tempo: 'bpm',
    'key signature': 'key',
    artist: 'artist',
    album: 'album',
    'track number': 'track',
    year: 'year',
    composer: 'composer',
    lyricist: 'lyricist',
    genre: 'genre',
    title: 'title',
    'recorded date': 'date',
    comments: 'comment',
    copyright: 'copyright',
    'source encoder': 'encodersettings',
    'encoding application': 'encodedby'
};
const commaSeparatedKeys = new Set([
    'artist',
    'composer',
    'lyricist',
    'genre'
]);
class CafTagMapper extends (0, _genericTagMapperJs.CommonTagMapper) {
    constructor(){
        super([
            'CAF'
        ], infoTagMap);
    }
    mapGenericTag(tag, warnings) {
        if (commaSeparatedKeys.has(tag.id) && typeof tag.value === 'string') tag = {
            id: tag.id,
            value: tag.value.split(',').map((value)=>value.trim()).filter((value)=>value.length > 0)
        };
        return super.mapGenericTag(tag, warnings);
    }
}

},{"../common/GenericTagMapper.js":"9w2Kx","@parcel/transformer-js/src/esmodule-helpers.js":"53hI8"}],"9tY30":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ID3v1TagMapper", ()=>ID3v1TagMapper);
var _genericTagMapperJs = require("../common/GenericTagMapper.js");
/**
 * ID3v1 tag mappings
 */ const id3v1TagMap = {
    title: 'title',
    artist: 'artist',
    album: 'album',
    year: 'year',
    comment: 'comment',
    track: 'track',
    genre: 'genre'
};
class ID3v1TagMapper extends (0, _genericTagMapperJs.CommonTagMapper) {
    constructor(){
        super([
            'ID3v1'
        ], id3v1TagMap);
    }
}

},{"../common/GenericTagMapper.js":"9w2Kx","@parcel/transformer-js/src/esmodule-helpers.js":"53hI8"}],"i72Pg":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "id3v22TagMap", ()=>id3v22TagMap);
parcelHelpers.export(exports, "ID3v22TagMapper", ()=>ID3v22TagMapper);
var _caseInsensitiveTagMapJs = require("../common/CaseInsensitiveTagMap.js");
const id3v22TagMap = {
    TT2: 'title',
    TP1: 'artist',
    TP2: 'albumartist',
    TAL: 'album',
    TYE: 'year',
    COM: 'comment',
    ULT: 'lyrics',
    'IPL:arranger': 'arranger',
    'IPL:engineer': 'engineer',
    'IPL:producer': 'producer',
    'IPL:DJ-mix': 'djmixer',
    'IPL:mix': 'mixer',
    TRK: 'track',
    TPA: 'disk',
    TCO: 'genre',
    PIC: 'picture',
    TCM: 'composer',
    TOR: 'originaldate',
    TOT: 'originalalbum',
    TXT: 'lyricist',
    TP3: 'conductor',
    TPB: 'label',
    TT1: 'grouping',
    TT3: 'subtitle',
    TLA: 'language',
    TCR: 'copyright',
    WCP: 'license',
    TEN: 'encodedby',
    TSS: 'encodersettings',
    WAR: 'website',
    PCS: 'podcast',
    TCP: 'compilation',
    TDR: 'date',
    TS2: 'albumartistsort',
    TSA: 'albumsort',
    TSC: 'composersort',
    TSP: 'artistsort',
    TST: 'titlesort',
    WFD: 'podcasturl',
    TBP: 'bpm',
    GP1: 'grouping'
};
class ID3v22TagMapper extends (0, _caseInsensitiveTagMapJs.CaseInsensitiveTagMap) {
    constructor(){
        super([
            'ID3v2.2'
        ], id3v22TagMap);
    }
}

},{"../common/CaseInsensitiveTagMap.js":"3Cs0F","@parcel/transformer-js/src/esmodule-helpers.js":"53hI8"}],"iYnQZ":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "id3v24TagMap", ()=>id3v24TagMap);
parcelHelpers.export(exports, "ID3v24TagMapper", ()=>ID3v24TagMapper);
var _tokenTypes = require("token-types");
var _caseInsensitiveTagMapJs = require("../common/CaseInsensitiveTagMap.js");
var _genericTagMapperJs = require("../common/GenericTagMapper.js");
var _utilJs = require("../common/Util.js");
const id3v24TagMap = {
    // id3v2.3
    TIT2: 'title',
    TPE1: 'artist',
    'TXXX:Artists': 'artists',
    TPE2: 'albumartist',
    TALB: 'album',
    TDRV: 'date',
    /**
     * Original release year
     */ TORY: 'originalyear',
    TPOS: 'disk',
    TCON: 'genre',
    APIC: 'picture',
    TCOM: 'composer',
    USLT: 'lyrics',
    TSOA: 'albumsort',
    TSOT: 'titlesort',
    TOAL: 'originalalbum',
    TSOP: 'artistsort',
    TSO2: 'albumartistsort',
    TSOC: 'composersort',
    TEXT: 'lyricist',
    'TXXX:Writer': 'writer',
    TPE3: 'conductor',
    // 'IPLS:instrument': 'performer:instrument', // ToDo
    TPE4: 'remixer',
    'IPLS:arranger': 'arranger',
    'IPLS:engineer': 'engineer',
    'IPLS:producer': 'producer',
    'IPLS:DJ-mix': 'djmixer',
    'IPLS:mix': 'mixer',
    TPUB: 'label',
    TIT1: 'grouping',
    TIT3: 'subtitle',
    TRCK: 'track',
    TCMP: 'compilation',
    POPM: 'rating',
    TBPM: 'bpm',
    TMED: 'media',
    'TXXX:CATALOGNUMBER': 'catalognumber',
    'TXXX:MusicBrainz Album Status': 'releasestatus',
    'TXXX:MusicBrainz Album Type': 'releasetype',
    /**
     * Release country as documented: https://picard.musicbrainz.org/docs/mappings/#cite_note-0
     */ 'TXXX:MusicBrainz Album Release Country': 'releasecountry',
    /**
     * Release country as implemented // ToDo: report
     */ 'TXXX:RELEASECOUNTRY': 'releasecountry',
    'TXXX:SCRIPT': 'script',
    TLAN: 'language',
    TCOP: 'copyright',
    WCOP: 'license',
    TENC: 'encodedby',
    TSSE: 'encodersettings',
    'TXXX:BARCODE': 'barcode',
    'TXXX:ISRC': 'isrc',
    TSRC: 'isrc',
    'TXXX:ASIN': 'asin',
    'TXXX:originalyear': 'originalyear',
    'UFID:http://musicbrainz.org': 'musicbrainz_recordingid',
    'TXXX:MusicBrainz Release Track Id': 'musicbrainz_trackid',
    'TXXX:MusicBrainz Album Id': 'musicbrainz_albumid',
    'TXXX:MusicBrainz Artist Id': 'musicbrainz_artistid',
    'TXXX:MusicBrainz Album Artist Id': 'musicbrainz_albumartistid',
    'TXXX:MusicBrainz Release Group Id': 'musicbrainz_releasegroupid',
    'TXXX:MusicBrainz Work Id': 'musicbrainz_workid',
    'TXXX:MusicBrainz TRM Id': 'musicbrainz_trmid',
    'TXXX:MusicBrainz Disc Id': 'musicbrainz_discid',
    'TXXX:ACOUSTID_ID': 'acoustid_id',
    'TXXX:Acoustid Id': 'acoustid_id',
    'TXXX:Acoustid Fingerprint': 'acoustid_fingerprint',
    'TXXX:MusicIP PUID': 'musicip_puid',
    'TXXX:MusicMagic Fingerprint': 'musicip_fingerprint',
    WOAR: 'website',
    // id3v2.4
    // ToDo: In same sequence as defined at http://id3.org/id3v2.4.0-frames
    TDRC: 'date',
    TYER: 'year',
    TDOR: 'originaldate',
    // 'TMCL:instrument': 'performer:instrument',
    'TIPL:arranger': 'arranger',
    'TIPL:engineer': 'engineer',
    'TIPL:producer': 'producer',
    'TIPL:DJ-mix': 'djmixer',
    'TIPL:mix': 'mixer',
    TMOO: 'mood',
    // additional mappings:
    SYLT: 'lyrics',
    TSST: 'discsubtitle',
    TKEY: 'key',
    COMM: 'comment',
    TOPE: 'originalartist',
    // Windows Media Player
    'PRIV:AverageLevel': 'averageLevel',
    'PRIV:PeakValue': 'peakLevel',
    'PRIV:PeakLevel': 'peakLevel',
    // Discogs
    'TXXX:DISCOGS_ARTIST_ID': 'discogs_artist_id',
    'TXXX:DISCOGS_ARTISTS': 'artists',
    'TXXX:DISCOGS_ARTIST_NAME': 'artists',
    'TXXX:DISCOGS_ALBUM_ARTISTS': 'albumartists',
    'TXXX:DISCOGS_CATALOG': 'catalognumber',
    'TXXX:DISCOGS_COUNTRY': 'releasecountry',
    'TXXX:DISCOGS_DATE': 'originaldate',
    'TXXX:DISCOGS_LABEL': 'label',
    'TXXX:DISCOGS_LABEL_ID': 'discogs_label_id',
    'TXXX:DISCOGS_MASTER_RELEASE_ID': 'discogs_master_release_id',
    'TXXX:DISCOGS_RATING': 'discogs_rating',
    'TXXX:DISCOGS_RELEASED': 'date',
    'TXXX:DISCOGS_RELEASE_ID': 'discogs_release_id',
    'TXXX:DISCOGS_VOTES': 'discogs_votes',
    'TXXX:CATALOGID': 'catalognumber',
    'TXXX:STYLE': 'genre',
    'TXXX:REPLAYGAIN_TRACK_PEAK': 'replaygain_track_peak',
    'TXXX:REPLAYGAIN_TRACK_GAIN': 'replaygain_track_gain',
    'TXXX:REPLAYGAIN_ALBUM_PEAK': 'replaygain_album_peak',
    'TXXX:REPLAYGAIN_ALBUM_GAIN': 'replaygain_album_gain',
    'TXXX:MP3GAIN_MINMAX': 'replaygain_track_minmax',
    'TXXX:MP3GAIN_ALBUM_MINMAX': 'replaygain_album_minmax',
    'TXXX:MP3GAIN_UNDO': 'replaygain_undo',
    MVNM: 'movement',
    MVIN: 'movementIndex',
    PCST: 'podcast',
    TCAT: 'category',
    TDES: 'description',
    TDRL: 'releasedate',
    TGID: 'podcastId',
    TKWD: 'keywords',
    WFED: 'podcasturl',
    GRP1: 'grouping',
    PCNT: 'playCounter'
};
class ID3v24TagMapper extends (0, _caseInsensitiveTagMapJs.CaseInsensitiveTagMap) {
    static toRating(popm) {
        return {
            source: popm.email,
            rating: popm.rating > 0 ? (popm.rating - 1) / 254 * (0, _genericTagMapperJs.CommonTagMapper).maxRatingScore : undefined
        };
    }
    constructor(){
        super([
            'ID3v2.3',
            'ID3v2.4'
        ], id3v24TagMap);
    }
    /**
     * Handle post mapping exceptions / correction
     * @param tag to post map
     * @param warnings Wil be used to register (collect) warnings
     */ postMap(tag, warnings) {
        switch(tag.id){
            case 'UFID':
                {
                    // decode MusicBrainz Recording Id
                    const idTag = tag.value;
                    if (idTag.owner_identifier === 'http://musicbrainz.org') {
                        tag.id += `:${idTag.owner_identifier}`;
                        tag.value = (0, _utilJs.decodeString)(idTag.identifier, 'latin1'); // latin1 == iso-8859-1
                    }
                }
                break;
            case 'PRIV':
                {
                    const customTag = tag.value;
                    switch(customTag.owner_identifier){
                        // decode Windows Media Player
                        case 'AverageLevel':
                        case 'PeakValue':
                        case 'PeakLevel':
                            tag.id += `:${customTag.owner_identifier}`;
                            tag.value = customTag.data.length === 4 ? (0, _tokenTypes.UINT32_LE).get(customTag.data, 0) : null;
                            if (tag.value === null) warnings.addWarning(`Failed to parse PRIV:${customTag.owner_identifier}`);
                            break;
                        default:
                            warnings.addWarning(`Unknown PRIV owner-identifier: ${customTag.owner_identifier.slice(0, 128)}`);
                    }
                }
                break;
            case 'POPM':
                tag.value = ID3v24TagMapper.toRating(tag.value);
                break;
            default:
                break;
        }
    }
}

},{"token-types":"al35Q","../common/CaseInsensitiveTagMap.js":"3Cs0F","../common/GenericTagMapper.js":"9w2Kx","../common/Util.js":"Q4yiL","@parcel/transformer-js/src/esmodule-helpers.js":"53hI8"}],"4ZGC3":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MatroskaTagMapper", ()=>MatroskaTagMapper);
var _caseInsensitiveTagMapJs = require("../common/CaseInsensitiveTagMap.js");
/**
 * EBML Tag map
 */ const ebmlTagMap = {
    'segment:title': 'title',
    'album:ARTIST': 'albumartist',
    'album:ARTISTSORT': 'albumartistsort',
    'album:TITLE': 'album',
    'album:DATE_RECORDED': 'originaldate',
    'album:DATE_RELEASED': 'releasedate',
    'album:PART_NUMBER': 'disk',
    'album:TOTAL_PARTS': 'totaltracks',
    // Flat names written by ffmpeg, and tools built on it such as yt-dlp
    'track:ALBUM': 'album',
    'track:ALBUM_ARTIST': 'albumartist',
    'track:COMPOSER': 'composer',
    'track:DATE': 'date',
    'track:DISC': 'disk',
    'track:ARTIST': 'artist',
    'track:ARTISTSORT': 'artistsort',
    'track:TITLE': 'title',
    'track:PART_NUMBER': 'track',
    'track:MUSICBRAINZ_TRACKID': 'musicbrainz_recordingid',
    'track:MUSICBRAINZ_ALBUMID': 'musicbrainz_albumid',
    'track:MUSICBRAINZ_ARTISTID': 'musicbrainz_artistid',
    'track:PUBLISHER': 'label',
    'track:GENRE': 'genre',
    'track:ENCODER': 'encodedby',
    'track:ENCODER_OPTIONS': 'encodersettings',
    'edition:TOTAL_PARTS': 'totaldiscs',
    picture: 'picture'
};
class MatroskaTagMapper extends (0, _caseInsensitiveTagMapJs.CaseInsensitiveTagMap) {
    constructor(){
        super([
            'matroska'
        ], ebmlTagMap);
    }
    mapGenericTag(tag, warnings) {
        if (tag.id.toUpperCase() === 'TRACK:DATE' && typeof tag.value !== 'string') return null;
        return super.mapGenericTag(tag, warnings);
    }
}

},{"../common/CaseInsensitiveTagMap.js":"3Cs0F","@parcel/transformer-js/src/esmodule-helpers.js":"53hI8"}],"hChjI":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "tagType", ()=>tagType);
parcelHelpers.export(exports, "MP4TagMapper", ()=>MP4TagMapper);
var _caseInsensitiveTagMapJs = require("../common/CaseInsensitiveTagMap.js");
/**
 * Ref: https://github.com/sergiomb2/libmp4v2/wiki/iTunesMetadata
 */ const mp4TagMap = {
    'mdta:title': 'title',
    'mdta:album': 'album',
    'mdta:artist': 'artist',
    'mdta:album_artist': 'albumartist',
    'mdta:albumartist': 'albumartist',
    'mdta:composer': 'composer',
    'mdta:date': 'date',
    'mdta:comment': 'comment',
    'mdta:description': 'description',
    'mdta:synopsis': 'longDescription',
    'mdta:genre': 'genre',
    'mdta:track': 'track',
    'mdta:disc': 'disk',
    'mdta:publisher': 'label',
    'mdta:subtitle': 'subtitle',
    'mdta:language': 'language',
    'mdta:copyright': 'copyright',
    'mdta:encoder': 'encodedby',
    'mdta:asin': 'asin',
    'mdta:com.apple.quicktime.title': 'title',
    'mdta:com.apple.quicktime.album': 'album',
    'mdta:com.apple.quicktime.artist': 'artist',
    'mdta:com.apple.quicktime.creationdate': 'date',
    'mdta:com.apple.quicktime.comment': 'comment',
    'mdta:com.apple.quicktime.description': 'description',
    'mdta:com.apple.quicktime.genre': 'genre',
    'mdta:com.apple.quicktime.copyright': 'copyright',
    "\xa9nam": 'title',
    "\xa9ART": 'artist',
    aART: 'albumartist',
    /**
     * ToDo: Album artist seems to be stored here while Picard documentation says: aART
     */ '----:com.apple.iTunes:Band': 'albumartist',
    "\xa9alb": 'album',
    "\xa9day": 'date',
    "\xa9cmt": 'comment',
    "\xa9com": 'comment',
    trkn: 'track',
    disk: 'disk',
    "\xa9gen": 'genre',
    covr: 'picture',
    "\xa9wrt": 'composer',
    "\xa9lyr": 'lyrics',
    soal: 'albumsort',
    sonm: 'titlesort',
    soar: 'artistsort',
    soaa: 'albumartistsort',
    soco: 'composersort',
    '----:com.apple.iTunes:LYRICIST': 'lyricist',
    '----:com.apple.iTunes:CONDUCTOR': 'conductor',
    '----:com.apple.iTunes:REMIXER': 'remixer',
    '----:com.apple.iTunes:ENGINEER': 'engineer',
    '----:com.apple.iTunes:PRODUCER': 'producer',
    '----:com.apple.iTunes:DJMIXER': 'djmixer',
    '----:com.apple.iTunes:MIXER': 'mixer',
    '----:com.apple.iTunes:LABEL': 'label',
    "\xa9grp": 'grouping',
    '----:com.apple.iTunes:SUBTITLE': 'subtitle',
    '----:com.apple.iTunes:DISCSUBTITLE': 'discsubtitle',
    cpil: 'compilation',
    tmpo: 'bpm',
    '----:com.apple.iTunes:MOOD': 'mood',
    '----:com.apple.iTunes:MEDIA': 'media',
    '----:com.apple.iTunes:CATALOGNUMBER': 'catalognumber',
    tvsh: 'tvShow',
    tvsn: 'tvSeason',
    tves: 'tvEpisode',
    sosn: 'tvShowSort',
    tven: 'tvEpisodeId',
    tvnn: 'tvNetwork',
    pcst: 'podcast',
    purl: 'podcasturl',
    '----:com.apple.iTunes:MusicBrainz Album Status': 'releasestatus',
    '----:com.apple.iTunes:MusicBrainz Album Type': 'releasetype',
    '----:com.apple.iTunes:MusicBrainz Album Release Country': 'releasecountry',
    '----:com.apple.iTunes:SCRIPT': 'script',
    '----:com.apple.iTunes:LANGUAGE': 'language',
    cprt: 'copyright',
    "\xa9cpy": 'copyright',
    '----:com.apple.iTunes:LICENSE': 'license',
    "\xa9too": 'encodedby',
    pgap: 'gapless',
    '----:com.apple.iTunes:BARCODE': 'barcode',
    '----:com.apple.iTunes:ISRC': 'isrc',
    '----:com.apple.iTunes:ASIN': 'asin',
    '----:com.apple.iTunes:NOTES': 'comment',
    '----:com.apple.iTunes:MusicBrainz Track Id': 'musicbrainz_recordingid',
    '----:com.apple.iTunes:MusicBrainz Release Track Id': 'musicbrainz_trackid',
    '----:com.apple.iTunes:MusicBrainz Album Id': 'musicbrainz_albumid',
    '----:com.apple.iTunes:MusicBrainz Artist Id': 'musicbrainz_artistid',
    '----:com.apple.iTunes:MusicBrainz Album Artist Id': 'musicbrainz_albumartistid',
    '----:com.apple.iTunes:MusicBrainz Release Group Id': 'musicbrainz_releasegroupid',
    '----:com.apple.iTunes:MusicBrainz Work Id': 'musicbrainz_workid',
    '----:com.apple.iTunes:MusicBrainz TRM Id': 'musicbrainz_trmid',
    '----:com.apple.iTunes:MusicBrainz Disc Id': 'musicbrainz_discid',
    '----:com.apple.iTunes:Acoustid Id': 'acoustid_id',
    '----:com.apple.iTunes:Acoustid Fingerprint': 'acoustid_fingerprint',
    '----:com.apple.iTunes:MusicIP PUID': 'musicip_puid',
    '----:com.apple.iTunes:fingerprint': 'musicip_fingerprint',
    '----:com.apple.iTunes:replaygain_track_gain': 'replaygain_track_gain',
    '----:com.apple.iTunes:replaygain_track_peak': 'replaygain_track_peak',
    '----:com.apple.iTunes:replaygain_album_gain': 'replaygain_album_gain',
    '----:com.apple.iTunes:replaygain_album_peak': 'replaygain_album_peak',
    '----:com.apple.iTunes:replaygain_track_minmax': 'replaygain_track_minmax',
    '----:com.apple.iTunes:replaygain_album_minmax': 'replaygain_album_minmax',
    '----:com.apple.iTunes:replaygain_undo': 'replaygain_undo',
    '----:com.apple.iTunes:Movement Name': 'movement',
    '----:com.apple.iTunes:Movement': 'movementIndex',
    '----:com.apple.iTunes:Movement Total': 'movementTotal',
    // Additional mappings:
    gnre: 'genre',
    '----:com.apple.iTunes:ALBUMARTISTSORT': 'albumartistsort',
    '----:com.apple.iTunes:ARTISTS': 'artists',
    '----:com.apple.iTunes:ORIGINALDATE': 'originaldate',
    '----:com.apple.iTunes:ORIGINALYEAR': 'originalyear',
    '----:com.apple.iTunes:RELEASEDATE': 'releasedate',
    // '----:com.apple.iTunes:PERFORMER': 'performer'
    desc: 'description',
    ldes: 'longDescription',
    "\xa9mvn": 'movement',
    "\xa9mvi": 'movementIndex',
    "\xa9mvc": 'movementTotal',
    "\xa9wrk": 'work',
    catg: 'category',
    egid: 'podcastId',
    hdvd: 'hdVideo',
    keyw: 'keywords',
    shwm: 'showMovement',
    stik: 'stik',
    rate: 'rating'
};
const tagType = 'iTunes';
class MP4TagMapper extends (0, _caseInsensitiveTagMapJs.CaseInsensitiveTagMap) {
    constructor(){
        super([
            tagType
        ], mp4TagMap);
    }
    postMap(tag, _warnings) {
        switch(tag.id){
            case 'rate':
                tag.value = {
                    source: undefined,
                    rating: Number.parseFloat(tag.value) / 100
                };
                break;
        }
    }
}

},{"../common/CaseInsensitiveTagMap.js":"3Cs0F","@parcel/transformer-js/src/esmodule-helpers.js":"53hI8"}],"b3luA":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "VorbisTagMapper", ()=>VorbisTagMapper);
var _genericTagMapperJs = require("../../common/GenericTagMapper.js");
/**
 * Vorbis tag mappings
 *
 * Mapping from native header format to one or possibly more 'common' entries
 * The common entries aim to read the same information from different media files
 * independent of the underlying format
 */ const vorbisTagMap = {
    TITLE: 'title',
    ARTIST: 'artist',
    ARTISTS: 'artists',
    ALBUMARTIST: 'albumartist',
    'ALBUM ARTIST': 'albumartist',
    ALBUM: 'album',
    DATE: 'date',
    ORIGINALDATE: 'originaldate',
    ORIGINALYEAR: 'originalyear',
    RELEASEDATE: 'releasedate',
    COMMENT: 'comment',
    DESCRIPTION: 'comment',
    TRACKNUMBER: 'track',
    DISCNUMBER: 'disk',
    GENRE: 'genre',
    METADATA_BLOCK_PICTURE: 'picture',
    COMPOSER: 'composer',
    LYRICS: 'lyrics',
    UNSYNCEDLYRICS: 'lyrics',
    ALBUMSORT: 'albumsort',
    TITLESORT: 'titlesort',
    WORK: 'work',
    ARTISTSORT: 'artistsort',
    ALBUMARTISTSORT: 'albumartistsort',
    COMPOSERSORT: 'composersort',
    LYRICIST: 'lyricist',
    WRITER: 'writer',
    CONDUCTOR: 'conductor',
    // 'PERFORMER=artist (instrument)': 'performer:instrument', // ToDo
    REMIXER: 'remixer',
    ARRANGER: 'arranger',
    ENGINEER: 'engineer',
    PRODUCER: 'producer',
    DJMIXER: 'djmixer',
    MIXER: 'mixer',
    LABEL: 'label',
    ORGANIZATION: 'label',
    PUBLISHER: 'label',
    GROUPING: 'grouping',
    SUBTITLE: 'subtitle',
    DISCSUBTITLE: 'discsubtitle',
    TRACKTOTAL: 'totaltracks',
    DISCTOTAL: 'totaldiscs',
    COMPILATION: 'compilation',
    RATING: 'rating',
    BPM: 'bpm',
    KEY: 'key',
    MOOD: 'mood',
    MEDIA: 'media',
    CATALOGNUMBER: 'catalognumber',
    RELEASESTATUS: 'releasestatus',
    RELEASETYPE: 'releasetype',
    RELEASECOUNTRY: 'releasecountry',
    SCRIPT: 'script',
    LANGUAGE: 'language',
    COPYRIGHT: 'copyright',
    LICENSE: 'license',
    ENCODEDBY: 'encodedby',
    ENCODERSETTINGS: 'encodersettings',
    BARCODE: 'barcode',
    ISRC: 'isrc',
    ASIN: 'asin',
    MUSICBRAINZ_TRACKID: 'musicbrainz_recordingid',
    MUSICBRAINZ_RELEASETRACKID: 'musicbrainz_trackid',
    MUSICBRAINZ_ALBUMID: 'musicbrainz_albumid',
    MUSICBRAINZ_ARTISTID: 'musicbrainz_artistid',
    MUSICBRAINZ_ALBUMARTISTID: 'musicbrainz_albumartistid',
    MUSICBRAINZ_RELEASEGROUPID: 'musicbrainz_releasegroupid',
    MUSICBRAINZ_WORKID: 'musicbrainz_workid',
    MUSICBRAINZ_TRMID: 'musicbrainz_trmid',
    MUSICBRAINZ_DISCID: 'musicbrainz_discid',
    ACOUSTID_ID: 'acoustid_id',
    ACOUSTID_ID_FINGERPRINT: 'acoustid_fingerprint',
    MUSICIP_PUID: 'musicip_puid',
    // 'FINGERPRINT=MusicMagic Fingerprint {fingerprint}': 'musicip_fingerprint', // ToDo
    WEBSITE: 'website',
    NOTES: 'notes',
    TOTALTRACKS: 'totaltracks',
    TOTALDISCS: 'totaldiscs',
    // Discogs
    DISCOGS_ARTIST_ID: 'discogs_artist_id',
    DISCOGS_ARTISTS: 'artists',
    DISCOGS_ARTIST_NAME: 'artists',
    DISCOGS_ALBUM_ARTISTS: 'albumartists',
    DISCOGS_CATALOG: 'catalognumber',
    DISCOGS_COUNTRY: 'releasecountry',
    DISCOGS_DATE: 'originaldate',
    DISCOGS_LABEL: 'label',
    DISCOGS_LABEL_ID: 'discogs_label_id',
    DISCOGS_MASTER_RELEASE_ID: 'discogs_master_release_id',
    DISCOGS_RATING: 'discogs_rating',
    DISCOGS_RELEASED: 'date',
    DISCOGS_RELEASE_ID: 'discogs_release_id',
    DISCOGS_VOTES: 'discogs_votes',
    CATALOGID: 'catalognumber',
    STYLE: 'genre',
    //
    REPLAYGAIN_TRACK_GAIN: 'replaygain_track_gain',
    REPLAYGAIN_TRACK_PEAK: 'replaygain_track_peak',
    REPLAYGAIN_ALBUM_GAIN: 'replaygain_album_gain',
    REPLAYGAIN_ALBUM_PEAK: 'replaygain_album_peak',
    // To Sure if these (REPLAYGAIN_MINMAX, REPLAYGAIN_ALBUM_MINMAX & REPLAYGAIN_UNDO) are used for Vorbis:
    REPLAYGAIN_MINMAX: 'replaygain_track_minmax',
    REPLAYGAIN_ALBUM_MINMAX: 'replaygain_album_minmax',
    REPLAYGAIN_UNDO: 'replaygain_undo'
};
class VorbisTagMapper extends (0, _genericTagMapperJs.CommonTagMapper) {
    hasStandardDate = false;
    static toRating(email, rating, maxScore) {
        return {
            source: email ? email.toLowerCase() : undefined,
            rating: Number.parseFloat(rating) / maxScore * (0, _genericTagMapperJs.CommonTagMapper).maxRatingScore
        };
    }
    constructor(){
        super([
            'vorbis'
        ], vorbisTagMap);
    }
    mapGenericTag(tag, warnings) {
        if (tag.id === 'DATE') {
            if (typeof tag.value !== 'string' || tag.value.trim().length === 0) return null;
            this.hasStandardDate = true;
        } else if (tag.id === 'DISCOGS_RELEASED' && this.hasStandardDate) return null;
        return super.mapGenericTag(tag, warnings);
    }
    postMap(tag) {
        if (tag.id === 'RATING') // The way Winamp 5.666 assigns rating
        tag.value = VorbisTagMapper.toRating(undefined, tag.value, 100);
        else if (tag.id.indexOf('RATING:') === 0) {
            const keys = tag.id.split(':', 2);
            tag.value = VorbisTagMapper.toRating(keys[1], tag.value, 1);
            tag.id = keys[0];
        }
    }
}

},{"../../common/GenericTagMapper.js":"9w2Kx","@parcel/transformer-js/src/esmodule-helpers.js":"53hI8"}],"3K7hb":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "riffInfoTagMap", ()=>riffInfoTagMap);
parcelHelpers.export(exports, "RiffInfoTagMapper", ()=>RiffInfoTagMapper);
var _genericTagMapperJs = require("../common/GenericTagMapper.js");
const riffInfoTagMap = {
    IART: 'artist',
    ICRD: 'date',
    INAM: 'title',
    TITL: 'title',
    IPRD: 'album',
    ITRK: 'track',
    IPRT: 'track',
    COMM: 'comment',
    ICMT: 'comment',
    ICOP: 'copyright',
    ICNT: 'releasecountry',
    GNRE: 'genre',
    IWRI: 'writer',
    RATE: 'rating',
    YEAR: 'year',
    ISFT: 'encodedby',
    CODE: 'encodedby',
    TURL: 'website',
    IGNR: 'genre',
    IENG: 'engineer',
    ITCH: 'technician',
    IMED: 'media',
    IRPD: 'album' // Product, where the file was intended for
};
class RiffInfoTagMapper extends (0, _genericTagMapperJs.CommonTagMapper) {
    constructor(){
        super([
            'exif'
        ], riffInfoTagMap);
    }
}

},{"../common/GenericTagMapper.js":"9w2Kx","@parcel/transformer-js/src/esmodule-helpers.js":"53hI8"}],"hVoB5":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "tagTypes", ()=>tagTypes);
parcelHelpers.export(exports, "commonTagsKeys", ()=>commonTagsKeys);
/**
 * @param alias Name of common tag
 * @returns {boolean|*} true if given alias is mapped as a singleton', otherwise false
 */ parcelHelpers.export(exports, "isSingleton", ()=>isSingleton);
/**
 * @param alias Common (generic) tag
 * @returns {boolean|*} true if given alias is a singleton or explicitly marked as unique
 */ parcelHelpers.export(exports, "isUnique", ()=>isUnique);
const tagTypes = [
    'vorbis',
    'ID3v1',
    'ID3v2.2',
    'ID3v2.3',
    'ID3v2.4',
    'APEv2',
    'asf',
    'iTunes',
    'exif',
    'matroska',
    'AIFF',
    'CAF'
];
const defaultTagInfo = {
    multiple: false
};
const commonTags = {
    year: defaultTagInfo,
    track: defaultTagInfo,
    disk: defaultTagInfo,
    title: defaultTagInfo,
    artist: defaultTagInfo,
    artists: {
        multiple: true,
        unique: true
    },
    albumartist: defaultTagInfo,
    albumartists: {
        multiple: true,
        unique: true
    },
    album: defaultTagInfo,
    date: defaultTagInfo,
    originaldate: defaultTagInfo,
    originalyear: defaultTagInfo,
    releasedate: defaultTagInfo,
    comment: {
        multiple: true,
        unique: false
    },
    genre: {
        multiple: true,
        unique: true
    },
    picture: {
        multiple: true,
        unique: true
    },
    composer: {
        multiple: true,
        unique: true
    },
    lyrics: {
        multiple: true,
        unique: false
    },
    albumsort: {
        multiple: false,
        unique: true
    },
    titlesort: {
        multiple: false,
        unique: true
    },
    work: {
        multiple: false,
        unique: true
    },
    artistsort: {
        multiple: false,
        unique: true
    },
    albumartistsort: {
        multiple: false,
        unique: true
    },
    composersort: {
        multiple: false,
        unique: true
    },
    lyricist: {
        multiple: true,
        unique: true
    },
    writer: {
        multiple: true,
        unique: true
    },
    conductor: {
        multiple: true,
        unique: true
    },
    remixer: {
        multiple: true,
        unique: true
    },
    arranger: {
        multiple: true,
        unique: true
    },
    engineer: {
        multiple: true,
        unique: true
    },
    publisher: defaultTagInfo,
    producer: {
        multiple: true,
        unique: true
    },
    djmixer: {
        multiple: true,
        unique: true
    },
    mixer: {
        multiple: true,
        unique: true
    },
    technician: {
        multiple: true,
        unique: true
    },
    label: {
        multiple: true,
        unique: true
    },
    grouping: defaultTagInfo,
    subtitle: {
        multiple: true
    },
    description: {
        multiple: true
    },
    longDescription: defaultTagInfo,
    discsubtitle: defaultTagInfo,
    totaltracks: defaultTagInfo,
    totaldiscs: defaultTagInfo,
    movementTotal: defaultTagInfo,
    compilation: defaultTagInfo,
    rating: {
        multiple: true
    },
    bpm: defaultTagInfo,
    mood: defaultTagInfo,
    media: defaultTagInfo,
    catalognumber: {
        multiple: true,
        unique: true
    },
    tvShow: defaultTagInfo,
    tvShowSort: defaultTagInfo,
    tvSeason: defaultTagInfo,
    tvEpisode: defaultTagInfo,
    tvEpisodeId: defaultTagInfo,
    tvNetwork: defaultTagInfo,
    podcast: defaultTagInfo,
    podcasturl: defaultTagInfo,
    releasestatus: defaultTagInfo,
    releasetype: {
        multiple: true
    },
    releasecountry: defaultTagInfo,
    script: defaultTagInfo,
    language: defaultTagInfo,
    copyright: defaultTagInfo,
    license: defaultTagInfo,
    encodedby: defaultTagInfo,
    encodersettings: defaultTagInfo,
    gapless: defaultTagInfo,
    barcode: defaultTagInfo,
    isrc: {
        multiple: true
    },
    asin: defaultTagInfo,
    musicbrainz_recordingid: defaultTagInfo,
    musicbrainz_trackid: defaultTagInfo,
    musicbrainz_albumid: defaultTagInfo,
    musicbrainz_artistid: {
        multiple: true
    },
    musicbrainz_albumartistid: {
        multiple: true
    },
    musicbrainz_releasegroupid: defaultTagInfo,
    musicbrainz_workid: defaultTagInfo,
    musicbrainz_trmid: defaultTagInfo,
    musicbrainz_discid: defaultTagInfo,
    acoustid_id: defaultTagInfo,
    acoustid_fingerprint: defaultTagInfo,
    musicip_puid: defaultTagInfo,
    musicip_fingerprint: defaultTagInfo,
    website: defaultTagInfo,
    'performer:instrument': {
        multiple: true,
        unique: true
    },
    averageLevel: defaultTagInfo,
    peakLevel: defaultTagInfo,
    notes: {
        multiple: true,
        unique: false
    },
    originalalbum: defaultTagInfo,
    originalartist: defaultTagInfo,
    discogs_artist_id: {
        multiple: true,
        unique: true
    },
    discogs_release_id: defaultTagInfo,
    discogs_label_id: defaultTagInfo,
    discogs_master_release_id: defaultTagInfo,
    discogs_votes: defaultTagInfo,
    discogs_rating: defaultTagInfo,
    replaygain_track_gain_ratio: defaultTagInfo,
    replaygain_track_peak_ratio: defaultTagInfo,
    replaygain_track_gain: defaultTagInfo,
    replaygain_track_peak: defaultTagInfo,
    replaygain_album_gain: defaultTagInfo,
    replaygain_album_peak: defaultTagInfo,
    replaygain_undo: defaultTagInfo,
    replaygain_track_minmax: defaultTagInfo,
    replaygain_album_minmax: defaultTagInfo,
    key: defaultTagInfo,
    category: {
        multiple: true
    },
    hdVideo: defaultTagInfo,
    keywords: {
        multiple: true
    },
    movement: defaultTagInfo,
    movementIndex: defaultTagInfo,
    podcastId: defaultTagInfo,
    showMovement: defaultTagInfo,
    stik: defaultTagInfo,
    playCounter: defaultTagInfo
};
const commonTagsKeys = /* @__PURE__ */ Object.keys(commonTags);
function isSingleton(alias) {
    return !!commonTags[alias] && !commonTags[alias].multiple;
}
function isUnique(alias) {
    const info = commonTags[alias];
    return !info?.multiple || info.unique || false;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"53hI8"}],"9lsMn":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/** Return a bitrate only when it conveys a finite, positive value. */ parcelHelpers.export(exports, "normalizeBitrate", ()=>normalizeBitrate);
/** Map the format of a single audio stream to the shared track abstraction. */ parcelHelpers.export(exports, "createAudioTrackInfo", ()=>createAudioTrackInfo);
/** Derive whole-file statistics without treating an audio bitrate as a video bitrate. */ parcelHelpers.export(exports, "finalizeContainerInfo", ()=>finalizeContainerInfo);
var _typeJs = require("../type.js");
function normalizeBitrate(bitrate) {
    return bitrate !== undefined && Number.isFinite(bitrate) && bitrate > 0 ? bitrate : undefined;
}
function createAudioTrackInfo(format) {
    const audio = {};
    const track = {
        type: (0, _typeJs.TrackType).audio,
        audio
    };
    if (format.codec !== undefined) track.codecName = format.codec;
    if (format.codecProfile !== undefined) track.codecProfile = format.codecProfile;
    if (format.duration !== undefined) track.duration = format.duration;
    const bitrate = normalizeBitrate(format.bitrate);
    if (bitrate !== undefined) track.bitrate = bitrate;
    if (format.lossless !== undefined) track.lossless = format.lossless;
    if (format.sampleRate !== undefined) audio.samplingFrequency = format.sampleRate;
    if (format.numberOfChannels !== undefined) audio.channels = format.numberOfChannels;
    if (format.bitsPerSample !== undefined) audio.bitDepth = format.bitsPerSample;
    if (format.numberOfSamples !== undefined) audio.numberOfSamples = format.numberOfSamples;
    return track;
}
function finalizeContainerInfo(metadata, fileSize) {
    const { format } = metadata;
    let duration = format.containerDuration;
    if (duration === undefined) {
        const durations = format.trackInfo.filter((track)=>track.type === (0, _typeJs.TrackType).audio || track.type === (0, _typeJs.TrackType).video).map((track)=>track.duration);
        if (durations.length > 0 && durations.every((duration)=>duration !== undefined && duration > 0 && Number.isFinite(duration))) duration = durations.reduce((maximum, trackDuration)=>Math.max(maximum, trackDuration), 0);
        else if (!format.hasVideo) duration = format.duration;
    }
    if (duration !== undefined && Number.isFinite(duration) && duration > 0) {
        metadata.setFormat('containerDuration', duration);
        if (format.duration === undefined) metadata.setFormat('duration', duration);
        if (fileSize !== undefined && Number.isSafeInteger(fileSize) && fileSize > 0) {
            const bitrate = 8 * fileSize / duration;
            if (Number.isFinite(bitrate)) metadata.setFormat('overallBitrate', bitrate);
        }
    }
}

},{"../type.js":"a50Lj","@parcel/transformer-js/src/esmodule-helpers.js":"53hI8"}],"8ksyx":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "dsdiffParserLoader", ()=>dsdiffParserLoader);
const dsdiffParserLoader = {
    parserType: 'dsdiff',
    extensions: [
        '.dff'
    ],
    mimeTypes: [
        'audio/dsf',
        'audio/dsd',
        'audio/dff'
    ],
    async load () {
        return (await require("7af61e74ab5b95b8")).DsdiffParser;
    }
};

},{"7af61e74ab5b95b8":"j2yej","@parcel/transformer-js/src/esmodule-helpers.js":"53hI8"}],"j2yej":[function(require,module,exports,__globalThis) {
module.exports = Promise.all([
    import("./AiffParser.e56efae2.js"),
    import("./DsdiffParser.5677e9de.js")
]).then(()=>module.bundle.root('1AVPt'));

},{"1AVPt":"1AVPt"}],"ldKnP":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "dsfParserLoader", ()=>dsfParserLoader);
const dsfParserLoader = {
    parserType: 'dsf',
    extensions: [
        '.dsf'
    ],
    mimeTypes: [
        'audio/dsf'
    ],
    async load () {
        return (await require("89b376083a7d1f29")).DsfParser;
    }
};

},{"89b376083a7d1f29":"dkaoE","@parcel/transformer-js/src/esmodule-helpers.js":"53hI8"}],"dkaoE":[function(require,module,exports,__globalThis) {
module.exports = Promise.all([
    import("./AiffParser.e56efae2.js"),
    import("./DsfParser.8b49434f.js")
]).then(()=>module.bundle.root('9zCZb'));

},{"9zCZb":"9zCZb"}],"9LWWJ":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "flacParserLoader", ()=>flacParserLoader);
const flacParserLoader = {
    parserType: 'flac',
    extensions: [
        '.flac'
    ],
    mimeTypes: [
        'audio/flac'
    ],
    async load () {
        return (await require("62107a51ac641079")).FlacParser;
    }
};

},{"62107a51ac641079":"98Vor","@parcel/transformer-js/src/esmodule-helpers.js":"53hI8"}],"98Vor":[function(require,module,exports,__globalThis) {
module.exports = Promise.all([
    import("./AiffParser.e56efae2.js"),
    import("./FlacParser.441d1d19.js")
]).then(()=>module.bundle.root('5yRJd'));

},{"5yRJd":"5yRJd"}],"c2Kwk":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "matroskaParserLoader", ()=>matroskaParserLoader);
const matroskaParserLoader = {
    parserType: 'matroska',
    extensions: [
        '.mka',
        '.mkv',
        '.mk3d',
        '.mks',
        'webm'
    ],
    mimeTypes: [
        'audio/matroska',
        'video/matroska',
        'audio/webm',
        'video/webm'
    ],
    async load () {
        return (await require("a26d7359c819b59f")).MatroskaParser;
    }
};

},{"a26d7359c819b59f":"7fwxY","@parcel/transformer-js/src/esmodule-helpers.js":"53hI8"}],"7fwxY":[function(require,module,exports,__globalThis) {
module.exports = import("./MatroskaParser.d586c9a3.js").then(()=>module.bundle.root('ah7Df'));

},{"ah7Df":"ah7Df"}],"5xi5n":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "mp4ParserLoader", ()=>mp4ParserLoader);
const mp4ParserLoader = {
    parserType: 'mp4',
    extensions: [
        '.mp4',
        '.m4a',
        '.m4b',
        '.m4pa',
        'm4v',
        'm4r',
        '3gp',
        '.mov',
        '.movie',
        '.qt'
    ],
    mimeTypes: [
        'audio/mp4',
        'audio/m4a',
        'video/m4v',
        'video/mp4',
        'video/quicktime'
    ],
    async load () {
        return (await require("ec86c00135ed8c0")).MP4Parser;
    }
};

},{"ec86c00135ed8c0":"dSw9O","@parcel/transformer-js/src/esmodule-helpers.js":"53hI8"}],"dSw9O":[function(require,module,exports,__globalThis) {
module.exports = import("./MP4Parser.4687fb2b.js").then(()=>module.bundle.root('e8ARY'));

},{"e8ARY":"e8ARY"}],"27EFZ":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "mpegParserLoader", ()=>mpegParserLoader);
const mpegParserLoader = {
    parserType: 'mpeg',
    extensions: [
        '.mp1',
        '.mp2',
        '.mp3',
        '.m2a',
        '.aac',
        'aacp'
    ],
    mimeTypes: [
        'audio/mpeg',
        'audio/mp3',
        'audio/aacs',
        'audio/aacp'
    ],
    async load () {
        return (await require("729ce87a7d237e18")).MpegParser;
    }
};

},{"729ce87a7d237e18":"4GAl3","@parcel/transformer-js/src/esmodule-helpers.js":"53hI8"}],"4GAl3":[function(require,module,exports,__globalThis) {
module.exports = Promise.all([
    import("./AiffParser.e56efae2.js"),
    import("./MpegParser.35d588fb.js")
]).then(()=>module.bundle.root('5y6uZ'));

},{"5y6uZ":"5y6uZ"}],"azMFD":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "musepackParserLoader", ()=>musepackParserLoader);
const musepackParserLoader = {
    parserType: 'musepack',
    extensions: [
        '.mpc'
    ],
    mimeTypes: [
        'audio/musepack'
    ],
    async load () {
        return (await require("12ef01b8c9ea07ef")).MusepackParser;
    }
};

},{"12ef01b8c9ea07ef":"bEs7W","@parcel/transformer-js/src/esmodule-helpers.js":"53hI8"}],"bEs7W":[function(require,module,exports,__globalThis) {
module.exports = Promise.all([
    import("./AiffParser.e56efae2.js"),
    import("./MusepackParser.30428d59.js")
]).then(()=>module.bundle.root('farJo'));

},{"farJo":"farJo"}],"iIaSP":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "oggParserLoader", ()=>oggParserLoader);
const oggParserLoader = {
    parserType: 'ogg',
    extensions: [
        '.ogg',
        '.ogv',
        '.oga',
        '.ogm',
        '.ogx',
        '.opus',
        '.spx'
    ],
    mimeTypes: [
        'application/ogg',
        'audio/ogg',
        'audio/opus',
        'audio/speex',
        'video/ogg'
    ],
    async load () {
        return (await require("5ae116c3398842c4")).OggParser;
    }
};

},{"5ae116c3398842c4":"ho1MQ","@parcel/transformer-js/src/esmodule-helpers.js":"53hI8"}],"ho1MQ":[function(require,module,exports,__globalThis) {
module.exports = Promise.all([
    import("./AiffParser.e56efae2.js"),
    import("./FlacParser.441d1d19.js"),
    import("./OggParser.e3b964ec.js")
]).then(()=>module.bundle.root('gM8tK'));

},{"gM8tK":"gM8tK"}],"hXbgY":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "riffParserLoader", ()=>riffParserLoader);
const riffParserLoader = {
    parserType: 'riff',
    extensions: [
        '.wav',
        'wave',
        '.bwf'
    ],
    mimeTypes: [
        'audio/vnd.wave',
        'audio/wav',
        'audio/wave'
    ],
    async load () {
        return (await require("33d18829ab015777")).WaveParser;
    }
};

},{"33d18829ab015777":"ivkuv","@parcel/transformer-js/src/esmodule-helpers.js":"53hI8"}],"ivkuv":[function(require,module,exports,__globalThis) {
module.exports = Promise.all([
    import("./AiffParser.e56efae2.js"),
    import("./WaveParser.dc15f156.js")
]).then(()=>module.bundle.root('2xPuH'));

},{"2xPuH":"2xPuH"}],"btQco":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "wavpackParserLoader", ()=>wavpackParserLoader);
const wavpackParserLoader = {
    parserType: 'wavpack',
    extensions: [
        '.wv',
        '.wvp'
    ],
    mimeTypes: [
        'audio/wavpack'
    ],
    async load () {
        return (await require("d6677d265a6fda39")).WavPackParser;
    }
};

},{"d6677d265a6fda39":"ihUz6","@parcel/transformer-js/src/esmodule-helpers.js":"53hI8"}],"ihUz6":[function(require,module,exports,__globalThis) {
module.exports = import("./WavPackParser.4a9a6801.js").then(()=>module.bundle.root('7eMRY'));

},{"7eMRY":"7eMRY"}],"lubo1":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getErrorMessage", ()=>getErrorMessage);
const getErrorMessage = (error)=>{
    if (error instanceof Error) return error.message;
    if (typeof error === "string") return error;
    return "Unknown error";
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"53hI8"}]},["drH8Q","gH3Lb"], "gH3Lb", "parcelRequire2853", {}, "./", "/")

//# sourceMappingURL=YAAV.34df32e0.js.map
