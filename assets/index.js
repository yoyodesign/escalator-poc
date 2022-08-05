/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/ts/blocks.common/AccordionComponent.ts":
/*!****************************************************!*\
  !*** ./src/ts/blocks.common/AccordionComponent.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ AccordionComponent; }
/* harmony export */ });
var __classPrivateFieldGet = undefined && undefined.__classPrivateFieldGet || function (receiver, state, kind, f) {
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};

var __classPrivateFieldSet = undefined && undefined.__classPrivateFieldSet || function (receiver, state, value, kind, f) {
  if (kind === "m") throw new TypeError("Private method is not writable");
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};

var _AccordionComponent_summary, _AccordionComponent_open, _AccordionComponent_handleClick, _AccordionComponent_handleTransitionEnd;

class AccordionComponent extends HTMLDetailsElement {
  constructor() {
    super(...arguments);

    _AccordionComponent_summary.set(this, void 0);

    _AccordionComponent_open.set(this, void 0);

    _AccordionComponent_handleClick.set(this, event => {
      event.preventDefault();
      this.style.height = `${this.offsetHeight}px`;
      this.style.overflow = "hidden";

      if (__classPrivateFieldGet(this, _AccordionComponent_open, "f")) {
        __classPrivateFieldSet(this, _AccordionComponent_open, false, "f");
      } else {
        __classPrivateFieldSet(this, _AccordionComponent_open, true, "f");

        this.open = true;
      }

      this.style.height = `${__classPrivateFieldGet(this, _AccordionComponent_open, "f") ? this.scrollHeight : __classPrivateFieldGet(this, _AccordionComponent_summary, "f").offsetHeight}px`;
    });

    _AccordionComponent_handleTransitionEnd.set(this, event => {
      if (event.target !== this || event.propertyName !== "height") {
        return;
      }

      this.style.height = "";
      this.style.overflow = "";

      if (__classPrivateFieldGet(this, _AccordionComponent_open, "f") === false) {
        this.open = false;
      }
    });
  }

  connectedCallback() {
    __classPrivateFieldSet(this, _AccordionComponent_summary, this.querySelector("summary"), "f");

    __classPrivateFieldSet(this, _AccordionComponent_open, this.open, "f");

    __classPrivateFieldGet(this, _AccordionComponent_summary, "f").addEventListener("click", __classPrivateFieldGet(this, _AccordionComponent_handleClick, "f"));

    this.addEventListener("transitionend", __classPrivateFieldGet(this, _AccordionComponent_handleTransitionEnd, "f"));
  }

  disconnectedCallback() {
    __classPrivateFieldGet(this, _AccordionComponent_summary, "f"), this.removeEventListener("click", __classPrivateFieldGet(this, _AccordionComponent_handleClick, "f"));
    this.removeEventListener("transitionend", __classPrivateFieldGet(this, _AccordionComponent_handleTransitionEnd, "f"));
  }

}
_AccordionComponent_summary = new WeakMap(), _AccordionComponent_open = new WeakMap(), _AccordionComponent_handleClick = new WeakMap(), _AccordionComponent_handleTransitionEnd = new WeakMap();
AccordionComponent.NAME = "accordion-component";
customElements.define(AccordionComponent.NAME, AccordionComponent, {
  extends: "details"
});

/***/ }),

/***/ "./src/ts/blocks.common/CustomLottie.ts":
/*!**********************************************!*\
  !*** ./src/ts/blocks.common/CustomLottie.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ CustomLottie; }
/* harmony export */ });
/* harmony import */ var _constants_common_lottieFiles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants.common/lottieFiles */ "./src/ts/constants.common/lottieFiles.ts");
/* harmony import */ var _utils_common_elementUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils.common/elementUtils */ "./src/ts/utils.common/elementUtils.ts");
/* harmony import */ var _utils_common_callbackUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils.common/callbackUtils */ "./src/ts/utils.common/callbackUtils.ts");
var __classPrivateFieldSet = undefined && undefined.__classPrivateFieldSet || function (receiver, state, value, kind, f) {
  if (kind === "m") throw new TypeError("Private method is not writable");
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};

var __classPrivateFieldGet = undefined && undefined.__classPrivateFieldGet || function (receiver, state, kind, f) {
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};

var _CustomLottie_loaded, _CustomLottie_lottiePlayer, _CustomLottie_callbacks, _CustomLottie_intersectionObserver, _CustomLottie_addCallback, _CustomLottie_handleIntersection, _CustomLottie_handleLoad, _CustomLottie_init, _CustomLottie_destroy;




class CustomLottie extends HTMLElement {
  constructor() {
    super();

    _CustomLottie_loaded.set(this, void 0);

    _CustomLottie_lottiePlayer.set(this, void 0);

    _CustomLottie_callbacks.set(this, void 0);

    _CustomLottie_intersectionObserver.set(this, void 0);

    _CustomLottie_addCallback.set(this, callback => {
      if (__classPrivateFieldGet(this, _CustomLottie_loaded, "f")) {
        callback();
        return;
      }

      __classPrivateFieldGet(this, _CustomLottie_callbacks, "f").push(callback);
    });

    _CustomLottie_handleIntersection.set(this, entries => {
      entries.forEach(entry => {
        __classPrivateFieldGet(this, _CustomLottie_addCallback, "f").call(this, () => {
          if (__classPrivateFieldGet(this, _CustomLottie_lottiePlayer, "f").autoplay) {
            if (entry.isIntersecting) {
              if (!__classPrivateFieldGet(this, _CustomLottie_lottiePlayer, "f").loop) {
                __classPrivateFieldGet(this, _CustomLottie_lottiePlayer, "f").seek(0);
              }

              __classPrivateFieldGet(this, _CustomLottie_lottiePlayer, "f").play();
            } else {
              __classPrivateFieldGet(this, _CustomLottie_lottiePlayer, "f").pause();
            }
          }
        });
      });
    });

    _CustomLottie_handleLoad.set(this, () => {
      (0,_utils_common_callbackUtils__WEBPACK_IMPORTED_MODULE_2__.runCallbacks)(__classPrivateFieldGet(this, _CustomLottie_callbacks, "f"), null);

      __classPrivateFieldSet(this, _CustomLottie_loaded, true, "f");
    });

    _CustomLottie_init.set(this, () => {
      const injectedScript = document.querySelector(`[${_constants_common_lottieFiles__WEBPACK_IMPORTED_MODULE_0__.LOTTIE_FILES.scriptAttr}]`);

      if (!injectedScript) {
        const script = document.createElement("script");
        script.src = _constants_common_lottieFiles__WEBPACK_IMPORTED_MODULE_0__.LOTTIE_FILES.scriptSrc;
        script.setAttribute(_constants_common_lottieFiles__WEBPACK_IMPORTED_MODULE_0__.LOTTIE_FILES.scriptAttr, "");
        document.body.appendChild(script);
      }

      __classPrivateFieldSet(this, _CustomLottie_lottiePlayer, document.createElement("lottie-player"), "f");

      (0,_utils_common_elementUtils__WEBPACK_IMPORTED_MODULE_1__.CloneAttributes)(this, __classPrivateFieldGet(this, _CustomLottie_lottiePlayer, "f"));
      this.appendChild(__classPrivateFieldGet(this, _CustomLottie_lottiePlayer, "f"));

      __classPrivateFieldGet(this, _CustomLottie_lottiePlayer, "f").addEventListener("ready", __classPrivateFieldGet(this, _CustomLottie_handleLoad, "f"));

      __classPrivateFieldSet(this, _CustomLottie_intersectionObserver, new IntersectionObserver(__classPrivateFieldGet(this, _CustomLottie_handleIntersection, "f"), {
        root: null,
        rootMargin: "0px",
        threshold: 0
      }), "f");

      __classPrivateFieldGet(this, _CustomLottie_intersectionObserver, "f").observe(this);
    });

    _CustomLottie_destroy.set(this, () => {
      __classPrivateFieldGet(this, _CustomLottie_lottiePlayer, "f").removeEventListener("ready", __classPrivateFieldGet(this, _CustomLottie_handleLoad, "f"));

      __classPrivateFieldGet(this, _CustomLottie_lottiePlayer, "f").remove();

      __classPrivateFieldGet(this, _CustomLottie_intersectionObserver, "f").unobserve(this);
    });

    __classPrivateFieldSet(this, _CustomLottie_loaded, false, "f");

    __classPrivateFieldSet(this, _CustomLottie_callbacks, [], "f");
  }

  connectedCallback() {
    __classPrivateFieldGet(this, _CustomLottie_init, "f").call(this);
  }

  disconnectedCallback() {
    __classPrivateFieldGet(this, _CustomLottie_destroy, "f").call(this);
  }

}
_CustomLottie_loaded = new WeakMap(), _CustomLottie_lottiePlayer = new WeakMap(), _CustomLottie_callbacks = new WeakMap(), _CustomLottie_intersectionObserver = new WeakMap(), _CustomLottie_addCallback = new WeakMap(), _CustomLottie_handleIntersection = new WeakMap(), _CustomLottie_handleLoad = new WeakMap(), _CustomLottie_init = new WeakMap(), _CustomLottie_destroy = new WeakMap();
CustomLottie.NAME = _constants_common_lottieFiles__WEBPACK_IMPORTED_MODULE_0__.LOTTIE_FILES.name;
customElements.define(CustomLottie.NAME, CustomLottie);

/***/ }),

/***/ "./src/ts/blocks.common/UiToggle.ts":
/*!******************************************!*\
  !*** ./src/ts/blocks.common/UiToggle.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ UiToggle; }
/* harmony export */ });
var __classPrivateFieldGet = undefined && undefined.__classPrivateFieldGet || function (receiver, state, kind, f) {
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};

var __classPrivateFieldSet = undefined && undefined.__classPrivateFieldSet || function (receiver, state, value, kind, f) {
  if (kind === "m") throw new TypeError("Private method is not writable");
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};

var _UiToggle_target, _UiToggle_classes, _UiToggle_targetClasses, _UiToggle_open, _UiToggle_handleClick;

class UiToggle extends HTMLButtonElement {
  constructor() {
    super(...arguments);

    _UiToggle_target.set(this, void 0);

    _UiToggle_classes.set(this, []);

    _UiToggle_targetClasses.set(this, []);

    _UiToggle_open.set(this, false);

    _UiToggle_handleClick.set(this, event => {
      var _a, _b;

      if (__classPrivateFieldGet(this, _UiToggle_open, "f") === false) {
        this.classList.add(...__classPrivateFieldGet(this, _UiToggle_classes, "f"));
        (_a = __classPrivateFieldGet(this, _UiToggle_target, "f")) === null || _a === void 0 ? void 0 : _a.classList.add(...__classPrivateFieldGet(this, _UiToggle_targetClasses, "f"));
      } else {
        this.classList.remove(...__classPrivateFieldGet(this, _UiToggle_classes, "f"));
        (_b = __classPrivateFieldGet(this, _UiToggle_target, "f")) === null || _b === void 0 ? void 0 : _b.classList.remove(...__classPrivateFieldGet(this, _UiToggle_targetClasses, "f"));
      }

      __classPrivateFieldSet(this, _UiToggle_open, !__classPrivateFieldGet(this, _UiToggle_open, "f"), "f");
    });
  }

  connectedCallback() {
    __classPrivateFieldSet(this, _UiToggle_target, document.querySelector(`[data-toggle-id=${this.dataset.toggleTarget}]`), "f");

    __classPrivateFieldSet(this, _UiToggle_classes, this.dataset.toggleClasses ? this.dataset.toggleClasses.split(", ") : [], "f");

    __classPrivateFieldSet(this, _UiToggle_targetClasses, __classPrivateFieldGet(this, _UiToggle_target, "f").dataset.toggleClasses ? __classPrivateFieldGet(this, _UiToggle_target, "f").dataset.toggleClasses.split(", ") : [], "f");

    if (__classPrivateFieldGet(this, _UiToggle_target, "f") === null) {
      return;
    }

    this.addEventListener("click", __classPrivateFieldGet(this, _UiToggle_handleClick, "f"));
  }

  disconnectedCallback() {}

}
_UiToggle_target = new WeakMap(), _UiToggle_classes = new WeakMap(), _UiToggle_targetClasses = new WeakMap(), _UiToggle_open = new WeakMap(), _UiToggle_handleClick = new WeakMap();
UiToggle.NAME = "ui-toggle";
customElements.define(UiToggle.NAME, UiToggle, {
  extends: "button"
});

/***/ }),

/***/ "./src/ts/blocks.common/VideoEmbed.ts":
/*!********************************************!*\
  !*** ./src/ts/blocks.common/VideoEmbed.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ VideoEmbed; }
/* harmony export */ });
/**
 * A wrapper for iframe video embeds.
 *
 * @example
 * 	<video-embed>
 * 		<iframe src="about:blank" data-src="{YouTube or Vimeo embed URL}" />
 * 		(or <video src="{video URL}" />)
 * 		<button type="button">Play video</button>
 * 	</video-embed>
 */
class VideoEmbed extends HTMLElement {
  connectedCallback() {
    this._button = this.querySelector("button");
    this._iframe = this.querySelector("iframe");
    this._video = this.querySelector("video");
    this._poster = this.querySelector(`[${VideoEmbed.NAME}-poster]`);

    if (this._isValid()) {
      this._handleButtonClick = this._handleButtonClick.bind(this);

      this._button.addEventListener("click", this._handleButtonClick);
    }
  }

  disconnectedCallback() {
    if (this._isValid()) {
      this._button.removeEventListener("click", this._handleButtonClick);
    }
  }

  _isValid() {
    return this._button != null && (this._iframe != null || this._video != null);
  }

  _handleButtonClick() {
    if (this._poster) {
      this._hide(this._poster);
    }

    if (this._iframe) {
      this._iframe.classList.remove("pointer-events-none");

      if (this._iframe.dataset.src) {
        this._iframe.src = this._iframe.dataset.src;
      }

      this._show(this._iframe);
    }

    if (this._video) {
      this._show(this._video);

      this._video.autoplay = true;

      this._video.play();
    }

    this._hide(this._button);
  }

  _hide(element) {
    const hideClasses = element.getAttribute(`[${VideoEmbed.NAME}-hide-classes]`);

    if (hideClasses) {
      element.classList.add(...hideClasses.split(" "));
    } else {
      element.remove();
    }
  }

  _show(element) {
    const showClasses = element.getAttribute(`[${VideoEmbed.NAME}-show-classes]`);

    if (showClasses) {
      element.classList.add(...showClasses.split(" "));
    }
  }

}
VideoEmbed.NAME = "video-embed";
customElements.define(VideoEmbed.NAME, VideoEmbed);

/***/ }),

/***/ "./src/ts/constants.common/lottieFiles.ts":
/*!************************************************!*\
  !*** ./src/ts/constants.common/lottieFiles.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LOTTIE_FILES": function() { return /* binding */ LOTTIE_FILES; }
/* harmony export */ });
const NAME = "custom-lottie";
const LOTTIE_FILES = {
  name: NAME,
  scriptSrc: "https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js",
  scriptAttr: `data-${NAME}-script`
};

/***/ }),

/***/ "./src/ts/utils.common/callbackUtils.ts":
/*!**********************************************!*\
  !*** ./src/ts/utils.common/callbackUtils.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "runCallbacks": function() { return /* binding */ runCallbacks; }
/* harmony export */ });
function runCallbacks(callbackArray, event) {
  const callbacks = callbackArray.slice();
  callbacks.forEach(function (callback) {
    callback(event);
  });
}

/***/ }),

/***/ "./src/ts/utils.common/elementUtils.ts":
/*!*********************************************!*\
  !*** ./src/ts/utils.common/elementUtils.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CloneAttributes": function() { return /* binding */ CloneAttributes; }
/* harmony export */ });
function CloneAttributes(source, target, dontCopy = ["id", "class"]) {
  [...source.attributes].forEach(attr => {
    if (dontCopy.indexOf(attr.nodeName) === -1) {
      target.setAttribute(attr.nodeName, attr.nodeValue);
    }
  });
}

/***/ }),

/***/ "./node_modules/@ungap/custom-elements/index.js":
/*!******************************************************!*\
  !*** ./node_modules/@ungap/custom-elements/index.js ***!
  \******************************************************/
/***/ (function() {

/*! (c) Andrea Giammarchi @webreflection ISC */
(function () {
  'use strict';

  var attributesObserver = function attributesObserver(whenDefined, MutationObserver) {
    var attributeChanged = function attributeChanged(records) {
      for (var i = 0, length = records.length; i < length; i++) {
        dispatch(records[i]);
      }
    };

    var dispatch = function dispatch(_ref) {
      var target = _ref.target,
          attributeName = _ref.attributeName,
          oldValue = _ref.oldValue;
      target.attributeChangedCallback(attributeName, oldValue, target.getAttribute(attributeName));
    };

    return function (target, is) {
      var attributeFilter = target.constructor.observedAttributes;

      if (attributeFilter) {
        whenDefined(is).then(function () {
          new MutationObserver(attributeChanged).observe(target, {
            attributes: true,
            attributeOldValue: true,
            attributeFilter: attributeFilter
          });

          for (var i = 0, length = attributeFilter.length; i < length; i++) {
            if (target.hasAttribute(attributeFilter[i])) dispatch({
              target: target,
              attributeName: attributeFilter[i],
              oldValue: null
            });
          }
        });
      }

      return target;
    };
  };

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }

  function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];

    if (!it) {
      if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
        if (it) o = it;
        var i = 0;

        var F = function F() {};

        return {
          s: F,
          n: function n() {
            if (i >= o.length) return {
              done: true
            };
            return {
              done: false,
              value: o[i++]
            };
          },
          e: function e(_e) {
            throw _e;
          },
          f: F
        };
      }

      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }

    var normalCompletion = true,
        didErr = false,
        err;
    return {
      s: function s() {
        it = it.call(o);
      },
      n: function n() {
        var step = it.next();
        normalCompletion = step.done;
        return step;
      },
      e: function e(_e2) {
        didErr = true;
        err = _e2;
      },
      f: function f() {
        try {
          if (!normalCompletion && it.return != null) it.return();
        } finally {
          if (didErr) throw err;
        }
      }
    };
  }
  /*! (c) Andrea Giammarchi - ISC */


  var TRUE = true,
      FALSE = false,
      QSA$1 = 'querySelectorAll';
  /**
   * Start observing a generic document or root element.
   * @param {(node:Element, connected:boolean) => void} callback triggered per each dis/connected element
   * @param {Document|Element} [root=document] by default, the global document to observe
   * @param {Function} [MO=MutationObserver] by default, the global MutationObserver
   * @param {string[]} [query=['*']] the selectors to use within nodes
   * @returns {MutationObserver}
   */

  var notify = function notify(callback) {
    var root = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;
    var MO = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : MutationObserver;
    var query = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : ['*'];

    var loop = function loop(nodes, selectors, added, removed, connected, pass) {
      var _iterator = _createForOfIteratorHelper(nodes),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var node = _step.value;

          if (pass || QSA$1 in node) {
            if (connected) {
              if (!added.has(node)) {
                added.add(node);
                removed["delete"](node);
                callback(node, connected);
              }
            } else if (!removed.has(node)) {
              removed.add(node);
              added["delete"](node);
              callback(node, connected);
            }

            if (!pass) loop(node[QSA$1](selectors), selectors, added, removed, connected, TRUE);
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    };

    var mo = new MO(function (records) {
      if (query.length) {
        var selectors = query.join(',');
        var added = new Set(),
            removed = new Set();

        var _iterator2 = _createForOfIteratorHelper(records),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var _step2$value = _step2.value,
                addedNodes = _step2$value.addedNodes,
                removedNodes = _step2$value.removedNodes;
            loop(removedNodes, selectors, added, removed, FALSE, FALSE);
            loop(addedNodes, selectors, added, removed, TRUE, FALSE);
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      }
    });
    var observe = mo.observe;
    (mo.observe = function (node) {
      return observe.call(mo, node, {
        subtree: TRUE,
        childList: TRUE
      });
    })(root);
    return mo;
  };

  var QSA = 'querySelectorAll';
  var _self$1 = self,
      document$2 = _self$1.document,
      Element$1 = _self$1.Element,
      MutationObserver$2 = _self$1.MutationObserver,
      Set$2 = _self$1.Set,
      WeakMap$1 = _self$1.WeakMap;

  var elements = function elements(element) {
    return QSA in element;
  };

  var filter = [].filter;

  var qsaObserver = function qsaObserver(options) {
    var live = new WeakMap$1();

    var drop = function drop(elements) {
      for (var i = 0, length = elements.length; i < length; i++) {
        live["delete"](elements[i]);
      }
    };

    var flush = function flush() {
      var records = observer.takeRecords();

      for (var i = 0, length = records.length; i < length; i++) {
        parse(filter.call(records[i].removedNodes, elements), false);
        parse(filter.call(records[i].addedNodes, elements), true);
      }
    };

    var matches = function matches(element) {
      return element.matches || element.webkitMatchesSelector || element.msMatchesSelector;
    };

    var notifier = function notifier(element, connected) {
      var selectors;

      if (connected) {
        for (var q, m = matches(element), i = 0, length = query.length; i < length; i++) {
          if (m.call(element, q = query[i])) {
            if (!live.has(element)) live.set(element, new Set$2());
            selectors = live.get(element);

            if (!selectors.has(q)) {
              selectors.add(q);
              options.handle(element, connected, q);
            }
          }
        }
      } else if (live.has(element)) {
        selectors = live.get(element);
        live["delete"](element);
        selectors.forEach(function (q) {
          options.handle(element, connected, q);
        });
      }
    };

    var parse = function parse(elements) {
      var connected = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      for (var i = 0, length = elements.length; i < length; i++) {
        notifier(elements[i], connected);
      }
    };

    var query = options.query;
    var root = options.root || document$2;
    var observer = notify(notifier, root, MutationObserver$2, query);
    var attachShadow = Element$1.prototype.attachShadow;
    if (attachShadow) Element$1.prototype.attachShadow = function (init) {
      var shadowRoot = attachShadow.call(this, init);
      observer.observe(shadowRoot);
      return shadowRoot;
    };
    if (query.length) parse(root[QSA](query));
    return {
      drop: drop,
      flush: flush,
      observer: observer,
      parse: parse
    };
  };

  var _self = self,
      document$1 = _self.document,
      Map = _self.Map,
      MutationObserver$1 = _self.MutationObserver,
      Object$1 = _self.Object,
      Set$1 = _self.Set,
      WeakMap = _self.WeakMap,
      Element = _self.Element,
      HTMLElement = _self.HTMLElement,
      Node = _self.Node,
      Error = _self.Error,
      TypeError$1 = _self.TypeError,
      Reflect = _self.Reflect;
  var defineProperty = Object$1.defineProperty,
      keys = Object$1.keys,
      getOwnPropertyNames = Object$1.getOwnPropertyNames,
      setPrototypeOf = Object$1.setPrototypeOf;
  var legacy = !self.customElements;

  var expando = function expando(element) {
    var key = keys(element);
    var value = [];
    var length = key.length;

    for (var i = 0; i < length; i++) {
      value[i] = element[key[i]];
      delete element[key[i]];
    }

    return function () {
      for (var _i = 0; _i < length; _i++) {
        element[key[_i]] = value[_i];
      }
    };
  };

  if (legacy) {
    var HTMLBuiltIn = function HTMLBuiltIn() {
      var constructor = this.constructor;
      if (!classes.has(constructor)) throw new TypeError$1('Illegal constructor');
      var is = classes.get(constructor);
      if (override) return augment(override, is);
      var element = createElement.call(document$1, is);
      return augment(setPrototypeOf(element, constructor.prototype), is);
    };

    var createElement = document$1.createElement;
    var classes = new Map();
    var defined = new Map();
    var prototypes = new Map();
    var registry = new Map();
    var query = [];

    var handle = function handle(element, connected, selector) {
      var proto = prototypes.get(selector);

      if (connected && !proto.isPrototypeOf(element)) {
        var redefine = expando(element);
        override = setPrototypeOf(element, proto);

        try {
          new proto.constructor();
        } finally {
          override = null;
          redefine();
        }
      }

      var method = "".concat(connected ? '' : 'dis', "connectedCallback");
      if (method in proto) element[method]();
    };

    var _qsaObserver = qsaObserver({
      query: query,
      handle: handle
    }),
        parse = _qsaObserver.parse;

    var override = null;

    var whenDefined = function whenDefined(name) {
      if (!defined.has(name)) {
        var _,
            $ = new Promise(function ($) {
          _ = $;
        });

        defined.set(name, {
          $: $,
          _: _
        });
      }

      return defined.get(name).$;
    };

    var augment = attributesObserver(whenDefined, MutationObserver$1);
    defineProperty(self, 'customElements', {
      configurable: true,
      value: {
        define: function define(is, Class) {
          if (registry.has(is)) throw new Error("the name \"".concat(is, "\" has already been used with this registry"));
          classes.set(Class, is);
          prototypes.set(is, Class.prototype);
          registry.set(is, Class);
          query.push(is);
          whenDefined(is).then(function () {
            parse(document$1.querySelectorAll(is));
          });

          defined.get(is)._(Class);
        },
        get: function get(is) {
          return registry.get(is);
        },
        whenDefined: whenDefined
      }
    });
    defineProperty(HTMLBuiltIn.prototype = HTMLElement.prototype, 'constructor', {
      value: HTMLBuiltIn
    });
    defineProperty(self, 'HTMLElement', {
      configurable: true,
      value: HTMLBuiltIn
    });
    defineProperty(document$1, 'createElement', {
      configurable: true,
      value: function value(name, options) {
        var is = options && options.is;
        var Class = is ? registry.get(is) : registry.get(name);
        return Class ? new Class() : createElement.call(document$1, name);
      }
    }); // in case ShadowDOM is used through a polyfill, to avoid issues
    // with builtin extends within shadow roots

    if (!('isConnected' in Node.prototype)) defineProperty(Node.prototype, 'isConnected', {
      configurable: true,
      get: function get() {
        return !(this.ownerDocument.compareDocumentPosition(this) & this.DOCUMENT_POSITION_DISCONNECTED);
      }
    });
  } else {
    try {
      var LI = function LI() {
        return self.Reflect.construct(HTMLLIElement, [], LI);
      };

      LI.prototype = HTMLLIElement.prototype;
      var is = 'extends-li';
      self.customElements.define('extends-li', LI, {
        'extends': 'li'
      });
      legacy = document$1.createElement('li', {
        is: is
      }).outerHTML.indexOf(is) < 0;
      var _self$customElements = self.customElements,
          get = _self$customElements.get,
          _whenDefined = _self$customElements.whenDefined;
      defineProperty(self.customElements, 'whenDefined', {
        configurable: true,
        value: function value(is) {
          var _this = this;

          return _whenDefined.call(this, is).then(function (Class) {
            return Class || get.call(_this, is);
          });
        }
      });
    } catch (o_O) {
      legacy = !legacy;
    }
  }

  if (legacy) {
    var parseShadow = function parseShadow(element) {
      var root = shadowRoots.get(element);

      _parse(root.querySelectorAll(this), element.isConnected);
    };

    var customElements = self.customElements;
    var _createElement = document$1.createElement;
    var define = customElements.define,
        _get = customElements.get,
        upgrade = customElements.upgrade;

    var _ref = Reflect || {
      construct: function construct(HTMLElement) {
        return HTMLElement.call(this);
      }
    },
        construct = _ref.construct;

    var shadowRoots = new WeakMap();
    var shadows = new Set$1();

    var _classes = new Map();

    var _defined = new Map();

    var _prototypes = new Map();

    var _registry = new Map();

    var shadowed = [];
    var _query = [];

    var getCE = function getCE(is) {
      return _registry.get(is) || _get.call(customElements, is);
    };

    var _handle = function _handle(element, connected, selector) {
      var proto = _prototypes.get(selector);

      if (connected && !proto.isPrototypeOf(element)) {
        var redefine = expando(element);
        _override = setPrototypeOf(element, proto);

        try {
          new proto.constructor();
        } finally {
          _override = null;
          redefine();
        }
      }

      var method = "".concat(connected ? '' : 'dis', "connectedCallback");
      if (method in proto) element[method]();
    };

    var _qsaObserver2 = qsaObserver({
      query: _query,
      handle: _handle
    }),
        _parse = _qsaObserver2.parse;

    var _qsaObserver3 = qsaObserver({
      query: shadowed,
      handle: function handle(element, connected) {
        if (shadowRoots.has(element)) {
          if (connected) shadows.add(element);else shadows["delete"](element);
          if (_query.length) parseShadow.call(_query, element);
        }
      }
    }),
        parseShadowed = _qsaObserver3.parse; // qsaObserver also patches attachShadow
    // be sure this runs *after* that


    var attachShadow = Element.prototype.attachShadow;
    if (attachShadow) Element.prototype.attachShadow = function (init) {
      var root = attachShadow.call(this, init);
      shadowRoots.set(this, root);
      return root;
    };

    var _whenDefined2 = function _whenDefined2(name) {
      if (!_defined.has(name)) {
        var _,
            $ = new Promise(function ($) {
          _ = $;
        });

        _defined.set(name, {
          $: $,
          _: _
        });
      }

      return _defined.get(name).$;
    };

    var _augment = attributesObserver(_whenDefined2, MutationObserver$1);

    var _override = null;
    getOwnPropertyNames(self).filter(function (k) {
      return /^HTML.*Element$/.test(k);
    }).forEach(function (k) {
      var HTMLElement = self[k];

      function HTMLBuiltIn() {
        var constructor = this.constructor;
        if (!_classes.has(constructor)) throw new TypeError$1('Illegal constructor');

        var _classes$get = _classes.get(constructor),
            is = _classes$get.is,
            tag = _classes$get.tag;

        if (is) {
          if (_override) return _augment(_override, is);

          var element = _createElement.call(document$1, tag);

          element.setAttribute('is', is);
          return _augment(setPrototypeOf(element, constructor.prototype), is);
        } else return construct.call(this, HTMLElement, [], constructor);
      }

      defineProperty(HTMLBuiltIn.prototype = HTMLElement.prototype, 'constructor', {
        value: HTMLBuiltIn
      });
      defineProperty(self, k, {
        value: HTMLBuiltIn
      });
    });
    defineProperty(document$1, 'createElement', {
      configurable: true,
      value: function value(name, options) {
        var is = options && options.is;

        if (is) {
          var Class = _registry.get(is);

          if (Class && _classes.get(Class).tag === name) return new Class();
        }

        var element = _createElement.call(document$1, name);

        if (is) element.setAttribute('is', is);
        return element;
      }
    });
    defineProperty(customElements, 'get', {
      configurable: true,
      value: getCE
    });
    defineProperty(customElements, 'whenDefined', {
      configurable: true,
      value: _whenDefined2
    });
    defineProperty(customElements, 'upgrade', {
      configurable: true,
      value: function value(element) {
        var is = element.getAttribute('is');

        if (is) {
          var _constructor = _registry.get(is);

          if (_constructor) {
            _augment(setPrototypeOf(element, _constructor.prototype), is); // apparently unnecessary because this is handled by qsa observer
            // if (element.isConnected && element.connectedCallback)
            //   element.connectedCallback();


            return;
          }
        }

        upgrade.call(customElements, element);
      }
    });
    defineProperty(customElements, 'define', {
      configurable: true,
      value: function value(is, Class, options) {
        if (getCE(is)) throw new Error("'".concat(is, "' has already been defined as a custom element"));
        var selector;
        var tag = options && options["extends"];

        _classes.set(Class, tag ? {
          is: is,
          tag: tag
        } : {
          is: '',
          tag: is
        });

        if (tag) {
          selector = "".concat(tag, "[is=\"").concat(is, "\"]");

          _prototypes.set(selector, Class.prototype);

          _registry.set(is, Class);

          _query.push(selector);
        } else {
          define.apply(customElements, arguments);
          shadowed.push(selector = is);
        }

        _whenDefined2(is).then(function () {
          if (tag) {
            _parse(document$1.querySelectorAll(selector));

            shadows.forEach(parseShadow, [selector]);
          } else parseShadowed(document$1.querySelectorAll(selector));
        });

        _defined.get(is)._(Class);
      }
    });
  }
})();

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
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
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
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
/*!*************************!*\
  !*** ./src/ts/index.ts ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ungap_custom_elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ungap/custom-elements */ "./node_modules/@ungap/custom-elements/index.js");
/* harmony import */ var _ungap_custom_elements__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ungap_custom_elements__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _blocks_common_AccordionComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blocks.common/AccordionComponent */ "./src/ts/blocks.common/AccordionComponent.ts");
/* harmony import */ var _blocks_common_CustomLottie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blocks.common/CustomLottie */ "./src/ts/blocks.common/CustomLottie.ts");
/* harmony import */ var _blocks_common_UiToggle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blocks.common/UiToggle */ "./src/ts/blocks.common/UiToggle.ts");
/* harmony import */ var _blocks_common_VideoEmbed__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./blocks.common/VideoEmbed */ "./src/ts/blocks.common/VideoEmbed.ts");





}();
/******/ })()
;
//# sourceMappingURL=index.js.map