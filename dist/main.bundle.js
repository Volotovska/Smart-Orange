/******/ (function(modules) { // webpackBootstrap
/******/     // The module cache
/******/     var installedModules = {};
/******/
/******/     // The require function
/******/     function __webpack_require__(moduleId) {
/******/
/******/         // Check if module is in cache
/******/         if(installedModules[moduleId]) {
/******/             return installedModules[moduleId].exports;
/******/         }
/******/         // Create a new module (and put it into the cache)
/******/         var module = installedModules[moduleId] = {
/******/             i: moduleId,
/******/             l: false,
/******/             exports: {}
/******/         };
/******/
/******/         // Execute the module function
/******/         modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/         // Flag the module as loaded
/******/         module.l = true;
/******/
/******/         // Return the exports of the module
/******/         return module.exports;
/******/     }
/******/
/******/
/******/     // expose the modules object (__webpack_modules__)
/******/     __webpack_require__.m = modules;
/******/
/******/     // expose the module cache
/******/     __webpack_require__.c = installedModules;
/******/
/******/     // define getter function for harmony exports
/******/     __webpack_require__.d = function(exports, name, getter) {
/******/         if(!__webpack_require__.o(exports, name)) {
/******/             Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/         }
/******/     };
/******/
/******/     // define __esModule on exports
/******/     __webpack_require__.r = function(exports) {
/******/         if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/             Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/         }
/******/         Object.defineProperty(exports, '__esModule', { value: true });
/******/     };
/******/
/******/     // create a fake namespace object
/******/     // mode & 1: value is a module id, require it
/******/     // mode & 2: merge all properties of value into the ns
/******/     // mode & 4: return value when already ns object
/******/     // mode & 8|1: behave like require
/******/     __webpack_require__.t = function(value, mode) {
/******/         if(mode & 1) value = __webpack_require__(value);
/******/         if(mode & 8) return value;
/******/         if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/         var ns = Object.create(null);
/******/         __webpack_require__.r(ns);
/******/         Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/         if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/         return ns;
/******/     };
/******/
/******/     // getDefaultExport function for compatibility with non-harmony modules
/******/     __webpack_require__.n = function(module) {
/******/         var getter = module && module.__esModule ?
/******/             function getDefault() { return module['default']; } :
/******/             function getModuleExports() { return module; };
/******/         __webpack_require__.d(getter, 'a', getter);
/******/         return getter;
/******/     };
/******/
/******/     // Object.prototype.hasOwnProperty.call
/******/     __webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/     // __webpack_public_path__
/******/     __webpack_require__.p = "/js/dist/";
/******/
/******/
/******/     // Load entry module and return exports
/******/     return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./src/css/style.scss":
/*!***********************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js!./src/css/style.scss ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "* {\n  margin: 0px;\n  padding: 0px;\n  box-sizing: border-box; }\n\nbody {\n  font-family: \"Brandon Grotesque\";\n  color: #ffffff; }\n\nheader {\n  height: 620px;\n  background: no-repeat center / cover;\n  margin: auto;\n  position: relative; }\n\n.header1 {\n  font-size: 32px;\n  padding-top: 220px;\n  text-align: center; }\n\n.header2 {\n  font-size: 66px;\n  text-transform: uppercase;\n  text-align: center;\n  padding-top: 30px; }\n\n#buttonLearn {\n  font-size: 23px;\n  width: 240px;\n  height: 60px;\n  border: 2px solid white;\n  position: absolute;\n  right: 0;\n  left: 0;\n  bottom: 120px;\n  margin: auto;\n  padding-top: 15px;\n  text-align: center; }\n  #buttonLearn:hover {\n    cursor: pointer;\n    font-size: 25px;\n    padding-top: 12px;\n    font-weight: bold;\n    border: 2px solid black; }\n\n.main {\n  height: 800px;\n  background: #111111;\n  margin: auto;\n  position: relative; }\n\n.mainText1 {\n  padding-top: 90px;\n  text-align: center;\n  font-size: 60px;\n  letter-spacing: -1px; }\n\n.boldText {\n  font-weight: bold; }\n\n.mainText2 {\n  font-size: 22px;\n  padding-top: 10px;\n  text-align: center;\n  margin-bottom: 70px; }\n\n.container {\n  width: 820px;\n  height: 350px;\n  margin: auto;\n  display: flex;\n  margin-bottom: 45px; }\n\n.part {\n  width: 240px;\n  margin-right: 40px; }\n\n.circle {\n  border: 5px solid #ffffff;\n  width: 235px;\n  height: 235px;\n  border-radius: 50%;\n  position: relative; }\n\n.name {\n  font-size: 18px;\n  text-align: center;\n  padding-top: 10px; }\n\n.profession {\n  font-size: 16px;\n  text-align: center;\n  padding-top: 5px;\n  margin-bottom: 10px; }\n\n.pic {\n  width: 48px;\n  height: 48px;\n  background: no-repeat center / contain;\n  margin-right: 12px; }\n  .pic:hover {\n    cursor: pointer;\n    opacity: 0.5; }\n\n.picHolder {\n  height: 50px;\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n\n.desc {\n  font-size: 20px;\n  text-align: center; }\n\n.form {\n  height: 640px;\n  background: #7690c5;\n  margin: auto;\n  position: relative; }\n\n.contSide {\n  width: 960px;\n  padding-top: 100px;\n  margin: auto;\n  display: flex;\n  margin-bottom: 92px; }\n\n.leftSide {\n  width: 410px;\n  margin-right: 60px; }\n\n.leftText1 {\n  font-size: 60px;\n  margin-bottom: 25px; }\n\n.leftText2 {\n  font-size: 18px;\n  margin-bottom: 50px; }\n\n.pic2 {\n  background: no-repeat center / contain;\n  width: 25px;\n  height: 40px; }\n\n.itemText {\n  font-size: 18px;\n  margin-left: 10px; }\n\n.item {\n  display: flex;\n  align-items: center;\n  margin-bottom: 30px; }\n  .item:hover {\n    cursor: pointer;\n    text-decoration: underline; }\n    .item:hover .pic2 {\n      transform: scaleX(1.5) scaleY(1.5); }\n\n.area {\n  margin-right: 50px; }\n\n.contPart {\n  display: flex; }\n\n#name {\n  width: 460px;\n  height: 55px;\n  background: white;\n  color: #cdcdcd;\n  font-size: 18px;\n  padding-left: 20px;\n  margin-bottom: 25px; }\n\n#mail {\n  width: 460px;\n  height: 55px;\n  background: white;\n  color: #cdcdcd;\n  font-size: 18px;\n  padding-left: 20px;\n  margin-bottom: 25px; }\n\n#msg {\n  width: 460px;\n  height: 210px;\n  background: white;\n  color: #cdcdcd;\n  font-size: 18px;\n  padding: 15px 20px; }\n\n.line {\n  width: 940px;\n  height: 1px;\n  background: #9bb4e6;\n  position: absolute;\n  left: 0;\n  right: 0;\n  margin: auto;\n  bottom: 80px; }\n\n.footer {\n  font-size: 16px;\n  text-align: center; }\n\n.avatar {\n  width: 150px;\n  height: 150px;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  margin: auto; }\n  .avatar:hover {\n    cursor: pointer;\n    transform: scale(1.5); }\n\n.moon {\n  background: no-repeat center/contain;\n  width: 100px;\n  height: 100px;\n  position: absolute;\n  top: 20px;\n  right: 0;\n  left: 0;\n  margin: auto; }\n\n@keyframes move {\n  40% {\n    left: 50%;\n    bottom: 85%;\n    animation-timing-function: ease-in; } }\n\n.moon {\n  animation: move 45s infinite linear; }\n\n@keyframes blink {\n  90% {\n    opacity: 0.2; } }\n\n.circle {\n  animation: blink 12s ease infinite; }\n\n@keyframes change {\n  from {\n    color: white; }\n  to {\n    color: black;\n    background: white; } }\n\n#buttonLearn {\n  animation: change 12s ease infinite; }\n\n#modal {\n  height: 2060px;\n  margin: auto;\n  background: white;\n  display: none;\n  position: relative; }\n\n.cover .shown#modal {\n  display: block; }\n\n.closeButton {\n  height: 50px;\n  background: silver;\n  font-size: 24px;\n  cursor: pointer;\n  position: absolute;\n  top: 0;\n  right: 0; }\n\n.addInfo {\n  display: none; }\n\n.addInfo2 {\n  display: none; }\n\n.addInfo3 {\n  display: none; }\n\n@media (max-width: 767px) {\n  .cover .moon {\n    display: none; }\n  .header2 {\n    font-size: 45px; }\n  .header1 {\n    font-size: 22px; }\n  .container {\n    display: none; }\n  .addInfo {\n    font-size: 32px;\n    margin-top: 50px;\n    text-align: center;\n    text-decoration: underline;\n    cursor: pointer; }\n  .addInfo {\n    display: block; }\n  .leftSide {\n    display: none; }\n  .rightSide {\n    width: 200px;\n    margin-left: 20px; }\n  .addInfo2 {\n    display: block;\n    font-size: 32px;\n    position: absolute;\n    top: 10px;\n    left: 20px;\n    margin: auto; }\n  .addInfo3 {\n    display: block;\n    bottom: 120px;\n    left: 20px;\n    font-size: 32px;\n    margin-top: 50px;\n    text-align: center;\n    text-decoration: underline;\n    position: absolute;\n    cursor: pointer; }\n  .footer {\n    margin-left: 20px;\n    text-align: left; } }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
    MIT License http://www.opensource.org/licenses/mit-license.php
    Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
    var list = [];

    // return the list of modules as css string
    list.toString = function toString() {
        return this.map(function (item) {
            var content = cssWithMappingToString(item, useSourceMap);
            if(item[2]) {
                return "@media " + item[2] + "{" + content + "}";
            } else {
                return content;
            }
        }).join("");
    };

    // import a list of modules into the list
    list.i = function(modules, mediaQuery) {
        if(typeof modules === "string")
            modules = [[null, modules, ""]];
        var alreadyImportedModules = {};
        for(var i = 0; i < this.length; i++) {
            var id = this[i][0];
            if(typeof id === "number")
                alreadyImportedModules[id] = true;
        }
        for(i = 0; i < modules.length; i++) {
            var item = modules[i];
            // skip already imported module
            // this implementation is not 100% perfect for weird media query combinations
            //  when a module is imported multiple times with different media queries.
            //  I hope this will never occur (Hey this way we have smaller bundles)
            if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
                if(mediaQuery && !item[2]) {
                    item[2] = mediaQuery;
                } else if(mediaQuery) {
                    item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
                }
                list.push(item);
            }
        }
    };
    return list;
};

function cssWithMappingToString(item, useSourceMap) {
    var content = item[1] || '';
    var cssMapping = item[3];
    if (!cssMapping) {
        return content;
    }

    if (useSourceMap && typeof btoa === 'function') {
        var sourceMapping = toComment(cssMapping);
        var sourceURLs = cssMapping.sources.map(function (source) {
            return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
        });

        return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
    }

    return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
    var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

    return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
    MIT License http://www.opensource.org/licenses/mit-license.php
    Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var    memoize = function (fn) {
    var memo;

    return function () {
        if (typeof memo === "undefined") memo = fn.apply(this, arguments);
        return memo;
    };
};

var isOldIE = memoize(function () {
    // Test for IE <= 9 as proposed by Browserhacks
    // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
    // Tests for existence of standard globals is to allow style-loader
    // to operate correctly into non-standard environments
    // @see https://github.com/webpack-contrib/style-loader/issues/177
    return window && document && document.all && !window.atob;
});

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
    var memo = {};

    return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
            var styleTarget = getTarget.call(this, target);
            // Special case to return head of iframe instead of iframe itself
            if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
                try {
                    // This will throw an exception if access to iframe is blocked
                    // due to cross-origin restrictions
                    styleTarget = styleTarget.contentDocument.head;
                } catch(e) {
                    styleTarget = null;
                }
            }
            memo[target] = styleTarget;
        }
        return memo[target]
    };
})();

var singleton = null;
var    singletonCounter = 0;
var    stylesInsertedAtTop = [];

var    fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
    if (typeof DEBUG !== "undefined" && DEBUG) {
        if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
    }

    options = options || {};

    options.attrs = typeof options.attrs === "object" ? options.attrs : {};

    // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
    // tags it will allow on a page
    if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

    // By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

    // By default, add <style> tags to the bottom of the target
    if (!options.insertAt) options.insertAt = "bottom";

    var styles = listToStyles(list, options);

    addStylesToDom(styles, options);

    return function update (newList) {
        var mayRemove = [];

        for (var i = 0; i < styles.length; i++) {
            var item = styles[i];
            var domStyle = stylesInDom[item.id];

            domStyle.refs--;
            mayRemove.push(domStyle);
        }

        if(newList) {
            var newStyles = listToStyles(newList, options);
            addStylesToDom(newStyles, options);
        }

        for (var i = 0; i < mayRemove.length; i++) {
            var domStyle = mayRemove[i];

            if(domStyle.refs === 0) {
                for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

                delete stylesInDom[domStyle.id];
            }
        }
    };
};

function addStylesToDom (styles, options) {
    for (var i = 0; i < styles.length; i++) {
        var item = styles[i];
        var domStyle = stylesInDom[item.id];

        if(domStyle) {
            domStyle.refs++;

            for(var j = 0; j < domStyle.parts.length; j++) {
                domStyle.parts[j](item.parts[j]);
            }

            for(; j < item.parts.length; j++) {
                domStyle.parts.push(addStyle(item.parts[j], options));
            }
        } else {
            var parts = [];

            for(var j = 0; j < item.parts.length; j++) {
                parts.push(addStyle(item.parts[j], options));
            }

            stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
        }
    }
}

function listToStyles (list, options) {
    var styles = [];
    var newStyles = {};

    for (var i = 0; i < list.length; i++) {
        var item = list[i];
        var id = options.base ? item[0] + options.base : item[0];
        var css = item[1];
        var media = item[2];
        var sourceMap = item[3];
        var part = {css: css, media: media, sourceMap: sourceMap};

        if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
        else newStyles[id].parts.push(part);
    }

    return styles;
}

function insertStyleElement (options, style) {
    var target = getElement(options.insertInto)

    if (!target) {
        throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
    }

    var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

    if (options.insertAt === "top") {
        if (!lastStyleElementInsertedAtTop) {
            target.insertBefore(style, target.firstChild);
        } else if (lastStyleElementInsertedAtTop.nextSibling) {
            target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
        } else {
            target.appendChild(style);
        }
        stylesInsertedAtTop.push(style);
    } else if (options.insertAt === "bottom") {
        target.appendChild(style);
    } else if (typeof options.insertAt === "object" && options.insertAt.before) {
        var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
        target.insertBefore(style, nextSibling);
    } else {
        throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
    }
}

function removeStyleElement (style) {
    if (style.parentNode === null) return false;
    style.parentNode.removeChild(style);

    var idx = stylesInsertedAtTop.indexOf(style);
    if(idx >= 0) {
        stylesInsertedAtTop.splice(idx, 1);
    }
}

function createStyleElement (options) {
    var style = document.createElement("style");

    if(options.attrs.type === undefined) {
        options.attrs.type = "text/css";
    }

    addAttrs(style, options.attrs);
    insertStyleElement(options, style);

    return style;
}

function createLinkElement (options) {
    var link = document.createElement("link");

    if(options.attrs.type === undefined) {
        options.attrs.type = "text/css";
    }
    options.attrs.rel = "stylesheet";

    addAttrs(link, options.attrs);
    insertStyleElement(options, link);

    return link;
}

function addAttrs (el, attrs) {
    Object.keys(attrs).forEach(function (key) {
        el.setAttribute(key, attrs[key]);
    });
}

function addStyle (obj, options) {
    var style, update, remove, result;

    // If a transform function was defined, run it on the css
    if (options.transform && obj.css) {
        result = options.transform(obj.css);

        if (result) {
            // If transform returns a value, use that instead of the original css.
            // This allows running runtime transformations on the css.
            obj.css = result;
        } else {
            // If the transform function returns a falsy value, don't add this css.
            // This allows conditional loading of css
            return function() {
                // noop
            };
        }
    }

    if (options.singleton) {
        var styleIndex = singletonCounter++;

        style = singleton || (singleton = createStyleElement(options));

        update = applyToSingletonTag.bind(null, style, styleIndex, false);
        remove = applyToSingletonTag.bind(null, style, styleIndex, true);

    } else if (
        obj.sourceMap &&
        typeof URL === "function" &&
        typeof URL.createObjectURL === "function" &&
        typeof URL.revokeObjectURL === "function" &&
        typeof Blob === "function" &&
        typeof btoa === "function"
    ) {
        style = createLinkElement(options);
        update = updateLink.bind(null, style, options);
        remove = function () {
            removeStyleElement(style);

            if(style.href) URL.revokeObjectURL(style.href);
        };
    } else {
        style = createStyleElement(options);
        update = applyToTag.bind(null, style);
        remove = function () {
            removeStyleElement(style);
        };
    }

    update(obj);

    return function updateStyle (newObj) {
        if (newObj) {
            if (
                newObj.css === obj.css &&
                newObj.media === obj.media &&
                newObj.sourceMap === obj.sourceMap
            ) {
                return;
            }

            update(obj = newObj);
        } else {
            remove();
        }
    };
}

var replaceText = (function () {
    var textStore = [];

    return function (index, replacement) {
        textStore[index] = replacement;

        return textStore.filter(Boolean).join('\n');
    };
})();

function applyToSingletonTag (style, index, remove, obj) {
    var css = remove ? "" : obj.css;

    if (style.styleSheet) {
        style.styleSheet.cssText = replaceText(index, css);
    } else {
        var cssNode = document.createTextNode(css);
        var childNodes = style.childNodes;

        if (childNodes[index]) style.removeChild(childNodes[index]);

        if (childNodes.length) {
            style.insertBefore(cssNode, childNodes[index]);
        } else {
            style.appendChild(cssNode);
        }
    }
}

function applyToTag (style, obj) {
    var css = obj.css;
    var media = obj.media;

    if(media) {
        style.setAttribute("media", media)
    }

    if(style.styleSheet) {
        style.styleSheet.cssText = css;
    } else {
        while(style.firstChild) {
            style.removeChild(style.firstChild);
        }

        style.appendChild(document.createTextNode(css));
    }
}

function updateLink (link, options, obj) {
    var css = obj.css;
    var sourceMap = obj.sourceMap;

    /*
        If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
        and there is no publicPath defined then lets turn convertToAbsoluteUrls
        on by default.  Otherwise default to the convertToAbsoluteUrls option
        directly
    */
    var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

    if (options.convertToAbsoluteUrls || autoFixUrls) {
        css = fixUrls(css);
    }

    if (sourceMap) {
        // http://stackoverflow.com/a/26603875
        css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
    }

    var blob = new Blob([css], { type: "text/css" });

    var oldSrc = link.href;

    link.href = URL.createObjectURL(blob);

    if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

    // blank or null?
    if (!css || typeof css !== "string") {
      return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

    // convert each url(...)
    /*
    This regular expression is just a way to recursively match brackets within
    a string.

     /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
       (  = Start a capturing group
         (?:  = Start a non-capturing group
             [^)(]  = Match anything that isn't a parentheses
             |  = OR
             \(  = Match a start parentheses
                 (?:  = Start another non-capturing groups
                     [^)(]+  = Match anything that isn't a parentheses
                     |  = OR
                     \(  = Match a start parentheses
                         [^)(]*  = Match anything that isn't a parentheses
                     \)  = Match a end parentheses
                 )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
     \)  = Match a close parens

     /gi  = Get all matches, not the first.  Be case insensitive.
     */
    var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
        // strip quotes (if they exist)
        var unquotedOrigUrl = origUrl
            .trim()
            .replace(/^"(.*)"$/, function(o, $1){ return $1; })
            .replace(/^'(.*)'$/, function(o, $1){ return $1; });

        // already a full url? no change
        if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
          return fullMatch;
        }

        // convert the url to a full url
        var newUrl;

        if (unquotedOrigUrl.indexOf("//") === 0) {
              //TODO: should we add protocol?
            newUrl = unquotedOrigUrl;
        } else if (unquotedOrigUrl.indexOf("/") === 0) {
            // path should be relative to the base url
            newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
        } else {
            // path should be relative to current directory
            newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
        }

        // send back the fixed url(...)
        return "url(" + JSON.stringify(newUrl) + ")";
    });

    // send back the fixed css
    return fixedCss;
};


/***/ }),

/***/ "./src/css/style.scss":
/*!****************************!*\
  !*** ./src/css/style.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader!../../node_modules/sass-loader/lib/loader.js!./style.scss */ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./src/css/style.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ./css/style.scss */ "./src/css/style.scss");

var modal = document.getElementById('modal');

function showFunc() {
  modal.classList.add('shown');
}

function hideFunc() {
  modal.classList.remove('shown');
}

var buttonLearn = document.getElementById('buttonLearn');

var closeButton = document.getElementsByClassName('closeButton')[0];

buttonLearn.addEventListener('click', showFunc);

closeButton.addEventListener('click', hideFunc);

/***/ })

/******/ });