(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ 122:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(__webpack_require__(0));
/**
 * FeatureCase
 */
function FeatureCase(props) {
    var children = props.children;
    return react_1.default.Children.map(children, function (child) { return child; });
}
exports.default = FeatureCase;
try {
    // @ts-ignore
    FeatureCase.displayName = "FeatureCase";
    // @ts-ignore
    FeatureCase.__docgenInfo = { "description": "FeatureCase", "displayName": "FeatureCase", "props": {} };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/lib/FeatureCase/index.ts#FeatureCase"] = { docgenInfo: FeatureCase.__docgenInfo, name: "FeatureCase", path: "src/lib/FeatureCase/index.ts#FeatureCase" };
}
catch (__react_docgen_typescript_loader_error) { }


/***/ }),

/***/ 258:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(__webpack_require__(0));
/**
 * FeatureDefault
 */
function FeatureDefault(props) {
    var children = props.children;
    return react_1.default.Children.map(children, function (child) { return child; });
}
exports.default = FeatureDefault;
try {
    // @ts-ignore
    FeatureDefault.displayName = "FeatureDefault";
    // @ts-ignore
    FeatureDefault.__docgenInfo = { "description": "FeatureDefault", "displayName": "FeatureDefault", "props": {} };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/lib/FeatureDefault/index.ts#FeatureDefault"] = { docgenInfo: FeatureDefault.__docgenInfo, name: "FeatureDefault", path: "src/lib/FeatureDefault/index.ts#FeatureDefault" };
}
catch (__react_docgen_typescript_loader_error) { }


/***/ }),

/***/ 263:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(__webpack_require__(0));
/**
 * FeatureFlag
 */
function FeatureFlag(_a) {
    var children = _a.children, flagKey = _a.flagKey, appFlags = _a.appFlags;
    function elementMatchPluginName(element, name) {
        return (element.type.displayName === name || element.type.name === name);
    }
    // isChildPluginComponent is true if the child is one of
    // [ FeatureFlag, FeatureTrue, FeatureSwitch, FeatureFalse, FeatureDefault]
    var isChildPluginComponent = false;
    // isNonPluginComponent is true if the child is not a component from this plugin.
    var isNonPluginComponent = false;
    // childArray to render
    var childArray = [];
    React.Children.forEach(children, function (element) {
        if (React.isValidElement(element) && elementMatchPluginName(element, 'FeatureTrue')) {
            if (isNonPluginComponent) {
                // telling the developer to not use NonPlugin components under FeatureFlag.
                // eslint-disable-next-line no-console
                console.warn('Dont Use <FeatureTrue /> among other elements/components under <FeatureFlag /> only use it with <FeatureFalse />, No mix allowed');
                return;
            }
            // if the appFlags has the flagKey, render the child
            if (appFlags[flagKey] && appFlags[flagKey].value) {
                childArray.push(element);
            }
            isChildPluginComponent = true;
        }
        if (React.isValidElement(element) && elementMatchPluginName(element, 'FeatureFalse')) {
            if (isNonPluginComponent) {
                // eslint-disable-next-line no-console
                console.warn('Dont Use <FeatureFalse /> among other elements/components under <FeatureFlag /> only use it with <FeatureTrue />, No mix allowed');
                return;
            }
            if (!appFlags[flagKey] || (appFlags[flagKey] && !appFlags[flagKey].value)) {
                childArray.push(element);
            }
            isChildPluginComponent = true;
        }
        // }
        if (React.isValidElement(element) && elementMatchPluginName(element, 'FeatureSwitch')) {
            if (isNonPluginComponent) {
                // eslint-disable-next-line no-console
                console.warn('Dont Use <FeatureSwitch /> unless its the immediate children of <FeatureFlag />, No mix allowed');
                return;
            }
            childArray.push(React.cloneElement(element, {
                flagKey: flagKey,
                appFlags: appFlags
            }));
            isChildPluginComponent = true;
        }
        // if the component is neither of the above components it must be NonPlugin Component,
        // therefore, we simply render it as its under FeatureTrue
        if (!isChildPluginComponent) {
            isNonPluginComponent = true;
            if (appFlags[flagKey] && appFlags[flagKey].value) {
                childArray.push(element);
            }
        }
    });
    return React.Children.map(childArray, function (child) { return child; });
}
exports.default = FeatureFlag;
try {
    // @ts-ignore
    FeatureFlag.displayName = "FeatureFlag";
    // @ts-ignore
    FeatureFlag.__docgenInfo = { "description": "FeatureFlag", "displayName": "FeatureFlag", "props": { "flagKey": { "defaultValue": null, "description": "", "name": "flagKey", "required": true, "type": { "name": "string" } }, "appFlags": { "defaultValue": null, "description": "", "name": "appFlags", "required": true, "type": { "name": "object" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/lib/FeatureFlag/typescript.tsx#FeatureFlag"] = { docgenInfo: FeatureFlag.__docgenInfo, name: "FeatureFlag", path: "src/lib/FeatureFlag/typescript.tsx#FeatureFlag" };
}
catch (__react_docgen_typescript_loader_error) { }


/***/ }),

/***/ 428:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(__webpack_require__(0));
var FeatureCase_1 = __importDefault(__webpack_require__(122));
var FeatureDefault_1 = __importDefault(__webpack_require__(258));
/**
 * FeatureSwitch
 */
var FeatureSwitch = function (props) {
    var children = props.children, flagKey = props.flagKey, appFlags = props.appFlags;
    var childArray = [];
    var breakIt = false;
    react_1.default.Children.forEach(children, function (element) {
        // if the Component is FeatureCase and break is false, compare the feature flag and render the element if its true
        if (react_1.default.isValidElement(element) && element.type === FeatureCase_1.default && !breakIt) {
            // TODO use proper type cast here once they are defined
            var _a = element.props, condition = _a.condition, allowBreak = _a.allowBreak;
            if ((appFlags[flagKey] && appFlags[flagKey].value) === condition) {
                childArray.push(element);
                breakIt = allowBreak;
            }
        }
        // if its Default and it is not breaked yet, render the element.
        if (react_1.default.isValidElement(element) && element.type === FeatureDefault_1.default && !breakIt) {
            childArray.push(element);
        }
    });
    return react_1.default.createElement(react_1.default.Fragment, null, childArray);
};
exports.default = FeatureSwitch;


/***/ }),

/***/ 429:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(430);
__webpack_require__(524);
__webpack_require__(525);
module.exports = __webpack_require__(813);


/***/ }),

/***/ 451:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 813:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _storybook_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(120);
/* harmony import */ var _storybook_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_storybook_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_stable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(815);
/* harmony import */ var core_js_stable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_stable__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(152);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _storybook_addon_a11y__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(427);
/* harmony import */ var _storybook_addon_a11y__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_storybook_addon_a11y__WEBPACK_IMPORTED_MODULE_3__);
// automatically import all files ending in *.stories.js
Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__["configure"])(__webpack_require__(966),module),Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__["addDecorator"])(_storybook_addon_a11y__WEBPACK_IMPORTED_MODULE_3__["withA11y"]),Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__["addParameters"])({options:{panelPosition:"bottom",name:"Launch Darkly React Components"},backgrounds:[{name:"white",value:"#fff",default:!0},{name:"grey",value:"#f4f5f8"}],a11y:{// ... axe options
element:"#root",// optional selector which element to inspect
config:{},// axe-core configurationOptions (https://github.com/dequelabs/axe-core/blob/develop/doc/API.md#parameters-1)
options:{}// axe-core optionsParameter (https://github.com/dequelabs/axe-core/blob/develop/doc/API.md#options-parameter)
}});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(814)(module)))

/***/ }),

/***/ 966:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./lib/FeatureFlag/FeatureFlag.stories.jsx": 977
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 966;

/***/ }),

/***/ 977:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./src/lib/FeatureFlag/typescript.tsx
var typescript = __webpack_require__(263);
var typescript_default = /*#__PURE__*/__webpack_require__.n(typescript);

// EXTERNAL MODULE: ./src/lib/FeatureSwitch/index.tsx
var FeatureSwitch = __webpack_require__(428);
var FeatureSwitch_default = /*#__PURE__*/__webpack_require__.n(FeatureSwitch);

// EXTERNAL MODULE: ./src/lib/FeatureCase/index.ts
var FeatureCase = __webpack_require__(122);
var FeatureCase_default = /*#__PURE__*/__webpack_require__.n(FeatureCase);

// EXTERNAL MODULE: ./src/lib/FeatureDefault/index.ts
var FeatureDefault = __webpack_require__(258);
var FeatureDefault_default = /*#__PURE__*/__webpack_require__.n(FeatureDefault);

// CONCATENATED MODULE: ./src/lib/FeatureFlag/README.md
/* harmony default export */ var README = ("### FeatureFlag\n\nTakes `flagKey` and `appFlags` as `props`, which is an object containing list of features.\n\n### FeatureSwitch, FeatureCase and FeatureDefault\n\n`FeatureSwitch` should be a child of `FeatureFlag` and can take `FeatureCase` and `FeatureDefault` as children.\n\n`FeatureCase` component takes `condition` and `allowBreak`(a boolean) as props,\n`condition` is the `case` feature, while `allowBreak` used as a `break`. The reason for name change is `case` and `break` are reserved words on JS.");
// CONCATENATED MODULE: ./src/lib/FeatureFlag/FeatureFlag.stories.jsx
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "basicFeatureFlag", function() { return basicFeatureFlag; });
// @ts-ignore
var withSourceLoader=__webpack_require__(415).withSource,__SOURCE_PREFIX__="/home/circleci/ld-react-components/src/lib/FeatureFlag",__STORY__="import React from 'react';\nimport FeatureFlag from './typescript.tsx';\nimport FeatureSwitch from '../FeatureSwitch';\nimport FeatureCase from '../FeatureCase';\nimport FeatureDefault from '../FeatureDefault';\nimport notes from './README.md';\n\nexport default {\n  title: 'Component|Feature Flag',\n  component: FeatureFlag,\n  parameters: { notes }\n};\n\nconst applicationKeys = {\n  'integration-test': { value: true, version: 3 },\n  'multivariate-test': { value: 'multivariate-test-1', version: 5 }\n};\n\nexport const basicFeatureFlag = () => (\n  <FeatureFlag flagKey=\"multivariate-test\" appFlags={applicationKeys}>\n    <FeatureSwitch>\n      <FeatureCase condition=\"multivariate-test-1\" allowBreak>\n        <p>Multivariate Test 1 Rendered</p>\n      </FeatureCase>\n      <FeatureCase condition=\"multivariate-test-2\" allowBreak>\n        <p>Multivariate Test 2 Rendered</p>\n      </FeatureCase>\n      <FeatureCase condition=\"multivariate-test-3\" allowBreak>\n        <p>Multivariate Test 3 Rendered</p>\n      </FeatureCase>\n      <FeatureCase condition=\"multivariate-test-4\" allowBreak>\n        <p>Multivariate Test 4 Rendered</p>\n      </FeatureCase>\n      <FeatureDefault>\n        <p>If no conditions are met then render the default</p>\n      </FeatureDefault>\n    </FeatureSwitch>\n  </FeatureFlag>\n);\n",__ADDS_MAP__={"component-feature-flag--basic-feature-flag":{startLoc:{col:32,line:19},endLoc:{col:1,line:39},startBody:{col:32,line:19},endBody:{col:1,line:39}}},__MAIN_FILE_LOCATION__="/FeatureFlag.stories.jsx",__MODULE_DEPENDENCIES__=[],__LOCAL_DEPENDENCIES__={},__IDS_TO_FRAMEWORKS__={},addSourceDecorator=__webpack_require__(415).addSource;// @ts-ignore
/* harmony default export */ var FeatureFlag_stories = __webpack_exports__["default"] = ({title:"Component|Feature Flag",component:typescript_default.a,parameters:{storySource:{source:"import React from 'react';\nimport FeatureFlag from './typescript.tsx';\nimport FeatureSwitch from '../FeatureSwitch';\nimport FeatureCase from '../FeatureCase';\nimport FeatureDefault from '../FeatureDefault';\nimport notes from './README.md';\n\nexport default {\n  title: 'Component|Feature Flag',\n  component: FeatureFlag,\n  parameters: { notes }\n};\n\nconst applicationKeys = {\n  'integration-test': { value: true, version: 3 },\n  'multivariate-test': { value: 'multivariate-test-1', version: 5 }\n};\n\nexport const basicFeatureFlag = () => (\n  <FeatureFlag flagKey=\"multivariate-test\" appFlags={applicationKeys}>\n    <FeatureSwitch>\n      <FeatureCase condition=\"multivariate-test-1\" allowBreak>\n        <p>Multivariate Test 1 Rendered</p>\n      </FeatureCase>\n      <FeatureCase condition=\"multivariate-test-2\" allowBreak>\n        <p>Multivariate Test 2 Rendered</p>\n      </FeatureCase>\n      <FeatureCase condition=\"multivariate-test-3\" allowBreak>\n        <p>Multivariate Test 3 Rendered</p>\n      </FeatureCase>\n      <FeatureCase condition=\"multivariate-test-4\" allowBreak>\n        <p>Multivariate Test 4 Rendered</p>\n      </FeatureCase>\n      <FeatureDefault>\n        <p>If no conditions are met then render the default</p>\n      </FeatureDefault>\n    </FeatureSwitch>\n  </FeatureFlag>\n);\n",locationsMap:{"component-feature-flag--basic-feature-flag":{startLoc:{col:32,line:19},endLoc:{col:1,line:39},startBody:{col:32,line:19},endBody:{col:1,line:39}}}},notes:README}});var applicationKeys={"integration-test":{value:!0,version:3},"multivariate-test":{value:"multivariate-test-1",version:5}},_ref=/*#__PURE__*/react_default.a.createElement(typescript_default.a,{flagKey:"multivariate-test",appFlags:applicationKeys},react_default.a.createElement(FeatureSwitch_default.a,null,react_default.a.createElement(FeatureCase_default.a,{condition:"multivariate-test-1",allowBreak:!0},react_default.a.createElement("p",null,"Multivariate Test 1 Rendered")),react_default.a.createElement(FeatureCase_default.a,{condition:"multivariate-test-2",allowBreak:!0},react_default.a.createElement("p",null,"Multivariate Test 2 Rendered")),react_default.a.createElement(FeatureCase_default.a,{condition:"multivariate-test-3",allowBreak:!0},react_default.a.createElement("p",null,"Multivariate Test 3 Rendered")),react_default.a.createElement(FeatureCase_default.a,{condition:"multivariate-test-4",allowBreak:!0},react_default.a.createElement("p",null,"Multivariate Test 4 Rendered")),react_default.a.createElement(FeatureDefault_default.a,null,react_default.a.createElement("p",null,"If no conditions are met then render the default"))));var basicFeatureFlag=addSourceDecorator(function(){return _ref},{__STORY__:__STORY__,__ADDS_MAP__:__ADDS_MAP__,__MAIN_FILE_LOCATION__:__MAIN_FILE_LOCATION__,__MODULE_DEPENDENCIES__:__MODULE_DEPENDENCIES__,__LOCAL_DEPENDENCIES__:__LOCAL_DEPENDENCIES__,__SOURCE_PREFIX__:__SOURCE_PREFIX__,__IDS_TO_FRAMEWORKS__:__IDS_TO_FRAMEWORKS__});

/***/ })

},[[429,1,2]]]);
//# sourceMappingURL=main.63e98d902263e0adebce.bundle.js.map