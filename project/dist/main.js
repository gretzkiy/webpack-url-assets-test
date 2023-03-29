/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../lib/src/index.ts":
/*!***************************!*\
  !*** ../lib/src/index.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "doWork": () => (/* binding */ doWork)
/* harmony export */ });
function doWork() {
    console.log('Spawning workers from the lib');
    // The workers are loaded from the `/workers/` public path specified in `project`
    // However the goal is to place the output for these files in `dist/workers` dir
    new Worker(new URL(/* worker import */ "/workers/" + __webpack_require__.u("lib_src_one_worker_ts"), __webpack_require__.b));
    new Worker(new URL(/* worker import */ "/workers/" + __webpack_require__.u("lib_src_two_worker_ts"), __webpack_require__.b));
}


/***/ }),

/***/ "./src/assets/logo.svg":
/*!*****************************!*\
  !*** ./src/assets/logo.svg ***!
  \*****************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMzA0Ni43IDg3NS43IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Im0zODcgMCAzODcgMjE4Ljl2NDM3LjlsLTM4NyAyMTguOS0zODctMjE4Ljl2LTQzNy45eiIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Im03MDQuOSA2NDEuNy0zMDUuMSAxNzIuNnYtMTM0LjRsMTkwLjEtMTA0LjZ6bTIwLjktMTguOXYtMzYwLjlsLTExMS42IDY0LjV2MjMyem0tNjU3LjkgMTguOSAzMDUuMSAxNzIuNnYtMTM0LjRsLTE5MC4yLTEwNC42em0tMjAuOS0xOC45di0zNjAuOWwxMTEuNiA2NC41djIzMnptMTMuMS0zODQuMyAzMTIuOS0xNzd2MTI5LjlsLTIwMC41IDExMC4zLTEuNi45em02NTIuNiAwLTMxMi45LTE3N3YxMjkuOWwyMDAuNSAxMTAuMiAxLjYuOXoiIGZpbGw9IiM4ZWQ2ZmIiLz48cGF0aCBkPSJtMzczIDY0OS4zLTE4Ny42LTEwMy4ydi0yMDQuM2wxODcuNiAxMDguM3ptMjYuOCAwIDE4Ny42LTEwMy4xdi0yMDQuNGwtMTg3LjYgMTA4LjN6bS0yMDEuNy0zMzEuMSAxODguMy0xMDMuNSAxODguMyAxMDMuNS0xODguMyAxMDguN3oiIGZpbGw9IiMxYzc4YzAiLz48cGF0aCBkPSJtMTE2NC4zIDU3Ni4zaDgyLjVsODQuMS0yODAuMmgtODAuNGwtNDkuOCAxOTguOC01My4xLTE5OC44aC02OS42bC01My42IDE5OC44LTQ5LjMtMTk4LjhoLTgwLjRsODMuNiAyODAuMmg4Mi41bDUyLTE3OS41em0xNzAuOS0xMzkuM2MwIDg0LjEgNTcuMyAxNDYuMyAxNDcuNCAxNDYuMyA2OS43IDAgMTA3LjItNDEuOCAxMTcuOS02MS42bC00OC44LTM3Yy04IDExLjgtMzAgMzQuMy02OC4xIDM0LjMtNDEuMyAwLTcxLjMtMjYuOC03Mi45LTY0LjNoMTk3LjNjLjUtNS40LjUtMTAuNy41LTE2LjEgMC05MS42LTQ5LjMtMTQ5LjUtMTM2LjEtMTQ5LjUtNzkuOSAwLTEzNy4yIDYzLjItMTM3LjIgMTQ3Ljl6bTc3LjctMzAuNmMzLjItMzIuMSAyNS43LTU2LjggNjAuNi01Ni44IDMzLjggMCA1OC40IDIyLjUgNjAgNTYuOHptMjIzLjUgMTY5LjloNjkuN3YtMjguOWM3LjUgOS4xIDM1LjQgMzUuOSA4My4xIDM1LjkgODAuNCAwIDEzNy4yLTYwLjUgMTM3LjItMTQ2LjggMC04Ni44LTUyLjUtMTQ3LjMtMTMyLjktMTQ3LjMtNDguMiAwLTc2LjEgMjYuOC04My4xIDM2LjR2LTEzNi43aC03My45djM4Ny40em03MS44LTEzOS4zYzAtNTIuNSAzMS4xLTgyLjUgNzEuOC04Mi41IDQyLjkgMCA3MS44IDMzLjggNzEuOCA4Mi41IDAgNDkuOC0zMCA4MC45LTcxLjggODAuOS00NSAwLTcxLjgtMzYuNS03MS44LTgwLjl6bTI0NyAyMzkuNWg3My45di0xMjkuMmM3IDkuMSAzNC44IDM1LjkgODMuMSAzNS45IDgwLjQgMCAxMzIuOS02MC41IDEzMi45LTE0Ny4zIDAtODUuNy01Ni44LTE0Ni44LTEzNy4yLTE0Ni44LTQ3LjcgMC03NS42IDI2LjgtODMuMSAzNi40di0yOS41aC02OS43djM4MC41em03MS44LTI0MS4xYzAtNDQuNSAyNi44LTgwLjkgNzEuOC04MC45IDQxLjggMCA3MS44IDMxLjEgNzEuOCA4MC45IDAgNDguOC0yOC45IDgyLjUtNzEuOCA4Mi41LTQwLjcgMC03MS44LTMwLTcxLjgtODIuNXptMjMxLjUgNTQuMWMwIDU4LjkgNDguMiA5My44IDEwNSA5My44IDMyLjIgMCA1My42LTkuNiA2OC4xLTI1LjJsNC44IDE4LjJoNjUuNHYtMTc3LjRjMC02Mi43LTI2LjgtMTA5LjgtMTE2LjgtMTA5LjgtNDIuOSAwLTg1LjIgMTYuMS0xMTAuNCAzMy4ybDI3LjkgNTAuNGExNjUuMiAxNjUuMiAwIDAgMSA3NC41LTE5LjhjMzIuNyAwIDUwLjkgMTYuNiA1MC45IDQxLjN2MTguMmMtMTAuMi03LTMyLjItMTUuNS02MC42LTE1LjUtNjUuNC0uMS0xMDguOCAzNy40LTEwOC44IDkyLjZ6bTczLjktMi4yYzAtMjMgMTkuOC0zOS4xIDQ4LjItMzkuMXM0OC44IDE0LjUgNDguOCAzOS4xYzAgMjMuNi0yMC40IDM4LjYtNDguMiAzOC42cy00OC44LTE1LjUtNDguOC0zOC42em0zNDguOSAzMC42Yy00Ni42IDAtNzkuOC0zMy44LTc5LjgtODEuNCAwLTQ1IDI5LjUtODIgNzcuMi04MmE5NS4yIDk1LjIgMCAwIDEgNjUuNCAyNi44bDIwLjktNjIuMmExNDIuNiAxNDIuNiAwIDAgMCAtODguNC0zMGMtODUuMiAwLTE0OSA2Mi43LTE0OSAxNDcuOXM2Mi4yIDE0Ni4zIDE0OS41IDE0Ni4zYTE0MSAxNDEgMCAwIDAgODcuMy0zMGwtMTkuOC02MC41Yy0xMi40IDEwLjEtMzQuOSAyNS4xLTYzLjMgMjUuMXptMTEwLjkgNTguNGg3My45di0xNDQuN2w5My44IDE0NC43aDg2LjhsLTEwNi4xLTE1My4zIDk4LjYtMTI3aC04My4xbC05MCAxMTcuOXYtMjI1aC03My45eiIgZmlsbD0iI2Y1ZmFmYSIvPjwvc3ZnPg==";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "https://my-cdn.com/path-to-my-build-dist/";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lib */ "../lib/src/index.ts");

(0,lib__WEBPACK_IMPORTED_MODULE_0__.doWork)();
// Just to demonstrate that the default public path is applied
const img = document.createElement('img');
img.src = __webpack_require__(/*! ./assets/logo.svg */ "./src/assets/logo.svg");
document.body.appendChild(img);

})();

/******/ })()
;
//# sourceMappingURL=main.js.map