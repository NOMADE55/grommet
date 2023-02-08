import React from 'react';
import { Box, Data, DataFilter, Notification } from 'grommet';
import { DataFilters } from '../DataFilters';
import { DATA } from '../../DataTable/stories/data';
export var Layer = function Layer() {
  return (
    /*#__PURE__*/
    // Uncomment <Grommet> lines when using outside of storybook
    // <Grommet theme={...}>
    React.createElement(Box, {
      align: "center",
      justify: "start",
      pad: "large",
      gap: "medium"
    }, /*#__PURE__*/React.createElement(Notification, {
      status: "info",
      message: "Data is in 'beta'. The API surface is subject to change."
    }), /*#__PURE__*/React.createElement(Data, {
      data: DATA
    }, /*#__PURE__*/React.createElement(DataFilters, {
      layer: true
    }, /*#__PURE__*/React.createElement(DataFilter, {
      property: "location"
    }))))
    // </Grommet>
  );
};

Layer.args = {
  full: true
};
export default {
  title: 'Data/DataFilters/Layer'
};