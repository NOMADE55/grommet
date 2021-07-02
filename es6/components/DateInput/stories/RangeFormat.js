import React from 'react';
import { Grommet, Box, DateInput } from 'grommet';
import { grommet } from 'grommet/themes';
export var RangeFormat = function RangeFormat() {
  var _React$useState = React.useState(['2020-07-31T15:24:26.256Z', '2020-08-07T15:24:26.256Z']),
      value = _React$useState[0],
      setValue = _React$useState[1];

  var onChange = function onChange(event) {
    var nextValue = event.value;
    console.log('onChange', nextValue);
    setValue(nextValue);
  };

  return /*#__PURE__*/React.createElement(Grommet, {
    theme: grommet
  }, /*#__PURE__*/React.createElement(Box, {
    align: "center",
    pad: "large"
  }, /*#__PURE__*/React.createElement(Box, {
    width: "medium"
  }, /*#__PURE__*/React.createElement(DateInput, {
    value: value,
    format: "mm/dd/yyyy-mm/dd/yyyy",
    onChange: onChange
  }))));
};
RangeFormat.storyName = 'Range format';
export default {
  title: 'Input/DateInput/Range format'
};