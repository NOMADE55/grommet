"use strict";

exports.__esModule = true;
exports["default"] = exports.Sizes = void 0;
var _react = _interopRequireDefault(require("react"));
var _grommet = require("grommet");
var _grommetIcons = require("grommet-icons");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var Sizes = exports.Sizes = function Sizes() {
  return /*#__PURE__*/_react["default"].createElement(_grommet.Box, null, /*#__PURE__*/_react["default"].createElement(_grommet.Box, {
    direction: "row"
  }, /*#__PURE__*/_react["default"].createElement(_grommet.Box, {
    align: "start",
    pad: "large",
    gap: "large"
  }, /*#__PURE__*/_react["default"].createElement(_grommet.Button, {
    size: "small",
    label: "Small"
  }), /*#__PURE__*/_react["default"].createElement(_grommet.Button, {
    size: "medium",
    label: "Medium"
  }), /*#__PURE__*/_react["default"].createElement(_grommet.Button, {
    label: "Default"
  }), /*#__PURE__*/_react["default"].createElement(_grommet.Button, {
    size: "large",
    label: "Large"
  })), /*#__PURE__*/_react["default"].createElement(_grommet.Box, {
    align: "start",
    pad: "large",
    gap: "large"
  }, /*#__PURE__*/_react["default"].createElement(_grommet.Button, {
    primary: true,
    size: "small",
    label: "Small"
  }), /*#__PURE__*/_react["default"].createElement(_grommet.Button, {
    primary: true,
    size: "medium",
    label: "Medium"
  }), /*#__PURE__*/_react["default"].createElement(_grommet.Button, {
    primary: true,
    label: "Default"
  }), /*#__PURE__*/_react["default"].createElement(_grommet.Button, {
    primary: true,
    size: "large",
    label: "Large"
  })), /*#__PURE__*/_react["default"].createElement(_grommet.Box, {
    align: "start",
    pad: "large",
    gap: "large"
  }, /*#__PURE__*/_react["default"].createElement(_grommet.Button, {
    size: "small",
    label: "Small",
    icon: /*#__PURE__*/_react["default"].createElement(_grommetIcons.Next, null),
    reverse: true
  }), /*#__PURE__*/_react["default"].createElement(_grommet.Button, {
    size: "medium",
    label: "Medium",
    icon: /*#__PURE__*/_react["default"].createElement(_grommetIcons.Next, null),
    reverse: true
  }), /*#__PURE__*/_react["default"].createElement(_grommet.Button, {
    label: "Default",
    icon: /*#__PURE__*/_react["default"].createElement(_grommetIcons.Next, null),
    reverse: true
  }), /*#__PURE__*/_react["default"].createElement(_grommet.Button, {
    size: "large",
    label: "Large",
    icon: /*#__PURE__*/_react["default"].createElement(_grommetIcons.Next, null),
    reverse: true
  })), /*#__PURE__*/_react["default"].createElement(_grommet.Box, {
    align: "start",
    pad: "large",
    gap: "large"
  }, /*#__PURE__*/_react["default"].createElement(_grommet.Button, {
    size: "small",
    icon: /*#__PURE__*/_react["default"].createElement(_grommetIcons.Add, null),
    primary: true
  }), /*#__PURE__*/_react["default"].createElement(_grommet.Button, {
    size: "medium",
    icon: /*#__PURE__*/_react["default"].createElement(_grommetIcons.Add, null),
    primary: true
  }), /*#__PURE__*/_react["default"].createElement(_grommet.Button, {
    icon: /*#__PURE__*/_react["default"].createElement(_grommetIcons.Add, null),
    primary: true
  }), /*#__PURE__*/_react["default"].createElement(_grommet.Button, {
    size: "large",
    icon: /*#__PURE__*/_react["default"].createElement(_grommetIcons.Add, null),
    primary: true
  }))));
};
var _default = exports["default"] = {
  title: 'Controls/Button/Sizes'
};