import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import postcss from 'rollup-plugin-postcss'
import { uglify } from 'rollup-plugin-uglify';
import { minify } from 'uglify-es';
import autoprefixer from 'autoprefixer';

const name = 'Checkbox';
const path = 'dist/react-input-checkbox';
const globals = {
  'prop-types': 'PropTypes',
  'react-dom': 'ReactDOM',
  'react': 'React',
};

const external = Object.keys(globals);
const babelOptions = production => {
  let result = {
    babelrc: true,
    plugins: [],
  };

  if (production) {
    result.plugins.push('transform-react-remove-prop-types');
  }

  return result;
};

const commonPlugins = [
  postcss({
    plugins: [autoprefixer],
    extract: true,
    minimize: true,
    sourceMap: true,
  })
];

export default [
  {
    input: 'src/Checkbox.jsx',
    output: {
      file: path + '.es.js',
      format: 'es',
    },
    external: external,
    plugins: [
      babel(babelOptions(false)),
      ...commonPlugins
    ],
  },
  {
    input: 'src/Checkbox.jsx',
    output: {
      name: name,
      file: path + '.js',
      format: 'umd',
    },
    globals: globals,
    external: external,
    plugins: [
      babel(babelOptions(false)), resolve(),
      ...commonPlugins
    ],
  },
  {
    input: 'src/Checkbox.jsx',
    output: {
      name: name,
      file: 'lib/react-input-checkbox.min.js',
      format: 'umd',
    },
    globals: globals,
    external: external,
    plugins: [
      babel(babelOptions(true)), resolve(), uglify({}, minify),
      ...commonPlugins
    ],
  },
];
