import React from 'react';

import { classConcat } from './classConcat';

import './style.css';

export const Checkbox = props => (
  <label className={classConcat({
    'Checkbox_themed': props.theme,
    [props.theme]: props.theme
  })}>
    <input type="checkbox"
      className={classConcat({
        'Checkbox__input_themed': props.theme,
        'Checkbox__input_themed_indeterminate': props.indeterminate,
        [`${props.theme}__input`]: props.theme,
        [`${props.theme}__input_indeterminate`]: props.indeterminate
      })}
      disabled={props.disabled}
      checked={props.value}
      onChange={props.onChange} />
    {props.theme && (
      <span className={classConcat([
        'Checkbox__image_themed',
        `${props.theme}__image`
      ])} />
    )}
    <span className={classConcat({
      [`${props.theme}__label`]: props.theme
    })}>{props.children}</span>
  </label>
);
