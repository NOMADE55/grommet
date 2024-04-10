import React from 'react';
import { Box, Data, DataFilters } from 'grommet';
import { DATA } from '../../DataTable/stories/data';
export var Simple = function Simple() {
  return (
    /*#__PURE__*/
    // Uncomment <Grommet> lines when using outside of storybook
    // <Grommet theme={...}>
    React.createElement(Box, {
      align: "center",
      justify: "start",
      pad: "large",
      gap: "medium"
    }, /*#__PURE__*/React.createElement(Data, {
      data: DATA
    }, /*#__PURE__*/React.createElement(DataFilters, null)))
    // </Grommet>
  );
};
Simple.args = {
  full: true
};
export default {
  title: 'Data/DataFilters/Simple'
};