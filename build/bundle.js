/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
eval("System.register(\"Root\", [\"react\", \"./style.scss\"], function (exports_1, context_1) {\n    \"use strict\";\n    var react_1, Root;\n    var __moduleName = context_1 && context_1.id;\n    return {\n        setters: [\n            function (react_1_1) {\n                react_1 = react_1_1;\n            },\n            function (_1) {\n            }\n        ],\n        execute: function () {\n            Root = function () {\n                return (react_1[\"default\"].createElement(\"h3\", { className: \"title\" }, \"He llo, React!!!!zz\"));\n            };\n            exports_1(\"default\", Root);\n        }\n    };\n});\nSystem.register(\"index\", [\"react\", \"react-dom\", \"Root\"], function (exports_2, context_2) {\n    \"use strict\";\n    var react_2, react_dom_1, Root_1;\n    var __moduleName = context_2 && context_2.id;\n    return {\n        setters: [\n            function (react_2_1) {\n                react_2 = react_2_1;\n            },\n            function (react_dom_1_1) {\n                react_dom_1 = react_dom_1_1;\n            },\n            function (Root_1_1) {\n                Root_1 = Root_1_1;\n            }\n        ],\n        execute: function () {\n            react_dom_1[\"default\"].render(react_2[\"default\"].createElement(Root_1[\"default\"], null), document.getElementById(\"root\"));\n        }\n    };\n});\nconsole.log('test');\n\n\n//# sourceURL=webpack://front/./src/index.tsx?");
/******/ })()
;