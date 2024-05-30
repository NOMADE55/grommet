"use strict";

exports.__esModule = true;
exports["default"] = exports.Point = void 0;
var _react = _interopRequireDefault(require("react"));
var _grommet = require("grommet");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var values = [{
  value: [10, 20]
}, {
  value: [20, 30]
}, {
  value: [30, 15]
}];
var Point = exports.Point = function Point() {
  return (
    /*#__PURE__*/
    // Uncomment <Grommet> lines when using outside of storybook
    // <Grommet theme={grommet}>
    _react["default"].createElement(_grommet.Box, {
      direction: "row-responsive",
      wrap: true,
      pad: "large"
    }, ['circle', 'square', 'diamond', 'star', 'triangle', 'triangleDown'].map(function (point) {
      return /*#__PURE__*/_react["default"].createElement(_grommet.Box, {
        key: point,
        margin: "medium"
      }, /*#__PURE__*/_react["default"].createElement(_grommet.Heading, {
        size: "small",
        textAlign: "center"
      }, point), /*#__PURE__*/_react["default"].createElement(_grommet.Chart, {
        type: "point",
        values: values,
        point: point
      }));
    }))
    // </Grommet>
  );
};
var _default = exports["default"] = {
  title: 'Visualizations/Chart/Point'
};