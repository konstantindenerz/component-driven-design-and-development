(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1131:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(25),__webpack_require__(82),__webpack_require__(0);var _templateObject,_templateObject2,_templateObject3,_templateObject4,_templateObject5,_storybook_addons__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(51),_storybook_theming__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(3),_storybook_components__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(28),_storybook_api__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(31);function _taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}var PANEL_ID="".concat("adobexd","/panel"),DesignPanel=(_storybook_theming__WEBPACK_IMPORTED_MODULE_4__.jsx,function DesignPanel(){var config=Object(_storybook_api__WEBPACK_IMPORTED_MODULE_6__.useParameter)("design",null);if(config&&config.review){var url=config.review.replace("view","embed");return Object(_storybook_theming__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{css:containerStyle},Object(_storybook_theming__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{css:iframeContainerStyle},Object(_storybook_theming__WEBPACK_IMPORTED_MODULE_4__.jsx)("iframe",{css:iframeStyle,src:url,allowFullScreen:!0})),Object(_storybook_theming__WEBPACK_IMPORTED_MODULE_4__.jsx)("a",{css:linkStyle,href:config.review,target:"_blank"},"View spec"))}return Object(_storybook_theming__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{css:centerMessageStyle},"No design available, use parameter.design.review (URL) to provide design")});_storybook_addons__WEBPACK_IMPORTED_MODULE_3__.addons.register("adobexd",(function(api){_storybook_addons__WEBPACK_IMPORTED_MODULE_3__.addons.add(PANEL_ID,{type:_storybook_addons__WEBPACK_IMPORTED_MODULE_3__.types.PANEL,title:"Design",render:function render(_ref){var active=_ref.active,key=_ref.key;return Object(_storybook_theming__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_components__WEBPACK_IMPORTED_MODULE_5__.AddonPanel,{active:active,key:key},Object(_storybook_theming__WEBPACK_IMPORTED_MODULE_4__.jsx)(DesignPanel,null))}})}));var iframeStyle=Object(_storybook_theming__WEBPACK_IMPORTED_MODULE_4__.css)(_templateObject||(_templateObject=_taggedTemplateLiteral(["\n  position: relative;\n  width: 100%;\n  height: 100%;\n  border: none;\n  margin-bottom: 0;\n  z-index: 1;\n"]))),containerStyle=Object(_storybook_theming__WEBPACK_IMPORTED_MODULE_4__.css)(_templateObject2||(_templateObject2=_taggedTemplateLiteral(["\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  overflow: hidden;\n"]))),iframeContainerStyle=Object(_storybook_theming__WEBPACK_IMPORTED_MODULE_4__.css)(_templateObject3||(_templateObject3=_taggedTemplateLiteral(["\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n"]))),centerMessageStyle=Object(_storybook_theming__WEBPACK_IMPORTED_MODULE_4__.css)(_templateObject4||(_templateObject4=_taggedTemplateLiteral(["\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  display: grid;\n  place-items: center;\n"]))),linkStyle=Object(_storybook_theming__WEBPACK_IMPORTED_MODULE_4__.css)(_templateObject5||(_templateObject5=_taggedTemplateLiteral(["\n  display: grid;\n  place-items: center;\n  height: 36px;\n  left: 0;\n  bottom: 0;\n  padding: 0 20px;\n  border-top-right-radius: 4px;\n  background: linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(250, 255, 255, 0.16) 100%);\n  backdrop-filter: blur(15px) brightness(1.1);\n  z-index: 1111111;\n  position: absolute;\n  opacity: 0.4;\n  color: rgba(0, 0, 0, 0.87);\n  transition: all 0.3s ease;\n\n  :hover {\n    opacity: 1;\n    background: linear-gradient(90deg, rgba(224, 139, 62, 1) 0%, rgba(250, 0, 255, 0.16) 100%);\n    color: black;\n  }\n"])))},1132:function(module,exports,__webpack_require__){"use strict";__webpack_require__(51).addons.setConfig({refs:{}})},495:function(module,exports,__webpack_require__){__webpack_require__(496),__webpack_require__(652),__webpack_require__(1082),__webpack_require__(1084),__webpack_require__(1086),__webpack_require__(1089),__webpack_require__(1119),__webpack_require__(1124),__webpack_require__(1127),__webpack_require__(1131),module.exports=__webpack_require__(1132)},563:function(module,exports){}},[[495,1,2]]]);