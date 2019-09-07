const npsUtils = require('nps-utils');
const series = npsUtils.series;
const rimraf = npsUtils.rimraf;
const concurrent = npsUtils.concurrent;

module.exports = {
  scripts: {
    build: {
      description: 'cleanup and build',
      default: series(
        rimraf('lib'),
        concurrent.nps('build.rollup', 'build.test')
      ),
      rollup: 'rollup --config',
      test: 'npm test'
    }
  }
};
