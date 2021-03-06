"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.drawSelection = drawSelection;
exports.highlightActiveLine = highlightActiveLine;
exports.highlightSpecialChars = highlightSpecialChars;
exports.logException = logException;
exports.placeholder = placeholder;
exports.runScopeHandlers = runScopeHandlers;
Object.defineProperty(exports, "Range", {
  enumerable: true,
  get: function get() {
    return _rangeset.Range;
  }
});
exports.keymap = exports.__test = exports.WidgetType = exports.ViewUpdate = exports.ViewPlugin = exports.PluginFieldProvider = exports.PluginField = exports.MatchDecorator = exports.EditorView = exports.Direction = exports.Decoration = exports.BlockType = exports.BlockInfo = exports.BidiSpan = void 0;

var _state = require("@codemirror/state");

var _styleMod = require("style-mod");

var _rangeset = require("@codemirror/rangeset");

var _text = require("@codemirror/text");

var _w3cKeyname = require("w3c-keyname");

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var _ref = typeof navigator != "undefined" ? [navigator, document] : [{
  userAgent: "",
  vendor: "",
  platform: ""
}, {
  documentElement: {
    style: {}
  }
}],
    _ref2 = _slicedToArray(_ref, 2),
    nav = _ref2[0],
    doc = _ref2[1];

var ie_edge = /Edge\/(\d+)/.exec(nav.userAgent);
var ie_upto10 = /MSIE \d/.test(nav.userAgent);
var ie_11up = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(nav.userAgent);
var ie = !!(ie_upto10 || ie_11up || ie_edge);
var gecko = !ie && /gecko\/(\d+)/i.test(nav.userAgent);
var chrome = !ie && /Chrome\/(\d+)/.exec(nav.userAgent);
var webkit = ("webkitFontSmoothing" in doc.documentElement.style);
var safari = !ie && /Apple Computer/.test(nav.vendor);
var browser = {
  mac: /Mac/.test(nav.platform),
  ie: ie,
  ie_version: ie_upto10 ? doc.documentMode || 6 : ie_11up ? +ie_11up[1] : ie_edge ? +ie_edge[1] : 0,
  gecko: gecko,
  gecko_version: gecko ? +(/Firefox\/(\d+)/.exec(nav.userAgent) || [0, 0])[1] : 0,
  chrome: !!chrome,
  chrome_version: chrome ? +chrome[1] : 0,
  ios: safari && (/Mobile\/\w+/.test(nav.userAgent) || nav.maxTouchPoints > 2),
  android: /Android\b/.test(nav.userAgent),
  webkit: webkit,
  safari: safari,
  webkit_version: webkit ? +(/\bAppleWebKit\/(\d+)/.exec(navigator.userAgent) || [0, 0])[1] : 0,
  tabSize: doc.documentElement.style.tabSize != null ? "tab-size" : "-moz-tab-size"
};

function getSelection(root) {
  return root.getSelection ? root.getSelection() : document.getSelection();
} // Work around Chrome issue https://bugs.chromium.org/p/chromium/issues/detail?id=447523
// (isCollapsed inappropriately returns true in shadow dom)


function selectionCollapsed(domSel) {
  var collapsed = domSel.isCollapsed;
  if (collapsed && browser.chrome && domSel.rangeCount && !domSel.getRangeAt(0).collapsed) collapsed = false;
  return collapsed;
}

function hasSelection(dom, selection) {
  if (!selection.anchorNode) return false;

  try {
    // Firefox will raise 'permission denied' errors when accessing
    // properties of `sel.anchorNode` when it's in a generated CSS
    // element.
    return dom.contains(selection.anchorNode.nodeType == 3 ? selection.anchorNode.parentNode : selection.anchorNode);
  } catch (_) {
    return false;
  }
}

function clientRectsFor(dom) {
  if (dom.nodeType == 3) {
    var range = tempRange();
    range.setEnd(dom, dom.nodeValue.length);
    range.setStart(dom, 0);
    return range.getClientRects();
  } else if (dom.nodeType == 1) {
    return dom.getClientRects();
  } else {
    return [];
  }
} // Scans forward and backward through DOM positions equivalent to the
// given one to see if the two are in the same place (i.e. after a
// text node vs at the end of that text node)


function isEquivalentPosition(node, off, targetNode, targetOff) {
  return targetNode ? scanFor(node, off, targetNode, targetOff, -1) || scanFor(node, off, targetNode, targetOff, 1) : false;
}

function domIndex(node) {
  for (var index = 0;; index++) {
    node = node.previousSibling;
    if (!node) return index;
  }
}

function scanFor(node, off, targetNode, targetOff, dir) {
  for (;;) {
    if (node == targetNode && off == targetOff) return true;

    if (off == (dir < 0 ? 0 : maxOffset(node))) {
      if (node.nodeName == "DIV") return false;
      var parent = node.parentNode;
      if (!parent || parent.nodeType != 1) return false;
      off = domIndex(node) + (dir < 0 ? 0 : 1);
      node = parent;
    } else if (node.nodeType == 1) {
      node = node.childNodes[off + (dir < 0 ? -1 : 0)];
      off = dir < 0 ? maxOffset(node) : 0;
    } else {
      return false;
    }
  }
}

function maxOffset(node) {
  return node.nodeType == 3 ? node.nodeValue.length : node.childNodes.length;
}

var Rect0 = {
  left: 0,
  right: 0,
  top: 0,
  bottom: 0
};

function flattenRect(rect, left) {
  var x = left ? rect.left : rect.right;
  return {
    left: x,
    right: x,
    top: rect.top,
    bottom: rect.bottom
  };
}

function windowRect(win) {
  return {
    left: 0,
    right: win.innerWidth,
    top: 0,
    bottom: win.innerHeight
  };
}

var ScrollSpace = 5;

function scrollRectIntoView(dom, rect) {
  var doc = dom.ownerDocument,
      win = doc.defaultView;

  for (var cur = dom.parentNode; cur;) {
    if (cur.nodeType == 1) {
      // Element
      var bounding = void 0,
          top = cur == document.body;

      if (top) {
        bounding = windowRect(win);
      } else {
        if (cur.scrollHeight <= cur.clientHeight && cur.scrollWidth <= cur.clientWidth) {
          cur = cur.parentNode;
          continue;
        }

        var _rect = cur.getBoundingClientRect(); // Make sure scrollbar width isn't included in the rectangle


        bounding = {
          left: _rect.left,
          right: _rect.left + cur.clientWidth,
          top: _rect.top,
          bottom: _rect.top + cur.clientHeight
        };
      }

      var moveX = 0,
          moveY = 0;
      if (rect.top < bounding.top) moveY = -(bounding.top - rect.top + ScrollSpace);else if (rect.bottom > bounding.bottom) moveY = rect.bottom - bounding.bottom + ScrollSpace;
      if (rect.left < bounding.left) moveX = -(bounding.left - rect.left + ScrollSpace);else if (rect.right > bounding.right) moveX = rect.right - bounding.right + ScrollSpace;

      if (moveX || moveY) {
        if (top) {
          win.scrollBy(moveX, moveY);
        } else {
          if (moveY) {
            var start = cur.scrollTop;
            cur.scrollTop += moveY;
            moveY = cur.scrollTop - start;
          }

          if (moveX) {
            var _start = cur.scrollLeft;
            cur.scrollLeft += moveX;
            moveX = cur.scrollLeft - _start;
          }

          rect = {
            left: rect.left - moveX,
            top: rect.top - moveY,
            right: rect.right - moveX,
            bottom: rect.bottom - moveY
          };
        }
      }

      if (top) break;
      cur = cur.parentNode;
    } else if (cur.nodeType == 11) {
      // A shadow root
      cur = cur.host;
    } else {
      break;
    }
  }
}

var DOMSelection = /*#__PURE__*/function () {
  function DOMSelection() {
    _classCallCheck(this, DOMSelection);

    this.anchorNode = null;
    this.anchorOffset = 0;
    this.focusNode = null;
    this.focusOffset = 0;
  }

  _createClass(DOMSelection, [{
    key: "eq",
    value: function eq(domSel) {
      return this.anchorNode == domSel.anchorNode && this.anchorOffset == domSel.anchorOffset && this.focusNode == domSel.focusNode && this.focusOffset == domSel.focusOffset;
    }
  }, {
    key: "set",
    value: function set(domSel) {
      this.anchorNode = domSel.anchorNode;
      this.anchorOffset = domSel.anchorOffset;
      this.focusNode = domSel.focusNode;
      this.focusOffset = domSel.focusOffset;
    }
  }]);

  return DOMSelection;
}();

var preventScrollSupported = null; // Feature-detects support for .focus({preventScroll: true}), and uses
// a fallback kludge when not supported.

function focusPreventScroll(dom) {
  if (dom.setActive) return dom.setActive(); // in IE

  if (preventScrollSupported) return dom.focus(preventScrollSupported);
  var stack = [];

  for (var cur = dom; cur; cur = cur.parentNode) {
    stack.push(cur, cur.scrollTop, cur.scrollLeft);
    if (cur == cur.ownerDocument) break;
  }

  dom.focus(preventScrollSupported == null ? {
    preventScroll: {
      get: function get() {
        preventScrollSupported = {
          preventScroll: true
        };
        return true;
      }
    }

  } : undefined);

  if (!preventScrollSupported) {
    preventScrollSupported = false;

    for (var i = 0; i < stack.length;) {
      var elt = stack[i++],
          top = stack[i++],
          left = stack[i++];
      if (elt.scrollTop != top) elt.scrollTop = top;
      if (elt.scrollLeft != left) elt.scrollLeft = left;
    }
  }
}

var scratchRange;

function tempRange() {
  return scratchRange || (scratchRange = document.createRange());
}

var DOMPos = /*#__PURE__*/function () {
  function DOMPos(node, offset) {
    var precise = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

    _classCallCheck(this, DOMPos);

    this.node = node;
    this.offset = offset;
    this.precise = precise;
  }

  _createClass(DOMPos, null, [{
    key: "before",
    value: function before(dom, precise) {
      return new DOMPos(dom.parentNode, domIndex(dom), precise);
    }
  }, {
    key: "after",
    value: function after(dom, precise) {
      return new DOMPos(dom.parentNode, domIndex(dom) + 1, precise);
    }
  }]);

  return DOMPos;
}();

var none$3 = [];

var ContentView = /*#__PURE__*/function () {
  function ContentView() {
    _classCallCheck(this, ContentView);

    this.parent = null;
    this.dom = null;
    this.dirty = 2
    /* Node */
    ;
  }

  _createClass(ContentView, [{
    key: "editorView",
    get: function get() {
      if (!this.parent) throw new Error("Accessing view in orphan content view");
      return this.parent.editorView;
    }
  }, {
    key: "overrideDOMText",
    get: function get() {
      return null;
    }
  }, {
    key: "posAtStart",
    get: function get() {
      return this.parent ? this.parent.posBefore(this) : 0;
    }
  }, {
    key: "posAtEnd",
    get: function get() {
      return this.posAtStart + this.length;
    }
  }, {
    key: "posBefore",
    value: function posBefore(view) {
      var pos = this.posAtStart;

      var _iterator = _createForOfIteratorHelper(this.children),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var child = _step.value;
          if (child == view) return pos;
          pos += child.length + child.breakAfter;
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      throw new RangeError("Invalid child in posBefore");
    }
  }, {
    key: "posAfter",
    value: function posAfter(view) {
      return this.posBefore(view) + view.length;
    } // Will return a rectangle directly before (when side < 0), after
    // (side > 0) or directly on (when the browser supports it) the
    // given position.

  }, {
    key: "coordsAt",
    value: function coordsAt(_pos, _side) {
      return null;
    }
  }, {
    key: "sync",
    value: function sync(track) {
      if (this.dirty & 2
      /* Node */
      ) {
          var parent = this.dom,
              pos = null;

          var _iterator2 = _createForOfIteratorHelper(this.children),
              _step2;

          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var child = _step2.value;

              if (child.dirty) {
                var _next = pos ? pos.nextSibling : parent.firstChild;

                if (_next && !child.dom && !ContentView.get(_next)) child.reuseDOM(_next);
                child.sync(track);
                child.dirty = 0
                /* Not */
                ;
              }

              if (track && track.node == parent && pos != child.dom) track.written = true;
              syncNodeInto(parent, pos, child.dom);
              pos = child.dom;
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }

          var next = pos ? pos.nextSibling : parent.firstChild;
          if (next && track && track.node == parent) track.written = true;

          while (next) {
            next = rm(next);
          }
        } else if (this.dirty & 1
      /* Child */
      ) {
          var _iterator3 = _createForOfIteratorHelper(this.children),
              _step3;

          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
              var _child = _step3.value;

              if (_child.dirty) {
                _child.sync(track);

                _child.dirty = 0
                /* Not */
                ;
              }
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }
        }
    }
  }, {
    key: "reuseDOM",
    value: function reuseDOM(_dom) {
      return false;
    }
  }, {
    key: "localPosFromDOM",
    value: function localPosFromDOM(node, offset) {
      var after;

      if (node == this.dom) {
        after = this.dom.childNodes[offset];
      } else {
        var bias = maxOffset(node) == 0 ? 0 : offset == 0 ? -1 : 1;

        for (;;) {
          var parent = node.parentNode;
          if (parent == this.dom) break;

          if (bias == 0 && parent.firstChild != parent.lastChild) {
            if (node == parent.firstChild) bias = -1;else bias = 1;
          }

          node = parent;
        }

        if (bias < 0) after = node;else after = node.nextSibling;
      }

      if (after == this.dom.firstChild) return 0;

      while (after && !ContentView.get(after)) {
        after = after.nextSibling;
      }

      if (!after) return this.length;

      for (var i = 0, pos = 0;; i++) {
        var child = this.children[i];
        if (child.dom == after) return pos;
        pos += child.length + child.breakAfter;
      }
    }
  }, {
    key: "domBoundsAround",
    value: function domBoundsAround(from, to) {
      var offset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      var fromI = -1,
          fromStart = -1,
          toI = -1,
          toEnd = -1;

      for (var i = 0, pos = offset; i < this.children.length; i++) {
        var child = this.children[i],
            end = pos + child.length;
        if (pos < from && end > to) return child.domBoundsAround(from, to, pos);

        if (end >= from && fromI == -1) {
          fromI = i;
          fromStart = pos;
        }

        if (end >= to && end != pos && toI == -1) {
          toI = i;
          toEnd = end;
          break;
        }

        pos = end + child.breakAfter;
      }

      return {
        from: fromStart,
        to: toEnd < 0 ? offset + this.length : toEnd,
        startDOM: (fromI ? this.children[fromI - 1].dom.nextSibling : null) || this.dom.firstChild,
        endDOM: toI < this.children.length - 1 && toI >= 0 ? this.children[toI + 1].dom : null
      };
    }
  }, {
    key: "markDirty",
    value: function markDirty() {
      var andParent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      if (this.dirty & 2
      /* Node */
      ) return;
      this.dirty |= 2
      /* Node */
      ;
      this.markParentsDirty(andParent);
    }
  }, {
    key: "markParentsDirty",
    value: function markParentsDirty(childList) {
      for (var parent = this.parent; parent; parent = parent.parent) {
        if (childList) parent.dirty |= 2
        /* Node */
        ;
        if (parent.dirty & 1
        /* Child */
        ) return;
        parent.dirty |= 1
        /* Child */
        ;
        childList = false;
      }
    }
  }, {
    key: "setParent",
    value: function setParent(parent) {
      if (this.parent != parent) {
        this.parent = parent;
        if (this.dirty) this.markParentsDirty(true);
      }
    }
  }, {
    key: "setDOM",
    value: function setDOM(dom) {
      this.dom = dom;
      dom.cmView = this;
    }
  }, {
    key: "rootView",
    get: function get() {
      for (var v = this;;) {
        var parent = v.parent;
        if (!parent) return v;
        v = parent;
      }
    }
  }, {
    key: "replaceChildren",
    value: function replaceChildren(from, to) {
      var _this$children;

      var children = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : none$3;
      this.markDirty();

      for (var i = from; i < to; i++) {
        this.children[i].parent = null;
      }

      (_this$children = this.children).splice.apply(_this$children, [from, to - from].concat(_toConsumableArray(children)));

      for (var _i2 = 0; _i2 < children.length; _i2++) {
        children[_i2].setParent(this);
      }
    }
  }, {
    key: "ignoreMutation",
    value: function ignoreMutation(_rec) {
      return false;
    }
  }, {
    key: "ignoreEvent",
    value: function ignoreEvent(_event) {
      return false;
    }
  }, {
    key: "childCursor",
    value: function childCursor() {
      var pos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.length;
      return new ChildCursor(this.children, pos, this.children.length);
    }
  }, {
    key: "childPos",
    value: function childPos(pos) {
      var bias = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      return this.childCursor().findPos(pos, bias);
    }
  }, {
    key: "toString",
    value: function toString() {
      var name = this.constructor.name.replace("View", "");
      return name + (this.children.length ? "(" + this.children.join() + ")" : this.length ? "[" + (name == "Text" ? this.text : this.length) + "]" : "") + (this.breakAfter ? "#" : "");
    }
  }], [{
    key: "get",
    value: function get(node) {
      return node.cmView;
    }
  }]);

  return ContentView;
}();

ContentView.prototype.breakAfter = 0; // Remove a DOM node and return its next sibling.

function rm(dom) {
  var next = dom.nextSibling;
  dom.parentNode.removeChild(dom);
  return next;
}

function syncNodeInto(parent, after, dom) {
  var next = after ? after.nextSibling : parent.firstChild;
  if (dom.parentNode == parent) while (next != dom) {
    next = rm(next);
  } else parent.insertBefore(dom, next);
}

var ChildCursor = /*#__PURE__*/function () {
  function ChildCursor(children, pos, i) {
    _classCallCheck(this, ChildCursor);

    this.children = children;
    this.pos = pos;
    this.i = i;
    this.off = 0;
  }

  _createClass(ChildCursor, [{
    key: "findPos",
    value: function findPos(pos) {
      var bias = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

      for (;;) {
        if (pos > this.pos || pos == this.pos && (bias > 0 || this.i == 0 || this.children[this.i - 1].breakAfter)) {
          this.off = pos - this.pos;
          return this;
        }

        var next = this.children[--this.i];
        this.pos -= next.length + next.breakAfter;
      }
    }
  }]);

  return ChildCursor;
}();

var none$2 = [];

var InlineView = /*#__PURE__*/function (_ContentView) {
  _inherits(InlineView, _ContentView);

  var _super = _createSuper(InlineView);

  function InlineView() {
    _classCallCheck(this, InlineView);

    return _super.apply(this, arguments);
  }

  _createClass(InlineView, [{
    key: "become",
    value: /// Return true when this view is equivalent to `other` and can take
    /// on its role.
    function become(_other) {
      return false;
    } // When this is a zero-length view with a side, this should return a
    // negative number to indicate it is before its position, or a
    // positive number when after its position.

  }, {
    key: "getSide",
    value: function getSide() {
      return 0;
    }
  }]);

  return InlineView;
}(ContentView);

InlineView.prototype.children = none$2;
var MaxJoinLen = 256;

var TextView = /*#__PURE__*/function (_InlineView) {
  _inherits(TextView, _InlineView);

  var _super2 = _createSuper(TextView);

  function TextView(text) {
    var _this;

    _classCallCheck(this, TextView);

    _this = _super2.call(this);
    _this.text = text;
    return _this;
  }

  _createClass(TextView, [{
    key: "length",
    get: function get() {
      return this.text.length;
    }
  }, {
    key: "createDOM",
    value: function createDOM(textDOM) {
      this.setDOM(textDOM || document.createTextNode(this.text));
    }
  }, {
    key: "sync",
    value: function sync(track) {
      if (!this.dom) this.createDOM();

      if (this.dom.nodeValue != this.text) {
        if (track && track.node == this.dom) track.written = true;
        this.dom.nodeValue = this.text;
      }
    }
  }, {
    key: "reuseDOM",
    value: function reuseDOM(dom) {
      if (dom.nodeType != 3) return false;
      this.createDOM(dom);
      return true;
    }
  }, {
    key: "merge",
    value: function merge(from, to, source) {
      if (source && (!(source instanceof TextView) || this.length - (to - from) + source.length > MaxJoinLen)) return false;
      this.text = this.text.slice(0, from) + (source ? source.text : "") + this.text.slice(to);
      this.markDirty();
      return true;
    }
  }, {
    key: "slice",
    value: function slice(from) {
      return new TextView(this.text.slice(from));
    }
  }, {
    key: "localPosFromDOM",
    value: function localPosFromDOM(node, offset) {
      return node == this.dom ? offset : offset ? this.text.length : 0;
    }
  }, {
    key: "domAtPos",
    value: function domAtPos(pos) {
      return new DOMPos(this.dom, pos);
    }
  }, {
    key: "domBoundsAround",
    value: function domBoundsAround(_from, _to, offset) {
      return {
        from: offset,
        to: offset + this.length,
        startDOM: this.dom,
        endDOM: this.dom.nextSibling
      };
    }
  }, {
    key: "coordsAt",
    value: function coordsAt(pos, side) {
      return textCoords(this.dom, pos, side);
    }
  }]);

  return TextView;
}(InlineView);

var MarkView = /*#__PURE__*/function (_InlineView2) {
  _inherits(MarkView, _InlineView2);

  var _super3 = _createSuper(MarkView);

  function MarkView(mark) {
    var _this2;

    var children = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    var length = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

    _classCallCheck(this, MarkView);

    _this2 = _super3.call(this);
    _this2.mark = mark;
    _this2.children = children;
    _this2.length = length;

    var _iterator4 = _createForOfIteratorHelper(children),
        _step4;

    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        var ch = _step4.value;
        ch.setParent(_assertThisInitialized(_this2));
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }

    return _this2;
  }

  _createClass(MarkView, [{
    key: "createDOM",
    value: function createDOM() {
      var dom = document.createElement(this.mark.tagName);
      if (this.mark["class"]) dom.className = this.mark["class"];
      if (this.mark.attrs) for (var name in this.mark.attrs) {
        dom.setAttribute(name, this.mark.attrs[name]);
      }
      this.setDOM(dom);
    }
  }, {
    key: "sync",
    value: function sync(track) {
      if (!this.dom) this.createDOM();

      _get(_getPrototypeOf(MarkView.prototype), "sync", this).call(this, track);
    }
  }, {
    key: "merge",
    value: function merge(from, to, source, openStart, openEnd) {
      if (source && (!(source instanceof MarkView && source.mark.eq(this.mark)) || from && openStart <= 0 || to < this.length && openEnd <= 0)) return false;
      mergeInlineChildren(this, from, to, source ? source.children : none$2, openStart - 1, openEnd - 1);
      this.markDirty();
      return true;
    }
  }, {
    key: "slice",
    value: function slice(from) {
      return new MarkView(this.mark, sliceInlineChildren(this.children, from), this.length - from);
    }
  }, {
    key: "domAtPos",
    value: function domAtPos(pos) {
      return inlineDOMAtPos(this.dom, this.children, pos);
    }
  }, {
    key: "coordsAt",
    value: function coordsAt(pos, side) {
      return coordsInChildren(this, pos, side);
    }
  }]);

  return MarkView;
}(InlineView);

function textCoords(text, pos, side) {
  var length = text.nodeValue.length;
  if (pos > length) pos = length;
  var from = pos,
      to = pos,
      flatten = 0;

  if (pos == 0 && side < 0 || pos == length && side >= 0) {
    if (!(browser.chrome || browser.gecko)) {
      // These browsers reliably return valid rectangles for empty ranges
      if (pos) {
        from--;
        flatten = 1;
      } // FIXME this is wrong in RTL text
      else {
          to++;
          flatten = -1;
        }
    }
  } else {
    if (side < 0) from--;else to++;
  }

  var range = tempRange();
  range.setEnd(text, to);
  range.setStart(text, from);
  var rects = range.getClientRects();
  if (!rects.length) return Rect0;
  var rect = rects[(flatten ? flatten < 0 : side >= 0) ? 0 : rects.length - 1];
  if (browser.safari && !flatten && rect.width == 0) rect = Array.prototype.find.call(rects, function (r) {
    return r.width;
  }) || rect;
  return flatten ? flattenRect(rect, flatten < 0) : rect;
} // Also used for collapsed ranges that don't have a placeholder widget!


var WidgetView = /*#__PURE__*/function (_InlineView3) {
  _inherits(WidgetView, _InlineView3);

  var _super4 = _createSuper(WidgetView);

  function WidgetView(widget, length, side) {
    var _this3;

    _classCallCheck(this, WidgetView);

    _this3 = _super4.call(this);
    _this3.widget = widget;
    _this3.length = length;
    _this3.side = side;
    return _this3;
  }

  _createClass(WidgetView, [{
    key: "slice",
    value: function slice(from) {
      return WidgetView.create(this.widget, this.length - from, this.side);
    }
  }, {
    key: "sync",
    value: function sync() {
      if (!this.dom || !this.widget.updateDOM(this.dom)) {
        this.setDOM(this.widget.toDOM(this.editorView));
        this.dom.contentEditable = "false";
      }
    }
  }, {
    key: "getSide",
    value: function getSide() {
      return this.side;
    }
  }, {
    key: "merge",
    value: function merge(from, to, source, openStart, openEnd) {
      if (source && (!(source instanceof WidgetView) || !this.widget.compare(source.widget) || from > 0 && openStart <= 0 || to < this.length && openEnd <= 0)) return false;
      this.length = from + (source ? source.length : 0) + (this.length - to);
      return true;
    }
  }, {
    key: "become",
    value: function become(other) {
      if (other.length == this.length && other instanceof WidgetView && other.side == this.side) {
        if (this.widget.constructor == other.widget.constructor) {
          if (!this.widget.eq(other.widget)) this.markDirty(true);
          this.widget = other.widget;
          return true;
        }
      }

      return false;
    }
  }, {
    key: "ignoreMutation",
    value: function ignoreMutation() {
      return true;
    }
  }, {
    key: "ignoreEvent",
    value: function ignoreEvent(event) {
      return this.widget.ignoreEvent(event);
    }
  }, {
    key: "overrideDOMText",
    get: function get() {
      if (this.length == 0) return _text.Text.empty;
      var top = this;

      while (top.parent) {
        top = top.parent;
      }

      var view = top.editorView,
          text = view && view.state.doc,
          start = this.posAtStart;
      return text ? text.slice(start, start + this.length) : _text.Text.empty;
    }
  }, {
    key: "domAtPos",
    value: function domAtPos(pos) {
      return pos == 0 ? DOMPos.before(this.dom) : DOMPos.after(this.dom, pos == this.length);
    }
  }, {
    key: "domBoundsAround",
    value: function domBoundsAround() {
      return null;
    }
  }, {
    key: "coordsAt",
    value: function coordsAt(pos, side) {
      var rects = this.dom.getClientRects(),
          rect = null;
      if (!rects.length) return Rect0;

      for (var i = pos > 0 ? rects.length - 1 : 0;; i += pos > 0 ? -1 : 1) {
        rect = rects[i];
        if (pos > 0 ? i == 0 : i == rects.length - 1 || rect.top < rect.bottom) break;
      }

      return pos == 0 && side > 0 || pos == this.length && side <= 0 ? rect : flattenRect(rect, pos == 0);
    }
  }], [{
    key: "create",
    value: function create(widget, length, side) {
      return new (widget.customView || WidgetView)(widget, length, side);
    }
  }]);

  return WidgetView;
}(InlineView);

var CompositionView = /*#__PURE__*/function (_WidgetView) {
  _inherits(CompositionView, _WidgetView);

  var _super5 = _createSuper(CompositionView);

  function CompositionView() {
    _classCallCheck(this, CompositionView);

    return _super5.apply(this, arguments);
  }

  _createClass(CompositionView, [{
    key: "domAtPos",
    value: function domAtPos(pos) {
      return new DOMPos(this.widget.text, pos);
    }
  }, {
    key: "sync",
    value: function sync() {
      if (!this.dom) this.setDOM(this.widget.toDOM());
    }
  }, {
    key: "localPosFromDOM",
    value: function localPosFromDOM(node, offset) {
      return !offset ? 0 : node.nodeType == 3 ? Math.min(offset, this.length) : this.length;
    }
  }, {
    key: "ignoreMutation",
    value: function ignoreMutation() {
      return false;
    }
  }, {
    key: "overrideDOMText",
    get: function get() {
      return null;
    }
  }, {
    key: "coordsAt",
    value: function coordsAt(pos, side) {
      return textCoords(this.widget.text, pos, side);
    }
  }]);

  return CompositionView;
}(WidgetView);

function mergeInlineChildren(parent, from, to, elts, openStart, openEnd) {
  var cur = parent.childCursor();

  var _cur$findPos = cur.findPos(to, 1),
      toI = _cur$findPos.i,
      toOff = _cur$findPos.off;

  var _cur$findPos2 = cur.findPos(from, -1),
      fromI = _cur$findPos2.i,
      fromOff = _cur$findPos2.off;

  var dLen = from - to;

  var _iterator5 = _createForOfIteratorHelper(elts),
      _step5;

  try {
    for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
      var view = _step5.value;
      dLen += view.length;
    }
  } catch (err) {
    _iterator5.e(err);
  } finally {
    _iterator5.f();
  }

  parent.length += dLen;
  var children = parent.children; // Both from and to point into the same text view

  if (fromI == toI && fromOff) {
    var start = children[fromI]; // Maybe just update that view and be done

    if (elts.length == 1 && start.merge(fromOff, toOff, elts[0], openStart, openEnd)) return;

    if (elts.length == 0) {
      start.merge(fromOff, toOff, null, openStart, openEnd);
      return;
    } // Otherwise split it, so that we don't have to worry about aliasing front/end afterwards


    var after = start.slice(toOff);
    if (after.merge(0, 0, elts[elts.length - 1], 0, openEnd)) elts[elts.length - 1] = after;else elts.push(after);
    toI++;
    openEnd = toOff = 0;
  } // Make sure start and end positions fall on node boundaries
  // (fromOff/toOff are no longer used after this), and that if the
  // start or end of the elts can be merged with adjacent nodes,
  // this is done


  if (toOff) {
    var end = children[toI];

    if (elts.length && end.merge(0, toOff, elts[elts.length - 1], 0, openEnd)) {
      elts.pop();
      openEnd = 0;
    } else {
      end.merge(0, toOff, null, 0, 0);
    }
  } else if (toI < children.length && elts.length && children[toI].merge(0, 0, elts[elts.length - 1], 0, openEnd)) {
    elts.pop();
    openEnd = 0;
  }

  if (fromOff) {
    var _start2 = children[fromI];

    if (elts.length && _start2.merge(fromOff, _start2.length, elts[0], openStart, 0)) {
      elts.shift();
      openStart = 0;
    } else {
      _start2.merge(fromOff, _start2.length, null, 0, 0);
    }

    fromI++;
  } else if (fromI && elts.length) {
    var _end = children[fromI - 1];

    if (_end.merge(_end.length, _end.length, elts[0], openStart, 0)) {
      elts.shift();
      openStart = 0;
    }
  } // Then try to merge any mergeable nodes at the start and end of
  // the changed range


  while (fromI < toI && elts.length && children[toI - 1].become(elts[elts.length - 1])) {
    elts.pop();
    toI--;
    openEnd = 0;
  }

  while (fromI < toI && elts.length && children[fromI].become(elts[0])) {
    elts.shift();
    fromI++;
    openStart = 0;
  }

  if (!elts.length && fromI && toI < children.length && openStart && openEnd && children[toI].merge(0, 0, children[fromI - 1], openStart, openEnd)) fromI--; // And if anything remains, splice the child array to insert the new elts

  if (elts.length || fromI != toI) parent.replaceChildren(fromI, toI, elts);
}

function sliceInlineChildren(children, from) {
  var result = [],
      off = 0;

  var _iterator6 = _createForOfIteratorHelper(children),
      _step6;

  try {
    for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
      var elt = _step6.value;
      var end = off + elt.length;
      if (end > from) result.push(off < from ? elt.slice(from - off) : elt);
      off = end;
    }
  } catch (err) {
    _iterator6.e(err);
  } finally {
    _iterator6.f();
  }

  return result;
}

function inlineDOMAtPos(dom, children, pos) {
  var i = 0;

  for (var off = 0; i < children.length; i++) {
    var child = children[i],
        end = off + child.length;
    if (end == off && child.getSide() <= 0) continue;
    if (pos > off && pos < end && child.dom.parentNode == dom) return child.domAtPos(pos - off);
    if (pos <= off) break;
    off = end;
  }

  for (; i > 0; i--) {
    var before = children[i - 1].dom;
    if (before.parentNode == dom) return DOMPos.after(before);
  }

  return new DOMPos(dom, 0);
} // Assumes `view`, if a mark view, has precisely 1 child.


function joinInlineInto(parent, view, open) {
  var last,
      children = parent.children;

  if (open > 0 && view instanceof MarkView && children.length && (last = children[children.length - 1]) instanceof MarkView && last.mark.eq(view.mark)) {
    joinInlineInto(last, view.children[0], open - 1);
  } else {
    children.push(view);
    view.setParent(parent);
  }

  parent.length += view.length;
}

function coordsInChildren(view, pos, side) {
  for (var off = 0, i = 0; i < view.children.length; i++) {
    var child = view.children[i],
        end = off + child.length;
    if (end == off && child.getSide() <= 0) continue;
    if (side <= 0 || end == view.length ? end >= pos : end > pos) return child.coordsAt(pos - off, side);
    off = end;
  }

  return (view.dom.lastChild || view.dom).getBoundingClientRect();
}

function combineAttrs(source, target) {
  for (var name in source) {
    if (name == "class" && target["class"]) target["class"] += " " + source["class"];else if (name == "style" && target.style) target.style += ";" + source.style;else target[name] = source[name];
  }

  return target;
}

function attrsEq(a, b) {
  if (a == b) return true;
  if (!a || !b) return false;
  var keysA = Object.keys(a),
      keysB = Object.keys(b);
  if (keysA.length != keysB.length) return false;

  for (var _i3 = 0, _keysA = keysA; _i3 < _keysA.length; _i3++) {
    var key = _keysA[_i3];
    if (keysB.indexOf(key) == -1 || a[key] !== b[key]) return false;
  }

  return true;
}

function _updateAttrs(dom, prev, attrs) {
  if (prev) for (var name in prev) {
    if (!(attrs && name in attrs)) dom.removeAttribute(name);
  }
  if (attrs) for (var _name in attrs) {
    if (!(prev && prev[_name] == attrs[_name])) dom.setAttribute(_name, attrs[_name]);
  }
} /// Widgets added to the content are described by subclasses of this
/// class. Using a description object like that makes it possible to
/// delay creating of the DOM structure for a widget until it is
/// needed, and to avoid redrawing widgets even when the decorations
/// that define them are recreated.


var WidgetType = /*#__PURE__*/function () {
  function WidgetType() {
    _classCallCheck(this, WidgetType);
  }

  _createClass(WidgetType, [{
    key: "eq",
    value: /// Compare this instance to another instance of the same type.
    /// (TypeScript can't express this, but only instances of the same
    /// specific class will be passed to this method.) This is used to
    /// avoid redrawing widgets when they are replaced by a new
    /// decoration of the same type. The default implementation just
    /// returns `false`, which will cause new instances of the widget to
    /// always be redrawn.
    function eq(_widget) {
      return false;
    } /// Update a DOM element created by a widget of the same type (but
    /// different, non-`eq` content) to reflect this widget. May return
    /// true to indicate that it could update, false to indicate it
    /// couldn't (in which case the widget will be redrawn). The default
    /// implementation just returns false.

  }, {
    key: "updateDOM",
    value: function updateDOM(_dom) {
      return false;
    } /// @internal

  }, {
    key: "compare",
    value: function compare(other) {
      return this == other || this.constructor == other.constructor && this.eq(other);
    } /// The estimated height this widget will have, to be used when
    /// estimating the height of content that hasn't been drawn. May
    /// return -1 to indicate you don't know. The default implementation
    /// returns -1.

  }, {
    key: "estimatedHeight",
    get: function get() {
      return -1;
    } /// Can be used to configure which kinds of events inside the widget
    /// should be ignored by the editor. The default is to ignore all
    /// events.

  }, {
    key: "ignoreEvent",
    value: function ignoreEvent(_event) {
      return true;
    } //// @internal

  }, {
    key: "customView",
    get: function get() {
      return null;
    }
  }]);

  return WidgetType;
}(); /// The different types of blocks that can occur in an editor view.


exports.WidgetType = WidgetType;
var BlockType;
exports.BlockType = BlockType;

(function (BlockType) {
  /// A line of text.
  BlockType[BlockType["Text"] = 0] = "Text"; /// A block widget associated with the position after it.

  BlockType[BlockType["WidgetBefore"] = 1] = "WidgetBefore"; /// A block widget associated with the position before it.

  BlockType[BlockType["WidgetAfter"] = 2] = "WidgetAfter"; /// A block widget [replacing](#view.Decoration^replace) a range of content.

  BlockType[BlockType["WidgetRange"] = 3] = "WidgetRange";
})(BlockType || (exports.BlockType = BlockType = {})); /// A decoration provides information on how to draw or style a piece
/// of content. You'll usually use it wrapped in a
/// [`Range`](#rangeset.Range), which adds a start and end position.


var Decoration = /*#__PURE__*/function (_RangeValue) {
  _inherits(Decoration, _RangeValue);

  var _super6 = _createSuper(Decoration);

  /// @internal
  function Decoration( /// @internal
  startSide, /// @internal
  endSide, /// @internal
  widget, /// The config object used to create this decoration. You can
  /// include additional properties in there to store metadata about
  /// your decoration.
  spec) {
    var _this4;

    _classCallCheck(this, Decoration);

    _this4 = _super6.call(this);
    _this4.startSide = startSide;
    _this4.endSide = endSide;
    _this4.widget = widget;
    _this4.spec = spec;
    return _this4;
  } /// @internal


  _createClass(Decoration, [{
    key: "heightRelevant",
    get: function get() {
      return false;
    } /// Create a mark decoration, which influences the styling of the
    /// content in its range. Nested mark decorations will cause nested
    /// DOM elements to be created. Nesting order is determined by
    /// precedence of the [facet](#view.EditorView^decorations) or
    /// (below the facet-provided decorations) [view
    /// plugin](#view.PluginSpec.decorations). Such elements are split
    /// on line boundaries and on the boundaries of higher-precedence
    /// decorations.

  }, {
    key: "hasHeight",
    value: /// @internal
    function hasHeight() {
      return this.widget ? this.widget.estimatedHeight > -1 : false;
    }
  }], [{
    key: "mark",
    value: function mark(spec) {
      return new MarkDecoration(spec);
    } /// Create a widget decoration, which adds an element at the given
    /// position.

  }, {
    key: "widget",
    value: function widget(spec) {
      var side = spec.side || 0;
      if (spec.block) side += (200000000
      /* BigBlock */
      + 1) * (side > 0 ? 1 : -1);
      return new PointDecoration(spec, side, side, !!spec.block, spec.widget || null, false);
    } /// Create a replace decoration which replaces the given range with
    /// a widget, or simply hides it.

  }, {
    key: "replace",
    value: function replace(spec) {
      var block = !!spec.block;

      var _getInclusive = getInclusive(spec),
          start = _getInclusive.start,
          end = _getInclusive.end;

      var startSide = block ? -200000000
      /* BigBlock */
      * (start ? 2 : 1) : 100000000
      /* BigInline */
      * (start ? -1 : 1);
      var endSide = block ? 200000000
      /* BigBlock */
      * (end ? 2 : 1) : 100000000
      /* BigInline */
      * (end ? 1 : -1);
      return new PointDecoration(spec, startSide, endSide, block, spec.widget || null, true);
    } /// Create a line decoration, which can add DOM attributes to the
    /// line starting at the given position.

  }, {
    key: "line",
    value: function line(spec) {
      return new LineDecoration(spec);
    } /// Build a [`DecorationSet`](#view.DecorationSet) from the given
    /// decorated range or ranges. If the ranges aren't already sorted,
    /// pass `true` for `sort` to make the library sort them for you.

  }, {
    key: "set",
    value: function set(of) {
      var sort = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      return _rangeset.RangeSet.of(of, sort);
    }
  }]);

  return Decoration;
}(_rangeset.RangeValue); /// The empty set of decorations.


exports.Decoration = Decoration;
Decoration.none = _rangeset.RangeSet.empty;

var MarkDecoration = /*#__PURE__*/function (_Decoration) {
  _inherits(MarkDecoration, _Decoration);

  var _super7 = _createSuper(MarkDecoration);

  function MarkDecoration(spec) {
    var _this5;

    _classCallCheck(this, MarkDecoration);

    var _getInclusive2 = getInclusive(spec),
        start = _getInclusive2.start,
        end = _getInclusive2.end;

    _this5 = _super7.call(this, 100000000
    /* BigInline */
    * (start ? -1 : 1), 100000000
    /* BigInline */
    * (end ? 1 : -1), null, spec);
    _this5.tagName = spec.tagName || "span";
    _this5["class"] = spec["class"] || "";
    _this5.attrs = spec.attributes || null;
    return _this5;
  }

  _createClass(MarkDecoration, [{
    key: "eq",
    value: function eq(other) {
      return this == other || other instanceof MarkDecoration && this.tagName == other.tagName && this["class"] == other["class"] && attrsEq(this.attrs, other.attrs);
    }
  }, {
    key: "range",
    value: function range(from) {
      var to = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : from;
      if (from >= to) throw new RangeError("Mark decorations may not be empty");
      return _get(_getPrototypeOf(MarkDecoration.prototype), "range", this).call(this, from, to);
    }
  }]);

  return MarkDecoration;
}(Decoration);

MarkDecoration.prototype.point = false;

var LineDecoration = /*#__PURE__*/function (_Decoration2) {
  _inherits(LineDecoration, _Decoration2);

  var _super8 = _createSuper(LineDecoration);

  function LineDecoration(spec) {
    _classCallCheck(this, LineDecoration);

    return _super8.call(this, -100000000
    /* BigInline */
    , -100000000
    /* BigInline */
    , null, spec);
  }

  _createClass(LineDecoration, [{
    key: "eq",
    value: function eq(other) {
      return other instanceof LineDecoration && attrsEq(this.spec.attributes, other.spec.attributes);
    }
  }, {
    key: "range",
    value: function range(from) {
      var to = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : from;
      if (to != from) throw new RangeError("Line decoration ranges must be zero-length");
      return _get(_getPrototypeOf(LineDecoration.prototype), "range", this).call(this, from, to);
    }
  }]);

  return LineDecoration;
}(Decoration);

LineDecoration.prototype.mapMode = _state.MapMode.TrackBefore;
LineDecoration.prototype.point = true;

var PointDecoration = /*#__PURE__*/function (_Decoration3) {
  _inherits(PointDecoration, _Decoration3);

  var _super9 = _createSuper(PointDecoration);

  function PointDecoration(spec, startSide, endSide, block, widget, isReplace) {
    var _this6;

    _classCallCheck(this, PointDecoration);

    _this6 = _super9.call(this, startSide, endSide, widget, spec);
    _this6.block = block;
    _this6.isReplace = isReplace;
    _this6.mapMode = !block ? _state.MapMode.TrackDel : startSide < 0 ? _state.MapMode.TrackBefore : _state.MapMode.TrackAfter;
    return _this6;
  } // Only relevant when this.block == true


  _createClass(PointDecoration, [{
    key: "type",
    get: function get() {
      return this.startSide < this.endSide ? BlockType.WidgetRange : this.startSide < 0 ? BlockType.WidgetBefore : BlockType.WidgetAfter;
    }
  }, {
    key: "heightRelevant",
    get: function get() {
      return this.block || !!this.widget && this.widget.estimatedHeight >= 5;
    }
  }, {
    key: "eq",
    value: function eq(other) {
      return other instanceof PointDecoration && widgetsEq(this.widget, other.widget) && this.block == other.block && this.startSide == other.startSide && this.endSide == other.endSide;
    }
  }, {
    key: "range",
    value: function range(from) {
      var to = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : from;
      if (this.isReplace && (from > to || from == to && this.startSide > 0 && this.endSide < 0)) throw new RangeError("Invalid range for replacement decoration");
      if (!this.isReplace && to != from) throw new RangeError("Widget decorations can only have zero-length ranges");
      return _get(_getPrototypeOf(PointDecoration.prototype), "range", this).call(this, from, to);
    }
  }]);

  return PointDecoration;
}(Decoration);

PointDecoration.prototype.point = true;

function getInclusive(spec) {
  var start = spec.inclusiveStart,
      end = spec.inclusiveEnd;
  if (start == null) start = spec.inclusive;
  if (end == null) end = spec.inclusive;
  return {
    start: start || false,
    end: end || false
  };
}

function widgetsEq(a, b) {
  return a == b || !!(a && b && a.compare(b));
}

function addRange(from, to, ranges) {
  var margin = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
  var last = ranges.length - 1;
  if (last >= 0 && ranges[last] + margin > from) ranges[last] = Math.max(ranges[last], to);else ranges.push(from, to);
}

var LineView = /*#__PURE__*/function (_ContentView2) {
  _inherits(LineView, _ContentView2);

  var _super10 = _createSuper(LineView);

  function LineView() {
    var _this7;

    _classCallCheck(this, LineView);

    _this7 = _super10.apply(this, arguments);
    _this7.children = [];
    _this7.length = 0;
    _this7.prevAttrs = undefined;
    _this7.attrs = null;
    _this7.breakAfter = 0;
    return _this7;
  } // Consumes source


  _createClass(LineView, [{
    key: "merge",
    value: function merge(from, to, source, takeDeco, openStart, openEnd) {
      if (source) {
        if (!(source instanceof LineView)) return false;
        if (!this.dom) source.transferDOM(this); // Reuse source.dom when appropriate
      }

      if (takeDeco) this.setDeco(source ? source.attrs : null);
      mergeInlineChildren(this, from, to, source ? source.children : none$1, openStart, openEnd);
      return true;
    }
  }, {
    key: "split",
    value: function split(at) {
      var end = new LineView();
      end.breakAfter = this.breakAfter;
      if (this.length == 0) return end;

      var _this$childPos = this.childPos(at),
          i = _this$childPos.i,
          off = _this$childPos.off;

      if (off) {
        end.append(this.children[i].slice(off), 0);
        this.children[i].merge(off, this.children[i].length, null, 0, 0);
        i++;
      }

      for (var j = i; j < this.children.length; j++) {
        end.append(this.children[j], 0);
      }

      while (i > 0 && this.children[i - 1].length == 0) {
        this.children[i - 1].parent = null;
        i--;
      }

      this.children.length = i;
      this.markDirty();
      this.length = at;
      return end;
    }
  }, {
    key: "transferDOM",
    value: function transferDOM(other) {
      if (!this.dom) return;
      other.setDOM(this.dom);
      other.prevAttrs = this.prevAttrs === undefined ? this.attrs : this.prevAttrs;
      this.prevAttrs = undefined;
      this.dom = null;
    }
  }, {
    key: "setDeco",
    value: function setDeco(attrs) {
      if (!attrsEq(this.attrs, attrs)) {
        if (this.dom) {
          this.prevAttrs = this.attrs;
          this.markDirty();
        }

        this.attrs = attrs;
      }
    } // Only called when building a line view in ContentBuilder

  }, {
    key: "append",
    value: function append(child, openStart) {
      joinInlineInto(this, child, openStart);
    } // Only called when building a line view in ContentBuilder

  }, {
    key: "addLineDeco",
    value: function addLineDeco(deco) {
      var attrs = deco.spec.attributes;
      if (attrs) this.attrs = combineAttrs(attrs, this.attrs || {});
    }
  }, {
    key: "domAtPos",
    value: function domAtPos(pos) {
      return inlineDOMAtPos(this.dom, this.children, pos);
    }
  }, {
    key: "sync",
    value: function sync(track) {
      if (!this.dom) {
        this.setDOM(document.createElement("div"));
        this.dom.className = "cm-line";
        this.prevAttrs = this.attrs ? null : undefined;
      }

      if (this.prevAttrs !== undefined) {
        _updateAttrs(this.dom, this.prevAttrs, this.attrs);

        this.dom.classList.add("cm-line");
        this.prevAttrs = undefined;
      }

      _get(_getPrototypeOf(LineView.prototype), "sync", this).call(this, track);

      var last = this.dom.lastChild;

      if (!last || last.nodeName != "BR" && ContentView.get(last) instanceof WidgetView) {
        var hack = document.createElement("BR");
        hack.cmIgnore = true;
        this.dom.appendChild(hack);
      }
    }
  }, {
    key: "measureTextSize",
    value: function measureTextSize() {
      if (this.children.length == 0 || this.length > 20) return null;
      var totalWidth = 0;

      var _iterator7 = _createForOfIteratorHelper(this.children),
          _step7;

      try {
        for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
          var child = _step7.value;
          if (!(child instanceof TextView)) return null;
          var rects = clientRectsFor(child.dom);
          if (rects.length != 1) return null;
          totalWidth += rects[0].width;
        }
      } catch (err) {
        _iterator7.e(err);
      } finally {
        _iterator7.f();
      }

      return {
        lineHeight: this.dom.getBoundingClientRect().height,
        charWidth: totalWidth / this.length
      };
    }
  }, {
    key: "coordsAt",
    value: function coordsAt(pos, side) {
      return coordsInChildren(this, pos, side);
    }
  }, {
    key: "match",
    value: function match(_other) {
      return false;
    }
  }, {
    key: "type",
    get: function get() {
      return BlockType.Text;
    }
  }], [{
    key: "find",
    value: function find(docView, pos) {
      for (var i = 0, off = 0;; i++) {
        var block = docView.children[i],
            end = off + block.length;

        if (end >= pos) {
          if (block instanceof LineView) return block;
          if (block.length) return null;
        }

        off = end + block.breakAfter;
      }
    }
  }]);

  return LineView;
}(ContentView);

var none$1 = [];

var BlockWidgetView = /*#__PURE__*/function (_ContentView3) {
  _inherits(BlockWidgetView, _ContentView3);

  var _super11 = _createSuper(BlockWidgetView);

  function BlockWidgetView(widget, length, type) {
    var _this8;

    _classCallCheck(this, BlockWidgetView);

    _this8 = _super11.call(this);
    _this8.widget = widget;
    _this8.length = length;
    _this8.type = type;
    _this8.breakAfter = 0;
    return _this8;
  }

  _createClass(BlockWidgetView, [{
    key: "merge",
    value: function merge(from, to, source, _takeDeco, openStart, openEnd) {
      if (source && (!(source instanceof BlockWidgetView) || !this.widget.compare(source.widget) || from > 0 && openStart <= 0 || to < this.length && openEnd <= 0)) return false;
      this.length = from + (source ? source.length : 0) + (this.length - to);
      return true;
    }
  }, {
    key: "domAtPos",
    value: function domAtPos(pos) {
      return pos == 0 ? DOMPos.before(this.dom) : DOMPos.after(this.dom, pos == this.length);
    }
  }, {
    key: "split",
    value: function split(at) {
      var len = this.length - at;
      this.length = at;
      return new BlockWidgetView(this.widget, len, this.type);
    }
  }, {
    key: "children",
    get: function get() {
      return none$1;
    }
  }, {
    key: "sync",
    value: function sync() {
      if (!this.dom || !this.widget.updateDOM(this.dom)) {
        this.setDOM(this.widget.toDOM(this.editorView));
        this.dom.contentEditable = "false";
      }
    }
  }, {
    key: "overrideDOMText",
    get: function get() {
      return this.parent ? this.parent.view.state.doc.slice(this.posAtStart, this.posAtEnd) : _state.Text.empty;
    }
  }, {
    key: "domBoundsAround",
    value: function domBoundsAround() {
      return null;
    }
  }, {
    key: "match",
    value: function match(other) {
      if (other instanceof BlockWidgetView && other.type == this.type && other.widget.constructor == this.widget.constructor) {
        if (!other.widget.eq(this.widget)) this.markDirty(true);
        this.widget = other.widget;
        this.length = other.length;
        this.breakAfter = other.breakAfter;
        return true;
      }

      return false;
    }
  }, {
    key: "ignoreMutation",
    value: function ignoreMutation() {
      return true;
    }
  }, {
    key: "ignoreEvent",
    value: function ignoreEvent(event) {
      return this.widget.ignoreEvent(event);
    }
  }]);

  return BlockWidgetView;
}(ContentView);

var ContentBuilder = /*#__PURE__*/function () {
  function ContentBuilder(doc, pos, end) {
    _classCallCheck(this, ContentBuilder);

    this.doc = doc;
    this.pos = pos;
    this.end = end;
    this.content = [];
    this.curLine = null;
    this.breakAtStart = 0;
    this.openStart = -1;
    this.openEnd = -1;
    this.text = "";
    this.textOff = 0;
    this.cursor = doc.iter();
    this.skip = pos;
  }

  _createClass(ContentBuilder, [{
    key: "posCovered",
    value: function posCovered() {
      if (this.content.length == 0) return !this.breakAtStart && this.doc.lineAt(this.pos).from != this.pos;
      var last = this.content[this.content.length - 1];
      return !last.breakAfter && !(last instanceof BlockWidgetView && last.type == BlockType.WidgetBefore);
    }
  }, {
    key: "getLine",
    value: function getLine() {
      if (!this.curLine) this.content.push(this.curLine = new LineView());
      return this.curLine;
    }
  }, {
    key: "addWidget",
    value: function addWidget(view) {
      this.curLine = null;
      this.content.push(view);
    }
  }, {
    key: "finish",
    value: function finish() {
      if (!this.posCovered()) this.getLine();
    }
  }, {
    key: "wrapMarks",
    value: function wrapMarks(view, active) {
      for (var i = active.length - 1; i >= 0; i--) {
        view = new MarkView(active[i], [view], view.length);
      }

      return view;
    }
  }, {
    key: "buildText",
    value: function buildText(length, active, openStart) {
      while (length > 0) {
        if (this.textOff == this.text.length) {
          var _this$cursor$next = this.cursor.next(this.skip),
              value = _this$cursor$next.value,
              lineBreak = _this$cursor$next.lineBreak,
              done = _this$cursor$next.done;

          this.skip = 0;
          if (done) throw new Error("Ran out of text content when drawing inline views");

          if (lineBreak) {
            if (!this.posCovered()) this.getLine();
            if (this.content.length) this.content[this.content.length - 1].breakAfter = 1;else this.breakAtStart = 1;
            this.curLine = null;
            length--;
            continue;
          } else {
            this.text = value;
            this.textOff = 0;
          }
        }

        var take = Math.min(this.text.length - this.textOff, length, 512
        /* Chunk */
        );
        this.getLine().append(this.wrapMarks(new TextView(this.text.slice(this.textOff, this.textOff + take)), active), openStart);
        this.textOff += take;
        length -= take;
        openStart = 0;
      }
    }
  }, {
    key: "span",
    value: function span(from, to, active, openStart) {
      this.buildText(to - from, active, openStart);
      this.pos = to;
      if (this.openStart < 0) this.openStart = openStart;
    }
  }, {
    key: "point",
    value: function point(from, to, deco, active, openStart) {
      var len = to - from;

      if (deco instanceof PointDecoration) {
        if (deco.block) {
          var type = deco.type;
          if (type == BlockType.WidgetAfter && !this.posCovered()) this.getLine();
          this.addWidget(new BlockWidgetView(deco.widget || new NullWidget("div"), len, type));
        } else {
          var widget = this.wrapMarks(WidgetView.create(deco.widget || new NullWidget("span"), len, deco.startSide), active);
          this.getLine().append(widget, openStart);
        }
      } else if (this.doc.lineAt(this.pos).from == this.pos) {
        // Line decoration
        this.getLine().addLineDeco(deco);
      }

      if (len) {
        // Advance the iterator past the replaced content
        if (this.textOff + len <= this.text.length) {
          this.textOff += len;
        } else {
          this.skip += len - (this.text.length - this.textOff);
          this.text = "";
          this.textOff = 0;
        }

        this.pos = to;
      }

      if (this.openStart < 0) this.openStart = openStart;
    }
  }], [{
    key: "build",
    value: function build(text, from, to, decorations) {
      var builder = new ContentBuilder(text, from, to);
      builder.openEnd = _rangeset.RangeSet.spans(decorations, from, to, builder);
      if (builder.openStart < 0) builder.openStart = builder.openEnd;
      builder.finish();
      return builder;
    }
  }]);

  return ContentBuilder;
}();

var NullWidget = /*#__PURE__*/function (_WidgetType) {
  _inherits(NullWidget, _WidgetType);

  var _super12 = _createSuper(NullWidget);

  function NullWidget(tag) {
    var _this9;

    _classCallCheck(this, NullWidget);

    _this9 = _super12.call(this);
    _this9.tag = tag;
    return _this9;
  }

  _createClass(NullWidget, [{
    key: "eq",
    value: function eq(other) {
      return other.tag == this.tag;
    }
  }, {
    key: "toDOM",
    value: function toDOM() {
      return document.createElement(this.tag);
    }
  }, {
    key: "updateDOM",
    value: function updateDOM(elt) {
      return elt.nodeName.toLowerCase() == this.tag;
    }
  }]);

  return NullWidget;
}(WidgetType);

var none = [];

var clickAddsSelectionRange = _state.Facet.define();

var dragMovesSelection$1 = _state.Facet.define();

var mouseSelectionStyle = _state.Facet.define();

var exceptionSink = _state.Facet.define();

var updateListener = _state.Facet.define();

var inputHandler = _state.Facet.define(); /// Log or report an unhandled exception in client code. Should
/// probably only be used by extension code that allows client code to
/// provide functions, and calls those functions in a context where an
/// exception can't be propagated to calling code in a reasonable way
/// (for example when in an event handler).
///
/// Either calls a handler registered with
/// [`EditorView.exceptionSink`](#view.EditorView^exceptionSink),
/// `window.onerror`, if defined, or `console.error` (in which case
/// it'll pass `context`, when given, as first argument).


function logException(state, exception, context) {
  var handler = state.facet(exceptionSink);
  if (handler.length) handler[0](exception);else if (window.onerror) window.onerror(String(exception), context, undefined, undefined, exception);else if (context) console.error(context + ":", exception);else console.error(exception);
}

var editable = _state.Facet.define({
  combine: function combine(values) {
    return values.length ? values[0] : true;
  }
}); /// Used to [declare](#view.PluginSpec.provide) which
/// [fields](#view.PluginValue) a [view plugin](#view.ViewPlugin)
/// provides.


var PluginFieldProvider = /// @internal
function PluginFieldProvider( /// @internal
field, /// @internal
get) {
  _classCallCheck(this, PluginFieldProvider);

  this.field = field;
  this.get = get;
}; /// Plugin fields are a mechanism for allowing plugins to provide
/// values that can be retrieved through the
/// [`pluginField`](#view.EditorView.pluginField) view method.


exports.PluginFieldProvider = PluginFieldProvider;

var PluginField = /*#__PURE__*/function () {
  function PluginField() {
    _classCallCheck(this, PluginField);
  }

  _createClass(PluginField, [{
    key: "from",
    value: /// Create a [provider](#view.PluginFieldProvider) for this field,
    /// to use with a plugin's [provide](#view.PluginSpec.provide)
    /// option.
    function from(get) {
      return new PluginFieldProvider(this, get);
    } /// Define a new plugin field.

  }], [{
    key: "define",
    value: function define() {
      return new PluginField();
    }
  }]);

  return PluginField;
}(); /// This field can be used by plugins to provide
/// [decorations](#view.Decoration).
///
/// **Note**: For reasons of data flow (plugins are only updated
/// after the viewport is computed), decorations produced by plugins
/// are _not_ taken into account when predicting the vertical
/// layout structure of the editor. Thus, things like large widgets
/// or big replacements (i.e. code folding) should be provided
/// through the state-level [`decorations`
/// facet](#view.EditorView^decorations), not this plugin field.


exports.PluginField = PluginField;
PluginField.decorations = PluginField.define(); /// Plugins can provide additional scroll margins (space around the
/// sides of the scrolling element that should be considered
/// invisible) through this field. This can be useful when the
/// plugin introduces elements that cover part of that element (for
/// example a horizontally fixed gutter).

PluginField.scrollMargins = PluginField.define();
var nextPluginID = 0;

var viewPlugin = _state.Facet.define(); /// View plugins associate stateful values with a view. They can
/// influence the way the content is drawn, and are notified of things
/// that happen in the view.


var ViewPlugin = /*#__PURE__*/function () {
  function ViewPlugin( /// @internal
  id, /// @internal
  create, /// @internal
  fields) {
    _classCallCheck(this, ViewPlugin);

    this.id = id;
    this.create = create;
    this.fields = fields;
    this.extension = viewPlugin.of(this);
  } /// Define a plugin from a constructor function that creates the
  /// plugin's value, given an editor view.


  _createClass(ViewPlugin, null, [{
    key: "define",
    value: function define(create, spec) {
      var _ref3 = spec || {},
          eventHandlers = _ref3.eventHandlers,
          provide = _ref3.provide,
          decorations = _ref3.decorations;

      var fields = [];

      if (provide) {
        var _iterator8 = _createForOfIteratorHelper(Array.isArray(provide) ? provide : [provide]),
            _step8;

        try {
          for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
            var provider = _step8.value;
            fields.push(provider);
          }
        } catch (err) {
          _iterator8.e(err);
        } finally {
          _iterator8.f();
        }
      }

      if (eventHandlers) fields.push(domEventHandlers.from(function (value) {
        return {
          plugin: value,
          handlers: eventHandlers
        };
      }));
      if (decorations) fields.push(PluginField.decorations.from(decorations));
      return new ViewPlugin(nextPluginID++, create, fields);
    } /// Create a plugin for a class whose constructor takes a single
    /// editor view as argument.

  }, {
    key: "fromClass",
    value: function fromClass(cls, spec) {
      return ViewPlugin.define(function (view) {
        return new cls(view);
      }, spec);
    }
  }]);

  return ViewPlugin;
}();

exports.ViewPlugin = ViewPlugin;
var domEventHandlers = PluginField.define();

var PluginInstance = /*#__PURE__*/function () {
  function PluginInstance(spec) {
    _classCallCheck(this, PluginInstance);

    this.spec = spec; // When starting an update, all plugins have this field set to the
    // update object, indicating they need to be updated. When finished
    // updating, it is set to `false`. Retrieving a plugin that needs to
    // be updated with `view.plugin` forces an eager update.

    this.mustUpdate = null; // This is null when the plugin is initially created, but
    // initialized on the first update.

    this.value = null;
  }

  _createClass(PluginInstance, [{
    key: "takeField",
    value: function takeField(type, target) {
      var _iterator9 = _createForOfIteratorHelper(this.spec.fields),
          _step9;

      try {
        for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
          var _step9$value = _step9.value,
              field = _step9$value.field,
              get = _step9$value.get;
          if (field == type) target.push(get(this.value));
        }
      } catch (err) {
        _iterator9.e(err);
      } finally {
        _iterator9.f();
      }
    }
  }, {
    key: "update",
    value: function update(view) {
      if (!this.value) {
        try {
          this.value = this.spec.create(view);
        } catch (e) {
          logException(view.state, e, "CodeMirror plugin crashed");
          return PluginInstance.dummy;
        }
      } else if (this.mustUpdate) {
        var update = this.mustUpdate;
        this.mustUpdate = null;
        if (!this.value.update) return this;

        try {
          this.value.update(update);
        } catch (e) {
          logException(update.state, e, "CodeMirror plugin crashed");
          if (this.value.destroy) try {
            this.value.destroy();
          } catch (_) {}
          return PluginInstance.dummy;
        }
      }

      return this;
    }
  }, {
    key: "destroy",
    value: function destroy(view) {
      var _a;

      if ((_a = this.value) === null || _a === void 0 ? void 0 : _a.destroy) {
        try {
          this.value.destroy();
        } catch (e) {
          logException(view.state, e, "CodeMirror plugin crashed");
        }
      }
    }
  }]);

  return PluginInstance;
}();

PluginInstance.dummy = new PluginInstance(ViewPlugin.define(function () {
  return {};
}));

var editorAttributes = _state.Facet.define({
  combine: function combine(values) {
    return values.reduce(function (a, b) {
      return combineAttrs(b, a);
    }, {});
  }
});

var contentAttributes = _state.Facet.define({
  combine: function combine(values) {
    return values.reduce(function (a, b) {
      return combineAttrs(b, a);
    }, {});
  }
}); // Provide decorations


var decorations = _state.Facet.define();

var styleModule = _state.Facet.define();

var ChangedRange = /*#__PURE__*/function () {
  function ChangedRange(fromA, toA, fromB, toB) {
    _classCallCheck(this, ChangedRange);

    this.fromA = fromA;
    this.toA = toA;
    this.fromB = fromB;
    this.toB = toB;
  }

  _createClass(ChangedRange, [{
    key: "join",
    value: function join(other) {
      return new ChangedRange(Math.min(this.fromA, other.fromA), Math.max(this.toA, other.toA), Math.min(this.fromB, other.fromB), Math.max(this.toB, other.toB));
    }
  }, {
    key: "addToSet",
    value: function addToSet(set) {
      var i = set.length,
          me = this;

      for (; i > 0; i--) {
        var range = set[i - 1];
        if (range.fromA > me.toA) continue;
        if (range.toA < me.fromA) break;
        me = me.join(range);
        set.splice(i - 1, 1);
      }

      set.splice(i, 0, me);
      return set;
    }
  }], [{
    key: "extendWithRanges",
    value: function extendWithRanges(diff, ranges) {
      if (ranges.length == 0) return diff;
      var result = [];

      for (var dI = 0, rI = 0, posA = 0, posB = 0;; dI++) {
        var next = dI == diff.length ? null : diff[dI],
            off = posA - posB;
        var end = next ? next.fromB : 1e9;

        while (rI < ranges.length && ranges[rI] < end) {
          var from = ranges[rI],
              to = ranges[rI + 1];
          var fromB = Math.max(posB, from),
              toB = Math.min(end, to);
          if (fromB <= toB) new ChangedRange(fromB + off, toB + off, fromB, toB).addToSet(result);
          if (to > end) break;else rI += 2;
        }

        if (!next) return result;
        new ChangedRange(next.fromA, next.toA, next.fromB, next.toB).addToSet(result);
        posA = next.toA;
        posB = next.toB;
      }
    }
  }]);

  return ChangedRange;
}(); /// View [plugins](#view.ViewPlugin) are given instances of this
/// class, which describe what happened, whenever the view is updated.


var ViewUpdate = /*#__PURE__*/function () {
  /// @internal
  function ViewUpdate( /// The editor view that the update is associated with.
  view, /// The new editor state.
  state) {
    var transactions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : none;

    _classCallCheck(this, ViewUpdate);

    this.view = view;
    this.state = state;
    this.transactions = transactions; /// @internal

    this.flags = 0;
    this.startState = view.state;
    this.changes = _state.ChangeSet.empty(this.startState.doc.length);

    var _iterator10 = _createForOfIteratorHelper(transactions),
        _step10;

    try {
      for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
        var tr = _step10.value;
        this.changes = this.changes.compose(tr.changes);
      }
    } catch (err) {
      _iterator10.e(err);
    } finally {
      _iterator10.f();
    }

    var changedRanges = [];
    this.changes.iterChangedRanges(function (fromA, toA, fromB, toB) {
      return changedRanges.push(new ChangedRange(fromA, toA, fromB, toB));
    });
    this.changedRanges = changedRanges;
    var focus = view.hasFocus;

    if (focus != view.inputState.notifiedFocused) {
      view.inputState.notifiedFocused = focus;
      this.flags |= 1
      /* Focus */
      ;
    }

    if (this.docChanged) this.flags |= 2
    /* Height */
    ;
  } /// Tells you whether the viewport changed in this update.


  _createClass(ViewUpdate, [{
    key: "viewportChanged",
    get: function get() {
      return (this.flags & 4
      /* Viewport */
      ) > 0;
    } /// Indicates whether the line height in the editor changed in this update.

  }, {
    key: "heightChanged",
    get: function get() {
      return (this.flags & 2
      /* Height */
      ) > 0;
    } /// Returns true when the document changed or the size of the editor
    /// or the lines or characters within it has changed.

  }, {
    key: "geometryChanged",
    get: function get() {
      return this.docChanged || (this.flags & (16
      /* Geometry */
      | 2
      /* Height */
      )) > 0;
    } /// True when this update indicates a focus change.

  }, {
    key: "focusChanged",
    get: function get() {
      return (this.flags & 1
      /* Focus */
      ) > 0;
    } /// Whether the document changed in this update.

  }, {
    key: "docChanged",
    get: function get() {
      return this.transactions.some(function (tr) {
        return tr.docChanged;
      });
    } /// Whether the selection was explicitly set in this update.

  }, {
    key: "selectionSet",
    get: function get() {
      return this.transactions.some(function (tr) {
        return tr.selection;
      });
    } /// @internal

  }, {
    key: "empty",
    get: function get() {
      return this.flags == 0 && this.transactions.length == 0;
    }
  }]);

  return ViewUpdate;
}();

exports.ViewUpdate = ViewUpdate;

var DocView = /*#__PURE__*/function (_ContentView4) {
  _inherits(DocView, _ContentView4);

  var _super13 = _createSuper(DocView);

  function DocView(view) {
    var _this10;

    _classCallCheck(this, DocView);

    _this10 = _super13.call(this);
    _this10.view = view;
    _this10.compositionDeco = Decoration.none;
    _this10.decorations = []; // Track a minimum width for the editor. When measuring sizes in
    // checkLayout, this is updated to point at the width of a given
    // element and its extent in the document. When a change happens in
    // that range, these are reset. That way, once we've seen a
    // line/element of a given length, we keep the editor wide enough to
    // fit at least that element, until it is changed, at which point we
    // forget it again.

    _this10.minWidth = 0;
    _this10.minWidthFrom = 0;
    _this10.minWidthTo = 0; // Track whether the DOM selection was set in a lossy way, so that
    // we don't mess it up when reading it back it

    _this10.impreciseAnchor = null;
    _this10.impreciseHead = null;

    _this10.setDOM(view.contentDOM);

    _this10.children = [new LineView()];

    _this10.children[0].setParent(_assertThisInitialized(_this10));

    _this10.updateInner([new ChangedRange(0, 0, 0, view.state.doc.length)], _this10.updateDeco(), 0);

    return _this10;
  }

  _createClass(DocView, [{
    key: "root",
    get: function get() {
      return this.view.root;
    }
  }, {
    key: "editorView",
    get: function get() {
      return this.view;
    }
  }, {
    key: "length",
    get: function get() {
      return this.view.state.doc.length;
    } // Update the document view to a given state. scrollIntoView can be
    // used as a hint to compute a new viewport that includes that
    // position, if we know the editor is going to scroll that position
    // into view.

  }, {
    key: "update",
    value: function update(_update) {
      var _this11 = this;

      var changedRanges = _update.changedRanges;

      if (this.minWidth > 0 && changedRanges.length) {
        if (!changedRanges.every(function (_ref4) {
          var fromA = _ref4.fromA,
              toA = _ref4.toA;
          return toA < _this11.minWidthFrom || fromA > _this11.minWidthTo;
        })) {
          this.minWidth = 0;
        } else {
          this.minWidthFrom = _update.changes.mapPos(this.minWidthFrom, 1);
          this.minWidthTo = _update.changes.mapPos(this.minWidthTo, 1);
        }
      }

      if (this.view.inputState.composing < 0) this.compositionDeco = Decoration.none;else if (_update.transactions.length) this.compositionDeco = computeCompositionDeco(this.view, _update.changes); // When the DOM nodes around the selection are moved to another
      // parent, Chrome sometimes reports a different selection through
      // getSelection than the one that it actually shows to the user.
      // This forces a selection update when lines are joined to work
      // around that. Issue #54

      var forceSelection = (browser.ie || browser.chrome) && !this.compositionDeco.size && _update && _update.state.doc.lines != _update.startState.doc.lines;
      var prevDeco = this.decorations,
          deco = this.updateDeco();
      var decoDiff = findChangedDeco(prevDeco, deco, _update.changes);
      changedRanges = ChangedRange.extendWithRanges(changedRanges, decoDiff);

      var pointerSel = _update.transactions.some(function (tr) {
        return tr.annotation(_state.Transaction.userEvent) == "pointerselection";
      });

      if (this.dirty == 0
      /* Not */
      && changedRanges.length == 0 && !(_update.flags & (4
      /* Viewport */
      | 8
      /* LineGaps */
      )) && _update.state.selection.main.from >= this.view.viewport.from && _update.state.selection.main.to <= this.view.viewport.to) {
        this.updateSelection(forceSelection, pointerSel);
        return false;
      } else {
        this.updateInner(changedRanges, deco, _update.startState.doc.length, forceSelection, pointerSel);
        return true;
      }
    } // Used both by update and checkLayout do perform the actual DOM
    // update

  }, {
    key: "updateInner",
    value: function updateInner(changes, deco, oldLength) {
      var _this12 = this;

      var forceSelection = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
      var pointerSel = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
      this.updateChildren(changes, deco, oldLength);
      this.view.observer.ignore(function () {
        // Lock the height during redrawing, since Chrome sometimes
        // messes with the scroll position during DOM mutation (though
        // no relayout is triggered and I cannot imagine how it can
        // recompute the scroll position without a layout)
        _this12.dom.style.height = _this12.view.viewState.domHeight + "px";
        _this12.dom.style.minWidth = _this12.minWidth ? _this12.minWidth + "px" : ""; // Chrome will sometimes, when DOM mutations occur directly
        // around the selection, get confused and report a different
        // selection from the one it displays (issue #218). This tries
        // to detect that situation.

        var track = browser.chrome ? {
          node: getSelection(_this12.view.root).focusNode,
          written: false
        } : undefined;

        _this12.sync(track);

        _this12.dirty = 0
        /* Not */
        ;
        if (track === null || track === void 0 ? void 0 : track.written) forceSelection = true;

        _this12.updateSelection(forceSelection, pointerSel);

        _this12.dom.style.height = "";
      });
    }
  }, {
    key: "updateChildren",
    value: function updateChildren(changes, deco, oldLength) {
      var cursor = this.childCursor(oldLength);

      for (var i = changes.length - 1;; i--) {
        var next = i >= 0 ? changes[i] : null;
        if (!next) break;
        var fromA = next.fromA,
            toA = next.toA,
            fromB = next.fromB,
            toB = next.toB;

        var _ContentBuilder$build = ContentBuilder.build(this.view.state.doc, fromB, toB, deco),
            content = _ContentBuilder$build.content,
            breakAtStart = _ContentBuilder$build.breakAtStart,
            openStart = _ContentBuilder$build.openStart,
            openEnd = _ContentBuilder$build.openEnd;

        var _cursor$findPos = cursor.findPos(toA, 1),
            toI = _cursor$findPos.i,
            toOff = _cursor$findPos.off;

        var _cursor$findPos2 = cursor.findPos(fromA, -1),
            fromI = _cursor$findPos2.i,
            fromOff = _cursor$findPos2.off;

        this.replaceRange(fromI, fromOff, toI, toOff, content, breakAtStart, openStart, openEnd);
      }
    }
  }, {
    key: "replaceRange",
    value: function replaceRange(fromI, fromOff, toI, toOff, content, breakAtStart, openStart, openEnd) {
      var before = this.children[fromI],
          last = content.length ? content[content.length - 1] : null;
      var breakAtEnd = last ? last.breakAfter : breakAtStart; // Change within a single line

      if (fromI == toI && !breakAtStart && !breakAtEnd && content.length < 2 && before.merge(fromOff, toOff, content.length ? last : null, fromOff == 0, openStart, openEnd)) return;
      var after = this.children[toI]; // Make sure the end of the line after the update is preserved in `after`

      if (toOff < after.length || after.children.length && after.children[after.children.length - 1].length == 0) {
        // If we're splitting a line, separate part of the start line to
        // avoid that being mangled when updating the start line.
        if (fromI == toI) {
          after = after.split(toOff);
          toOff = 0;
        } // If the element after the replacement should be merged with
        // the last replacing element, update `content`


        if (!breakAtEnd && last && after.merge(0, toOff, last, true, 0, openEnd)) {
          content[content.length - 1] = after;
        } else {
          // Remove the start of the after element, if necessary, and
          // add it to `content`.
          if (toOff || after.children.length && after.children[0].length == 0) after.merge(0, toOff, null, false, 0, openEnd);
          content.push(after);
        }
      } else if (after.breakAfter) {
        // The element at `toI` is entirely covered by this range.
        // Preserve its line break, if any.
        if (last) last.breakAfter = 1;else breakAtStart = 1;
      } // Since we've handled the next element from the current elements
      // now, make sure `toI` points after that.


      toI++;
      before.breakAfter = breakAtStart;

      if (fromOff > 0) {
        if (!breakAtStart && content.length && before.merge(fromOff, before.length, content[0], false, openStart, 0)) {
          before.breakAfter = content.shift().breakAfter;
        } else if (fromOff < before.length || before.children.length && before.children[before.children.length - 1].length == 0) {
          before.merge(fromOff, before.length, null, false, openStart, 0);
        }

        fromI++;
      } // Try to merge widgets on the boundaries of the replacement


      while (fromI < toI && content.length) {
        if (this.children[toI - 1].match(content[content.length - 1])) toI--, content.pop();else if (this.children[fromI].match(content[0])) fromI++, content.shift();else break;
      }

      if (fromI < toI || content.length) this.replaceChildren(fromI, toI, content);
    } // Sync the DOM selection to this.state.selection

  }, {
    key: "updateSelection",
    value: function updateSelection() {
      var force = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var fromPointer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      if (!(fromPointer || this.mayControlSelection())) return;
      var main = this.view.state.selection.main; // FIXME need to handle the case where the selection falls inside a block range

      var anchor = this.domAtPos(main.anchor);
      var head = main.empty ? anchor : this.domAtPos(main.head);

      if (browser.gecko && main.empty && betweenUneditable(anchor)) {
        var dummy = document.createTextNode("");
        this.view.observer.ignore(function () {
          return anchor.node.insertBefore(dummy, anchor.node.childNodes[anchor.offset] || null);
        });
        anchor = head = new DOMPos(dummy, 0);
        force = true;
      }

      var domSel = getSelection(this.root); // If the selection is already here, or in an equivalent position, don't touch it

      if (force || !domSel.focusNode || browser.gecko && main.empty && nextToUneditable(domSel.focusNode, domSel.focusOffset) || !isEquivalentPosition(anchor.node, anchor.offset, domSel.anchorNode, domSel.anchorOffset) || !isEquivalentPosition(head.node, head.offset, domSel.focusNode, domSel.focusOffset)) {
        this.view.observer.ignore(function () {
          if (main.empty) {
            // Work around https://bugzilla.mozilla.org/show_bug.cgi?id=1612076
            if (browser.gecko) {
              var nextTo = nextToUneditable(anchor.node, anchor.offset);

              if (nextTo && nextTo != (1
              /* Before */
              | 2
              /* After */
              )) {
                var text = nearbyTextNode(anchor.node, anchor.offset, nextTo == 1
                /* Before */
                ? 1 : -1);
                if (text) anchor = new DOMPos(text, nextTo == 1
                /* Before */
                ? 0 : text.nodeValue.length);
              }
            }

            domSel.collapse(anchor.node, anchor.offset);
            if (main.bidiLevel != null && domSel.cursorBidiLevel != null) domSel.cursorBidiLevel = main.bidiLevel;
          } else if (domSel.extend) {
            // Selection.extend can be used to create an 'inverted' selection
            // (one where the focus is before the anchor), but not all
            // browsers support it yet.
            domSel.collapse(anchor.node, anchor.offset);
            domSel.extend(head.node, head.offset);
          } else {
            // Primitive (IE) way
            var range = document.createRange();

            if (main.anchor > main.head) {
              var _ref5 = [head, anchor];
              anchor = _ref5[0];
              head = _ref5[1];
            }

            range.setEnd(head.node, head.offset);
            range.setStart(anchor.node, anchor.offset);
            domSel.removeAllRanges();
            domSel.addRange(range);
          }
        });
      }

      this.impreciseAnchor = anchor.precise ? null : new DOMPos(domSel.anchorNode, domSel.anchorOffset);
      this.impreciseHead = head.precise ? null : new DOMPos(domSel.focusNode, domSel.focusOffset);
    }
  }, {
    key: "enforceCursorAssoc",
    value: function enforceCursorAssoc() {
      var cursor = this.view.state.selection.main;
      var sel = getSelection(this.root);
      if (!cursor.empty || !cursor.assoc || !sel.modify) return;
      var line = LineView.find(this, cursor.head); // FIXME provide view-line-range finding helper

      if (!line) return;
      var lineStart = line.posAtStart;
      if (cursor.head == lineStart || cursor.head == lineStart + line.length) return;
      var before = this.coordsAt(cursor.head, -1),
          after = this.coordsAt(cursor.head, 1);
      if (!before || !after || before.bottom > after.top) return;
      var dom = this.domAtPos(cursor.head + cursor.assoc);
      sel.collapse(dom.node, dom.offset);
      sel.modify("move", cursor.assoc < 0 ? "forward" : "backward", "lineboundary");
    }
  }, {
    key: "mayControlSelection",
    value: function mayControlSelection() {
      return this.view.state.facet(editable) ? this.root.activeElement == this.dom : hasSelection(this.dom, getSelection(this.root));
    }
  }, {
    key: "nearest",
    value: function nearest(dom) {
      for (var cur = dom; cur;) {
        var domView = ContentView.get(cur);
        if (domView && domView.rootView == this) return domView;
        cur = cur.parentNode;
      }

      return null;
    }
  }, {
    key: "posFromDOM",
    value: function posFromDOM(node, offset) {
      var view = this.nearest(node);
      if (!view) throw new RangeError("Trying to find position for a DOM position outside of the document");
      return view.localPosFromDOM(node, offset) + view.posAtStart;
    }
  }, {
    key: "domAtPos",
    value: function domAtPos(pos) {
      var _this$childCursor$fin = this.childCursor().findPos(pos, -1),
          i = _this$childCursor$fin.i,
          off = _this$childCursor$fin.off;

      for (; i < this.children.length - 1;) {
        var child = this.children[i];
        if (off < child.length || child instanceof LineView) break;
        i++;
        off = 0;
      }

      return this.children[i].domAtPos(off);
    }
  }, {
    key: "coordsAt",
    value: function coordsAt(pos, side) {
      for (var off = this.length, i = this.children.length - 1;; i--) {
        var child = this.children[i],
            start = off - child.breakAfter - child.length;
        if (pos > start || pos == start && (child.type == BlockType.Text || !i || this.children[i - 1].breakAfter)) return child.coordsAt(pos - start, side);
        off = start;
      }
    }
  }, {
    key: "measureVisibleLineHeights",
    value: function measureVisibleLineHeights() {
      var result = [],
          _this$view$viewState$ = this.view.viewState.viewport,
          from = _this$view$viewState$.from,
          to = _this$view$viewState$.to;
      var minWidth = Math.max(this.view.scrollDOM.clientWidth, this.minWidth) + 1;

      for (var pos = 0, i = 0; i < this.children.length; i++) {
        var child = this.children[i],
            end = pos + child.length;
        if (end > to) break;

        if (pos >= from) {
          result.push(child.dom.getBoundingClientRect().height);
          var width = child.dom.scrollWidth;

          if (width > minWidth) {
            this.minWidth = minWidth = width;
            this.minWidthFrom = pos;
            this.minWidthTo = end;
          }
        }

        pos = end + child.breakAfter;
      }

      return result;
    }
  }, {
    key: "measureTextSize",
    value: function measureTextSize() {
      var _this13 = this;

      var _iterator11 = _createForOfIteratorHelper(this.children),
          _step11;

      try {
        for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
          var child = _step11.value;

          if (child instanceof LineView) {
            var measure = child.measureTextSize();
            if (measure) return measure;
          }
        } // If no workable line exists, force a layout of a measurable element

      } catch (err) {
        _iterator11.e(err);
      } finally {
        _iterator11.f();
      }

      var dummy = document.createElement("div"),
          lineHeight,
          charWidth;
      dummy.className = "cm-line";
      dummy.textContent = "abc def ghi jkl mno pqr stu";
      this.view.observer.ignore(function () {
        _this13.dom.appendChild(dummy);

        var rect = clientRectsFor(dummy.firstChild)[0];
        lineHeight = dummy.getBoundingClientRect().height;
        charWidth = rect ? rect.width / 27 : 7;
        dummy.remove();
      });
      return {
        lineHeight: lineHeight,
        charWidth: charWidth
      };
    }
  }, {
    key: "childCursor",
    value: function childCursor() {
      var pos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.length;
      // Move back to start of last element when possible, so that
      // `ChildCursor.findPos` doesn't have to deal with the edge case
      // of being after the last element.
      var i = this.children.length;
      if (i) pos -= this.children[--i].length;
      return new ChildCursor(this.children, pos, i);
    }
  }, {
    key: "computeBlockGapDeco",
    value: function computeBlockGapDeco() {
      var deco = [],
          vs = this.view.viewState;

      for (var pos = 0, i = 0;; i++) {
        var next = i == vs.viewports.length ? null : vs.viewports[i];
        var end = next ? next.from - 1 : this.length;

        if (end > pos) {
          var height = vs.lineAt(end, 0).bottom - vs.lineAt(pos, 0).top;
          deco.push(Decoration.replace({
            widget: new BlockGapWidget(height),
            block: true,
            inclusive: true
          }).range(pos, end));
        }

        if (!next) break;
        pos = next.to + 1;
      }

      return Decoration.set(deco);
    }
  }, {
    key: "updateDeco",
    value: function updateDeco() {
      return this.decorations = [this.computeBlockGapDeco(), this.view.viewState.lineGapDeco, this.compositionDeco].concat(_toConsumableArray(this.view.state.facet(decorations)), _toConsumableArray(this.view.pluginField(PluginField.decorations)));
    }
  }, {
    key: "scrollPosIntoView",
    value: function scrollPosIntoView(pos, side) {
      var rect = this.coordsAt(pos, side);
      if (!rect) return;
      var mLeft = 0,
          mRight = 0,
          mTop = 0,
          mBottom = 0;

      var _iterator12 = _createForOfIteratorHelper(this.view.pluginField(PluginField.scrollMargins)),
          _step12;

      try {
        for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
          var margins = _step12.value;

          if (margins) {
            var left = margins.left,
                right = margins.right,
                top = margins.top,
                bottom = margins.bottom;
            if (left != null) mLeft = Math.max(mLeft, left);
            if (right != null) mRight = Math.max(mRight, right);
            if (top != null) mTop = Math.max(mTop, top);
            if (bottom != null) mBottom = Math.max(mBottom, bottom);
          }
        }
      } catch (err) {
        _iterator12.e(err);
      } finally {
        _iterator12.f();
      }

      scrollRectIntoView(this.dom, {
        left: rect.left - mLeft,
        top: rect.top - mTop,
        right: rect.right + mRight,
        bottom: rect.bottom + mBottom
      });
    }
  }]);

  return DocView;
}(ContentView);

function betweenUneditable(pos) {
  return pos.node.nodeType == 1 && pos.node.firstChild && (pos.offset == 0 || pos.node.childNodes[pos.offset - 1].contentEditable == "false") && (pos.offset < pos.node.childNodes.length || pos.node.childNodes[pos.offset].contentEditable == "false");
}

var BlockGapWidget = /*#__PURE__*/function (_WidgetType2) {
  _inherits(BlockGapWidget, _WidgetType2);

  var _super14 = _createSuper(BlockGapWidget);

  function BlockGapWidget(height) {
    var _this14;

    _classCallCheck(this, BlockGapWidget);

    _this14 = _super14.call(this);
    _this14.height = height;
    return _this14;
  }

  _createClass(BlockGapWidget, [{
    key: "toDOM",
    value: function toDOM() {
      var elt = document.createElement("div");
      this.updateDOM(elt);
      return elt;
    }
  }, {
    key: "eq",
    value: function eq(other) {
      return other.height == this.height;
    }
  }, {
    key: "updateDOM",
    value: function updateDOM(elt) {
      elt.style.height = this.height + "px";
      return true;
    }
  }, {
    key: "estimatedHeight",
    get: function get() {
      return this.height;
    }
  }]);

  return BlockGapWidget;
}(WidgetType);

function computeCompositionDeco(view, changes) {
  var sel = getSelection(view.root);
  var textNode = sel.focusNode && nearbyTextNode(sel.focusNode, sel.focusOffset, 0);
  if (!textNode) return Decoration.none;
  var cView = view.docView.nearest(textNode);
  var from,
      to,
      topNode = textNode;

  if (cView instanceof InlineView) {
    while (cView.parent instanceof InlineView) {
      cView = cView.parent;
    }

    from = cView.posAtStart;
    to = from + cView.length;
    topNode = cView.dom;
  } else if (cView instanceof LineView) {
    while (topNode.parentNode != cView.dom) {
      topNode = topNode.parentNode;
    }

    var prev = topNode.previousSibling;

    while (prev && !ContentView.get(prev)) {
      prev = prev.previousSibling;
    }

    from = to = prev ? ContentView.get(prev).posAtEnd : cView.posAtStart;
  } else {
    return Decoration.none;
  }

  var newFrom = changes.mapPos(from, 1),
      newTo = Math.max(newFrom, changes.mapPos(to, -1));
  var text = textNode.nodeValue,
      state = view.state;

  if (newTo - newFrom < text.length) {
    if (state.sliceDoc(newFrom, Math.min(state.doc.length, newFrom + text.length)) == text) newTo = newFrom + text.length;else if (state.sliceDoc(Math.max(0, newTo - text.length), newTo) == text) newFrom = newTo - text.length;else return Decoration.none;
  } else if (state.sliceDoc(newFrom, newTo) != text) {
    return Decoration.none;
  }

  return Decoration.set(Decoration.replace({
    widget: new CompositionWidget(topNode, textNode)
  }).range(newFrom, newTo));
}

var CompositionWidget = /*#__PURE__*/function (_WidgetType3) {
  _inherits(CompositionWidget, _WidgetType3);

  var _super15 = _createSuper(CompositionWidget);

  function CompositionWidget(top, text) {
    var _this15;

    _classCallCheck(this, CompositionWidget);

    _this15 = _super15.call(this);
    _this15.top = top;
    _this15.text = text;
    return _this15;
  }

  _createClass(CompositionWidget, [{
    key: "eq",
    value: function eq(other) {
      return this.top == other.top && this.text == other.text;
    }
  }, {
    key: "toDOM",
    value: function toDOM() {
      return this.top;
    }
  }, {
    key: "ignoreEvent",
    value: function ignoreEvent() {
      return false;
    }
  }, {
    key: "customView",
    get: function get() {
      return CompositionView;
    }
  }]);

  return CompositionWidget;
}(WidgetType);

function nearbyTextNode(node, offset, side) {
  for (;;) {
    if (node.nodeType == 3) return node;

    if (node.nodeType == 1 && offset > 0 && side <= 0) {
      node = node.childNodes[offset - 1];
      offset = maxOffset(node);
    } else if (node.nodeType == 1 && offset < node.childNodes.length && side >= 0) {
      node = node.childNodes[offset];
      offset = 0;
    } else {
      return null;
    }
  }
}

function nextToUneditable(node, offset) {
  if (node.nodeType != 1) return 0;
  return (offset && node.childNodes[offset - 1].contentEditable == "false" ? 1
  /* Before */
  : 0) | (offset < node.childNodes.length && node.childNodes[offset].contentEditable == "false" ? 2
  /* After */
  : 0);
}

var DecorationComparator$1 = /*#__PURE__*/function () {
  function DecorationComparator$1() {
    _classCallCheck(this, DecorationComparator$1);

    this.changes = [];
  }

  _createClass(DecorationComparator$1, [{
    key: "compareRange",
    value: function compareRange(from, to) {
      addRange(from, to, this.changes);
    }
  }, {
    key: "comparePoint",
    value: function comparePoint(from, to) {
      addRange(from, to, this.changes);
    }
  }]);

  return DecorationComparator$1;
}();

function findChangedDeco(a, b, diff) {
  var comp = new DecorationComparator$1();

  _rangeset.RangeSet.compare(a, b, diff, comp);

  return comp.changes;
} /// Used to indicate [text direction](#view.EditorView.textDirection).


var Direction;
exports.Direction = Direction;

(function (Direction) {
  // (These are chosen to match the base levels, in bidi algorithm
  // terms, of spans in that direction.)
  /// Left-to-right.
  Direction[Direction["LTR"] = 0] = "LTR"; /// Right-to-left.

  Direction[Direction["RTL"] = 1] = "RTL";
})(Direction || (exports.Direction = Direction = {}));

var LTR = Direction.LTR,
    RTL = Direction.RTL; // Decode a string with each type encoded as log2(type)

function dec(str) {
  var result = [];

  for (var i = 0; i < str.length; i++) {
    result.push(1 << +str[i]);
  }

  return result;
} // Character types for codepoints 0 to 0xf8


var LowTypes = dec("88888888888888888888888888888888888666888888787833333333337888888000000000000000000000000008888880000000000000000000000000088888888888888888888888888888888888887866668888088888663380888308888800000000000000000000000800000000000000000000000000000008"); // Character types for codepoints 0x600 to 0x6f9

var ArabicTypes = dec("4444448826627288999999999992222222222222222222222222222222222222222222222229999999999999999999994444444444644222822222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222999999949999999229989999223333333333");

function charType(ch) {
  return ch <= 0xf7 ? LowTypes[ch] : 0x590 <= ch && ch <= 0x5f4 ? 2
  /* R */
  : 0x600 <= ch && ch <= 0x6f9 ? ArabicTypes[ch - 0x600] : 0x6ee <= ch && ch <= 0x8ac ? 4
  /* AL */
  : 0x2000 <= ch && ch <= 0x200b ? 256
  /* NI */
  : ch == 0x200c ? 256
  /* NI */
  : 1
  /* L */
  ;
}

var BidiRE = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/; /// Represents a contiguous range of text that has a single direction
/// (as in left-to-right or right-to-left).

var BidiSpan = /*#__PURE__*/function () {
  /// @internal
  function BidiSpan( /// The start of the span (relative to the start of the line).
  from, /// The end of the span.
  to, /// The ["bidi
  /// level"](https://unicode.org/reports/tr9/#Basic_Display_Algorithm)
  /// of the span (in this context, 0 means
  /// left-to-right, 1 means right-to-left, 2 means left-to-right
  /// number inside right-to-left text).
  level) {
    _classCallCheck(this, BidiSpan);

    this.from = from;
    this.to = to;
    this.level = level;
  } /// The direction of this span.


  _createClass(BidiSpan, [{
    key: "dir",
    get: function get() {
      return this.level % 2 ? RTL : LTR;
    } /// @internal

  }, {
    key: "side",
    value: function side(end, dir) {
      return this.dir == dir == end ? this.to : this.from;
    } /// @internal

  }], [{
    key: "find",
    value: function find(order, index, level, assoc) {
      var maybe = -1;

      for (var i = 0; i < order.length; i++) {
        var span = order[i];

        if (span.from <= index && span.to >= index) {
          if (span.level == level) return i; // When multiple spans match, if assoc != 0, take the one that
          // covers that side, otherwise take the one with the minimum
          // level.

          if (maybe < 0 || (assoc != 0 ? assoc < 0 ? span.from < index : span.to > index : order[maybe].level > span.level)) maybe = i;
        }
      }

      if (maybe < 0) throw new RangeError("Index out of range");
      return maybe;
    }
  }]);

  return BidiSpan;
}(); // Reused array of character types


exports.BidiSpan = BidiSpan;
var types = [];

function computeOrder(line, direction) {
  var len = line.length,
      outerType = direction == LTR ? 1
  /* L */
  : 2
  /* R */
  ;
  if (!line || outerType == 1
  /* L */
  && !BidiRE.test(line)) return trivialOrder(len); // W1. Examine each non-spacing mark (NSM) in the level run, and
  // change the type of the NSM to the type of the previous
  // character. If the NSM is at the start of the level run, it will
  // get the type of sor.
  // W2. Search backwards from each instance of a European number
  // until the first strong type (R, L, AL, or sor) is found. If an
  // AL is found, change the type of the European number to Arabic
  // number.
  // W3. Change all ALs to R.
  // (Left after this: L, R, EN, AN, ET, CS, NI)

  for (var i = 0, prev = outerType, prevStrong = outerType; i < len; i++) {
    var type = charType(line.charCodeAt(i));
    if (type == 512
    /* NSM */
    ) type = prev;else if (type == 8
    /* EN */
    && prevStrong == 4
    /* AL */
    ) type = 16
      /* AN */
      ;
    types[i] = type == 4
    /* AL */
    ? 2
    /* R */
    : type;
    if (type & 7
    /* Strong */
    ) prevStrong = type;
    prev = type;
  } // W5. A sequence of European terminators adjacent to European
  // numbers changes to all European numbers.
  // W6. Otherwise, separators and terminators change to Other
  // Neutral.
  // W7. Search backwards from each instance of a European number
  // until the first strong type (R, L, or sor) is found. If an L is
  // found, then change the type of the European number to L.
  // (Left after this: L, R, EN+AN, NI)


  for (var _i4 = 0, _prev = outerType, _prevStrong = outerType; _i4 < len; _i4++) {
    var _type2 = types[_i4];

    if (_type2 == 128
    /* CS */
    ) {
        if (_i4 < len - 1 && _prev == types[_i4 + 1] && _prev & 24
        /* Num */
        ) _type2 = types[_i4] = _prev;else types[_i4] = 256
        /* NI */
        ;
      } else if (_type2 == 64
    /* ET */
    ) {
        var end = _i4 + 1;

        while (end < len && types[end] == 64
        /* ET */
        ) {
          end++;
        }

        var replace = _i4 && _prev == 8
        /* EN */
        || end < len && types[end] == 8
        /* EN */
        ? _prevStrong == 1
        /* L */
        ? 1
        /* L */
        : 8
        /* EN */
        : 256
        /* NI */
        ;

        for (var j = _i4; j < end; j++) {
          types[j] = replace;
        }

        _i4 = end - 1;
      } else if (_type2 == 8
    /* EN */
    && _prevStrong == 1
    /* L */
    ) {
        types[_i4] = 1
        /* L */
        ;
      }

    _prev = _type2;
    if (_type2 & 7
    /* Strong */
    ) _prevStrong = _type2;
  } // N1. A sequence of neutrals takes the direction of the
  // surrounding strong text if the text on both sides has the same
  // direction. European and Arabic numbers act as if they were R in
  // terms of their influence on neutrals. Start-of-level-run (sor)
  // and end-of-level-run (eor) are used at level run boundaries.
  // N2. Any remaining neutrals take the embedding direction.
  // (Left after this: L, R, EN+AN)


  for (var _i5 = 0; _i5 < len; _i5++) {
    if (types[_i5] == 256
    /* NI */
    ) {
        var _end2 = _i5 + 1;

        while (_end2 < len && types[_end2] == 256
        /* NI */
        ) {
          _end2++;
        }

        var beforeL = (_i5 ? types[_i5 - 1] : outerType) == 1
        /* L */
        ;
        var afterL = (_end2 < len ? types[_end2] : outerType) == 1
        /* L */
        ;

        var _replace = beforeL == afterL ? beforeL ? 1
        /* L */
        : 2
        /* R */
        : outerType;

        for (var _j = _i5; _j < _end2; _j++) {
          types[_j] = _replace;
        }

        _i5 = _end2 - 1;
      }
  } // Here we depart from the documented algorithm, in order to avoid
  // building up an actual levels array. Since there are only three
  // levels (0, 1, 2) in an implementation that doesn't take
  // explicit embedding into account, we can build up the order on
  // the fly, without following the level-based algorithm.


  var order = [];

  if (outerType == 1
  /* L */
  ) {
      for (var _i6 = 0; _i6 < len;) {
        var start = _i6,
            rtl = types[_i6++] != 1
        /* L */
        ;

        while (_i6 < len && rtl == (types[_i6] != 1
        /* L */
        )) {
          _i6++;
        }

        if (rtl) {
          for (var _j2 = _i6; _j2 > start;) {
            var _end3 = _j2,
                l = types[--_j2] != 2
            /* R */
            ;

            while (_j2 > start && l == (types[_j2 - 1] != 2
            /* R */
            )) {
              _j2--;
            }

            order.push(new BidiSpan(_j2, _end3, l ? 2 : 1));
          }
        } else {
          order.push(new BidiSpan(start, _i6, 0));
        }
      }
    } else {
    for (var _i7 = 0; _i7 < len;) {
      var _start3 = _i7,
          _rtl = types[_i7++] == 2
      /* R */
      ;

      while (_i7 < len && _rtl == (types[_i7] == 2
      /* R */
      )) {
        _i7++;
      }

      order.push(new BidiSpan(_start3, _i7, _rtl ? 1 : 2));
    }
  }

  return order;
}

function trivialOrder(length) {
  return [new BidiSpan(0, length, 0)];
}

var movedOver = "";

function moveVisually(line, order, dir, start, forward) {
  var _a;

  var startIndex = start.head - line.from,
      spanI = -1;

  if (startIndex == 0) {
    if (!forward || !line.length) return null;

    if (order[0].level != dir) {
      startIndex = order[0].side(false, dir);
      spanI = 0;
    }
  } else if (startIndex == line.length) {
    if (forward) return null;
    var last = order[order.length - 1];

    if (last.level != dir) {
      startIndex = last.side(true, dir);
      spanI = order.length - 1;
    }
  }

  if (spanI < 0) spanI = BidiSpan.find(order, startIndex, (_a = start.bidiLevel) !== null && _a !== void 0 ? _a : -1, start.assoc);
  var span = order[spanI]; // End of span. (But not end of line--that was checked for above.)

  if (startIndex == span.side(forward, dir)) {
    span = order[spanI += forward ? 1 : -1];
    startIndex = span.side(!forward, dir);
  }

  var indexForward = forward == (span.dir == dir);
  var nextIndex = (0, _text.findClusterBreak)(line.text, startIndex, indexForward);
  movedOver = line.text.slice(Math.min(startIndex, nextIndex), Math.max(startIndex, nextIndex));
  if (nextIndex != span.side(forward, dir)) return _state.EditorSelection.cursor(nextIndex + line.from, indexForward ? -1 : 1, span.level);
  var nextSpan = spanI == (forward ? order.length - 1 : 0) ? null : order[spanI + (forward ? 1 : -1)];
  if (!nextSpan && span.level != dir) return _state.EditorSelection.cursor(forward ? line.to : line.from, forward ? -1 : 1, dir);
  if (nextSpan && nextSpan.level < span.level) return _state.EditorSelection.cursor(nextSpan.side(!forward, dir) + line.from, 0, nextSpan.level);
  return _state.EditorSelection.cursor(nextIndex + line.from, 0, span.level);
}

function groupAt(state, pos) {
  var bias = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  var categorize = state.charCategorizer(pos);
  var line = state.doc.lineAt(pos),
      linePos = pos - line.from;
  if (line.length == 0) return _state.EditorSelection.cursor(pos);
  if (linePos == 0) bias = 1;else if (linePos == line.length) bias = -1;
  var from = linePos,
      to = linePos;
  if (bias < 0) from = (0, _text.findClusterBreak)(line.text, linePos, false);else to = (0, _text.findClusterBreak)(line.text, linePos);
  var cat = categorize(line.text.slice(from, to));

  while (from > 0) {
    var prev = (0, _text.findClusterBreak)(line.text, from, false);
    if (categorize(line.text.slice(prev, from)) != cat) break;
    from = prev;
  }

  while (to < line.length) {
    var next = (0, _text.findClusterBreak)(line.text, to);
    if (categorize(line.text.slice(to, next)) != cat) break;
    to = next;
  }

  return _state.EditorSelection.range(from + line.from, to + line.from);
} // Search the DOM for the {node, offset} position closest to the given
// coordinates. Very inefficient and crude, but can usually be avoided
// by calling caret(Position|Range)FromPoint instead.
// FIXME holding arrow-up/down at the end of the viewport is a rather
// common use case that will repeatedly trigger this code. Maybe
// introduce some element of binary search after all?


function getdx(x, rect) {
  return rect.left > x ? rect.left - x : Math.max(0, x - rect.right);
}

function getdy(y, rect) {
  return rect.top > y ? rect.top - y : Math.max(0, y - rect.bottom);
}

function yOverlap(a, b) {
  return a.top < b.bottom - 1 && a.bottom > b.top + 1;
}

function upTop(rect, top) {
  return top < rect.top ? {
    top: top,
    left: rect.left,
    right: rect.right,
    bottom: rect.bottom
  } : rect;
}

function upBot(rect, bottom) {
  return bottom > rect.bottom ? {
    top: rect.top,
    left: rect.left,
    right: rect.right,
    bottom: bottom
  } : rect;
}

function domPosAtCoords(parent, x, y) {
  var closest, closestRect, closestX, closestY;
  var above, below, aboveRect, belowRect;

  for (var child = parent.firstChild; child; child = child.nextSibling) {
    var rects = clientRectsFor(child);

    for (var i = 0; i < rects.length; i++) {
      var rect = rects[i];
      if (closestRect && yOverlap(closestRect, rect)) rect = upTop(upBot(rect, closestRect.bottom), closestRect.top);
      var dx = getdx(x, rect),
          dy = getdy(y, rect);
      if (dx == 0 && dy == 0) return child.nodeType == 3 ? domPosInText(child, x, y) : domPosAtCoords(child, x, y);

      if (!closest || closestY > dy || closestY == dy && closestX > dx) {
        closest = child;
        closestRect = rect;
        closestX = dx;
        closestY = dy;
      }

      if (dx == 0) {
        if (y > rect.bottom && (!aboveRect || aboveRect.bottom < rect.bottom)) {
          above = child;
          aboveRect = rect;
        } else if (y < rect.top && (!belowRect || belowRect.top > rect.top)) {
          below = child;
          belowRect = rect;
        }
      } else if (aboveRect && yOverlap(aboveRect, rect)) {
        aboveRect = upBot(aboveRect, rect.bottom);
      } else if (belowRect && yOverlap(belowRect, rect)) {
        belowRect = upTop(belowRect, rect.top);
      }
    }
  }

  if (aboveRect && aboveRect.bottom >= y) {
    closest = above;
    closestRect = aboveRect;
  } else if (belowRect && belowRect.top <= y) {
    closest = below;
    closestRect = belowRect;
  }

  if (!closest) return {
    node: parent,
    offset: 0
  };
  var clipX = Math.max(closestRect.left, Math.min(closestRect.right, x));
  if (closest.nodeType == 3) return domPosInText(closest, clipX, y);
  if (!closestX && closest.contentEditable == "true") return domPosAtCoords(closest, clipX, y);
  var offset = Array.prototype.indexOf.call(parent.childNodes, closest) + (x >= (closestRect.left + closestRect.right) / 2 ? 1 : 0);
  return {
    node: parent,
    offset: offset
  };
}

function domPosInText(node, x, y) {
  var len = node.nodeValue.length,
      range = tempRange();

  for (var i = 0; i < len; i++) {
    range.setEnd(node, i + 1);
    range.setStart(node, i);
    var rects = range.getClientRects();

    for (var j = 0; j < rects.length; j++) {
      var rect = rects[j];
      if (rect.top == rect.bottom) continue;

      if (rect.left - 1 <= x && rect.right + 1 >= x && rect.top - 1 <= y && rect.bottom + 1 >= y) {
        var right = x >= (rect.left + rect.right) / 2,
            after = right;

        if (browser.chrome || browser.gecko) {
          // Check for RTL on browsers that support getting client
          // rects for empty ranges.
          range.setEnd(node, i);
          var rectBefore = range.getBoundingClientRect();
          if (rectBefore.left == rect.right) after = !right;
        }

        return {
          node: node,
          offset: i + (after ? 1 : 0)
        };
      }
    }
  }

  return {
    node: node,
    offset: 0
  };
}

function _posAtCoords(view, _ref6) {
  var x = _ref6.x,
      y = _ref6.y;
  var bias = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : -1;
  var content = view.contentDOM.getBoundingClientRect(),
      block;
  var halfLine = view.defaultLineHeight / 2;

  for (var bounced = false;;) {
    block = view.blockAtHeight(y, content.top);

    if (block.top > y || block.bottom < y) {
      bias = block.top > y ? -1 : 1;
      y = Math.min(block.bottom - halfLine, Math.max(block.top + halfLine, y));
      if (bounced) return -1;else bounced = true;
    }

    if (block.type == BlockType.Text) break;
    y = bias > 0 ? block.bottom + halfLine : block.top - halfLine;
  }

  var lineStart = block.from; // If this is outside of the rendered viewport, we can't determine a position

  if (lineStart < view.viewport.from) return view.viewport.from == 0 ? 0 : null;
  if (lineStart > view.viewport.to) return view.viewport.to == view.state.doc.length ? view.state.doc.length : null; // Clip x to the viewport sides

  x = Math.max(content.left + 1, Math.min(content.right - 1, x));
  var root = view.root,
      element = root.elementFromPoint(x, y); // There's visible editor content under the point, so we can try
  // using caret(Position|Range)FromPoint as a shortcut

  var node,
      offset = -1;

  if (element && view.contentDOM.contains(element) && !(view.docView.nearest(element) instanceof WidgetView)) {
    if (root.caretPositionFromPoint) {
      var pos = root.caretPositionFromPoint(x, y);

      if (pos) {
        node = pos.offsetNode;
        offset = pos.offset;
      }
    } else if (root.caretRangeFromPoint) {
      var range = root.caretRangeFromPoint(x, y);

      if (range) {
        node = range.startContainer;
        offset = range.startOffset;
      }
    }
  } // No luck, do our own (potentially expensive) search


  if (!node || !view.docView.dom.contains(node)) {
    var line = LineView.find(view.docView, lineStart);

    var _domPosAtCoords = domPosAtCoords(line.dom, x, y);

    node = _domPosAtCoords.node;
    offset = _domPosAtCoords.offset;
  }

  return view.docView.posFromDOM(node, offset);
}

function _moveToLineBoundary(view, start, forward, includeWrap) {
  var line = view.state.doc.lineAt(start.head);
  var coords = !includeWrap || !view.lineWrapping ? null : view.coordsAtPos(start.assoc < 0 && start.head > line.from ? start.head - 1 : start.head);

  if (coords) {
    var editorRect = view.dom.getBoundingClientRect();
    var pos = view.posAtCoords({
      x: forward == (view.textDirection == Direction.LTR) ? editorRect.right - 1 : editorRect.left + 1,
      y: (coords.top + coords.bottom) / 2
    });
    if (pos != null) return _state.EditorSelection.cursor(pos, forward ? -1 : 1);
  }

  var lineView = LineView.find(view.docView, start.head);
  var end = lineView ? forward ? lineView.posAtEnd : lineView.posAtStart : forward ? line.to : line.from;
  return _state.EditorSelection.cursor(end, forward ? -1 : 1);
}

function _moveByChar(view, start, forward, by) {
  var line = view.state.doc.lineAt(start.head),
      spans = view.bidiSpans(line);

  for (var cur = start, check = null;;) {
    var next = moveVisually(line, spans, view.textDirection, cur, forward),
        _char = movedOver;

    if (!next) {
      if (line.number == (forward ? view.state.doc.lines : 1)) return cur;
      _char = "\n";
      line = view.state.doc.line(line.number + (forward ? 1 : -1));
      spans = view.bidiSpans(line);
      next = _state.EditorSelection.cursor(forward ? line.from : line.to);
    }

    if (!check) {
      if (!by) return next;
      check = by(_char);
    } else if (!check(_char)) {
      return cur;
    }

    cur = next;
  }
}

function byGroup(view, pos, start) {
  var categorize = view.state.charCategorizer(pos);
  var cat = categorize(start);
  return function (next) {
    var nextCat = categorize(next);
    if (cat == _state.CharCategory.Space) cat = nextCat;
    return cat == nextCat;
  };
}

function _moveVertically(view, start, forward, distance) {
  var _a;

  var startPos = start.head,
      dir = forward ? 1 : -1;
  if (startPos == (forward ? view.state.doc.length : 0)) return _state.EditorSelection.cursor(startPos);
  var startCoords = view.coordsAtPos(startPos);

  if (startCoords) {
    var rect = view.dom.getBoundingClientRect();

    var _goal = (_a = start.goalColumn) !== null && _a !== void 0 ? _a : startCoords.left - rect.left;

    var resolvedGoal = rect.left + _goal;
    var dist = distance !== null && distance !== void 0 ? distance : view.defaultLineHeight >> 1;

    for (var startY = dir < 0 ? startCoords.top : startCoords.bottom, extra = 0; extra < 50; extra += 10) {
      var pos = _posAtCoords(view, {
        x: resolvedGoal,
        y: startY + (dist + extra) * dir
      }, dir);

      if (pos == null) break;
      if (pos != startPos) return _state.EditorSelection.cursor(pos, undefined, undefined, _goal);
    }
  } // Outside of the drawn viewport, use a crude column-based approach


  var doc = view.state.doc,
      line = doc.lineAt(startPos),
      tabSize = view.state.tabSize;
  var goal = start.goalColumn,
      goalCol = 0;

  if (goal == null) {
    for (var iter = doc.iterRange(line.from, startPos); !iter.next().done;) {
      goalCol = (0, _text.countColumn)(iter.value, goalCol, tabSize);
    }

    goal = goalCol * view.defaultCharacterWidth;
  } else {
    goalCol = Math.round(goal / view.defaultCharacterWidth);
  }

  if (dir < 0 && line.from == 0) return _state.EditorSelection.cursor(0);else if (dir > 0 && line.to == doc.length) return _state.EditorSelection.cursor(line.to);
  var otherLine = doc.line(line.number + dir);
  var result = otherLine.from;
  var seen = 0;

  for (var _iter = doc.iterRange(otherLine.from, otherLine.to); seen >= goalCol && !_iter.next().done;) {
    var _findColumn = (0, _text.findColumn)(_iter.value, seen, goalCol, tabSize),
        offset = _findColumn.offset,
        leftOver = _findColumn.leftOver;

    seen = goalCol - leftOver;
    result += offset;
  }

  return _state.EditorSelection.cursor(result, undefined, undefined, goal);
} // This will also be where dragging info and such goes


var InputState = /*#__PURE__*/function () {
  function InputState(view) {
    var _this16 = this;

    _classCallCheck(this, InputState);

    this.lastKeyCode = 0;
    this.lastKeyTime = 0;
    this.lastSelectionOrigin = null;
    this.lastSelectionTime = 0;
    this.lastEscPress = 0;
    this.scrollHandlers = [];
    this.registeredEvents = [];
    this.customHandlers = []; // -1 means not in a composition. Otherwise, this counts the number
    // of changes made during the composition. The count is used to
    // avoid treating the start state of the composition, before any
    // changes have been made, as part of the composition.

    this.composing = -1;
    this.compositionEndedAt = 0;
    this.mouseSelection = null;

    var _loop = function _loop(type) {
      var handler = handlers[type];
      view.contentDOM.addEventListener(type, function (event) {
        if (!eventBelongsToEditor(view, event) || _this16.ignoreDuringComposition(event) || type == "keydown" && _this16.screenKeyEvent(view, event)) return;
        if (_this16.mustFlushObserver(event)) view.observer.forceFlush();
        if (_this16.runCustomHandlers(type, view, event)) event.preventDefault();else handler(view, event);
      });

      _this16.registeredEvents.push(type);
    };

    for (var type in handlers) {
      _loop(type);
    } // Must always run, even if a custom handler handled the event


    view.contentDOM.addEventListener("keydown", function (event) {
      view.inputState.lastKeyCode = event.keyCode;
      view.inputState.lastKeyTime = Date.now();
    });
    this.notifiedFocused = view.hasFocus;
    this.ensureHandlers(view);
  }

  _createClass(InputState, [{
    key: "setSelectionOrigin",
    value: function setSelectionOrigin(origin) {
      this.lastSelectionOrigin = origin;
      this.lastSelectionTime = Date.now();
    }
  }, {
    key: "ensureHandlers",
    value: function ensureHandlers(view) {
      var _this17 = this;

      var handlers = this.customHandlers = view.pluginField(domEventHandlers);

      var _iterator13 = _createForOfIteratorHelper(handlers),
          _step13;

      try {
        for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
          var set = _step13.value;

          var _loop2 = function _loop2(type) {
            if (_this17.registeredEvents.indexOf(type) < 0 && type != "scroll") {
              _this17.registeredEvents.push(type);

              view.contentDOM.addEventListener(type, function (event) {
                if (!eventBelongsToEditor(view, event)) return;
                if (_this17.runCustomHandlers(type, view, event)) event.preventDefault();
              });
            }
          };

          for (var type in set.handlers) {
            _loop2(type);
          }
        }
      } catch (err) {
        _iterator13.e(err);
      } finally {
        _iterator13.f();
      }
    }
  }, {
    key: "runCustomHandlers",
    value: function runCustomHandlers(type, view, event) {
      var _iterator14 = _createForOfIteratorHelper(this.customHandlers),
          _step14;

      try {
        for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
          var set = _step14.value;
          var handler = set.handlers[type],
              handled = false;

          if (handler) {
            try {
              handled = handler.call(set.plugin, event, view);
            } catch (e) {
              logException(view.state, e);
            }

            if (handled || event.defaultPrevented) {
              // Chrome for Android often applies a bunch of nonsensical
              // DOM changes after an enter press, even when
              // preventDefault-ed. This tries to ignore those.
              if (browser.android && type == "keydown" && event.keyCode == 13) view.observer.flushSoon();
              return true;
            }
          }
        }
      } catch (err) {
        _iterator14.e(err);
      } finally {
        _iterator14.f();
      }

      return false;
    }
  }, {
    key: "runScrollHandlers",
    value: function runScrollHandlers(view, event) {
      var _iterator15 = _createForOfIteratorHelper(this.customHandlers),
          _step15;

      try {
        for (_iterator15.s(); !(_step15 = _iterator15.n()).done;) {
          var set = _step15.value;
          var handler = set.handlers.scroll;

          if (handler) {
            try {
              handler.call(set.plugin, event, view);
            } catch (e) {
              logException(view.state, e);
            }
          }
        }
      } catch (err) {
        _iterator15.e(err);
      } finally {
        _iterator15.f();
      }
    }
  }, {
    key: "ignoreDuringComposition",
    value: function ignoreDuringComposition(event) {
      if (!/^key/.test(event.type)) return false;
      if (this.composing > 0) return true; // See https://www.stum.de/2016/06/24/handling-ime-events-in-javascript/.
      // On some input method editors (IMEs), the Enter key is used to
      // confirm character selection. On Safari, when Enter is pressed,
      // compositionend and keydown events are sometimes emitted in the
      // wrong order. The key event should still be ignored, even when
      // it happens after the compositionend event.

      if (browser.safari && event.timeStamp - this.compositionEndedAt < 500) {
        this.compositionEndedAt = 0;
        return true;
      }

      return false;
    }
  }, {
    key: "screenKeyEvent",
    value: function screenKeyEvent(view, event) {
      var protectedTab = event.keyCode == 9 && Date.now() < this.lastEscPress + 2000;
      if (event.keyCode == 27) this.lastEscPress = Date.now();else if (modifierCodes.indexOf(event.keyCode) < 0) this.lastEscPress = 0;
      return protectedTab;
    }
  }, {
    key: "mustFlushObserver",
    value: function mustFlushObserver(event) {
      return event.type == "keydown" && event.keyCode != 229 || event.type == "compositionend";
    }
  }, {
    key: "startMouseSelection",
    value: function startMouseSelection(view, event, style) {
      if (this.mouseSelection) this.mouseSelection.destroy();
      this.mouseSelection = new MouseSelection(this, view, event, style);
    }
  }, {
    key: "update",
    value: function update(_update2) {
      if (this.mouseSelection) this.mouseSelection.update(_update2);
      this.lastKeyCode = this.lastSelectionTime = 0;
    }
  }, {
    key: "destroy",
    value: function destroy() {
      if (this.mouseSelection) this.mouseSelection.destroy();
    }
  }]);

  return InputState;
}(); // Key codes for modifier keys


var modifierCodes = [16, 17, 18, 20, 91, 92, 224, 225];

var MouseSelection = /*#__PURE__*/function () {
  function MouseSelection(inputState, view, startEvent, style) {
    _classCallCheck(this, MouseSelection);

    this.inputState = inputState;
    this.view = view;
    this.startEvent = startEvent;
    this.style = style;
    var doc = view.contentDOM.ownerDocument;
    doc.addEventListener("mousemove", this.move = this.move.bind(this));
    doc.addEventListener("mouseup", this.up = this.up.bind(this));
    this.extend = startEvent.shiftKey;
    this.multiple = view.state.facet(_state.EditorState.allowMultipleSelections) && addsSelectionRange(view, startEvent);
    this.dragMove = dragMovesSelection(view, startEvent);
    this.dragging = isInPrimarySelection(view, startEvent) ? null : false; // When clicking outside of the selection, immediately apply the
    // effect of starting the selection

    if (this.dragging === false) {
      startEvent.preventDefault();
      this.select(startEvent);
    }
  }

  _createClass(MouseSelection, [{
    key: "move",
    value: function move(event) {
      if (event.buttons == 0) return this.destroy();
      if (this.dragging !== false) return;
      this.select(event);
    }
  }, {
    key: "up",
    value: function up(event) {
      if (this.dragging == null) this.select(this.startEvent);
      if (!this.dragging) event.preventDefault();
      this.destroy();
    }
  }, {
    key: "destroy",
    value: function destroy() {
      var doc = this.view.contentDOM.ownerDocument;
      doc.removeEventListener("mousemove", this.move);
      doc.removeEventListener("mouseup", this.up);
      this.inputState.mouseSelection = null;
    }
  }, {
    key: "select",
    value: function select(event) {
      var selection = this.style.get(event, this.extend, this.multiple);
      if (!selection.eq(this.view.state.selection) || selection.main.assoc != this.view.state.selection.main.assoc) this.view.dispatch({
        selection: selection,
        annotations: _state.Transaction.userEvent.of("pointerselection"),
        scrollIntoView: true
      });
    }
  }, {
    key: "update",
    value: function update(_update3) {
      if (_update3.docChanged && this.dragging) this.dragging = this.dragging.map(_update3.changes);
      this.style.update(_update3);
    }
  }]);

  return MouseSelection;
}();

function addsSelectionRange(view, event) {
  var facet = view.state.facet(clickAddsSelectionRange);
  return facet.length ? facet[0](event) : browser.mac ? event.metaKey : event.ctrlKey;
}

function dragMovesSelection(view, event) {
  var facet = view.state.facet(dragMovesSelection$1);
  return facet.length ? facet[0](event) : browser.mac ? !event.altKey : !event.ctrlKey;
}

function isInPrimarySelection(view, event) {
  var main = view.state.selection.main;
  if (main.empty) return false; // On boundary clicks, check whether the coordinates are inside the
  // selection's client rectangles

  var sel = getSelection(view.root);
  if (sel.rangeCount == 0) return true;
  var rects = sel.getRangeAt(0).getClientRects();

  for (var i = 0; i < rects.length; i++) {
    var rect = rects[i];
    if (rect.left <= event.clientX && rect.right >= event.clientX && rect.top <= event.clientY && rect.bottom >= event.clientY) return true;
  }

  return false;
}

function eventBelongsToEditor(view, event) {
  if (!event.bubbles) return true;
  if (event.defaultPrevented) return false;

  for (var node = event.target, cView; node != view.contentDOM; node = node.parentNode) {
    if (!node || node.nodeType == 11 || (cView = ContentView.get(node)) && cView.ignoreEvent(event)) return false;
  }

  return true;
}

var handlers = Object.create(null); // This is very crude, but unfortunately both these browsers _pretend_
// that they have a clipboard API???all the objects and methods are
// there, they just don't work, and they are hard to test.

var brokenClipboardAPI = browser.ie && browser.ie_version < 15 || browser.ios && browser.webkit_version < 604;

function capturePaste(view) {
  var parent = view.dom.parentNode;
  if (!parent) return;
  var target = parent.appendChild(document.createElement("textarea"));
  target.style.cssText = "position: fixed; left: -10000px; top: 10px";
  target.focus();
  setTimeout(function () {
    view.focus();
    target.remove();
    doPaste(view, target.value);
  }, 50);
}

function doPaste(view, input) {
  var state = view.state,
      changes,
      i = 1,
      text = state.toText(input);
  var byLine = text.lines == state.selection.ranges.length;
  var linewise = lastLinewiseCopy && state.selection.ranges.every(function (r) {
    return r.empty;
  }) && lastLinewiseCopy == text.toString();

  if (linewise) {
    var lastLine = -1;
    changes = state.changeByRange(function (range) {
      var line = state.doc.lineAt(range.from);
      if (line.from == lastLine) return {
        range: range
      };
      lastLine = line.from;
      var insert = state.toText((byLine ? text.line(i++).text : input) + state.lineBreak);
      return {
        changes: {
          from: line.from,
          insert: insert
        },
        range: _state.EditorSelection.cursor(range.from + insert.length)
      };
    });
  } else if (byLine) {
    changes = state.changeByRange(function (range) {
      var line = text.line(i++);
      return {
        changes: {
          from: range.from,
          to: range.to,
          insert: line.text
        },
        range: _state.EditorSelection.cursor(range.from + line.length)
      };
    });
  } else {
    changes = state.replaceSelection(text);
  }

  view.dispatch(changes, {
    annotations: _state.Transaction.userEvent.of("paste"),
    scrollIntoView: true
  });
}

function mustCapture(event) {
  var mods = (event.ctrlKey ? 1
  /* Ctrl */
  : 0) | (event.metaKey ? 8
  /* Meta */
  : 0) | (event.altKey ? 2
  /* Alt */
  : 0) | (event.shiftKey ? 4
  /* Shift */
  : 0);
  var code = event.keyCode,
      macCtrl = browser.mac && mods == 1
  /* Ctrl */
  ;
  return code == 8 || macCtrl && code == 72 || // Backspace, Ctrl-h on Mac
  code == 46 || macCtrl && code == 68 || // Delete, Ctrl-d on Mac
  code == 27 || // Esc
  mods == (browser.mac ? 8
  /* Meta */
  : 1
  /* Ctrl */
  ) && ( // Ctrl/Cmd-[biyz]
  code == 66 || code == 73 || code == 89 || code == 90);
}

handlers.keydown = function (view, event) {
  if (mustCapture(event)) event.preventDefault();
  view.inputState.setSelectionOrigin("keyboardselection");
};

var lastTouch = 0;

function mouseLikeTouchEvent(e) {
  return e.touches.length == 1 && e.touches[0].radiusX <= 1 && e.touches[0].radiusY <= 1;
}

handlers.touchstart = function (view, e) {
  if (!mouseLikeTouchEvent(e)) lastTouch = Date.now();
  view.inputState.setSelectionOrigin("pointerselection");
};

handlers.touchmove = function (view) {
  view.inputState.setSelectionOrigin("pointerselection");
};

handlers.mousedown = function (view, event) {
  view.observer.flush();
  if (lastTouch > Date.now() - 2000) return; // Ignore touch interaction

  var style = null;

  var _iterator16 = _createForOfIteratorHelper(view.state.facet(mouseSelectionStyle)),
      _step16;

  try {
    for (_iterator16.s(); !(_step16 = _iterator16.n()).done;) {
      var makeStyle = _step16.value;
      style = makeStyle(view, event);
      if (style) break;
    }
  } catch (err) {
    _iterator16.e(err);
  } finally {
    _iterator16.f();
  }

  if (!style && event.button == 0) style = basicMouseSelection(view, event);

  if (style) {
    if (view.root.activeElement != view.contentDOM) view.observer.ignore(function () {
      return focusPreventScroll(view.contentDOM);
    });
    view.inputState.startMouseSelection(view, event, style);
  }
};

function rangeForClick(view, pos, bias, type) {
  if (type == 1) {
    // Single click
    return _state.EditorSelection.cursor(pos, bias);
  } else if (type == 2) {
    // Double click
    return groupAt(view.state, pos, bias);
  } else {
    // Triple click
    var line = LineView.find(view.docView, pos);
    if (line) return _state.EditorSelection.range(line.posAtStart, line.posAtEnd);

    var _view$state$doc$lineA = view.state.doc.lineAt(pos),
        from = _view$state$doc$lineA.from,
        to = _view$state$doc$lineA.to;

    return _state.EditorSelection.range(from, to);
  }
}

var insideY = function insideY(y, rect) {
  return y >= rect.top && y <= rect.bottom;
};

var inside = function inside(x, y, rect) {
  return insideY(y, rect) && x >= rect.left && x <= rect.right;
}; // Try to determine, for the given coordinates, associated with the
// given position, whether they are related to the element before or
// the element after the position.


function findPositionSide(view, pos, x, y) {
  var line = LineView.find(view.docView, pos);
  if (!line) return 1;
  var off = pos - line.posAtStart; // Line boundaries point into the line

  if (off == 0) return 1;
  if (off == line.length) return -1; // Positions on top of an element point at that element

  var before = line.coordsAt(off, -1);
  if (before && inside(x, y, before)) return -1;
  var after = line.coordsAt(off, 1);
  if (after && inside(x, y, after)) return 1; // This is probably a line wrap point. Pick before if the point is
  // beside it.

  return before && insideY(y, before) ? -1 : 1;
}

function queryPos(view, event) {
  var pos = view.posAtCoords({
    x: event.clientX,
    y: event.clientY
  });
  if (pos == null) return null;
  return {
    pos: pos,
    bias: findPositionSide(view, pos, event.clientX, event.clientY)
  };
}

var BadMouseDetail = browser.ie && browser.ie_version <= 11;
var lastMouseDown = null,
    lastMouseDownCount = 0;

function getClickType(event) {
  if (!BadMouseDetail) return event.detail;
  var last = lastMouseDown;
  lastMouseDown = event;
  return lastMouseDownCount = !last || last.timeStamp > Date.now() - 400 && Math.abs(last.clientX - event.clientX) < 2 && Math.abs(last.clientY - event.clientY) < 2 ? (lastMouseDownCount + 1) % 3 : 1;
}

function basicMouseSelection(view, event) {
  var start = queryPos(view, event),
      type = getClickType(event);
  var startSel = view.state.selection;
  var last = start,
      lastEvent = event;
  return {
    update: function update(_update4) {
      if (_update4.changes) {
        if (start) start.pos = _update4.changes.mapPos(start.pos);
        startSel = startSel.map(_update4.changes);
      }
    },
    get: function get(event, extend, multiple) {
      var cur;
      if (event.clientX == lastEvent.clientX && event.clientY == lastEvent.clientY) cur = last;else {
        cur = last = queryPos(view, event);
        lastEvent = event;
      }
      if (!cur || !start) return startSel;
      var range = rangeForClick(view, cur.pos, cur.bias, type);

      if (start.pos != cur.pos && !extend) {
        var startRange = rangeForClick(view, start.pos, start.bias, type);
        var from = Math.min(startRange.from, range.from),
            to = Math.max(startRange.to, range.to);
        range = from < range.from ? _state.EditorSelection.range(from, to) : _state.EditorSelection.range(to, from);
      }

      if (extend) return startSel.replaceRange(startSel.main.extend(range.from, range.to));else if (multiple) return startSel.addRange(range);else return _state.EditorSelection.create([range]);
    }
  };
}

handlers.dragstart = function (view, event) {
  var main = view.state.selection.main;
  var mouseSelection = view.inputState.mouseSelection;
  if (mouseSelection) mouseSelection.dragging = main;

  if (event.dataTransfer) {
    event.dataTransfer.setData("Text", view.state.sliceDoc(main.from, main.to));
    event.dataTransfer.effectAllowed = "copyMove";
  }
};

handlers.drop = function (view, event) {
  if (!event.dataTransfer) return;
  var dropPos = view.posAtCoords({
    x: event.clientX,
    y: event.clientY
  });
  var text = event.dataTransfer.getData("Text");
  if (dropPos == null || !text) return;
  event.preventDefault();
  var mouseSelection = view.inputState.mouseSelection;
  var del = mouseSelection && mouseSelection.dragging && mouseSelection.dragMove ? {
    from: mouseSelection.dragging.from,
    to: mouseSelection.dragging.to
  } : null;
  var ins = {
    from: dropPos,
    insert: text
  };
  var changes = view.state.changes(del ? [del, ins] : ins);
  view.focus();
  view.dispatch({
    changes: changes,
    selection: {
      anchor: changes.mapPos(dropPos, -1),
      head: changes.mapPos(dropPos, 1)
    },
    annotations: _state.Transaction.userEvent.of("drop")
  });
};

handlers.paste = function (view, event) {
  view.observer.flush();
  var data = brokenClipboardAPI ? null : event.clipboardData;
  var text = data && data.getData("text/plain");

  if (text) {
    doPaste(view, text);
    event.preventDefault();
  } else {
    capturePaste(view);
  }
};

function captureCopy(view, text) {
  // The extra wrapper is somehow necessary on IE/Edge to prevent the
  // content from being mangled when it is put onto the clipboard
  var parent = view.dom.parentNode;
  if (!parent) return;
  var target = parent.appendChild(document.createElement("textarea"));
  target.style.cssText = "position: fixed; left: -10000px; top: 10px";
  target.value = text;
  target.focus();
  target.selectionEnd = text.length;
  target.selectionStart = 0;
  setTimeout(function () {
    target.remove();
    view.focus();
  }, 50);
}

function copiedRange(state) {
  var content = [],
      ranges = [],
      linewise = false;

  var _iterator17 = _createForOfIteratorHelper(state.selection.ranges),
      _step17;

  try {
    for (_iterator17.s(); !(_step17 = _iterator17.n()).done;) {
      var range = _step17.value;

      if (!range.empty) {
        content.push(state.sliceDoc(range.from, range.to));
        ranges.push(range);
      }
    }
  } catch (err) {
    _iterator17.e(err);
  } finally {
    _iterator17.f();
  }

  if (!content.length) {
    // Nothing selected, do a line-wise copy
    var upto = -1;

    var _iterator18 = _createForOfIteratorHelper(state.selection.ranges),
        _step18;

    try {
      for (_iterator18.s(); !(_step18 = _iterator18.n()).done;) {
        var from = _step18.value.from;
        var line = state.doc.lineAt(from);

        if (line.number > upto) {
          content.push(line.text);
          ranges.push({
            from: line.from,
            to: Math.min(state.doc.length, line.to + 1)
          });
        }

        upto = line.number;
      }
    } catch (err) {
      _iterator18.e(err);
    } finally {
      _iterator18.f();
    }

    linewise = true;
  }

  return {
    text: content.join(state.lineBreak),
    ranges: ranges,
    linewise: linewise
  };
}

var lastLinewiseCopy = null;

handlers.copy = handlers.cut = function (view, event) {
  var _copiedRange = copiedRange(view.state),
      text = _copiedRange.text,
      ranges = _copiedRange.ranges,
      linewise = _copiedRange.linewise;

  if (!text) return;
  lastLinewiseCopy = linewise ? text : null;
  var data = brokenClipboardAPI ? null : event.clipboardData;

  if (data) {
    event.preventDefault();
    data.clearData();
    data.setData("text/plain", text);
  } else {
    captureCopy(view, text);
  }

  if (event.type == "cut") view.dispatch({
    changes: ranges,
    scrollIntoView: true,
    annotations: _state.Transaction.userEvent.of("cut")
  });
};

handlers.focus = handlers.blur = function (view) {
  setTimeout(function () {
    if (view.hasFocus != view.inputState.notifiedFocused) view.update([]);
  }, 10);
};

handlers.beforeprint = function (view) {
  view.viewState.printing = true;
  view.requestMeasure();
  setTimeout(function () {
    view.viewState.printing = false;
    view.requestMeasure();
  }, 2000);
};

function forceClearComposition(view) {
  if (view.docView.compositionDeco.size) view.update([]);
}

handlers.compositionstart = handlers.compositionupdate = function (view) {
  if (view.inputState.composing < 0) {
    if (view.docView.compositionDeco.size) {
      view.observer.flush();
      forceClearComposition(view);
    } // FIXME possibly set a timeout to clear it again on Android


    view.inputState.composing = 0;
  }
};

handlers.compositionend = function (view) {
  view.inputState.composing = -1;
  view.inputState.compositionEndedAt = Date.now();
  setTimeout(function () {
    if (view.inputState.composing < 0) forceClearComposition(view);
  }, 50);
};

var wrappingWhiteSpace = ["pre-wrap", "normal", "pre-line"];

var HeightOracle = /*#__PURE__*/function () {
  function HeightOracle() {
    _classCallCheck(this, HeightOracle);

    this.doc = _text.Text.empty;
    this.lineWrapping = false;
    this.direction = Direction.LTR;
    this.heightSamples = {};
    this.lineHeight = 14;
    this.charWidth = 7;
    this.lineLength = 30; // Used to track, during updateHeight, if any actual heights changed

    this.heightChanged = false;
  }

  _createClass(HeightOracle, [{
    key: "heightForGap",
    value: function heightForGap(from, to) {
      var lines = this.doc.lineAt(to).number - this.doc.lineAt(from).number + 1;
      if (this.lineWrapping) lines += Math.ceil((to - from - lines * this.lineLength * 0.5) / this.lineLength);
      return this.lineHeight * lines;
    }
  }, {
    key: "heightForLine",
    value: function heightForLine(length) {
      if (!this.lineWrapping) return this.lineHeight;
      var lines = 1 + Math.max(0, Math.ceil((length - this.lineLength) / (this.lineLength - 5)));
      return lines * this.lineHeight;
    }
  }, {
    key: "setDoc",
    value: function setDoc(doc) {
      this.doc = doc;
      return this;
    }
  }, {
    key: "mustRefresh",
    value: function mustRefresh(lineHeights, whiteSpace, direction) {
      var newHeight = false;

      for (var i = 0; i < lineHeights.length; i++) {
        var h = lineHeights[i];

        if (h < 0) {
          i++;
        } else if (!this.heightSamples[Math.floor(h * 10)]) {
          // Round to .1 pixels
          newHeight = true;
          this.heightSamples[Math.floor(h * 10)] = true;
        }
      }

      return newHeight || wrappingWhiteSpace.indexOf(whiteSpace) > -1 != this.lineWrapping || this.direction != direction;
    }
  }, {
    key: "refresh",
    value: function refresh(whiteSpace, direction, lineHeight, charWidth, lineLength, knownHeights) {
      var lineWrapping = wrappingWhiteSpace.indexOf(whiteSpace) > -1;
      var changed = Math.round(lineHeight) != Math.round(this.lineHeight) || this.lineWrapping != lineWrapping || this.direction != direction;
      this.lineWrapping = lineWrapping;
      this.direction = direction;
      this.lineHeight = lineHeight;
      this.charWidth = charWidth;
      this.lineLength = lineLength;

      if (changed) {
        this.heightSamples = {};

        for (var i = 0; i < knownHeights.length; i++) {
          var h = knownHeights[i];
          if (h < 0) i++;else this.heightSamples[Math.floor(h * 10)] = true;
        }
      }

      return changed;
    }
  }]);

  return HeightOracle;
}(); // This object is used by `updateHeight` to make DOM measurements
// arrive at the right nides. The `heights` array is a sequence of
// block heights, starting from position `from`.


var MeasuredHeights = /*#__PURE__*/function () {
  function MeasuredHeights(from, heights) {
    _classCallCheck(this, MeasuredHeights);

    this.from = from;
    this.heights = heights;
    this.index = 0;
  }

  _createClass(MeasuredHeights, [{
    key: "more",
    get: function get() {
      return this.index < this.heights.length;
    }
  }]);

  return MeasuredHeights;
}(); /// Record used to represent information about a block-level element
/// in the editor view.


var BlockInfo = /*#__PURE__*/function () {
  /// @internal
  function BlockInfo( /// The start of the element in the document.
  from, /// The length of the element.
  length, /// The top position of the element.
  top, /// Its height.
  height, /// The type of element this is. When querying lines, this may be
  /// an array of all the blocks that make up the line.
  type) {
    _classCallCheck(this, BlockInfo);

    this.from = from;
    this.length = length;
    this.top = top;
    this.height = height;
    this.type = type;
  } /// The end of the element as a document position.


  _createClass(BlockInfo, [{
    key: "to",
    get: function get() {
      return this.from + this.length;
    } /// The bottom position of the element.

  }, {
    key: "bottom",
    get: function get() {
      return this.top + this.height;
    } /// @internal

  }, {
    key: "join",
    value: function join(other) {
      var detail = (Array.isArray(this.type) ? this.type : [this]).concat(Array.isArray(other.type) ? other.type : [other]);
      return new BlockInfo(this.from, this.length + other.length, this.top, this.height + other.height, detail);
    }
  }]);

  return BlockInfo;
}();

exports.BlockInfo = BlockInfo;
var QueryType;

(function (QueryType) {
  QueryType[QueryType["ByPos"] = 0] = "ByPos";
  QueryType[QueryType["ByHeight"] = 1] = "ByHeight";
  QueryType[QueryType["ByPosNoHeight"] = 2] = "ByPosNoHeight";
})(QueryType || (QueryType = {}));

var Epsilon = 1e-4;

var HeightMap = /*#__PURE__*/function () {
  function HeightMap(length, // The number of characters covered
  height)
  /* Outdated */
  {
    var flags = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 2;

    _classCallCheck(this, HeightMap);

    this.length = length;
    this.height = height;
    this.flags = flags;
  }

  _createClass(HeightMap, [{
    key: "outdated",
    get: function get() {
      return (this.flags & 2
      /* Outdated */
      ) > 0;
    },
    set: function set(value) {
      this.flags = (value ? 2
      /* Outdated */
      : 0) | this.flags & ~2
      /* Outdated */
      ;
    }
  }, {
    key: "setHeight",
    value: function setHeight(oracle, height) {
      if (this.height != height) {
        if (Math.abs(this.height - height) > Epsilon) oracle.heightChanged = true;
        this.height = height;
      }
    } // Base case is to replace a leaf node, which simply builds a tree
    // from the new nodes and returns that (HeightMapBranch and
    // HeightMapGap override this to actually use from/to)

  }, {
    key: "replace",
    value: function replace(_from, _to, nodes) {
      return HeightMap.of(nodes);
    } // Again, these are base cases, and are overridden for branch and gap nodes.

  }, {
    key: "decomposeLeft",
    value: function decomposeLeft(_to, result) {
      result.push(this);
    }
  }, {
    key: "decomposeRight",
    value: function decomposeRight(_from, result) {
      result.push(this);
    }
  }, {
    key: "applyChanges",
    value: function applyChanges(decorations, oldDoc, oracle, changes) {
      var me = this;

      for (var i = changes.length - 1; i >= 0; i--) {
        var _changes$i = changes[i],
            fromA = _changes$i.fromA,
            toA = _changes$i.toA,
            fromB = _changes$i.fromB,
            toB = _changes$i.toB;
        var start = me.lineAt(fromA, QueryType.ByPosNoHeight, oldDoc, 0, 0);
        var end = start.to >= toA ? start : me.lineAt(toA, QueryType.ByPosNoHeight, oldDoc, 0, 0);
        toB += end.to - toA;
        toA = end.to;

        while (i > 0 && start.from <= changes[i - 1].toA) {
          fromA = changes[i - 1].fromA;
          fromB = changes[i - 1].fromB;
          i--;
          if (fromA < start.from) start = me.lineAt(fromA, QueryType.ByPosNoHeight, oldDoc, 0, 0);
        }

        fromB += start.from - fromA;
        fromA = start.from;
        var nodes = NodeBuilder.build(oracle, decorations, fromB, toB);
        me = me.replace(fromA, toA, nodes);
      }

      return me.updateHeight(oracle, 0);
    }
  }], [{
    key: "empty",
    value: function empty() {
      return new HeightMapText(0, 0);
    } // nodes uses null values to indicate the position of line breaks.
    // There are never line breaks at the start or end of the array, or
    // two line breaks next to each other, and the array isn't allowed
    // to be empty (same restrictions as return value from the builder).

  }, {
    key: "of",
    value: function of(nodes) {
      if (nodes.length == 1) return nodes[0];
      var i = 0,
          j = nodes.length,
          before = 0,
          after = 0;

      for (;;) {
        if (i == j) {
          if (before > after * 2) {
            var split = nodes[i - 1];
            if (split["break"]) nodes.splice(--i, 1, split.left, null, split.right);else nodes.splice(--i, 1, split.left, split.right);
            j += 1 + split["break"];
            before -= split.size;
          } else if (after > before * 2) {
            var _split = nodes[j];
            if (_split["break"]) nodes.splice(j, 1, _split.left, null, _split.right);else nodes.splice(j, 1, _split.left, _split.right);
            j += 2 + _split["break"];
            after -= _split.size;
          } else {
            break;
          }
        } else if (before < after) {
          var next = nodes[i++];
          if (next) before += next.size;
        } else {
          var _next2 = nodes[--j];
          if (_next2) after += _next2.size;
        }
      }

      var brk = 0;

      if (nodes[i - 1] == null) {
        brk = 1;
        i--;
      } else if (nodes[i] == null) {
        brk = 1;
        j++;
      }

      return new HeightMapBranch(HeightMap.of(nodes.slice(0, i)), brk, HeightMap.of(nodes.slice(j)));
    }
  }]);

  return HeightMap;
}();

HeightMap.prototype.size = 1;

var HeightMapBlock = /*#__PURE__*/function (_HeightMap) {
  _inherits(HeightMapBlock, _HeightMap);

  var _super16 = _createSuper(HeightMapBlock);

  function HeightMapBlock(length, height, type) {
    var _this18;

    _classCallCheck(this, HeightMapBlock);

    _this18 = _super16.call(this, length, height);
    _this18.type = type;
    return _this18;
  }

  _createClass(HeightMapBlock, [{
    key: "blockAt",
    value: function blockAt(_height, _doc, top, offset) {
      return new BlockInfo(offset, this.length, top, this.height, this.type);
    }
  }, {
    key: "lineAt",
    value: function lineAt(_value, _type, doc, top, offset) {
      return this.blockAt(0, doc, top, offset);
    }
  }, {
    key: "forEachLine",
    value: function forEachLine(_from, _to, doc, top, offset, f) {
      f(this.blockAt(0, doc, top, offset));
    }
  }, {
    key: "updateHeight",
    value: function updateHeight(oracle) {
      var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      var _force = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      var measured = arguments.length > 3 ? arguments[3] : undefined;
      if (measured && measured.from <= offset && measured.more) this.setHeight(oracle, measured.heights[measured.index++]);
      this.outdated = false;
      return this;
    }
  }, {
    key: "toString",
    value: function toString() {
      return "block(".concat(this.length, ")");
    }
  }]);

  return HeightMapBlock;
}(HeightMap);

var HeightMapText = /*#__PURE__*/function (_HeightMapBlock) {
  _inherits(HeightMapText, _HeightMapBlock);

  var _super17 = _createSuper(HeightMapText);

  function HeightMapText(length, height) {
    var _this19;

    _classCallCheck(this, HeightMapText);

    _this19 = _super17.call(this, length, height, BlockType.Text);
    _this19.collapsed = 0; // Amount of collapsed content in the line

    _this19.widgetHeight = 0; // Maximum inline widget height

    return _this19;
  }

  _createClass(HeightMapText, [{
    key: "replace",
    value: function replace(_from, _to, nodes) {
      var node = nodes[0];

      if (nodes.length == 1 && (node instanceof HeightMapText || node instanceof HeightMapGap && node.flags & 4
      /* SingleLine */
      ) && Math.abs(this.length - node.length) < 10) {
        if (node instanceof HeightMapGap) node = new HeightMapText(node.length, this.height);else node.height = this.height;
        if (!this.outdated) node.outdated = false;
        return node;
      } else {
        return HeightMap.of(nodes);
      }
    }
  }, {
    key: "updateHeight",
    value: function updateHeight(oracle) {
      var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var force = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var measured = arguments.length > 3 ? arguments[3] : undefined;
      if (measured && measured.from <= offset && measured.more) this.setHeight(oracle, measured.heights[measured.index++]);else if (force || this.outdated) this.setHeight(oracle, Math.max(this.widgetHeight, oracle.heightForLine(this.length - this.collapsed)));
      this.outdated = false;
      return this;
    }
  }, {
    key: "toString",
    value: function toString() {
      return "line(".concat(this.length).concat(this.collapsed ? -this.collapsed : "").concat(this.widgetHeight ? ":" + this.widgetHeight : "", ")");
    }
  }]);

  return HeightMapText;
}(HeightMapBlock);

var HeightMapGap = /*#__PURE__*/function (_HeightMap2) {
  _inherits(HeightMapGap, _HeightMap2);

  var _super18 = _createSuper(HeightMapGap);

  function HeightMapGap(length) {
    _classCallCheck(this, HeightMapGap);

    return _super18.call(this, length, 0);
  }

  _createClass(HeightMapGap, [{
    key: "lines",
    value: function lines(doc, offset) {
      var firstLine = doc.lineAt(offset).number,
          lastLine = doc.lineAt(offset + this.length).number;
      return {
        firstLine: firstLine,
        lastLine: lastLine,
        lineHeight: this.height / (lastLine - firstLine + 1)
      };
    }
  }, {
    key: "blockAt",
    value: function blockAt(height, doc, top, offset) {
      var _this$lines = this.lines(doc, offset),
          firstLine = _this$lines.firstLine,
          lastLine = _this$lines.lastLine,
          lineHeight = _this$lines.lineHeight;

      var line = Math.max(0, Math.min(lastLine - firstLine, Math.floor((height - top) / lineHeight)));

      var _doc$line = doc.line(firstLine + line),
          from = _doc$line.from,
          length = _doc$line.length;

      return new BlockInfo(from, length, top + lineHeight * line, lineHeight, BlockType.Text);
    }
  }, {
    key: "lineAt",
    value: function lineAt(value, type, doc, top, offset) {
      if (type == QueryType.ByHeight) return this.blockAt(value, doc, top, offset);

      if (type == QueryType.ByPosNoHeight) {
        var _doc$lineAt = doc.lineAt(value),
            _from2 = _doc$lineAt.from,
            to = _doc$lineAt.to;

        return new BlockInfo(_from2, to - _from2, 0, 0, BlockType.Text);
      }

      var _this$lines2 = this.lines(doc, offset),
          firstLine = _this$lines2.firstLine,
          lineHeight = _this$lines2.lineHeight;

      var _doc$lineAt2 = doc.lineAt(value),
          from = _doc$lineAt2.from,
          length = _doc$lineAt2.length,
          number = _doc$lineAt2.number;

      return new BlockInfo(from, length, top + lineHeight * (number - firstLine), lineHeight, BlockType.Text);
    }
  }, {
    key: "forEachLine",
    value: function forEachLine(from, to, doc, top, offset, f) {
      var _this$lines3 = this.lines(doc, offset),
          firstLine = _this$lines3.firstLine,
          lineHeight = _this$lines3.lineHeight;

      for (var pos = Math.max(from, offset), end = Math.min(offset + this.length, to); pos <= end;) {
        var line = doc.lineAt(pos);
        if (pos == from) top += lineHeight * (line.number - firstLine);
        f(new BlockInfo(line.from, line.length, top, top += lineHeight, BlockType.Text));
        pos = line.to + 1;
      }
    }
  }, {
    key: "replace",
    value: function replace(from, to, nodes) {
      var after = this.length - to;

      if (after > 0) {
        var last = nodes[nodes.length - 1];
        if (last instanceof HeightMapGap) nodes[nodes.length - 1] = new HeightMapGap(last.length + after);else nodes.push(null, new HeightMapGap(after - 1));
      }

      if (from > 0) {
        var first = nodes[0];
        if (first instanceof HeightMapGap) nodes[0] = new HeightMapGap(from + first.length);else nodes.unshift(new HeightMapGap(from - 1), null);
      }

      return HeightMap.of(nodes);
    }
  }, {
    key: "decomposeLeft",
    value: function decomposeLeft(to, result) {
      result.push(new HeightMapGap(to - 1), null);
    }
  }, {
    key: "decomposeRight",
    value: function decomposeRight(from, result) {
      result.push(null, new HeightMapGap(this.length - from - 1));
    }
  }, {
    key: "updateHeight",
    value: function updateHeight(oracle) {
      var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var force = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var measured = arguments.length > 3 ? arguments[3] : undefined;
      var end = offset + this.length;

      if (measured && measured.from <= offset + this.length && measured.more) {
        // Fill in part of this gap with measured lines. We know there
        // can't be widgets or collapsed ranges in those lines, because
        // they would already have been added to the heightmap (gaps
        // only contain plain text).
        var nodes = [],
            pos = Math.max(offset, measured.from);
        if (measured.from > offset) nodes.push(new HeightMapGap(measured.from - offset - 1).updateHeight(oracle, offset));

        while (pos <= end && measured.more) {
          var len = oracle.doc.lineAt(pos).length;
          if (nodes.length) nodes.push(null);
          var line = new HeightMapText(len, measured.heights[measured.index++]);
          line.outdated = false;
          nodes.push(line);
          pos += len + 1;
        }

        if (pos <= end) nodes.push(null, new HeightMapGap(end - pos).updateHeight(oracle, pos));
        oracle.heightChanged = true;
        return HeightMap.of(nodes);
      } else if (force || this.outdated) {
        this.setHeight(oracle, oracle.heightForGap(offset, offset + this.length));
        this.outdated = false;
      }

      return this;
    }
  }, {
    key: "toString",
    value: function toString() {
      return "gap(".concat(this.length, ")");
    }
  }]);

  return HeightMapGap;
}(HeightMap);

var HeightMapBranch = /*#__PURE__*/function (_HeightMap3) {
  _inherits(HeightMapBranch, _HeightMap3);

  var _super19 = _createSuper(HeightMapBranch);

  function HeightMapBranch(left, brk, right) {
    var _this20;

    _classCallCheck(this, HeightMapBranch);

    _this20 = _super19.call(this, left.length + brk + right.length, left.height + right.height, brk | (left.outdated || right.outdated ? 2
    /* Outdated */
    : 0));
    _this20.left = left;
    _this20.right = right;
    _this20.size = left.size + right.size;
    return _this20;
  }

  _createClass(HeightMapBranch, [{
    key: "break",
    get: function get() {
      return this.flags & 1
      /* Break */
      ;
    }
  }, {
    key: "blockAt",
    value: function blockAt(height, doc, top, offset) {
      var mid = top + this.left.height;
      return height < mid || this.right.height == 0 ? this.left.blockAt(height, doc, top, offset) : this.right.blockAt(height, doc, mid, offset + this.left.length + this["break"]);
    }
  }, {
    key: "lineAt",
    value: function lineAt(value, type, doc, top, offset) {
      var rightTop = top + this.left.height,
          rightOffset = offset + this.left.length + this["break"];
      var left = type == QueryType.ByHeight ? value < rightTop || this.right.height == 0 : value < rightOffset;
      var base = left ? this.left.lineAt(value, type, doc, top, offset) : this.right.lineAt(value, type, doc, rightTop, rightOffset);
      if (this["break"] || (left ? base.to < rightOffset : base.from > rightOffset)) return base;
      var subQuery = type == QueryType.ByPosNoHeight ? QueryType.ByPosNoHeight : QueryType.ByPos;
      if (left) return base.join(this.right.lineAt(rightOffset, subQuery, doc, rightTop, rightOffset));else return this.left.lineAt(rightOffset, subQuery, doc, top, offset).join(base);
    }
  }, {
    key: "forEachLine",
    value: function forEachLine(from, to, doc, top, offset, f) {
      var rightTop = top + this.left.height,
          rightOffset = offset + this.left.length + this["break"];

      if (this["break"]) {
        if (from < rightOffset) this.left.forEachLine(from, to, doc, top, offset, f);
        if (to >= rightOffset) this.right.forEachLine(from, to, doc, rightTop, rightOffset, f);
      } else {
        var mid = this.lineAt(rightOffset, QueryType.ByPos, doc, top, offset);
        if (from < mid.from) this.left.forEachLine(from, mid.from - 1, doc, top, offset, f);
        if (mid.to >= from && mid.from <= to) f(mid);
        if (to > mid.to) this.right.forEachLine(mid.to + 1, to, doc, rightTop, rightOffset, f);
      }
    }
  }, {
    key: "replace",
    value: function replace(from, to, nodes) {
      var rightStart = this.left.length + this["break"];
      if (to < rightStart) return this.balanced(this.left.replace(from, to, nodes), this.right);
      if (from > this.left.length) return this.balanced(this.left, this.right.replace(from - rightStart, to - rightStart, nodes));
      var result = [];
      if (from > 0) this.decomposeLeft(from, result);
      var left = result.length;

      var _iterator19 = _createForOfIteratorHelper(nodes),
          _step19;

      try {
        for (_iterator19.s(); !(_step19 = _iterator19.n()).done;) {
          var node = _step19.value;
          result.push(node);
        }
      } catch (err) {
        _iterator19.e(err);
      } finally {
        _iterator19.f();
      }

      if (from > 0) mergeGaps(result, left - 1);

      if (to < this.length) {
        var right = result.length;
        this.decomposeRight(to, result);
        mergeGaps(result, right);
      }

      return HeightMap.of(result);
    }
  }, {
    key: "decomposeLeft",
    value: function decomposeLeft(to, result) {
      var left = this.left.length;
      if (to <= left) return this.left.decomposeLeft(to, result);
      result.push(this.left);

      if (this["break"]) {
        left++;
        if (to >= left) result.push(null);
      }

      if (to > left) this.right.decomposeLeft(to - left, result);
    }
  }, {
    key: "decomposeRight",
    value: function decomposeRight(from, result) {
      var left = this.left.length,
          right = left + this["break"];
      if (from >= right) return this.right.decomposeRight(from - right, result);
      if (from < left) this.left.decomposeRight(from, result);
      if (this["break"] && from < right) result.push(null);
      result.push(this.right);
    }
  }, {
    key: "balanced",
    value: function balanced(left, right) {
      if (left.size > 2 * right.size || right.size > 2 * left.size) return HeightMap.of(this["break"] ? [left, null, right] : [left, right]);
      this.left = left;
      this.right = right;
      this.height = left.height + right.height;
      this.outdated = left.outdated || right.outdated;
      this.size = left.size + right.size;
      this.length = left.length + this["break"] + right.length;
      return this;
    }
  }, {
    key: "updateHeight",
    value: function updateHeight(oracle) {
      var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var force = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var measured = arguments.length > 3 ? arguments[3] : undefined;
      var left = this.left,
          right = this.right,
          rightStart = offset + left.length + this["break"],
          rebalance = null;
      if (measured && measured.from <= offset + left.length && measured.more) rebalance = left = left.updateHeight(oracle, offset, force, measured);else left.updateHeight(oracle, offset, force);
      if (measured && measured.from <= rightStart + right.length && measured.more) rebalance = right = right.updateHeight(oracle, rightStart, force, measured);else right.updateHeight(oracle, rightStart, force);
      if (rebalance) return this.balanced(left, right);
      this.height = this.left.height + this.right.height;
      this.outdated = false;
      return this;
    }
  }, {
    key: "toString",
    value: function toString() {
      return this.left + (this["break"] ? " " : "-") + this.right;
    }
  }]);

  return HeightMapBranch;
}(HeightMap);

function mergeGaps(nodes, around) {
  var before, after;
  if (nodes[around] == null && (before = nodes[around - 1]) instanceof HeightMapGap && (after = nodes[around + 1]) instanceof HeightMapGap) nodes.splice(around - 1, 3, new HeightMapGap(before.length + 1 + after.length));
}

var relevantWidgetHeight = 5;

var NodeBuilder = /*#__PURE__*/function () {
  function NodeBuilder(pos, oracle) {
    _classCallCheck(this, NodeBuilder);

    this.pos = pos;
    this.oracle = oracle;
    this.nodes = [];
    this.lineStart = -1;
    this.lineEnd = -1;
    this.covering = null;
    this.writtenTo = pos;
  }

  _createClass(NodeBuilder, [{
    key: "isCovered",
    get: function get() {
      return this.covering && this.nodes[this.nodes.length - 1] == this.covering;
    }
  }, {
    key: "span",
    value: function span(_from, to) {
      if (this.lineStart > -1) {
        var end = Math.min(to, this.lineEnd),
            last = this.nodes[this.nodes.length - 1];
        if (last instanceof HeightMapText) last.length += end - this.pos;else if (end > this.pos || !this.isCovered) this.nodes.push(new HeightMapText(end - this.pos, -1));
        this.writtenTo = end;

        if (to > end) {
          this.nodes.push(null);
          this.writtenTo++;
          this.lineStart = -1;
        }
      }

      this.pos = to;
    }
  }, {
    key: "point",
    value: function point(from, to, deco) {
      if (from < to || deco.heightRelevant) {
        var height = deco.widget ? Math.max(0, deco.widget.estimatedHeight) : 0;
        var len = to - from;

        if (deco.block) {
          this.addBlock(new HeightMapBlock(len, height, deco.type));
        } else if (len || height >= relevantWidgetHeight) {
          this.addLineDeco(height, len);
        }
      } else if (to > from) {
        this.span(from, to);
      }

      if (this.lineEnd > -1 && this.lineEnd < this.pos) this.lineEnd = this.oracle.doc.lineAt(this.pos).to;
    }
  }, {
    key: "enterLine",
    value: function enterLine() {
      if (this.lineStart > -1) return;

      var _this$oracle$doc$line = this.oracle.doc.lineAt(this.pos),
          from = _this$oracle$doc$line.from,
          to = _this$oracle$doc$line.to;

      this.lineStart = from;
      this.lineEnd = to;

      if (this.writtenTo < from) {
        if (this.writtenTo < from - 1 || this.nodes[this.nodes.length - 1] == null) this.nodes.push(this.blankContent(this.writtenTo, from - 1));
        this.nodes.push(null);
      }

      if (this.pos > from) this.nodes.push(new HeightMapText(this.pos - from, -1));
      this.writtenTo = this.pos;
    }
  }, {
    key: "blankContent",
    value: function blankContent(from, to) {
      var gap = new HeightMapGap(to - from);
      if (this.oracle.doc.lineAt(from).to == to) gap.flags |= 4
      /* SingleLine */
      ;
      return gap;
    }
  }, {
    key: "ensureLine",
    value: function ensureLine() {
      this.enterLine();
      var last = this.nodes.length ? this.nodes[this.nodes.length - 1] : null;
      if (last instanceof HeightMapText) return last;
      var line = new HeightMapText(0, -1);
      this.nodes.push(line);
      return line;
    }
  }, {
    key: "addBlock",
    value: function addBlock(block) {
      this.enterLine();
      if (block.type == BlockType.WidgetAfter && !this.isCovered) this.ensureLine();
      this.nodes.push(block);
      this.writtenTo = this.pos = this.pos + block.length;
      if (block.type != BlockType.WidgetBefore) this.covering = block;
    }
  }, {
    key: "addLineDeco",
    value: function addLineDeco(height, length) {
      var line = this.ensureLine();
      line.length += length;
      line.collapsed += length;
      line.widgetHeight = Math.max(line.widgetHeight, height);
      this.writtenTo = this.pos = this.pos + length;
    }
  }, {
    key: "finish",
    value: function finish(from) {
      var last = this.nodes.length == 0 ? null : this.nodes[this.nodes.length - 1];
      if (this.lineStart > -1 && !(last instanceof HeightMapText) && !this.isCovered) this.nodes.push(new HeightMapText(0, -1));else if (this.writtenTo < this.pos || last == null) this.nodes.push(this.blankContent(this.writtenTo, this.pos));
      var pos = from;

      var _iterator20 = _createForOfIteratorHelper(this.nodes),
          _step20;

      try {
        for (_iterator20.s(); !(_step20 = _iterator20.n()).done;) {
          var node = _step20.value;
          if (node instanceof HeightMapText) node.updateHeight(this.oracle, pos);
          pos += node ? node.length : 1;
        }
      } catch (err) {
        _iterator20.e(err);
      } finally {
        _iterator20.f();
      }

      return this.nodes;
    } // Always called with a region that on both sides either stretches
    // to a line break or the end of the document.
    // The returned array uses null to indicate line breaks, but never
    // starts or ends in a line break, or has multiple line breaks next
    // to each other.

  }], [{
    key: "build",
    value: function build(oracle, decorations, from, to) {
      var builder = new NodeBuilder(from, oracle);

      _rangeset.RangeSet.spans(decorations, from, to, builder, 0);

      return builder.finish(from);
    }
  }]);

  return NodeBuilder;
}();

function heightRelevantDecoChanges(a, b, diff) {
  var comp = new DecorationComparator();

  _rangeset.RangeSet.compare(a, b, diff, comp, 0);

  return comp.changes;
}

var DecorationComparator = /*#__PURE__*/function () {
  function DecorationComparator() {
    _classCallCheck(this, DecorationComparator);

    this.changes = [];
  }

  _createClass(DecorationComparator, [{
    key: "compareRange",
    value: function compareRange() {}
  }, {
    key: "comparePoint",
    value: function comparePoint(from, to, a, b) {
      if (from < to || a && a.heightRelevant || b && b.heightRelevant) addRange(from, to, this.changes, 5);
    }
  }]);

  return DecorationComparator;
}();

function visiblePixelRange(dom, paddingTop) {
  var rect = dom.getBoundingClientRect();
  var left = Math.max(0, rect.left),
      right = Math.min(innerWidth, rect.right);
  var top = Math.max(0, rect.top),
      bottom = Math.min(innerHeight, rect.bottom);

  for (var parent = dom.parentNode; parent;) {
    // (Cast to any because TypeScript is useless with Node types)
    if (parent.nodeType == 1) {
      if ((parent.scrollHeight > parent.clientHeight || parent.scrollWidth > parent.clientWidth) && window.getComputedStyle(parent).overflow != "visible") {
        var parentRect = parent.getBoundingClientRect();
        left = Math.max(left, parentRect.left);
        right = Math.min(right, parentRect.right);
        top = Math.max(top, parentRect.top);
        bottom = Math.min(bottom, parentRect.bottom);
      }

      parent = parent.parentNode;
    } else if (parent.nodeType == 11) {
      // Shadow root
      parent = parent.host;
    } else {
      break;
    }
  }

  return {
    left: left - rect.left,
    right: right - rect.left,
    top: top - (rect.top + paddingTop),
    bottom: bottom - (rect.top + paddingTop)
  };
} // Line gaps are placeholder widgets used to hide pieces of overlong
// lines within the viewport, as a kludge to keep the editor
// responsive when a ridiculously long line is loaded into it.


var LineGap = /*#__PURE__*/function () {
  function LineGap(from, to, size) {
    _classCallCheck(this, LineGap);

    this.from = from;
    this.to = to;
    this.size = size;
  }

  _createClass(LineGap, [{
    key: "draw",
    value: function draw(wrapping) {
      return Decoration.replace({
        widget: new LineGapWidget(this.size, wrapping)
      }).range(this.from, this.to);
    }
  }], [{
    key: "same",
    value: function same(a, b) {
      if (a.length != b.length) return false;

      for (var i = 0; i < a.length; i++) {
        var gA = a[i],
            gB = b[i];
        if (gA.from != gB.from || gA.to != gB.to || gA.size != gB.size) return false;
      }

      return true;
    }
  }]);

  return LineGap;
}();

var LineGapWidget = /*#__PURE__*/function (_WidgetType4) {
  _inherits(LineGapWidget, _WidgetType4);

  var _super20 = _createSuper(LineGapWidget);

  function LineGapWidget(size, vertical) {
    var _this21;

    _classCallCheck(this, LineGapWidget);

    _this21 = _super20.call(this);
    _this21.size = size;
    _this21.vertical = vertical;
    return _this21;
  }

  _createClass(LineGapWidget, [{
    key: "eq",
    value: function eq(other) {
      return other.size == this.size && other.vertical == this.vertical;
    }
  }, {
    key: "toDOM",
    value: function toDOM() {
      var elt = document.createElement("div");

      if (this.vertical) {
        elt.style.height = this.size + "px";
      } else {
        elt.style.width = this.size + "px";
        elt.style.height = "2px";
        elt.style.display = "inline-block";
      }

      return elt;
    }
  }, {
    key: "estimatedHeight",
    get: function get() {
      return this.vertical ? this.size : -1;
    }
  }]);

  return LineGapWidget;
}(WidgetType);

var ViewState = /*#__PURE__*/function () {
  function ViewState(state) {
    _classCallCheck(this, ViewState);

    this.state = state; // These are contentDOM-local coordinates

    this.pixelViewport = {
      left: 0,
      right: window.innerWidth,
      top: 0,
      bottom: 0
    };
    this.inView = true;
    this.paddingTop = 0;
    this.paddingBottom = 0;
    this.contentWidth = 0;
    this.heightOracle = new HeightOracle(); // See VP.MaxDOMHeight

    this.scaler = IdScaler;
    this.scrollTo = null; // Briefly set to true when printing, to disable viewport limiting

    this.printing = false;
    this.visibleRanges = []; // Cursor 'assoc' is only significant when the cursor is on a line
    // wrap point, where it must stick to the character that it is
    // associated with. Since browsers don't provide a reasonable
    // interface to set or query this, when a selection is set that
    // might cause this to be signficant, this flag is set. The next
    // measure phase will check whether the cursor is on a line-wrapping
    // boundary and, if so, reset it to make sure it is positioned in
    // the right place.

    this.mustEnforceCursorAssoc = false;
    this.heightMap = HeightMap.empty().applyChanges(state.facet(decorations), _text.Text.empty, this.heightOracle.setDoc(state.doc), [new ChangedRange(0, 0, 0, state.doc.length)]);
    this.viewport = this.getViewport(0, null);
    this.updateForViewport();
    this.lineGaps = this.ensureLineGaps([]);
    this.lineGapDeco = Decoration.set(this.lineGaps.map(function (gap) {
      return gap.draw(false);
    }));
    this.computeVisibleRanges();
  }

  _createClass(ViewState, [{
    key: "updateForViewport",
    value: function updateForViewport() {
      var _this22 = this;

      var viewports = [this.viewport],
          main = this.state.selection.main;

      var _loop3 = function _loop3(i) {
        var pos = i ? main.head : main.anchor;

        if (!viewports.some(function (_ref7) {
          var from = _ref7.from,
              to = _ref7.to;
          return pos >= from && pos <= to;
        })) {
          var _this22$lineAt = _this22.lineAt(pos, 0),
              from = _this22$lineAt.from,
              to = _this22$lineAt.to;

          viewports.push(new Viewport(from, to));
        }
      };

      for (var i = 0; i <= 1; i++) {
        _loop3(i);
      }

      this.viewports = viewports.sort(function (a, b) {
        return a.from - b.from;
      });
      this.scaler = this.heightMap.height <= 7000000
      /* MaxDOMHeight */
      ? IdScaler : new BigScaler(this.heightOracle.doc, this.heightMap, this.viewports);
    }
  }, {
    key: "update",
    value: function update(_update5) {
      var scrollTo = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var prev = this.state;
      this.state = _update5.state;
      var newDeco = this.state.facet(decorations);
      var contentChanges = _update5.changedRanges;
      var heightChanges = ChangedRange.extendWithRanges(contentChanges, heightRelevantDecoChanges(_update5.startState.facet(decorations), newDeco, _update5 ? _update5.changes : _state.ChangeSet.empty(this.state.doc.length)));
      var prevHeight = this.heightMap.height;
      this.heightMap = this.heightMap.applyChanges(newDeco, prev.doc, this.heightOracle.setDoc(this.state.doc), heightChanges);
      if (this.heightMap.height != prevHeight) _update5.flags |= 2
      /* Height */
      ;
      var viewport = heightChanges.length ? this.mapViewport(this.viewport, _update5.changes) : this.viewport;
      if (scrollTo && (scrollTo.head < viewport.from || scrollTo.head > viewport.to) || !this.viewportIsAppropriate(viewport)) viewport = this.getViewport(0, scrollTo);

      if (!viewport.eq(this.viewport)) {
        this.viewport = viewport;
        _update5.flags |= 4
        /* Viewport */
        ;
      }

      this.updateForViewport();
      if (this.lineGaps.length || this.viewport.to - this.viewport.from > 15000
      /* MinViewPort */
      ) _update5.flags |= this.updateLineGaps(this.ensureLineGaps(this.mapLineGaps(this.lineGaps, _update5.changes)));
      this.computeVisibleRanges();
      if (scrollTo) this.scrollTo = scrollTo;
      if (!this.mustEnforceCursorAssoc && _update5.selectionSet && _update5.view.lineWrapping && _update5.state.selection.main.empty && _update5.state.selection.main.assoc) this.mustEnforceCursorAssoc = true;
    }
  }, {
    key: "measure",
    value: function measure(docView, repeated) {
      var dom = docView.dom,
          whiteSpace = "",
          direction = Direction.LTR;

      if (!repeated) {
        // Vertical padding
        var style = window.getComputedStyle(dom);
        whiteSpace = style.whiteSpace, direction = style.direction == "rtl" ? Direction.RTL : Direction.LTR;
        this.paddingTop = parseInt(style.paddingTop) || 0;
        this.paddingBottom = parseInt(style.paddingBottom) || 0;
      } // Pixel viewport


      var pixelViewport = this.printing ? {
        top: -1e8,
        bottom: 1e8,
        left: -1e8,
        right: 1e8
      } : visiblePixelRange(dom, this.paddingTop);
      var dTop = pixelViewport.top - this.pixelViewport.top,
          dBottom = pixelViewport.bottom - this.pixelViewport.bottom;
      this.pixelViewport = pixelViewport;
      this.inView = this.pixelViewport.bottom > this.pixelViewport.top && this.pixelViewport.right > this.pixelViewport.left;
      if (!this.inView) return 0;
      var lineHeights = docView.measureVisibleLineHeights();
      var refresh = false,
          bias = 0,
          result = 0,
          oracle = this.heightOracle;

      if (!repeated) {
        var contentWidth = docView.dom.clientWidth;

        if (oracle.mustRefresh(lineHeights, whiteSpace, direction) || oracle.lineWrapping && Math.abs(contentWidth - this.contentWidth) > oracle.charWidth) {
          var _docView$measureTextS = docView.measureTextSize(),
              lineHeight = _docView$measureTextS.lineHeight,
              charWidth = _docView$measureTextS.charWidth;

          refresh = oracle.refresh(whiteSpace, direction, lineHeight, charWidth, contentWidth / charWidth, lineHeights);

          if (refresh) {
            docView.minWidth = 0;
            result |= 16
            /* Geometry */
            ;
          }
        }

        if (this.contentWidth != contentWidth) {
          this.contentWidth = contentWidth;
          result |= 16
          /* Geometry */
          ;
        }

        if (dTop > 0 && dBottom > 0) bias = Math.max(dTop, dBottom);else if (dTop < 0 && dBottom < 0) bias = Math.min(dTop, dBottom);
      }

      oracle.heightChanged = false;
      this.heightMap = this.heightMap.updateHeight(oracle, 0, refresh, new MeasuredHeights(this.viewport.from, lineHeights));
      if (oracle.heightChanged) result |= 2
      /* Height */
      ;

      if (!this.viewportIsAppropriate(this.viewport, bias) || this.scrollTo && (this.scrollTo.head < this.viewport.from || this.scrollTo.head > this.viewport.to)) {
        var newVP = this.getViewport(bias, this.scrollTo);

        if (newVP.from != this.viewport.from || newVP.to != this.viewport.to) {
          this.viewport = newVP;
          result |= 4
          /* Viewport */
          ;
        }
      }

      this.updateForViewport();
      if (this.lineGaps.length || this.viewport.to - this.viewport.from > 15000
      /* MinViewPort */
      ) result |= this.updateLineGaps(this.ensureLineGaps(refresh ? [] : this.lineGaps));
      this.computeVisibleRanges();

      if (this.mustEnforceCursorAssoc) {
        this.mustEnforceCursorAssoc = false; // This is done in the read stage, because moving the selection
        // to a line end is going to trigger a layout anyway, so it
        // can't be a pure write. It should be rare that it does any
        // writing.

        docView.enforceCursorAssoc();
      }

      return result;
    }
  }, {
    key: "visibleTop",
    get: function get() {
      return this.scaler.fromDOM(this.pixelViewport.top, 0);
    }
  }, {
    key: "visibleBottom",
    get: function get() {
      return this.scaler.fromDOM(this.pixelViewport.bottom, 0);
    }
  }, {
    key: "getViewport",
    value: function getViewport(bias, scrollTo) {
      // This will divide VP.Margin between the top and the
      // bottom, depending on the bias (the change in viewport position
      // since the last update). It'll hold a number between 0 and 1
      var marginTop = 0.5 - Math.max(-0.5, Math.min(0.5, bias / 1000
      /* Margin */
      / 2));
      var map = this.heightMap,
          doc = this.state.doc,
          visibleTop = this.visibleTop,
          visibleBottom = this.visibleBottom;
      var viewport = new Viewport(map.lineAt(visibleTop - marginTop * 1000
      /* Margin */
      , QueryType.ByHeight, doc, 0, 0).from, map.lineAt(visibleBottom + (1 - marginTop) * 1000
      /* Margin */
      , QueryType.ByHeight, doc, 0, 0).to); // If scrollTo is given, make sure the viewport includes that position

      if (scrollTo) {
        if (scrollTo.head < viewport.from) {
          var _map$lineAt = map.lineAt(scrollTo.head, QueryType.ByPos, doc, 0, 0),
              newTop = _map$lineAt.top;

          viewport = new Viewport(map.lineAt(newTop - 1000
          /* Margin */
          / 2, QueryType.ByHeight, doc, 0, 0).from, map.lineAt(newTop + (visibleBottom - visibleTop) + 1000
          /* Margin */
          / 2, QueryType.ByHeight, doc, 0, 0).to);
        } else if (scrollTo.head > viewport.to) {
          var _map$lineAt2 = map.lineAt(scrollTo.head, QueryType.ByPos, doc, 0, 0),
              newBottom = _map$lineAt2.bottom;

          viewport = new Viewport(map.lineAt(newBottom - (visibleBottom - visibleTop) - 1000
          /* Margin */
          / 2, QueryType.ByHeight, doc, 0, 0).from, map.lineAt(newBottom + 1000
          /* Margin */
          / 2, QueryType.ByHeight, doc, 0, 0).to);
        }
      }

      return viewport;
    }
  }, {
    key: "mapViewport",
    value: function mapViewport(viewport, changes) {
      var from = changes.mapPos(viewport.from, -1),
          to = changes.mapPos(viewport.to, 1);
      return new Viewport(this.heightMap.lineAt(from, QueryType.ByPos, this.state.doc, 0, 0).from, this.heightMap.lineAt(to, QueryType.ByPos, this.state.doc, 0, 0).to);
    } // Checks if a given viewport covers the visible part of the
    // document and not too much beyond that.

  }, {
    key: "viewportIsAppropriate",
    value: function viewportIsAppropriate(_ref8) {
      var from = _ref8.from,
          to = _ref8.to;
      var bias = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      var _this$heightMap$lineA = this.heightMap.lineAt(from, QueryType.ByPos, this.state.doc, 0, 0),
          top = _this$heightMap$lineA.top;

      var _this$heightMap$lineA2 = this.heightMap.lineAt(to, QueryType.ByPos, this.state.doc, 0, 0),
          bottom = _this$heightMap$lineA2.bottom;

      var visibleTop = this.visibleTop,
          visibleBottom = this.visibleBottom;
      return (from == 0 || top <= visibleTop - Math.max(10
      /* MinCoverMargin */
      , Math.min(-bias, 250
      /* MaxCoverMargin */
      ))) && (to == this.state.doc.length || bottom >= visibleBottom + Math.max(10
      /* MinCoverMargin */
      , Math.min(bias, 250
      /* MaxCoverMargin */
      ))) && top > visibleTop - 2 * 1000
      /* Margin */
      && bottom < visibleBottom + 2 * 1000
      /* Margin */
      ;
    }
  }, {
    key: "mapLineGaps",
    value: function mapLineGaps(gaps, changes) {
      if (!gaps.length || changes.empty) return gaps;
      var mapped = [];

      var _iterator21 = _createForOfIteratorHelper(gaps),
          _step21;

      try {
        for (_iterator21.s(); !(_step21 = _iterator21.n()).done;) {
          var gap = _step21.value;
          if (!changes.touchesRange(gap.from, gap.to)) mapped.push(new LineGap(changes.mapPos(gap.from), changes.mapPos(gap.to), gap.size));
        }
      } catch (err) {
        _iterator21.e(err);
      } finally {
        _iterator21.f();
      }

      return mapped;
    } // Computes positions in the viewport where the start or end of a
    // line should be hidden, trying to reuse existing line gaps when
    // appropriate to avoid unneccesary redraws.
    // Uses crude character-counting for the positioning and sizing,
    // since actual DOM coordinates aren't always available and
    // predictable. Relies on generous margins (see LG.Margin) to hide
    // the artifacts this might produce from the user.

  }, {
    key: "ensureLineGaps",
    value: function ensureLineGaps(current) {
      var _this23 = this;

      var gaps = []; // This won't work at all in predominantly right-to-left text.

      if (this.heightOracle.direction != Direction.LTR) return gaps;
      this.heightMap.forEachLine(this.viewport.from, this.viewport.to, this.state.doc, 0, 0, function (line) {
        if (line.length < 10000
        /* Margin */
        ) return;
        var structure = lineStructure(line.from, line.to, _this23.state);
        if (structure.total < 10000
        /* Margin */
        ) return;
        var viewFrom, viewTo;

        if (_this23.heightOracle.lineWrapping) {
          if (line.from != _this23.viewport.from) viewFrom = line.from;else viewFrom = findPosition(structure, (_this23.visibleTop - line.top) / line.height);
          if (line.to != _this23.viewport.to) viewTo = line.to;else viewTo = findPosition(structure, (_this23.visibleBottom - line.top) / line.height);
        } else {
          var totalWidth = structure.total * _this23.heightOracle.charWidth;
          viewFrom = findPosition(structure, _this23.pixelViewport.left / totalWidth);
          viewTo = findPosition(structure, _this23.pixelViewport.right / totalWidth);
        }

        var sel = _this23.state.selection.main; // Make sure the gap doesn't cover a selection end

        if (sel.from <= viewFrom && sel.to >= line.from) viewFrom = sel.from;
        if (sel.from <= line.to && sel.to >= viewTo) viewTo = sel.to;
        var gapTo = viewFrom - 10000
        /* Margin */
        ,
            gapFrom = viewTo + 10000
        /* Margin */
        ;
        if (gapTo > line.from + 5000
        /* HalfMargin */
        ) gaps.push(find(current, function (gap) {
            return gap.from == line.from && gap.to > gapTo - 5000
            /* HalfMargin */
            && gap.to < gapTo + 5000;
          }
          /* HalfMargin */
          ) || new LineGap(line.from, gapTo, _this23.gapSize(line, gapTo, true, structure)));
        if (gapFrom < line.to - 5000
        /* HalfMargin */
        ) gaps.push(find(current, function (gap) {
            return gap.to == line.to && gap.from > gapFrom - 5000
            /* HalfMargin */
            && gap.from < gapFrom + 5000;
          }
          /* HalfMargin */
          ) || new LineGap(gapFrom, line.to, _this23.gapSize(line, gapFrom, false, structure)));
      });
      return gaps;
    }
  }, {
    key: "gapSize",
    value: function gapSize(line, pos, start, structure) {
      if (this.heightOracle.lineWrapping) {
        var height = line.height * findFraction(structure, pos);
        return start ? height : line.height - height;
      } else {
        var ratio = findFraction(structure, pos);
        return structure.total * this.heightOracle.charWidth * (start ? ratio : 1 - ratio);
      }
    }
  }, {
    key: "updateLineGaps",
    value: function updateLineGaps(gaps) {
      var _this24 = this;

      if (!LineGap.same(gaps, this.lineGaps)) {
        this.lineGaps = gaps;
        this.lineGapDeco = Decoration.set(gaps.map(function (gap) {
          return gap.draw(_this24.heightOracle.lineWrapping);
        }));
        return 8
        /* LineGaps */
        ;
      }

      return 0;
    }
  }, {
    key: "computeVisibleRanges",
    value: function computeVisibleRanges() {
      var deco = this.state.facet(decorations);
      if (this.lineGaps.length) deco = deco.concat(this.lineGapDeco);
      var ranges = [];

      _rangeset.RangeSet.spans(deco, this.viewport.from, this.viewport.to, {
        span: function span(from, to) {
          ranges.push({
            from: from,
            to: to
          });
        },
        point: function point() {}
      }, 20);

      this.visibleRanges = ranges;
    }
  }, {
    key: "lineAt",
    value: function lineAt(pos, editorTop) {
      editorTop += this.paddingTop;
      return scaleBlock(this.heightMap.lineAt(pos, QueryType.ByPos, this.state.doc, editorTop, 0), this.scaler, editorTop);
    }
  }, {
    key: "lineAtHeight",
    value: function lineAtHeight(height, editorTop) {
      editorTop += this.paddingTop;
      return scaleBlock(this.heightMap.lineAt(this.scaler.fromDOM(height, editorTop), QueryType.ByHeight, this.state.doc, editorTop, 0), this.scaler, editorTop);
    }
  }, {
    key: "blockAtHeight",
    value: function blockAtHeight(height, editorTop) {
      editorTop += this.paddingTop;
      return scaleBlock(this.heightMap.blockAt(this.scaler.fromDOM(height, editorTop), this.state.doc, editorTop, 0), this.scaler, editorTop);
    }
  }, {
    key: "forEachLine",
    value: function forEachLine(from, to, f, editorTop) {
      var _this25 = this;

      editorTop += this.paddingTop;
      return this.heightMap.forEachLine(from, to, this.state.doc, editorTop, 0, this.scaler.scale == 1 ? f : function (b) {
        return f(scaleBlock(b, _this25.scaler, editorTop));
      });
    }
  }, {
    key: "contentHeight",
    get: function get() {
      return this.domHeight + this.paddingTop + this.paddingBottom;
    }
  }, {
    key: "domHeight",
    get: function get() {
      return this.scaler.toDOM(this.heightMap.height, this.paddingTop);
    }
  }]);

  return ViewState;
}(); /// Indicates the range of the document that is in the visible
/// viewport.


var Viewport = /*#__PURE__*/function () {
  function Viewport(from, to) {
    _classCallCheck(this, Viewport);

    this.from = from;
    this.to = to;
  }

  _createClass(Viewport, [{
    key: "eq",
    value: function eq(b) {
      return this.from == b.from && this.to == b.to;
    }
  }]);

  return Viewport;
}();

function lineStructure(from, to, state) {
  var ranges = [],
      pos = from,
      total = 0;

  _rangeset.RangeSet.spans(state.facet(decorations), from, to, {
    span: function span() {},
    point: function point(from, to) {
      if (from > pos) {
        ranges.push({
          from: pos,
          to: from
        });
        total += from - pos;
      }

      pos = to;
    }
  }, 20); // We're only interested in collapsed ranges of a significant size


  if (pos < to) {
    ranges.push({
      from: pos,
      to: to
    });
    total += to - pos;
  }

  return {
    total: total,
    ranges: ranges
  };
}

function findPosition(_ref9, ratio) {
  var total = _ref9.total,
      ranges = _ref9.ranges;
  if (ratio <= 0) return ranges[0].from;
  if (ratio >= 1) return ranges[ranges.length - 1].to;
  var dist = Math.floor(total * ratio);

  for (var i = 0;; i++) {
    var _ranges$i = ranges[i],
        from = _ranges$i.from,
        to = _ranges$i.to,
        size = to - from;
    if (dist <= size) return from + dist;
    dist -= size;
  }
}

function findFraction(structure, pos) {
  var counted = 0;

  var _iterator22 = _createForOfIteratorHelper(structure.ranges),
      _step22;

  try {
    for (_iterator22.s(); !(_step22 = _iterator22.n()).done;) {
      var _step22$value = _step22.value,
          from = _step22$value.from,
          to = _step22$value.to;

      if (pos <= to) {
        counted += pos - from;
        break;
      }

      counted += to - from;
    }
  } catch (err) {
    _iterator22.e(err);
  } finally {
    _iterator22.f();
  }

  return counted / structure.total;
}

function find(array, f) {
  var _iterator23 = _createForOfIteratorHelper(array),
      _step23;

  try {
    for (_iterator23.s(); !(_step23 = _iterator23.n()).done;) {
      var val = _step23.value;
      if (f(val)) return val;
    }
  } catch (err) {
    _iterator23.e(err);
  } finally {
    _iterator23.f();
  }

  return undefined;
} // Don't scale when the document height is within the range of what
// the DOM can handle.


var IdScaler = {
  toDOM: function toDOM(n) {
    return n;
  },
  fromDOM: function fromDOM(n) {
    return n;
  },
  scale: 1
}; // When the height is too big (> VP.MaxDOMHeight), scale down the
// regions outside the viewports so that the total height is
// VP.MaxDOMHeight.

var BigScaler = /*#__PURE__*/function () {
  function BigScaler(doc, heightMap, viewports) {
    _classCallCheck(this, BigScaler);

    var vpHeight = 0,
        base = 0,
        domBase = 0;
    this.viewports = viewports.map(function (_ref10) {
      var from = _ref10.from,
          to = _ref10.to;
      var top = heightMap.lineAt(from, QueryType.ByPos, doc, 0, 0).top;
      var bottom = heightMap.lineAt(to, QueryType.ByPos, doc, 0, 0).bottom;
      vpHeight += bottom - top;
      return {
        from: from,
        to: to,
        top: top,
        bottom: bottom,
        domTop: 0,
        domBottom: 0
      };
    });
    this.scale = (7000000
    /* MaxDOMHeight */
    - vpHeight) / (heightMap.height - vpHeight);

    var _iterator24 = _createForOfIteratorHelper(this.viewports),
        _step24;

    try {
      for (_iterator24.s(); !(_step24 = _iterator24.n()).done;) {
        var obj = _step24.value;
        obj.domTop = domBase + (obj.top - base) * this.scale;
        domBase = obj.domBottom = obj.domTop + (obj.bottom - obj.top);
        base = obj.bottom;
      }
    } catch (err) {
      _iterator24.e(err);
    } finally {
      _iterator24.f();
    }
  }

  _createClass(BigScaler, [{
    key: "toDOM",
    value: function toDOM(n, top) {
      n -= top;

      for (var i = 0, _base = 0, domBase = 0;; i++) {
        var vp = i < this.viewports.length ? this.viewports[i] : null;
        if (!vp || n < vp.top) return domBase + (n - _base) * this.scale + top;
        if (n <= vp.bottom) return vp.domTop + (n - vp.top) + top;
        _base = vp.bottom;
        domBase = vp.domBottom;
      }
    }
  }, {
    key: "fromDOM",
    value: function fromDOM(n, top) {
      n -= top;

      for (var i = 0, _base2 = 0, domBase = 0;; i++) {
        var vp = i < this.viewports.length ? this.viewports[i] : null;
        if (!vp || n < vp.domTop) return _base2 + (n - domBase) / this.scale + top;
        if (n <= vp.domBottom) return vp.top + (n - vp.domTop) + top;
        _base2 = vp.bottom;
        domBase = vp.domBottom;
      }
    }
  }]);

  return BigScaler;
}();

function scaleBlock(block, scaler, top) {
  if (scaler.scale == 1) return block;
  var bTop = scaler.toDOM(block.top, top),
      bBottom = scaler.toDOM(block.bottom, top);
  return new BlockInfo(block.from, block.length, bTop, bBottom - bTop, Array.isArray(block.type) ? block.type.map(function (b) {
    return scaleBlock(b, scaler, top);
  }) : block.type);
}

var _theme = _state.Facet.define({
  combine: function combine(strs) {
    return strs.join(" ");
  }
});

var darkTheme = _state.Facet.define({
  combine: function combine(values) {
    return values.indexOf(true) > -1;
  }
});

var baseThemeID = _styleMod.StyleModule.newName(),
    baseLightID = _styleMod.StyleModule.newName(),
    baseDarkID = _styleMod.StyleModule.newName();

var lightDarkIDs = {
  "&light": "." + baseLightID,
  "&dark": "." + baseDarkID
};

function buildTheme(main, spec, scopes) {
  return new _styleMod.StyleModule(spec, {
    finish: function finish(sel) {
      return /&/.test(sel) ? sel.replace(/&\w*/, function (m) {
        if (m == "&") return main;
        if (!scopes || !scopes[m]) throw new RangeError("Unsupported selector: ".concat(m));
        return scopes[m];
      }) : main + " " + sel;
    }
  });
}

var baseTheme = buildTheme("." + baseThemeID, {
  "&": {
    position: "relative !important",
    boxSizing: "border-box",
    "&.cm-focused": {
      // FIXME it would be great if we could directly use the browser's
      // default focus outline, but it appears we can't, so this tries to
      // approximate that
      outline_fallback: "1px dotted #212121",
      outline: "5px auto -webkit-focus-ring-color"
    },
    display: "flex !important",
    flexDirection: "column"
  },
  ".cm-scroller": {
    display: "flex !important",
    alignItems: "flex-start !important",
    fontFamily: "monospace",
    lineHeight: 1.4,
    height: "100%",
    overflowX: "auto",
    position: "relative",
    zIndex: 0
  },
  ".cm-content": {
    margin: 0,
    flexGrow: 2,
    minHeight: "100%",
    display: "block",
    whiteSpace: "pre",
    boxSizing: "border-box",
    padding: "4px 0",
    outline: "none"
  },
  ".cm-lineWrapping": {
    whiteSpace: "pre-wrap",
    overflowWrap: "anywhere"
  },
  "&light .cm-content": {
    caretColor: "black"
  },
  "&dark .cm-content": {
    caretColor: "white"
  },
  ".cm-line": {
    display: "block",
    padding: "0 2px 0 4px"
  },
  ".cm-selectionLayer": {
    zIndex: -1,
    contain: "size style"
  },
  ".cm-selectionBackground": {
    position: "absolute"
  },
  "&light .cm-selectionBackground": {
    background: "#d9d9d9"
  },
  "&dark .cm-selectionBackground": {
    background: "#222"
  },
  "&light.cm-focused .cm-selectionBackground": {
    background: "#d7d4f0"
  },
  "&dark.cm-focused .cm-selectionBackground": {
    background: "#233"
  },
  ".cm-cursorLayer": {
    zIndex: 100,
    contain: "size style",
    pointerEvents: "none"
  },
  "&.cm-focused .cm-cursorLayer": {
    animation: "steps(1) cm-blink 1.2s infinite"
  },
  // Two animations defined so that we can switch between them to
  // restart the animation without forcing another style
  // recomputation.
  "@keyframes cm-blink": {
    "0%": {},
    "50%": {
      visibility: "hidden"
    },
    "100%": {}
  },
  "@keyframes cm-blink2": {
    "0%": {},
    "50%": {
      visibility: "hidden"
    },
    "100%": {}
  },
  ".cm-cursor": {
    position: "absolute",
    borderLeft: "1.2px solid black",
    marginLeft: "-0.6px",
    pointerEvents: "none",
    display: "none"
  },
  "&dark .cm-cursor": {
    borderLeftColor: "#444"
  },
  "&.cm-focused .cm-cursor": {
    display: "block"
  },
  "&light .cm-activeLine": {
    backgroundColor: "#f3f9ff"
  },
  "&dark .cm-activeLine": {
    backgroundColor: "#223039"
  },
  "&light .cm-specialChar": {
    color: "red"
  },
  "&dark .cm-specialChar": {
    color: "#f78"
  },
  ".cm-tab": {
    display: "inline-block",
    overflow: "hidden",
    verticalAlign: "bottom"
  },
  ".cm-placeholder": {
    color: "#888",
    display: "inline-block"
  },
  ".cm-button": {
    verticalAlign: "middle",
    color: "inherit",
    fontSize: "70%",
    padding: ".2em 1em",
    borderRadius: "3px"
  },
  "&light .cm-button": {
    backgroundImage: "linear-gradient(#eff1f5, #d9d9df)",
    border: "1px solid #888",
    "&:active": {
      backgroundImage: "linear-gradient(#b4b4b4, #d0d3d6)"
    }
  },
  "&dark .cm-button": {
    backgroundImage: "linear-gradient(#393939, #111)",
    border: "1px solid #888",
    "&:active": {
      backgroundImage: "linear-gradient(#111, #333)"
    }
  },
  ".cm-textfield": {
    verticalAlign: "middle",
    color: "inherit",
    fontSize: "70%",
    border: "1px solid silver",
    padding: ".2em .5em"
  },
  "&light .cm-textfield": {
    backgroundColor: "white"
  },
  "&dark .cm-textfield": {
    border: "1px solid #555",
    backgroundColor: "inherit"
  }
}, lightDarkIDs);
var observeOptions = {
  childList: true,
  characterData: true,
  subtree: true,
  characterDataOldValue: true
}; // IE11 has very broken mutation observers, so we also listen to
// DOMCharacterDataModified there

var useCharData = browser.ie && browser.ie_version <= 11;

var DOMObserver = /*#__PURE__*/function () {
  function DOMObserver(view, onChange, onScrollChanged) {
    var _this26 = this;

    _classCallCheck(this, DOMObserver);

    this.view = view;
    this.onChange = onChange;
    this.onScrollChanged = onScrollChanged;
    this.active = false;
    this.ignoreSelection = new DOMSelection();
    this.delayedFlush = -1;
    this.queue = [];
    this.scrollTargets = [];
    this.intersection = null;
    this.intersecting = false; // Timeout for scheduling check of the parents that need scroll handlers

    this.parentCheck = -1;
    this.dom = view.contentDOM;
    this.observer = new MutationObserver(function (mutations) {
      var _iterator25 = _createForOfIteratorHelper(mutations),
          _step25;

      try {
        for (_iterator25.s(); !(_step25 = _iterator25.n()).done;) {
          var mut = _step25.value;

          _this26.queue.push(mut);
        } // IE11 will sometimes (on typing over a selection or
        // backspacing out a single character text node) call the
        // observer callback before actually updating the DOM.
        //
        // Unrelatedly, iOS Safari will, when ending a composition,
        // sometimes first clear it, deliver the mutations, and then
        // reinsert the finished text. CodeMirror's handling of the
        // deletion will prevent the reinsertion from happening,
        // breaking composition.

      } catch (err) {
        _iterator25.e(err);
      } finally {
        _iterator25.f();
      }

      if ((browser.ie && browser.ie_version <= 11 || browser.ios && view.composing) && mutations.some(function (m) {
        return m.type == "childList" && m.removedNodes.length || m.type == "characterData" && m.oldValue.length > m.target.nodeValue.length;
      })) _this26.flushSoon();else _this26.flush();
    });
    if (useCharData) this.onCharData = function (event) {
      _this26.queue.push({
        target: event.target,
        type: "characterData",
        oldValue: event.prevValue
      });

      _this26.flushSoon();
    };
    this.onSelectionChange = this.onSelectionChange.bind(this);
    this.start();
    this.onScroll = this.onScroll.bind(this);
    window.addEventListener("scroll", this.onScroll);

    if (typeof IntersectionObserver == "function") {
      this.intersection = new IntersectionObserver(function (entries) {
        if (_this26.parentCheck < 0) _this26.parentCheck = setTimeout(_this26.listenForScroll.bind(_this26), 1000);

        if (entries[entries.length - 1].intersectionRatio > 0 != _this26.intersecting) {
          _this26.intersecting = !_this26.intersecting;

          _this26.onScrollChanged(document.createEvent("Event"));
        }
      }, {});
      this.intersection.observe(this.dom);
    }

    this.listenForScroll();
  }

  _createClass(DOMObserver, [{
    key: "onScroll",
    value: function onScroll(e) {
      if (this.intersecting) {
        this.flush();
        this.onScrollChanged(e);
      }
    }
  }, {
    key: "onSelectionChange",
    value: function onSelectionChange(event) {
      var view = this.view,
          sel = getSelection(view.root);
      if (view.state.facet(editable) ? view.root.activeElement != this.dom : !hasSelection(view.dom, sel)) return;
      var context = sel.anchorNode && view.docView.nearest(sel.anchorNode);
      if (context && context.ignoreEvent(event)) return; // Deletions on IE11 fire their events in the wrong order, giving
      // us a selection change event before the DOM changes are
      // reported.
      // (Selection.isCollapsed isn't reliable on IE)

      if (browser.ie && browser.ie_version <= 11 && !view.state.selection.main.empty && sel.focusNode && isEquivalentPosition(sel.focusNode, sel.focusOffset, sel.anchorNode, sel.anchorOffset)) this.flushSoon();else this.flush();
    }
  }, {
    key: "listenForScroll",
    value: function listenForScroll() {
      this.parentCheck = -1;
      var i = 0,
          changed = null;

      for (var dom = this.dom; dom;) {
        if (dom.nodeType == 1) {
          if (!changed && i < this.scrollTargets.length && this.scrollTargets[i] == dom) i++;else if (!changed) changed = this.scrollTargets.slice(0, i);
          if (changed) changed.push(dom);
          dom = dom.parentNode;
        } else if (dom.nodeType == 11) {
          // Shadow root
          dom = dom.host;
        } else {
          break;
        }
      }

      if (i < this.scrollTargets.length && !changed) changed = this.scrollTargets.slice(0, i);

      if (changed) {
        var _iterator26 = _createForOfIteratorHelper(this.scrollTargets),
            _step26;

        try {
          for (_iterator26.s(); !(_step26 = _iterator26.n()).done;) {
            var _dom2 = _step26.value;

            _dom2.removeEventListener("scroll", this.onScroll);
          }
        } catch (err) {
          _iterator26.e(err);
        } finally {
          _iterator26.f();
        }

        var _iterator27 = _createForOfIteratorHelper(this.scrollTargets = changed),
            _step27;

        try {
          for (_iterator27.s(); !(_step27 = _iterator27.n()).done;) {
            var _dom3 = _step27.value;

            _dom3.addEventListener("scroll", this.onScroll);
          }
        } catch (err) {
          _iterator27.e(err);
        } finally {
          _iterator27.f();
        }
      }
    }
  }, {
    key: "ignore",
    value: function ignore(f) {
      if (!this.active) return f();

      try {
        this.stop();
        return f();
      } finally {
        this.start();
        this.clear();
      }
    }
  }, {
    key: "start",
    value: function start() {
      if (this.active) return;
      this.observer.observe(this.dom, observeOptions);
      this.dom.ownerDocument.addEventListener("selectionchange", this.onSelectionChange);
      if (useCharData) this.dom.addEventListener("DOMCharacterDataModified", this.onCharData);
      this.active = true;
    }
  }, {
    key: "stop",
    value: function stop() {
      if (!this.active) return;
      this.active = false;
      this.observer.disconnect();
      this.dom.ownerDocument.removeEventListener("selectionchange", this.onSelectionChange);
      if (useCharData) this.dom.removeEventListener("DOMCharacterDataModified", this.onCharData);
    }
  }, {
    key: "clearSelection",
    value: function clearSelection() {
      this.ignoreSelection.set(getSelection(this.view.root));
    } // Throw away any pending changes

  }, {
    key: "clear",
    value: function clear() {
      this.observer.takeRecords();
      this.queue.length = 0;
      this.clearSelection();
    }
  }, {
    key: "flushSoon",
    value: function flushSoon() {
      var _this27 = this;

      if (this.delayedFlush < 0) this.delayedFlush = window.setTimeout(function () {
        _this27.delayedFlush = -1;

        _this27.flush();
      }, 20);
    }
  }, {
    key: "forceFlush",
    value: function forceFlush() {
      if (this.delayedFlush >= 0) {
        window.clearTimeout(this.delayedFlush);
        this.delayedFlush = -1;
        this.flush();
      }
    } // Apply pending changes, if any

  }, {
    key: "flush",
    value: function flush() {
      var _this28 = this;

      if (this.delayedFlush >= 0) return;
      var records = this.queue;

      var _iterator28 = _createForOfIteratorHelper(this.observer.takeRecords()),
          _step28;

      try {
        for (_iterator28.s(); !(_step28 = _iterator28.n()).done;) {
          var mut = _step28.value;
          records.push(mut);
        }
      } catch (err) {
        _iterator28.e(err);
      } finally {
        _iterator28.f();
      }

      if (records.length) this.queue = [];
      var selection = getSelection(this.view.root);
      var newSel = !this.ignoreSelection.eq(selection) && hasSelection(this.dom, selection);
      if (records.length == 0 && !newSel) return;
      var from = -1,
          to = -1,
          typeOver = false;

      var _iterator29 = _createForOfIteratorHelper(records),
          _step29;

      try {
        for (_iterator29.s(); !(_step29 = _iterator29.n()).done;) {
          var record = _step29.value;
          var range = this.readMutation(record);
          if (!range) continue;
          if (range.typeOver) typeOver = true;

          if (from == -1) {
            from = range.from;
            to = range.to;
          } else {
            from = Math.min(range.from, from);
            to = Math.max(range.to, to);
          }
        }
      } catch (err) {
        _iterator29.e(err);
      } finally {
        _iterator29.f();
      }

      var startState = this.view.state;
      if (from > -1 || newSel) this.onChange(from, to, typeOver);

      if (this.view.state == startState) {
        // The view wasn't updated
        if (this.view.docView.dirty) {
          this.ignore(function () {
            return _this28.view.docView.sync();
          });
          this.view.docView.dirty = 0
          /* Not */
          ;
        }

        this.view.docView.updateSelection();
      }

      this.clearSelection();
    }
  }, {
    key: "readMutation",
    value: function readMutation(rec) {
      var cView = this.view.docView.nearest(rec.target);
      if (!cView || cView.ignoreMutation(rec)) return null;
      cView.markDirty();

      if (rec.type == "childList") {
        var childBefore = findChild(cView, rec.previousSibling || rec.target.previousSibling, -1);
        var childAfter = findChild(cView, rec.nextSibling || rec.target.nextSibling, 1);
        return {
          from: childBefore ? cView.posAfter(childBefore) : cView.posAtStart,
          to: childAfter ? cView.posBefore(childAfter) : cView.posAtEnd,
          typeOver: false
        };
      } else {
        // "characterData"
        return {
          from: cView.posAtStart,
          to: cView.posAtEnd,
          typeOver: rec.target.nodeValue == rec.oldValue
        };
      }
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.stop();
      if (this.intersection) this.intersection.disconnect();

      var _iterator30 = _createForOfIteratorHelper(this.scrollTargets),
          _step30;

      try {
        for (_iterator30.s(); !(_step30 = _iterator30.n()).done;) {
          var dom = _step30.value;
          dom.removeEventListener("scroll", this.onScroll);
        }
      } catch (err) {
        _iterator30.e(err);
      } finally {
        _iterator30.f();
      }

      window.removeEventListener("scroll", this.onScroll);
      clearTimeout(this.parentCheck);
    }
  }]);

  return DOMObserver;
}();

function findChild(cView, dom, dir) {
  while (dom) {
    var curView = ContentView.get(dom);
    if (curView && curView.parent == cView) return curView;
    var parent = dom.parentNode;
    dom = parent != cView.dom ? parent : dir > 0 ? dom.nextSibling : dom.previousSibling;
  }

  return null;
}

function applyDOMChange(view, start, end, typeOver) {
  var change, newSel;
  var sel = view.state.selection.main,
      bounds;

  if (start > -1 && (bounds = view.docView.domBoundsAround(start, end, 0))) {
    var _bounds = bounds,
        from = _bounds.from,
        to = _bounds.to;
    var selPoints = view.docView.impreciseHead || view.docView.impreciseAnchor ? [] : selectionPoints(view.contentDOM, view.root);
    var reader = new DOMReader(selPoints, view);
    reader.readRange(bounds.startDOM, bounds.endDOM);
    newSel = selectionFromPoints(selPoints, from);
    var preferredPos = sel.from,
        preferredSide = null; // Prefer anchoring to end when Backspace is pressed (or, on
    // Android, when something was deleted)

    if (view.inputState.lastKeyCode === 8 && view.inputState.lastKeyTime > Date.now() - 100 || browser.android && reader.text.length < to - from) {
      preferredPos = sel.to;
      preferredSide = "end";
    }

    var diff = findDiff(view.state.sliceDoc(from, to), reader.text, preferredPos - from, preferredSide);
    if (diff) change = {
      from: from + diff.from,
      to: from + diff.toA,
      insert: view.state.toText(reader.text.slice(diff.from, diff.toB))
    };
  } else if (view.hasFocus || !view.state.facet(editable)) {
    var domSel = getSelection(view.root);
    var _view$docView = view.docView,
        iHead = _view$docView.impreciseHead,
        iAnchor = _view$docView.impreciseAnchor;
    var head = iHead && iHead.node == domSel.focusNode && iHead.offset == domSel.focusOffset ? view.state.selection.main.head : view.docView.posFromDOM(domSel.focusNode, domSel.focusOffset);
    var anchor = iAnchor && iAnchor.node == domSel.anchorNode && iAnchor.offset == domSel.anchorOffset ? view.state.selection.main.anchor : selectionCollapsed(domSel) ? head : view.docView.posFromDOM(domSel.anchorNode, domSel.anchorOffset);
    if (head != sel.head || anchor != sel.anchor) newSel = _state.EditorSelection.single(anchor, head);
  }

  if (!change && !newSel) return; // Heuristic to notice typing over a selected character

  if (!change && typeOver && !sel.empty && newSel && newSel.main.empty) change = {
    from: sel.from,
    to: sel.to,
    insert: view.state.doc.slice(sel.from, sel.to)
  };

  if (change) {
    var startState = view.state; // Android browsers don't fire reasonable key events for enter,
    // backspace, or delete. So this detects changes that look like
    // they're caused by those keys, and reinterprets them as key
    // events.

    if (browser.android && (change.from == sel.from && change.to == sel.to && change.insert.length == 1 && change.insert.lines == 2 && dispatchKey(view, "Enter", 10) || change.from == sel.from - 1 && change.to == sel.to && change.insert.length == 0 && dispatchKey(view, "Backspace", 8) || change.from == sel.from && change.to == sel.to + 1 && change.insert.length == 0 && dispatchKey(view, "Delete", 46))) return;
    var text = change.insert.toString();
    if (view.state.facet(inputHandler).some(function (h) {
      return h(view, change.from, change.to, text);
    })) return;
    if (view.inputState.composing >= 0) view.inputState.composing++;
    var tr;

    if (change.from >= sel.from && change.to <= sel.to && change.to - change.from >= (sel.to - sel.from) / 3 && (!newSel || newSel.main.empty && newSel.main.from == change.from + change.insert.length)) {
      var before = sel.from < change.from ? startState.sliceDoc(sel.from, change.from) : "";
      var after = sel.to > change.to ? startState.sliceDoc(change.to, sel.to) : "";
      tr = startState.replaceSelection(view.state.toText(before + change.insert.sliceString(0, undefined, view.state.lineBreak) + after));
    } else {
      var changes = startState.changes(change);
      tr = {
        changes: changes,
        selection: newSel && !startState.selection.main.eq(newSel.main) && newSel.main.to <= changes.newLength ? startState.selection.replaceRange(newSel.main) : undefined
      };
    }

    view.dispatch(tr, {
      scrollIntoView: true,
      annotations: _state.Transaction.userEvent.of("input")
    });
  } else if (newSel && !newSel.main.eq(sel)) {
    var scrollIntoView = false,
        annotations;

    if (view.inputState.lastSelectionTime > Date.now() - 50) {
      if (view.inputState.lastSelectionOrigin == "keyboardselection") scrollIntoView = true;else annotations = _state.Transaction.userEvent.of(view.inputState.lastSelectionOrigin);
    }

    view.dispatch({
      selection: newSel,
      scrollIntoView: scrollIntoView,
      annotations: annotations
    });
  }
}

function findDiff(a, b, preferredPos, preferredSide) {
  var minLen = Math.min(a.length, b.length);
  var from = 0;

  while (from < minLen && a.charCodeAt(from) == b.charCodeAt(from)) {
    from++;
  }

  if (from == minLen && a.length == b.length) return null;
  var toA = a.length,
      toB = b.length;

  while (toA > 0 && toB > 0 && a.charCodeAt(toA - 1) == b.charCodeAt(toB - 1)) {
    toA--;
    toB--;
  }

  if (preferredSide == "end") {
    var adjust = Math.max(0, from - Math.min(toA, toB));
    preferredPos -= toA + adjust - from;
  }

  if (toA < from && a.length < b.length) {
    var move = preferredPos <= from && preferredPos >= toA ? from - preferredPos : 0;
    from -= move;
    toB = from + (toB - toA);
    toA = from;
  } else if (toB < from) {
    var _move = preferredPos <= from && preferredPos >= toB ? from - preferredPos : 0;

    from -= _move;
    toA = from + (toA - toB);
    toB = from;
  }

  return {
    from: from,
    toA: toA,
    toB: toB
  };
}

var DOMReader = /*#__PURE__*/function () {
  function DOMReader(points, view) {
    _classCallCheck(this, DOMReader);

    this.points = points;
    this.view = view;
    this.text = "";
    this.lineBreak = view.state.lineBreak;
  }

  _createClass(DOMReader, [{
    key: "readRange",
    value: function readRange(start, end) {
      if (!start) return;
      var parent = start.parentNode;

      for (var cur = start;;) {
        this.findPointBefore(parent, cur);
        this.readNode(cur);
        var next = cur.nextSibling;
        if (next == end) break;
        var view = ContentView.get(cur),
            nextView = ContentView.get(next);
        if ((view ? view.breakAfter : isBlockElement(cur)) || (nextView ? nextView.breakAfter : isBlockElement(next)) && !(cur.nodeName == "BR" && !cur.cmIgnore)) this.text += this.lineBreak;
        cur = next;
      }

      this.findPointBefore(parent, end);
    }
  }, {
    key: "readNode",
    value: function readNode(node) {
      if (node.cmIgnore) return;
      var view = ContentView.get(node);
      var fromView = view && view.overrideDOMText;
      var text;
      if (fromView != null) text = fromView.sliceString(0, undefined, this.lineBreak);else if (node.nodeType == 3) text = node.nodeValue;else if (node.nodeName == "BR") text = node.nextSibling ? this.lineBreak : "";else if (node.nodeType == 1) this.readRange(node.firstChild, null);

      if (text != null) {
        this.findPointIn(node, text.length);
        this.text += text; // Chrome inserts two newlines when pressing shift-enter at the
        // end of a line. This drops one of those.

        if (browser.chrome && this.view.inputState.lastKeyCode == 13 && !node.nextSibling && /\n\n$/.test(this.text)) this.text = this.text.slice(0, -1);
      }
    }
  }, {
    key: "findPointBefore",
    value: function findPointBefore(node, next) {
      var _iterator31 = _createForOfIteratorHelper(this.points),
          _step31;

      try {
        for (_iterator31.s(); !(_step31 = _iterator31.n()).done;) {
          var point = _step31.value;
          if (point.node == node && node.childNodes[point.offset] == next) point.pos = this.text.length;
        }
      } catch (err) {
        _iterator31.e(err);
      } finally {
        _iterator31.f();
      }
    }
  }, {
    key: "findPointIn",
    value: function findPointIn(node, maxLen) {
      var _iterator32 = _createForOfIteratorHelper(this.points),
          _step32;

      try {
        for (_iterator32.s(); !(_step32 = _iterator32.n()).done;) {
          var point = _step32.value;
          if (point.node == node) point.pos = this.text.length + Math.min(point.offset, maxLen);
        }
      } catch (err) {
        _iterator32.e(err);
      } finally {
        _iterator32.f();
      }
    }
  }]);

  return DOMReader;
}();

function isBlockElement(node) {
  return node.nodeType == 1 && /^(DIV|P|LI|UL|OL|BLOCKQUOTE|DD|DT|H\d|SECTION|PRE)$/.test(node.nodeName);
}

var DOMPoint = function DOMPoint(node, offset) {
  _classCallCheck(this, DOMPoint);

  this.node = node;
  this.offset = offset;
  this.pos = -1;
};

function selectionPoints(dom, root) {
  var result = [];
  if (root.activeElement != dom) return result;

  var _getSelection = getSelection(root),
      anchorNode = _getSelection.anchorNode,
      anchorOffset = _getSelection.anchorOffset,
      focusNode = _getSelection.focusNode,
      focusOffset = _getSelection.focusOffset;

  if (anchorNode) {
    result.push(new DOMPoint(anchorNode, anchorOffset));
    if (focusNode != anchorNode || focusOffset != anchorOffset) result.push(new DOMPoint(focusNode, focusOffset));
  }

  return result;
}

function selectionFromPoints(points, base) {
  if (points.length == 0) return null;
  var anchor = points[0].pos,
      head = points.length == 2 ? points[1].pos : anchor;
  return anchor > -1 && head > -1 ? _state.EditorSelection.single(anchor + base, head + base) : null;
}

function dispatchKey(view, name, code) {
  var options = {
    key: name,
    code: name,
    keyCode: code,
    which: code,
    cancelable: true
  };
  var down = new KeyboardEvent("keydown", options);
  view.contentDOM.dispatchEvent(down);
  var up = new KeyboardEvent("keyup", options);
  view.contentDOM.dispatchEvent(up);
  return down.defaultPrevented || up.defaultPrevented;
} // The editor's update state machine looks something like this:
//
//     Idle ??? Updating ??? Idle (unchecked) ??? Measuring ??? Idle
//                                         ???      ???
//                                         Updating (measure)
//
// The difference between 'Idle' and 'Idle (unchecked)' lies in
// whether a layout check has been scheduled. A regular update through
// the `update` method updates the DOM in a write-only fashion, and
// relies on a check (scheduled with `requestAnimationFrame`) to make
// sure everything is where it should be and the viewport covers the
// visible code. That check continues to measure and then optionally
// update until it reaches a coherent state.
/// An editor view represents the editor's user interface. It holds
/// the editable DOM surface, and possibly other elements such as the
/// line number gutter. It handles events and dispatches state
/// transactions for editing actions.


var EditorView = /*#__PURE__*/function () {
  /// Construct a new view. You'll usually want to put `view.dom` into
  /// your document after creating a view, so that the user can see
  /// it.
  function EditorView() {
    var _this29 = this;

    var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, EditorView);

    this.plugins = [];
    this.editorAttrs = {};
    this.contentAttrs = {};
    this.bidiCache = []; /// @internal

    this.updateState = 2
    /* Updating */
    ; /// @internal

    this.measureScheduled = -1; /// @internal

    this.measureRequests = [];
    this.contentDOM = document.createElement("div");
    this.scrollDOM = document.createElement("div");
    this.scrollDOM.tabIndex = -1;
    this.scrollDOM.className = "cm-scroller";
    this.scrollDOM.appendChild(this.contentDOM);
    this.announceDOM = document.createElement("div");
    this.announceDOM.style.cssText = "position: absolute; top: -10000px";
    this.announceDOM.setAttribute("aria-live", "polite");
    this.dom = document.createElement("div");
    this.dom.appendChild(this.announceDOM);
    this.dom.appendChild(this.scrollDOM);

    this._dispatch = config.dispatch || function (tr) {
      return _this29.update([tr]);
    };

    this.dispatch = this.dispatch.bind(this);
    this.root = config.root || document;
    this.viewState = new ViewState(config.state || _state.EditorState.create());
    this.plugins = this.state.facet(viewPlugin).map(function (spec) {
      return new PluginInstance(spec).update(_this29);
    });
    this.observer = new DOMObserver(this, function (from, to, typeOver) {
      applyDOMChange(_this29, from, to, typeOver);
    }, function (event) {
      _this29.inputState.runScrollHandlers(_this29, event);

      _this29.measure();
    });
    this.inputState = new InputState(this);
    this.docView = new DocView(this);
    this.mountStyles();
    this.updateAttrs();
    this.updateState = 0
    /* Idle */
    ;
    ensureGlobalHandler();
    this.requestMeasure();
    if (config.parent) config.parent.appendChild(this.dom);
  } /// The current editor state.


  _createClass(EditorView, [{
    key: "state",
    get: function get() {
      return this.viewState.state;
    } /// To be able to display large documents without consuming too much
    /// memory or overloading the browser, CodeMirror only draws the
    /// code that is visible (plus a margin around it) to the DOM. This
    /// property tells you the extent of the current drawn viewport, in
    /// document positions.

  }, {
    key: "viewport",
    get: function get() {
      return this.viewState.viewport;
    } /// When there are, for example, large collapsed ranges in the
    /// viewport, its size can be a lot bigger than the actual visible
    /// content. Thus, if you are doing something like styling the
    /// content in the viewport, it is preferable to only do so for
    /// these ranges, which are the subset of the viewport that is
    /// actually drawn.

  }, {
    key: "visibleRanges",
    get: function get() {
      return this.viewState.visibleRanges;
    } /// Returns false when the editor is entirely scrolled out of view
    /// or otherwise hidden.

  }, {
    key: "inView",
    get: function get() {
      return this.viewState.inView;
    } /// Indicates whether the user is currently composing text via
    /// [IME](https://developer.mozilla.org/en-US/docs/Mozilla/IME_handling_guide).

  }, {
    key: "composing",
    get: function get() {
      return this.inputState.composing > 0;
    }
  }, {
    key: "dispatch",
    value: function dispatch() {
      var _this$state;

      this._dispatch(arguments.length == 1 && (arguments.length <= 0 ? undefined : arguments[0]) instanceof _state.Transaction ? arguments.length <= 0 ? undefined : arguments[0] : (_this$state = this.state).update.apply(_this$state, arguments));
    } /// Update the view for the given array of transactions. This will
    /// update the visible document and selection to match the state
    /// produced by the transactions, and notify view plugins of the
    /// change. You should usually call
    /// [`dispatch`](#view.EditorView.dispatch) instead, which uses this
    /// as a primitive.

  }, {
    key: "update",
    value: function update(transactions) {
      if (this.updateState != 0
      /* Idle */
      ) throw new Error("Calls to EditorView.update are not allowed while an update is in progress");
      var redrawn = false,
          update;
      var state = this.state;

      var _iterator33 = _createForOfIteratorHelper(transactions),
          _step33;

      try {
        for (_iterator33.s(); !(_step33 = _iterator33.n()).done;) {
          var tr = _step33.value;
          if (tr.startState != state) throw new RangeError("Trying to update state with a transaction that doesn't start from the previous state.");
          state = tr.state;
        } // When the phrases change, redraw the editor

      } catch (err) {
        _iterator33.e(err);
      } finally {
        _iterator33.f();
      }

      if (state.facet(_state.EditorState.phrases) != this.state.facet(_state.EditorState.phrases)) return this.setState(state);
      update = new ViewUpdate(this, state, transactions);

      try {
        this.updateState = 2
        /* Updating */
        ;

        var _scrollTo = transactions.some(function (tr) {
          return tr.scrollIntoView;
        }) ? state.selection.main : null;

        this.viewState.update(update, _scrollTo);
        this.bidiCache = CachedOrder.update(this.bidiCache, update.changes);
        if (!update.empty) this.updatePlugins(update);
        redrawn = this.docView.update(update);
        if (this.state.facet(styleModule) != this.styleModules) this.mountStyles();
        this.updateAttrs();
        this.showAnnouncements(transactions);
      } finally {
        this.updateState = 0
        /* Idle */
        ;
      }

      if (redrawn || scrollTo || this.viewState.mustEnforceCursorAssoc) this.requestMeasure();

      if (!update.empty) {
        var _iterator34 = _createForOfIteratorHelper(this.state.facet(updateListener)),
            _step34;

        try {
          for (_iterator34.s(); !(_step34 = _iterator34.n()).done;) {
            var listener = _step34.value;
            listener(update);
          }
        } catch (err) {
          _iterator34.e(err);
        } finally {
          _iterator34.f();
        }
      }
    } /// Reset the view to the given state. (This will cause the entire
    /// document to be redrawn and all view plugins to be reinitialized,
    /// so you should probably only use it when the new state isn't
    /// derived from the old state. Otherwise, use
    /// [`dispatch`](#view.EditorView.dispatch) instead.)

  }, {
    key: "setState",
    value: function setState(newState) {
      var _this30 = this;

      if (this.updateState != 0
      /* Idle */
      ) throw new Error("Calls to EditorView.setState are not allowed while an update is in progress");
      this.updateState = 2
      /* Updating */
      ;

      try {
        var _iterator35 = _createForOfIteratorHelper(this.plugins),
            _step35;

        try {
          for (_iterator35.s(); !(_step35 = _iterator35.n()).done;) {
            var plugin = _step35.value;
            plugin.destroy(this);
          }
        } catch (err) {
          _iterator35.e(err);
        } finally {
          _iterator35.f();
        }

        this.viewState = new ViewState(newState);
        this.plugins = newState.facet(viewPlugin).map(function (spec) {
          return new PluginInstance(spec).update(_this30);
        });
        this.docView = new DocView(this);
        this.inputState.ensureHandlers(this);
        this.mountStyles();
        this.updateAttrs();
        this.bidiCache = [];
      } finally {
        this.updateState = 0
        /* Idle */
        ;
      }

      this.requestMeasure();
    }
  }, {
    key: "updatePlugins",
    value: function updatePlugins(update) {
      var prevSpecs = update.startState.facet(viewPlugin),
          specs = update.state.facet(viewPlugin);

      if (prevSpecs != specs) {
        var newPlugins = [];

        var _iterator36 = _createForOfIteratorHelper(specs),
            _step36;

        try {
          for (_iterator36.s(); !(_step36 = _iterator36.n()).done;) {
            var spec = _step36.value;
            var found = prevSpecs.indexOf(spec);

            if (found < 0) {
              newPlugins.push(new PluginInstance(spec));
            } else {
              var plugin = this.plugins[found];
              plugin.mustUpdate = update;
              newPlugins.push(plugin);
            }
          }
        } catch (err) {
          _iterator36.e(err);
        } finally {
          _iterator36.f();
        }

        var _iterator37 = _createForOfIteratorHelper(this.plugins),
            _step37;

        try {
          for (_iterator37.s(); !(_step37 = _iterator37.n()).done;) {
            var _plugin3 = _step37.value;
            if (_plugin3.mustUpdate != update) _plugin3.destroy(this);
          }
        } catch (err) {
          _iterator37.e(err);
        } finally {
          _iterator37.f();
        }

        this.plugins = newPlugins;
        this.inputState.ensureHandlers(this);
      } else {
        var _iterator38 = _createForOfIteratorHelper(this.plugins),
            _step38;

        try {
          for (_iterator38.s(); !(_step38 = _iterator38.n()).done;) {
            var p = _step38.value;
            p.mustUpdate = update;
          }
        } catch (err) {
          _iterator38.e(err);
        } finally {
          _iterator38.f();
        }
      }

      for (var i = 0; i < this.plugins.length; i++) {
        this.plugins[i] = this.plugins[i].update(this);
      }
    } /// @internal

  }, {
    key: "measure",
    value: function measure() {
      var _this31 = this;

      if (this.measureScheduled > -1) cancelAnimationFrame(this.measureScheduled);
      this.measureScheduled = -1; // Prevent requestMeasure calls from scheduling another animation frame

      var updated = null;

      try {
        for (var i = 0;; i++) {
          this.updateState = 1
          /* Measuring */
          ;
          var changed = this.viewState.measure(this.docView, i > 0);
          var measuring = this.measureRequests;
          if (!changed && !measuring.length && this.viewState.scrollTo == null) break;
          this.measureRequests = [];

          if (i > 5) {
            console.warn("Viewport failed to stabilize");
            break;
          }

          var measured = measuring.map(function (m) {
            try {
              return m.read(_this31);
            } catch (e) {
              logException(_this31.state, e);
              return BadMeasure;
            }
          });
          var update = new ViewUpdate(this, this.state);
          update.flags |= changed;
          if (!updated) updated = update;else updated.flags |= changed;
          this.updateState = 2
          /* Updating */
          ;
          if (!update.empty) this.updatePlugins(update);
          this.updateAttrs();
          if (changed) this.docView.update(update);

          for (var _i8 = 0; _i8 < measuring.length; _i8++) {
            if (measured[_i8] != BadMeasure) {
              try {
                measuring[_i8].write(measured[_i8], this);
              } catch (e) {
                logException(this.state, e);
              }
            }
          }

          if (this.viewState.scrollTo) {
            this.docView.scrollPosIntoView(this.viewState.scrollTo.head, this.viewState.scrollTo.assoc);
            this.viewState.scrollTo = null;
          }

          if (!(changed & 4
          /* Viewport */
          ) && this.measureRequests.length == 0) break;
        }
      } finally {
        this.updateState = 0
        /* Idle */
        ;
      }

      this.measureScheduled = -1;

      if (updated && !updated.empty) {
        var _iterator39 = _createForOfIteratorHelper(this.state.facet(updateListener)),
            _step39;

        try {
          for (_iterator39.s(); !(_step39 = _iterator39.n()).done;) {
            var listener = _step39.value;
            listener(updated);
          }
        } catch (err) {
          _iterator39.e(err);
        } finally {
          _iterator39.f();
        }
      }
    } /// Get the CSS classes for the currently active editor themes.

  }, {
    key: "themeClasses",
    get: function get() {
      return baseThemeID + " " + (this.state.facet(darkTheme) ? baseDarkID : baseLightID) + " " + this.state.facet(_theme);
    }
  }, {
    key: "updateAttrs",
    value: function updateAttrs() {
      var editorAttrs = combineAttrs(this.state.facet(editorAttributes), {
        "class": "cm-wrap" + (this.hasFocus ? " cm-focused " : " ") + this.themeClasses
      });

      _updateAttrs(this.dom, this.editorAttrs, editorAttrs);

      this.editorAttrs = editorAttrs;
      var contentAttrs = combineAttrs(this.state.facet(contentAttributes), {
        spellcheck: "false",
        contenteditable: String(this.state.facet(editable)),
        "class": "cm-content",
        style: "".concat(browser.tabSize, ": ").concat(this.state.tabSize),
        role: "textbox",
        "aria-multiline": "true"
      });

      _updateAttrs(this.contentDOM, this.contentAttrs, contentAttrs);

      this.contentAttrs = contentAttrs;
    }
  }, {
    key: "showAnnouncements",
    value: function showAnnouncements(trs) {
      var first = true;

      var _iterator40 = _createForOfIteratorHelper(trs),
          _step40;

      try {
        for (_iterator40.s(); !(_step40 = _iterator40.n()).done;) {
          var tr = _step40.value;

          var _iterator41 = _createForOfIteratorHelper(tr.effects),
              _step41;

          try {
            for (_iterator41.s(); !(_step41 = _iterator41.n()).done;) {
              var effect = _step41.value;

              if (effect.is(EditorView.announce)) {
                if (first) this.announceDOM.textContent = "";
                first = false;
                var div = this.announceDOM.appendChild(document.createElement("div"));
                div.textContent = effect.value;
              }
            }
          } catch (err) {
            _iterator41.e(err);
          } finally {
            _iterator41.f();
          }
        }
      } catch (err) {
        _iterator40.e(err);
      } finally {
        _iterator40.f();
      }
    }
  }, {
    key: "mountStyles",
    value: function mountStyles() {
      this.styleModules = this.state.facet(styleModule);

      _styleMod.StyleModule.mount(this.root, this.styleModules.concat(baseTheme).reverse());
    }
  }, {
    key: "readMeasured",
    value: function readMeasured() {
      if (this.updateState == 2
      /* Updating */
      ) throw new Error("Reading the editor layout isn't allowed during an update");
      if (this.updateState == 0
      /* Idle */
      && this.measureScheduled > -1) this.measure();
    } /// Make sure plugins get a chance to measure the DOM layout before
    /// the next frame. Calling this is preferable reading DOM layout
    /// directly from, for example, an event handler, because it'll make
    /// sure measuring and drawing done by other components is
    /// synchronized, avoiding unnecessary DOM layout computations.

  }, {
    key: "requestMeasure",
    value: function requestMeasure(request) {
      var _this32 = this;

      if (this.measureScheduled < 0) this.measureScheduled = requestAnimationFrame(function () {
        return _this32.measure();
      });

      if (request) {
        if (request.key != null) for (var i = 0; i < this.measureRequests.length; i++) {
          if (this.measureRequests[i].key === request.key) {
            this.measureRequests[i] = request;
            return;
          }
        }
        this.measureRequests.push(request);
      }
    } /// Collect all values provided by the active plugins for a given
    /// field.

  }, {
    key: "pluginField",
    value: function pluginField(field) {
      var result = [];

      var _iterator42 = _createForOfIteratorHelper(this.plugins),
          _step42;

      try {
        for (_iterator42.s(); !(_step42 = _iterator42.n()).done;) {
          var plugin = _step42.value;
          plugin.update(this).takeField(field, result);
        }
      } catch (err) {
        _iterator42.e(err);
      } finally {
        _iterator42.f();
      }

      return result;
    } /// Get the value of a specific plugin, if present. Note that
    /// plugins that crash can be dropped from a view, so even when you
    /// know you registered a given plugin, it is recommended to check
    /// the return value of this method.

  }, {
    key: "plugin",
    value: function plugin(_plugin2) {
      var _iterator43 = _createForOfIteratorHelper(this.plugins),
          _step43;

      try {
        for (_iterator43.s(); !(_step43 = _iterator43.n()).done;) {
          var inst = _step43.value;
          if (inst.spec == _plugin2) return inst.update(this).value;
        }
      } catch (err) {
        _iterator43.e(err);
      } finally {
        _iterator43.f();
      }

      return null;
    } /// Find the line or block widget at the given vertical position.
    /// `editorTop`, if given, provides the vertical position of the top
    /// of the editor. It defaults to the editor's screen position
    /// (which will force a DOM layout). You can explicitly pass 0 to
    /// use editor-relative offsets.

  }, {
    key: "blockAtHeight",
    value: function blockAtHeight(height, editorTop) {
      this.readMeasured();
      return this.viewState.blockAtHeight(height, ensureTop(editorTop, this.contentDOM));
    } /// Find information for the visual line (see
    /// [`visualLineAt`](#view.EditorView.visualLineAt)) at the given
    /// vertical position. The resulting block info might hold another
    /// array of block info structs in its `type` field if this line
    /// consists of more than one block.
    ///
    /// Heights are interpreted relative to the given `editorTop`
    /// position. When not given, the top position of the editor's
    /// [content element](#view.EditorView.contentDOM) is taken.

  }, {
    key: "visualLineAtHeight",
    value: function visualLineAtHeight(height, editorTop) {
      this.readMeasured();
      return this.viewState.lineAtHeight(height, ensureTop(editorTop, this.contentDOM));
    } /// Iterate over the height information of the visual lines in the
    /// viewport.

  }, {
    key: "viewportLines",
    value: function viewportLines(f, editorTop) {
      var _this$viewport = this.viewport,
          from = _this$viewport.from,
          to = _this$viewport.to;
      this.viewState.forEachLine(from, to, f, ensureTop(editorTop, this.contentDOM));
    } /// Find the extent and height of the visual line (the content shown
    /// in the editor as a line, which may be smaller than a document
    /// line when broken up by block widgets, or bigger than a document
    /// line when line breaks are covered by replaced decorations) at
    /// the given position.
    ///
    /// Vertical positions are computed relative to the `editorTop`
    /// argument, which defaults to 0 for this method. You can pass
    /// `view.contentDOM.getBoundingClientRect().top` here to get screen
    /// coordinates.

  }, {
    key: "visualLineAt",
    value: function visualLineAt(pos) {
      var editorTop = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      return this.viewState.lineAt(pos, editorTop);
    } /// The editor's total content height.

  }, {
    key: "contentHeight",
    get: function get() {
      return this.viewState.contentHeight;
    } /// Move a cursor position by [grapheme
    /// cluster](#text.findClusterBreak). `forward` determines whether
    /// the motion is away from the line start, or towards it. Motion in
    /// bidirectional text is in visual order, in the editor's [text
    /// direction](#view.EditorView.textDirection). When the start
    /// position was the last one on the line, the returned position
    /// will be across the line break. If there is no further line, the
    /// original position is returned.
    ///
    /// By default, this method moves over a single cluster. The
    /// optional `by` argument can be used to move across more. It will
    /// be called with the first cluster as argument, and should return
    /// a predicate that determines, for each subsequent cluster,
    /// whether it should also be moved over.

  }, {
    key: "moveByChar",
    value: function moveByChar(start, forward, by) {
      return _moveByChar(this, start, forward, by);
    } /// Move a cursor position across the next group of either
    /// [letters](#state.EditorState.charCategorizer) or non-letter
    /// non-whitespace characters.

  }, {
    key: "moveByGroup",
    value: function moveByGroup(start, forward) {
      var _this33 = this;

      return _moveByChar(this, start, forward, function (initial) {
        return byGroup(_this33, start.head, initial);
      });
    } /// Move to the next line boundary in the given direction. If
    /// `includeWrap` is true, line wrapping is on, and there is a
    /// further wrap point on the current line, the wrap point will be
    /// returned. Otherwise this function will return the start or end
    /// of the line.

  }, {
    key: "moveToLineBoundary",
    value: function moveToLineBoundary(start, forward) {
      var includeWrap = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      return _moveToLineBoundary(this, start, forward, includeWrap);
    } /// Move a cursor position vertically. When `distance` isn't given,
    /// it defaults to moving to the next line (including wrapped
    /// lines). Otherwise, `distance` should provide a positive distance
    /// in pixels.
    ///
    /// When `start` has a
    /// [`goalColumn`](#state.SelectionRange.goalColumn), the vertical
    /// motion will use that as a target horizontal position. Otherwise,
    /// the cursor's own horizontal position is used. The returned
    /// cursor will have its goal column set to whichever column was
    /// used.

  }, {
    key: "moveVertically",
    value: function moveVertically(start, forward, distance) {
      return _moveVertically(this, start, forward, distance);
    } /// Scroll the given document position into view.

  }, {
    key: "scrollPosIntoView",
    value: function scrollPosIntoView(pos) {
      this.viewState.scrollTo = _state.EditorSelection.cursor(pos);
      this.requestMeasure();
    } /// Find the DOM parent node and offset (child offset if `node` is
    /// an element, character offset when it is a text node) at the
    /// given document position.

  }, {
    key: "domAtPos",
    value: function domAtPos(pos) {
      return this.docView.domAtPos(pos);
    } /// Find the document position at the given DOM node. Can be useful
    /// for associating positions with DOM events. Will raise an error
    /// when `node` isn't part of the editor content.

  }, {
    key: "posAtDOM",
    value: function posAtDOM(node) {
      var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      return this.docView.posFromDOM(node, offset);
    } /// Get the document position at the given screen coordinates.
    /// Returns null if no valid position could be found.

  }, {
    key: "posAtCoords",
    value: function posAtCoords(coords) {
      this.readMeasured();
      return _posAtCoords(this, coords);
    } /// Get the screen coordinates at the given document position.
    /// `side` determines whether the coordinates are based on the
    /// element before (-1) or after (1) the position (if no element is
    /// available on the given side, the method will transparently use
    /// another strategy to get reasonable coordinates).

  }, {
    key: "coordsAtPos",
    value: function coordsAtPos(pos) {
      var side = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      this.readMeasured();
      var rect = this.docView.coordsAt(pos, side);
      if (!rect || rect.left == rect.right) return rect;
      var line = this.state.doc.lineAt(pos),
          order = this.bidiSpans(line);
      var span = order[BidiSpan.find(order, pos - line.from, -1, side)];
      return flattenRect(rect, span.dir == Direction.LTR == side > 0);
    } /// The default width of a character in the editor. May not
    /// accurately reflect the width of all characters (given variable
    /// width fonts or styling of invididual ranges).

  }, {
    key: "defaultCharacterWidth",
    get: function get() {
      return this.viewState.heightOracle.charWidth;
    } /// The default height of a line in the editor. May not be accurate
    /// for all lines.

  }, {
    key: "defaultLineHeight",
    get: function get() {
      return this.viewState.heightOracle.lineHeight;
    } /// The text direction
    /// ([`direction`](https://developer.mozilla.org/en-US/docs/Web/CSS/direction)
    /// CSS property) of the editor.

  }, {
    key: "textDirection",
    get: function get() {
      return this.viewState.heightOracle.direction;
    } /// Whether this editor [wraps lines](#view.EditorView.lineWrapping)
    /// (as determined by the
    /// [`white-space`](https://developer.mozilla.org/en-US/docs/Web/CSS/white-space)
    /// CSS property of its content element).

  }, {
    key: "lineWrapping",
    get: function get() {
      return this.viewState.heightOracle.lineWrapping;
    } /// Returns the bidirectional text structure of the given line
    /// (which should be in the current document) as an array of span
    /// objects. The order of these spans matches the [text
    /// direction](#view.EditorView.textDirection)???if that is
    /// left-to-right, the leftmost spans come first, otherwise the
    /// rightmost spans come first.

  }, {
    key: "bidiSpans",
    value: function bidiSpans(line) {
      if (line.length > MaxBidiLine) return trivialOrder(line.length);
      var dir = this.textDirection;

      var _iterator44 = _createForOfIteratorHelper(this.bidiCache),
          _step44;

      try {
        for (_iterator44.s(); !(_step44 = _iterator44.n()).done;) {
          var entry = _step44.value;
          if (entry.from == line.from && entry.dir == dir) return entry.order;
        }
      } catch (err) {
        _iterator44.e(err);
      } finally {
        _iterator44.f();
      }

      var order = computeOrder(line.text, this.textDirection);
      this.bidiCache.push(new CachedOrder(line.from, line.to, dir, order));
      return order;
    } /// Check whether the editor has focus.

  }, {
    key: "hasFocus",
    get: function get() {
      return document.hasFocus() && this.root.activeElement == this.contentDOM;
    } /// Put focus on the editor.

  }, {
    key: "focus",
    value: function focus() {
      var _this34 = this;

      this.observer.ignore(function () {
        focusPreventScroll(_this34.contentDOM);

        _this34.docView.updateSelection();
      });
    } /// Clean up this editor view, removing its element from the
    /// document, unregistering event handlers, and notifying
    /// plugins. The view instance can no longer be used after
    /// calling this.

  }, {
    key: "destroy",
    value: function destroy() {
      var _iterator45 = _createForOfIteratorHelper(this.plugins),
          _step45;

      try {
        for (_iterator45.s(); !(_step45 = _iterator45.n()).done;) {
          var plugin = _step45.value;
          plugin.destroy(this);
        }
      } catch (err) {
        _iterator45.e(err);
      } finally {
        _iterator45.f();
      }

      this.inputState.destroy();
      this.dom.remove();
      this.observer.destroy();
      if (this.measureScheduled > -1) cancelAnimationFrame(this.measureScheduled);
    } /// Facet that can be used to add DOM event handlers. The value
    /// should be an object mapping event names to handler functions. The
    /// first such function to return true will be assumed to have handled
    /// that event, and no other handlers or built-in behavior will be
    /// activated for it.
    /// These are registered on the [content
    /// element](#view.EditorView.contentDOM), except for `scroll`
    /// handlers, which will be called any time the editor's [scroll
    /// element](#view.EditorView.scrollDOM) or one of its parent nodes
    /// is scrolled.

  }], [{
    key: "domEventHandlers",
    value: function domEventHandlers(handlers) {
      return ViewPlugin.define(function () {
        return {};
      }, {
        eventHandlers: handlers
      });
    } /// Create a theme extension. The first argument can be a
    /// [`style-mod`](https://github.com/marijnh/style-mod#documentation)
    /// style spec providing the styles for the theme. These will be
    /// prefixed with a generated class for the style.
    ///
    /// Because the selectors will be prefixed with a scope class, rule
    /// that directly match the editor's [wrapper
    /// element](#view.EditorView.dom)???to which the scope class will be
    /// added???need to be explicitly differentiated by adding an `&` to
    /// the selector for that element???for example
    /// `&.cm-focused`.
    ///
    /// When `dark` is set to true, the theme will be marked as dark,
    /// which will cause the `&dark` rules from [base
    /// themes](#view.EditorView^baseTheme) to be used (as opposed to
    /// `&light` when a light theme is active).

  }, {
    key: "theme",
    value: function theme(spec, options) {
      var prefix = _styleMod.StyleModule.newName();

      var result = [_theme.of(prefix), styleModule.of(buildTheme(".".concat(prefix), spec))];
      if (options && options.dark) result.push(darkTheme.of(true));
      return result;
    } /// Create an extension that adds styles to the base theme. Like
    /// with [`theme`](#view.EditorView^theme), use `&` to indicate the
    /// place of the editor wrapper element when directly targeting
    /// that. You can also use `&dark` or `&light` instead to only
    /// target editors with a dark or light theme.

  }, {
    key: "baseTheme",
    value: function baseTheme(spec) {
      return _state.Prec.fallback(styleModule.of(buildTheme("." + baseThemeID, spec, lightDarkIDs)));
    }
  }]);

  return EditorView;
}(); /// Facet to add a [style
/// module](https://github.com/marijnh/style-mod#documentation) to
/// an editor view. The view will ensure that the module is
/// mounted in its [document
/// root](#view.EditorView.constructor^config.root).


exports.EditorView = EditorView;
EditorView.styleModule = styleModule; /// An input handler can override the way changes to the editable
/// DOM content are handled. Handlers are passed the document
/// positions between which the change was found, and the new
/// content. When one returns true, no further input handlers are
/// called and the default behavior is prevented.

EditorView.inputHandler = inputHandler; /// Allows you to provide a function that should be called when the
/// library catches an exception from an extension (mostly from view
/// plugins, but may be used by other extensions to route exceptions
/// from user-code-provided callbacks). This is mostly useful for
/// debugging and logging. See [`logException`](#view.logException).

EditorView.exceptionSink = exceptionSink; /// A facet that can be used to register a function to be called
/// every time the view updates.

EditorView.updateListener = updateListener; /// Facet that controls whether the editor content is editable. When
/// its highest-precedence value is `false`, editing is disabled,
/// and the content element will no longer have its
/// `contenteditable` attribute set to `true`. (Note that this
/// doesn't affect API calls that change the editor content, even
/// when those are bound to keys or buttons.)

EditorView.editable = editable; /// Allows you to influence the way mouse selection happens. The
/// functions in this facet will be called for a `mousedown` event
/// on the editor, and can return an object that overrides the way a
/// selection is computed from that mouse click or drag.

EditorView.mouseSelectionStyle = mouseSelectionStyle; /// Facet used to configure whether a given selection drag event
/// should move or copy the selection. The given predicate will be
/// called with the `mousedown` event, and can return `true` when
/// the drag should move the content.

EditorView.dragMovesSelection = dragMovesSelection$1; /// Facet used to configure whether a given selecting click adds
/// a new range to the existing selection or replaces it entirely.

EditorView.clickAddsSelectionRange = clickAddsSelectionRange; /// A facet that determines which [decorations](#view.Decoration)
/// are shown in the view. See also [view
/// plugins](#view.EditorView^decorations), which have a separate
/// mechanism for providing decorations.

EditorView.decorations = decorations; /// Facet that provides additional DOM attributes for the editor's
/// editable DOM element.

EditorView.contentAttributes = contentAttributes; /// Facet that provides DOM attributes for the editor's outer
/// element.

EditorView.editorAttributes = editorAttributes; /// An extension that enables line wrapping in the editor (by
/// setting CSS `white-space` to `pre-wrap` in the content).

EditorView.lineWrapping = EditorView.contentAttributes.of({
  "class": "cm-lineWrapping"
}); /// State effect used to include screen reader announcements in a
/// transaction. These will be added to the DOM in a visually hidden
/// element with `aria-live="polite"` set, and should be used to
/// describe effects that are visually obvious but may not be
/// noticed by screen reader users (such as moving to the next
/// search match).

EditorView.announce = _state.StateEffect.define(); // Maximum line length for which we compute accurate bidi info

var MaxBidiLine = 4096;

function ensureTop(given, dom) {
  return given == null ? dom.getBoundingClientRect().top : given;
}

var resizeDebounce = -1;

function ensureGlobalHandler() {
  window.addEventListener("resize", function () {
    if (resizeDebounce == -1) resizeDebounce = setTimeout(handleResize, 50);
  });
}

function handleResize() {
  resizeDebounce = -1;
  var found = document.querySelectorAll(".cm-content");

  for (var i = 0; i < found.length; i++) {
    var docView = ContentView.get(found[i]);
    if (docView) docView.editorView.requestMeasure();
  }
}

var BadMeasure = {};

var CachedOrder = /*#__PURE__*/function () {
  function CachedOrder(from, to, dir, order) {
    _classCallCheck(this, CachedOrder);

    this.from = from;
    this.to = to;
    this.dir = dir;
    this.order = order;
  }

  _createClass(CachedOrder, null, [{
    key: "update",
    value: function update(cache, changes) {
      if (changes.empty) return cache;
      var result = [],
          lastDir = cache.length ? cache[cache.length - 1].dir : Direction.LTR;

      for (var i = Math.max(0, cache.length - 10); i < cache.length; i++) {
        var entry = cache[i];
        if (entry.dir == lastDir && !changes.touchesRange(entry.from, entry.to)) result.push(new CachedOrder(changes.mapPos(entry.from, 1), changes.mapPos(entry.to, -1), entry.dir, entry.order));
      }

      return result;
    }
  }]);

  return CachedOrder;
}();

var currentPlatform = typeof navigator == "undefined" ? "key" : /Mac/.test(navigator.platform) ? "mac" : /Win/.test(navigator.platform) ? "win" : /Linux|X11/.test(navigator.platform) ? "linux" : "key";

function normalizeKeyName(name, platform) {
  var parts = name.split(/-(?!$)/);
  var result = parts[parts.length - 1];
  if (result == "Space") result = " ";
  var alt, ctrl, shift, meta;

  for (var i = 0; i < parts.length - 1; ++i) {
    var mod = parts[i];
    if (/^(cmd|meta|m)$/i.test(mod)) meta = true;else if (/^a(lt)?$/i.test(mod)) alt = true;else if (/^(c|ctrl|control)$/i.test(mod)) ctrl = true;else if (/^s(hift)?$/i.test(mod)) shift = true;else if (/^mod$/i.test(mod)) {
      if (platform == "mac") meta = true;else ctrl = true;
    } else throw new Error("Unrecognized modifier name: " + mod);
  }

  if (alt) result = "Alt-" + result;
  if (ctrl) result = "Ctrl-" + result;
  if (meta) result = "Meta-" + result;
  if (shift) result = "Shift-" + result;
  return result;
}

function modifiers(name, event, shift) {
  if (event.altKey) name = "Alt-" + name;
  if (event.ctrlKey) name = "Ctrl-" + name;
  if (event.metaKey) name = "Meta-" + name;
  if (shift !== false && event.shiftKey) name = "Shift-" + name;
  return name;
}

var handleKeyEvents = EditorView.domEventHandlers({
  keydown: function keydown(event, view) {
    return runHandlers(getKeymap(view.state), event, view, "editor");
  }
}); /// Facet used for registering keymaps.
///
/// You can add multiple keymaps to an editor. Their priorities
/// determine their precedence (the ones specified early or with high
/// priority get checked first). When a handler has returned `true`
/// for a given key, no further handlers are called.

var keymap = _state.Facet.define({
  enables: handleKeyEvents
});

exports.keymap = keymap;
var Keymaps = new WeakMap(); // This is hidden behind an indirection, rather than directly computed
// by the facet, to keep internal types out of the facet's type.

function getKeymap(state) {
  var bindings = state.facet(keymap);
  var map = Keymaps.get(bindings);
  if (!map) Keymaps.set(bindings, map = buildKeymap(bindings.reduce(function (a, b) {
    return a.concat(b);
  }, [])));
  return map;
} /// Run the key handlers registered for a given scope. The event
/// object should be `"keydown"` event. Returns true if any of the
/// handlers handled it.


function runScopeHandlers(view, event, scope) {
  return runHandlers(getKeymap(view.state), event, view, scope);
}

var storedPrefix = null;
var PrefixTimeout = 4000;

function buildKeymap(bindings) {
  var platform = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : currentPlatform;
  var bound = Object.create(null);
  var isPrefix = Object.create(null);

  var checkPrefix = function checkPrefix(name, is) {
    var current = isPrefix[name];
    if (current == null) isPrefix[name] = is;else if (current != is) throw new Error("Key binding " + name + " is used both as a regular binding and as a multi-stroke prefix");
  };

  var add = function add(scope, key, command, preventDefault) {
    var scopeObj = bound[scope] || (bound[scope] = Object.create(null));
    var parts = key.split(/ (?!$)/).map(function (k) {
      return normalizeKeyName(k, platform);
    });

    var _loop4 = function _loop4(i) {
      var prefix = parts.slice(0, i).join(" ");
      checkPrefix(prefix, true);
      if (!scopeObj[prefix]) scopeObj[prefix] = {
        preventDefault: true,
        commands: [function (view) {
          var ourObj = storedPrefix = {
            view: view,
            prefix: prefix,
            scope: scope
          };
          setTimeout(function () {
            if (storedPrefix == ourObj) storedPrefix = null;
          }, PrefixTimeout);
          return true;
        }]
      };
    };

    for (var i = 1; i < parts.length; i++) {
      _loop4(i);
    }

    var full = parts.join(" ");
    checkPrefix(full, false);
    var binding = scopeObj[full] || (scopeObj[full] = {
      preventDefault: false,
      commands: []
    });
    binding.commands.push(command);
    if (preventDefault) binding.preventDefault = true;
  };

  var _iterator46 = _createForOfIteratorHelper(bindings),
      _step46;

  try {
    for (_iterator46.s(); !(_step46 = _iterator46.n()).done;) {
      var b = _step46.value;
      var name = b[platform] || b.key;
      if (!name) continue;

      var _iterator47 = _createForOfIteratorHelper(b.scope ? b.scope.split(" ") : ["editor"]),
          _step47;

      try {
        for (_iterator47.s(); !(_step47 = _iterator47.n()).done;) {
          var scope = _step47.value;
          add(scope, name, b.run, b.preventDefault);
          if (b.shift) add(scope, "Shift-" + name, b.shift, b.preventDefault);
        }
      } catch (err) {
        _iterator47.e(err);
      } finally {
        _iterator47.f();
      }
    }
  } catch (err) {
    _iterator46.e(err);
  } finally {
    _iterator46.f();
  }

  return bound;
}

function runHandlers(map, event, view, scope) {
  var name = (0, _w3cKeyname.keyName)(event),
      isChar = name.length == 1 && name != " ";
  var prefix = "",
      fallthrough = false;

  if (storedPrefix && storedPrefix.view == view && storedPrefix.scope == scope) {
    prefix = storedPrefix.prefix + " ";
    if (fallthrough = modifierCodes.indexOf(event.keyCode) < 0) storedPrefix = null;
  }

  var runFor = function runFor(binding) {
    if (binding) {
      var _iterator48 = _createForOfIteratorHelper(binding.commands),
          _step48;

      try {
        for (_iterator48.s(); !(_step48 = _iterator48.n()).done;) {
          var cmd = _step48.value;
          if (cmd(view)) return true;
        }
      } catch (err) {
        _iterator48.e(err);
      } finally {
        _iterator48.f();
      }

      if (binding.preventDefault) fallthrough = true;
    }

    return false;
  };

  var scopeObj = map[scope],
      baseName;

  if (scopeObj) {
    if (runFor(scopeObj[prefix + modifiers(name, event, !isChar)])) return true;

    if (isChar && (event.shiftKey || event.altKey || event.metaKey) && (baseName = _w3cKeyname.base[event.keyCode]) && baseName != name) {
      if (runFor(scopeObj[prefix + modifiers(baseName, event, true)])) return true;
    } else if (isChar && event.shiftKey) {
      if (runFor(scopeObj[prefix + modifiers(name, event, true)])) return true;
    }
  }

  return fallthrough;
}

var CanHidePrimary = !browser.ios; // FIXME test IE

var selectionConfig = _state.Facet.define({
  combine: function combine(configs) {
    return (0, _state.combineConfig)(configs, {
      cursorBlinkRate: 1200,
      drawRangeCursor: true
    }, {
      cursorBlinkRate: function cursorBlinkRate(a, b) {
        return Math.min(a, b);
      },
      drawRangeCursor: function drawRangeCursor(a, b) {
        return a || b;
      }
    });
  }
}); /// Returns an extension that hides the browser's native selection and
/// cursor, replacing the selection with a background behind the text
/// (with the `cm-selectionBackground` class), and the
/// cursors with elements overlaid over the code (using
/// `cm-cursor-primary` and `cm-cursor-secondary`).
///
/// This allows the editor to display secondary selection ranges, and
/// tends to produce a type of selection more in line with that users
/// expect in a text editor (the native selection styling will often
/// leave gaps between lines and won't fill the horizontal space after
/// a line when the selection continues past it).
///
/// It does have a performance cost, in that it requires an extra DOM
/// layout cycle for many updates (the selection is drawn based on DOM
/// layout information that's only available after laying out the
/// content).


function drawSelection() {
  var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return [selectionConfig.of(config), drawSelectionPlugin, hideNativeSelection];
}

var Piece = /*#__PURE__*/function () {
  function Piece(left, top, width, height, className) {
    _classCallCheck(this, Piece);

    this.left = left;
    this.top = top;
    this.width = width;
    this.height = height;
    this.className = className;
  }

  _createClass(Piece, [{
    key: "draw",
    value: function draw() {
      var elt = document.createElement("div");
      elt.className = this.className;
      this.adjust(elt);
      return elt;
    }
  }, {
    key: "adjust",
    value: function adjust(elt) {
      elt.style.left = this.left + "px";
      elt.style.top = this.top + "px";
      if (this.width >= 0) elt.style.width = this.width + "px";
      elt.style.height = this.height + "px";
    }
  }, {
    key: "eq",
    value: function eq(p) {
      return this.left == p.left && this.top == p.top && this.width == p.width && this.height == p.height && this.className == p.className;
    }
  }]);

  return Piece;
}();

var drawSelectionPlugin = ViewPlugin.fromClass( /*#__PURE__*/function () {
  function _class(view) {
    _classCallCheck(this, _class);

    this.view = view;
    this.rangePieces = [];
    this.cursors = [];
    this.measureReq = {
      read: this.readPos.bind(this),
      write: this.drawSel.bind(this)
    };
    this.selectionLayer = view.scrollDOM.appendChild(document.createElement("div"));
    this.selectionLayer.className = "cm-selectionLayer";
    this.selectionLayer.setAttribute("aria-hidden", "true");
    this.cursorLayer = view.scrollDOM.appendChild(document.createElement("div"));
    this.cursorLayer.className = "cm-cursorLayer";
    this.cursorLayer.setAttribute("aria-hidden", "true");
    view.requestMeasure(this.measureReq);
    this.setBlinkRate();
  }

  _createClass(_class, [{
    key: "setBlinkRate",
    value: function setBlinkRate() {
      this.cursorLayer.style.animationDuration = this.view.state.facet(selectionConfig).cursorBlinkRate + "ms";
    }
  }, {
    key: "update",
    value: function update(_update6) {
      var confChanged = _update6.startState.facet(selectionConfig) != _update6.state.facet(selectionConfig);

      if (confChanged || _update6.selectionSet || _update6.geometryChanged || _update6.viewportChanged) this.view.requestMeasure(this.measureReq);
      if (_update6.transactions.some(function (tr) {
        return tr.scrollIntoView;
      })) this.cursorLayer.style.animationName = this.cursorLayer.style.animationName == "cm-blink" ? "cm-blink2" : "cm-blink";
      if (confChanged) this.setBlinkRate();
    }
  }, {
    key: "readPos",
    value: function readPos() {
      var _this35 = this;

      var state = this.view.state,
          conf = state.facet(selectionConfig);
      var rangePieces = state.selection.ranges.map(function (r) {
        return r.empty ? [] : measureRange(_this35.view, r);
      }).reduce(function (a, b) {
        return a.concat(b);
      });
      var cursors = [];

      var _iterator49 = _createForOfIteratorHelper(state.selection.ranges),
          _step49;

      try {
        for (_iterator49.s(); !(_step49 = _iterator49.n()).done;) {
          var r = _step49.value;
          var prim = r == state.selection.main;

          if (r.empty ? !prim || CanHidePrimary : conf.drawRangeCursor) {
            var piece = measureCursor(this.view, r, prim);
            if (piece) cursors.push(piece);
          }
        }
      } catch (err) {
        _iterator49.e(err);
      } finally {
        _iterator49.f();
      }

      return {
        rangePieces: rangePieces,
        cursors: cursors
      };
    }
  }, {
    key: "drawSel",
    value: function drawSel(_ref11) {
      var _this36 = this;

      var rangePieces = _ref11.rangePieces,
          cursors = _ref11.cursors;

      if (rangePieces.length != this.rangePieces.length || rangePieces.some(function (p, i) {
        return !p.eq(_this36.rangePieces[i]);
      })) {
        this.selectionLayer.textContent = "";

        var _iterator50 = _createForOfIteratorHelper(rangePieces),
            _step50;

        try {
          for (_iterator50.s(); !(_step50 = _iterator50.n()).done;) {
            var p = _step50.value;
            this.selectionLayer.appendChild(p.draw());
          }
        } catch (err) {
          _iterator50.e(err);
        } finally {
          _iterator50.f();
        }

        this.rangePieces = rangePieces;
      }

      if (cursors.length != this.cursors.length || cursors.some(function (c, i) {
        return !c.eq(_this36.cursors[i]);
      })) {
        var oldCursors = this.cursorLayer.children;

        if (oldCursors.length !== cursors.length) {
          this.cursorLayer.textContent = "";

          var _iterator51 = _createForOfIteratorHelper(cursors),
              _step51;

          try {
            for (_iterator51.s(); !(_step51 = _iterator51.n()).done;) {
              var c = _step51.value;
              this.cursorLayer.appendChild(c.draw());
            }
          } catch (err) {
            _iterator51.e(err);
          } finally {
            _iterator51.f();
          }
        } else {
          cursors.forEach(function (c, idx) {
            return c.adjust(oldCursors[idx]);
          });
        }

        this.cursors = cursors;
      }
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.selectionLayer.remove();
      this.cursorLayer.remove();
    }
  }]);

  return _class;
}());
var themeSpec = {
  ".cm-line": {
    "& ::selection": {
      backgroundColor: "transparent !important"
    },
    "&::selection": {
      backgroundColor: "transparent !important"
    }
  }
};
if (CanHidePrimary) themeSpec[".cm-line"].caretColor = "transparent !important";

var hideNativeSelection = _state.Prec.override(EditorView.theme(themeSpec));

function getBase(view) {
  var rect = view.scrollDOM.getBoundingClientRect();
  var left = view.textDirection == Direction.LTR ? rect.left : rect.right - view.scrollDOM.clientWidth;
  return {
    left: left - view.scrollDOM.scrollLeft,
    top: rect.top - view.scrollDOM.scrollTop
  };
}

function wrappedLine(view, pos, inside) {
  var range = _state.EditorSelection.cursor(pos);

  return {
    from: Math.max(inside.from, view.moveToLineBoundary(range, false, true).from),
    to: Math.min(inside.to, view.moveToLineBoundary(range, true, true).from)
  };
}

function measureRange(view, range) {
  if (range.to <= view.viewport.from || range.from >= view.viewport.to) return [];
  var from = Math.max(range.from, view.viewport.from),
      to = Math.min(range.to, view.viewport.to);
  var ltr = view.textDirection == Direction.LTR;
  var content = view.contentDOM,
      contentRect = content.getBoundingClientRect(),
      base = getBase(view);
  var lineStyle = window.getComputedStyle(content.firstChild);
  var leftSide = contentRect.left + parseInt(lineStyle.paddingLeft);
  var rightSide = contentRect.right - parseInt(lineStyle.paddingRight);
  var visualStart = view.visualLineAt(from);
  var visualEnd = view.visualLineAt(to);

  if (view.lineWrapping) {
    visualStart = wrappedLine(view, from, visualStart);
    visualEnd = wrappedLine(view, to, visualEnd);
  }

  if (visualStart.from == visualEnd.from) {
    return pieces(drawForLine(range.from, range.to, visualStart));
  } else {
    var top = drawForLine(range.from, null, visualStart);
    var bottom = drawForLine(null, range.to, visualEnd);
    var between = [];
    if (visualStart.to < visualEnd.from - 1) between.push(piece(leftSide, top.bottom, rightSide, bottom.top));else if (top.bottom < bottom.top && bottom.top - top.bottom < 4) top.bottom = bottom.top = (top.bottom + bottom.top) / 2;
    return pieces(top).concat(between).concat(pieces(bottom));
  }

  function piece(left, top, right, bottom) {
    return new Piece(left - base.left, top - base.top, right - left, bottom - top, "cm-selectionBackground");
  }

  function pieces(_ref12) {
    var top = _ref12.top,
        bottom = _ref12.bottom,
        horizontal = _ref12.horizontal;
    var pieces = [];

    for (var i = 0; i < horizontal.length; i += 2) {
      pieces.push(piece(horizontal[i], top, horizontal[i + 1], bottom));
    }

    return pieces;
  } // Gets passed from/to in line-local positions


  function drawForLine(from, to, line) {
    var top = 1e9,
        bottom = -1e9,
        horizontal = [];

    function addSpan(from, fromOpen, to, toOpen, dir) {
      var fromCoords = view.coordsAtPos(from, from == line.to ? -1 : 1);
      var toCoords = view.coordsAtPos(to, to == line.from ? 1 : -1);
      top = Math.min(fromCoords.top, toCoords.top, top);
      bottom = Math.max(fromCoords.bottom, toCoords.bottom, bottom);
      if (dir == Direction.LTR) horizontal.push(ltr && fromOpen ? leftSide : fromCoords.left, ltr && toOpen ? rightSide : toCoords.right);else horizontal.push(!ltr && toOpen ? leftSide : toCoords.left, !ltr && fromOpen ? rightSide : fromCoords.right);
    }

    var start = from !== null && from !== void 0 ? from : line.from,
        end = to !== null && to !== void 0 ? to : line.to; // Split the range by visible range and document line

    var _iterator52 = _createForOfIteratorHelper(view.visibleRanges),
        _step52;

    try {
      for (_iterator52.s(); !(_step52 = _iterator52.n()).done;) {
        var r = _step52.value;

        if (r.to > start && r.from < end) {
          for (var pos = Math.max(r.from, start), endPos = Math.min(r.to, end);;) {
            var docLine = view.state.doc.lineAt(pos);

            var _iterator53 = _createForOfIteratorHelper(view.bidiSpans(docLine)),
                _step53;

            try {
              for (_iterator53.s(); !(_step53 = _iterator53.n()).done;) {
                var span = _step53.value;
                var spanFrom = span.from + docLine.from,
                    spanTo = span.to + docLine.from;
                if (spanFrom >= endPos) break;
                if (spanTo > pos) addSpan(Math.max(spanFrom, pos), from == null && spanFrom <= start, Math.min(spanTo, endPos), to == null && spanTo >= end, span.dir);
              }
            } catch (err) {
              _iterator53.e(err);
            } finally {
              _iterator53.f();
            }

            pos = docLine.to + 1;
            if (pos >= endPos) break;
          }
        }
      }
    } catch (err) {
      _iterator52.e(err);
    } finally {
      _iterator52.f();
    }

    if (horizontal.length == 0) {
      var coords = view.coordsAtPos(start, -1);
      top = Math.min(coords.top, top);
      bottom = Math.max(coords.bottom, bottom);
    }

    return {
      top: top,
      bottom: bottom,
      horizontal: horizontal
    };
  }
}

function measureCursor(view, cursor, primary) {
  var pos = view.coordsAtPos(cursor.head, cursor.assoc || 1);
  if (!pos) return null;
  var base = getBase(view);
  return new Piece(pos.left - base.left, pos.top - base.top, -1, pos.bottom - pos.top, primary ? "cm-cursor cm-cursor-primary" : "cm-cursor cm-cursor-secondary");
}

function iterMatches(doc, re, from, to, f) {
  re.lastIndex = 0;

  for (var cursor = doc.iterRange(from, to), pos = from, m; !cursor.next().done; pos += cursor.value.length) {
    if (!cursor.lineBreak) while (m = re.exec(cursor.value)) {
      f(pos + m.index, pos + m.index + m[0].length, m);
    }
  }
} /// Helper class used to make it easier to maintain decorations on
/// visible code that matches a given regular expression. To be used
/// in a [view plugin](#view.ViewPlugin). Instances of this object
/// represent a matching configuration.


var MatchDecorator = /*#__PURE__*/function () {
  /// Create a decorator.
  function MatchDecorator(config) {
    _classCallCheck(this, MatchDecorator);

    var regexp = config.regexp,
        decoration = config.decoration,
        boundary = config.boundary;
    if (!regexp.global) throw new RangeError("The regular expression given to MatchDecorator should have its 'g' flag set");
    this.regexp = regexp;
    this.getDeco = typeof decoration == "function" ? decoration : function () {
      return decoration;
    };
    this.boundary = boundary;
  } /// Compute the full set of decorations for matches in the given
  /// view's viewport. You'll want to call this when initializing your
  /// plugin.


  _createClass(MatchDecorator, [{
    key: "createDeco",
    value: function createDeco(view) {
      var _this37 = this;

      var build = new _rangeset.RangeSetBuilder();

      var _iterator54 = _createForOfIteratorHelper(view.visibleRanges),
          _step54;

      try {
        for (_iterator54.s(); !(_step54 = _iterator54.n()).done;) {
          var _step54$value = _step54.value,
              from = _step54$value.from,
              to = _step54$value.to;
          iterMatches(view.state.doc, this.regexp, from, to, function (a, b, m) {
            return build.add(a, b, _this37.getDeco(m, view, a));
          });
        }
      } catch (err) {
        _iterator54.e(err);
      } finally {
        _iterator54.f();
      }

      return build.finish();
    } /// Update a set of decorations for a view update. `deco` _must_ be
    /// the set of decorations produced by _this_ `MatchDecorator` for
    /// the view state before the update.

  }, {
    key: "updateDeco",
    value: function updateDeco(update, deco) {
      var changeFrom = 1e9,
          changeTo = -1;
      if (update.docChanged) update.changes.iterChanges(function (_f, _t, from, to) {
        if (to > update.view.viewport.from && from < update.view.viewport.to) {
          changeFrom = Math.min(from, changeFrom);
          changeTo = Math.max(to, changeTo);
        }
      });
      if (update.viewportChanged || changeTo - changeFrom > 1000) return this.createDeco(update.view);
      if (changeTo > -1) return this.updateRange(update.view, deco.map(update.changes), changeFrom, changeTo);
      return deco;
    }
  }, {
    key: "updateRange",
    value: function updateRange(view, deco, updateFrom, updateTo) {
      var _this38 = this;

      var _iterator55 = _createForOfIteratorHelper(view.visibleRanges),
          _step55;

      try {
        for (_iterator55.s(); !(_step55 = _iterator55.n()).done;) {
          var r = _step55.value;
          var from = Math.max(r.from, updateFrom),
              to = Math.min(r.to, updateTo);

          if (to > from) {
            (function () {
              var fromLine = view.state.doc.lineAt(from),
                  toLine = fromLine.to < to ? view.state.doc.lineAt(to) : fromLine;
              var start = Math.max(r.from, fromLine.from),
                  end = Math.min(r.to, toLine.to);

              if (_this38.boundary) {
                for (; from > fromLine.from; from--) {
                  if (_this38.boundary.test(fromLine.text[from - 1 - fromLine.from])) {
                    start = from;
                    break;
                  }
                }

                for (; to < toLine.to; to++) {
                  if (_this38.boundary.test(toLine.text[to - toLine.from])) {
                    end = to;
                    break;
                  }
                }
              }

              var ranges = [],
                  m = void 0;

              if (fromLine == toLine) {
                _this38.regexp.lastIndex = start - fromLine.from;

                while ((m = _this38.regexp.exec(fromLine.text)) && m.index < end - fromLine.from) {
                  var pos = m.index + fromLine.from;
                  ranges.push(_this38.getDeco(m, view, pos).range(pos, pos + m[0].length));
                }
              } else {
                iterMatches(view.state.doc, _this38.regexp, start, end, function (from, to, m) {
                  return ranges.push(_this38.getDeco(m, view, from).range(from, to));
                });
              }

              deco = deco.update({
                filterFrom: start,
                filterTo: end,
                filter: function filter() {
                  return false;
                },
                add: ranges
              });
            })();
          }
        }
      } catch (err) {
        _iterator55.e(err);
      } finally {
        _iterator55.f();
      }

      return deco;
    }
  }]);

  return MatchDecorator;
}();

exports.MatchDecorator = MatchDecorator;
var UnicodeRegexpSupport = /x/.unicode != null ? "gu" : "g";
var Specials = new RegExp("[\0-\b\n-\x1F\x7F-\x9F\xAD\u061C\u200B\u200E\u200F\u2028\u2029\uFEFF\uFFF9-\uFFFC]", UnicodeRegexpSupport);
var Names = {
  0: "null",
  7: "bell",
  8: "backspace",
  10: "newline",
  11: "vertical tab",
  13: "carriage return",
  27: "escape",
  8203: "zero width space",
  8204: "zero width non-joiner",
  8205: "zero width joiner",
  8206: "left-to-right mark",
  8207: "right-to-left mark",
  8232: "line separator",
  8233: "paragraph separator",
  65279: "zero width no-break space",
  65532: "object replacement"
};
var _supportsTabSize = null;

function supportsTabSize() {
  if (_supportsTabSize == null && typeof document != "undefined" && document.body) {
    var styles = document.body.style;
    _supportsTabSize = (styles.tabSize || styles.MozTabSize) != null;
  }

  return _supportsTabSize || false;
}

var specialCharConfig = _state.Facet.define({
  combine: function combine(configs) {
    var config = (0, _state.combineConfig)(configs, {
      render: null,
      specialChars: Specials,
      addSpecialChars: null
    });
    if (config.replaceTabs = !supportsTabSize()) config.specialChars = new RegExp("\t|" + config.specialChars.source, UnicodeRegexpSupport);
    if (config.addSpecialChars) config.specialChars = new RegExp(config.specialChars.source + "|" + config.addSpecialChars.source, UnicodeRegexpSupport);
    return config;
  }
}); /// Returns an extension that installs highlighting of special
/// characters.


function highlightSpecialChars() {
  var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return [specialCharConfig.of(config), specialCharPlugin()];
}

var _plugin = null;

function specialCharPlugin() {
  return _plugin || (_plugin = ViewPlugin.fromClass( /*#__PURE__*/function () {
    function _class2(view) {
      _classCallCheck(this, _class2);

      this.view = view;
      this.decorations = Decoration.none;
      this.decorationCache = Object.create(null);
      this.decorator = this.makeDecorator(view.state.facet(specialCharConfig));
      this.decorations = this.decorator.createDeco(view);
    }

    _createClass(_class2, [{
      key: "makeDecorator",
      value: function makeDecorator(conf) {
        var _this39 = this;

        return new MatchDecorator({
          regexp: conf.specialChars,
          decoration: function decoration(m, view, pos) {
            var doc = view.state.doc;
            var code = (0, _text.codePointAt)(m[0], 0);

            if (code == 9) {
              var line = doc.lineAt(pos);
              var size = view.state.tabSize,
                  col = (0, _text.countColumn)(doc.sliceString(line.from, pos), 0, size);
              return Decoration.replace({
                widget: new TabWidget((size - col % size) * _this39.view.defaultCharacterWidth)
              });
            }

            return _this39.decorationCache[code] || (_this39.decorationCache[code] = Decoration.replace({
              widget: new SpecialCharWidget(conf, code)
            }));
          },
          boundary: conf.replaceTabs ? undefined : /[^]/
        });
      }
    }, {
      key: "update",
      value: function update(_update7) {
        var conf = _update7.state.facet(specialCharConfig);

        if (_update7.startState.facet(specialCharConfig) != conf) {
          this.decorator = this.makeDecorator(conf);
          this.decorations = this.decorator.createDeco(_update7.view);
        } else {
          this.decorations = this.decorator.updateDeco(_update7, this.decorations);
        }
      }
    }]);

    return _class2;
  }(), {
    decorations: function decorations(v) {
      return v.decorations;
    }
  }));
}

var DefaultPlaceholder = "\u2022"; // Assigns placeholder characters from the Control Pictures block to
// ASCII control characters

function placeholder$1(code) {
  if (code >= 32) return DefaultPlaceholder;
  if (code == 10) return "\u2424";
  return String.fromCharCode(9216 + code);
}

var SpecialCharWidget = /*#__PURE__*/function (_WidgetType5) {
  _inherits(SpecialCharWidget, _WidgetType5);

  var _super21 = _createSuper(SpecialCharWidget);

  function SpecialCharWidget(options, code) {
    var _this40;

    _classCallCheck(this, SpecialCharWidget);

    _this40 = _super21.call(this);
    _this40.options = options;
    _this40.code = code;
    return _this40;
  }

  _createClass(SpecialCharWidget, [{
    key: "eq",
    value: function eq(other) {
      return other.code == this.code;
    }
  }, {
    key: "toDOM",
    value: function toDOM(view) {
      var ph = placeholder$1(this.code);
      var desc = view.state.phrase("Control character ") + (Names[this.code] || "0x" + this.code.toString(16));
      var custom = this.options.render && this.options.render(this.code, desc, ph);
      if (custom) return custom;
      var span = document.createElement("span");
      span.textContent = ph;
      span.title = desc;
      span.setAttribute("aria-label", desc);
      span.className = "cm-specialChar";
      return span;
    }
  }, {
    key: "ignoreEvent",
    value: function ignoreEvent() {
      return false;
    }
  }]);

  return SpecialCharWidget;
}(WidgetType);

var TabWidget = /*#__PURE__*/function (_WidgetType6) {
  _inherits(TabWidget, _WidgetType6);

  var _super22 = _createSuper(TabWidget);

  function TabWidget(width) {
    var _this41;

    _classCallCheck(this, TabWidget);

    _this41 = _super22.call(this);
    _this41.width = width;
    return _this41;
  }

  _createClass(TabWidget, [{
    key: "eq",
    value: function eq(other) {
      return other.width == this.width;
    }
  }, {
    key: "toDOM",
    value: function toDOM() {
      var span = document.createElement("span");
      span.textContent = "\t";
      span.className = "cm-tab";
      span.style.width = this.width + "px";
      return span;
    }
  }, {
    key: "ignoreEvent",
    value: function ignoreEvent() {
      return false;
    }
  }]);

  return TabWidget;
}(WidgetType); /// Mark lines that have a cursor on them with the `"cm-activeLine"`
/// DOM class.


function highlightActiveLine() {
  return activeLineHighlighter;
}

var lineDeco = Decoration.line({
  attributes: {
    "class": "cm-activeLine"
  }
});
var activeLineHighlighter = ViewPlugin.fromClass( /*#__PURE__*/function () {
  function _class3(view) {
    _classCallCheck(this, _class3);

    this.decorations = this.getDeco(view);
  }

  _createClass(_class3, [{
    key: "update",
    value: function update(_update8) {
      if (_update8.docChanged || _update8.selectionSet) this.decorations = this.getDeco(_update8.view);
    }
  }, {
    key: "getDeco",
    value: function getDeco(view) {
      var lastLineStart = -1,
          deco = [];

      var _iterator56 = _createForOfIteratorHelper(view.state.selection.ranges),
          _step56;

      try {
        for (_iterator56.s(); !(_step56 = _iterator56.n()).done;) {
          var r = _step56.value;
          if (!r.empty) continue;
          var line = view.visualLineAt(r.head);

          if (line.from > lastLineStart) {
            deco.push(lineDeco.range(line.from));
            lastLineStart = line.from;
          }
        }
      } catch (err) {
        _iterator56.e(err);
      } finally {
        _iterator56.f();
      }

      return Decoration.set(deco);
    }
  }]);

  return _class3;
}(), {
  decorations: function decorations(v) {
    return v.decorations;
  }
});

var Placeholder = /*#__PURE__*/function (_WidgetType7) {
  _inherits(Placeholder, _WidgetType7);

  var _super23 = _createSuper(Placeholder);

  function Placeholder(content) {
    var _this42;

    _classCallCheck(this, Placeholder);

    _this42 = _super23.call(this);
    _this42.content = content;
    return _this42;
  }

  _createClass(Placeholder, [{
    key: "toDOM",
    value: function toDOM() {
      var wrap = document.createElement("span");
      wrap.className = "cm-placeholder";
      wrap.style.pointerEvents = "none";
      wrap.appendChild(typeof this.content == "string" ? document.createTextNode(this.content) : this.content);
      if (typeof this.content == "string") wrap.setAttribute("aria-label", "placeholder " + this.content);else wrap.setAttribute("aria-hidden", "true");
      return wrap;
    }
  }, {
    key: "ignoreEvent",
    value: function ignoreEvent() {
      return false;
    }
  }]);

  return Placeholder;
}(WidgetType); /// Extension that enables a placeholder???a piece of example content
/// to show when the editor is empty.


function placeholder(content) {
  return ViewPlugin.fromClass( /*#__PURE__*/function () {
    function _class4(view) {
      _classCallCheck(this, _class4);

      this.view = view;
      this.placeholder = Decoration.set([Decoration.widget({
        widget: new Placeholder(content),
        side: 1
      }).range(0)]);
    }

    _createClass(_class4, [{
      key: "decorations",
      get: function get() {
        return this.view.state.doc.length ? Decoration.none : this.placeholder;
      }
    }]);

    return _class4;
  }(), {
    decorations: function decorations(v) {
      return v.decorations;
    }
  });
} /// @internal


var __test = {
  HeightMap: HeightMap,
  HeightOracle: HeightOracle,
  MeasuredHeights: MeasuredHeights,
  QueryType: QueryType,
  ChangedRange: ChangedRange,
  computeOrder: computeOrder,
  moveVisually: moveVisually
};
exports.__test = __test;
