"use strict";

exports.__esModule = true;
exports["default"] = exports.Drop = void 0;
var _react = _interopRequireDefault(require("react"));
var _grommet = require("grommet");
var _DataFilters = require("../DataFilters");
var _data = require("../../DataTable/stories/data");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var Drop = exports.Drop = function Drop() {
  return (
    /*#__PURE__*/
    // Uncomment <Grommet> lines when using outside of storybook
    // <Grommet theme={...}>
    _react["default"].createElement(_grommet.Box, {
      align: "center",
      justify: "start",
      pad: "large",
      gap: "medium"
    }, /*#__PURE__*/_react["default"].createElement(_grommet.Notification, {
      status: "info",
      message: "Data is in 'beta'. The API surface is subject to change."
    }), /*#__PURE__*/_react["default"].createElement(_grommet.Data, {
      data: _data.DATA
    }, /*#__PURE__*/_react["default"].createElement(_DataFilters.DataFilters, {
      drop: true
    }, /*#__PURE__*/_react["default"].createElement(_grommet.DataFilter, {
      property: "location"
    }))))
    // </Grommet>
  );
};

Drop.args = {
  full: true
};
var _default = exports["default"] = {
  title: 'Data/DataFilters/Drop'
};