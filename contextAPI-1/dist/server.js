/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./server/server.js"
/*!**************************!*\
  !*** ./server/server.js ***!
  \**************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! node-fetch */ \"node-fetch\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_router_dom_server__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom/server */ \"react-router-dom/server\");\n/* harmony import */ var _src_App_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/App.js */ \"./src/App.js\");\n/* harmony import */ var _src_context_UserContext_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/context/UserContext.js */ \"./src/context/UserContext.js\");\nfunction _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = \"function\" == typeof Symbol ? Symbol : {}, n = r.iterator || \"@@iterator\", o = r.toStringTag || \"@@toStringTag\"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, \"_invoke\", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError(\"Generator is already running\"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = \"next\"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError(\"iterator result is not an object\"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i[\"return\"]) && t.call(i), c < 2 && (u = TypeError(\"The iterator does not provide a '\" + o + \"' method\"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, \"GeneratorFunction\")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, \"constructor\", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, \"constructor\", GeneratorFunction), GeneratorFunction.displayName = \"GeneratorFunction\", _regeneratorDefine2(GeneratorFunctionPrototype, o, \"GeneratorFunction\"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, \"Generator\"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, \"toString\", function () { return \"[object Generator]\"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }\nfunction _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, \"\", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o(\"next\", 0), o(\"throw\", 1), o(\"return\", 2)); }, _regeneratorDefine2(e, r, n, t); }\nfunction asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }\nfunction _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, \"next\", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, \"throw\", n); } _next(void 0); }); }; }\n\n\n\n\n\n\n\nvar app = express__WEBPACK_IMPORTED_MODULE_0__();\napp.use(express__WEBPACK_IMPORTED_MODULE_0__[\"static\"](\"dist/public\"));\napp.get(\"*\", /*#__PURE__*/function () {\n  var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(req, res) {\n    var response, users, jsx, html;\n    return _regenerator().w(function (_context) {\n      while (1) switch (_context.n) {\n        case 0:\n          _context.n = 1;\n          return node_fetch__WEBPACK_IMPORTED_MODULE_1__(\"https://jsonplaceholder.typicode.com/users\");\n        case 1:\n          response = _context.v;\n          _context.n = 2;\n          return response.json();\n        case 2:\n          users = _context.v;\n          jsx = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react_router_dom_server__WEBPACK_IMPORTED_MODULE_4__.StaticRouter, {\n            location: req.url\n          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_src_context_UserContext_js__WEBPACK_IMPORTED_MODULE_6__.UserProvider, {\n            initialData: users\n          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_src_App_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null)));\n          html = (0,react_dom_server__WEBPACK_IMPORTED_MODULE_3__.renderToString)(jsx);\n          res.send(\"\\n    <!DOCTYPE html>\\n    <html>\\n      <head>\\n        <title>SSR Context API</title>\\n        <script>\\n          window.__INITIAL_DATA__ = \".concat(JSON.stringify(users), \"\\n        </script>\\n      </head>\\n      <body>\\n        <div id=\\\"root\\\">\").concat(html, \"</div>\\n        <script src=\\\"/bundle.js\\\"></script>\\n      </body>\\n    </html>\\n  \"));\n        case 3:\n          return _context.a(2);\n      }\n    }, _callee);\n  }));\n  return function (_x, _x2) {\n    return _ref.apply(this, arguments);\n  };\n}());\napp.listen(3000, function () {\n  console.log(\"Server running at http://localhost:3000\");\n});\n\n//# sourceURL=webpack://ssr-context-app/./server/server.js?\n}");

/***/ },

/***/ "./src/App.js"
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var _components_UsersList_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/UsersList.jsx */ \"./src/components/UsersList.jsx\");\n/* harmony import */ var _components_UserDetails_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/UserDetails.jsx */ \"./src/components/UserDetails.jsx\");\n\n\n\n\nfunction App() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"nav\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {\n    to: \"/\"\n  }, \"Users\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Routes, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, {\n    path: \"/\",\n    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_UsersList_jsx__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null)\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, {\n    path: \"/users/:id\",\n    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_UserDetails_jsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null)\n  })));\n}\n\n//# sourceURL=webpack://ssr-context-app/./src/App.js?\n}");

/***/ },

/***/ "./src/components/UserDetails.jsx"
/*!****************************************!*\
  !*** ./src/components/UserDetails.jsx ***!
  \****************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ UserDetails)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_UserContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/UserContext */ \"./src/context/UserContext.js\");\n\n\n\nfunction UserDetails() {\n  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useParams)(),\n    id = _useParams.id;\n  var _useUsers = (0,_context_UserContext__WEBPACK_IMPORTED_MODULE_2__.useUsers)(),\n    users = _useUsers.users;\n  var user = users.find(function (u) {\n    return u.id === Number(id);\n  });\n  if (!user) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"User not found\");\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h2\", null, user.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"Email: \", user.email), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"Company: \", user.company.name));\n}\n\n//# sourceURL=webpack://ssr-context-app/./src/components/UserDetails.jsx?\n}");

/***/ },

/***/ "./src/components/UsersList.jsx"
/*!**************************************!*\
  !*** ./src/components/UsersList.jsx ***!
  \**************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ UsersList)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_UserContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/UserContext */ \"./src/context/UserContext.js\");\n\n\n\nfunction UsersList() {\n  var _useUsers = (0,_context_UserContext__WEBPACK_IMPORTED_MODULE_2__.useUsers)(),\n    users = _useUsers.users;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h2\", null, \"User List\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"ul\", null, users.map(function (user) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"li\", {\n      key: user.id\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {\n      to: \"/users/\".concat(user.id)\n    }, user.name));\n  })));\n}\n\n//# sourceURL=webpack://ssr-context-app/./src/components/UsersList.jsx?\n}");

/***/ },

/***/ "./src/context/UserContext.js"
/*!************************************!*\
  !*** ./src/context/UserContext.js ***!
  \************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   UserProvider: () => (/* binding */ UserProvider),\n/* harmony export */   useUsers: () => (/* binding */ useUsers)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\nfunction _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(r, a) { if (r) { if (\"string\" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return \"Object\" === t && r.constructor && (t = r.constructor.name), \"Map\" === t || \"Set\" === t ? Array.from(r) : \"Arguments\" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }\nfunction _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }\nfunction _iterableToArrayLimit(r, l) { var t = null == r ? null : \"undefined\" != typeof Symbol && r[Symbol.iterator] || r[\"@@iterator\"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t[\"return\"] && (u = t[\"return\"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }\nfunction _arrayWithHoles(r) { if (Array.isArray(r)) return r; }\n\nvar UserContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);\nvar UserProvider = function UserProvider(_ref) {\n  var children = _ref.children,\n    initialData = _ref.initialData;\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialData || []),\n    _useState2 = _slicedToArray(_useState, 1),\n    users = _useState2[0];\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(UserContext.Provider, {\n    value: {\n      users: users\n    }\n  }, children);\n};\nvar useUsers = function useUsers() {\n  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(UserContext);\n};\n\n//# sourceURL=webpack://ssr-context-app/./src/context/UserContext.js?\n}");

/***/ },

/***/ "express"
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
(module) {

module.exports = require("express");

/***/ },

/***/ "node-fetch"
/*!*****************************!*\
  !*** external "node-fetch" ***!
  \*****************************/
(module) {

module.exports = require("node-fetch");

/***/ },

/***/ "react"
/*!************************!*\
  !*** external "react" ***!
  \************************/
(module) {

module.exports = require("react");

/***/ },

/***/ "react-dom/server"
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
(module) {

module.exports = require("react-dom/server");

/***/ },

/***/ "react-router-dom"
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
(module) {

module.exports = require("react-router-dom");

/***/ },

/***/ "react-router-dom/server"
/*!******************************************!*\
  !*** external "react-router-dom/server" ***!
  \******************************************/
(module) {

module.exports = require("react-router-dom/server");

/***/ }

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
/******/ 		// Check if module exists (development only)
/******/ 		if (__webpack_modules__[moduleId] === undefined) {
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
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
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./server/server.js");
/******/ 	
/******/ })()
;