"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Cronometro.tsx":
/*!***************************************!*\
  !*** ./src/components/Cronometro.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Cronometro\": function() { return /* binding */ Cronometro; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\n\n\nvar _s = $RefreshSig$();\nfunction Cronometro() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), tempo = ref[0], setTempo = ref[1];\n    var segundos = tempo % 60;\n    var minutos;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (tempo >= 60) {\n            minutos = Math.floor(tempo / 60);\n        }\n        setTimeout(function() {\n            setTempo(tempo + 1);\n        }, 1000);\n    });\n    var ref1 = _slicedToArray(String(minutos).padStart(2, \"0\").split(\" \"), 2), minutoUm = ref1[0], minutoDois = ref1[1];\n    var ref2 = _slicedToArray(String(segundos).padStart(2, \"0\").split(\" \"), 2), segundoUm = ref2[0], segundoDois = ref2[1];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: minutoUm\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Projetos\\\\banco\\\\frontend\\\\src\\\\components\\\\Cronometro.tsx\",\n                        lineNumber: 27,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: minutoDois\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Projetos\\\\banco\\\\frontend\\\\src\\\\components\\\\Cronometro.tsx\",\n                        lineNumber: 28,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Projetos\\\\banco\\\\frontend\\\\src\\\\components\\\\Cronometro.tsx\",\n                lineNumber: 26,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                children: \":\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Projetos\\\\banco\\\\frontend\\\\src\\\\components\\\\Cronometro.tsx\",\n                lineNumber: 30,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: segundoUm\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Projetos\\\\banco\\\\frontend\\\\src\\\\components\\\\Cronometro.tsx\",\n                        lineNumber: 32,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: segundoDois\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Projetos\\\\banco\\\\frontend\\\\src\\\\components\\\\Cronometro.tsx\",\n                        lineNumber: 33,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Projetos\\\\banco\\\\frontend\\\\src\\\\components\\\\Cronometro.tsx\",\n                lineNumber: 31,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Projetos\\\\banco\\\\frontend\\\\src\\\\components\\\\Cronometro.tsx\",\n        lineNumber: 25,\n        columnNumber: 9\n    }, this);\n}\n_s(Cronometro, \"3Dw6O3taL+RJ0YzpEV8JM5PybOA=\");\n_c = Cronometro;\nvar _c;\n$RefreshReg$(_c, \"Cronometro\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Dcm9ub21ldHJvLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUM0Qzs7QUFFckMsU0FBU0UsVUFBVSxHQUFHOztJQUV6QixJQUEwQkQsR0FBVyxHQUFYQSwrQ0FBUSxDQUFDLENBQUMsQ0FBQyxFQUx6QyxLQUtnQixHQUFjQSxHQUFXLEdBQXpCLEVBTGhCLFFBSzBCLEdBQUlBLEdBQVcsR0FBZjtJQUV0QixJQUFNSSxRQUFRLEdBQUdGLEtBQUssR0FBRyxFQUFFO0lBQzNCLElBQUlHLE9BQU87SUFFWE4sZ0RBQVMsQ0FBQyxXQUFNO1FBQ1osSUFBR0csS0FBSyxJQUFJLEVBQUUsRUFBQztZQUNYRyxPQUFPLEdBQUdDLElBQUksQ0FBQ0MsS0FBSyxDQUFDTCxLQUFLLEdBQUMsRUFBRSxDQUFDO1NBQ2pDO1FBQ0RNLFVBQVUsQ0FBQyxXQUFNO1lBQ2JMLFFBQVEsQ0FBQ0QsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQ3ZCLEVBQUUsSUFBSSxDQUFDO0tBQ1gsQ0FBQyxDQUFDO0lBRUgsSUFBK0JPLElBQTJDLGtCQUEzQ0EsTUFBTSxDQUFDSixPQUFPLENBQUMsQ0FBQ0ssUUFBUSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQ0MsS0FBSyxDQUFDLEdBQUcsQ0FBQyxNQUFuRUMsUUFBUSxHQUFnQkgsSUFBMkMsR0FBM0QsRUFBRUksVUFBVSxHQUFJSixJQUEyQyxHQUEvQztJQUMzQixJQUFpQ0EsSUFBNEMsa0JBQTVDQSxNQUFNLENBQUNMLFFBQVEsQ0FBQyxDQUFDTSxRQUFRLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDQyxLQUFLLENBQUMsR0FBRyxDQUFDLE1BQXRFRyxTQUFTLEdBQWlCTCxJQUE0QyxHQUE3RCxFQUFFTSxXQUFXLEdBQUlOLElBQTRDLEdBQWhEO0lBRzdCLHFCQUNJLDhEQUFDTyxLQUFHOzswQkFDQSw4REFBQ0EsS0FBRzs7a0NBQ0EsOERBQUNDLE1BQUk7a0NBQUVMLFFBQVE7Ozs7OzRCQUFRO2tDQUN2Qiw4REFBQ0ssTUFBSTtrQ0FBRUosVUFBVTs7Ozs7NEJBQVE7Ozs7OztvQkFDdkI7MEJBQ04sOERBQUNJLE1BQUk7MEJBQUMsR0FBQzs7Ozs7b0JBQU87MEJBQ2QsOERBQUNELEtBQUc7O2tDQUNBLDhEQUFDQyxNQUFJO2tDQUFFSCxTQUFTOzs7Ozs0QkFBUTtrQ0FDeEIsOERBQUNHLE1BQUk7a0NBQUVGLFdBQVc7Ozs7OzRCQUFROzs7Ozs7b0JBQ3hCOzs7Ozs7WUFDSixDQUNSO0NBQ0w7R0FqQ2VkLFVBQVU7QUFBVkEsS0FBQUEsVUFBVSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Dcm9ub21ldHJvLnRzeD8xZTA2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHRpbWUgfSBmcm9tIFwiY29uc29sZVwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gQ3Jvbm9tZXRybygpIHtcclxuXHJcbiAgICBjb25zdCBbdGVtcG8sIHNldFRlbXBvXSA9IHVzZVN0YXRlKDApO1xyXG5cclxuICAgIGNvbnN0IHNlZ3VuZG9zID0gdGVtcG8gJSA2MDtcclxuICAgIHZhciBtaW51dG9zXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZih0ZW1wbyA+PSA2MCl7XHJcbiAgICAgICAgICAgIG1pbnV0b3MgPSBNYXRoLmZsb29yKHRlbXBvLzYwKVxyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgc2V0VGVtcG8odGVtcG8gKyAxKTtcclxuICAgICAgICB9LCAxMDAwKVxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgW21pbnV0b1VtLCBtaW51dG9Eb2lzXSA9IFN0cmluZyhtaW51dG9zKS5wYWRTdGFydCgyLCAnMCcpLnNwbGl0KCcgJyk7XHJcbiAgICBjb25zdCBbc2VndW5kb1VtLCBzZWd1bmRvRG9pc10gPSBTdHJpbmcoc2VndW5kb3MpLnBhZFN0YXJ0KDIsICcwJykuc3BsaXQoJyAnKTtcclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+e21pbnV0b1VtfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxzcGFuPnttaW51dG9Eb2lzfTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxzcGFuPjo8L3NwYW4+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj57c2VndW5kb1VtfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxzcGFuPntzZWd1bmRvRG9pc308L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufSJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkNyb25vbWV0cm8iLCJ0ZW1wbyIsInNldFRlbXBvIiwic2VndW5kb3MiLCJtaW51dG9zIiwiTWF0aCIsImZsb29yIiwic2V0VGltZW91dCIsIlN0cmluZyIsInBhZFN0YXJ0Iiwic3BsaXQiLCJtaW51dG9VbSIsIm1pbnV0b0RvaXMiLCJzZWd1bmRvVW0iLCJzZWd1bmRvRG9pcyIsImRpdiIsInNwYW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Cronometro.tsx\n");

/***/ })

});