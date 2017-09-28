webpackJsonp([0],[
/* 0 */,
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__assets_small_jpg__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__assets_small_jpg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__assets_small_jpg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__assets_big_jpg__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__assets_big_jpg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__assets_big_jpg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__styles_image_viewer_css__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__styles_image_viewer_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__styles_image_viewer_css__);




const image = document.createElement('img');
// image.src = 'http://lorempixel.com/400/400/'
image.src = __WEBPACK_IMPORTED_MODULE_0__assets_small_jpg___default.a

document.body.appendChild(image);


const bigImage = document.createElement('img');
// bigImage.src = 'http://lorempixel.com/400/400/'
bigImage.src = __WEBPACK_IMPORTED_MODULE_1__assets_big_jpg___default.a

document.body.appendChild(bigImage);



/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "563abb3518f56119c2a151e96f1ee3ae.jpg";

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(5);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(7)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js!./image_viewer.css", function() {
			var newContent = require("!!../node_modules/css-loader/index.js!./image_viewer.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(undefined);
// imports


// module
exports.push([module.i, "img{\n    border: 10px solid beige;\n}", ""]);

// exports


/***/ }),
/* 6 */
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
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
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

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			memo[selector] = fn.call(this, selector);
		}

		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(8);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

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
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
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

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
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
/* 8 */
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
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
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


/***/ })
]);