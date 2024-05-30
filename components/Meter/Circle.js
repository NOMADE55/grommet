"use strict";

exports.__esModule = true;
exports.Circle = void 0;
var _react = _interopRequireWildcard(require("react"));
var _styledComponents = require("styled-components");
var _defaultProps = require("../../default-props");
var _utils = require("../../utils");
var _StyledMeter = require("./StyledMeter");
var _utils2 = require("./utils");
var _excluded = ["background", "max", "round", "size", "thickness", "type", "values"],
  _excluded2 = ["color", "highlight", "label", "onHover", "value"];
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.indexOf(n) >= 0) continue; t[n] = r[n]; } return t; }
var Circle = exports.Circle = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  var background = props.background,
    max = props.max,
    round = props.round,
    size = props.size,
    thickness = props.thickness,
    type = props.type,
    values = props.values,
    rest = _objectWithoutPropertiesLoose(props, _excluded);
  var theme = (0, _react.useContext)(_styledComponents.ThemeContext);
  var width = size === 'full' ? 288 : (0, _utils.parseMetricToNum)(theme.global.size[size] || size);
  var strokeWidth = type === 'pie' ? width / 2 : (0, _utils.parseMetricToNum)(theme.global.edgeSize[thickness] || thickness);
  var centerX = width / 2;
  var centerY = width / 2;
  var radius = width / 2 - strokeWidth / 2;
  // truncate to avoid floating point arithmetic errors
  // see: https://github.com/grommet/grommet/issues/6190
  // Choose a scale factor at least 3 orders of magnitude above max
  var scalePower = Math.max(5, Math.ceil(Math.log10(max)) + 3);
  var scale = Math.pow(10, scalePower);
  var anglePer = Math.floor((type === 'semicircle' ? 180 : 360) / max * scale) / scale;
  //  (type === 'semicircle' ? 180 : 360) / max;
  var someHighlight = (values || []).some(function (v) {
    return v.highlight;
  });
  var startValue = 0;
  var startAngle = type === 'semicircle' ? 270 : 0;
  var paths = [];
  var pathCaps = [];
  (values || []).filter(function (v) {
    return v.value > 0;
  }).forEach(function (valueArg, index) {
    var color = valueArg.color,
      highlight = valueArg.highlight,
      label = valueArg.label,
      onHover = valueArg.onHover,
      value = valueArg.value,
      pathRest = _objectWithoutPropertiesLoose(valueArg, _excluded2);
    var key = "p-" + index;
    var colorName = color || (0, _utils2.defaultColor)(index, theme, values ? values.length : 0);
    var endAngle;
    if (startValue + value >= max) {
      endAngle = type === 'semicircle' ? 90 : 360;
    } else {
      endAngle = (0, _utils.translateEndAngle)(startAngle, anglePer, value);
    }
    var hoverProps;
    if (onHover) {
      hoverProps = {
        onMouseOver: function onMouseOver() {
          return onHover(true);
        },
        onMouseLeave: function onMouseLeave() {
          return onHover(false);
        }
      };
    }
    var stroke = (0, _utils2.strokeProps)(someHighlight && !highlight ? background : colorName, theme);
    if (round) {
      var d1 = (0, _utils.arcCommands)(centerX, centerY, radius, startAngle, endAngle);
      paths.unshift( /*#__PURE__*/_react["default"].createElement("path", _extends({
        key: key,
        d: d1,
        fill: "none"
      }, stroke, {
        strokeWidth: strokeWidth,
        strokeLinecap: "round"
      }, hoverProps, pathRest)));

      // To handle situations where the last values are small, redraw
      // a dot at the end. Give just a bit of angle to avoid anti-aliasing
      // leakage around the edge.
      var d2 = (0, _utils.arcCommands)(centerX, centerY, radius, endAngle - 0.5, endAngle);
      var pathCap = /*#__PURE__*/_react["default"].createElement("path", _extends({
        key: key + "-",
        d: d2,
        fill: "none"
      }, stroke, {
        strokeWidth: strokeWidth,
        strokeLinecap: "round"
      }, hoverProps, pathRest));
      // If we are on a large enough path to not need re-drawing previous
      // ones, clear the pathCaps we've collected already.
      if (endAngle - startAngle > 2 * anglePer) {
        pathCaps = [];
      }
      pathCaps.unshift(pathCap);
    } else {
      var d = (0, _utils.arcCommands)(centerX, centerY, radius, startAngle, endAngle);
      paths.push( /*#__PURE__*/_react["default"].createElement("path", _extends({
        key: key,
        d: d,
        fill: "none"
      }, stroke, {
        strokeWidth: strokeWidth,
        strokeLinecap: "butt"
      }, hoverProps, pathRest)));
    }
    startValue += value;
    startAngle = endAngle;
  });
  var track;
  if (type === 'semicircle') {
    var d1 = (0, _utils.arcCommands)(centerX, centerY, radius, 270, 90);
    track = /*#__PURE__*/_react["default"].createElement("path", _extends({
      d: d1,
      strokeWidth: strokeWidth,
      fill: "none"
    }, (0, _utils2.strokeProps)(background, theme), {
      strokeLinecap: round ? 'round' : 'square'
    }));
  } else {
    track = /*#__PURE__*/_react["default"].createElement("circle", _extends({
      cx: centerX,
      cy: centerY,
      r: radius
    }, (0, _utils2.strokeProps)(background, theme), {
      strokeWidth: strokeWidth,
      strokeLinecap: round ? 'round' : 'square',
      fill: "none"
    }));
  }
  var viewBoxHeight = type === 'semicircle' ? width / 2 : width;
  return /*#__PURE__*/_react["default"].createElement(_StyledMeter.StyledMeter, _extends({
    ref: ref,
    viewBox: "0 0 " + width + " " + viewBoxHeight,
    width: size === 'full' ? '100%' : width,
    height: size === 'full' ? '100%' : viewBoxHeight
  }, rest), track, paths, pathCaps);
});
Circle.displayName = 'Circle';
Circle.defaultProps = {};
Object.setPrototypeOf(Circle.defaultProps, _defaultProps.defaultProps);