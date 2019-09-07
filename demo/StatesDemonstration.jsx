import React from 'react';
import { Checkbox } from '../lib/react-input-checkbox.es';

export const StatesDemonstration = ({ theme }) => (
  <fieldset>
    <legend>
      States demonstration
    </legend>

    <Checkbox theme={theme} onChange={() => {}} value={false}>Unchecked</Checkbox>
    <Checkbox theme={theme} onChange={() => {}} disabled>Disabled</Checkbox>
    <Checkbox theme={theme} onChange={() => {}} value={true}>Checked</Checkbox>
    <Checkbox theme={theme} onChange={() => {}} value={true} disabled>Checked and disabled</Checkbox>
    <Checkbox theme={theme} onChange={() => {}} indeterminate value={false}>Indeterminate</Checkbox>
    <Checkbox theme={theme} onChange={() => {}} indeterminate disabled value={false}>Indeterminate and disabled</Checkbox>
  </fieldset>
);
