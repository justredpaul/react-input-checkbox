import React from 'react';

function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var classConcat = function classConcat(classes) {
  var type = _typeof(classes);

  if (type === "string" || type === "number") return classes || "";

  if (Array.isArray(classes) && classes.length > 0) {
    return classes.reduce(function (concated, className) {
      return className ? concated.concat("".concat(className, " ")) : concated;
    }, "");
  } else {
    return Object.keys(classes).reduce(function (concated, className) {
      return classes[className] ? concated.concat("".concat(className, " ")) : concated;
    }, "");
  }
};

var Checkbox = function Checkbox(props) {
  var _classConcat2;

  return React.createElement("label", {
    className: classConcat(_defineProperty({
      'Checkbox_themed': props.theme
    }, props.theme, props.theme))
  }, React.createElement("input", {
    type: "checkbox",
    className: classConcat((_classConcat2 = {
      'Checkbox__input_themed': props.theme,
      'Checkbox__input_themed_indeterminate': props.indeterminate
    }, _defineProperty(_classConcat2, "".concat(props.theme, "__input"), props.theme), _defineProperty(_classConcat2, "".concat(props.theme, "__input_indeterminate"), props.indeterminate), _classConcat2)),
    disabled: props.disabled,
    checked: props.value,
    onChange: props.onChange
  }), props.theme && React.createElement("span", {
    className: classConcat(['Checkbox__image_themed', "".concat(props.theme, "__image")])
  }), React.createElement("span", {
    className: classConcat(_defineProperty({}, "".concat(props.theme, "__label"), props.theme))
  }, props.children));
};

export { Checkbox };
