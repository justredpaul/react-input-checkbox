import * as React from 'react';

export interface CheckboxProps {
  children: React.ReactNode;
  disabled?: boolean;
  indeterminate?: boolean;
  modification?: string;
  onChange: (event: React.SyntheticEvent) => void;
  theme?: string;
  value: boolean;
}

export class Checkbox extends React.Component<CheckboxProps, any> {}
