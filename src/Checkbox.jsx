import React from 'react';
import * as PropTypes from 'prop-types';

import { classConcat } from './classConcat';

// import './style.css';

export const Checkbox = props => (
  <label className={classConcat({
    'Checkbox_themed': props.theme,
    [props.theme]: props.theme,
    [props.modification]: props.modification,
  })} onClick={() => setTimeout(() => {
    document.activeElement.blur()
  }, 0)}>
    <input type="checkbox"
      className={classConcat({
        'Checkbox__input_themed': props.theme,
        'Checkbox__input_themed_indeterminate': props.indeterminate,
        [`${props.theme}__input`]: props.theme,
        [`${props.theme}__input_indeterminate`]: props.indeterminate,
        [props.modification]: props.modification,
      })}
      disabled={props.disabled}
      checked={props.value}
      onChange={props.onChange} />
    {props.theme && (
      <span className={classConcat({
        'Checkbox__image_themed': true,
        [`${props.theme}__image`]: true,
        [props.modification]: props.modification,
      })} />
    )}
    <span className={classConcat({
      [`${props.theme}__label`]: props.theme,
      [props.modification]: props.modification,
    })}>{props.children}</span>
  </label>
);

Checkbox.propTypes = {
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  indeterminate: PropTypes.bool,
  modification: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  theme: PropTypes.string,
  value: PropTypes.bool.isRequired,
};

Checkbox.defaultProps = {
  disabled: false,
  indeterminate: false,
  modification: null,
  theme: null,
};
