"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.getType=void 0;var _colors=_interopRequireDefault(require("./colors"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}var getType=function getType(type){var bgColor;switch(type){case"caution":bgColor=_colors["default"].yellow05;break;case"alert":bgColor=_colors["default"].orange05;break;case"warning":bgColor=_colors["default"].red05;break;case"disabled":bgColor=_colors["default"].gray05;break;case"normal":default:bgColor=_colors["default"].blue05;}return bgColor};exports.getType=getType;