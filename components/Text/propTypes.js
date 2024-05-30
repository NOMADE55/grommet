"use strict";

exports.__esModule = true;
exports.TextPropTypes = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
var _generalPropTypes = require("../../utils/general-prop-types");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var PropType = {};
if (process.env.NODE_ENV !== 'production') {
  PropType = _extends({}, _generalPropTypes.genericProps, {
    color: _generalPropTypes.colorPropType,
    margin: _propTypes["default"].oneOfType([_propTypes["default"].oneOf(['none'].concat(_generalPropTypes.MARGIN_SIZES)), _propTypes["default"].shape({
      bottom: _propTypes["default"].oneOfType([_propTypes["default"].oneOf(_generalPropTypes.MARGIN_SIZES), _propTypes["default"].string]),
      end: _propTypes["default"].oneOfType([_propTypes["default"].oneOf(_generalPropTypes.MARGIN_SIZES), _propTypes["default"].string]),
      horizontal: _propTypes["default"].oneOfType([_propTypes["default"].oneOf(_generalPropTypes.MARGIN_SIZES), _propTypes["default"].string]),
      left: _propTypes["default"].oneOfType([_propTypes["default"].oneOf(_generalPropTypes.MARGIN_SIZES), _propTypes["default"].string]),
      right: _propTypes["default"].oneOfType([_propTypes["default"].oneOf(_generalPropTypes.MARGIN_SIZES), _propTypes["default"].string]),
      start: _propTypes["default"].oneOfType([_propTypes["default"].oneOf(_generalPropTypes.MARGIN_SIZES), _propTypes["default"].string]),
      top: _propTypes["default"].oneOfType([_propTypes["default"].oneOf(_generalPropTypes.MARGIN_SIZES), _propTypes["default"].string]),
      vertical: _propTypes["default"].oneOfType([_propTypes["default"].oneOf(_generalPropTypes.MARGIN_SIZES), _propTypes["default"].string])
    }), _propTypes["default"].string]),
    size: _propTypes["default"].oneOfType([_propTypes["default"].oneOf(['xsmall', 'small', 'medium', 'large', 'xlarge', 'xxlarge', '2xl', '3xl', '4xl', '5xl', '6xl']), _propTypes["default"].string]),
    skeleton: _generalPropTypes.skeletonPropType,
    tag: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].func]),
    as: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].func, _propTypes["default"].element]),
    textAlign: _propTypes["default"].oneOf(['start', 'center', 'end', 'justify']),
    tip: _propTypes["default"].oneOfType([_propTypes["default"].shape({
      content: _propTypes["default"].oneOfType([_propTypes["default"].node, _propTypes["default"].string]),
      dropProps: _propTypes["default"].shape({}),
      plain: _propTypes["default"].bool
    }), _propTypes["default"].string]),
    truncate: _propTypes["default"].oneOfType([_propTypes["default"].bool, _propTypes["default"].oneOf(['tip'])]),
    weight: _propTypes["default"].oneOfType([_propTypes["default"].oneOf(['normal', 'bold', 'bolder', 'lighter']), _propTypes["default"].number]),
    wordBreak: _propTypes["default"].oneOf(['normal', 'break-all', 'keep-all', 'break-word'])
  });
}
var TextPropTypes = exports.TextPropTypes = PropType;