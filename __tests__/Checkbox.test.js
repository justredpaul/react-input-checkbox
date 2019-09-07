import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { Checkbox } from '../src/Checkbox';

describe('Checkbox', () => {
  // Arrange
  it('should render checkbox', () => {
    const { container } = render(<Checkbox value={true} onChange={() => {}}>Test</Checkbox>);

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render checkbox label from children', () => {
    const { container, getByText } = render(<Checkbox value={true} onChange={() => {}}>Some text for label</Checkbox>);

    expect(getByText('Some text for label')).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render checkbox image if theme provided', () => {
    const { container } = render(<Checkbox theme="test-checkbox" value={true} onChange={() => {}}>Label</Checkbox>);

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render class names if theme provided', () => {
    const { container } = render(<Checkbox theme="test-checkbox" value={true} onChange={() => {}}>Label</Checkbox>);

    expect(container.firstChild).toMatchSnapshot();
  });
});
