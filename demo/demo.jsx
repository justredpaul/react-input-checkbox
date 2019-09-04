import React from 'react';
import Prism from 'prismjs';
import ReactDOM from 'react-dom';
import './prism.css';

import { Checkbox } from '../lib/react-input-checkbox';

const App = () => (
  <main>
    <h1>React Input Checkbox Demo</h1>

    <section>
      <h2>Different states – no style</h2>

      <div className="states">
        <h3>Options</h3>
        <Checkbox>Option #1</Checkbox>
        <Checkbox disabled>Option #2</Checkbox>
        <Checkbox value={true}>Option #3</Checkbox>
        <Checkbox value={true} disabled>Option #4</Checkbox>
      </div>

      <article className="code">
        <h3>Code &mdash; JSX</h3>
        <pre>
          <code className="language-jsx">
            {
              `
  <Checkbox>Option #1</Checkbox>
  <Checkbox disabled>Option #2</Checkbox>
  <Checkbox value={true}>Option #3</Checkbox>
  <Checkbox value={true} disabled>Option #4</Checkbox>
              `
            }
          </code>
        </pre>
      </article>
    </section>

    <section>
      <h2>Different states – themed</h2>

      <div className="states">
        <h3>Options</h3>
        <Checkbox theme="fancy-checkbox">Option #1</Checkbox>
        <Checkbox theme="fancy-checkbox" disabled>Option #2</Checkbox>
        <Checkbox theme="fancy-checkbox" value={true}>Option #3</Checkbox>
        <Checkbox theme="fancy-checkbox" value={true} disabled>Option #4</Checkbox>
        <Checkbox theme="fancy-checkbox" indeterminate>Option #5</Checkbox>
        <Checkbox theme="fancy-checkbox" indeterminate disabled>Option #6</Checkbox>
      </div>

      <article className="code">
        <h3>Code &mdash; JSX</h3>
        <pre>
          <code className="language-jsx">
            {
              `
  <Checkbox theme="fancy-checkbox">Option #1</Checkbox>
  <Checkbox theme="fancy-checkbox" disabled>Option #2</Checkbox>
  <Checkbox theme="fancy-checkbox" value={true}>Option #3</Checkbox>
  <Checkbox theme="fancy-checkbox" value={true} disabled>Option #4</Checkbox>
  <Checkbox theme="fancy-checkbox" indeterminate>Option #5</Checkbox>
  <Checkbox theme="fancy-checkbox" indeterminate disabled>Option #6</Checkbox>
              `
            }
          </code>
        </pre>
      </article>
      <article className="code">
        <h3>Code &mdash; CSS</h3>
        <pre>
          <code className="language-css">
            {
              `
.fancy-checkbox {
  padding-left: 40px;
  margin-bottom: 10px;

  font-family: "Comic Sans MS", sans-serif;
}
.fancy-checkbox__image {
  width: 35px;
  height: 35px;

  margin-left: -40px;

  background: url('data:image/png;base64,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') no-repeat 0 0;
}
.fancy-checkbox__input:focus + .fancy-checkbox__image {
  background-position-x: -40px;
}
.fancy-checkbox__input:disabled + .fancy-checkbox__image {
  background-position-x: -80px;
}
.fancy-checkbox__input:checked + .fancy-checkbox__image {
  background-position-x: -120px;
}
.fancy-checkbox__input:checked:focus + .fancy-checkbox__image {
  background-position-x: -160px;
}
.fancy-checkbox__input:checked:disabled + .fancy-checkbox__image {
  background-position-x: -200px;
}
.fancy-checkbox__input_indeterminate + .fancy-checkbox__image {
  background-position-x: -240px;
}
.fancy-checkbox__input_indeterminate:focus + .fancy-checkbox__image {
  background-position-x: -280px;
}
.fancy-checkbox__input_indeterminate:disabled + .fancy-checkbox__image {
  background-position-x: -320px;
}

.fancy-checkbox__label {
  line-height: 35px;
}`
            }
          </code>
        </pre>
      </article>
    </section>

    <section>
      <h2>Different states – Bootstrap theme</h2>

      <div className="states">
        <h3>Options</h3>
        <Checkbox theme="bootstrap-checkbox">Option #1</Checkbox>
        <Checkbox theme="bootstrap-checkbox" disabled>Option #2</Checkbox>
        <Checkbox theme="bootstrap-checkbox" value={true}>Option #3</Checkbox>
        <Checkbox theme="bootstrap-checkbox" value={true} disabled>Option #4</Checkbox>
        <Checkbox theme="bootstrap-checkbox" indeterminate>Option #5</Checkbox>
        <Checkbox theme="bootstrap-checkbox" indeterminate disabled>Option #6</Checkbox>
      </div>

      <article className="code">
        <h3>Code &mdash; JSX</h3>

        <pre>
          <code className="language-jsx">
            {
              `
  <Checkbox theme="bootstrap-checkbox">Option #1</Checkbox>
  <Checkbox theme="bootstrap-checkbox" disabled>Option #2</Checkbox>
  <Checkbox theme="bootstrap-checkbox" value={true}>Option #3</Checkbox>
  <Checkbox theme="bootstrap-checkbox" value={true} disabled>Option #4</Checkbox>
  <Checkbox theme="bootstrap-checkbox" indeterminate>Option #5</Checkbox>
  <Checkbox theme="bootstrap-checkbox" indeterminate disabled>Option #6</Checkbox>
              `
            }
          </code>
        </pre>
      </article>

      <article className="code">
        <h3>Code &mdash; CSS</h3>
        <pre>
          <code className="language-css">
            {
              `
.bootstrap-checkbox {
  padding-left: 1.5rem;
  margin-bottom: 1em;
}

.bootstrap-checkbox__image {
  margin-left: -1.5rem;

  border: #adb5bd solid 1px;
  border-radius: .25rem;

  background-color: #fff;

  transition: background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
}
.bootstrap-checkbox__input:checked + .bootstrap-checkbox__image {
  border-color: #007bff;
  background: #007bff url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA4IDgnPjxwYXRoIGZpbGw9JyNmZmYnIGQ9J002LjU2NC43NWwtMy41OSAzLjYxMi0xLjUzOC0xLjU1TDAgNC4yNiAyLjk3NCA3LjI1IDggMi4xOTN6Jy8+PC9zdmc+) no-repeat 50%/50% 50%;
}
.bootstrap-checkbox__input_indeterminate + .bootstrap-checkbox__image {
  border-color: #007bff;
  background: #007bff url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 4'%3e%3cpath stroke='%23fff' d='M0 2h4'/%3e%3c/svg%3e") no-repeat 50%/50% 50%;
}
.bootstrap-checkbox__input:disabled + .bootstrap-checkbox__image {
  background-color: #e9ecef;
}
.bootstrap-checkbox__input:checked:disabled + .bootstrap-checkbox__image,
.bootstrap-checkbox__input_indeterminate:disabled + .bootstrap-checkbox__image {
  background-color: rgba(0,123,255,.5);
}
.bootstrap-checkbox__input:focus + .bootstrap-checkbox__image {
  box-shadow: 0 0 0 0.2rem rgba(0,123,255,.25);
}

.bootstrap-checkbox__label {
  vertical-align: middle;
}`
            }
          </code>
        </pre>
      </article>
    </section>
  </main>
);

ReactDOM.render(
  <App />,
  document.getElementById('demo-app'),
);
