"use strict";

exports.__esModule = true;
exports["default"] = exports.Themed = void 0;
var _react = _interopRequireDefault(require("react"));
var _grommet = require("grommet");
var _utils = require("grommet/utils");
var _themes = require("grommet/themes");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var customTheme = (0, _utils.deepMerge)(_themes.grommet, {
  paragraph: {
    font: {
      family: 'Comic Sans MS'
    }
  }
});
var Themed = exports.Themed = function Themed() {
  return /*#__PURE__*/_react["default"].createElement(_grommet.Grommet, {
    theme: customTheme
  }, /*#__PURE__*/_react["default"].createElement(_grommet.Paragraph, null, "The font family for this paragraph is being defined by a custom theme."));
};
Themed.parameters = {
  chromatic: {
    disable: true
  }
};
var _default = exports["default"] = {
  title: 'Type/Paragraph/Custom Themed/Themed'
};