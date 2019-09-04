import * as React from 'react';

export interface CheckboxProps {
  children: React.ReactNode;
  disabled?: boolean;
  indeterminate?: boolean;
  onChange: (event: React.SyntheticEvent) => void;
  theme?: string;
  value: boolean;
}

export class Checkbox extends React.Component<CheckboxProps, any> {}
