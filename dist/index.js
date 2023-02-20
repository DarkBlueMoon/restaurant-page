/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Montserrat-Regular.ttf */ "./src/fonts/Montserrat-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Montserrat-SemiBold.ttf */ "./src/fonts/Montserrat-SemiBold.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Montserrat-Bold.ttf */ "./src/fonts/Montserrat-Bold.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! img/background.jpg */ "./src/img/background.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n:root {\n  --gold: #ffd60a;\n  --rich-black: #000814;\n  --transparent-black-background: rgba(0, 0, 0, 0.5);\n}\n\n@font-face {\n  font-family: \"Montserrat\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"ttf\"),\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"ttf\")\n      url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format(\"ttf\");\n  font-weight: 700;\n  font-style: normal;\n}\n\nbody {\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") center;\n  font-family: \"Montserrat\", sans-serif;\n}\n\n#content {\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n  height: 100vh;\n}\n\n/* ---------------- HEADER STYLING ---------------- */\n\n.header {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  background-color: var(--transparent-black-background);\n  padding: 2rem 0;\n}\n\n.restaurant-name {\n  color: var(--gold);\n  font-size: 4rem;\n  margin-bottom: 1rem;\n}\n\n.navigation {\n  display: flex;\n  column-gap: 2rem;\n}\n\n.btn {\n  padding: 0.75rem;\n  background: black;\n  color: white;\n  border: 1px solid var(--gold);\n  border-radius: 5px;\n  font-size: 1.5rem;\n  cursor: pointer;\n}\n\n.btn:hover {\n  background: var(--gold);\n  color: var(--rich-black);\n  border: 1px solid var(--rich-black);\n}\n\n/* ---------------- MAIN STYLING ---------------- */\n\n.main {\n  padding: 2rem;\n  background-color: var(--transparent-black-background);\n  border: 1px solid var(--gold);\n  max-width: 1200px;\n}\n\n.main img {\n  width: 800px;\n  padding: 2rem;\n}\n\n.main p {\n  color: white;\n  text-align: center;\n  font-size: 1.5rem;\n}\n\n/* ---------------- FOOTER STYLING ---------------- */\n\n.credit-container {\n  display: flex;\n  justify-content: space-around;\n  background-color: var(--transparent-black-background);\n  padding: 1rem;\n  color: white;\n  font-size: 1.1rem;\n  width: 100%;\n}\n\n.credit-container a {\n  color: white;\n  text-decoration: none;\n}\n\n.credit-container a:hover {\n  color: var(--gold);\n}\n\n/* ---------------- MENU STYLING ---------------- */\n\n.category {\n  text-align: center;\n  color: white;\n  font-size: 2rem;\n  font-weight: 700;\n  padding: 2rem;\n  text-decoration: underline;\n}\n\n.menu-container {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  /* grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); */\n  gap: 3rem;\n}\n\n.item {\n  position: relative;\n  display: flex;\n  align-items: center;\n  background: white;\n  border-radius: 10px;\n  /* width: 500px; */\n}\n\n.item img {\n  width: 200px;\n  height: 100%;\n  padding: 0;\n  border-top-right-radius: 10px;\n  border-bottom-right-radius: 10px;\n}\n\n.item-details {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  gap: 1rem;\n  padding: 1rem;\n}\n\n.item-details .name {\n  font-size: 1.25rem;\n}\n\n.item-details .desc {\n  font-size: 1.1rem;\n}\n\n.item .name {\n  color: black;\n}\n\n.item .desc {\n  color: #777;\n}\n\n.item-price {\n  position: absolute;\n  right: 8px;\n  top: 8px;\n  background: rgba(0, 0, 0, 0.6);\n  color: white;\n  padding: 8px;\n  border-radius: 10px;\n}\n\n/* ---------------- CONTACT STYLING ---------------- */\n.contact-container {\n  line-height: 3;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;EACE,eAAe;EACf,qBAAqB;EACrB,kDAAkD;AACpD;;AAEA;EACE,yBAAyB;EACzB;;2DAEoD;EACpD,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,0DAA4C;EAC5C,qCAAqC;AACvC;;AAEA;EACE,cAAc;EACd,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,8BAA8B;EAC9B,aAAa;AACf;;AAEA,qDAAqD;;AAErD;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,WAAW;EACX,qDAAqD;EACrD,eAAe;AACjB;;AAEA;EACE,kBAAkB;EAClB,eAAe;EACf,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;EAChB,iBAAiB;EACjB,YAAY;EACZ,6BAA6B;EAC7B,kBAAkB;EAClB,iBAAiB;EACjB,eAAe;AACjB;;AAEA;EACE,uBAAuB;EACvB,wBAAwB;EACxB,mCAAmC;AACrC;;AAEA,mDAAmD;;AAEnD;EACE,aAAa;EACb,qDAAqD;EACrD,6BAA6B;EAC7B,iBAAiB;AACnB;;AAEA;EACE,YAAY;EACZ,aAAa;AACf;;AAEA;EACE,YAAY;EACZ,kBAAkB;EAClB,iBAAiB;AACnB;;AAEA,qDAAqD;;AAErD;EACE,aAAa;EACb,6BAA6B;EAC7B,qDAAqD;EACrD,aAAa;EACb,YAAY;EACZ,iBAAiB;EACjB,WAAW;AACb;;AAEA;EACE,YAAY;EACZ,qBAAqB;AACvB;;AAEA;EACE,kBAAkB;AACpB;;AAEA,mDAAmD;;AAEnD;EACE,kBAAkB;EAClB,YAAY;EACZ,eAAe;EACf,gBAAgB;EAChB,aAAa;EACb,0BAA0B;AAC5B;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,iEAAiE;EACjE,SAAS;AACX;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,mBAAmB;EACnB,iBAAiB;EACjB,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,UAAU;EACV,6BAA6B;EAC7B,gCAAgC;AAClC;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,OAAO;EACP,SAAS;EACT,aAAa;AACf;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,kBAAkB;EAClB,UAAU;EACV,QAAQ;EACR,8BAA8B;EAC9B,YAAY;EACZ,YAAY;EACZ,mBAAmB;AACrB;;AAEA,sDAAsD;AACtD;EACE,cAAc;AAChB","sourcesContent":["* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n:root {\n  --gold: #ffd60a;\n  --rich-black: #000814;\n  --transparent-black-background: rgba(0, 0, 0, 0.5);\n}\n\n@font-face {\n  font-family: \"Montserrat\";\n  src: url(\"./fonts/Montserrat-Regular.ttf\") format(\"ttf\"),\n    url(\"./fonts/Montserrat-SemiBold.ttf\") format(\"ttf\")\n      url(\"./fonts/Montserrat-Bold.ttf\") format(\"ttf\");\n  font-weight: 700;\n  font-style: normal;\n}\n\nbody {\n  background: url(\"img/background.jpg\") center;\n  font-family: \"Montserrat\", sans-serif;\n}\n\n#content {\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n  height: 100vh;\n}\n\n/* ---------------- HEADER STYLING ---------------- */\n\n.header {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  background-color: var(--transparent-black-background);\n  padding: 2rem 0;\n}\n\n.restaurant-name {\n  color: var(--gold);\n  font-size: 4rem;\n  margin-bottom: 1rem;\n}\n\n.navigation {\n  display: flex;\n  column-gap: 2rem;\n}\n\n.btn {\n  padding: 0.75rem;\n  background: black;\n  color: white;\n  border: 1px solid var(--gold);\n  border-radius: 5px;\n  font-size: 1.5rem;\n  cursor: pointer;\n}\n\n.btn:hover {\n  background: var(--gold);\n  color: var(--rich-black);\n  border: 1px solid var(--rich-black);\n}\n\n/* ---------------- MAIN STYLING ---------------- */\n\n.main {\n  padding: 2rem;\n  background-color: var(--transparent-black-background);\n  border: 1px solid var(--gold);\n  max-width: 1200px;\n}\n\n.main img {\n  width: 800px;\n  padding: 2rem;\n}\n\n.main p {\n  color: white;\n  text-align: center;\n  font-size: 1.5rem;\n}\n\n/* ---------------- FOOTER STYLING ---------------- */\n\n.credit-container {\n  display: flex;\n  justify-content: space-around;\n  background-color: var(--transparent-black-background);\n  padding: 1rem;\n  color: white;\n  font-size: 1.1rem;\n  width: 100%;\n}\n\n.credit-container a {\n  color: white;\n  text-decoration: none;\n}\n\n.credit-container a:hover {\n  color: var(--gold);\n}\n\n/* ---------------- MENU STYLING ---------------- */\n\n.category {\n  text-align: center;\n  color: white;\n  font-size: 2rem;\n  font-weight: 700;\n  padding: 2rem;\n  text-decoration: underline;\n}\n\n.menu-container {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  /* grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); */\n  gap: 3rem;\n}\n\n.item {\n  position: relative;\n  display: flex;\n  align-items: center;\n  background: white;\n  border-radius: 10px;\n  /* width: 500px; */\n}\n\n.item img {\n  width: 200px;\n  height: 100%;\n  padding: 0;\n  border-top-right-radius: 10px;\n  border-bottom-right-radius: 10px;\n}\n\n.item-details {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  gap: 1rem;\n  padding: 1rem;\n}\n\n.item-details .name {\n  font-size: 1.25rem;\n}\n\n.item-details .desc {\n  font-size: 1.1rem;\n}\n\n.item .name {\n  color: black;\n}\n\n.item .desc {\n  color: #777;\n}\n\n.item-price {\n  position: absolute;\n  right: 8px;\n  top: 8px;\n  background: rgba(0, 0, 0, 0.6);\n  color: white;\n  padding: 8px;\n  border-radius: 10px;\n}\n\n/* ---------------- CONTACT STYLING ---------------- */\n.contact-container {\n  line-height: 3;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/contact-page.js":
/*!*****************************!*\
  !*** ./src/contact-page.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function createContactPage() {
  const home = document.createElement("div");
  home.classList.add("home-container");

  const contactDiv = document.createElement("div");
  contactDiv.classList.add("contact-container");
  const contactText = document.createElement("p");
  contactText.textContent = "Have any questions? Don't hesitate to call us!";
  const phoneNum = document.createElement("p");
  phoneNum.textContent = "(555)-555-5555";
  const address = document.createElement("p");
  address.textContent = "123 Main Street, Chicago, IL, USA";

  contactDiv.appendChild(contactText);
  contactDiv.appendChild(phoneNum);
  contactDiv.appendChild(address);
  home.appendChild(contactDiv);

  return home;
}

function loadContactPage() {
  const mainDiv = document.querySelector(".main");
  mainDiv.textContent = "";
  mainDiv.appendChild(createContactPage());
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadContactPage);


/***/ }),

/***/ "./src/home-page.js":
/*!**************************!*\
  !*** ./src/home-page.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _img_imgIndex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/imgIndex */ "./src/img/imgIndex.js");
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utility */ "./src/utility.js");



function createHomePage() {
  const home = document.createElement("div");
  home.classList.add("home-container");

  const topDesc = document.createElement("p");
  topDesc.textContent =
    "Come warm your body and soul with a delicious bowl of ramen!";
  const botDesc = document.createElement("p");
  botDesc.textContent = "While you're at it, enjoy one of our appetizers!";

  const img = (0,_utility__WEBPACK_IMPORTED_MODULE_1__.createImage)(_img_imgIndex__WEBPACK_IMPORTED_MODULE_0__.Ramen, "An illustration of a bowl of ramen");

  home.appendChild(topDesc);
  home.appendChild(img);
  home.appendChild(botDesc);

  return home;
}

// TODO: Add an active flag so that the currently loaded page doesn't get loaded again.
function loadHomePage() {
  const mainDiv = document.querySelector(".main");
  mainDiv.textContent = "";
  mainDiv.appendChild(createHomePage());
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHomePage);


/***/ }),

/***/ "./src/img/imgIndex.js":
/*!*****************************!*\
  !*** ./src/img/imgIndex.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CaliforniaRoll": () => (/* reexport default export from named module */ _california_roll_jpg__WEBPACK_IMPORTED_MODULE_1__),
/* harmony export */   "GyuDon": () => (/* reexport default export from named module */ _gyu_don_jpg__WEBPACK_IMPORTED_MODULE_2__),
/* harmony export */   "IcedOolongTea": () => (/* reexport default export from named module */ _iced_oolong_tea_jpg__WEBPACK_IMPORTED_MODULE_3__),
/* harmony export */   "KatsuDon": () => (/* reexport default export from named module */ _katsu_don_jpg__WEBPACK_IMPORTED_MODULE_4__),
/* harmony export */   "KuroRamen": () => (/* reexport default export from named module */ _kuro_ramen_jpg__WEBPACK_IMPORTED_MODULE_5__),
/* harmony export */   "MatchaLatte": () => (/* reexport default export from named module */ _matcha_latte_jpg__WEBPACK_IMPORTED_MODULE_6__),
/* harmony export */   "PassionfruitSoda": () => (/* reexport default export from named module */ _passionfruit_soda_jpg__WEBPACK_IMPORTED_MODULE_7__),
/* harmony export */   "RainbowRoll": () => (/* reexport default export from named module */ _rainbow_roll_jpg__WEBPACK_IMPORTED_MODULE_8__),
/* harmony export */   "Ramen": () => (/* reexport default export from named module */ _ramen_jpg__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   "ShrimpTempuraRoll": () => (/* reexport default export from named module */ _shrimp_tempura_roll_jpg__WEBPACK_IMPORTED_MODULE_9__),
/* harmony export */   "TokyoShoyuRamen": () => (/* reexport default export from named module */ _tokyo_shoyu_ramen_jpg__WEBPACK_IMPORTED_MODULE_10__),
/* harmony export */   "UnagiDon": () => (/* reexport default export from named module */ _unagi_don_jpg__WEBPACK_IMPORTED_MODULE_11__),
/* harmony export */   "VegetarianShoyuRamen": () => (/* reexport default export from named module */ _vegetarian_shoyu_ramen_jpg__WEBPACK_IMPORTED_MODULE_12__)
/* harmony export */ });
/* harmony import */ var _ramen_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ramen.jpg */ "./src/img/ramen.jpg");
/* harmony import */ var _california_roll_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./california-roll.jpg */ "./src/img/california-roll.jpg");
/* harmony import */ var _gyu_don_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gyu-don.jpg */ "./src/img/gyu-don.jpg");
/* harmony import */ var _iced_oolong_tea_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./iced-oolong-tea.jpg */ "./src/img/iced-oolong-tea.jpg");
/* harmony import */ var _katsu_don_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./katsu-don.jpg */ "./src/img/katsu-don.jpg");
/* harmony import */ var _kuro_ramen_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./kuro-ramen.jpg */ "./src/img/kuro-ramen.jpg");
/* harmony import */ var _matcha_latte_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./matcha-latte.jpg */ "./src/img/matcha-latte.jpg");
/* harmony import */ var _passionfruit_soda_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./passionfruit-soda.jpg */ "./src/img/passionfruit-soda.jpg");
/* harmony import */ var _rainbow_roll_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./rainbow-roll.jpg */ "./src/img/rainbow-roll.jpg");
/* harmony import */ var _shrimp_tempura_roll_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shrimp-tempura-roll.jpg */ "./src/img/shrimp-tempura-roll.jpg");
/* harmony import */ var _tokyo_shoyu_ramen_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./tokyo-shoyu-ramen.jpg */ "./src/img/tokyo-shoyu-ramen.jpg");
/* harmony import */ var _unagi_don_jpg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./unagi-don.jpg */ "./src/img/unagi-don.jpg");
/* harmony import */ var _vegetarian_shoyu_ramen_jpg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./vegetarian-shoyu-ramen.jpg */ "./src/img/vegetarian-shoyu-ramen.jpg");

















/***/ }),

/***/ "./src/menu-page.js":
/*!**************************!*\
  !*** ./src/menu-page.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _img_imgIndex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/imgIndex */ "./src/img/imgIndex.js");
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utility */ "./src/utility.js");



const menuItems = [
  {
    name: "California Roll (6)",
    desc: "Imitation crabstick, cucumber, avocado",
    img: _img_imgIndex__WEBPACK_IMPORTED_MODULE_0__.CaliforniaRoll,
    price: "7.00",
  },
  {
    name: "Rainbow Roll (8)",
    desc: "Crab, avocado, cucumber, topped with tuna, yellowtail, salmon, and whitefish.",
    img: _img_imgIndex__WEBPACK_IMPORTED_MODULE_0__.RainbowRoll,
    price: "17.00",
  },
  {
    name: "Shrimp Tempura Roll (6)",
    desc: "Shrimp, avocado",
    img: _img_imgIndex__WEBPACK_IMPORTED_MODULE_0__.ShrimpTempuraRoll,
    price: "10.50",
  },
  {
    name: "Kuro Ramen",
    desc: "Our signature tonkotsu(pork bone) broth ramen with secret house made black garlic oil. Toppings include chashu, egg, menma, corn, narutomaki, and green onions.",
    img: _img_imgIndex__WEBPACK_IMPORTED_MODULE_0__.KuroRamen,
    price: "18.40+",
  },
  {
    name: "Tokyo Shoyu Ramen",
    desc: "Shoyu ramen is a ramen noodle dish flavored with shoyu, the Japanese word for soy sauce. Toppings include chashu, egg, menma, corn, narutomaki, and green onions.",
    img: _img_imgIndex__WEBPACK_IMPORTED_MODULE_0__.TokyoShoyuRamen,
    price: "16.10+",
  },
  {
    name: "Vegetarian Shoyu Ramen",
    desc: "Two pieces of fried tofu, corn, wakame seaweed, menma in our in a light shoyu (Japanese soy sauce) and kelp soup base. Garnished with green onions.",
    img: _img_imgIndex__WEBPACK_IMPORTED_MODULE_0__.VegetarianShoyuRamen,
    price: "16.00+",
  },
  {
    name: "Gyu Don",
    desc: "Thinly sliced beef simmered with tender onions, savory-sweet sauce",
    img: _img_imgIndex__WEBPACK_IMPORTED_MODULE_0__.GyuDon,
    price: "16.10+",
  },
  {
    name: "Unagi Don",
    desc: "Sweet caramelized soy-based sauce (called tare) drizzled over perfectly grilled unagi and steamed rice.",
    img: _img_imgIndex__WEBPACK_IMPORTED_MODULE_0__.UnagiDon,
    price: "18.40",
  },
  {
    name: "Katsu Don",
    desc: "Japanese rice bowl topped with pork cutlet nestled in pillowy eggs and onions simmered in a sweet-savory sauce",
    img: _img_imgIndex__WEBPACK_IMPORTED_MODULE_0__.KatsuDon,
    price: "18.40+",
  },
  {
    name: "Matcha Latte",
    desc: "Smooth and creamy matcha sweetened just right and served with milk. This favorite will transport your senses to pure green delight.",
    img: _img_imgIndex__WEBPACK_IMPORTED_MODULE_0__.MatchaLatte,
    price: "6.60",
  },
  {
    name: "Passionfruit Soda",
    desc: "",
    img: _img_imgIndex__WEBPACK_IMPORTED_MODULE_0__.PassionfruitSoda,
    price: "6.60",
  },
  {
    name: "Iced Oolong Tea",
    desc: "",
    img: _img_imgIndex__WEBPACK_IMPORTED_MODULE_0__.IcedOolongTea,
    price: "5.50",
  },
];

function createMenuPage() {
  const menu = document.createElement("div");
  menu.classList.add("menu-container");

  for (const item of menuItems) {
    menu.appendChild(
      (0,_utility__WEBPACK_IMPORTED_MODULE_1__.createMenuItem)(item.name, item.desc, item.img, item.price)
    );
  }

  return menu;
}

function loadMenuPage() {
  const mainDiv = document.querySelector(".main");
  mainDiv.textContent = "";
  mainDiv.appendChild(createMenuPage());
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenuPage);


/***/ }),

/***/ "./src/utility.js":
/*!************************!*\
  !*** ./src/utility.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createFooter": () => (/* binding */ createFooter),
/* harmony export */   "createHeader": () => (/* binding */ createHeader),
/* harmony export */   "createImage": () => (/* binding */ createImage),
/* harmony export */   "createMain": () => (/* binding */ createMain),
/* harmony export */   "createMenuItem": () => (/* binding */ createMenuItem)
/* harmony export */ });
function createButton(text) {
  const btn = document.createElement("button");
  btn.textContent = text;
  btn.classList.add("btn", text.toLowerCase());
  return btn;
}

function createHeader() {
  const header = document.createElement("header");
  header.classList.add("header");

  const h1 = document.createElement("h1");
  h1.classList.add("restaurant-name");
  h1.textContent = "Really Rad Ramen";

  const nav = document.createElement("nav");
  nav.classList.add("navigation");

  const homeBtn = createButton("Home");
  const menuBtn = createButton("Menu");
  const contactBtn = createButton("Contact");

  header.appendChild(h1);
  header.appendChild(nav);
  nav.appendChild(homeBtn);
  nav.appendChild(menuBtn);
  nav.appendChild(contactBtn);

  return header;
}

function createImage(src, alt) {
  const img = new Image();
  img.src = src ?? "";
  img.alt = alt ?? "";

  return img;
}

function createFooter() {
  const footer = document.createElement("footer");
  footer.classList.add("credit-container");

  const backgroundCredit = document.createElement("div");
  backgroundCredit.innerHTML = `<a
          href="https://www.freepik.com/free-vector/vintage-geometric-ramen-soup-background_9979159.htm#query=ramen&position=0&from_view=search&track=sph">Image
          by pikisuperstar</a> on Freepik`;

  const photoCredit = document.createElement("div");
  photoCredit.innerHTML = `Photo by <a
          href="https://unsplash.com/it/@dineshramaswamy?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Dinesh
          Ramaswamy</a> on <a
          href="https://unsplash.com/photos/p-sEkj6-hAM?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>`;

  footer.appendChild(backgroundCredit);
  footer.appendChild(photoCredit);

  return footer;
}

function createMain() {
  const main = document.createElement("main");
  main.classList.add("main");
  return main;
}

function createMenuItem(name, desc, imgName, price) {
  const item = document.createElement("div");
  item.classList.add("item");

  const details = document.createElement("div");
  details.classList.add("item-details");

  const itemName = document.createElement("p");
  itemName.classList.add("name");
  itemName.textContent = name;
  const itemDesc = document.createElement("p");
  itemDesc.classList.add("desc");
  itemDesc.textContent = desc;

  details.append(itemName, itemDesc);

  const img = createImage(imgName);

  const itemPrice = document.createElement("span");
  itemPrice.classList.add("item-price");
  itemPrice.textContent = `$${price}`;

  item.append(details, img, itemPrice);

  return item;
}


/***/ }),

/***/ "./src/fonts/Montserrat-Bold.ttf":
/*!***************************************!*\
  !*** ./src/fonts/Montserrat-Bold.ttf ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2c155811b35513d5beaa.ttf";

/***/ }),

/***/ "./src/fonts/Montserrat-Regular.ttf":
/*!******************************************!*\
  !*** ./src/fonts/Montserrat-Regular.ttf ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ceb11275ab638627a643.ttf";

/***/ }),

/***/ "./src/fonts/Montserrat-SemiBold.ttf":
/*!*******************************************!*\
  !*** ./src/fonts/Montserrat-SemiBold.ttf ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d5e0cc788cba9ced1fb9.ttf";

/***/ }),

/***/ "./src/img/background.jpg":
/*!********************************!*\
  !*** ./src/img/background.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d69237859bfbb3869285.jpg";

/***/ }),

/***/ "./src/img/california-roll.jpg":
/*!*************************************!*\
  !*** ./src/img/california-roll.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1837d6b81df6b8e589f0.jpg";

/***/ }),

/***/ "./src/img/gyu-don.jpg":
/*!*****************************!*\
  !*** ./src/img/gyu-don.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0bd43215291e4c688b70.jpg";

/***/ }),

/***/ "./src/img/iced-oolong-tea.jpg":
/*!*************************************!*\
  !*** ./src/img/iced-oolong-tea.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c5bf8b35340188f79124.jpg";

/***/ }),

/***/ "./src/img/katsu-don.jpg":
/*!*******************************!*\
  !*** ./src/img/katsu-don.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "baa293f808e5fe037dc0.jpg";

/***/ }),

/***/ "./src/img/kuro-ramen.jpg":
/*!********************************!*\
  !*** ./src/img/kuro-ramen.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ab351a2a64ccda0b868c.jpg";

/***/ }),

/***/ "./src/img/matcha-latte.jpg":
/*!**********************************!*\
  !*** ./src/img/matcha-latte.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "385f729c7638a5097355.jpg";

/***/ }),

/***/ "./src/img/passionfruit-soda.jpg":
/*!***************************************!*\
  !*** ./src/img/passionfruit-soda.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8d7e160dfc7767a756cf.jpg";

/***/ }),

/***/ "./src/img/rainbow-roll.jpg":
/*!**********************************!*\
  !*** ./src/img/rainbow-roll.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5c235bc72672e472b5c3.jpg";

/***/ }),

/***/ "./src/img/ramen.jpg":
/*!***************************!*\
  !*** ./src/img/ramen.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ea3bc718581c22b3dcbd.jpg";

/***/ }),

/***/ "./src/img/shrimp-tempura-roll.jpg":
/*!*****************************************!*\
  !*** ./src/img/shrimp-tempura-roll.jpg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0f1fc0fafc6e6e888292.jpg";

/***/ }),

/***/ "./src/img/tokyo-shoyu-ramen.jpg":
/*!***************************************!*\
  !*** ./src/img/tokyo-shoyu-ramen.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "de4584f4dc81b2963f31.jpg";

/***/ }),

/***/ "./src/img/unagi-don.jpg":
/*!*******************************!*\
  !*** ./src/img/unagi-don.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "92343d4b838f3d13d9f8.jpg";

/***/ }),

/***/ "./src/img/vegetarian-shoyu-ramen.jpg":
/*!********************************************!*\
  !*** ./src/img/vegetarian-shoyu-ramen.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "be6a1486329172764dbd.jpg";

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-page */ "./src/home-page.js");
/* harmony import */ var _menu_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu-page */ "./src/menu-page.js");
/* harmony import */ var _contact_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact-page */ "./src/contact-page.js");
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utility */ "./src/utility.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.css */ "./src/style.css");






// loadMenuPage();
function initializePage() {
  const contentDiv = document.getElementById("content");
  contentDiv.appendChild((0,_utility__WEBPACK_IMPORTED_MODULE_3__.createHeader)());
  contentDiv.appendChild((0,_utility__WEBPACK_IMPORTED_MODULE_3__.createMain)());
  contentDiv.appendChild((0,_utility__WEBPACK_IMPORTED_MODULE_3__.createFooter)());
  (0,_home_page__WEBPACK_IMPORTED_MODULE_0__["default"])();
  // loadMenuPage();
}
initializePage();

const homeBtn = document.querySelector(".home");
homeBtn.addEventListener("click", () => {
  (0,_home_page__WEBPACK_IMPORTED_MODULE_0__["default"])();
});

const menuBtn = document.querySelector(".menu");
menuBtn.addEventListener("click", () => {
  (0,_menu_page__WEBPACK_IMPORTED_MODULE_1__["default"])();
});

const contactBtn = document.querySelector(".contact");
contactBtn.addEventListener("click", () => {
  (0,_contact_page__WEBPACK_IMPORTED_MODULE_2__["default"])();
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7Ozs7O0FDQXVDO0FBQ0E7QUFDTTtBQUNzQjtBQUM5Qzs7QUFFckI7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLHNEQUFZO0FBQ3JDLHlCQUF5QixvREFBVTtBQUNuQyx5QkFBeUIsc0RBQVk7QUFDckMsRUFBRSxzREFBWTtBQUNkO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRSxzREFBWTtBQUNkLENBQUM7O0FBRUQ7QUFDQTtBQUNBLEVBQUUsc0RBQVk7QUFDZCxDQUFDOztBQUVEO0FBQ0E7QUFDQSxFQUFFLHlEQUFlO0FBQ2pCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29udGFjdC1wYWdlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lLXBhZ2UuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2ltZy9pbWdJbmRleC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS1wYWdlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy91dGlsaXR5LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzL01vbnRzZXJyYXQtUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzL01vbnRzZXJyYXQtU2VtaUJvbGQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi9mb250cy9Nb250c2VycmF0LUJvbGQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiaW1nL2JhY2tncm91bmQuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuOnJvb3Qge1xcbiAgLS1nb2xkOiAjZmZkNjBhO1xcbiAgLS1yaWNoLWJsYWNrOiAjMDAwODE0O1xcbiAgLS10cmFuc3BhcmVudC1ibGFjay1iYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJNb250c2VycmF0XFxcIjtcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSBmb3JtYXQoXFxcInR0ZlxcXCIpLFxcbiAgICB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpIGZvcm1hdChcXFwidHRmXFxcIilcXG4gICAgICB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpIGZvcm1hdChcXFwidHRmXFxcIik7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gKyBcIikgY2VudGVyO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJNb250c2VycmF0XFxcIiwgc2Fucy1zZXJpZjtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4vKiAtLS0tLS0tLS0tLS0tLS0tIEhFQURFUiBTVFlMSU5HIC0tLS0tLS0tLS0tLS0tLS0gKi9cXG5cXG4uaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHJhbnNwYXJlbnQtYmxhY2stYmFja2dyb3VuZCk7XFxuICBwYWRkaW5nOiAycmVtIDA7XFxufVxcblxcbi5yZXN0YXVyYW50LW5hbWUge1xcbiAgY29sb3I6IHZhcigtLWdvbGQpO1xcbiAgZm9udC1zaXplOiA0cmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG59XFxuXFxuLm5hdmlnYXRpb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGNvbHVtbi1nYXA6IDJyZW07XFxufVxcblxcbi5idG4ge1xcbiAgcGFkZGluZzogMC43NXJlbTtcXG4gIGJhY2tncm91bmQ6IGJsYWNrO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZ29sZCk7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmJ0bjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1nb2xkKTtcXG4gIGNvbG9yOiB2YXIoLS1yaWNoLWJsYWNrKTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXJpY2gtYmxhY2spO1xcbn1cXG5cXG4vKiAtLS0tLS0tLS0tLS0tLS0tIE1BSU4gU1RZTElORyAtLS0tLS0tLS0tLS0tLS0tICovXFxuXFxuLm1haW4ge1xcbiAgcGFkZGluZzogMnJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRyYW5zcGFyZW50LWJsYWNrLWJhY2tncm91bmQpO1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZ29sZCk7XFxuICBtYXgtd2lkdGg6IDEyMDBweDtcXG59XFxuXFxuLm1haW4gaW1nIHtcXG4gIHdpZHRoOiA4MDBweDtcXG4gIHBhZGRpbmc6IDJyZW07XFxufVxcblxcbi5tYWluIHAge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbi8qIC0tLS0tLS0tLS0tLS0tLS0gRk9PVEVSIFNUWUxJTkcgLS0tLS0tLS0tLS0tLS0tLSAqL1xcblxcbi5jcmVkaXQtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRyYW5zcGFyZW50LWJsYWNrLWJhY2tncm91bmQpO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5jcmVkaXQtY29udGFpbmVyIGEge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG4uY3JlZGl0LWNvbnRhaW5lciBhOmhvdmVyIHtcXG4gIGNvbG9yOiB2YXIoLS1nb2xkKTtcXG59XFxuXFxuLyogLS0tLS0tLS0tLS0tLS0tLSBNRU5VIFNUWUxJTkcgLS0tLS0tLS0tLS0tLS0tLSAqL1xcblxcbi5jYXRlZ29yeSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgcGFkZGluZzogMnJlbTtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5cXG4ubWVudS1jb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gIC8qIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjUwcHgsIDFmcikpOyAqL1xcbiAgZ2FwOiAzcmVtO1xcbn1cXG5cXG4uaXRlbSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIC8qIHdpZHRoOiA1MDBweDsgKi9cXG59XFxuXFxuLml0ZW0gaW1nIHtcXG4gIHdpZHRoOiAyMDBweDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4uaXRlbS1kZXRhaWxzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZmxleDogMTtcXG4gIGdhcDogMXJlbTtcXG4gIHBhZGRpbmc6IDFyZW07XFxufVxcblxcbi5pdGVtLWRldGFpbHMgLm5hbWUge1xcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xcbn1cXG5cXG4uaXRlbS1kZXRhaWxzIC5kZXNjIHtcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcbn1cXG5cXG4uaXRlbSAubmFtZSB7XFxuICBjb2xvcjogYmxhY2s7XFxufVxcblxcbi5pdGVtIC5kZXNjIHtcXG4gIGNvbG9yOiAjNzc3O1xcbn1cXG5cXG4uaXRlbS1wcmljZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogOHB4O1xcbiAgdG9wOiA4cHg7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNik7XFxuICBjb2xvcjogd2hpdGU7XFxuICBwYWRkaW5nOiA4cHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4vKiAtLS0tLS0tLS0tLS0tLS0tIENPTlRBQ1QgU1RZTElORyAtLS0tLS0tLS0tLS0tLS0tICovXFxuLmNvbnRhY3QtY29udGFpbmVyIHtcXG4gIGxpbmUtaGVpZ2h0OiAzO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLGtEQUFrRDtBQUNwRDs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6Qjs7MkRBRW9EO0VBQ3BELGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSwwREFBNEM7RUFDNUMscUNBQXFDO0FBQ3ZDOztBQUVBO0VBQ0UsY0FBYztFQUNkLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5QixhQUFhO0FBQ2Y7O0FBRUEscURBQXFEOztBQUVyRDtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxxREFBcUQ7RUFDckQsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLDZCQUE2QjtFQUM3QixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsd0JBQXdCO0VBQ3hCLG1DQUFtQztBQUNyQzs7QUFFQSxtREFBbUQ7O0FBRW5EO0VBQ0UsYUFBYTtFQUNiLHFEQUFxRDtFQUNyRCw2QkFBNkI7RUFDN0IsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25COztBQUVBLHFEQUFxRDs7QUFFckQ7RUFDRSxhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLHFEQUFxRDtFQUNyRCxhQUFhO0VBQ2IsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxZQUFZO0VBQ1oscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBLG1EQUFtRDs7QUFFbkQ7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsaUVBQWlFO0VBQ2pFLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixVQUFVO0VBQ1YsNkJBQTZCO0VBQzdCLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsT0FBTztFQUNQLFNBQVM7RUFDVCxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFFBQVE7RUFDUiw4QkFBOEI7RUFDOUIsWUFBWTtFQUNaLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7O0FBRUEsc0RBQXNEO0FBQ3REO0VBQ0UsY0FBYztBQUNoQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG46cm9vdCB7XFxuICAtLWdvbGQ6ICNmZmQ2MGE7XFxuICAtLXJpY2gtYmxhY2s6ICMwMDA4MTQ7XFxuICAtLXRyYW5zcGFyZW50LWJsYWNrLWJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIk1vbnRzZXJyYXRcXFwiO1xcbiAgc3JjOiB1cmwoXFxcIi4vZm9udHMvTW9udHNlcnJhdC1SZWd1bGFyLnR0ZlxcXCIpIGZvcm1hdChcXFwidHRmXFxcIiksXFxuICAgIHVybChcXFwiLi9mb250cy9Nb250c2VycmF0LVNlbWlCb2xkLnR0ZlxcXCIpIGZvcm1hdChcXFwidHRmXFxcIilcXG4gICAgICB1cmwoXFxcIi4vZm9udHMvTW9udHNlcnJhdC1Cb2xkLnR0ZlxcXCIpIGZvcm1hdChcXFwidHRmXFxcIik7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQ6IHVybChcXFwiaW1nL2JhY2tncm91bmQuanBnXFxcIikgY2VudGVyO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJNb250c2VycmF0XFxcIiwgc2Fucy1zZXJpZjtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4vKiAtLS0tLS0tLS0tLS0tLS0tIEhFQURFUiBTVFlMSU5HIC0tLS0tLS0tLS0tLS0tLS0gKi9cXG5cXG4uaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHJhbnNwYXJlbnQtYmxhY2stYmFja2dyb3VuZCk7XFxuICBwYWRkaW5nOiAycmVtIDA7XFxufVxcblxcbi5yZXN0YXVyYW50LW5hbWUge1xcbiAgY29sb3I6IHZhcigtLWdvbGQpO1xcbiAgZm9udC1zaXplOiA0cmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG59XFxuXFxuLm5hdmlnYXRpb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGNvbHVtbi1nYXA6IDJyZW07XFxufVxcblxcbi5idG4ge1xcbiAgcGFkZGluZzogMC43NXJlbTtcXG4gIGJhY2tncm91bmQ6IGJsYWNrO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZ29sZCk7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmJ0bjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1nb2xkKTtcXG4gIGNvbG9yOiB2YXIoLS1yaWNoLWJsYWNrKTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXJpY2gtYmxhY2spO1xcbn1cXG5cXG4vKiAtLS0tLS0tLS0tLS0tLS0tIE1BSU4gU1RZTElORyAtLS0tLS0tLS0tLS0tLS0tICovXFxuXFxuLm1haW4ge1xcbiAgcGFkZGluZzogMnJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRyYW5zcGFyZW50LWJsYWNrLWJhY2tncm91bmQpO1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZ29sZCk7XFxuICBtYXgtd2lkdGg6IDEyMDBweDtcXG59XFxuXFxuLm1haW4gaW1nIHtcXG4gIHdpZHRoOiA4MDBweDtcXG4gIHBhZGRpbmc6IDJyZW07XFxufVxcblxcbi5tYWluIHAge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbi8qIC0tLS0tLS0tLS0tLS0tLS0gRk9PVEVSIFNUWUxJTkcgLS0tLS0tLS0tLS0tLS0tLSAqL1xcblxcbi5jcmVkaXQtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRyYW5zcGFyZW50LWJsYWNrLWJhY2tncm91bmQpO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5jcmVkaXQtY29udGFpbmVyIGEge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG4uY3JlZGl0LWNvbnRhaW5lciBhOmhvdmVyIHtcXG4gIGNvbG9yOiB2YXIoLS1nb2xkKTtcXG59XFxuXFxuLyogLS0tLS0tLS0tLS0tLS0tLSBNRU5VIFNUWUxJTkcgLS0tLS0tLS0tLS0tLS0tLSAqL1xcblxcbi5jYXRlZ29yeSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgcGFkZGluZzogMnJlbTtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5cXG4ubWVudS1jb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gIC8qIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjUwcHgsIDFmcikpOyAqL1xcbiAgZ2FwOiAzcmVtO1xcbn1cXG5cXG4uaXRlbSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIC8qIHdpZHRoOiA1MDBweDsgKi9cXG59XFxuXFxuLml0ZW0gaW1nIHtcXG4gIHdpZHRoOiAyMDBweDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4uaXRlbS1kZXRhaWxzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZmxleDogMTtcXG4gIGdhcDogMXJlbTtcXG4gIHBhZGRpbmc6IDFyZW07XFxufVxcblxcbi5pdGVtLWRldGFpbHMgLm5hbWUge1xcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xcbn1cXG5cXG4uaXRlbS1kZXRhaWxzIC5kZXNjIHtcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcbn1cXG5cXG4uaXRlbSAubmFtZSB7XFxuICBjb2xvcjogYmxhY2s7XFxufVxcblxcbi5pdGVtIC5kZXNjIHtcXG4gIGNvbG9yOiAjNzc3O1xcbn1cXG5cXG4uaXRlbS1wcmljZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogOHB4O1xcbiAgdG9wOiA4cHg7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNik7XFxuICBjb2xvcjogd2hpdGU7XFxuICBwYWRkaW5nOiA4cHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4vKiAtLS0tLS0tLS0tLS0tLS0tIENPTlRBQ1QgU1RZTElORyAtLS0tLS0tLS0tLS0tLS0tICovXFxuLmNvbnRhY3QtY29udGFpbmVyIHtcXG4gIGxpbmUtaGVpZ2h0OiAzO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZnVuY3Rpb24gY3JlYXRlQ29udGFjdFBhZ2UoKSB7XG4gIGNvbnN0IGhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBob21lLmNsYXNzTGlzdC5hZGQoXCJob21lLWNvbnRhaW5lclwiKTtcblxuICBjb25zdCBjb250YWN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29udGFjdERpdi5jbGFzc0xpc3QuYWRkKFwiY29udGFjdC1jb250YWluZXJcIik7XG4gIGNvbnN0IGNvbnRhY3RUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGNvbnRhY3RUZXh0LnRleHRDb250ZW50ID0gXCJIYXZlIGFueSBxdWVzdGlvbnM/IERvbid0IGhlc2l0YXRlIHRvIGNhbGwgdXMhXCI7XG4gIGNvbnN0IHBob25lTnVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHBob25lTnVtLnRleHRDb250ZW50ID0gXCIoNTU1KS01NTUtNTU1NVwiO1xuICBjb25zdCBhZGRyZXNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGFkZHJlc3MudGV4dENvbnRlbnQgPSBcIjEyMyBNYWluIFN0cmVldCwgQ2hpY2FnbywgSUwsIFVTQVwiO1xuXG4gIGNvbnRhY3REaXYuYXBwZW5kQ2hpbGQoY29udGFjdFRleHQpO1xuICBjb250YWN0RGl2LmFwcGVuZENoaWxkKHBob25lTnVtKTtcbiAgY29udGFjdERpdi5hcHBlbmRDaGlsZChhZGRyZXNzKTtcbiAgaG9tZS5hcHBlbmRDaGlsZChjb250YWN0RGl2KTtcblxuICByZXR1cm4gaG9tZTtcbn1cblxuZnVuY3Rpb24gbG9hZENvbnRhY3RQYWdlKCkge1xuICBjb25zdCBtYWluRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluXCIpO1xuICBtYWluRGl2LnRleHRDb250ZW50ID0gXCJcIjtcbiAgbWFpbkRpdi5hcHBlbmRDaGlsZChjcmVhdGVDb250YWN0UGFnZSgpKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbG9hZENvbnRhY3RQYWdlO1xuIiwiaW1wb3J0IHsgUmFtZW4gfSBmcm9tIFwiLi9pbWcvaW1nSW5kZXhcIjtcbmltcG9ydCB7IGNyZWF0ZUltYWdlIH0gZnJvbSBcIi4vdXRpbGl0eVwiO1xuXG5mdW5jdGlvbiBjcmVhdGVIb21lUGFnZSgpIHtcbiAgY29uc3QgaG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGhvbWUuY2xhc3NMaXN0LmFkZChcImhvbWUtY29udGFpbmVyXCIpO1xuXG4gIGNvbnN0IHRvcERlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgdG9wRGVzYy50ZXh0Q29udGVudCA9XG4gICAgXCJDb21lIHdhcm0geW91ciBib2R5IGFuZCBzb3VsIHdpdGggYSBkZWxpY2lvdXMgYm93bCBvZiByYW1lbiFcIjtcbiAgY29uc3QgYm90RGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBib3REZXNjLnRleHRDb250ZW50ID0gXCJXaGlsZSB5b3UncmUgYXQgaXQsIGVuam95IG9uZSBvZiBvdXIgYXBwZXRpemVycyFcIjtcblxuICBjb25zdCBpbWcgPSBjcmVhdGVJbWFnZShSYW1lbiwgXCJBbiBpbGx1c3RyYXRpb24gb2YgYSBib3dsIG9mIHJhbWVuXCIpO1xuXG4gIGhvbWUuYXBwZW5kQ2hpbGQodG9wRGVzYyk7XG4gIGhvbWUuYXBwZW5kQ2hpbGQoaW1nKTtcbiAgaG9tZS5hcHBlbmRDaGlsZChib3REZXNjKTtcblxuICByZXR1cm4gaG9tZTtcbn1cblxuLy8gVE9ETzogQWRkIGFuIGFjdGl2ZSBmbGFnIHNvIHRoYXQgdGhlIGN1cnJlbnRseSBsb2FkZWQgcGFnZSBkb2Vzbid0IGdldCBsb2FkZWQgYWdhaW4uXG5mdW5jdGlvbiBsb2FkSG9tZVBhZ2UoKSB7XG4gIGNvbnN0IG1haW5EaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW5cIik7XG4gIG1haW5EaXYudGV4dENvbnRlbnQgPSBcIlwiO1xuICBtYWluRGl2LmFwcGVuZENoaWxkKGNyZWF0ZUhvbWVQYWdlKCkpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBsb2FkSG9tZVBhZ2U7XG4iLCJpbXBvcnQgUmFtZW4gZnJvbSBcIi4vcmFtZW4uanBnXCI7XG5pbXBvcnQgQ2FsaWZvcm5pYVJvbGwgZnJvbSBcIi4vY2FsaWZvcm5pYS1yb2xsLmpwZ1wiO1xuaW1wb3J0IEd5dURvbiBmcm9tIFwiLi9neXUtZG9uLmpwZ1wiO1xuaW1wb3J0IEljZWRPb2xvbmdUZWEgZnJvbSBcIi4vaWNlZC1vb2xvbmctdGVhLmpwZ1wiO1xuaW1wb3J0IEthdHN1RG9uIGZyb20gXCIuL2thdHN1LWRvbi5qcGdcIjtcbmltcG9ydCBLdXJvUmFtZW4gZnJvbSBcIi4va3Vyby1yYW1lbi5qcGdcIjtcbmltcG9ydCBNYXRjaGFMYXR0ZSBmcm9tIFwiLi9tYXRjaGEtbGF0dGUuanBnXCI7XG5pbXBvcnQgUGFzc2lvbmZydWl0U29kYSBmcm9tIFwiLi9wYXNzaW9uZnJ1aXQtc29kYS5qcGdcIjtcbmltcG9ydCBSYWluYm93Um9sbCBmcm9tIFwiLi9yYWluYm93LXJvbGwuanBnXCI7XG5pbXBvcnQgU2hyaW1wVGVtcHVyYVJvbGwgZnJvbSBcIi4vc2hyaW1wLXRlbXB1cmEtcm9sbC5qcGdcIjtcbmltcG9ydCBUb2t5b1Nob3l1UmFtZW4gZnJvbSBcIi4vdG9reW8tc2hveXUtcmFtZW4uanBnXCI7XG5pbXBvcnQgVW5hZ2lEb24gZnJvbSBcIi4vdW5hZ2ktZG9uLmpwZ1wiO1xuaW1wb3J0IFZlZ2V0YXJpYW5TaG95dVJhbWVuIGZyb20gXCIuL3ZlZ2V0YXJpYW4tc2hveXUtcmFtZW4uanBnXCI7XG5cbmV4cG9ydCB7XG4gIFJhbWVuLFxuICBDYWxpZm9ybmlhUm9sbCxcbiAgR3l1RG9uLFxuICBJY2VkT29sb25nVGVhLFxuICBLYXRzdURvbixcbiAgS3Vyb1JhbWVuLFxuICBNYXRjaGFMYXR0ZSxcbiAgUGFzc2lvbmZydWl0U29kYSxcbiAgUmFpbmJvd1JvbGwsXG4gIFNocmltcFRlbXB1cmFSb2xsLFxuICBUb2t5b1Nob3l1UmFtZW4sXG4gIFVuYWdpRG9uLFxuICBWZWdldGFyaWFuU2hveXVSYW1lbixcbn07XG4iLCJpbXBvcnQge1xuICBDYWxpZm9ybmlhUm9sbCxcbiAgR3l1RG9uLFxuICBJY2VkT29sb25nVGVhLFxuICBLYXRzdURvbixcbiAgS3Vyb1JhbWVuLFxuICBNYXRjaGFMYXR0ZSxcbiAgUGFzc2lvbmZydWl0U29kYSxcbiAgUmFpbmJvd1JvbGwsXG4gIFNocmltcFRlbXB1cmFSb2xsLFxuICBUb2t5b1Nob3l1UmFtZW4sXG4gIFVuYWdpRG9uLFxuICBWZWdldGFyaWFuU2hveXVSYW1lbixcbn0gZnJvbSBcIi4vaW1nL2ltZ0luZGV4XCI7XG5pbXBvcnQgeyBjcmVhdGVNZW51SXRlbSB9IGZyb20gXCIuL3V0aWxpdHlcIjtcblxuY29uc3QgbWVudUl0ZW1zID0gW1xuICB7XG4gICAgbmFtZTogXCJDYWxpZm9ybmlhIFJvbGwgKDYpXCIsXG4gICAgZGVzYzogXCJJbWl0YXRpb24gY3JhYnN0aWNrLCBjdWN1bWJlciwgYXZvY2Fkb1wiLFxuICAgIGltZzogQ2FsaWZvcm5pYVJvbGwsXG4gICAgcHJpY2U6IFwiNy4wMFwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJSYWluYm93IFJvbGwgKDgpXCIsXG4gICAgZGVzYzogXCJDcmFiLCBhdm9jYWRvLCBjdWN1bWJlciwgdG9wcGVkIHdpdGggdHVuYSwgeWVsbG93dGFpbCwgc2FsbW9uLCBhbmQgd2hpdGVmaXNoLlwiLFxuICAgIGltZzogUmFpbmJvd1JvbGwsXG4gICAgcHJpY2U6IFwiMTcuMDBcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiU2hyaW1wIFRlbXB1cmEgUm9sbCAoNilcIixcbiAgICBkZXNjOiBcIlNocmltcCwgYXZvY2Fkb1wiLFxuICAgIGltZzogU2hyaW1wVGVtcHVyYVJvbGwsXG4gICAgcHJpY2U6IFwiMTAuNTBcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiS3VybyBSYW1lblwiLFxuICAgIGRlc2M6IFwiT3VyIHNpZ25hdHVyZSB0b25rb3RzdShwb3JrIGJvbmUpIGJyb3RoIHJhbWVuIHdpdGggc2VjcmV0IGhvdXNlIG1hZGUgYmxhY2sgZ2FybGljIG9pbC4gVG9wcGluZ3MgaW5jbHVkZSBjaGFzaHUsIGVnZywgbWVubWEsIGNvcm4sIG5hcnV0b21ha2ksIGFuZCBncmVlbiBvbmlvbnMuXCIsXG4gICAgaW1nOiBLdXJvUmFtZW4sXG4gICAgcHJpY2U6IFwiMTguNDArXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIlRva3lvIFNob3l1IFJhbWVuXCIsXG4gICAgZGVzYzogXCJTaG95dSByYW1lbiBpcyBhIHJhbWVuIG5vb2RsZSBkaXNoIGZsYXZvcmVkIHdpdGggc2hveXUsIHRoZSBKYXBhbmVzZSB3b3JkIGZvciBzb3kgc2F1Y2UuIFRvcHBpbmdzIGluY2x1ZGUgY2hhc2h1LCBlZ2csIG1lbm1hLCBjb3JuLCBuYXJ1dG9tYWtpLCBhbmQgZ3JlZW4gb25pb25zLlwiLFxuICAgIGltZzogVG9reW9TaG95dVJhbWVuLFxuICAgIHByaWNlOiBcIjE2LjEwK1wiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJWZWdldGFyaWFuIFNob3l1IFJhbWVuXCIsXG4gICAgZGVzYzogXCJUd28gcGllY2VzIG9mIGZyaWVkIHRvZnUsIGNvcm4sIHdha2FtZSBzZWF3ZWVkLCBtZW5tYSBpbiBvdXIgaW4gYSBsaWdodCBzaG95dSAoSmFwYW5lc2Ugc295IHNhdWNlKSBhbmQga2VscCBzb3VwIGJhc2UuIEdhcm5pc2hlZCB3aXRoIGdyZWVuIG9uaW9ucy5cIixcbiAgICBpbWc6IFZlZ2V0YXJpYW5TaG95dVJhbWVuLFxuICAgIHByaWNlOiBcIjE2LjAwK1wiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJHeXUgRG9uXCIsXG4gICAgZGVzYzogXCJUaGlubHkgc2xpY2VkIGJlZWYgc2ltbWVyZWQgd2l0aCB0ZW5kZXIgb25pb25zLCBzYXZvcnktc3dlZXQgc2F1Y2VcIixcbiAgICBpbWc6IEd5dURvbixcbiAgICBwcmljZTogXCIxNi4xMCtcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiVW5hZ2kgRG9uXCIsXG4gICAgZGVzYzogXCJTd2VldCBjYXJhbWVsaXplZCBzb3ktYmFzZWQgc2F1Y2UgKGNhbGxlZCB0YXJlKSBkcml6emxlZCBvdmVyIHBlcmZlY3RseSBncmlsbGVkIHVuYWdpIGFuZCBzdGVhbWVkIHJpY2UuXCIsXG4gICAgaW1nOiBVbmFnaURvbixcbiAgICBwcmljZTogXCIxOC40MFwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJLYXRzdSBEb25cIixcbiAgICBkZXNjOiBcIkphcGFuZXNlIHJpY2UgYm93bCB0b3BwZWQgd2l0aCBwb3JrIGN1dGxldCBuZXN0bGVkIGluIHBpbGxvd3kgZWdncyBhbmQgb25pb25zIHNpbW1lcmVkIGluIGEgc3dlZXQtc2F2b3J5IHNhdWNlXCIsXG4gICAgaW1nOiBLYXRzdURvbixcbiAgICBwcmljZTogXCIxOC40MCtcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiTWF0Y2hhIExhdHRlXCIsXG4gICAgZGVzYzogXCJTbW9vdGggYW5kIGNyZWFteSBtYXRjaGEgc3dlZXRlbmVkIGp1c3QgcmlnaHQgYW5kIHNlcnZlZCB3aXRoIG1pbGsuIFRoaXMgZmF2b3JpdGUgd2lsbCB0cmFuc3BvcnQgeW91ciBzZW5zZXMgdG8gcHVyZSBncmVlbiBkZWxpZ2h0LlwiLFxuICAgIGltZzogTWF0Y2hhTGF0dGUsXG4gICAgcHJpY2U6IFwiNi42MFwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJQYXNzaW9uZnJ1aXQgU29kYVwiLFxuICAgIGRlc2M6IFwiXCIsXG4gICAgaW1nOiBQYXNzaW9uZnJ1aXRTb2RhLFxuICAgIHByaWNlOiBcIjYuNjBcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiSWNlZCBPb2xvbmcgVGVhXCIsXG4gICAgZGVzYzogXCJcIixcbiAgICBpbWc6IEljZWRPb2xvbmdUZWEsXG4gICAgcHJpY2U6IFwiNS41MFwiLFxuICB9LFxuXTtcblxuZnVuY3Rpb24gY3JlYXRlTWVudVBhZ2UoKSB7XG4gIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtZW51LmNsYXNzTGlzdC5hZGQoXCJtZW51LWNvbnRhaW5lclwiKTtcblxuICBmb3IgKGNvbnN0IGl0ZW0gb2YgbWVudUl0ZW1zKSB7XG4gICAgbWVudS5hcHBlbmRDaGlsZChcbiAgICAgIGNyZWF0ZU1lbnVJdGVtKGl0ZW0ubmFtZSwgaXRlbS5kZXNjLCBpdGVtLmltZywgaXRlbS5wcmljZSlcbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIG1lbnU7XG59XG5cbmZ1bmN0aW9uIGxvYWRNZW51UGFnZSgpIHtcbiAgY29uc3QgbWFpbkRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpblwiKTtcbiAgbWFpbkRpdi50ZXh0Q29udGVudCA9IFwiXCI7XG4gIG1haW5EaXYuYXBwZW5kQ2hpbGQoY3JlYXRlTWVudVBhZ2UoKSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRNZW51UGFnZTtcbiIsImZ1bmN0aW9uIGNyZWF0ZUJ1dHRvbih0ZXh0KSB7XG4gIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGJ0bi50ZXh0Q29udGVudCA9IHRleHQ7XG4gIGJ0bi5jbGFzc0xpc3QuYWRkKFwiYnRuXCIsIHRleHQudG9Mb3dlckNhc2UoKSk7XG4gIHJldHVybiBidG47XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVIZWFkZXIoKSB7XG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIik7XG4gIGhlYWRlci5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyXCIpO1xuXG4gIGNvbnN0IGgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICBoMS5jbGFzc0xpc3QuYWRkKFwicmVzdGF1cmFudC1uYW1lXCIpO1xuICBoMS50ZXh0Q29udGVudCA9IFwiUmVhbGx5IFJhZCBSYW1lblwiO1xuXG4gIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJuYXZcIik7XG4gIG5hdi5jbGFzc0xpc3QuYWRkKFwibmF2aWdhdGlvblwiKTtcblxuICBjb25zdCBob21lQnRuID0gY3JlYXRlQnV0dG9uKFwiSG9tZVwiKTtcbiAgY29uc3QgbWVudUJ0biA9IGNyZWF0ZUJ1dHRvbihcIk1lbnVcIik7XG4gIGNvbnN0IGNvbnRhY3RCdG4gPSBjcmVhdGVCdXR0b24oXCJDb250YWN0XCIpO1xuXG4gIGhlYWRlci5hcHBlbmRDaGlsZChoMSk7XG4gIGhlYWRlci5hcHBlbmRDaGlsZChuYXYpO1xuICBuYXYuYXBwZW5kQ2hpbGQoaG9tZUJ0bik7XG4gIG5hdi5hcHBlbmRDaGlsZChtZW51QnRuKTtcbiAgbmF2LmFwcGVuZENoaWxkKGNvbnRhY3RCdG4pO1xuXG4gIHJldHVybiBoZWFkZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVJbWFnZShzcmMsIGFsdCkge1xuICBjb25zdCBpbWcgPSBuZXcgSW1hZ2UoKTtcbiAgaW1nLnNyYyA9IHNyYyA/PyBcIlwiO1xuICBpbWcuYWx0ID0gYWx0ID8/IFwiXCI7XG5cbiAgcmV0dXJuIGltZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUZvb3RlcigpIHtcbiAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvb3RlclwiKTtcbiAgZm9vdGVyLmNsYXNzTGlzdC5hZGQoXCJjcmVkaXQtY29udGFpbmVyXCIpO1xuXG4gIGNvbnN0IGJhY2tncm91bmRDcmVkaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBiYWNrZ3JvdW5kQ3JlZGl0LmlubmVySFRNTCA9IGA8YVxuICAgICAgICAgIGhyZWY9XCJodHRwczovL3d3dy5mcmVlcGlrLmNvbS9mcmVlLXZlY3Rvci92aW50YWdlLWdlb21ldHJpYy1yYW1lbi1zb3VwLWJhY2tncm91bmRfOTk3OTE1OS5odG0jcXVlcnk9cmFtZW4mcG9zaXRpb249MCZmcm9tX3ZpZXc9c2VhcmNoJnRyYWNrPXNwaFwiPkltYWdlXG4gICAgICAgICAgYnkgcGlraXN1cGVyc3RhcjwvYT4gb24gRnJlZXBpa2A7XG5cbiAgY29uc3QgcGhvdG9DcmVkaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBwaG90b0NyZWRpdC5pbm5lckhUTUwgPSBgUGhvdG8gYnkgPGFcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly91bnNwbGFzaC5jb20vaXQvQGRpbmVzaHJhbWFzd2FteT91dG1fc291cmNlPXVuc3BsYXNoJnV0bV9tZWRpdW09cmVmZXJyYWwmdXRtX2NvbnRlbnQ9Y3JlZGl0Q29weVRleHRcIj5EaW5lc2hcbiAgICAgICAgICBSYW1hc3dhbXk8L2E+IG9uIDxhXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vdW5zcGxhc2guY29tL3Bob3Rvcy9wLXNFa2o2LWhBTT91dG1fc291cmNlPXVuc3BsYXNoJnV0bV9tZWRpdW09cmVmZXJyYWwmdXRtX2NvbnRlbnQ9Y3JlZGl0Q29weVRleHRcIj5VbnNwbGFzaDwvYT5gO1xuXG4gIGZvb3Rlci5hcHBlbmRDaGlsZChiYWNrZ3JvdW5kQ3JlZGl0KTtcbiAgZm9vdGVyLmFwcGVuZENoaWxkKHBob3RvQ3JlZGl0KTtcblxuICByZXR1cm4gZm9vdGVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTWFpbigpIHtcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJtYWluXCIpO1xuICBtYWluLmNsYXNzTGlzdC5hZGQoXCJtYWluXCIpO1xuICByZXR1cm4gbWFpbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU1lbnVJdGVtKG5hbWUsIGRlc2MsIGltZ05hbWUsIHByaWNlKSB7XG4gIGNvbnN0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBpdGVtLmNsYXNzTGlzdC5hZGQoXCJpdGVtXCIpO1xuXG4gIGNvbnN0IGRldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBkZXRhaWxzLmNsYXNzTGlzdC5hZGQoXCJpdGVtLWRldGFpbHNcIik7XG5cbiAgY29uc3QgaXRlbU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgaXRlbU5hbWUuY2xhc3NMaXN0LmFkZChcIm5hbWVcIik7XG4gIGl0ZW1OYW1lLnRleHRDb250ZW50ID0gbmFtZTtcbiAgY29uc3QgaXRlbURlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgaXRlbURlc2MuY2xhc3NMaXN0LmFkZChcImRlc2NcIik7XG4gIGl0ZW1EZXNjLnRleHRDb250ZW50ID0gZGVzYztcblxuICBkZXRhaWxzLmFwcGVuZChpdGVtTmFtZSwgaXRlbURlc2MpO1xuXG4gIGNvbnN0IGltZyA9IGNyZWF0ZUltYWdlKGltZ05hbWUpO1xuXG4gIGNvbnN0IGl0ZW1QcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBpdGVtUHJpY2UuY2xhc3NMaXN0LmFkZChcIml0ZW0tcHJpY2VcIik7XG4gIGl0ZW1QcmljZS50ZXh0Q29udGVudCA9IGAkJHtwcmljZX1gO1xuXG4gIGl0ZW0uYXBwZW5kKGRldGFpbHMsIGltZywgaXRlbVByaWNlKTtcblxuICByZXR1cm4gaXRlbTtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgbG9hZEhvbWVQYWdlIGZyb20gXCIuL2hvbWUtcGFnZVwiO1xuaW1wb3J0IGxvYWRNZW51UGFnZSBmcm9tIFwiLi9tZW51LXBhZ2VcIjtcbmltcG9ydCBsb2FkQ29udGFjdFBhZ2UgZnJvbSBcIi4vY29udGFjdC1wYWdlXCI7XG5pbXBvcnQgeyBjcmVhdGVIZWFkZXIsIGNyZWF0ZUZvb3RlciwgY3JlYXRlTWFpbiB9IGZyb20gXCIuL3V0aWxpdHlcIjtcbmltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5cbi8vIGxvYWRNZW51UGFnZSgpO1xuZnVuY3Rpb24gaW5pdGlhbGl6ZVBhZ2UoKSB7XG4gIGNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG4gIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoY3JlYXRlSGVhZGVyKCkpO1xuICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGNyZWF0ZU1haW4oKSk7XG4gIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoY3JlYXRlRm9vdGVyKCkpO1xuICBsb2FkSG9tZVBhZ2UoKTtcbiAgLy8gbG9hZE1lbnVQYWdlKCk7XG59XG5pbml0aWFsaXplUGFnZSgpO1xuXG5jb25zdCBob21lQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ob21lXCIpO1xuaG9tZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBsb2FkSG9tZVBhZ2UoKTtcbn0pO1xuXG5jb25zdCBtZW51QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51XCIpO1xubWVudUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBsb2FkTWVudVBhZ2UoKTtcbn0pO1xuXG5jb25zdCBjb250YWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250YWN0XCIpO1xuY29udGFjdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBsb2FkQ29udGFjdFBhZ2UoKTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9