"use strict";

exports.__esModule = true;
exports["default"] = exports.Drop = void 0;
var _react = _interopRequireDefault(require("react"));
var _grommet = require("grommet");
var _DataSearch = require("../DataSearch");
var _data = require("../../DataTable/stories/data");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var Drop = exports.Drop = function Drop() {
  return (
    /*#__PURE__*/
    // Uncomment <Grommet> lines when using outside of storybook
    // <Grommet theme={...}>
    _react["default"].createElement(_grommet.Grid, {
      pad: "large",
      columns: ['large'],
      justifyContent: "center"
    }, /*#__PURE__*/_react["default"].createElement(_grommet.Notification, {
      status: "info",
      message: "Data is in 'beta'. The API surface is subject to change."
    }), /*#__PURE__*/_react["default"].createElement(_grommet.Paragraph, {
      color: "text-weak"
    }, "Note: Results are filtered as you type, checking all fields."), /*#__PURE__*/_react["default"].createElement(_grommet.Data, {
      data: _data.DATA,
      updateOn: "change"
    }, /*#__PURE__*/_react["default"].createElement(_DataSearch.DataSearch, {
      drop: true
    }), /*#__PURE__*/_react["default"].createElement(_grommet.DataSummary, null), /*#__PURE__*/_react["default"].createElement(_grommet.DataTable, {
      columns: _data.columns
    })))
    // </Grommet>
  );
};

Drop.args = {
  full: true
};
var _default = exports["default"] = {
  title: 'Data/DataSearch/Drop'
};