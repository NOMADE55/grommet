"use strict";

exports.__esModule = true;
exports["default"] = exports.SelectMultipleLimited = void 0;
var _react = _interopRequireWildcard(require("react"));
var _grommet = require("grommet");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var defaultOptions = ['Apple', 'Orange', 'Banana', 'Grape', 'Melon', 'Strawberry', 'Kiwi', 'Mango', 'Raspberry', 'Rhubarb'];
var SelectMultipleLimited = exports.SelectMultipleLimited = function SelectMultipleLimited() {
  var _useState = (0, _react.useState)([]),
    valueMultiple = _useState[0],
    setValueMultiple = _useState[1];
  return (
    /*#__PURE__*/
    // Uncomment <Grommet> lines when using outside of storybook
    // <Grommet theme={...}>
    _react["default"].createElement(_grommet.Box, {
      fill: true,
      align: "center",
      pad: "large",
      gap: "large"
    }, /*#__PURE__*/_react["default"].createElement(_grommet.Text, null, "SelectMultiple Limited"), /*#__PURE__*/_react["default"].createElement(_grommet.SelectMultiple, {
      limit: 5,
      help: /*#__PURE__*/_react["default"].createElement(_grommet.Box, {
        direction: "row",
        justify: "between",
        flex: false,
        pad: {
          horizontal: 'xsmall',
          bottom: 'xsmall'
        }
      }, /*#__PURE__*/_react["default"].createElement(_grommet.Text, {
        size: "small"
      }, "Select up to 5")),
      value: valueMultiple,
      placeholder: "Select",
      options: defaultOptions,
      onChange: function onChange(_ref) {
        var value = _ref.value;
        setValueMultiple(value);
      }
    }))
    // </Grommet>
  );
};

SelectMultipleLimited.parameters = {
  chromatic: {
    disable: true
  }
};
SelectMultipleLimited.args = {
  full: true
};
SelectMultipleLimited.storyName = 'Limited';
var _default = exports["default"] = {
  title: 'Input/SelectMultiple/Limited'
};