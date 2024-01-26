var _excluded = ["drop", "children", "clearFilters", "heading", "layer", "updateOn"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React, { Children, useContext, useEffect, useMemo, useState } from 'react';
import { Filter } from 'grommet-icons/icons/Filter';
import { Close } from 'grommet-icons/icons/Close';
import { ThemeContext } from 'styled-components';
import { Box } from '../Box';
import { Button } from '../Button';
import { DataClearFilters } from '../DataClearFilters';
import { DataFilter } from '../DataFilter';
import { DataForm } from '../Data/DataForm';
import { DropButton } from '../DropButton';
import { Header } from '../Header';
import { Heading } from '../Heading';
import { Layer } from '../Layer';
import { DataContext } from '../../contexts/DataContext';
import { MessageContext } from '../../contexts/MessageContext';
import { DataFiltersPropTypes } from './propTypes';
import { DataFiltersContext } from './DataFiltersContext';
var dropProps = {
  align: {
    top: 'bottom',
    right: 'right'
  }
};
var layerProps = {
  full: 'vertical',
  position: 'right'
};
var defaultTouched = {};
export var DataFilters = function DataFilters(_ref) {
  var drop = _ref.drop,
    children = _ref.children,
    _ref$clearFilters = _ref.clearFilters,
    clearFilters = _ref$clearFilters === void 0 ? true : _ref$clearFilters,
    heading = _ref.heading,
    layer = _ref.layer,
    updateOn = _ref.updateOn,
    rest = _objectWithoutPropertiesLoose(_ref, _excluded);
  var _useContext = useContext(DataContext),
    dataId = _useContext.id,
    messages = _useContext.messages,
    properties = _useContext.properties,
    unfilteredData = _useContext.unfilteredData,
    filtersCleared = _useContext.filtersCleared,
    setFiltersCleared = _useContext.setFiltersCleared;
  var _useContext2 = useContext(MessageContext),
    format = _useContext2.format;
  var theme = useContext(ThemeContext);
  var _useState = useState(),
    showContent = _useState[0],
    setShowContent = _useState[1];
  // special case for range selectors which always have a value.
  // when value returns to its min/max, mark it to be removed from `touched`
  // so it doesn't contribute to the badge count
  var pendingReset = React.useRef(new Set());
  // touched is a map of form field name to its value, it only has fields that
  // were changed as part of the DataForm here. This is so we can track based
  // on what's inside DataFilters as opposed to trying to track from the view
  // object, since touched is used as logic for whether to show badge or not
  var _useState2 = useState(defaultTouched),
    touched = _useState2[0],
    setTouched = _useState2[1];

  // if filters have been applied by this DataFilters, update
  // the DataContext that filters are not in a "cleared" state
  useEffect(function () {
    setFiltersCleared(!Object.keys(touched).length);
  }, [touched, setFiltersCleared]);

  // if filters have been cleared via clearFilters in DataContext,
  // reset touched to default state so badge is removed
  useEffect(function () {
    if (filtersCleared) {
      setTouched(defaultTouched);
    }
  }, [filtersCleared]);
  var controlled = useMemo(function () {
    return drop || layer;
  }, [drop, layer]);

  // generate the badge value based on touched fields that have a value.
  // only show the badge based off of what's included in this DataFilters
  // since multiple DataFilters may exist
  var badge = useMemo(function () {
    return controlled && Object.keys(touched).filter(function (k) {
      return touched[k];
    }).length || undefined;
  }, [controlled, touched]);
  var clearControl = badge && clearFilters && /*#__PURE__*/React.createElement(Box, {
    flex: false,
    margin: {
      start: 'small'
    }
  }, /*#__PURE__*/React.createElement(DataClearFilters, null));
  var content = children;
  if (Children.count(children) === 0) {
    var filtersFor;
    if (!properties && unfilteredData && unfilteredData.length)
      // build from a piece of data, ignore object values
      filtersFor = Object.keys(unfilteredData[0]).filter(function (k) {
        return typeof unfilteredData[0][k] !== 'object';
      });else if (Array.isArray(properties)) filtersFor = properties;else if (typeof properties === 'object') {
      filtersFor = Object.keys(properties).filter(function (property) {
        var _properties$property;
        return !(((_properties$property = properties[property]) == null ? void 0 : _properties$property.filter) === false);
      });
    } else filtersFor = [];
    content = filtersFor.map(function (property) {
      return /*#__PURE__*/React.createElement(DataFilter, {
        key: property,
        property: property
      });
    });
  }
  var contextValue = useMemo(function () {
    return {
      pendingReset: pendingReset
    };
  }, []);
  content = /*#__PURE__*/React.createElement(DataFiltersContext.Provider, {
    value: contextValue
  }, /*#__PURE__*/React.createElement(DataForm, _extends({
    pad: controlled ? 'medium' : undefined,
    onDone: function onDone() {
      return setShowContent(false);
    },
    onTouched: controlled ? function (currentTouched) {
      return (
        // we merge this with our prior state to handle the case
        // where the user opens and closes the drop multiple times
        // and we want to track both new changes and prior changes.
        setTouched(function (prevTouched) {
          var nextTouched = _extends({}, prevTouched, currentTouched);

          // special case for when range selector returns to its min/max
          Object.keys(nextTouched).forEach(function (key) {
            var _pendingReset$current;
            if (pendingReset != null && (_pendingReset$current = pendingReset.current) != null && _pendingReset$current.has(key)) {
              delete nextTouched[key];
              pendingReset.current["delete"](key);
            }
          });
          return nextTouched;
        })
      );
    } : undefined,
    updateOn: updateOn
  }, !controlled ? rest : {
    fill: 'vertical'
  }), layer && /*#__PURE__*/React.createElement(Header, null, /*#__PURE__*/React.createElement(Heading, {
    margin: "none",
    level: 2
  }, heading || format({
    id: 'dataFilters.heading',
    messages: messages == null ? void 0 : messages.dataFilters
  })), !controlled && clearControl, /*#__PURE__*/React.createElement(Button, {
    icon: /*#__PURE__*/React.createElement(Close, null),
    onClick: function onClick() {
      return setShowContent(undefined);
    }
  })), content));
  if (!controlled) return content;
  var tip = format({
    id: badge ? "dataFilters.openSet." + (badge === 1 ? 'singular' : 'plural') : 'dataFilters.open',
    messages: messages == null ? void 0 : messages.dataFilters,
    values: {
      number: badge
    }
  });
  var control;
  if (drop) {
    var _theme$data$button;
    control = /*#__PURE__*/React.createElement(DropButton, {
      id: dataId + "--filters-control",
      tip: tip,
      "aria-label": tip,
      kind: (_theme$data$button = theme.data.button) == null ? void 0 : _theme$data$button.kind,
      icon: /*#__PURE__*/React.createElement(Filter, null),
      dropProps: dropProps,
      dropContent: content,
      badge: badge,
      open: showContent,
      onOpen: function onOpen() {
        return setShowContent(undefined);
      },
      onClose: function onClose() {
        return setShowContent(undefined);
      }
    });
  } else if (layer) {
    var _theme$data$button2;
    control = /*#__PURE__*/React.createElement(Button, {
      id: dataId + "--filters-control",
      tip: tip,
      "aria-label": tip,
      kind: (_theme$data$button2 = theme.data.button) == null ? void 0 : _theme$data$button2.kind,
      icon: /*#__PURE__*/React.createElement(Filter, null),
      badge: badge,
      onClick: function onClick() {
        return setShowContent(true);
      }
    });
  }
  return /*#__PURE__*/React.createElement(Box, _extends({
    flex: false,
    direction: "row"
  }, rest), control, clearControl, layer && showContent && /*#__PURE__*/React.createElement(Layer, _extends({
    id: dataId + "--filters-layer"
  }, typeof layer === 'object' ? layer : layerProps, {
    onClickOutside: function onClickOutside() {
      return setShowContent(undefined);
    },
    onEsc: function onEsc() {
      return setShowContent(undefined);
    }
  }), /*#__PURE__*/React.createElement(Box, {
    width: {
      min: 'medium'
    }
  }, content)));
};
DataFilters.propTypes = DataFiltersPropTypes;