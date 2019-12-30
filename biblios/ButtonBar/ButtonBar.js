"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=void 0;var _react=_interopRequireDefault(require("react"));var _styledComponents=_interopRequireDefault(require("styled-components"));var _propTypes=_interopRequireDefault(require("prop-types"));var _styles=_interopRequireDefault(require("../styles"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}var Button=_styledComponents["default"].button.withConfig({displayName:"ButtonBar__Button",componentId:"sc-7ysp4e-0"})(["display:inline;border:none;background-color:",";color:",";font-size:18px;padding:5px 25px;cursor:pointer;:hover{background-color:",";}"],function(props){return props.backgroundColor?props.backgroundColor:_styles["default"].gray05},_styles["default"].white,function(props){return props.hoverBackground?props.hoverBackground:_styles["default"].gray35});var ButtonBar=function ButtonBar(props){var backgroundColor=props.backgroundColor,hoverBackground=props.hoverBackground,color=props.color,content=props.content;return _react["default"].createElement("div",null,content.map(function(item,idx){return _react["default"].createElement(Button,{color:color,backgroundColor:backgroundColor,hoverBackground:hoverBackground,key:idx,onClick:function onClick(event){item.clickHandler(event)}},item.content)}))};var _default=ButtonBar;exports["default"]=_default;ButtonBar.propTypes={backgroundColor:_propTypes["default"].string,color:_propTypes["default"].string,content:_propTypes["default"].arrayOf(_propTypes["default"].oneOfType([_propTypes["default"].element,_propTypes["default"].object])),hoverBackground:_propTypes["default"].string,onClick:_propTypes["default"].func};ButtonBar.defaultProps={backgroundColor:null,color:null,content:[],hoverBackground:null,onClick:null};