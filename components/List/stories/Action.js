"use strict";

exports.__esModule = true;
exports["default"] = exports.Action = void 0;
var _react = _interopRequireDefault(require("react"));
var _grommet = require("grommet");
var _grommetIcons = require("grommet-icons");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var data = [];
for (var i = 0; i < 40; i += 1) {
  data.push({
    entry: "entry-" + (i + 1)
  });
}
var Action = exports.Action = function Action() {
  return /*#__PURE__*/_react["default"].createElement(_grommet.Box, {
    pad: "large"
  }, /*#__PURE__*/_react["default"].createElement(_grommet.List, {
    data: data.slice(0, 10),
    pad: {
      left: 'small',
      right: 'none'
    },
    action: function action(item, index) {
      return /*#__PURE__*/_react["default"].createElement(_grommet.Menu, {
        key: index,
        icon: /*#__PURE__*/_react["default"].createElement(_grommetIcons.More, null),
        hoverIndicator: true,
        items: [{
          label: 'one'
        }]
      });
    }
  }));
};
var _default = exports["default"] = {
  title: 'Visualizations/List/Action'
};