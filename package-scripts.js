const npsUtils = require('nps-utils');
const series = npsUtils.series;
const rimraf = npsUtils.rimraf;
const concurrent = npsUtils.concurrent;

module.exports = {
  scripts: {
    build: {
      description: 'cleanup and build',
      default: series(
        rimraf('dist'),
        rimraf('lib'),
        concurrent.nps('build.rollup', 'build.test', 'build.size')
      ),
      rollup: 'rollup --config',
      test: 'npm test',
      size: 'npm size',
    }
  }
};
