import React from 'react';
import * as ReactDOM from 'react-dom';

import { StatesDemonstration } from './StatesDemonstration';
import { Playground } from './Playground';

const AVAILABLE_THEMES = [
  'fancy-checkbox',
  'bootstrap-checkbox',
  'material-checkbox',
];

const App = () => {
  const [theme, setTheme] = React.useState(AVAILABLE_THEMES[0]);

  return (
    <React.Fragment>
      <header>
        <h1>React Input Checkbox Demo</h1>

        <label>
          Theme:
          <select value={theme} onChange={({ target: { value } }) => setTheme(value)}>
            {AVAILABLE_THEMES.map(theme => (
              <option value={theme}>{theme}</option>
            ))}
          </select>
        </label>
      </header>
      <main>
        <StatesDemonstration theme={theme} />
        <Playground theme={theme} />
      </main>
    </React.Fragment>
  );
};

ReactDOM.render(
  <App />,
  document.getElementById('demo-app'),
);
