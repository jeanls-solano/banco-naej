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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Cronometro\": function() { return /* binding */ Cronometro; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\n\n\nvar _s = $RefreshSig$();\nfunction Cronometro() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), tempo = ref[0], setTempo = ref[1];\n    var minutos = Math.floor(tempo);\n    var segundos = tempo % 60;\n    var ref1 = _slicedToArray(String(minutos).padStart(2, \"0\").split(\" \"), 2), minutoUm = ref1[0], minutoDois = ref1[1];\n    var ref2 = _slicedToArray(String(segundos).padStart(2, \"0\").split(\" \"), 2), segundoUm = ref2[0], segundoDois = ref2[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (tempo == 2) {\n            console.log(\"ok\");\n        }\n        setTimeout(function() {\n            setTempo(tempo + 1);\n        }, 1000);\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: minutoUm\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Projetos\\\\banco\\\\frontend\\\\src\\\\components\\\\Cronometro.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: minutoDois\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Projetos\\\\banco\\\\frontend\\\\src\\\\components\\\\Cronometro.tsx\",\n                        lineNumber: 31,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Projetos\\\\banco\\\\frontend\\\\src\\\\components\\\\Cronometro.tsx\",\n                lineNumber: 29,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                children: \":\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Projetos\\\\banco\\\\frontend\\\\src\\\\components\\\\Cronometro.tsx\",\n                lineNumber: 33,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: segundoUm\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Projetos\\\\banco\\\\frontend\\\\src\\\\components\\\\Cronometro.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: segundoDois\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Projetos\\\\banco\\\\frontend\\\\src\\\\components\\\\Cronometro.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Projetos\\\\banco\\\\frontend\\\\src\\\\components\\\\Cronometro.tsx\",\n                lineNumber: 34,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Projetos\\\\banco\\\\frontend\\\\src\\\\components\\\\Cronometro.tsx\",\n        lineNumber: 28,\n        columnNumber: 9\n    }, this);\n}\n_s(Cronometro, \"3Dw6O3taL+RJ0YzpEV8JM5PybOA=\");\n_c = Cronometro;\nvar _c;\n$RefreshReg$(_c, \"Cronometro\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Dcm9ub21ldHJvLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUM0Qzs7QUFFckMsU0FBU0UsVUFBVSxHQUFHOztJQUV6QixJQUEwQkQsR0FBVyxHQUFYQSwrQ0FBUSxDQUFDLENBQUMsQ0FBQyxFQUx6QyxLQUtnQixHQUFjQSxHQUFXLEdBQXpCLEVBTGhCLFFBSzBCLEdBQUlBLEdBQVcsR0FBZjtJQUl0QixJQUFNSSxPQUFPLEdBQUdDLElBQUksQ0FBQ0MsS0FBSyxDQUFDSixLQUFLLENBQUM7SUFDakMsSUFBTUssUUFBUSxHQUFHTCxLQUFLLEdBQUcsRUFBRTtJQUUzQixJQUErQk0sSUFBMkMsa0JBQTNDQSxNQUFNLENBQUNKLE9BQU8sQ0FBQyxDQUFDSyxRQUFRLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDQyxLQUFLLENBQUMsR0FBRyxDQUFDLE1BQW5FQyxRQUFRLEdBQWdCSCxJQUEyQyxHQUEzRCxFQUFFSSxVQUFVLEdBQUlKLElBQTJDLEdBQS9DO0lBQzNCLElBQWlDQSxJQUE0QyxrQkFBNUNBLE1BQU0sQ0FBQ0QsUUFBUSxDQUFDLENBQUNFLFFBQVEsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUNDLEtBQUssQ0FBQyxHQUFHLENBQUMsTUFBdEVHLFNBQVMsR0FBaUJMLElBQTRDLEdBQTdELEVBQUVNLFdBQVcsR0FBSU4sSUFBNEMsR0FBaEQ7SUFHN0JULGdEQUFTLENBQUMsV0FBTTtRQUNaLElBQUdHLEtBQUssSUFBSSxDQUFDLEVBQUM7WUFDVmEsT0FBTyxDQUFDQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDckI7UUFDREMsVUFBVSxDQUFDLFdBQU07WUFDYmQsUUFBUSxDQUFDRCxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDdkIsRUFBRSxJQUFJLENBQUM7S0FDWCxDQUFDLENBQUM7SUFHSCxxQkFDSSw4REFBQ2dCLEtBQUc7OzBCQUNBLDhEQUFDQSxLQUFHOztrQ0FDQSw4REFBQ0MsTUFBSTtrQ0FBRVIsUUFBUTs7Ozs7NEJBQVE7a0NBQ3ZCLDhEQUFDUSxNQUFJO2tDQUFFUCxVQUFVOzs7Ozs0QkFBUTs7Ozs7O29CQUN2QjswQkFDTiw4REFBQ08sTUFBSTswQkFBQyxHQUFDOzs7OztvQkFBTzswQkFDZCw4REFBQ0QsS0FBRzs7a0NBQ0EsOERBQUNDLE1BQUk7a0NBQUVOLFNBQVM7Ozs7OzRCQUFRO2tDQUN4Qiw4REFBQ00sTUFBSTtrQ0FBRUwsV0FBVzs7Ozs7NEJBQVE7Ozs7OztvQkFDeEI7Ozs7OztZQUNKLENBQ1I7Q0FDTDtHQXBDZWIsVUFBVTtBQUFWQSxLQUFBQSxVQUFVIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0Nyb25vbWV0cm8udHN4PzFlMDYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdGltZSB9IGZyb20gXCJjb25zb2xlXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBDcm9ub21ldHJvKCkge1xyXG5cclxuICAgIGNvbnN0IFt0ZW1wbywgc2V0VGVtcG9dID0gdXNlU3RhdGUoMCk7XHJcblxyXG5cclxuXHJcbiAgICBjb25zdCBtaW51dG9zID0gTWF0aC5mbG9vcih0ZW1wbyk7XHJcbiAgICBjb25zdCBzZWd1bmRvcyA9IHRlbXBvICUgNjA7XHJcblxyXG4gICAgY29uc3QgW21pbnV0b1VtLCBtaW51dG9Eb2lzXSA9IFN0cmluZyhtaW51dG9zKS5wYWRTdGFydCgyLCAnMCcpLnNwbGl0KCcgJyk7XHJcbiAgICBjb25zdCBbc2VndW5kb1VtLCBzZWd1bmRvRG9pc10gPSBTdHJpbmcoc2VndW5kb3MpLnBhZFN0YXJ0KDIsICcwJykuc3BsaXQoJyAnKTtcclxuXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZih0ZW1wbyA9PSAyKXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJva1wiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHNldFRlbXBvKHRlbXBvICsgMSk7XHJcbiAgICAgICAgfSwgMTAwMClcclxuICAgIH0pO1xyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj57bWludXRvVW19PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+e21pbnV0b0RvaXN9PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPHNwYW4+Ojwvc3Bhbj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxzcGFuPntzZWd1bmRvVW19PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+e3NlZ3VuZG9Eb2lzfTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59Il0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQ3Jvbm9tZXRybyIsInRlbXBvIiwic2V0VGVtcG8iLCJtaW51dG9zIiwiTWF0aCIsImZsb29yIiwic2VndW5kb3MiLCJTdHJpbmciLCJwYWRTdGFydCIsInNwbGl0IiwibWludXRvVW0iLCJtaW51dG9Eb2lzIiwic2VndW5kb1VtIiwic2VndW5kb0RvaXMiLCJjb25zb2xlIiwibG9nIiwic2V0VGltZW91dCIsImRpdiIsInNwYW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Cronometro.tsx\n");

/***/ })

});