/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 4324:
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {


// EXTERNAL MODULE: ./node_modules/@vue/runtime-dom/dist/runtime-dom.esm-bundler.js
var runtime_dom_esm_bundler = __webpack_require__(9963);
// EXTERNAL MODULE: ./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var runtime_core_esm_bundler = __webpack_require__(6252);
// EXTERNAL MODULE: ./node_modules/@vue/shared/dist/shared.esm-bundler.js
var shared_esm_bundler = __webpack_require__(3577);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/App.vue?vue&type=template&id=54edb3ad

const _hoisted_1 = {
  key: 1,
  class: "flex flex-col items-center mt-5"
};

const _hoisted_2 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("span", {
  class: "mb-5"
}, "Introduce las dimensiones de la matriz ampliada", -1);

const _hoisted_3 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createTextVNode */.Uk)(" x ");

const _hoisted_4 = {
  key: 2,
  class: "flex flex-col items-center mt-5"
};

const _hoisted_5 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createTextVNode */.Uk)(" ( ");

const _hoisted_6 = {
  key: 0
};
const _hoisted_7 = ["onUpdate:modelValue"];

const _hoisted_8 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createTextVNode */.Uk)(" ) ");

const _hoisted_9 = {
  class: "flex flex-row mt-5"
};

const _hoisted_10 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createTextVNode */.Uk)();

const _hoisted_11 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createTextVNode */.Uk)();

const _hoisted_12 = {
  key: 0,
  class: "flex flex-row"
};
const _hoisted_13 = {
  key: 1
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_LoadingScreen = (0,runtime_core_esm_bundler/* resolveComponent */.up)("LoadingScreen");

  return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)(runtime_core_esm_bundler/* Fragment */.HY, null, [_ctx.loading ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)(_component_LoadingScreen, {
    key: 0,
    class: "absolute"
  })) : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true), _ctx.init ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("div", _hoisted_1, [_hoisted_2, (0,runtime_core_esm_bundler/* withDirectives */.wy)((0,runtime_core_esm_bundler/* createElementVNode */._)("input", {
    "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.filas = $event),
    type: "number",
    placeholder: "filas"
  }, null, 512), [[runtime_dom_esm_bundler/* vModelText */.nr, _ctx.filas]]), _hoisted_3, (0,runtime_core_esm_bundler/* withDirectives */.wy)((0,runtime_core_esm_bundler/* createElementVNode */._)("input", {
    "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => _ctx.columnas = $event),
    type: "number",
    placeholder: "columnas"
  }, null, 512), [[runtime_dom_esm_bundler/* vModelText */.nr, _ctx.columnas]]), (0,runtime_core_esm_bundler/* createElementVNode */._)("button", {
    class: "mt-5",
    onClick: _cache[2] || (_cache[2] = $event => _ctx.Iniciar(_ctx.filas, _ctx.columnas))
  }, "Aceptar")])) : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true), !_ctx.init ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("div", _hoisted_4, [((0,runtime_core_esm_bundler/* openBlock */.wg)(true), (0,runtime_core_esm_bundler/* createElementBlock */.iD)(runtime_core_esm_bundler/* Fragment */.HY, null, (0,runtime_core_esm_bundler/* renderList */.Ko)(_ctx.matriz, (fila, index) => {
    return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("div", {
      key: index,
      class: "flex flex-row items-center"
    }, [_hoisted_5, ((0,runtime_core_esm_bundler/* openBlock */.wg)(true), (0,runtime_core_esm_bundler/* createElementBlock */.iD)(runtime_core_esm_bundler/* Fragment */.HY, null, (0,runtime_core_esm_bundler/* renderList */.Ko)(fila, (col, index2) => {
      return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("div", {
        key: index2
      }, [index2 == fila.length - 1 ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("span", _hoisted_6, "|")) : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true), (0,runtime_core_esm_bundler/* withDirectives */.wy)((0,runtime_core_esm_bundler/* createElementVNode */._)("input", {
        class: "w-[4rem] border-0 m-2",
        type: "number",
        "onUpdate:modelValue": $event => _ctx.matriz[index][index2] = $event
      }, null, 8, _hoisted_7), [[runtime_dom_esm_bundler/* vModelText */.nr, _ctx.matriz[index][index2]]])]);
    }), 128)), _hoisted_8]);
  }), 128)), (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_9, [(0,runtime_core_esm_bundler/* createElementVNode */._)("button", {
    class: "m-2",
    onClick: _cache[3] || (_cache[3] = $event => _ctx.Calc.Diag(_ctx.matriz))
  }, "Diagonalizar"), _hoisted_10, (0,runtime_core_esm_bundler/* createElementVNode */._)("button", {
    onClick: _cache[4] || (_cache[4] = $event => _ctx.Calc.Sol(_ctx.matriz)),
    class: "m-2"
  }, "Resolver"), _hoisted_11, (0,runtime_core_esm_bundler/* createElementVNode */._)("button", {
    onClick: _cache[5] || (_cache[5] = (...args) => _ctx.Reset && _ctx.Reset(...args)),
    class: "m-2"
  }, "Resetear")]), isFinite(_ctx.sol[0]) ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("div", _hoisted_12, [((0,runtime_core_esm_bundler/* openBlock */.wg)(true), (0,runtime_core_esm_bundler/* createElementBlock */.iD)(runtime_core_esm_bundler/* Fragment */.HY, null, (0,runtime_core_esm_bundler/* renderList */.Ko)(_ctx.sol, (s, index) => {
    return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("div", {
      class: "ml-2",
      key: index
    }, "X" + (0,shared_esm_bundler/* toDisplayString */.zw)(index + 1) + " = " + (0,shared_esm_bundler/* toDisplayString */.zw)(s), 1);
  }), 128))])) : _ctx.sol[0] != null ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("div", _hoisted_13, "El sistema no tiene solución o tiene infinitas soluciones")) : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true)])) : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true)], 64);
}
;// CONCATENATED MODULE: ./src/App.vue?vue&type=template&id=54edb3ad

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.push.js
var es_array_push = __webpack_require__(7658);
// EXTERNAL MODULE: ./node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js
var reactivity_esm_bundler = __webpack_require__(2262);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/LoadingScreen.vue?vue&type=template&id=1737aa12

const LoadingScreenvue_type_template_id_1737aa12_hoisted_1 = {
  class: "text-white text-2xl font-bold flex flex-col items-center bg-[rgba(0,0,0,.8)] w-screen h-screen"
};
const LoadingScreenvue_type_template_id_1737aa12_hoisted_2 = {
  class: "absolute top-[50%] translate-y-[-50%]"
};
function LoadingScreenvue_type_template_id_1737aa12_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("div", LoadingScreenvue_type_template_id_1737aa12_hoisted_1, [(0,runtime_core_esm_bundler/* createElementVNode */._)("div", LoadingScreenvue_type_template_id_1737aa12_hoisted_2, (0,shared_esm_bundler/* toDisplayString */.zw)(_ctx.text), 1)]);
}
;// CONCATENATED MODULE: ./src/components/LoadingScreen.vue?vue&type=template&id=1737aa12

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/LoadingScreen.vue?vue&type=script&lang=js

/* harmony default export */ var LoadingScreenvue_type_script_lang_js = ({
  name: 'LoadingScreen',
  props: {},
  setup: () => {
    const text = (0,reactivity_esm_bundler/* ref */.iH)("Cargando...");
    let currentState = 0;
    let states = ["Cargando.", "Cargando..", "Cargando..."];
    setInterval(() => {
      if (currentState >= states.length) {
        currentState = 0;
      }

      text.value = states[currentState];
      currentState++;
    }, 500);
    return {
      text
    };
  }
});
;// CONCATENATED MODULE: ./src/components/LoadingScreen.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(3744);
;// CONCATENATED MODULE: ./src/components/LoadingScreen.vue




;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(LoadingScreenvue_type_script_lang_js, [['render',LoadingScreenvue_type_template_id_1737aa12_render]])

/* harmony default export */ var LoadingScreen = (__exports__);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/App.vue?vue&type=script&lang=js




function createMatriz(size) {
  var matriz = new Array(size);

  for (var i = 0; i < size; i++) {
    matriz[i] = new Array(size);
  }

  return matriz;
}

/* harmony default export */ var Appvue_type_script_lang_js = ({
  name: 'App',
  components: {
    LoadingScreen: LoadingScreen
  },
  setup: () => {
    const loading = (0,reactivity_esm_bundler/* ref */.iH)(false);
    const init = (0,reactivity_esm_bundler/* ref */.iH)(true);
    const matriz = (0,reactivity_esm_bundler/* ref */.iH)([]);
    const sol = (0,reactivity_esm_bundler/* ref */.iH)([]);

    const Iniciar = (filas, columnas) => {
      matriz.value = [];

      if (filas > 0 & columnas > 1) {
        init.value = false;

        for (var i = 0; i < filas; i++) {
          matriz.value.push([]);

          for (var x = 0; x < columnas; x++) {
            matriz.value[i].push(0);
          }
        }
      }
    };

    const Calc = (0,reactivity_esm_bundler/* ref */.iH)({
      Diag: m => {
        for (var ciclo = 0; ciclo < m.length - 1; ciclo++) {
          for (var fila = m.length; fila > 0; fila--) {
            if (fila - 1 != ciclo && fila - 1 > ciclo) {
              let division = (0 - m[fila - 1][ciclo]) / m[ciclo][ciclo];

              if (!isFinite(division)) {
                division = 0;
              }

              for (var col = 0; col <= m[0].length - 1; col++) {
                let suma = m[ciclo][col] * division;
                m[fila - 1][col] = m[fila - 1][col] + suma;
              }
            }
          }
        }

        matriz.value = m;
      },
      Sol: m => {
        sol.value = [];
        let det = Calc.value.Det(m);

        for (var i = 0; i < m[0].length - 1; i++) {
          let solution = [];
          m.forEach((fila, index) => {
            solution.push([]);
            fila.forEach((col, ind) => {
              if (ind == i) {
                solution[index].push(fila[fila.length - 1]);
              } else {
                solution[index].push(col);
              }
            });
          });

          if (Calc.value.Det(solution) / det == "-0") {
            sol.value.push(0);
          } else {
            sol.value.push(Calc.value.Det(solution) / det);
          }
        }

        console.log(sol.value);
      },
      Det: m => {
        if (m.length <= 2) {
          let detCof = m[0][0] * m[1][1] - m[1][0] * m[0][1];
          return detCof;
        } else {
          let matriz2 = [];
          m.forEach((fila, index) => {
            matriz2.push([]);
            fila.forEach((col, ind) => {
              if (ind != fila.length - 1) {
                matriz2[index].push(col);
              }
            });
          });
          let suma = 0;

          for (var i = 0; i < matriz2.length; i++) {
            var nm = createMatriz(matriz2.length - 1);

            for (var j = 0; j < matriz2.length; j++) {
              if (j != i) {
                for (var k = 1; k < matriz2.length; k++) {
                  var indice = -1;
                  if (j < i) indice = j;else if (j > i) indice = j - 1;
                  nm[indice][k - 1] = matriz2[j][k];
                }
              }
            }

            if (i % 2 == 0) {
              suma = suma + matriz2[i][0] * (nm[0][0] * nm[1][1] - nm[1][0] * nm[0][1]);
            } else {
              suma = suma - matriz2[i][0] * (nm[0][0] * nm[1][1] - nm[1][0] * nm[0][1]);
            }
          }

          return suma;
        }
      }
    });

    const Reset = () => {
      init.value = true;
      matriz.value = [];
      sol.value = [];
    };

    return {
      loading,
      init,
      matriz,
      Iniciar,
      Calc,
      sol,
      Reset
    };
  }
});
;// CONCATENATED MODULE: ./src/App.vue?vue&type=script&lang=js
 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/App.vue?vue&type=style&index=0&id=54edb3ad&lang=css
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/App.vue?vue&type=style&index=0&id=54edb3ad&lang=css

;// CONCATENATED MODULE: ./src/App.vue




;


const App_exports_ = /*#__PURE__*/(0,exportHelper/* default */.Z)(Appvue_type_script_lang_js, [['render',render]])

/* harmony default export */ var App = (App_exports_);
;// CONCATENATED MODULE: ./src/main.js


(0,runtime_dom_esm_bundler/* createApp */.ri)(App).mount('#app');

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
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			143: 0
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
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunksistemas"] = self["webpackChunksistemas"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [998], function() { return __webpack_require__(4324); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=app.js.map