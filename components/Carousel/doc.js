"use strict";

exports.__esModule = true;
exports.themeDoc = exports.doc = void 0;

var _reactDesc = require("react-desc");

var _propTypes = require("../../utils/prop-types");

var _mixins = require("../../utils/mixins");

var _themeDocUtils = require("../../utils/themeDocUtils");

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var doc = function doc(Carousel) {
  var DocumentedCarousel = (0, _reactDesc.describe)(Carousel).availableAt((0, _mixins.getAvailableAtBadge)('Carousel', 'Media')).description("A carousel that cycles through children. Child components\n      would typically be Images. It is the caller's responsibility to ensure\n      that all children are the same size.").usage("import { Carousel } from 'grommet';\n<Carousel />").intrinsicElement('div');
  DocumentedCarousel.propTypes = _extends({}, _propTypes.genericProps, {
    fill: _reactDesc.PropTypes.bool.description("Whether to expand to fill\n      all of the available width and height in the parent container."),
    play: _reactDesc.PropTypes.number.description("If specified, the number of\n      milliseconds between automatically transitioning to the next child. It\n      will loop through all children indefinitely."),
    initialChild: _reactDesc.PropTypes.number.description("If specified, the index of\n      the first element to be shown. Defaults to 0."),
    onChild: _reactDesc.PropTypes.func.description("If specified, this function will \n      be called with the active index when the currently active carousel \n      changes."),
    controls: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.bool, _reactDesc.PropTypes.oneOf(['arrows', 'selectors'])]).description("Whether to show carousel controls and which type of controls.").defaultValue(true)
  });
  return DocumentedCarousel;
};

exports.doc = doc;

var themeDoc = _extends({
  'carousel.icons.next': {
    description: 'The icon to use for the next image navigation control.',
    type: 'element',
    defaultValue: '<Next />'
  },
  'carousel.animation.duration': {
    description: 'The duration of the Carousel animation.',
    type: 'number',
    defaultValue: 1000
  },
  'carousel.icons.previous': {
    description: 'The icon to use for the previous image navigation control.',
    type: 'element',
    defaultValue: '<Previous />'
  },
  'carousel.icons.current': {
    description: "The icon to use on the middle navigation control. \n      One icon per carousel image.",
    type: 'element',
    defaultValue: '<Next />'
  },
  'carousel.icons.color': {
    description: 'The color used for Carousel icons.',
    type: "string | { 'dark': string, 'light': string }",
    defaultValue: undefined
  },
  'carousel.disabled.icons.color': {
    description: 'The color used for disabled Carousel icons.',
    type: "string | { 'dark': string, 'light': string }",
    defaultValue: undefined
  }
}, _themeDocUtils.themeDocUtils.iconColor, _themeDocUtils.themeDocUtils.edgeStyle('The possible sizes for margin.'));

exports.themeDoc = themeDoc;