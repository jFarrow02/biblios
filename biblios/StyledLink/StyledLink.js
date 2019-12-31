"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=void 0;var _react=_interopRequireDefault(require("react"));var _propTypes=_interopRequireDefault(require("prop-types"));var _styledComponents=_interopRequireDefault(require("styled-components"));var _styles=_interopRequireDefault(require("../styles"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}var LinkForeground=_styledComponents["default"].div.withConfig({displayName:"StyledLink__LinkForeground",componentId:"sc-1jd04dg-0"})(["position:absolute;top:0;left:0;opacity:0;padding-top:10px;padding-bottom:10px;padding-left:20px;width:0;transition:background-color 500ms ease-in-out,width 500ms ease-in-out,opacity 100ms ease-in-out;:hover{background-color:",";width:","px;opacity:1;}a{font-size:18px;}a:link{color:black;}"],function(props){return props.newBgColor?props.newBgColor:_styles["default"].gray08},function(props){return props.width});var LinkContent=_styledComponents["default"].div.withConfig({displayName:"StyledLink__LinkContent",componentId:"sc-1jd04dg-1"})(["background-color:transparent;color:black;text-decoration:underline;font-size:18px;:hover{cursor:pointer;}"]);var StyledLink=function StyledLink(props){var Link=_styledComponents["default"].div.withConfig({displayName:"StyledLink__Link",componentId:"sc-1jd04dg-2"})(["position:relative;background-color:",";width:","px;color:",";padding-top:10px;padding-bottom:10px;padding-left:20px;"],function(props){return props.initBgColor?props.initBgColor:_styles["default"].gray01},props.width,props.color);return _react["default"].createElement(Link,null,_react["default"].createElement(LinkForeground,{width:props.width},_react["default"].createElement("a",{href:props.destination},props.content)),_react["default"].createElement(LinkContent,null,props.content))};var _default=StyledLink;exports["default"]=_default;StyledLink.propTypes={color:_propTypes["default"].string,content:_propTypes["default"].oneOfType([_propTypes["default"].element,_propTypes["default"].string]),destination:_propTypes["default"].string,height:_propTypes["default"].number,width:_propTypes["default"].number};StyledLink.defaultProps={color:"#cccccc",content:"Link",destination:"#",height:125,width:250};