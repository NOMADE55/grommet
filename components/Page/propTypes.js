"use strict";

exports.__esModule = true;
exports.PagePropTypes = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var PropType = {};
if (process.env.NODE_ENV !== 'production') {
  PropType = {
    kind: _propTypes["default"].string
  };
}
var PagePropTypes = exports.PagePropTypes = PropType;