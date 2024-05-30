"use strict";

exports.__esModule = true;
exports["default"] = exports.Simple = void 0;
var _react = _interopRequireDefault(require("react"));
var _grommet = require("grommet");
var _excluded = ["animate", "multiple"];
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.indexOf(n) >= 0) continue; t[n] = r[n]; } return t; }
var Simple = exports.Simple = function Simple(props) {
  var animate = props.animate,
    multiple = props.multiple,
    rest = _objectWithoutPropertiesLoose(props, _excluded);
  return (
    /*#__PURE__*/
    // Uncomment <Grommet> lines when using outside of storybook
    // <Grommet theme={...}>
    _react["default"].createElement(_grommet.Box, rest, /*#__PURE__*/_react["default"].createElement(_grommet.Accordion, {
      animate: animate,
      multiple: multiple
    }, /*#__PURE__*/_react["default"].createElement(_grommet.AccordionPanel, {
      label: "Panel 1"
    }, /*#__PURE__*/_react["default"].createElement(_grommet.Box, {
      background: "light-2",
      overflow: "auto",
      height: "medium"
    }, /*#__PURE__*/_react["default"].createElement(_grommet.Box, {
      height: "large",
      flex: false
    }, "Panel 1 contents"))), /*#__PURE__*/_react["default"].createElement(_grommet.AccordionPanel, {
      label: "Panel 2"
    }, /*#__PURE__*/_react["default"].createElement(_grommet.Box, {
      background: "light-2",
      style: {
        height: '50px'
      }
    }, "Panel 2 contents")), /*#__PURE__*/_react["default"].createElement(_grommet.AccordionPanel, {
      label: "Panel 3"
    }, /*#__PURE__*/_react["default"].createElement(_grommet.Box, {
      background: "light-2",
      style: {
        height: '300px'
      }
    }, "Panel 3 contents"))))
    // </Grommet>
  );
};
var _default = exports["default"] = {
  title: 'Controls/Accordion/Simple'
};