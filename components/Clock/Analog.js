"use strict";

exports.__esModule = true;
exports.Analog = void 0;
var _react = _interopRequireWildcard(require("react"));
var _styledComponents = require("styled-components");
var _utils = require("../../utils");
var _defaultProps = require("../../default-props");
var _StyledClock = require("./StyledClock");
var _excluded = ["elements", "precision"];
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
// this will serve both minutes and hours (360 / 6)
var ANGLE_UNIT = 6;
// 360 / 12
var HOUR_ANGLE_UNIT = 30;
var getClockDimensions = function getClockDimensions(theme) {
  return {
    size: (0, _utils.parseMetricToNum)(theme.clock.analog.size.medium),
    secondSize: (0, _utils.parseMetricToNum)(theme.clock.analog.second.size),
    minuteSize: (0, _utils.parseMetricToNum)(theme.clock.analog.minute.size),
    hourSize: (0, _utils.parseMetricToNum)(theme.clock.analog.hour.size)
  };
};
var getClockState = function getClockState(_ref) {
  var hours = _ref.hours,
    minutes = _ref.minutes,
    seconds = _ref.seconds;
  var hour12 = hours > 12 ? hours - 12 : hours;
  var minuteAngle = minutes * ANGLE_UNIT;
  return {
    // offset hour angle by half of the minute angle so that it gets closer
    // to the next hour
    hourAngle: hour12 * HOUR_ANGLE_UNIT + minutes / 2,
    minuteAngle: minuteAngle,
    secondAngle: seconds * ANGLE_UNIT
  };
};
var Analog = exports.Analog = /*#__PURE__*/(0, _react.forwardRef)(function (_ref2, ref) {
  var elements = _ref2.elements,
    precision = _ref2.precision,
    rest = _objectWithoutPropertiesLoose(_ref2, _excluded);
  var theme = (0, _react.useContext)(_styledComponents.ThemeContext) || _defaultProps.defaultProps.theme;
  var _useMemo = (0, _react.useMemo)(function () {
      return getClockState(elements);
    }, [elements]),
    hourAngle = _useMemo.hourAngle,
    minuteAngle = _useMemo.minuteAngle,
    secondAngle = _useMemo.secondAngle;
  var _useMemo2 = (0, _react.useMemo)(function () {
      return getClockDimensions(theme);
    }, [theme]),
    size = _useMemo2.size,
    secondSize = _useMemo2.secondSize,
    minuteSize = _useMemo2.minuteSize,
    hourSize = _useMemo2.hourSize;
  var halfSize = size / 2;
  var secondHand;
  if (precision === 'seconds') {
    secondHand = /*#__PURE__*/_react["default"].createElement(_StyledClock.StyledSecond, {
      x1: halfSize,
      y1: halfSize,
      x2: halfSize,
      y2: secondSize,
      stroke: "#000000",
      strokeLinecap: theme.clock.analog.second.shape,
      style: {
        transform: "rotate(" + secondAngle + "deg)",
        transformOrigin: halfSize + "px " + halfSize + "px"
      }
    });
  }
  var minuteHand;
  if (precision === 'seconds' || precision === 'minutes') {
    minuteHand = /*#__PURE__*/_react["default"].createElement(_StyledClock.StyledMinute, {
      x1: halfSize,
      y1: halfSize,
      x2: halfSize,
      y2: minuteSize,
      stroke: "#000000",
      strokeLinecap: theme.clock.analog.minute.shape,
      style: {
        transform: "rotate(" + minuteAngle + "deg)",
        transformOrigin: halfSize + "px " + halfSize + "px"
      }
    });
  }
  return /*#__PURE__*/_react["default"].createElement(_StyledClock.StyledAnalog, _extends({
    ref: ref,
    version: "1.1",
    width: size,
    height: size,
    preserveAspectRatio: "xMidYMid meet",
    viewBox: "0 0 " + size + " " + size
  }, rest), secondHand, minuteHand, /*#__PURE__*/_react["default"].createElement(_StyledClock.StyledHour, {
    x1: halfSize,
    y1: halfSize,
    x2: halfSize,
    y2: hourSize,
    stroke: "#000000",
    strokeLinecap: theme.clock.analog.hour.shape,
    style: {
      transform: "rotate(" + hourAngle + "deg)",
      transformOrigin: halfSize + "px " + halfSize + "px"
    }
  }));
});
Analog.displayName = 'Analog';