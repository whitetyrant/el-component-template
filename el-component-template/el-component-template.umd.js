(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["el-component-template"] = factory(require("vue"));
	else
		root["el-component-template"] = factory(root["Vue"]);
})((typeof self !== 'undefined' ? self : this), function(__WEBPACK_EXTERNAL_MODULE__203__) {
return /******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 620:
/***/ (function(__unused_webpack_module, exports) {

var __webpack_unused_export__;


__webpack_unused_export__ = ({
  value: true
});
// runtime helper for setting properties on components
// in a tree-shakable way
exports.Z = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};

/***/ }),

/***/ 203:
/***/ (function(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE__203__;

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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		__webpack_require__.p = "";
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ entry_lib; }
});

;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
/* eslint-disable no-var */
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (false) { var getCurrentScript; }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__(203);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/package/multi-level-table/MultiLevelTable.vue?vue&type=template&id=5ffd0aed

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_table_column = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.resolveComponent)("el-table-column");
  const _component_multi_level_table_column = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.resolveComponent)("multi-level-table-column");
  const _component_el_table = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.resolveComponent)("el-table");
  return (0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createBlock)(_component_el_table, {
    data: $props.tableData,
    width: `${$props.tableWidth}px`,
    height: $props.screenHeight,
    border: "",
    "header-cell-style": {
      textAlign: 'center',
      background: '#FAFAFA'
    },
    "cell-style": {
      textAlign: 'center',
      color: '#3D3D3D'
    }
  }, {
    default: (0,external_commonjs_vue_commonjs2_vue_root_Vue_.withCtx)(() => [$props.columns[0] && $props.columns[0].type ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createBlock)(_component_el_table_column, {
      key: 0,
      type: $props.columns[0].type
    }, null, 8, ["type"])) : (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createCommentVNode)("", true), ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(true), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)(external_commonjs_vue_commonjs2_vue_root_Vue_.Fragment, null, (0,external_commonjs_vue_commonjs2_vue_root_Vue_.renderList)($options.remainingColumns, (column, index) => {
      return (0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createBlock)(_component_multi_level_table_column, {
        key: index,
        column: column
      }, null, 8, ["column"]);
    }), 128))]),
    _: 1
  }, 8, ["data", "width", "height"]);
}
;// CONCATENATED MODULE: ./src/package/multi-level-table/MultiLevelTable.vue?vue&type=template&id=5ffd0aed

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/package/multi-level-table/MultiLevelTableColumn.vue?vue&type=template&id=393d1c06

function MultiLevelTableColumnvue_type_template_id_393d1c06_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_multi_level_table_column = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.resolveComponent)("multi-level-table-column", true);
  const _component_el_table_column = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.resolveComponent)("el-table-column");
  return $props.column.subColumns ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createBlock)(_component_el_table_column, {
    key: 0,
    label: $props.column.label,
    "min-width": $props.column.minWidth
  }, {
    default: (0,external_commonjs_vue_commonjs2_vue_root_Vue_.withCtx)(() => [((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(true), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)(external_commonjs_vue_commonjs2_vue_root_Vue_.Fragment, null, (0,external_commonjs_vue_commonjs2_vue_root_Vue_.renderList)($props.column.subColumns, (subColumn, subIndex) => {
      return (0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createBlock)(_component_multi_level_table_column, {
        key: subIndex,
        column: subColumn
      }, null, 8, ["column"]);
    }), 128))]),
    _: 1
  }, 8, ["label", "min-width"])) : ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createBlock)(_component_el_table_column, {
    key: 1,
    prop: $props.column.prop,
    label: $props.column.label,
    "min-width": $props.column.minWidth,
    sortable: $props.column.sortable ? 'custom' : false
  }, null, 8, ["prop", "label", "min-width", "sortable"]));
}
;// CONCATENATED MODULE: ./src/package/multi-level-table/MultiLevelTableColumn.vue?vue&type=template&id=393d1c06

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/package/multi-level-table/MultiLevelTableColumn.vue?vue&type=script&lang=js
/* harmony default export */ var MultiLevelTableColumnvue_type_script_lang_js = ({
  name: 'MultiLevelTableColumn',
  props: {
    column: {
      type: Object,
      required: true
    }
  }
});
;// CONCATENATED MODULE: ./src/package/multi-level-table/MultiLevelTableColumn.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(620);
;// CONCATENATED MODULE: ./src/package/multi-level-table/MultiLevelTableColumn.vue




;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(MultiLevelTableColumnvue_type_script_lang_js, [['render',MultiLevelTableColumnvue_type_template_id_393d1c06_render]])

/* harmony default export */ var MultiLevelTableColumn = (__exports__);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/package/multi-level-table/MultiLevelTable.vue?vue&type=script&lang=js

/* harmony default export */ var MultiLevelTablevue_type_script_lang_js = ({
  name: 'multi-level-table',
  components: {
    MultiLevelTableColumn: MultiLevelTableColumn
  },
  props: {
    tableData: {
      type: Array,
      required: true
    },
    columns: {
      type: Array,
      required: true
    },
    tableWidth: {
      type: Number,
      default: 100
    },
    screenHeight: {
      type: Number,
      default: 100
    }
  },
  computed: {
    remainingColumns() {
      return this.columns[0] && this.columns[0].type ? this.columns.slice(1) : this.columns;
    }
  }
});
;// CONCATENATED MODULE: ./src/package/multi-level-table/MultiLevelTable.vue?vue&type=script&lang=js
 
;// CONCATENATED MODULE: ./src/package/multi-level-table/MultiLevelTable.vue




;
const MultiLevelTable_exports_ = /*#__PURE__*/(0,exportHelper/* default */.Z)(MultiLevelTablevue_type_script_lang_js, [['render',render]])

/* harmony default export */ var MultiLevelTable = (MultiLevelTable_exports_);
;// CONCATENATED MODULE: ./src/package/index.js

const components = [MultiLevelTable];

// 批量组件注册
const install = function (app) {
  components.forEach(com => {
    app.component(com.name, com);
  });
};

//导出组件
/* harmony default export */ var src_package = ({
  install
});
;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = (src_package);


}();
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=el-component-template.umd.js.map