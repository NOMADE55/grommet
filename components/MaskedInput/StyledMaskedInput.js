"use strict";

exports.__esModule = true;
exports.StyledMaskedInputContainer = exports.StyledMaskedInput = exports.StyledIcon = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _utils = require("../../utils");
var _styles = require("../../utils/styles");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var StyledMaskedInput = exports.StyledMaskedInput = _styledComponents["default"].input.withConfig(_utils.styledComponentsConfig).withConfig({
  displayName: "StyledMaskedInput",
  componentId: "sc-99vkfa-0"
})(["", " ", " ", " ", " ", " ", ";"], _utils.inputStyle, function (props) {
  return props.plain && _utils.plainInputStyle;
}, function (props) {
  return props.icon && _styles.inputPadForIcon;
}, function (props) {
  return props.disabled && (0, _utils.disabledStyle)(props.theme.maskedInput.disabled && props.theme.maskedInput.disabled.opacity);
}, function (props) {
  return props.textAlign && _utils.textAlignStyle;
}, function (props) {
  return props.theme.maskedInput && props.theme.maskedInput.extend;
});
var StyledMaskedInputContainer = exports.StyledMaskedInputContainer = _styledComponents["default"].div.withConfig(_utils.styledComponentsConfig).withConfig({
  displayName: "StyledMaskedInput__StyledMaskedInputContainer",
  componentId: "sc-99vkfa-1"
})(["position:relative;width:100%;", ";"], function (props) {
  return props.theme.maskedInput && props.theme.maskedInput.container && props.theme.maskedInput.container.extend;
});
var StyledIcon = exports.StyledIcon = _styledComponents["default"].div.withConfig(_utils.styledComponentsConfig).withConfig({
  displayName: "StyledMaskedInput__StyledIcon",
  componentId: "sc-99vkfa-2"
})(["position:absolute;display:flex;justify:center;top:50%;transform:translateY(-50%);pointer-events:none;", ""], function (props) {
  return props.reverse ? "right: " + (0, _utils.getInputPadBySide)(props, 'right') + ";" : "left: " + (0, _utils.getInputPadBySide)(props, 'left') + ";";
});